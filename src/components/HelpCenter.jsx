import React, { useState, useMemo } from 'react';

const KB_CATEGORIES = [
  {
    id: 'setup',
    title: 'Installation & Getting Started',
    badge: '🚀 Quick Start',
    items: [
      {
        q: 'How do I install Medium Trending Topics Finder from the Chrome Web Store?',
        a: 'Visit the Chrome Web Store listing, click the blue "Add to Chrome" button, and confirm the installation when prompted. Once installed, the extension icon will appear in your browser\'s extension toolbar.'
      },
      {
        q: 'How do I pin the extension to my Chrome toolbar?',
        a: 'Click the puzzle icon (🧩) in the top-right corner of Google Chrome to open your Extensions menu. Locate "Medium Trending Topics Finder" in the list and click the pushpin icon (📌) to pin it for instant 1-click access.'
      },
      {
        q: 'How do I activate the in-page analytics dashboard?',
        a: 'Simply navigate to any Medium tag page (e.g., https://medium.com/tag/artificial-intelligence) or the Medium homepage feed. The claymorphic analytics dashboard injects itself automatically at the top of the article stream.'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Overlay & Scanner Troubleshooting',
    badge: '🔧 Diagnostics',
    items: [
      {
        q: 'Why is the overlay not appearing when I open Medium?',
        a: '1. Check the URL: Ensure you are on https://medium.com/ or https://medium.com/tag/*.\n2. Page Refresh: Press Ctrl+F5 (or Cmd+Shift+R on Mac) to perform a hard refresh.\n3. Check Extensions Manager: Open chrome://extensions, verify that "Medium Trending Topics Finder" is toggled ON, and confirm it has permission to run on medium.com.\n4. Conflicting Ad-blockers: Some aggressive script blockers may pause content scripts. Try whitelisting medium.com.'
      },
      {
        q: 'Why are claps or response counts different from what Medium displays?',
        a: 'Medium abbreviates high numbers (e.g., showing "1.2K" instead of "1,248" or "320" responses). Our scanner parses the exact numeric string from the DOM elements. In addition, Medium caches user clap counts asynchronously, which may differ slightly between logged-in and incognito sessions.'
      },
      {
        q: 'How do I scan more articles on a long tag feed?',
        a: 'Medium utilizes infinite scroll loading. As you scroll down the page, our background MutationObserver automatically captures new story elements, calculates their 5× engagement scores, and re-ranks the live list dynamically. You can also click the "Rescan Page" button inside the overlay.'
      }
    ]
  },
  {
    id: 'csv',
    title: 'CSV Data Export',
    badge: '📊 Spreadsheets',
    items: [
      {
        q: 'How do I export Medium analytics to Excel, Google Sheets, or Notion?',
        a: 'Click the "Export CSV" button located on the right side of the in-page dashboard. The extension instantly compiles all scanned stories into a structured .csv file and initiates a direct download without sending any data over the internet.'
      },
      {
        q: 'What columns are included in the downloaded CSV?',
        a: 'The generated CSV contains 7 structured columns: Rank, Title, Claps, Comments, Engagement Score, Signal Tier (High Debate, Viral Claps, Rising, Active), and Canonical Story URL.'
      },
      {
        q: 'The CSV export didn\'t trigger or downloaded an empty file. What should I do?',
        a: 'Make sure at least 1 story is indexed on the active Medium page before clicking Export. Also check if your browser has blocked automatic downloads from medium.com (look for the download icon in the right side of your Chrome URL address bar).'
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Top Publications & Writers Analytics',
    badge: '🏛️ Topic Intelligence',
    items: [
      {
        q: 'How does the extension extract Top Publications and Top Writers?',
        a: 'The extension uses two live sources:\n1. Medium\'s "Who to follow" sidebar (extractWhoToFollowFromDOM): Scans verified topic badges like "Writer · 59K followers" or "Publication · 329K followers" to capture authentic follower statistics.\n2. Story Feed Aggregation (runLiveDOMExtraction): Inspects loaded article cards to count storiesInFeed, totalClaps, and totalComments per entity.\nWhen a writer or publication is found in both places, the extension automatically merges them into a hybrid badge ("Top Writer + Feed" or "Top Pub + Feed").'
      },
      {
        q: 'How are Publications and Writers ranked?',
        a: 'When sorted by Primary Score (default):\n• Top Publications: followers + (totalClaps × 10)\n• Top Writers: followers + (totalClaps × 10) + (totalComments × 50)\nYou can also sort by "Most Claps" or "Most Comments" to rank purely by feed performance.'
      },
      {
        q: 'What data is included in the CSV export for Publications and Writers?',
        a: 'Exporting from the Top Publications tab downloads: Rank, Publication, Followers, Stories in Feed, Total Claps, Total Comments, Source, and URL.\nExporting from the Top Writers tab downloads: Rank, Writer, Followers, Stories in Feed, Total Claps, Total Comments, Source, and URL.'
      }
    ]
  },
  {
    id: 'permissions',
    title: 'Privacy & Chrome Web Store Permissions',
    badge: '🛡️ Safety & Policy',
    items: [
      {
        q: 'What permissions does the extension require?',
        a: 'The extension adheres strictly to the principle of least privilege: it only requests the "storage" permission to cache your recent scans locally via chrome.storage.local. Content scripts are statically matched only to Medium tag and feed pages (https://medium.com/tag/* and https://medium.com/) to render the local analytics overlay. It does not request activeTab, host permissions, background workers, or access to any external servers.'
      },
      {
        q: 'What is the "storage" permission used for?',
        a: 'The extension uses chrome.storage.local exclusively to cache your last 10 scanned stories locally on your hard drive, allowing you to review recent insights from the toolbar popup without re-scanning. No data is ever transmitted to external servers.'
      },
      {
        q: 'Does Medium Trending Topics Finder track my browsing history or account details?',
        a: 'No. The extension operates with zero telemetry, zero cookies, zero external API endpoints, and zero analytics tracking. It runs 100% locally in your browser\'s secure sandbox.'
      }
    ]
  }
];

export default function HelpCenter({ onBackToHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCategory, setFormCategory] = useState('Bug Report');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const supportEmail = 'mrcoder701@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendDraft = (e) => {
    e.preventDefault();
    const subjectLine = `[Medium Trending Topics Finder Support - ${formCategory}] ${formSubject || 'User Inquiry'}`;
    const bodyContent = `Name: ${formName || 'User'}
User Email: ${formEmail || 'Not provided'}
Issue Category: ${formCategory}

Message:
${formMessage || 'Hello Support Team, I need assistance with the Medium Trending Topics Finder extension.'}

---
Chrome Version / OS: ${navigator.userAgent}`;

    const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  const filteredCategories = useMemo(() => {
    return KB_CATEGORIES.map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) {
        return null;
      }
      const matchedItems = cat.items.filter((item) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      });
      if (matchedItems.length === 0) return null;
      return {
        ...cat,
        items: matchedItems
      };
    }).filter(Boolean);
  }, [searchQuery, activeCategory]);

  return (
    <div className="help-center-page">
      {/* Top Breadcrumb & Return Action */}
      <div className="help-top-bar">
        <div className="container help-top-inner">
          <button
            onClick={onBackToHome}
            className="btn-clay btn-clay-secondary btn-back"
            title="Return to Main Showcase"
          >
            <span>← Back to Main Showcase</span>
          </button>

          <div className="help-breadcrumb">
            <span className="crumb-home" onClick={onBackToHome}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Help Center & Support</span>
          </div>

          <div className="help-status-pill">
            <span className="beacon-dot">
              <span className="beacon-ring"></span>
            </span>
            <span>Support Desk Active</span>
          </div>
        </div>
      </div>

      {/* Hero Section for Help Center */}
      <section className="help-hero-section">
        <div className="container help-hero-inner">
          <div className="help-hero-badges">
            <span className="badge-pill badge-mint">🛡️ Official Chrome Web Store Support URL</span>
            <span className="badge-pill badge-teal">⚡ Guaranteed 24-48h Response</span>
          </div>

          <h1 className="help-hero-title">
            How can we help you with <br />
            <span className="hero-highlight">Medium Trending Topics Finder?</span>
          </h1>

          <p className="help-hero-desc">
            Find instant troubleshooting solutions, learn how to configure in-page filters,
            understand Chrome Web Store permissions, or get in direct contact with the developer team.
          </p>

          {/* Quick Search Bar */}
          <div className="help-search-box clay-card">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="help-search-input"
              placeholder="Search troubleshooting questions (e.g., overlay not showing, CSV export, permissions)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Support Grid: Contact Deck & Fast Email Ticket */}
      <section className="help-contact-section">
        <div className="container">
          <div className="help-deck-grid">
            {/* Left Card: Direct Contact & SLA */}
            <div className="clay-card contact-deck-card">
              <div className="contact-deck-header">
                <div className="orb-3d contact-orb"></div>
                <div>
                  <span className="badge-pill badge-peach">Direct Developer Desk</span>
                  <h3 className="contact-deck-title">Official Contact Information</h3>
                </div>
              </div>

              <p className="contact-deck-intro">
                For technical issues, bug reports, Chrome Web Store policy questions, or feature suggestions,
                reach out directly to the core maintainer:
              </p>

              <div className="contact-email-box">
                <div className="email-label">Dedicated Support Email:</div>
                <div className="email-display-row">
                  <a
                    href={`mailto:${supportEmail}?subject=[Medium%20Trending%20Topics%20Finder%20Support]`}
                    className="email-link"
                  >
                    {supportEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-clay btn-copy-small"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>
              </div>

              <div className="support-features-list">
                <div className="feat-row">
                  <span className="feat-icon">⏱️</span>
                  <div>
                    <strong>SLA Response Time:</strong> Within 24–48 business hours.
                  </div>
                </div>
                <div className="feat-row">
                  <span className="feat-icon">🛡️</span>
                  <div>
                    <strong>Chrome Web Store Compliance:</strong> Compliant with Google Single Purpose & Privacy policies.
                  </div>
                </div>
                <div className="feat-row">
                  <span className="feat-icon">💻</span>
                  <div>
                    <strong>GitHub Issue Tracker:</strong> Available for open-source feature contributions and pull requests.
                  </div>
                </div>
              </div>

              <div className="direct-mailto-cta">
                <a
                  href={`mailto:${supportEmail}?subject=[Medium%20Trending%20Topics%20Finder%20Support]%20Assistance%20Request`}
                  className="btn-clay btn-clay-primary btn-full-width"
                >
                  <span>✉️ Open Default Email Client</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Support Ticket Composer */}
            <div className="clay-card ticket-composer-card">
              <div className="ticket-header">
                <span className="badge-pill badge-mint">📬 Quick Ticket Generator</span>
                <h3 className="ticket-title">Send a Support Request</h3>
                <p className="ticket-desc">
                  Fill in your details to generate a structured pre-formatted email ticket:
                </p>
              </div>

              <form onSubmit={handleSendDraft} className="ticket-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="clay-input"
                      placeholder="e.g., Alex Walker"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email (for replies)</label>
                    <input
                      type="email"
                      className="clay-input"
                      placeholder="e.g., alex@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Inquiry Category</label>
                    <select
                      className="clay-input clay-select"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                    >
                      <option value="Bug Report">🐛 Bug Report</option>
                      <option value="Feature Request">💡 Feature Request</option>
                      <option value="Overlay Troubleshooting">🔧 Overlay Not Showing</option>
                      <option value="Permissions & Privacy">🛡️ Permissions & Security</option>
                      <option value="General Question">❓ General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Brief Subject</label>
                    <input
                      type="text"
                      className="clay-input"
                      placeholder="e.g., CSV export button issue"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Detailed Description</label>
                  <textarea
                    rows={4}
                    className="clay-input clay-textarea"
                    placeholder="Please explain what happened, steps to reproduce, or any questions you have..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-clay btn-clay-primary btn-submit-ticket">
                  <span>🚀 Draft & Send Email Ticket to {supportEmail}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Knowledge Base & Troubleshooting FAQ */}
      <section className="help-kb-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill badge-teal">📚 Self-Serve Knowledge Base</span>
            <h2 className="section-title">Common Solutions & Developer Guides</h2>
            <p className="section-desc">
              Browse step-by-step troubleshooting articles categorized by feature:
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="kb-filters-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`filter-btn ${activeCategory === 'all' ? 'filter-active' : ''}`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveCategory('setup')}
              className={`filter-btn ${activeCategory === 'setup' ? 'filter-active' : ''}`}
            >
              🚀 Setup & Pinning
            </button>
            <button
              onClick={() => setActiveCategory('troubleshooting')}
              className={`filter-btn ${activeCategory === 'troubleshooting' ? 'filter-active' : ''}`}
            >
              🔧 Overlay & Scanner
            </button>
            <button
              onClick={() => setActiveCategory('csv')}
              className={`filter-btn ${activeCategory === 'csv' ? 'filter-active' : ''}`}
            >
              📊 CSV Export
            </button>
            <button
              onClick={() => setActiveCategory('analytics')}
              className={`filter-btn ${activeCategory === 'analytics' ? 'filter-active' : ''}`}
            >
              🏛️ Pubs &amp; Writers
            </button>
            <button
              onClick={() => setActiveCategory('permissions')}
              className={`filter-btn ${activeCategory === 'permissions' ? 'filter-active' : ''}`}
            >
              🛡️ Privacy &amp; Permissions
            </button>
          </div>

          {/* KB Category Cards */}
          <div className="kb-categories-container">
            {filteredCategories.length === 0 ? (
              <div className="clay-card no-results-card text-center">
                <div className="no-res-icon">🔍</div>
                <h3>No articles matched "{searchQuery}"</h3>
                <p>Try searching for a different keyword or email us directly at <strong>{supportEmail}</strong>.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="btn-clay btn-clay-secondary"
                >
                  Reset Search Filter
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <div key={cat.id} className="clay-card kb-category-card">
                  <div className="cat-card-header">
                    <span className="badge-pill badge-mint">{cat.badge}</span>
                    <h3 className="cat-card-title">{cat.title}</h3>
                  </div>

                  <div className="cat-items-list">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="kb-faq-row">
                        <div className="kb-q">
                          <span className="q-badge">Q:</span>
                          <h4>{item.q}</h4>
                        </div>
                        <div className="kb-a">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Chrome Web Store Compliance Statement */}
      <section className="cws-compliance-section">
        <div className="container">
          <div className="clay-card cws-compliance-card">
            <div className="cws-badge-wrap">
              <span className="badge-pill badge-mint">🛡️ Chrome Web Store Policy Compliance</span>
            </div>
            <h3 className="cws-compliance-title">Official Chrome Web Store Support Notice</h3>
            <p className="cws-compliance-text">
              This Help Center serves as the primary and official <strong>Support URL</strong> registered in the
              Google Chrome Web Store Developer Dashboard for the extension <strong>Medium Trending Topics Finder</strong>.
              In accordance with Google’s Single Purpose Policy and Developer Program Policies, this application does not
              monetize user attention, does not sell private data, and guarantees 100% local client-side processing.
            </p>
            <div className="cws-meta-row">
              <div className="meta-item">
                <span className="meta-label">Primary Developer:</span>
                <span className="meta-val">Gajanan Patil</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Registered Support Email:</span>
                <a href={`mailto:${supportEmail}`} className="meta-link">{supportEmail}</a>
              </div>
              <div className="meta-item">
                <span className="meta-label">Extension Version:</span>
                <span className="meta-val">1.0.0 (Manifest V3)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">SLA:</span>
                <span className="meta-val">24–48 Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';

export default function FeaturesBento() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-pill badge-teal">⚡ Key Capabilities</span>
          <h2 className="section-title">Built for Modern Writers, Researchers & Growth Hackers</h2>
          <p className="section-desc">
            Everything you need to discover high-performing story concepts, spy on topic momentum,
            find top publications to pitch, and export clean datasets without friction.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: 3-in-1 Live DOM Scanner */}
          <div className="clay-card bento-card bento-span-2">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">3-in-1 In-Page Radar: Stories, Publications & Writers</h3>
            <p className="bento-text">
              No need to switch between tabs or open external dashboards. Medium Trending Topics Finder injects a tactile
              claymorphic panel directly at the top of any Medium tag page (e.g., <code>/tag/artificial-intelligence</code>)
              and your homepage feed. Toggle between <strong>Trending Stories</strong>, <strong>Top Publications</strong>, and <strong>Top Writers</strong> with one click.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">🔥 Trending Stories</span>
              <span className="badge-pill badge-teal">🏛️ Top Publications</span>
              <span className="badge-pill badge-peach">✍️ Top Writers</span>
            </div>
          </div>

          {/* Card 2: Dual Live Ingestion Sources */}
          <div className="clay-card bento-card">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">Dual-Source Live Intelligence</h3>
            <p className="bento-text">
              Combines Medium’s official <em>"Who to follow"</em> sidebar (parsed follower counts) with real-time story feed aggregation.
              Detects authors and publications appearing in both for hybrid <code>Top Writer + Feed</code> badges.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">Sidebar Follower Parser</span>
              <span className="badge-pill badge-teal">Feed Aggregation</span>
            </div>
          </div>

          {/* Card 3: 1-Click Multi-Dataset CSV Export */}
          <div className="clay-card bento-card">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">1-Click Tab-Aware CSV Export</h3>
            <p className="bento-text">
              Export dedicated spreadsheets based on your active view:
              Stories (claps, comments, velocity), Publications (followers, feed claps, stories in feed),
              or Writers (discussion scores, followers). Ready for Notion, Google Sheets, or Python.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-peach">Stories CSV</span>
              <span className="badge-pill badge-mint">Publications CSV</span>
              <span className="badge-pill badge-teal">Writers CSV</span>
            </div>
          </div>

          {/* Card 4: 100% Local Privacy */}
          <div className="clay-card bento-card bento-span-2">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">100% Local & Zero-Telemetry Privacy</h3>
            <p className="bento-text">
              Your reading habits and research are your own business. The extension runs entirely in your browser sandbox.
              Zero remote analytics, zero tracking cookies, zero external server calls, and minimal permissions (only local storage).
              Meets Google's strictest Chrome Web Store privacy guidelines.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">No External APIs</span>
              <span className="badge-pill badge-teal">Audited Least Privilege</span>
              <span className="badge-pill badge-peach">Manifest V3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

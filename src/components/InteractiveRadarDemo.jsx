import React, { useState, useMemo } from 'react';
import {
  MOCK_STORIES_BY_TAG,
  MOCK_PUBLICATIONS_BY_TAG,
  MOCK_WRITERS_BY_TAG
} from '../data/mockStories';

const POPULAR_TAGS = ['artificial-intelligence', 'programming', 'technology', 'python', 'writing'];

function formatCompact(n) {
  if (!n || n <= 0) return '0';
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toLocaleString();
}

export default function InteractiveRadarDemo() {
  const [activeTag, setActiveTag] = useState('artificial-intelligence');
  const [customTagInput, setCustomTagInput] = useState('');
  const [activeTab, setActiveTab] = useState('stories'); // 'stories' | 'publications' | 'writers'
  const [sortBy, setSortBy] = useState('score'); // 'score' | 'claps' | 'comments'
  const [isScanning, setIsScanning] = useState(false);
  const [exportedStatus, setExportedStatus] = useState(false);

  // Stories sorted
  const sortedStories = useMemo(() => {
    const list = MOCK_STORIES_BY_TAG[activeTag] || MOCK_STORIES_BY_TAG['artificial-intelligence'];
    return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [activeTag, sortBy]);

  // Publications sorted
  const sortedPublications = useMemo(() => {
    const list = MOCK_PUBLICATIONS_BY_TAG[activeTag] || MOCK_PUBLICATIONS_BY_TAG['artificial-intelligence'];
    return [...list].sort((a, b) => {
      if (sortBy === 'claps') return b.totalClaps - a.totalClaps;
      if (sortBy === 'comments') return b.totalComments - a.totalComments;
      // Primary Score: followers + (totalClaps * 10)
      return (b.followers + b.totalClaps * 10) - (a.followers + a.totalClaps * 10);
    });
  }, [activeTag, sortBy]);

  // Writers sorted
  const sortedWriters = useMemo(() => {
    const list = MOCK_WRITERS_BY_TAG[activeTag] || MOCK_WRITERS_BY_TAG['artificial-intelligence'];
    return [...list].sort((a, b) => {
      if (sortBy === 'claps') return b.totalClaps - a.totalClaps;
      if (sortBy === 'comments') return b.totalComments - a.totalComments;
      // Primary Score: followers + (totalClaps * 10) + (totalComments * 50)
      return (
        (b.followers + b.totalClaps * 10 + b.totalComments * 50) -
        (a.followers + a.totalClaps * 10 + a.totalComments * 50)
      );
    });
  }, [activeTag, sortBy]);

  // Dynamic KPIs depending on active tab
  const kpis = useMemo(() => {
    if (activeTab === 'stories') {
      const totalClaps = sortedStories.reduce((sum, s) => sum + s.claps, 0);
      const totalComments = sortedStories.reduce((sum, s) => sum + s.comments, 0);
      const topScore = sortedStories.length > 0 ? sortedStories[0].score : 0;
      return [
        { label: 'Top Engagement Score', value: topScore.toLocaleString(), type: 'hero' },
        { label: 'Stories Scanned', value: sortedStories.length, type: 'mint' },
        { label: 'Total Claps', value: totalClaps.toLocaleString(), type: 'default' },
        { label: 'Total Comments', value: totalComments.toLocaleString(), type: 'peach' }
      ];
    } else if (activeTab === 'publications') {
      const totalFollowers = sortedPublications.reduce((sum, p) => sum + p.followers, 0);
      const totalClaps = sortedPublications.reduce((sum, p) => sum + p.totalClaps, 0);
      const topName = sortedPublications.length > 0 ? sortedPublications[0].name : 'None';
      return [
        { label: 'Top Publication', value: topName, type: 'hero', isName: true },
        { label: 'Publications Found', value: sortedPublications.length, type: 'mint' },
        { label: 'Visible Followers', value: formatCompact(totalFollowers), type: 'default' },
        { label: 'Feed Claps', value: formatCompact(totalClaps), type: 'peach' }
      ];
    } else {
      const topWritersCount = sortedWriters.filter((w) => w.followers > 0).length;
      const totalClaps = sortedWriters.reduce((sum, w) => sum + w.totalClaps, 0);
      const topName = sortedWriters.length > 0 ? sortedWriters[0].name : 'None';
      return [
        { label: 'Top Writer', value: topName, type: 'hero', isName: true },
        { label: 'Writers Found', value: sortedWriters.length, type: 'mint' },
        { label: 'Who-to-Follow Writers', value: topWritersCount, type: 'default' },
        { label: 'Writer Claps', value: formatCompact(totalClaps), type: 'peach' }
      ];
    }
  }, [activeTab, sortedStories, sortedPublications, sortedWriters]);

  const handleTagChange = (tag) => {
    if (tag === activeTag) return;
    setIsScanning(true);
    setActiveTag(tag);
    setTimeout(() => {
      setIsScanning(false);
    }, 400);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customTagInput.trim()) return;
    const clean = customTagInput.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/--+/g, '-');
    setIsScanning(true);
    setActiveTag(clean);
    setTimeout(() => {
      setIsScanning(false);
    }, 450);
  };

  const handleExportCSV = () => {
    let rows = [];
    if (activeTab === 'stories') {
      rows = [['Rank', 'Title', 'Claps', 'Comments', 'Score', 'Author', 'Publication', 'URL']];
      sortedStories.forEach((s, i) => {
        rows.push([
          i + 1,
          `"${s.title.replace(/"/g, '""')}"`,
          s.claps,
          s.comments,
          s.score,
          `"${s.authorName || ''}"`,
          `"${s.pubName || ''}"`,
          s.url
        ]);
      });
    } else if (activeTab === 'publications') {
      rows = [['Rank', 'Publication', 'Followers', 'Stories in Feed', 'Total Claps', 'Total Comments', 'Source', 'URL']];
      sortedPublications.forEach((p, i) => {
        rows.push([
          i + 1,
          `"${p.name.replace(/"/g, '""')}"`,
          p.followers,
          p.storiesInFeed,
          p.totalClaps,
          p.totalComments,
          `"${p.source}"`,
          p.url
        ]);
      });
    } else {
      rows = [['Rank', 'Writer', 'Followers', 'Stories in Feed', 'Total Claps', 'Total Comments', 'Source', 'URL']];
      sortedWriters.forEach((w, i) => {
        rows.push([
          i + 1,
          `"${w.name.replace(/"/g, '""')}"`,
          w.followers,
          w.storiesInFeed,
          w.totalClaps,
          w.totalComments,
          `"${w.source}"`,
          w.url
        ]);
      });
    }

    const csvContent = rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medium-${activeTab}-${activeTag}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    setExportedStatus(true);
    setTimeout(() => setExportedStatus(false), 2500);
  };

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 450);
  };

  return (
    <section id="demo" className="demo-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-pill badge-teal">⚡ Interactive In-Page Simulator</span>
          <h2 className="section-title">See Medium Trending Topics Finder in Action</h2>
          <p className="section-desc">
            Explore the exact Soft 3D Claymorphic dashboard injected onto Medium tag pages.
            Switch between <strong>Trending Stories</strong>, <strong>Top Publications</strong>, and <strong>Top Writers</strong>,
            change sorting criteria, or download a real CSV dataset.
          </p>
        </div>

        {/* Tag Picker Bar */}
        <div className="tag-picker-wrap">
          <div className="tag-chips">
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagChange(tag)}
                className={`tag-chip-btn ${activeTag === tag ? 'active' : ''}`}
              >
                #{tag}
              </button>
            ))}
          </div>

          <form onSubmit={handleCustomSubmit} className="tag-search-form">
            <input
              type="text"
              placeholder="Search any tag slug..."
              value={customTagInput}
              onChange={(e) => setCustomTagInput(e.target.value)}
              className="tag-input"
            />
            <button type="submit" className="btn-clay btn-clay-primary btn-small">
              Simulate ↗
            </button>
          </form>
        </div>

        {/* In-Page Radar Panel */}
        <div className="simulated-browser-frame">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-address-bar">
              <span className="lock-icon">🔒</span>
              <span>https://medium.com/tag/{activeTag}</span>
            </div>
            <div className="browser-status">
              <span className="live-indicator">LIVE DOM SCANNER SIMULATION</span>
            </div>
          </div>

          <div className="browser-canvas">
            <div className="clay-radar-panel">
              {/* Radar Header */}
              <div className="radar-head">
                <div className="brand-group">
                  <div className="orb-3d radar-orb"></div>
                  <div>
                    <h3 className="radar-title">
                      Medium Trending Topics Finder — #{activeTag}
                      {isScanning && (
                        <span className="radar-beacon-tag">
                          <span className="beacon-dot">
                            <span className="beacon-ring"></span>
                          </span>
                          Scanning feed...
                        </span>
                      )}
                    </h3>
                    <p className="radar-subtitle">Live DOM scan · Stories, Top Publications &amp; Top Writers</p>
                  </div>
                </div>

                <div className="radar-controls">
                  <select
                    className="clay-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="score">Sort: Primary Score</option>
                    <option value="claps">Sort: Most Claps</option>
                    <option value="comments">Sort: Most Comments</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleRescan}
                    className={`btn-clay btn-clay-secondary btn-small ${isScanning ? 'is-scanning' : ''}`}
                    disabled={isScanning}
                  >
                    {isScanning ? 'Scanning...' : '↻ Rescan Feed'}
                  </button>

                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="btn-clay btn-clay-primary btn-small"
                  >
                    {exportedStatus ? '✓ Downloaded!' : '📥 Export CSV'}
                  </button>
                </div>
              </div>

              {/* Navigation Tabs (Stories / Publications / Writers) */}
              <div className="mtr-tabs-container">
                <div className="mtr-tabs-bar">
                  <button
                    type="button"
                    onClick={() => setActiveTab('stories')}
                    className={`mtr-tab-pill ${activeTab === 'stories' ? 'active' : ''}`}
                  >
                    🔥 Trending Stories
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('publications')}
                    className={`mtr-tab-pill ${activeTab === 'publications' ? 'active' : ''}`}
                  >
                    🏛️ Top Publications
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('writers')}
                    className={`mtr-tab-pill ${activeTab === 'writers' ? 'active' : ''}`}
                  >
                    ✍️ Top Writers
                  </button>
                </div>
              </div>

              {/* KPI Stat Cards */}
              <div className="kpi-grid">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className={`kpi-card ${kpi.type}`}>
                    <span className="kpi-label">{kpi.label}</span>
                    <span
                      className="kpi-number"
                      style={kpi.isName ? { fontSize: '18px', lineHeight: 1.25 } : {}}
                    >
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Story / Publication / Writer List */}
              <div className="story-list-container">
                {isScanning ? (
                  <div className="skeleton-loading-list">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="story-card skeleton-card shimmer-active">
                        <div className="skel-left">
                          <div className="skel-orb"></div>
                          <div className="skel-lines">
                            <div className="skel-bar title"></div>
                            <div className="skel-bar sub"></div>
                          </div>
                        </div>
                        <div className="skel-pills">
                          <div className="skel-pill"></div>
                          <div className="skel-pill"></div>
                          <div className="skel-pill"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeTab === 'stories' ? (
                  /* STORIES VIEW */
                  sortedStories.map((story, idx) => (
                    <div key={story.id} className="story-card">
                      <div className="story-left">
                        <div className={`rank-orb rank-${idx + 1}`}>#{idx + 1}</div>
                        <div className="story-info">
                          <a
                            href={story.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="story-title-link"
                          >
                            {story.title}
                          </a>
                          <div className="story-tags-row">
                            <span className={`badge-pill badge-${story.badgeType || 'teal'}`}>
                              {story.signal}
                            </span>
                            {story.pubName && (
                              <span className="meta-sub-pill">🏛️ {story.pubName}</span>
                            )}
                            {story.authorName && (
                              <span className="meta-sub-pill">✍️ by {story.authorName}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="story-metrics">
                        <span className="stat-pill">👏 {story.claps.toLocaleString()}</span>
                        <span className="stat-pill">💬 {story.comments.toLocaleString()}</span>
                        <span className="stat-pill score-pill">⚡ {story.score.toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                ) : activeTab === 'publications' ? (
                  /* PUBLICATIONS VIEW */
                  sortedPublications.map((pub, idx) => (
                    <div key={pub.id} className="story-card">
                      <div className="story-left">
                        <div className={`rank-orb rank-${idx + 1}`}>#{idx + 1}</div>
                        <div className="story-info">
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="story-title-link"
                          >
                            {pub.name}
                          </a>
                          <div className="story-tags-row">
                            <span className="badge-pill badge-mint">{pub.source}</span>
                            <span className="meta-sub-pill">
                              📚 {pub.storiesInFeed} stories in feed
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="story-metrics">
                        {pub.followers > 0 && (
                          <span className="stat-pill">👥 {formatCompact(pub.followers)}</span>
                        )}
                        <span className="stat-pill">👏 {formatCompact(pub.totalClaps)}</span>
                        <span className="stat-pill score-pill">💬 {pub.totalComments}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  /* WRITERS VIEW */
                  sortedWriters.map((writer, idx) => (
                    <div key={writer.id} className="story-card">
                      <div className="story-left">
                        <div className={`rank-orb rank-${idx + 1}`}>#{idx + 1}</div>
                        <div className="story-info">
                          <a
                            href={writer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="story-title-link"
                          >
                            {writer.name}
                          </a>
                          <div className="story-tags-row">
                            <span className="badge-pill badge-peach">{writer.source}</span>
                            <span className="meta-sub-pill">
                              ✍️ {writer.storiesInFeed} stories in feed
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="story-metrics">
                        {writer.followers > 0 && (
                          <span className="stat-pill">👥 {formatCompact(writer.followers)}</span>
                        )}
                        <span className="stat-pill">👏 {formatCompact(writer.totalClaps)}</span>
                        <span className="stat-pill score-pill">💬 {writer.totalComments}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

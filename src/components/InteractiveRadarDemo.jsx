import React, { useState, useMemo } from 'react';
import { MOCK_STORIES_BY_TAG } from '../data/mockStories';

const POPULAR_TAGS = ['artificial-intelligence', 'programming', 'technology', 'python', 'writing'];

export default function InteractiveRadarDemo() {
  const [activeTag, setActiveTag] = useState('artificial-intelligence');
  const [customTagInput, setCustomTagInput] = useState('');
  const [sortBy, setSortBy] = useState('score');
  const [isScanning, setIsScanning] = useState(false);
  const [exportedStatus, setExportedStatus] = useState(false);

  const stories = useMemo(() => {
    const list = MOCK_STORIES_BY_TAG[activeTag] || MOCK_STORIES_BY_TAG['artificial-intelligence'];
    return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [activeTag, sortBy]);

  const kpis = useMemo(() => {
    const totalClaps = stories.reduce((sum, s) => sum + s.claps, 0);
    const totalComments = stories.reduce((sum, s) => sum + s.comments, 0);
    const topScore = stories.length > 0 ? stories[0].score : 0;
    return {
      count: stories.length,
      totalClaps,
      totalComments,
      topScore
    };
  }, [stories]);

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
    const rows = [['Rank', 'Title', 'Claps', 'Comments', 'Engagement Score', 'Signal', 'URL']];
    stories.forEach((s, i) => {
      rows.push([i + 1, `"${s.title.replace(/"/g, '""')}"`, s.claps, s.comments, s.score, s.signal, s.url]);
    });
    const csvContent = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medium-trending-${activeTag}.csv`;
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
            This live playground mirrors the exact Soft 3D Claymorphic dashboard injected onto Medium tag pages.
            Switch topics, change sort criteria, or download a CSV sample.
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
              <span className="live-indicator">LIVE FEED SIMULATION</span>
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
                    <p className="radar-subtitle">Ranked by claps, comments, and engagement velocity</p>
                  </div>
                </div>

                <div className="radar-controls">
                  <select
                    className="clay-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="score">Sort: Engagement Score</option>
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

              {/* KPI Stat Cards */}
              <div className="kpi-grid">
                <div className="kpi-card hero">
                  <span className="kpi-label">Top Engagement Score</span>
                  <span className="kpi-number">{kpis.topScore.toLocaleString()}</span>
                </div>
                <div className="kpi-card mint">
                  <span className="kpi-label">Stories Scanned</span>
                  <span className="kpi-number">{kpis.count}</span>
                </div>
                <div className="kpi-card">
                  <span className="kpi-label">Total Claps</span>
                  <span className="kpi-number">{kpis.totalClaps.toLocaleString()}</span>
                </div>
                <div className="kpi-card peach">
                  <span className="kpi-label">Total Comments</span>
                  <span className="kpi-number">{kpis.totalComments.toLocaleString()}</span>
                </div>
              </div>

              {/* Story List */}
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
                ) : (
                  stories.map((story, idx) => (
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
                            <span className="url-hint">medium.com/tag/{activeTag}</span>
                          </div>
                        </div>
                      </div>

                      <div className="story-metrics">
                        <span className="stat-pill">👏 {story.claps.toLocaleString()}</span>
                        <span className="stat-pill">💬 {story.comments.toLocaleString()}</span>
                        <span className="stat-pill score">⚡ {story.score.toLocaleString()} score</span>
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

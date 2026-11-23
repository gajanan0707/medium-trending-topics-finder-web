import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="hero-badge-wrap">
          <span className="badge-pill badge-mint">
            <span>🛡️ Manifest V3 Compliant</span>
            <span>·</span>
            <span>100% Local Sandbox</span>
            <span>·</span>
            <span>Zero Tracking</span>
          </span>
        </div>

        <h1 className="hero-heading">
          Spot High-Resonance Stories, <br />
          <span className="hero-highlight">Top Publications &amp; Top Writers on Medium</span>
        </h1>

        <p className="hero-subtext">
          Discover viral stories, scout high-authority publications to pitch, and identify top niche writers directly inside Medium.
          Powered by live DOM scraping, sidebar follower ingestion, and a <strong>response-weighted engagement velocity model</strong>—100% locally with zero external servers.
        </p>

        <div className="hero-cta-group">
          <a
            href="https://chromewebstore.google.com/detail/medium-trending-topics-fi/gfinohkkhodkhlhkagdoagjekkheaamp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clay btn-clay-primary btn-large"
          >
            <span>🚀 Add to Chrome — It's Free</span>
          </a>
          <a href="#demo" className="btn-clay btn-clay-secondary btn-large">
            <span>⚡ Test Interactive Radar Simulator</span>
          </a>
        </div>

        <div className="hero-metrics-bar">
          <div className="metric-item">
            <span className="metric-val">3 Live Tabs</span>
            <span className="metric-label">Stories, Publications &amp; Writers</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">Dual Ingestion</span>
            <span className="metric-label">Sidebar Followers + Feed Aggregation</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">Response-Weighted</span>
            <span className="metric-label">5× Story &amp; 50× Writer Debate Multipliers</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">1-Click CSV</span>
            <span className="metric-label">Tab-Aware Spreadsheet Exports</span>
          </div>
        </div>
      </div>
    </section>
  );
}

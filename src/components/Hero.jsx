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
          Spot High-Resonance Medium Topics <br />
          <span className="hero-highlight">Ranked by Real Engagement Velocity</span>
        </h1>

        <p className="hero-subtext">
          Discover viral stories, underserved niches, and breakout article ideas directly inside Medium’s tag pages.
          Powered by an intelligent <strong>5× response-weighted engagement score</strong>, tactile Soft 3D Claymorphism,
          and zero external servers.
        </p>

        <div className="hero-cta-group">
          <a
            href="https://github.com/your-username/medium-trending-topics-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clay btn-clay-primary btn-large"
          >
            <span>🚀 Add to Chrome — It's Free</span>
          </a>
          <a href="#demo" className="btn-clay btn-clay-secondary btn-large">
            <span>⚡ Test In-Browser Radar</span>
          </a>
        </div>

        <div className="hero-metrics-bar">
          <div className="metric-item">
            <span className="metric-val">5× Multiplier</span>
            <span className="metric-label">Weighted Comments vs Claps</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">0ms Telemetry</span>
            <span className="metric-label">Runs 100% in Browser RAM</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">1-Click CSV</span>
            <span className="metric-label">Instant Market Intelligence</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-val">Infinite Scroll</span>
            <span className="metric-label">Auto-Indexed by MutationObserver</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container nav-inner">
        <a href="#" className="brand-logo">
          <div className="orb-3d nav-orb"></div>
          <div>
            <div className="nav-title">Medium Trending Topics Finder</div>
            <div className="nav-subtitle">100% Local In-Page Analytics</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#demo" className="nav-link">Live Radar</a>
          <a href="#algorithm" className="nav-link">The Formula</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#privacy" className="nav-link">Privacy & Store Specs</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="nav-actions">
          <div className="beacon-wrap">
            <span className="beacon-dot">
              <span className="beacon-ring"></span>
            </span>
            <span>V1.0 Live</span>
          </div>

          <a
            href="https://github.com/your-username/medium-trending-topics-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clay btn-clay-primary nav-cta"
          >
            <span>Add to Chrome</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

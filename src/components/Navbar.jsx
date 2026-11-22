import React from 'react';

export default function Navbar({ currentView, onNavigateToSupport, onNavigateToHome }) {
  return (
    <header className="navbar-wrap">
      <div className="container nav-inner">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToHome();
          }}
          className="brand-logo"
        >
          <div className="orb-3d nav-orb"></div>
          <div>
            <div className="nav-title">Medium Trending Topics Finder</div>
            <div className="nav-subtitle">100% Local In-Page Analytics</div>
          </div>
        </a>

        <nav className="nav-links">
          <a
            href="#demo"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToHome('#demo');
            }}
            className="nav-link"
          >
            Live Radar
          </a>
          <a
            href="#algorithm"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToHome('#algorithm');
            }}
            className="nav-link"
          >
            The Formula
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToHome('#features');
            }}
            className="nav-link"
          >
            Features
          </a>
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToHome('#privacy');
            }}
            className="nav-link"
          >
            Privacy & Store Specs
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToHome('#faq');
            }}
            className="nav-link"
          >
            FAQ
          </a>
          <button
            onClick={onNavigateToSupport}
            className={`nav-link-btn ${currentView === 'support' ? 'nav-link-active' : ''}`}
            title="Help Center, Troubleshooting & Developer Contact"
          >
            <span className="help-icon">💬</span>
            <span>Help & Support</span>
          </button>
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

import React from 'react';

export default function Footer({ currentView, onNavigateToSupport, onNavigateToHome }) {
  const supportEmail = 'mrcoder701@gmail.com';

  return (
    <footer className="footer-wrap">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div
            className="brand-logo"
            onClick={() => onNavigateToHome && onNavigateToHome()}
            style={{ cursor: 'pointer' }}
          >
            <div className="orb-3d nav-orb"></div>
            <div>
              <div className="nav-title">Medium Trending Topics Finder</div>
              <div className="nav-subtitle">Open Source & Free Content Research Tool</div>
            </div>
          </div>
          <p className="footer-bio">
            Built for creators who value authentic audience signals over superficial claps.
            100% private, local execution in your browser.
          </p>
          <div className="footer-contact-badge">
            <span className="badge-pill badge-mint">
              <span>📧 Support: </span>
              <a href={`mailto:${supportEmail}`} style={{ color: 'inherit', fontWeight: 'bold' }}>
                {supportEmail}
              </a>
            </span>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <div className="col-heading">Navigation</div>
            <a
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#demo');
              }}
            >
              Live Radar
            </a>
            <a
              href="#algorithm"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#algorithm');
              }}
            >
              Engagement Formula
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#features');
              }}
            >
              Features
            </a>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#privacy');
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#faq');
              }}
            >
              FAQ
            </a>
          </div>

          <div className="footer-col">
            <div className="col-heading">Support & Legal</div>
            <button
              onClick={() => onNavigateToSupport && onNavigateToSupport()}
              className="footer-link-btn"
            >
              Help Center & Support Desk
            </button>
            <button
              onClick={() => onNavigateToSupport && onNavigateToSupport()}
              className="footer-link-btn"
            >
              Troubleshooting Guides
            </button>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#privacy');
              }}
            >
              Permissions Justification
            </a>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome('#privacy');
              }}
            >
              Data Safety Disclosures
            </a>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
          </div>

          <div className="footer-col">
            <div className="col-heading">Contact & Resources</div>
            <a href={`mailto:${supportEmail}`} className="footer-highlight-email">
              ✉️ {supportEmail}
            </a>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
              llms.txt (AI Schema)
            </a>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer">
              robots.txt
            </a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              Sitemap
            </a>
            <a
              href="https://github.com/gajanan0707/medium-trending-topics-finder"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copy-text">
          © {new Date().getFullYear()} Medium Trending Topics Finder. Registered Chrome Web Store Support Desk.
          Not affiliated with A Medium Corporation. All trademarks belong to their respective owners.
        </div>
        <div className="footer-badge">
          <span className="badge-pill badge-mint">💚 100% Client-Side</span>
        </div>
      </div>
    </footer>
  );
}

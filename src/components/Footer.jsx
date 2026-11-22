import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand-logo">
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
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <div className="col-heading">Navigation</div>
            <a href="#demo">Live Radar</a>
            <a href="#algorithm">Engagement Formula</a>
            <a href="#features">Features</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-col">
            <div className="col-heading">Legal & Compliance</div>
            <a href="#privacy">Chrome Web Store Policy</a>
            <a href="#privacy">Permissions Justification</a>
            <a href="#privacy">Data Safety Disclosures</a>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
          </div>

          <div className="footer-col">
            <div className="col-heading">Resources</div>
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
              href="https://github.com/your-username/medium-trending-topics-finder"
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
          © {new Date().getFullYear()} Medium Trending Topics Finder. Not affiliated with A Medium Corporation. All trademarks belong to their respective owners.
        </div>
        <div className="footer-badge">
          <span className="badge-pill badge-mint">💚 100% Client-Side</span>
        </div>
      </div>
    </footer>
  );
}

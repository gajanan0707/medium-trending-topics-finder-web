import React from 'react';

export default function PrivacyPolicySection() {
  return (
    <section id="privacy" className="privacy-section">
      <div className="container">
        <div className="clay-card privacy-card">
          <div className="privacy-head">
            <span className="badge-pill badge-mint">🛡️ Chrome Web Store Compliance & Privacy</span>
            <h2 className="privacy-title">Official Privacy Policy & Permissions Disclosure</h2>
            <p className="privacy-updated">Last Updated: November 2026 · Compliant with Chrome Web Store Developer Policies</p>
          </div>

          <div className="privacy-content-grid">
            <div className="privacy-block">
              <h3>1. Zero Data Collection Guarantee</h3>
              <p>
                <strong>Medium Trending Topics Finder</strong> does not collect, log, store, or transmit any personally identifiable
                information (PII), browsing history, cookies, session tokens, or payment details.
                All calculations and metric aggregations are performed entirely within your browser's local sandbox memory.
              </p>
            </div>

            <div className="privacy-block">
              <h3>2. Chrome Permissions Justification</h3>
              <ul className="perms-list">
                <li>
                  <code>storage</code> — Used exclusively via <code>chrome.storage.local</code> to save the last 10 detected
                  stories on your device so you can view them inside the toolbar popup. No data ever leaves your computer.
                </li>
                <li>
                  <code>content_scripts</code> — Statically declared for <code>https://medium.com/tag/*</code> and <code>https://medium.com/</code> to
                  inspect publicly visible story preview elements (titles, claps, comments) and inject the local analytics panel.
                  No host permissions or background network access required.
                </li>
              </ul>
            </div>

            <div className="privacy-block">
              <h3>3. No Third-Party Analytics or Remote Servers</h3>
              <p>
                The extension does not include Google Analytics, Mixpanel, Sentry, or any third-party telemetry scripts.
                There is no remote server backend. If you disconnect your internet connection, the extension's local calculation
                and sorting logic continues to function seamlessly.
              </p>
            </div>

            <div className="privacy-block">
              <h3>4. Developer Contact & Support</h3>
              <p>
                For technical inquiries, bug reports, or feature requests, visit the open-source repository at{' '}
                <a
                  href="https://github.com/gajanan0707/medium-trending-topics-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  GitHub Issues
                </a>{' '}
                or reach out to the project maintainers directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

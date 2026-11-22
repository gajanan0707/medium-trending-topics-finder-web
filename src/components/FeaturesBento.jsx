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
            and export clean datasets without friction.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Real-time In-Page Injection */}
          <div className="clay-card bento-card bento-span-2">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">Real-Time In-Page Analytics Overlay</h3>
            <p className="bento-text">
              No need to switch between tabs or open external dashboards. Medium Trending Topics Finder injects a tactile
              claymorphic panel directly at the top of any Medium tag page (e.g., <code>/tag/artificial-intelligence</code>)
              and your personalized home feed.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">In-Page Dashboard</span>
              <span className="badge-pill badge-teal">Zero Tab Switching</span>
              <span className="badge-pill badge-peach">Live Scanning</span>
            </div>
          </div>

          {/* Card 2: MutationObserver Infinite Scroll */}
          <div className="clay-card bento-card">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">Infinite Scroll Auto-Indexer</h3>
            <p className="bento-text">
              Medium dynamically loads stories as you scroll down. The extension uses an active <code>MutationObserver</code> to
              capture, index, and re-rank stories seamlessly without manual refreshing.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">Async GraphQL Hook</span>
              <span className="badge-pill badge-teal">Debounced Rescans</span>
            </div>
          </div>

          {/* Card 3: 1-Click CSV Export */}
          <div className="clay-card bento-card">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">1-Click CSV Data Export</h3>
            <p className="bento-text">
              Download clean spreadsheets featuring Rank, Title, Claps, Comments, Engagement Score, Trend Signal,
              and Story URLs ready for Notion, Google Sheets, or Python analysis.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-peach">Spreadsheet Ready</span>
              <span className="badge-pill badge-mint">Content Strategy</span>
            </div>
          </div>

          {/* Card 4: 100% Local Privacy */}
          <div className="clay-card bento-card bento-span-2">
            <div className="bento-icon-orb orb-3d"></div>
            <h3 className="bento-heading">100% Local & Zero-Telemetry Privacy</h3>
            <p className="bento-text">
              Your reading habits and research are your own business. The extension runs entirely in your browser sandbox.
              Zero remote analytics, zero tracking cookies, and zero external server calls. Meets Google's strictest
              Chrome Web Store privacy guidelines.
            </p>
            <div className="bento-pill-tags">
              <span className="badge-pill badge-mint">No External API</span>
              <span className="badge-pill badge-teal">Local Sandbox</span>
              <span className="badge-pill badge-peach">Manifest V3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

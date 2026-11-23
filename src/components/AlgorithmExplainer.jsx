import React, { useState } from 'react';

export default function AlgorithmExplainer() {
  const [calcMode, setCalcMode] = useState('stories'); // 'stories' | 'publications' | 'writers'

  // Story inputs
  const [calcClaps, setCalcClaps] = useState(1200);
  const [calcComments, setCalcComments] = useState(45);

  // Publication inputs
  const [calcPubFollowers, setCalcPubFollowers] = useState(125000);
  const [calcPubClaps, setCalcPubClaps] = useState(3400);

  // Writer inputs
  const [calcWriterFollowers, setCalcWriterFollowers] = useState(59000);
  const [calcWriterClaps, setCalcWriterClaps] = useState(1850);
  const [calcWriterComments, setCalcWriterComments] = useState(92);

  // Calculated scores
  const calculatedStoryScore = (Number(calcClaps) || 0) + ((Number(calcComments) || 0) * 5);
  const calculatedPubScore = (Number(calcPubFollowers) || 0) + ((Number(calcPubClaps) || 0) * 10);
  const calculatedWriterScore =
    (Number(calcWriterFollowers) || 0) +
    ((Number(calcWriterClaps) || 0) * 10) +
    ((Number(calcWriterComments) || 0) * 50);

  const getStoryBadge = (claps, comments, score) => {
    if (comments >= 30) return { label: '💬 High Debate', desc: 'Active reader conversation & high community resonance' };
    if (claps >= 1000) return { label: '🔥 Viral Claps', desc: 'Mass platform distribution & network propagation' };
    if (score >= 200) return { label: '⚡ Rising', desc: 'Fast reader velocity & organic momentum' };
    return { label: '✨ Active', desc: 'Consistent baseline reader interest' };
  };

  const storyBadgeInfo = getStoryBadge(Number(calcClaps) || 0, Number(calcComments) || 0, calculatedStoryScore);

  return (
    <section id="algorithm" className="algorithm-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-pill badge-mint">📐 Mathematical Models & Live Ingestion</span>
          <h2 className="section-title">How Stories, Publications & Writers Are Ranked</h2>
          <p className="section-desc">
            Claps alone are misleading—they take half a second to click up to 50 times.
            Our engine combines live Medium DOM telemetry, sidebar follower metrics, and weighted engagement formulas
            to reveal authentic authority and topic velocity.
          </p>
        </div>

        {/* 2 Live Data Sources Bento */}
        <div className="sources-explainer-grid">
          <div className="clay-card source-card">
            <div className="source-head">
              <span className="source-step">SOURCE 1</span>
              <h3 className="source-title">Medium's "Who to follow" Sidebar</h3>
            </div>
            <p className="source-desc">
              The extension's <code>extractWhoToFollowFromDOM()</code> scans Medium's live sidebar for official topic badges
              (e.g., <code>Writer · 59K followers</code> or <code>Publication · 329K followers</code>).
            </p>
            <ul className="source-points">
              <li>Extracts verified entity name and profile / publication URL</li>
              <li>Parses exact follower numbers into clean integers (e.g. 59K → 59,000)</li>
              <li>Establishes baseline historical platform authority</li>
            </ul>
          </div>

          <div className="clay-card source-card">
            <div className="source-head">
              <span className="source-step">SOURCE 2</span>
              <h3 className="source-title">Live Feed Story Aggregation</h3>
            </div>
            <p className="source-desc">
              The extension's <code>runLiveDOMExtraction()</code> inspects every loaded story card in the tag feed, extracting claps, comments, author link (<code>/@username</code>), and publication link.
            </p>
            <ul className="source-points">
              <li>Calculates <strong>storiesInFeed</strong> (frequency of publication in current feed)</li>
              <li>Aggregates <strong>totalClaps</strong> across all articles by that author/pub</li>
              <li>Aggregates <strong>totalComments</strong> reflecting real-time audience debate</li>
            </ul>
          </div>

          <div className="clay-card source-card source-merge-card">
            <div className="source-head">
              <span className="source-step">INTELLIGENT MERGE</span>
              <h3 className="source-title">Hybrid Authority + Velocity Ranking</h3>
            </div>
            <p className="source-desc">
              If an author or publication is detected in both the "Who to follow" sidebar AND the active story feed, the extension merges them into a high-tier hybrid badge:
            </p>
            <div className="merge-badge-demo">
              <span className="badge-pill badge-peach">Top Writer + Feed</span>
              <span className="merge-connector">&amp;</span>
              <span className="badge-pill badge-mint">Top Pub + Feed</span>
            </div>
            <p className="source-note">
              This guarantees you discover established juggernauts as well as fast-rising new publications dominating today’s feed.
            </p>
          </div>
        </div>

        {/* Interactive Equations & Calculator */}
        <div className="formula-card-grid">
          {/* Formula Display Card */}
          <div className="clay-card formula-main-card">
            {/* Equation Selector Tabs */}
            <div className="calc-mode-tabs">
              <button
                type="button"
                onClick={() => setCalcMode('stories')}
                className={`calc-mode-btn ${calcMode === 'stories' ? 'active' : ''}`}
              >
                🔥 Stories Formula
              </button>
              <button
                type="button"
                onClick={() => setCalcMode('publications')}
                className={`calc-mode-btn ${calcMode === 'publications' ? 'active' : ''}`}
              >
                🏛️ Top Publications
              </button>
              <button
                type="button"
                onClick={() => setCalcMode('writers')}
                className={`calc-mode-btn ${calcMode === 'writers' ? 'active' : ''}`}
              >
                ✍️ Top Writers
              </button>
            </div>

            {calcMode === 'stories' && (
              <>
                <div className="formula-tag">Trending Stories Equation</div>
                <div className="formula-equation">
                  <span className="eq-part score-box">Engagement Score</span>
                  <span className="eq-symbol">=</span>
                  <span className="eq-part claps-box">Claps</span>
                  <span className="eq-symbol">+</span>
                  <span className="eq-part comments-box">(Responses × 5)</span>
                </div>
                <p className="formula-explanation">
                  Responses are singular, intent-driven, and indicate topic authority. Weighting comments 5× heavier
                  surfaces genuine resonance and high retention over clickbait claps.
                </p>
                <div className="signal-tiers-list">
                  <div className="tier-row">
                    <span className="badge-pill badge-peach">💬 High Debate</span>
                    <span className="tier-condition">≥ 30 Comments</span>
                    <span className="tier-note">High community debate, controversial insights, or unanswered questions</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-mint">🔥 Viral Claps</span>
                    <span className="tier-condition">≥ 1,000 Claps</span>
                    <span className="tier-note">Mass platform distribution across the Medium network</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-teal">⚡ Rising</span>
                    <span className="tier-condition">≥ 200 Score</span>
                    <span className="tier-note">Emerging story capturing reader velocity</span>
                  </div>
                </div>
              </>
            )}

            {calcMode === 'publications' && (
              <>
                <div className="formula-tag">Top Publications Equation</div>
                <div className="formula-equation">
                  <span className="eq-part score-box">Primary Score</span>
                  <span className="eq-symbol">=</span>
                  <span className="eq-part claps-box">Followers</span>
                  <span className="eq-symbol">+</span>
                  <span className="eq-part comments-box">(Total Feed Claps × 10)</span>
                </div>
                <p className="formula-explanation">
                  Combines overall publication brand equity (follower reach) with immediate feed momentum.
                  Each clap earned in the active feed is multiplied by 10 to reward publications actively winning audience attention right now.
                </p>
                <div className="signal-tiers-list">
                  <div className="tier-row">
                    <span className="badge-pill badge-mint">Top Pub + Feed</span>
                    <span className="tier-condition">Sidebar + Active Feed</span>
                    <span className="tier-note">Highest tier: major follower base and articles trending in feed</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-teal">Top Ranked</span>
                    <span className="tier-condition">Who to follow Sidebar</span>
                    <span className="tier-note">Platform recognized authority for the tag slug</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-peach">Feed Publication</span>
                    <span className="tier-condition">Story Preview Links</span>
                    <span className="tier-note">Emerging community publication actively publishing stories</span>
                  </div>
                </div>
              </>
            )}

            {calcMode === 'writers' && (
              <>
                <div className="formula-tag">Top Writers Equation</div>
                <div className="formula-equation">
                  <span className="eq-part score-box">Primary Score</span>
                  <span className="eq-symbol">=</span>
                  <span className="eq-part claps-box">Followers</span>
                  <span className="eq-symbol">+</span>
                  <span className="eq-part comments-box">(Claps × 10)</span>
                  <span className="eq-symbol">+</span>
                  <span className="eq-part score-box" style={{ background: '#fdf2ea' }}>(Responses × 50)</span>
                </div>
                <p className="formula-explanation">
                  The ultimate author ranking algorithm: balances total followers, clap volume (10×), and reader discussion (50× per comment).
                  Authors whose stories provoke deep comment threads skyrocket to the top.
                </p>
                <div className="signal-tiers-list">
                  <div className="tier-row">
                    <span className="badge-pill badge-peach">Top Writer + Feed</span>
                    <span className="tier-condition">Sidebar + Feed Traction</span>
                    <span className="tier-note">Elite tier: Verified topic writer actively producing breakout stories</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-teal">Top Writer</span>
                    <span className="tier-condition">Who to follow</span>
                    <span className="tier-note">Medium algorithm recognized subject matter expert</span>
                  </div>
                  <div className="tier-row">
                    <span className="badge-pill badge-mint">Feed Writer</span>
                    <span className="tier-condition">Story Author Link</span>
                    <span className="tier-note">Active contributor generating claps and responses in current feed</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Interactive Calculator */}
          <div className="clay-card calculator-card">
            <h3 className="calc-title">
              🧮 Interactive {calcMode === 'stories' ? 'Story' : calcMode === 'publications' ? 'Publication' : 'Writer'} Calculator
            </h3>
            <p className="calc-desc">Slide the parameters below to compute the live score:</p>

            {calcMode === 'stories' && (
              <>
                <div className="calc-inputs-group">
                  <div className="calc-field">
                    <label className="field-label">
                      <span>👏 Claps Count</span>
                      <span className="field-val-pill">{calcClaps.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="50"
                      value={calcClaps}
                      onChange={(e) => setCalcClaps(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>

                  <div className="calc-field">
                    <label className="field-label">
                      <span>💬 Comments / Responses (5× weight)</span>
                      <span className="field-val-pill">{calcComments}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="1"
                      value={calcComments}
                      onChange={(e) => setCalcComments(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>
                </div>

                <div className="calc-result-box">
                  <div className="result-kpi">
                    <span className="res-label">Engagement Score</span>
                    <span className="res-number">⚡ {calculatedStoryScore.toLocaleString()}</span>
                  </div>
                  <div className="result-tier">
                    <span className="tier-badge-res">{storyBadgeInfo.label}</span>
                    <span className="tier-desc-res">{storyBadgeInfo.desc}</span>
                  </div>
                </div>
              </>
            )}

            {calcMode === 'publications' && (
              <>
                <div className="calc-inputs-group">
                  <div className="calc-field">
                    <label className="field-label">
                      <span>👥 Publication Followers</span>
                      <span className="field-val-pill">{calcPubFollowers.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="5000"
                      value={calcPubFollowers}
                      onChange={(e) => setCalcPubFollowers(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>

                  <div className="calc-field">
                    <label className="field-label">
                      <span>👏 Total Feed Claps (10× weight)</span>
                      <span className="field-val-pill">{calcPubClaps.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="100"
                      value={calcPubClaps}
                      onChange={(e) => setCalcPubClaps(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>
                </div>

                <div className="calc-result-box">
                  <div className="result-kpi">
                    <span className="res-label">Publication Primary Score</span>
                    <span className="res-number">🏛️ {calculatedPubScore.toLocaleString()}</span>
                  </div>
                  <div className="result-tier">
                    <span className="tier-badge-res">Formula: Followers + (Claps × 10)</span>
                    <span className="tier-desc-res">Balances overall readership scale with real-time story performance</span>
                  </div>
                </div>
              </>
            )}

            {calcMode === 'writers' && (
              <>
                <div className="calc-inputs-group">
                  <div className="calc-field">
                    <label className="field-label">
                      <span>👥 Writer Followers</span>
                      <span className="field-val-pill">{calcWriterFollowers.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="1000"
                      value={calcWriterFollowers}
                      onChange={(e) => setCalcWriterFollowers(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>

                  <div className="calc-field">
                    <label className="field-label">
                      <span>👏 Total Feed Claps (10× weight)</span>
                      <span className="field-val-pill">{calcWriterClaps.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="100"
                      value={calcWriterClaps}
                      onChange={(e) => setCalcWriterClaps(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>

                  <div className="calc-field">
                    <label className="field-label">
                      <span>💬 Total Feed Comments (50× weight)</span>
                      <span className="field-val-pill">{calcWriterComments}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="5"
                      value={calcWriterComments}
                      onChange={(e) => setCalcWriterComments(Number(e.target.value))}
                      className="calc-range"
                    />
                  </div>
                </div>

                <div className="calc-result-box">
                  <div className="result-kpi">
                    <span className="res-label">Writer Primary Score</span>
                    <span className="res-number">✍️ {calculatedWriterScore.toLocaleString()}</span>
                  </div>
                  <div className="result-tier">
                    <span className="tier-badge-res">Followers + (Claps × 10) + (Comments × 50)</span>
                    <span className="tier-desc-res">High debate comments heavily reward writers driving discussion</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

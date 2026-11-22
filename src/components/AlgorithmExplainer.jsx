import React, { useState } from 'react';

export default function AlgorithmExplainer() {
  const [calcClaps, setCalcClaps] = useState(1200);
  const [calcComments, setCalcComments] = useState(45);

  const calculatedScore = (Number(calcClaps) || 0) + ((Number(calcComments) || 0) * 5);

  const getBadgeForScore = (claps, comments, score) => {
    if (comments >= 30) return { label: '💬 High Debate', desc: 'Active reader conversation & high resonance' };
    if (claps >= 1000) return { label: '🔥 Viral Claps', desc: 'Mass platform distribution' };
    if (score >= 200) return { label: '⚡ Rising', desc: 'Fast reader velocity & organic momentum' };
    return { label: '✨ Active', desc: 'Consistent baseline reader interest' };
  };

  const badgeInfo = getBadgeForScore(Number(calcClaps) || 0, Number(calcComments) || 0, calculatedScore);

  return (
    <section id="algorithm" className="algorithm-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-pill badge-mint">📐 Mathematical Model</span>
          <h2 className="section-title">The 5× Engagement Velocity Formula</h2>
          <p className="section-desc">
            Why claps alone are misleading: Clapping takes half a second. A thoughtful response requires reading,
            evaluating, and writing. Our formula weighs comments 5× heavier to expose real resonance.
          </p>
        </div>

        <div className="formula-card-grid">
          {/* Formula Display Card */}
          <div className="clay-card formula-main-card">
            <div className="formula-tag">The Exact Scoring Equation</div>
            <div className="formula-equation">
              <span className="eq-part score-box">Engagement Score</span>
              <span className="eq-symbol">=</span>
              <span className="eq-part claps-box">Claps</span>
              <span className="eq-symbol">+</span>
              <span className="eq-part comments-box">(Responses × 5)</span>
            </div>

            <p className="formula-explanation">
              While traditional aggregators sort by claps (which can be clicked up to 50 times per person),
              responses are singular, intent-driven, and indicate topic authority. High scores signify strong
              market demand and audience curiosity.
            </p>

            <div className="signal-tiers-list">
              <div className="tier-row">
                <span className="badge-pill badge-peach">💬 High Debate</span>
                <span className="tier-condition">≥ 30 Comments</span>
                <span className="tier-note">High community discourse, controversy, or open questions</span>
              </div>
              <div className="tier-row">
                <span className="badge-pill badge-mint">🔥 Viral Claps</span>
                <span className="tier-condition">≥ 1,000 Claps</span>
                <span className="tier-note">Broad platform distribution and network effect</span>
              </div>
              <div className="tier-row">
                <span className="badge-pill badge-teal">⚡ Rising</span>
                <span className="tier-condition">≥ 200 Score</span>
                <span className="tier-note">Emerging topic picking up velocity</span>
              </div>
              <div className="tier-row">
                <span className="badge-pill badge-teal">✨ Active</span>
                <span className="tier-condition">&lt; 200 Score</span>
                <span className="tier-note">Steady baseline reader momentum</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="clay-card calculator-card">
            <h3 className="calc-title">🧮 Test The Engagement Calculator</h3>
            <p className="calc-desc">Adjust the inputs to see the calculated score and resulting badge tier:</p>

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
                  <span>💬 Comments / Responses</span>
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
                <span className="res-label">Calculated Score</span>
                <span className="res-number">⚡ {calculatedScore.toLocaleString()}</span>
              </div>
              <div className="result-tier">
                <span className="tier-badge-res">{badgeInfo.label}</span>
                <span className="tier-desc-res">{badgeInfo.desc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-pill badge-mint">❓ Frequently Asked Questions</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-desc">
            Answers to common questions about installation, algorithm details, data safety, and content research strategies.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`clay-card faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className="faq-question-row">
                <h3 className="faq-question">{item.question}</h3>
                <span className="faq-toggle-icon">{openIndex === idx ? '−' : '+'}</span>
              </div>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


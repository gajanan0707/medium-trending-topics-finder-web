import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Analytics } from "@vercel/analytics/react";
import InteractiveRadarDemo from './components/InteractiveRadarDemo';
import AlgorithmExplainer from './components/AlgorithmExplainer';
import FeaturesBento from './components/FeaturesBento';
import PrivacyPolicySection from './components/PrivacyPolicySection';
import FAQSection from './components/FAQSection';
import HelpCenter from './components/HelpCenter';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/support' || path === '/help' || hash.startsWith('#support')) {
        return 'support';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/support' || path === '/help' || hash.startsWith('#support')) {
        setCurrentView('support');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToSupport = () => {
    setCurrentView('support');
    window.location.hash = '#support';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (anchor) => {
    setCurrentView('home');
    if (anchor) {
      window.location.hash = anchor;
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Navbar
        currentView={currentView}
        onNavigateToSupport={navigateToSupport}
        onNavigateToHome={navigateToHome}
      />
      <main>
        {currentView === 'support' ? (
          <HelpCenter onBackToHome={() => navigateToHome()} />
        ) : (
          <>
            <Hero />
            <InteractiveRadarDemo />
            <AlgorithmExplainer />
            <FeaturesBento />
            <PrivacyPolicySection />
            <FAQSection />
            <section id="support" className="support-banner-section">
              <div className="container">
                <div className="clay-card support-banner-card">
                  <div className="support-banner-left">
                    <span className="badge-pill badge-mint">Official Chrome Web Store Support</span>
                    <h3 className="support-banner-title">Need Help, Found a Bug, or Have Questions?</h3>
                    <p className="support-banner-desc">
                      Visit our dedicated Help Center for step-by-step installation guides, scanner troubleshooting,
                      and direct developer support at <strong>mrcoder701@gmail.com</strong>.
                    </p>
                  </div>
                  <button
                    onClick={navigateToSupport}
                    className="btn-clay btn-clay-primary btn-large btn-open-help"
                  >
                    <span>Open Help Center & Support ↗</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer
        currentView={currentView}
        onNavigateToSupport={navigateToSupport}
        onNavigateToHome={navigateToHome}
      />
      <Analytics />
    </div>
  );
}

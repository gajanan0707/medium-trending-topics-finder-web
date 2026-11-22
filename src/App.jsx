import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Analytics } from "@vercel/analytics/react"
import InteractiveRadarDemo from './components/InteractiveRadarDemo';
import AlgorithmExplainer from './components/AlgorithmExplainer';
import FeaturesBento from './components/FeaturesBento';
import PrivacyPolicySection from './components/PrivacyPolicySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <InteractiveRadarDemo />
        <AlgorithmExplainer />
        <FeaturesBento />
        <PrivacyPolicySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}


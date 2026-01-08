import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <FeaturesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
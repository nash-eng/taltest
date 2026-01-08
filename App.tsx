import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewSection from './components/ReviewSection';
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
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
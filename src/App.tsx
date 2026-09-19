import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { BrandIdentitySection } from './components/BrandIdentitySection';
import { QuickContactSection } from './components/QuickContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BrandKitModal } from './components/BrandKitModal';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [isBrandKitOpen, setIsBrandKitOpen] = useState<boolean>(false);

  const scrollToContact = (serviceTitle?: string, message?: string) => {
    if (serviceTitle) setPrefilledService(serviceTitle);
    if (message) setPrefilledMessage(message);

    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portafolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyFromEstimator = (data: { service: string; message: string }) => {
    scrollToContact(data.service, data.message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Header with navigation & WhatsApp shortcut */}
      <Header
        onOpenContact={() => scrollToContact()}
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
      />

      <main className="flex-grow">
        {/* High-Impact Hero section with trust metrics */}
        <Hero
          onOpenContact={() => scrollToContact()}
          onExplorePortfolio={scrollToPortfolio}
        />

        {/* Core Services Section with client problem-focused questions */}
        <ServicesSection 
          onSelectService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Methodology: Understand, Diagnose, Design, Implement */}
        <MethodologySection 
          onOpenContact={() => scrollToContact()}
        />

        {/* Interactive Scope & Quote Estimator */}
        <QuoteEstimator 
          onApplyToContact={handleApplyFromEstimator}
        />

        {/* Featured Portfolio & Case Studies */}
        <PortfolioSection 
          onSelectProjectForInquiry={(inquiryTitle) => scrollToContact(inquiryTitle)}
        />

        {/* Testimonials & Directorial Endorsements */}
        <TestimonialsSection />

        {/* Authority & Bio Section of Adriano Remigio Valarezo */}
        <AboutSection 
          onOpenContact={() => scrollToContact()}
        />

        {/* Corporate Brand Identity & Visual System Section */}
        <BrandIdentitySection 
          onOpenBrandKit={() => setIsBrandKitOpen(true)}
        />

        {/* Quick Contact Section (prominently requested by user) */}
        <QuickContactSection 
          initialService={prefilledService}
          initialMessage={prefilledMessage}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
      />

      {/* Quick Floating WhatsApp button */}
      <FloatingActions 
        onOpenContact={() => scrollToContact()}
      />

      {/* Corporate Brand Kit & Guidelines Modal */}
      <BrandKitModal 
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />
    </div>
  );
}


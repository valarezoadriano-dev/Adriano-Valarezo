import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { QuickContactSection } from './components/QuickContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

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

  const handleApplyFromAi = (service: string, summary: string) => {
    scrollToContact(service, summary);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Header with navigation & WhatsApp shortcut */}
      <Header 
        onOpenAiAdvisor={() => setIsAiAdvisorOpen(true)}
        onOpenContact={() => scrollToContact()}
      />

      <main className="flex-grow">
        {/* High-Impact Hero section with trust metrics */}
        <Hero 
          onOpenContact={() => scrollToContact()}
          onOpenAiAdvisor={() => setIsAiAdvisorOpen(true)}
          onExplorePortfolio={scrollToPortfolio}
        />

        {/* Core Services Section optimized for selling services */}
        <ServicesSection 
          onSelectService={(serviceTitle) => scrollToContact(serviceTitle)}
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

        {/* Quick Contact Section (prominently requested by user) */}
        <QuickContactSection 
          initialService={prefilledService}
          initialMessage={prefilledMessage}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* AI Diagnostic Advisor Modal */}
      <AiAdvisorModal 
        isOpen={isAiAdvisorOpen}
        onClose={() => setIsAiAdvisorOpen(false)}
        onApplyDiagnostic={handleApplyFromAi}
      />

      {/* Quick Floating WhatsApp button */}
      <FloatingActions 
        onOpenContact={() => scrollToContact()}
      />
    </div>
  );
}


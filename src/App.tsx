import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { TechStackSection } from './components/TechStackSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ServiceItem, ContactFormData } from './types';
import { servicesData } from './data/servicesData';
import { playSound } from './utils/sound';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'view'>('default');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'AI Video Generation',
    projectDetails: '',
    ndaRequired: false
  });

  const handleHover = (text?: string) => {
    if (text) {
      setCursorText(text);
      setCursorVariant('pointer');
    } else {
      setCursorText('');
      setCursorVariant('default');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleRequestService = (serviceName: string) => {
    setSelectedService(null);
    setFormData((prev) => ({
      ...prev,
      service: serviceName
    }));
    scrollToSection('contact');
  };

  const handleSelectTrustTag = (tagId: string) => {
    const srv = servicesData.find((s) => s.id === tagId);
    if (srv && srv.visible !== false) {
      setSelectedService(srv);
    } else {
      scrollToSection('services');
    }
  };

  // Keyboard shortcut to close modals with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedService) setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F3F4F6] relative selection:bg-violet-500/20 selection:text-violet-300">
      {/* Desktop Custom Cursor */}
      <CustomCursor cursorText={cursorText} cursorVariant={cursorVariant} />

      {/* Main Navbar */}
      <Navbar
        onOpenProjectBuilder={() => scrollToSection('contact')}
        onNavigate={scrollToSection}
        onHover={handleHover}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onStartProject={handleStartProject}
          onExploreServices={handleExploreServices}
          onHover={handleHover}
        />

        {/* 2. Trust & Positioning Bar */}
        <TrustBar
          onSelectTag={handleSelectTrustTag}
          onHover={handleHover}
        />

        {/* 3. Services Section with visual work samples */}
        <ServicesSection
          onSelectService={(service) => {
            playSound('open');
            setSelectedService(service);
          }}
          onHover={handleHover}
        />

        {/* 4. Why Agentic Vision (Strategic Creation) */}
        <WhyUsSection onHover={handleHover} />

        {/* 5. Process Section (How We Build) */}
        <ProcessSection onHover={handleHover} />

        {/* 6. About Studio Section */}
        <AboutSection
          onStartProject={handleStartProject}
          onHover={handleHover}
        />

        {/* 7. Capabilities Matrix */}
        <CapabilitiesSection onHover={handleHover} />

        {/* 8. Technology Stack */}
        <TechStackSection onHover={handleHover} />

        {/* 9. Full-Width CTA Section */}
        <CTASection
          onStartProject={handleStartProject}
          onTalk={() => scrollToSection('contact')}
          onHover={handleHover}
        />

        {/* 10. Contact & Project Inquiry Form */}
        <ContactSection
          formData={formData}
          setFormData={setFormData}
          onHover={handleHover}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} onHover={handleHover} />

      {/* Deep-Dive Service Details Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestService={handleRequestService}
          onHover={handleHover}
        />
      )}
    </div>
  );
}

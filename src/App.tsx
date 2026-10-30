/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TrainingSection } from './components/TrainingSection.tsx';
import { OurGymSection } from './components/OurGymSection.tsx';
import { MembershipSection } from './components/MembershipSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('Quarterly Membership');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for floating navbar indicator
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'training', 'our-gym', 'memberships', 'gallery', 'location', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        if (id === 'hero' && window.scrollY < 300) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiryModal = (plan?: string) => {
    if (plan) {
      setSelectedPlanForModal(plan);
    }
    setModalOpen(true);
  };

  const handleScrollToContact = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMembership = () => {
    const el = document.getElementById('memberships');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#1e1a17] font-sans selection:bg-[#5c3317] selection:text-[#faf6f0]">
      {/* Floating Header matching Koi Cafe */}
      <Header
        onOpenEnquiryModal={handleOpenEnquiryModal}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section */}
        <div id="hero">
          <Hero
            onOpenEnquiryModal={() => handleOpenEnquiryModal()}
            onScrollToContact={() => handleScrollToContact()}
            onScrollToMembership={handleScrollToMembership}
          />
        </div>

        {/* Section 2: About Niwara Gym */}
        <AboutSection
          onOpenEnquiryModal={() => handleOpenEnquiryModal('Walkthrough Tour')}
        />

        {/* Section 3: Training & Fitness */}
        <TrainingSection
          onSelectProgram={(programTitle) => handleScrollToContact(programTitle)}
        />

        {/* Section 4: Our Gym */}
        <OurGymSection />

        {/* Section 5: Membership */}
        <MembershipSection
          onSelectPlan={(planName) => handleOpenEnquiryModal(planName)}
        />

        {/* Section 6: Inside Niwara Gallery */}
        <GallerySection />

        {/* Section 7: Location & Maps */}
        <LocationSection />

        {/* Section 8: Working Contact & Enquiry Form */}
        <ContactSection
          initialPlan={selectedPlanForModal}
        />

        {/* FAQs & Member Reviews */}
        <FaqSection />
      </main>

      {/* Footer matching Koi Cafe */}
      <Footer
        onOpenEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* Quick Booking / Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedPlan={selectedPlanForModal}
      />
    </div>
  );
}

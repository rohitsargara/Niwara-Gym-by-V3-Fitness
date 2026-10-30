import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Menu, X, ArrowUpRight, Dumbbell } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData.ts';

interface HeaderProps {
  onOpenEnquiryModal: (plan?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiryModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Training', href: '#training', id: 'training' },
    { name: 'Our Gym', href: '#our-gym', id: 'our-gym' },
    { name: 'Memberships', href: '#memberships', id: 'memberships' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Location', href: '#location', id: 'location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? 'pt-2.5 sm:pt-3' : 'pt-0'
        }`}
      >
        <div
          className={`mx-auto w-full transition-[max-width,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? 'max-w-6xl px-3 sm:px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-10'
          }`}
        >
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled
                ? 'h-16 rounded-full bg-[#faf6f0]/90 pr-2 pl-5 shadow-[0_12px_32px_-14px_rgba(68,37,15,0.35)] ring-1 ring-[#1e1a17]/[0.08] backdrop-blur-xl backdrop-saturate-150 sm:pl-6'
                : 'h-20 lg:h-24'
            }`}
          >
            {/* Logo matching Koi Cafe logo style */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-baseline gap-2 text-left"
              aria-label="Niwara Gym by V3 Fitness - Home"
            >
              <span
                className={`font-script text-[2.4rem] leading-none font-bold tracking-tight transition-colors duration-300 sm:text-[2.8rem] ${
                  isScrolled ? 'text-[#1e1a17]' : 'text-white'
                }`}
              >
                Niwara
              </span>
              <span
                className={`text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 sm:text-[11px] ${
                  isScrolled ? 'text-[#b4532a]' : 'text-[#e9cf98]'
                }`}
              >
                by V3 Fitness
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative rounded-full px-3 py-1.5 text-[14px] font-medium whitespace-nowrap transition-colors duration-200 2xl:px-4 ${
                      isScrolled
                        ? isActive
                          ? 'text-[#1e1a17] font-semibold'
                          : 'text-[#1e1a17]/75 hover:text-[#1e1a17]'
                        : isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className={`absolute inset-0 rounded-full ${
                          isScrolled
                            ? 'bg-white shadow-[0_2px_8px_-2px_rgba(68,37,15,0.18)] ring-1 ring-[#1e1a17]/[0.06]'
                            : 'bg-white/15 ring-1 ring-white/25'
                        }`}
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Call Link */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className={`hidden h-11 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold whitespace-nowrap transition-colors md:inline-flex lg:text-sm ${
                  isScrolled
                    ? 'text-[#1e1a17] hover:bg-[#1e1a17]/[0.05]'
                    : 'text-white ring-1 ring-white/30 hover:bg-white/10'
                }`}
                title="Call Niwara Gym"
              >
                <Phone className="h-4 w-4 text-[#b4532a]" />
                <span className="hidden xl:inline">{BUSINESS_INFO.phoneDisplay}</span>
                <span className="xl:hidden">Call</span>
              </a>

              {/* Primary CTA Button */}
              <button
                onClick={() => onOpenEnquiryModal()}
                className={`inline-flex h-10 items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold transition-all duration-200 active:scale-[0.98] sm:h-11 sm:px-5 sm:text-sm ${
                  isScrolled
                    ? 'bg-[#5c3317] text-[#faf6f0] shadow-[0_6px_18px_-8px_rgba(92,51,23,0.7)] hover:bg-[#44250f]'
                    : 'bg-white text-[#1e1a17] shadow-lg hover:bg-[#faf6f0]'
                }`}
              >
                <span>Explore Membership</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors xl:hidden sm:h-11 sm:w-11 ${
                  isScrolled
                    ? 'text-[#1e1a17] ring-1 ring-[#1e1a17]/15 hover:bg-[#1e1a17]/5'
                    : 'text-white ring-1 ring-white/40 hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu matching Koi Cafe */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#15110e]/70 backdrop-blur-md xl:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 flex w-full max-w-sm flex-col justify-between overflow-y-auto bg-[#faf6f0] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Mobile Header Bar */}
                <div className="flex items-center justify-between border-b border-[#e6dccf] pb-5">
                  <div>
                    <span className="font-script text-3xl font-bold text-[#1e1a17]">Niwara</span>
                    <p className="text-[10px] font-semibold tracking-wider text-[#b4532a] uppercase">by V3 Fitness</p>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eadf] text-[#1e1a17] transition-colors hover:bg-[#e6dccf]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Greeting in font-hand */}
                <div className="mt-6">
                  <p className="font-hand text-3xl text-[#b4532a]">Ready to train?</p>
                  <p className="mt-0.5 text-xs text-[#5e554d]">Navigate to any section below</p>
                </div>

                {/* Nav Links */}
                <ul className="mt-6 space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-serif text-lg transition-colors ${
                          activeSection === link.id
                            ? 'bg-[#f2eadf] font-semibold text-[#5c3317]'
                            : 'text-[#1e1a17] hover:bg-[#f2eadf]/60'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-40" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick Contacts */}
              <div className="mt-8 border-t border-[#e6dccf] pt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full rounded-full bg-[#5c3317] py-3.5 text-center text-sm font-semibold text-[#faf6f0] shadow-md transition-colors hover:bg-[#44250f]"
                >
                  Explore Membership
                </button>

                <div className="mt-4 flex flex-col gap-2 text-xs text-[#5e554d]">
                  <a href={BUSINESS_INFO.phoneHref} className="flex items-center gap-2 py-1 text-[#1e1a17] hover:text-[#b4532a]">
                    <Phone className="h-4 w-4 text-[#b4532a]" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 py-1 text-[#1e1a17] hover:text-[#b4532a]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b4532a]" />
                    <span>Navi Peth, Pune 411030</span>
                  </a>
                </div>

                <p className="mt-4 text-center font-hand text-xl text-[#5c3317]/70">
                  Consistency. Discipline. Community.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

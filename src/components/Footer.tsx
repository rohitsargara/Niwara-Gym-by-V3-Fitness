import React from 'react';
import { ArrowUpRight, Phone, MapPin, Mail, MessageSquare, Instagram, Facebook, Youtube, Navigation, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData.ts';

interface FooterProps {
  onOpenEnquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiryModal }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About Niwara', href: '#about' },
    { name: 'Training Programs', href: '#training' },
    { name: 'Our Gym & Facilities', href: '#our-gym' },
    { name: 'Membership Plans', href: '#memberships' },
    { name: 'Inside Gallery', href: '#gallery' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Contact Desk', href: '#contact' },
  ];

  const programLinks = [
    { name: 'Gym & Strength Training', href: '#training' },
    { name: 'CrossFit & Conditioning', href: '#training' },
    { name: 'Zumba & Dance Cardio', href: '#training' },
    { name: 'Personal Coaching 1-on-1', href: '#training' },
  ];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#2b2420_0%,#211b18_50%,#181412_100%)] text-[#faf6f0]/70">
      {/* Radial glow effects matching Koi Cafe footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_0%,rgba(180,83,42,0.22),transparent_70%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(201,154,75,0.12),transparent_70%)]"
      />

      {/* Top Banner CTA matching Koi Cafe */}
      <div className="container-koi relative pt-16 sm:pt-20">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-[#e2a07c] sm:text-3xl">
              Consistency is where transformation lives
            </p>
            <h2 className="mt-1 font-serif text-4xl leading-[1.05] text-[#faf6f0] sm:text-5xl">
              See you on the gym floor.
            </h2>
            <p className="mt-3 text-xs text-[#faf6f0]/60 sm:text-sm">
              Niwara Gym by V3 Fitness · Navi Peth, Pune
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-2 rounded-full bg-[#faf6f0] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#44250f] shadow-[0_14px_30px_-12px_rgba(0,0,0,0.6)] transition-all hover:gap-3 hover:bg-white active:scale-[0.98]"
            >
              <span>Explore Membership</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#faf6f0] ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:ring-white/30"
            >
              <MessageSquare className="h-4 w-4 text-[#e2a07c]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#faf6f0] ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:ring-white/30"
            >
              <Phone className="h-4 w-4 text-[#e2a07c]" />
              <span>Call Front Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3-Column Content Grid matching Koi Cafe */}
      <div className="container-koi relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-12 lg:py-14">
        {/* Column 1: Location & Outlet Card */}
        <div>
          <h3 className="font-sans text-xs font-semibold tracking-[0.3em] text-[#faf6f0]/45 uppercase">
            Our Facility
          </h3>

          <div className="mt-4 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-script text-2xl font-bold text-[#faf6f0]">
                  Niwara Gym
                </span>
                <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#e2a07c]">
                  V3 Fitness
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open in Navi Peth</span>
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#faf6f0]/75">
              {BUSINESS_INFO.fullAddress}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
              <span className="text-[#faf6f0]/50">Mon – Sat: 6 AM – 10 PM</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#e2a07c] hover:underline"
              >
                <span>Directions</span>
                <Navigation className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-[#faf6f0]/60">
            <span>Follow our journey:</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#faf6f0]/80 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#faf6f0]/80 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#faf6f0]/80 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation & Programs */}
        <div>
          <h3 className="font-sans text-xs font-semibold tracking-[0.3em] text-[#faf6f0]/45 uppercase">
            Quick Navigation
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScroll(link.href)}
                  className="text-left text-[#faf6f0]/70 transition-colors hover:text-[#faf6f0] hover:translate-x-1 duration-200 inline-block"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Hours & Direct Contact */}
        <div>
          <h3 className="font-sans text-xs font-semibold tracking-[0.3em] text-[#faf6f0]/45 uppercase">
            Hours & Direct Desk
          </h3>
          <div className="mt-4 space-y-3 text-xs leading-relaxed text-[#faf6f0]/70">
            <div>
              <p className="font-semibold text-[#faf6f0]">Monday – Saturday:</p>
              <p>{BUSINESS_INFO.hours.weekdays}</p>
            </div>
            <div>
              <p className="font-semibold text-[#faf6f0]">Sunday:</p>
              <p>{BUSINESS_INFO.hours.sunday}</p>
            </div>
            <div className="border-t border-white/10 pt-3">
              <p className="font-semibold text-[#faf6f0]">Telephone:</p>
              <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#e2a07c]">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="font-semibold text-[#faf6f0]">Email Address:</p>
              <a href={BUSINESS_INFO.emailHref} className="hover:text-[#e2a07c]">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching Koi Cafe with subtle watermark */}
      <div className="border-t border-white/10 py-6 text-xs text-[#faf6f0]/50">
        <div className="container-koi flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {currentYear} Niwara Gym by V3 Fitness. All rights reserved. Navi Peth, Pune.</p>
          <div className="flex items-center gap-4">
            <a href="#about" onClick={() => handleScroll('#about')} className="hover:text-white">Privacy</a>
            <span>·</span>
            <a href="#memberships" onClick={() => handleScroll('#memberships')} className="hover:text-white">Terms of Membership</a>
            <span>·</span>
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-white">Google Maps</a>
          </div>
        </div>
      </div>

      {/* Decorative script watermark matching Koi Cafe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 -bottom-8 font-script text-[7.5rem] leading-none font-bold text-[#faf6f0]/[0.03] select-none sm:right-24 sm:text-[10rem]"
      >
        Niwara
      </div>
    </footer>
  );
};

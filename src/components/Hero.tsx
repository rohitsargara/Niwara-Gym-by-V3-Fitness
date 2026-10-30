import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star, ChevronDown, Clock, ShieldCheck, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData.ts';

interface HeroProps {
  onOpenEnquiryModal: () => void;
  onScrollToContact: () => void;
  onScrollToMembership: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiryModal,
  onScrollToContact,
  onScrollToMembership,
}) => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#15110e] flex items-center justify-center pt-24 pb-16">
      {/* Background Photography with Warm Film Grading */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85"
          alt="Niwara Gym interior and strength training equipment"
          className="h-full w-full object-cover object-center filter brightness-[0.42] contrast-[1.12] saturate-[0.9]"
        />
        {/* Signature Koi Cafe Vignette and Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#15110e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(21,17,14,0.85)_100%)]" />
        {/* Subtle patterned paper/matrix texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2d5c3_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]"
        />
      </div>

      <div className="container-koi relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow with Rating and Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#faf6f0] uppercase ring-1 ring-white/20 backdrop-blur-md sm:text-xs"
        >
          <span className="flex items-center gap-1 text-[#e9cf98]">
            <Star className="h-3.5 w-3.5 fill-[#e9cf98]" />
            <span>4.9</span>
          </span>
          <span className="h-3 w-[1px] bg-white/25" />
          <span>Navi Peth, Pune</span>
          <span className="h-3 w-[1px] bg-white/25 hidden sm:inline-block" />
          <span className="hidden sm:inline-flex items-center gap-1 text-[#e2a07c]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today: 6 AM – 10 PM</span>
          </span>
        </motion.div>

        {/* Script Welcoming Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 font-hand text-2xl text-[#e2a07c] sm:text-3xl md:text-4xl"
        >
          Welcome to Niwara Gym by V3 Fitness
        </motion.p>

        {/* Master Headline with Koi Cafe Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-3 max-w-5xl font-serif text-[2.75rem] leading-[1.08] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#fff7e6] via-[#edd5a4] to-[#b8853b] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          BUILD YOUR STRONGER SELF.
        </motion.h1>

        {/* Supporting Text matching the user prompt */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#faf6f0]/85 sm:text-lg md:text-xl font-normal"
        >
          Your fitness journey starts here. Train with purpose, stay consistent, and become the strongest version of yourself at Niwara Gym by V3 Fitness.
        </motion.p>

        {/* Dual CTAs matching Koi Cafe styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-9 flex flex-col w-full max-w-md gap-3.5 sm:flex-row sm:w-auto sm:items-center sm:justify-center"
        >
          {/* Primary CTA */}
          <button
            onClick={onScrollToMembership}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#faf6f0] px-8 py-4 text-base font-semibold text-[#44250f] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] transition-all duration-200 hover:gap-3 hover:bg-white active:scale-[0.98]"
          >
            <span>EXPLORE MEMBERSHIP</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onScrollToContact}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white active:scale-[0.98]"
          >
            <span>CONTACT US</span>
          </button>
        </motion.div>

        {/* Feature stats badge array at hero bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md text-center">
            <p className="font-serif text-2xl font-bold text-[#faf6f0] sm:text-3xl">5,000+</p>
            <p className="mt-0.5 text-xs text-[#faf6f0]/65 uppercase tracking-wider">Sq. Ft. Floor</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md text-center">
            <p className="font-serif text-2xl font-bold text-[#faf6f0] sm:text-3xl">1,200+</p>
            <p className="mt-0.5 text-xs text-[#faf6f0]/65 uppercase tracking-wider">Members Trained</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md text-center">
            <p className="font-serif text-2xl font-bold text-[#faf6f0] sm:text-3xl">12+</p>
            <p className="mt-0.5 text-xs text-[#faf6f0]/65 uppercase tracking-wider">Certified Coaches</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md text-center">
            <p className="font-serif text-2xl font-bold text-[#faf6f0] sm:text-3xl">4.9 ★</p>
            <p className="mt-0.5 text-xs text-[#faf6f0]/65 uppercase tracking-wider">Top Rated in Pune</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="mt-12 text-white/50 cursor-pointer hidden md:flex flex-col items-center gap-1 hover:text-white/80 transition-colors"
          onClick={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[11px] font-medium tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
};

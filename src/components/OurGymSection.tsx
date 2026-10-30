import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ShieldCheck, Zap, Activity, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { GYM_FACILITIES } from '../data/gymData.ts';

export const OurGymSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentFacility = GYM_FACILITIES[activeTab];

  return (
    <section id="our-gym" className="relative py-24 sm:py-32 bg-[#faf6f0] text-[#1e1a17] overflow-hidden">
      <div className="container-koi relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
            The Training Sanctuary
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl">
            YOUR SPACE. YOUR GOALS. YOUR JOURNEY.
          </h2>
          <p className="mt-4 text-base text-[#5e554d] sm:text-lg">
            Step inside our 5,000+ sq. ft. purpose-built facility in Navi Peth, Pune. Designed specifically to remove friction, inspire discipline, and elevate your standard.
          </p>
        </div>

        {/* Interactive Tab Selectors matching Koi Cafe pill scroller */}
        <div className="mt-12 flex justify-start sm:justify-center overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex gap-2 rounded-full border border-[#e6dccf] bg-[#fffdf9] p-1.5 shadow-sm">
            {GYM_FACILITIES.map((facility, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={facility.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 sm:text-sm ${
                    isActive
                      ? 'text-[#faf6f0]'
                      : 'text-[#1e1a17]/70 hover:text-[#1e1a17]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gym-tab-pill"
                      className="absolute inset-0 rounded-full bg-[#5c3317] shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{facility.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-4 sm:p-8 lg:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFacility.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              {/* Facility Visual */}
              <div className="relative overflow-hidden rounded-2xl bg-[#e6dccf] lg:col-span-7">
                <img
                  src={currentFacility.image}
                  alt={currentFacility.title}
                  className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 rounded-full bg-[#1e1a17]/80 px-4 py-1.5 text-xs font-semibold text-[#faf6f0] backdrop-blur-md">
                  {currentFacility.subtitle}
                </div>
              </div>

              {/* Facility Details */}
              <div className="lg:col-span-5">
                <span className="rounded-full bg-[#f2eadf] px-3.5 py-1 text-xs font-semibold text-[#b4532a] tracking-wide uppercase">
                  {currentFacility.tag}
                </span>

                <h3 className="mt-3 font-serif text-2xl font-bold text-[#1e1a17] sm:text-3xl">
                  {currentFacility.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#5e554d] sm:text-base">
                  {currentFacility.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 space-y-2.5 border-t border-[#e6dccf] pt-5">
                  <p className="text-xs font-bold tracking-wider text-[#1e1a17] uppercase">
                    Key Specifications:
                  </p>
                  <ul className="grid gap-2">
                    {currentFacility.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#5e554d] sm:text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Member"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Member"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                      alt="Member"
                    />
                  </div>
                  <p className="text-xs text-[#5e554d]">
                    Preferred by <span className="font-semibold text-[#1e1a17]">1,200+ Pune residents</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

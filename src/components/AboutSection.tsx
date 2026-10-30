import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, HeartHandshake, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData.ts';

interface AboutSectionProps {
  onOpenEnquiryModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiryModal }) => {
  const pillars = [
    {
      icon: Compass,
      title: 'Consistency & Discipline',
      description: 'Progress is not made in a day, but day by day through structured routines.',
    },
    {
      icon: Award,
      title: 'Precision Biomechanics',
      description: 'Equipment calibrated for natural anatomical paths, preventing injury.',
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Community',
      description: 'An uplifting environment where members encourage and push each other.',
    },
    {
      icon: Sparkles,
      title: 'Clean & Ventilated',
      description: 'Spotlessly maintained, air-cooled, with dedicated sanitation stations.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#faf6f0] text-[#1e1a17] overflow-hidden">
      {/* Decorative dot matrix pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2d5c3_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-40"
      />

      <div className="container-koi relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Composition matching Koi Cafe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6"
          >
            {/* Primary Main Image Frame */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-[#f2eadf] p-2.5 shadow-[0_20px_50px_-20px_rgba(68,37,15,0.25)] ring-1 ring-[#e6dccf] sm:max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                  alt="Niwara Gym by V3 Fitness training floor in Navi Peth Pune"
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[460px]"
                />
              </div>

              {/* Floating Badge on Main Photo */}
              <div className="absolute top-6 left-6 rounded-full bg-[#1e1a17]/85 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#faf6f0] backdrop-blur-md">
                5,000 SQ. FT. FACILITY
              </div>
            </div>

            {/* Overlapping secondary card / polaroid style matching Koi Cafe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-2 max-w-[240px] rounded-2xl bg-[#fffdf9] p-4 shadow-[0_18px_36px_-12px_rgba(68,37,15,0.25)] ring-1 ring-[#e6dccf] sm:bottom-6 sm:right-0 sm:max-w-[270px]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f2eadf] text-[#5c3317]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#1e1a17] leading-tight">V3 Fitness</p>
                  <p className="text-xs text-[#5e554d]">Management & Standards</p>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-[#5e554d] leading-relaxed">
                Curated training methodologies and equipment guidelines verified by elite fitness mentors.
              </p>
            </motion.div>

            {/* Handwritten Note Accent */}
            <div className="absolute -top-6 -right-2 hidden sm:block">
              <p className="font-hand text-3xl text-[#b4532a] rotate-6 select-none">
                Consistency over intensity.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            {/* Script Eyebrow */}
            <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
              About Niwara Gym
            </p>

            {/* Section Headline */}
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl">
              MORE THAN JUST A GYM.
            </h2>

            {/* Body Content from prompt */}
            <p className="mt-6 text-base leading-relaxed text-[#5e554d] sm:text-lg">
              Welcome to <span className="font-semibold text-[#1e1a17]">Niwara Gym by V3 Fitness</span>, a fitness destination in Navi Peth, Pune. We believe fitness is a journey built on consistency, discipline and the right environment. Whether you're beginning your fitness journey or working towards your next milestone, discover a place to focus on your health and fitness.
            </p>

            {/* Pillars Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-[#e6dccf] bg-[#fffdf9] p-4 transition-all duration-300 hover:border-[#b4532a]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f2eadf] text-[#5c3317] group-hover:bg-[#5c3317] group-hover:text-[#faf6f0] transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#1e1a17]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#5e554d]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Section Action & Quote */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => onOpenEnquiryModal()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5c3317] px-7 py-3.5 text-sm font-semibold text-[#faf6f0] shadow-[0_6px_18px_-8px_rgba(92,51,23,0.7)] transition-all hover:bg-[#44250f] active:scale-[0.98]"
              >
                <span>Visit Our Gym in Navi Peth</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#5e554d]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Complimentary gym orientation for new visitors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

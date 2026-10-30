import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, Users, Flame, Check, Sparkles, ChevronRight } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/gymData.ts';
import { Program } from '../types.ts';

interface TrainingSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onSelectProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="training" className="relative py-24 sm:py-32 bg-[#f2eadf] text-[#1e1a17] overflow-hidden">
      {/* Texture Matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e6dccf_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-70"
      />

      <div className="container-koi relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-hand text-3xl text-[#b4532a] sm:text-4xl"
          >
            Curated Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl"
          >
            FIND YOUR WAY TO FITNESS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#5e554d] sm:text-lg"
          >
            Whether your focus is progressive strength overload, functional endurance, rhythmic cardio, or 1-on-1 coaching, we provide the structured framework.
          </motion.p>
        </div>

        {/* 4 Cards Grid matching Koi Cafe card layout */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b4532a]/40 hover:shadow-xl"
            >
              <div>
                {/* Photo with zoom effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#e6dccf]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#1e1a17]/80 px-3 py-1 text-[11px] font-semibold text-[#faf6f0] backdrop-blur-md uppercase tracking-wider">
                    {program.category}
                  </span>

                  {/* Intensity Tag */}
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-[#5c3317] backdrop-blur-md">
                    {program.intensity} Intensity
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 pt-4">
                  <h3 className="font-serif text-xl font-bold text-[#1e1a17] group-hover:text-[#5c3317] transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-1 font-hand text-lg text-[#b4532a] leading-none">
                    {program.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#5e554d] line-clamp-3">
                    {program.description}
                  </p>

                  {/* Feature highlights */}
                  <ul className="mt-4 space-y-1.5 border-t border-[#e6dccf]/70 pt-3 text-xs text-[#5e554d]">
                    {program.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-700 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Schedule */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#5e554d]">
                    <Clock className="h-3 w-3 text-[#b4532a]" />
                    <span>{program.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-4 p-3 pt-0">
                <button
                  onClick={() => onSelectProgram(program.title)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full border border-[#1e1a17]/20 bg-[#f2eadf] py-2.5 text-xs font-semibold text-[#1e1a17] transition-all hover:border-[#5c3317] hover:bg-[#5c3317] hover:text-[#faf6f0]"
                >
                  <span>Enquire For Batch</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Customized Coaching */}
        <div className="mt-12 rounded-2xl border border-[#e6dccf] bg-[#fffdf9] p-6 text-center sm:p-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row text-left">
            <div>
              <p className="font-hand text-2xl text-[#b4532a]">Unsure where to begin?</p>
              <h4 className="font-serif text-lg font-bold text-[#1e1a17] sm:text-xl">
                Get a Complimentary Fitness Consultation at Navi Peth
              </h4>
              <p className="text-xs text-[#5e554d] sm:text-sm">
                Our head trainer assesses your fitness baseline and suggests the ideal training split.
              </p>
            </div>
            <button
              onClick={() => onSelectProgram('Complimentary Fitness Consultation')}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#5c3317] px-6 py-3 text-xs font-semibold text-[#faf6f0] transition-colors hover:bg-[#44250f]"
            >
              <span>Book Consultation</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

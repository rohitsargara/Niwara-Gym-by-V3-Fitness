import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star, Quote } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data/gymData.ts';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#faf6f0] text-[#1e1a17] overflow-hidden">
      {/* Texture matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2d5c3_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-40"
      />

      <div className="container-koi relative z-10">
        {/* Testimonials Reel matching Koi Cafe review layout */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
            Voices of Niwara
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl">
            REAL MEMBERS. REAL RESULTS.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#b4532a]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#b4532a]" />
                  ))}
                </div>
                <p className="mt-4 text-xs italic leading-relaxed text-[#5e554d] sm:text-sm">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-[#e6dccf] pt-4">
                <p className="font-serif font-bold text-[#1e1a17]">{item.name}</p>
                <div className="flex items-center justify-between text-[11px] text-[#5e554d]">
                  <span>{item.location}</span>
                  <span className="font-semibold text-[#b4532a]">{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-24 mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-hand text-2xl text-[#b4532a]">Frequently Asked Questions</p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-[#1e1a17] sm:text-3xl">
              EVERYTHING YOU NEED TO KNOW
            </h3>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e6dccf] bg-[#fffdf9] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-serif text-base font-bold text-[#1e1a17] sm:text-lg hover:text-[#5c3317]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#b4532a] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-[#e6dccf]/70 px-5 pb-5 pt-3 text-sm text-[#5e554d] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

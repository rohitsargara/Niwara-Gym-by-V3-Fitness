import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, PhoneCall } from 'lucide-react';
import { MEMBERSHIP_PLANS, BUSINESS_INFO } from '../data/gymData.ts';
import { MembershipPlan } from '../types.ts';

interface MembershipSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="memberships" className="relative py-24 sm:py-32 bg-[#faf6f0] text-[#1e1a17] overflow-hidden">
      {/* Decorative dot matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2d5c3_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-40"
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
            Invest in Your Health
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl"
          >
            YOUR FITNESS JOURNEY STARTS HERE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#5e554d] sm:text-lg"
          >
            Choose a commitment structure that fits your lifestyle. Transparent terms, zero hidden maintenance fees, and authentic guidance.
          </motion.p>
        </div>

        {/* 4 Membership Plans Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERSHIP_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-2 border-[#b4532a] bg-[#fffdf9] shadow-[0_16px_36px_-12px_rgba(180,83,42,0.22)] ring-1 ring-[#b4532a]/20'
                  : 'border border-[#e6dccf] bg-[#fffdf9] shadow-sm hover:border-[#5c3317]/30 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold tracking-wider uppercase ${
                    plan.popular
                      ? 'bg-[#b4532a] text-[#faf6f0] shadow-sm'
                      : 'bg-[#f2eadf] text-[#5c3317] border border-[#e6dccf]'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="pt-2 text-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1e1a17]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#b4532a]">
                    {plan.period}
                  </p>
                </div>

                {/* Price Display matching strict requirement */}
                <div className="my-6 rounded-2xl bg-[#f2eadf]/70 p-4 text-center border border-[#e6dccf]">
                  <p className="text-xs font-medium text-[#5e554d]">Pricing Structure</p>
                  <p className="mt-1 font-serif text-base font-bold text-[#5c3317] sm:text-lg">
                    {plan.pricingLabel}
                  </p>
                  <p className="mt-1 text-[11px] text-[#5e554d]/80">
                    Custom seasonal packages & student discounts available
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-[#5e554d]">
                  {plan.description}
                </p>

                {/* Features list */}
                <div className="mt-6 space-y-2.5 border-t border-[#e6dccf] pt-5">
                  <p className="text-[11px] font-bold tracking-wider text-[#1e1a17] uppercase">
                    Plan Inclusions:
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#5e554d]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-4 border-t border-[#e6dccf]">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full rounded-full py-3.5 text-center text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-[#5c3317] text-[#faf6f0] shadow-md hover:bg-[#44250f]'
                      : 'border border-[#1e1a17]/20 bg-[#f2eadf] text-[#1e1a17] hover:border-[#5c3317] hover:bg-[#5c3317] hover:text-[#faf6f0]'
                  }`}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparent Guarantee Callout */}
        <div className="mt-12 rounded-2xl border border-[#e6dccf] bg-[#fffdf9] p-6 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f2eadf] text-[#5c3317]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1e1a17]">
                  No High-Pressure Sales Tactics
                </h4>
                <p className="text-xs text-[#5e554d] sm:text-sm">
                  Walk in, inspect the facility, test the machines, and talk to coaches before committing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#1e1a17]/20 bg-[#faf6f0] px-5 py-2.5 text-xs font-semibold text-[#1e1a17] hover:bg-[#f2eadf] transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#b4532a]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => onSelectPlan('General Membership Enquiry')}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#5c3317] px-6 py-2.5 text-xs font-semibold text-[#faf6f0] hover:bg-[#44250f] transition-colors"
              >
                <span>Request Pricing Sheet</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

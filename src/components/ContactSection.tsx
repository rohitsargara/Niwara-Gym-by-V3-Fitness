import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, MEMBERSHIP_PLANS } from '../data/gymData.ts';
import { EnquiryFormData } from '../types.ts';

interface ContactSectionProps {
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPlan = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    fitnessGoal: 'General Fitness & Toning',
    preferredPlan: initialPlan || 'Quarterly Membership',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fitnessGoals = [
    'General Fitness & Toning',
    'Strength Training & Muscle Hypertrophy',
    'Fat Loss & Body Recomposition',
    'CrossFit & Metabolic Conditioning',
    'Zumba & Aerobic Dance Cardio',
    '1-on-1 Personal Training Coaching',
    'Postural Correction & Athletic Mobility',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    // Simulate real local persistence or submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Niwara Gym by V3 Fitness, I would like to enquire about memberships.\n\nName: ${
        formData.fullName || 'Visitor'
      }\nGoal: ${formData.fitnessGoal}\nPlan: ${formData.preferredPlan}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#f2eadf] text-[#1e1a17] overflow-hidden">
      {/* Background matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e6dccf_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-70"
      />

      <div className="container-koi relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
            Begin Your Journey
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl">
            LET'S GET YOU STARTED.
          </h2>
          <p className="mt-4 text-base text-[#5e554d] sm:text-lg">
            Have questions about batches, pricing packages, or coaching? Send an enquiry or ping us directly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Perks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-6 sm:p-8 lg:col-span-5 shadow-sm"
          >
            <div className="border-b border-[#e6dccf] pb-5">
              <span className="font-script text-2xl font-bold text-[#1e1a17]">Niwara Gym</span>
              <p className="font-hand text-xl text-[#b4532a]">We are here to support your goals</p>
            </div>

            <div className="mt-6 space-y-4">
              {/* WhatsApp direct card */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">WhatsApp Concierge</h4>
                    <p className="text-xs text-emerald-700">Instant answers for queries & trials</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat on WhatsApp (+91 {BUSINESS_INFO.whatsappNumber.slice(2)})</span>
                </button>
              </div>

              {/* Direct call card */}
              <div className="rounded-2xl border border-[#e6dccf] bg-[#faf6f0] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2eadf] text-[#5c3317]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e1a17]">Call Front Desk</h4>
                    <p className="text-xs text-[#5e554d]">{BUSINESS_INFO.phoneDisplay}</p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1e1a17]/20 bg-[#fffdf9] px-4 py-2 text-xs font-semibold text-[#1e1a17] transition-colors hover:bg-[#f2eadf]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#b4532a]" />
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Email card */}
              <div className="rounded-2xl border border-[#e6dccf] bg-[#faf6f0] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2eadf] text-[#5c3317]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e1a17]">Email Desk</h4>
                    <p className="text-xs text-[#5e554d]">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#e6dccf] pt-6">
              <p className="font-hand text-2xl text-[#b4532a]">What happens after enquiry?</p>
              <ul className="mt-3 space-y-2 text-xs text-[#5e554d]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span>Our head trainer calls or messages you within 2 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span>You receive the official membership fee schedule & ongoing seasonal offers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span>Schedule your zero-obligation facility walkthrough and workout trial.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Working Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-6 sm:p-8 lg:col-span-7 shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="mt-4 font-hand text-3xl text-[#b4532a]">Thank you, {formData.fullName}!</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#1e1a17]">
                  Enquiry Received Successfully
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-[#5e554d]">
                  We have logged your request for <span className="font-semibold text-[#1e1a17]">{formData.preferredPlan}</span>. Our Navi Peth team will connect with you via phone / WhatsApp shortly.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        fitnessGoal: 'General Fitness & Toning',
                        preferredPlan: 'Quarterly Membership',
                        message: '',
                      });
                    }}
                    className="rounded-full border border-[#1e1a17]/20 bg-[#faf6f0] px-6 py-2.5 text-xs font-semibold text-[#1e1a17] hover:bg-[#f2eadf]"
                  >
                    Submit Another Enquiry
                  </button>

                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Ping Directly on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#e6dccf] pb-3">
                  <h3 className="font-serif text-xl font-bold text-[#1e1a17]">
                    Membership & Trial Enquiry Form
                  </h3>
                  <p className="text-xs text-[#5e554d]">
                    Fill in your details below and we will send the fee schedule immediately.
                  </p>
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs font-medium text-rose-700 border border-rose-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                    Full Name <span className="text-[#b4532a]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] placeholder-[#5e554d]/50 focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                      Mobile Number <span className="text-[#b4532a]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] placeholder-[#5e554d]/50 focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] placeholder-[#5e554d]/50 focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all"
                    />
                  </div>
                </div>

                {/* Fitness Goal & Preferred Plan */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fitnessGoal" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                      Fitness Goal
                    </label>
                    <select
                      id="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all"
                    >
                      {fitnessGoals.map((goal, gIdx) => (
                        <option key={gIdx} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredPlan" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                      Preferred Plan
                    </label>
                    <select
                      id="preferredPlan"
                      value={formData.preferredPlan}
                      onChange={(e) => setFormData({ ...formData, preferredPlan: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all"
                    >
                      {MEMBERSHIP_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.name}>
                          {plan.name} ({plan.period})
                        </option>
                      ))}
                      <option value="Personal Training Package">Personal Training 1-on-1</option>
                      <option value="Trial Session Walk-in">Trial Session Walk-in</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                    Any Specific Requirements or Questions?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your previous workout background, timings you prefer, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border border-[#e6dccf] bg-[#faf6f0] px-4 py-3 text-sm text-[#1e1a17] placeholder-[#5e554d]/50 focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317] transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5c3317] py-4 text-xs font-semibold tracking-wider text-[#faf6f0] uppercase shadow-[0_6px_18px_-8px_rgba(92,51,23,0.7)] transition-all hover:bg-[#44250f] disabled:opacity-60 active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, MessageSquare, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO, MEMBERSHIP_PLANS } from '../data/gymData.ts';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = 'Quarterly Membership',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan);
  const [preferredSlot, setPreferredSlot] = useState('Morning (6 AM - 10 AM)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      setSelectedPlan(preselectedPlan);
    }
  }, [preselectedPlan]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Niwara Gym by V3 Fitness, I would like to book a visit / enquire about membership.\nName: ${
        fullName || 'Visitor'
      }\nPlan: ${selectedPlan}\nSlot: ${preferredSlot}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#15110e]/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-6 shadow-2xl sm:p-8 text-[#1e1a17] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eadf] text-[#1e1a17] transition-colors hover:bg-[#e6dccf]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <p className="mt-3 font-hand text-2xl text-[#b4532a]">We look forward to meeting you</p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#1e1a17]">
                Enquiry Registered
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-xs text-[#5e554d]">
                Our team at Niwara Gym, Navi Peth will contact you on <span className="font-semibold">{phone}</span> to schedule your orientation.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Instant Confirmation on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full rounded-full border border-[#1e1a17]/20 bg-[#faf6f0] py-2.5 text-xs font-semibold text-[#1e1a17] hover:bg-[#f2eadf]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-[#e6dccf] pb-4 pr-8">
                <p className="font-hand text-2xl text-[#b4532a]">Niwara Gym by V3 Fitness</p>
                <h3 className="font-serif text-2xl font-bold text-[#1e1a17]">
                  Membership & Tour Enquiry
                </h3>
                <p className="mt-1 text-xs text-[#5e554d]">
                  Navi Peth, Pune · Contact Us for Membership Details & Trial Access
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#1e1a17] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#e6dccf] bg-[#faf6f0] px-3.5 py-2.5 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1e1a17] uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#e6dccf] bg-[#faf6f0] px-3.5 py-2.5 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1e1a17] uppercase tracking-wider">
                    Preferred Membership Plan
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#e6dccf] bg-[#faf6f0] px-3.5 py-2.5 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317]"
                  >
                    {MEMBERSHIP_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.name}>
                        {plan.name} ({plan.period})
                      </option>
                    ))}
                    <option value="Personal Training Package">Personal Training 1-on-1</option>
                    <option value="Trial Walk-in Visit">Free Trial Walk-in Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1e1a17] uppercase tracking-wider">
                    Preferred Workout Timing
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#e6dccf] bg-[#faf6f0] px-3.5 py-2.5 text-sm text-[#1e1a17] focus:border-[#5c3317] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5c3317]"
                  >
                    <option value="Early Morning (6 AM - 8 AM)">Early Morning (6 AM - 8 AM)</option>
                    <option value="Mid Morning (8 AM - 11 AM)">Mid Morning (8 AM - 11 AM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening Peak (5 PM - 8 PM)</option>
                    <option value="Night (8 PM - 10 PM)">Night Session (8 PM - 10 PM)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5c3317] py-3.5 text-xs font-semibold tracking-wider text-[#faf6f0] uppercase shadow-md transition-colors hover:bg-[#44250f] active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-center">
                <span className="text-xs text-[#5e554d]">Or connect immediately:</span>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

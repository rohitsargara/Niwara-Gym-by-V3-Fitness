import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Compass, ShieldAlert, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData.ts';

export const LocationSection: React.FC = () => {
  // Live IST Open/Closed status calculator
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [closingTimeText, setClosingTimeText] = useState<string>('Closes at 10:00 PM');

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate current Indian Standard Time (UTC + 5:30)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 is Sunday, 1-6 Mon-Sat
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      if (day === 0) {
        // Sunday: 7:00 AM (420) to 1:00 PM (780)
        const openMin = 7 * 60;
        const closeMin = 13 * 60;
        const open = currentMinutes >= openMin && currentMinutes < closeMin;
        setIsOpenNow(open);
        setClosingTimeText(open ? 'Closes at 1:00 PM today' : 'Opens Sunday at 7:00 AM');
      } else {
        // Mon-Sat: 6:00 AM (360) to 10:00 PM (1320)
        const openMin = 6 * 60;
        const closeMin = 22 * 60;
        const open = currentMinutes >= openMin && currentMinutes < closeMin;
        setIsOpenNow(open);
        setClosingTimeText(open ? 'Closes at 10:00 PM tonight' : 'Opens tomorrow at 6:00 AM');
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#faf6f0] text-[#1e1a17] overflow-hidden">
      {/* Decorative dot matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2d5c3_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-40"
      />

      <div className="container-koi relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
            Visit in Person
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl">
            COME TRAIN WITH US.
          </h2>
          <p className="mt-4 text-base text-[#5e554d] sm:text-lg">
            Located in peaceful, accessible Navi Peth, Pune. We welcome walk-ins for facility tours during all operational hours.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Left Column: Business Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-6 shadow-sm sm:p-8 lg:col-span-5"
          >
            <div>
              {/* Outlet status badge */}
              <div className="flex items-center justify-between border-b border-[#e6dccf] pb-5">
                <div>
                  <span className="font-script text-2xl font-bold text-[#1e1a17]">
                    Niwara Gym
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b4532a]">
                    by V3 Fitness
                  </p>
                </div>

                <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  isOpenNow
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span>{isOpenNow ? 'Open Now' : 'Closed Now'}</span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f2eadf] text-[#5c3317]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1e1a17]">
                    Business Address
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5e554d]">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                  <p className="mt-1 text-xs text-[#b4532a] font-medium">
                    {BUSINESS_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f2eadf] text-[#5c3317]">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#1e1a17]">
                      Training Hours
                    </h3>
                    <span className="text-xs font-semibold text-[#5e554d]">
                      {closingTimeText}
                    </span>
                  </div>

                  <div className="mt-2 space-y-1.5 text-xs text-[#5e554d]">
                    <div className="flex justify-between border-b border-[#e6dccf]/60 py-1">
                      <span className="font-medium text-[#1e1a17]">Monday – Saturday</span>
                      <span>{BUSINESS_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-[#1e1a17]">Sunday</span>
                      <span>{BUSINESS_INFO.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f2eadf] text-[#5c3317]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1e1a17]">
                    Front Desk Direct
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#1e1a17]">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#5e554d]">
                    Instant response for membership rates and walkthroughs
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-[#e6dccf] sm:flex-row">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#5c3317] px-6 py-3.5 text-xs font-semibold text-[#faf6f0] shadow-md transition-all hover:bg-[#44250f] active:scale-[0.98]"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1e1a17]/20 bg-[#f2eadf] px-6 py-3.5 text-xs font-semibold text-[#1e1a17] transition-all hover:border-[#5c3317] hover:bg-white active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[#b4532a]" />
                <span>Contact Desk</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-[#e6dccf] bg-[#fffdf9] p-2.5 shadow-sm lg:col-span-7 flex flex-col min-h-[420px]"
          >
            <div className="relative h-full w-full min-h-[380px] overflow-hidden rounded-2xl bg-[#e6dccf]">
              <iframe
                title="Niwara Gym by V3 Fitness Google Maps Location"
                src={BUSINESS_INFO.googleMapsEmbed}
                className="h-full w-full border-0 filter saturate-[0.9] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay card on map */}
              <div className="absolute top-4 left-4 max-w-xs rounded-2xl bg-[#fffdf9]/95 p-3.5 shadow-lg backdrop-blur-md border border-[#e6dccf]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#b4532a]" />
                  <p className="font-serif text-sm font-bold text-[#1e1a17]">Niwara Campus</p>
                </div>
                <p className="mt-1 text-[11px] text-[#5e554d]">
                  Thosarpaga, Navi Peth, Pune 411030
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#5c3317] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

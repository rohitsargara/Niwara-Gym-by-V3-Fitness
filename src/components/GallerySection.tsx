import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData.ts';
import { GalleryItem } from '../types.ts';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'community', label: 'Community' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#f2eadf] text-[#1e1a17] overflow-hidden">
      {/* Background paper dot matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e6dccf_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-70"
      />

      <div className="container-koi relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-3xl text-[#b4532a] sm:text-4xl">
            Visual Tour
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1e1a17] sm:text-4xl lg:text-5xl">
            INSIDE NIWARA.
          </h2>
          <p className="mt-4 text-base text-[#5e554d] sm:text-lg">
            Real snapshots from our training bays, equipment racks, dance floors, and coaching sessions in Navi Peth.
          </p>
        </div>

        {/* Filter Tabs matching Koi Cafe pill layout */}
        <div className="mt-10 flex justify-start sm:justify-center overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex gap-2 rounded-full border border-[#e6dccf] bg-[#fffdf9] p-1.5 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 sm:text-sm ${
                    isActive
                      ? 'text-[#faf6f0]'
                      : 'text-[#1e1a17]/70 hover:text-[#1e1a17]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="absolute inset-0 rounded-full bg-[#5c3317] shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#e6dccf] bg-[#fffdf9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e6dccf]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle vignette overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Hover icon button */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#1e1a17] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Caption on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-left">
                    <span className="rounded-full bg-[#b4532a] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="mt-1.5 font-serif text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Always visible title bar underneath */}
                <div className="flex items-center justify-between p-4">
                  <div className="min-w-0 pr-2 text-left">
                    <h4 className="truncate font-serif text-base font-bold text-[#1e1a17] group-hover:text-[#5c3317] transition-colors">
                      {item.title}
                    </h4>
                    <p className="truncate text-xs text-[#5e554d]">
                      {item.caption}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2eadf] text-[#5c3317] group-hover:bg-[#5c3317] group-hover:text-white transition-colors">
                    <Eye className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal matching Koi Cafe */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
              }}
              className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
              }}
              className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Image & Caption Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl bg-[#1e1a17] text-[#faf6f0] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex]?.image}
                alt={filteredItems[lightboxIndex]?.title}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="p-5 text-center sm:p-6">
                <span className="rounded-full bg-[#b4532a] px-3 py-0.5 text-xs font-bold text-white uppercase tracking-wider">
                  {filteredItems[lightboxIndex]?.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
                <p className="mt-1 text-sm text-[#faf6f0]/75">
                  {filteredItems[lightboxIndex]?.caption}
                </p>
                <p className="mt-3 text-xs text-white/40">
                  {lightboxIndex + 1} of {filteredItems.length} · Use arrow keys to navigate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

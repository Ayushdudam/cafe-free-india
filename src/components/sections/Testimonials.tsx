"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { TESTIMONIALS } from "@/content/testimonials";
import { BUSINESS } from "@/content/business";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;
  const item = TESTIMONIALS[currentIdx];

  // Autoplay every 6s unless hovered or focused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="reviews"
      className="relative bg-cream-100 text-roast-600 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
        <SectionHeading
          label="PATRON VOICES"
          title="Warm Words From The Neighbourhood"
          highlightWord="Neighbourhood"
          subtitle="Moments and memories shared over coffee at our Lower Parel corner."
          align="center"
          theme="light"
        />

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto rounded-card bg-milk-50 border border-roast-600/10 p-8 sm:p-12 shadow-warm text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Giant Decorative Serif Quote Mark */}
          <span
            className="font-serif text-8xl md:text-9xl text-amber-500/20 absolute top-4 left-6 select-none pointer-events-none leading-none"
            aria-hidden="true"
          >
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* 5 Stars Rating */}
              <div className="flex items-center gap-1 mb-6" aria-label={`${item.stars} out of 5 stars`}>
                {[...Array(item.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif italic text-lg sm:text-2xl text-roast-600 leading-relaxed mb-8 max-w-2xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Guest Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-caramel-500">
                  <div className="w-full h-full rounded-full bg-cream-100 flex items-center justify-center font-serif font-bold text-roast-600">
                    {item.name.charAt(0)}
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-sm sm:text-base text-roast-600">
                    {item.name}
                  </h4>
                  <p className="text-xs text-roast-600/70">
                    {item.role} &bull; {item.area}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev/Next & Indicators */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-roast-600/10">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-cream-100 text-roast-600 hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pill Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    idx === currentIdx
                      ? "w-8 bg-amber-500"
                      : "w-2 bg-roast-600/20 hover:bg-roast-600/40"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-cream-100 text-roast-600 hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews Direct Link */}
        <div className="text-center mt-10">
          <a
            href={BUSINESS.googleMaps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-roast-600/20 hover:border-amber-500 text-roast-600 hover:text-amber-600 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            <span>Read Live Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

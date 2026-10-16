"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { SHOWCASE_PHOTOS, ShowcasePhoto } from "@/content/showcase";
import { directionsUrl } from "@/content/business";
import { Navigation, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FromOurKitchen: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % SHOWCASE_PHOTOS.length : 0));
  }, [selectedIdx]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) =>
      prev !== null ? (prev - 1 + SHOWCASE_PHOTOS.length) % SHOWCASE_PHOTOS.length : 0
    );
  }, [selectedIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, nextImage, prevImage]);

  return (
    <section
      id="from-our-kitchen"
      className="relative bg-espresso-900 text-cream-100 py-20 md:py-28 overflow-hidden border-t border-glass-border"
    >
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <SectionHeading
          label="FROM OUR KITCHEN"
          title="A Little Taste Of What's Waiting"
          highlightWord="Taste"
          subtitle="A peek into the warm plates, slow brews and sweet finales crafted every day in our Lower Parel kitchen."
          align="center"
          theme="dark"
        />

        {/* Desktop Asymmetric Showcase Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 auto-rows-[220px] mb-12">
          {/* Tile 1: Hero Large Tile (Col 1-7, Row 1-2) */}
          <div
            onClick={() => openLightbox(0)}
            className="col-span-7 row-span-2 group relative rounded-card overflow-hidden bg-espresso-800 border border-glass-border hover:border-amber-500/50 cursor-pointer shadow-warm"
          >
            <Image
              src={SHOWCASE_PHOTOS[0].image}
              alt={SHOWCASE_PHOTOS[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-106"
              sizes="(max-width: 1024px) 60vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="font-serif italic text-lg text-cream-100">
                {SHOWCASE_PHOTOS[0].caption}
              </span>
            </div>
          </div>

          {/* Tile 2: Medium Stacked Top Right (Col 8-12, Row 1) */}
          <div
            onClick={() => openLightbox(1)}
            className="col-span-5 row-span-1 group relative rounded-card overflow-hidden bg-espresso-800 border border-glass-border hover:border-amber-500/50 cursor-pointer shadow-warm"
          >
            <Image
              src={SHOWCASE_PHOTOS[1].image}
              alt={SHOWCASE_PHOTOS[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-106"
              sizes="(max-width: 1024px) 40vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span className="font-serif italic text-base text-cream-100">
                {SHOWCASE_PHOTOS[1].caption}
              </span>
            </div>
          </div>

          {/* Tile 3: Medium Stacked Bottom Right (Col 8-12, Row 2) */}
          <div
            onClick={() => openLightbox(2)}
            className="col-span-5 row-span-1 group relative rounded-card overflow-hidden bg-espresso-800 border border-glass-border hover:border-amber-500/50 cursor-pointer shadow-warm"
          >
            <Image
              src={SHOWCASE_PHOTOS[2].image}
              alt={SHOWCASE_PHOTOS[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-106"
              sizes="(max-width: 1024px) 40vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span className="font-serif italic text-base text-cream-100">
                {SHOWCASE_PHOTOS[2].caption}
              </span>
            </div>
          </div>

          {/* Bottom Row: 3 Smaller Tiles (Col spans: 4, 4, 4) */}
          {SHOWCASE_PHOTOS.slice(3, 6).map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index + 3)}
              className="col-span-4 row-span-1 group relative rounded-card overflow-hidden bg-espresso-800 border border-glass-border hover:border-amber-500/50 cursor-pointer shadow-warm"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-106"
                sizes="(max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-serif italic text-sm text-cream-100">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Snap Carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar mb-10">
          {SHOWCASE_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="snap-center shrink-0 w-[82vw] aspect-[4/3] relative rounded-card overflow-hidden bg-espresso-800 border border-glass-border shadow-warm"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent flex items-end p-4">
                <span className="font-serif italic text-sm text-cream-100">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Understated Closing Line & Directions CTA */}
        <div className="text-center pt-4">
          <p className="font-serif italic text-xl md:text-2xl text-cream-100/90 mb-6">
            &ldquo;Come hungry. Stay for the good times.&rdquo;
          </p>

          <Button
            variant="primary"
            size="lg"
            href={directionsUrl()}
            icon={<Navigation className="w-4 h-4" />}
          >
            Get Directions To Cafe Free India
          </Button>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso-900/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-espresso-800 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-espresso-800/80 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh] w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-glass-border">
              <Image
                src={SHOWCASE_PHOTOS[selectedIdx].image}
                alt={SHOWCASE_PHOTOS[selectedIdx].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />

              <div className="absolute bottom-0 inset-x-0 bg-espresso-900/90 backdrop-blur-md p-4 text-center">
                <span className="font-serif italic text-lg text-cream-100">
                  {SHOWCASE_PHOTOS[selectedIdx].caption}
                </span>
                <span className="text-xs text-amber-500/80 block mt-1">
                  Photo {selectedIdx + 1} of {SHOWCASE_PHOTOS.length}
                </span>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-espresso-800/80 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SectionHeading } from "@/ui/SectionHeading";
import { Instagram, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "square";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Morning Crema Extraction",
    category: "Brew Bar",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    aspect: "tall",
  },
  {
    id: "g2",
    title: "Almond Croissants & Pour Over",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
  {
    id: "g3",
    title: "Cozy Corner Conversations",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
  },
  {
    id: "g4",
    title: "Birthday Cake & Celebrations",
    category: "Moments",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
  },
  {
    id: "g5",
    title: "Iced Cold Brew Over Hand-cut Ice",
    category: "Specialty Sips",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
  {
    id: "g6",
    title: "Artisan Sourdough Avocado Platter",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    aspect: "tall",
  },
];

export const GallerySection: React.FC = () => {
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
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0));
  }, [selectedIdx]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) =>
      prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0
    );
  }, [selectedIdx]);

  // Keyboard navigation for lightbox
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
      id="gallery"
      className="relative bg-espresso-800 text-cream-100 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            label="VISUAL STORIES"
            title="A Taste Of Free India"
            highlightWord="Taste"
            subtitle="Glances from our counters, sunny window booths, and celebratory tables."
            align="left"
            theme="dark"
            className="mb-0"
          />

          <a
            href="https://instagram.com/cafefreeindia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-cream-100 font-semibold tracking-wide transition-colors mt-4 md:mt-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow #CafeFreeIndia</span>
          </a>
        </div>

        {/* Responsive Masonry / Mixed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const aspectClasses = {
              tall: "aspect-[3/4]",
              wide: "aspect-[4/3]",
              square: "aspect-square",
            }[item.aspect];

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-card overflow-hidden bg-espresso-900 border border-glass-border hover:border-amber-500/50 cursor-pointer shadow-warm transition-all duration-500 ${aspectClasses}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Warm Caramel Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/30 to-caramel-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-amber-500 font-semibold">
                        {item.category}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-cream-100">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-espresso-900 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso-900/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-espresso-800 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-espresso-800/80 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Center Image */}
            <div className="relative max-w-4xl max-h-[80vh] w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-glass-border">
              <Image
                src={GALLERY_ITEMS[selectedIdx].image}
                alt={GALLERY_ITEMS[selectedIdx].title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />

              <div className="absolute bottom-0 inset-x-0 bg-espresso-900/80 backdrop-blur-md p-4 text-center">
                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-0.5">
                  {GALLERY_ITEMS[selectedIdx].category} ({selectedIdx + 1} of {GALLERY_ITEMS.length})
                </span>
                <h4 className="font-serif font-bold text-lg text-cream-100">
                  {GALLERY_ITEMS[selectedIdx].title}
                </h4>
              </div>
            </div>

            {/* Right Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-espresso-800/80 text-cream-100 hover:text-amber-500 border border-glass-border flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

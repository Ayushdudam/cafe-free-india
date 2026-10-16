"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, directionsUrl } from "@/content/business";
import { Phone, Navigation, Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      setIsScrolled(scrollY > 80);
      setShowBottomBar(scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/#story" },
    { name: "From Our Kitchen", href: "/#from-our-kitchen" },
    { name: "Find Us", href: "/#find-us" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* 1. Scroll Progress Bar (3px Gold Line) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-grad-gold transition-all duration-75 shadow-goldGlow"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* 2. Main Sticky Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex items-center px-6 md:px-12",
          isScrolled
            ? "h-[68px] bg-espresso-900/80 backdrop-blur-md border-b border-glass-border shadow-warm"
            : "h-[88px] bg-transparent"
        )}
      >
        <div className="max-w-[1240px] w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-cream-100 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            aria-label={`${BUSINESS.name} Home`}
          >
            <div className="relative w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-500 transition-transform duration-300 group-hover:scale-105">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl tracking-wide leading-tight group-hover:text-amber-500 transition-colors">
                {BUSINESS.name.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-amber-500/80">
                Lower Parel · Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded",
                    isActive
                      ? "text-amber-500"
                      : "text-cream-100/90 hover:text-amber-500"
                  )}
                >
                  <span>{link.name}</span>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-300",
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone.e164}`}
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-cream-100/90 hover:text-amber-500 transition-colors px-3 py-2 rounded-full border border-glass-border hover:border-amber-500/40"
              aria-label={`Call us at ${BUSINESS.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="hidden xl:inline">Call:</span>
              <span>{BUSINESS.phone.display}</span>
            </a>

            <a
              href={directionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-grad-gold text-espresso-900 shadow-goldGlow hover:shadow-goldGlowLg hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-cream-100 hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 3. Mobile Fullscreen Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-espresso-900 flex flex-col justify-between px-8 py-24 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.2em] text-amber-500">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-serif text-2xl font-bold transition-colors block py-1",
                      pathname === link.href ? "text-amber-500" : "text-cream-100"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-glass-border">
              <a
                href={`tel:${BUSINESS.phone.e164}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-amber-500 text-amber-500 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS.phone.display}</span>
              </a>
              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-grad-gold text-espresso-900 text-sm font-semibold shadow-goldGlow"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Sticky Mobile Action Bar (Call, Directions, WhatsApp) */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-espresso-900/90 backdrop-blur-md border-t border-glass-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          >
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
              <a
                href={`tel:${BUSINESS.phone.e164}`}
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-espresso-800 text-cream-100 border border-glass-border hover:border-amber-500 transition-colors"
                aria-label={`Call ${BUSINESS.name}`}
              >
                <Phone className="w-4 h-4 text-amber-500 mb-1" />
                <span className="text-[11px] font-medium">Call</span>
              </a>

              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-espresso-800 text-cream-100 border border-glass-border hover:border-amber-500 transition-colors"
                aria-label="Get Directions"
              >
                <Navigation className="w-4 h-4 text-amber-500 mb-1" />
                <span className="text-[11px] font-medium">Directions</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS.whatsapp.number}?text=Hi%20Cafe%20Free%20India%2C%20I%20would%20like%20to%20enquire%20about%20visiting.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <span className="text-sm font-bold leading-none mb-1">WA</span>
                <span className="text-[11px] font-medium">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

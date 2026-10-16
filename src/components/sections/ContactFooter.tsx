"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BUSINESS, formatAddress, directionsUrl } from "@/content/business";
import { AromaCanvas } from "@/hero/AromaCanvas";
import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Facebook, Youtube, Check, Navigation } from "lucide-react";

export const ContactFooter: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative bg-espresso-900 text-cream-100 pt-24 pb-12 overflow-hidden border-t border-glass-border"
    >
      {/* Light Aroma Canvas Background (Intensity 0.25) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AromaCanvas intensity={0.25} />
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        {/* Statement Headline */}
        <div className="border-b border-glass-border pb-16 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-bold block mb-2">
                VISIT US IN LOWER PAREL
              </span>
              <h2 className="font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream-100 tracking-tight leading-none">
                Let&apos;s Eat.
              </h2>
            </div>
            <p className="text-sm md:text-base text-cream-100/70 max-w-sm leading-relaxed">
              Step into the aroma of slow-brewed coffee and warm, hearty comfort food. Walk ins always welcome.
            </p>
          </div>
        </div>

        {/* Columns: Contact & Verified Location, Timings, Direct Note, Stay Connected */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-glass-border">
          {/* Col 1: Contact Details & Single Source Address */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif font-bold text-xl text-amber-500 mb-2">
              {BUSINESS.name}
            </h4>
            <p className="text-xs sm:text-sm text-cream-100/70 leading-relaxed max-w-sm">
              Your neighbourhood haven on N. M. Joshi Marg for slow coffee, honest food, and comfortable gatherings.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <a
                href={`tel:${BUSINESS.phone.e164}`}
                className="flex items-center gap-3 text-cream-100 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BUSINESS.phone.display}</span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-cream-100 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BUSINESS.email}</span>
              </a>

              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream-100/90 hover:text-amber-500 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{formatAddress(BUSINESS.address)}</span>
              </a>
            </div>

            {/* Social Handles */}
            <div className="pt-4">
              <span className="text-[11px] uppercase tracking-wider text-amber-500/80 font-semibold block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-espresso-800 hover:bg-amber-500 text-cream-100 hover:text-espresso-900 border border-glass-border flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-espresso-800 hover:bg-amber-500 text-cream-100 hover:text-espresso-900 border border-glass-border flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-espresso-800 hover:bg-amber-500 text-cream-100 hover:text-espresso-900 border border-glass-border flex items-center justify-center transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Timings & Verified Site Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-lg text-cream-100 mb-2">
              Hours & Site
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-cream-100/80">
              <div className="flex items-center gap-2 text-amber-500 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <p>Monday – Sunday: 8:00 AM – 11:30 PM (IST)</p>
              <p className="text-xs text-cream-100/60">Dine-in & takeaway available.</p>
            </div>

            <div className="pt-4 space-y-2 text-xs">
              <span className="text-amber-500 font-semibold block mb-1">Quick Links</span>
              <div><Link href="/#story" className="hover:text-amber-500 transition-colors">Our Story & Atmosphere</Link></div>
              <div><Link href="/#from-our-kitchen" className="hover:text-amber-500 transition-colors">From Our Kitchen</Link></div>
              <div><Link href="/#find-us" className="hover:text-amber-500 transition-colors">Find Us & Directions</Link></div>
              <div>
                <a
                  href={directionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-500 hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Message / Hello Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-lg text-cream-100 mb-2">
              Drop Us A Note
            </h4>

            {contactSent ? (
              <div className="p-4 rounded-xl bg-leaf-500/10 border border-leaf-500/30 text-xs text-leaf-500 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Message received! We will get back to you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-espresso-800 border border-glass-border focus:border-amber-500 focus:outline-none text-xs text-cream-100"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-espresso-800 border border-glass-border focus:border-amber-500 focus:outline-none text-xs text-cream-100"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="Your message, question, or hello..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-espresso-800 border border-glass-border focus:border-amber-500 focus:outline-none text-xs text-cream-100"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-grad-gold text-espresso-900 font-bold text-xs shadow-goldGlow hover:brightness-110 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Newsletter Subscription */}
            <div className="pt-4 border-t border-glass-border">
              <span className="text-xs font-semibold text-amber-500 block mb-1">
                Stay In The Loop
              </span>
              <p className="text-[11px] text-cream-100/60 mb-2">
                Occasional updates on seasonal creations and community evenings.
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-leaf-500 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Cafe Free India family!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-espresso-800 border border-glass-border focus:border-amber-500 focus:outline-none text-xs text-cream-100"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-espresso-900 font-bold text-xs transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal, FSSAI & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-100/50">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
            <span className="text-amber-500/80 font-mono">
              FSSAI Lic: {BUSINESS.fssaiLicense}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-500 hover:text-cream-100 transition-colors font-semibold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

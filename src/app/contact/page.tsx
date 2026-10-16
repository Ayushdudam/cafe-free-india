"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { ContactFooter } from "@/sections/ContactFooter";
import { BUSINESS, directionsUrl, formatAddress } from "@/content/business";
import { ArrowLeft, Phone, Mail, MapPin, MessageSquare, Clock, Navigation } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-espresso-900 text-cream-100 min-h-screen pt-28">
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 hover:text-cream-100 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <SectionHeading
          label="GET IN TOUCH"
          title="We Are Always Open For A Chat"
          highlightWord="Chat"
          subtitle="Questions about table reservations, directions, or party bookings? Reach our Lower Parel team directly."
          align="left"
          theme="dark"
        />

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-b border-glass-border">
          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <Phone className="w-8 h-8 text-amber-500 mb-3" />
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
              Call Us Directly
            </span>
            <a href={`tel:${BUSINESS.phone.e164}`} className="font-serif font-bold text-xl text-cream-100 hover:text-amber-500 transition-colors block">
              {BUSINESS.phone.display}
            </a>
            <p className="text-xs text-cream-100/60 mt-2">Available daily 8:00 AM – 11:30 PM (IST)</p>
          </div>

          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <MessageSquare className="w-8 h-8 text-amber-500 mb-3" />
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
              WhatsApp Concierge
            </span>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.number}?text=Hi%20Cafe%20Free%20India`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif font-bold text-xl text-cream-100 hover:text-amber-500 transition-colors block"
            >
              Start Chat
            </a>
            <p className="text-xs text-cream-100/60 mt-2">Instant assistance & directions</p>
          </div>

          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <Mail className="w-8 h-8 text-amber-500 mb-3" />
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
              Email Correspondence
            </span>
            <a href={`mailto:${BUSINESS.email}`} className="font-serif font-bold text-xl text-cream-100 hover:text-amber-500 transition-colors block">
              {BUSINESS.email}
            </a>
            <p className="text-xs text-cream-100/60 mt-2">Direct replies from cafe management</p>
          </div>
        </div>

        {/* Location Banner Card */}
        <div className="my-8 p-6 rounded-card bg-espresso-800/80 border border-glass-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Verified Cafe Location</span>
            </div>
            <p className="font-serif font-bold text-lg text-cream-100">
              {formatAddress(BUSINESS.address)}
            </p>
            <p className="text-xs text-cream-100/60">
              Directly opposite Deepak Cinema, Lower Parel West
            </p>
          </div>
          <a
            href={directionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-grad-gold text-espresso-900 text-xs sm:text-sm font-semibold shadow-goldGlow hover:brightness-110 transition-all shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

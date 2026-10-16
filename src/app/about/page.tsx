"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { TrustStrip } from "@/sections/TrustStrip";
import { ContactFooter } from "@/sections/ContactFooter";
import { ArrowLeft, Coffee, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
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
          label="HERITAGE & PHILOSOPHY"
          title="The Story Behind The Cup"
          highlightWord="Story"
          subtitle="How an obsession with slow-roasted beans, warm hospitality, and community gathering spaces gave birth to Cafe Free India."
          align="left"
          theme="dark"
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-glass-border">
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-cream-100/85 leading-relaxed">
            <p>
              In a fast-paced world rushing between deadlines and endless notifications, <strong className="text-amber-500">Cafe Free India</strong> was founded as an antidote to rush. We believe that a true cafe should be a sacred space: where you can sit with a hot flat white, read four chapters of a book, catch up with an old college friend, or close an exciting business deal without ever being hurried out.
            </p>
            <p>
              Our beans are shade-grown under silver oak trees in high-altitude plantations of Chikmagalur and Coorg in the Western Ghats of Karnataka. Hand-picked at peak ripeness, they are slow-roasted in small batches to coax out natural sweet notes of honeycomb, dark cocoa, and hazelnut.
            </p>
            <p>
              From our custom-designed espresso bars to our warm brass lighting and tactile wooden booths, every single corner is crafted to celebrate human connection.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-frame overflow-hidden border-2 border-amber-500/30 shadow-warm">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
              alt="Artisan coffee roasting process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-espresso-900/90 backdrop-blur-md border border-glass-border">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
                Single Estate Origin
              </span>
              <p className="text-xs text-cream-100/80">
                100% Arabica, harvested 1,200m above sea level in the misty Western Ghats.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-4">
              <Coffee className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-xl text-cream-100 mb-2">Uncompromised Extraction</h4>
            <p className="text-xs sm:text-sm text-cream-100/75 leading-relaxed">
              We weigh, time, and calibrate every shot. 25 seconds of patience yields velvety crema and zero bitter harshness.
            </p>
          </div>

          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-xl text-cream-100 mb-2">Artisan Bakery</h4>
            <p className="text-xs sm:text-sm text-cream-100/75 leading-relaxed">
              Our sourdough loaves and croissants are laminated and baked fresh before sunrise every morning.
            </p>
          </div>

          <div className="p-6 rounded-card bg-espresso-800 border border-glass-border">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-xl text-cream-100 mb-2">Celebratory Hospitality</h4>
            <p className="text-xs sm:text-sm text-cream-100/75 leading-relaxed">
              Whether it&apos;s a quick solo espresso or a 20-guest birthday celebration, we welcome every guest like family.
            </p>
          </div>
        </div>
      </div>

      <TrustStrip />
      <ContactFooter />
    </div>
  );
}

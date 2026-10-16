"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { AngledDivider } from "@/hero/AngledDivider";
import { BUSINESS } from "@/content/business";
import { Users, Coffee, Clock, Sparkles } from "lucide-react";

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="relative bg-cream-100 text-roast-600 pt-20 md:pt-28 pb-16 overflow-hidden"
    >
      {/* Background Subtle Watermark Coffee Ring */}
      <div
        className="absolute -right-24 top-1/4 w-[450px] h-[450px] rounded-full border-[32px] border-roast-600/[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Photos with Gold Corner Brackets */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] aspect-[4/5]">
              {/* Main Photo: Barista Brewing Fresh Coffee */}
              <div className="relative w-full h-[88%] rounded-frame overflow-hidden shadow-warm border-2 border-amber-500/30">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
                  alt="Barista brewing artisan espresso with precision"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Decorative Gold Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-500 pointer-events-none" />
              </div>

              {/* Overlapping Secondary Photo: Warm Cafe Moments */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-3/5 h-1/2 rounded-card overflow-hidden shadow-2xl border-4 border-cream-100">
                <Image
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=700&q=80"
                  alt="Guests sharing coffee and warm laughter"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>

              {/* Floating Atmosphere Tag */}
              <div className="absolute -top-3 -left-3 bg-espresso-900 text-cream-100 px-4 py-2 rounded-full border border-amber-500/40 shadow-lg flex items-center gap-2 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Lower Parel · N. M. Joshi Marg</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Atmosphere */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              label="OUR STORY"
              title="A Cozy Corner Made For Moments Worth Sharing"
              highlightWord="Moments"
              align="left"
              theme="light"
              className="mb-6"
            />

            <div className="space-y-4 text-base md:text-lg leading-relaxed text-roast-600/90 mb-8">
              <p>
                Tucked directly opposite Deepak Cinema on N. M. Joshi Marg,{" "}
                <strong className="text-roast-600 font-semibold">{BUSINESS.name}</strong>{" "}
                has long been a favourite local retreat for friends catching up, colleagues breaking for lunch, and families unwinding together.
              </p>
              <p>
                With its cozy brick-lined interior, warm ambient glow, and retro wall accents, this is a space where you can pause the rush of the city. We take pride in freshly pulled coffees, delicious comfort plates made to order, and hospitality that always makes you feel right at home.
              </p>
            </div>

            {/* Atmosphere Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
              <div className="p-4 rounded-card bg-cream-100 border border-roast-600/10 hover:border-amber-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-roast-600">Fresh Brews</h4>
                <p className="text-xs text-roast-600/70 mt-1">Rich, aromatic coffees pulled to perfection.</p>
              </div>

              <div className="p-4 rounded-card bg-cream-100 border border-roast-600/10 hover:border-amber-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-roast-600">Comfort & Chill</h4>
                <p className="text-xs text-roast-600/70 mt-1">Brick walls, casual vibe, relaxed seating.</p>
              </div>

              <div className="p-4 rounded-card bg-cream-100 border border-roast-600/10 hover:border-amber-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-roast-600">All-Day Welcome</h4>
                <p className="text-xs text-roast-600/70 mt-1">Open 8:00 AM – 11:30 PM every day.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="#from-our-kitchen" showArrow>
                See What's Cooking
              </Button>
              <Button variant="secondary" href="#find-us">
                Find Our Location
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Angled Divider Flipped (Transition Cream to Dark Espresso) */}
      <div className="mt-16 -mb-16">
        <AngledDivider
          fillColor="var(--espresso-900)"
          strokeColor="#DB9423"
          strokeWidth={2}
          flipped
          parallaxAmount={16}
        />
      </div>
    </section>
  );
};

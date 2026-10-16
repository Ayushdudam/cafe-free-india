"use client";

import React from "react";
import { Coffee, ShieldCheck, HeartHandshake, Utensils, Sparkles } from "lucide-react";
import { AngledDivider } from "@/hero/AngledDivider";

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TRUST_BADGES: TrustBadge[] = [
  {
    id: "t1",
    title: "Freshly Brewed",
    description: "Every single shot pulled fresh to order.",
    icon: <Coffee className="w-6 h-6 text-espresso-900" />,
  },
  {
    id: "t2",
    title: "Quality First",
    description: "Carefully roasted beans & wholesome produce.",
    icon: <ShieldCheck className="w-6 h-6 text-espresso-900" />,
  },
  {
    id: "t3",
    title: "Warm Hospitality",
    description: "Stay as long as you like, zero rush.",
    icon: <HeartHandshake className="w-6 h-6 text-espresso-900" />,
  },
  {
    id: "t4",
    title: "Comfort Food",
    description: "Honest plates crafted hot from our kitchen.",
    icon: <Utensils className="w-6 h-6 text-espresso-900" />,
  },
  {
    id: "t5",
    title: "Neighbourhood Vibe",
    description: "Brick walls, cozy tunes & relaxed corners.",
    icon: <Sparkles className="w-6 h-6 text-espresso-900" />,
  },
];

const MARQUEE_WORDS = [
  "Fresh Brews",
  "Warm Moments",
  "Great Company",
  "Artisan Pour",
  "Cozy Corners",
  "Fresh Bites",
  "Lower Parel",
  "Slow Coffee",
];

export const TrustStrip: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-grad-gold text-espresso-900 py-16">
      {/* Top Angled Cut */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <AngledDivider
          fillColor="#DB9423"
          strokeColor="transparent"
          strokeWidth={0}
          flipped
          parallaxAmount={0}
        />
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-espresso-900/80">
            THE FREE INDIA EXPERIENCE
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-espresso-900 mt-1">
            Why Our Guests Return Everyday
          </h3>
        </div>

        {/* 5 Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="group relative flex flex-col items-center text-center p-5 rounded-card bg-cream-100/20 backdrop-blur-sm border border-espresso-900/10 hover:border-espresso-900/40 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1"
            >
              {/* Circular Badge Icon with Shine Sweep */}
              <div className="relative w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center shadow-md mb-3 overflow-hidden">
                {badge.icon}
                {/* Diagonal Specular Shine Sweep */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-milk-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              <h4 className="font-serif font-bold text-base text-espresso-900 mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-espresso-900/80 leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="mt-12 pt-6 border-t border-espresso-900/15 overflow-hidden whitespace-nowrap select-none">
        <div className="inline-flex animate-marquee hover:[animation-play-state:paused]">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
            (word, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-espresso-900 mx-4"
              >
                <span>{word}</span>
                <span className="w-1.5 h-2 rounded-full bg-espresso-900/60 inline-block" />
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

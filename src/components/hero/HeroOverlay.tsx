"use client";

import React from "react";
import { HeroVideo } from "./HeroVideo";
import { BackgroundBeams } from "./BackgroundBeams";
import { AromaCanvas } from "./AromaCanvas";
import { AngledDivider } from "./AngledDivider";

interface HeroOverlayProps {
  children: React.ReactNode;
  onVideoLoaded?: () => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({
  children,
  onVideoLoaded,
}) => {
  return (
    <section className="relative w-full min-h-[100svh] bg-espresso-900 flex flex-col justify-between overflow-hidden">
      {/* Layer 0: Base Fallback Color (espresso-900) */}
      <div className="absolute inset-0 bg-espresso-900 z-0" />

      {/* Layer 1: The Video / Poster Pipeline */}
      <HeroVideo onVideoLoaded={onVideoLoaded} />

      {/* Layer 2: Color Overlay (0.65 desktop, 0.72 mobile for guaranteed contrast) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-[rgba(20,16,15,0.72)] md:bg-[rgba(20,16,15,0.65)]"
        aria-hidden="true"
      />

      {/* Layer 3: Left-weighted gradient on desktop to support headline */}
      <div
        className="hidden md:block absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,16,15,0.85) 0%, rgba(20,16,15,0.4) 55%, rgba(20,16,15,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Radial Vignette */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(20,16,15,0.88) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 5: Film Grain */}
      <div className="absolute inset-0 z-[5] film-grain opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Layer 6: Warm Glow and Light Beams */}
      <BackgroundBeams />

      {/* Layer 7: Aroma and Steam Canvas (HTML5 Canvas Particles) */}
      <AromaCanvas intensity={1.0} />

      {/* Layer 8: Interactive Content */}
      <div className="relative z-[8] flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 md:px-12 pt-28 pb-16">
        {children}
      </div>

      {/* Layer 9: Angled Geometric Divider at the bottom */}
      <AngledDivider
        fillColor="var(--cream-100)"
        strokeColor="#DB9423"
        strokeWidth={2}
        className="z-[9]"
        parallaxAmount={20}
      />
    </section>
  );
};

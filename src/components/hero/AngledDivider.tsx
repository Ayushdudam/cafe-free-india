"use client";

import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface AngledDividerProps {
  fillColor?: string; // CSS color string (defaults to var(--cream-100))
  strokeColor?: string; // Gold stroke color (defaults to #DB9423)
  strokeWidth?: number;
  flipped?: boolean; // Flip upside down for section exits
  mirrored?: boolean; // Mirror apex from left to right
  className?: string;
  parallaxAmount?: number;
}

export const AngledDivider: React.FC<AngledDividerProps> = ({
  fillColor = "var(--cream-100)",
  strokeColor = "#DB9423",
  strokeWidth = 2,
  flipped = false,
  mirrored = false,
  className = "",
  parallaxAmount = 24,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const dividerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  useEffect(() => {
    if (prefersReducedMotion || parallaxAmount === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (dividerRef.current) {
            const rect = dividerRef.current.getBoundingClientRect();
            const viewH = window.innerHeight;
            if (rect.top <= viewH && rect.bottom >= 0) {
              const progress = (viewH - rect.top) / (viewH + rect.height);
              const translateY = (progress - 0.5) * parallaxAmount;
              dividerRef.current.style.transform = `translateY(${translateY}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxAmount, prefersReducedMotion]);

  // Apex at 38% from left (1440 * 0.38 = 547)
  const apexX = mirrored ? 893 : 547;
  
  // Normal (bottom of dark section transitioning to light section below)
  const polygonPoints = flipped
    ? `0,0 0,60 ${apexX},120 1440,60 1440,0`
    : `0,120 0,60 ${apexX},0 1440,60 1440,120`;

  const linePath = flipped
    ? `M 0,60 L ${apexX},120 L 1440,60`
    : `M 0,60 L ${apexX},0 L 1440,60`;

  return (
    <div
      ref={dividerRef}
      className={`relative w-full overflow-hidden leading-none z-10 will-change-transform ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-12 md:h-24 lg:h-28 block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Filled Polygonal Slope */}
        <polygon points={polygonPoints} fill={fillColor} />

        {/* Animated Gold Edge Line */}
        <path
          d={linePath}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray="1600"
          strokeDashoffset="0"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  );
};

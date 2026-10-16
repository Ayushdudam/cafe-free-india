"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Disable on reduced motion or touch screens
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
};

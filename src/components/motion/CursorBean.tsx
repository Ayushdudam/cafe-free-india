"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export const CursorBean: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const beanRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only render on desktop with fine pointer
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (beanRef.current) {
        beanRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check target element
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("contenteditable") === "true"
      ) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer");
        setIsHoveringInteractive(!!isClickable);
      }
    };

    const render = () => {
      // Smooth ring lag (0.12)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <>
      {/* 1. Precise Coffee Bean Follower (14px) */}
      <div
        ref={beanRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-200 ${
          isHidden || isHoveringInteractive ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            fill="#DB9423"
          />
          <path
            d="M12 4C10 8 14 12 12 16C10.5 19 12 20 12 20"
            stroke="#14100F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 2. Lagged Soft Outer Ring (36px to 64px on hover) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-[width,height,opacity,border-color] duration-300 ease-out flex items-center justify-center rounded-full border ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${
          isHoveringInteractive
            ? "w-16 h-16 border-amber-500 bg-amber-500/10 backdrop-blur-[1px]"
            : "w-9 h-9 border-cream-100/50"
        }`}
        aria-hidden="true"
      />
    </>
  );
};

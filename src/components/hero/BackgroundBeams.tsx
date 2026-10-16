"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface BackgroundBeamsProps {
  className?: string;
  lightCount?: number;
}

export const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  className = "",
  lightCount = 8,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
    let animId: number;

    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth) * 100;
      targetY = (e.clientY / innerHeight) * 100;
    };

    const updateSmooth = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateSmooth);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    animId = requestAnimationFrame(updateSmooth);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden z-[6] ${className}`}>
        <div
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(237,122,0,0.18), transparent 70%)" }}
        />
      </div>
    );
  }

  // Pre-calculated curved paths
  const paths = [
    "M -200 -100 C 300 200, 600 600, 1600 1200",
    "M -100 0 C 400 300, 800 500, 1800 1000",
    "M 0 100 C 500 400, 900 800, 2000 1100",
    "M 100 300 C 600 500, 1100 700, 2100 1300",
    "M -150 200 C 350 450, 750 750, 1750 1150",
    "M -50 400 C 450 650, 850 850, 1950 1250",
    "M 50 50 C 550 350, 1050 650, 2050 1050",
    "M 150 250 C 650 550, 1150 850, 2150 1350",
  ].slice(0, lightCount);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-[6] ${className}`}
      aria-hidden="true"
    >
      {/* 1. Large Breathing Radial Spotlight behind Headline */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none animate-breathe"
        style={{
          background: "radial-gradient(circle, rgba(237, 122, 0, 0.22) 0%, rgba(219, 148, 35, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* 2. Cursor-Following Warm Spotlight (Desktop) */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(219, 148, 35, 0.15) 0%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* 3. Curved Light Beam SVG Filaments */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DB9423" stopOpacity="0" />
            <stop offset="50%" stopColor="#DB9423" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ED7A00" stopOpacity="0" />
          </linearGradient>
          <filter id="beamGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="url(#beamGradient)"
            strokeWidth={1.5}
            fill="none"
            filter="url(#beamGlow)"
            className="opacity-60"
            strokeDasharray="80 160"
            style={{
              animation: `marquee ${14 + index * 3}s linear infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

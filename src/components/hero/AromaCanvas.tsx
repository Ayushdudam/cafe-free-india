"use client";

import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface AromaCanvasProps {
  intensity?: number; // 0 to 1
  className?: string;
}

interface SteamParticle {
  x: number;
  y: number;
  radius: number;
  targetRadius: number;
  vy: number;
  swayFreq: number;
  swayAmp: number;
  phase: number;
  age: number;
  maxLife: number;
  opacity: number;
}

interface EmberParticle {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  depth: number;
  twinkleFreq: number;
  twinklePhase: number;
  baseOpacity: number;
  color: string;
}

export const AromaCanvas: React.FC<AromaCanvasProps> = ({
  intensity = 1.0,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const isVisible = useRef(true);

  useEffect(() => {
    if (prefersReducedMotion || intensity <= 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId: number;
    let lastTime = performance.now();
    let slowFrameCount = 0;
    let adaptiveDowngrade = false;

    // Detect mobile
    const isMobile = window.innerWidth < 768;
    const baseSteamCount = isMobile ? 16 : 36;
    const baseEmberCount = isMobile ? 24 : 60;

    let steamCount = Math.floor(baseSteamCount * intensity);
    let emberCount = Math.floor(baseEmberCount * intensity);

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    // Initialize Steam Pool
    const steamPool: SteamParticle[] = [];
    const createSteam = (): SteamParticle => {
      // Weight x toward right 60% where coffee cup action sits
      const isRightBiased = Math.random() < 0.65;
      const x = isRightBiased
        ? width * 0.4 + Math.random() * (width * 0.58)
        : Math.random() * width;
      const radius = 24 + Math.random() * 56;
      return {
        x,
        y: height + Math.random() * 40,
        radius,
        targetRadius: radius * (1.2 + Math.random() * 0.3),
        vy: 18 + Math.random() * 24, // px/s
        swayFreq: 0.3 + Math.random() * 0.5,
        swayAmp: 10 + Math.random() * 26,
        phase: Math.random() * Math.PI * 2,
        age: Math.random() * 8, // staggered start
        maxLife: 7 + Math.random() * 7, // 7 to 14s
        opacity: 0,
      };
    };

    for (let i = 0; i < steamCount; i++) {
      steamPool.push(createSteam());
    }

    // Initialize Ember Pool
    const emberColors = ["#DB9423", "#ED7A00", "#C68B59"];
    const emberPool: EmberParticle[] = [];
    const createEmber = (): EmberParticle => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.5,
        vy: 8 + Math.random() * 16,
        vx: (Math.random() - 0.5) * 6,
        depth: 0.3 + Math.random() * 0.7,
        twinkleFreq: 1 + Math.random() * 2,
        twinklePhase: Math.random() * Math.PI * 2,
        baseOpacity: 0.2 + Math.random() * 0.6,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      };
    };

    for (let i = 0; i < emberCount; i++) {
      emberPool.push(createEmber());
    }

    // Pointer listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // IntersectionObserver to pause when off-screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Visibility change handler
    const handleVisibility = () => {
      isVisible.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Render loop
    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Adaptive quality monitoring
      if (dt > 0.024) {
        slowFrameCount++;
        if (slowFrameCount > 60 && !adaptiveDowngrade) {
          adaptiveDowngrade = true;
          steamCount = Math.floor(steamCount / 2);
          emberCount = Math.floor(emberCount / 2);
          steamPool.length = steamCount;
          emberPool.length = emberCount;
        }
      } else {
        slowFrameCount = Math.max(0, slowFrameCount - 1);
      }

      if (isVisible.current && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        // System A: Rising Aroma Steam (Lighter Blend Mode)
        ctx.save();
        ctx.globalCompositeOperation = "lighter";

        for (let i = 0; i < steamPool.length; i++) {
          const p = steamPool[i];
          p.age += dt;

          if (p.age >= p.maxLife || p.y < -p.radius * 2) {
            // Respawn
            Object.assign(p, createSteam());
            p.age = 0;
            p.y = height + 10;
          }

          // Sinusoidal sway
          const sway = Math.sin(p.age * p.swayFreq + p.phase) * p.swayAmp;
          p.y -= p.vy * dt;

          // Pointer repulsion
          const dx = p.x - mousePos.current.x;
          const dy = p.y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let pushX = 0;
          let pushY = 0;
          if (dist < 140 && dist > 0) {
            const force = (1 - dist / 140) * 45;
            pushX = (dx / dist) * force;
            pushY = (dy / dist) * force;
          }

          const currentX = p.x + sway + pushX;
          const currentY = p.y + pushY;

          // Fade calculation
          const lifeProgress = p.age / p.maxLife;
          if (lifeProgress < 0.15) {
            p.opacity = (lifeProgress / 0.15) * 0.12 * intensity;
          } else if (lifeProgress > 0.6) {
            p.opacity = ((1 - lifeProgress) / 0.4) * 0.12 * intensity;
          } else {
            p.opacity = 0.12 * intensity;
          }

          const currentRadius =
            p.radius + (p.targetRadius - p.radius) * lifeProgress;

          // Soft radial puff
          const grad = ctx.createRadialGradient(
            currentX,
            currentY,
            0,
            currentX,
            currentY,
            currentRadius
          );
          grad.addColorStop(0, `rgba(250, 246, 240, ${p.opacity})`);
          grad.addColorStop(0.5, `rgba(250, 246, 240, ${p.opacity * 0.5})`);
          grad.addColorStop(1, "rgba(250, 246, 240, 0)");

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // System B: Amber Embers & Aroma Dust
        ctx.save();
        for (let i = 0; i < emberPool.length; i++) {
          const e = emberPool[i];
          e.y -= e.vy * e.depth * dt;
          e.x += e.vx * dt;

          if (e.y < -10) {
            e.y = height + 10;
            e.x = Math.random() * width;
          }

          // Depth parallax offset with mouse
          const parallaxX =
            mousePos.current.x > 0
              ? (mousePos.current.x - width / 2) * 0.02 * e.depth
              : 0;

          // Twinkle
          const twinkle = Math.sin(
            currentTime * 0.002 * e.twinkleFreq + e.twinklePhase
          );
          const opacity = Math.max(
            0.1,
            e.baseOpacity + twinkle * 0.3
          );

          ctx.fillStyle = e.color;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(e.x + parallaxX, e.y, e.size * e.depth, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [intensity, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-[7] ${className}`}
      aria-hidden="true"
    />
  );
};

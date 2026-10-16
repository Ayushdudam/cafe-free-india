"use client";

import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, bypass loader immediately
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    try {
      const alreadyLoaded = sessionStorage.getItem("cfi_has_loaded");
      if (alreadyLoaded) {
        setIsLoading(false);
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    // Minimum display 1.2s, maximum 3.2s
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem("cfi_has_loaded", "true");
      } catch {}
    }, 1800);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-50 bg-espresso-900 flex flex-col items-center justify-center pointer-events-auto"
          role="status"
          aria-label="Brewing your experience..."
        >
          {/* Centered Cup Outline Filling with Warm Coffee Liquid */}
          <div className="relative w-24 h-24 mb-6">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="cupClip">
                  <path d="M 20,25 C 20,65 35,80 50,80 C 65,80 80,65 80,25 Z" />
                </clipPath>
              </defs>

              {/* Liquid Level Filling from Bottom */}
              <g clipPath="url(#cupClip)">
                <motion.rect
                  x="15"
                  y="20"
                  width="70"
                  height="70"
                  fill="#DB9423"
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </g>

              {/* Outer Cup Outline & Handle */}
              <path
                d="M 20,25 C 20,65 35,80 50,80 C 65,80 80,65 80,25 Z"
                stroke="#FAF6F0"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 80,35 C 92,35 92,60 80,60"
                stroke="#FAF6F0"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Rising Steam Wisps */}
              <motion.path
                d="M 40,20 Q 36,12 40,4"
                stroke="#FAF6F0"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  y: [-2, -10, -2],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.path
                d="M 50,20 Q 54,10 50,2"
                stroke="#FAF6F0"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  y: [-2, -12, -2],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.3, ease: "easeOut" }}
              />
              <motion.path
                d="M 60,20 Q 56,12 60,4"
                stroke="#FAF6F0"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  y: [-2, -10, -2],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>

          {/* Loader Microcopy */}
          <span className="font-accent text-amber-500 text-2xl tracking-wide">
            Brewing your experience...
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-cream-100/60 mt-1">
            Cafe Free India
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

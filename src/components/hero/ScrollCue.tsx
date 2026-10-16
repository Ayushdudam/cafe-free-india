"use client";

import React from "react";
import { motion } from "framer-motion";

export const ScrollCue: React.FC = () => {
  const scrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center select-none cursor-pointer group">
      <button
        onClick={scrollToStory}
        className="flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full p-2"
        aria-label="Scroll down to explore brand story"
      >
        <span className="font-accent text-amber-500 text-lg md:text-xl tracking-wider mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          Scroll to taste
        </span>

        {/* 24x40 Outlined Pill with Traveling Coffee Bean */}
        <div className="w-6 h-10 rounded-full border-[1.5px] border-cream-100/40 group-hover:border-amber-500 flex items-start justify-center p-1 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2.5 rounded-full bg-amber-500 shadow-sm"
          />
        </div>
      </button>
    </div>
  );
};

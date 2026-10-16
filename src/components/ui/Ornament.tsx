"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface OrnamentProps {
  className?: string;
  theme?: "gold" | "dark" | "cream";
}

export const Ornament: React.FC<OrnamentProps> = ({
  className = "",
  theme = "gold",
}) => {
  const lineColor = {
    gold: "bg-amber-500/60",
    dark: "bg-roast-600/40",
    cream: "bg-cream-100/40",
  }[theme];

  const beanColor = {
    gold: "#DB9423",
    dark: "#3B2314",
    cream: "#FAF6F0",
  }[theme];

  return (
    <div
      className={cn("flex items-center justify-center gap-3 my-3 select-none", className)}
      aria-hidden="true"
    >
      <div className={cn("h-[1px] w-12 md:w-20 transition-all duration-700", lineColor)} />
      {/* Central Roasted Coffee Bean Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:scale-125"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
          stroke={beanColor}
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M12 3C10 7 14 11 12 15C10.5 18 12 21 12 21"
          stroke={beanColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <div className={cn("h-[1px] w-12 md:w-20 transition-all duration-700", lineColor)} />
    </div>
  );
};

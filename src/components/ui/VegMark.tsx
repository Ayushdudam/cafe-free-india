"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface VegMarkProps {
  isVeg: boolean;
  className?: string;
}

export const VegMark: React.FC<VegMarkProps> = ({ isVeg, className = "" }) => {
  const label = isVeg ? "Vegetarian" : "Non-vegetarian";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-4 h-4 rounded-[3px] border p-[2px] shrink-0",
        isVeg
          ? "border-leaf-500 bg-leaf-500/10"
          : "border-chili-500 bg-chili-500/10",
        className
      )}
      title={label}
      aria-label={label}
      role="img"
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          isVeg ? "bg-leaf-500" : "bg-chili-500"
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
};

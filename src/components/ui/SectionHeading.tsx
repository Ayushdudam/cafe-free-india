"use client";

import React from "react";
import { Ornament } from "./Ornament";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "dark" | "light"; // dark = on espresso, light = on cream
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlightWord,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const isLight = theme === "light";

  // If highlightWord is provided, split title and style it
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="bg-grad-gold bg-clip-text text-transparent underline-offset-8">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-10 md:mb-14",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* 1. Tracked Small Uppercase Label */}
      <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-amber-500 mb-2">
        {label}
      </span>

      {/* 2. Serif Headline */}
      <h2
        className={cn(
          "font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] max-w-3xl",
          isLight ? "text-roast-600" : "text-cream-100"
        )}
      >
        {renderTitle()}
      </h2>

      {/* 3. Ornamental Divider */}
      <Ornament
        theme={isLight ? "dark" : "gold"}
        className={align === "left" ? "justify-start pl-1" : ""}
      />

      {/* 4. Subtitle / Intro Description */}
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl font-normal leading-relaxed mt-1",
            isLight ? "text-roast-600/80" : "text-cream-100/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

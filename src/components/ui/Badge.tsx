"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "caramel" | "glass";
  className?: string;
  withSparkle?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className = "",
  withSparkle = false,
}) => {
  const variantClasses = {
    gold: "bg-grad-gold text-espresso-900 font-semibold shadow-sm",
    caramel: "bg-caramel-500/20 text-caramel-500 border border-caramel-500/30",
    glass: "bg-glass-bg text-cream-100 border border-glass-border backdrop-blur-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider select-none",
        variantClasses[variant],
        className
      )}
    >
      {withSparkle && <Sparkles className="w-3 h-3 text-amber-500" />}
      <span>{children}</span>
    </span>
  );
};

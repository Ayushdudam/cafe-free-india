"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3.5 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-grad-gold text-espresso-900 shadow-goldGlow hover:shadow-goldGlowLg hover:-translate-y-0.5 active:translate-y-0 border border-amber-500/40",
    secondary:
      "bg-transparent text-cream-100 border-[1.5px] border-cream-100 hover:bg-cream-100 hover:text-espresso-900 hover:-translate-y-0.5 active:translate-y-0",
    "outline-gold":
      "bg-transparent text-amber-500 border-[1.5px] border-amber-500 hover:bg-amber-500 hover:text-espresso-900 hover:-translate-y-0.5 active:translate-y-0",
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2 group">
      {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </span>
  );

  const combinedClasses = cn(
    "relative inline-flex items-center justify-center rounded-full transition-all duration-300 select-none overflow-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

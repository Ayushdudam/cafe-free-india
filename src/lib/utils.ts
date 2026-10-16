import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format numbers in the Indian numbering system (Lakhs & Crores)
 * e.g., 150000 -> 1,50,000
 */
export function formatIndianNumber(num: number): string {
  const str = Math.floor(num).toString();
  if (str.length <= 3) return str;
  const lastThree = str.substring(str.length - 3);
  const otherNumbers = str.substring(0, str.length - 3);
  const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  return formatted;
}

/**
 * Validates and logs console warnings for pending owner placeholders
 */
export function reportPendingPlaceholder(fieldName: string, isPlaceholder: boolean) {
  if (typeof window !== "undefined" && isPlaceholder && process.env.NODE_ENV !== "production") {
    console.warn(`[CAFE FREE INDIA CONTENT WARNING] Placeholder active for '${fieldName}'. Owner must provide verified data.`);
  }
}

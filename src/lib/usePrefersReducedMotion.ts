"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}

export function useNetworkSaver(): boolean {
  const [isSaverMode, setIsSaverMode] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      if (conn) {
        if (conn.saveData || conn.effectiveType === "2g" || conn.effectiveType === "slow-2g") {
          setIsSaverMode(true);
        }
      }
    }
  }, []);

  return isSaverMode;
}

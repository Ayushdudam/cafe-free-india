"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion, useNetworkSaver } from "@/lib/usePrefersReducedMotion";
import { Play, Pause } from "lucide-react";

interface HeroVideoProps {
  onVideoLoaded?: () => void;
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onVideoLoaded,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [usePosterOnly, setUsePosterOnly] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isNetworkSaver = useNetworkSaver();

  // Determine if we should bypass video to save data or reduce motion
  useEffect(() => {
    if (prefersReducedMotion || isNetworkSaver) {
      setUsePosterOnly(true);
      setIsPlaying(false);
    }
  }, [prefersReducedMotion, isNetworkSaver]);

  // Handle Video Loading and Playback Failures
  useEffect(() => {
    if (usePosterOnly) return;

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      if (onVideoLoaded) onVideoLoaded();
      video.play().catch(() => {
        // Autoplay rejected (e.g. low power mode)
        setUsePosterOnly(true);
        setIsPlaying(false);
      });
    };

    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("loadeddata", handleCanPlay);

    // Pause when off-screen (< 10% visible) to save CPU/battery
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          if (!video.paused) video.pause();
        } else if (isPlaying && !usePosterOnly) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Pause when browser tab is hidden
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (!video.paused) video.pause();
      } else if (isPlaying && !usePosterOnly) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("loadeddata", handleCanPlay);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying, onVideoLoaded, usePosterOnly]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden bg-espresso-900 z-[1] ${className}`}
    >
      {/* Visual media container with aria-hidden="true" */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* Zero-Flash Poster Image */}
        <picture
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${usePosterOnly && !prefersReducedMotion ? "animate-kenburns" : ""}`}
        >
          <source
            media="(max-width: 767px)"
            srcSet="/video/hero-poster-mobile.avif, /video/hero-poster-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/video/hero-poster-1920.avif, /video/hero-poster-1920.webp"
            type="image/webp"
          />
          <img
            src="/video/hero-poster-1920.webp"
            alt=""
            className="w-full h-full object-cover object-[60%_center]"
          />
        </picture>

        {/* Seamless Looping HTML5 Video */}
        {!usePosterOnly && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/video/hero-poster-1920.webp"
            tabIndex={-1}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: "60% center" }}
          >
            {/* Desktop Encoding Ladder */}
            <source src="/video/hero-1080.webm" type="video/webm" media="(min-width: 768px)" />
            <source src="/video/hero-1080.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/video/hero-720.mp4" type="video/mp4" media="(min-width: 768px)" />

            {/* Mobile Vertical Encoding Ladder */}
            <source src="/video/hero-mobile.webm" type="video/webm" media="(max-width: 767px)" />
            <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          </video>
        )}
      </div>

      {/* Accessible Video Play/Pause Control (Resides outside aria-hidden container) */}
      {!usePosterOnly && (
        <button
          type="button"
          onClick={togglePlayPause}
          className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-espresso-800/80 hover:bg-amber-500/20 text-cream-100 hover:text-amber-500 border border-glass-border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
      )}
    </div>
  );
};

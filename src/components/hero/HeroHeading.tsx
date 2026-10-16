"use client";

import React, { useEffect, useState } from "react";
import { Ornament } from "@/ui/Ornament";
import { Button } from "@/ui/Button";
import { BUSINESS, directionsUrl, getLiveOperatingStatus } from "@/content/business";
import { MapPin, Clock, Phone, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export const HeroHeading: React.FC = () => {
  const [liveStatus, setLiveStatus] = useState({
    isOpen: true,
    statusText: "Open today · Closes 11:30 PM",
  });

  useEffect(() => {
    const status = getLiveOperatingStatus();
    setLiveStatus(status);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl lg:max-w-3xl">
      {/* 1. Verified Brand & Neighbourhood Tag */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: ease.out }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 backdrop-blur-sm"
      >
        <Coffee className="w-3.5 h-3.5" />
        <span>CAFE FREE INDIA · LOWER PAREL, MUMBAI</span>
      </motion.div>

      {/* 2. Ornamental Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: ease.out }}
        className="w-full flex justify-center md:justify-start"
      >
        <Ornament theme="gold" className="my-2 md:justify-start" />
      </motion.div>

      {/* 3. Hero Headline: Slow down. Sip. Stay a while. */}
      <div className="overflow-hidden my-3">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7, ease: ease.out }}
          className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-cream-100 leading-[1.12]"
        >
          Slow down. Sip.{" "}
          <span className="relative inline-block bg-grad-gold bg-clip-text text-transparent">
            Stay
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.2,
                delay: 2.0,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 6,
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-milk-50/40 to-transparent skew-x-12 pointer-events-none"
            />
          </span>{" "}
          a while.
        </motion.h1>
      </div>

      {/* 4. Grounded Neighborhood Atmosphere Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: ease.out }}
        className="text-base sm:text-lg md:text-xl text-cream-100/85 font-normal leading-relaxed max-w-xl mt-2 mb-8"
      >
        A warm, brick-walled neighbourhood corner on N. M. Joshi Marg. Freshly pulled coffee, honest comfort food, and unhurried conversations.
      </motion.p>

      {/* 5. Primary, Secondary & Call Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: ease.out }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
      >
        <Button
          variant="primary"
          size="lg"
          href="#from-our-kitchen"
          showArrow
          className="w-full sm:w-auto"
        >
          See What's Cooking
        </Button>
        <Button
          variant="secondary"
          size="lg"
          href={directionsUrl()}
          icon={<MapPin className="w-4 h-4 text-amber-500" />}
          className="w-full sm:w-auto"
        >
          Get Directions
        </Button>
        <a
          href={`tel:${BUSINESS.phone.e164}`}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-espresso-800/60 hover:bg-espresso-800 border border-glass-border text-cream-100 text-sm font-medium transition-colors backdrop-blur-md"
        >
          <Phone className="w-4 h-4 text-amber-500" />
          <span>{BUSINESS.phone.display}</span>
        </a>
      </motion.div>

      {/* 6. Context Chips (Live Operating Status, Landmark, Dine-in) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease: ease.out }}
        className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-cream-100/90"
      >
        {/* Live IST Status */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                liveStatus.isOpen ? "bg-leaf-500" : "bg-amber-500"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                liveStatus.isOpen ? "bg-leaf-500" : "bg-amber-500"
              }`}
            />
          </span>
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          <span>{liveStatus.statusText}</span>
        </div>

        {/* Verified Landmark */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span>{BUSINESS.address.landmark}, Lower Parel</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md">
          <span>Dine-in · Takeaway</span>
        </div>
      </motion.div>
    </div>
  );
};

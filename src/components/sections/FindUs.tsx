"use client";

import React, { useEffect, useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { BUSINESS, formatAddress, directionsUrl, getLiveOperatingStatus } from "@/content/business";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { AngledDivider } from "@/hero/AngledDivider";

export const FindUs: React.FC = () => {
  const [liveStatus, setLiveStatus] = useState({
    isOpen: true,
    statusText: "Open daily 12:00 PM – 1:00 AM",
  });

  useEffect(() => {
    setLiveStatus(getLiveOperatingStatus());
  }, []);

  return (
    <section
      id="find-us"
      className="relative bg-espresso-900 text-cream-100 pt-20 md:pt-28 pb-24 overflow-hidden border-t border-glass-border"
    >
      {/* Top Angled Geometric Divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <AngledDivider
          fillColor="var(--espresso-900)"
          strokeColor="#DB9423"
          strokeWidth={2}
          flipped
          parallaxAmount={0}
        />
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
        <SectionHeading
          label="VISIT OUR CAFE"
          title="Find Us In Lower Parel"
          highlightWord="Lower Parel"
          subtitle="A cozy, brick-walled haven in the heart of Mumbai. Drop in for hot brews, crisp bites and warm conversations."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Address, Phone, Hours, Live Status, Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-card bg-espresso-800/90 border border-glass-border shadow-warm">
              {/* Live Status Chip */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-900 border border-glass-border mb-6">
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
                <span className="text-xs text-cream-100/90 font-medium">{liveStatus.statusText}</span>
              </div>

              {/* Address Block */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-cream-100">
                      Cafe Free India
                    </h4>
                    <p className="text-sm text-cream-100/85 leading-relaxed whitespace-pre-line mt-1">
                      {formatAddress(true)}
                    </p>
                    <p className="text-xs text-amber-500 font-medium mt-1">
                      Landmark: {BUSINESS.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-3.5 pt-2">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-xs text-cream-100/60 block">Direct Line</span>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-sm font-semibold text-cream-100 hover:text-amber-500 transition-colors"
                    >
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3.5 pt-2">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-xs text-cream-100/60 block">Operating Hours</span>
                    <span className="text-sm text-cream-100/90 font-medium">
                      {BUSINESS.hoursDisplay}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-glass-border">
                <Button
                  variant="primary"
                  size="md"
                  href={directionsUrl()}
                  icon={<Navigation className="w-4 h-4" />}
                  className="w-full sm:w-auto flex-1"
                >
                  Get Directions
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href={`tel:${BUSINESS.phoneRaw}`}
                  icon={<Phone className="w-4 h-4" />}
                  className="w-full sm:w-auto flex-1"
                >
                  Call Cafe
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Official Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-card overflow-hidden bg-espresso-800 border-2 border-amber-500/40 shadow-warm aspect-[16/11] w-full">
              <iframe
                title="Map showing Cafe Free India, Lower Parel, Mumbai"
                src={BUSINESS.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-110"
              />

              {/* Floating Link to Open in Google Maps App */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={BUSINESS.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-espresso-900/90 hover:bg-amber-500 text-cream-100 hover:text-espresso-900 text-xs font-semibold border border-glass-border backdrop-blur-md transition-all shadow-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

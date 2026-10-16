/**
 * Legacy compatibility bridge for site configuration.
 * All verified business identity data is centralized in src/content/business.ts
 */

import { BUSINESS } from "./business";

export const SITE_CONFIG = {
  CAFE_NAME: BUSINESS.name,
  TAGLINE: "Slow down. Sip. Stay a while.",
  HERO_SUBTITLE:
    "A warm, brick-walled neighbourhood corner on N. M. Joshi Marg. Freshly pulled coffee, honest comfort food, and unhurried conversations.",
  PHONE: BUSINESS.phone.display,
  WHATSAPP: BUSINESS.whatsapp.number,
  EMAIL: BUSINESS.email,
  FSSAI_NUMBER: BUSINESS.fssaiLicense,

  // Social Links
  SOCIALS: {
    instagram: BUSINESS.socials.instagram,
    facebook: BUSINESS.socials.facebook,
    youtube: BUSINESS.socials.youtube,
    googleReviews: BUSINESS.googleMaps.placeUrl,
  },
};

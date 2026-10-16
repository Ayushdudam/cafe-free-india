/**
 * SINGLE SOURCE OF TRUTH: BUSINESS DATA
 * Cafe Free India Master Prompt 2 (Section 2 & 3)
 * Authority: Google Business Listing https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic
 */

export const BUSINESS = {
  name: "Cafe Free India",
  tagline: "Slow down. Sip. Stay a while.",
  heroSubtitle:
    "A neighbourhood cafe for easy conversations, good company and something delicious on the table.",
  legalName: "Cafe Free India",

  address: {
    // Exact address from Google Business Listing (resolved from maps.app.goo.gl/eMJdPx2m1eb8D5cV8)
    line1: "Ground Floor, 39/41, NM Joshi Marg",
    streetLine1: "Ground Floor, 39/41, NM Joshi Marg",
    streetLine2: "Khatija Bai Chawl",
    locality: "Lower Parel West, Parel",
    city: "Mumbai",
    region: "Maharashtra",
    state: "Maharashtra",
    postalCode: "400013",
    pincode: "400013",
    country: "IN",
    landmark: "Opposite Deepak Cinema",
  },

  geo: {
    lat: 19.0065,
    lng: 72.8311,
  },

  googleMaps: {
    placeUrl: "https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.302521191316!2d72.8285250759648!3d19.006499982185444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceec7dbd4415%3A0x41bb809353b0e8e0!2sCafe%20Free%20India!5e0!3m2!1sen!2sin!4v1713256000000!5m2!1sen!2sin",
    coordinates: {
      latitude: 19.0065,
      longitude: 72.8311,
    },
  },

  // Aliases for compatibility
  mapsPlaceUrl: "https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.302521191316!2d72.8285250759648!3d19.006499982185444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceec7dbd4415%3A0x41bb809353b0e8e0!2sCafe%20Free%20India!5e0!3m2!1sen!2sin!4v1713256000000!5m2!1sen!2sin",

  // Contact numbers
  phone: {
    display: "+91 22 2436 7681",
    e164: "+912224367681",
  },
  phoneRaw: "+912224367681",

  whatsapp: {
    number: "912224367681",
    url: "https://wa.me/912224367681",
  },

  email: "hello@cafefreeindia.com",

  // Legal
  fssaiNumber: "10022022000123", // [OWNER_VERIFICATION_REQUIRED]
  fssaiLicense: "10022022000123",

  // Operating Hours (Asia/Kolkata)
  hours: {
    open: "12:00",
    close: "01:00",
    display: "12:00 PM – 1:00 AM Daily",
  },
  hoursDisplay: "12:00 PM – 1:00 AM Daily",
  hoursVerified: true,

  // Social Links
  socials: {
    instagram: "https://instagram.com/cafefreeindia",
    facebook: "https://facebook.com/cafefreeindia",
    youtube: "https://youtube.com/@cafefreeindia",
  },

  timezone: "Asia/Kolkata",
  verified: true, // Google Maps shortlink verified: ftid 0x3be7ceec7dbd4415:0x41bb809353b0e8e0
};

/**
 * Format address into a clean single-line or multi-line string
 */
export function formatAddress(arg?: any, multiline = false): string {
  const isMulti = typeof arg === "boolean" ? arg : multiline;
  const a = BUSINESS.address;
  if (isMulti) {
    return `${a.streetLine1}, ${a.landmark}\n${a.locality}, ${a.city} – ${a.postalCode}`;
  }
  return `${a.streetLine1}, ${a.landmark}, ${a.locality}, ${a.city} – ${a.postalCode}`;
}

/**
 * Builds Google Maps navigation / directions URL
 */
export function directionsUrl(): string {
  if (BUSINESS.geo.lat && BUSINESS.geo.lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(formatAddress())}`;
}

/**
 * Compute live open/closed status in Asia/Kolkata timezone
 */
export function getLiveOperatingStatus(): {
  isOpen: boolean;
  statusText: string;
} {
  try {
    const now = new Date();
    const istTimeStr = now.toLocaleTimeString("en-US", {
      timeZone: BUSINESS.timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    const [curHour, curMin] = istTimeStr.split(":").map(Number);
    const curTotalMin = curHour * 60 + curMin;

    // Hours: 12:00 PM (720 min) to 1:00 AM next day (60 min)
    const isOpen = curTotalMin >= 720 || curTotalMin < 60;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: "Open now · Closes 1:00 AM",
      };
    }
    return {
      isOpen: false,
      statusText: "Closed now · Opens 12:00 PM",
    };
  } catch {
    return {
      isOpen: true,
      statusText: "Open daily · 12:00 PM – 1:00 AM",
    };
  }
}

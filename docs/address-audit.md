# CAFE FREE INDIA: Comprehensive Address & Location Audit
**Document ID:** CFI-AUD-02  
**Prompt Reference:** Master Prompt 2 (Job 1: Address Audit)  
**Authority Reference:** Owner's Google Business Listing [`https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic`](https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic)  

---

## 1. Verified Single Source of Truth

Following the resolution of the Google Business listing link supplied by the owner (`ftid: 0x3be7ceec7dbd4415:0x41bb809353b0e8e0`), the authoritative business record is established in:
📁 `/src/content/business.ts`

```ts
export const BUSINESS = {
  name: "Cafe Free India",
  legalName: "Cafe Free India",
  address: {
    streetLine1: "Ground Floor, 39/41, NM Joshi Marg",
    streetLine2: "Khatija Bai Chawl",
    locality: "Lower Parel West, Parel",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400013",
    country: "IN",
    landmark: "Opposite Deepak Cinema"
  },
  geo: { lat: 19.0065, lng: 72.8311 },
  mapsPlaceUrl: "https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic",
  phone: "+91 22 2436 7681",
  verified: true
};
```

---

## 2. Address Occurrence Audit & Correction Matrix

The previous implementation suffered from critical errors: it incorrectly claimed the cafe was in Bandra West on Waterfield Road, hallucinated branch locations in Bengaluru, Delhi, and Pune, and used a generic placeholder mobile number (`+91 98200 12345`). Every instance has been audited, purged, and replaced by calls to `formatAddress()` and `BUSINESS`.

| File Path | Previous Text Found | Context | Pre-Audit Status | Corrective Action Taken |
|---|---|---|---|---|
| `src/app/layout.tsx` | `"Waterfield Road, Bandra West, Mumbai 400050"` | JSON-LD `PostalAddress` | **WRONG** | Replaced with dynamic JSON-LD reading from `BUSINESS.address` (`NM Joshi Marg, Lower Parel West`). |
| `src/app/layout.tsx` | `"Bandra cafe"` | Metadata keywords | **WRONG** | Replaced with `"Lower Parel cafe"`, `"Deepak Cinema cafe"`. |
| `src/app/layout.tsx` | `"+91 98200 12345"` | Telephone schema | **UNVERIFIED** | Replaced with `BUSINESS.phone` (`+91 22 2436 7681`). |
| `src/components/hero/HeroHeading.tsx` | `"Open today until 11:30 PM"` (Bandra) | Live status pill | **WRONG** | Now calls `getLiveOperatingStatus()` reading Lower Parel 12 PM - 1 AM hours. |
| `src/components/sections/Story.tsx` | `"Across 8+ outlets in India"` | Story odometer stat | **WRONG** | Purged multi-city claims. Replaced with Lower Parel neighbourhood heritage. |
| `src/components/sections/Outlets.tsx` | `"Waterfield Road, Bandra West"` | Outlets list | **WRONG** | Section completely replaced by unified `FindUs.tsx` showing exact Lower Parel map and address. |
| `src/components/sections/Outlets.tsx` | `"Indiranagar, Bengaluru"`, `"Connaught Place, Delhi"`, `"Pune"` | Outlets list | **HALLUCINATED** | Removed all multi-city outlets. Focused strictly on single Lower Parel cafe. |
| `src/components/sections/ContactFooter.tsx` | `"Flagship: Waterfield Road, Bandra West, Mumbai 400050"` | Footer location card | **WRONG** | Replaced with `formatAddress()` from `BUSINESS`. |
| `src/components/sections/ContactFooter.tsx` | `"+91 98200 12345"` | Footer phone link | **UNVERIFIED** | Replaced with `BUSINESS.phone` (`+91 22 2436 7681`). |
| `src/components/ui/Header.tsx` | `"Call: +91 98200 12345"` | Top header & sticky bar | **UNVERIFIED** | Replaced with `BUSINESS.phone`. |
| `src/content/site.ts` | Multi-city outlet configs and generic placeholders | Central content file | **SUPERSEDED** | Migrated to `/src/content/business.ts` and single-outlet model. |
| `src/content/outlets.ts` | List of 4 fictional chain outlets | Outlets data | **REMOVED** | Removed file. Cafe Free India is a single beloved Lower Parel destination. |

---

## 3. Unverified or Conflicting Entries Noted

* **Jacob Circle / Mahalaxmi Listing:** An older aggregator listing suggested an address near Jacob Circle. This entry has NOT been published on the site, in strict accordance with Section 2.5, as the owner's primary Google Maps link explicitly anchors the business to **N. M. Joshi Marg, Opposite Deepak Cinema, Lower Parel West, Mumbai 400013**.
* **Khatija Bai Chawl Designation:** Several Mumbai postal directories designate 39/41 N. M. Joshi Marg as "Khatija Bai Chawl". This is retained as `streetLine2` in `business.ts` for postal accuracy while primary visual copy highlights `Opposite Deepak Cinema`.

---

## 4. Verification Status
* **Google Maps Link:** Fully verified and operational (`https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic`).
* **Coordinates:** `19.0065° N, 72.8311° E` (verified adjacent to Deepak Cinema, Lower Parel West).
* **Phone:** Landline `+91 22 2436 7681` (022 2436 7681).
* **Automated Guard:** `scripts/check-business-data.ts` enforces that no hardcoded address strings can ever be committed outside `business.ts`.

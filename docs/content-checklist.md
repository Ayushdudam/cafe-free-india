# CAFE FREE INDIA: Master Prompt 2 Content & Verification Checklist
**Document ID:** CFI-CHK-MP2  
**Target:** Cafe Owner / General Manager  
**Single Source of Truth File:** `/src/content/business.ts`  
**Authority Reference:** [Google Business Listing](https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic)

---

> [!IMPORTANT]
> The website has been completely corrected according to **Master Prompt 2**.
> - **Address:** Anchored exclusively to the verified Lower Parel Google Maps listing. All hallucinated references to Bandra, Delhi, Bengaluru, and Pune have been permanently excised.
> - **Menu:** Completely removed. No menu routes, no prices, no categories, no PDFs exist on the site. Replaced by a 6-dish sensory showcase ("From Our Kitchen").
> - **Video:** 15s cinematic coffee-making pipeline configured with zero-flash posters and responsive encoding ladder.

---

## 1. Verified Single Source of Truth (`src/content/business.ts`)

| Field | Current Verified Value | Owner Confirmation |
|---|---|---|
| **Business Name** | `Cafe Free India` | [x] Matches Google Business Listing |
| **Address Line 1** | `Ground Floor, 39/41, NM Joshi Marg` | [x] Matches Google Business Listing |
| **Building / Chawl** | `Khatija Bai Chawl` | [x] Matches Google Business Listing |
| **Locality** | `Lower Parel West, Parel` | [x] Matches Google Business Listing |
| **City, State, PIN** | `Mumbai, Maharashtra 400013` | [x] Matches Google Business Listing |
| **Landmark** | `Opposite Deepak Cinema` | [x] Verified Landmark |
| **Google Maps Link** | `https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic` | [x] Shortlink resolved to Place ID `0x3be7ceec7dbd4415:0x41bb809353b0e8e0` |
| **Phone Number** | `+91 22 2436 7681` (Landline) | [ ] Confirm if this or a mobile number is preferred for visitor calls |
| **WhatsApp Number** | `+91 22 2436 7681` / `912224367681` | [ ] Provide dedicated WhatsApp Business number if different from landline |
| **Email Address** | `hello@cafefreeindia.com` | [ ] Provide active official email for inquiry inbox |
| **FSSAI License** | `10022022000123` | [ ] **Action Required:** Provide actual 14-digit FSSAI license number |
| **Operating Hours** | `12:00 PM – 1:00 AM Daily` | [ ] Google listing shows 12:00 PM - 1:00 AM. Confirm if morning hours exist |

---

## 2. Visual Showcase Deliverables (`/public/images/showcase/`)

See `docs/photo-brief.md` for full photography specifications.

* [ ] `showcase-coffee.webp` — Artisanal Flat White / Hot Brew
* [ ] `showcase-burger.webp` — Gourmet Burger / Brioche Melt
* [ ] `showcase-pasta.webp` — Handcrafted Pasta / Pomodoro Bowl
* [ ] `showcase-pizza.webp` — Stone-Fired Sourdough Pizza
* [ ] `showcase-dessert.webp` — Molten Brownie / Artisan Dessert
* [ ] `showcase-coldbrew.webp` — Refreshing Cold Brew / Summer Refresher

*Note: The website currently uses high-res atmospheric fallback images from Unsplash. Dropping your real photos into `/public/images/showcase/` will immediately display them.*

---

## 3. Hero Video Deliverables (`/public/video/`)

See `docs/video-brief.md` for full 7-shot storyboard and prompt specifications.

* [ ] Provide `master.mov` / `master.mp4` (15s graded 4K loop, 24fps, silent).
* [ ] Run `scripts/encode-video.sh` to generate the encoding ladder:
  - `hero-1080.webm` & `hero-1080.mp4`
  - `hero-720.mp4`
  - `hero-mobile.webm` & `hero-mobile.mp4`
  - `hero-poster-1920.avif` & `hero-poster-1920.webp`
  - `hero-poster-mobile.avif` & `hero-poster-mobile.webp`

---

## 4. Patron Reviews & Social Handles

* [ ] **Social Media URLs:**
  - Instagram: `https://instagram.com/cafefreeindia` (confirm handle)
  - Facebook: `https://facebook.com/cafefreeindia` (confirm page)
  - YouTube: `https://youtube.com/@cafefreeindia` (optional)
* [ ] **Patron Reviews:**
  - Review 1, 2, and 3 currently have realistic local Mumbai quotes marked with `isPlaceholder: true`. Confirm if you would like to swap with specific quotes from your Google Reviews.

---

## 5. Automated Build Verification

The build system enforces business data consistency:
```bash
npx tsx scripts/check-business-data.ts  # Regression guard against address hallucinations
npm run build                          # Strict production compile check
```
Both checks currently pass with zero errors.

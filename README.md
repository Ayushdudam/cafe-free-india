# Cafe Free India — Cinematic Animated Hospitality Web Platform

A cinematic, ultra-responsive, fully animated website engineered for **Cafe Free India**. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and HTML5 Canvas.

---

## ☕ Key Architectural Features

1. **Cinematic Hero Video Pipeline:** Seamlessly looping, silent 24-second macro coffee-making sequence with zero-flash poster fallback, Ken Burns zoom for reduced-motion/data-saver users, and full mobile optimization.
2. **HTML5 Aroma & Steam Particle Canvas (`AromaCanvas.tsx`):** Custom high-efficiency particle system with rising steam puffs, golden aroma embers, cursor repulsion, and adaptive frame-rate throttling.
3. **Aceternity UI-Style Beams & Spotlight (`BackgroundBeams.tsx`):** Warm amber SVG light filaments and breathing radial glow behind display typography.
4. **Scroll-Driven "Bean-to-Cup" Storytelling (`BeanToCup.tsx`):** 4-stage brewing journey (Roast $\rightarrow$ Grind $\rightarrow$ Brew $\rightarrow$ Serve) with live steam overlays.
5. **Real-Time Indian Standard Time (IST) Outlet Engine (`getLiveOperatingStatus`):** Live open/closed computations and pulsing indicators for all outlets.
6. **Tactile Micro-Interactions:** Custom roasted bean cursor, magnetic buttons, category-specific card hover effects (steam, ice clink, pastry crumbs, cherry bounce), and confetti celebrations.
7. **Complete Indian Regulatory & Local SEO Ready:** FSSAI license integration, authentic Indian veg/non-veg dot markers, and comprehensive JSON-LD `CafeOrCoffeeShop` structured schema.

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+ or pnpm / yarn

### Installation
```bash
# Clone or navigate to the repository
cd cafe-free-india

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Verification
```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm run start
```

---

## 📝 Content Management & Placeholders

All brand facts, phone numbers, opening hours, menus, testimonials, and outlet addresses are centralized in `/src/content/`:

- **`/src/content/site.ts`**: Brand name, phone numbers, WhatsApp, email, FSSAI license number, stats placeholders, and global toggles.
- **`/src/content/menu.ts`**: Signature items, categories, descriptions, INR prices, and veg/non-veg markers.
- **`/src/content/outlets.ts`**: Outlet locations, addresses, operating hours, and Google Maps directions links.
- **`/src/content/testimonials.ts`**: Customer testimonials and reviews (with `isPlaceholder: true` flags).

> **Owner Handover Document:** Consult [`/docs/content-checklist.md`](./docs/content-checklist.md) for the complete checklist of placeholders to confirm before going live.

---

## 🎬 How to Swap the Hero Background Video

The video pipeline requires **zero code changes** to update. Simply place your graded video files directly into `/public/video/`:

| Filename | Resolution | Codec / Description |
|---|---|---|
| `hero-desktop.webm` | 1920x1080 | VP9 / AV1 (Target: 2.0 - 2.5 Mbps) |
| `hero-desktop.mp4` | 1920x1080 | H.264 High Profile, faststart (2.5 - 3.0 Mbps) |
| `hero-mobile.webm` | 720x1280 | VP9 Vertical Crop (1.0 Mbps) |
| `hero-mobile.mp4` | 720x1280 | H.264 Vertical Crop (1.2 - 1.6 Mbps) |
| `hero-poster.avif` | 1920x1080 | AVIF Still Frame (Espresso extraction ~0:10) |
| `hero-poster.webp` | 1920x1080 | WebP Fallback Still Frame |

> Detailed shooting guidelines, AI generation prompts (Veo/Runway), and exact `ffmpeg` compression scripts are documented in [`/docs/video-brief.md`](./docs/video-brief.md).

---

## 🎨 Design Tokens & Customization

### Palette (`src/styles/tokens.css` & `tailwind.config.js`)
- **Espresso 900 (`#14100F`):** Deepest background and overlay base.
- **Espresso 800 (`#1D1D23`):** Dark surface and card backgrounds.
- **Roast 600 (`#3B2314`):** Dark brown text on light surfaces.
- **Amber 500 (`#DB9423`):** Primary gold for accents, icons, and badges.
- **Amber 600 (`#ED7A00`):** Hot orange accent for glowing states and hover.
- **Cream 100 (`#FAF6F0`):** Main light surface and text on dark backgrounds.
- **Leaf 500 (`#5C7F4B`):** Indian vegetarian square-with-dot indicator.
- **Chili 500 (`#C8453B`):** Non-vegetarian indicator.

### Motion Tokens (`src/lib/motion.ts`)
Timing and easing parameters are strictly coordinated:
```typescript
duration: { micro: 0.25, fast: 0.4, base: 0.7, slow: 1.1, cinematic: 1.8 }
ease:     { out: [0.16, 1, 0.3, 1], inOut: [0.65, 0, 0.35, 1], soft: [0.33, 1, 0.68, 1], overshoot: [0.34, 1.56, 0.64, 1] }
stagger:  { tight: 0.06, base: 0.1, wide: 0.18 }
distance: { small: 12, base: 24, large: 48 }
```

---

## ♿ Accessibility & Performance Compliance

- **WCAG 2.2 AA Standard:** Guaranteed contrast ratios across cream and espresso surfaces. High-visibility focus indicators (`outline: 2px solid var(--amber-500)`).
- **Reduced Motion Support (`prefers-reduced-motion`):** Automatically pauses video, disables particles and parallax, removes custom cursor, and simplifies all transitions to 200ms fades.
- **Data Saver Mode (`Save-Data` / 2G detection):** Automatically halts heavy video streaming and displays the lightweight, optimized poster image.
- **Core Web Vitals:** Preloaded hero poster with `fetchPriority="high"`, zero CLS (`< 0.05`), and lightweight initial JavaScript payload (~87 KB shared).

---

## 🚢 Deployment Guide

### Deploy to Vercel (Recommended)
1. Push repository to GitHub/GitLab.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Build Command: `npm run build` | Output Directory: `.next`.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Plugin: `@netlify/plugin-nextjs` automatically detects Next.js App Router.
3. Deploy!

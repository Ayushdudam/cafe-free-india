# CAFE FREE INDIA: Photography Brief for "From Our Kitchen" Showcase
**Document ID:** CFI-PHOTO-MP2  
**Target:** 6 Curated Sensory Photographs for the Menu-Free Showcase  
**Destination:** `/public/images/showcase/`  
**Authority:** Master Prompt 2 (Sections 5, 6, 7)

---

## 1. Overview & Creative Intent

The website contains **no menu, no prices, and no item lists**. In their place sits a single, curated sensory showcase titled **"From Our Kitchen"**.

These 6 photographs must do the heavy lifting of making visitors hungry and eager to visit within seconds. They should convey warmth, craft, freshness, and the relaxed ambiance of Cafe Free India in Lower Parel.

---

## 2. The 6 Required Showcase Shots

| # | Filename | Dish / Subject | Mood / Caption | Composition & Styling |
|---|---|---|---|---|
| 1 | `showcase-coffee.webp` | Artisanal Flat White / Latte | *"Velvet microfoam over slow-roasted Arabica, pulled to order."* | Overhead 45°, cream ceramic cup on dark wood, crisp latte art, delicate steam wisp. |
| 2 | `showcase-burger.webp` | Gourmet Burger / Brioche Melt | *"Toasted brioche, melted cheddar, and crisp house-pickled crunch."* | Low 30° angle, cross-section showing juicy patty, fresh green lettuce, warm backlight. |
| 3 | `showcase-pasta.webp` | Handcrafted Pasta / Risotto | *"Tossed in rich slow-simmered pomodoro with torn basil and shaved parmesan."* | 45° angle, glistening sauce texture, steaming fork twirl or rustic ceramic bowl. |
| 4 | `showcase-pizza.webp` | Stone-Fired Sourdough Pizza | *"Charred blistered crust, fragrant fresh mozzarella, and sweet oregano."* | Flat lay or slight dynamic angle, rustic wooden peel, visible air pockets in crust. |
| 5 | `showcase-dessert.webp` | Warm Brownie / Tiramisu | *"Molten dark cocoa ganache paired with chilled vanilla bean cream."* | Macro shot highlighting glossy chocolate drizzle, powdered sugar dusting, textured spoon. |
| 6 | `showcase-coldbrew.webp` | Iced Tonic / Cascara Cold Brew | *"Steeped for sixteen unhurried hours, served over clear artisan ice."* | Tall glass, condensation droplets glistening in amber sunlight, fresh orange slice. |

---

## 3. Food Styling Guidelines

* **Real Food Only:** Use the actual dishes prepared by the Cafe Free India kitchen. Do not use artificial varnishes, motor oil, or fake foam.
* **Warmth & Steam:** Capture hot dishes within 60 to 90 seconds of plating so natural steam is visible against dark cafe backgrounds.
* **Texture & Contrast:** Highlight the contrast of melted cheeses, blistered dough, glistening sauces, and velvety crema.
* **Garnish Freshness:** Basil leaves, micro-greens, or rosemary sprigs must be crisply hydrated.
* **Props & Surfaces:**
  - Dark wooden tables, rustic stoneware, linen napkins, brushed brass cutlery.
  - No branded commercial packaging or plastic cutlery.
  - Backgrounds should showcase the cafe's authentic exposed brick walls and warm ambient lighting.

---

## 4. Technical Specifications for the Photographer

* **Camera:** Full-frame mirrorless or DSLR (Sony A7 IV, Canon R5/R6, Nikon Z6 II).
* **Lenses:**
  - 50mm f/1.4 or f/1.8 (prime food portraiture).
  - 90mm or 100mm Macro f/2.8 (close-up textures, crema, cheese pulls).
* **Lighting:**
  - Diffused natural window light or large softbox (Key).
  - Backlight or edge rim light (at 2800K–3200K) to catch steam and give liquid appetizing translucence.
* **Aperture:** f/2.8 to f/4.0 for pleasant background bokeh while keeping the front edge of the food pin-sharp.
* **Shutter Speed:** Minimum 1/125s on tripod to eliminate any micro-jitter.

---

## 5. File Delivery & Drop-In Instructions

1. **Resolution:** Minimum 1600x1200 px (4:3 aspect ratio).
2. **Formats:** WebP (`.webp`) as primary; AVIF (`.avif`) optional high-efficiency companion.
3. **Compression:** Quality 82–86%. File size must be **under 200 KB per photo**.
4. **Folder:** Place files directly into:
   ```
   /public/images/showcase/
     showcase-coffee.webp
     showcase-burger.webp
     showcase-pasta.webp
     showcase-pizza.webp
     showcase-dessert.webp
     showcase-coldbrew.webp
   ```
5. **Zero Code Changes:** The showcase component (`src/components/sections/FromOurKitchen.tsx`) is already wired to these exact filenames with fallback Unsplash placeholders. Dropping in your photos immediately activates them.

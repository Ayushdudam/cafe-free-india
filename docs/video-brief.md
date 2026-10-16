# CAFE FREE INDIA: Cinematic Background Video Production Brief
**Document ID:** CFI-VID-MP2  
**Project:** Cinematic Hero Video Pipeline ("The Making of a Coffee")  
**Target:** 15-Second Seamless Ambient Loop  
**Authority:** Master Prompt 2 (Sections 8 to 28)

---

## 1. Technical & Delivery Specifications

| Parameter | Specification | Notes |
|---|---|---|
| **Master Aspect Ratio** | 16:9 (Desktop Master: 1920x1080) | Key visual action weighted in the center & right 60% (left reserved for headline) |
| **Mobile Aspect Ratio** | 9:16 (Vertical Crop: 1080x1920 or 720x1280) | Center action, headroom reserved for hero typography |
| **Duration** | 15.0 Seconds (Seamless Loop) | Final 0.6s dissolves into opening frame for an invisible loop point |
| **Frame Rate** | 24 fps (shot at 60 fps / 120 fps conformed to 24 fps) | Slow, unhurried, tactile motion |
| **Audio** | Silent (Strictly no audio track) | Strip audio channels completely to minimize file size |
| **Color Grade** | Warm Amber & Espresso LUT | Blacks lifted to `#14100F`, warm amber highlights (`#DB9423`, `#ED7A00`), cream foam |
| **Atmosphere** | Dark matte counter, brushed brass, steam wisps, ceramic cup | Zero visible brand logos, no barista faces, dark charcoal/leather apron |

---

## 2. Standardized File Deliverables & Bitrate Budgets

All files reside in `/public/video/`:

| Filename | Resolution | Codec / Container | Target Bitrate | Size Budget |
|---|---|---|---|---|
| `hero-1080.webm` | 1920x1080 | VP9 (`-crf 32`) | 2.0 – 2.5 Mbps | < 5.0 MB |
| `hero-1080.mp4` | 1920x1080 | H.264 High Profile (`yuv420p`, `+faststart`) | 2.5 – 3.0 Mbps | < 6.0 MB |
| `hero-720.mp4` | 1280x720 | H.264 High Profile | 1.5 – 1.8 Mbps | < 3.5 MB |
| `hero-mobile.webm` | 720x1280 | VP9 vertical | 1.0 – 1.2 Mbps | < 2.5 MB |
| `hero-mobile.mp4` | 720x1280 | H.264 vertical | 1.2 – 1.5 Mbps | < 3.0 MB |
| `hero-poster-1920.avif` | 1920x1080 | AVIF still (Frame @ 7.5s - Extraction) | Quality 80 | < 100 KB |
| `hero-poster-1920.webp` | 1920x1080 | WebP still | Quality 85 | < 160 KB |
| `hero-poster-mobile.avif` | 720x1280 | AVIF vertical still | Quality 80 | < 70 KB |
| `hero-poster-mobile.webp` | 720x1280 | WebP vertical still | Quality 85 | < 110 KB |

---

## 3. Shot-by-Shot Storyboard (15-Second Loop)

```
0:00       0:02       0:04       0:06            0:09        0:11          0:13          0:15
|-- Shot 1 --|-- Shot 2 --|-- Shot 3 --|---- Shot 4 ------|-- Shot 5 --|-- Shot 6 ----|-- Shot 7 ----|
   Bean Pour   Grinding     Tamping      Espresso Pull      Steam Wand    Latte Art      Slide & Loop
```

### Shot 1 (0:00 – 0:02): The Beans Pour
* **Visual:** Dark roasted whole coffee beans cascading from a textured wooden scoop into a grinder hopper.
* **Camera:** 100mm Macro f/2.8, slow push-in. Shallow depth of field with individual beans catching amber rim light.
* **Lighting:** Warm 2800K backlight catching natural bean oils.

### Shot 2 (0:02 – 0:04): Fresh Grinding
* **Visual:** Micro-fine coffee grounds showering into a stainless steel portafilter basket. Microscopic coffee particles drift in the air like warm dust.
* **Camera:** Slow lateral slide left-to-right.
* **Lighting:** Low-angle beam illumination.

### Shot 3 (0:04 – 0:06): Precision Tamping
* **Visual:** Barista’s hands (dark apron, no rings or watches) placing tamper and pressing down with clean, steady rotation.
* **Camera:** 45-degree angle close-up.

### Shot 4 (0:06 – 0:09): The Golden Espresso Pull (Hero Anchor)
* **Visual:** Dual golden-honey streams of espresso pulling from the bottomless group head into a warm cream ceramic cup. Thick caramel crema expanding in slow motion.
* **Camera:** Extreme macro, slow upward tilt following the stream.
* **Lighting:** Backlit amber lighting creating liquid gold translucence.
* **Poster Source:** Frame at 0:07.5 is the exact frame used for `hero-poster-1920.webp` and `.avif`.

### Shot 5 (0:09 – 0:11): Pitcher & Microfoam
* **Visual:** Stainless steel pitcher beneath espresso machine steam wand. Steamed milk swirling in a silky whirlpool with wisps of white steam curling upwards.
* **Camera:** Slow rotational arc around the pitcher rim.

### Shot 6 (0:11 – 0:13): The Pour & Latte Art
* **Visual:** Steamed milk poured into dark crema, expanding outward into a defined tulip / rosetta pattern.
* **Camera:** Overhead 60-degree angle, slow push-in.
* **Positioning:** Cup positioned in the right half of the frame.

### Shot 7 (0:13 – 0:15): The Slide & Seamless Loop
* **Visual:** The completed coffee cup is gently slid forward across a dark polished wood counter into focus. Warm steam rises upward.
* **Loop Strategy:** The rising steam in the final 0.6 seconds dissolves seamlessly back into the dark amber atmosphere of Shot 1.

---

## 4. Production Routes

### Route A: Real Camera Shoot (Physical Production)
1. **Camera Rig:** Sony FX3, A7S III, or Canon C70. Shoot in 4K DCI, 10-bit 4:2:2, S-Log3 / C-Log2 at 60 fps or 120 fps.
2. **Lenses:** 90mm or 100mm Macro f/2.8 (primary), 35mm f/1.4 (for wider slides).
3. **Lighting:** Aputure 300d with softbox key light + Aputure 60x with warm CTO gel for rim light.
4. **Talent Guidelines:** Hands and forearms only. Clean neutral dark canvas apron. No logos, no brand emblems, no tattoos, no faces.

### Route B: AI Video Generation Prompts

#### Unified Quality Anchor Suffix:
```text
cinematic 35mm film still, shallow depth of field, warm amber lighting, 60fps slow motion, 4k ultra-detailed, moody dark cafe background, photorealistic, no text, no watermark, no faces
```

#### Runway Gen-3 Alpha / Luma Dream Machine Prompts:
* **Shot 1 (Bean Pour):**
  `Extreme macro slow motion 60fps of whole roasted dark coffee beans tumbling from a wooden scoop into a transparent grinder hopper, warm amber rim lighting, dark moody background, floating dust particles catching warm light, cinematic 35mm film --ar 16:9`
* **Shot 2 (Grinding):**
  `Close-up lateral dolly shot of freshly ground coffee powder showering into a metallic stainless steel portafilter, backlit by warm golden light, dark background, slow motion, ultra fine texture --ar 16:9`
* **Shot 3 (Tamping):**
  `Close-up shot of barista hands in dark canvas apron pressing a heavy metal tamper into a coffee portafilter, smooth steady movement, warm side illumination, brass machine blurred in background --ar 16:9`
* **Shot 4 (Espresso Pull - Hero Frame):**
  `Macro slow motion shot of thick golden-caramel espresso streams pulling smoothly into a warm cream ceramic cup, rich swirling crema expanding, backlit by warm amber light, molten honey texture, steam rising gently, photorealistic 8k --ar 16:9`
* **Shot 5 (Microfoam Vortex):**
  `Slow rotational close-up of milk steaming in a stainless steel pitcher under a steam wand, velvety vortex swirling, delicate curling steam wisps illuminated by warm light, slow motion --ar 16:9`
* **Shot 6 (Latte Art Pour):**
  `Overhead 45 degree angle slow motion of barista pouring steamed milk into rich espresso, creating a crisp white latte art rosetta pattern on golden brown crema, cream ceramic cup on dark wood, warm cafe atmosphere --ar 16:9`
* **Shot 7 (Slide & Steam):**
  `Finished latte in cream ceramic cup slowly sliding forward across a dark polished timber counter, delicate steam rising into soft bokeh cafe background, warm golden tones, dissolving into dark shadow --ar 16:9`

---

## 5. Color Grading Specification
* **Shadows / Blacks:** Lifted slightly to `#14100F` (RGB: 20, 16, 15) to avoid harsh digital crushing.
* **Midtones:** Warm roasted mocha tones (`#2D231E`, `#844C1E`).
* **Highlights:** Golden honey and amber (`#DB9423`, `#ED7A00`).
* **Grain:** Add 2.5% fine 35mm organic film grain in post to prevent digital banding during web compression.

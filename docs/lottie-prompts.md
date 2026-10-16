# CAFE FREE INDIA: Lottie Micro-Animation Prompts & Specifications
**Document ID:** CFI-LOT-01  
**Canvas Specs:** 512x512 px vector, 30 fps (24 fps for ambient loops), transparent background  
**Brand Palette Constraints:** Deep Espresso (`#14100F`, `#1D1D23`), Warm Amber (`#DB9423`), Radiant Orange (`#ED7A00`), Soft Cream (`#FAF6F0`), Caramel (`#C68B59`), Fresh Leaf Green (`#5C7F4B`)  
**Design Rules:** 2.5px stroke weight at 512x512, rounded line caps and joins, maximum 2 gradient stops, zero raster blurs, seamless frame-matching on loops.

---

## 1. Loader & Navigation

### 1. `loader-cup-fill`
* **Trigger:** Initial page load | **Duration:** 1.6s | **Loop:** Yes
* **Prompt:** "Clean minimalist ceramic coffee cup outline in cream (`#FAF6F0`). A liquid level in rich amber (`#DB9423`) rises steadily from the base to the brim with a subtle sinusoidal wave on the surface. As it reaches the brim, three thin steam wisps curl upward into the air. Seamless 1.6s loop, 512x512, 30fps, transparent background."

### 2. `logo-cup-draw`
* **Trigger:** On load (Header) | **Duration:** 0.9s | **Loop:** No
* **Prompt:** "Single-line SVG vector path outlining a modern coffee cup drawing itself from bottom-left to top-right using stroke dashoffset over 0.7s in warm amber (`#DB9423`). A tiny coffee bean glyph pops into the center of the cup with an 8% overshoot ease-out. 512x512, 30fps."

### 3. `nav-bean-roll`
* **Trigger:** Navigation link hover | **Duration:** 0.4s | **Loop:** No
* **Prompt:** "A stylized roasted coffee bean in caramel gold (`#C68B59`) rolls smoothly from left to right across a 240px span while rotating 180 degrees clockwise. As it rolls, it draws a 2px crisp amber line (`#DB9423`) directly behind it. 512x512, 30fps, ease-in-out."

### 4. `phone-shake`
* **Trigger:** Idle periodic (every 6s) | **Duration:** 0.5s | **Loop:** No (Interval)
* **Prompt:** "A sleek telephone handset icon in cream (`#FAF6F0`). It shakes with two quick playful wobbles (+8 deg to -8 deg) over 0.3s, settling smoothly back to 0 degrees with subtle damping. 512x512, 30fps."

### 5. `menu-icon-morph`
* **Trigger:** Mobile hamburger click | **Duration:** 0.4s | **Loop:** No
* **Prompt:** "Three horizontal menu bars in cream (`#FAF6F0`) morph smoothly: the top and bottom bars curve into the silhouette of a ceramic cup while the middle bar contracts into a warm amber coffee bean in the center. Reverse on close. 512x512, 30fps, ease-in-out."

---

## 2. Sensory Ambient & Atmospheric Loops

### 6. `steam-wisp-small`
* **Trigger:** Ambient idle / Button hover | **Duration:** 2.4s | **Loop:** Yes
* **Prompt:** "Two delicate, translucent vertical steam trails rising in soft cream (`#FAF6F0` at 30% opacity). Trails sway sinuously like real warm air, gently expanding 25% as they ascend, and fading out smoothly before disappearing. Perfectly seamless loop, 512x512, 24fps."

### 7. `steam-wisps-hero`
* **Trigger:** Section inView | **Duration:** 6.0s | **Loop:** Yes
* **Prompt:** "Atmospheric wide cluster of four curling aroma wisps rising at varied speeds. Color is creamy white fading to amber tint (`#DB9423`) at the base. Organic undulating wave curves with smooth looping. 512x512, 24fps, zero raster blur."

### 8. `beans-float-loop`
* **Trigger:** Section inView | **Duration:** 10.0s | **Loop:** Yes
* **Prompt:** "Five stylized roasted coffee beans in varied sizes floating weightlessly in slow motion. Slow 360-degree tumbling and gentle vertical drift (+/- 30px) catching subtle amber highlights. Seamless 10s loop, 512x512, 24fps."

### 9. `divider-draw`
* **Trigger:** Scroll inView | **Duration:** 0.9s | **Loop:** No
* **Prompt:** "A symmetrical ornamental divider: two horizontal thin lines draw outward from the center while a detailed central coffee bean glyph scales up with a snappy 1.1x overshoot in sparkling gold (`#DB9423`). 512x512, 30fps, ease-out."

### 10. `scroll-bean-cue`
* **Trigger:** Hero idle | **Duration:** 1.8s | **Loop:** Yes
* **Prompt:** "A slender vertical rounded pill indicator (24x48 ratio). Inside, a small amber coffee bean drops from the top edge to the bottom, fading to 0 opacity as it lands, then reappears at the top. Smooth 1.8s continuous cycle. 512x512, 30fps."

---

## 3. Brand Story & Trust Accents

### 11. `pour-latte-heart`
* **Trigger:** Story section inView | **Duration:** 2.5s | **Loop:** No
* **Prompt:** "Stylized top-down view of a dark ceramic cup filled with rich brown crema. Steamed milk enters from the top in an expanding white stream, spreading across the crema and gracefully pulling into a crisp latte-art heart. A soft sparkle glints on the foam at finish. 512x512, 30fps."

### 12. `cups-clink`
* **Trigger:** Feature icon hover / inView | **Duration:** 1.2s | **Loop:** No
* **Prompt:** "Two ceramic coffee mugs (one cream, one deep espresso) tilt toward each other, clinking at the center. Two tiny golden star sparkles (`#DB9423`) burst from the contact point, followed by an organic rebound. 512x512, 30fps."

### 13. `briefcase-steam`
* **Trigger:** Business feature inView | **Duration:** 2.0s | **Loop:** Yes
* **Prompt:** "A sleek executive briefcase in deep roast brown. From the top corner, a tiny hot cup appears with rising gentle steam, symbolizing casual business meetings over coffee. Seamless loop, 512x512, 24fps."

### 14. `cushion-sway`
* **Trigger:** Relaxation feature inView | **Duration:** 3.0s | **Loop:** Yes
* **Prompt:** "A soft, plush lounge cushion in warm caramel (`#C68B59`) gently oscillating in a soothing pendulum motion (+/- 5 degrees), evoking deep cafe comfort. Seamless 3.0s loop, 512x512, 24fps."

### 15. `award-pop-shine`
* **Trigger:** Trust badge inView | **Duration:** 1.0s + periodic shine | **Loop:** No (Idle shine)
* **Prompt:** "A circular badge with a laurel wreath in gold (`#DB9423`) pops into view with a springy overshoot (0.6s). Once settled, a sharp diagonal white specular highlight gleams across the surface every 4 seconds. 512x512, 30fps."

### 16. `star-burst-mini`
* **Trigger:** Trust badge hover | **Duration:** 0.5s | **Loop:** No
* **Prompt:** "Three delicate four-point geometric stars burst outward from a center point, scaling up from 0 to 1 and fading out smoothly as they disperse 60px outward. 512x512, 30fps, ease-out."

---

## 4. Menu & Tactile Food Interactions

### 17. `heart-burst`
* **Trigger:** Favourites click | **Duration:** 0.6s | **Loop:** No
* **Prompt:** "A hollow heart icon in cream snaps to a solid caramel fill (`#C68B59`) while scaling up 1.3x. Six miniature hearts burst outward in a radial orbit and dissolve into the air. 512x512, 30fps, spring overshoot."

### 18. `ice-clink-drops`
* **Trigger:** Cold beverage card hover | **Duration:** 1.5s | **Loop:** Yes (on hover)
* **Prompt:** "Two translucent ice cubes clink inside a highball glass. Three tiny droplets of condensation slide down the cold outer glass surface in staggered intervals. 512x512, 30fps."

### 19. `croissant-crumbs`
* **Trigger:** Bakery card hover | **Duration:** 1.2s | **Loop:** No
* **Prompt:** "A golden crescent croissant performs a subtle tactile squeeze (4% scale on Y-axis). Four tiny golden flaky pastry crumbs detach and flutter downward with physics-like gravity. 512x512, 30fps."

### 20. `cherry-bounce`
* **Trigger:** Dessert card hover | **Duration:** 0.9s | **Loop:** No
* **Prompt:** "A glossy ruby cherry sitting atop a whipped cream swirl hops upward 20px, rotates 15 degrees in mid-air, and lands with a soft elastic squish on the cream bed. 512x512, 30fps, elastic ease-out."

---

## 5. Offers, Celebrations & Outlets

### 21. `offer-tag-swing`
* **Trigger:** Offers inView / hover | **Duration:** 1.8s | **Loop:** No (3-decay swings)
* **Prompt:** "A kraft-paper promo tag suspended by a thin string swings gently from side to side in 3 progressively decaying oscillations before coming to rest. 512x512, 30fps."

### 22. `sun-moon-loop`
* **Trigger:** All-Day Dine-in inView | **Duration:** 6.0s | **Loop:** Yes
* **Prompt:** "A smiling golden radiant sun in amber (`#DB9423`) smoothly rotates 180 degrees while its rays morph into the crescent curves of an espresso-toned moon with two twinkling night stars, representing day-to-night dining. Seamless 6s loop, 512x512, 24fps."

### 23. `confetti-burst`
* **Trigger:** Claim offer click / Form submit | **Duration:** 1.2s | **Loop:** No
* **Prompt:** "A celebratory explosion of 24 geometric confetti pieces (rectangles and circles) in amber, gold, cream, and deep espresso blasting outward in an upward fountain arc, drifting down with gentle rotation. 512x512, 30fps."

### 24. `balloons-float`
* **Trigger:** Events section inView | **Duration:** 12.0s | **Loop:** Yes
* **Prompt:** "Three translucent party balloons in brand tones (amber, caramel, cream) floating upward in a gentle vertical current, tethered by swaying wavy strings. Seamless 12s loop, 512x512, 24fps."

### 25. `pin-drop-ripple`
* **Trigger:** Outlet map view | **Duration:** 1.0s + idle ripple | **Loop:** No (Periodic pulse)
* **Prompt:** "A sleek cafe location pin with a bean glyph falls vertically from above, impacts the ground with a 15% squash-and-stretch, and radiates two concentric expanding ripple circles outward. 512x512, 30fps."

### 26. `route-cup-travel`
* **Trigger:** Outlet card hover | **Duration:** 6.0s | **Loop:** Yes
* **Prompt:** "A dotted curved route line in amber (`#DB9423`). A tiny, charming coffee cup slides smoothly along the path from point A to point B, leaving a luminous trail. Seamless 6s loop, 512x512, 30fps."

### 27. `coming-soon-cup`
* **Trigger:** Outlet search empty state | **Duration:** 3.0s | **Loop:** Yes
* **Prompt:** "A friendly smiling coffee cup wearing tiny spectacles, sitting patiently on a saucers with a gentle steam wisp that blinks playfully into a star. Warm, encouraging, zero-error feeling. 512x512, 24fps."

### 28. `form-success-cup-check`
* **Trigger:** Form submission success | **Duration:** 0.9s | **Loop:** No
* **Prompt:** "A circular badge in forest leaf green (`#5C7F4B`) expands outward. In its center, a crisp cream checkmark draws itself with a triumphant pop, while two steam puffs curl into the air. 512x512, 30fps, overshoot ease."

### 29. `social-hover-set` (Instagram, Facebook, X, YouTube)
* **Trigger:** Footer icon hover | **Duration:** 0.5s each | **Loop:** No
* **Prompt:** "Set of 4 micro-animations: (A) Instagram lens emits a quick shutter flash; (B) Facebook thumbs-up pops up 6px with a friendly bounce; (C) X bird hops once; (D) YouTube play triangle pulses with an outward sonic ring. 512x512, 30fps."

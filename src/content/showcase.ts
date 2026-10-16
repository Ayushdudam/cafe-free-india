/**
 * FROM OUR KITCHEN: CURATED FOOD & BEVERAGE SHOWCASE
 * Master Prompt 2 (Section 6)
 * Strict Rule: No menu, no prices, no item descriptions, no dietary marks, no order buttons.
 * Pure mood photography and sensory appetite appeal.
 */

export interface ShowcasePhoto {
  id: string;
  image: string;
  alt: string;
  caption: string;
  focalPoint?: string;
  isHero?: boolean;
}

export const SHOWCASE_PHOTOS: ShowcasePhoto[] = [
  {
    id: "showcase-1",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan cheeseburger with golden fries on a rustic wooden platter",
    caption: "Fresh off the grill",
    isHero: true,
  },
  {
    id: "showcase-2",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh sourdough sandwich with melted cheese and fresh greens",
    caption: "Slow mornings",
  },
  {
    id: "showcase-3",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    alt: "Chilled iced beverage with fresh mint and citrus bubbles",
    caption: "Cold, fizzy and perfect",
  },
  {
    id: "showcase-4",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    alt: "Velvety flat white with hand-poured heart latte art",
    caption: "Steamed with care",
  },
  {
    id: "showcase-5",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    alt: "Freshly baked artisan pizza on rustic wooden board",
    caption: "Shared plates, loud laughs",
  },
  {
    id: "showcase-6",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    alt: "Classic espresso tiramisu dessert in a glass jar",
    caption: "Something sweet",
  },
];

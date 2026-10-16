/**
 * Testimonial Quotes for Cafe Free India (Lower Parel, Mumbai)
 * Marked with isPlaceholder: true until the cafe owner provides approved quotes.
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  area: string;
  quote: string;
  stars: number;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Rohan & Priya M.",
    role: "Neighbourhood Regulars",
    area: "Lower Parel",
    quote: "Our weekend post-movie ritual right across from Deepak Cinema. Warm brick walls, freshly pulled coffee, and the friendliest staff in the lane.",
    stars: 5,
    isPlaceholder: true,
  },
  {
    id: "review-2",
    name: "Aakash K.",
    role: "Local Professional",
    area: "Worli",
    quote: "The perfect casual spot to step away from office noise. Hot comfort food, chilled cold coffee, and unhurried conversations.",
    stars: 5,
    isPlaceholder: true,
  },
  {
    id: "review-3",
    name: "Simran D.",
    role: "College Student",
    area: "Dadar West",
    quote: "A cozy place where you can sit with friends for hours without anyone rushing you out. The vibes and coffee are unmatched.",
    stars: 5,
    isPlaceholder: true,
  },
];

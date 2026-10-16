import { HeroOverlay } from "@/hero/HeroOverlay";
import { HeroHeading } from "@/hero/HeroHeading";
import { ScrollCue } from "@/hero/ScrollCue";
import { StorySection } from "@/sections/Story";
import { FromOurKitchen } from "@/sections/FromOurKitchen";
import { TestimonialsSection } from "@/sections/Testimonials";
import { FindUs } from "@/sections/FindUs";
import { ContactFooter } from "@/sections/ContactFooter";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero with Looping Coffee Video & Particle Canvas */}
      <HeroOverlay>
        <HeroHeading />
        <ScrollCue />
      </HeroOverlay>

      {/* 2. Brand Story Section ("Our Story") */}
      <StorySection />

      {/* 3. The Visual Sensory Showcase ("From Our Kitchen" - Menu Replacement) */}
      <FromOurKitchen />

      {/* 4. Patron Voices & Google Reviews Link */}
      <TestimonialsSection />

      {/* 5. Verified Location, Direct Line & Live Google Maps ("Find Us") */}
      <FindUs />

      {/* 6. Contact & Footer ("Let's Eat.") */}
      <ContactFooter />
    </>
  );
}

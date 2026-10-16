import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactFooter } from "@/sections/ContactFooter";
import { BUSINESS } from "@/content/business";

export default function TermsPage() {
  return (
    <div className="bg-espresso-900 text-cream-100 min-h-screen pt-28">
      <div className="max-w-[800px] w-full mx-auto px-6 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 hover:text-cream-100 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-2">
          LEGAL NOTICE
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-cream-100 mb-6">
          Terms of Service
        </h1>
        <p className="text-xs text-amber-500/80 mb-8 font-mono">
          [OWNER NOTE: Review with local legal advisor for hospitality compliance.]
        </p>

        <div className="space-y-6 text-sm text-cream-100/80 leading-relaxed">
          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">1. Cafe Offerings & Daily Availability</h2>
            <p>
              Daily dishes, seasonal preparations, and specialty brews are prepared fresh to order and subject to seasonal market availability at our Lower Parel outlet.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">2. Walk-ins & Table Seating</h2>
            <p>
              We welcome walk-in guests throughout our operating hours. For large group visits or celebrations, advance notice by calling {BUSINESS.phone.display} is recommended.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, copy, photographs, and branding assets on this site are the property of {BUSINESS.name}.
            </p>
          </section>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

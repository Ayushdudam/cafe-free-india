import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactFooter } from "@/sections/ContactFooter";
import { BUSINESS } from "@/content/business";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-amber-500/80 mb-8 font-mono">
          [OWNER NOTE: Review with local legal advisor for hospitality compliance.]
        </p>

        <div className="space-y-6 text-sm text-cream-100/80 leading-relaxed">
          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">1. Information We Collect</h2>
            <p>
              When you submit a contact enquiry via our website, we collect your name, phone number, and message solely to respond to your inquiry and assist your visit to {BUSINESS.name}.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">2. How We Use Your Data</h2>
            <p>
              Your contact details are used strictly for communicating with you about your inquiry, directions, or visit. We do not sell, rent, or lease your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">3. Cookies and Tracking</h2>
            <p>
              This website uses minimal essential session storage to preserve performance preferences. No intrusive third-party advertising cookies are deployed.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-lg text-cream-100 mb-2">4. Contact & Rectification</h2>
            <p>
              To request removal or updates to your submitted information, contact us at {BUSINESS.email}.
            </p>
          </section>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

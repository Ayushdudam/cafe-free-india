import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/ui/Header";
import { CursorBean } from "@/motion/CursorBean";
import { PageLoader } from "@/motion/PageLoader";
import { SmoothScroll } from "@/motion/SmoothScroll";
import { BUSINESS, formatAddress } from "@/content/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafefreeindia.com"),
  title: `${BUSINESS.name} | Lower Parel, Mumbai`,
  description:
    "A cozy, brick-walled cafe on N. M. Joshi Marg, opposite Deepak Cinema in Lower Parel, Mumbai. Freshly pulled coffee, delicious comfort food, and unhurried conversations.",
  keywords: [
    "Cafe Free India",
    "Cafe Free India Lower Parel",
    "cafe opposite Deepak Cinema",
    "NM Joshi Marg cafe",
    "coffee shop Lower Parel",
    "Mumbai cafe",
    "Lower Parel cafe",
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    title: `${BUSINESS.name} — Lower Parel, Mumbai`,
    description: "A cozy neighbourhood cafe on N. M. Joshi Marg opposite Deepak Cinema. Fresh coffee, comfort food, and good company.",
    url: "https://cafefreeindia.com",
    siteName: BUSINESS.name,
    images: [
      {
        url: "/video/hero-poster-1920.webp",
        width: 1920,
        height: 1080,
        alt: `${BUSINESS.name} Espresso Extraction`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: "A cozy neighbourhood cafe on N. M. Joshi Marg opposite Deepak Cinema, Lower Parel.",
    images: ["/video/hero-poster-1920.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Local Business Schema (CafeOrCoffeeShop) with verified Google Maps anchor
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BUSINESS.name,
    image: "https://cafefreeindia.com/video/hero-poster-1920.webp",
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    hasMap: BUSINESS.googleMaps.placeUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.landmark}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.googleMaps.coordinates.latitude,
      longitude: BUSINESS.googleMaps.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.open,
        closes: BUSINESS.hours.close,
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <link rel="preload" as="image" href="/video/hero-poster-1920.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-espresso-900 text-cream-100 min-h-screen selection:bg-amber-500 selection:text-espresso-900">
        <SmoothScroll>
          <PageLoader />
          <CursorBean />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}

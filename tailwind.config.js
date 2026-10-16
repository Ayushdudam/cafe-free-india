/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        espresso: {
          900: "#14100F",
          800: "#1D1D23",
          700: "#2A211C",
        },
        roast: {
          600: "#3B2314",
        },
        caramel: {
          500: "#C68B59",
        },
        amber: {
          500: "#DB9423",
          600: "#ED7A00",
        },
        cream: {
          100: "#FAF6F0",
        },
        milk: {
          50: "#FFFFFF",
        },
        leaf: {
          500: "#5C7F4B",
        },
        chili: {
          500: "#C8453B",
        },
        glass: {
          bg: "rgba(250, 246, 240, 0.08)",
          border: "rgba(250, 246, 240, 0.18)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "DM Sans", "system-ui", "sans-serif"],
        accent: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      borderRadius: {
        card: "12px",
        frame: "24px",
      },
      boxShadow: {
        warm: "0 20px 60px rgba(20, 16, 15, 0.35)",
        goldGlow: "0 0 40px rgba(219, 148, 35, 0.35)",
        goldGlowLg: "0 0 60px rgba(237, 122, 0, 0.45)",
      },
      backgroundImage: {
        "grad-gold": "linear-gradient(135deg, #DB9423 0%, #ED7A00 100%)",
        "grad-espresso": "linear-gradient(180deg, #1D1D23 0%, #14100F 100%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        breathe: "breathe 8s ease-in-out infinite alternate",
        kenburns: "kenburns 24s ease-in-out infinite alternate",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

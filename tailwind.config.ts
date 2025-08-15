import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#000000",
          white: "#FFFFFF",
          gold: {
            primary: "#C9A227",
            light: "#D4B843",
            dark: "#B8941F",
          },
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(3rem, 8vw, 8rem)",
          { lineHeight: "0.9", letterSpacing: "-0.02em" },
        ],
        heading: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        subheading: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.8" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        content: "65ch",
        container: "1400px",
      },
      backdropBlur: {
        luxury: "25px",
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, #C9A227 0%, #D4B843 50%, #C9A227 100%)",
      },
      animation: {
        "luxury-float": "luxuryFloat 8s ease-in-out infinite",
        "elegant-fade-in": "elegantFadeIn 1s ease-out",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
        "subtle-glow": "subtleGlow 6s ease-in-out infinite",
      },
      keyframes: {
        luxuryFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        elegantFadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(60px) scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        goldShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        subtleGlow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(201, 162, 39, 0.15)" },
          "50%": { boxShadow: "0 0 50px rgba(201, 162, 39, 0.25)" },
        },
      },
      boxShadow: {
        luxury: "0 30px 80px rgba(201, 162, 39, 0.15)",
        "luxury-hover": "0 40px 100px rgba(201, 162, 39, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

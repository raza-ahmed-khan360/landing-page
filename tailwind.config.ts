import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode support
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Blue CTA
        dark: "#111827", // Dark background
        light: "#f9fafb", // Light background
        accent: "#ffb703", // Highlight
        muted: "#6b7280", // Subtext, descriptions
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(0, 123, 255, 0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

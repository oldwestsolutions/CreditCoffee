import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0B3D2E",
          cream: "#F5F1E8",
          espresso: "#3C2415",
          gold: "#C9A96E",
          latte: "#D4C5A9",
        },
        coinbase: {
          blue: "#0052FF",
          "blue-hover": "#0040CC",
          muted: "#5B616E",
          line: "#EEF0F3",
          surface: "#FFFFFF",
          wash: "#F5F8FF",
        },
        forest: {
          50: "#f0f7f4",
          100: "#dcefe7",
          200: "#b9dfcf",
          300: "#8ac7b0",
          400: "#5aa890",
          500: "#3d8b73",
          600: "#2d6f5c",
          700: "#25594a",
          800: "#1f473c",
          900: "#0B3D2E",
          950: "#061f17",
        },
        cream: {
          50: "#FDFCFA",
          100: "#FBF9F4",
          200: "#F5F1E8",
          300: "#EDE7D9",
          400: "#D4C5A9",
          500: "#C9A96E",
          600: "#B08C4A",
          700: "#8A6B35",
          800: "#654D24",
          900: "#3C2415",
        },
      },
      fontFamily: {
        /* Sandover is commercial; Cormorant (loaded as --font-sandover) matches the editorial feel site-wide */
        sans: ["var(--font-sandover)", "Cormorant", "Georgia", "serif"],
        serif: ["var(--font-sandover)", "Cormorant", "Georgia", "serif"],
      },
      backgroundImage: {
        grain:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

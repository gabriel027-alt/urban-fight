import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        combat: ["var(--font-bebas)", "Impact", "sans-serif"],
        tactical: ["var(--font-chakra)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        asphalt: {
          950: "#050505",
          900: "#09090b",
          850: "#0f0f13",
          800: "#141419",
          750: "#181820",
          700: "#21212c",
        },
        blood: {
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        hazard: {
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
      },
      boxShadow: {
        "spotlight-red": "0 0 100px -10px rgba(220, 38, 38, 0.4)",
        "spotlight-sharp": "0 0 45px -5px rgba(220, 38, 38, 0.6)",
        "ring-glow": "0 0 60px -10px rgba(220, 38, 38, 0.3)",
        "hazard-glow": "0 0 25px -5px rgba(250, 204, 21, 0.35)",
        "combat-plate": "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 40px -15px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "ring-spotlight": "radial-gradient(ellipse at 50% -20%, rgba(220, 38, 38, 0.25), transparent 70%)",
        "dual-spotlight": "radial-gradient(circle at 10% 20%, rgba(220, 38, 38, 0.2) 0%, transparent 40%), radial-gradient(circle at 90% 20%, rgba(153, 27, 27, 0.2) 0%, transparent 40%)",
        "hazard-stripes": "repeating-linear-gradient(45deg, #facc15, #facc15 10px, #050505 10px, #050505 20px)",
      },
      animation: {
        "marquee-left": "marqueeLeft 24s linear infinite",
        "marquee-right": "marqueeRight 24s linear infinite",
        "spotlight-pulse": "spotlightPulse 4s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        spotlightPulse: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        combat: {
          950: "#080808",
          900: "#0c0c0e",
          850: "#111114",
          800: "#17171b",
          700: "#22222a",
          red: "#ef4444",
          "red-dark": "#b91c1c",
          "red-light": "#f87171",
          gold: "#f59e0b",
        },
      },
      boxShadow: {
        "combat-glow": "0 0 35px -5px rgba(239, 68, 68, 0.35)",
        "combat-glow-lg": "0 0 65px -5px rgba(239, 68, 68, 0.45)",
        "combat-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "combat-radial": "radial-gradient(circle at top, rgba(239, 68, 68, 0.15), transparent 70%)",
        "combat-gradient": "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

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
        "xpay-blue": "#1B5FEC",
        "xpay-teal": "#00D4C8",
        "xpay-bg": "#FFFFFF",
        "xpay-text": "#0A0A0A",
        "xpay-muted": "#6B7280",
        "xpay-border": "#E5E7EB",
        "xpay-surface": "#F9FAFB",
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "hero-md": ["52px", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "hero-sm": ["38px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

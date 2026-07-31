/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          strong: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(224, 169, 94, 0.3)",
        },
        accent: {
          DEFAULT: "#E0A95E",
          strong: "#F3C583",
          deep: "#B37B2E",
          light: "rgba(224, 169, 94, 0.15)",
        },
        signal: {
          DEFAULT: "#7FC7C4",
          light: "rgba(127, 199, 196, 0.15)",
        },
        foreground: "#f4f4f5",
        muted: {
          DEFAULT: "#a1a1aa",
          strong: "#d4d4d8",
        }
      },
      fontFamily: {
        display: ["Syne", "Outfit", "sans-serif"],
        sans: ["DM Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "aurora": "aurora 18s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        aurora: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(50px, 30px) rotate(180deg)" },
          "100%": { transform: "translate(-30px, -50px) rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      }
    },
  },
  plugins: [],
}

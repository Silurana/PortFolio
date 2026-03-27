/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Requested design tokens
        portfolioBg: "#0f172a",
        portfolioCard: "#1e293b",
        portfolioText: "#e5e7eb",
        portfolioMuted: "#94a3b8",
        // Accent gradient stops (cyan -> blue)
        accentCyan: "#22d3ee",
        accentBlue: "#3b82f6",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34, 211, 238, 0.25), 0 0 30px rgba(59, 130, 246, 0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        cursorBlink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        cursorBlink: "cursorBlink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
}


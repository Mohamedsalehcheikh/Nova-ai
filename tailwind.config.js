/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nova: {
          navy: "#071426",
          card: "#0C1D36",
          line: "#16294A",
          blue: "#2563EB",
          cyan: "#06B6D4",
          gray: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Tajawal", "IBM Plex Sans Arabic", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(37,99,235,0.55)",
      },
      keyframes: {
        shimmer: {
          "0%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
          "100%": { opacity: "0.35" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

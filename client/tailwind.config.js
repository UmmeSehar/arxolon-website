/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        arxDark: "#051324",
        arxNavy: "#0A223D",
        arxCyan: "#14D6F2",
        arxBlue: "#1B8FE8",
        arxSurface: "#F4F8FB",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        heading: ["Sora", "system-ui", "sans-serif"],
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
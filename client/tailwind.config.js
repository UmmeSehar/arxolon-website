/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arxDark: '#050E1D',      // Deep Midnight Navy
        arxNavy: '#0A192F',      // Card & Section Navy
        arxCyan: '#00C8FF',      // Arxolon Logo Electric Cyan
        arxBlue: '#0284C7',      // Deep Tech Blue
        arxSilver: '#E2E8F0',    // Metallic Silver
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

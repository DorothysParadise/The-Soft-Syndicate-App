/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          bg: "#fefcf9",
          accent: "#eeced6",
          text: "#4b4b4b",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["'Playfair Display'", "serif"]
      }
    }
  },
  plugins: []
};

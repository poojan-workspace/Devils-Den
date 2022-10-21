/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "theme-maroon": "#7a0019",
      "theme-light": "#FFF0F3",
      white: "#ffffff",
      black: "#000000",
      blue: "#2563eb",
      gold: "#f8c92e",
      gray: "#475569",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};

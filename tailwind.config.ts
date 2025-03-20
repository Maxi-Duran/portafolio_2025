/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Habilitar modo oscuro basado en clases
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};

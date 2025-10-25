/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0a1818",
        lightbg: "#f8f9fa",
        primary: "#00adb5",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#F49A23",
      gray: "#2c2e38",
      white: "white",
      black: "black",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#6F7490",
      "bg-light": "#F3F4F8",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};

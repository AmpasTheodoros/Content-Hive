/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4vw": "4vw",
      },
      height: {
        "90vh": "90vh",
      },
      backgroundImage: {
        "hero-pattern": "url('/honeycomb.png')",
        polygon: "url('/polygon.jpg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "90vh": "90vh",
      },
      backgroundPosition: {
        bottom: "bottom",
        "bottom-4": "center bottom 1rem",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
        "bot-1": "left top 6rem",
      },
    },
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

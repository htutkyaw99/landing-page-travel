import Background from "./src/assets/images/background.jpg";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1D26",
        secondary: "#FBD784",
        font: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "serif"],
        serif: ["DM Serif Text", "serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};

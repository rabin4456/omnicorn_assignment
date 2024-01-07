// eslint-disable-next-line no-undef
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      screens: {
        sm: "980px",
      },

      colors: {
        primary: "#FFE58C",
        secondary: "#F15A29",
        dark: "#000000",
        yellow: "#FFD540",
        orange: "#F15A29",
        orange_dark: "#CF3C1D",
        gray: "#EBECF5",
      },

      keyframes: {
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

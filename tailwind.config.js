/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      gray: {
        50: "#F5F5F5",
        75: "#F6F6F6",
        100: "#E4E4E4",
        150: "#ABABAB",
        200: "#C8C9CD",
        250: "#9D9D9D",
        300: "#7A7776",
        400: "#483F3A",
        450: "#5a4f49",
        500: "#161616",
        600: "#262626",
        700: "#3F3F3F",
        800: "#D1D1D1",
        900: "#7A7776",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
        },
        ".flex-col-center": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        ".container": {
          width: "1311px",
          margin: "0 auto",
        },
      });
    }),
  ],
};

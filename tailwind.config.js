/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "420px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    extend: {
      width: {
        "container-xs": "355px",
        "container-sm": "400px",
        "container-md": "620px",
        "container-lg": "748px",
        "container-xl": "1004px",
        "container-2xl": "1260px",
        "container-3xl": "1311px",
      },
    },
    colors: {
      white: "#fff",
      green: "#00AB26",
      blue: "#0000FF",
      red: "#FF472F",
      yellow: "#ffff00",
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
        ".earth_container": {
          width: "100%",
          maxWidth: "1311px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          "@screen xs": {
            width: "355px",
          },
          "@screen sm": {
            width: "420px",
          },
          "@screen md": {
            width: "620px",
          },
          "@screen lg": {
            width: "748px",
          },
          "@screen xl": {
            width: "1004px",
          },
          "@screen 2xl": {
            width: "1260px",
          },
          "@screen 3xl": {
            width: "1311px",
          },
        },
        ".container": {
          width: "100%",
          margin: "0 auto",
          maxWidth: "1311px",
          "@screen xs": {
            width: "355px",
          },
          "@screen sm": {
            width: "420px",
          },
          "@screen md": {
            width: "620px",
          },
          "@screen lg": {
            width: "748px",
          },
          "@screen xl": {
            width: "1004px",
          },
          "@screen 2xl": {
            width: "1260px",
          },
          "@screen 3xl": {
            width: "1311px",
          },
        },
      });
    }),
  ],
};

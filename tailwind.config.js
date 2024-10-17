/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        naughty: ["Naughty Monster", "cursive"],
      },
      colors: {
        primary: "#800020", //burgundy
        secondary: "#FFD700", //yellow
        accent: "#00BFFF", //teal blue
        "accent-light": "#FF4500", //orange-red
        "accent-dark": "#FFFFFF", //white
        "accent-semidark": "#000000", //black
      },
       screens: {
        "2md": "850px",
        xs: "400px",
      },
    },
  },
  plugins: [],
};

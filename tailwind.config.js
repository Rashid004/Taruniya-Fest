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
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "40% 60% 55% 45%" },
          "25%": { borderRadius: "60% 40% 45% 55%" },
          "50%": { borderRadius: "50% 50% 50% 50%" },
          "75%": { borderRadius: "45% 55% 60% 40%" },
        },
      },
    },
  },
  plugins: [],
};

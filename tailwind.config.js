/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", "Gotham", "serif"], // Setting Playfair Display as primary, with Gotham as a fallback
        gotham: ["Gotham", "sans-serif"], // Adding Gotham as a standalone family if needed
      },

      colors: {
        primaryDark: "#371221", //burgundy
        primary: "#800020", //burgundy
        accent: "#00BFFF", //teal blue
        "accent-light": "#FF4500", //orange-red
        "accent-dark": "#FFFFFF", //white
        "accent-semidark": "#000000",
        secondary: "#BCA476", //yellow
        "secondary-yellow": "#DECBA7",
      },
      screens: {
        "2md": "850px",
        xs: "400px",
      },
      backgroundImage: {
        "home-desktop": "url('/home/bg-home2.jpg')",
        "home-tablet": "url('/home/bgTablet.jpg')",
        "home-mobile": "url('/home/bg-homeMobile.png')",
      },
    },
  },
  plugins: [],
};

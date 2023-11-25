/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mc: ["McLaren", "cursive"],
      mont: ["Montserrat", "sans-serif"],
    },
    extend: {},
    screens: {
      xl: { max: "70em" },
      lg: { max: "53em" },
      md: { max: "34.3em" },
    },
  },
  plugins: [],
};

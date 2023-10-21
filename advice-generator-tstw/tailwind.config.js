/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["manrope", "sans-serif"],
    },
    extend: {
      boxShadow: {
        xl: "0rem 0rem 3rem 0rem hsl(150, 95%, 66%)",
      },
    },
    screens: {
      md: { max: "35em" },
      sm: { max: "25.5em" },
    },
  },
  plugins: [],
};

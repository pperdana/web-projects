/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        98: "26rem",
      },
      boxShadow: {
        "3xl": "0px 0px 3px 2.5px #d3e4cd",
        "4xl":
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px, 0px 0px 0px 1.5px",
        "5xl":
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
    },
    screens: {
      "2xl": { max: "80em" },
      xl: { max: "65em" },
      lg: { max: "54em" },
      md: { max: "37.5em" },
      sm: { max: "30em" },
    },
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          n: colors.indigo[700],
          d: colors.indigo[800],
          l: colors.indigo[600],
        },
      },
    },
  },
  plugins: [],
};

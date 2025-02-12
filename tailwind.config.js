/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSerifDisplay: ['"DM Serif Display"', "serif"],
        dmSerif: ['"DM Serif Text"', "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

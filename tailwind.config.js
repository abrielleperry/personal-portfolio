/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "!./node_modules/**/*"],

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

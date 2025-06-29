/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // very important!
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1b1b1b",
        secondary:"#612b16",
        ternary:"#c84b1e"
      },
     fontFamily:{
        'primary':[   "Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"],
        'ternary':["Noto Serif", 'serif']

      }
    },
  },
  plugins: [],
}

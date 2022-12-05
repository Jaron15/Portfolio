/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "drumclass": "url(/drumclass.jpg)",
        "blackbearbakery": "url(/blackbearbakery.jpg)",
        "restaurantsearch": "url(/restaurantsearch.jpg)",
      },
      transitionDuration: {
        '0': '0ms',
        '1200': '1200ms',
      },
      screens: {
        'xs': '450px',
        ...defaultTheme.screens,
      },
      height: {
        '78p': '78%'
      }
    },
    fontFamily: {
      round: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

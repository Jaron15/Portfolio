/** @type {import('tailwindcss').Config} */
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
      }
    },
    fontFamily: {
      round: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

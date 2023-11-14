/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'special': ['Special Elite','sans-serif'],
      'basker':[ 'Baskervville', 'serif'],
      'work' :['Work Sans', 'sans-serif'],
    },
    backgroundImage: {
      'franchise': "url('/src/assets/images/parisbaguette.jpeg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

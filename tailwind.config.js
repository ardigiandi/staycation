/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'biru' : '#152C5B',
        'birumuda' : '#3252DF'
      }
    },
  },
  plugins: [],
}


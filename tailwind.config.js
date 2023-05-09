/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Primary Color
      'blue': '#197799',
      'orange': '#C64940',
      'yellow': '#D9BA38',
      'black': '#000000',
      'white': '#ffffff',
      // Secondary Color
      'violet': '#273444',
      'green': '#199991',
      // Grey
      'first-gray': '#525252',
      'second-gray': '#B8B4B4',
      'third-white': '#EFEFEF'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
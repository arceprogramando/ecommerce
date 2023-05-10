/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      lsm: '425px',

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
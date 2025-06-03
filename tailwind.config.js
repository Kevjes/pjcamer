/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Couleurs du drapeau du Cameroun
        primary: {
          DEFAULT: '#FCD116', // Jaune
          light: '#FDE48E',
          dark: '#E6B400',
        },
        secondary: {
          DEFAULT: '#009A49', // Vert
          light: '#4CBB6F',
          dark: '#007A3A',
        },
        accent: {
          DEFAULT: '#CE1126', // Rouge
          light: '#E84C3D',
          dark: '#A51C30',
        },
        neutral: {
          light: '#F8F9FA',
          DEFAULT: '#6C757D',
          dark: '#343A40',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

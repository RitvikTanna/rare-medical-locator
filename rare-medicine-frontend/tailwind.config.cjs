/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#10b981', // Emerald accent
        secondary: '#0d9488', // teal accent
        background: '#fff',
        darkBg: '#16171d',
        glass: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};

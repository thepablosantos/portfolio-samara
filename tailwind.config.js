/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          coral: '#e07f62',
          sand: '#e2b381',
          warmBrown: '#b88c74',
        },
        neutral: {
          darkGreen: '#16241f',
          sage: '#d1d1c0',
          lightCream: '#f6f3ef',
          softGray: '#d9d3cf',
          deepBlack: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Visia Pro', 'Poppins', 'sans-serif'],
        display: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

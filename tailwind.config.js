/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#20639B',
        secondary: '#6DC4C4',
        text: {
          primary: '#4A4A4A',
          secondary: '#525252',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F9F9F9',
        },
        border: '#D9D9D9',
        card: '#008080',
        progress: {
          primary: '#2864FF',
          secondary: '#6DC4C4',
        },
        error: '#E5733E',
        streak: {
          primary: '#7DF9FF',
          secondary: '#FF6F61',
        },
        interactive: '#008080',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
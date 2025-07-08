/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-primary': '#7B68EE',
        'violet-secondary': '#6A5ACD',
        'gray-primary': '#2C3E50',
        'gray-secondary': '#5D6D7E',
        'green-primary': '#27AE60',
        'green-light': '#E6F4EA'
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem'
      }
    },
  },
  plugins: [],
}
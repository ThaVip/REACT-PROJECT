/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-title': 'linear-gradient(135deg, #074967 0%, #42065b 100%)',
        'gradient-subtitle': 'linear-gradient(135deg, #8d2121 0%, #ff7069 100%)',
        'gradient-button': 'linear-gradient(135deg, #074967 0%, #8d2121 100%)'
      },

      height: {
        '75': '300px'
      },
    },
  },
  plugins: [],
}


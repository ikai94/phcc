/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange-main': '#DBA069',
        'text-black': '#333333',
        'red': '#842231',
        'pink': '#F9F4F4',
        'white-main': '#ffffff',
      },
      fontFamily: {
         "main": ['Fira Sans'] 
      },
      maxWidth: {
        '1440': '1440px',
      },
      screens: {
        'laptop': '1240px',
        'laptop-xs': '1060px',
        'laptop-2xs': '900px',
        '1450-max': {'max': '1450px'},
        '1240-max': {'max': '1240px'},
        '1060-max': {'max': '1060px'},
        '900-max': {'max': '900px'},
        '768-max': {'max': '768px'},
        '640-max': {'max': '640px'},
        '570-max': {'max': '570px'},
        '450-max': {'max': '450px'},
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        "light-black": '#171717',
        "off-white": '#C0C0C0',
        "theme-color": '#36285B',
        "theme-light-color": '#4F3E7C',
        "dark": '#414141',
        "light-dark": '#656565',
        "light-gray": '#DEDEDE',
        "light-purple": '#E5E6FF',
        "dark-purple": '#331251',
        "from-purple": '#3C2D67',
        "from-dark-purple": '#201235',
        "to-purple": '#1D1438',
        "to-dark-purple": '#1F151E',
        "dark-blue": "#112D48",
        "dark-opacity": "rgba(13, 60, 109, 0.5)",
        "darkest": "#424242"
      },
      boxShadow: {
        "gray-shadow": "0px 4.40101px 16.5038px rgba(0, 0, 0, 0.09);",
        "purple": "0px 4px 41px rgba(0, 0, 0, 0.25);"
      },
      backgroundColor: {
        "linear-light": "linear-gradient(101.23deg, #FFFFFF 0%, #FFFFFF 100%);",
        "linear-purple": "linear-gradient(91.38deg, #3C2D67 1.18%, #1D1438 100%);"
      }
    },
  },
  plugins: [],
}

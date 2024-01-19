/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      text: ["Poppins", "sans-serif"],
      heading: ["Abril Fatface", "sans-serif"],
      stylish: ["Ruthie", "cursive"],
    },
    colors: {
      "dark-yellow": "#bb9356",
      "yellow": "#ffc80a",
      "light-text": "#a5a5a5",
      "dark-black": "#1b1b1b",
      "light-black" : '#222222',
      'white' : '#fff',
      'transparent' : 'transparent',
    },
  },
  plugins: [],
};

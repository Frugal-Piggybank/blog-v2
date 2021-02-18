module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#ff0b78',
      subhead: '#ffe100',
      info: '#5773ff',
      success: '#00cc88',
      warning: '#ff8001',
      dark: '#0e141b',
      light: '#fefefe',
    },
    fontFamily: {
      sans: ['Martel Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

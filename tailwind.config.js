module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        azure: '#0290ff',
        'black-two': '#121212',
        'cool-blue': '#4386bf',
        'warm-grey': '#888888',
        'pinkish-grey': '#c4c4c4',
        'dirty-white': '#fafafa',
        'grey-border': '#e8e8e8',
        'pale-grey': '#f5f6fa',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};

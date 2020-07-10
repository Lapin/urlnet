module.exports = {
  purge: [
    './docs/**/*.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    colors: {
      lightgray: '#EBEBEB',
      truegray: '#A5A5A5',
      midgray: '#808080',
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
    variants: {},
    plugins: [],
  }
}
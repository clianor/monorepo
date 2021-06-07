// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled', 'checked'],
      backgroundColor: ['disabled', 'checked'],
      borderColor: ['disabled', 'checked'],
    },
  },
  plugins: [],
};

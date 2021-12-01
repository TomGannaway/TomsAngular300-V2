module.exports = {
  darkMode: 'class',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,scss,ts}'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

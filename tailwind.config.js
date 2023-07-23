/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx', './src/**/*.vue', './src/pages/**/*.js', './src/styles/**/*.css'],

  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
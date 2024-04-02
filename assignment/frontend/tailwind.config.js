/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      'serif': ['ui-serif', 'Georgia', ...defaultTheme.fontFamily.serif],
      'mono': ['ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
      'lato': ['Lato', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}


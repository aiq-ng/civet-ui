/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111828',
        secondary: '#1771d9',
        success: '#11963e',
        warning: '#fef6e8'
      }
    },
  },
  plugins: [],
}

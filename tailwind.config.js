/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'lightBgColor': '#c4d0ff',
        'btnColor': '#0079FF'
      }
    },
  },
  plugins: [],
}
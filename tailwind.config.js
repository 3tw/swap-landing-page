/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
   
    extend: { colors:{
      primary: '#92e0a0',
      dark: '#0b0b0b',
      white: '#ffffff'
    },},
  },
  plugins: [],
}
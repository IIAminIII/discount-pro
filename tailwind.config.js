/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif '], 
      },
      colors: {
        primary:'8D7B68' ,
        secondary: 'A4907C',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
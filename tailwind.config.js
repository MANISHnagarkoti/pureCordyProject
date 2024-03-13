/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {


      colors: {
        colorOne: "#4CAF4F",
        colorTwo: "#4D4D4D",
        footerbg: "#263238"

      }



    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors:{
      primary: '#090e34',
      secondary: '#0b113b',
    },},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding : "16px",
    },
    extend: {

      colors:{
        "primary" : "#1d4ed8",
        "secondary" : "#475569",
        "dark" : "#020617",
        "blue" : "#1d4ed8",
      }
    },
  },
  plugins: [],
}
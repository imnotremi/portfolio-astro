/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "130": "30rem",
        "140": "40rem"
      }
    },
  },
  plugins: [],
}
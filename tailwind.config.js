/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        blue: "#0000FF",
        green: "#008000",
        red: "#FF0000",
        "dark-yellow": "#FCCA3F",
        orange: "#F6820C",
      }
    },
  },
  plugins: [],
}


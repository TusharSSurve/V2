/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        whitecolor: '#f5f5f7',
        darkwhitecolor: '#9c9c9c',
        blackcolor: '#1f1f1f',
        warmblack: '#0b0c10',
        lightgreycolor: '#444445',
        neoncolor: '#66fcf1',
        darkneoncolor: '#406d71',
        greycolor: '#3b3b3b',
        darkgreycolor: '#181818',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
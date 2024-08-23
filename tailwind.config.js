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
      backgroundImage: {
        'anchor-gradient': 'linear-gradient(transparent 50%, #66fcf1 50%)',
      },
      backgroundSize: {
        'auto-175': 'auto 175%',
      },
      backgroundPosition: {
        'y-100': '0 100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      animation: {
        'slide-from-down-and-fade-1':
          'slide-from-down-and-fade 0.6s ease-in-out 0.1s both',
        'slide-from-down-and-fade-2':
          'slide-from-down-and-fade 0.6s ease-in-out 0.2s both',
        'slide-from-down-and-fade-3':
          'slide-from-down-and-fade 0.6s ease-in-out 0.3s both',
        'slide-from-down-and-fade-4':
          'slide-from-down-and-fade 0.6s ease-in-out 0.4s both',
        'slide-from-down-and-fade-5':
          'slide-from-down-and-fade 0.6s ease-in-out 0.5s both',
      },
      screens: {
        'desktop': '1440px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
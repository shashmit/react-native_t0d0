/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "barlow-300": "Barlow_300Light",
        "barlow-400": "Barlow_400Regular", 
        "barlow-500": "Barlow_500Medium",
        "barlow-700": "Barlow_700Bold",
      },
      colors:{
        "selected": "#F25606"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebarcolor: "#060118",
        sidebaractive: "#00FFCE",
        topbarcolor: "#F9F9F9",
        topbaractive:"#00FFCE"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",   // dark gray for text
        secondary: "#ffffff", // white background
        accent: "#2563eb",    // blue accent (professional, like LinkedIn)
      },
    },
  },
  plugins: [],
}

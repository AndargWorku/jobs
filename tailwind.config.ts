// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Use 'class' strategy for dark mode
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        
        'dark-background': '#1a202c', // Example dark background
        'dark-text': '#e2e8f0', // Example dark text
        'light-text': '#2d3748', // Example light text
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {gridTemplateColumns: {
     'fill': 'repeat(auto-fill, minmax(350px, 1fr))',
     'footer': '200px minmax(900px, 1fr) 100px',
    }},
  },
  plugins: [],
}


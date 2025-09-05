/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b1220',
        'card-dark': '#0f1724',
        'muted': '#9aa4b2',
        'accent': '#3b82f6'
      }
    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-red': 'var(--neon-red)',
      },
    },
  },
  plugins: [],
};
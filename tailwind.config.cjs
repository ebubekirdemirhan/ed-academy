/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617', // slate-950
        surface: '#020617',
        surfaceElevated: '#020617',
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#0b1120',
        },
        muted: '#1e293b',
        border: '#1e293b',
      },
    },
  },
  plugins: [],
};


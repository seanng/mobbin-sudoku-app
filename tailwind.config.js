/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shallow: '5px 5px rgba(0, 98, 90, 0.4)',
        deep: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)',
      },
      fontFamily: {
        mono: 'var(--font-mono)',
        display: 'var(--font-display)',
      },
      backgroundColor: {
        secondary: '#424b54',
      },
    },
  },
  plugins: [],
};

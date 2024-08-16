/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'floating-animation': {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'floating-animation 2s ease infinite alternate',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

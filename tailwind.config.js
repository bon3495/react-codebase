/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        rotateOpacity: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'rotate(360deg)',
            opacity: 1,
          },
        },
      },
      animation: {
        rotate: 'rotate 1s ease infinite',
        rotateOpacity1: 'rotateOpacity 1s ease infinite 0.1s',
        rotateOpacity2: 'rotateOpacity 1s ease infinite 0.2s',
      },
    },
  },
  plugins: [animate],
};

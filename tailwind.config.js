/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray: {
          5: 'var(--gray-5)',
        },
        green: {
          5: 'var(--green-5)',
        },
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
        },
        disabled: 'var(--disabled)',
      },
      boxShadow: {
        sm: '0px 8px 50px 0px #0D2D4F1F',
        table: '0px 8px 50px 0px rgba(13, 45, 79, 0.12)',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

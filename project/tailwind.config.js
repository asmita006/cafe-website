/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E91E93', // Pink from logo
          light: '#F06CBB',
          dark: '#C3107A',
        },
        secondary: {
          DEFAULT: '#00B3E3', // Cyan from logo
          light: '#65D9FF',
          dark: '#0091B3',
        },
        accent: {
          DEFAULT: '#FFD800', // Yellow from logo
          light: '#FFE54C',
          dark: '#D9B700',
        },
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        background: {
          light: '#FDF6F9',
          dark: '#190A13',
        }
      },
      fontFamily: {
        display: ['"Quicksand"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 30px rgba(233, 30, 147, 0.2)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(233, 30, 147, 0.05) 0%, rgba(0, 179, 227, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
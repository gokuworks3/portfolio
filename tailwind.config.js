/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      boxShadow: {
        soft: '0 12px 35px -20px rgba(15, 23, 42, 0.3)',
        card: '0 24px 55px -30px rgba(8, 145, 178, 0.38)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.3), 0 20px 40px -25px rgba(6, 182, 212, 0.46)',
        emerald: '0 20px 45px -26px rgba(16, 185, 129, 0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

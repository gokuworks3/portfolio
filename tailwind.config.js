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
        emerald: '0 20px 45px -26px rgba(16, 185, 129, 0.35)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)',
        'glow-accent': '0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.15)',
        'inner-glow': 'inset 0 0 20px rgba(6, 182, 212, 0.1)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        moveUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' }
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(6, 182, 212, 0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 20px 10px rgba(6, 182, 212, 0.2)' }
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(6, 182, 212, 0.3)' },
          '50%': { borderColor: 'rgba(6, 182, 212, 0.8)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        blob: 'blob 7s infinite',
        glow: 'glow 3s ease-in-out infinite',
        moveUp: 'moveUp 20s linear infinite',
        pulse3d: 'pulse3d 2s ease-in-out infinite',
        borderGlow: 'borderGlow 2s ease-in-out infinite',
        gradient: 'gradient 3s ease infinite'
      }
    }
  },
  plugins: []
};

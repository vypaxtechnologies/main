/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#d9e2ff',
          200: '#b3c5ff',
          300: '#8aa3ff',
          400: '#5a7aff',
          500: '#3355ff',
          600: '#1a3fe0',
          700: '#142fa8',
          800: '#0f2580',
          900: '#0B1633',
          950: '#070e24',
        },
        brand: {
          blue: '#0066FF',
          purple: '#8C2BE2',
          cyan: '#00C2FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(11, 22, 51, 0.08)',
        glow: '0 0 40px -10px rgba(0, 102, 255, 0.25)',
        'glow-purple': '0 0 40px -10px rgba(140, 43, 226, 0.25)',
        card: '0 8px 32px -12px rgba(11, 22, 51, 0.12)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0066FF 0%, #8C2BE2 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00C2FF 0%, #0066FF 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1633 0%, #0f2580 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 102, 255, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(0, 102, 255, 0)' },
        },
      },
    },
  },
  plugins: [],
};

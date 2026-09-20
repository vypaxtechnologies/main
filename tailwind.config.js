/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
          950: '#0D47A1',
        },
        brand: {
          blue: '#2196F3',
          purple: '#0D47A1',
          cyan: '#90CAF9',
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
        soft: '0 4px 24px -8px rgba(144, 202, 249, 0.5)',
        glow: '0 0 32px -12px rgba(33, 150, 243, 0.6)',
        'glow-purple': '0 0 32px -12px rgba(144, 202, 249, 0.6)',
        card: '0 8px 32px -12px rgba(144, 202, 249, 0.5)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #90CAF9 0%, #2196F3 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0D47A1 0%, #2196F3 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(144, 202, 249, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(144, 202, 249, 0)' },
        },
      },
    },
  },
  plugins: [],
};

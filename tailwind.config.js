/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060608',
          900: '#09090D',
          850: '#0E0E14',
          800: '#14141E',
          700: '#1C1C2A',
        },
        neon: {
          pink: '#FF2E93',
          magenta: '#FF1493',
          glow: 'rgba(255, 46, 147, 0.5)',
          light: '#FF85C0',
          deep: '#D6006B',
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.08)',
          'pink-border': 'rgba(255, 46, 147, 0.25)',
          surface: 'rgba(18, 18, 26, 0.65)',
          highlight: 'rgba(255, 255, 255, 0.03)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pink': 'glowPink 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPink: {
          '0%': { boxShadow: '0 0 15px rgba(255, 46, 147, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 46, 147, 0.7)' },
        }
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 46, 147, 0.4), 0 0 40px rgba(255, 46, 147, 0.1)',
        'neon-pink-sm': '0 0 10px rgba(255, 46, 147, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coke: {
          red: "#E41E3F",
          darkred: "#C8102E",
          crimson: "#F40009",
          deep: "#8B0018",
          black: "#111111",
          charcoal: "#1C1C1C",
          pastel: "#FAF7F5",
          pastelSoft: "#F3EFEA",
          pastelCard: "#FFFFFF",
          silver: "#E2E8F0",
          cream: "#FDFBF7",
          gold: "#D4AF37",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(28px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}

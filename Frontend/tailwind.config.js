/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // primary teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          dark: '#0f172a',
          cardDark: '#0e1726',
        },
        vitalize: {
          teal: '#20b2aa',
          mint: '#e6f7f5',
          dark: '#0d1520',
          darkCard: '#131e2f',
          textMuted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'teal-glow': '0 10px 25px -5px rgba(20, 184, 166, 0.3)',
        'dark-glow': '0 20px 35px -10px rgba(15, 23, 42, 0.4)',
      }
    },
  },
  plugins: [],
}

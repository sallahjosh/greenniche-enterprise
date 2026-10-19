/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1B7A4A',
          50:  '#EAF6EF',
          100: '#D2ECDD',
          200: '#A6D9BB',
          300: '#6FC391',
          400: '#3FA970',
          500: '#1B7A4A',
          600: '#16613C',
          700: '#124E31',
          800: '#0E3B25',
          900: '#0A2C1B',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FDFBF7',
          100: '#F5F0E8',
          200: '#EDE4D0',
        },
        earth: {
          DEFAULT: '#8C6A3F',
          light: '#C9A878',
          dark:  '#5C4326',
        },
        ink: '#1A1A1A',      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1' }],
        '8xl': ['6rem',    { lineHeight: '1' }],
        '9xl': ['8rem',    { lineHeight: '1' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft:   '0 2px 12px -2px rgba(10,44,27,0.08)',
        card:   '0 8px 32px -8px rgba(10,44,27,0.14)',
        lifted: '0 20px 60px -12px rgba(10,44,27,0.22)',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

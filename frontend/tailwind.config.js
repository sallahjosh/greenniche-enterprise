/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // GreenNiche brand
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
        earth: {
          DEFAULT: '#8C6A3F',
          light: '#C9A878',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(18, 78, 49, 0.08)',
        card: '0 6px 24px -8px rgba(18, 78, 49, 0.15)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

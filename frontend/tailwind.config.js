/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Primary brand ── */
        brand: {
          DEFAULT: '#1B7A4A',
          50:  '#EAF6EF',
          100: '#C8EAD7',
          200: '#96D4B0',
          300: '#5EBE88',
          400: '#2EA866',
          500: '#1B7A4A',
          600: '#15623B',
          700: '#104A2C',
          800: '#0B321E',
          900: '#061A0F',
        },
        /* ── Warm neutrals ── */
        stone: {
          50:  '#FAFAF9',
          100: '#F5F2ED',
          200: '#EBE5DC',
          300: '#D9CFBF',
          400: '#B8A990',
          500: '#907B62',
          600: '#6E5C47',
          700: '#4F4133',
          800: '#332A21',
          900: '#1A1510',
        },
        /* ── Readable text ── */
        ink: {
          DEFAULT: '#161613',
          light:   '#5C5A55',
          muted:   '#8F8D87',
        },
        /* ── Backgrounds ── */
        canvas: '#FAFAF7',
        parchment: '#F2EDE4',
        sage: '#E8F0EB',
      },
      fontFamily: {
        sans:    ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '6xl': ['3.75rem',  { lineHeight: '1' }],
        '7xl': ['4.5rem',   { lineHeight: '1' }],
        '8xl': ['6rem',     { lineHeight: '1' }],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightest: '-0.045em',
      },
      lineHeight: {
        tight: '1.1',
        snug:  '1.25',
      },
      boxShadow: {
        'xs':     '0 1px 3px 0 rgba(22,22,19,0.06)',
        'sm':     '0 2px 8px -1px rgba(22,22,19,0.09)',
        'md':     '0 6px 20px -4px rgba(22,22,19,0.12)',
        'lg':     '0 16px 48px -8px rgba(22,22,19,0.16)',
        'xl':     '0 32px 80px -16px rgba(22,22,19,0.20)',
        'inner-sm': 'inset 0 1px 3px 0 rgba(22,22,19,0.08)',
        'brand':  '0 8px 32px -8px rgba(27,122,74,0.35)',
      },
      maxWidth: {
        container: '1200px',
        prose:     '68ch',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

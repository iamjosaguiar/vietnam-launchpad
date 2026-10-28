/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Design D breakpoints: `nav` (900px) is where the desktop header and layouts switch on.
    screens: {
      sm: '640px',
      md: '768px',
      nav: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Logo navy ramp. primary-600 is the logo navy #003563.
        primary: {
          50: '#EEF4FA',
          100: '#D7E4F1',
          200: '#AFC7E2',
          300: '#7FA3CB',
          400: '#4A79A9',
          500: '#1D4F84',
          600: '#003563',
          700: '#002E57',
          800: '#00284A',
          900: '#001D37',
          950: '#001226',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Gold accent. Use as a background with ink text, never as text on light.
        accent: {
          50: '#FFF8E8',
          100: '#FFF1D2',
          200: '#FBE0A6',
          300: '#F7CB72',
          400: '#F2B84B',
          500: '#D99A2B',
          600: '#A8721A',
          700: '#7A5212',
          800: '#4F350B',
          900: '#2B1D06',
        },
        // Warm neutrals from paper to ink.
        stone: {
          50: '#FBF8F2',
          100: '#F5EFE3',
          200: '#E2D9C6',
          300: '#CFC4AE',
          400: '#8A8F94',
          500: '#5E6873',
          600: '#4A5560',
          700: '#36414B',
          800: '#24303B',
          900: '#14202B',
          950: '#0B141C',
        },
        paper: '#FBF8F2',
        sand: '#F5EFE3',
        ink: '#14202B',
        muted: '#4A5560',
        hairline: '#E2D9C6',
        navy: {
          DEFAULT: '#003563',
          deep: '#00284A',
        },
        gold: {
          DEFAULT: '#F2B84B',
          soft: '#FFF1D2',
          line: '#F0D9A4',
          hover: '#F7C86B',
        },
        success: {
          DEFAULT: '#17694A',
          soft: '#E5F2EA',
        },
        field: '#8A96A3',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        lead: ['1.125rem', { lineHeight: '1.6' }],
        'step-1': ['1.25rem', { lineHeight: '1.3' }],
        'step-2': ['1.5625rem', { lineHeight: '1.25' }],
        'step-3': ['1.953rem', { lineHeight: '1.2' }],
        'step-4': ['2.441rem', { lineHeight: '1.15' }],
        'step-5': ['3.052rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        measure: '68ch',
        site: '1160px',
      },
      borderRadius: {
        input: 'var(--radius-sm)',
        card: 'var(--radius-md)',
        panel: 'var(--radius-lg)',
      },
      spacing: {
        'header': 'var(--header-h)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        'glow-primary': '0 0 60px rgba(0, 53, 99, 0.18)',
        'glow-accent': '0 0 60px rgba(242, 184, 75, 0.2)',
        'elevation-1': 'var(--shadow-soft)',
        'elevation-2': 'var(--shadow-soft)',
        'elevation-3': 'var(--shadow-soft)',
        'elevation-4': 'var(--shadow-soft)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

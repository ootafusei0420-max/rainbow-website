export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: '#0ea5e9',
          skyDark: '#0369a1',
          pink: '#ec4899',
          yellow: '#f59e0b',
        },
        surface: {
          base: '#f8fafc',
          card: '#ffffff',
          muted: '#f1f5f9',
          elevated: '#e0f2fe',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          muted: '#64748b',
        },
      },
      spacing: {
        section: '6.5rem',
        sectionLg: '8.5rem',
      },
      borderRadius: {
        card: '1.75rem',
        soft: '1.25rem',
      },
      boxShadow: {
        card: '0 14px 35px -20px rgba(15, 23, 42, 0.28)',
        lift: '0 18px 40px -20px rgba(2, 132, 199, 0.35)',
      },
      fontSize: {
        display: ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        h1: ['clamp(1.65rem, 3.5vw, 2.6rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.4rem, 2.6vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        body: ['1rem', { lineHeight: '1.8' }],
        caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
    },
  },
  plugins: [],
};

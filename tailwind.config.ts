import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ベース
        ink: {
          950: '#0D0D0D',
          900: '#111111',
          800: '#1C1C1C',
          600: '#404040',
          400: '#888888',
          200: '#CCCCCC',
          50:  '#F9F9F9',
        },
        // アクセント1色: Amber
        accent: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

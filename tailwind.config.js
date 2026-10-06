/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#0B0D10',
          900: '#0D1117',
          800: '#151821',
          700: '#1C2130',
          600: '#242832',
          500: '#2E3340',
        },
        teal: {
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#22D3EE',
        },
        amber: {
          400: '#F5A623',
          500: '#E8A33D',
          600: '#D4921F',
        },
        text: {
          primary: '#E6E8EB',
          secondary: '#9AA1AC',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle, #242832 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

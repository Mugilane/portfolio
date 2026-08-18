/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:      '#f5c518',
        'gold-dark': '#d4a90e',
        'bg-deep':  '#111111',
        'bg-dark':  '#181818',
        'bg-card':  '#1e1e1e',
        'bg-alt':   '#242424',
        'text-light':'#b8b8b8',
        'text-muted':'#7a7a7a',
      },
      fontFamily: {
        barlow:    ['"Barlow"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        inter:     ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 8px 40px rgba(245,197,24,0.2)',
        card: '0 4px 24px rgba(0,0,0,0.5)',
      },
      keyframes: {
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        loadBar: {
          from: { width: '0%' },
          to:   { width: '100%' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':      { transform: 'translateX(-50%) translateY(8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 6px #f5c518' },
          '50%':      { boxShadow: '0 0 18px #f5c518' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 6px #22c55e' },
          '50%':      { boxShadow: '0 0 18px #22c55e' },
        },
      },
      animation: {
        'hero-float': 'heroFloat 6s ease-in-out infinite',
        'spin-slow':  'spinSlow 20s linear infinite',
        'spin-slow-r':'spinSlow 15s linear infinite reverse',
        'load-bar':   'loadBar 1.8s ease forwards',
        'bounce-y':   'bounce 2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'pulse-green':'pulseGreen 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-glow': 'rgba(245,197,24,0.18)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#10141C',
          elevated: '#171D28',
          border: '#262E3D',
        },
        paper: {
          DEFAULT: '#EEF0EC',
          elevated: '#FAFAF8',
          border: '#D8DAD3',
        },
        teal: {
          DEFAULT: '#34D9BE',
          soft: '#1C6E63',
        },
        indigo: {
          DEFAULT: '#5B6EF5',
          soft: '#333F99',
        },
        amber: {
          DEFAULT: '#E3A72F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        pulseDot: {
          '0%': { offsetDistance: '0%', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

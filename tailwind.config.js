/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#090D16', // Deep midnight navy background
          deep: '#05070D',
          surface: '#0E1322',
          elevated: '#151C30',
          border: '#222B42',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(139, 92, 246, 0.35)',
        },
        paper: {
          DEFAULT: '#F4F5F9',
          surface: '#FFFFFF',
          elevated: '#FFFFFF',
          border: '#E1E4ED',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          bright: '#A78BFA',
          deep: '#6D28D9',
          glow: 'rgba(139, 92, 246, 0.25)',
          subtle: 'rgba(139, 92, 246, 0.12)',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          bright: '#22D3EE',
          deep: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.25)',
          subtle: 'rgba(6, 182, 212, 0.12)',
        },
        aws: {
          orange: '#FF9900',
          amber: '#F59E0B',
          glow: 'rgba(255, 153, 0, 0.25)',
          subtle: 'rgba(255, 153, 0, 0.12)',
        },
        teal: {
          DEFAULT: '#2DD4BF',
          soft: '#0D9488',
          glow: '#5EEAD4',
        },
        indigo: {
          DEFAULT: '#6366F1',
          soft: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        amber: {
          DEFAULT: '#F59E0B',
          soft: '#D97706',
        },
        emerald: {
          DEFAULT: '#10B981',
          soft: '#059669',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        morphBlob: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
          },
          '33%': {
            borderRadius: '40% 60% 70% 30% / 50% 60% 30% 60%',
            transform: 'translate(30px, -20px) rotate(120deg) scale(1.08)',
          },
          '66%': {
            borderRadius: '70% 30% 50% 50% / 30% 40% 60% 70%',
            transform: 'translate(-25px, 20px) rotate(240deg) scale(0.96)',
          },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        morph: 'morphBlob 18s ease-in-out infinite',
        'morph-slow': 'morphBlob 26s ease-in-out infinite reverse',
        float: 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        reveal: 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 4s linear infinite',
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.18), transparent 70%)',
        'radial-glow': 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 65%)',
      },
    },
  },
  plugins: [],
}

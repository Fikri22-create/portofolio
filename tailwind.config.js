/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0A0D14', soft: '#0d1119', card: '#28364E' },
        accent: { DEFAULT: '#556FF7', blue: '#7B8FF9', glow: '#3D55E8', dim: '#3a4f8a', teal: '#38bdf8' },
        line: '#28364E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(85,111,247,0.5)',
        'glow-blue': '0 0 40px -10px rgba(123,143,249,0.4)',
        'glow-teal': '0 0 40px -10px rgba(56,189,248,0.4)',
        card: '0 10px 40px -20px rgba(0,0,0,0.7)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        aurora: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 20px rgba(85,111,247,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(85,111,247,0.7), 0 0 80px rgba(85,111,247,0.2)' },
        },
        'gradient-shift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) translateX(20px)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        aurora: 'aurora 8s ease infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'particle-drift': 'particle-drift 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

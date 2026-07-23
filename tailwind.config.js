export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08090d',
          soft:    '#0d1017',
          card:    '#13171f',
          surface: '#1a1f2e',
        },
        accent: {
          DEFAULT: '#6366f1',
          dim:     '#4f46e5',
          glow:    '#4338ca',
          muted:   'rgba(99,102,241,0.12)',
          light:   '#818cf8',
        },
        line: 'rgba(255,255,255,0.06)',
        ink: {
          primary:   '#f1f2f4',
          secondary: '#8891a4',
          muted:     '#4a5568',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow:        '0 0 40px -10px rgba(99,102,241,0.45)',
        'glow-sm':   '0 0 20px -8px rgba(99,102,241,0.35)',
        card:        '0 10px 40px -20px rgba(0,0,0,0.9)',
        'card-hover':'0 24px 64px -20px rgba(0,0,0,1), 0 0 40px -10px rgba(99,102,241,0.12)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'spin-slow-rev': {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%':     { boxShadow: '0 0 40px rgba(99,102,241,0.7), 0 0 80px rgba(99,102,241,0.2)' },
        },
        'gradient-shift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'marquee-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float:            'float 7s ease-in-out infinite',
        shimmer:          'shimmer 2.5s linear infinite',
        'spin-slow':      'spin-slow 22s linear infinite',
        'spin-slow-rev':  'spin-slow-rev 16s linear infinite',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'marquee-left':   'marquee-left 28s linear infinite',
        'marquee-right':  'marquee-right 32s linear infinite',
        'fade-up':        'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};

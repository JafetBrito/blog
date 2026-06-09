/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans:    ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      fontSize: {
        sm:    ['0.9375rem', { lineHeight: '1.6' }],
        base:  ['1.0625rem', { lineHeight: '1.75' }],
        lg:    ['1.1875rem', { lineHeight: '1.65' }],
        xl:    ['1.3125rem', { lineHeight: '1.5' }],
        '2xl': ['1.5625rem', { lineHeight: '1.4' }],
        '3xl': ['1.9375rem', { lineHeight: '1.3' }],
        '4xl': ['2.4375rem', { lineHeight: '1.2' }],
      },
      colors: {
        terminal: {
          bg:          '#09090b',
          surface:     '#111115',
          border:      '#27272a',
          green:       '#00ff41',
          'green-dim': '#00cc33',
          cyan:        '#00e5ff',
          red:         '#ff2050',
          yellow:      '#ffd700',
          orange:      '#ff6b35',
          purple:      '#bd00ff',
        },
      },
      animation: {
        blink:       'blink 1s step-end infinite',
        'scan-line': 'scanLine 10s linear infinite',
        'fade-in':   'fadeIn 0.5s ease-out',
        'slide-up':  'slideUp 0.6s ease-out both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanLine: {
          '0%':   { top: '-2px' },
          '100%': { top: '100vh' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

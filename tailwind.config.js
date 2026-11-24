/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        charcoal: 'var(--charcoal)',
        graphite: 'var(--graphite)',
        crimson: 'var(--crimson)',
        magenta: 'var(--magenta)',
        burgundy: 'var(--burgundy)',
        offwhite: 'var(--offwhite)',
        blush: 'var(--blush)',
        'text-dark': 'var(--text-dark)',
        'text-dark-muted': 'var(--text-dark-muted)',
        'text-light': 'var(--text-light)',
        'text-light-muted': 'var(--text-light-muted)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'crimson-grad': 'var(--grad)',
      },
      boxShadow: {
        'crimson-glow': 'var(--glow)',
        'crimson-glow-lg': '0 20px 60px rgba(248, 17, 90, 0.45)',
      },
      borderRadius: {
        'sm': 'var(--r-sm)',
        'md': 'var(--r-md)',
        'lg': 'var(--r-lg)',
        'pill': 'var(--r-pill)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      }
    },
  },
  plugins: [],
}

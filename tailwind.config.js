/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#AE4010',
        charcoal: '#202020',
        bone: '#DADADA',
        muted: '#979797',
      },
      fontFamily: {
        mont: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
        smooth: '18px',
      },
      boxShadow: {
        glow: '0 10px 25px rgba(174, 64, 16, 0.24)',
      },
      backgroundImage: {
        'grain-gradient':
          'radial-gradient(180% 120% at 20% 20%, rgba(174, 64, 16, 0.32), transparent 45%), radial-gradient(160% 120% at 80% 10%, rgba(255,255,255,0.08), transparent 42%), linear-gradient(135deg, #202020 0%, #1b1b1b 40%, #161616 100%)',
      },
    },
  },
  plugins: [],
};

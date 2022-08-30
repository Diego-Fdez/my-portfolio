/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        128: '640px',
      },
      lineHeight: {
        95: '95px',
      },
      height: {
        46: '182px',
      },
      borderRadius: {
        '5xl': '32px',
        '6xl': '64px',
        custom: '30% 70% 70% 30% / 29% 30% 70% 71%',
        middle: '50%',
        form: '64% 36% 80% 20% / 97% 81% 19% 3% ',
      },
      textColor: {
        custom: '#fcbc02',
        custom2: '#202020',
      },
      backgroundColor: {
        custom: '#fcbc02',
        custom2: '#202020',
        new: 'rgba(252, 189, 2, 0.6)',
      },
      blur: {
        custom: '150px',
      },
      borderColor: {
        custom: '#fcbc02',
      },
    },
    plugins: [],
  },
};

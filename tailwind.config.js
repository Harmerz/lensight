/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'FFFFFF',
          50: '#F6F6F6',
          100: '#EEEEEE',
          300: '#CBCBCB',
          500: '#A8A8A8',
          700: '#6D6D6D',
          900: '#323232',
          10: '#141414',
        },
        eneutral: {
          100: '#232323',
          200: '#2B2B2B',
          300: '#414141',
        },
      },
      fontFamily: {
        dmsans: ['DM Sans'],
        inter: ['Inter'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')],
}

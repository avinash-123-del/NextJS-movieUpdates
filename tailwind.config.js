/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'login-bg': "url('/loginbg.jpg')"
      },
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
        'tab': '769px',
        'tab-min': '767'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'Courgette': ['Courgette', 'cursive'],
        'Pacifico': ['Pacifico', 'cursive']
      }
    },

  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem', 
      // 12px
      sm: '0.778rem',
      // 12.44px
      base: '0.875rem',
      // 14px
      lg: '0.938rem',
      // 15px
      xl: '1.125rem',
      // 18px
      '2xl': '1.188rem',
      // 19px
      '3xl': '1.25rem',
      // 20px
      '4xl': '1.5rem',
      // 24px
    },
    borderRadius: {
      DEFAULT: '0.563rem',
      md: '0.625rem',
      lg: '0.688rem',
      xl: '6.25rem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'base-blue': '#2D82BE',
        'light-blue': '#3286C2',
        'dark-blue': '#0063A9',
        'available': '#73CB5E',
        'sale': '#F0F9FF',
        'gradient-a': '#3186C3',
        'gradient-b': '#186aa4',
        'gradient-c': '#004F86',
        'faded': '#E0E0E0',
        'whatsapp': '#2CB742'
      },
      fontSize: {
        'sm-plus': '0.813rem',
        'xs-minus': '0.625rem',
        'xs-notification': '0.375rem',
        '4xl-plus': '1.5625rem'
      }
    },
  },
  plugins: [],
}

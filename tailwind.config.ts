import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        carbon: 'url("/carbon.png")',
      },
      dropShadow: {
        yellow: '0 4px 14px rgba(249, 235, 82, 0.5)',
        blue: '0 4px 14px rgba(4, 209, 206, 0.5)',
        red: '0 4px 14px rgba(220, 53, 69, 0.5)',
      },
      colors: {
        danger: '#DC3545',
        black: '#101010',
        mercedes: {
          blue: {
            100: '#cdf6f5',
            200: '#9bedeb',
            300: '#68e3e2',
            400: '#36dad8',
            500: '#04d1ce',
            600: '#03a7a5',
            700: '#027d7c',
            800: '#025452',
            900: '#012a29',
          },
        },
        ferrari: {
          yellow: {
            100: '#fefbdc',
            200: '#fdf7ba',
            300: '#fbf397',
            400: '#faef75',
            500: '#f9eb52',
            600: '#c7bc42',
            700: '#958d31',
            800: '#645e21',
            900: '#322f10',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

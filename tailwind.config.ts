import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        yellow: '0 4px 14px rgba(249, 235, 82, 0.5)',
      },
      colors: {
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

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: '#5B21B6',
          dark: '#4C1D95',
        },
        secondary: {
          light: '#FDE68A',
          DEFAULT: '#FCD34D',
          dark: '#FBBF24',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
      },
    },
  },
  plugins: [],
}
export default config

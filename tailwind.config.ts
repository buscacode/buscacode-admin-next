import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
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
      },
      colors: {
        ...defaultTheme.colors,
        'primary': '#00AAA7',
        'secondary': '#EEA439',
        'tertiary': '#EE7A80',
        'blackBack': '#0d1117',
        'white': {
          DEFAULT: '#fff',
          500: '#f5f5f5',
          400: '#e6e6e6',
          'op':{
            10: '#ffffff1a',
            20: '#ffffff33',
            30: '#ffffff4d',
            40: '#ffffff66',
            50: '#ffffff80',
            60: '#ffffff99',
            70: '#ffffffb3',
            80: '#ffffffcc',
            90: '#ffffffe6',
          }
        },
        fontWeight: {
          thin: '100',
          hairline: '100',
          extralight: '200',
          light: '300',
          normal: '200',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          'extra-bold': '800',
          black: '900',
        },
      },

      keyframes: {
        'faded': {
          '0%': { opacity: '0', },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        faded: 'faded 0.5s ease-in-out 1 normal both',
        'faded-reverse': 'faded 0.5s ease-in-out 1 reverse both',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default config

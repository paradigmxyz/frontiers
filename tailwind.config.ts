import capsize from 'tailwindcss-capsize'
import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss/types/config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [capsize],

  // NOTE: It may be tempting to add theme tokens adhocly, but please
  // consider talking to the designer first to keep the brand in sync.
  theme: {
    // Ref: Colors – https://www.notion.so/paradigmxyz/Brand-Kit-2024-5a8dd9a3fd524b7787e8801726f4de87?pvs=4#a16a321654654d41b109fedde5fe6d1c
    colors: {
      black: 'black',
      cobalt: '#0F5AB2',
      darkGray: '#D0D0D0',
      gray: '#DDEBDD',
      frontier: '#F6FFF6',
      paradigmGreen: '#00E100',
      saffron: '#E6A11B',
      spaceBlack: '#090909',
      violet: '#C100A3',
      white: 'white',
    },
    // Ref: Typography – https://www.notion.so/paradigmxyz/Brand-Kit-2024-5a8dd9a3fd524b7787e8801726f4de87?pvs=4#9ec0d71718534011808d280dec9b3219
    fontFamily: {
      sans: ['Martina Plantijn', ...defaultTheme.fontFamily.sans],
      typewriter: ['Atlas Typewriter', ...defaultTheme.fontFamily.mono],
    },
    fontMetrics: {
      sans: {
        capHeight: 700,
        ascent: 991,
        descent: -262,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      typewriter: {
        capHeight: 765,
        ascent: 1052,
        descent: -200,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 50ms cubic-bezier(0.77, 0, 0.175, 1)',
      'accordion-up': 'accordion-up 50ms cubic-bezier(0.77, 0, 0.175, 1)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
}
export default config

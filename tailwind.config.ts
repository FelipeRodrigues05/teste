import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
      'purple-100': '#e9caf7',
      'purple-200': '#da97f8',
      'purple-300': '#c660f4',
      'purple-400': '#ba3cf3',
      'purple-500': '#af18f2',
      'purple-600': '#b000ff',
      'purple-700': '#8202bb',
      'purple-800': '#5b0382',
      'purple-900': '#29013b',
    }
    },
  },
  plugins: [],
}

export default config

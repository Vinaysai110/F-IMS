/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        ink: '#0C0C0C',
        panel: '#131318',
        panel2: '#17171D',
        mist: '#D7E2EA',
        mistmuted: 'rgba(215, 226, 234, 0.6)',
        hairline: 'rgba(215, 226, 234, 0.15)',
        amber: '#D9662B',
        magenta: '#B600A8',
      },
      backgroundImage: {
        'heading-gradient': 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
        'signature-gradient': 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      },
    },
  },
  plugins: [],
}

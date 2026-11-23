/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        keyline: {
          orange: '#F56900',
          'orange-hover': '#DD5C00',
          'orange-50': '#FFF8F2',
          'orange-100': '#FFEDDF',
          cream: '#FAF7F2',
          sand: '#F4EFE6',
          ivory: '#EFE9DD',
          border: '#E8E1D3',
          borderDark: '#2C3444',
          navy: '#001773',
          midnight: '#0D1424',
          darkSurface: '#141D30',
          charcoal: '#1A1E24',
          textMuted: '#687282',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'framer': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'framer-hover': '0 30px 60px -12px rgba(245, 105, 0, 0.12), 0 0 0 1px rgba(245, 105, 0, 0.2)',
        'framer-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0B0F17',
          light: '#F8FAFC'
        },
        surface: {
          dark: '#111827',
          light: '#FFFFFF'
        },
        stroke: {
          dark: '#1F2937',
          light: '#E2E8F0'
        },
        brand: {
          blue: '#3B82F6',
          darkBlue: '#1D4ED8'
        },
        status: {
          emerald: '#10B981'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'polaroid': ['Courier New', 'monospace'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        'cream': '#FDF6E3',
        'vintage': '#F4F1DE',
        'sepia': '#E07A5F',
        'brown': '#81B29A',
        'dark-brown': '#3D405B',
      },
      boxShadow: {
        'polaroid': '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
        'polaroid-hover': '0 8px 16px rgba(0, 0, 0, 0.15), 0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
}

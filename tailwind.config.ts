import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom jewelry theme colors
        jewelry: {
          gold: {
            50: '#fefbf3',
            100: '#fdf6e3',
            200: '#faecb7',
            300: '#f6dc7a',
            400: '#f2c851',
            500: '#efb429',
            600: '#d4941a',
            700: '#b17516',
            800: '#8f5e18',
            900: '#754e17',
          },
          rose: {
            50: '#fef7f7',
            100: '#feecec',
            200: '#fdd8d8',
            300: '#fcb5b5',
            400: '#f98585',
            500: '#f45d5d',
            600: '#e13b3b',
            700: '#bd2d2d',
            800: '#9d2828',
            900: '#822626',
          },
          amber: {
            25: '#fffcf5',
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'shimmer': {
          '0%': {
            'background-position': '-200px 0'
          },
          '100%': {
            'background-position': 'calc(200px + 100%) 0'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'sparkle': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.3',
            transform: 'scale(0.8)',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(245, 158, 11, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

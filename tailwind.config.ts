import type { Config } from "tailwindcss";
// /** @type {import('tailwindcss').Config} */

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./app/components/ui/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular', 'sans-serif'],
        medium: ['Medium', 'sans-serif'],
        bold: ['Bold', 'sans-serif'],
        extrabold: ['ExtraBold', 'sans-serif'],
      },
    },
    colors: {
      primary: '#afcc54',
      secondary:'#cfd6df',
      green: '#afcc54',
      red: 'f43f5e',
      black: '#000000',
      'gray-100': '#f9fafb',
      'gray-200': '#eef2f7',
      'gray-300': '#e3e9f0',
      'gray-400': '#cfd6df',
      'gray-500': '#a9b3bc',
      'gray-600': '#81888f',
      'gray-700': '#5b5d62',
      'gray-800': '#3f3e45',
      'gray-900': '#27252b',
    },
    fontFamily: {
      sans: ['Regular'],
    },
  },
  plugins: [],
} satisfies Config;

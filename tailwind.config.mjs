/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // Activa el modo oscuro usando una clase
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	mode: 'jit',
	theme: {
	  extend: {
		screens: {
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		},
		overflowX: {
		  'hidden': 'hidden',
		},
	  },
	},
	plugins: [
	  require('tailwindcss-animated'),
	  
	],
	vars: {
		dark: {
		  background: '#222',
		  text: '#fff',
		  gray100: '#aaa',
		  link: '#fff',
		  hoverBg: '#333',
		},
		light: {
		  // ... Colores para el modo claro
		},
	  },
  }
  
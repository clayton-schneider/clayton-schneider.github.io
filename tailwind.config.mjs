/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
	'system-ui',
	'-apple-system',
	'BlinkMacSystemFont',
	'Segoe UI',
	'Roboto',
	'Oxygen',
	'Ubuntu',
	'Cantarell',
	'Open Sans',
	'Helvetica Neue',
	'sans-serif'
]

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Roboto', ...FONT_FAMILY_BASE]
		},
		extend: {
			padding: {
				edge: '2.5%'
			}
		}
	},
	plugins: []
}

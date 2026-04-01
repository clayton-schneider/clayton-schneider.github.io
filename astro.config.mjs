import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	build: {
		format: 'file'
	},
	site: 'https://claytonschneider.dev',
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		react(),
		sitemap(),
		icon(),
		robotsTxt({
			policy: [
				{
					userAgent: '*',
					allow: '/',
					disallow: '/assets'
				}
			]
		})
	]
})

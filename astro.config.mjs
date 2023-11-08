import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	build: {
		format: 'file'
	},
	site: 'https://claytonschneider.dev',
	integrations: [
		tailwind(),
		react(),
		sitemap(),
		robotsTxt({
			policy: {
				userAgent: '*',
				allow: '/',
				disallow: '/assets'
			}
		})
	]
})

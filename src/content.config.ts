import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		isDraft: z.boolean().optional().default(true),
	})
})

export const collections = {
	blog: blogCollection
}

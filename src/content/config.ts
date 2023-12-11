import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
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

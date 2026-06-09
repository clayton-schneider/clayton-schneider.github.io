import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from "astro/zod"

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		isDraft: z.boolean().optional().default(true),
	})
})

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		image: image(),
		imageAlt: z.string(),
		demoUrl: z.url().optional(),
		sourceUrl: z.url().optional(),
	})
})

export const collections = {
	blog: blogCollection,
	projects: projectsCollection
}

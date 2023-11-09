---
title: Create A Blog With Astro
description: This is my approach to building a developer blog using Astro.
date: 2023-11-09
---

1. Create a content folder
2. Create a blog folder
3. Put your first blog post in there as md
4. Create a config.ts
5. Define your content collection
6. Generate blog pages
   1. Create blog dir
   2. Create blog post file
   3. Install tailwind plugin

### The Schema You Define Will Be Enforced

```tsx
import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		date: z.date()
	})
})

export const collections = {
	blog: blogCollection
}
```

```markdown
---
title: hello world
---

hello world
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7fc6dc0f-18cf-49ee-94f7-52ef5b527b91/718c398d-d1b4-4172-89f4-f9c978c7a34c/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7fc6dc0f-18cf-49ee-94f7-52ef5b527b91/14bac062-acdc-496f-bae8-4197e9e11ea2/Untitled.png)

## Define Your Content Collection

Choose which type it will be content (md) or data (json, yaml)

## Problems You May Run Into

Sometimes you need to reload your server so that it will import astro:content

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7fc6dc0f-18cf-49ee-94f7-52ef5b527b91/79f15c88-ca21-4841-98f6-10d21799182c/Untitled.png)

The same goes for making sure that it type checks the frontmatter for your markdown files

If you are using VS code you can do this:

ctrl + shift + p

may even need to restart vs code

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7fc6dc0f-18cf-49ee-94f7-52ef5b527b91/202da377-7f01-4b4c-abeb-38b93344ea94/Untitled.png)

## Take this further

- Add draft mode ⇒ won’t show in feed

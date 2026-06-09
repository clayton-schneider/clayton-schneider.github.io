---
title: "I Cheat At Wordle"
description: "Wordle companion app to make finding your next guess easier."
image: "../../imgs/projects/icheatatwordle/i-cheat-at-wordle.png"
imageAlt: "I Cheat At Wordle"
demoUrl: "https://icheatatwordle.com"
sourceUrl: "https://github.com/clayton-schneider/icheatatwordle"
---

# Rebuilding "I Cheat at Wordle" with Zero Dependencies

"This is probably overkill..." I thought to myself. Back in October of 2023, 
when I originally built [icheatatwordle.com](https://icheatatwordle.com/), I had decided
that I wanted to give the [T3 stack](https://create.t3.gg/) a spin. Consisting of Next.js, React,
tRPC, React Query, Zod, and Radix UI, I had initially thought that icheatatwordle would consist
of more frontend - backend communication. Having built the project once,
it bugged me knowing how much software the application relied on. So, in May of 2026, I rebuilt the whole thing with
the challenge of using **zero runtime dependencies** (only TypeScript and Vite were used).

## Improvements
Before I dive into the analysis of the two versions, I would like to point out that, in addition
to rebuilding the application with zero dependencies, I added more features:
- Search mode: allowing the user to filter down the list of candidate guesses.
- Virtual scrolling: rendering and scrolling through all 14,855 words can introduce some *jank*.
I added virtual scrolling to improve the performance of the word list being updated and rendered.
- UI overhaul: the UI was reconstructed, using plain CSS, to create a more user-friendly experience.

## Developer environment

| Metric | Next.js (T3 stack) | Vanilla TS + Vite |
|---|---|---|
| Direct runtime deps | 23 | **0** |
| Direct dev deps | 15 | 3 |
| Total packages installed | 299 | 77 |
| `node_modules` size | 527 MB | **104 MB** |
| `npm install` (warm cache) | 8.1 s | **1.7 s** |
| Production build | 19.3 s (`next build`) | **2.0 s** (`vite build`) |
| App source | 1,103 LOC / 23 files | **721 LOC / 3 files** |
| Build output on disk | 41 MB (`.next/`) | **160 KB (`dist/`)** |

The dependency surface is the headline: 23 runtime dependencies and 299 total installed packages collapsed to
**zero and 77**. The build went from ~19 s to ~2 s, and the on-disk output shrank from 41 MB to 160 KB.

## What ships to the browser

The most honest comparison is total transfer to an interactive page. The Next.js version sends a 111 KB
(gzipped) JavaScript bundle of framework + app code and then fetches the word dictionary separately; the
vanilla version sends a single ~47 KB bundle with the dictionary already inlined. Subtract the identical
dictionary from both and the framework cost is stark: roughly **6 KB of actual app code** versus **111 KB of
React/Next runtime + app**.

## Lighthouse (live sites, desktop)

Old version hosted on Netlify, new version on Cloudflare. Measured metrics only:

| Metric | Old (Next.js) | New (Vanilla) |
|---|---|---|
| First Contentful Paint | 0.6 s | **0.4 s** |
| Largest Contentful Paint | 1.1 s | **0.6 s** |
| Time to Interactive | 1.1 s | **0.6 s** |
| Speed Index | 0.6 s | **0.5 s** |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |
| Total page weight | 204 KiB | **63 KiB** |
| Network requests | 9 | 8 |

LCP and TTI both roughly halved, and total page weight dropped ~3.3×. Total Blocking Time and Cumulative
Layout Shift were already perfect on the original. The Next.js app wasn't janky, so the win here is payload
and load time, not runtime smoothness.

## Caveats

- The two versions are hosted behind different CDNs (Netlify vs Cloudflare), so a slice of the load-time
  difference is infrastructure, not framework. The payload weight, though, is intrinsic to the code.
- Install and build times were measured with a warm npm cache on a 16-core machine.

## Takeaway

Having built icheatatwordle once before, it was clear that a zero dependency version of the 
application made more sense. The application itself has a very narrow feature-set, all of
which can be addressed client-side. I was reminded how capabale vanilla JavaScript/TypeScript
can be, as I didn't find the rewrite to be overwhelming.

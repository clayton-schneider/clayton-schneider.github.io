# Rebuilding "I Cheat at Wordle" with Zero Dependencies

I originally built [icheatatwordle.com](https://icheatatwordle.com/) on the T3 stack — Next.js, React,
tRPC, React Query, Zod, superjson, and Radix UI. It's a solid scaffold, but for a tool that's really just
"filter a word list in the browser," it felt like a lot of machinery. So I rebuilt the whole thing in plain
TypeScript with Vite and **zero runtime dependencies**, and measured what actually changed.

The word list itself is byte-for-byte identical between the two versions (118,841 bytes), so it's a controlled
variable rather than something skewing the numbers.

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
React/Next runtime + app** for the same UI.

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
Layout Shift were already perfect on the original — the Next.js app wasn't janky, so the win here is payload
and load time, not runtime smoothness.

## Caveats

- The two versions are hosted behind different CDNs (Netlify vs Cloudflare), so a slice of the load-time
  difference is infrastructure, not framework. The payload weight, though, is intrinsic to the code.
- Install and build times were measured with a warm npm cache on a 16-core machine; Lighthouse was a single
  desktop run per site.
- Going dependency-free isn't free: Radix UI had been handing me accessible, ARIA-correct UI primitives for
  nothing, and hand-rolling them is work I now own.

## Takeaway

For a small, client-side tool, the full-framework scaffold cost an order of magnitude more in dependencies,
build time, and shipped bytes — while the rebuilt version is faster and dramatically simpler to reason about.
The framework wasn't wrong, it was just far more than this particular problem needed.

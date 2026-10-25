// Checks every [[slug]] link in the theory library resolves, and that no slug is used twice.
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { ARTICLES } = await server.ssrLoadModule('/src/features/theory/articles.source.ts')
const { findArticle } = await server.ssrLoadModule('/src/features/theory/wiki.ts')
await server.close()

const broken = []
for (const a of ARTICLES) for (const m of a.body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) if (!findArticle(m[1])) broken.push(`${a.slug} → ${m[1]}`)
const slugs = ARTICLES.map((a) => a.slug)
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i)

console.log(`${ARTICLES.length} articles, ${broken.length} broken links, ${dupes.length} duplicate slugs`)
for (const b of broken) console.log('  broken:', b)
for (const d of dupes) console.log('  duplicate:', d)
process.exit(broken.length || dupes.length ? 1 : 0)

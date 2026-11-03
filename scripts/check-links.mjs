// Checks every [[slug]] link in the theory library resolves, that no slug is used twice, and that every slug on the
// musicology map (places.ts) is an article.
import { createServer } from 'vite'

// citations [^id] to a missing source fail here too (scripts/theory-content.ts)
process.env.THEORY_STRICT = '1'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { ARTICLES } = await server.ssrLoadModule('/src/features/theory/articles.source.ts')
const { findArticle } = await server.ssrLoadModule('/src/features/theory/wiki.ts')
const { PLACES, JOURNEYS } = await server.ssrLoadModule('/src/features/musicology/places.ts')
await server.close()

const broken = []
for (const a of ARTICLES) for (const m of a.body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) if (!findArticle(m[1])) broken.push(`${a.slug} → ${m[1]}`)
const known = new Set(ARTICLES.map((a) => a.slug))
for (const pl of PLACES) for (const ev of pl.events) for (const s of ev.slugs) if (!known.has(s)) broken.push(`map:${pl.id} → ${s}`)
const ids = new Set(PLACES.map((pl) => pl.id))
if (ids.size !== PLACES.length) broken.push('map: duplicate place id')
for (const j of JOURNEYS) {
  if (!known.has(j.slug)) broken.push(`journey:${j.id} → ${j.slug}`)
  for (const [id] of j.stops) if (!ids.has(id)) broken.push(`journey:${j.id} → place ${id}`)
}
const slugs = ARTICLES.map((a) => a.slug)
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i)

console.log(`${ARTICLES.length} articles, ${PLACES.length} map places, ${broken.length} broken links, ${dupes.length} duplicate slugs`)
for (const b of broken) console.log('  broken:', b)
for (const d of dupes) console.log('  duplicate:', d)
process.exit(broken.length || dupes.length ? 1 : 0)

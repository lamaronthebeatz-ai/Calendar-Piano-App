// Dump a bookshelf book's chapters (title + body, in order) as JSON for the essay PDF builder.
// node scripts/essay/export-book.mjs <book-id> > chapters.json
import { createServer } from 'vite'

const id = process.argv[2]
const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })
const { ARTICLES } = await server.ssrLoadModule('/src/features/theory/articles.source.ts')
const { BOOKS } = await server.ssrLoadModule('/src/features/curriculum/books.ts')
await server.close()
const book = BOOKS.find((b) => b.id === id)
if (!book) throw new Error(`no book ${id}: ${BOOKS.map((b) => b.id).join(', ')}`)
const bySlug = new Map(ARTICLES.map((a) => [a.slug, a]))
const chapters = book.parts.flatMap((p) => p.chapters.map((c) => bySlug.get(c.slug)).filter(Boolean)).map((a) => ({ slug: a.slug, title: a.title, body: a.body }))
process.stdout.write(JSON.stringify({ title: book.title, chapters }, null, 1))

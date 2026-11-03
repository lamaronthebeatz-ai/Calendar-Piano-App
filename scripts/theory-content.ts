/**
 * Takes the theory library out of the JavaScript bundle. The content modules (src/features/theory/content) are run at
 * build time and become data files under content/, all named by hash (immutable, cached for good):
 * - `index.<h>.json`: every article without its text (titles, summaries, links, counts) and the search shard table.
 *   `virtual:theory-index` fetches it with a top-level await (preloaded from index.html), so code and library cache
 *   separately and a new deploy of either does not re-download the other.
 * - `<slug>.<h>.json`: one article's body, references and backlinks, fetched when it is read.
 * - `search/<xx>.<h>.json`: the full-text index split by the first two letters of each word (word → articles),
 *   so a search downloads a few small shards whatever the size of the library.
 * In `vite dev` the same files are served from memory.
 */
import { createHash } from 'node:crypto'
import { createServer, type Plugin, type ViteDevServer } from 'vite'

const SOURCE = '/src/features/theory/articles.source.ts'
const VIRTUAL = 'virtual:theory-index'
const RESOLVED = '\0' + VIRTUAL

interface SourceArticle {
  slug: string
  title: string
  aliases?: string[]
  summary: string
  body: string
  refs?: [string, string][]
  [k: string]: unknown
}

interface Built {
  /** content/ path of the index file */
  indexFile: string
  files: Map<string, string>
}

// Same keys as findArticle in wiki.ts, which can't be loaded here (it imports the index this plugin makes).
const normalize = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim()
const LINK_RE = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g
const hash = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 8)
/** Text for full-text search: directives dropped, link labels kept. */
const plain = (body: string) => normalize(body.replace(/^\s*::.*$/gm, '').replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/[*#|]/g, ' ').replace(/\s+/g, ' '))

function build(articles: SourceArticle[]): Built {
  const byKey = new Map<string, string>()
  for (const a of articles) for (const k of [a.title, ...(a.aliases ?? [])]) byKey.set(normalize(k), a.slug)
  for (const a of articles) byKey.set(a.slug, a.slug)

  // "What links here" is worked out once, here, and travels with each article's text.
  const backlinks = new Map<string, string[]>()
  let linkCount = 0
  for (const a of articles)
    for (const t of new Set([...a.body.matchAll(LINK_RE)].map((m) => byKey.get(normalize(m[1]))))) {
      if (!t || t === a.slug) continue
      backlinks.set(t, [...(backlinks.get(t) ?? []), a.slug])
      linkCount++
    }

  const files = new Map<string, string>()
  const index = articles.map((a) => {
    const { body, refs, ...meta } = a
    const json = JSON.stringify({ body, refs, backlinks: backlinks.get(a.slug) ?? [] })
    const h = hash(json)
    files.set(`${a.slug}.${h}.json`, json)
    const lead = {
      wiki: /^::wiki ([^|\n]+?)\s*(?:\||$)/m.exec(body)?.[1],
      img: /^::img ([^|\n]+?)\s*(?:\||$)/m.exec(body)?.[1],
      video: /^::youtube ([\w-]{11})/m.exec(body)?.[1],
    }
    return { ...meta, h, words: body.split(/\s+/).length, figures: body.match(/^\s*::/gm)?.length ?? 0, ...(lead.wiki || lead.img || lead.video ? { lead } : {}) }
  })
  // Inverted index: word → ids (positions in the index) as hex gaps, "3,1,a" = 3, 4, 14.
  const postings = new Map<string, number[]>()
  articles.forEach((a, i) => {
    for (const w of new Set(plain(`${a.summary} ${a.body}`).match(/[a-z0-9]+/g))) postings.set(w, [...(postings.get(w) ?? []), i])
  })
  const shards = new Map<string, Record<string, string>>()
  for (const [w, ids] of [...postings].sort(([x], [y]) => (x < y ? -1 : 1))) {
    const key = w.slice(0, 2)
    if (!shards.has(key)) shards.set(key, {})
    shards.get(key)![w] = ids.map((id, k) => (id - (k ? ids[k - 1] : -1)).toString(16)).join(',')
  }
  const search: Record<string, string> = {}
  for (const [key, words] of shards) {
    const json = JSON.stringify(words)
    search[key] = hash(json)
    files.set(`search/${key}.${search[key]}.json`, json)
  }
  const json = JSON.stringify({ meta: index, search, linkCount })
  const indexFile = `index.${hash(json)}.json`
  files.set(indexFile, json)
  return { indexFile, files }
}

async function load(server: ViteDevServer) {
  const { ARTICLES } = (await server.ssrLoadModule(SOURCE)) as { ARTICLES: SourceArticle[] }
  return build(ARTICLES)
}

export function theoryContent(): Plugin {
  let dev: ViteDevServer | undefined
  let built: Promise<Built> | undefined
  let base = '/'

  return {
    name: 'theory-content',
    configResolved(config) {
      base = config.base
    },
    configureServer(server) {
      dev = server
      server.middlewares.use(async (req, res, next) => {
        const prefix = `${base}content/`
        if (!req.url?.startsWith(prefix)) return next()
        const name = decodeURIComponent(req.url.slice(prefix.length).split('?')[0])
        const json = (await (built ??= load(server))).files.get(name)
        if (!json) return next()
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(json)
      })
    },
    // Editing an article rebuilds the index and reloads the page.
    handleHotUpdate({ file, server }) {
      if (!/\/features\/theory\/(content\/|articles\.source\.ts)/.test(file)) return
      built = undefined
      const mod = server.moduleGraph.getModuleById(RESOLVED)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
      return []
    },
    async buildStart() {
      if (dev) return
      // A bare server (no config file, no plugins) is enough to run the content modules, which are plain TypeScript.
      const server = await createServer({ configFile: false, root: process.cwd(), logLevel: 'error', server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } })
      try {
        built = Promise.resolve(await load(server))
      } finally {
        await server.close()
      }
    },
    resolveId(id) {
      return id === VIRTUAL ? RESOLVED : undefined
    },
    async load(id) {
      if (id !== RESOLVED) return
      if (dev) built ??= load(dev)
      const { indexFile } = await built!
      // Fails loudly rather than rendering an empty library; the file is precached, so this only happens offline
      // before the first visit.
      return `const r = await fetch(import.meta.env.BASE_URL + 'content/${indexFile}')
if (!r.ok) throw new Error('Không tải được chỉ mục thư viện (' + r.status + ')')
const d = await r.json()
export const META = d.meta
export const SEARCH = d.search
export const LINK_COUNT = d.linkCount
`
    },
    // Start downloading the index together with the scripts instead of after them.
    async transformIndexHtml() {
      if (dev) built ??= load(dev)
      if (!built) return
      const { indexFile } = await built
      return [{ tag: 'link', attrs: { rel: 'preload', href: `${base}content/${indexFile}`, as: 'fetch', crossorigin: '' }, injectTo: 'head' }]
    },
    async generateBundle() {
      if (dev || !built) return
      for (const [name, source] of (await built).files) this.emitFile({ type: 'asset', fileName: `content/${name}`, source })
    },
  }
}

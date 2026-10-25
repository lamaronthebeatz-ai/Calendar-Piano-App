/**
 * Takes the theory library's text out of the JavaScript bundle. The content modules (src/features/theory/content)
 * are run at build time; the app imports only a light index (`virtual:theory-index`: titles, summaries, links,
 * counts), and each article's body and references become a JSON file fetched when the article is opened, plus one
 * full-text search file fetched on the first search. In `vite dev` the same files are served from memory.
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
  index: string
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
  const search = JSON.stringify(articles.map((a) => plain(`${a.summary} ${a.body}`)))
  const searchFile = `search.${hash(search)}.json`
  files.set(searchFile, search)
  return { index: `export const META = ${JSON.stringify(index)}\nexport const SEARCH_FILE = ${JSON.stringify(searchFile)}\nexport const LINK_COUNT = ${linkCount}\n`, files }
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
      return (await built!).index
    },
    async generateBundle() {
      if (dev || !built) return
      for (const [name, source] of (await built).files) this.emitFile({ type: 'asset', fileName: `content/${name}`, source })
    },
  }
}

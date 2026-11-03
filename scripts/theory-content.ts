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
import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import type { CuratedSource } from '../src/features/sources/curated.ts'
import { createServer, type Plugin, type ViteDevServer } from 'vite'

const SOURCE = '/src/features/theory/articles.source.ts'
const CURATED_SOURCES = '/src/features/sources/curated.ts'
const CONTENT_DIR = 'src/features/theory/content'
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

/** One entry of the bibliography (content/sources.<h>.json): a curated work, or a reference as the articles give it. */
interface BuiltSource extends Partial<Omit<CuratedSource, "kind">> {
  id: string
  kind: string
  labels: string[]
  urls: string[]
  /** articles citing it, in library order */
  uses: string[]
}

/** Something still to check: a `::verify` line, or a sentence saying a point is unverified. */
interface OpenItem {
  slug: string
  text: string
  kind: 'verify' | 'text'
}

const bare = (u: string) => u.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[#?].*$/, '').replace(/\/$/, '')
const slugify = (s: string) => normalize(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
const CITE_RE = /\[\^([a-z0-9-]+)(?:,\s*[^\]]+)?\]/g
const UNVERIFIED_RE = /chưa (?:được )?đối chiếu|chưa có nguồn|nguồn mâu thuẫn|chưa (?:được )?kiểm chứng|chưa xác minh|chưa đọc trực tiếp/i
const ENCYCLOPEDIAS = /^(?:[a-z]+\.)?(wikipedia\.org|plato\.stanford\.edu|iep\.utm\.edu|britannica\.com|bigenc\.ru|dic\.academic\.ru)/

/** A stable id for a reference: the curated work it belongs to, else one made from its link (or label). */
function sourceOf(label: string, url: string, curated: CuratedSource[]): { id: string; kind: string; curated?: CuratedSource } {
  const b = url ? bare(url) : ''
  const c = curated.find((c) => c.match.some((m: string) => (b && b.startsWith(m)) || label.startsWith(m)))
  if (c) return { id: c.id, kind: c.kind, curated: c }
  const wiki = /^([a-z]+)\.wikipedia\.org\/wiki\/(.+)$/.exec(b)
  if (wiki) return { id: `wp-${wiki[1] === 'en' ? '' : wiki[1] + '-'}${slugify(decodeURIComponent(wiki[2]).replace(/_/g, ' '))}`, kind: 'encyclopedia' }
  if (!b) return { id: `sach-${hash(label).slice(0, 6)}`, kind: 'book' }
  const host = b.split('/')[0].split('.')
  const kind = ENCYCLOPEDIAS.test(b) ? 'encyclopedia' : /youtube\.com|youtu\.be/.test(b) ? 'video' : /imslp\.org|mutopiaproject/.test(b) ? 'score' : 'web'
  // the site's own name: "plato.stanford.edu" → stanford, "kahnandaverill.co.uk" → kahnandaverill
  const name = host.filter((p, i) => i < host.length - 1 && !/^(co|com|org|or|ac|gov|edu|net)$/.test(p)).at(-1) ?? host[0]
  return { id: `${slugify(name)}-${hash(b).slice(0, 6)}`, kind }
}

/** Last commit date of each content file, by the slugs written in it (generated pages have none and get no date). */
function updatedDates(): Map<string, string> {
  const dates = new Map<string, string>()
  try {
    const log = execSync(`git log --format=%x00%cs --name-only -- ${CONTENT_DIR}`, { encoding: 'utf8', maxBuffer: 64 << 20 })
    const fileDate = new Map<string, string>()
    for (const chunk of log.split('\0').slice(1)) {
      const [date, ...files] = chunk.trim().split('\n')
      for (const f of files) if (f && !fileDate.has(f)) fileDate.set(f, date)
    }
    for (const f of readdirSync(CONTENT_DIR)) {
      const date = fileDate.get(`${CONTENT_DIR}/${f}`)
      if (!date || !f.endsWith('.ts')) continue
      for (const m of readFileSync(`${CONTENT_DIR}/${f}`, 'utf8').matchAll(/slug:\s*["'`]([^"'`$]+)["'`]/g)) if (!dates.has(m[1])) dates.set(m[1], date)
    }
  } catch {
    // no git (a source archive): citations go without a date
  }
  return dates
}

interface Built {
  /** content/ path of the index file */
  indexFile: string
  files: Map<string, string>
  /** inline citations naming no source: `slug: id` */
  badCites: string[]
}

// Same keys as findArticle in wiki.ts, which can't be loaded here (it imports the index this plugin makes).
const normalize = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim()
const LINK_RE = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g
const hash = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 8)
/** Text for full-text search: directives dropped, link labels kept. */
const plain = (body: string) => normalize(body.replace(/^\s*::.*$/gm, '').replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/[*#|]/g, ' ').replace(/\s+/g, ' '))

function build(articles: SourceArticle[], curated: CuratedSource[]): Built {
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

  // The bibliography: every reference of every article under one id, plus inline citations [^id, tr. n].
  const sources = new Map<string, BuiltSource>(curated.map((c) => [c.id, { ...c, labels: [], urls: [], uses: [] }]))
  const open: OpenItem[] = []
  const badCites: string[] = []
  const updated = updatedDates()
  const cite = (slug: string, label: string, url: string) => {
    const { id, kind } = sourceOf(label, url, curated)
    const s = sources.get(id) ?? sources.set(id, { id, kind, labels: [], urls: [], uses: [] }).get(id)!
    if (!s.labels.includes(label) && s.labels.length < 3) s.labels.push(label)
    if (url && !s.urls.includes(url) && s.urls.length < 3) s.urls.push(url)
    if (s.uses.at(-1) !== slug) s.uses.push(slug)
    return id
  }
  const articleSources = (a: SourceArticle) => {
    const wiki = typeof a.wiki === 'string' ? a.wiki : undefined
    const list: [string, string][] = [...(wiki ? [[`Wikipedia — ${wiki.replace(/_/g, ' ')}`, `https://en.wikipedia.org/wiki/${encodeURIComponent(wiki)}`] as [string, string]] : []), ...(a.refs ?? [])]
    const ids = list.map(([label, url]) => cite(a.slug, label, url))
    for (const m of a.body.matchAll(CITE_RE)) {
      const s = sources.get(m[1])
      if (!s) badCites.push(`${a.slug}: ${m[1]}`)
      else if (s.uses.at(-1) !== a.slug && !s.uses.includes(a.slug)) s.uses.push(a.slug)
    }
    for (const line of a.body.split('\n')) {
      const v = /^\s*::verify\s+(.+)$/.exec(line)
      if (v) open.push({ slug: a.slug, text: v[1].trim(), kind: 'verify' })
      else if (!/^\s*::/.test(line) && UNVERIFIED_RE.test(line))
        for (const sentence of line.split(/(?<=[.!?])\s+/)) if (UNVERIFIED_RE.test(sentence)) open.push({ slug: a.slug, text: sentence.replace(/[*_#|]/g, '').trim().slice(0, 300), kind: 'text' })
    }
    return ids
  }

  const files = new Map<string, string>()
  const index = articles.map((a) => {
    const { body, refs, ...meta } = a
    const json = JSON.stringify({ body, refs, backlinks: backlinks.get(a.slug) ?? [], sources: articleSources(a), updated: updated.get(a.slug) })
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
  const bib = JSON.stringify({ sources: [...sources.values()].filter((s) => s.uses.length || 'match' in s), open })
  const sourcesFile = `sources.${hash(bib)}.json`
  files.set(sourcesFile, bib)

  const json = JSON.stringify({ meta: index, search, linkCount, sourcesFile, sourceCount: sources.size })
  const indexFile = `index.${hash(json)}.json`
  files.set(indexFile, json)
  return { indexFile, files, badCites }
}

/** `strict` (build, check-links): a citation to a missing source stops the build; in dev it is only reported. */
async function load(server: ViteDevServer, strict = false) {
  const { ARTICLES } = (await server.ssrLoadModule(SOURCE)) as { ARTICLES: SourceArticle[] }
  const { CURATED } = (await server.ssrLoadModule(CURATED_SOURCES)) as { CURATED: CuratedSource[] }
  const built = build(ARTICLES, CURATED)
  if (built.badCites.length) {
    const msg = `Trích dẫn [^…] trỏ tới nguồn không có:\n  ${built.badCites.join('\n  ')}`
    if (strict) throw new Error(msg)
    console.warn(msg)
  }
  return built
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
      if (!/\/features\/(theory\/(content\/|articles\.source\.ts)|sources\/curated\.ts)/.test(file)) return
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
        built = Promise.resolve(await load(server, true))
      } finally {
        await server.close()
      }
    },
    resolveId(id) {
      return id === VIRTUAL ? RESOLVED : undefined
    },
    async load(id, options) {
      if (id !== RESOLVED) return
      if (dev) built ??= load(dev, process.env.THEORY_STRICT === '1')
      const { indexFile, files } = await built!
      // Node scripts (check-links) load the app modules through Vite's SSR: no fetch there, the index goes inline.
      if (options?.ssr) {
        const d = files.get(indexFile)!
        return `const d = ${d}\nexport const META = d.meta\nexport const SEARCH = d.search\nexport const LINK_COUNT = d.linkCount\nexport const SOURCES_FILE = d.sourcesFile\nexport const SOURCE_COUNT = d.sourceCount\n`
      }
      // Fails loudly rather than rendering an empty library; the file is precached, so this only happens offline
      // before the first visit.
      return `const r = await fetch(import.meta.env.BASE_URL + 'content/${indexFile}')
if (!r.ok) throw new Error('Không tải được chỉ mục thư viện (' + r.status + ')')
const d = await r.json()
export const META = d.meta
export const SEARCH = d.search
export const LINK_COUNT = d.linkCount
export const SOURCES_FILE = d.sourcesFile
export const SOURCE_COUNT = d.sourceCount
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

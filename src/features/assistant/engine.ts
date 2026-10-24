/**
 * Offline assistant over the library: passages (one per section chunk) ranked with BM25 over Vietnamese syllables and
 * syllable pairs (diacritics folded, with a bonus when the accents match too), boosted by title, aliases and section
 * headings, then an extractive answer built from the best sentences, each tied to its source.
 */
import type { Article } from '../theory/wiki'

export interface Passage {
  slug: string
  title: string
  heading: string
  /** h2 index in the rendered article (Markup gives them ids sec-0, sec-1…), -1 before the first heading. */
  sec: number
  text: string
  /** True for the opening passage of an article (its summary and lead): where definitions live. */
  lead: boolean
}
export interface Sentence {
  text: string
  slug: string
  title: string
  sec: number
}
export interface Source {
  slug: string
  title: string
  heading: string
  sec: number
  snippet: string
}
export interface Answer {
  kind: 'search' | 'compute' | 'none'
  intent: Intent
  lead?: string
  /** Computed answers (chords, intervals…): rows of label → value. */
  table?: [string, string][]
  sentences: Sentence[]
  sources: Source[]
  suggestions: string[]
  tool?: string
}
export type Intent = 'define' | 'compare' | 'who' | 'how' | 'when' | 'general'

/* -------------------------------------------------------------- text */

export const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').replace(/[đĐ]/g, 'd').toLowerCase()
const lower = (s: string) => s.normalize('NFC').toLowerCase()

const STOP = new Set(
  'la gi cua va cho nhung cac mot nhu the nao tai sao vi sao gi ai dau bao nhieu khi nao co khong duoc trong voi de thi ma o ra vao len xuong nay do kia nao hay hoac cung rat qua lam bang theo ve tu den nhat hon toi tao may minh ban em anh chi hoi giai thich noi biet muon xin hay la duoc khong a nhe vay sao the'.split(' '),
)

/** Syllables of a text, accents folded, stop words dropped; `keep` keeps the stop words (for pairs). */
function syllables(s: string, keep = false) {
  const out: string[] = []
  for (const w of fold(s).split(/[^a-z0-9]+/)) if (w && (keep || !STOP.has(w)) && w.length < 24) out.push(w)
  return out
}
/** Single syllables plus adjacent pairs ("hoa_am"): Vietnamese words are mostly two syllables. */
function terms(s: string) {
  const all = syllables(s, true)
  const out: string[] = []
  for (let i = 0; i < all.length; i++) {
    if (!STOP.has(all[i])) out.push(all[i])
    if (i + 1 < all.length && !(STOP.has(all[i]) && STOP.has(all[i + 1]))) out.push(`${all[i]}_${all[i + 1]}`)
  }
  return out
}

/** Library markup → plain text. */
function plain(body: string, titleOf: (slug: string) => string) {
  return body
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, (_, s: string) => titleOf(s.trim()))
    .replace(/^::scan [^|]*\|\s*/gm, '')
    .replace(/^::.*$/gm, '')
    .replace(/^\|?[-:| ]+\|?$/gm, '')
    .replace(/\|/g, ' — ')
    .replace(/\*\*|__|\*|`/g, '')
    .replace(/^>\s?/gm, '')
}

/* ------------------------------------------------------- synonyms */

/** Music terms asked in English (or the other common Vietnamese name) also search for the library's wording. */
const SYNONYMS: [string, string][] = [
  ['harmony', 'hoà âm'], ['counterpoint', 'đối âm phức điệu'], ['polyphony', 'phức điệu'], ['interval', 'quãng'], ['chord', 'hợp âm'], ['scale', 'âm giai'], ['key', 'giọng'],
  ['mode', 'điệu thức'], ['cadence', 'kết'], ['variation', 'biến tấu'], ['rhythm', 'tiết tấu nhịp điệu'], ['tempo', 'nhịp độ'], ['meter', 'nhịp'], ['fingering', 'ngón bấm'],
  ['tritone sub', 'thay thế tritone subV'], ['tritone substitution', 'thay thế tritone subV'], ['secondary dominant', 'át phụ'], ['modulation', 'chuyển giọng'], ['voice leading', 'dẫn bè nối giọng'],
  ['period', 'đoạn nhạc'], ['phrase', 'câu nhạc'], ['motive', 'motif'], ['theme', 'chủ đề'], ['ornament', 'hoa mỹ'], ['improvisation', 'ngẫu hứng'], ['form', 'hình thức'],
  ['binary', 'hai đoạn'], ['ternary', 'ba đoạn'], ['exposition', 'phần trình bày'], ['development', 'phần phát triển'], ['recapitulation', 'tái hiện'], ['coda', 'coda'],
  ['dominant', 'át'], ['subdominant', 'hạ át'], ['tonic', 'chủ'], ['inversion', 'đảo'], ['seventh', 'bảy'], ['diminished', 'giảm'], ['augmented', 'tăng'], ['sustain', 'pedal'],
  ['timbre', 'âm sắc'], ['tone', 'âm sắc'], ['sight reading', 'thị tấu'], ['ear training', 'luyện tai xướng âm'], ['circle of fifths', 'vòng quãng năm'], ['figured bass', 'bass số'],
  ['ii v i', 'ii–V–I'], ['taneev', 'taneyev'], ['tchaikovsky', 'tchaikovsky'], ['251', 'ii–V–I'], ['2 5 1', 'ii–V–I'], ['tân nhạc', 'tân nhạc'], ['nhịp phách', 'phách'], ['quãng 5', 'quãng năm'],
]

/* ---------------------------------------------------------- index */

interface Index {
  passages: Passage[]
  /** term → [passage, weighted tf] pairs, flat. */
  post: Map<string, number[]>
  len: Float32Array
  avg: number
  /** Accent-kept text per passage, for the "accents match too" bonus. */
  raw: string[]
  titles: Map<string, { slug: string; title: string }>
  articles: Map<string, Article>
  aliases: Map<string, string>
  people: Set<string>
}

const TARGET = 170 // words per passage, roughly

export function build(articles: Article[], onProgress?: (done: number, total: number) => void): Index {
  const bySlug = new Map(articles.map((a) => [a.slug, a]))
  const titleOf = (s: string) => bySlug.get(s)?.title ?? s.replace(/-/g, ' ')
  const passages: Passage[] = []
  for (const [n, a] of articles.entries()) {
    let sec = -1
    let heading = ''
    let buf: string[] = [a.summary]
    let words = a.summary.split(/\s+/).length
    let lead = true
    const flush = () => {
      const text = buf.join('\n').trim()
      if (text) passages.push({ slug: a.slug, title: a.title, heading, sec, text, lead })
      buf = []
      words = 0
      lead = false
    }
    for (const line of plain(a.body, titleOf).split('\n')) {
      const h = /^##\s+(.*)$/.exec(line)
      if (h && !line.startsWith('###')) {
        flush()
        sec++
        heading = h[1].trim()
        continue
      }
      const t = line.replace(/^#+\s*/, '').trim()
      if (!t) continue
      buf.push(t)
      words += t.split(/\s+/).length
      if (words > TARGET) flush()
    }
    flush()
    if (n % 100 === 0) onProgress?.(n, articles.length)
  }

  const post = new Map<string, number[]>()
  const len = new Float32Array(passages.length)
  passages.forEach((p, i) => {
    const art = bySlug.get(p.slug)!
    const tf = new Map<string, number>()
    const add = (s: string, w: number) => {
      for (const t of terms(s)) tf.set(t, (tf.get(t) ?? 0) + w)
    }
    add(p.text, 1)
    add(p.title, p.lead ? 4 : 1.5)
    if (p.heading) add(p.heading, 2.5)
    if (p.lead && art.aliases) add(art.aliases.join(' . '), 3)
    let l = 0
    for (const [t, w] of tf) {
      let arr = post.get(t)
      if (!arr) post.set(t, (arr = []))
      arr.push(i, w)
      l += w
    }
    len[i] = l
  })
  const avg = len.reduce((a, b) => a + b, 0) / Math.max(1, len.length)
  const titles = new Map<string, { slug: string; title: string }>()
  const aliases = new Map<string, string>()
  for (const a of articles) {
    titles.set(fold(a.title), { slug: a.slug, title: a.title })
    for (const al of a.aliases ?? []) aliases.set(fold(al), a.slug)
  }
  onProgress?.(articles.length, articles.length)
  const people = new Set(articles.filter((a) => a.portrait || a.category === 'composers').map((a) => a.slug))
  return { passages, post, len, avg, raw: passages.map((p) => lower(p.text)), titles, articles: bySlug, aliases, people }
}

/* ---------------------------------------------------------- search */

export function intentOf(q: string): Intent {
  const f = fold(q)
  if (/so sanh|khac nhau|giong nhau|khac gi|phan biet|\bvs\b|hay la/.test(f)) return 'compare'
  if (/\bla ai\b|tieu su|cuoc doi|sinh nam|ai la/.test(f)) return 'who'
  if (/nam nao|khi nao|thoi gian nao|bao gio|the ky nao|luc nao/.test(f)) return 'when'
  if (/cach |lam sao|lam the nao|luyen|tap the nao|phuong phap|cac buoc|huong dan/.test(f)) return 'how'
  if (/la gi|dinh nghia|nghia la|khai niem|la sao|what is/.test(f)) return 'define'
  return 'general'
}

function expand(q: string) {
  const f = fold(q)
  let extra = ''
  for (const [a, b] of SYNONYMS) {
    if (f.includes(fold(a))) extra += ` ${b}`
    if (f.includes(fold(b))) extra += ` ${a}`
  }
  return q + extra
}

/** Articles the question names outright (by title or alias), longest names first. */
function named(ix: Index, q: string) {
  const f = ` ${fold(q).replace(/[^a-z0-9]+/g, ' ')} `
  const hits: { slug: string; len: number }[] = []
  const scan = (name: string, slug: string) => {
    const k = name.replace(/[^a-z0-9]+/g, ' ').trim()
    if (k.length >= 4 && f.includes(` ${k} `)) hits.push({ slug, len: k.length })
  }
  for (const [k, v] of ix.titles) {
    scan(k, v.slug)
    // People pages answer to the surname alone ("Chopin" → "Frédéric Chopin").
    const sur = k.replace(/\(.*\)/, '').trim().split(/\s+/).pop() ?? ''
    if (ix.people.has(v.slug) && sur.length >= 4) scan(sur, v.slug)
  }
  for (const [k, s] of ix.aliases) scan(k, s)
  hits.sort((a, b) => b.len - a.len)
  const seen = new Set<string>()
  return hits.filter((h) => !seen.has(h.slug) && seen.add(h.slug)).slice(0, 4)
}

export function search(ix: Index, q: string, opts: { context?: string; limit?: number } = {}) {
  const qt = terms(expand(q))
  const scores = new Map<number, number>()
  const N = ix.passages.length
  const k1 = 1.3
  const b = 0.7
  for (const t of new Set(qt)) {
    const arr = ix.post.get(t)
    if (!arr) continue
    const df = arr.length / 2
    const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5)) * (t.includes('_') ? 1.6 : 1)
    for (let j = 0; j < arr.length; j += 2) {
      const i = arr[j]
      const tf = arr[j + 1]
      const s = (idf * tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * ix.len[i]) / ix.avg))
      scores.set(i, (scores.get(i) ?? 0) + s)
    }
  }
  const intent = intentOf(q)
  const names = named(ix, q)
  const nameBoost = new Map(names.map((n, r) => [n.slug, (intent === 'who' || intent === 'when' ? 2.5 : 1.6) + 1 / (r + 1)]))
  // Words of a named subject inside other titles ("Neuhaus, chương II…") count too, more gently.
  const nameKeys = names.map((n) => fold(ix.articles.get(n.slug)!.title).replace(/\(.*\)/, '').trim().split(/[\s:,—–-]+/).filter((w) => w.length >= 4))
  const accent = lower(q).split(/[^\p{L}\p{N}]+/u).filter((w) => w.length > 1 && fold(w) !== w)
  const ranked = [...scores.entries()].map(([i, s]) => {
    const p = ix.passages[i]
    let v = s * (nameBoost.get(p.slug) ?? 1)
    if (!nameBoost.has(p.slug) && nameKeys.some((ks) => ks.some((k) => fold(p.title).includes(k)))) v *= 1.35
    if (opts.context && p.slug === opts.context) v *= 1.35
    if (p.lead && (intent === 'define' || intent === 'who' || (intent === 'general' && nameBoost.has(p.slug)))) v *= 1.5
    if (intent === 'how' && /cach|luyen|bai tap|phuong phap|thuc hanh|cac buoc/.test(fold(p.heading))) v *= 1.5
    if (intent === 'when' && /\b1[0-9]{3}\b|\b20[0-9]{2}\b/.test(p.text)) v *= 1.25
    // The same words with the same accents (hoà vs hòa aside) read as a closer match.
    let hit = 0
    for (const w of accent) if (ix.raw[i].includes(w)) hit++
    if (accent.length) v *= 1 + (0.25 * hit) / accent.length
    return { i, v }
  })
  ranked.sort((x, y) => y.v - x.v)
  // At most three passages from one article, so the answer draws on several sources.
  const per = new Map<string, number>()
  const out: number[] = []
  for (const r of ranked) {
    const s = ix.passages[r.i].slug
    if ((per.get(s) ?? 0) >= 3) continue
    per.set(s, (per.get(s) ?? 0) + 1)
    out.push(r.i)
    if (out.length >= (opts.limit ?? 12)) break
  }
  return { hits: out, intent, names, qt }
}

/* ---------------------------------------------------------- answer */

const SENT = /(?<=[.!?…])\s+(?=[A-ZÀ-Ỹ"“(*0-9])|\n+/u

/** Tidy a candidate sentence; empty when it is a heading, a table header or a lead-in to a list. */
function clean(raw: string) {
  let t = raw.trim().replace(/^[-–•*]\s+/, '').replace(/^—\s*/, '').replace(/\s*—$/, '')
  // Ends in a lead-in, or the splitter broke at an abbreviation ("Sposobin (ch.").
  if (/:$/.test(t) || /(?:\b(?:ch|tr|op|vd|no|nr|ed|bd|tt|st|ss|cf|tk)|[A-Z])\.$/i.test(t)) return ''
  const cells = t.split(/\s+—\s+/)
  if (cells.length >= 3 && cells.every((c) => c.split(/\s+/).length <= 4)) return ''
  if (cells.length >= 2) t = cells.join(' — ')
  // A line without a full stop and few words is a heading, not a sentence.
  if (!/[.!?…)"”]$/.test(t) && t.split(/\s+/).length < 12 && cells.length < 2) return ''
  return t
}

export function answer(ix: Index, q: string, opts: { context?: string } = {}): Answer {
  const { hits, intent, names, qt } = search(ix, q, opts)
  if (!hits.length) return { kind: 'none', intent, sentences: [], sources: [], suggestions: [] }
  const qset = new Set(qt)
  const idf = (t: string) => {
    const arr = ix.post.get(t)
    return arr ? Math.log(1 + ix.passages.length / (arr.length / 2)) : 0
  }

  // Candidate sentences from the best passages; for comparisons, from each named subject in turn.
  type Cand = { s: Sentence; score: number; terms: Set<string>; rank: number }
  const cands: Cand[] = []
  hits.slice(0, 8).forEach((pi, rank) => {
    const p = ix.passages[pi]
    for (const raw of p.text.split(SENT)) {
      const text = clean(raw)
      const wc = text.split(/\s+/).length
      if (!text || wc < 6 || wc > 90) continue
      const ts = new Set(terms(text).filter((t) => qset.has(t)))
      if (!ts.size) continue
      let score = 0
      for (const t of ts) score += idf(t) * (t.includes('_') ? 1.5 : 1)
      score *= 1 / (1 + rank * 0.18)
      if (p.lead && intent === 'define') score *= 1.4
      // A definition reads like one: "X là …".
      if (intent === 'define' && / là | gọi là | được hiểu là /.test(text)) score *= 1.3
      score /= Math.pow(Math.max(12, wc) / 12, 0.25)
      cands.push({ s: { text, slug: p.slug, title: p.title, sec: p.sec }, score, terms: ts, rank })
    }
  })
  cands.sort((a, b) => b.score - a.score)
  // When the question is mostly the name of one article, open with that article's own first sentence.
  const content = syllables(q).join(' ')
  const nameShare = names[0] ? names[0].len / Math.max(1, content.length) : 0
  if (names[0] && (intent === 'define' || intent === 'who' || (intent === 'general' && nameShare > 0.55))) {
    const lead = ix.passages.find((p) => p.slug === names[0].slug && p.lead)
    const first = lead?.text.split(SENT).map(clean).find((t) => t.split(/\s+/).length >= 6)
    if (lead && first) cands.unshift({ s: { text: first, slug: lead.slug, title: lead.title, sec: lead.sec }, score: Infinity, terms: new Set(['__lead']), rank: -1 })
  }

  // A question about one person stays with that person's pages.
  if ((intent === 'who' || intent === 'when') && names.length) {
    const keep = new Set(names.map((n) => n.slug))
    const own = cands.filter((c) => keep.has(c.s.slug))
    if (own.length >= 2) cands.splice(0, cands.length, ...own)
  }
  // Maximal marginal relevance: good sentences that add something new.
  const chosen: Cand[] = []
  const want = intent === 'compare' ? 6 : intent === 'how' ? 6 : 4
  for (const c of cands) {
    if (chosen.length >= want) break
    const dup = chosen.some((d) => {
      const inter = [...c.terms].filter((t) => d.terms.has(t)).length
      return d.s.text === c.s.text || (inter / Math.max(1, Math.min(c.terms.size, d.terms.size)) > 0.85 && d.s.slug === c.s.slug)
    })
    if (!dup) chosen.push(c)
  }
  if (intent === 'compare' && names.length >= 2) {
    // Make sure each side of the comparison is heard.
    for (const n of names.slice(0, 2)) {
      if (!chosen.some((c) => c.s.slug === n.slug)) {
        const best = cands.find((c) => c.s.slug === n.slug)
        if (best) chosen.push(best)
      }
    }
  }
  // Read in a sensible order: grouped by source, in source order.
  const order = new Map<string, number>()
  chosen.forEach((c) => order.set(c.s.slug, Math.min(order.get(c.s.slug) ?? 99, c.rank)))
  chosen.sort((a, b) => (order.get(a.s.slug)! - order.get(b.s.slug)!) || a.rank - b.rank)

  const sources: Source[] = []
  for (const pi of hits) {
    const p = ix.passages[pi]
    if (sources.some((s) => s.slug === p.slug && s.sec === p.sec)) continue
    sources.push({ slug: p.slug, title: p.title, heading: p.heading, sec: p.sec, snippet: p.text.slice(0, 180).replace(/\s+/g, ' ') })
    if (sources.length >= 6) break
  }

  const top = ix.articles.get(ix.passages[hits[0]].slug)
  const suggestions = suggest(ix, top, intent, q)
  return { kind: 'search', intent, sentences: chosen.map((c) => c.s), sources, suggestions }
}

function suggest(ix: Index, top: Article | undefined, intent: Intent, q: string) {
  if (!top) return []
  const out: string[] = []
  const name = top.title.replace(/:.*$/, '')
  if (intent !== 'define') out.push(`${name} là gì?`)
  if (intent !== 'how') out.push(`Cách luyện / phân tích ${name}?`)
  // Two neighbouring topics: articles the top article links to.
  const links = [...top.body.matchAll(/\[\[([^\]|]+)/g)].map((m) => m[1].trim()).filter((s) => ix.articles.has(s) && s !== top.slug)
  for (const s of [...new Set(links)].slice(0, 2)) out.push(`${ix.articles.get(s)!.title.replace(/:.*$/, '')} là gì?`)
  return out.filter((s) => fold(s) !== fold(q)).slice(0, 4)
}

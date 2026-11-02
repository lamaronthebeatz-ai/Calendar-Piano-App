import { RESOLVED, type PartId, type ResolvedBranch } from './taxonomy'

/**
 * The branches of musicology as a sky: one star per branch, one constellation per part, and a line between two stars
 * for every pair of branches that share articles (the stronger the line, the more articles in common). Positions are
 * computed, not drawn by hand: each part is a golden-angle spiral around its centre, so the sky is the same on every
 * visit and grows with the taxonomy. Two layouts: wide (landscape) and tall (phones held upright).
 */
export type Layout = 'wide' | 'tall'

export const SKY: Record<Layout, { w: number; h: number; centres: Record<PartId, [number, number]> }> = {
  wide: { w: 1000, h: 640, centres: { intro: [500, 345], historical: [255, 215], systematic: [745, 225], applied: [290, 500], practice: [715, 505] } },
  tall: { w: 600, h: 880, centres: { intro: [300, 470], historical: [175, 200], systematic: [425, 330], applied: [175, 650], practice: [430, 715] } },
}

const listed = (b: ResolvedBranch) => new Set(b.resolved.flatMap((r) => r.articles.filter((a) => !a.unlisted).map((a) => a.slug)))
const SLUGS = new Map(RESOLVED.map((b) => [b.id, listed(b)]))

/** Articles two branches have in common. */
export function shared(a: string, b: string) {
  const A = SLUGS.get(a)
  const B = SLUGS.get(b)
  if (!A || !B) return 0
  let n = 0
  for (const s of A) if (B.has(s)) n++
  return n
}

/** The branches sharing most articles with this one, strongest first. */
export function neighbours(id: string, limit = 6) {
  return RESOLVED.filter((o) => o.id !== id)
    .map((o) => ({ branch: o, n: shared(id, o.id) }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n)
    .slice(0, limit)
}

export interface Star {
  id: string
  part: PartId
  x: number
  y: number
  r: number
  /** 0 – 1: how late the star lights up (from the centre outwards). */
  d: number
}

export interface Edge {
  a: string
  b: string
  n: number
  cross: boolean
  d: number
}

const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const PART_TURN: Record<PartId, number> = { intro: 0, historical: 0.6, systematic: 2.1, applied: 3.8, practice: 5.2 }

export function starsOf(layout: Layout): Star[] {
  const { w, h, centres } = SKY[layout]
  const maxDist = Math.hypot(w / 2, h / 2)
  return RESOLVED.map((b) => {
    const siblings = RESOLVED.filter((o) => o.part === b.part)
    const i = siblings.indexOf(b)
    const [cx, cy] = centres[b.part]
    const rad = b.part === 'intro' ? 0 : 30 * Math.sqrt(i + 0.7)
    const t = i * GOLDEN + PART_TURN[b.part]
    const x = cx + rad * Math.cos(t)
    const y = cy + rad * Math.sin(t) * (layout === 'tall' ? 1.05 : 0.92)
    const r = (b.part === 'intro' ? 4 : 2.4) + Math.sqrt(listed(b).size) * 0.5
    return { id: b.id, part: b.part, x, y, r, d: Math.min(1, Math.hypot(x - w / 2, y - h / 2) / maxDist) }
  })
}

/** Each star keeps its four strongest links; a link either end keeps is drawn once. */
export function edgesOf(stars: Star[]): Edge[] {
  const at = new Map(stars.map((s) => [s.id, s]))
  const keep = new Map<string, Edge>()
  for (const s of stars)
    for (const { branch, n } of neighbours(s.id, 4)) {
      const key = [s.id, branch.id].sort().join('|')
      const o = at.get(branch.id)!
      if (!keep.has(key)) keep.set(key, { a: s.id, b: branch.id, n, cross: s.part !== o.part, d: (s.d + o.d) / 2 })
    }
  return [...keep.values()]
}

/** Bounding box of one part's stars, padded and stretched to an aspect ratio. */
export function partView(stars: Star[], part: PartId, aspect: number) {
  const own = stars.filter((s) => s.part === part)
  let x0 = Math.min(...own.map((s) => s.x)) - 70
  let x1 = Math.max(...own.map((s) => s.x)) + 70
  let y0 = Math.min(...own.map((s) => s.y)) - 70
  let y1 = Math.max(...own.map((s) => s.y)) + 70
  const w = x1 - x0
  const h = y1 - y0
  if (w / h < aspect) {
    const grow = (h * aspect - w) / 2
    x0 -= grow
    x1 += grow
  } else {
    const grow = (w / aspect - h) / 2
    y0 -= grow
    y1 += grow
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }
}

/** Faint background stars: fixed positions, a few twinkle. */
function dustOf(layout: Layout) {
  const { w, h } = SKY[layout]
  return Array.from({ length: 90 }, (_, i) => ({
    x: ((i * 397 + 41) % 1000) / 1000 * w,
    y: ((i * 613 + 127) % 1000) / 1000 * h,
    r: 0.5 + ((i * 7) % 5) * 0.18,
  }))
}

const CACHE = new Map<Layout, ReturnType<typeof build>>()
function build(layout: Layout) {
  const stars = starsOf(layout)
  return { stars, edges: edgesOf(stars), dust: dustOf(layout) }
}
/** Stars, threads and background dust of one layout, built once. */
export const skyOf = (layout: Layout) => {
  if (!CACHE.has(layout)) CACHE.set(layout, build(layout))
  return CACHE.get(layout)!
}


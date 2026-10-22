/**
 * Music examples cut from public-domain scans (Internet Archive) — the images live in
 * `public/scans/<book>/`, the list of examples in `scans/<book>.json` (generated, loaded on demand).
 */
export interface ScanFile { f: string; w: number; h: number }
/**
 * `n`: running number; `page`: printed page; `ex`: the book's example numbers shown in the image, only when
 * they were read reliably (Albrechtsberger) — otherwise the caption gives the page alone.
 */
export interface ScanItem { n: number; page: number; ex?: number[]; files: ScanFile[] }

export const SCAN_BOOKS: Record<string, { source: string; url: string; unit: 'ex' | 'page' }> = {
  albrechtsberger: { source: 'Albrechtsberger, Collected Writings (Novello, 1855)', url: 'https://archive.org/details/jgalbrechtsberg00albrgoog', unit: 'ex' },
  fux: { source: 'Fux, Practical Rules for Learning Composition', url: 'https://archive.org/details/practicalrulesfo00fuxj', unit: 'page' },
}

const loaders: Record<string, () => Promise<{ default: ScanItem[] }>> = {
  albrechtsberger: () => import('./scans/albrechtsberger.json'),
  fux: () => import('./scans/fux.json'),
}
const cache = new Map<string, Promise<ScanItem[]>>()
export function loadScans(book: string): Promise<ScanItem[]> {
  if (!loaders[book]) return Promise.resolve([])
  if (!cache.has(book)) cache.set(book, loaders[book]().then((m) => m.default))
  return cache.get(book)!
}

export const scanUrl = (book: string, f: string) => `${import.meta.env.BASE_URL}scans/${book}/${f}`

/** "112-127" or "117" → inclusive range. */
export function parseRange(s = ''): [number, number] {
  const [a, b] = s.split('-').map(Number)
  return [a || 0, b || a || 0]
}

export const scanLabel = (book: string, it: ScanItem) =>
  SCAN_BOOKS[book]?.unit === 'ex' ? (it.ex?.length ? `Ví dụ ${it.ex.join(', ')} · tr. ${it.page}` : `Tr. ${it.page}`) : `Tr. ${it.page} · khối ${it.n}`

/**
 * Items for a range: by page (Fux), or (Albrechtsberger) the items whose example numbers fall in the range
 * plus the unnumbered ones on the pages those examples occupy.
 */
export function selectScans(book: string, all: ScanItem[], from: number, to: number, byPage = false) {
  if (byPage || SCAN_BOOKS[book]?.unit !== 'ex') return all.filter((it) => it.page >= from && it.page <= to)
  const inRange = (it: ScanItem) => !!it.ex?.some((e) => e >= from && e <= to)
  const pages = all.filter(inRange).map((it) => it.page)
  if (!pages.length) return []
  const lo = Math.min(...pages), hi = Math.max(...pages)
  return all.filter((it) => inRange(it) || (!it.ex?.length && it.page >= lo && it.page <= hi))
}

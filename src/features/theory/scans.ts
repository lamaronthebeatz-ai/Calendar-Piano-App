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

export const scanLabel = (book: string, it: ScanItem) =>
  SCAN_BOOKS[book]?.unit === 'ex' ? (it.ex?.length ? `Ví dụ ${it.ex.join(', ')} · tr. ${it.page}` : `Tr. ${it.page}`) : `Tr. ${it.page} · khối ${it.n}`

/**
 * One item by reference: "117" = the book's example 117; "#523" = item 523 (unnumbered crops);
 * "10.2" = page 10, block 2 (books counted by page, like Fux).
 */
export function findScan(all: ScanItem[], ref: string) {
  if (ref.startsWith('#')) return all.find((it) => it.n === Number(ref.slice(1)))
  if (ref.includes('.')) {
    const [page, n] = ref.split('.').map(Number)
    return all.find((it) => it.page === page && it.n === n)
  }
  const n = Number(ref)
  return all.find((it) => it.ex?.includes(n))
}

/**
 * Music examples cut from public-domain scans (Internet Archive) — the images live in
 * `public/scans/<book>/`, the list of examples in `scans/<book>.json` (generated, loaded on demand).
 */
export interface ScanFile { f: string; w: number; h: number }
/**
 * `n`: running number; `page`: printed page; `ex`: the book's example numbers shown in the image, only when
 * they were read reliably (Albrechtsberger) — otherwise the caption gives the page alone; `label`: a ready caption (bar ranges of a score).
 */
export interface ScanItem { n: number; page: number; ex?: number[]; sd?: number; label?: string; files: ScanFile[] }

export const SCAN_BOOKS: Record<string, { source: string; url: string; unit: 'ex' | 'page' | 'fig'; exWord?: string; small?: number }> = {
  albrechtsberger: { source: 'Albrechtsberger, Collected Writings (Novello, 1855)', url: 'https://archive.org/details/jgalbrechtsberg00albrgoog', unit: 'ex' },
  fux: { source: 'Fux, Practical Rules for Learning Composition', url: 'https://archive.org/details/practicalrulesfo00fuxj', unit: 'page' },
  neuhaus: { source: 'Neuhaus, The Art of Piano Playing (Kahn & Averill, 1993)', url: '', unit: 'fig', small: 0.5 },
  taneev: { source: 'Phạm Tú Hương, Phức điệu nghiêm khắc (Nhạc viện Hà Nội, 1991)', url: '', unit: 'ex', exWord: 'Thí dụ' },
  scriabin2: { source: 'Scriabin, Sonate-Fantaisie Op. 19 (Belaieff, 1898)', url: 'https://imslp.org/wiki/Piano_Sonata_No.2,_Op.19_(Scriabin,_Aleksandr)', unit: 'page' },
}

const loaders: Record<string, () => Promise<{ default: ScanItem[] }>> = {
  albrechtsberger: () => import('./scans/albrechtsberger.json'),
  fux: () => import('./scans/fux.json'),
  taneev: () => import('./scans/taneev.json'),
  neuhaus: () => import('./scans/neuhaus.json'),
  scriabin2: () => import('./scans/scriabin2.json'),
}
const cache = new Map<string, Promise<ScanItem[]>>()
export function loadScans(book: string): Promise<ScanItem[]> {
  if (!loaders[book]) return Promise.resolve([])
  if (!cache.has(book)) cache.set(book, loaders[book]().then((m) => m.default))
  return cache.get(book)!
}

/** Display width: books whose small figures were drawn as inline glyphs (Neuhaus's rhythm figures) show them at a fraction of their pixel size. */
export const scanWidth = (book: string, w: number) => (SCAN_BOOKS[book]?.small && w < 700 ? Math.round(w * SCAN_BOOKS[book].small!) : w)

export const scanUrl = (book: string, f: string) => `${import.meta.env.BASE_URL}scans/${book}/${f}`

export function scanLabel(book: string, it: ScanItem) {
  const meta = SCAN_BOOKS[book]
  if (it.label) return `${it.label} · tr. ${it.page}`
  if (meta?.unit === 'fig') return `Hình ${it.n - 1}`
  if (meta?.unit !== 'ex') return `Tr. ${it.page} · khối ${it.n}`
  if (it.ex?.length) return `${meta.exWord ?? 'Ví dụ'} ${it.ex.join(', ')} · tr. ${it.page}`
  return it.sd ? `Sơ đồ ${it.sd} · tr. ${it.page}` : `Tr. ${it.page}`
}

/**
 * One item by reference: "117" = the book's example 117; "#523" = item 523 (unnumbered crops); "sd30" = diagram 30;
 * "10.2" = page 10, block 2 (books counted by page, like Fux).
 */
export function findScan(all: ScanItem[], ref: string) {
  if (ref.startsWith('#')) return all.find((it) => it.n === Number(ref.slice(1)))
  if (ref.startsWith('sd')) return all.find((it) => it.sd === Number(ref.slice(2)))
  if (ref.includes('.')) {
    const [page, n] = ref.split('.').map(Number)
    return all.find((it) => it.page === page && it.n === n)
  }
  const n = Number(ref)
  return all.find((it) => it.ex?.includes(n))
}

/**
 * Lead image of an English Wikipedia article, fetched at view time: Wikipedia already picks a representative
 * picture (a composer's portrait, a photo of the instrument), so nothing is guessed here. Only freely licensed
 * images are returned (PageImages `pilicense=free`). Results are cached per browser; the service worker caches
 * the files themselves for offline use.
 */
export interface LeadImage {
  src: string
  width: number
  height: number
  /** File name, for the attribution link. */
  file: string
  /** Wikipedia page the image came from. */
  page: string
}

interface Page {
  title: string
  missing?: boolean
  description?: string
  pageprops?: { disambiguation?: string }
  pageimage?: string
  thumbnail?: { source: string; width: number; height: number }
}

const API = 'https://en.wikipedia.org/w/api.php'
const CACHE = 'wikiimg:'
const memo = new Map<string, Promise<LeadImage | null>>()

/**
 * A page about the right person mentions their birth or death year in its short description,
 * e.g. "German composer (1685–1750)"; `years` is ours, like "1685–1750" or "k. 1507–1568".
 */
const sameYears = (description: string | undefined, years?: string) => {
  const ours = years?.match(/\d{3,4}/g)
  const theirs = description?.match(/\d{3,4}/g)
  return !ours || !theirs || ours.some((y) => theirs.includes(y))
}

function read(key: string): LeadImage | null | undefined {
  try {
    const v = localStorage.getItem(CACHE + key)
    return v === null ? undefined : (JSON.parse(v) as LeadImage | null)
  } catch {
    return undefined
  }
}

function write(key: string, v: LeadImage | null) {
  try {
    localStorage.setItem(CACHE + key, JSON.stringify(v))
  } catch {
    // storage full or blocked: just don't cache
  }
}

/** First of `titles` that exists, is not a disambiguation page, has a free lead image and (if given) mentions one of the person's years. */
export function leadImage(titles: string[], years?: string): Promise<LeadImage | null> {
  const key = titles.join('|') + (years ? `@${years}` : '')
  const cached = read(key)
  if (cached !== undefined) return Promise.resolve(cached)
  let p = memo.get(key)
  if (!p) {
    const url =
      `${API}?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=pageimages|description|pageprops` +
      `&ppprop=disambiguation&piprop=thumbnail|name&pithumbsize=480&pilicense=free&titles=${encodeURIComponent(titles.join('|'))}`
    p = fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { query?: { pages?: Page[]; normalized?: { from: string; to: string }[]; redirects?: { from: string; to: string }[] } }) => {
        const q = data.query ?? {}
        const follow = (t: string) => {
          const n = q.normalized?.find((x) => x.from === t)?.to ?? t
          return q.redirects?.find((x) => x.from === n)?.to ?? n
        }
        for (const t of titles) {
          const page = q.pages?.find((x) => x.title === follow(t.replace(/_/g, ' ')) || x.title === follow(t))
          if (!page || page.missing || page.pageprops?.disambiguation !== undefined || !page.thumbnail || !page.pageimage) continue
          if (!sameYears(page.description, years)) continue
          const img = { src: page.thumbnail.source, width: page.thumbnail.width, height: page.thumbnail.height, file: page.pageimage, page: page.title }
          write(key, img)
          return img
        }
        write(key, null)
        return null
      })
      .catch(() => {
        memo.delete(key) // offline or blocked: try again next time
        return null
      })
    memo.set(key, p)
  }
  return p
}

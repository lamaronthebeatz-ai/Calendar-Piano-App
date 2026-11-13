export const normalize = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim()

type Named = { slug: string; title: string; aliases?: string[]; unlisted?: boolean }

/**
 * Every name an article answers to (slug, title, aliases) → the article. Many aliases are shared (hundreds: "FUGA"
 * the distributor and "fuga" the fugue, "Neuhaus" the man and his book), so who wins is a rule, not file order:
 * a slug always wins; then the article whose own title is that name; then the one whose slug spells the name; then a
 * listed article over an unlisted one; then the shorter slug (the general topic over a narrower page).
 */
export function buildKeyIndex<T extends Named>(articles: readonly T[]): Map<string, T> {
  const owners = new Map<string, T[]>()
  for (const a of articles)
    for (const k of new Set([a.title, ...(a.aliases ?? [])].map(normalize))) {
      const list = owners.get(k)
      if (list) list.push(a)
      else owners.set(k, [a])
    }
  const rank = (a: T, k: string) => [normalize(a.title) === k ? 0 : 1, normalize(a.slug.replace(/-/g, ' ')) === k ? 0 : 1, a.unlisted ? 1 : 0, a.slug.length]
  const better = (x: T, y: T, k: string) => {
    const [rx, ry] = [rank(x, k), rank(y, k)]
    for (let i = 0; i < rx.length; i++) if (rx[i] !== ry[i]) return rx[i] < ry[i]
    return false
  }
  const index = new Map<string, T>()
  for (const [k, list] of owners) index.set(k, list.reduce((best, a) => (better(a, best, k) ? a : best)))
  for (const a of articles) index.set(a.slug, a)
  return index
}

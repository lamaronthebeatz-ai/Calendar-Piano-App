/**
 * The link grammar shared by the whole second brain. Anything Lamar writes (free notes, a project's draft, the note
 * on a highlight) can point at anything the app knows:
 *   [[slug]] / [[title or alias]]   a library article (people pages included)
 *   [[n:id|label]]                  one of Lamar's own notes
 *   [[p:id|label]]                  a research project
 *   [^source-id, tr. n]             a work in the bibliography
 * A node is named by a key: "a:slug", "n:id", "p:id", "s:id".
 */
export type NodeKey = `${'a' | 'n' | 'p' | 's'}:${string}`

/** Every node a text points at, once each, in order of first mention. `resolve` turns an article reference into its slug. */
export function linksIn(text: string, resolve: (ref: string) => string | undefined): NodeKey[] {
  const out = new Set<NodeKey>()
  for (const m of text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]|\[\^([a-z0-9-]+)/g)) {
    if (m[2]) {
      out.add(`s:${m[2]}`)
      continue
    }
    const t = m[1].trim()
    const own = /^([np]):(.+)$/.exec(t)
    if (own) out.add(`${own[1] as 'n' | 'p'}:${own[2]}`)
    else {
      const slug = resolve(t)
      if (slug) out.add(`a:${slug}`)
    }
  }
  return [...out]
}

export type Edge = { from: NodeKey; to: NodeKey }

/** Who points at `key`, from a list of (node, text) pairs. */
export function backlinks(key: NodeKey, docs: { key: NodeKey; text: string }[], resolve: (ref: string) => string | undefined): NodeKey[] {
  return docs.filter((d) => d.key !== key && linksIn(d.text, resolve).includes(key)).map((d) => d.key)
}

/** Edges among the given documents' links. */
export const edgesOf = (docs: { key: NodeKey; text: string }[], resolve: (ref: string) => string | undefined): Edge[] =>
  docs.flatMap((d) => linksIn(d.text, resolve).filter((to) => to !== d.key).map((to) => ({ from: d.key, to })))

/** Nodes within `depth` steps of `key`, following edges both ways. */
export function neighbourhood(key: NodeKey, edges: Edge[], depth = 2): Set<NodeKey> {
  const seen = new Set<NodeKey>([key])
  let frontier = [key]
  for (let d = 0; d < depth; d++) {
    const next: NodeKey[] = []
    for (const e of edges)
      for (const [a, b] of [[e.from, e.to], [e.to, e.from]] as const)
        if (frontier.includes(a) && !seen.has(b)) {
          seen.add(b)
          next.push(b)
        }
    frontier = next
  }
  return seen
}

/** The text being typed after an open "[[" at the caret, or null: drives the link suggestions. */
export function openLinkAt(text: string, caret: number): { start: number; query: string } | null {
  const before = text.slice(0, caret)
  const at = before.lastIndexOf('[[')
  if (at < 0) return null
  const query = before.slice(at + 2)
  if (query.includes(']]') || query.includes('\n') || query.length > 60) return null
  return { start: at, query }
}

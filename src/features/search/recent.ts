// The last pages read in the library and the bookshelf, so the palette can offer "continue where you were".
const KEY = 'palette-recent'
const MAX = 8

export function recentPaths(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []
  } catch {
    return []
  }
}

export function pushRecent(path: string) {
  if (!/^\/(theory\/[^/]+|curriculum\/[^/]+(\/[^/]+)?)$/.test(path) || path.endsWith('/in')) return
  try {
    localStorage.setItem(KEY, JSON.stringify([path, ...recentPaths().filter((p) => p !== path)].slice(0, MAX)))
  } catch {
    /* storage unavailable: history is a convenience */
  }
}

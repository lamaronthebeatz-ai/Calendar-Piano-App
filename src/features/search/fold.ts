/** Lower-case and strip Vietnamese diacritics one character at a time, so indices in the result match the original (used for highlighting). */
export function fold(text: string): string {
  let out = ''
  for (const ch of text) {
    const c = ch === 'đ' || ch === 'Đ' ? 'd' : ch.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    out += c.length === ch.length ? c : ch.toLowerCase().slice(0, ch.length).padEnd(ch.length, ' ')
  }
  return out
}

/** Score an entry against query tokens (all must match somewhere); 0 means no match. */
export function score(tokens: string[], t: string, a: string, s: string): number {
  let total = 0
  for (const q of tokens) {
    const i = wordAt(t, q)
    if (i === 0) total += 100
    else if (i > 0) total += 70
    else if (q.length > 2 && t.includes(q)) total += 25
    else if (wordAt(a, q) >= 0) total += 35
    else if (wordAt(s, q) >= 0) total += 10
    else return 0
  }
  // The whole query as a phrase in the title beats the same words scattered.
  if (tokens.length > 1 && t.includes(tokens.join(' '))) total += 60
  // Shorter titles win ties: a query for "fugue" should put "Fugue" above "Lịch sử fugue thế kỷ XVIII".
  return total - t.length / 40
}

const LETTER = /[a-z0-9\u00c0-\u024f\u1e00-\u1eff]/

/** Index of the first occurrence of q that starts a word, or -1. */
function wordAt(text: string, q: string): number {
  for (let i = text.indexOf(q); i >= 0; i = text.indexOf(q, i + 1)) if (i === 0 || !LETTER.test(text[i - 1])) return i
  return -1
}

/** Ranges of `text` matched by any token, for highlighting. */
export function matches(text: string, tokens: string[]): [number, number][] {
  const f = fold(text)
  const out: [number, number][] = []
  for (const q of tokens) {
    for (let i = f.indexOf(q); i >= 0 && q; i = f.indexOf(q, i + 1)) if (i === 0 || !LETTER.test(f[i - 1])) out.push([i, i + q.length])
  }
  out.sort((x, y) => x[0] - y[0])
  const merged: [number, number][] = []
  for (const r of out) {
    const last = merged[merged.length - 1]
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1])
    else merged.push([...r])
  }
  return merged
}

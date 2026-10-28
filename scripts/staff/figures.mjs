// Engraving sources for the notation directives of the Jazz Theory Book volumes: every `::staff`, `::grand` and
// `::rhythm` line in their chapters becomes a LilyPond block `fig-<hash>` in music/ex/jazz-figures.txt; the reader
// then shows the engraving (scripts/sheets/build.py) in place of the drawn staff, and keeps its play button.
// Usage: node scripts/staff/figures.mjs && LILYPOND=… python3 scripts/sheets/build.py
import { writeFileSync } from 'node:fs'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { ARTICLES } = await server.ssrLoadModule('/src/features/theory/articles.source.ts')
const { BOOKS } = await server.ssrLoadModule('/src/features/curriculum/books.ts')
const { figureId, parseKey, NOTE_RE } = await server.ssrLoadModule('/src/features/theory/notation.ts')
await server.close()

const BOOK_IDS = (id) => id.startsWith('jazz-theory-book')
const slugs = new Set(BOOKS.filter((b) => BOOK_IDS(b.id)).flatMap((b) => b.parts.flatMap((p) => p.chapters.map((c) => c.slug))))

const ACC = { '#': 'is', b: 'es', '##': 'isis', bb: 'eses', n: '!', '': '' }
/** "Bb3" → "bes", "C4" → "c'", "Fn4" → "f'!" (forced natural). */
function pitch(n) {
  const m = /^([A-G])(##|bb|#|b|n)?(\d)?$/.exec(n)
  if (!m) throw new Error('note ' + n)
  const oct = Number(m[3] ?? 4) - 3
  const acc = m[2] ?? ''
  return m[1].toLowerCase() + (acc === 'n' ? '' : ACC[acc]) + (oct > 0 ? "'".repeat(oct) : ','.repeat(-oct)) + (acc === 'n' ? '!' : '')
}
const chord = (s) => (s.includes('+') ? `<${s.split('+').map(pitch).join(' ')}>1` : `${pitch(s)}1`)
/** Text under a column: its label, else the name of a single note (letter and accidental). */
const pretty = (n) => n.replace(/^([A-G])(##|bb|#|b|n)?\d?$/, (_, l, a) => l + ({ '#': '♯', b: '♭', '##': '𝄪', bb: '𝄫', n: '♮' }[a] ?? ''))
const lyric = (t) => `"${t.replace(/_/g, ' ').replace(/"/g, '\\"')}"`
const KEYS = { 0: 'c', 1: 'g', 2: 'd', 3: 'a', 4: 'e', 5: 'b', 6: 'fis', 7: 'cis', '-1': 'f', '-2': 'bes', '-3': 'ees', '-4': 'aes', '-5': 'des', '-6': 'ges', '-7': 'ces' }
const LYR = '\\with { \\override LyricSpace.minimum-distance = #1.6 \\override LyricText.font-size = #-1 \\override VerticalAxisGroup.nonstaff-relatedstaff-spacing.padding = #1.2 }'

function staff(args) {
  const clef = args[0]
  const key = parseKey(args[1])
  const cols = args.slice(key ? 2 : 1)
  const notes = [], null_ = [], words = []
  for (const c of cols) {
    if (c === '/') { notes.push('\\bar "|"'); null_.push('\\bar "|"'); continue }
    const [body, label] = c.split('=')
    notes.push(chord(body))
    null_.push('c1')
    words.push(lyric(label ?? (body.includes('+') ? '' : pretty(body))))
  }
  const k = key ? `\\key ${KEYS[key]} \\major ` : ''
  return `\\score { <<
  \\new Staff \\with { \\remove "Time_signature_engraver" } << { \\cadenzaOn \\clef ${clef} ${k}${notes.join(' ')} \\bar "|." }
    \\new NullVoice = "lab" { \\cadenzaOn ${null_.join(' ')} } >>
  \\new Lyrics ${LYR} \\lyricsto "lab" { ${words.join(' ')} }
>> \\layout { } }`
}

function grand(args) {
  const key = parseKey(args[0])
  const cols = args.slice(key ? 1 : 0)
  const up = [], lo = [], null_ = [], words = []
  for (const c of cols) {
    const [body, label] = c.split('=')
    const [u = '', l = ''] = body.split('/')
    up.push(u ? chord(u) : 's1')
    lo.push(l ? chord(l) : 's1')
    null_.push('c1')
    words.push(lyric(label ?? ''))
  }
  const k = key ? `\\key ${KEYS[key]} \\major ` : ''
  return `\\score { <<
  \\new PianoStaff <<
    \\new Staff \\with { \\remove "Time_signature_engraver" } { \\cadenzaOn ${k}${up.join(' ')} \\bar "|." }
    \\new Staff \\with { \\remove "Time_signature_engraver" } << { \\cadenzaOn \\clef bass ${k}${lo.join(' ')} \\bar "|." }
      \\new NullVoice = "lab" { \\cadenzaOn ${null_.join(' ')} } >>
  >>
  \\new Lyrics ${LYR} \\lyricsto "lab" { ${words.join(' ')} }
>> \\layout { } }`
}

const DUR = { w: '1', h: '2', q: '4', e: '8', s: '16' }
function rhythm(args) {
  const out = [], words = []
  let time = '4/4'
  for (const tok of args) {
    if (/^\d+\/\d+$/.test(tok)) { time = tok; continue }
    if (tok === '/') { out.push('|'); continue }
    if (tok === '//') { out.push('\\bar "|."'); continue }
    const triplet = tok.startsWith('3[')
    const group = tok.replace(/^3\[|\]$/g, '').split('-').map((n) => NOTE_RE.exec(n))
    const beam = group.length > 1 && group.every((m) => !m[2] && (m[3] === 'e' || m[3] === 's'))
    const parts = group.map((m, k) => {
      const [, accent, rest, d, dot, tie, syl] = m
      if (!rest) words.push(syl ? lyric(syl) : '""')
      let s = (rest ? 'r' : 'c') + DUR[d] + (dot ? '.' : '') + (accent ? '->' : '') + (tie ? '~' : '')
      if (beam && k === 0) s += '['
      if (beam && k === group.length - 1) s += ']'
      return s
    })
    out.push(triplet ? `\\tuplet 3/2 { ${parts.join(' ')} }` : parts.join(' '))
  }
  const lyr = words.some((w) => w !== '""') ? `\n  \\new Lyrics ${LYR} \\lyricsto "r" { ${words.join(' ')} }` : ''
  return `\\score { <<
  \\new RhythmicStaff { \\new Voice = "r" { \\time ${time} ${out.join(' ')} } }${lyr}
>> \\layout { } }`
}

const seen = new Map()
for (const a of ARTICLES) {
  if (!slugs.has(a.slug)) continue
  for (const raw of a.body.split('\n')) {
    const line = raw.trim()
    const m = /^::(staff|grand|rhythm)\s+(.*)$/.exec(line)
    if (!m) continue
    const spec = m[2].split(' | ')[0]
    const args = spec.trim().split(/\s+/)
    const id = figureId(`${m[1]} ${spec}`)
    if (!seen.has(id)) seen.set(id, m[1] === 'staff' ? staff(args) : m[1] === 'grand' ? grand(args) : rhythm(args))
  }
}
writeFileSync('music/ex/jazz-figures.txt', '% Music examples of the Jazz Theory Book volumes: written by scripts/staff/figures.mjs, do not edit by hand.\n\n' + [...seen].map(([id, ly]) => `=== ${id}\n#(set-global-staff-size 24)\n${ly}`).join('\n\n') + '\n')
console.log(seen.size, 'figures from', slugs.size, 'chapters')

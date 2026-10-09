/** Note-name and directive-argument parsing, shared by the diagrams and the content checks. */

export const LETTERS = 'CDEFGAB'
export const PITCH_CLASS = [0, 2, 4, 5, 7, 9, 11]

const ACCIDENTALS: Record<string, { shift: number; glyph: string }> = {
  '#': { shift: 1, glyph: '♯' },
  b: { shift: -1, glyph: '♭' },
  '##': { shift: 2, glyph: '𝄪' },
  bb: { shift: -2, glyph: '𝄫' },
  n: { shift: 0, glyph: '♮' },
}

/** Parse "C#4", "Bb3", "Fn4" (natural), "F##4", "Bbb3" or "E" (octave defaults to 4). */
export function parseNote(name: string) {
  const m = /^([A-G])(##|bb|#|b|n)?(\d)?$/.exec(name)
  if (!m) return null
  const step = LETTERS.indexOf(m[1])
  const octave = Number(m[3] ?? 4)
  const acc = m[2] ? ACCIDENTALS[m[2]] : undefined
  return { step, octave, accidental: acc?.glyph, midi: 12 * (octave + 1) + PITCH_CLASS[step] + (acc?.shift ?? 0), diatonic: octave * 7 + step }
}

/** "k:3#" or "k:2b" → number of sharps (positive) or flats (negative); anything else → 0. */
export const parseKey = (arg?: string) => {
  const m = /^k:([0-7])([#b])$/.exec(arg ?? '')
  return m ? Number(m[1]) * (m[2] === '#' ? 1 : -1) : 0
}

/** One rhythm token: ">" accent, "r" rest, duration letter, "." dot, "~" tie to the next note, ":syllable". */
export const NOTE_RE = /^(>)?(r)?([whqes])(\.)?(~)?(?::(\S+))?$/
export const isRhythmToken = (t: string) =>
  /^\d+\/\d+$/.test(t) || t === '/' || t === '//' || (/^(3\[)?[^[\]]+\]?$/.test(t) && t.replace(/^3\[|\]$/g, '').split('-').every((n) => NOTE_RE.test(n)))

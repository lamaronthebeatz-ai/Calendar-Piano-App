import type { Chord, Quality } from './chords'
import { nameOf } from './pitch'

/** Lead-sheet symbols: C, Cm, C°, C+, C7, Cmaj7, Cm7, Cø7, C°7, Cm(maj7), C9, C7♭9; French sixth by its sound. */
export const QUALITY_SYMBOL: Record<Quality, string> = { M: '', m: 'm', d: '°', A: '+', '7': '7', M7: 'maj7', m7: 'm7', 'ø7': 'ø7', o7: '°7', mM7: 'm(maj7)', Fr: '7♭5', '9': '9', b9: '7♭9' }

export const chordSymbol = (c: Pick<Chord, 'rootName' | 'quality' | 'bass' | 'bassPc' | 'root'>) =>
  `${nameOf(c.rootName)}${QUALITY_SYMBOL[c.quality]}${c.bassPc !== c.root ? `/${nameOf(c.bass)}` : ''}`

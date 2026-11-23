/**
 * Gold examples transcribed from the textbook's own musical examples (Phạm Tú Hương, Phức điệu nghiêm khắc, 1991;
 * crops in public/scans/taneev/, catalogue src/features/theory/scans/taneev.json). Each is a fragment the book
 * prints to show ONE thing; only that thing is asserted (`expect`), never the whole fragment.
 *
 * Transcribed by the assistant from the scan images on 23/11/2026 (staff lines located by machine, notes read on a
 * magnified image). The FIRST reading was a third off in 22 and 24a and wrong on the last upper note of 21 (the
 * printed staff tilts); the gold test caught it — both checkers refused 22 and 24a because the reading put a fourth
 * before the suspension. Re-read with staff lines traced column by column; the five now agree with the numbers
 * printed under them and with the article's table (2 → 3 or a leap of the free voice, 7 → 6, 4 → 5 / 4 → 3, 9 → 10).
 * Examples whose notes could not be read with certainty were LEFT OUT rather than guessed:
 * 24b (one lower note), 25–28 (hand-written, unclear first note / metre / durations), 29 (a note head that does not
 * fit the bar), 18–19 (overlapping hand-written notes). Not yet checked by a person.
 *
 * Notation: treble clef, both voices on one staff in the book; quarters; "~" ties into the next note.
 */
export type GoldExample = {
  readonly id: string
  readonly scan: string
  readonly upper: string
  readonly lower: string
  readonly expect: {
    /** the marked dissonance: position in quarters, Taneyev number written under/over it, which voice holds the dissonant note */
    readonly at: number
    readonly number: number
    readonly held: 'upper' | 'lower'
    /** the book's verdict on it */
    readonly lawful: boolean
    readonly resolvesTo: string
  }
  readonly checkedBy: 'assistant'
}

export const GOLD_SUSPENSIONS: readonly GoldExample[] = [
  { id: 'Thí dụ 21', scan: 'taneev ex 21 — bè tự do nhảy lúc giải quyết (tr. 12)', upper: 'E5:2 D5:2 | A4:2 C5:2', lower: 'G4:4~ | G4:2 F4:2', expect: { at: 4, number: 1, held: 'lower', lawful: true, resolvesTo: 'P5' }, checkedBy: 'assistant' },
  { id: 'Thí dụ 22', scan: 'taneev ex 22', upper: 'F5:4~ | F5:2 E5:2', lower: 'F4:2 A4:2 | G4:4', expect: { at: 4, number: 6, held: 'upper', lawful: true, resolvesTo: 'M6' }, checkedBy: 'assistant' },
  { id: 'Thí dụ 23a', scan: 'taneev ex 23 (trái)', upper: 'C5:2 A4:2 | Bb4:4', lower: 'F4:4~ | F4:2 Eb4:2', expect: { at: 4, number: 3, held: 'lower', lawful: true, resolvesTo: 'P5' }, checkedBy: 'assistant' },
  { id: 'Thí dụ 23b', scan: 'taneev ex 23 (phải)', upper: 'E5:4~ | E5:2 D5:2', lower: 'C5:2 A4:2 | B4:4', expect: { at: 4, number: 3, held: 'upper', lawful: true, resolvesTo: 'm3' }, checkedBy: 'assistant' },
  { id: 'Thí dụ 24a', scan: 'taneev ex 24 (trái, "Tốt hơn")', upper: 'E5:2 C5:2 | F5:4', lower: 'E4:4~ | E4:2 D4:2', expect: { at: 4, number: 8, held: 'lower', lawful: true, resolvesTo: 'm10' }, checkedBy: 'assistant' },
]

/**
 * Counter-cases built from the WORDS of sơ đồ 2 (tr. 11), not printed examples: the same figures with the dissonant
 * note in the voice the chart forbids. Each must be refused.
 */
export const CHART_COUNTER: readonly GoldExample[] = [
  // a second whose dissonant note is ABOVE (the chart: số 1 always below)
  { id: 'sơ đồ 2: số 1 ở bè trên', scan: 'tr. 11', upper: 'C5:4~ | C5:2 B4:2', lower: 'E4:4 | B4:4', expect: { at: 4, number: 1, held: 'upper', lawful: false, resolvesTo: '' }, checkedBy: 'assistant' },
  // a seventh whose dissonant note is BELOW (the chart: số 6 always above)
  { id: 'sơ đồ 2: số 6 ở bè dưới', scan: 'tr. 11', upper: 'G4:4 | E5:4', lower: 'F4:4~ | F4:2 E4:2', expect: { at: 4, number: 6, held: 'lower', lawful: false, resolvesTo: '' }, checkedBy: 'assistant' },
]

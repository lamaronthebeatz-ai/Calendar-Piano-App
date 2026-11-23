import { CLEF_BOTTOM, INSTRUMENTS, TPQ, layout, migrate as composeMigrate, type Clef as CClef, type Ev, type MeasureAttr, type Score as CScore } from '../../../features/compose/model'
import { fromMusicXml, toMidi, toMusicXml } from '../../../features/compose/exchange'
import { pitch, type Pitch } from '../pitch'
import { eq, fromTicks, toTicks, ZERO, type Rational } from '../rational'
import { SCHEMA, SCHEMA_VERSION, scoreEnd, type Clef, type ClefChange, type MusicEvent, type NoteEvent, type Score, type Voice } from '../score'
import { layoutBars, meter } from '../time'

/**
 * Bridge to the score editor (features/compose): ticks at TPQ 240 per quarter ⇄ rational whole notes; lanes ⇄ voices;
 * measure attributes ⇄ change lists. Everything UMRE does not model yet (articulation, lyrics, dynamics, slurs, repeat
 * signs) rides along in `ext.compose` untouched, so compose → UMRE → compose returns the same score.
 * MusicXML and MIDI files go through the editor's own reader / writers (exchange.ts), not a second implementation.
 */

const CLEF_IN: Record<CClef, Clef> = { treble: 'treble', treble8: 'treble-8vb', bass: 'bass', alto: 'alto', tenor: 'tenor' }
const CLEF_OUT: Record<Clef, CClef> = { treble: 'treble', 'treble-8vb': 'treble8', bass: 'bass', alto: 'alto', tenor: 'tenor', percussion: 'treble' }
const T = (ticks: number) => fromTicks(ticks, TPQ)
const ticks = (r: Rational) => toTicks(r, TPQ)

/** Written transposition (semitones) of the editor's instruments → interval, for the common transposing instruments. */
const TRANSPOSE: Record<number, { steps: number; semitones: number }> = { 0: { steps: 0, semitones: 0 }, [-2]: { steps: -1, semitones: -2 }, [-3]: { steps: -2, semitones: -3 }, [-5]: { steps: -3, semitones: -5 }, [-7]: { steps: -4, semitones: -7 }, [-9]: { steps: -5, semitones: -9 }, [-12]: { steps: -7, semitones: -12 }, [12]: { steps: 7, semitones: 12 }, [-14]: { steps: -8, semitones: -14 }, [-21]: { steps: -12, semitones: -21 } }

type ComposeExt = { id: string; measures: number; attrs: Record<number, MeasureAttr>; spans: CScore['spans']; updated: number; lanes?: CScore['lanes']; instruments?: CScore['instruments']; labels?: string[] }

export function fromCompose(input: CScore): Score {
  const s = composeMigrate(input)
  const bars = layout(s)
  const staffCount = s.clefs.length
  const lanes = s.lanes ?? s.staves.map((_, i) => ({ staff: i, voice: 1 }))
  const P = (n: number) => `p${n + 1}`
  const ST = (n: number) => `st${n + 1}`

  // per-staff clef changes, key and time changes, from the measure attributes
  const clefs: ClefChange[][] = s.clefs.map((c) => [{ at: ZERO, clef: CLEF_IN[c] }])
  const meters = [{ at: ZERO, meter: meter(s.time[0], s.time[1]) }]
  const keySignatures = [{ at: ZERO, fifths: s.key }]
  for (const b of bars) {
    const a = s.attrs[b.index]
    if (!a || b.index === 0) continue
    const at = T(b.start)
    if (a.time) meters.push({ at, meter: meter(a.time[0], a.time[1]) })
    if (a.key !== undefined) keySignatures.push({ at, fifths: a.key })
    for (const [n, c] of Object.entries(a.clefs ?? {})) if (c) clefs[+n].push({ at, clef: CLEF_IN[c] })
  }
  // changes written in measure 0 replace the opening values
  const a0 = s.attrs[0]
  if (a0?.time) meters[0] = { at: ZERO, meter: meter(a0.time[0], a0.time[1]) }
  if (a0?.key !== undefined) keySignatures[0] = { at: ZERO, fifths: a0.key }
  for (const [n, c] of Object.entries(a0?.clefs ?? {})) if (c) clefs[+n][0] = { at: ZERO, clef: CLEF_IN[c] }

  const voices: Voice[] = s.staves.map((evs, lane) => {
    const vid = `v${lane + 1}`
    const out: MusicEvent[] = []
    let prevTied: Set<string> = new Set()
    for (const e of evs) {
      const { id, start, dur, notes, ...marks } = e
      const ext = Object.keys(marks).length ? { compose: marks } : undefined
      if (!notes.length) {
        out.push({ kind: 'rest', id, onset: T(start), duration: T(dur), ...(ext ? { ext } : {}) })
        prevTied = new Set()
        continue
      }
      const tiedHere = new Set<string>()
      notes.forEach((n, j) => {
        const key = `${n.step}.${n.alter}.${n.oct}`
        const into = prevTied.has(key)
        const tie = into && n.tie ? 'continue' : into ? 'stop' : n.tie ? 'start' : undefined
        if (n.tie) tiedHere.add(key)
        const ev: NoteEvent = {
          kind: 'note',
          id: notes.length === 1 ? id : `${id}~${j}`,
          onset: T(start),
          duration: T(dur),
          pitch: pitch(n.step, n.alter, n.oct),
          ...(tie ? { tie } : {}),
          ...(notes.length > 1 ? { group: id } : {}),
          ...(j === 0 && ext ? { ext } : {}),
        }
        out.push(ev)
      })
      prevTied = tiedHere
    }
    return { id: vid, staff: ST(lanes[lane]?.staff ?? lane), events: out }
  })

  const parts = Array.from({ length: staffCount }, (_, i) => {
    const inst = s.instruments?.[i]
    const def = inst ? INSTRUMENTS.find((x) => x.id === inst) : undefined
    const tr = def ? TRANSPOSE[def.transpose] : undefined
    return {
      id: P(i),
      name: s.labels?.[i] ?? def?.label ?? `Khuông ${i + 1}`,
      ...(def ? { instrument: { name: def.label, midiProgram: def.program, ...(tr && def.transpose ? { transposition: tr } : {}) } } : {}),
    }
  })
  const ext: ComposeExt = { id: s.id, measures: s.measures, attrs: s.attrs, spans: s.spans ?? [], updated: s.updated, ...(s.lanes ? { lanes: s.lanes } : {}), ...(s.instruments ? { instruments: s.instruments } : {}), ...(s.labels ? { labels: s.labels } : {}) }
  return {
    schema: SCHEMA,
    version: SCHEMA_VERSION,
    id: s.id,
    title: s.title,
    parts,
    staves: clefs.map((c, i) => ({ id: ST(i), part: P(i), clefs: c })),
    voices,
    meters,
    keySignatures,
    tempos: [{ at: ZERO, quarterPerMinute: s.tempo }],
    end: T(bars.reduce((t, b) => t + b.len, 0)),
    ext: { compose: ext },
  }
}

/**
 * UMRE → editor score. A score that came from the editor gets its untouched extras back; any other score (from
 * counterpoint, from MIDI) gets one staff per UMRE staff, lanes per voice, and measures to cover its length.
 * Durations must be whole ticks at TPQ 240 (anything else throws rather than rounding).
 */
export function toCompose(s: Score): CScore {
  const ext = s.ext?.compose as ComposeExt | undefined
  const staffIndex = new Map(s.staves.map((st, i) => [st.id, i]))
  const end = scoreEnd(s)
  const bars = layoutBars([...s.meters], end)
  const barAt = (at: Rational) => bars.findIndex((b) => eq(b.start, at))
  const attrs: Record<number, MeasureAttr> = {}
  const touch = (i: number) => (attrs[i] ??= {})
  if (ext) for (const [k, v] of Object.entries(ext.attrs)) {
    // keep the extras (bar lines, repeats, jumps); key / time / clefs are rebuilt from the change lists below
    const { key: _k, time: _t, clefs: _c, ...rest } = v
    void _k; void _t; void _c
    if (Object.keys(rest).length) attrs[+k] = { ...rest }
  }
  const at0 = (xs: readonly { at: Rational }[]) => xs.length > 0 && eq(xs[0].at, ZERO)
  if (!at0(s.meters) || !at0(s.keySignatures)) throw new Error('cần số chỉ nhịp và hoá biểu ở vị trí 0')
  s.meters.slice(1).forEach((m) => (touch(barAt(m.at)).time = [m.meter.num, m.meter.den]))
  s.keySignatures.slice(1).forEach((k) => (touch(barAt(k.at)).key = k.fifths))
  // the editor's own data may restate a key or time in measure 0: keep that where it was
  if (ext?.attrs[0]?.time) touch(0).time = [s.meters[0].meter.num, s.meters[0].meter.den]
  if (ext?.attrs[0]?.key !== undefined) touch(0).key = s.keySignatures[0].fifths
  s.staves.forEach((st, i) => {
    st.clefs.slice(1).forEach((c) => ((touch(barAt(c.at)).clefs ??= {})[i] = CLEF_OUT[c.clef]))
    if (ext?.attrs[0]?.clefs?.[i]) (touch(0).clefs ??= {})[i] = CLEF_OUT[st.clefs[0].clef]
  })

  const staves: Ev[][] = s.voices.map((v) => {
    const evs: Ev[] = []
    for (const e of v.events) {
      const marks = (e.ext?.compose ?? {}) as Partial<Ev>
      if (e.kind === 'rest') {
        evs.push({ id: e.id, start: ticks(e.onset), dur: ticks(e.duration), notes: [], ...marks })
        continue
      }
      const gid = e.group ?? e.id
      const last = evs[evs.length - 1]
      const n = { step: e.pitch.letter, oct: e.pitch.octave, alter: e.pitch.alter, ...(e.tie === 'start' || e.tie === 'continue' ? { tie: true } : {}) }
      if (last && last.id === gid && e.group) last.notes.push(n)
      else evs.push({ id: gid, start: ticks(e.onset), dur: ticks(e.duration), notes: [n], ...marks })
    }
    return evs
  })
  const lanes = ext?.lanes ?? (s.voices.some((v, i) => staffIndex.get(v.staff) !== i) ? s.voices.map((v) => ({ staff: staffIndex.get(v.staff) ?? 0, voice: 1 + s.voices.filter((w) => w.staff === v.staff).indexOf(v) })) : undefined)
  return {
    id: ext?.id ?? s.id,
    title: s.title ?? '',
    clefs: s.staves.map((st) => CLEF_OUT[st.clefs[0].clef]),
    key: s.keySignatures[0].fifths,
    time: [s.meters[0].meter.num, s.meters[0].meter.den],
    tempo: s.tempos?.[0]?.quarterPerMinute ?? 120,
    measures: ext?.measures ?? bars.length,
    attrs,
    staves,
    ...(lanes ? { lanes } : {}),
    ...(ext?.labels ? { labels: ext.labels } : !ext ? { labels: s.staves.map((st) => s.parts.find((p) => p.id === st.part)?.name ?? '') } : {}),
    ...(ext?.instruments ? { instruments: ext.instruments } : {}),
    spans: ext?.spans ?? [],
    updated: ext?.updated ?? 0,
    v: 2,
  }
}

/** MusicXML (text) → UMRE, through the editor's reader. */
export const fromMusicXmlText = (xml: string, title?: string) => fromCompose(fromMusicXml(xml, title))
/** UMRE → MusicXML text, through the editor's writer. */
export const toMusicXmlText = (s: Score) => toMusicXml(toCompose(s))
/** UMRE → Standard MIDI File bytes (as heard in the editor), through the editor's writer. */
export const toMidiFile = (s: Score) => toMidi(toCompose(s))
/** Diatonic number of a clef's bottom line in the editor's convention (exposed for layout code that needs it). */
export const clefBottom = (c: Clef) => CLEF_BOTTOM[CLEF_OUT[c]]
export type { Pitch }

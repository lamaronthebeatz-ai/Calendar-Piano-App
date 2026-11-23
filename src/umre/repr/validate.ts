import { isPitch, midi, samePitch } from './pitch'
import { add, cmp, eq, format, isPositive, isRational, lt, ZERO, type Rational } from './rational'
import { SCHEMA, SCHEMA_VERSION, endOf, scoreEnd, type MusicEvent, type NoteEvent, type Score } from './score'
import { layoutBars, meter as checkMeter } from './time'
import { isModeId } from './tonal'
import { walkForm } from './structure'
import { inversion } from './harmony'

/**
 * Structural validation: is this a well-formed score? (Not: is it good music — that is the rulebooks' job.)
 * Every problem names its path and the ids involved, so a caller can point at it.
 */
export type Issue = { readonly code: string; readonly severity: 'error' | 'warning'; readonly path: string; readonly message: string; readonly ids?: string[] }

export function validateScore(s: Score): Issue[] {
  const out: Issue[] = []
  const err = (code: string, path: string, message: string, ids?: string[]) => out.push({ code, severity: 'error', path, message, ids })
  const warn = (code: string, path: string, message: string, ids?: string[]) => out.push({ code, severity: 'warning', path, message, ids })

  if (s.schema !== SCHEMA) err('schema', 'schema', `schema phải là "${SCHEMA}"`)
  if (s.version !== SCHEMA_VERSION) err('version', 'version', `phiên bản ${s.version} — mô-đun này đọc phiên bản ${SCHEMA_VERSION} (dùng migrate)`)

  // ids unique across the whole score
  const seen = new Map<string, string>()
  const claim = (id: string, path: string) => {
    if (typeof id !== 'string' || !id) {
      err('id-missing', path, 'thiếu id')
      return
    }
    const prev = seen.get(id)
    if (prev) err('id-duplicate', path, `id "${id}" trùng với ${prev}`, [id])
    else seen.set(id, path)
  }
  claim(s.id, 'id')
  s.parts.forEach((p, i) => claim(p.id, `parts[${i}]`))
  s.staves.forEach((st, i) => {
    claim(st.id, `staves[${i}]`)
    if (!s.parts.some((p) => p.id === st.part)) err('ref', `staves[${i}].part`, `phần "${st.part}" không có`)
    if (!st.clefs.length || !eq(st.clefs[0].at, ZERO)) err('clef-start', `staves[${i}].clefs`, 'cần khoá nhạc ở vị trí 0')
    checkSorted(st.clefs, `staves[${i}].clefs`, err)
  })

  // time signatures and key signatures
  if (!s.meters.length || !eq(s.meters[0].at, ZERO)) err('meter-start', 'meters', 'cần số chỉ nhịp ở vị trí 0')
  checkSorted(s.meters, 'meters', err)
  s.meters.forEach((m, i) => {
    try {
      checkMeter(m.meter.num, m.meter.den)
    } catch (e) {
      err('meter', `meters[${i}]`, (e as Error).message)
    }
  })
  if (!s.keySignatures.length || !eq(s.keySignatures[0].at, ZERO)) err('keysig-start', 'keySignatures', 'cần hoá biểu ở vị trí 0')
  checkSorted(s.keySignatures, 'keySignatures', err)
  s.keySignatures.forEach((k, i) => Number.isInteger(k.fifths) && Math.abs(k.fifths) <= 14 ? null : err('keysig', `keySignatures[${i}]`, `hoá biểu ${k.fifths} không hợp lệ`))
  s.keys?.forEach((k, i) => (isModeId(k.key.mode) ? null : err('mode', `keys[${i}]`, `điệu thức "${k.key.mode}" không có`)))
  if (s.pickup && !isPositive(s.pickup)) err('pickup', 'pickup', 'ô lấy đà phải dài hơn 0')

  // metre changes on bar lines
  if (!out.some((i) => i.code.startsWith('meter'))) {
    try {
      const bars = layoutBars([...s.meters], scoreEnd(s), s.pickup)
      s.meters.forEach((m, i) => {
        if (i && !bars.some((b) => eq(b.start, m.at))) err('meter-barline', `meters[${i}]`, `đổi nhịp ở ${format(m.at)} không rơi vào vạch nhịp`)
      })
    } catch (e) {
      err('layout', 'meters', (e as Error).message)
    }
  }

  // voices and events
  s.voices.forEach((v, vi) => {
    const path = `voices[${vi}]`
    claim(v.id, path)
    if (!s.staves.some((st) => st.id === v.staff)) err('ref', `${path}.staff`, `khuông "${v.staff}" không có`)
    let prev: MusicEvent | undefined
    v.events.forEach((e, ei) => {
      const p = `${path}.events[${ei}]`
      claim(e.id, p)
      if (!isRational(e.onset) || !isRational(e.duration)) {
        err('time', p, 'onset/duration phải là phân số đã rút gọn', [e.id])
        return
      }
      if (lt(e.onset, ZERO)) err('onset', p, 'onset âm', [e.id])
      if (!isPositive(e.duration)) err('duration', p, 'trường độ phải > 0', [e.id])
      if (e.kind === 'note' && !isPitch(e.pitch)) err('pitch', p, 'cao độ không hợp lệ', [e.id])
      if (e.kind === 'note' && isPitch(e.pitch) && (midi(e.pitch) < 0 || midi(e.pitch) > 127)) warn('range', p, 'ngoài phạm vi MIDI 0 – 127', [e.id])
      if (prev) {
        const c = cmp(e.onset, prev.onset)
        const chord = prev.kind === 'note' && e.kind === 'note' && c === 0 && eq(prev.duration, e.duration)
        if (c < 0) err('order', p, 'sự kiện không xếp theo thời gian', [prev.id, e.id])
        else if (!chord && lt(e.onset, endOf(prev))) err('overlap', p, 'chồng lên sự kiện trước trong cùng một bè (bè là một tuyến; hợp âm trong một bè phải cùng onset và trường độ)', [prev.id, e.id])
        if (chord && (!(prev as NoteEvent).group || (prev as NoteEvent).group !== (e as NoteEvent).group)) warn('group', p, 'nốt cùng onset trong một bè nên có chung group (hợp âm)', [prev.id, e.id])
      }
      prev = e
    })
    // ties: a start/continue must meet the same written pitch at its end in this voice
    const notes = v.events.filter((e): e is NoteEvent => e.kind === 'note')
    notes.forEach((n) => {
      if (n.tie !== 'start' && n.tie !== 'continue') return
      const next = notes.find((m) => eq(m.onset, endOf(n)) && isPitch(m.pitch) && isPitch(n.pitch) && samePitch(m.pitch, n.pitch))
      if (!next) err('tie', path, `dấu nối từ ${n.id} không gặp nốt cùng cao độ (cùng cách viết) ngay sau`, [n.id])
      else if (next.tie !== 'stop' && next.tie !== 'continue') err('tie', path, `nốt ${next.id} được nối tới nhưng không ghi tie stop/continue`, [n.id, next.id])
    })
  })

  // annotations
  const end = scoreEnd(s)
  const span = (start: Rational, stop: Rational, path: string) => {
    if (!isRational(start) || !isRational(stop) || !lt(start, stop)) err('span', path, 'khoảng không hợp lệ (start < end)')
    else if (lt(end, stop)) warn('span-end', path, 'khoảng vượt quá cuối bài')
  }
  s.harmony?.forEach((h, i) => {
    claim(h.id, `harmony[${i}]`)
    span(h.start, h.end, `harmony[${i}]`)
    if (h.chord && inversion(h.chord) === null) err('chord-bass', `harmony[${i}]`, 'nốt bass không thuộc hợp âm')
  })
  if (s.structure) walkForm(s.structure, (n) => {
    claim(n.id, `structure:${n.id}`)
    span(n.start, n.end, `structure:${n.id}`)
    for (const c of n.children ?? []) if (lt(c.start, n.start) || lt(n.end, c.end)) err('form-nest', `structure:${c.id}`, `nút con vượt ra ngoài ${n.id}`)
  })
  return out
}

function checkSorted(xs: readonly { at: Rational }[], path: string, err: (c: string, p: string, m: string) => void) {
  for (let i = 1; i < xs.length; i++) if (cmp(xs[i].at, xs[i - 1].at) <= 0) err('order', `${path}[${i}]`, 'các thay đổi phải tăng dần theo thời gian')
}

export const isValid = (s: Score) => !validateScore(s).some((i) => i.severity === 'error')
export const sumDurations = (evs: readonly MusicEvent[]) => evs.reduce((t, e) => add(t, e.duration), ZERO)

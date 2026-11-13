import { blank, fromDn, writeAt, type Note, type Score } from '../compose/model'
import { plainSpelling } from './engine/pitch'

/**
 * A Standard MIDI File as a score for analysis: notes quantised to a sixteenth (a triplet eighth where closer),
 * split at middle C onto a grand staff, chords made of notes starting together. Time and key signatures from the
 * meta events; pitches spelled with sharps or flats as the key signature leans. MIDI has no spelling of its own, so
 * the analysis re-spells chords by function anyway.
 */
export function fromMidi(buf: ArrayBuffer, title = 'Bản MIDI'): Score {
  const d = new DataView(buf)
  let p = 0
  const str = (n: number) => String.fromCharCode(...new Uint8Array(buf, p, n))
  if (str(4) !== 'MThd') throw new Error('Không đọc được: tệp không phải MIDI chuẩn.')
  const hdrLen = d.getUint32(4)
  const ntrk = d.getUint16(10)
  const div = d.getUint16(12)
  if (div & 0x8000) throw new Error('MIDI theo SMPTE chưa được hỗ trợ.')
  p = 8 + hdrLen
  type Raw = { on: number; off: number; key: number }
  const notes: Raw[] = []
  let time: [number, number] = [4, 4]
  let fifths = 0
  for (let t = 0; t < ntrk && p < buf.byteLength; t++) {
    if (str(4) !== 'MTrk') break
    const len = d.getUint32(p + 4)
    let q = p + 8
    const end = q + len
    let tick = 0
    let status = 0
    const open = new Map<number, number[]>()
    const vlq = () => {
      let v = 0
      for (;;) {
        const b = d.getUint8(q++)
        v = (v << 7) | (b & 0x7f)
        if (!(b & 0x80)) return v
      }
    }
    while (q < end) {
      tick += vlq()
      let b = d.getUint8(q)
      if (b & 0x80) {
        status = b
        q++
      } else b = status
      const type = status & 0xf0
      const ch = status & 0x0f
      if (status === 0xff) {
        const meta = d.getUint8(q++)
        const l = vlq()
        if (meta === 0x58 && l >= 2) time = [d.getUint8(q), 2 ** d.getUint8(q + 1)]
        if (meta === 0x59 && l >= 2) fifths = d.getInt8(q)
        q += l
      } else if (status === 0xf0 || status === 0xf7) q += vlq()
      else if (type === 0x90 || type === 0x80) {
        const key = d.getUint8(q)
        const vel = d.getUint8(q + 1)
        q += 2
        if (ch === 9) continue // drums
        const k = ch * 128 + key
        if (type === 0x90 && vel > 0) (open.get(k) ?? open.set(k, []).get(k)!).push(tick)
        else {
          const on = open.get(k)?.shift()
          if (on !== undefined && tick > on) notes.push({ on, off: tick, key })
        }
      } else q += type === 0xc0 || type === 0xd0 ? 1 : 2
    }
    p = end
  }
  if (!notes.length) throw new Error('Tệp MIDI không có nốt nào.')
  const TPQ = 240
  const scale = TPQ / div
  const snap = (x: number) => {
    const s16 = Math.round((x * scale) / 60) * 60
    const s3 = Math.round((x * scale) / 80) * 80
    return Math.abs(s3 - x * scale) + 8 < Math.abs(s16 - x * scale) ? s3 : s16
  }
  const flats = fifths < 0
  const toNote = (key: number): Note => {
    const sp = plainSpelling(key % 12, flats)
    const oct = Math.floor(key / 12) - 1
    return { ...fromDn(oct * 7 + sp.step, sp.alter) }
  }
  const barTicks = (time[0] * 960) / time[1]
  const last = Math.max(...notes.map((n) => snap(n.off)))
  let s = blank(title, true)
  s = { ...s, time, key: Math.max(-7, Math.min(7, fifths)), measures: Math.max(1, Math.ceil(last / barTicks)) }
  for (const staff of [0, 1]) {
    const mine = notes.filter((n) => (staff === 0 ? n.key >= 60 : n.key < 60))
    const byStart = new Map<number, { end: number; keys: number[] }>()
    for (const n of mine) {
      const on = snap(n.on)
      const off = Math.max(on + 60, snap(n.off))
      const g = byStart.get(on) ?? byStart.set(on, { end: off, keys: [] }).get(on)!
      g.end = Math.max(g.end, off)
      if (!g.keys.includes(n.key)) g.keys.push(n.key)
    }
    const starts = [...byStart.keys()].sort((a, b) => a - b)
    starts.forEach((on, i) => {
      const g = byStart.get(on)!
      const end = i + 1 < starts.length ? Math.min(g.end, starts[i + 1]) : g.end
      s = writeAt(s, staff, on, end - on, g.keys.sort((a, b) => a - b).map(toNote)).score
    })
  }
  return s
}

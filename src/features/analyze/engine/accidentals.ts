import type { HarmonyItem } from './index'
import { barAt, type ANote, type AScore } from './extract'
import type { Nct } from './nct'
import { keyPc, sigOf } from './key'
import { intervalOf, mod, pcOf, sigAlters } from './pitch'
import type { Concept } from '../links'

/** A note altered against the key signature, and why the analysis thinks it is there. */
export type Accidental = { note: ANote; reason: string; concept: Concept }

export function accidentalsOf(sc: AScore, harmony: HarmonyItem[], ncts: Nct[]): Accidental[] {
  const nctOf = new Map(ncts.map((x) => [x.note, x]))
  const out: Accidental[] = []
  for (const n of sc.notes) {
    const sig = barAt(sc.bars, n.start).key
    if (sigAlters(sig)[n.step] === n.alter) continue
    const h = harmony.find((x) => x.chord.start <= n.start && x.chord.end > n.start) ?? harmony.find((x) => x.chord.start < n.end && x.chord.end > n.start)
    if (!h) continue
    const k = h.key
    const r = h.reading
    const [deg, semis] = intervalOf(k.tonic, n)
    const t = keyPc(k)
    const rel = mod(pcOf(n) - t, 12)
    const inChord = h.pcs.includes(pcOf(n))
    const nct = nctOf.get(n)
    let reason: string
    let concept: Concept
    if (sigOf(k) !== sig && !inChord) {
      reason = `thuộc giọng ${k.name} (đã chuyển giọng)`
      concept = 'modulation'
    } else if (inChord && r.special === 'N') {
      reason = 'bậc II hạ của hợp âm sáu Napoli'
      concept = 'neapolitan'
    } else if (inChord && (r.special === 'It' || r.special === 'Fr' || r.special === 'Ger')) {
      reason = `quãng sáu tăng của hợp âm sáu tăng (${r.special === 'It' ? 'Ý' : r.special === 'Fr' ? 'Pháp' : 'Đức'})`
      concept = 'augSixth'
    } else if (inChord && r.of !== undefined) {
      reason = `âm dẫn của hợp âm át phụ ${r.ru} — ly điệu sang bậc ${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][r.of]}`
      concept = 'applied'
    } else if (k.minor && deg === 6 && rel === 11) {
      reason = 'bậc VII nâng của giọng thứ (thứ hoà âm)'
      concept = 'harmonicMinor'
    } else if (k.minor && deg === 5 && rel === 9) {
      reason = 'bậc VI nâng của giọng thứ (thứ giai điệu)'
      concept = 'harmonicMinor'
    } else if (sigOf(k) !== sig) {
      reason = `thuộc giọng ${k.name} (đã chuyển giọng)`
      concept = 'modulation'
    } else if (nct) {
      reason = `${nct.kind === 'passing' ? 'nốt lướt' : nct.kind === 'neighbor' ? 'nốt thêu' : 'nốt ngoài hợp âm'} cromatic`
      concept = 'nct'
    } else if (inChord && r.alter !== 0) {
      reason = `hợp âm biến âm / hợp âm mượn (${r.ru})`
      concept = 'mixture'
    } else {
      reason = 'âm cromatic'
      concept = 'chromatic'
    }
    void semis
    out.push({ note: n, reason, concept })
  }
  return out
}

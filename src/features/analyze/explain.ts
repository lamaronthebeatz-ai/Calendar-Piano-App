import type { Analysis } from './engine/index'
import { QUALITIES } from './engine/chords'
import { tonesOf } from './engine/chords'
import { nameOf } from './engine/pitch'
import { NCT_NAME } from './engine/nct'
import { chordSymbol } from './engine/symbols'
import { keyName, type Run } from './engine/report'

const DEG = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const INV: Record<string, string> = { '': 'thể gốc', '6': 'hợp âm sáu (thể đảo 1)', '64': 'hợp âm bốn sáu (thể đảo 2)', '7': 'thể gốc', '65': 'hợp âm năm sáu (thể đảo 1)', '43': 'hợp âm ba bốn (thể đảo 2)', '2': 'hợp âm hai (thể đảo 3)' }

/** One chord explained in a sentence or two, with the terms linked to the library. */
export function explain(a: Analysis, i: number): { runs: Run[]; symbol: string } {
  const h = a.harmony[i]
  const r = h.reading
  const c = h.chord
  const k = keyName(h.key)
  const runs: Run[] = []
  const tones = tonesOf(c).map(nameOf).join(' – ')
  const q = QUALITIES[c.quality].name
  if (r.special === 'K64') runs.push({ t: 'Hợp âm bốn sáu kết', concept: 'cadence' }, { t: `: hợp âm chủ ${k} ở thể bốn sáu, đứng trên âm át ở bè trầm và giải quyết vào D — mang chức năng át, không phải chủ.` })
  else if (r.special === 'N') runs.push({ t: 'Hợp âm sáu Napoli', concept: 'neapolitan' }, { t: ` (II♭6): hợp âm trưởng trên bậc II hạ của ${k}, nhóm hạ át, thường dẫn tới K64 hoặc D.` })
  else if (r.special === 'It' || r.special === 'Fr' || r.special === 'Ger')
    runs.push({ t: `Hợp âm sáu tăng ${r.special === 'It' ? 'Ý' : r.special === 'Fr' ? 'Pháp' : 'Đức'}`, concept: 'augSixth' }, { t: `: bậc VI hạ ở bè trầm và bậc IV tăng phía trên tạo quãng sáu tăng, cùng mở rộng ra quãng tám trên âm át của ${k}.` })
  else if (r.of !== undefined)
    runs.push({ t: r.ru.startsWith('VII') ? 'Hợp âm bảy cảm âm phụ' : 'Hợp âm át phụ', concept: 'applied' }, { t: ` dẫn tới bậc ${DEG[r.of]} của ${k}: một lần ly điệu ngắn, hợp âm này không thuộc giọng nhưng làm bậc ${DEG[r.of]} sáng lên như một chủ âm tạm thời.` })
  else if (r.fn)
    runs.push({ t: `Chức năng ${r.fn === 'T' ? 'chủ (T)' : r.fn === 'S' ? 'hạ át (S)' : 'át (D)'}`, concept: 'function' }, { t: ` trong ${k}: hợp âm bậc ${DEG[r.degree]}${r.alter ? ' biến âm' : ''}.` })
  else if (r.alter) runs.push({ t: 'Hợp âm biến âm / mượn', concept: 'mixture' }, { t: `: bậc ${DEG[r.degree]} được hạ hoặc nâng so với ${k}.` })
  else runs.push({ t: `Hợp âm bậc ${DEG[r.degree]} của ${k}.` })
  runs.push({ t: ` Hợp âm ${q} ${nameOf(c.rootName)} (${tones}), ` }, { t: INV[r.fig] ?? 'thể gốc', concept: 'inversion' }, { t: '.' })
  const here = a.ncts.filter((x) => x.chord === i)
  if (here.length) {
    runs.push({ t: ' ' }, { t: 'Nốt ngoài hợp âm', concept: 'nct' }, { t: `: ${here.map((x) => `${nameOf(x.note)} (${NCT_NAME[x.kind]})`).join(', ')}.` })
  }
  if (c.fit < 0.6) runs.push({ t: ` Độ khớp ${Math.round(c.fit * 100)}% — cách đọc này chưa chắc.` })
  return { runs, symbol: chordSymbol(c) }
}

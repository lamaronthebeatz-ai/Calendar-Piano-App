import { EvidenceRegistry, fromCurated, type Citation } from '../evidence/evidence'
import type { Definition, ExceptionSpec, Rulebook, RuleSpec } from './rulebook'

/**
 * Four-part harmony, first rules — the pilot of a second domain on the shared engine. Every rule cites
 * N. A. Rimsky-Korsakov, Практический учебник гармонии (curated id rimsky-korsakov-1886), at the page the library
 * article `luat-hoa-am-bon-be` § "Theo sách gốc Rimsky-Korsakov" gives for it (read from the 2014 printing; pages
 * checked by the assistant, not yet by a person). What the book section does not state is marked as the compiler's
 * reading. Voice ranges are NOT a rule here: they bound the search domain only.
 */
export const HARMONY_RULEBOOK_ID = 'harmony.four-part.rimsky-korsakov-1886'
export const HARMONY_RULEBOOK_VERSION = '1'
const BOOK = 'rimsky-korsakov-1886'
const INTERNAL = 'umre.internal-reading'

export function harmonyRulebook(): Rulebook {
  const ev = new EvidenceRegistry()
  ev.addSource(fromCurated(BOOK, 'primary', 'verified', 'Sách gốc của trường hoà âm Petersburg; trang theo bản in 2014 (scan Lamar gửi).'))
  ev.addSource({ id: INTERNAL, type: 'internal-interpretation', verification: 'unverified', origin: 'umre', authors: [], title: 'Cách hiểu của người biên soạn', note: 'Điều bộ máy áp mà đoạn sách được dẫn không nói thẳng.' })
  const cite = (owner: string, loc: string | null, note?: string): string[] => {
    const id = `${owner}#1`
    const c: Citation = loc
      ? { id, sourceId: BOOK, locator: loc, verification: 'verified', scope: owner, checkedBy: 'assistant', ...(note ? { note } : {}) }
      : { id, sourceId: INTERNAL, locator: null, verification: 'unverified', scope: owner, ...(note ? { note } : {}) }
    ev.addCitation(c)
    return [id]
  }
  const rules: RuleSpec[] = [
    { id: 'h.chord-tones', statement: 'Mỗi bè vang một âm của hợp âm đã cho (âm gốc, quãng 3, quãng 5)', severity: 'hard', citations: cite('h.chord-tones', 'tr. 11'), scope: 'mỗi hợp âm' },
    { id: 'h.root-position', statement: 'Hợp âm ở thế gốc: bè bass giữ âm gốc (tên thể đảo do nốt bass quyết định)', severity: 'hard', citations: cite('h.root-position', 'tr. 12 – 13'), scope: 'bài tập thế gốc' },
    { id: 'h.double-root', statement: 'Hợp âm ba bốn bè: nhân đôi âm gốc — "lúc đầu chỉ dùng cách này"', severity: 'hard', citations: cite('h.double-root', 'tr. 19'), scope: 'hợp âm ba thế gốc, bốn bè' },
    { id: 'h.spacing', statement: 'Ba bè trên cách nhau quãng 3, 4 (xếp gần) hoặc quãng 5, 6 (xếp xa): hai bè trên liền nhau không xa hơn quãng 6', severity: 'hard', citations: cite('h.spacing', 'tr. 20'), scope: 'soprano–alto, alto–tenor', caveat: 'Sách mô tả xếp gần (3, 4) và xếp xa (5, 6); đọc thành giới hạn "không xa hơn quãng 6" giữa hai bè trên liền nhau là cách hiểu của người biên soạn.' },
    { id: 'h.parallels', statement: 'Cấm quãng 5 và quãng 8 (kể cả đồng âm) song song hoặc ngược hướng giữa hai bè', severity: 'hard', citations: cite('h.parallels', 'tr. 22'), scope: 'mọi cặp bè' },
    { id: 'h.augmented', statement: 'Cấm đi quãng tăng ở bất kỳ bè nào', severity: 'hard', citations: cite('h.augmented', 'tr. 22'), scope: 'mọi bè' },
    { id: 'h.crossing', statement: 'Bè dưới không vượt lên trên bè trên', severity: 'hard', citations: cite('h.crossing', null, 'đoạn sách được dẫn không nói; quy ước chung của bài tập bốn bè'), scope: 'mọi cặp bè' },
  ]
  const exceptions: ExceptionSpec[] = []
  const definitions: Definition[] = [
    { id: 'def.perfect', statement: 'Quãng thuận hoàn toàn: đồng âm, 5 đúng, 8 đúng (và quãng kép)', citations: cite('def.perfect', null, 'định nghĩa dùng cho luật quãng song song'), data: { perfect: [[0, 'P'], [4, 'P']], imperfect: [[2, 'm'], [2, 'M'], [5, 'm'], [5, 'M']] } },
  ]
  return { id: HARMONY_RULEBOOK_ID, version: HARMONY_RULEBOOK_VERSION, domain: 'harmony', title: 'Hoà âm bốn bè — luật đầu (Rimsky-Korsakov)', rules, exceptions, definitions, evidence: ev }
}

import { EvidenceRegistry, fromCurated, type Citation } from '../evidence/evidence'
import type { AmbiguousSpec, Definition, ExceptionSpec, PermittedSpec, Rulebook, RuleSpec } from './rulebook'

/**
 * Four-part harmony, first rules — the pilot of a second domain on the shared engine. Every rule cites
 * N. A. Rimsky-Korsakov, Практический учебник гармонии (curated id rimsky-korsakov-1886), at the page the library
 * article `luat-hoa-am-bon-be` § "Theo sách gốc Rimsky-Korsakov" gives for it (read from the 2014 printing; pages
 * checked by the assistant, not yet by a person). What the book section does not state is marked as the compiler's
 * reading. Voice ranges are NOT a rule here: they bound the search domain only.
 */
export const HARMONY_RULEBOOK_ID = 'harmony.four-part.rimsky-korsakov-1886'
/** 2 (Wave C): § 11 connection rules, § 13 – tr. 25 harmonization rules (3 soft), permitted / ambiguous. History: docs/umre/RULEBOOK_CHANGELOG.md */
export const HARMONY_RULEBOOK_VERSION = '2'
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
    // § 11 — connecting triads (tr. 21)
    { id: 'h.upper-third', name: 'Bè trên không đi xa hơn quãng 3', statement: 'Nối hai hợp âm ba khác bậc khi nhân đôi âm gốc: không bè trên nào đi xa hơn quãng 3', severity: 'hard', citations: cite('h.upper-third', 'tr. 21'), scope: 'alto, tenor; hai hợp âm khác bậc liền nhau', caveat: 'Soprano là giai điệu cho sẵn nên không xét ở đây (bước nhảy của giai điệu do § 13 luật 3 quy định) — cách hiểu của người biên soạn.' },
    { id: 'h.second-relation', name: 'Quan hệ quãng 2', statement: 'Hai hợp âm quan hệ quãng 2: nối giai điệu, ba bè trên đi cùng hướng, ngược hướng bass', severity: 'hard', citations: cite('h.second-relation', 'tr. 21'), scope: 'hai hợp âm có âm gốc cách nhau quãng 2' },
    // § 13 — harmonizing a melody (tr. 23), and the bass-harmonization notes (tr. 24 – 25)
    { id: 'h.primary-only', name: 'Chỉ hợp âm chính', statement: 'Dưới mỗi nốt giai điệu đặt hợp âm ba bậc I, IV hoặc V', severity: 'hard', citations: cite('h.primary-only', 'tr. 23'), scope: 'bài phối hoà âm giai điệu ở chặng § 13' },
    { id: 'h.tonic-frame', name: 'Mở và kết bằng hợp âm chủ', statement: 'Mở và kết bằng hợp âm chủ', severity: 'hard', citations: cite('h.tonic-frame', 'tr. 23'), scope: 'bài phối hoà âm giai điệu' },
    { id: 'h.leap-same-chord', name: 'Giai điệu nhảy thì giữ hợp âm', statement: 'Giai điệu nhảy hơn quãng 3 thì giữ cùng một hợp âm', severity: 'hard', citations: cite('h.leap-same-chord', 'tr. 23'), scope: 'bài phối hoà âm giai điệu' },
    { id: 'h.repeat-change', name: 'Nốt lặp đổi hợp âm hoặc cách xếp', statement: 'Nốt giai điệu lặp lại thì đổi hợp âm hoặc đổi cách xếp', severity: 'soft', weight: 3, citations: cite('h.repeat-change', 'tr. 23'), scope: 'bài phối hoà âm giai điệu', caveat: 'Sách nêu như một điều phải làm; bộ máy coi là khuyến nghị để xếp hạng vì giữ nguyên cả hợp âm lẫn cách xếp không sinh lỗi dẫn giọng nào — cách hiểu của người biên soạn.' },
    { id: 'h.strong-weak', name: 'Không giữ hợp âm từ phách nhẹ sang phách mạnh', statement: 'Không đặt ở phách mạnh cùng hợp âm vừa có ở phách nhẹ trước đó', severity: 'soft', weight: 4, citations: cite('h.strong-weak', 'tr. 23'), scope: 'bài phối hoà âm giai điệu', caveat: 'Phách mạnh = phách đầu ô (nhịp 4/4: phách 3 coi là nhẹ) — cách hiểu của người biên soạn.' },
    { id: 'h.bass-fourths', name: 'Bass không nhảy quãng 4/5 hai lần cùng hướng', statement: 'Bass tránh hai lần liền nhảy quãng 4 (hay quãng 5) cùng hướng', severity: 'soft', weight: 2, citations: cite('h.bass-fourths', 'tr. 23'), scope: 'bè bass' },
    { id: 'h.leading-tone', name: 'Âm dẫn ở giai điệu đi lên', statement: 'Âm dẫn ở giai điệu phải đi lên (V → I)', severity: 'hard', citations: cite('h.leading-tone', 'tr. 24'), scope: 'V → I khi giai điệu giữ âm dẫn' },
    { id: 'h.no-v-iv', name: 'IV trước V, không ngược lại', statement: 'IV – V nối giai điệu và đặt IV trước V, không đặt V trước IV', severity: 'hard', citations: cite('h.no-v-iv', 'tr. 25'), scope: 'hai hợp âm liền nhau' },
  ]
  const permitted: PermittedSpec[] = [
    { id: 'p.final-tonic-no-fifth', statement: 'Hợp âm chủ cuối bài được thiếu quãng 5 (ba âm gốc) để âm dẫn ở bè giữa đi lên — CHƯA CÀI: miền tìm kiếm luôn nhân đôi âm gốc, nên "vô nghiệm" chỉ đúng trong miền đó', within: ['h.double-root'], scope: 'hợp âm cuối', citations: cite('p.final-tonic-no-fifth', 'tr. 24') },
  ]
  const ambiguous: AmbiguousSpec[] = [
    { id: 'a.iv-v-adjacent', question: 'tr. 23 nói "chưa đặt IV và V cạnh nhau", tr. 25 lại dạy IV – V: ở chặng § 13 có cấm IV – V không?', currentReading: 'cho IV – V (chặng tr. 25), cấm V – IV', affects: ['h.no-v-iv', 'h.primary-only'], citations: cite('a.iv-v-adjacent', 'tr. 23') },
  ]
  const exceptions: ExceptionSpec[] = []
  const definitions: Definition[] = [
    { id: 'def.perfect', statement: 'Quãng thuận hoàn toàn: đồng âm, 5 đúng, 8 đúng (và quãng kép)', citations: cite('def.perfect', null, 'định nghĩa dùng cho luật quãng song song'), data: { perfect: [[0, 'P'], [4, 'P']], imperfect: [[2, 'm'], [2, 'M'], [5, 'm'], [5, 'M']] } },
  ]
  return { id: HARMONY_RULEBOOK_ID, version: HARMONY_RULEBOOK_VERSION, domain: 'harmony', title: 'Hoà âm bốn bè — luật đầu (Rimsky-Korsakov)', rules, exceptions, definitions, permitted, ambiguous, evidence: ev }
}

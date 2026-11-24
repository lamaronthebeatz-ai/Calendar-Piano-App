import type { EntityId } from './ids'

/**
 * Kinds of relation. Every edge is stored once (from → to) and read from both ends: `out` names it from `from`,
 * `in` from `to`. Add a relation here and every page that walks the graph can show it.
 */
export const RELATIONS = {
  composed: { out: 'Sáng tác', in: 'Tác giả' },
  about: { out: 'Viết về', in: 'Bài viết về đối tượng này' },
  links: { out: 'Dẫn tới', in: 'Được nhắc trong bài' },
  cites: { out: 'Trích dẫn tài liệu', in: 'Được trích trong bài' },
  period: { out: 'Thuộc thời kỳ', in: 'Người thuộc thời kỳ' },
  genre: { out: 'Thể loại', in: 'Tác phẩm thuộc thể loại' },
  topic: { out: 'Chủ đề gắn với', in: 'Người gắn với chủ đề' },
  teacher: { out: 'Thầy của', in: 'Học với' },
  influence: { out: 'Ảnh hưởng tới', in: 'Chịu ảnh hưởng của' },
  view: { out: 'Trình bày quan điểm về', in: 'Quan điểm các trường phái' },
  explains: { out: 'Khái niệm nền', in: 'Phương pháp phân tích dùng khái niệm này' },
  mentions: { out: 'Nhắc tới', in: 'Được nhắc trong ghi chép' },
  claim: { out: 'Luận điểm', in: 'Thuộc đề tài' },
  claimAbout: { out: 'Bàn về', in: 'Luận điểm bàn về đối tượng này' },
  evidence: { out: 'Bằng chứng', in: 'Là bằng chứng cho' },
  from: { out: 'Lấy từ tài liệu', in: 'Bằng chứng dựa trên tài liệu này' },
  sameAs: { out: 'Cùng là tài liệu thư viện', in: 'Bản ghi của người dùng' },
  related: { out: 'Liên kết với', in: 'Được liên kết từ' },
  // UMK (src/umk/edges.ts): rulebooks, rules, glossary, analysis labels, reasoning domains
  states: { out: 'Nêu luật', in: 'Được nêu trong bài' },
  inRulebook: { out: 'Gồm mục', in: 'Thuộc sổ luật' },
  lifts: { out: 'Nới luật', in: 'Ngoại lệ' },
  within: { out: 'Cho phép trong luật', in: 'Điều được phép' },
  affects: { out: 'Câu hỏi mở về luật', in: 'Còn câu hỏi mở' },
  names: { out: 'Gọi tên bài', in: 'Thuật ngữ đa ngữ' },
  formalizes: { out: 'Hình thức hoá tri thức của', in: 'Được hình thức hoá ở' },
} as const satisfies Record<string, { out: string; in: string }>
export type Rel = keyof typeof RELATIONS

/**
 * Where an edge comes from. The graph never mixes them silently: each edge carries one, and the page shows it.
 *   library   — written into the library by its compiler, with the article's sources
 *   wikidata  — Wikidata statements gathered at build time (explore/works.json, relations.json)
 *   computed  — derived by the app (links read from text, analysis methods)
 *   research  — Lamar's own records: sources entered, claims, evidence, notes (opinion until verified)
 */
export type Provenance = 'library' | 'wikidata' | 'computed' | 'research'
export const PROVENANCE: Record<Provenance, { label: string; hint: string }> = {
  library: { label: 'Thư viện', hint: 'Người biên soạn ghi trong thư viện, có nguồn ở bài' },
  wikidata: { label: 'Wikidata', hint: 'Dữ kiện Wikidata thu lúc dựng app — chưa đối chiếu từng mục' },
  computed: { label: 'Máy tính', hint: 'App suy ra (liên kết trong văn bản, phương pháp phân tích) — không phải dữ kiện đã kiểm' },
  research: { label: 'Nghiên cứu', hint: 'Ghi chép, luận điểm và nguồn bạn tự nhập — nhận định nghiên cứu cho tới khi kiểm xong' },
}

export interface Edge {
  from: EntityId
  to: EntityId
  rel: Rel
  prov: Provenance
  /** pages cited (cites, from, excerpt) */
  page?: string
  /** a word on the edge: a quote, the school holding a view */
  note?: string
}

/** One edge as seen from `id`: the other end and the label in that direction. */
export interface Seen extends Edge {
  other: EntityId
  label: string
  dir: 'out' | 'in'
}

export function seenFrom(id: EntityId, e: Edge): Seen | null {
  if (e.from === id) return { ...e, other: e.to, label: RELATIONS[e.rel].out, dir: 'out' }
  if (e.to === id) return { ...e, other: e.from, label: RELATIONS[e.rel].in, dir: 'in' }
  return null
}

/** Edges seen from `id`, duplicates (same other end, relation and direction) merged with their pages joined. */
export function around(id: EntityId, edges: Edge[]): Seen[] {
  const out = new Map<string, Seen>()
  for (const e of edges) {
    const s = seenFrom(id, e)
    if (!s || s.other === id) continue
    const k = `${s.dir}|${s.rel}|${s.other}`
    const had = out.get(k)
    if (!had) out.set(k, s)
    else if (s.page && !had.page?.split(', ').includes(s.page)) had.page = had.page ? `${had.page}, ${s.page}` : s.page
  }
  return [...out.values()]
}

/** Groups by label, in the order relations are declared, outgoing before incoming. */
export function grouped(seen: Seen[]): { label: string; rel: Rel; dir: 'out' | 'in'; items: Seen[] }[] {
  const order = Object.keys(RELATIONS) as Rel[]
  const groups = new Map<string, { label: string; rel: Rel; dir: 'out' | 'in'; items: Seen[] }>()
  for (const s of seen) {
    const k = `${s.rel}|${s.dir}`
    if (!groups.has(k)) groups.set(k, { label: s.label, rel: s.rel, dir: s.dir, items: [] })
    groups.get(k)!.items.push(s)
  }
  return [...groups.values()].sort((a, b) => order.indexOf(a.rel) - order.indexOf(b.rel) || (a.dir === b.dir ? 0 : a.dir === 'out' ? -1 : 1))
}

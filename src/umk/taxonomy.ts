import type { EntityId } from '../features/knowledge/ids'
import { PARTS, RESOLVED } from '../features/musicology/taxonomy'
import { ARTICLES, CATEGORIES } from '../features/theory/articles'
import { TOPIC_GROUPS } from '../features/theory/topicGroups'
import type { DomainNode } from './schema'

/**
 * The UMK taxonomy is not a new tree. It joins the three classifications the app already keeps, each with its own
 * purpose, and lets a unit sit in several places (the relation is many-to-many):
 *  - the MUSICOLOGY MAP (features/musicology/taxonomy.ts): Adler's division — parts (historical, systematic, applied…)
 *    and 28 branches, each with a hub article carrying the field's sources. This is the academic classification.
 *  - the LIBRARY TOPICS (theory/categories.ts, topicGroups.ts): how lessons are shelved for learners.
 *  - the REASONING DOMAINS of UMRE: where knowledge is formalised (rulebooks, analysis modules), each tied to the
 *    branches whose knowledge it formalises.
 * No node is added without content behind it; fields the library has not written about are reported by `coverage`
 * against the list in the UMK brief, not invented as empty nodes.
 */
const a = (slug: string) => `a:${slug}` as EntityId
const d = (id: string) => `d:${id}` as EntityId

/** UMRE's reasoning domains and the map branches whose knowledge each formalises (from the modules' own scope). */
export const REASONING_DOMAINS: { id: string; title: string; en: string; branches: string[]; modules: string[] }[] = [
  { id: 'counterpoint', title: 'Phức điệu (giải, kiểm, chấm bài)', en: 'Counterpoint', branches: ['ly-thuyet'], modules: ['counterpoint.check', 'csp-counterpoint', 'umre.page-solver'] },
  { id: 'harmony', title: 'Hoà âm (phối bốn bè, phân tích điệu tính)', en: 'Harmony', branches: ['ly-thuyet', 'phan-tich'], modules: ['harmony.tonal', 'harmony.progression', 'csp-harmony', 'umre.harmonize'] },
  { id: 'melody', title: 'Giai điệu', en: 'Melody', branches: ['ly-thuyet', 'phan-tich'], modules: ['melody.line'] },
  { id: 'rhythm', title: 'Tiết tấu và nhịp', en: 'Rhythm & meter', branches: ['ly-thuyet', 'phan-tich'], modules: ['rhythm.meter'] },
  { id: 'texture', title: 'Kết cấu và tương tác bè', en: 'Texture', branches: ['phan-tich'], modules: ['texture.voices'] },
  { id: 'form', title: 'Hình thức', en: 'Form', branches: ['ly-thuyet', 'phan-tich'], modules: ['form.sections'] },
  { id: 'style', title: 'Đặc trưng phong cách (chỉ quan sát)', en: 'Style features', branches: ['phan-tich', 'tinh-toan'], modules: ['style.features'] },
]

let nodes: DomainNode[] | null = null
export function taxonomy(): readonly DomainNode[] {
  if (nodes) return nodes
  const out: DomainNode[] = []
  // 1. the musicology map
  out.push({ id: d('am-nhac-hoc'), title: 'Âm nhạc học', en: 'Musicology', parent: null, level: 'field', basis: a('am-nhac-hoc'), summary: 'Bản đồ âm nhạc học của thư viện theo sơ đồ Adler (1885): lịch sử, hệ thống, ứng dụng, thực hành.', members: [] })
  for (const [id, p] of Object.entries(PARTS)) out.push({ id: d(`part.${id}`), title: p.title, en: p.en, parent: d('am-nhac-hoc'), level: 'part', basis: null, summary: p.description, members: [] })
  for (const b of RESOLVED)
    out.push({ id: d(b.id), title: b.title, en: b.en, parent: d(`part.${b.part}`), level: 'branch', basis: a(b.hub), summary: b.summary, members: [...new Set(b.resolved.flatMap((r) => r.articles.map((x) => a(x.slug))))] })
  // 2. library topics (a learner's shelving; `also` places an article on several shelves)
  out.push({ id: d('thu-vien'), title: 'Thư viện học tập', en: 'Learning library', parent: null, level: 'field', basis: null, summary: 'Các mục của thư viện Lý thuyết, xếp theo nhóm cho người học.', members: [] })
  for (const g of TOPIC_GROUPS) out.push({ id: d(`group.${g.id}`), title: g.title, en: g.id, parent: d('thu-vien'), level: 'part', basis: null, summary: '', members: [] })
  for (const [id, c] of Object.entries(CATEGORIES)) {
    const group = TOPIC_GROUPS.find((g) => (g.ids as string[]).includes(id))
    out.push({ id: d(`topic.${id}`), title: c.title, en: id, parent: group ? d(`group.${group.id}`) : d('thu-vien'), level: 'branch', basis: null, summary: c.description, members: ARTICLES.filter((x) => x.category === id || x.also?.includes(id as never)).map((x) => a(x.slug)) })
  }
  // 3. reasoning domains
  out.push({ id: d('umre'), title: 'Lĩnh vực suy luận (UMRE)', en: 'Reasoning domains', parent: null, level: 'field', basis: null, summary: 'Nơi tri thức được hình thức hoá thành sổ luật hay mô-đun phân tích.', members: [] })
  for (const r of REASONING_DOMAINS) out.push({ id: d(`umre.${r.id}`), title: r.title, en: r.en, parent: d('umre'), level: 'reasoning', basis: null, summary: `Hình thức hoá tri thức của: ${r.branches.map((b) => RESOLVED.find((x) => x.id === b)?.title ?? b).join(', ')}. Mô-đun: ${r.modules.join(', ')}.`, members: r.branches.map(d) })
  return (nodes = out)
}

let byMember: Map<EntityId, EntityId[]> | null = null
/** Every node that lists the unit (many-to-many). */
export function domainsOf(id: EntityId): EntityId[] {
  if (!byMember) {
    byMember = new Map()
    for (const n of taxonomy()) for (const m of n.members) byMember.set(m, [...(byMember.get(m) ?? []), n.id])
  }
  return byMember.get(id) ?? []
}
export const node = (id: EntityId) => taxonomy().find((n) => n.id === id)
export const children = (id: EntityId | null) => taxonomy().filter((n) => n.parent === id)

/**
 * The fields named in the UMK brief, matched to the map's branches by the branch's own titles (English and
 * Vietnamese). A field with no branch is reported as not covered — a gap in the library, not a node to invent.
 */
export const BRIEF_FIELDS: { field: string; match: RegExp; mention?: RegExp }[] = [
  { field: 'Historical Musicology', match: /lịch sử âm nhạc|music history|historiography/i },
  { field: 'Systematic Musicology', match: /^part\.systematic$/ },
  { field: 'Ethnomusicology', match: /ethnomusicology|dân tộc nhạc học/i },
  { field: 'Comparative Musicology', match: /comparative/i, mention: /âm nhạc học so sánh|comparative musicology|vergleichende/i },
  { field: 'Popular Music Studies', match: /popular/i, mention: /âm nhạc đại chúng|popular music|nhạc phổ thông/i },
  { field: 'Applied Musicology', match: /^part\.applied$/ },
  { field: 'Music Sociology', match: /sociology|xã hội học/i },
  { field: 'Music Psychology / Cognition', match: /psychology|cognition|tâm lý/i },
  { field: 'Music Aesthetics / Philosophy', match: /aesthetics|philosophy|mỹ học/i },
  { field: 'Music Anthropology', match: /anthropology|nhân học/i, mention: /nhân học âm nhạc|anthropology of music/i },
  { field: 'Music Archaeology', match: /archaeolog|khảo cổ/i, mention: /khảo cổ âm nhạc|archaeomusicology|music archaeology/i },
  { field: 'Music Education', match: /education|sư phạm/i },
  { field: 'Performance Studies', match: /performance/i },
  { field: 'Music Technology / Digital Musicology', match: /computational|technology|công nghệ/i },
  { field: 'Music Analysis', match: /^music analysis$|phân tích âm nhạc/i },
  { field: 'Sources & Bibliography', match: /sources|paleography|nguồn/i },
  { field: 'Organology / Instrumentation', match: /organology|nhạc khí/i },
  { field: 'Acoustics', match: /acoustics|âm học/i },
  { field: 'Music Theory', match: /^music theory$|lý thuyết âm nhạc/i },
  { field: 'History of Music Theory', match: /history of music theory/i },
]
/** `nodes`: branches that ARE the field; `articles`: articles whose title or summary names it (no branch of its own). */
export function coverage(): { field: string; nodes: EntityId[]; articles: EntityId[] }[] {
  const t = taxonomy().filter((n) => n.level === 'branch' || n.level === 'part')
  return BRIEF_FIELDS.map((f) => {
    const nodes = t.filter((n) => f.match.test(n.en) || f.match.test(n.title) || f.match.test(n.id.slice(2))).map((n) => n.id)
    const articles = !nodes.length && f.mention ? ARTICLES.filter((x) => f.mention!.test(x.title) || f.mention!.test(x.summary)).map((x) => a(x.slug)) : []
    return { field: f.field, nodes, articles }
  })
}

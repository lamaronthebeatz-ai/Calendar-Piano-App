import type { ArticleMeta } from '../theory/wiki'

/**
 * One id for everything the platform knows, as "<prefix>:<local id>". The prefixes extend the second brain's
 * link grammar (brain/links.ts: a, n, p, s) so old keys stay valid ids:
 *   a:slug   library article (a person, a period, a genre, a concept… — the kind is read from the article)
 *   w:Q123   work (Wikidata id, explore/works.json)
 *   s:id     source of the library bibliography (build-time, content/sources.<h>.json)
 *   ms:id    source Lamar entered (knowledge store)
 *   p:id     research project · n:id brain note · c:id claim · e:id evidence (knowledge store)
 *   t:id     Grove dictionary entry
 *   m:id     analysis method (knowledge/methods.ts)
 */
export const PREFIXES = ['a', 'w', 's', 'ms', 'p', 'n', 'c', 'e', 't', 'm'] as const
export type Prefix = (typeof PREFIXES)[number]
export type EntityId = `${Prefix}:${string}`

export type EntityKind =
  | 'person'
  | 'work'
  | 'genre'
  | 'form'
  | 'school'
  | 'period'
  | 'concept'
  | 'instrument'
  | 'analysis'
  | 'method'
  | 'source'
  | 'project'
  | 'note'
  | 'claim'
  | 'evidence'
  | 'term'

export const KIND_LABEL: Record<EntityKind, string> = {
  person: 'Người',
  work: 'Tác phẩm',
  genre: 'Thể loại',
  form: 'Hình thức',
  school: 'Trường phái – trào lưu',
  period: 'Thời kỳ',
  concept: 'Khái niệm – lý thuyết',
  instrument: 'Nhạc cụ',
  analysis: 'Phân tích',
  method: 'Phương pháp phân tích',
  source: 'Tài liệu',
  project: 'Đề tài',
  note: 'Ghi chú',
  claim: 'Luận điểm',
  evidence: 'Bằng chứng',
  term: 'Mục từ điển',
}

export function parseId(id: string): { prefix: Prefix; local: string } | null {
  const i = id.indexOf(':')
  if (i < 1) return null
  const prefix = id.slice(0, i) as Prefix
  const local = id.slice(i + 1)
  return PREFIXES.includes(prefix) && local ? { prefix, local } : null
}

export const isId = (id: string): id is EntityId => parseId(id) !== null
export const makeId = <P extends Prefix>(prefix: P, local: string) => `${prefix}:${local}` as `${P}:${string}`

/** Schools and movements are articles whose slug says so (no category of their own in the library). */
const SCHOOL = /(^|-)(truong-phai|trao-luu|chu-nghia|phong-trao)(-|$)|^(an-tuong|bieu-hien|tan-co-dien|toi-gian|nhom-nam-nguoi|truong-phai-)/

/** What an article is about, from its index entry: categories are topical, so the slug settles the rest. */
export function articleKind(a: Pick<ArticleMeta, 'slug' | 'category' | 'person'>): EntityKind {
  if (a.person || a.category === 'composers' || a.category === 'pianists') return 'person'
  if (a.slug.startsWith('thoi-ky-')) return 'period'
  if (SCHOOL.test(a.slug)) return 'school'
  if (a.category === 'genres') return 'genre'
  if (a.category === 'form') return 'form'
  if (a.category === 'organology' || a.category === 'instrument') return 'instrument'
  if (a.category === 'analysis') return 'analysis'
  return 'concept'
}

const KIND_OF_PREFIX: Partial<Record<Prefix, EntityKind>> = { w: 'work', s: 'source', ms: 'source', p: 'project', n: 'note', c: 'claim', e: 'evidence', t: 'term', m: 'method' }

/** The kind of an id; articles need their index entry (`find`), unknown articles read as concepts. */
export function kindOf(id: EntityId, find: (slug: string) => Pick<ArticleMeta, 'slug' | 'category' | 'person'> | undefined): EntityKind {
  const p = parseId(id)!
  if (p.prefix === 'a') {
    const a = find(p.local)
    return a ? articleKind(a) : 'concept'
  }
  return KIND_OF_PREFIX[p.prefix]!
}

/** Where the object itself lives in the app (its own page), or null when only the graph shows it. */
export function hrefOf(id: EntityId): string | null {
  const { prefix, local } = parseId(id)!
  switch (prefix) {
    case 'a':
      return `/theory/${local}`
    case 's':
      return `/sources/${local}`
    case 'ms':
      return `/sources/cua-toi?ms=${encodeURIComponent(local)}`
    case 'p':
      return `/research/${local}`
    case 'n':
      return `/brain/${local}`
    case 't':
      return `/terms?g=${encodeURIComponent(local)}`
    default:
      return null
  }
}

export const graphHref = (id: EntityId) => `/graph?id=${encodeURIComponent(id)}`

/** Brain node keys (a:, n:, p:, s:) are entity ids as they are. */
export const fromBrainKey = (k: string) => k as EntityId

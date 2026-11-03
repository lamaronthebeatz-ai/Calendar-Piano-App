/**
 * What kind of article this is, so a reader knows what to expect of its sources: a sourced synthesis, one whose
 * only source is Wikipedia, a page generated from data rows, the compiler's own exercises, or not yet sourced.
 * Shown under each article title and counted on /sources/suc-khoe.
 */
export type KindId = 'tong-hop' | 'wiki' | 'du-lieu' | 'bai-tap' | 'chua-nguon'

export const KIND_LABELS: Record<KindId, string> = {
  'tong-hop': 'Tổng hợp có nguồn',
  wiki: 'Chỉ dựa trên Wikipedia',
  'du-lieu': 'Trang sinh từ dữ liệu',
  'bai-tap': 'Bài tập do người biên soạn soạn',
  'chua-nguon': 'Chưa có nguồn',
}

/** Exercise series written by the compiler (licks, sight-singing lessons, children's lessons). */
const OWN = /^(jazz-licks-|xuong-am-cromatic-|tre-em-)/

export function kindOf(a: { slug: string; person?: boolean }, sources: string[] | undefined): KindId {
  if (OWN.test(a.slug)) return 'bai-tap'
  if (a.person) return 'du-lieu'
  if (!sources?.length) return 'chua-nguon'
  if (sources.every((s) => s.startsWith('wp-') || s.startsWith('wikipedia-'))) return 'wiki'
  return 'tong-hop'
}

export const articleKind = (a: { slug: string; person?: boolean; sources?: string[] }) => {
  const id = kindOf(a, a.sources)
  return { id, label: KIND_LABELS[id] }
}

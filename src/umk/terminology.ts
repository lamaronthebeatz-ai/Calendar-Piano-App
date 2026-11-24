import type { EntityId } from '../features/knowledge/ids'
import { findArticle, normalize } from '../features/theory/wiki'
import { glossary } from './provenance'
import type { KnowledgeGap, Term, TermForm } from './schema'
import { domainsOf } from './taxonomy'

/**
 * The terminology system over the glossary (terms.json, x:) and the library's article names and aliases. Forms keep
 * their relation to the term — a glossary variant, an article alias, a foreign name — and are NEVER merged into one
 * "synonym" set: "âm giai giảm" listed under the octatonic scale is a variant the glossary records, not a claim that
 * the two words always mean the same. Where one written form points to two different terms or articles, that is
 * reported as a gap for a person to settle, not resolved by the machine.
 *
 * The Grove dictionary (1904–1910, t:) stays a separate, historical source: its definitions are of their time and
 * are cited as such, not folded into present-day terminology.
 */
type Raw = { id: string; vi: string; variants?: string[]; viwiki?: string; category?: string; en?: string; ru?: string; de?: string; fr?: string; it?: string; qid?: string; def?: string }
const LANGS = ['en', 'ru', 'de', 'fr', 'it'] as const

// the glossary file is fetched once (the same hashed file /terms reads — not bundled twice); tests hand it in
let raw: Raw[] | null = null
let loading: Promise<void> | null = null
export const useGlossaryData = (data: unknown[]) => {
  raw = data as Raw[]
  terms = null
}
export function loadGlossary(): Promise<void> {
  if (raw) return Promise.resolve()
  return (loading ??= import('../features/terms/terms.json?url')
    .then((m) => fetch(m.default))
    .then((r) => r.json())
    .then((d: unknown[]) => useGlossaryData(d))
    .catch((e) => {
      loading = null
      throw e
    }))
}
export const glossaryLoaded = () => !!raw

let terms: Term[] | null = null
/** The glossary as terms (empty until `loadGlossary` resolves). */
export function glossaryTerms(): readonly Term[] {
  if (terms) return terms
  if (!raw) return []
  terms = raw.map((t) => {
    const art = findArticle(t.id)?.slug === t.id ? findArticle(t.id) : findArticle(t.vi)
    const article = art ? (`a:${art.slug}` as EntityId) : null
    const forms: TermForm[] = [
      { text: t.vi, lang: 'vi', relation: 'preferred' },
      // build.py appends the Vietnamese label of the matched Wikidata item to the variants: that form is external data
      // naming the Wikidata concept (often broader, e.g. "Âm nhạc học" for the history of the discipline), unless the
      // compiler also gave it as an alias of the article
      ...(t.variants ?? []).map((v) => ({ text: v, lang: 'vi', relation: v === t.viwiki && !art?.aliases?.some((x) => normalize(x) === normalize(v)) ? ('wikidata-label' as const) : ('glossary-variant' as const) })),
      ...LANGS.filter((l) => t[l]).map((l) => ({ text: t[l]!, lang: l, relation: 'foreign' as const })),
      ...(art ? [art.title, ...(art.aliases ?? [])].filter((x) => normalize(x) !== normalize(t.vi)).map((x) => ({ text: x, lang: 'vi', relation: 'article-alias' as const })) : []),
    ]
    return {
      id: `x:${t.id}` as EntityId, preferred: t.vi, forms, ...(t.def ? { definition: t.def } : {}), article,
      domains: article ? domainsOf(article) : [], ...(t.qid ? { wikidata: t.qid } : {}), provenance: glossary(),
    }
  })
  return terms
}
export const term = (id: EntityId) => glossaryTerms().find((t) => t.id === id)
/** The glossary term that names an article, if any. */
export const termOfArticle = (id: EntityId) => glossaryTerms().find((t) => t.article === id)

/** Find terms by any written form, in any language (accents and case ignored). */
export function findTerms(text: string): { term: Term; form: TermForm }[] {
  const k = normalize(text)
  if (!k) return []
  const out: { term: Term; form: TermForm }[] = []
  for (const t of glossaryTerms()) {
    const f = t.forms.find((x) => normalize(x.text) === k) ?? t.forms.find((x) => normalize(x.text).includes(k))
    if (f) out.push({ term: t, form: f })
  }
  return out.sort((a, b) => Number(normalize(b.form.text) === k) - Number(normalize(a.form.text) === k))
}

/**
 * Written forms that point two ways: the same Vietnamese form listed for two glossary terms, or a glossary variant
 * that the library's link resolver sends to a different article than the term's own. Each is a question for the
 * compiler (often a real distinction: a near-synonym, a narrower term), never merged automatically.
 */
export function termConflicts(): KnowledgeGap[] {
  const out: KnowledgeGap[] = []
  const byForm = new Map<string, Set<string>>()
  const shown = new Map<string, string>()
  for (const t of glossaryTerms())
    for (const f of t.forms.filter((x) => x.lang === 'vi' && x.relation !== 'article-alias')) {
      // tone marks make different words ("hòa âm" harmony, "họa âm" harmonic): compare with them, only the two
      // spellings of one tone ("hoà"/"hòa") count as the same form
      const k = toneKey(f.text)
      byForm.set(k, new Set([...(byForm.get(k) ?? []), t.id]))
      shown.set(k, shown.get(k) ?? f.text)
    }
  // ids keep the accent-free key they had in 1.0.0, so decisions recorded against them stay attached
  for (const [form, ids] of byForm)
    if (ids.size > 1) out.push({ id: `term-shared:${normalize(form)}`, kind: 'ambiguous-term', about: [...ids][0] as EntityId, text: `Dạng viết "${shown.get(form)}" được ghi cho ${ids.size} thuật ngữ: ${[...ids].join(', ')}`, origin: 'umk' })
  for (const t of glossaryTerms()) {
    if (!t.article) continue
    for (const f of t.forms.filter((x) => x.relation === 'glossary-variant' || x.relation === 'wikidata-label')) {
      const other = findArticle(f.text)
      if (other && `a:${other.slug}` !== t.article)
        out.push({ id: `term-points-elsewhere:${t.id}:${normalize(f.text)}`, kind: 'ambiguous-term', about: t.id, text: `Biến thể "${f.text}" của ${t.preferred} lại mở bài "${other.title}" (a:${other.slug}) — hai khái niệm khác nhau hay một?`, origin: 'umk' })
    }
  }
  return out
}

/** Old and new tone placement in -oa/-oe/-uy ("hoà" / "hòa") are one spelling; the tone itself is kept. */
const TONES = 'àáảãạ'
export function toneKey(text: string) {
  let s = text.normalize('NFC').toLowerCase().trim().replace(/\s+/g, ' ')
  // "oà" → "òa", "oè" → "òe", "uỳ" → "ùy": move the tone onto the first vowel (the old placement), as one key
  s = s.replace(/o([àáảãạ])/g, (_, v: string) => `${'òóỏõọ'[TONES.indexOf(v)]}a`)
  s = s.replace(/o([èéẻẽẹ])/g, (_, v: string) => `${'òóỏõọ'['èéẻẽẹ'.indexOf(v)]}e`)
  s = s.replace(/u([ỳýỷỹỵ])/g, (_, v: string) => `${'ùúủũụ'['ỳýỷỹỵ'.indexOf(v)]}y`)
  return s
}

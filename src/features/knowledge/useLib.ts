import { citeSource } from '../sources/cite'
import { CURATED_BY_ID, useBibliography, type Source } from '../sources/data'
import { citeMine } from './cite'
import { parseId } from './ids'
import type { KnowledgeData } from './model'

/** Whether a library source id exists, before and after the bibliography has loaded. */
export function useLibHas() {
  const { data } = useBibliography()
  return (id: string) => CURATED_BY_ID.has(id) || !!data?.byId.has(id)
}

/** Chicago citation of an evidence's source, with the page — from the record itself, nothing added. */
export function citeOf(source: string, k: KnowledgeData, lib: Map<string, Source> | undefined, page?: string) {
  const p = parseId(source)
  if (p?.prefix === 'ms') {
    const s = k.sources.find((x) => x.id === p.local)
    return s ? citeMine(s, 'chicago', page) : null
  }
  if (p?.prefix === 's') {
    const s = lib?.get(p.local) ?? (CURATED_BY_ID.has(p.local) ? ({ ...CURATED_BY_ID.get(p.local)!, labels: [], urls: [], uses: [] } as Source) : undefined)
    return s ? `${citeSource(s, 'chicago').replace(/\.$/, '')}${page ? `, tr. ${page}` : ''}.` : null
  }
  return null
}


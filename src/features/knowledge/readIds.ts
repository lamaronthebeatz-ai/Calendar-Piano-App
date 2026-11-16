import { findArticle } from '../theory/wiki'
import { isId, makeId, type EntityId } from './ids'

/** "a:slug", "w:Q1", an article title or slug → entity ids; what cannot be resolved is reported, not dropped silently. */
export function readIds(text: string): { ids: EntityId[]; unknown: string[] } {
  const ids: EntityId[] = []
  const unknown: string[] = []
  for (const part of text.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean)) {
    if (isId(part)) ids.push(part)
    else {
      const a = findArticle(part)
      if (a) ids.push(makeId('a', a.slug))
      else unknown.push(part)
    }
  }
  return { ids: [...new Set(ids)], unknown }
}

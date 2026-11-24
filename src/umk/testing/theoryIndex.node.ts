import { readFileSync } from 'node:fs'
import { ARTICLES } from '../../features/theory/articles.source'
import type { ArticleMeta } from '../../features/theory/wiki'

/**
 * `virtual:theory-index` for unit tests (vitest.config.ts alias): the same library the build indexes, read straight
 * from the content modules, so tests run on the real articles instead of samples. Mirrors what the build keeps of an
 * article (scripts/theory-content.ts `build`): everything but body and references, plus the glossary's foreign names.
 * Not shipped: the app always gets the built index.
 */
const terms = JSON.parse(readFileSync('src/features/terms/terms.json', 'utf8')) as Record<string, string>[]
const xl = new Map(terms.map((t) => [t.id, ['en', 'ru', 'de', 'fr', 'it'].filter((l) => t[l]).map((l) => `${l}:${t[l]}`).join('|')]))

export const META: ArticleMeta[] = ARTICLES.map(({ body, refs: _refs, ...a }) => ({
  ...a,
  ...(xl.get(a.slug) ? { xl: xl.get(a.slug) } : {}),
  h: 'node',
  words: body.split(/\s+/).length,
  figures: body.match(/^\s*::/gm)?.length ?? 0,
}))
/** article bodies, for tests that read links (the app fetches them per article) */
export const BODIES = new Map(ARTICLES.map((a) => [a.slug, a.body]))
export const SEARCH = {}
export const LINK_COUNT = 0
export const SOURCES_FILE = ''
export const SOURCE_COUNT = 0
export const PEOPLE_FILE = ''

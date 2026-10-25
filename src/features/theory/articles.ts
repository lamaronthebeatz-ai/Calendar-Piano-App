import { LINK_COUNT, META, SEARCH_FILE } from 'virtual:theory-index'
import type { ArticleMeta } from './wiki'

export { CATEGORIES } from './categories'

/**
 * The library's index: every article without its text, which is fetched when it is read (see body.ts).
 * Built from articles.source.ts by scripts/theory-content.ts.
 */
export const ARTICLES = META as ArticleMeta[]
export { LINK_COUNT, SEARCH_FILE }

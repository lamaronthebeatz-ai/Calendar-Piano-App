/** The theory library's index, generated at build time by scripts/theory-content.ts. */
declare module 'virtual:theory-index' {
  export const META: unknown[]
  /** first two letters of a word → hash of its full-text shard (content/search/<xx>.<hash>.json) */
  export const SEARCH: Record<string, string>
  export const LINK_COUNT: number
  /** content/ name of the bibliography file */
  export const SOURCES_FILE: string
  export const SOURCE_COUNT: number
  /** content/ name of the people file (knowledge graph) */
  export const PEOPLE_FILE: string
}

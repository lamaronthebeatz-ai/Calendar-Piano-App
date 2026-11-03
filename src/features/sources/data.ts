import { useEffect, useState } from 'react'
import { SOURCES_FILE } from '../theory/articles'
import { CURATED, type CuratedSource } from './curated'

/** One entry of the bibliography built by scripts/theory-content.ts (content/sources.<h>.json). */
export interface Source extends Partial<Omit<CuratedSource, 'kind'>> {
  id: string
  kind: string
  /** the labels the articles give it (up to three) */
  labels: string[]
  urls: string[]
  /** articles citing it */
  uses: string[]
  /** pages cited inline ([^id, tr. n]), by article */
  pages?: Record<string, string[]>
}

export interface OpenItem {
  slug: string
  text: string
  /** `::verify` written on purpose, or a sentence that says something is unverified */
  kind: 'verify' | 'text'
}

export interface Bibliography {
  sources: Source[]
  byId: Map<string, Source>
  open: OpenItem[]
}

let load: Promise<Bibliography> | null = null
/** Fetched once, on the first page that needs it (about 240 KB compressed). */
export function loadBibliography() {
  return (load ??= fetch(`${import.meta.env.BASE_URL}content/${SOURCES_FILE}`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((d: { sources: Source[]; open: OpenItem[] }) => ({ ...d, byId: new Map(d.sources.map((s) => [s.id, s])) }))
    .catch((e) => {
      load = null
      throw e
    }))
}

export function useBibliography() {
  const [state, setState] = useState<{ data?: Bibliography; error?: boolean }>({})
  useEffect(() => {
    let live = true
    loadBibliography().then(
      (data) => live && setState({ data }),
      () => live && setState({ error: true }),
    )
    return () => {
      live = false
    }
  }, [])
  return state
}

/** Curated works, for inline citations without fetching the whole bibliography. */
export const CURATED_BY_ID = new Map(CURATED.map((c) => [c.id, c]))

/** "Sposobin 1984" — author's family name and year, for inline citations. */
export const shortCite = (c: Pick<CuratedSource, 'authors' | 'year'>) => `${c.authors[0]?.split(',')[0] ?? ''}${c.year ? ` ${c.year}` : ''}`.trim()

/** Display name of a source: the curated title, else the first label the articles give. */
export const sourceTitle = (s: Source) => s.title ?? s.labels[0] ?? s.id

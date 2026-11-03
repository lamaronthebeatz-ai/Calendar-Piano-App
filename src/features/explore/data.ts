import { useEffect, useState } from 'react'
import { PEOPLE_FILE } from '../theory/articles'
import worksUrl from './works.json?url'

/** Data of the knowledge graph, shared by /explore and the research desk. */
export interface Person {
  id: string
  name: string
  years: string
  born?: number
  died?: number
  country: string
  role: 'composer' | 'pianist'
  period: string
  group?: string
  works: string[]
  topics: string[]
  page: boolean
}
export interface Period {
  id: string
  title: string
  years: string
  role: string
}
export interface People {
  people: Person[]
  periods: Period[]
}

export interface Work {
  id: string
  by: string
  en: string
  vi?: string
  types?: string[]
  /** genre group read from the title / types (KINDS in the script) */
  kind?: string
  piano?: boolean
  key?: string
  year?: number
  to?: number
  /** year of publication (no composition date on Wikidata) */
  pub?: boolean
  cat?: string[]
  /** library article about this work */
  article?: string
}

export const NOTE: Record<string, string> = { C: 'Đô', D: 'Rê', E: 'Mi', F: 'Fa', G: 'Sol', A: 'La', B: 'Si' }
/** "C-sharp minor" → "Đô thăng thứ" */
export const keyVi = (k: string) => {
  const m = /^([A-G])(?:-(sharp|flat))? (major|minor)$/.exec(k)
  return m ? `${NOTE[m[1]]}${m[2] ? (m[2] === 'sharp' ? ' thăng' : ' giáng') : ''} ${m[3] === 'major' ? 'trưởng' : 'thứ'}` : k
}

let worksLoad: Promise<Work[]> | null = null
export const loadWorks = () =>
  (worksLoad ??= fetch(worksUrl)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .catch((e) => {
      worksLoad = null
      throw e
    }))
export function useWorks() {
  const [works, setWorks] = useState<Work[] | null>(null)
  useEffect(() => {
    let live = true
    loadWorks().then((w) => live && setWorks(w), () => {})
    return () => {
      live = false
    }
  }, [])
  return works
}

export const workYear = (w: Work) => (w.year ? `${w.pub ? 'xb. ' : ''}${w.year}${w.to ? ` – ${w.to}` : ''}` : '')

let load: Promise<People> | null = null
export const loadPeople = () =>
  (load ??= fetch(`${import.meta.env.BASE_URL}content/${PEOPLE_FILE}`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .catch((e) => {
      load = null
      throw e
    }))

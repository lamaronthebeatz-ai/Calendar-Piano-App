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

/** [id when in the library, name, Wikidata id] (scripts/relations/build.py). */
export type Link = [string | null, string, string]
export type Relations = Record<string, { teachers?: Link[]; students?: Link[]; influences?: Link[] }>

let relLoad: Promise<Relations> | null = null
export const loadRelations = () =>
  (relLoad ??= import('./relations.json?url')
    .then((m) => fetch(m.default))
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .catch((e) => {
      relLoad = null
      throw e
    }))

/** The longest teacher → student chains among people of the library, one per head, longest first. */
export function chains(rel: Relations, people: Person[], limit = 10): Person[][] {
  const byId = new Map(people.map((p) => [p.id, p]))
  const next = new Map<string, Set<string>>()
  const add = (t: string, s: string) => byId.has(t) && byId.has(s) && t !== s && (next.get(t) ?? next.set(t, new Set()).get(t)!).add(s)
  for (const [pid, r] of Object.entries(rel)) {
    for (const [t] of r.teachers ?? []) if (t) add(t, pid)
    for (const [s] of r.students ?? []) if (s) add(pid, s)
  }
  const memo = new Map<string, string[]>()
  const longest = (id: string, seen: Set<string>): string[] => {
    if (memo.has(id)) return memo.get(id)!
    let best: string[] = []
    for (const s of next.get(id) ?? []) {
      if (seen.has(s)) continue // a cycle in the data: stop there
      const c = longest(s, new Set([...seen, s]))
      if (c.length > best.length) best = c
    }
    const out = [id, ...best]
    memo.set(id, out)
    return out
  }
  const all = [...next.keys()].map((id) => longest(id, new Set([id]))).filter((c) => c.length >= 3)
  // keep maximal chains: drop one that is the tail of a longer one already kept
  all.sort((a, b) => b.length - a.length)
  const kept: string[][] = []
  for (const c of all) if (!kept.some((k) => k.join('>').endsWith(c.join('>')) || k.join('>').includes(c.join('>')))) kept.push(c)
  return kept.slice(0, limit).map((c) => c.map((id) => byId.get(id)!))
}

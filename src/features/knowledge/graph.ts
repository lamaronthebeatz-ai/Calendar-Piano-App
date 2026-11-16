import type { Bibliography } from '../sources/data'
import type { People, Person, Relations, Work } from '../explore/data'
import type { Project } from '../research/store'
import { SCHOOLS } from '../terms/schools'
import { edgesOf as brainEdges, type NodeKey } from '../brain/links'
import { makeId, type EntityId } from './ids'
import type { KnowledgeData } from './model'
import { METHODS, methodSlugs } from './methods'
import type { Edge } from './relations'

/**
 * The knowledge graph, built in the browser from data the app already has — no graph server. Each builder reads one
 * dataset and says where its edges come from (Provenance). Article ↔ article links come from the article's own text
 * and are added when that article is open (articleEdges); everything else is indexed once.
 */

/** Period ids of composers.ts → the library's period article. */
export const PERIOD_ARTICLE: Record<string, string> = {
  med: 'thoi-ky-trung-co',
  ren: 'thoi-ky-phuc-hung',
  bar: 'thoi-ky-baroque',
  cla: 'thoi-ky-co-dien',
  rom: 'thoi-ky-lang-man',
  m20: 'thoi-ky-the-ky-20',
}

/** Genre groups of works.json (scripts KINDS) → the library's genre article. Groups without one stay unlinked. */
export const GENRE_ARTICLE: Record<string, string> = {
  opera: 'opera',
  symphony: 'giao-huong',
  'symphonic poem': 'tho-giao-huong',
  ballet: 'ballet',
  quartet: 'nhac-thinh-phong',
  sonata: 'sonata-the-loai',
  mass: 'thanh-le-va-requiem',
  variations: 'bien-tau',
  fugue: 'fugue',
  oratorio: 'oratorio-cantata-passion',
  cantata: 'oratorio-cantata-passion',
  character: 'tieu-pham-piano',
}

const a = (slug: string) => makeId('a', slug)

export function peopleEdges(people: People): Edge[] {
  const out: Edge[] = []
  for (const p of people.people) {
    const period = PERIOD_ARTICLE[p.period]
    if (period) out.push({ from: a(p.id), to: a(period), rel: 'period', prov: 'library' })
    for (const t of p.topics) out.push({ from: a(p.id), to: a(t), rel: 'topic', prov: 'library' })
  }
  return out
}

export function workEdges(works: Work[]): Edge[] {
  const out: Edge[] = []
  for (const w of works) {
    const id = makeId('w', w.id)
    out.push({ from: a(w.by), to: id, rel: 'composed', prov: 'wikidata' })
    if (w.article) out.push({ from: a(w.article), to: id, rel: 'about', prov: 'library' })
    const g = w.kind && GENRE_ARTICLE[w.kind]
    // the genre group is read from the title and Wikidata types by the build script: computed, not a statement
    if (g) out.push({ from: id, to: a(g), rel: 'genre', prov: 'computed' })
  }
  return out
}

/** Teachers, students and influences between people of the library (people outside it have no node). */
export function lineageEdges(rel: Relations): Edge[] {
  const out: Edge[] = []
  for (const [who, r] of Object.entries(rel)) {
    for (const [id] of r.teachers ?? []) if (id) out.push({ from: a(id), to: a(who), rel: 'teacher', prov: 'wikidata' })
    for (const [id] of r.students ?? []) if (id) out.push({ from: a(who), to: a(id), rel: 'teacher', prov: 'wikidata' })
    // P737 "influenced by": the listed person influenced `who`
    for (const [id] of r.influences ?? []) if (id) out.push({ from: a(id), to: a(who), rel: 'influence', prov: 'wikidata' })
  }
  return out
}

/** Articles citing each source of the bibliography, with the pages cited. */
export function bibliographyEdges(bib: Pick<Bibliography, 'sources'>): Edge[] {
  return bib.sources.flatMap((s) => s.uses.map((slug): Edge => ({ from: a(slug), to: makeId('s', s.id), rel: 'cites', prov: 'library', page: s.pages?.[slug]?.join(', ') })))
}

export function schoolEdges(): Edge[] {
  return Object.entries(SCHOOLS).flatMap(([concept, e]) => e.views.map((v): Edge => ({ from: a(v.from), to: a(concept), rel: 'view', prov: 'library', note: v.school })))
}

export function methodEdges(): Edge[] {
  return METHODS.flatMap((m) => [...new Set(methodSlugs(m))].map((slug): Edge => ({ from: makeId('m', m.id), to: a(slug), rel: 'explains', prov: 'computed' })))
}

/** One article's own links and backlinks (from its text file). */
export function articleEdges(slug: string, text: { body?: string; backlinks?: string[] }, resolve: (ref: string) => string | undefined): Edge[] {
  const out: Edge[] = []
  for (const m of text.body?.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g) ?? []) {
    const to = resolve(m[1])
    if (to && to !== slug) out.push({ from: a(slug), to: a(to), rel: 'links', prov: 'library' })
  }
  for (const b of text.backlinks ?? []) out.push({ from: a(b), to: a(slug), rel: 'links', prov: 'library' })
  return out
}

/** Lamar's own records: claims, evidence, sources, links, projects and notes. All of it is research, not fact. */
export function userEdges(k: KnowledgeData, projects: Pick<Project, 'id' | 'question' | 'draft' | 'sources' | 'articles' | 'people' | 'works'>[], notes: { id: string; title: string; body: string }[], resolve: (ref: string) => string | undefined): Edge[] {
  const out: Edge[] = []
  for (const c of k.claims) {
    const id = makeId('c', c.id)
    if (c.project) out.push({ from: makeId('p', c.project), to: id, rel: 'claim', prov: 'research' })
    for (const x of c.about) out.push({ from: id, to: x, rel: 'claimAbout', prov: 'research' })
  }
  for (const e of k.evidence) {
    const id = makeId('e', e.id)
    out.push({ from: makeId('c', e.claim), to: id, rel: 'evidence', prov: 'research', note: e.stance })
    out.push({ from: id, to: e.source, rel: 'from', prov: 'research', page: e.page })
  }
  for (const s of k.sources) {
    const id = makeId('ms', s.id)
    if (s.libRef) out.push({ from: id, to: makeId('s', s.libRef), rel: 'sameAs', prov: 'research' })
    for (const x of s.about) out.push({ from: id, to: x, rel: 'related', prov: 'research' })
  }
  for (const l of k.links) out.push({ from: l.from, to: l.to, rel: 'related', prov: 'research', note: l.note })
  for (const p of projects) {
    const id = makeId('p', p.id)
    for (const s of p.sources) out.push({ from: id, to: makeId('s', s), rel: 'cites', prov: 'research' })
    for (const x of p.articles) out.push({ from: id, to: a(x), rel: 'mentions', prov: 'research' })
    for (const x of p.people ?? []) out.push({ from: id, to: a(x), rel: 'mentions', prov: 'research' })
    for (const x of p.works ?? []) out.push({ from: id, to: makeId('w', x), rel: 'mentions', prov: 'research' })
  }
  const docs = [...notes.map((n) => ({ key: `n:${n.id}` as NodeKey, text: `${n.title}\n${n.body}` })), ...projects.map((p) => ({ key: `p:${p.id}` as NodeKey, text: `${p.question}\n${p.draft}` }))]
  for (const e of brainEdges(docs, resolve)) out.push({ from: e.from as EntityId, to: e.to as EntityId, rel: 'mentions', prov: 'research' })
  return out
}

/** Edges indexed by both ends. */
export class EdgeIndex {
  private by = new Map<string, Edge[]>()
  add(edges: Edge[]) {
    for (const e of edges)
      for (const end of e.from === e.to ? [e.from] : [e.from, e.to]) {
        const list = this.by.get(end)
        if (list) list.push(e)
        else this.by.set(end, [e])
      }
    return this
  }
  of(id: EntityId): Edge[] {
    return this.by.get(id) ?? []
  }
}

/** A person record by id, for labels of people without an article. */
export const personIndex = (people: People) => new Map<string, Person>(people.people.map((p) => [p.id, p]))

import { describe, expect, it } from 'vitest'
import { articleKind, hrefOf, isId, kindOf, parseId } from './ids'
import { doiOf, isbnOk, mergeData, migrate, readDump, type Claim, type Evidence, type KnowledgeData, type MySource } from './model'
import { checkClaim, uncitedParagraphs, unsupported, worst } from './check'
import { around, grouped } from './relations'
import { articleEdges, bibliographyEdges, EdgeIndex, lineageEdges, methodEdges, peopleEdges, userEdges, workEdges } from './graph'
import { citeMine } from './cite'

const src = (o: Partial<MySource> = {}): MySource => ({ id: 'x1', v: 1, type: 'book', authors: ['Tác giả, Thử'], title: 'Sách mẫu kiểm thử', role: 'secondary', verification: 'unverified', about: [], created: 1, updated: 1, ...o })
const claim = (o: Partial<Claim> = {}): Claim => ({ id: 'c1', v: 1, text: 'Một luận điểm', about: [], status: 'open', created: 1, updated: 1, ...o })
const ev = (o: Partial<Evidence> = {}): Evidence => ({ id: 'e1', v: 1, claim: 'c1', stance: 'supports', source: 'ms:x1', page: '12', checked: true, created: 1, ...o })
const data = (o: Partial<KnowledgeData> = {}): KnowledgeData => ({ sources: [], excerpts: [], claims: [], evidence: [], links: [], ...o })
const lib = (id: string) => id === 'grove-1904'

describe('ids', () => {
  it('parses every prefix and keeps brain keys valid', () => {
    expect(parseId('a:fugue')).toEqual({ prefix: 'a', local: 'fugue' })
    expect(parseId('ms:abc')).toEqual({ prefix: 'ms', local: 'abc' })
    expect(isId('n:123')).toBe(true)
    expect(isId('zz:1')).toBe(false)
    expect(isId('a:')).toBe(false)
  })
  it('reads the kind of an article from its index entry', () => {
    expect(articleKind({ slug: 'bach', category: 'composers' })).toBe('person')
    expect(articleKind({ slug: 'thoi-ky-baroque', category: 'modern' })).toBe('period')
    expect(articleKind({ slug: 'thoi-ky-trung-co', category: 'composers' })).toBe('period')
    expect(articleKind({ slug: 'opera', category: 'genres' })).toBe('genre')
    expect(articleKind({ slug: 'hinh-thuc-sonata', category: 'form' })).toBe('form')
    expect(articleKind({ slug: 'violin', category: 'organology' })).toBe('instrument')
    expect(articleKind({ slug: 'cau-ket', category: 'harmony' })).toBe('concept')
    expect(articleKind({ slug: 'truong-phai-viennese', category: 'modern' })).toBe('school')
    expect(kindOf('w:Q1', () => undefined)).toBe('work')
    expect(kindOf('ms:1', () => undefined)).toBe('source')
  })
  it('points each id at its own page', () => {
    expect(hrefOf('a:fugue')).toBe('/theory/fugue')
    expect(hrefOf('ms:x')).toBe('/sources/cua-toi?ms=x')
    expect(hrefOf('w:Q1')).toBeNull()
  })
})

describe('model', () => {
  it('migrates records without a schema version and drops what is not a record', () => {
    expect(migrate('sources', { id: 'a', title: 'T' })).toMatchObject({ v: 1, authors: [], about: [], type: 'book', role: 'secondary', verification: 'unverified' })
    expect(migrate('sources', { id: 'a' })).toBeNull()
    expect(migrate('claims', { id: 'c', text: 't', status: 'weird' })).toMatchObject({ status: 'open', about: [] })
    expect(migrate('evidence', { id: 'e', claim: 'c', source: 's:x', checked: 'yes' })).toMatchObject({ checked: false, stance: 'supports' })
  })
  it('keeps records written by a newer build untouched', () => {
    expect(migrate('claims', { id: 'c', text: 't', v: 99, extra: 1 })).toMatchObject({ v: 99, extra: 1 })
  })
  it('reads a dump table by table and merges by last edit', () => {
    const d = readDump({ sources: [{ id: 'a', title: 'A', updated: 5 }, { bad: 1 }], claims: 'nope' })
    expect(d.sources).toHaveLength(1)
    expect(d.claims).toHaveLength(0)
    const m = mergeData(data({ sources: [src({ id: 'a', title: 'old', updated: 1 }), src({ id: 'b' })] }), d)
    expect(m.sources.map((s) => s.title).sort()).toEqual(['A', 'Sách mẫu kiểm thử'])
  })
  it('checks ISBN digits and DOI syntax without inventing either', () => {
    expect(isbnOk('978-0-393-31712-1')).toBe(true)
    expect(isbnOk('0-393-31712-6')).toBe(false)
    expect(isbnOk('0306406152')).toBe(true)
    expect(doiOf('https://doi.org/10.1000/xyz123')).toBe('10.1000/xyz123')
    expect(doiOf('not a doi')).toBeNull()
  })
})

describe('claim checks', () => {
  it('flags a claim with no evidence as unsourced', () => {
    const d = data({ claims: [claim()] })
    expect(checkClaim(claim(), d, lib).map((i) => i.code)).toEqual(['no-evidence'])
    expect(unsupported(d, lib)).toHaveLength(1)
  })
  it('walks the chain claim → evidence → source → page', () => {
    const d = data({ claims: [claim()], evidence: [ev(), ev({ id: 'e2', source: 's:grove-1904', page: '' })], sources: [src({ verification: 'original' })] })
    const codes = checkClaim(claim(), d, lib).map((i) => i.code)
    expect(codes).toContain('no-page')
    expect(codes).not.toContain('missing-source')
    expect(unsupported(d, lib)).toHaveLength(0)
  })
  it('reports a missing source, an unchecked quote and a settled claim with counter-evidence', () => {
    const c = claim({ status: 'settled' })
    const d = data({ claims: [c], evidence: [ev({ source: 'ms:gone', checked: false }), ev({ id: 'e2', stance: 'contradicts', source: 's:grove-1904' })] })
    const codes = checkClaim(c, d, lib).map((i) => i.code)
    expect(codes).toEqual(expect.arrayContaining(['missing-source', 'unchecked', 'settled-contested']))
    expect(worst(checkClaim(c, d, lib))).toBe('error')
  })
  it('only supports from secondary sources reads as a note, unverified metadata as a warning', () => {
    const d = data({ claims: [claim()], evidence: [ev()], sources: [src()] })
    const codes = checkClaim(claim(), d, lib).map((i) => i.code)
    expect(codes).toEqual(expect.arrayContaining(['source-unverified', 'secondary-only']))
  })
  it('finds long paragraphs of a draft with no citation', () => {
    const long = 'Câu khẳng định dài. '.repeat(10)
    const draft = `# Tiêu đề\n\n${long}\n\n${long}[^grove-1904, tr. 3]\n\n- một gạch đầu dòng ${long}`
    expect(uncitedParagraphs(draft).map((p) => p.line)).toEqual([3])
  })
})

describe('graph', () => {
  const people = { periods: [], people: [{ id: 'haydn', name: 'Haydn', years: '', country: '', role: 'composer' as const, period: 'cla', works: [], topics: ['hinh-thuc-sonata'], page: true }] }
  const works = [{ id: 'Q1', by: 'haydn', en: 'Symphony No. 94', kind: 'symphony', article: 'giao-huong-94' }]
  const idx = new EdgeIndex().add([
    ...peopleEdges(people),
    ...workEdges(works),
    ...lineageEdges({ beethoven: { teachers: [['haydn', 'Haydn', 'Q7349'], [null, 'Outside', 'Q9']] } }),
    ...bibliographyEdges({ sources: [{ id: 'rosen', kind: 'book', labels: [], urls: [], uses: ['haydn'], pages: { haydn: ['12', '40'] } }] }),
    ...methodEdges(),
  ])
  it('composer → works, period, topics, students and sources, both ways', () => {
    const g = grouped(around('a:haydn', idx.of('a:haydn')))
    const labels = Object.fromEntries(g.map((x) => [x.label, x.items.map((i) => i.other)]))
    expect(labels['Sáng tác']).toEqual(['w:Q1'])
    expect(labels['Thuộc thời kỳ']).toEqual(['a:thoi-ky-co-dien'])
    expect(labels['Thầy của']).toEqual(['a:beethoven'])
    expect(around('a:haydn', idx.of('a:haydn')).find((s) => s.other === 's:rosen')?.page).toBe('12, 40')
  })
  it('work → composer, article, genre (computed)', () => {
    const s = around('w:Q1', idx.of('w:Q1'))
    expect(s.map((x) => [x.label, x.other, x.prov])).toEqual([
      ['Tác giả', 'a:haydn', 'wikidata'],
      ['Bài viết về đối tượng này', 'a:giao-huong-94', 'library'],
      ['Thể loại', 'a:giao-huong', 'computed'],
    ])
  })
  it('concept → analysis methods that use it', () => {
    expect(around('a:cau-ket', idx.of('a:cau-ket')).some((s) => s.other === 'm:cau-ket' && s.prov === 'computed')).toBe(true)
  })
  it('article text gives links and backlinks; user records give the evidence chain', () => {
    const resolve = (r: string) => (r === 'x' ? 'x' : r === 'self' ? 'a1' : undefined)
    expect(articleEdges('a1', { body: '[[x]] [[self]] [[missing]]', backlinks: ['b'] }, resolve)).toEqual([
      { from: 'a:a1', to: 'a:x', rel: 'links', prov: 'library' },
      { from: 'a:b', to: 'a:a1', rel: 'links', prov: 'library' },
    ])
    const k = data({ claims: [claim({ project: 'p1', about: ['a:haydn'] })], evidence: [ev()], sources: [src({ libRef: 'rosen' })] })
    const u = new EdgeIndex().add(userEdges(k, [{ id: 'p1', question: '', draft: 'xem [[x]]', sources: [], articles: [] }], [], resolve))
    expect(around('c:c1', u.of('c:c1')).map((s) => s.label)).toEqual(['Thuộc đề tài', 'Bàn về', 'Bằng chứng'])
    expect(around('e:e1', u.of('e:e1')).find((s) => s.rel === 'from')).toMatchObject({ other: 'ms:x1', page: '12' })
    expect(around('ms:x1', u.of('ms:x1')).map((s) => s.other)).toEqual(['e:e1', 's:rosen'])
    expect(around('p:p1', u.of('p:p1')).map((s) => s.other)).toEqual(['c:c1', 'a:x'])
  })
})

describe('citations of own sources', () => {
  it('prints only what was entered, plus DOI / ISBN and the page', () => {
    const s = src({ year: '2000', publisher: 'NXB Thử', place: 'Hà Nội', isbn: '978-0-393-31712-1' })
    expect(citeMine(s, 'chicago', '45')).toBe('Tác giả, Thử. Sách mẫu kiểm thử. Hà Nội: NXB Thử, 2000. tr. 45. ISBN 978-0-393-31712-1.')
    const art = src({ type: 'article', authors: ['Tác giả, Thử'], title: 'Bài mẫu', container: 'Tạp chí mẫu', doi: '10.1000/xyz123', year: '' })
    expect(citeMine(art, 'chicago')).toContain('https://doi.org/10.1000/xyz123')
    expect(citeMine(art, 'bibtex')).toContain('doi = {10.1000/xyz123}')
    expect(citeMine(src({ authors: [] }), 'apa')).not.toContain('undefined')
  })
})

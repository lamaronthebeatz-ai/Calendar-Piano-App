import { describe, expect, it } from 'vitest'
import { backlinks, edgesOf, linksIn, neighbourhood, openLinkAt, type NodeKey } from './links'

const known: Record<string, string> = { fuga: 'fuga', 'johann sebastian bach': 'johann-sebastian-bach', bach: 'johann-sebastian-bach' }
const resolve = (r: string) => known[r.toLowerCase()]

describe('second brain links', () => {
  it('reads every kind of link once, articles by slug, title or alias', () => {
    expect(linksIn('[[fuga]] của [[Bach|ông]], xem [[n:x1|ghi chú]], [[p:de-tai-1]], [^sposobin-1984, tr. 4], lại [[Johann Sebastian Bach]] và [[không có]]', resolve)).toEqual([
      'a:fuga', 'a:johann-sebastian-bach', 'n:x1', 'p:de-tai-1', 's:sposobin-1984',
    ])
  })
  it('finds backlinks and neighbourhoods', () => {
    const docs: { key: NodeKey; text: string }[] = [
      { key: 'n:a', text: 'về [[fuga]] và [[n:b]]' },
      { key: 'n:b', text: 'về [[Bach]]' },
      { key: 'p:x', text: '[[n:a]]' },
    ]
    expect(backlinks('a:fuga', docs, resolve)).toEqual(['n:a'])
    expect(backlinks('n:a', docs, resolve)).toEqual(['p:x'])
    const e = edgesOf(docs, resolve)
    expect([...neighbourhood('a:fuga', e, 1)].sort()).toEqual(['a:fuga', 'n:a'])
    expect([...neighbourhood('a:fuga', e, 2)].sort()).toEqual(['a:fuga', 'n:a', 'n:b', 'p:x'])
  })
  it('knows when the caret is inside an unfinished [[link', () => {
    expect(openLinkAt('xem [[fu', 8)).toEqual({ start: 4, query: 'fu' })
    expect(openLinkAt('xem [[fuga]] và', 15)).toBeNull()
    expect(openLinkAt('[[a\nb', 5)).toBeNull()
  })
})

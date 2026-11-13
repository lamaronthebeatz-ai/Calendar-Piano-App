import { describe, expect, it } from 'vitest'
import { buildKeyIndex } from './keyIndex'

const A = [
  { slug: 'hang-dia-phan-phoi', title: 'Phân phối nhạc số', aliases: ['FUGA', 'DistroKid'] },
  { slug: 'fugue', title: 'Fugue', aliases: ['fuga', 'tẩu khúc'] },
  { slug: 'neuhaus-lo-trinh', title: 'Lộ trình Neuhaus', aliases: ['Heinrich Neuhaus', 'Neuhaus'] },
  { slug: 'heinrich-neuhaus', title: 'Heinrich Neuhaus', aliases: ['Neuhaus'], unlisted: true },
  { slug: 'trung-am', title: 'Trung âm' },
  { slug: 'trung-am-cromatic', title: 'Quan hệ trung âm cromatic', aliases: ['trùng âm', 'trung am'] },
]
const idx = buildKeyIndex(A)
const at = (k: string) => idx.get(k)?.slug

describe('article names', () => {
  it('order in the files does not decide a shared alias', () => {
    expect(at('fuga')).toBe('fugue')
    expect(buildKeyIndex([...A].reverse()).get('fuga')?.slug).toBe('fugue')
  })
  it('an article’s own title beats another’s alias', () => {
    expect(at('heinrich neuhaus')).toBe('heinrich-neuhaus')
    expect(at('trung am')).toBe('trung-am')
  })
  it('a listed page beats an unlisted one for a shared alias', () => expect(at('neuhaus')).toBe('neuhaus-lo-trinh'))
  it('slugs always resolve to themselves', () => expect(at('trung-am-cromatic')).toBe('trung-am-cromatic'))
})

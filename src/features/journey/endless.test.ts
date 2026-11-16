import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { ARTICLES } from '../theory/articles.source'
import { CHAPTERS } from './chapters'
import { CREDITS } from './credits'
import { ERA, makeTrip, type Pool } from './endless'
import { MUSIC } from './music'
import raw from './pool.json'

// The generator only ever repeats sourced facts: every person in the pool is a library article, and every stop it
// builds is playable — four different choices, the right one among them, a backdrop, a track, an article to read.
const pool = raw as unknown as Pool
const slugs = new Set(ARTICLES.map((a) => a.slug))

describe('Lữ hành vô tận', () => {
  it('mọi người trong kho là một bài có thật', () => {
    const missing = pool.people.filter((p) => !slugs.has(p.s)).map((p) => p.n)
    expect(missing).toEqual([])
    expect(pool.events.length).toBeGreaterThan(1000)
  })

  it.each(CHAPTERS.filter((c) => ERA[c.id]))('chương $numeral: chuyến đi nào cũng chơi được', (ch) => {
    for (let seed = 1; seed <= 40; seed++) {
      const stops = makeTrip(ch, pool, seed * 7919, [])
      expect(stops.length, `seed ${seed}`).toBe(5)
      for (const { scene } of stops) {
        const q = scene.quest
        expect(new Set(q.choices).size, `${scene.id}: ${q.ask}`).toBe(4)
        expect(q.answer).toBeGreaterThanOrEqual(0)
        expect(slugs.has(q.read), q.read).toBe(true)
        expect(existsSync(`public/images/journey/${scene.bg}-m.webp`) && !!CREDITS[scene.bg], scene.bg).toBe(true)
        expect(MUSIC[scene.track!], scene.track).toBeDefined()
      }
    }
  })

  it('cùng hạt giống thì cùng chuyến đi; câu đã hỏi không lặp lại', () => {
    const ch = CHAPTERS.find((c) => c.id === 'lang-man')!
    const a = makeTrip(ch, pool, 42, []), b = makeTrip(ch, pool, 42, [])
    expect(a.map((s) => s.item)).toEqual(b.map((s) => s.item))
    const c = makeTrip(ch, pool, 43, a.map((s) => s.item))
    expect(c.some((s) => a.some((x) => x.item === s.item))).toBe(false)
  })
})

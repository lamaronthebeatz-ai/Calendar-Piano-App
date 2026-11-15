import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { ARTICLES } from '../theory/articles.source'
import { CHAPTERS } from './chapters'
import { CREDITS } from './credits'

// The story is read through the library: every question, card and verdict must point at a real article, and every
// picture must be on disk with a credit — the same guarantee check:links gives to [[links]].
const slugs = new Set(ARTICLES.map((a) => a.slug))
const picture = (id: string) => existsSync(`public/images/journey/${id}.webp`) && !!CREDITS[id]

describe.each(CHAPTERS)('chương $numeral — $title', (ch) => {
  it('mỗi cảnh trỏ tới bài có thật, ảnh có nguồn, đáp án nằm trong các lựa chọn', () => {
    expect(picture(ch.cover)).toBe(true)
    for (const s of ch.scenes) {
      expect(slugs.has(s.quest.read), `${s.id}: quest.read ${s.quest.read}`).toBe(true)
      expect(slugs.has(s.card.read), `${s.id}: card.read ${s.card.read}`).toBe(true)
      if (s.npc.slug) expect(slugs.has(s.npc.slug), `${s.id}: npc ${s.npc.slug}`).toBe(true)
      expect(picture(s.bg), `${s.id}: bg ${s.bg}`).toBe(true)
      if (s.npc.img) expect(picture(s.npc.img), `${s.id}: img ${s.npc.img}`).toBe(true)
      expect(s.quest.answer).toBeGreaterThanOrEqual(0)
      expect(s.quest.answer).toBeLessThan(s.quest.choices.length)
      expect(s.lines.length).toBeGreaterThan(0)
      for (const l of s.lines) if (l.quote) expect(slugs.has(l.quote), `${s.id}: quote ${l.quote}`).toBe(true)
    }
    for (const c of ch.court.claims) expect(slugs.has(c.read), `court ${c.id}: ${c.read}`).toBe(true)
  })

  it('không trùng id cảnh, thẻ, lời khai', () => {
    const ids = [...ch.scenes.map((s) => s.id), ...ch.scenes.map((s) => 'card:' + s.card.id), ...ch.court.claims.map((c) => 'claim:' + c.id)]
    expect(new Set(ids).size).toBe(ids.length)
  })
})

import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { rulesForArticle } from './theory'
import { COUNTERPOINT_RULE_ARTICLES, HARMONY_RULE_ARTICLES } from './theorySlugs'

// the library index is a build-time virtual module: read the content sources instead
const DIR = new URL('../features/theory/content/', import.meta.url)
const SOURCES = readdirSync(DIR).filter((f) => f.endsWith('.ts')).map((f) => readFileSync(new URL(f, DIR), 'utf8')).join('\n')
const getArticle = (slug: string) => new RegExp(`slug: ['"]${slug}['"]`).test(SOURCES)

describe('GĐ12B — Lý thuyết: bài → luật UMRE', () => {
  it('mọi bài được nối có thật trong thư viện và có ít nhất một luật; mỗi luật mang nguồn, trang, mức kiểm chứng, sổ luật', () => {
    for (const slug of [...COUNTERPOINT_RULE_ARTICLES, ...Object.keys(HARMONY_RULE_ARTICLES)]) {
      expect(getArticle(slug), slug).toBeTruthy()
      const rs = rulesForArticle(slug)
      expect(rs.length, slug).toBeGreaterThan(0)
      for (const r of rs) expect([r.source, r.verification, r.rulebook].every(Boolean)).toBe(true)
    }
    const par = rulesForArticle('doi-vi-don-gian-hai-be').find((r) => r.id === 'parallel')!
    expect(par).toMatchObject({ standing: 'hard', pages: 'tr. 9–10' })
    expect(par.verification).toMatch(/chưa chuyên gia duyệt/)
    expect(rulesForArticle('phoi-hoa-am-giai-dieu').map((r) => r.id)).toContain('h.no-v-iv')
  })
})

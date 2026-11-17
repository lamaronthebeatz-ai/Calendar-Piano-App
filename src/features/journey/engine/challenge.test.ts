import { describe, expect, it } from 'vitest'
import { ALL_CHAPTERS } from '../chapters'
import { sceneChallenge } from './challenge'
import { checkPuzzle, puzzleProblem } from './puzzles'
import { ARTICLES } from '../../theory/articles.source'

describe('thử thách âm nhạc ở mỗi chặng', () => {
  it('mọi chặng của mọi chương có một thử thách đúng dạng, đáp án tự giải được, bài đọc có thật, lặp lại thì giống hệt', () => {
    let n = 0
    for (const c of ALL_CHAPTERS)
      c.scenes.forEach((s, i) => {
        const p = sceneChallenge(c.id, s.id, i)
        expect(p, `${c.id}/${s.id}`).not.toBeNull()
        expect(puzzleProblem(p!), `${c.id}/${s.id}`).toBeNull()
        expect(checkPuzzle(p!, p!.answer).ok).toBe(true)
        for (const l of p!.links) expect(ARTICLES.some((a) => a.slug === l.slice(2)), l).toBe(true)
        expect(sceneChallenge(c.id, s.id, i)).toEqual(p)
        n++
      })
    expect(n).toBeGreaterThan(40)
  })
})

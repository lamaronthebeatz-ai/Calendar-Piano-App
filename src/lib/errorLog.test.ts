// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest'
import { clearErrors, logError } from './errorLog'

const stored = () => JSON.parse(localStorage.getItem('app:errors') ?? '[]')

describe('error log', () => {
  beforeEach(() => clearErrors())
  it('keeps the newest first, with where it happened', () => {
    logError(new Error('a'), '#/x')
    logError(new Error('b'), '#/y')
    expect(stored().map((e: { msg: string; where: string }) => e.msg + e.where)).toEqual(['b#/y', 'a#/x'])
  })
  it('does not repeat one error thrown in a loop', () => {
    for (let i = 0; i < 5; i++) logError(new Error('loop'), '#/z')
    expect(stored()).toHaveLength(1)
  })
  it('keeps at most 30', () => {
    for (let i = 0; i < 40; i++) logError(new Error(`e${i}`), '#/')
    expect(stored()).toHaveLength(30)
    expect(stored()[0].msg).toBe('e39')
  })
})

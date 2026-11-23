import { describe, expect, it } from 'vitest'
import { labelled, solveMany } from '../../../features/counterpoint/solver'
import type { VersionSpec } from '../../../features/counterpoint/rules'
import { line, twoVoiceTask } from '../../testing/fixtures'
import { confirmForPage, gradeForPage, taskFromProblem } from './page'
import { toProblem } from './task'

const p = toProblem(twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'))

describe('trang phức điệu dùng UMRE', () => {
  it('đổi qua lại bài của trang và bài UMRE không mất gì', () => {
    expect(toProblem(taskFromProblem(p))).toEqual(p)
  })
  it('nút Giải: mọi lời giải hiện ra đều được bộ kiểm độc lập xác nhận và xếp theo điểm trừ luật mềm', () => {
    const r = confirmForPage(p, solveMany(p, 5000, 6))
    expect(r.status).toBe('valid')
    expect(r.umre.confirmed).toBe(r.solutions.length)
    expect(r.umre.rejected).toEqual([])
    expect(r.umre.checkers).toEqual(expect.arrayContaining(['umre-native', 'umre-rules']))
    expect(r.umre.checkers).not.toContain('verify') // the search ran verify itself: it cannot confirm
  }, 60_000)
  it('một lời giải sai lọt vào (giả lập lỗi bộ tìm) bị giữ lại, không hiện như đúng; còn lại không gì thì thành "chưa kết luận"', () => {
    const bad = { cp: line('G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4'), penalty: 0, report: { hard: [], soft: [], penalty: 0 } }
    const r = confirmForPage(p, { solutions: [bad], nodes: 1, exhausted: false, furthest: 0, blockers: [], status: 'valid' })
    expect(r.solutions).toEqual([])
    expect(r.status).toBe('unknown')
    expect(r.disputed).toBe(1)
    expect(r.umre.rejected[0]).toMatch(/INVALID/)
  })
  it('chấm bài của học trò: kết luận của bộ kiểm độc lập, kèm luật và ô', () => {
    expect(gradeForPage(p, line('G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4'))).toMatchObject({ status: 'INVALID', rules: expect.arrayContaining(['parallel (ô 2)']) })
    expect(gradeForPage(p, line('G4:4 | A4:4')).status).toBe('INCOMPLETE')
  })
  it('hồi quy (bắt được khi nối trang): đề mẫu của trang có biến thể, bật nốt đen chuẩn bị — ngoại lệ phải áp cả ở biến thể, lời giải được xác nhận', () => {
    const versions = labelled(([{ I: -7, II: 0 }, { I: -4, II: -3 }, { I: -5, II: -2 }] as const).map((shift) => ({ shift: { ...shift }, motion: 'swap', label: '' }) as VersionSpec), -7)
    const t = twoVoiceTask('C4:4 F4:2 | E4:2 F4:1 G4:1 F4:2~ | F4:1 E4:1 D4:1 E4:1 C4:2 | G4:3 F4:1 E4:1 D4:1 | F4:2 E4:2 D4:2~ | D4:1 C4:1 B3:3 C4:1 | C4:6', { stars: [6, 12, 18, 24, 30], versions, starsOnly: true, quarterPrep: true })
    const q = toProblem(t)
    const r = confirmForPage(q, solveMany(q, 20_000, 3))
    expect(r.umre.rejected).toEqual([])
    expect(r.solutions.length).toBeGreaterThan(0)
  }, 60_000)
})

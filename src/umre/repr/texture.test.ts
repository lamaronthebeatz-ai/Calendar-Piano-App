import { describe, expect, it } from 'vitest'
import { fromCounterpoint } from './adapters/counterpoint'
import { format } from './rational'
import { consonance, intervalClass, melodicSteps, metricPosition, motionOf, verticals, type ConsonanceDef } from './texture'
import { parsePitch } from './pitch'
import { parseInterval } from './interval'
import { line, C } from '../testing/fixtures'

const P = parsePitch
const DEF: ConsonanceDef = { perfect: [[0, 'P'], [4, 'P']], imperfect: [[2, 'M'], [2, 'm'], [5, 'M'], [5, 'm']] }

describe('truy vấn chuẩn trên kết cấu (GĐ1 bổ sung)', () => {
  it('kiểu chuyển động của hai bè', () => {
    expect(motionOf(P('C5'), P('F4'), P('D5'), P('G4'))).toBe('parallel') // 5 → 5
    expect(motionOf(P('C5'), P('E4'), P('D5'), P('G4'))).toBe('similar') // 6 → 5, both up
    expect(motionOf(P('C5'), P('E4'), P('B4'), P('G4'))).toBe('contrary')
    expect(motionOf(P('C5'), P('E4'), P('C5'), P('G4'))).toBe('oblique')
    expect(motionOf(P('C5'), P('E4'), P('C5'), P('E4'))).toBe('static')
  })
  it('lớp quãng và quãng thuận theo bảng của sổ luật (không tự quyết)', () => {
    expect(intervalClass(parseInterval('m10'))).toMatchObject({ steps: 2, quality: 'm' })
    expect(intervalClass(parseInterval('P8'))).toMatchObject({ steps: 0, quality: 'P' })
    expect(consonance(parseInterval('P4'), DEF)).toBe('dissonant')
    expect(consonance(parseInterval('P4'), { ...DEF, perfect: [...DEF.perfect, [3, 'P']] })).toBe('perfect')
    expect(consonance(parseInterval('M10'), DEF)).toBe('imperfect')
    expect(consonance(parseInterval('-P4'), DEF)).toBe('perfect') // crossed: a fourth below folds to a fifth
  })
  it('các điểm cùng vang, ai đánh, chuyển động; bước giai điệu gộp nốt nối; vị trí trong ô', () => {
    const s = fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line('D5:4~ | D5:2 C5:2'), line('F4:2 A4:2 | E4:4')] })
    const v = verticals(s.voices[0], s.voices[1], { n: 2, d: 1 })
    expect(v.map((x) => [format(x.at), x.hitU, x.hitL, x.motion])).toEqual([['0', true, true, null], ['1/2', false, true, 'oblique'], ['1', false, true, 'oblique'], ['3/2', true, false, 'oblique']])
    expect(melodicSteps(s.voices[0]).map((m) => m.interval.steps)).toEqual([-1])
    expect(metricPosition(s, { n: 1, d: 1 })).toMatchObject({ bar: 2, level: 3 })
    expect(metricPosition(s, { n: 3, d: 2 })).toMatchObject({ bar: 2, level: 2 })
    expect(metricPosition(s, { n: 5, d: 4 })).toMatchObject({ bar: 2, level: 1 })
  })
})

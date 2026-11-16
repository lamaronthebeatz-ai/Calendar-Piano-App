import { describe, expect, it } from 'vitest'
import { joinBroken } from './listen'

// one second of a 262 Hz tone; `loud` from 0.5 s raises it threefold (a fresh strike)
const tone = (loud = 1, rate = 22050) => Float32Array.from({ length: rate }, (_, i) => Math.sin((2 * Math.PI * 262 * i) / rate) * (i / rate >= 0.5 ? loud : 1) * 0.3)
const halves = [
  { m: 60, t: 0.0, d: 0.5, a: 0.6 },
  { m: 60, t: 0.5, d: 0.5, a: 0.5 },
]

describe('joinBroken', () => {
  it('ghép lại một nốt bị cắt đôi khi không có tiếng bật mới (máy bận làm hụt bản thu)', () => {
    expect(joinBroken(halves, tone(), 22050)).toEqual([{ m: 60, t: 0, d: 1, a: 0.6 }])
  })
  it('giữ hai nốt khi nốt sau là một lần đánh lại thật (âm lượng bật lên)', () => {
    expect(joinBroken(halves, tone(3), 22050)).toHaveLength(2)
  })
  it('không ghép hai nốt khác cao độ hay cách nhau', () => {
    expect(joinBroken([halves[0], { ...halves[1], m: 64 }], tone(), 22050)).toHaveLength(2)
    expect(joinBroken([halves[0], { ...halves[1], t: 0.6 }], tone(), 22050)).toHaveLength(2)
  })
})

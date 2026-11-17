import { describe, expect, it } from 'vitest'
import { melodicOk, pitch, type Seg } from './model'
import { check, type Problem, type RuleId } from './rules'
import { domainOf, generate, labelled, solve, solveMany, splitsOf, starCheck } from './solver'
import { verify } from './verify'

/** "C4:2 D4:2~ | D4:2" — letter, optional b/#/n, octave, duration in quarters, ~ ties into the next. */
function line(s: string): Seg[] {
  const out: Seg[] = []
  let t = 0
  let tie = false
  for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
    const m = /^([A-G])(b|#|n)?(\d):(\d)(~?)$/.exec(tok)
    if (!m) throw new Error(tok)
    out.push({ start: t, dur: +m[4], p: pitch(+m[3] * 7 + 'CDEFGAB'.indexOf(m[1]), m[2] === 'b' ? -1 : m[2] === '#' ? 1 : 0), tied: tie })
    t += +m[4]
    tie = m[5] === '~'
  }
  return out
}
const C = { tonic: 0, alter: 0, minor: false }
const P = (given: string, o: Partial<Problem> = {}): Problem => ({
  key: C, meter: { num: 2, den: 2 }, given: line(given), givenIs: 'I', stars: [], versions: [], starsOnly: true, ...o,
})
const hard = (p: Problem, cp: string) => check(p, line(cp), Infinity).hard.map((v) => v.rule)
const soft = (p: Problem, cp: string) => check(p, line(cp), Infinity).soft.map((v) => v.rule)
const has = (p: Problem, cp: string, r: RuleId) => hard(p, cp).includes(r)
/** The two checkers must agree on whether a line breaks a hard rule. */
const agree = (p: Problem, cp: string) => expect(verify(p, line(cp)).length === 0).toBe(hard(p, cp).length === 0)

describe('giai điệu (tr. 5–8)', () => {
  it('cấm nửa cung cromatic, quãng 7, quãng tăng – giảm, rộng hơn quãng 8; cho quãng thuận', () => {
    const m = (a: string, b: string) => melodicOk(line(`${a}:1`)[0].p, line(`${b}:1`)[0].p).ok
    expect(m('B4', 'Bb4')).toBe(false)
    expect(m('F4', 'F#4')).toBe(false)
    expect(m('C4', 'B4')).toBe(false)
    expect(m('F4', 'B4')).toBe(false)
    expect(m('B3', 'F4')).toBe(false)
    expect(m('C4', 'D5')).toBe(false)
    expect(m('Bb3', 'C#4')).toBe(false)
    for (const b of ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'C5']) expect(m('C4', b)).toBe(true)
  })
  it('sau bước nhảy, kể cả quãng 3, phải phản hồi ngược hướng', () => {
    const p = P('C6:4 | C6:4')
    expect(has(p, 'C4:2 E4:2 | G4:4', 'leap3-response')).toBe(true)
    expect(has(p, 'C4:2 E4:2 | D4:4', 'leap3-response')).toBe(false)
    expect(has(p, 'C4:2 G4:2 | A4:4', 'leap-response')).toBe(true)
    expect(has(p, 'C4:2 G4:2 | E4:4', 'leap-response')).toBe(false)
    expect(has(p, 'C4:2 E4:2 | E4:4', 'leap3-response')).toBe(true) // nhắc lại không phải phản hồi
    agree(p, 'C4:2 E4:2 | G4:4')
  })
  it('không nhắc một nốt ba lần; nhắc hai lần chỉ là ghi chú', () => {
    const p = P('C6:4 | C6:4 | C6:4')
    expect(has(p, 'C4:2 C4:2 | C4:4 | D4:4', 'repeat3')).toBe(true)
    expect(has(p, 'C4:2 C4:2 | D4:4 | E4:4', 'repeat3')).toBe(false)
    expect(soft(p, 'C4:2 C4:2 | D4:4 | E4:4')).toContain('repeat')
  })
  it('đổi sang nốt ngắn hơn ở phách mạnh phải có nốt lưu chuẩn bị; ở phách nhẹ thì không cần', () => {
    const p = P('C6:4 | C6:4')
    expect(has(p, 'C4:4 | D4:2 E4:2', 'rhythm-change')).toBe(true)
    expect(has(p, 'C4:2 D4:1 E4:1 | F4:4', 'rhythm-change')).toBe(false)
    expect(has(p, 'C4:4~ | C4:2 D4:2', 'rhythm-change')).toBe(false)
  })
  it('nối nốt: không nối nốt đen, không nối ngắn sang dài (trừ trắng sang tròn); không đảo phách', () => {
    const p = P('C6:4 | C6:4 | C6:4')
    expect(has(p, 'C4:2 D4:1 E4:1~ | E4:2 F4:2 | G4:4', 'tie')).toBe(true)
    expect(has(p, 'C4:2 D4:2~ | D4:4 | C4:4', 'tie')).toBe(false)
    expect(has(p, 'C4:1 D4:2 E4:1 | F4:4 | G4:4', 'seg-place')).toBe(true)
  })
  it('biến âm: âm nguyên và âm biến đứng gần nhau chỉ là ghi chú', () => {
    const p = P('C6:4 | C6:4 | C6:4', { key: { tonic: 5, alter: 0, minor: true } })
    expect(soft(p, 'A3:2 G#3:2 | A3:2 G3:2 | A3:4')).toContain('chromatic-near')
  })
})

describe('quãng hai bè (tr. 9–10)', () => {
  it('cấm quãng thuận hoàn toàn song song; ngược hướng thì chỉ là ghi chú', () => {
    const p = P('G4:2 A4:2 | B4:4')
    expect(has(p, 'C4:2 D4:2 | G3:4', 'parallel')).toBe(true)
    agree(p, 'C4:2 D4:2 | G3:4')
    const q = P('G4:2 D5:2 | C5:4')
    expect(has(q, 'C4:2 G3:2 | A3:4', 'parallel')).toBe(false)
    expect(soft(q, 'C4:2 G3:2 | A3:4')).toContain('perfects')
  })
  it('không được dùng nhiều (từ ba) quãng thuận hoàn toàn liền nhau', () => {
    const p = P('C5:1 G4:1 C5:2 | E5:4')
    expect(has(p, 'C4:4 | C4:4', 'perfects3')).toBe(true)
    agree(p, 'C4:4 | C4:4')
  })
  it('chéo bè là lỗi', () => {
    expect(has(P('C4:4 | C4:4'), 'E4:4 | C4:4', 'crossing')).toBe(true)
  })
  it('kết không phải quãng hoàn toàn chỉ là ghi chú (giáo trình: "chủ yếu")', () => {
    const p = P('D5:4 | C5:4')
    expect(hard(p, 'B3:4 | A3:4')).not.toContain('final')
    expect(soft(p, 'B3:4 | A3:4')).toContain('final')
  })
})

describe('nốt lưu (tr. 10–13)', () => {
  // đề trên; bè đối vị dưới giữ Fa4 qua vạch nhịp thành quãng 2 với Sol4, rồi xuống Mi4
  const p = P('C5:2 A4:2 | G4:4 | E4:4', { stars: [4] })
  const ok = 'A3:2 F4:2~ | F4:2 E4:2 | C4:4'
  it('nốt lưu đúng: chuẩn bị thuận, nghịch ở bè dưới, xuống liền bậc vào quãng thuận', () => {
    expect(hard(p, ok)).toEqual([])
    expect(verify(p, line(ok))).toEqual([])
  })
  it('nốt chuẩn bị là nốt đen: sai, trừ khi thầy cho phép', () => {
    const cp = 'C4:2 D4:1 F4:1~ | F4:1 E4:1 D4:2 | C4:4'
    expect(hard(p, cp).length).toBeGreaterThan(0)
    agree(p, cp)
    expect(has(p, cp, 'tie')).toBe(true)
    expect(hard({ ...p, quarterPrep: true }, cp)).toEqual([])
    agree({ ...p, quarterPrep: true }, cp)
  })
  it('không giải quyết xuống liền bậc: sai', () => {
    expect(has(p, 'A3:2 F4:2~ | F4:2 D4:2 | C4:4', 'dis-strong')).toBe(true)
    agree(p, 'A3:2 F4:2~ | F4:2 D4:2 | C4:4')
  })
  it('thuận – nghịch – thuận: quãng ngay trước nốt lưu phải thuận', () => {
    // đề đi Si4 ngay trước ✱: Fa4 – Si4 là quãng 4 tăng, rồi Sol4 – Fa4 nghịch ⇒ hai quãng nghịch liền nhau
    const q = P('C5:2 A4:1 B4:1 | G4:4 | E4:4', { stars: [4] })
    expect(hard(q, ok).length).toBeGreaterThan(0)
    agree(q, ok)
  })
  it('nốt chuẩn bị vào thuận, trong lúc ngân bè kia được đi nốt lướt nghịch (thuận – nghịch – thuận)', () => {
    const q = P('E5:1 F5:1 G5:2 | A5:4 | G5:4', { stars: [4] })
    const cp = 'G4:4~ | G4:2 F4:2 | E4:4'
    expect(hard(q, cp)).toEqual([])
    agree(q, cp)
  })
  it('quãng 2: nốt nghịch phải ở bè dưới (sơ đồ 2)', () => {
    // bè đối vị trên giữ La4 thành quãng 2 với Sol4 bên dưới ⇒ nốt nghịch ở bè trên: sai
    const q = P('C4:2 B3:2 | G4:4 | F4:4', { givenIs: 'II', stars: [4] })
    expect(has(q, 'E4:2 A4:2~ | A4:2 G4:2 | A4:4', 'dis-strong')).toBe(true)
    agree(q, 'E4:2 A4:2~ | A4:2 G4:2 | A4:4')
  })
  it('bè tự do được nhảy đúng lúc nốt nghịch giải quyết, miễn là thuận (Thí dụ 30)', () => {
    const q = P('C5:2 A4:2 | G4:2 C5:2 | C5:4', { stars: [4] })
    const cp = 'A3:2 F4:2~ | F4:2 E4:2 | A4:4'
    expect(hard(q, cp).filter((r) => r !== 'leap-response')).toEqual([])
  })
})

describe('nốt nghịch ở phách nhẹ (tr. 11–12)', () => {
  const p = P('C5:4 | C5:4')
  it('nốt lướt, thêu dưới, thoát, sớm: được', () => {
    for (const cp of ['F4:1 E4:1 D4:1 E4:1 | E4:4', 'E4:1 D4:1 E4:2 | E4:4', 'A4:1 G4:1 E4:2 | F4:4', 'E4:2 F4:1 F4:1 | F4:4']) {
      const hs = hard(p, cp).filter((r) => r !== 'repeat3' && r !== 'leap3-response' && r !== 'rhythm-change')
      expect(hs, cp).not.toContain('dis-weak')
    }
  })
  it('nhảy vào nốt nghịch: sai', () => {
    expect(has(p, 'E4:1 B4:1 A4:2 | A4:4', 'dis-weak')).toBe(true)
    agree(p, 'E4:1 B4:1 A4:2 | A4:4')
  })
})

describe('biến thể (Iv)', () => {
  it('đúng ở nguyên thể nhưng sai ở biến thể: quãng 5 thành quãng 4 nghịch khi Iv −7', () => {
    const p = P('C5:4 | D5:4 | C5:4', { versions: labelled([splitsOf(-7)[0]], -7) })
    const cp = 'A4:4 | G4:4 | A4:4'
    const r = check(p, line(cp), Infinity).hard
    expect(r.some((v) => v.version !== 'Nguyên thể')).toBe(true)
    expect(check({ ...p, versions: [] }, line(cp), Infinity).hard).toEqual([])
    agree(p, cp)
  })
})

/* ---------- whole-problem behaviour ---------- */

const sample = (): Problem => ({
  key: C, meter: { num: 3, den: 2 }, givenIs: 'II', starsOnly: true,
  given: line('C4:4 F4:2 | E4:2 F4:1 G4:1 F4:2~ | F4:1 E4:1 D4:1 E4:1 C4:2 | G4:3 F4:1 E4:1 D4:1 | F4:2 E4:2 D4:2~ | D4:1 C4:1 B3:3 C4:1 | C4:6'),
  stars: [6, 12, 18, 24, 30],
  versions: labelled([{ I: -7, II: 0 }, { I: -4, II: -3 }, { I: -5, II: -2 }].map((shift) => ({ shift, motion: 'swap' as const, label: '' })), -7),
})

describe('ba trạng thái', () => {
  it('UNSAT chỉ khi đã duyệt hết; hết giờ thì UNKNOWN', () => {
    const full = solveMany(sample(), 60_000, 2)
    expect(full.status).toBe('unsat')
    const cut = solve(sample(), { timeMs: -1, maxSolutions: 1 })
    expect(cut.status).toBe('unknown')
  }, 90_000)
  it('kết luận không đổi theo seed', () => {
    const p = { ...sample(), stars: [6, 12, 18, 30] }
    const a = solveMany(p, 20_000, 2)
    expect(a.status).toBe('valid')
    for (const seed of [1, 99, 12345]) expect(solve(p, { timeMs: 20_000, maxSolutions: 1, seed }).status).toBe('valid')
  }, 90_000)
  it('mọi lời giải trả về đều qua bộ kiểm độc lập', () => {
    const p = { ...sample(), stars: [6, 12, 18, 30] }
    for (const s of solveMany(p, 10_000, 4).solutions) expect(verify(p, s.cp)).toEqual([])
  }, 60_000)
})

describe('starCheck chỉ dùng điều kiện cần', () => {
  it('bài Iv −14 Rê thứ: ô 3 bất khả (đề vang Đô5 ngay trước rồi đánh Mi5)', () => {
    const p: Problem = {
      key: { tonic: 1, alter: 0, minor: true }, meter: { num: 3, den: 2 }, givenIs: 'I', starsOnly: true,
      given: line('A4:1 Bb4:1 C5:1 D5:1 C5:2~ | C5:1 Bb4:1 D5:2 C5:2 | E5:3 D5:1 F5:2~ | F5:1 E5:1 D5:1 C5:1 E5:2~ | E5:1 D5:1 C5:2 Bb4:2 | A4:4 Bn4:1 C#5:1 | D5:6'),
      stars: [6, 12, 18, 24, 30], versions: labelled([splitsOf(-14)[0]], -14),
    }
    expect(starCheck(p).map((s) => s.t)).toEqual([12])
    expect(domainOf(p).pitches.some((x) => x.alter === 1)).toBe(true) // Đô♯ của đề có trong miền tìm kiếm
    const q = { ...p, stars: p.stars.filter((t) => t !== 12) }
    const r = solveMany(q, 30_000, 1)
    expect(r.status).toBe('valid')
    expect(verify(q, r.solutions[0].cp)).toEqual([])
  }, 60_000)
  it('không bao giờ báo bất khả một ✱ mà máy giải được', () => {
    for (let seed = 1; seed <= 6; seed++) {
      const g = generate('vua', seed * 7919, 8000)
      if (!g) continue
      const p: Problem = { key: g.key, meter: g.meter, given: g.given, givenIs: g.givenIs, stars: g.stars, versions: g.versions, starsOnly: true }
      expect(starCheck(p)).toEqual([])
      expect(verify(p, g.answer.cp)).toEqual([])
    }
  }, 120_000)
})

describe('hai bộ kiểm thống nhất quanh lời giải', () => {
  it('đổi từng nốt của lời giải: rules.ts và verify.ts cùng kết luận', () => {
    let compared = 0
    for (const [level, seed] of [['de', 1], ['de', 2], ['de', 3], ['vua', 4], ['vua', 5], ['kho', 6]] as const) {
      const g = generate(level, seed * 104729, 8000)
      if (!g) continue
      const p: Problem = { key: g.key, meter: g.meter, given: g.given, givenIs: g.givenIs, stars: g.stars, versions: g.versions, starsOnly: true }
      const cp = g.answer.cp
      for (let i = 0; i < cp.length; i++) {
        for (const d of [-2, -1, 1, 2]) {
          const m = cp.map((s, k) => (k === i || (k === i + 1 && s.tied) ? { ...s, p: pitch(cp[i].p.step + d) } : s))
          const a = check(p, m, Infinity).hard.length === 0
          const b = verify(p, m).length === 0
          expect(b, `seed ${seed} note ${i} ${d}`).toBe(a)
          compared++
        }
      }
    }
    expect(compared).toBeGreaterThan(80)
  }, 120_000)
})

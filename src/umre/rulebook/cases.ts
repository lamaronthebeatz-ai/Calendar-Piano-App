/**
 * One written-by-hand violating example per hard counterpoint rule (the rulebook's "test cases"). Each is a short
 * line against a short cantus; a test runs every case through the validator and records which independent checkers
 * caught it — that table is the published coverage (docs/umre/COVERAGE.md).
 */
export type RuleCase = {
  rule: string
  /** 'two': cantus (lower, given) + counterpoint; 'multi': three voices, all written */
  kind: 'two' | 'multi'
  given: string
  /** the counterpoint line (two) or the three voices top-down (multi) */
  lines: string[]
  stars?: number[]
  starsOnly?: boolean
  /** shift one note later (quarters) to leave a gap: [index, quarters] */
  gap?: [number, number]
  why: string
}
const CF = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
export const RULE_CASES: RuleCase[] = [
  { rule: 'leap', kind: 'two', given: CF, lines: ['G4:4 | F5:4 | A4:4 | G4:4 | F4:4 | E4:4'], why: 'G4 → F5 nhảy quãng 7' },
  { rule: 'leap-response', kind: 'two', given: CF, lines: ['G4:4 | C5:4 | D5:4 | C5:4 | B4:4 | C5:4'], why: 'nhảy quãng 4 lên rồi đi tiếp lên' },
  { rule: 'leap3-response', kind: 'two', given: CF, lines: ['G4:4 | A4:4 | C5:4 | G4:4 | B4:4 | C5:4'], why: 'G4 → B4 quãng 3 lên rồi lên tiếp' },
  { rule: 'repeat3', kind: 'two', given: CF, lines: ['E4:4 | F4:4 | A4:4 | A4:4 | A4:4 | G4:4'], why: 'A4 ba lần liền' },
  { rule: 'no-gap', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['E4:4 | F4:2 A4:2 | G4:4'], gap: [2, 1], why: 'một phách trống giữa F4 và A4' },
  { rule: 'end', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['E4:4 | F4:4 | E4:4 | D4:4'], why: 'bè đối vị đi quá cuối bài' },
  { rule: 'seg-place', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['E4:1 G4:2 E4:1 | F4:4 | E4:4'], why: 'nốt trắng bắt đầu ở phách 2, vắt qua phách 3' },
  { rule: 'tie', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['G4:2 F4:1 E4:1~ | E4:2 F4:2 | E4:4'], why: 'nốt đen nối qua vạch nhịp vào quãng thuận' },
  { rule: 'rhythm-change', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['E4:2 G4:2 | F4:1 E4:1 F4:2 | E4:4'], why: 'nốt trắng → nốt đen ở phách đầu ô' },
  { rule: 'crossing', kind: 'two', given: CF, lines: ['E4:4 | B3:4 | A4:4 | G4:4 | F4:4 | E4:4'], why: 'bè trên xuống dưới bè đề (B3 dưới D4)' },
  { rule: 'parallel', kind: 'two', given: CF, lines: ['G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4'], why: 'G4/C4 → A4/D4 hai quãng 5 song song' },
  { rule: 'perfects3', kind: 'two', given: CF, lines: ['G4:4 | A4:4 | C5:4 | G4:4 | B4:4 | C5:4'], why: 'ba quãng thuận hoàn toàn liền' },
  { rule: 'dis-strong', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['F4:4 | F4:4 | E4:4'], why: 'quãng 4 đúng ở phách mạnh, không chuẩn bị' },
  { rule: 'suspension', kind: 'two', given: 'C4:4 | B3:4 | C4:4', lines: ['G4:2 C5:2~ | C5:2 D5:2 | C5:4'], why: 'nốt lưu C5/B3 giải quyết đi lên' },
  { rule: 'dis-weak', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['G4:2 B4:2 | A4:4 | G4:4'], why: 'quãng 7 ở phách nhẹ, đến bằng bước nhảy' },
  { rule: 'star', kind: 'two', given: 'C4:4 | D4:4 | C4:4', lines: ['E4:4 | F4:4 | E4:4'], stars: [4], why: 'chỗ ✱ (ô 2) là quãng thuận' },
  { rule: 'star-extra', kind: 'two', given: 'C4:4 | B3:4 | C4:4', lines: ['G4:2 C5:2~ | C5:2 B4:2 | C5:4'], starsOnly: true, stars: [8], why: 'nốt lưu C5/B3 ở ô 2, đề chỉ cho nghịch ở ✱ ô 3' },
  { rule: 'hidden-hard', kind: 'multi', given: '', lines: ['E5:4 | G5:4', 'C5:4 | B4:4', 'C3:4 | G3:4'], why: 'cặp ngoài cùng chiều vào quãng 8, bè trên nhảy' },
]

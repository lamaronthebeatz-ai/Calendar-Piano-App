/**
 * One written-by-hand violating example per harmony rule (S / A / T / B lines, quarter notes). Read against the
 * rulebook's statements of Rimsky-Korsakov's rules — not produced by the solver. `chords` (four-part tasks): letter
 * of the root and quality per note; harmonization tasks read the chords from the bass.
 */
export type HarmonyCase = { rule: string; kind: 'four-part' | 'harmonize'; minor?: boolean; tonic?: number; chords?: [number, 'major' | 'minor'][]; s: string; a: string; t: string; b: string; why: string }
// C major I–IV–I–V–I, a correct voicing to start from (each case changes what it needs)
export const HARMONY_CASES: HarmonyCase[] = [
  { rule: 'h.chord-tones', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'G4:4 B4:4 G4:4', t: 'C4:4 C4:4 C4:4', b: 'C3:4 F3:4 C3:4', why: 'alto Si trên hợp âm IV (Fa – La – Đô)' },
  { rule: 'h.root-position', kind: 'four-part', chords: [[0, 'major'], [3, 'major'], [0, 'major']], s: 'E5:4 F5:4 E5:4', a: 'G4:4 A4:4 G4:4', t: 'C4:4 C4:4 C4:4', b: 'E3:4 F3:4 C3:4', why: 'bass Mi dưới hợp âm Đô (thể sáu)' },
  { rule: 'h.double-root', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'G4:4 A4:4 G4:4', t: 'E4:4 C4:4 C4:4', b: 'C3:4 F3:4 C3:4', why: 'hợp âm đầu nhân đôi quãng 3' },
  { rule: 'h.spacing', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'G4:4 A4:4 C4:4', t: 'C4:4 C4:4 G3:4', b: 'C3:4 F3:4 C3:4', why: 'soprano – alto cách quãng 10' },
  { rule: 'h.parallels', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'G4:4 A4:4 G4:4', t: 'G3:4 C4:4 C4:4', b: 'C3:4 F3:4 C3:4', why: 'tenor – bass quãng 5 song song (Sol/Đô → Đô/Fa)' },
  { rule: 'h.augmented', kind: 'four-part', tonic: 5, minor: true, chords: [[1, 'minor'], [2, 'major']], s: 'A4:4 B4:4', a: 'F4:4 G#4:4', t: 'D4:4 E4:4', b: 'D3:4 E3:4', why: 'alto Fa → Sol♯: quãng 2 tăng' },
  { rule: 'h.crossing', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'C4:4 C4:4 C4:4', t: 'G4:4 A4:4 G4:4', b: 'C3:4 F3:4 C3:4', why: 'alto dưới tenor' },
  { rule: 'h.upper-third', kind: 'harmonize', s: 'E5:4 F5:4 E5:4', a: 'G4:4 C5:4 G4:4', t: 'C4:4 A3:4 C4:4', b: 'C3:4 F3:4 C3:4', why: 'alto Sol → Đô nhảy quãng 4 khi đổi hợp âm' },
  { rule: 'h.second-relation', kind: 'four-part', chords: [[0, 'major'], [3, 'major'], [4, 'major'], [0, 'major']], s: 'E5:4 F5:4 G5:4 E5:4', a: 'G4:4 A4:4 B4:4 G4:4', t: 'C4:4 C4:4 D4:4 C4:4', b: 'C3:4 F3:4 G3:4 C3:4', why: 'IV → V: soprano, alto, tenor cùng đi lên với bass' },
  { rule: 'h.primary-only', kind: 'harmonize', s: 'E5:4 E5:4 E5:4', a: 'G4:4 A4:4 G4:4', t: 'C4:4 C4:4 C4:4', b: 'C3:4 A2:4 C3:4', why: 'hợp âm bậc VI (La – Đô – Mi)' },
  { rule: 'h.tonic-frame', kind: 'harmonize', s: 'D5:4 C5:4', a: 'G4:4 G4:4', t: 'B3:4 E4:4', b: 'G2:4 C3:4', why: 'mở bằng hợp âm V' },
  { rule: 'h.leap-same-chord', kind: 'harmonize', s: 'C5:4 F5:4 E5:4', a: 'G4:4 A4:4 G4:4', t: 'E4:4 C4:4 C4:4', b: 'C3:4 F3:4 C3:4', why: 'giai điệu Đô → Fa (quãng 4) mà đổi hợp âm I → IV' },
  { rule: 'h.leading-tone', kind: 'harmonize', s: 'C5:4 B4:4 G4:4', a: 'G4:4 G4:4 E4:4', t: 'E4:4 D4:4 C4:4', b: 'C3:4 G2:4 C3:4', why: 'âm dẫn Si ở giai điệu đi xuống Sol (V → I)' },
  { rule: 'h.no-v-iv', kind: 'harmonize', s: 'E5:4 D5:4 C5:4 C5:4', a: 'G4:4 G4:4 A4:4 G4:4', t: 'C4:4 B3:4 F4:4 E4:4', b: 'C3:4 G2:4 F3:4 C3:4', why: 'V rồi IV' },
  { rule: 'h.repeat-change', kind: 'harmonize', s: 'E5:4 E5:4 F5:4 E5:4', a: 'G4:4 G4:4 A4:4 G4:4', t: 'C4:4 C4:4 C4:4 C4:4', b: 'C3:4 C3:4 F3:4 C3:4', why: 'nốt giai điệu lặp, giữ nguyên hợp âm và cách xếp' },
  { rule: 'h.strong-weak', kind: 'harmonize', s: 'E5:1 F5:1 D5:1 E5:1 | C5:4', a: 'G4:1 A4:1 G4:1 G4:1 | E4:4', t: 'C4:1 C4:1 B3:1 C4:1 | G3:4', b: 'C3:1 F3:1 G3:1 C3:1 | C3:4', why: '(khuyến nghị) hợp âm I ở phách 4 (nhẹ) giữ sang phách 1 ô sau (mạnh)' },
  { rule: 'h.bass-fourths', kind: 'harmonize', s: 'E5:4 F5:4 E5:4 D5:4 C5:4', a: 'G4:4 A4:4 G4:4 G4:4 E4:4', t: 'C4:4 C4:4 C4:4 B3:4 G3:4', b: 'C3:4 F3:4 C4:4 G3:4 C3:4', why: '(khuyến nghị) bass Fa → Đô → Sol → Đô: hai lần liền nhảy quãng 4 / 5 cùng hướng' },
]

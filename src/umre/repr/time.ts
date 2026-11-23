import { add, cmp, div, eq, isPositive, lt, mul, rat, sub, ZERO, type Rational } from './rational'

/**
 * Metre and the map from a position (whole notes from the start) to bar and offset. Metric WEIGHT (which beat is
 * strong) is not decided here: textbooks differ (the counterpoint book's "phách mạnh / phách nhẹ" in 2/2 vs 4/4),
 * so beat strength belongs to a rulebook. This module only says where bars and notated beats fall.
 */
export type Meter = { readonly num: number; readonly den: number }

const POW2 = new Set([1, 2, 4, 8, 16, 32, 64])
export function meter(num: number, den: number): Meter {
  if (!Number.isInteger(num) || num < 1 || num > 64) throw new Error(`tử số nhịp không hợp lệ: ${num}`)
  if (!POW2.has(den)) throw new Error(`mẫu số nhịp phải là luỹ thừa của 2: ${den}`)
  return { num, den }
}
/** Length of one bar in whole notes (3/4 → 3/4). */
export const barLength = (m: Meter) => rat(m.num, m.den)
/** Compound metre (6/8, 9/8, 12/8): the beat is a dotted note of three units. */
export const isCompoundMeter = (m: Meter) => m.num > 3 && m.num % 3 === 0
/** The notated beat unit: 1/den, or a dotted 3/den in compound metre. */
export const beatUnit = (m: Meter) => (isCompoundMeter(m) ? rat(3, m.den) : rat(1, m.den))
export const beatsPerBar = (m: Meter) => (isCompoundMeter(m) ? m.num / 3 : m.num)

/** A metre change at a position. The first must be at 0. */
export type MeterChange = { readonly at: Rational; readonly meter: Meter }
/** One bar of a laid-out score. */
export type Bar = { readonly index: number; readonly start: Rational; readonly length: Rational; readonly meter: Meter; readonly pickup: boolean }

/**
 * Bars covering [0, end). `pickup` = length of an anacrusis bar (shorter than the metre), counted as bar 0.
 * Metre changes must fall on bar lines; a change that does not is an error (validate.ts reports it).
 */
export function layoutBars(changes: MeterChange[], end: Rational, pickup?: Rational): Bar[] {
  if (!changes.length || !eq(changes[0].at, ZERO)) throw new Error('cần một số chỉ nhịp ở vị trí 0')
  const out: Bar[] = []
  let t = ZERO
  let ci = 0
  let index = 0
  if (pickup && isPositive(pickup)) {
    out.push({ index: index++, start: ZERO, length: pickup, meter: changes[0].meter, pickup: true })
    t = pickup
  }
  while (lt(t, end) || (index === 0 && !out.length)) {
    while (ci + 1 < changes.length && cmp(changes[ci + 1].at, t) <= 0) ci++
    const m = changes[ci].meter
    const len = barLength(m)
    out.push({ index: index++, start: t, length: len, meter: m, pickup: false })
    t = add(t, len)
    if (index > 100000) throw new Error('quá nhiều ô nhịp')
  }
  return out
}
/** The bar containing a position, and the offset inside it. */
export function locate(bars: Bar[], at: Rational): { bar: Bar; offset: Rational } | null {
  let lo = 0
  let hi = bars.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const b = bars[mid]
    if (lt(at, b.start)) hi = mid - 1
    else if (!lt(at, add(b.start, b.length))) lo = mid + 1
    else return { bar: b, offset: sub(at, b.start) }
  }
  return null
}
/** Which notated beat (0-based) an offset in a bar falls on, and the remainder after that beat. */
export function beatOf(m: Meter, offset: Rational): { beat: number; rest: Rational } {
  const u = beatUnit(m)
  const q = div(offset, u)
  const beat = Math.floor(q.n / q.d)
  return { beat, rest: sub(offset, mul(u, rat(beat))) }
}

/** Tempo as quarter notes per minute from a position on. */
export type TempoChange = { readonly at: Rational; readonly quarterPerMinute: number }

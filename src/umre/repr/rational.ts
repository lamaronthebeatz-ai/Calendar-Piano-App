/**
 * Exact time. Every onset and duration in UMRE is a rational number of WHOLE NOTES (a quarter is 1/4, a triplet
 * eighth 1/12), so tuplets and long sums never drift the way floating point would.
 */
export type Rational = { readonly n: number; readonly d: number }

export class RationalError extends Error {}

const gcd = (a: number, b: number): number => {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) [a, b] = [b, a % b]
  return a
}

/** n / d, reduced, d > 0. Integers only (safe range); anything else is a programming error. */
export function rat(n: number, d = 1): Rational {
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(d)) throw new RationalError(`không phải số nguyên an toàn: ${n}/${d}`)
  if (d === 0) throw new RationalError('mẫu số bằng 0')
  if (n === 0) return ZERO
  const g = gcd(n, d)
  const s = d < 0 ? -1 : 1
  return { n: (s * n) / g, d: (s * d) / g }
}
export const ZERO: Rational = { n: 0, d: 1 }

export const add = (a: Rational, b: Rational) => rat(a.n * b.d + b.n * a.d, a.d * b.d)
export const sub = (a: Rational, b: Rational) => rat(a.n * b.d - b.n * a.d, a.d * b.d)
export const mul = (a: Rational, b: Rational) => rat(a.n * b.n, a.d * b.d)
export const div = (a: Rational, b: Rational) => {
  if (b.n === 0) throw new RationalError('chia cho 0')
  return rat(a.n * b.d, a.d * b.n)
}
/** −1, 0 or 1. */
export const cmp = (a: Rational, b: Rational) => Math.sign(a.n * b.d - b.n * a.d)
export const eq = (a: Rational, b: Rational) => a.n === b.n && a.d === b.d
export const lt = (a: Rational, b: Rational) => cmp(a, b) < 0
export const le = (a: Rational, b: Rational) => cmp(a, b) <= 0
export const gt = (a: Rational, b: Rational) => cmp(a, b) > 0
export const max = (a: Rational, b: Rational) => (lt(a, b) ? b : a)
export const min = (a: Rational, b: Rational) => (lt(a, b) ? a : b)
export const sum = (xs: Rational[]) => xs.reduce(add, ZERO)
export const isZero = (a: Rational) => a.n === 0
export const isPositive = (a: Rational) => a.n > 0
export const toNumber = (a: Rational) => a.n / a.d
export const format = (a: Rational) => (a.d === 1 ? `${a.n}` : `${a.n}/${a.d}`)
/** Structural check for data that came from outside (JSON, an adapter). */
export const isRational = (x: unknown): x is Rational => {
  const r = x as Rational
  return !!r && Number.isSafeInteger(r.n) && Number.isSafeInteger(r.d) && r.d > 0 && gcd(r.n, r.d) === (r.n === 0 ? r.d : 1) && (r.n !== 0 || r.d === 1)
}

/* ---------- conversions to the app's older time units ---------- */

/** Quarters (counterpoint model) → whole notes. Fractional quarters must be exact binary/ternary fractions. */
export function fromQuarters(q: number): Rational {
  for (const d of [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64]) if (Number.isInteger(q * d)) return rat(q * d, 4 * d)
  throw new RationalError(`không đổi được ${q} phách đen thành phân số`)
}
export const toQuarters = (a: Rational) => toNumber(mul(a, rat(4)))
/** Ticks at `tpq` ticks per quarter (compose model: 240) → whole notes. */
export const fromTicks = (ticks: number, tpq: number) => rat(ticks, 4 * tpq)
/** Whole notes → ticks; refuses a value that is not a whole number of ticks (it would be silently rounded). */
export function toTicks(a: Rational, tpq: number): number {
  const t = mul(a, rat(4 * tpq))
  if (t.d !== 1) throw new RationalError(`${format(a)} nốt tròn không phải số nguyên tick ở ${tpq} tick/nốt đen`)
  return t.n
}

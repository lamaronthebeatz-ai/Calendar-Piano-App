import type { Note as CalcNote } from '../../../features/tools/harmony'
import { spelling, type Spelling } from '../pitch'

/** Bridge to the calculators' spelled note (features/tools/harmony.ts): {l, a} ⇄ Spelling. Same convention, renamed fields. */
export const fromCalcNote = (n: CalcNote): Spelling => spelling(n.l, n.a)
export const toCalcNote = (s: Spelling): CalcNote => ({ l: s.letter, a: s.alter })

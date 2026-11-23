import type { Rational } from './rational'
import type { Id } from './score'

/**
 * Formal structure as a tree of spans: motif ⊂ phrase ⊂ period ⊂ section ⊂ movement. Kinds are the common vocabulary;
 * what counts as a "period" or a "sentence" differs between schools (Sposobin vs Caplin), so `system` names the
 * framework the segmentation follows and `provenance` who made it.
 */
export type FormKind = 'motif' | 'subphrase' | 'phrase' | 'period' | 'sentence' | 'section' | 'movement' | 'other'

export type FormNode = {
  readonly id: Id
  readonly kind: FormKind
  /** Label in the system's own terms: "A", "câu 1", "đoạn phát triển", "a′". */
  readonly label: string
  readonly start: Rational
  readonly end: Rational
  readonly system?: string
  readonly provenance: { readonly kind: 'source' | 'analysis' | 'user' | 'exercise'; readonly ref?: string }
  readonly children?: readonly FormNode[]
}

/** Every node, depth first. */
export function walkForm(nodes: readonly FormNode[], visit: (n: FormNode, depth: number) => void, depth = 0) {
  for (const n of nodes) {
    visit(n, depth)
    if (n.children) walkForm(n.children, visit, depth + 1)
  }
}

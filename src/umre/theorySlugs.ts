/**
 * Which library articles state rules the engine applies (no imports, so the theory page can test a slug without
 * loading UMRE). Counterpoint: each rule's own `ref` (features/counterpoint/rules.ts). Harmony: the articles whose
 * lines the rulebook's Rimsky-Korsakov citations were read from (rulebook/harmony.ts, checked by harmony.test.ts).
 */
export const HARMONY_RULE_ARTICLES: Record<string, readonly string[]> = {
  'luat-hoa-am-bon-be': ['h.chord-tones', 'h.root-position', 'h.double-root', 'h.spacing', 'h.parallels', 'h.augmented', 'h.crossing'],
  'the-dao-hop-am': ['h.double-root'],
  'noi-hop-am': ['h.upper-third', 'h.second-relation'],
  'phoi-hoa-am-giai-dieu': ['h.primary-only', 'h.tonic-frame', 'h.leap-same-chord', 'h.repeat-change', 'h.strong-weak', 'h.bass-fourths', 'h.leading-tone', 'h.no-v-iv'],
}
export const COUNTERPOINT_RULE_ARTICLES = ['doi-vi-don-gian-hai-be', 'doi-vi-chuyen-dong-chieu-doc', 'giai-dieu-phuc-dieu-nghiem-khac', 'doi-am-ba-bon-be'] as const
export const hasUmreRules = (slug: string) => slug in HARMONY_RULE_ARTICLES || (COUNTERPOINT_RULE_ARTICLES as readonly string[]).includes(slug)

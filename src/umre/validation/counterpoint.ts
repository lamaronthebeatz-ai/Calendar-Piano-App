import { barQ, pitchName, type Seg } from '../../features/counterpoint/model'
import { mcheck, mverify, ROMAN, shiftLine, totalOfM, original as mOriginal, type MProblem } from '../../features/counterpoint/multi'
import { check, totalOf, versionsOf, type Problem } from '../../features/counterpoint/rules'
import { verify } from '../../features/counterpoint/verify'
import { toCounterpoint } from '../repr/adapters/counterpoint'
import { intervalName, between } from '../repr/interval'
import { fromDiatonic } from '../repr/pitch'
import { fromQuarters, min as minR, rat, sub, toQuarters } from '../repr/rational'
import { notesOf, type Score } from '../repr/score'
import { validateScore } from '../repr/validate'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from '../rulebook/counterpoint'
import type { Rulebook, RuleSpec } from '../rulebook/rulebook'
import type { Task } from '../task'
import { MULTI_VOICE, TWO_VOICE, toMProblem, toProblem, type MultiVoiceParams, type TwoVoiceParams } from '../domains/counterpoint/task'
import { evaluate } from '../rules/lang'
import { consonanceOf, COUNTERPOINT_RULES, VERSION_RULES } from '../rules/counterpoint'
import { textureQueries } from '../rules/queries'
import { multiVersions, twoVoiceVersions } from '../domains/counterpoint/versions'
import type { ConsonanceDef } from '../repr/texture'
import { lineFaults, pairFaults, perfectFourths } from './native'
import { INDEPENDENT } from './coverage'
import { digest, type AppliedException, type CheckerInfo, type Location, type RuleOutcome, type ValidationResult, type Validator, type Violation } from './types'

/**
 * Validators for counterpoint solutions. The verdict on each hard rule comes from INDEPENDENT checkers only:
 *  - `verify` — features/counterpoint/verify.ts, written apart from the search's rules.ts on a quarter-note grid;
 *  - `umre-native` — validation/native.ts, a third implementation on the UMRE representation (a subset of rules).
 * The search's own checker (rules.ts `check` / multi.ts `mcheck`) is run too, but only as a witness: it alone can
 * never make a rule pass or fail; if it reports a hard fault the independent checkers do not, the rule is
 * `disputed` and the solution is UNKNOWN (the counterpoint page's own policy: a disagreement is never an answer).
 */
export const CP_VALIDATOR_VERSION = '1'
const ORIGINAL = 'Nguyên thể'

const CHECKERS: CheckerInfo[] = [
  { id: 'verify', independent: true, description: 'Bộ kiểm độc lập của mô-đun phức điệu (verify.ts), viết riêng, không dùng rules.ts' },
  { id: 'umre-native', independent: true, description: 'Bộ kiểm viết lại trên biểu diễn UMRE (native.ts): giai điệu, phản hồi bước nhảy, nhắc ba lần, đi liền đến hết bài; chéo bè, song song quãng hoàn toàn, ba quãng hoàn toàn liền — chỉ ở nguyên thể' },
  { id: 'umre-rules', independent: true, description: 'Luật viết bằng ngôn ngữ luật UMRE (rules/counterpoint.ts) theo câu chữ giáo trình, đánh giá bằng bộ thông dịch chung (rules/lang.ts) — chiều dọc chỉ ở nguyên thể' },
  { id: 'search-rules', independent: false, description: 'Bộ kiểm của chính bộ giải (rules.ts / mcheck): chỉ làm nhân chứng và chấm luật mềm' },
]
/** Rules compared as one family: checkers may name the members differently. */
const family = (r: string) => (r === 'dis-strong' || r === 'dis-weak' || r === 'suspension' ? 'dissonance' : r === 'leap3-response' ? 'leap-response' : r === 'gap' ? 'no-gap' : r)

/** One fault from any checker, in quarters (the module's unit) and with the voices / pair it concerns. */
type Raw = { checker: string; rule: string; t: number; version: string; voices: number[]; detail?: string }

type Ctx = {
  task: Task
  rulebook: Rulebook
  solution: Score
  key: Problem['key']
  meter: Problem['meter']
  /** lines of the solution, top to bottom */
  lines: Seg[][]
  /** voices of the version label → its lines top to bottom (for the "actual" text) */
  versionLines: (label: string) => Seg[][] | null
  notApplicable: Map<string, string>
  /** the task has versions besides the original (checkers that look at the original only are then incomplete) */
  hasVersions: boolean
}

const unsupported = (task: Task, rb: Rulebook, v: Validator): ValidationResult | null => {
  const versions = v.rulebooks[rb.id]
  if (versions?.includes(rb.version)) return null
  return empty(task, rb, v.id, 'UNKNOWN', [`Sổ luật ${rb.id}@${rb.version} không được bộ kiểm ${v.id} hỗ trợ (hỗ trợ: ${Object.entries(v.rulebooks).map(([k, vs]) => `${k}@${vs.join('|')}`).join(', ')})`])
}

function empty(task: Task, rb: Rulebook, id: string, status: ValidationResult['status'], reasons: string[], violations: Violation[] = [], solution?: Score): ValidationResult {
  return {
    status, reasons, taskId: task.id, rulebook: { id: rb.id, version: rb.version }, validator: { id, version: CP_VALIDATOR_VERSION }, checkers: CHECKERS,
    violations, advisories: [], provisional: [], outcomes: [],
    coverage: { hardRules: rb.rules.filter((r) => r.severity === 'hard').length, checked: 0, passed: 0, violated: 0, uncheckable: 0, disputed: 0, notApplicable: 0, softChecked: 0, exceptionsApplied: [], ratio: 0 },
    inputDigest: digest({ task, solution: solution ?? null, rulebook: { id: rb.id, version: rb.version } }),
  }
}

function locate(ctx: Ctx, t: number, version: string, voices: number[]): Location {
  const bar = barQ(ctx.meter)
  const at = fromQuarters(t)
  const measure = Math.floor(t / bar) + 1
  const ids: string[] = []
  if (version === ORIGINAL || version.startsWith('bè ')) {
    for (const i of voices) {
      const v = ctx.solution.voices[i]
      for (const n of notesOf(v)) if (toQuarters(n.onset) <= t && t < toQuarters(n.onset) + toQuarters(n.duration)) ids.push(n.id)
    }
  }
  return { at, measure, offset: sub(at, fromQuarters((measure - 1) * bar)), version, voices: voices.map((i) => ctx.solution.voices[i].id), eventIds: ids }
}

function actualText(ctx: Ctx, t: number, version: string, voices: number[]): string {
  const lines = ctx.versionLines(version.startsWith('bè ') ? ORIGINAL : version)
  if (!lines) return `t = ${t} phách đen (${version})`
  const at = (l: Seg[]) => l.find((s) => s.start <= t && t < s.start + s.dur)
  const orig = version === ORIGINAL || version.startsWith('bè ')
  const parts = voices.map((i, k) => {
    const s = lines[i] && at(lines[i])
    return `${orig ? `bè ${ROMAN[i]}` : voices.length === 2 ? (k ? 'bè dưới' : 'bè trên') : `bè ${ROMAN[i]}`}: ${s ? pitchName(s.p, false) : '—'}`
  })
  if (voices.length === 2) {
    const a = lines[voices[0]] && at(lines[voices[0]])
    const b = lines[voices[1]] && at(lines[voices[1]])
    if (a && b) parts.push(`quãng ${intervalName(between(fromDiatonic(b.p.step, b.p.alter), fromDiatonic(a.p.step, a.p.alter)))}`)
  }
  const prev = voices.length === 1 ? lines[voices[0]]?.filter((s) => s.start < t).slice(-2).map((s) => pitchName(s.p, false)) : []
  return `${orig ? '' : `[${version}] `}${parts.join(' · ')}${prev?.length ? ` (trước đó: ${prev.join(' → ')})` : ''} — ô ${Math.floor(t / barQ(ctx.meter)) + 1}`
}

function violation(ctx: Ctx, spec: RuleSpec, raw: Raw[]): Violation {
  const r = raw[0]
  return {
    ruleId: spec.id, rulebookId: ctx.rulebook.id, rulebookVersion: ctx.rulebook.version, severity: spec.severity,
    location: locate(ctx, r.t, r.version, r.voices),
    actual: actualText(ctx, r.t, r.version, r.voices) + (r.detail ? ` — ${r.detail}` : ''),
    expected: spec.statement,
    description: `${spec.statement} (vi phạm tại ô ${Math.floor(r.t / barQ(ctx.meter)) + 1}${r.version !== ORIGINAL ? `, ${r.version}` : ''})`,
    citations: spec.citations,
    checkers: [...new Set(raw.map((x) => x.checker))],
  }
}

/** Turn every checker's faults into rule outcomes, violations and the status. */
function judge(ctx: Ctx, v: Validator, raws: Raw[], extra: { reasons: string[]; incomplete: boolean; exceptions: AppliedException[]; dissonanceOutOfScope?: (r: Raw) => string | undefined }): ValidationResult {
  const rb = ctx.rulebook
  const outcomes: RuleOutcome[] = []
  const violations: Violation[] = []
  const advisories: Violation[] = []
  const provisional: Violation[] = []
  const reasons = [...extra.reasons]
  const byRule = (checker: string, rule: string) => raws.filter((r) => r.checker === checker && r.rule === rule)
  const key = (r: Raw) => `${family(r.rule)}|${r.voices.join(',')}|${r.t}|${r.version.startsWith('bè ') ? ORIGINAL : r.version}`

  for (const spec of rb.rules) {
    const na = ctx.notApplicable.get(spec.id)
    if (spec.severity === 'soft') {
      const s = byRule('search-rules', spec.id)
      outcomes.push({ ruleId: spec.id, severity: 'soft', outcome: na ? 'not-applicable' : s.length ? 'fail' : 'pass', checkers: [{ id: 'search-rules', independent: false, faults: s.length, complete: true }], ...(na ? { note: na } : {}) })
      if (!na && !extra.incomplete) for (const x of s) advisories.push(violation(ctx, spec, [x]))
      continue
    }
    if (na) {
      outcomes.push({ ruleId: spec.id, severity: 'hard', outcome: 'not-applicable', checkers: [], note: na })
      continue
    }
    const covering = INDEPENDENT.filter((x) => x.covers(spec.id))
    if (spec.id === 'suspension') {
      const dis = raws.filter((r) => r.checker !== 'search-rules' && family(r.rule) === 'dissonance')
      outcomes.push({
        ruleId: spec.id, severity: 'hard', outcome: dis.length ? 'subsumed' : 'pass',
        checkers: INDEPENDENT.filter((x) => x.covers('dis-strong')).map((x) => ({ id: x.id, independent: true, faults: 0, complete: !(x.originalOnly('dis-strong') && ctx.hasVersions) })),
        note: 'nốt lưu được xét bên trong luật quãng nghịch; lỗi (nếu có) báo ở dis-strong / dis-weak',
      })
      continue
    }
    if (!covering.length) {
      outcomes.push({ ruleId: spec.id, severity: 'hard', outcome: 'not-checked', checkers: [], note: 'không bộ kiểm độc lập nào phủ luật này' })
      continue
    }
    const found = covering.map((x) => byRule(x.id, spec.id))
    const fs = byRule('search-rules', spec.id)
    const checkers = [
      ...covering.map((x, i) => ({ id: x.id, independent: true, faults: found[i].length, complete: !(x.originalOnly(spec.id) && ctx.hasVersions) })),
      { id: 'search-rules', independent: false, faults: fs.length, complete: true },
    ]
    // every two independent checkers are compared where both look (a checker of the original only is compared there)
    let disputed = false
    for (let i = 0; i < covering.length; i++)
      for (let j = i + 1; j < covering.length; j++) {
        const narrow = covering[i].originalOnly(spec.id) || covering[j].originalOnly(spec.id)
        const scope = (r: Raw) => !narrow || r.version === ORIGINAL || r.version.startsWith('bè ')
        const a = new Set(found[i].filter(scope).map(key))
        const b = new Set(found[j].filter(scope).map(key))
        if (a.size !== b.size || [...a].some((k) => !b.has(k))) {
          disputed = true
          reasons.push(`Bộ kiểm độc lập bất đồng ở luật ${spec.id}: ${covering[i].id} ${[...a].join(' ') || '∅'} / ${covering[j].id} ${[...b].join(' ') || '∅'}`)
        }
      }
    const indep = found.flat()
    if (!disputed && !indep.length && fs.length) {
      disputed = true
      reasons.push(`Bộ kiểm của bộ giải báo ${spec.id} (${fs.map((x) => `t=${x.t} ${x.version}`).join(', ')}) mà bộ kiểm độc lập không thấy`)
    }
    const outcome: RuleOutcome['outcome'] = disputed ? 'disputed' : indep.length ? 'fail' : 'pass'
    outcomes.push({ ruleId: spec.id, severity: 'hard', outcome, checkers })
    if (outcome !== 'fail' && outcome !== 'disputed') continue
    // one violation per (place, version), carrying every checker that saw it
    const groups = new Map<string, Raw[]>()
    for (const r of [...indep, ...fs]) {
      const k = `${r.t}|${r.version.replace(/^bè .*/, ORIGINAL)}|${r.voices.join(',')}`
      if (!groups.has(k)) groups.set(k, [])
      groups.get(k)!.push(r)
    }
    for (const g of groups.values()) {
      if (!g.some((r) => r.checker !== 'search-rules')) continue
      const vio = violation(ctx, spec, g.sort((a, b) => (a.checker === 'search-rules' ? 1 : 0) - (b.checker === 'search-rules' ? 1 : 0)))
      const out = family(spec.id) === 'dissonance' ? extra.dissonanceOutOfScope?.(g[0]) : undefined
      const full = out ? { ...vio, exceptionOutOfScope: out } : vio
      if (extra.incomplete) provisional.push(full)
      else if (outcome === 'fail') violations.push(full)
    }
  }

  const hard = outcomes.filter((o) => o.severity === 'hard')
  const n = (k: RuleOutcome['outcome']) => hard.filter((o) => o.outcome === k).length
  const notApplicable = n('not-applicable')
  const checked = hard.length - notApplicable - n('not-checked')
  const coverage = {
    hardRules: hard.length, checked, passed: n('pass') + n('subsumed'), violated: n('fail'), uncheckable: n('not-checked'), disputed: n('disputed'), notApplicable,
    softChecked: outcomes.filter((o) => o.severity === 'soft' && o.outcome !== 'not-applicable').length,
    exceptionsApplied: extra.exceptions, ratio: hard.length - notApplicable ? checked / (hard.length - notApplicable) : 0,
  }
  let status: ValidationResult['status']
  if (extra.incomplete) status = 'INCOMPLETE'
  else if (coverage.violated) status = 'INVALID'
  else if (coverage.disputed || coverage.uncheckable) status = 'UNKNOWN'
  else status = 'VALID'
  if (status === 'UNKNOWN' && coverage.uncheckable) reasons.push(`${coverage.uncheckable} luật bắt buộc không có bộ kiểm độc lập: ${hard.filter((o) => o.outcome === 'not-checked').map((o) => o.ruleId).join(', ')}`)
  return {
    status, reasons, taskId: ctx.task.id, rulebook: { id: rb.id, version: rb.version }, validator: { id: v.id, version: v.version }, checkers: CHECKERS,
    violations, advisories, provisional, outcomes, coverage,
    inputDigest: digest({ task: ctx.task, solution: ctx.solution, rulebook: { id: rb.id, version: rb.version } }),
  }
}

/** Structural problems of the solution itself (umre.repr) and task conformance (umre.task): hard, no rulebook source. */
function preflight(task: Task, solution: Score, rb: Rulebook, vid: string, expectVoices: number, fixed: (i: number) => Seg[] | null): ValidationResult | { lines: Seg[][]; incomplete: number[] } {
  const errs = validateScore(solution).filter((i) => i.severity === 'error')
  const at0 = { at: rat(0), measure: 1, offset: rat(0), voices: [], eventIds: [] }
  const sys = (ruleId: string, rulebookId: string, text: string, ids: string[] = []): Violation => ({
    ruleId, rulebookId, rulebookVersion: '1', severity: 'hard', location: { ...at0, eventIds: ids }, actual: text, expected: '', description: text, citations: [], checkers: ['umre-structure'],
  })
  if (errs.length) return empty(task, rb, vid, 'INVALID', ['Tổng phổ lời giải hỏng cấu trúc'], errs.map((e) => sys(`repr.${e.code}`, 'umre.repr', `${e.message} (${e.path})`, e.ids ? [...e.ids] : [])), solution)
  if (solution.voices.length < expectVoices) return empty(task, rb, vid, 'INCOMPLETE', [`Lời giải có ${solution.voices.length} bè, bài cần ${expectVoices}`], [], solution)
  if (solution.voices.length > expectVoices) return empty(task, rb, vid, 'INVALID', ['Thừa bè'], [sys('task.voices', 'umre.task', `Lời giải có ${solution.voices.length} bè, bài chỉ có ${expectVoices}`)], solution)
  let lines: Seg[][]
  try {
    lines = toCounterpoint(solution).lines
  } catch (e) {
    return empty(task, rb, vid, 'UNKNOWN', [`Không chuyển được lời giải sang mô-đun phức điệu: ${(e as Error).message}`], [], solution)
  }
  const same = (a: Seg[], b: Seg[]) => a.length === b.length && a.every((s, i) => s.start === b[i].start && s.dur === b[i].dur && s.p.midi === b[i].p.midi && s.p.step === b[i].p.step && !!s.tied === !!b[i].tied)
  const changed: Violation[] = []
  lines.forEach((l, i) => {
    const f = fixed(i)
    if (f && !same(l, f)) changed.push(sys('task.given-preserved', 'umre.task', `Bè ${ROMAN[i]} là bè đề nhưng lời giải đã sửa nó`, solution.voices[i].events.map((e) => e.id)))
  })
  if (changed.length) return empty(task, rb, vid, 'INVALID', ['Lời giải không giữ nguyên bè đề'], changed, solution)
  const incomplete = lines.map((_, i) => i).filter((i) => !fixed(i) && !lines[i].length)
  return { lines, incomplete }
}

/* ---------------- two voices ---------------- */

export const twoVoiceValidator: Validator = {
  id: 'umre.validate.counterpoint.two-voice',
  version: CP_VALIDATOR_VERSION,
  taskTypes: [TWO_VOICE],
  rulebooks: { [COUNTERPOINT_RULEBOOK_ID]: [COUNTERPOINT_RULEBOOK_VERSION] },
  validate(task, solution, rulebook) {
    const no = unsupported(task, rulebook, this)
    if (no) return no
    const t = task as Task<TwoVoiceParams>
    const p = toProblem(t)
    const gi = p.givenIs === 'I' ? 0 : 1
    const ci = 1 - gi
    const pre = preflight(task, solution, rulebook, this.id, 2, (i) => (i === gi ? p.given : null))
    if ('status' in pre) return pre
    const cp = pre.lines[ci]
    if (!cp.length) return empty(task, rulebook, this.id, 'INCOMPLETE', ['Bè đối vị trống'], [], solution)
    const total = totalOf(p)
    const cpEnd = cp[cp.length - 1].start + cp[cp.length - 1].dur
    const incomplete = cpEnd < total && cp.every((s, i) => i === 0 || s.start === cp[i - 1].start + cp[i - 1].dur)
    const versions = versionsOf(p, cp)
    const ctx: Ctx = {
      task, rulebook, solution, key: p.key, meter: p.meter, lines: pre.lines,
      versionLines: (label) => {
        const v = versions.find((x) => x.label === label)
        if (!v) return null
        return v.motion === 'swap' ? [v.II, v.I] : [v.I, v.II]
      },
      hasVersions: p.versions.length > 0,
      notApplicable: new Map([
        ['hidden-hard', 'chỉ cho ba – bốn bè'],
        ...(p.stars.length ? [] : ([['star', 'đề không có ✱']] as [string, string][])),
        ...(p.starsOnly ? [] : ([['star-extra', 'đề không giới hạn quãng nghịch phách mạnh vào chỗ ✱']] as [string, string][])),
      ]),
    }
    const bar = barQ(p.meter)
    const level = (t: number) => (t % bar === 0 ? 3 : 2)
    const raws: Raw[] = []
    const lineRules = new Set(['gap', 'seg-place', 'tie', 'end', 'leap', 'rhythm-change', 'repeat3', 'leap-response'])
    const cpSounding = (t: number) => {
      // leap size before the note at t, for naming leap-response vs leap3-response
      const ns = cp.filter((s) => !s.tied)
      const k = ns.findIndex((s) => s.start === t)
      return k >= 2 ? Math.abs(ns[k - 1].p.step - ns[k - 2].p.step) : 0
    }
    for (const f of verify(p, cp)) {
      let rule = f.rule === 'gap' ? 'no-gap' : f.rule
      if (rule === 'dissonance') rule = level(f.t) === 3 ? 'dis-strong' : 'dis-weak'
      if (rule === 'leap-response' && cpSounding(f.t) === 2) rule = 'leap3-response'
      const line = lineRules.has(f.rule)
      raws.push({ checker: 'verify', rule, t: f.t, version: f.version, voices: line ? [ci] : [0, 1] })
    }
    const end = fromQuarters(total)
    for (const f of lineFaults(solution.voices[ci], end)) raws.push({ checker: 'umre-native', rule: f.rule, t: toQuarters(f.at), version: ORIGINAL, voices: [ci] })
    for (const f of pairFaults(solution.voices[0], solution.voices[1], end)) raws.push({ checker: 'umre-native', rule: f.rule, t: toQuarters(f.at), version: ORIGINAL, voices: [0, 1] })
    const cons = consonanceOf(rulebook)
    const ev = evaluate(COUNTERPOINT_RULES, textureQueries({ score: solution, lines: [ci], pairs: [[0, 1]], end, consonance: () => cons, stars: p.stars, starsOnly: p.starsOnly }), new Set(p.quarterPrep ? ['quarter-prep'] : []))
    for (const h of ev.hits) raws.push({ checker: 'umre-rules', rule: h.ruleId, t: h.item.at, version: ORIGINAL, voices: [...h.item.voices] })
    for (const vt of twoVoiceVersions(solution, p.versions)) {
      const vev = evaluate(VERSION_RULES, textureQueries({ score: vt.score, lines: [], pairs: [[0, 1]], end: minR(vt.end, end), consonance: () => cons, inVersion: true }), new Set(p.quarterPrep ? ['quarter-prep'] : []))
      for (const h of vev.hits) raws.push({ checker: 'umre-rules', rule: h.ruleId, t: h.item.at, version: vt.label, voices: [0, 1] })
    }
    const rep = check(p, cp, total)
    for (const x of [...rep.hard, ...rep.soft]) {
      const line = ['seg-place', 'tie', 'end', 'leap', 'rhythm-change', 'repeat3', 'repeat', 'leap-response', 'leap3-response', 'two-leaps', 'chromatic-near', 'tritone-line', 'range', 'cadence-step'].includes(x.rule)
      raws.push({ checker: 'search-rules', rule: x.rule, t: x.t, version: x.version, voices: line ? [ci] : [0, 1], detail: x.detail })
    }
    // exceptions the rule checker applied (the teacher's quarter-note preparation), once per place
    const exceptions: AppliedException[] = []
    for (const x of ev.exceptions)
      if (!exceptions.some((e) => e.exceptionId === x.exceptionId && toQuarters(e.location.at) === x.item.at))
        exceptions.push({ exceptionId: x.exceptionId, location: locate(ctx, x.item.at, ORIGINAL, [...x.item.voices]), detail: `nới luật ${x.ruleId}: nốt đen nối sang nốt lưu (tuỳ chọn của đề)` })
    // two voices never get the upper-pair fourth: a fourth judged dissonant is flagged as outside that exception
    const fourthOutOfScope = (r: Raw) => {
      const lines = ctx.versionLines(r.version)
      const at = (l: Seg[]) => l?.find((x) => x.start <= r.t && r.t < x.start + x.dur)
      const u = lines && at(lines[0])
      const l = lines && at(lines[1])
      if (!u || !l) return undefined
      const iv = between(fromDiatonic(l.p.step, l.p.alter), fromDiatonic(u.p.step, u.p.alter))
      return iv.steps >= 0 && iv.steps % 7 === 3 && /^P/.test(intervalName(iv)) ? 'fourth-upper-pair' : undefined
    }
    if (incomplete) {
      const r = judge(ctx, this, raws.filter((x) => x.rule !== 'end'), { reasons: [`Bè đối vị dừng ở ${cpEnd} phách đen, bài dài ${total}: chưa đủ để kết luận`], incomplete: true, exceptions })
      return r
    }
    return judge(ctx, this, raws, { reasons: [], incomplete: false, exceptions, dissonanceOutOfScope: fourthOutOfScope })
  },
}

/* ---------------- three or four voices ---------------- */

export const multiVoiceValidator: Validator = {
  id: 'umre.validate.counterpoint.multi-voice',
  version: CP_VALIDATOR_VERSION,
  taskTypes: [MULTI_VOICE],
  rulebooks: { [COUNTERPOINT_RULEBOOK_ID]: [COUNTERPOINT_RULEBOOK_VERSION] },
  validate(task, solution, rulebook) {
    const no = unsupported(task, rulebook, this)
    if (no) return no
    const t = task as Task<MultiVoiceParams>
    const mp: MProblem = toMProblem(t)
    const n = mp.voices.length
    const pre = preflight(task, solution, rulebook, this.id, n, (i) => (mp.free[i] ? null : mp.voices[i]))
    if ('status' in pre) return pre
    const lines = pre.lines
    if (pre.incomplete.length) return empty(task, rulebook, this.id, 'INCOMPLETE', [`Bè tự do còn trống: ${pre.incomplete.map((i) => ROMAN[i]).join(', ')}`], [], solution)
    const total = totalOfM(mp)
    const versions = [mOriginal(n), ...mp.versions]
    const ctx: Ctx = {
      task, rulebook, solution, key: mp.key, meter: mp.meter, lines,
      versionLines: (label) => {
        const v = versions.find((x) => x.label === label.split(' · ')[0])
        return v ? lines.map((l, i) => (v.steps[i] ? shiftLine(mp.key, v.steps[i], l) : l)) : null
      },
      hasVersions: mp.versions.length > 0,
      notApplicable: new Map([['star', 'bài nhiều bè không có ✱'], ['star-extra', 'bài nhiều bè không có ✱']]),
    }
    const bar = barQ(mp.meter)
    const raws: Raw[] = []
    const pairOf = (name: string) => name.split('–').map((r) => ROMAN.indexOf(r))
    for (const s of mverify(mp, lines)) {
      const m = /^(.*): ([a-z0-9-]+)@(-?[\d.]+)$/.exec(s)
      if (!m) throw new Error(`không đọc được lỗi của mverify: ${s}`)
      const [label, raw, tt] = [m[1], m[2], +m[3]]
      let rule = raw === 'gap' ? 'no-gap' : raw
      if (rule === 'dissonance') rule = tt % bar === 0 ? 'dis-strong' : 'dis-weak'
      if (label.startsWith('bè ')) {
        const i = ROMAN.indexOf(label.slice(3))
        if (rule === 'leap-response') {
          const ns = lines[i].filter((x) => !x.tied)
          const k = ns.findIndex((x) => x.start === tt)
          if (k >= 2 && Math.abs(ns[k - 1].p.step - ns[k - 2].p.step) === 2) rule = 'leap3-response'
        }
        raws.push({ checker: 'verify', rule, t: tt, version: label, voices: [i] })
      } else {
        const [ver, pair] = label.split(' · ')
        raws.push({ checker: 'verify', rule, t: tt, version: `${ver} · ${pair}`, voices: pairOf(pair) })
      }
    }
    const end = fromQuarters(total)
    const ORIG_PAIR = (a: number, b: number) => `${ORIGINAL} · ${ROMAN[a]}–${ROMAN[b]}`
    for (let i = 0; i < n; i++) if (mp.free[i]) for (const f of lineFaults(solution.voices[i], end)) raws.push({ checker: 'umre-native', rule: f.rule, t: toQuarters(f.at), version: `bè ${ROMAN[i]}`, voices: [i] })
    for (let a = 0; a < n; a++)
      for (let b = a + 1; b < n; b++) {
        if (!mp.free[a] && !mp.free[b]) continue
        for (const f of pairFaults(solution.voices[a], solution.voices[b], end)) raws.push({ checker: 'umre-native', rule: f.rule, t: toQuarters(f.at), version: ORIG_PAIR(a, b), voices: [a, b] })
      }
    // the rule checker: the original, every line of a free voice, every pair holding one; upper pairs count the fourth
    const base = consonanceOf(rulebook)
    const withFourth: ConsonanceDef = { ...base, imperfect: [...base.imperfect, [3, 'P']] }
    const isUpper = (a: number, b: number) => b === a + 1 && b <= n - 2
    const outerSomewhere = new Set(mp.versions.length ? versions.map((v) => [v.order[0], v.order[n - 1]].sort().join(',')) : [])
    const rulePairs: [number, number][] = []
    for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) if (mp.free[a] || mp.free[b]) rulePairs.push([a, b])
    const ev = evaluate(COUNTERPOINT_RULES, textureQueries({
      score: solution, lines: mp.free.flatMap((f, i) => (f ? [i] : [])), pairs: rulePairs, end,
      consonance: ([a, b]) => (isUpper(a, b) ? withFourth : base),
      role: ([a, b]) => ({ outer: a === 0 && b === n - 1, outerSomewhere: outerSomewhere.has([a, b].sort().join(',')) }),
    }), new Set())
    for (const h of ev.hits) raws.push({ checker: 'umre-rules', rule: h.ruleId, t: h.item.at, version: h.item.voices.length === 1 ? `bè ${ROMAN[h.item.voices[0]]}` : ORIGINAL, voices: [...h.item.voices] })
    for (const mv of multiVersions(solution, mp.versions)) {
      const ord = mv.order
      const pairs: [number, number][] = []
      const rank = (i: number) => ord.indexOf(i)
      for (let x = 0; x < n; x++) for (let y = x + 1; y < n; y++) if (mp.free[ord[x]] || mp.free[ord[y]]) pairs.push([ord[x], ord[y]])
      const vev = evaluate(VERSION_RULES, textureQueries({
        score: mv.score, lines: [], pairs, end: minR(mv.end, end), inVersion: true,
        consonance: ([a, b]) => (rank(b) === rank(a) + 1 && rank(b) <= n - 2 ? withFourth : base),
        role: ([a, b]) => ({ outer: rank(a) === 0 && rank(b) === n - 1, outerSomewhere: outerSomewhere.has([a, b].sort().join(',')) }),
      }), new Set())
      for (const h of vev.hits) raws.push({ checker: 'umre-rules', rule: h.ruleId, t: h.item.at, version: `${mv.label} · ${ROMAN[h.item.voices[0]]}–${ROMAN[h.item.voices[1]]}`, voices: [...h.item.voices] })
    }
    // the native and verify versions of an original pair are compared under one label
    for (const r of raws) if (r.version.startsWith(ORIGINAL + ' · ')) r.version = ORIGINAL
    const rep = mcheck(mp, lines)
    for (const x of [...rep.hard, ...rep.soft]) {
      const [ver, pair] = x.version.split(' · ')
      const voices = pair ? pairOf(pair) : [ROMAN.indexOf(x.version.slice(3))]
      raws.push({ checker: 'search-rules', rule: x.rule, t: x.t, version: pair ? (ver === ORIGINAL ? ORIGINAL : x.version) : x.version, voices, detail: x.detail })
    }
    // the upper-pair fourth: report where it was used, and flag a fourth judged dissonant outside its scope
    const upper = (a: number, b: number) => b === a + 1 && b <= n - 2
    const exceptions: AppliedException[] = []
    for (let a = 0; a + 1 < n; a++)
      if (upper(a, a + 1))
        for (const o of perfectFourths(solution.voices[a], solution.voices[a + 1], end))
          exceptions.push({ exceptionId: 'fourth-upper-pair', location: locate(ctx, toQuarters(o.at), ORIGINAL, [a, a + 1]), detail: `quãng 4 đúng ${ROMAN[a]}–${ROMAN[a + 1]} được tính là thuận` })
    const fourthAt = (r: Raw) => {
      if (r.voices.length !== 2 || (r.version !== ORIGINAL && !r.version.startsWith(ORIGINAL))) return undefined
      const [a, b] = r.voices
      if (upper(a, b)) return undefined
      const sa = lines[a].find((s) => s.start <= r.t && r.t < s.start + s.dur)
      const sb = lines[b].find((s) => s.start <= r.t && r.t < s.start + s.dur)
      if (!sa || !sb) return undefined
      const iv = between(fromDiatonic(sb.p.step, sb.p.alter), fromDiatonic(sa.p.step, sa.p.alter))
      return ((iv.steps % 7) + 7) % 7 === 3 && /^P/.test(intervalName(iv)) ? 'fourth-upper-pair' : undefined
    }
    return judge(ctx, this, raws, { reasons: [], incomplete: false, exceptions, dissonanceOutOfScope: fourthAt })
  },
}

export const COUNTERPOINT_VALIDATORS: Validator[] = [twoVoiceValidator, multiVoiceValidator]

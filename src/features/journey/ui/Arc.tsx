import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { findArticle } from '../../theory/wiki'
import { MUSIC } from '../music'
import { playTrack } from '../soundtrack'
import { named, update } from '../progress'
import type { Save } from '../engine/save'
import type { ArcDef, DNode, LocationDef, PuzzleDef } from '../engine/types'
import { choicesOf, enter as enterNode, step } from '../engine/dialogue'
import { attempt, currentStage, effects, enter, visibleLocations } from '../engine/runtime'
import { dueReviews, recordReview } from '../engine/replay'
import { checkPuzzle } from '../engine/puzzles'
import { holds } from '../engine/world'
import { NOTE_NAMES, SYLLABLES, HEXACHORDS, keyNotes, scalePalette, viName, type FiguredContent, type ScaleContent, type AuralContent, type BlankContent, type DebateContent, type ChoiceContent, type ClassifyContent, type HexachordContent, type InvestigationContent, type MatchContent, type NeumeContent, type OrderContent, type Result } from '../engine/puzzles'
import { MASTERY_LABEL, levelOf, masteryOf } from '../engine/progression'
import { SKILL_TREE, PERKS, branch, hasPerk } from '../engine/skills'
import { reportDraft, reportProblems } from '../engine/report'
import { SKILLS, type EvidenceDef } from '../engine/types'
import { articleKind, KIND_LABEL } from '../../knowledge/ids'
import { createProject, updateProject } from '../../research/store'
import { WalkScene } from './walk/WalkScene'
import { sceneFor, scenesOf } from '../scene/world'
import { KIND, useEscape } from './arcShared'
import './arc.css'

type Go = (p: Record<string, string>, how?: 'push' | 'replace' | 'back') => void

const IMG = (id: string) => `${import.meta.env.BASE_URL}images/journey/${id}.webp`
const bg = (id: string) => ({ src: IMG(id), srcSet: `${IMG(id + '-m')} 1080w, ${IMG(id)} 1920w`, sizes: '100vw' })

const VOICE: Record<DNode['voice'], string> = { reconstructed: 'Lời dựng lại', quote: 'Trích nguyên văn', fiction: '✦ Hư cấu', narration: '' }

/**
 * A story arc played on the engine: the hub (objective, map, places), a place (people, things to use), a dialogue, a
 * puzzle. URL: ?v=arc&a=<arc>[&l=<place>][&p=<puzzle>] — reading an article and coming back returns to the same spot.
 * `&w=<scene>` (or `1`: the place's first scene) walks the place side-on (scene/, ui/walk); `&sp=` picks the spawn.
 */
export function ArcPlayer({ arc, save, go, l, p, review, walk, spawn, map }: { arc: ArcDef; save: Save; go: Go; l: string | null; p: string | null; review?: boolean; walk?: string | null; spawn?: string | null; map: (open: (id: string) => void, done: (id: string) => boolean) => ReactNode }) {
  const loc = arc.locations.find((x) => x.id === l && visibleLocations(arc, save).includes(x))
  const puzzle = arc.puzzles.find((x) => x.id === p)
  const music = MUSIC[arc.music]
  useEffect(() => {
    if (!puzzle || puzzle.type !== 'aural') playTrack(music)
  }, [music, puzzle])
  if (puzzle) return <PuzzleScreen key={puzzle.id} arc={arc} puzzle={puzzle} save={save} review={review} onClose={() => go(l ? { v: 'arc', a: arc.id, l, ...(walk ? { w: walk } : {}) } : { v: 'arc', a: arc.id }, 'back')} />
  const scene = loc ? sceneFor(loc.id, walk) : undefined
  if (loc && scene) return <WalkScene key={scene.id} arc={arc} loc={loc} scene={scene} spawn={spawn ?? null} save={save} go={go} />
  if (loc) return <PlaceScreen key={loc.id} arc={arc} loc={loc} save={save} go={go} />
  return <Hub arc={arc} save={save} go={go} map={map} />
}

function Hub({ arc, save, go, map }: { arc: ArcDef; save: Save; go: Go; map: (open: (id: string) => void, done: (id: string) => boolean) => ReactNode }) {
  const [book, setBook] = useState(false)
  const [report, setReport] = useState(false)
  const [now] = useState(() => Date.now())
  const due = dueReviews(arc.puzzles, save, now)
  const stage = currentStage(arc, save)
  const done = holds(arc.completion, save)
  const places = visibleLocations(arc, save)
  return (
    <section className="ar-screen">
      <img className="jr-atlas-bg" {...bg('guido-hand')} alt="" />
      <div className="jr-atlas-wash" />
      <div className="ar-inner">
        <header>
          <button className="jr-ghost is-small" onClick={() => go({}, 'back')}>← Bản đồ chương</button>
          <p className="jr-kicker">Câu chuyện · {arc.year}</p>
          <h1 className="jr-atlas-title">{arc.title}</h1>
          <p className="jr-atlas-intro">{named(arc.intro, save.name)}</p>
        </header>
        <div className="ar-objective" role="status">
          <span>{done ? 'Đã khép lại' : stage ? 'Việc đang làm' : 'Bắt đầu'}</span>
          <p>{done ? `Bạn đã khép lại «${arc.title}». Các nhiệm vụ phụ vẫn mở.` : stage ? stage.text : `Tới ${arc.locations[0].name} và nói chuyện.`}</p>
        </div>
        {map((id) => go({ v: 'arc', a: arc.id, l: id }), (id) => save.visited.includes(id))}
        <ul className="ar-places">
          {places.map((x) => (
            <li key={x.id}>
              <button className="jr-stop-row" onClick={() => go({ v: 'arc', a: arc.id, l: x.id })}>
                <span className="jr-stop-i">{save.visited.includes(x.id) ? '✓' : '•'}</span>
                <span className="jr-stop-t">
                  <b>{x.name}</b>
                  <small>{x.year}</small>
                </span>
                <span className="jr-stop-s">Tới →</span>
              </button>
            </li>
          ))}
        </ul>
        {due.length > 0 && (
          <div className="ar-review">
            <p>Ôn luyện: {due.length} câu đến hạn — làm lại để lên mức thành thạo.</p>
            <ul>
              {due.slice(0, 5).map((x) => (
                <li key={x.id}>
                  <button className="jr-ghost is-small" onClick={() => go({ v: 'arc', a: arc.id, p: x.id, r: '1' })}>{x.title}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {done && (
          <div className="ar-report-cta">
            {hasPerk(save, 'report') ? (
              <button className="jr-cta" onClick={() => setReport(true)}>Viết báo cáo nghiên cứu →</button>
            ) : (
              <p className="ar-small">Đạt cấp 1 Tư duy nghiên cứu để viết báo cáo nghiên cứu từ câu chuyện này.</p>
            )}
          </div>
        )}
        <div className="ar-bar">
          <p>Cấp {levelOf(save.xp)} · {save.xp} XP · {save.cards.filter((c) => arc.evidence.some((e) => e.id === c)).length}/{arc.evidence.length} chứng cứ</p>
          <button className="jr-ghost" onClick={() => setBook(true)}>Sổ hành trình</button>
        </div>
      </div>
      {book && <Book arc={arc} save={save} onClose={() => setBook(false)} />}
      {report && <ReportPanel arc={arc} save={save} onClose={() => setReport(false)} />}
    </section>
  )
}

function PlaceScreen({ arc, loc, save, go }: { arc: ArcDef; loc: LocationDef; save: Save; go: Go }) {
  const [talk, setTalk] = useState<string | null>(null)
  useEffect(() => {
    update((s) => enter(arc, loc, s))
  }, [arc, loc])
  const people = loc.present.filter((x) => !x.when || holds(x.when, save))
  const things = (loc.objects ?? []).filter((o) => !o.when || holds(o.when, save))
  const use = (o: (typeof things)[number]) => {
    if (o.effects) update((s) => effects(arc, o.effects, s))
    if (o.puzzle) go({ v: 'arc', a: arc.id, l: loc.id, p: o.puzzle })
  }
  const stage = currentStage(arc, save)
  return (
    <section className="ar-screen is-place">
      <img className="ar-place-bg" {...bg(loc.bg)} alt="" style={{ objectPosition: loc.focus }} />
      <div className="jr-grade" />
      <div className="ar-inner">
        <header>
          <button className="jr-ghost is-small" onClick={() => go({ v: 'arc', a: arc.id }, 'back')}>← {arc.title}</button>
          <p className="jr-kicker">{loc.year}</p>
          <h2 className="ar-place-title">{loc.name}</h2>
          {stage && <p className="ar-hint-line">{stage.text}</p>}
        </header>
        {scenesOf(loc.id).length > 0 && (
          <button className="jr-cta ar-walk" onClick={() => go({ v: 'arc', a: arc.id, l: loc.id, w: scenesOf(loc.id)[0].id }, 'replace')}>Đi vào khung cảnh</button>
        )}
        <div className="ar-actions">
          {people.map((x) => {
            const c = arc.characters.find((y) => y.id === x.npc)!
            return (
              <button key={x.npc} className="ar-act is-talk" onClick={() => setTalk(x.dialogue)}>
                <b>Nói chuyện với {c.name}</b>
                <small>{c.role} · {c.status === 'historical' ? 'nhân vật lịch sử' : 'nhân vật hư cấu'}</small>
              </button>
            )
          })}
          {things.map((o) => {
            const solved = o.puzzle && save.puzzles[o.puzzle]?.solved
            return (
              <button key={o.id} className={`ar-act${solved ? ' is-done' : ''}`} onClick={() => use(o)}>
                <b>{o.label}</b>
                <small>{o.puzzle ? (solved ? '✓ Đã giải — xem lại' : 'Thử thách') : 'Xem'}</small>
              </button>
            )
          })}
        </div>
      </div>
      {talk && <DialoguePanel arc={arc} id={talk} save={save} onClose={() => setTalk(null)} />}
    </section>
  )
}

export function DialoguePanel({ arc, id, save, onClose }: { arc: ArcDef; id: string; save: Save; onClose: () => void }) {
  const d = arc.dialogues.find((x) => x.id === id)!
  const [at, setAt] = useState<string | null>(() => enterNode(d, d.start, save))
  const applied = useRef(new Set<string>())
  const node = at ? d.nodes[at] : null
  useEscape(onClose)
  // a node's own effects run once, when it is shown
  useEffect(() => {
    if (!at || applied.current.has(at) || !d.nodes[at].effects) return
    applied.current.add(at)
    update((s) => effects(arc, d.nodes[at].effects, s))
  }, [arc, d, at])
  if (!node) return null
  const who = node.speaker === 'narrator' ? '' : node.speaker === 'me' ? save.name || 'Bạn' : (arc.characters.find((c) => c.id === node.speaker)?.name ?? '')
  const choices = choicesOf(node, save)
  const move = (choice?: number) => {
    const c = choice !== undefined ? node.choices?.[choice] : undefined
    if (c?.effects) update((s) => effects(arc, c.effects, s))
    const r = step(d, at!, save, choice)
    // node effects already ran on display; only the choice's are new
    if (!r.next) onClose()
    else setAt(r.next)
  }
  return (
    <div className="ar-dialog" role="dialog" aria-label={`Hội thoại${who ? ' với ' + who : ''}`}>
      <div className="jr-dialog ar-dialog-box" key={at}>
        <div className="ar-dialog-head">
          {who && <p className="jr-speaker-name">{who}</p>}
          {VOICE[node.voice] && <span className={`ar-voice is-${node.voice}`}>{VOICE[node.voice]}</span>}
        </div>
        <p className={`jr-line${node.speaker === 'narrator' ? ' is-narration' : ''}`}>{named(node.text, save.name)}</p>
        {node.refs?.length ? (
          <p className="ar-refs">
            {node.refs.filter((r) => r.startsWith('a:') && findArticle(r.slice(2))).map((r) => (
              <Link key={r} to={`/theory/${r.slice(2)}`} className="ar-ref">📖 {findArticle(r.slice(2))!.title}</Link>
            ))}
          </p>
        ) : null}
        {choices.length ? (
          <div className="jr-choices">
            {choices.map((c) => (
              <button key={c.i} className="jr-choice" autoFocus={c === choices[0]} onClick={() => move(c.i)}>{c.text}</button>
            ))}
          </div>
        ) : (
          <button className="jr-cta ar-next" autoFocus onClick={() => move()}>{node.end || !node.next ? 'Xong' : 'Tiếp →'}</button>
        )}
        <button className="ar-close" onClick={onClose} aria-label="Đóng hội thoại">✕</button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ puzzles */

/** `review`: spaced review of a solved puzzle — answered again from scratch, counted toward mastery, no experience. */
function PuzzleScreen({ arc, puzzle, save, onClose, review }: { arc: ArcDef; puzzle: PuzzleDef; save: Save; onClose: () => void; review?: boolean }) {
  const [hints, setHints] = useState(0)
  // hints opened with an item cost nothing
  const [free, setFree] = useState(0)
  const [result, setResult] = useState<Result | null>(null)
  const tools = arc.items.filter((i) => i.use?.at === puzzle.id && save.inventory.includes(i.id))
  const solved = !!save.puzzles[puzzle.id]?.solved
  const submit = (given: unknown) => {
    let r: Result = { ok: false, wrong: [] }
    update((s) => {
      if (review) {
        r = checkPuzzle(puzzle, given)
        return { ...s, ...recordReview(s, puzzle, r.ok, Math.max(0, hints - free)) }
      }
      const out = attempt(arc, puzzle.id, given, Math.max(0, hints - free), s)
      r = out.result
      return out.save
    })
    setResult(r)
  }
  const done = review ? result?.ok : solved || result?.ok
  const feedback = result?.feedback && puzzle.feedback?.find((f) => f.key === result.feedback)?.text
  return (
    <section className="ar-screen is-puzzle">
      <div className="ar-inner ar-puzzle">
        <header>
          <button className="jr-ghost is-small" onClick={onClose}>← Quay lại</button>
          <p className="jr-kicker">{review ? 'Ôn luyện · không cộng XP, tính vào mức thành thạo' : `Thử thách · độ khó ${puzzle.difficulty}/5`}</p>
          <h2 className="ar-place-title">{puzzle.title}</h2>
          <p className="ar-instr">{puzzle.instructions}</p>
        </header>
        <PuzzleBody arc={arc} puzzle={puzzle} save={save} wrong={result && !result.ok ? result.wrong : []} onSubmit={submit} locked={!!done} />
        {result && !result.ok && (
          <p className="ar-wrong" role="alert">
            {feedback ?? 'Chưa đúng — các chỗ đánh dấu cần xem lại. Không mất gì cả, thử lại nhé.'}
          </p>
        )}
        {!done && (
          <div className="ar-hints">
            {puzzle.hints.slice(0, hints).map((h) => <p key={h}>💡 {h}</p>)}
            {hints < puzzle.hints.length && <button className="jr-ghost is-small" onClick={() => setHints((n) => n + 1)}>Gợi ý ({puzzle.hints.length - hints})</button>}
            {hints < puzzle.hints.length &&
              tools.map((t) => (
                <button key={t.id} className="jr-ghost is-small" onClick={() => (setHints((n) => n + 1), setFree((n) => n + 1))}>
                  Dùng {t.name} — gợi ý không mất điểm
                </button>
              ))}
          </div>
        )}
        {done && (
          <div className="ar-explain" role="status">
            <p className="ar-ok">✓ {result?.ok ? 'Đúng rồi!' : 'Bạn đã giải câu này.'}</p>
            <p>{puzzle.explanation}</p>
            <p className="ar-refs">
              {puzzle.links.filter((r) => r.startsWith('a:') && findArticle(r.slice(2))).map((r) => (
                <Link key={r} to={`/theory/${r.slice(2)}`} className="ar-ref">📖 {findArticle(r.slice(2))!.title}</Link>
              ))}
            </p>
            <button className="jr-cta" onClick={onClose}>Tiếp tục →</button>
          </div>
        )}
      </div>
    </section>
  )
}

export function PuzzleBody({ arc, puzzle, save, wrong, onSubmit, locked }: { arc?: ArcDef; puzzle: PuzzleDef; save: Save; wrong: string[]; onSubmit: (given: unknown) => void; locked: boolean }) {
  const c = puzzle.content
  switch (puzzle.type) {
    case 'choice':
      return <ChoiceUI c={c as ChoiceContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'order':
      return <OrderUI items={(c as OrderContent).items} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'match':
      return <SelectUI rows={(c as MatchContent).left} options={(c as MatchContent).right} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'classify':
      return <SelectUI rows={(c as ClassifyContent).items} options={(c as ClassifyContent).labels} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'blank':
      return <BlankUI c={c as BlankContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'neume':
      return <NeumeUI c={c as NeumeContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'hexachord':
      return <HexachordUI c={c as HexachordContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'figured': {
      const f = c as FiguredContent
      const pal = keyNotes(f.key).map(viName)
      return <PickUI rows={f.items.map((x) => ({ id: x.id, head: <FigureMark bass={bassName(x.bass)} figure={x.figure} />, label: `${bassName(x.bass)} – ${x.figure}`, palette: pal }))} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    }
    case 'scale': {
      const sc = c as ScaleContent
      return <PickUI rows={sc.items.map((x) => ({ id: x.id, head: <b>{SCALE_LABEL[x.scale] ?? x.scale} trên {bassName(x.tonic)}</b>, label: `${SCALE_LABEL[x.scale] ?? x.scale} trên ${bassName(x.tonic)}`, palette: scalePalette(x.tonic) }))} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    }
    case 'aural':
      return <AuralUI c={c as AuralContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'debate':
      return <DebateUI c={c as DebateContent} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    case 'investigation':
      return <InvestigationUI c={c as InvestigationContent} save={save} evidence={(id) => arc?.evidence.find((e) => e.id === id)} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    default:
      return <p className="ar-wrong">Dạng thử thách {puzzle.type} chưa có giao diện.</p>
  }
}

type UI = { wrong: string[]; onSubmit: (g: unknown) => void; locked: boolean }
const Check = ({ ok, onClick, locked }: { ok: boolean; onClick: () => void; locked: boolean }) => (locked ? null : <button className="jr-cta ar-check" disabled={!ok} onClick={onClick}>Kiểm tra</button>)

function ChoiceUI({ c, wrong, onSubmit, locked }: UI & { c: ChoiceContent }) {
  return (
    <div className="jr-choices">
      <p className="ar-ask">{c.ask}</p>
      {c.choices.map((x, i) => (
        <button key={i} className={`jr-choice${wrong.includes(String(i)) ? ' is-wrong' : ''}`} disabled={locked} onClick={() => onSubmit(i)}>{x}</button>
      ))}
    </div>
  )
}

/** Up/down buttons rather than drag: works with a thumb, a keyboard and a screen reader. */
function OrderUI({ items, wrong, onSubmit, locked, render }: UI & { items: { id: string; text: string }[]; render?: (id: string) => ReactNode }) {
  const [order, setOrder] = useState(() => items.map((x) => x.id))
  const swap = (i: number, j: number) => setOrder((o) => (j < 0 || j >= o.length ? o : o.map((x, k) => (k === i ? o[j] : k === j ? o[i] : x))))
  return (
    <div>
      <ol className="ar-order">
        {order.map((id, i) => (
          <li key={id} className={wrong.includes(id) ? 'is-wrong' : ''}>
            <span className="ar-order-n">{i + 1}</span>
            <span className="ar-order-t">{render ? render(id) : items.find((x) => x.id === id)!.text}</span>
            {!locked && (
              <span className="ar-order-btns">
                <button onClick={() => swap(i, i - 1)} disabled={i === 0} aria-label="Lên">↑</button>
                <button onClick={() => swap(i, i + 1)} disabled={i === order.length - 1} aria-label="Xuống">↓</button>
              </span>
            )}
          </li>
        ))}
      </ol>
      <Check ok onClick={() => onSubmit(order)} locked={locked} />
    </div>
  )
}

function SelectUI({ rows, options, wrong, onSubmit, locked, render }: UI & { rows: { id: string; text: string }[]; options: { id: string; text: string }[]; render?: (id: string) => ReactNode }) {
  const [pick, setPick] = useState<Record<string, string>>({})
  return (
    <div>
      <ul className="ar-rows">
        {rows.map((r) => (
          <li key={r.id} className={wrong.includes(r.id) ? 'is-wrong' : ''}>
            <span className="ar-row-t">{render ? render(r.id) : r.text}</span>
            <select value={pick[r.id] ?? ''} disabled={locked} onChange={(e) => setPick((p) => ({ ...p, [r.id]: e.target.value }))} aria-label={`Chọn cho: ${r.text}`}>
              <option value="">— chọn —</option>
              {options.map((o) => (
                <option key={o.id} value={o.id}>{o.text}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <Check ok={rows.every((r) => pick[r.id])} onClick={() => onSubmit(pick)} locked={locked} />
    </div>
  )
}

function BlankUI({ c, wrong, onSubmit, locked }: UI & { c: BlankContent }) {
  const [v, setV] = useState<Record<string, string>>({})
  const parts = c.text.split(/(\{[a-z0-9-]+\})/g)
  const ids = parts.filter((x) => /^\{.*\}$/.test(x)).map((x) => x.slice(1, -1))
  return (
    <div>
      <p className="ar-blank">
        {parts.map((x, i) => {
          const m = /^\{(.+)\}$/.exec(x)
          if (!m) return <span key={i}>{x}</span>
          return <input key={i} className={`ar-blank-in${wrong.includes(m[1]) ? ' is-wrong' : ''}`} value={v[m[1]] ?? ''} disabled={locked} onChange={(e) => setV((p) => ({ ...p, [m[1]]: e.target.value }))} aria-label={`Ô ${m[1]}`} autoCapitalize="off" autoCorrect="off" spellCheck={false} />
        })}
      </p>
      <Check ok={ids.every((id) => v[id]?.trim())} onClick={() => onSubmit(v)} locked={locked} />
    </div>
  )
}

/** Plainchant staff drawn as in square-note books: four red lines, a C or F clef, black square notes. */
function Staff({ c, wrong }: { c: NeumeContent; wrong: string[] }) {
  const gap = 14, top = 30, W = 70 + c.notes.length * 52
  const y = (pos: number) => top + (6 - pos) * (gap / 2)
  const clefY = y(2 * (c.clef.line - 1))
  return (
    <svg viewBox={`0 0 ${W} 110`} className="ar-staff" role="img" aria-label={`Khuông bốn dòng, khoá ${c.clef.type === 'c' ? 'Đô' : 'Fa'} ở dòng ${c.clef.line}, ${c.notes.length} nốt`}>
      {[0, 2, 4, 6].map((p) => (
        <line key={p} x1="6" x2={W - 6} y1={y(p)} y2={y(p)} stroke="#b4382a" strokeWidth="1.4" />
      ))}
      {c.clef.type === 'c' ? (
        <path d={`M16 ${clefY - gap / 2 - 3} h10 v${gap / 2 - 1} h-6 v2 h6 v${gap / 2 - 1} h-10 z`} fill="#1b1410" />
      ) : (
        <g fill="#1b1410">
          <path d={`M14 ${clefY - gap / 2 - 3} h9 v${gap / 2 - 1} h-5 v2 h5 v${gap / 2 - 1} h-9 z`} />
          <rect x="26" y={clefY - 5} width="7" height="10" />
        </g>
      )}
      {c.notes.map((p, i) => {
        const x = 54 + i * 52
        const ledger = p >= 8 ? [8] : p <= -2 ? [-2] : []
        return (
          <g key={i}>
            {ledger.map((lp) => <line key={lp} x1={x - 4} x2={x + 16} y1={y(lp)} y2={y(lp)} stroke="#b4382a" strokeWidth="1.4" />)}
            <rect x={x} y={y(p) - gap / 2 + 1} width="12" height={gap - 2} fill={wrong.includes(String(i)) ? '#b4382a' : '#1b1410'} />
            <text x={x + 6} y="104" textAnchor="middle" fontSize="11" fill="#5a4a3a">{i + 1}</text>
          </g>
        )
      })}
    </svg>
  )
}

function NeumeUI({ c, wrong, onSubmit, locked }: UI & { c: NeumeContent }) {
  const [v, setV] = useState<string[]>(() => c.notes.map(() => ''))
  return (
    <div>
      <div className="ar-parchment">
        <Staff c={c} wrong={wrong} />
      </div>
      <ol className="ar-notes">
        {c.notes.map((_, i) => (
          <li key={i} className={wrong.includes(String(i)) ? 'is-wrong' : ''}>
            <span>Nốt {i + 1}</span>
            <select value={v[i]} disabled={locked} onChange={(e) => setV((x) => x.map((y, k) => (k === i ? e.target.value : y)))} aria-label={`Tên nốt ${i + 1}`}>
              <option value="">—</option>
              {NOTE_NAMES.map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </li>
        ))}
      </ol>
      <Check ok={v.every(Boolean)} onClick={() => onSubmit(v)} locked={locked} />
    </div>
  )
}

const HEXA_LABEL = { naturale: 'hexachordum naturale (từ Đô)', durum: 'hexachordum durum (từ Sol)', molle: 'hexachordum molle (từ Fa)' } as const
function HexachordUI({ c, wrong, onSubmit, locked }: UI & { c: HexachordContent }) {
  const rows = c.items.map((x) => ({ id: x.id, text: `${x.note} trong ${HEXA_LABEL[x.hexachord]}` }))
  return (
    <div>
      <table className="ar-hexa">
        <tbody>
          {(Object.keys(HEXACHORDS) as (keyof typeof HEXACHORDS)[]).map((h) => (
            <tr key={h}>
              <th>{h}</th>
              {HEXACHORDS[h].map((n, i) => <td key={i}>{n}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="ar-small">Bảng chỉ ghi các nốt; âm tiết ut … la là việc của bạn.</p>
      <SelectUI rows={rows} options={SYLLABLES.map((s) => ({ id: s, text: s }))} wrong={wrong} onSubmit={onSubmit} locked={locked} />
    </div>
  )
}

const VI_OF: Record<string, string> = { C: 'Đô', D: 'Rê', E: 'Mi', F: 'Fa', G: 'Sol', A: 'La', B: 'Si' }
const bassName = (x: string) => VI_OF[x[0].toUpperCase()] + x.slice(1).replace('#', '♯').replace(/^b$/, '♭')
const SCALE_LABEL: Record<string, string> = { penta: 'Ngũ cung trưởng', pentam: 'Ngũ cung thứ', major: 'Âm giai trưởng', minor: 'Thứ tự nhiên', harmonic: 'Thứ hoà thanh', dorian: 'Dorian', mixolydian: 'Mixolydian', phrygian: 'Phrygian', lydian: 'Lydian' }

/** A bass note with its figures stacked above, as on a continuo part. */
const FigureMark = ({ bass, figure }: { bass: string; figure: string }) => (
  <span className="ar-figure" aria-hidden="true">
    <span className="ar-figure-num">{figure.split('/').map((d) => <i key={d}>{d}</i>)}</span>
    <b>{bass}</b>
  </span>
)

/** Rows of note toggles: for each row, pick the notes that belong (figured bass, scales). */
function PickUI({ rows, wrong, onSubmit, locked }: UI & { rows: { id: string; head: ReactNode; label: string; palette: string[] }[] }) {
  const [v, setV] = useState<Record<string, string[]>>({})
  const flip = (id: string, n: string) => setV((x) => ({ ...x, [id]: (x[id] ?? []).includes(n) ? x[id].filter((y) => y !== n) : [...(x[id] ?? []), n] }))
  return (
    <div>
      <ul className="ar-pick">
        {rows.map((r) => (
          <li key={r.id} className={wrong.includes(r.id) ? 'is-wrong' : ''}>
            <div className="ar-pick-head">{r.head}</div>
            <div className="ar-pick-notes" role="group" aria-label={r.label}>
              {r.palette.map((n) => (
                <button key={n} type="button" className="ar-pick-note" aria-pressed={(v[r.id] ?? []).includes(n)} disabled={locked} onClick={() => flip(r.id, n)}>{n}</button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Check ok={rows.every((r) => (v[r.id] ?? []).length > 0)} onClick={() => onSubmit(v)} locked={locked} />
    </div>
  )
}

/** Plays a stretch of a real recording (Commons transcode), the background music silenced meanwhile. */
function ClipButton({ clip, label }: { clip: AuralContent['clips'][number]; label: string }) {
  const [on, setOn] = useState(false)
  const [failed, setFailed] = useState(false)
  const el = useRef<HTMLAudioElement | null>(null)
  useEffect(
    () => () => {
      el.current?.pause()
    },
    [],
  )
  const play = () => {
    playTrack(undefined)
    const t = MUSIC[clip.track]
    if (!t) return
    const a = (el.current ??= new Audio(t.src))
    a.currentTime = clip.start
    const stop = () => {
      if (a.currentTime >= clip.end) {
        a.pause()
        setOn(false)
        a.removeEventListener('timeupdate', stop)
      }
    }
    a.addEventListener('timeupdate', stop)
    a.onpause = () => setOn(false)
    // the recordings stream from Wikimedia Commons: offline (or blocked), say so instead of a silent button
    a.onerror = () => (setOn(false), setFailed(true))
    void a.play().then(
      () => (setOn(true), setFailed(false)),
      (e: DOMException) => (setOn(false), setFailed(e?.name !== 'NotAllowedError')),
    )
  }
  return (
    <span className="ar-clip-wrap">
      <button className={`ar-clip${on ? ' is-on' : ''}`} onClick={play} aria-label={`Nghe ${label}`}>
        {on ? '♪' : '▶'} {label}
      </button>
      {failed && <small className="ar-clip-err">Không phát được bản thu — cần kết nối mạng.</small>}
    </span>
  )
}

function AuralUI({ c, wrong, onSubmit, locked }: UI & { c: AuralContent }) {
  const label = (id: string) => c.clips.find((x) => x.id === id)?.caption ?? `Đoạn ${'ABCDEFGH'[c.clips.findIndex((x) => x.id === id)]}`
  const render = (id: string) => <ClipButton clip={c.clips.find((x) => x.id === id)!} label={label(id)} />
  const credit = [...new Set(c.clips.map((x) => x.track))].map((t) => MUSIC[t]).filter(Boolean)
  return (
    <div>
      <p className="ar-ask">{c.ask}</p>
      {c.mode === 'order' ? (
        <OrderUI items={c.clips.map((x) => ({ id: x.id, text: label(x.id) }))} wrong={wrong} onSubmit={onSubmit} locked={locked} render={render} />
      ) : (
        <SelectUI rows={c.clips.map((x) => ({ id: x.id, text: label(x.id) }))} options={c.labels ?? []} wrong={wrong} onSubmit={onSubmit} locked={locked} render={render} />
      )}
      <p className="ar-small">
        Bản thu: {credit.map((t) => `${t.title} — ${t.by} (${t.licence})`).join('; ')}
      </p>
    </div>
  )
}

function InvestigationUI({ c, save, wrong, onSubmit, locked, evidence }: UI & { c: InvestigationContent; save: Save; evidence: (id: string) => ArcDef['evidence'][number] | undefined }) {
  const [concl, setConcl] = useState('')
  const [ev, setEv] = useState<string[]>([])
  return (
    <div>
      <p className="ar-ask">{c.question}</p>
      <fieldset className="ar-fs">
        <legend>Kết luận</legend>
        {c.conclusions.map((x) => (
          <label key={x.id} className={`ar-radio${wrong.includes(x.id) ? ' is-wrong' : ''}`}>
            <input type="radio" name="concl" checked={concl === x.id} disabled={locked} onChange={() => setConcl(x.id)} /> {x.text}
          </label>
        ))}
      </fieldset>
      <fieldset className="ar-fs">
        <legend>Chứng cứ đặt lên bàn (ít nhất {c.min})</legend>
        {c.evidence.map((id) => {
          const e = evidence(id)
          const have = save.cards.includes(id)
          return (
            <label key={id} className={`ar-check-row${wrong.includes(id) ? ' is-wrong' : ''}${have ? '' : ' is-missing'}`}>
              <input type="checkbox" checked={ev.includes(id)} disabled={locked || !have} onChange={(x) => setEv((s) => (x.target.checked ? [...s, id] : s.filter((y) => y !== id)))} />
              <span>
                <b>{e?.title ?? id}</b> <em>{e ? KIND[e.kind] : ''}</em>
                <small>{have ? e?.text : 'Chưa thu thập — đi tìm ở các địa điểm.'}</small>
              </span>
            </label>
          )
        })}
      </fieldset>
      <Check ok={!!concl && ev.length >= c.min} onClick={() => onSubmit({ conclusion: concl, evidence: ev })} locked={locked} />
    </div>
  )
}


function DebateUI({ c, wrong, onSubmit, locked }: UI & { c: DebateContent }) {
  const [pick, setPick] = useState<Record<string, string>>({})
  return (
    <div className="ar-debate">
      <p className="ar-small">Chủ đề: {c.topic}</p>
      {c.turns.map((t) => (
        <fieldset key={t.id} className={`ar-fs ar-turn${wrong.includes(t.id) ? ' is-wrong' : ''}`}>
          <legend>{t.speaker}</legend>
          <p className="ar-turn-say">“{t.text}”</p>
          {t.options.map((o) => (
            <label key={o.id} className="ar-radio">
              <input type="radio" name={t.id} checked={pick[t.id] === o.id} disabled={locked} onChange={() => setPick((p) => ({ ...p, [t.id]: o.id }))} /> {o.text}
            </label>
          ))}
        </fieldset>
      ))}
      <Check ok={c.turns.every((t) => pick[t.id])} onClick={() => onSubmit(pick)} locked={locked} />
    </div>
  )
}

/** Writing up the investigation; saved as a project at the research desk with its references. */
function ReportPanel({ arc, save, onClose }: { arc: ArcDef; save: Save; onClose: () => void }) {
  const navigate = useNavigate()
  const inv = arc.puzzles.find((p) => p.type === 'investigation')
  const content = inv?.content as InvestigationContent | undefined
  const best = content?.conclusions.find((x) => x.id === (inv?.answer as { conclusion: string } | undefined)?.conclusion)
  const have = arc.evidence.filter((e) => save.cards.includes(e.id))
  const [question, setQuestion] = useState(content?.question ?? '')
  const [chosen, setChosen] = useState<string[]>([])
  const [analysis, setAnalysis] = useState('')
  const [conclusion, setConclusion] = useState(best?.text ?? '')
  useEscape(onClose)
  const input = { title: `Báo cáo: ${arc.title}`, question, evidence: have.filter((e) => chosen.includes(e.id)), analysis, conclusion }
  const problems = reportProblems(input)
  const save_ = () => {
    const { draft, articles } = reportDraft(input)
    const p = createProject(input.title)
    updateProject(p.id, { question, draft, articles })
    update((s) => effects(arc, s.flags.includes(`bao-cao:${arc.id}`) ? [] : [{ set: `bao-cao:${arc.id}` }, { xp: 40, skill: 'research' }], s))
    navigate(`/research/${p.id}`)
  }
  return (
    <div className="ar-book" role="dialog" aria-label="Báo cáo nghiên cứu">
      <div className="ar-book-inner ar-report">
        <header className="ar-book-head">
          <h3>Báo cáo nghiên cứu</h3>
          <button className="ar-close" onClick={onClose} aria-label="Đóng báo cáo">✕</button>
        </header>
        <label className="ar-field">
          <span>Câu hỏi nghiên cứu</span>
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={2} />
        </label>
        <fieldset className="ar-fs">
          <legend>Chứng cứ dùng trong báo cáo</legend>
          {have.map((e: EvidenceDef) => (
            <label key={e.id} className="ar-check-row">
              <input type="checkbox" checked={chosen.includes(e.id)} onChange={(x) => setChosen((c) => (x.target.checked ? [...c, e.id] : c.filter((y) => y !== e.id)))} />
              <span>
                <b>{e.title}</b> <em>{KIND[e.kind]}</em>
                <small>{e.reliability}</small>
              </span>
            </label>
          ))}
        </fieldset>
        <label className="ar-field">
          <span>Phân tích — chứng cứ nào nói gì, tin được tới đâu</span>
          <textarea value={analysis} onChange={(e) => setAnalysis(e.target.value)} rows={5} aria-label="Phân tích" />
        </label>
        <label className="ar-field">
          <span>Kết luận</span>
          <textarea value={conclusion} onChange={(e) => setConclusion(e.target.value)} rows={3} />
        </label>
        {problems.length > 0 && (
          <ul className="ar-problems">
            {problems.map((p) => <li key={p}>{p}</li>)}
          </ul>
        )}
        <button className="jr-cta" disabled={problems.length > 0} onClick={save_}>Lưu thành đề tài ở Bàn làm việc →</button>
        <p className="ar-small">Tài liệu tham khảo lấy từ nguồn của các chứng cứ bạn chọn.</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ the journal */

function Book({ arc, save, onClose }: { arc: ArcDef; save: Save; onClose: () => void }) {
  const [tab, setTab] = useState<'quest' | 'skills' | 'bag' | 'evidence' | 'codex'>('quest')
  useEscape(onClose)
  const codex = useMemo(() => save.codex.filter((id) => id.startsWith('a:') && findArticle(id.slice(2))), [save.codex])
  const groups = useMemo(() => {
    const by = new Map<ReturnType<typeof articleKind>, string[]>()
    for (const id of codex) {
      const k = articleKind(findArticle(id.slice(2))!)
      by.set(k, [...(by.get(k) ?? []), id])
    }
    return [...by.entries()]
  }, [codex])
  return (
    <div className="ar-book" role="dialog" aria-label="Sổ hành trình">
      <div className="ar-book-inner">
        <header className="ar-book-head">
          <h3>Sổ hành trình</h3>
          <button className="ar-close" onClick={onClose} aria-label="Đóng sổ">✕</button>
        </header>
        <nav className="ar-tabs">
          {(
            [
              ['quest', 'Nhiệm vụ'],
              ['skills', 'Kỹ năng'],
              ['bag', 'Túi đồ'],
              ['evidence', 'Chứng cứ'],
              ['codex', 'Codex'],
            ] as const
          ).map(([k, t]) => (
            <button key={k} className={tab === k ? 'is-on' : ''} onClick={() => setTab(k)}>{t}</button>
          ))}
        </nav>
        {tab === 'quest' && (
          <ul className="ar-list">
            {arc.quests.filter((q) => save.quests[q.id]).map((q) => {
              const st = save.quests[q.id]
              const stage = q.stages.find((x) => x.id === st.stage)
              return (
                <li key={q.id}>
                  <b>{q.title}</b> <em>{q.kind === 'main' ? 'chính' : 'phụ'} · {st.status === 'done' ? 'xong' : 'đang làm'}</em>
                  <small>{st.status === 'done' ? q.summary : stage?.text}</small>
                </li>
              )
            })}
          </ul>
        )}
        {tab === 'skills' && <SkillList save={save} />}
        {tab === 'bag' && (
          <ul className="ar-list">
            {arc.items.filter((i) => save.inventory.includes(i.id)).map((i) => (
              <li key={i.id}>
                <b>{i.name}</b>
                <small>{i.text}</small>
              </li>
            ))}
            {!arc.items.some((i) => save.inventory.includes(i.id)) && <li><small>Túi còn trống.</small></li>}
          </ul>
        )}
        {tab === 'evidence' && (
          <ul className="ar-list">
            {arc.evidence.filter((e) => save.cards.includes(e.id)).map((e) => (
              <li key={e.id}>
                <b>{e.title}</b> <em>{KIND[e.kind]}{e.date ? ` · ${e.date}` : ''}</em>
                <small>{e.text}</small>
                <small className="ar-rel">Độ tin cậy: {e.reliability}</small>
                {e.source?.startsWith('a:') && findArticle(e.source.slice(2)) && <Link to={`/theory/${e.source.slice(2)}`} className="ar-ref">📖 {findArticle(e.source.slice(2))!.title}</Link>}
              </li>
            ))}
          </ul>
        )}
        {tab === 'codex' && (
          <div className="ar-codex">
            {groups.map(([kind, ids]) => (
              <section key={kind}>
                <h4>{KIND_LABEL[kind]} <span>{ids.length}</span></h4>
                <ul className="ar-list">
                  {ids.map((id) => (
                    <li key={id}>
                      <Link to={`/theory/${id.slice(2)}`} className="ar-ref">{findArticle(id.slice(2))!.title}</Link> <em>{MASTERY_LABEL[masteryOf(save.mastery[id])]}</em>
                      <Link to={`/graph?id=${encodeURIComponent(id)}`} className="ar-small">Xem trên đồ thị tri thức →</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            {!codex.length && <p className="ar-small">Chưa khám phá mục nào.</p>}
          </div>
        )}
      </div>
    </div>
  )
}

/** Level, XP and the six skill branches with their perks (also on the player's profile in the story). */
export function SkillList({ save }: { save: Save }) {
  return (
    <ul className="ar-list ar-tree">
      <li>
        <b>Cấp {levelOf(save.xp)}</b> <em>{save.xp} XP</em>
      </li>
      {SKILLS.map((k) => {
        const b = branch(save, k)
        return (
          <li key={k}>
            <b>{SKILL_TREE[k].title}</b> <em>bậc {b.level}/4 · {b.title}</em>
            <span className="ar-meter" aria-hidden>
              <i style={{ transform: `scaleX(${b.next === undefined ? 1 : Math.min(1, b.points / b.next)})` }} />
            </span>
            <small>{b.points} điểm{b.next !== undefined ? ` · còn ${b.toNext} điểm tới bậc ${b.level + 1}` : ' · bậc cao nhất'} · {SKILL_TREE[k].text}</small>
            {PERKS.filter((p) => p.skill === k).map((p) => (
              <small key={p.id} className={hasPerk(save, p.id) ? 'ar-perk is-on' : 'ar-perk'}>
                {hasPerk(save, p.id) ? '✓' : `bậc ${p.level}:`} {p.title} — {p.text}
              </small>
            ))}
          </li>
        )
      })}
    </ul>
  )
}

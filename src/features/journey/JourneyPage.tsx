import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { findArticle } from '../theory/wiki'
import { YouTubeVideo } from '../theory/YouTube'
import { H, W, proj } from '../musicology/projection'
import world from '../musicology/world-lo.json'
import { CHAPTERS } from './chapters'
import { CREDITS } from './credits'
import { named, resetJourney, update, useSave, type Save } from './progress'
import type { Card, Chapter, Claim, Scene, Verdict } from './types'
import './journey.css'

const IMG = (id: string) => `${import.meta.env.BASE_URL}images/journey/${id}.webp`
/** Renaissance portraits the player can wear (public domain, credits.ts). */
const PORTRAITS = ['p-leonardo-musician', 'p-durer', 'p-van-eyck', 'p-castiglione', 'p-ermine', 'p-pollaiuolo']
const key = (c: Chapter, s: Scene | Claim) => `${c.id}/${s.id}`
const VERDICT: Record<Verdict, string> = { fact: 'Có chứng cứ', legend: 'Giai thoại', unsure: 'Chưa chắc' }

/**
 * Hành trình: a story game over the world map. The player crosses the history of music era by era; every character
 * asks a question whose answer is in a library article, so the game is read through the library.
 */
export function JourneyPage() {
  const save = useSave()
  const [params, setParams] = useSearchParams()
  const chapter = CHAPTERS.find((c) => c.id === params.get('c')) ?? CHAPTERS[0]
  const scene = chapter.scenes.find((s) => s.id === params.get('s'))
  const view = !save.name ? 'create' : scene ? 'scene' : params.get('v') === 'court' ? 'court' : 'atlas'
  const go = (p: Record<string, string>) => setParams({ c: chapter.id, ...p })
  return (
    <div className={`jr jr-era-${chapter.style}`}>
      {view === 'create' && <Create />}
      {view === 'atlas' && <Atlas chapter={chapter} save={save} go={go} />}
      {view === 'scene' && scene && <ScenePlayer key={scene.id} chapter={chapter} scene={scene} save={save} go={go} />}
      {view === 'court' && <Court chapter={chapter} save={save} go={go} />}
    </div>
  )
}

/* ------------------------------------------------------------------ the player */

function Create() {
  const save = useSave()
  const [name, setName] = useState(save.name || 'Lamar')
  const [portrait, setPortrait] = useState(save.portrait || PORTRAITS[0])
  return (
    <section className="jr-create">
      <Exit />
      <p className="jr-kicker">Hành trình âm nhạc</p>
      <h1 className="jr-create-title">Ai sẽ đi qua những thế kỷ?</h1>
      <p className="jr-create-lede">Chọn một gương mặt từ tranh chân dung thời Phục hưng và đặt tên cho nhân vật của bạn.</p>
      <div className="jr-portraits" role="radiogroup" aria-label="Chân dung">
        {PORTRAITS.map((p) => (
          <button key={p} role="radio" aria-checked={portrait === p} className="jr-portrait" onClick={() => setPortrait(p)}>
            <img src={IMG(p)} alt={CREDITS[p]?.[1] ?? ''} />
            <span>{CREDITS[p]?.[1]}</span>
          </button>
        ))}
      </div>
      <label className="jr-name">
        <span>Tên nhân vật</span>
        <input value={name} maxLength={24} onChange={(e) => setName(e.target.value)} />
      </label>
      <button className="jr-cta" disabled={!name.trim()} onClick={() => update(() => ({ name: name.trim(), portrait }))}>
        Bắt đầu hành trình
      </button>
    </section>
  )
}

function Exit() {
  return (
    <Link to="/musicology/ban-do" className="jr-exit" aria-label="Rời hành trình, về bản đồ">
      ✕
    </Link>
  )
}

function Me({ save, size = 40 }: { save: Save; size?: number }) {
  return <img className="jr-me" src={IMG(save.portrait || PORTRAITS[0])} alt="" style={{ width: size, height: size }} />
}

/* ------------------------------------------------------------------ the chapter map */

function Atlas({ chapter, save, go }: { chapter: Chapter; save: Save; go: (p: Record<string, string>) => void }) {
  const [drawer, setDrawer] = useState(false)
  const done = chapter.scenes.filter((s) => save.done.includes(key(chapter, s)))
  const next = chapter.scenes.find((s) => !save.done.includes(key(chapter, s)))
  const pts = chapter.scenes.map((s) => proj(s.lon, s.lat))
  const here = pts[Math.max(0, (next ? chapter.scenes.indexOf(next) : chapter.scenes.length) - 1)] ?? pts[0]
  // a window on the route, a little wider than it, at the screen's shape
  const view = useMemo(() => {
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1])
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2
    const w = Math.max(60, (Math.max(...xs) - Math.min(...xs)) * 1.7), h = Math.max(50, (Math.max(...ys) - Math.min(...ys)) * 1.9)
    return `${cx - w / 2} ${cy - h / 2} ${w} ${h}`
  }, [pts])
  const courtOpen = !next
  const judged = chapter.court.claims.filter((c) => save.verdicts[key(chapter, c)]).length
  return (
    <section className="jr-atlas">
      <img className="jr-atlas-bg" src={IMG(chapter.cover)} alt="" />
      <div className="jr-atlas-wash" />
      <header className="jr-atlas-head">
        <Exit />
        <p className="jr-kicker">Chương {chapter.numeral} · {chapter.era} · {chapter.years}</p>
        <h1 className="jr-atlas-title">{chapter.title}</h1>
        {done.length === 0 && <p className="jr-atlas-intro">{named(chapter.intro, save.name)}</p>}
      </header>
      <svg className="jr-map" viewBox={view} preserveAspectRatio="xMidYMid meet" aria-label={`Bản đồ chương ${chapter.numeral}`}>
        <rect x={-W} y={-H} width={W * 3} height={H * 3} className="jr-sea" />
        <path d={(world as { land: string }).land} className="jr-land" />
        <path d={'M' + pts.map((p) => p.join(',')).join('L')} className="jr-route" />
        {chapter.scenes.map((s, i) => {
          const [x, y] = pts[i]
          const isDone = save.done.includes(key(chapter, s)), isNext = s === next
          return (
            <g key={s.id} className={`jr-stop${isDone ? ' is-done' : ''}${isNext ? ' is-next' : ''}`} transform={`translate(${x} ${y})`}>
              {isNext && <circle r={2.6} className="jr-stop-ring" />}
              <circle r={1.3} className="jr-stop-dot" />
              <text y={-2.4} className="jr-stop-num">{i + 1}</text>
            </g>
          )
        })}
        <g className="jr-traveller" style={{ transform: `translate(${here[0]}px, ${here[1]}px)` }}>
          <circle r={1.9} className="jr-traveller-ring" />
        </g>
      </svg>
      <footer className="jr-atlas-foot">
        <div className="jr-player">
          <Me save={save} />
          <div>
            <p className="jr-player-name">{save.name}</p>
            <p className="jr-player-meta">
              {done.length}/{chapter.scenes.length} chặng · {save.cards.length} thẻ chứng cứ
            </p>
          </div>
          <button className="jr-ghost" onClick={() => setDrawer(true)}>
            Sổ chứng cứ
          </button>
        </div>
        <ol className="jr-stops">
          {chapter.scenes.map((s, i) => {
            const isDone = save.done.includes(key(chapter, s)), locked = !isDone && s !== next
            return (
              <li key={s.id}>
                <button className={`jr-stop-row${isDone ? ' is-done' : ''}${s === next ? ' is-next' : ''}`} disabled={locked} onClick={() => go({ s: s.id })}>
                  <span className="jr-stop-i">{i + 1}</span>
                  <span className="jr-stop-t">
                    <b>{s.title}</b>
                    <small>
                      {s.place} · {s.year}
                    </small>
                  </span>
                  <span className="jr-stop-s">{isDone ? '✓' : locked ? '🔒' : 'Vào cảnh →'}</span>
                </button>
              </li>
            )
          })}
          <li>
            <button className={`jr-stop-row is-court${courtOpen ? ' is-next' : ''}`} disabled={!courtOpen} onClick={() => go({ v: 'court' })}>
              <span className="jr-stop-i">⚖</span>
              <span className="jr-stop-t">
                <b>Phiên toà của sử gia</b>
                <small>
                  {judged}/{chapter.court.claims.length} điều đã phân xử
                </small>
              </span>
              <span className="jr-stop-s">{courtOpen ? 'Mở →' : '🔒'}</span>
            </button>
          </li>
        </ol>
        <button className="jr-reset" onClick={() => confirm('Bắt đầu lại từ đầu? Tiến độ và thẻ sẽ bị xoá.') && resetJourney()}>
          Chơi lại từ đầu
        </button>
      </footer>
      {drawer && <Evidence chapter={chapter} save={save} onClose={() => setDrawer(false)} />}
    </section>
  )
}

function Evidence({ chapter, save, onClose }: { chapter: Chapter; save: Save; onClose: () => void }) {
  const cards = chapter.scenes.map((s) => s.card)
  return (
    <div className="jr-drawer" role="dialog" aria-label="Sổ chứng cứ">
      <button className="jr-drawer-scrim" aria-label="Đóng" onClick={onClose} />
      <div className="jr-drawer-card">
        <p className="jr-kicker">Sổ chứng cứ · Chương {chapter.numeral}</p>
        <div className="jr-deck">
          {cards.map((c) => (save.cards.includes(c.id) ? <EvidenceCard key={c.id} card={c} /> : <div key={c.id} className="jr-ev is-blank">?</div>))}
        </div>
        <button className="jr-ghost" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  )
}

function EvidenceCard({ card, fresh }: { card: Card; fresh?: boolean }) {
  const a = findArticle(card.read)
  return (
    <article className={`jr-ev${fresh ? ' is-fresh' : ''}`}>
      <p className="jr-ev-k">Chứng cứ</p>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      {a && (
        <Link to={`/theory/${a.slug}`} className="jr-ev-src">
          Nguồn: {a.title} →
        </Link>
      )}
    </article>
  )
}

/* ------------------------------------------------------------------ a scene */

type Phase = 'title' | 'talk' | 'quest' | 'reward'

function ScenePlayer({ chapter, scene, save, go }: { chapter: Chapter; scene: Scene; save: Save; go: (p: Record<string, string>) => void }) {
  const k = key(chapter, scene)
  const saved = save.step[k] ?? -1
  const [phase, setPhase] = useState<Phase>(save.done.includes(k) ? 'talk' : saved >= scene.lines.length ? 'quest' : saved >= 0 ? 'talk' : 'title')
  const [line, setLine] = useState(Math.max(0, Math.min(saved, scene.lines.length - 1)))
  const [wrong, setWrong] = useState<number[]>([])
  const [listen, setListen] = useState(false)
  const article = findArticle(scene.quest.read)
  const index = chapter.scenes.indexOf(scene)

  useEffect(() => {
    if (phase !== 'title') return
    const t = window.setTimeout(() => setPhase('talk'), 2800)
    return () => window.clearTimeout(t)
  }, [phase])

  const remember = (step: number) => update((s) => ({ step: { ...s.step, [k]: step } }))
  const advance = () => {
    if (phase === 'title') return setPhase('talk')
    if (phase !== 'talk') return
    if (line < scene.lines.length - 1) {
      setLine(line + 1)
      remember(line + 1)
    } else {
      setPhase('quest')
      remember(scene.lines.length)
    }
  }
  const answer = (i: number) => {
    if (i !== scene.quest.answer) return setWrong((w) => (w.includes(i) ? w : [...w, i]))
    update((s) => ({ done: s.done.includes(k) ? s.done : [...s.done, k], cards: s.cards.includes(scene.card.id) ? s.cards : [...s.cards, scene.card.id] }))
    setPhase('reward')
  }
  const l = scene.lines[line]
  const speaker = l.who === 'npc' ? scene.npc.name : l.who === 'me' ? save.name : ''
  const credit = CREDITS[scene.bg]

  return (
    <section className={`jr-scene is-${phase}`} onClick={phase === 'talk' || phase === 'title' ? advance : undefined}>
      <div className="jr-frame">
        <img className="jr-bg" src={IMG(scene.bg)} alt="" style={{ objectPosition: scene.focus }} />
      </div>
      <div className="jr-grade" />
      <div className="jr-glow" />
      <div className="jr-motes" aria-hidden>
        {Array.from({ length: 9 }, (_, i) => (
          <i key={i} style={{ left: `${8 + i * 10.5}%`, animationDelay: `${-i * 1.7}s`, animationDuration: `${11 + (i % 4) * 3}s` }} />
        ))}
      </div>
      <div className="jr-bar is-top" />
      <div className="jr-bar is-bottom" />

      <header className="jr-scene-head" onClick={(e) => e.stopPropagation()}>
        <button className="jr-exit" aria-label="Về bản đồ chương" onClick={() => go({})}>
          ←
        </button>
        <p>
          Chương {chapter.numeral} · Chặng {index + 1}/{chapter.scenes.length}
        </p>
        {scene.listen && (
          <button className="jr-ghost is-small" onClick={() => setListen(true)}>
            ♪ Nghe
          </button>
        )}
      </header>

      {phase === 'title' && (
        <div className="jr-titlecard">
          <p className="jr-kicker">{scene.year}</p>
          <h2>{scene.place}</h2>
          <p className="jr-titlecard-sub">{scene.title}</p>
        </div>
      )}

      {phase === 'talk' && (
        <div className="jr-dialog" key={line}>
          {l.who !== 'narrator' && (
            <div className={`jr-speaker${l.who === 'me' ? ' is-me' : ''}`}>
              {l.who === 'me' ? <Me save={save} size={46} /> : <NpcFace scene={scene} />}
              <div>
                <p className="jr-speaker-name">{speaker}</p>
                {l.who === 'npc' && (
                  <p className="jr-speaker-role">
                    {scene.npc.role}
                    {scene.npc.invented && ' · nhân vật hư cấu'}
                  </p>
                )}
              </div>
            </div>
          )}
          <p className={`jr-line${l.who === 'narrator' ? ' is-narration' : ''}`}>
            {named(l.text, save.name)
              .split(' ')
              .map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 26}ms` }}>
                  {w}{' '}
                </span>
              ))}
          </p>
          <p className="jr-dialog-foot">
            <span>Lời dựng lại · {line + 1}/{scene.lines.length}</span>
            <span className="jr-tap">Chạm để tiếp ›</span>
          </p>
        </div>
      )}

      {phase === 'quest' && (
        <div className="jr-quest" onClick={(e) => e.stopPropagation()}>
          <div className="jr-speaker">
            <NpcFace scene={scene} />
            <div>
              <p className="jr-speaker-name">{scene.npc.name} hỏi</p>
              <p className="jr-speaker-role">Câu trả lời nằm trong thư viện</p>
            </div>
          </div>
          <h3 className="jr-ask">{scene.quest.ask}</h3>
          {article && (
            <Link to={`/theory/${article.slug}`} className="jr-read">
              <span>📖 Đọc bài</span>
              <b>{article.title}</b>
              <small>Tìm ở {scene.quest.where}</small>
            </Link>
          )}
          <div className="jr-choices">
            {scene.quest.choices.map((c, i) => (
              <button key={i} className={`jr-choice${wrong.includes(i) ? ' is-wrong' : ''}`} disabled={wrong.includes(i)} onClick={() => answer(i)}>
                {c}
              </button>
            ))}
          </div>
          {wrong.length > 0 && <p className="jr-hint">Chưa phải. Hãy đọc {scene.quest.where} rồi thử lại — không có gì mất cả.</p>}
        </div>
      )}

      {phase === 'reward' && (
        <div className="jr-reward" onClick={(e) => e.stopPropagation()}>
          <p className="jr-explain">
            <b>{scene.npc.name}:</b> {named(scene.quest.explain, save.name)}
          </p>
          <EvidenceCard card={scene.card} fresh />
          <button
            className="jr-cta"
            onClick={() => {
              const next = chapter.scenes[index + 1]
              go(next ? {} : { v: 'court' })
            }}
          >
            {index + 1 < chapter.scenes.length ? 'Lên đường →' : 'Đến phiên toà của sử gia →'}
          </button>
        </div>
      )}

      {credit && (
        <a className="jr-credit" href={credit[3]} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
          Tranh: {credit[1]} · {credit[2]}
        </a>
      )}

      {listen && scene.listen && (
        <div className="jr-drawer" role="dialog" aria-label="Nghe" onClick={(e) => e.stopPropagation()}>
          <button className="jr-drawer-scrim" aria-label="Đóng" onClick={() => setListen(false)} />
          <div className="jr-drawer-card">
            <YouTubeVideo id={scene.listen.youtube} caption={scene.listen.caption} />
            <button className="jr-ghost" onClick={() => setListen(false)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function NpcFace({ scene }: { scene: Scene }) {
  return scene.npc.img ? <img className="jr-face" src={IMG(scene.npc.img)} alt="" /> : <span className="jr-face is-initial">{scene.npc.name.charAt(0)}</span>
}

/* ------------------------------------------------------------------ the historian's court */

function Court({ chapter, save, go }: { chapter: Chapter; save: Save; go: (p: Record<string, string>) => void }) {
  const claims = chapter.court.claims
  const judged = claims.filter((c) => save.verdicts[key(chapter, c)])
  const right = judged.filter((c) => save.verdicts[key(chapter, c)] === c.verdict).length
  const navigate = useNavigate()
  return (
    <section className="jr-court">
      <img className="jr-atlas-bg" src={IMG(chapter.cover)} alt="" />
      <div className="jr-atlas-wash" />
      <header className="jr-atlas-head">
        <button className="jr-exit" aria-label="Về bản đồ chương" onClick={() => go({})}>
          ←
        </button>
        <p className="jr-kicker">Chương {chapter.numeral} · Phiên toà của sử gia</p>
        <h1 className="jr-atlas-title">Thật, giai thoại, hay chưa chắc?</h1>
        <p className="jr-atlas-intro">{named(chapter.court.intro, save.name)}</p>
      </header>
      <ol className="jr-claims">
        {claims.map((c, i) => {
          const v = save.verdicts[key(chapter, c)]
          const a = findArticle(c.read)
          return (
            <li key={c.id} className={`jr-claim${v ? (v === c.verdict ? ' is-right' : ' is-off') : ''}`}>
              <p className="jr-claim-n">Lời khai {i + 1}</p>
              <p className="jr-claim-t">“{c.text}”</p>
              {!v ? (
                <div className="jr-verdicts">
                  {(Object.keys(VERDICT) as Verdict[]).map((x) => (
                    <button key={x} onClick={() => update((s) => ({ verdicts: { ...s.verdicts, [key(chapter, c)]: x } }))}>
                      {VERDICT[x]}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="jr-claim-out">
                  <p>
                    <b>{v === c.verdict ? 'Khớp với sử liệu' : `Sử liệu nói: ${VERDICT[c.verdict]}`}</b> — {c.explain}
                  </p>
                  {a && <Link to={`/theory/${a.slug}`}>Đọc trong bài: {a.title} →</Link>}
                </div>
              )}
            </li>
          )
        })}
      </ol>
      {judged.length === claims.length && (
        <footer className="jr-outro">
          <p className="jr-kicker">
            {right}/{claims.length} phán quyết khớp với sử liệu
          </p>
          <p>{named(chapter.outro, save.name)}</p>
          <button className="jr-cta" onClick={() => navigate('/musicology/ban-do')}>
            Về bản đồ âm nhạc
          </button>
          <p className="jr-soon">Chương II — Phục hưng: đang được viết.</p>
        </footer>
      )}
    </section>
  )
}

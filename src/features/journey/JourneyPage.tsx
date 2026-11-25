import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IntroClip } from '../../components/IntroClip'
import { shouldShowJourneyClip } from '../../components/introGate'
import { findArticle } from '../theory/wiki'
import { YouTubeVideo } from '../theory/YouTube'
import { ALL_CHAPTERS, CHAPTERS, TRACKS, trackOf } from './chapters'
import { CONTEXT } from './context'
import { MAPS, onMap } from './maps'
import { ERA, loadPool, makeTrip, type Pool } from './endless'
import { CREDITS } from './credits'
import { MUSIC } from './music'
import { nudge, playTrack, setMuted, useSoundtrack } from './soundtrack'
import { finished, named, opened, resetJourney, update, useSave, type Endless as Trip, type Save } from './progress'
import type { Card, Chapter, Claim, Scene, Verdict } from './types'
import { levelOf, recordAttempt, verdictXp } from './engine/progression'
import { sceneChallenge } from './engine/challenge'
import { checkPuzzle, type Result } from './engine/puzzles'
import type { PuzzleDef } from './engine/types'
import { legacyPuzzle } from './content/legacy'
import { ARCS } from './content/arcs'
import { ArcPlayer, PuzzleBody } from './ui/Arc'
import { Profile } from './ui/Profile'
import { visibleLocations } from './engine/runtime'
import { holds } from './engine/world'
import { KIND_WEIGHTS, LEVEL_LABEL, dailyChapter, dailyKey, dailySeed, levelFrom, newGamePlus, replayChapter, streak, today } from './engine/replay'
import './journey.css'

const IMG = (id: string) => `${import.meta.env.BASE_URL}images/journey/${id}.webp`
/** Backgrounds come in two widths: 1080 for phones, 1920 for wide screens. */
const bg = (id: string) => ({ src: IMG(id), srcSet: `${IMG(id + '-m')} 1080w, ${IMG(id)} 1920w`, sizes: '100vw' })
/** Renaissance portraits the player can wear (public domain, credits.ts). */
const PORTRAITS = ['p-leonardo-musician', 'p-durer', 'p-van-eyck', 'p-castiglione', 'p-ermine', 'p-pollaiuolo']
const key = (c: Chapter, s: Scene | Claim) => `${c.id}/${s.id}`
type Go = (p: Record<string, string>, how?: 'push' | 'replace' | 'back') => void
/** Three candidate sources for a claim: its own article and two others the court cites, in a fixed order. */
const groundsOf = (claims: Claim[], c: Claim) => {
  const others = [...new Set(claims.map((x) => x.read))].filter((r) => r !== c.read)
  const i = claims.indexOf(c)
  return [c.read, ...[0, 1].map((k) => others[(i + k) % Math.max(others.length, 1)]).filter(Boolean)].filter((x, j, xs) => xs.indexOf(x) === j).sort()
}
const VERDICT: Record<Verdict, string> = { fact: 'Có chứng cứ', legend: 'Giai thoại', unsure: 'Chưa chắc' }

/**
 * Hành trình: a story game over the world map. The player crosses the history of music era by era; every character
 * asks a question whose answer is in a library article, so the game is read through the library.
 */
/** Entering the Journey: Lamar's clip first (portrait / landscape), whole and with sound; the game — and its music —
 *  mounts when the clip starts to fade. */
export function JourneyPage() {
  const [clip, setClip] = useState<'on' | 'fading' | 'off'>(() => (shouldShowJourneyClip() ? 'on' : 'off'))
  return (
    <>
      {clip !== 'on' && <JourneyGame />}
      {clip !== 'off' && <IntroClip clip="journey" label="Đoạn mở đầu Hành trình" remember={false} onLeave={() => setClip('fading')} onDone={() => setClip('off')} />}
    </>
  )
}

function JourneyGame() {
  const save = useSave()
  const [params, setParams] = useSearchParams()
  const asked = ALL_CHAPTERS.find((c) => c.id === params.get('c'))
  // the journey: the asked chapter's, else ?t= (world by default)
  const track = asked ? trackOf(asked.id) : (TRACKS.find((t) => t.id === params.get('t') && t.chapters.length) ?? TRACKS[0])
  // no chapter in the address: the first one of the journey not yet finished (or the last)
  const chapter = asked && opened(asked, save) ? asked : (track.chapters.find((c) => opened(c, save) && !finished(c, save)) ?? track.chapters[track.chapters.length - 1])
  const scene = chapter.scenes.find((s) => s.id === params.get('s'))
  const v = params.get('v')
  // a chapter opens on its historical prologue the first time
  const day = today()
  const dailyId = dailyChapter(day, CHAPTERS.filter((c) => ERA[c.id] && opened(c, save)).map((c) => c.id))
  const dailyCh = CHAPTERS.find((c) => c.id === dailyId)
  const arc = ARCS.find((a) => a.id === params.get('a') && a.chapter === chapter.id && holds(a.opens, save))
  const view = !save.name ? 'create' : v === 'arc' && arc ? 'arc' : v === 'endless' ? 'endless' : v === 'daily' && dailyCh ? 'daily' : scene ? 'scene' : v === 'court' ? 'court' : v === 'prologue' || (CONTEXT[chapter.id] && !save.seen.includes(chapter.id)) ? 'prologue' : 'atlas'
  const navigate = useNavigate()
  const { state } = useLocation()
  /**
   * Moves inside the game. "push" opens a deeper view; "back" returns to the view it was opened from by going back in
   * history (so the phone's Back button then leaves the game instead of re-entering the scene); "replace" swaps views.
   */
  const go: Go = (p, how = 'push') => {
    if (how === 'back' && (state as { jr?: number } | null)?.jr) return navigate(-1)
    setParams({ c: chapter.id, ...p }, { replace: how !== 'push', state: how === 'push' ? { jr: 1 } : state })
  }
  useEffect(() => () => playTrack(undefined), [])
  return (
    <div className={`jr jr-era-${chapter.style}`} onClickCapture={nudge}>
      {view === 'create' && <Create />}
      {view === 'prologue' && <Prologue key={chapter.id} chapter={chapter} go={go} />}
      {view === 'atlas' && <Atlas chapter={chapter} save={save} go={go} />}
      {view === 'endless' && <EndlessTrip key={chapter.id} chapter={chapter} save={save} go={go} stopId={params.get('s')} />}
      {view === 'daily' && dailyCh && <EndlessTrip key={`daily-${day}`} chapter={dailyCh} save={save} go={go} stopId={params.get('s')} daily={day} />}
      {view === 'scene' && scene && <ScenePlayer key={scene.id} chapter={chapter} scene={scene} save={save} go={go} />}
      {view === 'court' && <Court chapter={chapter} save={save} go={go} />}
      {view === 'arc' && arc && (
        <ArcPlayer
          arc={arc}
          save={save}
          go={go}
          l={params.get('l')}
          p={params.get('p')}
          review={params.get('r') === '1'}
          walk={params.get('w') === '1'}
          map={(open, done) => {
            const places = visibleLocations(arc, save).map((l) => ({ id: l.id, place: l.name, title: l.name, year: l.year ?? '', lat: l.lat, lon: l.lon, far: l.far }) as unknown as Scene)
            return <ChapterMap chapter={chapter} scenes={places} isDone={(x) => done(x.id)} next={places.find((x) => !done(x.id))} open={(x) => open(x.id)} />
          }}
        />
      )}
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

function Atlas({ chapter, save, go }: { chapter: Chapter; save: Save; go: Go }) {
  const [drawer, setDrawer] = useState(false)
  const [profile, setProfile] = useState(false)
  const track = trackOf(chapter.id)
  const done = chapter.scenes.filter((s) => save.done.includes(key(chapter, s)))
  const next = chapter.scenes.find((s) => !save.done.includes(key(chapter, s)))
  const courtOpen = !next
  useEffect(() => {
    playTrack(MUSIC[chapter.theme])
  }, [chapter])
  const judged = chapter.court.claims.filter((c) => save.verdicts[key(chapter, c)]).length
  return (
    <section className="jr-atlas">
      <img className="jr-atlas-bg" {...bg(chapter.cover)} alt="" />
      <div className="jr-atlas-wash" />
      <header className="jr-atlas-head">
        <Exit />
        <div className="jr-atlas-sound">
          <SoundToggle />
        </div>
        <p className="jr-kicker">Chương {chapter.numeral} · {chapter.era} · {chapter.years}</p>
        <h1 className="jr-atlas-title">{chapter.title}</h1>
        {done.length === 0 && <p className="jr-atlas-intro">{named(chapter.intro, save.name)}</p>}
        {CONTEXT[chapter.id] && (
          <div className="jr-atlas-actions">
            <button className="jr-ghost is-small" onClick={() => go({ v: 'prologue' })}>
              Bối cảnh lịch sử
            </button>
            {ERA[chapter.id] && (
              <button className="jr-ghost is-small is-endless" onClick={() => go({ v: 'endless' })}>
                ∞ Lữ hành vô tận
              </button>
            )}
            {ERA[chapter.id] && (
              <button className="jr-ghost is-small" onClick={() => go({ v: 'daily' })}>
                ☀ Thử thách hôm nay{(save.endless[dailyKey(today())]?.at ?? 0) >= 5 ? ' ✓' : ''}
              </button>
            )}
          </div>
        )}
        {TRACKS.filter((t) => t.chapters.length).length > 1 && (
          <nav className="jr-tracks" aria-label="Hành trình">
            {TRACKS.filter((t) => t.chapters.length).map((t) => (
              <Link key={t.id} to={`/hanh-trinh?t=${t.id}`} replace aria-current={t === track ? 'page' : undefined}>
                {t.title}
              </Link>
            ))}
          </nav>
        )}
        {track.chapters.length > 1 && (
          <nav className="jr-chapters" aria-label="Các chương">
            {track.chapters.map((c) => (
              <Link key={c.id} to={`/hanh-trinh?c=${c.id}`} replace aria-current={c === chapter ? 'page' : undefined} className={opened(c, save) ? '' : 'is-locked'} onClick={(e) => !opened(c, save) && e.preventDefault()}>
                <b>{c.numeral}</b> {c.era}
                {!opened(c, save) && ' 🔒'}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <ChapterMap chapter={chapter} scenes={chapter.scenes} isDone={(s) => save.done.includes(key(chapter, s))} next={next} open={(s) => go({ s: s.id })} />
      <footer className="jr-atlas-foot">
        <div className="jr-player">
          <button className="jr-player-me" onClick={() => setProfile(true)} aria-label={`Hồ sơ người chơi: ${save.name}, cấp ${levelOf(save.xp)}`}>
            <Me save={save} />
            <span>
              <span className="jr-player-name">{save.name}</span>
              <span className="jr-player-lv">Cấp {levelOf(save.xp)} · {save.xp} XP · Hồ sơ ›</span>
              <span className="jr-player-meta">
                {done.length}/{chapter.scenes.length} chặng · {save.cards.length} thẻ chứng cứ
              </span>
            </span>
          </button>
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
                {ARCS.filter((a) => a.chapter === chapter.id && JSON.stringify(a.opens).includes(`"q:${chapter.id}/${s.id}"`)).map((a) => {
                  const open = holds(a.opens, save)
                  return (
                    <button key={a.id} className={`jr-stop-row is-arc${open ? ' is-open' : ''}`} disabled={!open} onClick={() => go({ v: 'arc', a: a.id })}>
                      <span className="jr-stop-i">✦</span>
                      <span className="jr-stop-t">
                        <b>{a.title}</b>
                        <small>Tuyến điều tra · {puzzleKinds(a.puzzles)}{open ? '' : ` · mở sau chặng ${i + 1}`}</small>
                      </span>
                      <span className="jr-stop-s">{holds(a.completion, save) ? '✓' : open ? 'Mở →' : '🔒'}</span>
                    </button>
                  )
                })}
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
        <div className="jr-replay">
          {finished(chapter, save) && (
            <button className="jr-ghost is-small" onClick={() => confirm(`Chơi lại Chương ${chapter.numeral}? Các chặng và phán quyết của chương này làm lại từ đầu; thẻ, kỹ năng và Codex vẫn giữ.`) && update((s) => replayChapter(s, chapter.id))}>
              ↺ Chơi lại chương này
            </button>
          )}
          {track.id === 'the-gioi' && CHAPTERS.every((c) => finished(c, save)) && (
            <button className="jr-ghost is-small" onClick={() => confirm('Bắt đầu Hành trình mới+? Cốt truyện mọi chương làm lại từ đầu; kỹ năng, thẻ chứng cứ, Codex, thành tích vẫn giữ, các chương vẫn mở.') && update((s) => newGamePlus(s))}>
              ✦ Hành trình mới+{save.ngPlus ? ` (lần ${save.ngPlus + 1})` : ''}
            </button>
          )}
        </div>
        <button className="jr-reset" onClick={() => confirm('Bắt đầu lại từ đầu? Tiến độ và thẻ sẽ bị xoá.') && resetJourney()}>
          Chơi lại từ đầu
        </button>
      </footer>
      {drawer && <Evidence chapter={chapter} save={save} onClose={() => setDrawer(false)} />}
      {profile && <Profile save={save} portrait={<Me save={save} size={64} />} onClose={() => setProfile(false)} />}
    </section>
  )
}

/** The chapter's period map: an old map of Europe with the route drawn on it, to be scrolled and zoomed. */
function ChapterMap({ chapter, scenes, isDone, next, open: enter }: { chapter: Chapter; scenes: Scene[]; isDone: (s: Scene) => boolean; next?: Scene; open: (s: Scene) => void }) {
  const m = MAPS[chapter.id]
  const box = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(false)
  // a stop off the old map's edge is held just inside it
  const u = m.w / 100
  const pts: [number, number][] = []
  for (const s of scenes) {
    let [x, y] = onMap(m, s.lat, s.lon).map((v, i) => Math.min(Math.max(v, 30), (i ? m.h : m.w) - 30))
    // stops in the same city fan out around it instead of hiding one another
    const near = pts.filter((p) => Math.hypot(p[0] - x, p[1] - y) < u * 2.4).length
    if (near) [x, y] = [x + Math.cos(near * 1.2) * u * 3.2, y + Math.sin(near * 1.2) * u * 3.2]
    pts.push([x, y])
  }
  const here = pts[Math.max(0, (next ? scenes.indexOf(next) : scenes.length) - 1)] ?? pts[0]
  const [hx, hy] = here
  // keep the traveller in sight whenever the zoom changes
  useEffect(() => {
    const b = box.current
    if (b) b.scrollTo({ left: (hx / m.w) * b.scrollWidth - b.clientWidth / 2, top: (hy / m.h) * b.scrollHeight - b.clientHeight / 2 })
  }, [zoom, hx, hy, m])
  return (
    <figure className="jr-oldmap">
      <div ref={box} className={`jr-oldmap-box${zoom ? ' is-zoom' : ''}`}>
        <div className="jr-oldmap-canvas" style={{ width: zoom ? `min(260%, ${m.w}px)` : '100%', aspectRatio: `${m.w} / ${m.h}` }}>
          <img src={IMG(m.img)} alt={CREDITS[m.img]?.[1] ?? ''} />
          <svg viewBox={`0 0 ${m.w} ${m.h}`} aria-label={`Bản đồ chương ${chapter.numeral}`}>
            <path d={'M' + pts.map((p) => p.join(',')).join('L')} className="jr-route" style={{ strokeWidth: u * 0.45, strokeDasharray: `${u * 1.2} ${u * 0.9}` }} />
            {scenes.map((s, i) => {
              const [x, y] = pts[i]
              const done = isDone(s), isNext = s === next
              const open = done || isNext
              return (
                <g key={s.id} className={`jr-stop${done ? ' is-done' : ''}${isNext ? ' is-next' : ''}${open ? ' is-open' : ''}`} transform={`translate(${x} ${y})`} onClick={() => open && enter(s)}>
                  {isNext && <circle r={u * 2.6} className="jr-stop-ring" style={{ strokeWidth: u * 0.3 }} />}
                  <circle r={u * 1.5} className="jr-stop-dot" style={{ strokeWidth: u * 0.3 }} />
                  <text dy="0.35em" className="jr-stop-num" style={{ fontSize: u * 1.7 }}>
                    {i + 1}
                  </text>
                  {s.far && (
                    <text x={u * 2.2} dy="0.35em" className="jr-stop-far" style={{ fontSize: u * 1.9 }}>
                      ◂ {s.place.split(', ').pop()}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>
      </div>
      <figcaption>
        <button className="jr-ghost is-small" onClick={() => setZoom((z) => !z)}>
          {zoom ? 'Thu nhỏ bản đồ' : 'Phóng to bản đồ'}
        </button>
        <span>{CREDITS[m.img]?.[1]}</span>
      </figcaption>
    </figure>
  )
}

/** Lữ hành vô tận: trips of five generated stops on the chapter's old map, one after another, without end. */
/** `daily`: today's challenge — a fixed seed for the day, its own record, no new trip once done. */
function EndlessTrip({ chapter, save, go, stopId, daily }: { chapter: Chapter; save: Save; go: Go; stopId: string | null; daily?: string }) {
  const [pool, setPool] = useState<Pool>()
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    loadPool().then(setPool, () => setFailed(true))
  }, [])
  useEffect(() => {
    if (!stopId) playTrack(MUSIC[chapter.theme])
  }, [chapter, stopId])
  const [fresh] = useState(() => 1 + Math.floor(Math.random() * 1e9))
  const slot = daily ? dailyKey(daily) : chapter.id
  const view = daily ? 'daily' : 'endless'
  // the day's challenge also learns from the player's road: its difficulty follows the chapter's recent answers
  const road = save.endless[chapter.id]
  const trip: Trip = save.endless[slot] ?? { seed: daily ? dailySeed(daily) : fresh, at: 0, total: 0, right: 0, asked: daily ? (road?.asked ?? []) : [], recent: daily ? road?.recent : [] }
  const setTrip = (t: Partial<Trip>) => update((s) => ({ endless: { ...s.endless, [slot]: { ...(s.endless[slot] ?? trip), ...t } } }))
  // the level is fixed for the whole trip: answers given during it count for the next one
  const recent = trip.recent ?? []
  const level = levelFrom(recent.slice(0, recent.length - trip.at))
  // the trip is drawn from its seed only, so it stays the same while it is played (asked facts leave the next trip)
  const asked = trip.asked
  const stops = useMemo(() => (pool ? makeTrip(chapter, pool, trip.seed, asked.slice(0, asked.length - trip.at), 5, KIND_WEIGHTS[level]) : []), [pool, chapter, trip.seed]) // eslint-disable-line react-hooks/exhaustive-deps
  const back = () => go({ v: view }, 'back')
  const newTrip = () => setTrip({ seed: 1 + Math.floor(Math.random() * 1e9), at: 0 })
  const stop = stops.find((x) => x.scene.id === stopId)
  if (stop) {
    const i = stops.indexOf(stop)
    const last = i === stops.length - 1
    return (
      <ScenePlayer
        key={stop.scene.id}
        chapter={chapter}
        scene={stop.scene}
        save={save}
        go={go}
        endless={{
          label: `${daily ? 'Thử thách hôm nay' : 'Lữ hành vô tận'} · ${chapter.era} · chặng ${i + 1}/${stops.length}`,
          onDone: (first) => {
            if (i < trip.at) return
            setTrip({ at: i + 1, total: trip.total + 1, right: trip.right + (first ? 1 : 0), asked: [...trip.asked, stop.item].slice(-1500), recent: [...recent, first].slice(-40) })
          },
          nextLabel: last ? 'Hết chuyến — về bản đồ' : 'Chặng sau →',
          onNext: () => (last ? back() : go({ v: view, s: stops[i + 1].scene.id }, 'replace')),
          onBack: back,
        }}
      />
    )
  }
  const next = stops[trip.at]?.scene
  return (
    <section className="jr-atlas">
      <img className="jr-atlas-bg" {...bg(chapter.cover)} alt="" />
      <div className="jr-atlas-wash" />
      <header className="jr-atlas-head">
        <Exit />
        <div className="jr-atlas-sound">
          <SoundToggle />
        </div>
        <p className="jr-kicker">
          {daily ? `Thử thách hôm nay · ${daily}` : 'Lữ hành vô tận'} · {chapter.era} · độ khó {LEVEL_LABEL[level]}
        </p>
        <h1 className="jr-atlas-title">{daily ? 'Năm chặng của ngày' : 'Những con đường chưa kể'}</h1>
        <p className="jr-atlas-intro">
          {daily
            ? `Cùng một chuyến cho cả ngày, ở một chương bạn đã mở. Chuỗi ngày liên tiếp: ${streak(save, daily)}.`
            : `Mỗi chuyến đi năm chặng, gặp những nhạc sĩ thời ${chapter.era} do máy chọn ngẫu nhiên. Câu hỏi lấy đúng một dòng trong tiểu sử, danh mục tác phẩm hoặc mục giai thoại của họ — đáp án luôn nằm trong bài.`}{' '}
          Độ khó theo những câu bạn đúng ngay gần đây — không theo cấp nhân vật.
        </p>
        <div className="jr-atlas-actions">
          <button className="jr-ghost is-small" onClick={() => go({}, 'back')}>
            ← Về cốt truyện chương {chapter.numeral}
          </button>
        </div>
      </header>
      {!pool ? (
        <p className="jr-atlas-intro jr-endless-wait">{failed ? 'Không tải được dữ liệu chuyến đi — kiểm tra kết nối mạng rồi mở lại.' : 'Đang trải bản đồ…'}</p>
      ) : (
        <ChapterMap chapter={chapter} scenes={stops.map((x) => x.scene)} isDone={(s) => stops.findIndex((x) => x.scene === s) < trip.at} next={next} open={(s) => go({ v: view, s: s.id })} />
      )}
      <footer className="jr-atlas-foot">
        <div className="jr-player">
          <Me save={save} />
          <div>
            <p className="jr-player-name">{save.name}</p>
            <p className="jr-player-meta">
              {trip.total} chặng đã đi · {trip.right} lần đúng ngay
            </p>
          </div>
        </div>
        <ol className="jr-stops">
          {stops.map((x, i) => {
            const done = i < trip.at, locked = i > trip.at
            return (
              <li key={x.scene.id}>
                <button className={`jr-stop-row${done ? ' is-done' : ''}${i === trip.at ? ' is-next' : ''}`} disabled={locked} onClick={() => go({ v: view, s: x.scene.id })}>
                  <span className="jr-stop-i">{i + 1}</span>
                  <span className="jr-stop-t">
                    <b>{x.scene.npc.name}</b>
                    <small>
                      {x.scene.title} · {x.scene.place}
                    </small>
                  </span>
                  <span className="jr-stop-s">{done ? '✓' : locked ? '🔒' : 'Vào →'}</span>
                </button>
              </li>
            )
          })}
        </ol>
        {pool && trip.at >= stops.length && !daily && (
          <button className="jr-cta jr-endless-new" onClick={newTrip}>
            Chuyến đi mới →
          </button>
        )}
        {pool && trip.at >= stops.length && daily && <p className="jr-player-meta">Xong thử thách hôm nay — mai có chuyến mới. Chuỗi: {streak(save, daily)} ngày.</p>}
      </footer>
    </section>
  )
}

/** Before the map: the history the chapter happens in, a few panels long. */
function Prologue({ chapter, go }: { chapter: Chapter; go: Go }) {
  const panels = CONTEXT[chapter.id]
  const [i, setI] = useState(0)
  const p = panels[i]
  const a = findArticle(p.read)
  // shown once, it counts as seen: leaving half-way (Back, ✕) must not bring it back every time the chapter opens.
  // The address names the prologue first, so marking it seen does not close it under the reader.
  const [auto] = useState(() => new URLSearchParams(window.location.hash.split('?')[1]).get('v') !== 'prologue')
  useEffect(() => {
    if (auto) go({ v: 'prologue' }, 'replace')
    update((s) => ({ seen: s.seen.includes(chapter.id) ? s.seen : [...s.seen, chapter.id] }))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // opened by itself it gives way to the map; opened from the map's button it returns there
  const finish = () => go({}, auto ? 'replace' : 'back')
  useEffect(() => {
    playTrack(MUSIC[chapter.theme])
  }, [chapter])
  return (
    <section className="jr-prologue">
      <div className="jr-frame" key={p.img}>
        <img className="jr-bg" {...bg(p.img)} alt="" />
      </div>
      <div className="jr-grade" />
      <div className="jr-bar is-top" />
      <div className="jr-bar is-bottom" />
      <header className="jr-scene-head">
        <Exit />
        <span>
          Chương {chapter.numeral} · Bối cảnh lịch sử · {i + 1}/{panels.length}
        </span>
        <SoundToggle />
      </header>
      <article className="jr-prologue-panel" key={i}>
        {i === 0 && (
          <p className="jr-kicker">
            {chapter.era} · {chapter.years}
          </p>
        )}
        <h2>{p.title}</h2>
        <p>{p.text}</p>
        <div className="jr-prologue-nav">
          {a && (
            <Link to={`/theory/${a.slug}`} className="jr-read">
              <span>📖 Đọc thêm</span>
              <b>{a.title}</b>
            </Link>
          )}
          <div>
            {i > 0 && (
              <button className="jr-ghost" onClick={() => setI(i - 1)}>
                ←
              </button>
            )}
            {i < panels.length - 1 ? (
              <button className="jr-cta" onClick={() => setI(i + 1)}>
                Tiếp
              </button>
            ) : (
              <button className="jr-cta" onClick={finish}>
                Vào bản đồ chương {chapter.numeral}
              </button>
            )}
          </div>
        </div>
        {i < panels.length - 1 && (
          <button className="jr-skip" onClick={finish}>
            Bỏ qua
          </button>
        )}
      </article>
      <p className="jr-credit">{CREDITS[p.img] && `Tranh: ${CREDITS[p.img][1]} · ${CREDITS[p.img][2]}`}</p>
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

type Phase = 'title' | 'talk' | 'quest' | 'music' | 'reward'

/** A generated stop runs in the same player, with its own way back, forward and of counting. */
interface EndlessHooks {
  label: string
  onDone: (firstTry: boolean) => void
  onNext: () => void
  nextLabel: string
  onBack: () => void
}

function ScenePlayer({ chapter, scene, save, go, endless }: { chapter: Chapter; scene: Scene; save: Save; go: Go; endless?: EndlessHooks }) {
  const k = endless ? `x/${scene.id}` : key(chapter, scene)
  const saved = save.step[k] ?? -1
  const [phase, setPhase] = useState<Phase>(!endless && save.done.includes(k) ? 'talk' : saved >= scene.lines.length ? 'quest' : saved >= 0 ? 'talk' : 'title')
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

  useEffect(() => {
    playTrack(listen ? undefined : MUSIC[scene.track ?? scene.id])
  }, [scene, listen])
  const track = MUSIC[scene.track ?? scene.id]
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
    // story puzzles feed the engine's records (tries, XP, mastery, codex); generated stops have no stable id
    if (!endless) update((s) => recordAttempt(s, legacyPuzzle(chapter, scene), i === scene.quest.answer, 0))
    if (i !== scene.quest.answer) return setWrong((w) => (w.includes(i) ? w : [...w, i]))
    if (endless) {
      endless.onDone(wrong.length === 0)
      return setPhase('reward')
    }
    update((s) => ({ done: s.done.includes(k) ? s.done : [...s.done, k], cards: s.cards.includes(scene.card.id) ? s.cards : [...s.cards, scene.card.id] }))
    setPhase(challenge ? 'music' : 'reward')
  }
  // cheap and deterministic: rebuilt each render rather than memoized
  const challenge = endless ? null : sceneChallenge(chapter.id, scene.id, index)
  const l = scene.lines[line]
  const speaker = l.who === 'npc' ? scene.npc.name : l.who === 'me' ? save.name : ''
  const credit = CREDITS[scene.bg]

  return (
    <section className={`jr-scene is-${phase}`} onClick={phase === 'talk' || phase === 'title' ? advance : undefined}>
      <div className="jr-frame">
        <img className="jr-bg" {...bg(scene.bg)} alt="" style={{ objectPosition: scene.focus }} />
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
        <button className="jr-exit" aria-label="Về bản đồ chương" onClick={() => (endless ? endless.onBack() : go({}, 'back'))}>
          ←
        </button>
        <p>
          {endless ? endless.label : `Chương ${chapter.numeral} · Chặng ${index + 1}/${chapter.scenes.length}`}
        </p>
        <span className="jr-head-tools">
          <SoundToggle />
          {scene.listen && (
            <button className="jr-ghost is-small" onClick={() => setListen(true)}>
              Xem video
            </button>
          )}
        </span>
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
            <span>
              {l.fiction ? <b className="jr-fiction">✦ Tình tiết hư cấu</b> : 'Lời dựng lại'} · {line + 1}/{scene.lines.length}
            </span>
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

      {phase === 'music' && challenge && <MusicChallenge puzzle={challenge} save={save} onDone={() => setPhase('reward')} />}

      {phase === 'reward' && (
        <div className="jr-reward" onClick={(e) => e.stopPropagation()}>
          <p className="jr-explain">
            <b>{scene.npc.name}:</b> {named(scene.quest.explain, save.name)}
          </p>
          <EvidenceCard card={scene.card} fresh />
          <button
            className="jr-cta"
            onClick={() => {
              if (endless) return endless.onNext()
              const next = chapter.scenes[index + 1]
              if (next) go({}, 'back')
              else go({ v: 'court' }, 'replace')
            }}
          >
            {endless ? endless.nextLabel : index + 1 < chapter.scenes.length ? 'Lên đường →' : 'Đến phiên toà của sử gia →'}
          </button>
        </div>
      )}

      <p className="jr-credit" onClick={(e) => e.stopPropagation()}>
        {track && (
          <a href={track.page} target="_blank" rel="noreferrer">
            ♫ {track.title} — {track.by} · {track.licence}
            {track.note && ` · ${track.note}`}
          </a>
        )}
        {credit && (
          <a href={credit[3]} target="_blank" rel="noreferrer">
            Tranh: {credit[1]} · {credit[2]}
          </a>
        )}
      </p>

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

/** Sound on / off, with the name of what is playing. */
function SoundToggle() {
  const { track, muted } = useSoundtrack()
  if (!track) return null
  return (
    <button className={`jr-sound${muted ? ' is-off' : ''}`} onClick={(e) => (e.stopPropagation(), setMuted(!muted))} aria-label={muted ? 'Bật nhạc nền' : 'Tắt nhạc nền'} title={track.title}>
      <span aria-hidden>{muted ? '♪̸' : '♫'}</span>
      <span className="jr-sound-t">{muted ? 'Nhạc tắt' : track.title}</span>
    </button>
  )
}

function NpcFace({ scene }: { scene: Scene }) {
  return scene.npc.img ? <img className="jr-face" src={IMG(scene.npc.img)} alt="" /> : <span className="jr-face is-initial">{scene.npc.name.charAt(0)}</span>
}

/* ------------------------------------------------------------------ the historian's court */

function Court({ chapter, save, go }: { chapter: Chapter; save: Save; go: Go }) {
  const claims = chapter.court.claims
  const judged = claims.filter((c) => save.verdicts[key(chapter, c)])
  const right = judged.filter((c) => save.verdicts[key(chapter, c)] === c.verdict).length
  const list = trackOf(chapter.id).chapters
  const next = list[list.indexOf(chapter) + 1]
  const navigate = useNavigate()
  useEffect(() => {
    playTrack(MUSIC[chapter.theme])
  }, [chapter])
  return (
    <section className="jr-court">
      <img className="jr-atlas-bg" {...bg(chapter.cover)} alt="" />
      <div className="jr-atlas-wash" />
      <header className="jr-atlas-head">
        <button className="jr-exit" aria-label="Về bản đồ chương" onClick={() => go({}, 'back')}>
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
                    <button key={x} onClick={() => update((s) => ({ verdicts: { ...s.verdicts, [key(chapter, c)]: x }, ...verdictXp(s, key(chapter, c), x === c.verdict) }))}>
                      {VERDICT[x]}
                    </button>
                  ))}
                </div>
              ) : !save.trial[key(chapter, c)] ? (
                // the second question of the trial: which source settles it? Then the explanation
                <div className="jr-claim-out">
                  <p>
                    <b>{v === c.verdict ? 'Khớp với sử liệu' : `Sử liệu nói: ${VERDICT[c.verdict]}`}</b> — căn cứ nằm ở bài nào?
                  </p>
                  <div className="jr-verdicts">
                    {groundsOf(claims, c).map((slug) => (
                      <button key={slug} data-slug={slug} onClick={() => update((s) => ({ trial: { ...s.trial, [key(chapter, c)]: slug }, ...(slug === c.read ? { xp: s.xp + 5, skills: { ...s.skills, sources: (s.skills.sources ?? 0) + 5 } } : {}) }))}>
                        {findArticle(slug)?.title ?? slug}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="jr-claim-out">
                  <p>
                    <b>{v === c.verdict ? 'Khớp với sử liệu' : `Sử liệu nói: ${VERDICT[c.verdict]}`}</b> — {c.explain}
                  </p>
                  <p className="jr-ground">{save.trial[key(chapter, c)] === c.read ? '✓ Đúng nguồn.' : `Căn cứ thật nằm ở bài khác.`}</p>
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
          {next ? (
            <button className="jr-cta" onClick={() => navigate(`/hanh-trinh?c=${next.id}`)}>
              Sang Chương {next.numeral} — {next.era} →
            </button>
          ) : (
            <>
              <button className="jr-cta" onClick={() => navigate('/musicology/ban-do')}>
                Về bản đồ âm nhạc
              </button>
              <p className="jr-soon">Chương tiếp theo đang được viết.</p>
            </>
          )}
        </footer>
      )}
    </section>
  )
}

const KIND_LABEL: Record<string, string> = { neume: 'đọc neume', hexachord: 'hexachord', aural: 'nghe bản thu', figured: 'bè trầm có số', scale: 'dựng thang âm', investigation: 'điều tra', debate: 'tranh luận', order: 'sắp xếp', match: 'ghép đôi', classify: 'phân loại', choice: 'trắc nghiệm', blank: 'điền chỗ trống' }
/** The kinds of puzzle an investigation holds, the musical ones first. */
function puzzleKinds(ps: PuzzleDef[]) {
  const kinds = [...new Set(ps.map((p) => p.type))].sort((a, b) => Number(!['neume', 'hexachord', 'aural', 'figured', 'scale'].includes(a)) - Number(!['neume', 'hexachord', 'aural', 'figured', 'scale'].includes(b)))
  return kinds.slice(0, 3).map((k) => KIND_LABEL[k] ?? k).join(', ')
}

/** The stop's music challenge, between the question and the evidence card: XP, hints, an explanation; it may be skipped. */
function MusicChallenge({ puzzle, save, onDone }: { puzzle: PuzzleDef; save: Save; onDone: () => void }) {
  const [hints, setHints] = useState(0)
  const [result, setResult] = useState<Result | null>(null)
  const before = save.puzzles[puzzle.id]?.solved
  const submit = (given: unknown) => {
    const r = checkPuzzle(puzzle, given)
    update((s) => recordAttempt(s, puzzle, r.ok, hints))
    setResult(r)
  }
  const ok = !!result?.ok
  return (
    <div className="jr-music" onClick={(e) => e.stopPropagation()}>
      <p className="jr-kicker">♫ Thử thách âm nhạc · độ khó {puzzle.difficulty}/5{before ? ' · đã giải trước đây' : ''}</p>
      <h3 className="jr-ask">{puzzle.title}</h3>
      <p className="jr-music-instr">{puzzle.instructions}</p>
      <PuzzleBody puzzle={puzzle} save={save} wrong={result && !result.ok ? result.wrong : []} onSubmit={submit} locked={ok} />
      {result && !ok && <p className="jr-hint" role="alert">Chưa đúng — các chỗ đánh dấu cần xem lại. Thử lại nhé.</p>}
      {!ok && (
        <div className="jr-music-tools">
          {puzzle.hints.slice(0, hints).map((h) => <p key={h} className="jr-music-hint">💡 {h}</p>)}
          {hints < puzzle.hints.length && <button className="jr-ghost is-small" onClick={() => setHints((n) => n + 1)}>Gợi ý ({puzzle.hints.length - hints})</button>}
          <button className="jr-ghost is-small" onClick={onDone}>Bỏ qua</button>
        </div>
      )}
      {ok && (
        <div className="jr-music-done" role="status">
          <p className="ar-ok">✓ Đúng rồi!</p>
          <p>{puzzle.explanation}</p>
          {puzzle.links.filter((r) => findArticle(r.slice(2))).map((r) => (
            <Link key={r} to={`/theory/${r.slice(2)}`} className="ar-ref">📖 {findArticle(r.slice(2))!.title}</Link>
          ))}
          <button className="jr-cta" onClick={onDone}>Nhận thẻ chứng cứ →</button>
        </div>
      )}
    </div>
  )
}

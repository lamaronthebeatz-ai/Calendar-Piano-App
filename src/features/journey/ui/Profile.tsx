import { useState, type ReactNode } from 'react'
import { ALL_CHAPTERS } from '../chapters'
import { ACHIEVEMENTS, MASTERY_LABEL, levelOf, masteryOf } from '../engine/progression'
import type { Save } from '../progress'
import { SkillList } from './Arc'

/** XP where level `l` starts (inverse of levelOf). */
const levelStart = (l: number) => 50 * l * (l - 1)

/** The player's sheet: level, XP to the next level, skills, achievements, what is mastered, the road so far. */
export function Profile({ save, portrait, onClose }: { save: Save; portrait: ReactNode; onClose: () => void }) {
  const [tab, setTab] = useState<'overview' | 'skills' | 'badges'>('overview')
  const lv = levelOf(save.xp)
  const from = levelStart(lv)
  const to = levelStart(lv + 1)
  const solved = Object.values(save.puzzles).filter((p) => p.solved).length
  const tiers = [1, 2, 3, 4].map((t) => Object.values(save.mastery).filter((m) => masteryOf(m) === t).length)
  const done = ALL_CHAPTERS.map((c) => ({ c, n: c.scenes.filter((s) => save.done.includes(`${c.id}/${s.id}`)).length }))
  return (
    <div className="jr-drawer" role="dialog" aria-label="Hồ sơ người chơi">
      <button className="jr-drawer-scrim" aria-label="Đóng" onClick={onClose} />
      <div className="jr-drawer-card jr-profile">
        <header className="jr-profile-head">
          {portrait}
          <div>
            <p className="jr-kicker">Hồ sơ người chơi</p>
            <h2>{save.name}</h2>
            <p className="jr-profile-lv">
              Cấp {lv} · {save.xp} XP
            </p>
            <span className="jr-xp" role="progressbar" aria-label="XP tới cấp sau" aria-valuemin={from} aria-valuemax={to} aria-valuenow={save.xp}>
              <i style={{ transform: `scaleX(${Math.min(1, (save.xp - from) / (to - from))})` }} />
            </span>
            <small>còn {to - save.xp} XP tới cấp {lv + 1}</small>
          </div>
        </header>
        <nav className="jr-profile-tabs" role="tablist">
          {(
            [
              ['overview', 'Tổng quan'],
              ['skills', 'Kỹ năng'],
              ['badges', 'Thành tích'],
            ] as const
          ).map(([k, t]) => (
            <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'is-on' : ''} onClick={() => setTab(k)}>
              {t}
            </button>
          ))}
        </nav>
        {tab === 'overview' && (
          <div className="jr-profile-body">
            <dl className="jr-stats">
              <div><dt>Thẻ chứng cứ</dt><dd>{save.cards.length}</dd></div>
              <div><dt>Câu đố đã giải</dt><dd>{solved}</dd></div>
              <div><dt>Phán quyết</dt><dd>{Object.keys(save.verdicts).length}</dd></div>
              <div><dt>Thành tích</dt><dd>{ACHIEVEMENTS.filter((a) => a.earned(save)).length}/{ACHIEVEMENTS.length}</dd></div>
            </dl>
            <p className="jr-profile-sub">Khái niệm theo mức thông thạo</p>
            <dl className="jr-stats">
              {tiers.map((n, i) => (
                <div key={i}><dt>{MASTERY_LABEL[i + 1]}</dt><dd>{n}</dd></div>
              ))}
            </dl>
            <p className="jr-profile-sub">Các chương</p>
            <ul className="jr-profile-chapters">
              {done.map(({ c, n }) => (
                <li key={c.id}>
                  <span>{c.numeral} · {c.era}</span>
                  <b>{n}/{c.scenes.length}</b>
                </li>
              ))}
            </ul>
          </div>
        )}
        {tab === 'skills' && <SkillList save={save} />}
        {tab === 'badges' && (
          <ul className="ar-list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a.id} className={a.earned(save) ? 'is-earned' : 'is-locked'}>
                <b>{a.earned(save) ? '★' : '☆'} {a.title}</b>
                <small>{a.text}</small>
              </li>
            ))}
          </ul>
        )}
        <button className="jr-ghost" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  )
}

import type { Save } from '../../engine/save'
import type { ArcDef } from '../../engine/types'
import { regionOf, regionStatus, worldOf, worldStatus, type PlaceStatus } from '../../scene/world'
import { useEscape } from '../arcShared'

type Go = (p: Record<string, string>, how?: 'push' | 'replace' | 'back') => void

/**
 * Where you are: the places of this region (open, visited, locked — as the arc says) and the regions of the world.
 * Choosing a place walks into its scene, or opens its list screen when it has no scene yet. Locked places say so and
 * cannot be chosen: the arc opens them, not this panel.
 */
export function RegionPanel({ arc, here, save, go, onClose }: { arc: ArcDef; here: string; save: Save; go: Go; onClose: () => void }) {
  useEscape(onClose)
  const region = regionOf(here)
  const world = worldOf(arc.id)
  const status = region ? regionStatus(arc, region, save) : null
  const open = (p: PlaceStatus) => (p.scene ? go({ v: 'arc', a: arc.id, l: p.location.id, w: p.scene.id }, 'replace') : go({ v: 'arc', a: arc.id, l: p.location.id }))
  return (
    <div className="ar-dialog" role="dialog" aria-label="Khu vực và thế giới">
      <div className="jr-dialog ar-dialog-box wk-region">
        <p className="jr-kicker">{world?.name ?? arc.title}</p>
        {status && (
          <>
            <p className="jr-speaker-name">{status.region.name}</p>
            <p className="ar-small">Đã đến {status.visited}/{status.places.length} nơi</p>
            <ul className="wk-places">
              {status.places.map((p) => (
                <li key={p.location.id}>
                  <button className={`wk-place${p.location.id === here ? ' is-here' : ''}`} disabled={!p.open || p.location.id === here} onClick={() => open(p)}>
                    <b>{p.open ? p.location.name : 'Nơi chưa mở'}</b>
                    <small>{p.location.id === here ? 'Bạn đang ở đây' : !p.open ? '🔒 Chưa mở' : `${p.visited ? 'Đã đến' : 'Chưa đến'} · ${p.scene ? 'khung cảnh' : 'danh sách'}`}</small>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        {world && (
          <>
            <p className="jr-kicker wk-region-world">Các khu vực</p>
            <ul className="wk-places">
              {worldStatus(arc, world, save).map((r) => {
                const first = r.places.find((p) => p.open)
                return (
                  <li key={r.region.id}>
                    <button className={`wk-place${r.region.id === region?.id ? ' is-here' : ''}`} disabled={!first || r.region.id === region?.id} onClick={() => first && open(first)}>
                      <b>{r.open ? r.region.name : 'Khu vực chưa mở'}</b>
                      <small>{r.region.id === region?.id ? 'Khu vực hiện tại' : r.open ? `Đã đến ${r.visited}/${r.places.length} nơi` : '🔒 Chưa mở'}</small>
                    </button>
                  </li>
                )
              })}
            </ul>
          </>
        )}
        <button className="jr-cta ar-next" autoFocus onClick={onClose}>Đóng</button>
        <button className="ar-close" onClick={onClose} aria-label="Đóng">✕</button>
      </div>
    </div>
  )
}

import type { SceneDef, WorldDef } from '../../scene/types'

/**
 * "Bản thảo thất lạc" laid out for walking: the world of the arc (two regions), and the scenes built so far — the
 * Pomposa library and the scriptorium next to it, joined by a passage. Places without a scene (the council room,
 * Arezzo…) are still reached through their list screen. Who is where and what things do: content/ban-thao.ts.
 */
export const BAN_THAO_WORLD: WorldDef = {
  id: 'w:ban-thao',
  arc: 'ban-thao',
  name: 'Bắc Ý, khoảng năm 1025',
  regions: [
    { id: 'rg:bt/pomposa', name: 'Tu viện Pomposa', arc: 'ban-thao', locations: ['loc:bt/phong-chep', 'loc:bt/thu-vien', 'loc:bt/phong-hop'], origin: 0, links: ['rg:bt/arezzo'] },
    { id: 'rg:bt/arezzo', name: 'Arezzo', arc: 'ban-thao', locations: ['loc:bt/arezzo', 'loc:bt/ca-truong'], origin: 6000, links: ['rg:bt/pomposa'] },
  ],
}

export const POMPOSA_SCENES: readonly SceneDef[] = [
  {
    id: 'sc:bt/thu-vien',
    name: 'Thư viện',
    region: 'rg:bt/pomposa',
    location: 'loc:bt/thu-vien',
    origin: 1100,
    dimensions: { width: 2000, height: 600, floor: 540 },
    camera: { mode: 'follow', minView: 560, deadZone: 170 },
    art: 'pomposa',
    layers: [
      { id: 'far', role: 'distant', z: 0, parallax: 0.4, source: { image: 'pythagoras' } },
      { id: 'room', role: 'midground', z: 10, parallax: 1, source: { art: 'libraryRoom' } },
      // the council-room door stands open once the arc opens that place
      { id: 'council-open', role: 'midground', z: 11, parallax: 1, when: { flag: 'open:loc:bt/phong-hop' }, source: { art: 'libraryCouncilOpen' } },
      { id: 'light', role: 'effects', z: 15, parallax: 1, opacity: 0.9, source: { art: 'libraryLight' } },
      { id: 'people', role: 'characters', z: 20, parallax: 1 },
      { id: 'near', role: 'occlusion', z: 35, parallax: 1.18, source: { art: 'libraryNear' } },
      { id: 'marks', role: 'interaction', z: 40, parallax: 1 },
    ],
    spawns: [
      { id: 'start', x: 260, facing: 1 },
      { id: 'from-scriptorium', x: 190, facing: 1 },
      { id: 'from-council', x: 1000, facing: -1 },
    ],
    collision: { min: 70, max: 1940, solids: [{ id: 'rail', x0: 1690, x1: 1716 }] },
    interactables: [
      { id: 'to-scriptorium', kind: 'exit', x: 110, top: 300, width: 110, approach: { distance: 0 }, verb: 'Đi', label: 'Hành lang sang phòng chép sách', transition: 't:thu-vien>phong-chep' },
      { id: 'window', kind: 'lookout', x: 380, top: 120, width: 140, height: 230, approach: { distance: 0 }, verb: 'Nhìn', label: 'Cửa sổ', text: 'Ngoài cửa sổ là sân tu viện và tháp chuông. Ánh sáng ban ngày là thứ quý nhất của người chép sách: họ làm việc gần cửa sổ, không dám để nến gần giấy da.' },
      { id: 'librarian', kind: 'npc', ref: 'npc:bt/quan-thu', x: 700, top: 300, approach: { distance: 78 }, verb: 'Nói chuyện', facing: -1, watch: 260,
        // once the search is on and the page not yet found, he points to the shelf
        afterTalk: { when: { all: [{ quest: 'q:bt/ban-thao', is: 'active' }, { not: { item: 'item:bt/trang-ban-thao' } }] }, steps: [{ face: 1290 }, { play: 'point' }, { say: 'Thầy quản thư chỉ về giá sách phía sau.' }, { face: 'player' }] } },
      // the antiphoner open on the lectern ("Ghi chú bên lề"): looked over from the reader's side, right of the lectern
      { id: 'antiphoner', kind: 'object', ref: 'sach-ca', x: 790, top: 330, width: 100, height: 120, approach: { distance: 74, side: 'right' }, verb: 'Khảo sát' },
      { id: 'council-door', kind: 'door', x: 1000, top: 300, width: 110, approach: { distance: 0 }, verb: 'Vào', label: 'Cửa phòng họp', transition: 't:thu-vien>phong-hop' },
      { id: 'shelf', kind: 'object', ref: 'gia-sach', x: 1290, top: 190, approach: { distance: 70 }, verb: 'Xem' },
      { id: 'music-box', kind: 'object', ref: 'hop-nhac', x: 1560, top: 420, approach: { distance: 74 }, verb: 'Mở' },
    ],
    transitions: [
      { id: 't:thu-vien>phong-chep', to: { location: 'loc:bt/phong-chep', scene: 'sc:bt/phong-chep', spawn: 'from-library' }, locked: 'Hành lang bị chặn.', effect: 'fade' },
      { id: 't:thu-vien>phong-hop', to: { location: 'loc:bt/phong-hop' }, locked: 'Cửa phòng họp đang đóng. Các tu sĩ chỉ họp khi bạn có đủ chứng cứ để trình bày.', effect: 'fade' },
    ],
    events: [
      { id: 'ev:thu-vien/nang', x0: 300, x1: 460, once: 'session', note: 'Nắng xiên qua ô cửa, rơi đúng chỗ bục đọc.' },
      // a lay brother carries books from the archive to the council room, once a visit
      { id: 'ev:thu-vien/tu-si', x0: 1050, x1: 1400, once: 'visit', extra: { look: 'extra:lay-brother', x: 1660, facing: -1, steps: [{ walk: 1000 }, { leave: true }] } },
    ],
  },
  {
    id: 'sc:bt/phong-chep',
    name: 'Phòng chép sách',
    region: 'rg:bt/pomposa',
    location: 'loc:bt/phong-chep',
    origin: 0,
    dimensions: { width: 1000, height: 600, floor: 540 },
    camera: { mode: 'fixed' },
    art: 'pomposa',
    layers: [
      { id: 'far', role: 'distant', z: 0, parallax: 0.4, source: { image: 'scriptorium' } },
      { id: 'room', role: 'midground', z: 10, parallax: 1, source: { art: 'scriptoriumRoom' } },
      { id: 'light', role: 'effects', z: 15, parallax: 1, opacity: 0.85, source: { art: 'scriptoriumLight' } },
      { id: 'people', role: 'characters', z: 20, parallax: 1 },
      { id: 'near', role: 'occlusion', z: 35, parallax: 1, source: { art: 'scriptoriumNear' } },
      { id: 'marks', role: 'interaction', z: 40, parallax: 1 },
    ],
    spawns: [{ id: 'from-library', x: 160, facing: 1 }],
    // the copying desk stands against the right wall: it can only be used from its left
    collision: { min: 60, max: 960, solids: [{ id: 'desk', x0: 780, x1: 960 }] },
    interactables: [
      { id: 'to-library', kind: 'exit', x: 80, top: 300, width: 100, approach: { distance: 0 }, verb: 'Đi', label: 'Hành lang về thư viện', transition: 't:phong-chep>thu-vien' },
      { id: 'square-book', kind: 'object', ref: 'sach-not-vuong', x: 300, top: 330, approach: { distance: 64 }, verb: 'Mở' },
      { id: 'rinaldo', kind: 'npc', ref: 'npc:bt/rinaldo', x: 500, top: 300, approach: { distance: 78 }, verb: 'Nói chuyện', facing: 1, watch: 200 },
      { id: 'window', kind: 'lookout', x: 640, top: 110, width: 120, height: 220, approach: { distance: 0 }, verb: 'Nhìn', label: 'Cửa sổ', text: 'Bàn chép kê sát cửa sổ hướng nam để có nhiều ánh sáng nhất. Mực đen cho lời, mực đỏ cho tiêu đề và chữ đầu đoạn.' },
      { id: 'desk-sheets', kind: 'object', ref: 'ban-chep', x: 820, top: 360, approach: { distance: 70, side: 'left' }, verb: 'Xem' },
      { id: 'fa-line', kind: 'object', ref: 'khoa-fa', x: 900, top: 360, approach: { distance: 150, side: 'left' }, verb: 'Đọc' },
    ],
    transitions: [{ id: 't:phong-chep>thu-vien', to: { location: 'loc:bt/thu-vien', scene: 'sc:bt/thu-vien', spawn: 'from-scriptorium' }, locked: 'Hành lang bị chặn.', effect: 'fade' }],
    events: [{ id: 'ev:phong-chep/trang', x0: 60, x1: 400, once: 'visit', when: { item: 'item:bt/trang-ban-thao' }, note: 'Trang bản thảo vẫn trong túi bạn — thầy Rinaldo đọc neume giỏi hơn ai hết.' }],
  },
]

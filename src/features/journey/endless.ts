import { ALL_CHAPTERS } from './chapters'
import { CONTEXT } from './context'
import { MUSIC } from './music'
import type { Chapter, Scene, Verdict } from './types'

/**
 * Lữ hành vô tận: chặng chơi lắp từ dữ liệu có nguồn (pool.json, sinh bởi scripts/journey/pool.py). Mỗi câu hỏi lấy
 * đúng một dòng tiểu sử, một tác phẩm hay một giai thoại; phương án nhiễu là dữ kiện của người khác cùng thời kỳ.
 * Câu chữ tự viết chỉ là lời dẫn chung, không chứa sự kiện.
 */
interface Person {
  n: string
  s: string
  y: string
  c: string
  g: string
  d: string
  w: string[]
}
export interface Pool {
  people: Person[]
  events: [number, string, string][]
  claims: [number, string, string, Verdict | null][]
}

export const loadPool = () => import('./pool.json').then((m) => m.default as unknown as Pool)

/** Thời kỳ của chương → các nhóm trong composers.ts (tiền tố "thời kỳ:nhóm"). */
export const ERA: Record<string, string[]> = {
  'trung-co': ['med:'],
  'phuc-hung': ['ren:'],
  baroque: ['bar:'],
  'co-dien': ['cla:'],
  'lang-man': ['rom:early', 'rom:opera', 'rom:german', 'rom:france'],
  'quoc-gia': ['rom:russia', 'rom:national', 'rom:americas'],
}

const PLACE: Record<string, [string, number, number]> = {
  Ý: ['Nước Ý', 43.4, 11.6],
  Pháp: ['Nước Pháp', 47.5, 2.4],
  Đức: ['Các xứ Đức', 51.0, 10.5],
  Anh: ['Nước Anh', 52.2, -1.2],
  Áo: ['Nước Áo', 48.2, 15.6],
  Vlaanderen: ['Vlaanderen', 50.9, 3.9],
  Bỉ: ['Vlaanderen', 50.8, 4.4],
  Nga: ['Nước Nga', 55.0, 30.0],
  'Tây Ban Nha': ['Tây Ban Nha', 40.4, -3.7],
  Séc: ['Bohemia', 50.0, 14.4],
  Mỹ: ['Bên kia đại dương', 47.0, -8.5],
  'Ba Lan': ['Ba Lan', 52.2, 19.0],
  'Hà Lan': ['Hà Lan', 52.3, 5.0],
  'Thuỵ Sĩ': ['Thuỵ Sĩ', 46.9, 7.6],
  'Đan Mạch': ['Đan Mạch', 55.7, 12.0],
  Ireland: ['Ireland', 53.3, -7.5],
  Hungary: ['Hungary', 47.5, 19.0],
  'Na Uy': ['Na Uy', 60.0, 10.0],
  'Phần Lan': ['Phần Lan', 60.5, 25.0],
}
const place = (country: string) => PLACE[country.split(' – ')[0].replace(/\s*\(.*\)$/, '')] ?? PLACE.Đức

/** Lời dẫn chung theo thời kỳ — không khẳng định sự kiện nào. */
const MOOD: Record<string, string[]> = {
  med: ['Tiếng chuông tu viện vọng qua sương sớm.', 'Ánh nến lay động trên những trang da thuộc.', 'Gió lùa qua hành lang đá lạnh.'],
  ren: ['Nắng chiều đổ vàng trên mái vòm.', 'Từ gian bên cạnh vẳng lại tiếng đàn lute.', 'Mùi mực in còn mới trên những tập nhạc.'],
  bar: ['Nến sáp ong cháy sáng trên giá nhạc.', 'Bộ tóc giả rắc bột trắng lấp lánh dưới đèn chùm.', 'Tiếng harpsichord lách cách từ phòng bên.'],
  cla: ['Đèn chùm pha lê toả sáng trên sàn gỗ bóng.', 'Ngoài cửa sổ, một khu vườn cắt tỉa đều đặn.', 'Ai đó đang thử một cây fortepiano mới.'],
  rom: ['Đèn khí đốt hắt bóng dài trên phố.', 'Trong phòng khách, cây piano mở nắp chờ sẵn.', 'Mưa gõ nhẹ lên cửa kính toa tàu.'],
}
const GREET = ['Lữ khách đấy à? Mời ngồi.', 'Ngài từ đâu tới vậy? Ít ai tìm đến đây.', 'Lại một người hỏi chuyện. Được thôi, ta có chút thời gian.', 'Ngài muốn biết về ta? Hãy hỏi đi.']

/** "Năm 1829", "Khoảng năm 991", "Giai đoạn 1662–1667". */
const when = (y: string) => (y.startsWith('k.') ? `Khoảng năm ${y.slice(3)}` : /[–-]/.test(y) ? `Giai đoạn ${y}` : `Năm ${y}`)

/** Bộ sinh ngẫu nhiên có hạt giống: cùng một chuyến đi thì luôn ra cùng các chặng. */
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Ảnh chân dung NPC đã có trong các chương, theo slug. */
const FACES: Record<string, string> = Object.fromEntries(ALL_CHAPTERS.flatMap((c) => c.scenes.flatMap((s) => (s.npc.slug && s.npc.img ? [[s.npc.slug, s.npc.img]] : []))))

export const VERDICT_LABEL: Record<Verdict, string> = { fact: 'Có chứng cứ', legend: 'Giai thoại', unsure: 'Chưa chắc' }

/** One generated stop: a scene the ordinary player can run, plus the key of the fact it asks about. */
export interface Stop {
  scene: Scene
  item: string
}

/** `weights`: how often each kind of question comes (engine/replay.ts KIND_WEIGHTS, from the player's recent answers). */
export function makeTrip(chapter: Chapter, pool: Pool, seed: number, asked: string[], n = 5, weights: Record<'event' | 'year' | 'work' | 'claim', number> = { event: 2, year: 1, work: 1, claim: 2 }): Stop[] {
  const r = rng(seed)
  const pick = <T,>(xs: T[]) => xs[Math.floor(r() * xs.length)]
  const shuffle = <T,>(xs: T[]) => xs.map((x) => [r(), x] as const).sort((a, b) => a[0] - b[0]).map((x) => x[1])
  const era = ERA[chapter.id]
  const inEra = (i: number) => era.some((g) => pool.people[i].g.startsWith(g))
  const mood = MOOD[era[0].slice(0, 3)]
  const events = pool.events.map((e, i) => ({ e, key: `e${i}` })).filter((x) => inEra(x.e[0]))
  const claims = pool.claims.map((c, i) => ({ c, key: `c${i}` })).filter((x) => inEra(x.c[0]))
  const people = pool.people.map((p, i) => ({ p, i })).filter((x) => inEra(x.i) && x.p.w.length > 0)
  const seen = new Set(asked)
  const bgs = [...new Set([...chapter.scenes.map((s) => s.bg), ...(CONTEXT[chapter.id] ?? []).map((p) => p.img)])]
  const tracks = chapter.scenes.map((s) => s.id).filter((id) => MUSIC[id])
  const stops: Stop[] = []
  const used = new Set<string>()

  /** Three wrong answers: the same kind of fact about other people of the era, never one about this person. */
  const others = (who: number, all: string[][], right: string) =>
    shuffle(all.filter(([w, t]) => Number(w) !== who && t !== right && !t.includes(pool.people[who].n)).map(([, t]) => t))
      .filter((t, i, xs) => xs.indexOf(t) === i)
      .slice(0, 3)

  for (let tries = 0; stops.length < n && tries < 200; tries++) {
    const kind = pick((Object.keys(weights) as (keyof typeof weights)[]).flatMap((k) => Array<keyof typeof weights>(weights[k]).fill(k)))
    let who = -1, item = '', year = '', ask = '', right = '', wrong: string[] = [], where = '', title = '', meQ = '', about = ''
    if (kind === 'event' || kind === 'year') {
      const x = pick(events)
      if (!x || seen.has(x.key) || used.has(x.key)) continue
      const [w, y, text] = x.e
      who = w; item = x.key; year = y
      if (kind === 'event') {
        if (/^(Sinh|Mất)\b/.test(text)) continue
        ask = `${when(y)}, điều gì đã xảy ra với ${pool.people[w].n}?`
        right = text
        wrong = others(w, events.filter((o) => !/^(Sinh|Mất)\b/.test(o.e[2])).map((o) => [String(o.e[0]), o.e[2]]), text)
        title = 'Một trang tiểu sử'
        meQ = `${when(y)}, ông đã ở đâu, làm gì?`
      } else {
        if (/^k\./.test(y)) continue
        const years = [...new Set(events.filter((o) => o.e[0] === w && !/^k\./.test(o.e[1]) && o.e[1] !== y).map((o) => o.e[1]))]
        if (years.length < 3) continue
        ask = `"${text}" — chuyện này xảy ra năm nào?`
        about = text
        right = y
        wrong = shuffle(years).slice(0, 3)
        title = 'Dòng thời gian'
        meQ = 'Ông còn nhớ năm tháng của đời mình chứ?'
      }
      where = 'bảng "Tiểu sử"'
    } else if (kind === 'work') {
      const x = pick(people)
      const work = x && pick(x.p.w)
      if (!x || !work) continue
      who = x.i; item = `w${x.i}:${work}`
      if (seen.has(item) || used.has(item)) continue
      ask = `Tác phẩm nào dưới đây là của ${x.p.n}?`
      right = work
      wrong = others(x.i, people.flatMap((o) => o.p.w.map((t) => [String(o.i), t])), work).filter((t) => !x.p.w.includes(t))
      title = 'Những trang nhạc'
      meQ = 'Ông đã viết những gì?'
      where = 'phần đầu bài'
      year = x.p.y
    } else {
      const x = pick(claims)
      if (!x || seen.has(x.key) || used.has(x.key)) continue
      const [w, t, text] = x.c
      who = w; item = x.key; year = pool.people[w].y
      ask = `Người ta kể về ${pool.people[w].n}: «${t}». Nguồn nói gì?`
      right = text
      // other anecdotes of the same person first: same voice, different story — harder to rule out at a glance
      const own = shuffle(claims.filter((o) => o.c[0] === w && o.c[2] !== text).map((o) => o.c[2])).slice(0, 2)
      wrong = [...own, ...others(w, claims.map((o) => [String(o.c[0]), o.c[2]]), text)].slice(0, 3)
      title = 'Lời đồn'
      meQ = `Người ta đồn chuyện «${t}». Thật không?`
      where = 'mục "Giai thoại và điều chưa chắc"'
    }
    if (wrong.length < 3) continue
    used.add(item)
    const p = pool.people[who]
    const [placeName, lat, lon] = place(p.c)
    const choices = shuffle([right, ...wrong])
    const i = stops.length
    stops.push({
      item,
      scene: {
        id: `x${seed.toString(36)}-${i}`,
        place: placeName,
        lat: lat + (r() - 0.5) * 1.6,
        lon: lon + (r() - 0.5) * 2.4,
        year,
        title,
        bg: pick(bgs),
        npc: { name: p.n, role: `${p.y} · ${p.c}`, slug: p.s, img: FACES[p.s] },
        lines: [
          { who: 'narrator', text: `${placeName}. ${pick(mood)}` },
          { who: 'npc', text: pick(GREET) },
          { who: 'npc', text: `Người đời tóm tắt về ta thế này: «${p.d}»` },
          { who: 'me', text: meQ },
          { who: 'npc', text: 'Ngài muốn biết thì hãy trả lời ta trước đã.' },
        ],
        quest: { ask, choices, answer: choices.indexOf(right), read: p.s, where, explain: kind === 'year' ? `Năm ${right}: ${about}` : right },
        card: { id: item, title: p.n, text: kind === 'year' ? `${right}: ${about}` : kind === 'event' ? `${year}: ${right}` : right, read: p.s },
        track: pick(tracks),
      },
    })
  }
  return stops
}

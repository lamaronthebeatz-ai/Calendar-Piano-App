import type { Lens } from './store'

/**
 * Public-domain pieces that ship with the app as MusicXML (public/analyze/), for trying every lens. The encodings come
 * from the sample corpus distributed with music21 (MIT Music21 project); the works are in the public domain.
 */
export type Sample = { id: string; title: string; composer: string; year: string; file: string; lens: Lens; note: string }
export const SAMPLES: Sample[] = [
  { id: 'bach-bwv269', title: 'Aus meines Herzens Grunde, BWV 269', composer: 'J. S. Bach', year: 'trước 1750', file: 'bach-bwv269.musicxml', lens: 'classical', note: 'Hợp xướng bốn bè: hoà âm chức năng, câu kết ở mỗi dấu lưu.' },
  { id: 'mozart-k545', title: 'Sonata K. 545, chương I (trình bày)', composer: 'W. A. Mozart', year: '1788', file: 'mozart-k545-1.musicxml', lens: 'classical', note: 'Phần trình bày sonata cổ điển: chủ đề Đô trưởng, chuyển sang giọng át.' },
  { id: 'joplin-maple-leaf', title: 'Maple Leaf Rag', composer: 'Scott Joplin', year: '1899', file: 'joplin-maple-leaf.musicxml', lens: 'jazz', note: 'Ragtime: tiền thân của jazz — hợp âm át phụ, chuỗi át, hình thức nhiều đoạn.' },
  { id: 'schoenberg-op19-2', title: 'Sechs kleine Klavierstücke, Op. 19 số 2', composer: 'A. Schoenberg', year: '1911', file: 'schoenberg-op19-2.musicxml', lens: 'xx', note: 'Vô điệu tính tự do: tập cao độ, quãng đặc trưng, ostinato.' },
  { id: 'schoenberg-op19-6', title: 'Sechs kleine Klavierstücke, Op. 19 số 6', composer: 'A. Schoenberg', year: '1911', file: 'schoenberg-op19-6.musicxml', lens: 'xx', note: 'Hợp âm quãng 4 chồng nhau, âm vang như chuông.' },
]
export const sampleUrl = (s: Sample) => `${import.meta.env.BASE_URL}analyze/${s.file}`

import { READER_BOOKS, type ReaderBook } from './reader/model'

export interface ShelfTopic {
  id: string
  short: string
  title: string
  blurb: string
  books: ReaderBook[]
}

/** Shelf topics in reading order; each lists book ids in the order they sit on the shelf. */
const TOPICS: { id: string; short: string; title: string; blurb: string; ids: string[] }[] = [
  {
    id: 'nhac-ly',
    short: 'Nhạc lý',
    title: 'Nhạc lý cơ bản',
    blurb: 'Ký âm, nhịp, quãng, âm giai và hợp âm — nền móng cho mọi cuốn khác trong tủ sách.',
    ids: ['nhac-ly-co-ban-1', 'nhac-ly-co-ban-2'],
  },
  {
    id: 'hoa-am',
    short: 'Hoà âm – Đối âm',
    title: 'Hoà âm, đối âm và hình thức',
    blurb: 'Viết và phân tích theo truyền thống cổ điển: hoà âm trường phái Nga – Xô viết, bass đi liên tục của Albrechtsberger, phức điệu Taneyev, đối âm Fux và hình thức âm nhạc.',
    ids: ['hoa-am-co-dien', 'albrechtsberger', 'phuc-dieu-nghiem-khac', 'doi-am-fux', 'hinh-thuc-am-nhac'],
  },
  {
    id: 'jazz',
    short: 'Jazz',
    title: 'Jazz',
    blurb: 'The Jazz Theory Book bốn tập theo một lộ trình — từ hợp âm bảy và ii – V – I tới thế bấm, tái hoà âm, ngẫu hứng và sáng tác — và Jazz Licks, 1001 câu nhạc để luyện từ vựng ngẫu hứng.',
    ids: ['jazz-theory-book-1', 'jazz-theory-book-2', 'jazz-theory-book-3', 'jazz-theory-book-4', 'jazz-licks'],
  },
  {
    id: 'piano',
    short: 'Piano',
    title: 'Piano',
    blurb: 'Giáo trình piano người lớn theo cấp, và cuốn kinh điển về nghệ thuật biểu diễn – sư phạm của Heinrich Neuhaus.',
    ids: ['nguoi-lon', 'neuhaus'],
  },
  {
    id: 'tre-em',
    short: 'Trẻ em',
    title: 'Piano & Nhạc lý cho Trẻ em',
    blurb: 'Sáu cuốn theo cấp ABRSM, Initial tới Grade 5: lý thuyết có ví dụ nhạc, bản nhạc in đủ, kiểm tra cuối cấp.',
    ids: ['tre-em-initial', 'tre-em-g1', 'tre-em-g2', 'tre-em-g3', 'tre-em-g4', 'tre-em-g5'],
  },
  {
    id: 'viet-nam',
    short: 'Việt Nam',
    title: 'Âm nhạc Việt Nam',
    blurb: 'Từ cổ – trung đại tới hôm nay: lý thuyết cổ truyền, dân ca, nhạc khí, tân nhạc và chân dung nhạc sĩ.',
    ids: ['am-nhac-viet-nam'],
  },
  {
    id: 'my-hoc',
    short: 'Mỹ học',
    title: 'Mỹ học và triết học âm nhạc',
    blurb: 'Âm nhạc là gì và vì sao nó lay động ta — hai câu trả lời kinh điển của thế kỷ XIX, đọc sát bản gốc.',
    ids: ['hanslick', 'schopenhauer'],
  },
  {
    id: 'nghe-nhac',
    short: 'Nghề âm nhạc',
    title: 'Nghề âm nhạc',
    blurb: 'Quản lý nghệ sĩ, hợp đồng, bản quyền, phát hành và vận hành một hãng đĩa độc lập.',
    ids: ['quan-ly-nghe-si', 'co-may-hang-dia'],
  },
]

const byId = new Map(READER_BOOKS.map((b) => [b.id, b]))
const placed = new Set(TOPICS.flatMap((t) => t.ids))
const rest = READER_BOOKS.filter((b) => !placed.has(b.id))

export const SHELF_TOPICS: ShelfTopic[] = [
  ...TOPICS.map(({ ids, ...t }) => ({ ...t, books: ids.flatMap((id) => byId.get(id) ?? []) })),
  // A book not yet given a topic still shows up, at the end.
  ...(rest.length ? [{ id: 'khac', short: 'Khác', title: 'Sách khác', blurb: 'Những cuốn mới thêm vào tủ sách.', books: rest }] : []),
].filter((t) => t.books.length)

/** Every book in shelf order, for the cover flow. */
export const SHELF_BOOKS = SHELF_TOPICS.flatMap((t) => t.books)

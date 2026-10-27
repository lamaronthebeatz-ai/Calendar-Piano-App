import harmonyCover from '../../assets/covers/hoa-am-co-dien.webp'
import theory1Cover from '../../assets/covers/nhac-ly-co-ban-1.webp'
import theory2Cover from '../../assets/covers/nhac-ly-co-ban-2.webp'
import polyphonyCover from '../../assets/covers/phuc-dieu-nghiem-khac.webp'
import fuxCover from '../../assets/covers/doi-am-fux.webp'
import albrechtsbergerCover from '../../assets/covers/albrechtsberger.webp'
import formCover from '../../assets/covers/hinh-thuc-am-nhac.webp'
import neuhausCover from '../../assets/covers/neuhaus.webp'
import hanslickCover from '../../assets/covers/hanslick.webp'
import schopenhauerCover from '../../assets/covers/schopenhauer.webp'
import allenCover from '../../assets/covers/quan-ly-nghe-si.webp'
import vietnamCover from '../../assets/covers/am-nhac-viet-nam.webp'
import jazzCover1 from '../../assets/covers/jazz-theory-book-1.webp'
import jazzCover2 from '../../assets/covers/jazz-theory-book-2.webp'
import jazzCover3 from '../../assets/covers/jazz-theory-book-3.webp'
import jazzCover4 from '../../assets/covers/jazz-theory-book-4.webp'
import type { Book } from './types'

/** The Jazz Theory Book, all thirteen parts in order; the four volumes below are slices of it. */
const JAZZ_PARTS: Book['parts'] = [
  { title: 'Nhập môn jazz', intro: 'Hoà âm jazz khác hoà âm cổ điển ở đâu, chơi bài jazz đầu tiên thế nào, swing là gì, và bức tranh lịch sử các phong cách.', chapters: [
    { slug: 'hoa-am-jazz', focus: 'Lộ trình cả cuốn; so sánh jazz với hoà âm cổ điển.' },
    { slug: 'hoc-piano-jazz', focus: 'Kiến thức tối thiểu; chọn bài đầu tiên; các lớp tập riêng.' },
    { slug: 'swing', focus: 'Móc đơn swing, nhấn phách 2 – 4, cảm giác nhịp.' },
    { slug: 'phong-cach-jazz', focus: 'Từ New Orleans tới jazz hiện đại: mỗi thời kỳ chơi thế nào.' },
  ], exercises: ['Chơi một âm giai Đô trưởng bằng móc đơn swing với máy đếm nhịp ở phách 2 và 4.', 'Nghe một bản thu của mỗi phong cách trong bài phong cách jazz; ghi một câu mô tả cách piano chơi.'] },
  { title: 'Blues', intro: 'Hình thức 12 ô và âm giai blues: giọng nói gốc của jazz, nơi hợp âm 7 át đóng vai chủ.', chapters: [
    { slug: 'blues-12-nhip', focus: 'Hình thức 12 ô, các biến thể, blues jazz.' },
    { slug: 'am-giai-blues', focus: 'Âm giai blues thứ – trưởng, nốt blue.' },
  ], exercises: ['Chơi blues 12 ô ở Fa: tay trái hợp âm 7, tay phải âm giai blues, hai chorus.', 'Chuyển cùng bài sang Si giáng và Đô.'] },
  { title: 'Hợp âm jazz', intro: 'Đọc và dựng mọi ký hiệu hợp âm trên lead sheet: hợp âm 7, mở rộng, 6 – add – sus, gạch chéo, hợp âm chồng.', chapters: [
    { slug: 'ky-hieu-hop-am', focus: 'Cách ghi hợp âm trên lead sheet.' },
    { slug: 'hop-am-mo-rong', focus: 'Nốt 9, 11, 13 và nốt căng biến hoá.' },
    { slug: 'hop-am-6-va-add', focus: 'Hợp âm 6, add, sus.' },
    { slug: 'hop-am-gach-cheo', focus: 'Hợp âm gạch chéo, đọc như hợp âm gì.' },
    { slug: 'hop-am-chong', focus: 'Hợp âm chồng (polychord).' },
  ], exercises: ['Viết và chơi Cmaj9, Dm11, G13, G7♭9, C6/9, Fsus4 ở hai giọng khác.', 'Đọc lead sheet một bài chuẩn: gọi tên từng nốt của mỗi hợp âm.'] },
  { title: 'Kết và tiến trình', intro: 'ii – V – I là đơn vị cơ bản của hoà âm jazz; turnaround, line cliché và cách đọc cả một tiến trình.', chapters: [
    { slug: 'ii-v-i', focus: 'ii – V – I trưởng và thứ; nốt dẫn hướng.' },
    { slug: 'turnaround-jazz', focus: 'Turnaround và turnaround Tadd Dameron.' },
    { slug: 'line-cliche', focus: 'Đường bè liền bậc trên một hợp âm đứng yên.' },
    { slug: 'vong-hop-am', focus: 'Các vòng hợp âm thường gặp.' },
    { slug: 'phan-tich-tien-trinh-jazz', focus: 'Đọc tiến trình theo giọng tạm và chuỗi ii – V.' },
  ], exercises: ['Chơi ii – V – I trưởng và thứ ở cả 12 giọng theo vòng quãng 5.', 'Phân tích "Autumn Leaves": đánh dấu mọi cặp ii – V và giọng tạm của chúng.'] },
  { title: 'Hợp âm và âm giai', intro: 'Mỗi hợp âm ứng với một âm giai: điệu thức, thứ giai điệu, hợp âm át biến hoá, bebop, đối xứng.', chapters: [
    { slug: 'he-thong-hop-am-am-giai', focus: 'Nguyên lý hợp âm – âm giai.' },
    { slug: 'dieu-thuc-thu-giai-dieu', focus: 'Các điệu thức của thứ giai điệu.' },
    { slug: 'hop-am-at-bien-hoa', focus: 'Hợp âm át biến hoá và âm giai altered.' },
    { slug: 'am-giai-bebop', focus: 'Thêm nốt lướt để nốt hợp âm rơi đúng phách.' },
    { slug: 'am-giai-doi-xung-jazz', focus: 'Âm giai giảm, toàn cung, tăng.' },
    { slug: 'am-giai-bat-cung', focus: 'Âm giai bát cung trong jazz.' },
  ], exercises: ['Với mỗi hợp âm của ii – V – I ở Đô, chơi âm giai tương ứng lên xuống hai quãng tám.', 'Trên G7alt, chơi âm giai altered rồi âm giai giảm nửa cung – cung; nghe sự khác nhau.'] },
  { title: 'Xếp hợp âm và thế bấm', intro: 'Từ thế bấm 3 nốt tới thế bấm của các bậc thầy: shell, không gốc, mở, drop 2, So What, khối, upper structure, quãng 4, âm cụm — và cách chọn, ghép chúng cho cả một bài.', chapters: [
    { slug: 'the-bam-ba-not', focus: 'Thế bấm 3 nốt và 4 nốt.' },
    { slug: 'xep-hop-am', focus: 'Shell, không gốc, drop 2.' },
    { slug: 'the-bam-mo', focus: 'Thế bấm mở hai tay; hai cách chia.' },
    { slug: 'quy-tac-xep-hop-am-jazz', focus: 'Quy tắc chung để tự xếp một thế bấm.' },
    { slug: 'the-bam-bac-thay-jazz', focus: 'Thế bấm Powell, Monk, Hancock.' },
    { slug: 'hop-am-so-what-barron', focus: 'So What, Barron, quãng 4 sáu nốt.' },
    { slug: 'hop-am-khoi', focus: 'Four way close, locked hands, drop 2.' },
    { slug: 'upper-structure', focus: 'Hợp âm ba đặt trên một tritone.' },
    { slug: 'hoa-am-quang-bon', focus: 'Hoà âm quãng 4.' },
    { slug: 'am-cum', focus: 'Âm cụm (hoà âm quãng 2).' },
    { slug: 'ket-hop-the-bam', focus: 'Chọn thế bấm theo nốt giai điệu, nối mượt.' },
    { slug: 'chon-the-bam-jazz', focus: 'Thế bấm theo từng phong cách.' },
  ], exercises: ['Chơi ii – V – I ở Đô bằng năm loại thế bấm: shell, không gốc A/B, drop 2, So What, upper structure.', 'Xếp thế bấm cho 8 ô đầu một bài chuẩn sao cho nốt giai điệu luôn ở trên cùng.'] },
  { title: 'Tay trái và đệm', intro: 'Bass đi, stride, comping, đệm cho ca sĩ, chơi trong jam session — và nhịp bossa nova.', chapters: [
    { slug: 'bass-di-jazz', focus: 'Đường bass đi bốn phách.' },
    { slug: 'stride-piano', focus: 'Tay trái stride.' },
    { slug: 'dem-jazz', focus: 'Comping: tiết tấu và thế bấm.' },
    { slug: 'dem-cho-ca-si', focus: 'Đệm cho giọng hát: hoà âm, nhịp, dạo đầu, kết.' },
    { slug: 'jam-session', focus: 'Quy ước và bài thường gặp ở jam session.' },
    { slug: 'dem-bossa-nova', focus: 'Tay trái và nhịp bossa nova.' },
  ], exercises: ['Chơi bass đi một chorus blues ở Fa, tay phải comping thưa.', 'Đệm "Blue Bossa" với tay trái bossa nova và thế bấm không gốc.'] },
  { title: 'Thay thế và tái hoà âm', intro: 'Thay một hợp âm, chèn hợp âm lướt, tái hoà âm cả bài — kể cả gospel, đổi nhịp, đổi thể loại và constant structures.', chapters: [
    { slug: 'thay-the-hop-am', focus: 'Các phép thay thế hợp âm.' },
    { slug: 'thay-the-tritone', focus: 'Thay thế tritone, backdoor.' },
    { slug: 'hop-am-luot-jazz', focus: 'Hợp âm lướt cromatic, giảm, song song.' },
    { slug: 'tai-hoa-am', focus: 'Quy trình tái hoà âm một bài.' },
    { slug: 'tai-hoa-am-gospel', focus: 'Tái hoà âm gospel "Amazing Grace".' },
    { slug: 'doi-nhip-the-loai-jazz', focus: 'Đổi nhịp, đổi thể loại, chơi tự do thời gian.' },
    { slug: 'constant-structures', focus: 'Chuỗi hợp âm cùng loại, gốc không theo chức năng.' },
  ], exercises: ['Tái hoà âm 8 ô đầu "Fly Me to the Moon" bằng ít nhất ba phép thay thế khác nhau.', 'Chơi một bài pop quen thuộc theo kiểu gospel, rồi theo kiểu bossa nova.'] },
  { title: 'Hình thức và tiến trình chuẩn', intro: 'Ca khúc 32 ô AABA, rhythm changes và vòng Coltrane — ba khung mọi người chơi jazz phải thuộc.', chapters: [
    { slug: 'hinh-thuc-ca-khuc-32', focus: 'Hình thức AABA và ABAC.' },
    { slug: 'rhythm-changes', focus: 'Tiến trình "I Got Rhythm" và các biến thể.' },
    { slug: 'vong-coltrane', focus: 'Vòng Coltrane: đổi giọng theo quãng 3 trưởng.' },
    { slug: 'phan-tich-giant-steps', focus: 'Phân tích hoà âm "Giant Steps".' },
  ], exercises: ['Chơi rhythm changes ở Si giáng: phần A bằng thế bấm không gốc, phần B (bridge) bằng shell.', 'Chơi vòng Coltrane chậm qua ba chủ âm B – G – E♭.'] },
  { title: 'Ngẫu hứng — nền tảng', intro: 'Ngẫu hứng là sáng tác tại chỗ trên hoà âm: nốt dẫn hướng, trang trí giai điệu, nốt tiếp cận, nốt tránh.', chapters: [
    { slug: 'ngau-hung-jazz', focus: 'Tổng quan ngẫu hứng jazz.' },
    { slug: 'not-dan-huong', focus: 'Nốt 3 và 7 nối các hợp âm.' },
    { slug: 'trang-tri-giai-dieu-jazz', focus: 'Ngẫu hứng từ chính giai điệu.' },
    { slug: 'not-tiep-can-jazz', focus: 'Nốt tiếp cận và bao vây.' },
    { slug: 'not-tranh-va-quang-nghich', focus: 'Nốt tránh; quãng thuận – nghịch.' },
  ], exercises: ['Chơi một đường nốt dẫn hướng (3 – 7) qua cả "Autumn Leaves", mỗi hợp âm một nốt.', 'Trang trí giai điệu một bài chuẩn: giữ nguyên nốt chính, thêm nốt tiếp cận.'] },
  { title: 'Ngẫu hứng — phương pháp', intro: 'Dọc và ngang, tiết tấu và câu nhạc, lick và trích dẫn, mẫu lặp chu kỳ, chơi ngoài giọng.', chapters: [
    { slug: 'ngau-hung-doc-ngang', focus: 'Ngẫu hứng theo hợp âm và theo giọng.' },
    { slug: 'tiet-tau-ngau-hung-jazz', focus: 'Tiết tấu, câu nhạc, dịch chuyển.' },
    { slug: 'lick-va-trich-dan', focus: 'Học lick; câu sáo; trích dẫn.' },
    { slug: 'mau-lap-chu-ky', focus: 'Lặp câu và dịch theo quãng cố định.' },
    { slug: 'choi-ngoai-jazz', focus: 'Side-slipping và chơi ngoài giọng.' },
  ], exercises: ['Học một lick ii – V – I và chơi nó ở 12 giọng.', 'Solo hai chorus blues chỉ dùng một motif, mỗi lần đổi một yếu tố.'] },
  { title: 'Ngẫu hứng nâng cao và bài solo', intro: 'Superimposition, sheets of sound, triad pairs, ngẫu hứng bằng hợp âm — rồi ghép tất cả thành một bài solo có kiến trúc.', chapters: [
    { slug: 'superimposition-jazz', focus: 'Chồng một tiến trình khác lên tiến trình đang có.' },
    { slug: 'sheets-of-sound', focus: 'Lối Coltrane: hợp âm dày đặc ở tốc độ cao.' },
    { slug: 'triad-pairs', focus: 'Hai hợp âm ba không chung nốt.' },
    { slug: 'ngau-hung-hop-am', focus: 'Ngẫu hứng bằng hợp âm, block chords.' },
    { slug: 'xay-dung-bai-solo', focus: 'Kiến trúc một bài solo.' },
    { slug: 'phan-tich-solo-jazz', focus: 'Phân tích năm solo "Straight, No Chaser".' },
    { slug: 'meo-ngau-hung-jazz', focus: 'Bài luyện và lời khuyên thực hành.' },
  ], exercises: ['Chép (transcribe) tám ô của một solo trong "Straight, No Chaser" và chơi theo bản thu.', 'Ghi âm một solo ba chorus; nghe lại và đánh dấu chỗ lên cao trào.'] },
  { title: 'Sáng tác và jazz hiện đại', intro: 'Viết bài jazz của riêng mình; jazz điệu thức, post-bop và free jazz.', chapters: [
    { slug: 'sang-tac-jazz', focus: 'Sáng tác là ngẫu hứng không có tính tức thời.' },
    { slug: 'jazz-dieu-thuc', focus: 'Jazz điệu thức: So What, thế bấm quãng 4.' },
    { slug: 'hoa-am-dieu-thuc', focus: 'Hoà âm điệu thức.' },
    { slug: 'post-bop-free-jazz', focus: 'Post-bop và free jazz.' },
  ], exercises: ['Viết một bài 32 ô AABA của riêng bạn, có ít nhất hai cặp ii – V và một phép thay thế.', 'Ngẫu hứng trên một vamp Dorian Rê (như "So What") bằng thế bấm quãng 4.'] },
]

/**
 * The single Jazz Theory Book (id `jazz-theory-book`) became four volumes. Saved positions, bookmarks, notes
 * and links under the old id move to the volume holding that item; anything else goes to volume 1.
 */
export const OLD_JAZZ_ID = 'jazz-theory-book'
export function jazzVolumeOf(key?: string) {
  const ends = [4, 7, 9, 13]
  const at = JAZZ_PARTS.findIndex((p) => p.chapters.some((c) => c.slug === key))
  return `jazz-theory-book-${at < 0 ? 1 : ends.findIndex((e) => at < e) + 1}`
}
/** Moves per-book lists (notes, bookmarks) saved under the old id to their volumes. */
export function splitOldJazz<T extends { key: string }>(rec: Record<string, T[]>): Record<string, T[]> {
  const old = rec[OLD_JAZZ_ID]
  if (!Array.isArray(old)) return rec
  const out = { ...rec }
  delete out[OLD_JAZZ_ID]
  for (const x of old) (out[jazzVolumeOf(x?.key)] ??= []).push(x)
  return out
}

const jazzPreface = (n: number, scope: string) => `
**The Jazz Theory Book** do **Lamar soạn trọn vẹn — 100%**: hệ thống lý thuyết, trình tự bài, cách giải thích, ví dụ, bảng, bài luyện và câu hỏi ôn tập đều là của Lamar. Đây là giáo trình jazz Lamar dùng để dạy, đóng thành **bốn tập** để người học đi trọn từ những ô swing đầu tiên tới một bài solo hoàn chỉnh. Đây là **Tập ${n}**: ${scope}

## Bốn tập của bộ sách
1. **Nền tảng** — nhập môn, swing, blues, hợp âm jazz, ii – V – I và các tiến trình.
2. **Hoà âm và thế bấm** — hệ thống hợp âm – âm giai, xếp hợp âm và thế bấm, tay trái và đệm.
3. **Tái hoà âm và hình thức** — thay thế, tái hoà âm, ca khúc 32 ô, rhythm changes, vòng Coltrane.
4. **Ngẫu hứng và sáng tác** — ngẫu hứng từ nền tảng đến nâng cao, bài solo, sáng tác, jazz hiện đại.

## Tinh thần của sách
Jazz là **một ngôn ngữ**, và bộ sách dạy nó như dạy một ngôn ngữ: trước hết là cảm giác nhịp (swing) và giọng nói gốc (blues); rồi đến "từ vựng" (hợp âm, âm giai), "ngữ pháp" (ii – V – I, tiến trình, hình thức); rồi cách "phát âm" trên đàn (thế bấm, tay trái, đệm); cuối cùng là **nói tự do** — thay thế, tái hoà âm, ngẫu hứng và sáng tác. Mỗi khái niệm đều phải được **nghe**, **chơi ở cả 12 giọng** và **tìm lại trong bản thu thật**.

## Cách đọc
1. Đọc các tập theo thứ tự; trong mỗi tập, mỗi phần dùng kiến thức của các phần trước.
2. Mỗi bài: đọc, **chơi mọi ví dụ trên đàn**, rồi chuyển sang ít nhất ba giọng khác.
3. Chọn một bài chuẩn (gợi ý "Autumn Leaves" hoặc "Fly Me to the Moon") và mang nó theo suốt bộ sách: mỗi phần, áp kiến thức mới vào chính bài đó.
4. Nghe thật nhiều. Tên nghệ sĩ và bản thu nhắc trong bài là bài tập nghe bắt buộc.
`

/**
 * Nhạc lý cơ bản, hai quyển. Mỗi chương là một bài sẵn có của thư viện (giữ nguyên slug), xếp lại theo
 * thứ tự học; phần mở đầu, lời dẫn từng phần và bài tập cuối phần được viết riêng cho sách.
 * Quyển 1 ứng với nhạc lý khoảng ABRSM Grade 1 – 3, Quyển 2 với Grade 4 – 5 và các nền tảng hoà âm, hình thức.
 * Hoà Âm Cổ Điển theo thứ tự chủ đề của sách bốn tác giả (trường phái Nga – Xô viết).
 * Phức Điệu Nghiêm Khắc theo hệ thống Taneyev và giáo trình Nhạc viện Hà Nội (Phạm Tú Hương, 1991).
 */
export const BOOKS: Book[] = [
  {
    id: 'nhac-ly-co-ban-1',
    title: 'Nhạc Lý Cơ Bản',
    volume: 'Quyển 1',
    subtitle: 'Âm thanh, ký hiệu, trường độ, quãng, âm giai và hợp âm ba — đọc và hiểu được bản nhạc.',
    author: 'Lamar',
    audience: 'Người mới học · mọi lứa tuổi',
    hue: 70,
    glyph: '𝄞',
    coverImage: theory1Cover,
    preface: `
Cuốn sách này dành cho người **bắt đầu học nhạc lý**: học sinh piano, người lớn tự học, giáo viên cần một trình tự dạy. Mục tiêu là sau khi đọc xong, người học **đọc được bản nhạc**, hiểu nốt nào, dài bao lâu, thuộc giọng gì, hợp âm nào đang vang lên.

## Cấu trúc sách
Mỗi bài trong sách là một bài của thư viện Lý thuyết, được **xếp lại theo thứ tự học** — từ âm thanh và ký hiệu, đến trường độ, quãng, âm giai, rồi hợp âm và ký hiệu diễn tấu. Đường dẫn của từng bài giữ nguyên như trong thư viện. Lời dẫn mỗi phần, phần "Mục tiêu bài học" ở đầu bài và bài tập cuối phần được viết riêng cho sách.

Trình tự bám theo chương trình nhạc lý phổ biến (ABRSM Grade 1 – 3), đối chiếu ở bài [[chuong-trinh-nhac-ly-abrsm]]; ai học theo lộ trình piano của thư viện có thể đọc song song với giáo trình ở mục Giáo trình.

## Cách đọc
1. Đọc theo thứ tự. Mỗi phần dựa trên phần trước.
2. Mỗi bài đọc **hai lần**: lần đầu đọc lướt phần "Mục tiêu bài học" và các tiêu đề, lần sau đọc kỹ và **chơi thử trên đàn** mọi ví dụ.
3. Làm bài tập ôn tập cuối phần trước khi sang phần mới. Đánh dấu "đã học xong" ở cuối bài để theo dõi tiến độ; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
4. Chữ gạch chân là liên kết; nếu có ghi "(Bài n)" thì bài đó nằm trong sách và mở ngay trong sách, còn lại mở ở thư viện.

## Về nguồn
Các bài trong thư viện đều ghi nguồn ở cuối; chỗ nào nguồn chưa đối chiếu hoặc mâu thuẫn được ghi ngay trong bài. Sách giữ nguyên cách làm đó.

Quyển 2 tiếp tục với nhịp nâng cao, điệu thức, hợp âm bảy và chức năng hoà âm, giai điệu và hình thức.
`,
    parts: [
      {
        title: 'Âm thanh và ký hiệu',
        intro: 'Âm nhạc là âm thanh có tổ chức. Phần này đi từ cao độ — đặc tính đầu tiên của một âm — đến cách ghi nó lên giấy: nốt, khuông, khoá, bàn phím, tên nốt và dấu hoá. Đây là "bảng chữ cái" của mọi phần sau.',
        chapters: [
          { slug: 'nhac-ly-co-ban', focus: 'Đọc như bản đồ của cả sách: các mảng của nhạc lý và thứ tự học.' },
          { slug: 'cao-do', focus: 'Cao độ là gì; vì sao một nốt "cao" hay "thấp".' },
          { slug: 'not-nhac', focus: 'Hình nốt, tên nốt, Đô giữa (C4).' },
          { slug: 'khuong-nhac', focus: '5 dòng 4 khe, dòng kẻ phụ, vạch nhịp.' },
          { slug: 'khoa-nhac', focus: 'Ba loại khoá và vì sao cần nhiều khoá.' },
          { slug: 'khoa-sol', focus: 'Thuộc các nốt trên dòng và khe khoá Sol.' },
          { slug: 'khoa-fa', focus: 'Thuộc các nốt khoá Fa; vị trí Đô giữa.' },
          { slug: 'khoa-do', focus: 'Đọc để nhận ra; chưa cần đọc nhanh.' },
          { slug: 'ban-phim', focus: 'Tìm mọi nốt trên đàn nhờ nhóm 2 và 3 phím đen.' },
          { slug: 'ten-not-va-he-thong-xuong-am', focus: 'Tên Đô – Rê – Mi và C – D – E; Đô cố định và Đô di động.' },
          { slug: 'ky-hieu-cao-do-c4-helmholtz-midi', focus: 'Đọc ký hiệu C4, c′ và số MIDI.' },
          { slug: 'cung-nua-cung', focus: 'Cung và nửa cung trên bàn phím.' },
          { slug: 'dau-hoa', focus: 'Thăng, giáng, bình; phạm vi tác dụng trong ô nhịp.' },
        ],
        exercises: [
          'Viết tên 20 nốt ngẫu nhiên trên khoá Sol và 20 nốt trên khoá Fa, bấm giờ; lặp lại mỗi ngày đến khi dưới 1 giây mỗi nốt.',
          'Trên bàn phím, chơi mọi nốt Đô từ trầm lên cao và gọi tên theo ký hiệu C1 … C8.',
          'Chỉ ra 5 cặp nửa cung tự nhiên (không cần phím đen) trên bàn phím.',
          'Viết một nốt rồi thêm dấu thăng, giáng, bình; chơi và gọi tên cả ba.',
        ],
      },
      {
        title: 'Trường độ và nhịp',
        intro: 'Nếu cao độ cho biết "nốt nào", trường độ cho biết "bao lâu". Phần này dạy các hình nốt và dấu lặng, chấm dôi và dấu nối, số chỉ nhịp, cách ghép đuôi nốt, nhịp độ, liên ba và đảo phách — đủ để đọc tiết tấu của phần lớn bản nhạc cho người mới.',
        chapters: [
          { slug: 'tiet-tau', focus: 'Phân biệt phách, nhịp và tiết tấu.' },
          { slug: 'truong-do', focus: 'Quan hệ gấp đôi giữa các hình nốt.' },
          { slug: 'dau-lang', focus: 'Mỗi hình nốt có dấu lặng tương ứng.' },
          { slug: 'cham-doi-dau-noi', focus: 'Chấm dôi cộng thêm một nửa; dấu nối nối hai nốt cùng cao độ.' },
          { slug: 'so-chi-nhip', focus: 'Nhịp đơn 2/4, 3/4, 4/4 và nhịp kép 6/8.' },
          { slug: 'cam-nhan-phach', focus: 'Đếm to và vận động theo phách.' },
          { slug: 'quy-tac-ghep-duoi-va-chia-nhom-not', focus: 'Ghép đuôi để lộ ra phách.' },
          { slug: 'vach-nhip-va-trinh-bay-ban-nhac', focus: 'Đọc vạch kép, vạch kết, ô lấy đà.' },
          { slug: 'nhip-do', focus: 'Thuật ngữ nhịp độ và số metronome.' },
          { slug: 'lien-ba', focus: 'Ba nốt trong thời gian của hai.' },
          { slug: 'dao-phach', focus: 'Nhận ra trọng âm rơi vào phách yếu.' },
        ],
        exercises: [
          'Vỗ và đếm to 8 ô nhịp 4/4 có nốt trắng chấm dôi, nốt đen, móc đơn và dấu lặng.',
          'Viết lại một đoạn ghép đuôi sai thành đúng theo phách (nhịp 4/4 và 6/8).',
          'Chơi một âm giai với máy nhịp ở 60, rồi đổi sang liên ba móc đơn.',
          'Nghe một bài nhạc pop, gõ phách và chỉ ra chỗ có đảo phách.',
        ],
      },
      {
        title: 'Quãng',
        intro: 'Quãng là khoảng cách giữa hai nốt — đơn vị đo của giai điệu và hoà âm. Phần này dạy gọi tên quãng theo số và tính chất, đảo quãng, thuận và nghịch âm, và những quãng "trùng âm" viết khác nhau mà nghe như nhau.',
        chapters: [
          { slug: 'quang', focus: 'Đếm số, rồi xác định tính chất (đúng, trưởng, thứ, tăng, giảm).' },
          { slug: 'quang-dao', focus: 'Quy tắc 9 và đổi tính chất khi đảo.' },
          { slug: 'thuan-nghich', focus: 'Nghe sự khác nhau giữa thuận và nghịch.' },
          { slug: 'trung-am', focus: 'Cùng phím, khác tên: vì sao tên nốt quan trọng.' },
          { slug: 'ky-hieu-quang-tam', focus: 'Ký hiệu 8va, 8vb, 15ma.' },
        ],
        exercises: [
          'Gọi tên 20 quãng viết sẵn (cả số và tính chất); kiểm tra bằng cách đếm nửa cung.',
          'Viết quãng đảo của mỗi quãng trên.',
          'Hát hoặc chơi các quãng 2, 3, 4, 5, 8 từ nốt Đô và gắn mỗi quãng với một câu hát quen.',
        ],
      },
      {
        title: 'Âm giai và giọng',
        intro: 'Âm giai là "vật liệu" của một bản nhạc; giọng là trung tâm mà mọi nốt hướng về. Phần này dạy âm giai trưởng và thứ, tên các bậc, hoá biểu, vòng quãng 5, giọng song song, ngũ cung và cromatic, và cách xác định giọng của một bản nhạc.',
        chapters: [
          { slug: 'am-giai', focus: 'Âm giai là gì; vì sao có nhiều loại.' },
          { slug: 'am-giai-truong', focus: 'Công thức cung – nửa cung của trưởng.' },
          { slug: 'am-giai-thu', focus: 'Ba dạng thứ: tự nhiên, hoà âm, giai điệu.' },
          { slug: 'bac-am-giai', focus: 'Tên và vai trò của các bậc (chủ, át, hạ át, âm dẫn).' },
          { slug: 'hoa-bieu', focus: 'Thứ tự dấu thăng và giáng; đọc nhanh hoá biểu.' },
          { slug: 'vong-quang-nam', focus: 'Thuộc vòng quãng 5 theo cả hai chiều.' },
          { slug: 'giong-song-song', focus: 'Mỗi giọng trưởng có một giọng thứ cùng hoá biểu.' },
          { slug: 'am-giai-ngu-cung', focus: 'Năm nốt không có nửa cung; gần với dân ca Việt.' },
          { slug: 'am-giai-cromatic', focus: 'Mười hai nửa cung và cách viết đi lên, đi xuống.' },
          { slug: 'xac-dinh-giong-cua-ban-nhac', focus: 'Ba bước: hoá biểu, nốt đầu – nốt cuối, dấu hoá bất thường.' },
        ],
        exercises: [
          'Viết các âm giai trưởng đến 3 dấu thăng và 3 dấu giáng, có hoá biểu và không hoá biểu.',
          'Viết La thứ, Mi thứ, Rê thứ ở cả ba dạng.',
          'Vẽ vòng quãng 5 từ trí nhớ, ghi giọng song song bên trong.',
          'Chọn 3 bài trong mục Phân tích tác phẩm, xác định giọng trước khi đọc bài phân tích, rồi kiểm tra.',
        ],
      },
      {
        title: 'Hợp âm ba, kết và ký hiệu diễn tấu',
        intro: 'Phần cuối của Quyển 1 ghép các nốt thành hợp âm, giới thiệu các loại kết — "dấu câu" của âm nhạc — và những ký hiệu cho biết chơi thế nào: cường độ, cách diễn tấu, dấu nhắc lại, dấu luyến, hoa mỹ, thuật ngữ. Bài cuối là bài ôn theo chương trình nhạc lý cấp 1 – 2.',
        chapters: [
          { slug: 'hop-am-ba', focus: 'Bốn loại hợp âm ba; dựng hợp âm trên mọi bậc.' },
          { slug: 'the-dao-hop-am', focus: 'Thế gốc, đảo 1, đảo 2 và ký hiệu.' },
          { slug: 'ky-hieu-hop-am', focus: 'Đọc ký hiệu chữ (C, Am), hợp âm sus và ký hiệu gạch chéo (G/B).' },
          { slug: 'cau-ket', focus: 'Các loại kết, kết với I6/4 và các kết đặc biệt.' },
          { slug: 'cuong-do', focus: 'Từ pp đến ff; crescendo, diminuendo.' },
          { slug: 'cach-dien-tau', focus: 'Legato, staccato, tenuto, accent.' },
          { slug: 'dau-luyen-dau-noi-va-dau-cau', focus: 'Phân biệt dấu luyến, dấu nối, dấu câu.' },
          { slug: 'dau-nhac-lai', focus: 'Đọc đúng đường đi của D.C., D.S., coda.' },
          { slug: 'ky-hieu-hoa-my', focus: 'Các ký hiệu hoa mỹ; láy rền bắt đầu từ nốt nào tuỳ phong cách.' },
          { slug: 'thuat-ngu', focus: 'Các thuật ngữ Ý hay gặp nhất.' },
          { slug: 'nhac-ly-cap-1-2', focus: 'Ôn toàn bộ Quyển 1 theo chương trình nhạc lý cấp 1 – 2.' },
        ],
        exercises: [
          'Dựng hợp âm ba trên 7 bậc của Đô trưởng và La thứ hoà âm; ghi loại từng hợp âm.',
          'Viết bốn loại kết ở Sol trưởng; chơi và nghe sự khác nhau.',
          'Lấy một bản nhạc đang tập, đánh dấu mọi ký hiệu diễn tấu và giải thích từng cái.',
          'Làm một đề nhạc lý cấp 1 hoặc 2 (ABRSM hoặc trường nhạc) trong 90 phút.',
        ],
      },
    ],
  },
  {
    id: 'nhac-ly-co-ban-2',
    title: 'Nhạc Lý Cơ Bản',
    volume: 'Quyển 2',
    subtitle: 'Nhịp nâng cao, điệu thức, hợp âm bảy, chức năng hoà âm, chuyển giọng, giai điệu và hình thức.',
    author: 'Lamar',
    audience: 'Đã học xong Quyển 1',
    hue: 32,
    glyph: '𝄢',
    coverImage: theory2Cover,
    preface: `
Quyển 2 dành cho người đã nắm Quyển 1: đọc được nốt, nhịp, quãng, âm giai và hợp âm ba. Ở đây nhạc lý chuyển từ **ký hiệu** sang **cấu trúc**: vì sao các hợp âm nối với nhau như vậy, một giai điệu được xây thế nào, một bản nhạc chia thành những phần nào.

## Cấu trúc sách
Như Quyển 1, mỗi bài trong sách là một bài của thư viện Lý thuyết, giữ nguyên đường dẫn, được xếp lại theo thứ tự học. Lời dẫn mỗi phần, phần "Mục tiêu bài học" và bài tập cuối phần được viết riêng cho sách. Trình tự bám theo chương trình nhạc lý cấp 3 – 5 (xem [[chuong-trinh-nhac-ly-abrsm]]) và phần đầu của giáo trình hoà âm ([[giao-trinh-hoa-am]]) và hình thức ([[lo-trinh-hinh-thuc]]).

## Cách đọc
1. Ôn lại Quyển 1 nếu một bài nhắc đến khái niệm còn mơ hồ.
2. Ở các phần hoà âm và hình thức, **chơi mọi ví dụ trên đàn** và nghe bản thu được gợi ý; nhạc lý ở mức này phải nghe được, không chỉ đọc được.
3. Làm bài tập ôn tập cuối mỗi phần và đánh dấu đã học từng bài.

Sau Quyển 2, đường đi tiếp là [[giao-trinh-hoa-am]] (hoà âm bốn bè đầy đủ), [[lo-trinh-hinh-thuc]] và [[phuong-phap-phan-tich-tac-pham]].
`,
    parts: [
      {
        title: 'Nhịp nâng cao',
        intro: 'Quyển 1 dừng ở nhịp đơn, nhịp kép 6/8 và liên ba. Phần này mở rộng sang nhịp lấy đà, nhịp hỗn hợp (5/8, 7/8), hemiola, đa nhịp và nhạc không có vạch nhịp.',
        chapters: [
          { slug: 'nhip-lay-da', focus: 'Ô lấy đà và cách tính ô cuối.' },
          { slug: 'nhip-hon-hop', focus: 'Nhóm 2 + 3 và 3 + 2 + 2; đếm bằng phách không đều.' },
          { slug: 'hemiola', focus: 'Ba nhóm hai phách đặt vào khoảng thời gian của hai nhóm ba phách.' },
          { slug: 'da-nhip', focus: 'Hai nhịp cùng lúc; tập 2 chọi 3 trên đàn.' },
          { slug: 'nhip-tu-do-va-ky-hieu-khong-nhip', focus: 'Đọc nhạc không vạch nhịp.' },
        ],
        exercises: [
          'Vỗ các nhóm 5/8 (2 + 3, 3 + 2) và 7/8 (2 + 2 + 3), đếm to.',
          'Tập 2 chọi 3 rồi 3 chọi 4 trên đàn, hai tay hai nốt khác nhau.',
          'Tìm hemiola ở cuối một bài minuet hoặc courante Baroque.',
        ],
      },
      {
        title: 'Âm giai, điệu thức và giọng',
        intro: 'Ngoài trưởng và thứ còn các điệu thức cổ, âm giai toàn cung, và những câu hỏi gốc rễ: điệu tính là gì, vì sao 12 nửa cung lại "bằng nhau". Phần này cũng dạy dịch giọng — kỹ năng hằng ngày của người đệm đàn.',
        chapters: [
          { slug: 'dieu-thuc', focus: 'Các điệu thức nhà thờ: cách nghĩ thực hành và màu sắc từng điệu.' },
          { slug: 'dieu-tinh', focus: 'Trung tâm, sức hút và vai trò của âm dẫn.' },
          { slug: 'am-giai-toan-cung', focus: 'Sáu nốt cách đều; màu ấn tượng.' },
          { slug: 'dich-giong', focus: 'Dịch theo quãng và theo bậc; dịch hoá biểu.' },
          { slug: 'chuoi-boi-am', focus: 'Nền âm học của quãng 8, 5, 3.' },
          { slug: 'luat-binh-quan', focus: 'Vì sao piano chia quãng 8 thành 12 nửa cung bằng nhau.' },
        ],
        exercises: [
          'Chơi bảy điệu thức bắt đầu từ Rê (Rê Dorian, Rê Phrygian…), ghi công thức cung – nửa cung.',
          'Dịch một bài hát thiếu nhi từ Đô trưởng sang Fa, Sol và Rê trưởng, viết ra và chơi.',
          'Trên đàn, tìm các bồi âm 2 – 6 của nốt Đô 2 (C2).',
        ],
      },
      {
        title: 'Hợp âm bảy và chức năng hoà âm',
        intro: 'Phần trung tâm của Quyển 2: hợp âm bảy, ba chức năng chủ – hạ át – át, nốt ngoài hợp âm, hợp âm át phụ, chuyển giọng, nhịp điệu hoà âm, dẫn giọng và cách đặt hợp âm cho một giai điệu.',
        chapters: [
          { slug: 'hop-am-bay', focus: 'Hợp âm 7 át (V7), quy tắc giải quyết nốt 7, các hợp âm 7 trong giọng trưởng.' },
          { slug: 'chuc-nang-hoa-am', focus: 'Ba nhóm chức năng và vòng T – S – D – T.' },
          { slug: 'vong-hop-am', focus: 'Những vòng hợp âm hay gặp nhất.' },
          { slug: 'dan-giong', focus: 'Nối hợp âm gần nhất; tránh song song quãng 5, quãng 8.' },
          { slug: 'not-ngoai-hop-am', focus: 'Nốt lướt, nốt thêu, nốt chờ, nốt luyến.' },
          { slug: 'hop-am-at-phu', focus: 'V/V, V/vi: nhận ra qua dấu hoá bất thường.' },
          { slug: 'chuyen-giong', focus: 'Chuyển sang giọng gần qua hợp âm chung.' },
          { slug: 'nhip-dieu-hoa-am', focus: 'Tốc độ đổi hợp âm, nhanh dần về kết.' },
          { slug: 'phoi-hoa-am-giai-dieu', focus: 'Quy trình đặt hợp âm cho giai điệu.' },
        ],
        exercises: [
          'Viết V7 ở mọi giọng trưởng đến 4 dấu, cả ba thế đảo, và giải quyết về I.',
          'Phân tích hợp âm 8 ô đầu một sonatina (ví dụ Clementi op. 36 số 1) bằng số La Mã.',
          'Đặt hợp âm cho một giai điệu dân ca 8 ô theo quy trình trong bài cuối phần, rồi đệm bằng tay trái.',
          'Tìm một hợp âm át phụ và một chỗ chuyển giọng trong bài đang tập.',
        ],
      },
      {
        title: 'Giai điệu và hình thức',
        intro: 'Nhạc lý không dừng ở hợp âm: một bản nhạc được xây từ motif, câu, đoạn, rồi các khuôn hình thức. Phần này đi từ ý nhạc nhỏ nhất đến hình thức hai đoạn, ba đoạn, biến tấu và rondo — đủ để nhìn ra "kiến trúc" của hầu hết bài piano ở trình độ trung cấp.',
        chapters: [
          { slug: 'giai-dieu', focus: 'Đường nét, đi bậc và nhảy, đỉnh giai điệu.' },
          { slug: 'motif', focus: 'Ý nhạc nhỏ nhất và cách biến đổi nó.' },
          { slug: 'cau-nhac', focus: 'Câu, đoạn; câu hỏi – câu đáp; sentence và period.' },
          { slug: 'hinh-thuc-am-nhac', focus: 'Các tầng của hình thức; chữ cái A, B.' },
          { slug: 'hinh-thuc-hai-doan', focus: 'Hai đoạn đơn và hai đoạn có tái hiện.' },
          { slug: 'hinh-thuc-ba-doan', focus: 'ABA và tái hiện.' },
          { slug: 'bien-tau', focus: 'Giữ cái gì, đổi cái gì qua các lần biến tấu.' },
          { slug: 'rondo', focus: 'ABACA: chủ đề quay lại.' },
        ],
        exercises: [
          'Chia câu và đoạn cho 3 bài piano đang tập; ghi kết ở cuối mỗi câu.',
          'Vẽ sơ đồ hình thức (A, B, A′…) cho một minuet và một rondo.',
          'Viết một giai điệu 8 ô kiểu câu hỏi – câu đáp, kết nửa ở ô 4 và kết trọn ở ô 8.',
        ],
      },
      {
        title: 'Ký âm nâng cao và tổng ôn',
        intro: 'Phần cuối chuẩn bị cho việc đọc nhạc ngoài piano: nhạc cụ dịch giọng và tổng phổ, bè trầm số, giản phổ, các ký hiệu ít gặp — và hai chương ôn theo chương trình nhạc lý cấp 3 – 4 và cấp 5.',
        chapters: [
          { slug: 'nhac-cu-dich-giong-va-doc-tong-pho', focus: 'Đọc bè clarinet, horn; thứ tự nhạc cụ trong tổng phổ.' },
          { slug: 'bass-so', focus: 'Đọc các số cơ bản 6, 6/4, 7, 6/5.' },
          { slug: 'gian-pho-ky-am-so', focus: 'Đọc và chuyển giản phổ sang khuông nhạc.' },
          { slug: 'ky-hieu-nang-cao', focus: 'Nhận ra các ký hiệu đặc biệt.' },
          { slug: 'nhac-ly-cap-3-4', focus: 'Ôn theo chương trình cấp 3 – 4.' },
          { slug: 'nhac-ly-cap-5', focus: 'Ôn theo chương trình cấp 5.' },
        ],
        exercises: [
          'Viết lại một giai điệu cho clarinet Si♭ và horn Fa (giọng viết).',
          'Chơi một bè trầm số 8 ô có 6 và 6/4 trên đàn.',
          'Làm trọn một đề nhạc lý cấp 5 trong 2 giờ, tự chấm theo đáp án.',
        ],
      },
    ],
  },
  {
    id: 'hoa-am-co-dien',
    title: 'Hoà Âm Cổ Điển',
    volume: 'Trường phái Nga – Xô viết',
    subtitle: 'Hoà âm bốn bè theo hệ thống chức năng của sách giáo khoa bốn tác giả (Dubovsky – Evseev – Sposobin – Sokolov): hợp âm ba chính, kết, thể đảo, nhóm át và hạ át, lệch giọng và chuyển giọng.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản',
    hue: 55,
    glyph: '𝄋',
    coverImage: harmonyCover,
    preface: `
Cuốn này dạy **hoà âm cổ điển** — hoà âm của thời kỳ thông dụng, khoảng 1650 – 1900 — theo cách mà các nhạc viện Nga – Xô viết, và nhiều trường nhạc chịu ảnh hưởng của họ, vẫn dạy: **hệ thống chức năng** T – S – D và **luyện viết bốn bè** từ dễ đến khó.

## Hệ thống của sách
Trình tự các bài bám theo thứ tự chủ đề của *Учебник гармонии* (Giáo trình hoà âm) của **I. Dubovsky, S. Evseev, I. Sposobin, V. Sokolov** — thường gọi là "sách giáo khoa bốn tác giả", in lần đầu ở Moskva năm 1937 – 38. Mỗi bài ghi rõ chủ đề tương ứng trong sách đó ở phần "Mục tiêu bài học"; số thứ tự chủ đề theo các bản in gần đây (2005 – 2012), lệch khoảng hai số so với bản 1965, và vài số ở giữa còn mâu thuẫn giữa các nguồn. Lịch sử, gốc lý thuyết (Riemann qua Catoire) và đặc trưng của sách được trình bày ở bài đầu tiên của Phần I.

Lưu ý về tên gọi: hệ thống **Taneyev** (S. I. Taneyev, *Đối vị di động của lối viết nghiêm khắc*, 1909) là hệ thống của môn **phức điệu**, không phải của môn hoà âm — xem cuốn *Phức Điệu Nghiêm Khắc* trong tủ sách và bài [[phuc-dieu-nghiem-khac]]. Cuốn sách này theo hệ thống hoà âm của sách bốn tác giả.

## Cách đọc
1. Cần nắm trước: quãng, âm giai, hoá biểu, hợp âm ba và hợp âm bảy — tức là hai quyển *Nhạc Lý Cơ Bản*.
2. Mỗi bài: đọc, **chơi mọi ví dụ trên đàn**, rồi làm bài tập viết bốn bè. Hoà âm học bằng tay và tai, không chỉ bằng mắt.
3. Ở những chỗ hai trường phái giải thích khác nhau, bài có mục **"Hai trường phái"**; bảng đối chiếu đầy đủ ở Phần VI.
4. Làm bài tập ôn tập cuối mỗi phần trước khi sang phần mới.
`,
    parts: [
      {
        title: 'Nhập môn: hai trường phái và hệ chức năng',
        intro: 'Trước khi viết hợp âm đầu tiên, cần biết mình đang học theo truyền thống nào và đọc ký hiệu ra sao. Phần này giới thiệu sách bốn tác giả, so nó với truyền thống phương Tây, và hệ ký hiệu chức năng T – S – D mà cả cuốn sách dùng.',
        chapters: [
          { slug: 'hoa-am-truong-phai-nga-xo-viet', focus: 'Sách bốn tác giả: tác giả, lịch sử, gốc Riemann – Catoire, thứ tự các chủ đề.' },
          { slug: 'hai-truong-phai-hoa-am', focus: 'Hai truyền thống dạy hoà âm và vì sao thư viện trình bày song song.' },
          { slug: 'ky-hieu-chuc-nang-truong-phai-nga', focus: 'Đọc và viết ký hiệu T, S, D, K64, SII, TSVI, DVII7, DD.' },
          { slug: 'he-thong-hoa-am-co-dien', focus: 'Bức tranh chung: hoà âm cổ điển hình thành thế nào (Rameau, Weber, Riemann).' },
        ],
        exercises: [
          'Ghi ký hiệu chức năng cho các hợp âm ba trên bảy bậc của Đô trưởng và La thứ hoà âm.',
          'Viết lại một chuỗi số La Mã (I – IV – V – I, I – ii6 – V7 – I) bằng ký hiệu chức năng kiểu Nga.',
        ],
      },
      {
        title: 'Hợp âm ba chính và kết cấu bốn bè',
        intro: 'Tương ứng các chủ đề 1 – 4 và 8 của sách bốn tác giả: hợp âm ba trưởng và thứ trong kết cấu bốn bè, hệ chức năng của ba hợp âm chính, ba cách nối hợp âm (nối hoà thanh, nối giai điệu, nhảy quãng 3) và phối hoà âm giai điệu bằng ba hợp âm chính.',
        chapters: [
          { slug: 'hop-am-ba', focus: 'Chủ đề 1: hợp âm ba trưởng, thứ; sắp xếp gần và xa.' },
          { slug: 'luat-hoa-am-bon-be', focus: 'Chủ đề 1: kết cấu bốn bè — tầm âm, khoảng cách, nhân đôi, chuyển động bị cấm.' },
          { slug: 'chuc-nang-hoa-am', focus: 'Chủ đề 2: hệ chức năng của các hợp âm ba chính.' },
          { slug: 'noi-hop-am', focus: 'Chủ đề 3 và 8: nối hoà thanh, nối giai điệu, nhảy quãng 3.' },
          { slug: 'dan-giong', focus: 'Dẫn giọng: đi gần nhất, giữ nốt chung, tránh song song quãng 5 – 8.' },
          { slug: 'phoi-hoa-am-giai-dieu', focus: 'Chủ đề 4: phối hoà âm giai điệu bằng T, S, D.' },
        ],
        exercises: [
          'Viết bốn bè chuỗi T – S – D – T ở Đô, Sol, Fa trưởng và La, Mi, Rê thứ, mỗi giọng cả ba cách sắp xếp ban đầu.',
          'Nối T – S và S – D bằng nối hoà thanh, nối giai điệu, rồi bằng nhảy quãng 3; chơi và nghe sự khác nhau.',
          'Phối hoà âm bốn bè cho một giai điệu 8 ô chỉ dùng T, S, D.',
        ],
      },
      {
        title: 'Kết, câu nhạc và các thể đảo',
        intro: 'Tương ứng các chủ đề 9 – 14: kết và câu nhạc, hợp âm bốn sáu kết (K64), hợp âm sáu của các hợp âm chính, nối hai hợp âm sáu, hợp âm bốn sáu lướt và thêu — những công cụ làm cho bè trầm biết "hát".',
        chapters: [
          { slug: 'cau-ket', focus: 'Chủ đề 9 và 20: kết trọn, kết nửa, kết plagal, kết ngắt.' },
          { slug: 'cau-nhac', focus: 'Chủ đề 9: câu nhạc và đoạn nhạc — nơi đặt kết.' },
          { slug: 'hop-am-sau-bon', focus: 'Chủ đề 10 và 14: K64, bốn sáu lướt, bốn sáu thêu.' },
          { slug: 'the-dao-hop-am', focus: 'Chủ đề 11 và 13: hợp âm sáu của T, S, D; nối hai hợp âm sáu.' },
          { slug: 'nhip-dieu-hoa-am', focus: 'Đổi hợp âm ở đâu trong ô nhịp; nhịp điệu hoà âm dồn về kết.' },
        ],
        exercises: [
          'Viết kết trọn có K64 ở năm giọng trưởng và năm giọng thứ.',
          'Phối hoà âm cho một bè trầm cho sẵn có T6, S6, D6 và một hợp âm bốn sáu lướt.',
          'Chia câu và đánh dấu kết trong một chorale bốn bè của Bach.',
        ],
      },
      {
        title: 'Nhóm át và hạ át mở rộng',
        intro: 'Tương ứng các chủ đề 15 – 26: hợp âm bảy át D7 và các thể đảo, hợp âm bậc II (SII, SII6) và trưởng hoà âm, hợp âm bậc VI và kết ngắt, SII7, hợp âm bảy cảm âm DVII7, hợp âm chín át, nốt ngoài hợp âm và mô tiến diatonic.',
        chapters: [
          { slug: 'hop-am-bay', focus: 'Chủ đề 15 – 17: D7, các thể đảo D65, D43, D2 và cách giải quyết.' },
          { slug: 'truong-hoa-am', focus: 'Chủ đề 19: trưởng hoà âm (hạ bậc VI) và hai cách giải thích.' },
          { slug: 'hop-am-cam-am', focus: 'Chủ đề 21 – 22: DVII7 — hợp âm bảy cảm âm, nửa giảm và giảm.' },
          { slug: 'hop-am-mo-rong', focus: 'Chủ đề 23: hợp âm chín át D9 và các hợp âm mở rộng.' },
          { slug: 'not-ngoai-hop-am', focus: 'Nốt lướt, nốt thêu, nốt chờ, nốt luyến trong bốn bè.' },
          { slug: 'mo-tien-hoa-am', focus: 'Chủ đề 26: mô tiến diatonic.' },
        ],
        exercises: [
          'Viết D7 và ba thể đảo ở bốn giọng, giải quyết về T đúng quy tắc nốt 7 và âm dẫn.',
          'Phối hoà âm một giai điệu có SII6 trước K64 ở kết.',
          'Viết một mô tiến diatonic bốn khâu theo vòng quãng 5.',
        ],
      },
      {
        title: 'Hoà âm cromatic: lệch giọng và chuyển giọng',
        intro: 'Tương ứng các chủ đề 33 trở đi: hệ cromatic, lệch giọng bằng hợp âm át phụ, chuyển giọng sang các giọng họ hàng mức một, âm ngân, rồi chuyển giọng xa qua hợp âm Napoli, qua giọng cùng tên và chuyển giọng trùng âm qua hợp âm bảy giảm.',
        chapters: [
          { slug: 'hoa-am-cromatic', focus: 'Bức tranh chung của hoà âm cromatic.' },
          { slug: 'hop-am-at-phu', focus: 'Chủ đề 33 – 34: lệch giọng (отклонение) bằng át phụ, DD.' },
          { slug: 'chuyen-giong', focus: 'Chủ đề 36: chuyển giọng sang giọng họ hàng mức một qua hợp âm chung.' },
          { slug: 'bass-ngan', focus: 'Chủ đề 49: âm ngân (органный пункт).' },
          { slug: 'hop-am-muon', focus: 'Hợp âm của giọng cùng tên; chuyển giọng qua giọng cùng tên.' },
          { slug: 'hop-am-napoli', focus: 'Chủ đề 52 – 59: hợp âm Napoli và chuyển giọng qua Napoli.' },
          { slug: 'hop-am-sau-tang', focus: 'Các hợp âm sáu tăng trước D.' },
          { slug: 'hop-am-bay-giam', focus: 'Hợp âm bảy giảm và chuyển giọng trùng âm.' },
          { slug: 'hop-am-not-chung', focus: 'Hợp âm nốt chung.' },
          { slug: 'hop-am-ba-tang', focus: 'Hợp âm ba tăng.' },
          { slug: 'trung-am-cromatic', focus: 'Quan hệ trung âm cromatic — cầu sang hoà âm thế kỷ 19.' },
        ],
        exercises: [
          'Viết một câu 8 ô ở Đô trưởng có lệch giọng sang Rê thứ và Sol trưởng bằng át phụ.',
          'Chuyển giọng từ Đô trưởng sang năm giọng họ hàng mức một, mỗi lần qua một hợp âm chung khác nhau.',
          'Viết kết có hợp âm Napoli và kết có hợp âm sáu tăng ở La thứ.',
          'Dùng một hợp âm bảy giảm để chuyển từ Đô thứ sang ba giọng khác nhau.',
        ],
      },
      {
        title: 'Phân tích, đối chiếu và tổng ôn',
        intro: 'Phần cuối đưa hoà âm vào tác phẩm thật: cách phân tích hoà âm, bảng đối chiếu hai trường phái cho từng điểm, toàn bộ công thức trên một trang, bảng thuật ngữ, và kỹ năng hoà âm trên đàn phím.',
        chapters: [
          { slug: 'phan-tich-hoa-am', focus: 'Quy trình phân tích hoà âm một tác phẩm.' },
          { slug: 'so-sanh-hai-truong-phai-hoa-am', focus: 'Đối chiếu từng điểm giữa trường phái Nga – Xô viết và phương Tây.' },
          { slug: 'meo-va-cong-thuc-hoa-am', focus: 'Toàn bộ công thức và mẹo nhớ để ôn thi.' },
          { slug: 'thuat-ngu-hoa-am', focus: 'Bảng thuật ngữ hoà âm Việt – Anh (và tên Nga ở các bài liên quan).' },
          { slug: 'ky-nang-dan-phim-chuc-nang', focus: 'Đưa hoà âm lên đàn: chuỗi kết, phối hoà âm, dịch giọng khi đọc.' },
        ],
        exercises: [
          'Phân tích hoà âm bằng ký hiệu chức năng toàn bộ một chorale của Bach và chương 2 một sonatina Cổ điển.',
          'Chơi trên đàn chuỗi T – S – K64 – D7 – T ở mọi giọng đến 4 dấu.',
          'Làm một đề thi hoà âm viết (giai điệu và bè trầm cho sẵn) trong 3 giờ.',
        ],
      },
    ],
  },
  {
    id: 'phuc-dieu-nghiem-khac',
    title: 'Phức Điệu Nghiêm Khắc',
    volume: 'Sergei Taneev',
    subtitle: 'Phức điệu nghiêm khắc theo hệ thống Taneyev và giáo trình Nhạc viện Hà Nội: giai điệu, đối vị đơn giản và phức tạp (chỉ số Iv, Ih), đảo ảnh, ba – bốn bè, mô phỏng, canon và hình thức.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · song song Hoà Âm Cổ Điển',
    hue: 75,
    glyph: '♮',
    coverImage: polyphonyCover,
    preface: `
Cuốn này dạy **phức điệu nghiêm khắc** — lối viết nhiều bè của thanh nhạc nhà thờ thế kỷ 14 – 16 (Palestrina, Lassus, Josquin), được giản lược thành một môn học có quy tắc chặt về giai điệu và về cách kết hợp các giai điệu.

## Hệ thống của sách
- **Sergei Ivanovich Taneyev** (1856 – 1915; tên còn được phiên là Taneev) toán học hoá việc đổi chỗ các bè trong cuốn *Đối vị di động của lối viết nghiêm khắc* (Leipzig, 1909; bản tiếng Anh 1962): mọi trường hợp đối vị phức tạp được tính bằng các chỉ số **Iv** (chiều dọc) và **Ih** (chiều ngang).
- Ở Việt Nam, giáo trình *Phức điệu nghiêm khắc* của **Phạm Tú Hương** (Nhạc viện Hà Nội, 1991; hiệu đính Nguyễn Thụy Loan) trình bày theo hệ thống này. Trình tự các phần của sách — giai điệu, phức điệu tương phản, phức điệu mô phỏng, hình thức — bám theo trình tự đó, như trình bày ở bài đầu tiên của Phần I.
- Cuốn sách chỉ trình bày hệ thống Taneyev. Phương pháp năm loại của **Fux** là một cuốn riêng trong tủ sách: *Những Bước Lên Đỉnh Parnassus*.
- Phần VI gom bảng công thức và thuật ngữ.

## Cách đọc
1. Cần nắm trước: quãng, quãng đảo, thuận – nghịch, điệu thức — tức là hai quyển *Nhạc Lý Cơ Bản*. Có thể học song song *Hoà Âm Cổ Điển*.
2. **Hát một bè, chơi bè kia trên đàn**; phức điệu phải nghe được từng giai điệu riêng.
3. Với đối vị phức tạp, **nghĩ bằng con số**: đổi quãng sang số, cộng chỉ số Iv, rồi tra xem quãng nào đổi tính chất.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: khái niệm và quy ước',
        intro: 'Phần mở đầu của giáo trình: phức điệu và đối vị là gì, ba dạng phức điệu (tương phản, mô phỏng, bè tòng), và hệ ký hiệu dùng suốt cuốn sách — ghi quãng bằng số theo Taneyev, ký hiệu bè bằng số La Mã với dấu ±, các chữ viết tắt NT, BT, Iv, Ih, P, R.',
        chapters: [
          { slug: 'phuc-dieu-nghiem-khac', focus: 'Nghiêm khắc và tự do; trường phái Nga – Việt Nam; lộ trình theo giáo trình Nhạc viện Hà Nội.' },
          { slug: 'khai-niem-va-quy-uoc-phuc-dieu', focus: 'Ba dạng phức điệu; ghi quãng bằng số (hệ Taneyev); ký hiệu bè, dấu ± và chữ viết tắt.' },
        ],
        exercises: [
          'Đổi 12 quãng (quãng 2 đến quãng 12, cả thuận và nghịch) sang cách ghi bằng số của Taneyev và ngược lại.',
          'Nghe một đoạn thánh lễ của Palestrina, chỉ ra chỗ phức điệu tương phản và chỗ mô phỏng.',
        ],
      },
      {
        title: 'Giai điệu',
        intro: 'Phần 1 của giáo trình: một giai điệu viết theo lối nghiêm khắc phải đúng ba nhóm quy định — điệu thức diatonic cổ, tiến hành cao độ (liền bậc là chính, nhảy xong phải phản hồi) và tiết tấu (nhịp lớn, không đảo phách). Viết đúng giai điệu là nền của mọi phần sau.',
        chapters: [
          { slug: 'giai-dieu-phuc-dieu-nghiem-khac', focus: 'Điệu thức, tiến hành cao độ và tiết tấu của giai điệu nghiêm khắc.' },
        ],
        exercises: [
          'Viết 4 giai điệu 8 – 12 nhịp ở điệu thức Dorian, Phrygian, Mixolydian và Aeolian, đúng mọi quy định về bước nhảy và phản hồi.',
          'Tự kiểm tra từng giai điệu: đánh dấu mọi bước nhảy và nốt phản hồi, tìm âm hưởng ba cung và mô tiến (phải tránh).',
        ],
      },
      {
        title: 'Phức điệu tương phản: đối vị đơn giản và phức tạp',
        intro: 'Phần 2 của giáo trình — trung tâm của hệ thống Taneyev: đối vị đơn giản hai bè (quãng thuận, quãng nghịch, nốt lưu), rồi đối vị phức tạp với nguyên thể và biến thể, chuyển động chiều dọc (Iv), chiều ngang (Ih), đảo ảnh, tăng thêm quãng bán thuận, và đối vị ba – bốn bè.',
        chapters: [
          { slug: 'doi-vi-don-gian-hai-be', focus: 'Đối tỉ tiết tấu và hướng đi; quãng thuận, quãng nghịch; nốt lưu, lướt, thêu, sớm, thoát.' },
          { slug: 'doi-vi-phuc-tap', focus: 'Nguyên thể – biến thể; ba loại đối vị phức tạp theo giáo trình Việt Nam.' },
          { slug: 'doi-vi-chuyen-dong-chieu-doc', focus: 'Chỉ số Iv: chuyển chỗ, chuyển gần, chuyển xa ở quãng 8, 12, 10; Iv tổng hợp.' },
          { slug: 'doi-vi-chuyen-dong-chieu-ngang', focus: 'Chỉ số Ih; phương pháp bè canon giả; đối vị ngang – dọc.' },
          { slug: 'doi-vi-dao-anh', focus: 'Đảo ảnh (soi gương) và tăng thêm quãng bán thuận.' },
          { slug: 'doi-am-ba-bon-be', focus: 'Ba bè là ba cặp hai bè; Iv1 + Iv2 = Iv3; tam trùng và tứ trùng đối vị.' },
        ],
        exercises: [
          'Viết đối vị đơn giản hai bè (8 – 10 nhịp) trên một giai điệu cho sẵn, có ít nhất hai nốt lưu đúng sơ đồ chuẩn bị – giải quyết.',
          'Viết một nguyên thể dùng được cho biến thể Iv = −7 (chuyển chỗ quãng 8); viết biến thể và kiểm tra mọi quãng đổi tính chất.',
          'Lặp lại với Iv = −11 (chuyển chỗ quãng 12) và Iv = −9 (chuyển chỗ quãng 10).',
          'Viết đối vị ba bè từ một khung hai bè; kiểm tra lần lượt cặp trên, cặp dưới, cặp ngoài.',
        ],
      },
      {
        title: 'Phức điệu mô phỏng: mô phỏng và canon',
        intro: 'Phần 3 của giáo trình: cùng một giai điệu xuất hiện lần lượt ở các bè. Từ mô phỏng đơn giản (P và R, bảy hình thức mô phỏng) đến canon hai bè (canon vô tận, canon mô tiến — chọn quãng bằng công thức Iv) và canon ba, bốn bè với sáu cách xuất phát.',
        chapters: [
          { slug: 'mo-phong-don-gian', focus: 'P và R; bảy hình thức mô phỏng đơn giản; mô phỏng ba – bốn bè và mô phỏng kép.' },
          { slug: 'canon-hai-be', focus: 'Canon vô tận (Iv = 2x) và canon mô tiến (Iv = x + y), loại I và loại II.' },
          { slug: 'canon-ba-bon-be', focus: 'Sáu cách xuất phát; loại và kiểu; cặp bè cần đối vị phức tạp.' },
        ],
        exercises: [
          'Viết mô phỏng đơn giản hai bè ở quãng 5 và ở quãng 8, mỗi bài 8 nhịp, có phần tự do sau khi mô phỏng dừng.',
          'Viết một canon vô tận hai bè ở quãng 8; tính Iv và kiểm tra chỗ nối vòng.',
          'Viết một canon mô tiến hai bè, chỉ rõ x, y và hướng mô tiến.',
        ],
      },
      {
        title: 'Hình thức',
        intro: 'Phần 4 của giáo trình: các kỹ thuật được ghép thành hình thức — đoạn nhạc phức điệu (không chia câu, kết khi mọi bè cùng dừng), thể hai đoạn tương phản và mô phỏng, thể ba đoạn với đoạn giữa tương phản và tái hiện bằng một biến thể; các dạng bốn bè là mầm mống của fugue.',
        chapters: [
          { slug: 'hinh-thuc-phuc-dieu-nghiem-khac', focus: 'Đoạn nhạc phức điệu; thể hai đoạn; thể ba đoạn; mầm mống fugue.' },
        ],
        exercises: [
          'Viết một thể hai đoạn tương phản: đoạn 1 là đối vị hai bè, đoạn 2 là biến thể Iv của đoạn 1.',
          'Viết một thể ba đoạn ngắn ba bè: đoạn 2 chuyển sang giọng át, đoạn 3 tái hiện bằng một biến thể.',
        ],
      },
      {
        title: 'Tra cứu và đối chiếu',
        intro: 'Phần cuối gom những gì cần mở lại nhiều lần khi làm bài: bảng công thức của hệ Taneyev và thuật ngữ Việt – Anh – Nga – Ý.',
        chapters: [
          { slug: 'cong-thuc-phuc-dieu', focus: 'Quãng bằng số, nốt lưu, mọi công thức Iv – Ih và câu kiểm tra trên một trang.' },
          { slug: 'thuat-ngu-phuc-dieu', focus: 'Đối chiếu thuật ngữ Việt – Anh – Nga – Ý của giáo trình.' },
        ],
        exercises: [
          'Dùng mười hai câu kiểm tra để rà lại mọi bài tập đã làm trong sách.',
          'Lập bảng tra Iv cho cả ba trường hợp chuyển chỗ quãng 8, 10, 12 và đánh dấu những quãng đổi tính chất.',
        ],
      },
    ],
  },
  {
    id: 'doi-am-fux',
    title: 'Những Bước Lên Đỉnh Parnassus',
    volume: 'Johann Joseph Fux',
    subtitle: 'Hướng dẫn thực hành nghệ thuật đối âm theo phong cách Palestrina — đọc từ nguyên văn Gradus ad Parnassum (1725): năm loại đối âm, ba – bốn bè, mô phỏng, fugue, đối âm kép và các nguyên tắc sáng tác phức điệu.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · song song Hoà Âm Cổ Điển',
    hue: 25,
    glyph: '𝄞',
    coverImage: fuxCover,
    preface: `
*Gradus ad Parnassum* — "những bậc thang lên núi Parnassus", nơi ở của các nàng thơ — là sách dạy đối âm của **Johann Joseph Fux** (1660 – 1741), nhạc trưởng triều đình Vienna, in năm 1725. Ba thế kỷ nay nó là con đường học đối âm kinh điển của phương Tây.

## Hệ thống của sách
- Sách đọc theo **bản dịch Anh thế kỷ 18** *Practical Rules for Learning Composition* — bản rút gọn bỏ hình thức đối thoại, giữ quy tắc và ví dụ. Năm in của bản dịch chưa chắc (thư mục Thư viện Quốc hội Mỹ ghi [1791?]); chi tiết ở bài đầu tiên.
- Trình tự các phần bám theo trình tự của Fux: đối âm hai bè qua **năm loại** trên cantus firmus, rồi ba bè, bốn bè, mô phỏng, fugue, đối âm kép, fugue nhiều chủ đề, đáp đề và phong cách *a cappella*.
- Mỗi loại có hai lớp bài: **bài luyện tập** (quy tắc, ví dụ đã kiểm, quy trình viết theo các giáo trình hiện đại) và **bài nguyên văn** (những gì chính Fux nói, kể cả chỗ khác giáo trình hiện đại — ghi rõ trong bài).
- Phương pháp của trường phái Nga – Việt Nam (Taneyev) là một cuốn riêng: *Phức Điệu Nghiêm Khắc*.

## Cách đọc
1. Cần nắm trước: quãng, quãng đảo, thuận – nghịch, điệu thức — tức là hai quyển *Nhạc Lý Cơ Bản*.
2. **Đi đúng thứ tự các loại**; mỗi loại viết ít nhất hai bài: đối âm ở trên và ở dưới cantus.
3. **Hát một bè, chơi bè kia trên đàn** — Fux luôn đặt giai điệu đẹp lên trên quy tắc.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: Fux và phong cách Palestrina',
        intro: 'Cuốn Gradus ad Parnassum (1725), bản dịch Anh thế kỷ 18 mà sách này đọc theo, thuật ngữ cổ – hiện đại; đối âm là gì, phương pháp năm loại ra đời và được truyền lại thế nào; và phong cách Palestrina — mẫu mực mà Fux muốn học trò đạt tới.',
        chapters: [
          { slug: 'he-thong-fux-gradus-ad-parnassum', focus: 'Nguồn, ấn bản, cấu trúc năm chương; thuật ngữ cổ – hiện đại; các mốc của truyền thống; lộ trình.' },
          { slug: 'doi-am', focus: 'Đối âm là gì: tên gọi, lịch sử, các kiểu chuyển động.' },
          { slug: 'doi-am-5-loai', focus: 'Bối cảnh lịch sử của phương pháp năm loại và vì sao nó sống ba thế kỷ.' },
          { slug: 'phong-cach-palestrina', focus: 'Phong cách thật của thế kỷ 16 mà Fux lấy làm mẫu, theo Jeppesen.' },
        ],
        exercises: [
          'Lập bảng thuật ngữ của bản dịch thế kỷ 18 (concord, discord, minum, crotchet, mi against fa, formal cadence…) với nghĩa hiện nay và tiếng Việt, rồi tự kiểm lại bằng bài mở đầu.',
          'Nghe một Kyrie của Palestrina, ghi lại năm đặc điểm giai điệu (liền bậc, bước nhảy có bù, đỉnh duy nhất…) mà sách sẽ biến thành quy tắc.',
        ],
      },
      {
        title: 'Đối âm hai bè: năm loại',
        intro: 'Chương I của Fux: quãng và chuyển động, cantus firmus, sáu quy tắc chung, rồi năm loại đối âm hai bè trên cantus firmus — nốt chọi nốt, hai nốt, bốn nốt, nối lệch phách, hoa mỹ — đúng con đường mà Haydn, Mozart, Beethoven đã đi.',
        chapters: [
          { slug: 'quang-va-chuyen-dong-doi-am', focus: 'Phân loại quãng, bốn kiểu chuyển động, quãng 5/8 song song và ẩn.' },
          { slug: 'cantus-firmus', focus: 'Viết và kiểm tra giai điệu cho sẵn.' },
          { slug: 'quy-tac-chung-fux', focus: 'Sáu quy tắc chung của Fux; ba điểm của đối âm nốt chọi nốt; nốt áp chót 6 trưởng – 3 thứ.' },
          { slug: 'doi-am-loai-1', focus: 'Luyện loại 1: mở bài, đoạn giữa, kết; quy trình viết từng bước.' },
          { slug: 'doi-am-loai-2', focus: 'Luyện loại 2: nốt lướt ở phách nhẹ, bước nhảy chỉ giữa thuận âm.' },
          { slug: 'doi-am-loai-3', focus: 'Luyện loại 3: bốn nốt đen, nốt thêu, nota cambiata.' },
          { slug: 'doi-am-loai-4', focus: 'Luyện loại 4: chuẩn bị – treo – giải quyết; các nốt treo được phép.' },
          { slug: 'doi-am-loai-5', focus: 'Luyện loại 5: trộn bốn loại, cặp móc đơn, trang trí nốt treo.' },
          { slug: 'nam-loai-hai-be-fux', focus: 'Những gì Fux nói thêm ở từng loại: ô áp chót, nhịp ba, lấp quãng 3, nốt treo là sự trì hoãn của thuận âm.' },
        ],
        exercises: [
          'Trên cantus Dorian của Fux (D – F – E – D – G – F – A – G – F – E – D), viết đủ năm loại, mỗi loại hai lần: đối âm ở trên và ở dưới.',
          'Với mỗi bài loại 4, bỏ hết dấu nối rồi kiểm chuỗi thuận âm còn lại — đúng như cách Fux chứng minh nốt treo chỉ là sự trì hoãn.',
          'Tìm và sửa mọi quãng 5 / 8 ẩn trong các bài đã làm bằng cách điền nốt trung gian vào các bước nhảy cùng chiều.',
        ],
      },
      {
        title: 'Ba và bốn bè',
        intro: 'Fux coi ba bè là kết cấu hoàn hảo nhất vì chứa trọn hợp âm ba; bè thứ tư chỉ là bè nhân đôi. Phần này đi qua năm loại ở ba bè (cantus lần lượt ở bè trên, giữa, dưới) và ở bốn bè: chọn nốt nhân đôi, thứ tự quãng 5 dưới – quãng 3 trên, đi kèm nốt treo, những ngoại lệ Fux tự giải thích.',
        chapters: [
          { slug: 'doi-am-ba-be-fux', focus: 'Hợp âm ba ở mỗi ô; chừa chỗ cho chuyển động ngược chiều; từng loại ở ba bè; quãng 5 được che bởi nốt treo chỉ ở bè giữa.' },
          { slug: 'doi-am-bon-be-fux', focus: 'Bè nhân đôi; phép chia điều hoà; thuận âm đi kèm giữ nguyên khi giải quyết; nhân đôi quãng 2 hơn quãng 4.' },
        ],
        exercises: [
          'Viết loại 1 ba bè trên cantus Dorian ba lần — cantus ở bè trên, giữa, dưới — và đánh dấu những ô không đủ hợp âm ba, kèm lý do.',
          'Viết loại 4 bốn bè trên cùng cantus; ở mỗi nốt treo, ghi thuận âm đi kèm và kiểm nó còn nguyên khi giải quyết.',
        ],
      },
      {
        title: 'Mô phỏng, fugue và đối âm kép',
        intro: 'Nửa sau sách của Fux: mô phỏng và luật giọng của fugue, phương pháp viết fugue hai bè theo từng bước, bè thứ ba – thứ tư và các loại kết, đối âm kép ở quãng 8, 10, 12 cùng hai kiểu đảo ngược chiều, fugue có đối đề và nhiều chủ đề, quy tắc đáp đề, trang trí và phong cách a cappella.',
        chapters: [
          { slug: 'mo-phong-va-fugue-hai-be-fux', focus: 'Mô phỏng và fugue khác nhau thế nào; giọng giới hạn bởi quãng 5 và quãng 4; sáu bước viết fugue hai bè.' },
          { slug: 'fugue-ba-bon-be-fux', focus: 'Đưa bè thứ ba vào bằng hợp âm ba hay nốt treo; kết chính thức, kết giả, tránh kết; thứ tự vào bè bốn bè.' },
          { slug: 'doi-am-kep-fux', focus: 'Bảng đổi quãng và quy tắc ở quãng 8, 10, 12; biến hai bè thành trio, quatuor; đảo ngược chiều đơn và nghiêm.' },
          { slug: 'doi-am-kep', focus: 'Đối âm kép và canon trong nhạc Bach — nơi các quy tắc của Fux trở thành tác phẩm.' },
          { slug: 'fugue-doi-de-va-nhieu-chu-de-fux', focus: 'Đối đề đổi chỗ ở quãng 8; fugue trên cantus firmus; chủ đề cromatic; fugue ba chủ đề.' },
          { slug: 'dap-de-va-trang-tri-fux', focus: 'Bốn quy tắc đáp đề; giai điệu trọng hơn giọng; diminution, nốt sớm; nốt treo theo nhịp; stile a cappella.' },
          { slug: 'fugue', focus: 'Fugue sau Fux: cấu trúc trình bày – đoạn nối – stretto và các kiệt tác của Bach, Beethoven, Shostakovich.' },
        ],
        exercises: [
          'Viết một fugue hai bè ở giọng Rê theo đúng sáu bước của Fux: kết thứ nhất ở bậc V, thứ hai ở bậc III, stretto sau một ô rồi kết cuối.',
          'Viết 8 ô đối âm kép ở quãng 8 (tránh quãng 5, không nhảy vào quãng 8), đảo lại và kiểm; rồi thử biến thành trio bằng cách thêm bè dịch xuống quãng 10.',
          'Đảo ngược chiều nghiêm một giai điệu Đô trưởng theo bảng C ↔ E, D ↔ D, F ↔ B; so với đảo ngược chiều đơn và nhận xét giai điệu nào hay hơn.',
          'Lập đáp đề cho ba chủ đề ở giọng Rê: một chủ đề mở bằng bước nhảy Rê – La, một chủ đề mở bằng La – Rê, một chủ đề cromatic — áp dụng bốn quy tắc đáp đề.',
        ],
      },
      {
        title: 'Tra cứu',
        intro: 'Toàn bộ quy tắc của phương pháp năm loại trên một trang, để mở lại khi làm bài.',
        chapters: [
          { slug: 'cong-thuc-doi-am-fux', focus: 'Bảng quãng, ma trận chuyển động, từng loại, nốt treo, đảo ở quãng 8 – 10 – 12, mười hai câu kiểm tra.' },
        ],
        exercises: [
          'Dùng mười hai câu kiểm tra để rà lại mọi bài tập đã làm trong sách.',
          'Viết từ đầu một bài loại 5 trên cantus mới, chỉ nhìn bảng tra, rồi so với các quy tắc nguyên văn ở Phần II.',
        ],
      },
    ],
  },
  {
    id: 'albrechtsberger',
    title: 'Bass Đi Liên Tục, Hoà Âm và Sáng Tác',
    volume: 'J. G. Albrechtsberger',
    subtitle: 'Tuyển tập ba tập của Albrechtsberger do học trò Seyfried biên tập, dùng để tự học: bass liên tục và hoà âm, năm loại sáng tác nghiêm khắc từ hai đến năm bè, mô phỏng, fugue, đối âm kép, canon, cùng phụ lục về phong cách, nhạc cụ và đọc tổng phổ.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · đọc được khoá Sol và khoá Fa',
    hue: 40,
    glyph: '𝄢',
    coverImage: albrechtsbergerCover,
    preface: `
**Johann Georg Albrechtsberger** (1736 – 1809), nghệ sĩ organ cung đình và nhạc trưởng nhà thờ St. Stephen ở Vienna, là thầy dạy đối âm của Beethoven và Hummel. Cuốn sách này đọc theo tuyển tập ba tập các bài viết của ông, do học trò **Ignaz von Seyfried** biên tập, theo bản dịch Anh của Sabilla Novello (London, 1855).

## Hệ thống của sách
- **Phần I – IV** theo Tập I của bộ sách: bass liên tục và hoà âm — quãng, hợp âm, chuyển động, nghịch âm, quãng ngầm định của từng chữ số, đệm trên bàn phím, sáu tiến hành nguy hiểm, hoà âm thuần khiết, chuyển giọng và kết. Theo lời tựa, Tập I phần lớn do **Seyfried** soạn.
- **Phần V – VIII** theo Tập II và III, là bản thảo của **chính Albrechtsberger**: năm loại sáng tác nghiêm khắc theo phương pháp của Fux ở hai, ba, bốn, năm bè, lối tự do, mô phỏng, đảo, fugue, đối âm kép ở quãng 8 – 10 – 12, fugue kép và canon.
- **Phần IX** là phụ lục về phong cách, nhạc cụ và đọc tổng phổ — chủ yếu lời người biên tập. **Phần X** để tra nhanh.
- Mọi quy tắc ghi theo sách, kèm số trang. Chỗ bản in tự mâu thuẫn, in nhầm, thiếu trang hay OCR chưa đọc chắc đều ghi rõ trong bài.
- Đây là một hệ riêng: không trộn với *Hoà Âm Cổ Điển* (trường phái Nga – Xô viết) hay *Những Bước Lên Đỉnh Parnassus* (Fux), chỉ có liên kết để đối chiếu.

## Cách đọc
1. Học Phần I – IV **trên bàn phím**: mỗi bảng chữ số, mỗi luật nhân đôi phải được chơi ở mọi giọng, như sách dặn.
2. Phần V – VIII học như sách gốc: viết trên một chorale, mỗi loại cả đối âm trên lẫn dưới, tự chấm lỗi theo các danh sách lỗi của Albrechtsberger.
3. Đừng ngại những chỗ sách khác cách dạy hiện nay (mọi quãng 4 là nghịch, hợp âm 11 – 13 trên chủ âm, "kết ngắt" và "kết đánh lừa"…): bài nào cũng chỉ ra chỗ khác và dẫn sang bài tương ứng của thư viện.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: bộ sách và người viết',
        intro: 'Bộ sách ba tập ra đời thế nào, ai viết phần nào, cấu trúc và thuật ngữ cổ của bản dịch 1855, tiểu sử Albrechtsberger theo lời sách, và chỗ đứng của ông trong dòng hoà âm Vienna.',
        chapters: [
          { slug: 'he-thong-albrechtsberger', focus: 'Ấn bản, lời tựa của Seyfried, ba tập, thuật ngữ, tiểu sử, lộ trình.' },
          { slug: 'hoa-am-truong-phai-phuong-tay', focus: 'Albrechtsberger trong dòng Vienna: từ bass số đến lý thuyết bậc và sách giáo khoa Mỹ.' },
        ],
        exercises: [
          'Lập bảng thuật ngữ của bản dịch 1855 (thorough-bass, grade, fundamental note, common chord, changing note, class, Inganni…) với nghĩa trong loạt bài, rồi tự kiểm bằng bài mở đầu.',
          'Tóm tắt trong năm câu: phần nào của bộ sách là của Albrechtsberger, phần nào của Seyfried, và vì sao điều đó quan trọng khi trích dẫn.',
        ],
      },
      {
        title: 'Quãng, hợp âm và nghịch âm',
        intro: 'Tập I, §I – XIII và §LVIII – LXI: quãng và các loại, thuận – nghịch, hợp âm hoàn toàn, không hoàn toàn và nghịch, năm loại hợp âm chính, chỗ ngồi của hợp âm trong giọng; bốn kiểu chuyển động, luật nối hợp âm, ba cách dùng nghịch âm, nốt treo và nghịch âm không chuẩn bị.',
        chapters: [
          { slug: 'quang-va-hop-am-albrechtsberger', focus: 'Quãng, thuận – nghịch, quãng 4 thuận và nghịch, hợp âm 7 – 9 – 11 – 13 sinh bằng nốt thêm phía dưới.' },
          { slug: 'chuyen-dong-va-nghich-am-albrechtsberger', focus: 'Sáu luật nối hợp âm; nốt lướt, nốt đổi, nốt treo; chuẩn bị – đánh – giải quyết; anticipation.' },
        ],
        exercises: [
          'Viết và chơi hợp âm 9, 11, 13 theo đúng cách sách sinh ra chúng (thêm nốt quãng 3, 5, 7 dưới hợp âm 7) ở ba giọng; ghi nốt nào thường bị bỏ khi đệm bốn bè.',
          'Với mỗi nghịch âm 2, 4, 4 tăng, 5 giảm, 7, 7 trưởng có quãng 4, 9: chỉ ra nốt nào là nốt nghịch và nó giải quyết đi đâu, rồi chơi trên đàn.',
        ],
      },
      {
        title: 'Bass liên tục trên bàn phím',
        intro: 'Tập I, phần thực hành: quãng ngầm định của từng chữ số và cách ghi số, hợp âm ba ở ba vị trí, nhân đôi, đệm âm giai, số hợp âm mỗi ô, sáu tiến hành nguy hiểm, hợp âm 7 và các dẫn xuất, bài tập và đệm chia hai tay.',
        chapters: [
          { slug: 'bass-so-albrechtsberger', focus: 'Bảng một số và hai số; từng chữ số; dấu ghi; đường cong Telemann.' },
          { slug: 'dem-bass-so-albrechtsberger', focus: 'Ba vị trí, bốn luật nối hợp âm ba, nhân đôi, đệm âm giai, hợp âm mỗi ô, đệm chia hai tay.' },
          { slug: 'sau-tien-hanh-nguy-hiem', focus: 'Sáu chỗ dễ phạm quãng 5 – 8 liền và cách sửa; nối hợp âm 7 và các dẫn xuất.' },
        ],
        exercises: [
          'Đệm âm giai Đô trưởng và La thứ đi lên, đi xuống theo bảng số của sách, ở cả ba vị trí, rồi dịch sang Sol trưởng, Rê thứ, Fa trưởng.',
          'Tự viết một bè bass số 12 ô có đủ sáu tiến hành nguy hiểm, đệm sai từng chỗ rồi sửa theo cách sách chỉ.',
          'Chơi một câu bass số theo kiểu đệm thường rồi theo kiểu đệm chia hai tay ở ba vị trí hoà âm rải.',
        ],
      },
      {
        title: 'Hoà âm thuần khiết, chuyển giọng và kết',
        intro: 'Tập I, §LXXXIV – CXXIV: hoà âm thuần khiết không có quãng 4 thuận, chỗ ngồi và cách dùng mọi quãng tăng – giảm; chuyển giọng sang năm giọng họ hàng và mọi giọng qua hợp âm 7 giảm; bốn loại kết và các kết đánh lừa Inganni.',
        chapters: [
          { slug: 'hoa-am-thuan-khiet-albrechtsberger', focus: 'Vì sao loại quãng 4 thuận; cách xếp hợp âm; bảng quãng tăng – giảm.' },
          { slug: 'chuyen-giong-va-ket-albrechtsberger', focus: 'Năm giọng họ hàng; các con đường chuyển giọng; kết hoàn toàn, không hoàn toàn, ngắt, đánh lừa.' },
        ],
        exercises: [
          'Viết một thánh ca bốn bè 8 ô bằng hoà âm thuần khiết: kiểm từng hợp âm để không có quãng 4 nào giữa các bè trên.',
          'Từ hợp âm Đô trưởng, chuyển sang 6 giọng khác nhau bằng hợp âm 7 giảm và các dạng trùng âm của nó; chơi trên đàn.',
          'Viết ba kết đánh lừa từ Đô trưởng, mỗi kết qua một loại hợp âm khác nhau theo bảng của sách.',
        ],
      },
      {
        title: 'Sáng tác nghiêm khắc hai bè',
        intro: 'Tập II, §CXXVI – CXXXVII — phần chính tay Albrechtsberger viết: điệu thức và giọng, lối nghiêm khắc (stilo alla capella) và lối tự do, rồi năm loại trên chorale với mười luật của loại 1 và các bài mẫu được chấm từng lỗi.',
        chapters: [
          { slug: 'nen-tang-sang-tac-albrechtsberger', focus: 'Thuận – nghịch, chuyển động, điệu thức, giọng gần, âm giai bè nền, nghiêm khắc và tự do.' },
          { slug: 'nam-loai-hai-be-albrechtsberger', focus: 'Mười luật loại 1; loại 2 – 5; nốt đổi của Fux; nốt treo dài – ngắn; những chỗ khác Fux.' },
        ],
        exercises: [
          'Trên một chorale 10 – 12 nốt ở Đô trưởng, viết đủ năm loại, mỗi loại cả đối âm trên và dưới; tự chấm theo mười luật và các danh sách lỗi của sách.',
          'Viết lại một bài loại 1 ở Mi thứ, đánh dấu mọi chỗ Mi contra Fa có thể xảy ra và cách tránh.',
        ],
      },
      {
        title: 'Ba, bốn và năm bè',
        intro: 'Tập II, §CXXXVIII – CXLVII: quãng đi kèm mỗi quãng, năm loại ở ba và bốn bè, bảng đi kèm từng nốt treo, Quarta fundata, chuyển từ lối nghiêm khắc sang lối tự do, và luật nhân đôi khi viết năm bè.',
        chapters: [
          { slug: 'ba-be-albrechtsberger', focus: 'Bảng quãng đi kèm; quãng ẩn được phép; loại 1 – 5 ở ba bè; hợp âm 6/4 rải.' },
          { slug: 'bon-va-nam-be-albrechtsberger', focus: 'Đối âm đều – không đều; Quarta fundata; nốt treo 9, 7, 4, 2 bốn bè; lối tự do; năm bè.' },
        ],
        exercises: [
          'Viết loại 1 và loại 4 ba bè trên cùng chorale, đặt chorale lần lượt ở bè trên, giữa, dưới.',
          'Viết loại 5 bốn bè, rồi viết lại ở lối tự do với ít nhất một nghịch âm không chuẩn bị và một đoạn cromatic, ghi rõ giấy phép nào được dùng.',
        ],
      },
      {
        title: 'Mô phỏng, đảo và fugue',
        intro: 'Tập II, §CXLVIII – CLI: mô phỏng ở mọi quãng và bảy mô phỏng khoa học, bốn loại đảo, rồi fugue — thuật ngữ, đáp đề với bảng đổi quãng, kế hoạch fugue hai bè, luật cho ba bè trở lên, trang trí chủ đề, thứ tự vào bè, ricercata.',
        chapters: [
          { slug: 'mo-phong-va-dao-albrechtsberger', focus: 'Tám mô phỏng đơn; bảy mô phỏng khoa học; đảo đơn, nghiêm, ngược dòng, ngược dòng ngược chiều.' },
          { slug: 'fugue-albrechtsberger', focus: 'Dux – Comes, đáp đề, kế hoạch hai bè, kết đánh lừa trước bè thứ ba, trang trí, thứ tự vào bè.' },
          { slug: 'fugue', focus: 'Fugue sau Albrechtsberger: cấu trúc và kiệt tác của Bach, Beethoven, Shostakovich.' },
        ],
        exercises: [
          'Lấy một chủ đề 4 ô, viết các dạng đảo đơn, đảo nghiêm (bắt đầu trên quãng 7, 6, 3 trưởng), ngược dòng và ngược dòng ngược chiều; giải thích vì sao chủ đề có nốt chấm dôi không hợp với hai dạng sau.',
          'Viết một fugue hai bè ở Fa trưởng theo đúng sáu bước của sách: nửa kết ở V, nửa stretto, nửa kết ở III, stretto, kết.',
          'Lập đáp đề cho ba chủ đề dùng bảng bảy cách đổi quãng.',
        ],
      },
      {
        title: 'Đối âm kép, fugue kép và canon',
        intro: 'Tập III, §CLII – CLVII: fugue trên chorale; đối âm kép ở quãng 8, 10, 12 với các luật và cách thêm bè; fugue hai, ba, bốn chủ đề với đối âm ba – bốn lần; canon — "mô phỏng nghiêm nhất" — từ hai bè đến Inventio ba bè và canon câu đố.',
        chapters: [
          { slug: 'fugue-chorale-va-doi-am-kep-albrechtsberger', focus: 'Fugue chorale; bảng đảo và luật của đối âm kép ở quãng 8, 10, 12.' },
          { slug: 'fugue-kep-va-canon-albrechtsberger', focus: 'Bốn luật đối âm ba lần; các cách đổi chỗ; các loại canon; viết Inventio; ghi canon bằng số.' },
        ],
        exercises: [
          'Viết 8 ô đối âm kép ở quãng 8 theo bốn luật, đảo lại và kiểm; rồi thêm quãng 3 song song để thành ba bè và ghi những chỗ hỏng.',
          'Thử cùng một bài hai bè ở quãng 10 và quãng 12: đánh dấu mọi quãng 3, 6 liền (cấm ở quãng 10) và mọi quãng 6 vào bằng bước nhảy (cấm ở quãng 12).',
          'Viết một Inventio ba bè cùng khoá rồi chuyển thành canon đồng âm vô hạn, có dấu nhắc đúng chỗ.',
        ],
      },
      {
        title: 'Phụ lục: phong cách, nhạc cụ, tổng phổ',
        intro: 'Phụ lục Tập III, phần lớn là lời người biên tập Seyfried: ba phong cách nhà thờ, thính phòng, sân khấu; mô tả nhạc cụ đầu thế kỷ 19; hướng dẫn chơi tổng phổ trên đàn phím và học phối khí.',
        chapters: [
          { slug: 'phu-luc-albrechtsberger', focus: 'Ba phong cách và lạm dụng trong nhạc nhà thờ; nhạc cụ, khoá, kèn chuyển giọng; thứ tự tổng phổ.' },
        ],
        exercises: [
          'Chọn một tổng phổ cổ điển ngắn (một chương Mozart hay Haydn), xếp lại thứ tự nhạc cụ theo đề xuất của sách và rút gọn 8 ô cho piano theo các lời dặn.',
          'So sánh mô tả của sách về viola, trombone, clarinet với sách phối khí hiện đại; ghi ba điểm đã thay đổi.',
        ],
      },
      {
        title: 'Tra cứu',
        intro: 'Các luật chính của cả ba tập trên một trang, kèm số trang để mở lại sách gốc.',
        chapters: [
          { slug: 'tra-cuu-albrechtsberger', focus: 'Bảng luật hoà âm, bass số, năm loại, fugue, đối âm kép và thuật ngữ.' },
        ],
        exercises: [
          'Dùng bảng tra để chấm lại mọi bài tập đã làm trong sách.',
          'Tự viết một bảng so sánh: những chỗ Albrechtsberger nói rõ là khác Fux, và những chỗ ông giữ nguyên.',
        ],
      },
    ],
  },
  {
    id: 'hinh-thuc-am-nhac',
    title: 'Hình Thức Âm Nhạc',
    volume: 'Trường phái Nga – Xô viết',
    subtitle: 'Hình thức và phân tích tác phẩm gộp từ bốn sách: Sposobin, Mazel, Asafyev và Sokolov — từ phương tiện âm nhạc, cấu trúc, chức năng các phần, nguyên tắc phát triển, qua đoạn nhạc, hai – ba đoạn, biến tấu, rondo, sonata, chu kỳ, thanh nhạc, đến fugue, ngữ điệu và hình thức thế kỷ XX.',
    author: 'Lamar',
    audience: 'Đã học Nhạc Lý Cơ Bản và hoà âm cơ bản',
    hue: 18,
    glyph: '𝄐',
    coverImage: formCover,
    preface: `
Cuốn này dạy **hình thức âm nhạc và phân tích tác phẩm** theo truyền thống các nhạc viện Nga – Xô viết, truyền thống mà các nhạc viện Việt Nam tiếp nhận. Thay vì đọc riêng từng sách, cuốn sách **gộp ba sách nền theo chủ đề**, thêm một sách về âm nhạc thế kỷ XX:

| Sách | Đóng góp |
|---|---|
| **I. Sposobin**, *Музыкальная форма* (1947; bản 1984) | Hệ thống thuật ngữ và định nghĩa; trình tự từ đoạn nhạc tới fugue |
| **L. Mazel**, *Строение музыкальных произведений* (1960; bản 1979) | Hình thức gắn với ý nghĩa biểu hiện; phương pháp phân tích tổng thể |
| **B. Asafyev**, *Музыкальная форма как процесс* (1930 / 1947; bản 1971) | Hình thức là quá trình; i:m:t; đồng nhất và tương phản; ngữ điệu |
| **A. Sokolov**, *Введение в музыкальную композицию XX века* (2004) | Hình thức và sáng tác thế kỷ XX: kỹ thuật, văn bản, chủ đề; phân tích Webern, Ives, Denisov, Riley |

## Cấu trúc sách
Mỗi bài là một bài của thư viện Lý thuyết (giữ nguyên đường dẫn), viết như một chương giáo khoa: định nghĩa, giải thích, các dạng, ví dụ tác phẩm mà các sách dẫn, mục **"Ba sách nói gì — đối chiếu"**, **cách phân tích** và **bài tập**. Trích dẫn ghi rõ sách, chương, mục.

## Cách đọc
1. Phần I – II là **công cụ**: đọc kỹ trước khi sang các hình thức.
2. Mỗi hình thức: đọc, rồi **phân tích trên bản nhạc thật** các tác phẩm trong bài tập, nghe bản thu.
3. Đọc lại Phần I sau khi xong cuốn sách.
`,
    parts: [
      { title: 'Nền tảng', intro: 'Hình thức là gì, các phương tiện âm nhạc tạo ra hình thức thế nào, và phân tích một tác phẩm theo phương pháp tổng thể.', chapters: [
        { slug: 'hinh-thuc-va-phan-tich-truong-phai-nga', focus: 'Ba cuốn sách và vị trí của chúng.' },
        { slug: 'hinh-thuc-nga-khai-niem', focus: 'Nội dung và hình thức; quá trình và kết tinh.' },
        { slug: 'hinh-thuc-nga-phuong-tien', focus: 'Giai điệu, hoà âm, tiết tấu và vai trò tạo hình thức.' },
        { slug: 'hinh-thuc-nga-tac-dong-va-phan-tich', focus: 'Nguyên tắc tác động nghệ thuật; phân tích tổng thể.' },
      ], exercises: ['Chọn một bài hát quen thuộc, mô tả hình thức theo nghĩa hẹp (bố cục) và theo nghĩa rộng (các phương tiện tạo tính chất).', 'Tìm trong một tác phẩm piano một chỗ minh hoạ nguyên tắc tác động nhiều mặt và tập trung.'] },
      { title: 'Cấu trúc và các nguyên tắc', intro: 'Công cụ để đọc mọi hình thức: phân đoạn, chức năng các phần, kiểu trình bày, nguyên tắc phát triển.', chapters: [
        { slug: 'hinh-thuc-nga-phan-doan-cau-truc', focus: 'Cezura, cấu trúc, tổng hợp và chia nhỏ.' },
        { slug: 'hinh-thuc-nga-chuc-nang-kieu-trinh-bay', focus: 'Sáu chức năng, bốn kiểu trình bày, i:m:t.' },
        { slug: 'hinh-thuc-nga-nguyen-tac-phat-trien', focus: 'Lặp lại, biến tấu, phát triển, tương phản.' },
      ], exercises: ['Đánh dấu cezura và các cấu trúc trong 16 ô đầu một sonata của Mozart.', 'Xác định kiểu trình bày (trình bày, giữa, kết) của từng phần trong một hình thức ba đoạn.'] },
      { title: 'Các hình thức chủ điệu nhỏ', intro: 'Đoạn nhạc, hai đoạn và ba đoạn đơn, ba đoạn phức — nền của mọi hình thức lớn.', chapters: [
        { slug: 'hinh-thuc-nga-doan-nhac', focus: 'Đoạn nhạc và các dạng phức tạp; dân ca Nga.' },
        { slug: 'hinh-thuc-nga-hinh-thuc-don', focus: 'Hai đoạn, ba đoạn đơn.' },
        { slug: 'hinh-thuc-nga-ba-phan-phuc', focus: 'Ba đoạn phức, trio và episode.' },
      ], exercises: ['Phân tích ba bài trong Album cho tuổi trẻ của Schumann hoặc Tchaikovsky: đoạn nhạc, hai đoạn hay ba đoạn?', 'Vẽ sơ đồ một minuet có trio, ghi số ô và giọng từng phần.'] },
      { title: 'Các hình thức chủ điệu lớn', intro: 'Biến tấu, rondo, sonata, rondo – sonata và các tiền thân cổ.', chapters: [
        { slug: 'hinh-thuc-nga-bien-tau', focus: 'Các loại biến tấu; kiểu Glinka.' },
        { slug: 'hinh-thuc-nga-rondo', focus: 'Rondo cổ, rondo cổ điển, hình thức giống rondo.' },
        { slug: 'hinh-thuc-nga-sonata', focus: 'Phần trình bày, phát triển, tái hiện, coda; các biến thể.' },
        { slug: 'hinh-thuc-nga-rondo-sonata', focus: 'Rondo có phần phụ quan hệ như sonata.' },
        { slug: 'hinh-thuc-nga-sonata-co-va-hai-phan-co', focus: 'Hai đoạn cổ, sonata cổ, sự ra đời của tái hiện trọn.' },
      ], exercises: ['Phân tích chương I một sonata của Haydn hoặc Mozart: ghi ranh giới các phần, giọng, chất liệu.', 'So sánh một rondo và một rondo – sonata của Beethoven.'] },
      { title: 'Chu kỳ, hình thức hỗn hợp, thanh nhạc', intro: 'Tác phẩm nhiều chương, hình thức tự do một chương, hình thức thanh nhạc và opera.', chapters: [
        { slug: 'hinh-thuc-nga-chu-ky', focus: 'Tổ khúc, chu kỳ sonata – giao hưởng.' },
        { slug: 'hinh-thuc-nga-hon-hop-va-ghep-tuong-phan', focus: 'Hình thức hỗn hợp; hình thức ghép tương phản.' },
        { slug: 'hinh-thuc-nga-thanh-nhac', focus: 'Đọc nhạc lời ca; opera; romance.' },
      ], exercises: ['Lập bảng tiến độ, giọng, hình thức từng chương của một sonata bốn chương.', 'Phân tích một romance: hình thức và quan hệ lời – nhạc.'] },
      { title: 'Phức điệu và ngữ điệu', intro: 'Các hình thức phức điệu, và học thuyết ngữ điệu của Asafyev như cách nhìn lịch sử hình thức.', chapters: [
        { slug: 'hinh-thuc-nga-phuc-dieu', focus: 'Mô phỏng, canon, đối âm phức, fugue.' },
        { slug: 'hinh-thuc-nga-ngu-dieu', focus: 'Ngữ điệu, từ điển ngữ điệu, khủng hoảng ngữ điệu.' },
      ], exercises: ['Phân tích phần trình bày một fugue trong Bình quân luật: chủ đề, câu đáp, phản đề, ranh giới.', 'Viết một đoạn ngắn: vì sao một hình thức (ví dụ sonata) "kết tinh" ở một thời kỳ lịch sử, theo Asafyev.'] },
      { title: 'Hình thức và sáng tác thế kỷ XX', intro: 'Theo Sokolov (2004): truyền thống và cách tân, kỹ thuật sáng tác, vấn đề văn bản, phạm trù hình thức và chủ đề trong âm nhạc thế kỷ XX, và các bài phân tích tác phẩm.', chapters: [
        { slug: 'hinh-thuc-nga-xx-truyen-thong-va-van-hoa', focus: 'Truyền thống – cách tân; các vectơ văn hoá; loại hình sáng tác.' },
        { slug: 'hinh-thuc-nga-xx-ly-thuyet-va-ky-thuat', focus: 'Lý thuyết và thực hành; kỹ thuật sáng tác hiện đại.' },
        { slug: 'hinh-thuc-nga-xx-van-ban', focus: 'Mở rộng khái niệm văn bản; ký âm; đa phong cách.' },
        { slug: 'hinh-thuc-nga-xx-hinh-thuc-va-chu-de', focus: 'Phạm trù hình thức và chủ đề trong thế kỷ XX.' },
        { slug: 'hinh-thuc-nga-xx-phan-tich-tac-pham', focus: 'Schnittke, Denisov, Riley, Ives, Webern.' },
        { slug: 'hinh-thuc-nga-lo-trinh', focus: 'Ôn lại toàn bộ lộ trình.' },
      ], exercises: ['Nghe Webern op. 7 số 3 và Ives The Unanswered Question; so sánh cách mỗi tác phẩm tạo ra hình thức.', 'Viết một đoạn ngắn: khái niệm chủ đề của Sposobin còn dùng được tới đâu với âm nhạc thế kỷ XX, theo Sokolov.'] },
    ],
  },
  {
    id: 'neuhaus',
    title: 'Nghệ Thuật Chơi Piano',
    volume: 'Heinrich Neuhaus',
    subtitle: 'Đọc kỹ cuốn sách sư phạm piano kinh điển của người thầy của Richter và Gilels: hình tượng nghệ thuật, nhịp điệu, âm sắc, kỹ thuật, ngón bấm, pedal, quan hệ thầy – trò và đời sống biểu diễn.',
    author: 'Lamar',
    audience: 'Học viên piano từ trung cấp, giáo viên piano',
    hue: 160,
    glyph: '𝄞',
    coverImage: neuhausCover,
    preface: `
**Heinrich Neuhaus** (1888 – 1964) dạy piano ở Nhạc viện Moskva gần nửa thế kỷ; học trò của ông có Sviatoslav Richter, Emil Gilels và nhiều thế hệ nghệ sĩ, giáo viên Xô viết. Cuốn *Об искусстве фортепианной игры* (1958) là những ghi chép của ông về nghề dạy và nghề chơi đàn. Sách này đọc theo bản dịch tiếng Anh *The Art of Piano Playing* (K. A. Leibovitch; Kahn & Averill, 1993), giữ đúng trình tự chương mục của Neuhaus.

## Tinh thần của sách
Neuhaus đặt **âm nhạc lên trước hết**: người chơi phải hiểu và cảm được hình tượng nghệ thuật của tác phẩm, rồi mới tìm phương tiện — nhịp điệu, âm sắc, kỹ thuật — để thể hiện nó. Kỹ thuật, theo ông, là phương tiện tìm ra từ chính yêu cầu của âm nhạc, không phải mục đích tự thân.

## Cách đọc
1. Đọc theo thứ tự: bốn phần đi từ hình tượng, qua thời gian và âm thanh, tới kỹ thuật, rồi người thầy và người nghệ sĩ.
2. Mỗi bài có **Cách luyện tập theo Neuhaus** và **Câu hỏi và bài tập**: làm trên đàn, với đúng các tác phẩm sách nhắc tới.
3. Ví dụ nhạc lấy từ cuốn sách, đặt cạnh đoạn văn nói tới nó.
`,
    parts: [
      { title: 'Mở đầu', intro: 'Neuhaus là ai, vì sao ông viết cuốn sách, và điều quan trọng nhất: hình tượng nghệ thuật.', chapters: [
        { slug: 'neuhaus-lo-trinh', focus: 'Lộ trình bộ bài.' },
        { slug: 'neuhaus-loi-tua-va-tieu-su', focus: 'Tiểu sử; lời tựa; "Thay lời tựa".' },
        { slug: 'neuhaus-hinh-tuong-nghe-thuat', focus: 'Hình tượng nghệ thuật của tác phẩm âm nhạc.' },
      ], exercises: ['Chọn một bài đang tập, viết một đoạn ngắn về hình tượng của nó trước khi chơi, rồi chơi lại và so sánh.'] },
      { title: 'Thời gian và âm thanh', intro: 'Nhịp điệu là đời sống của âm nhạc trong thời gian; âm sắc là chất liệu của nó.', chapters: [
        { slug: 'neuhaus-nhip-dieu', focus: 'Nhịp điệu và nhịp; rubato; các lỗi tiết tấu thường gặp.' },
        { slug: 'neuhaus-am-sac', focus: 'Âm sắc, nghe chính mình, các tầng âm thanh.' },
      ], exercises: ['Ghi âm một bài có rubato; đo xem tổng thời gian có giữ được nhịp độ nền không.', 'Chơi một hợp âm với ba tầng cường độ khác nhau giữa các bè.'] },
      { title: 'Kỹ thuật', intro: 'Sự tự tin, sự tự do, hệ vận động và các yếu tố kỹ thuật; ngón bấm và pedal.', chapters: [
        { slug: 'neuhaus-ky-thuat-nguyen-ly', focus: 'Nhận xét chung; tự tin; hệ vận động.' },
        { slug: 'neuhaus-ky-thuat-tu-do', focus: 'Sự tự do, thả lỏng, bài tập âm giai – hợp âm rải.' },
        { slug: 'neuhaus-cac-yeu-to-ky-thuat', focus: 'Các yếu tố của kỹ thuật piano.' },
        { slug: 'neuhaus-ngon-bam', focus: 'Nguyên tắc chọn ngón.' },
        { slug: 'neuhaus-pedal', focus: 'Pedal.' },
      ], exercises: ['Luyện một đoạn khó theo cách Neuhaus: chậm, đầy đủ âm thanh, rồi tăng dần mà không mất tự do.', 'Viết lại ngón bấm cho một đoạn theo nguyên tắc Neuhaus và giải thích lý do.'] },
      { title: 'Người thầy và người nghệ sĩ', intro: 'Quan hệ thầy – trò, đời sống biểu diễn và lời kết.', chapters: [
        { slug: 'neuhaus-thay-va-tro', focus: 'Thầy và trò.' },
        { slug: 'neuhaus-bieu-dien', focus: 'Hoạt động biểu diễn.' },
        { slug: 'neuhaus-ket-luan', focus: 'Kết luận.' },
      ], exercises: ['Viết một trang về điều Neuhaus đòi hỏi ở người thầy và đối chiếu với cách bạn đang dạy hoặc học.'] },
    ],
  },
  {
    id: 'hanslick',
    title: 'Về Cái Đẹp Trong Âm Nhạc',
    volume: 'Eduard Hanslick',
    subtitle: 'Đọc kỹ cuốn sách nền của mỹ học âm nhạc (Vom Musikalisch-Schönen, 1854): âm nhạc có biểu hiện cảm xúc không, cái đẹp đặc thù âm nhạc, người sáng tác – người diễn – người nghe, âm nhạc và tự nhiên, nội dung và hình thức.',
    author: 'Lamar',
    audience: 'Học viên và giáo viên âm nhạc, người quan tâm tới mỹ học – triết học âm nhạc',
    hue: 60,
    glyph: '❦',
    coverImage: hanslickCover,
    preface: `
**Eduard Hanslick** (1825 – 1904), nhà phê bình âm nhạc ở Vienna và giáo sư mỹ học – lịch sử âm nhạc đầu tiên của Đại học Vienna, viết *Vom Musikalisch-Schönen* (Về cái đẹp trong âm nhạc) năm 1854. Sách mỏng, viết như một bài luận tranh luận, nhưng đặt ra gần như mọi câu hỏi mà mỹ học âm nhạc còn bàn tới hôm nay. Sách này đọc theo bản dịch tiếng Anh của Gustav Cohen (*The Beautiful in Music*, 1891, từ bản Đức in lần 7 năm 1885), ấn bản có lời giới thiệu của Morris Weitz (1957), giữ đúng trình tự bảy chương của Hanslick.

## Tinh thần của sách
Hanslick đi từ **phủ định** sang **khẳng định**: cảm xúc của người nghe không phải nội dung cũng không phải tiêu chuẩn của cái đẹp âm nhạc; cái đẹp ấy nằm trong chính các hình thức âm thanh — "bản chất của âm nhạc là âm thanh và chuyển động". Từ đó ông rút ra cách sáng tác, cách biểu diễn, cách nghe và cách phê bình. Sách có vài đoạn định kiến của thời đại; các bài thuật lại đúng văn bản và ghi rõ đó là định kiến.

## Cách đọc
1. Đọc theo thứ tự: chương I – II phê phán mỹ học cảm xúc, chương III là phần khẳng định, chương IV – VII là các hệ quả.
2. Trích dẫn dịch sát từ bản tiếng Anh của Cohen và ghi số trang ấn bản Weitz; chỗ chưa đối chiếu nguyên văn tiếng Đức được ghi rõ.
3. Mỗi bài có **Câu hỏi và bài tập**: phần lớn là nghe một tác phẩm Hanslick nhắc tới rồi tự kiểm luận điểm của ông.
`,
    parts: [
      { title: 'Mở đầu', intro: 'Hanslick là ai, lời giới thiệu của Weitz và hai luận đề của cuốn sách.', chapters: [
        { slug: 'hanslick-lo-trinh', focus: 'Lộ trình bộ bài.' },
        { slug: 'hanslick-tieu-su-va-loi-tua', focus: 'Tiểu sử; tự trị và dị trị; lời tựa bản in lần 7.' },
      ], exercises: ['Viết một đoạn ngắn tóm tắt luận đề phủ định và luận đề khẳng định của Hanslick bằng lời của bạn.'] },
      { title: 'Phê phán mỹ học cảm xúc', intro: 'Cảm xúc không phải mục đích, cũng không phải nội dung của âm nhạc.', chapters: [
        { slug: 'hanslick-my-hoc-cam-xuc', focus: 'Chương I: cảm giác và cảm xúc; trí tưởng tượng là cơ quan của cái đẹp.' },
        { slug: 'hanslick-am-nhac-co-bieu-hien-cam-xuc', focus: 'Chương II: âm nhạc chỉ tái hiện được động thái của cảm xúc.' },
        { slug: 'hanslick-loi-ca-va-opera', focus: 'Chương II: lời ca, hát nói, opera.' },
      ], exercises: ['Nghe một bản khí nhạc ngắn cùng hai người khác, mỗi người ghi một chữ cho cảm xúc của nó; so sánh kết quả với lập luận "tình yêu – khát khao – sùng đạo" của Hanslick.', 'Hát một aria với lời ngược nghĩa và nhận xét.'] },
      { title: 'Cái đẹp trong âm nhạc', intro: 'Phần khẳng định: cái đẹp đặc thù âm nhạc và những hệ quả cho phê bình.', chapters: [
        { slug: 'hanslick-cai-dep-trong-am-nhac', focus: 'Chương III: âm thanh và chuyển động; arabesque, kính vạn hoa; logic âm nhạc.' },
        { slug: 'hanslick-y-do-va-chuong-trinh', focus: 'Chương III: ý đồ và sáng tạo; Les Adieux; lịch sử và mỹ học.' },
      ], exercises: ['Viết một bài phê bình 300 chữ về một chương sonata chỉ bằng ngôn ngữ âm nhạc (chủ đề, hoà âm, phát triển), không dùng tiểu sử hay cảm xúc.'] },
      { title: 'Người sáng tác, người diễn, người nghe', intro: 'Cảm xúc có chỗ thật trong đời sống âm nhạc — nhưng ở đâu, và nghe thế nào cho đúng.', chapters: [
        { slug: 'hanslick-tac-dong-cua-am-nhac', focus: 'Chương IV: nhà soạn nhạc như nhà điêu khắc; người diễn; âm nhạc và thần kinh.' },
        { slug: 'hanslick-cach-nghe-nhac', focus: 'Chương V: nghe bệnh lý và nghe thẩm mỹ.' },
      ], exercises: ['Nghe một chương sonata hai lần: lần đầu thả lỏng, lần sau theo dõi và đoán trước. Ghi lại khác biệt.'] },
      { title: 'Tự nhiên và nội dung', intro: 'Âm nhạc không có mẫu trong tự nhiên; nội dung của nó là các hình thức âm thanh.', chapters: [
        { slug: 'hanslick-am-nhac-va-tu-nhien', focus: 'Chương VI: âm nhạc và tự nhiên.' },
        { slug: 'hanslick-noi-dung-am-nhac', focus: 'Chương VII: nội dung và hình thức; chủ đề là nội dung thật.' },
      ], exercises: ['Chọn một overture có tiêu đề, nghe không biết tên, đặt cho nó ba tên khác; viết vì sao.'] },
      { title: 'Di sản', intro: 'Hanslick đọc lại hôm nay.', chapters: [
        { slug: 'hanslick-di-san-va-tranh-luan', focus: 'Tổng kết; Weitz và IEP; điểm yếu và định kiến của sách.' },
      ], exercises: ['Viết một trang: bạn đồng ý với Hanslick tới đâu?'] },
    ],
  },
  {
    id: 'schopenhauer',
    title: 'Thế Giới Như Là Ý Chí Và Biểu Tượng',
    volume: 'Arthur Schopenhauer',
    subtitle: 'Đọc kỹ tập I tác phẩm chính của Schopenhauer, trọng tâm là mỹ học và âm nhạc: Ý niệm Platon, thiên tài, cái đẹp và cái siêu phàm, hệ thống các nghệ thuật từ kiến trúc tới bi kịch, và §52 — âm nhạc là bản sao trực tiếp của chính ý chí.',
    author: 'Lamar',
    audience: 'Học viên và giáo viên âm nhạc, người quan tâm tới mỹ học – triết học âm nhạc; nên đọc sau hoặc song song Về Cái Đẹp Trong Âm Nhạc (Hanslick)',
    hue: 38,
    glyph: '❦',
    coverImage: schopenhauerCover,
    preface: `
**Arthur Schopenhauer** (1788 – 1860) viết *Die Welt als Wille und Vorstellung* ở Dresden trong những năm 1814 – 1818; tập I ra đời năm 1818/1819. Cuốn sách truyền đạt "một tư tưởng duy nhất" nhìn từ bốn phía — nhận thức, siêu hình học, mỹ học, đạo đức học — và chứa trang triết học về âm nhạc có ảnh hưởng lớn nhất thế kỷ XIX: âm nhạc không sao chép thế giới hiện tượng mà là bản sao trực tiếp của chính ý chí. Sách này đọc theo bản dịch tiếng Anh của E. F. J. Payne (tập I; Falcon's Wing Press 1958, Dover 1969), giữ trình tự các quyển và các đoạn (§) của tác giả.

## Tinh thần của sách
Hai quyển đầu được tóm vừa đủ để hiểu "biểu tượng" và "ý chí"; trọng tâm là **Quyển III** — đọc gần như từng đoạn, với trích dẫn dịch sát và số trang ấn bản Payne — và **§52** về âm nhạc, chia làm hai bài. Thuật ngữ âm nhạc của §52 được dịch theo ngữ cảnh nhạc lý, kèm nhận xét từ góc nhìn nhạc lý hôm nay. Những đoạn định kiến trong sách (hai câu bài Do Thái, sự khinh miệt "đám đông") được thuật đúng và ghi rõ là định kiến.

## Cách đọc
1. Schopenhauer dặn đọc sách **hai lần**; ít nhất hãy đọc lại hai bài về §52 sau khi đã xong Quyển III.
2. Ai chỉ quan tâm âm nhạc: đọc Bài 1 – 4, rồi Phần IV.
3. Mỗi bài có **Câu hỏi và bài tập** — phần lớn là chơi hay nghe một ví dụ trên đàn để tự kiểm luận điểm.
4. Đọc đối chiếu với sách *Về Cái Đẹp Trong Âm Nhạc* của Hanslick: hai cách đối lập để cùng đề cao khí nhạc không lời.
`,
    parts: [
      { title: 'Cuốn sách và nền tảng', intro: 'Schopenhauer là ai, "một tư tưởng duy nhất", và hai phương diện của thế giới: biểu tượng và ý chí.', chapters: [
        { slug: 'schopenhauer-lo-trinh', focus: 'Lộ trình bộ bài; bảng thuật ngữ.' },
        { slug: 'schopenhauer-tieu-su-va-loi-tua', focus: 'Tiểu sử; ba lời tựa; ba đòi hỏi với người đọc.' },
        { slug: 'schopenhauer-the-gioi-la-bieu-tuong', focus: 'Quyển I: thế giới là biểu tượng; nguyên lý lý do đầy đủ.' },
        { slug: 'schopenhauer-the-gioi-la-y-chi', focus: 'Quyển II: thân thể và ý chí; các bậc khách thể hoá; phấn đấu không mục đích.' },
      ], exercises: ['Viết một đoạn ngắn giải thích bằng lời của bạn: vì sao thân thể là "chìa khoá" để Schopenhauer đi từ biểu tượng tới ý chí.'] },
      { title: 'Nhận thức thẩm mỹ', intro: 'Quyển III, §30 – 42: Ý niệm, chủ thể nhận thức thuần tuý, thiên tài, cái đẹp và cái siêu phàm.', chapters: [
        { slug: 'schopenhauer-y-niem-va-chu-the-thuan-tuy', focus: '§30 – 35: Ý niệm Platon; quên mình trong khách thể.' },
        { slug: 'schopenhauer-thien-tai', focus: '§36 – 37: nghệ thuật, thiên tài, trí tưởng tượng, điên loạn.' },
        { slug: 'schopenhauer-cai-dep-va-cai-sieu-pham', focus: '§38 – 42: hai mặt của khoái cảm thẩm mỹ; cái siêu phàm; cái quyến rũ.' },
      ], exercises: ['Nghe một bản nhạc chậm hai lần: lần đầu bình thường, lần sau thử "chỉ hỏi cái gì". Ghi lại khác biệt.', 'Chọn một tác phẩm cho cái đẹp và một tác phẩm cho cái siêu phàm theo định nghĩa của Schopenhauer, giải thích lựa chọn.'] },
      { title: 'Hệ thống các nghệ thuật', intro: 'Quyển III, §43 – 51: từ kiến trúc (bậc thấp nhất) tới bi kịch (bậc cao nhất).', chapters: [
        { slug: 'schopenhauer-kien-truc-den-dieu-khac', focus: '§43 – 47: kiến trúc, nước, vườn, phong cảnh, động vật, điêu khắc, Laocoön.' },
        { slug: 'schopenhauer-hoi-hoa-khai-niem-va-phung-du', focus: '§48 – 50: hội hoạ lịch sử; khái niệm và Ý niệm; phúng dụ.' },
        { slug: 'schopenhauer-thi-ca-va-bi-kich', focus: '§51: thi ca, ca khúc trữ tình, bi kịch.' },
        { slug: 'schopenhauer-bo-sung-quyen-ba', focus: 'Tập II, ch. XXIX – XXXVIII: nghệ thuật trả lời "đời sống là gì?"; tài năng và thiên tài; vần, nhịp và Norma.' },
      ], exercises: ['Lập bảng các nghệ thuật theo bậc khách thể hoá của ý chí và ghi Ý niệm mà mỗi nghệ thuật làm hiện ra.', 'Phân tích một Lied của Schubert theo mô hình "trạng thái trữ tình" ở §51.'] },
      { title: 'Âm nhạc — §52 và chương XXXIX', intro: 'Âm nhạc đứng ngoài mọi nghệ thuật: bản sao trực tiếp của chính ý chí. Hai bài cuối đọc chương bổ sung XXXIX (1844) theo bản Haldane & Kemp.', chapters: [
        { slug: 'schopenhauer-am-nhac-ban-sao-cua-y-chi', focus: 'Vị trí của âm nhạc; phép tương ứng bè trầm – bè giữa – giai điệu với các bậc của tự nhiên; luật bình quân.' },
        { slug: 'schopenhauer-giai-dieu-va-cam-xuc', focus: 'Giai điệu rời và trở về âm chủ; trưởng – thứ; cảm xúc tự thân; lời ca, opera; âm nhạc và triết học.' },
        { slug: 'schopenhauer-sieu-hinh-hoc-am-nhac', focus: 'Tập II, ch. XXXIX (1): bốn bè – bốn giới; hoà âm mở; lời ca và opera; giao hưởng Beethoven.' },
        { slug: 'schopenhauer-nhip-giai-dieu-va-nghich-am', focus: 'Tập II, ch. XXXIX (2): thuận – nghịch; nhịp là đối xứng; giai điệu là chia lìa và hoà giải; nốt treo, át bảy, trưởng – thứ.' },
      ], exercises: ['Chơi một tiến trình I – IV – V – I, nghe riêng từng bè và đối chiếu với bảng tương ứng của Schopenhauer.', 'Hát một giai điệu quen, đánh dấu chỗ rời và trở về âm chủ; chơi lại ở giọng thứ cùng tên và mô tả thay đổi.'] },
      { title: 'Hệ quả và di sản', intro: 'Quyển IV và đời sống của tư tưởng Schopenhauer trong âm nhạc thế kỷ XIX – XX.', chapters: [
        { slug: 'schopenhauer-y-chi-song-va-giai-thoat', focus: 'Quyển IV: khổ đau và buồn chán; lòng trắc ẩn; phủ định ý chí; vị trí của nghệ thuật.' },
        { slug: 'schopenhauer-di-san-am-nhac', focus: 'Wagner, Nietzsche, Brahms, Mahler, Schoenberg; so sánh với Hanslick.' },
      ], exercises: ['Nghe khúc dạo đầu Tristan und Isolde và viết một trang theo ngôn ngữ của §52.', 'Viết một trang so sánh Schopenhauer và Hanslick trên cùng một tác phẩm.'] },
    ],
  },
  {
    id: 'quan-ly-nghe-si',
    title: 'Quản Lý Nghệ Sĩ Trong Kinh Doanh Âm Nhạc',
    volume: 'Paul Allen',
    subtitle: 'Đọc theo Artist Management for the Music Business (bản 5, 2022): nghề quản lý và tự quản lý sự nghiệp âm nhạc — hợp đồng, kế hoạch sự nghiệp, đội ngũ, ba nguồn thu biểu diễn – sáng tác – thu âm, đàm phán và đạo đức.',
    author: 'Lamar',
    audience: 'Nghệ sĩ, ban nhạc muốn tự quản lý sự nghiệp; người muốn làm quản lý nghệ sĩ; giáo viên và nhạc sĩ cần hiểu tiền và hợp đồng trong ngành nhạc',
    hue: 222,
    glyph: '♪',
    coverImage: allenCover,
    preface: `
**Paul Allen** dạy quản lý nghệ sĩ ở Khoa Công nghiệp Ghi âm, Đại học Middle Tennessee State; *Artist Management for the Music Business* in lần đầu năm 2007, bản 5 (Routledge, 2022) thêm một chương cho nghệ sĩ tự quản lý. Sách viết cho cả người quản lý sự nghiệp người khác lẫn nghệ sĩ tự quản lý — mọi điều chỉ khác quy mô.

## Tinh thần của sách
Mỗi bài tóm lược và giải thích một chương bằng lời của bộ bài, trích ngắn kèm số trang bản in; sách còn bản quyền nên không dịch nguyên văn. Sách viết cho thị trường Mỹ – Anh: chỗ nào luật, tổ chức, con số ở Việt Nam khác, bài ghi chú ngắn — nhưng **không thay cho tư vấn pháp lý**. Những chỗ sách sai hay đã lỗi thời được ghi rõ trong bài.

## Cách đọc
1. Nghệ sĩ tự quản lý: Bài 1, 4, 6, 8, rồi Phần IV.
2. Người muốn làm quản lý: đọc theo thứ tự, dừng lâu ở hợp đồng (Bài 7) và đàm phán (Bài 13).
3. Mỗi bài có **Câu hỏi và bài tập** — phần lớn là tính một con số hay soạn một văn bản cho chính sự nghiệp của bạn.
`,
    parts: [
      { title: 'Nghề quản lý', intro: 'Người quản lý làm gì, cần chuẩn bị gì, và tiền bạc của một công ty quản lý.', chapters: [
        { slug: 'quan-ly-nghe-si-lo-trinh', focus: 'Lộ trình bộ bài; sách nói gì và đọc thế nào.' },
        { slug: 'quan-ly-nghe-si-nghe-va-nguyen-tac', focus: 'Thành công; hợp đồng 360; bốn chức năng quản lý; mạng lưới; kỹ năng.' },
        { slug: 'quan-ly-nghe-si-chuan-bi', focus: 'Hoa hồng; mười thực tế; năm nguồn quyền lực; Bộ quy tắc MMF.' },
        { slug: 'quan-ly-nghe-si-khoi-nghiep-va-tien', focus: 'Tầm nhìn, kế hoạch kinh doanh; ngân sách, dòng tiền, báo cáo tài chính; vốn.' },
      ], exercises: ['Viết định nghĩa thành công của bạn trong ba câu và lập ngân sách tháng cho công việc quản lý (hoặc tự quản lý).'] },
      { title: 'Nghệ sĩ và người quản lý', intro: 'Khi nào cần người quản lý, bài học từ người đi trước, tự quản lý, và hợp đồng giữa hai bên.', chapters: [
        { slug: 'quan-ly-nghe-si-nghe-si-chuan-bi', focus: 'Thương mại không phải bán mình; con số; câu hỏi hai chiều.' },
        { slug: 'quan-ly-nghe-si-bai-hoc-tu-nguoi-di-truoc', focus: 'Parker, Angélil, Jeffery, Grant, Landau, Doyle, Pearlman, Kesha…' },
        { slug: 'quan-ly-nghe-si-tu-quan-ly', focus: 'Nghệ sĩ độc lập: người hâm mộ, show diễn, thoả thuận ban nhạc, công cụ.' },
        { slug: 'quan-ly-nghe-si-hop-dong-quan-ly', focus: 'Thời hạn, hoa hồng, hoa hồng sau hợp đồng, vị thành niên; hợp đồng thật.' },
      ], exercises: ['Soạn bản tóm tắt thoả thuận quản lý một trang cho một nghệ sĩ mới: thời hạn, cơ sở và mức hoa hồng, chi phí, hoa hồng sau hợp đồng, điều kiện chấm dứt.'] },
      { title: 'Kế hoạch và kinh doanh', intro: 'Kế hoạch sự nghiệp, thị trường, thương hiệu, đội ngũ và hình thức doanh nghiệp.', chapters: [
        { slug: 'quan-ly-nghe-si-lap-ke-hoach', focus: 'Mục tiêu – chiến lược – chiến thuật; showcase; kế hoạch sự nghiệp tám phần.' },
        { slug: 'quan-ly-nghe-si-hinh-thuc-kinh-doanh', focus: 'Thị trường mục tiêu, thương hiệu, đội ngũ, hình thức doanh nghiệp, website.' },
      ], exercises: ['Lập kế hoạch sự nghiệp 12 tháng theo dàn ý tám phần cho một nghệ sĩ (hoặc chính bạn), kèm SWOT.'] },
      { title: 'Ba nguồn thu', intro: 'Biểu diễn và lưu diễn, sáng tác và xuất bản, thu âm và hãng đĩa.', chapters: [
        { slug: 'quan-ly-nghe-si-luu-dien-va-hang-luu-niem', focus: 'Đặt show, ngân sách, nhà tổ chức, rider, hàng lưu niệm, lưu diễn quốc tế.' },
        { slug: 'quan-ly-nghe-si-thu-nhap-sang-tac', focus: 'Quyền tác giả, xuất bản, tiền cơ học và biểu diễn, streaming.' },
        { slug: 'quan-ly-nghe-si-thu-nhap-thu-am', focus: 'Hợp đồng thu âm, ứng trước, 360, hãng độc lập, đài, tài trợ.' },
      ], exercises: ['Lập bảng mọi nguồn thu của một nghệ sĩ trong một năm, ghi khi nào tiền về, ai thu, ai được chia phần trăm.'] },
      { title: 'Làm việc và dẫn dắt', intro: 'Buổi gặp, đàm phán, đạo đức; cố vấn, huấn luyện và lãnh đạo.', chapters: [
        { slug: 'quan-ly-nghe-si-dieu-hanh-kinh-doanh', focus: 'Buổi gặp 15 phút; đàm phán theo lợi ích; đạo đức; payola.' },
        { slug: 'quan-ly-nghe-si-co-van-va-lanh-dao', focus: 'Cố vấn, huấn luyện, lãnh đạo; lời kết.' },
      ], exercises: ['Tập một buổi giới thiệu nghệ sĩ 15 phút với một người bạn đóng vai hãng đĩa; ghi lại lập trường và lợi ích của mỗi bên.'] },
    ],
  },
  {
    id: 'am-nhac-viet-nam',
    title: 'Âm Nhạc Việt Nam',
    volume: 'Lịch sử · Con người · Di sản',
    subtitle: 'Toàn cảnh âm nhạc Việt Nam từ trống đồng tới V-pop: các thời kỳ, lý thuyết cổ truyền, dân ca và tín ngưỡng, ca trù – tài tử – chèo – tuồng – cải lương, nhạc khí, tân nhạc và hai miền 1945 – 1975, âm nhạc sau 1975, chân dung nhạc sĩ, thực hành và nghiên cứu.',
    author: 'Lamar',
    audience: 'Sinh viên nhạc viện học phần Âm nhạc Việt Nam, giáo viên âm nhạc, người chơi đàn muốn hiểu và dùng chất liệu Việt, bạn đọc yêu âm nhạc dân tộc',
    hue: 15,
    glyph: '❀',
    coverImage: vietnamCover,
    preface: `
Âm nhạc Việt Nam thường được kể theo hai cách rời nhau: một bên là **nhạc cổ truyền** — dân ca, nhạc cung đình, sân khấu, nhạc khí — thuộc về dân tộc nhạc học; bên kia là **tân nhạc** và âm nhạc hàn lâm từ thập niên 1930, thuộc về lịch sử âm nhạc. Cuốn sách này đặt hai mạch ấy trong cùng một trình tự: đi từ những hiện vật cổ nhất, qua hệ thống âm luật và các thể loại truyền thống, tới cuộc gặp gỡ với âm nhạc phương Tây, hai con đường của hai miền trong chiến tranh, và đời sống âm nhạc hôm nay.

## Tinh thần của sách
- **Phân biệt chứng cứ và truyền thuyết.** Lịch sử âm nhạc Việt Nam có nhiều mốc "khởi đầu" là quy ước hay giai thoại (tổ nghề chèo, nguồn gốc đàn bầu, năm ra đời cải lương…). Mỗi bài nói rõ điều gì có sử liệu, điều gì còn tranh cãi, điều gì chỉ là truyền thuyết; Phần XII dành riêng một bài để phân định giai thoại.
- **Ghi nguồn và ghi chỗ lệch.** Mỗi bài có tài liệu tham khảo ở cuối. Khi các nguồn ghi năm, tên, số liệu khác nhau, bài nêu cả hai và nói rõ chưa thống nhất, thay vì chọn một con số cho gọn. Những dữ kiện chỉ có trong giáo trình đại học mà chưa tìm được nguồn công khai được ghi "theo giáo trình".
- **Hai miền, nhiều cách nhìn.** Âm nhạc 1954 – 1975 được trình bày ở cả miền Bắc và miền Nam; khi một nguồn mang ngôn ngữ đánh giá của thời đại, bài thuật đúng và chỉ ra đó là quan điểm của nguồn.
- **Nghe được và chơi được.** Lý thuyết cổ truyền đi kèm thực hành: hơi, lòng bản, ngũ cung, cách hoà âm cho dân ca trên piano, cách đưa chất liệu Việt vào sáng tác.

## Cấu trúc
Mười hai phần đi từ tổng quan tới chuyên sâu:
1. **Phần I – II:** bản đồ, các thời kỳ, âm nhạc cổ – trung đại và thời Nguyễn.
2. **Phần III:** lý thuyết âm nhạc cổ truyền — tên âm, hơi, điệu, nhịp, lòng bản, quan hệ với thanh điệu tiếng Việt.
3. **Phần IV – V:** dân ca, âm nhạc tín ngưỡng – tôn giáo – các dân tộc; nhạc thính phòng truyền thống và sân khấu.
4. **Phần VI:** nhạc khí, từ đàn bầu, đàn tranh tới cồng chiêng và đàn đá.
5. **Phần VII – IX:** tân nhạc từ những tiền đề cuối thế kỷ XIX, hai miền 1945 – 1975, âm nhạc sau 1975.
6. **Phần X – XI:** chân dung nhạc sĩ, xếp theo năm sinh.
7. **Phần XII:** thực hành, sáng tác, nghiên cứu, và đề cương ôn tập theo giáo trình đại học.

## Cách đọc
1. **Sinh viên ôn thi học phần Âm nhạc Việt Nam (cuối thế kỷ XIX – 1975):** bắt đầu từ bài đề cương ở cuối Phần XII — bảng tám câu hỏi thi dẫn thẳng tới bài trả lời — rồi đọc Phần V (sân khấu), VII và VIII.
2. **Người học đàn và sáng tác:** Phần III, chương nhạc khí của nhạc cụ mình quan tâm ở Phần VI, rồi các bài thực hành ở Phần XII.
3. **Bạn đọc muốn có cái nhìn toàn cảnh:** đọc theo thứ tự; mỗi bài có **Câu hỏi ôn tập**, mỗi phần kết thúc bằng bài tập tổng hợp.
`,
    parts: [
      { title: 'Nhập môn: bản đồ và các thời kỳ', intro: 'Trước khi đi vào từng thể loại, phần này vẽ bản đồ toàn cảnh: âm nhạc Việt Nam gồm những gì, chia thời kỳ thế nào, các mốc nào có sử liệu, và đặc trưng chung của nhạc truyền thống.', chapters: [
        { slug: 'am-nhac-viet-nam', focus: 'Bản đồ toàn mục: thời kỳ, thể loại, di sản, nhạc sĩ, lý thuyết, nghiên cứu.' },
        { slug: 'cac-thoi-ky-am-nhac-viet-nam', focus: 'Sáu thời kỳ từ trống đồng tới V-pop; mỗi mốc ghi rõ mức tin cậy.' },
        { slug: 'lich-su-am-nhac-viet-nam', focus: 'Các mốc lịch sử theo nguồn: cung đình Lý – Lê – Nguyễn, sân khấu, tân nhạc, nhạc viện.' },
        { slug: 'the-loai-am-nhac-viet-nam', focus: 'Bản đồ thể loại và bảng di sản UNESCO.' },
        { slug: 'am-nhac-truyen-thong-viet-nam', focus: 'Thang năm âm hò – xự – xang – xê – cống, cao độ không bình quân, nhấn – rung – luyến.' },
      ], exercises: ['Vẽ một dòng thời gian khổ A4 với sáu thời kỳ; mỗi thời kỳ ghi hai mốc có sử liệu và một mốc chỉ là truyền thuyết.'] },
      { title: 'Âm nhạc cổ – trung đại và thời Nguyễn', intro: 'Từ hiện vật khảo cổ tới nhạc cung đình: những gì ta thực sự biết về âm nhạc trước thế kỷ XX, và nhã nhạc — di sản đầu tiên của Việt Nam được UNESCO công nhận.', chapters: [
        { slug: 'am-nhac-co-trung-dai-viet-nam', focus: 'Trống đồng, đàn đá; ảnh hưởng Chăm thời Lý; cuộc tranh luận Nguyễn Trãi – Lương Đăng thời Lê sơ.' },
        { slug: 'am-nhac-thoi-nguyen', focus: 'Nhã nhạc được thể chế hoá; ca Huế; đờn ca tài tử phương Nam cuối thế kỷ XIX.' },
        { slug: 'ca-hue-nha-nhac', focus: 'Nhã nhạc (UNESCO 2003/2008), ca Huế với điệu Bắc và điệu Nam.' },
      ], exercises: ['Viết một trang trả lời: vì sao lịch sử âm nhạc Việt Nam trước thế kỷ XV chủ yếu dựa vào hiện vật và sử liệu gián tiếp? Nêu ba nguồn cụ thể.'] },
      { title: 'Lý thuyết âm nhạc cổ truyền', intro: 'Ngôn ngữ âm nhạc của nhạc truyền thống: tên âm, hơi, điệu, nhịp; giai điệu khung và nghệ thuật tô điểm; và mối quan hệ giữa giai điệu với thanh điệu tiếng Việt.', chapters: [
        { slug: 'ly-thuyet-am-nhac-co-truyen-viet-nam', focus: 'Hò – xự – xang, hơi, điệu, nhịp; âm già – non; giai điệu khung.' },
        { slug: 'am-giai-ngu-cung', focus: 'Âm giai năm âm không nửa cung — nền chung của nhạc dân gian.' },
        { slug: 'hoi-trong-nhac-tai-tu-cai-luong', focus: 'Điệu Bắc (Bắc, Nhạc, Quảng), điệu Nam (Xuân, Ai, Đảo) và Oán.' },
        { slug: 'long-ban-va-ky-thuat-to-diem', focus: 'Lòng bản, chân phương, hoa lá; các kỹ thuật nhấn, rung, mổ, vuốt.' },
        { slug: 'am-nhac-va-ngon-ngu', focus: 'Âm nhạc và ngôn ngữ; thanh điệu tiếng Việt và giai điệu.' },
      ], exercises: ['Chọn một câu vọng cổ hoặc một bài lý: ghi lòng bản bằng tên hò – xự – xang và bằng nốt, rồi đánh dấu những âm được nhấn, rung.'] },
      { title: 'Dân ca, tín ngưỡng và âm nhạc các dân tộc', intro: 'Âm nhạc gắn với đời sống: hò, lý, ví, quan họ, hát ru; âm nhạc trong thờ cúng và tôn giáo; tiếng nói của các dân tộc thiểu số.', chapters: [
        { slug: 'dan-ca-viet-nam', focus: 'Hò, lý, ví giặm, bài chòi, hát xẩm theo vùng.' },
        { slug: 'quan-ho', focus: 'Hát đối đáp liền anh – liền chị; UNESCO 2009; 49 làng gốc.' },
        { slug: 'hat-ru', focus: 'Hát ru ba miền trên nền ca dao lục bát.' },
        { slug: 'hat-xoan-hat-van-then', focus: 'Hát xoan, hát văn thờ Mẫu, then Tày – Nùng – Thái.' },
        { slug: 'am-nhac-ton-giao-va-dan-toc-viet-nam', focus: 'Nhạc lễ Phật giáo, thánh ca Công giáo, nhạc các dân tộc thiểu số.' },
        { slug: 'binh-ca-va-organ-o-viet-nam', focus: 'Bình ca Gregorian và đàn organ trong Công giáo Việt Nam.' },
      ], exercises: ['Lập bảng so sánh ba lối hát dân gian (ví dụ quan họ, ví giặm, hò Huế): hoàn cảnh hát, hình thức đối đáp, điệu thức, nhịp.'] },
      { title: 'Nhạc thính phòng truyền thống và sân khấu', intro: 'Ca trù và đờn ca tài tử — hai lối thính phòng của hai miền; chèo, tuồng, cải lương — ba dòng sân khấu và cuộc cải cách của chúng đầu thế kỷ XX.', chapters: [
        { slug: 'ca-tru', focus: 'Đào nương, kép đàn, quan viên; UNESCO khẩn cấp 2009.' },
        { slug: 'am-nhac-ca-tru', focus: 'Thể cách (bắc phản, mưỡu, hát nói…), khổ phách, trống chầu.' },
        { slug: 'don-ca-tai-tu', focus: 'Ứng tác trên giai điệu khung; 20 bài chính, 72 bài cổ; UNESCO 2013.' },
        { slug: 'cheo', focus: 'Sân khấu sân đình đồng bằng Bắc Bộ; truyền thuyết tổ nghề và chứng cứ.' },
        { slug: 'tuong', focus: 'Sân khấu ước lệ; nguồn gốc chưa rõ.' },
        { slug: 'lan-dieu-cheo-va-tuong', focus: 'Trên 200 làn điệu chèo; nói lối, hát nam, hát khách của tuồng.' },
        { slug: 'cai-luong', focus: 'Cải lương trên nền tài tử; vọng cổ từ Dạ cổ hoài lang.' },
        { slug: 'san-khau-cai-cach-dau-the-ky-xx', focus: 'Chèo văn minh, chèo cải lương (Nguyễn Đình Nghị), tuồng cải cách; tranh luận năm ra đời cải lương.' },
      ], exercises: ['So sánh chèo, tuồng, cải lương ở năm mặt: vùng, nguồn gốc, dàn nhạc, làn điệu chính, cách diễn — và nêu biến đổi của mỗi dòng khi lên sân khấu thành thị.'] },
      { title: 'Nhạc khí', intro: 'Nhạc cụ truyền thống theo bốn lớp Hornbostel – Sachs: đàn dây gảy và kéo, nhạc cụ hơi, nhạc cụ gõ, cùng nhạc cụ Tây Nguyên và miền núi. Mỗi bài nói cấu tạo, kỹ thuật, vai trò trong các dàn nhạc và tách truyền thuyết khỏi sử liệu.', chapters: [
        { slug: 'nhac-cu-viet-nam', focus: 'Bản đồ nhạc cụ theo bốn lớp và theo thể loại.' },
        { slug: 'dan-bau', focus: 'Đàn một dây, bồi âm, cần nắn cao độ; mốc văn bản 1770.' },
        { slug: 'dan-tranh', focus: '16 dây, con nhạn, móng gảy; tay trái nhấn – rung – vuốt.' },
        { slug: 'dan-nguyet', focus: 'Thân tròn, 10 phím cao ngũ cung; nhạc cụ chính của hát văn.' },
        { slug: 'dan-nhi', focus: 'Đàn hai dây kéo vĩ; cách lên dây theo điệu Bắc, Nam, chèo.' },
        { slug: 'dan-day', focus: 'Đàn ba dây cần dài gắn với ca trù.' },
        { slug: 'dan-ty-ba-tam-sen', focus: 'Tỳ bà, đàn tam, đàn sến.' },
        { slug: 'dan-doan-dan-tu', focus: 'Gỡ rối tên gọi đàn đoản và đàn tứ.' },
        { slug: 'dan-tinh', focus: 'Đàn bầu khô của người Tày, Nùng trong nghi lễ Then.' },
        { slug: 'sao-truc', focus: 'Sáo ngang sáu lỗ; sáo 10 lỗ của Đinh Thìn và Ngô Nam.' },
        { slug: 'ken-bau', focus: 'Kèn dăm kép; dàn nhạc tuồng và nhạc cung đình Huế.' },
        { slug: 'trong-viet-nam', focus: 'Trống cái, trống chầu, trống cơm, trống tuồng; trống Chăm.' },
        { slug: 'nhac-cu-go-nghi-le-viet-nam', focus: 'Sênh tiền, mõ, chuông, thanh la, khánh.' },
        { slug: 'cong-chieng', focus: 'Không gian văn hoá cồng chiêng Tây Nguyên (UNESCO 2005/2008).' },
        { slug: 'dan-da', focus: 'Bộ đàn đá Ndut Liêng Krak (1949) và cuộc tranh luận.' },
        { slug: 'nhac-cu-tay-nguyen-va-mien-nui', focus: "Đinh Goong, k'ni, nhạc cụ ống tre; đàn môi, kèn lá miền núi phía Bắc." },
      ], exercises: ['Chọn một dàn nhạc truyền thống (ca trù, tài tử, chèo, tuồng hoặc nhã nhạc): kể tên các nhạc cụ, xếp chúng theo bốn lớp Hornbostel – Sachs và nêu vai trò của từng cây trong dàn.'] },
      { title: 'Thời Pháp thuộc và sự ra đời của tân nhạc', intro: 'Kèn Tây, thánh ca, nhà hát, đĩa hát; những bài ta theo điệu Tây; phong trào cải cách năm 1938 và các nhóm sáng tác đầu tiên; ba dòng ca khúc trước 1945.', chapters: [
        { slug: 'am-nhac-thoi-phap-thuoc', focus: 'Nhà thờ, quân nhạc, ghi âm từ 1900; mốc 1938 của tân nhạc.' },
        { slug: 'lich-su-tan-nhac-viet-nam', focus: 'Phân kỳ tân nhạc, lộ trình đọc và nguồn.' },
        { slug: 'tien-de-tan-nhac', focus: 'Tiền đề 1861 – 1937: kèn Tây, thánh ca, nhà hát, đĩa hát.' },
        { slug: 'nhac-vien-vien-dong', focus: 'Nhạc viện Viễn Đông ở Hà Nội (1927 – 1930).' },
        { slug: 'bai-ta-theo-dieu-tay', focus: 'Lời Việt cho nhạc Pháp, thập niên 1920 – 1930.' },
        { slug: 'nhac-cai-cach-1938', focus: 'Nguyễn Văn Tuyên và báo Ngày Nay.' },
        { slug: 'nhom-sang-tac-tan-nhac-dau-tien', focus: 'Myosotis, Tricéa, Đồng Vọng, Tổng hội Sinh viên.' },
        { slug: 'tan-nhac-viet-nam', focus: 'Ca khúc theo lối phương Tây; các giai đoạn và cách gọi các dòng nhạc.' },
        { slug: 'ba-dong-ca-khuc-1930-1945', focus: 'Hùng ca yêu nước, lãng mạn, cách mạng.' },
        { slug: 'nhac-tien-chien', focus: 'Tên gọi về sau cho ca khúc lãng mạn cuối thập niên 1930 – 1947.' },
      ], exercises: ['Viết một bài khoảng 800 chữ: "Tân nhạc ra đời năm nào?" — trình bày các mốc 1927, 1934, 1938 và lập luận cho cách xác định của bạn, có dẫn nguồn.'] },
      { title: 'Âm nhạc 1945 – 1975: hai miền, hai con đường', intro: 'Ca khúc kháng chiến và các thiết chế đầu tiên; ở miền Bắc, trường – hội – viện – đoàn và các thể loại lớn (ca kịch, nhạc kịch, vũ kịch, khí nhạc); ở miền Nam, thị trường ca khúc, nhạc vàng, nhạc Trịnh, du ca, nhạc trẻ.', chapters: [
        { slug: 'am-nhac-viet-nam-1945-1975', focus: 'Tổng quan hai miền: quốc ca, hai trường âm nhạc, giao hưởng và opera đầu tiên.' },
        { slug: 'tan-nhac-1945-1954', focus: 'Tân nhạc ở chiến khu và đô thị.' },
        { slug: 'the-loai-ca-khuc-1945-1954', focus: 'Đề cương văn hoá 1943, hội nghị 1948; bảy thể loại ca khúc.' },
        { slug: 'nhac-cach-mang', focus: 'Ca khúc cách mạng từ thập niên 1940; khái niệm "nhạc đỏ".' },
        { slug: 'dao-tao-va-nghien-cuu-am-nhac-1945-1975', focus: 'Trường, hội, viện, đoàn và công tác sưu tầm ở hai miền.' },
        { slug: 'tan-nhac-mien-bac-1954-1975', focus: 'Thiết chế, ca khúc và nhạc hàn lâm miền Bắc.' },
        { slug: 'ca-kich-nhac-kich-vu-kich-1954-1975', focus: 'Ca cảnh, ca kịch; Cô Sao; Tấm Cám, Ngọn lửa Nghệ Tĩnh.' },
        { slug: 'khi-nhac-thinh-phong-giao-huong-1954-1975', focus: 'Năm khác biệt với thính phòng cổ truyền; các tác phẩm mốc.' },
        { slug: 'tan-nhac-mien-nam-1954-1975', focus: 'Thị trường, các dòng nhạc, du ca, Hát cho đồng bào tôi nghe.' },
        { slug: 'nhac-vang-bolero', focus: 'Nhạc vàng và bolero Việt hoá.' },
        { slug: 'nhac-trinh', focus: 'Trịnh Công Sơn: tình ca, ca khúc phản chiến, kiểm duyệt ở hai phía.' },
        { slug: 'nhac-tre-rock-sai-gon', focus: 'CBC, Phượng Hoàng, đại nhạc hội nhạc trẻ.' },
      ], exercises: ['Lập bảng song song miền Bắc – miền Nam 1954 – 1975 ở năm mục: thiết chế đào tạo, thể loại chính, nơi biểu diễn, phương tiện phổ biến, tác giả tiêu biểu.'] },
      { title: 'Âm nhạc sau 1975', intro: 'Cấm đoán và nới lỏng, nhạc hải ngoại, Đổi mới, V-pop và rap; nhạc hàn lâm và piano; bản quyền và di sản phi vật thể.', chapters: [
        { slug: 'am-nhac-viet-nam-sau-1975', focus: 'Cấm và cấp phép, Paris By Night, Làn Sóng Xanh, V-pop.' },
        { slug: 'nhac-hai-ngoai', focus: 'Thúy Nga, Asia; nhạc hải ngoại trở về trong nước.' },
        { slug: 'vpop-rap-viet', focus: 'Vinahouse, rap Việt, Đen Vâu, Suboi.' },
        { slug: 'nhac-co-dien-viet-nam', focus: 'Giao hưởng, opera, dàn nhạc, piano Việt Nam.' },
        { slug: 'piano-viet-nam', focus: 'Âm nhạc piano Việt Nam và chất liệu dân gian.' },
        { slug: 'ban-quyen-am-nhac-viet-nam', focus: 'VCPMC; các vụ tranh chấp đã có phán quyết.' },
        { slug: 'di-san-phi-vat-the-va-am-nhac', focus: 'Công ước UNESCO 2003 và các di sản âm nhạc Việt Nam.' },
      ], exercises: ['Chọn một di sản âm nhạc được UNESCO ghi danh: tóm tắt hồ sơ, tình trạng thực hành hôm nay và một phê phán về việc "di sản hoá".'] },
      { title: 'Chân dung nhạc sĩ (I): thế hệ tiên phong và kháng chiến', intro: 'Những nhạc sĩ sinh trước năm 1930 — người mở đường tân nhạc, người viết hùng ca, tình ca, ca khúc kháng chiến và những tác phẩm hàn lâm đầu tiên. Xếp theo năm sinh.', chapters: [
        { slug: 'nhac-si-viet-nam', focus: 'Danh mục nhạc sĩ theo thời kỳ, năm sinh – mất, tác phẩm đã kiểm chứng.' },
        { slug: 'nguyen-van-tuyen', focus: 'Kiếp hoa (1937); người mở đầu phong trào nhạc cải cách.' },
        { slug: 'dinh-nhu', focus: 'Cùng nhau đi hồng binh (1930 – 1931).' },
        { slug: 'nguyen-xuan-khoat', focus: 'Xuân Thu nhã tập; Chủ tịch đầu tiên của Hội Nhạc sĩ Việt Nam.' },
        { slug: 'le-thuong', focus: 'Bản đàn xuân, Tiếng đàn đêm khuya, trường ca Hòn vọng phu.' },
        { slug: 'van-chung', focus: 'Tiếng sáo chăn trâu (1935); tân nhạc thời đầu.' },
        { slug: 'duong-thieu-tuoc', focus: 'Nhóm Myosotis; Tâm hồn anh tìm em (1936).' },
        { slug: 'tham-oanh', focus: 'Nhóm Myosotis; Khúc yêu đương trên Ngày Nay (1938).' },
        { slug: 'dang-the-phong', focus: 'Ba bài thu: Đêm thu, Con thuyền không bến, Giọt mưa thu.' },
        { slug: 'nguyen-van-thuong', focus: 'Đêm đông (1939); nhạc vũ kịch Tấm Cám.' },
        { slug: 'hoang-quy', focus: 'Nhóm Đồng Vọng; Cô láng giềng, Trên sông Bạch Đằng, Cảm tử quân.' },
        { slug: 'luu-huu-phuoc', focus: 'Lên đàng, Tiếng gọi thanh niên, Giải phóng miền Nam.' },
        { slug: 'pham-duy', focus: 'Hơn 1.000 bài từ kháng chiến tới hải ngoại; tác giả Musics of Vietnam.' },
        { slug: 'do-nhuan', focus: 'Du kích sông Thao, Việt Nam quê hương tôi; opera Cô Sao.' },
        { slug: 'hoang-trong', focus: '"Vua tango": ban Thiên Thai, Phút chia ly.' },
        { slug: 'van-cao', focus: 'Thiên Thai, Tiến quân ca, Trường ca Sông Lô.' },
        { slug: 'doan-chuan', focus: '"Nhạc sĩ của mùa thu Hà Nội".' },
        { slug: 'hoang-viet', focus: 'Nhạc rừng, Lá xanh; giao hưởng Quê hương.' },
        { slug: 'hoang-thi-tho', focus: 'Hơn 500 bài: tình ca, ca khúc quê hương, trường ca, nhạc kịch.' },
      ], exercises: ['Chọn hai nhạc sĩ cùng thế hệ nhưng khác con đường (ví dụ Văn Cao và Phạm Duy, hoặc Đỗ Nhuận và Hoàng Thi Thơ): so sánh tiểu sử, thể loại, phong cách trong một trang.'] },
      { title: 'Chân dung nhạc sĩ (II): từ sau 1930 tới hôm nay', intro: 'Những nhạc sĩ sinh từ năm 1930 — ca khúc thời chiến và thời bình, nhạc hàn lâm trong nước và hải ngoại, rock và V-pop. Xếp theo năm sinh.', chapters: [
        { slug: 'pham-tuyen', focus: 'Khoảng 700 bài; Như có Bác Hồ trong ngày vui đại thắng; ca khúc thiếu nhi.' },
        { slug: 'ton-that-tiet', focus: 'Học với Jolivet ở Paris; Kiêm Ái; nhạc phim Trần Anh Hùng.' },
        { slug: 'y-van', focus: 'Lòng mẹ (1952); ca khúc nhịp disco, twist, cha-cha-cha ở Sài Gòn.' },
        { slug: 'hong-dang', focus: 'Hoa sữa, Biển hát chiều nay; hơn 70 nhạc phim.' },
        { slug: 'nguyen-tai-tue', focus: 'Xa khơi, Tiếng hát giữa rừng Pác Bó.' },
        { slug: 'nguyen-thien-dao', focus: 'Học với Messiaen; nhạc đương đại ở Pháp.' },
        { slug: 'nguyen-anh-9', focus: 'Không, Buồn ơi chào mi, Tình yêu đến không giã từ.' },
        { slug: 'tu-cong-phung', focus: 'Bây giờ tháng mấy (1963); khoảng 200 tình ca.' },
        { slug: 'nguyen-cuong', focus: '"Gã cao bồi phố Hàng Bạc".' },
        { slug: 'pho-duc-phuong', focus: 'Chảy đi sông ơi, Trên đỉnh Phù Vân; giám đốc đầu tiên của VCPMC.' },
        { slug: 'tran-tien', focus: 'Giọng sáng tác thời Đổi mới: Mặt trời bé con, Giấc mơ Chapi.' },
        { slug: 'phu-quang', focus: 'Hơn 600 bài; Em ơi Hà Nội phố.' },
        { slug: 'dang-huu-phuc', focus: 'Nhạc phim Mùa ổi; tác phẩm piano.' },
        { slug: 'tran-lap', focus: 'Rock Việt: Bức Tường.' },
        { slug: 'son-tung-m-tp', focus: 'V-pop thời mạng xã hội.' },
      ], exercises: ['Chọn một ca khúc sau 1975 dùng chất liệu dân ca: chỉ ra chất liệu gốc (điệu thức, làn điệu, nhạc cụ) và cách nhạc sĩ biến đổi nó.'] },
      { title: 'Thực hành, sáng tác, nghiên cứu và ôn tập', intro: 'Đưa kiến thức vào đôi tay: hoà âm cho dân ca, các điệu đệm ca khúc Việt, đặt lời tiếng Việt, sáng tác với chất liệu Việt. Rồi các nguồn để đọc tiếp, bảng phân định giai thoại, và đề cương ôn tập theo giáo trình đại học.', chapters: [
        { slug: 'hoa-am-cho-giai-dieu-ngu-cung', focus: 'Hoà âm giữ màu ngũ cung: âm nền, quãng 5 song song, hợp âm 6 và 7 thứ.' },
        { slug: 'dem-dieu-viet-nam', focus: 'Bolero, rumba, slow, valse, boston, tango… — nhịp, tốc độ, cách đệm.' },
        { slug: 'viet-cho-loi-ca', focus: 'Phổ nhạc cho lời: nhấn, nhịp, nguyên âm, thanh điệu tiếng Việt.' },
        { slug: 'sang-tac-voi-chat-lieu-viet', focus: 'Ba cách dùng dân ca theo Bartók; các lớp chất liệu Việt.' },
        { slug: 'nghien-cuu-am-nhac-viet-nam', focus: 'Trần Văn Khê, Tô Ngọc Thanh, Tô Vũ, Phạm Duy, Gibbs, Norton…' },
        { slug: 'tu-lieu-lich-su-tan-nhac', focus: 'Báo chí, hồi ký, sách tổng thuật, đĩa hát và nghiên cứu.' },
        { slug: 'giai-thoai-am-nhac-viet-nam', focus: 'Truyền thuyết nguồn gốc và chuyện bài hát — phán định từng mục.' },
        { slug: 'am-nhac-viet-nam-cuoi-the-ky-xix-1975', focus: 'Đề cương học phần và tám câu hỏi thi dẫn tới bài trả lời.' },
      ], exercises: ['Hoà âm và đệm piano cho một bài dân ca (ví dụ Lý cây đa hoặc Trống cơm) theo hai cách: giữ trọn ngũ cung và hoà âm chức năng; ghi lại khác biệt về màu sắc.', 'Trả lời đầy đủ một câu trong tám câu hỏi thi của bài đề cương, dài khoảng hai trang, có dẫn nguồn.'] },
    ],
  },
  {
    id: 'jazz-theory-book-1',
    title: 'The Jazz Theory Book',
    volume: 'Tập 1 · Nền tảng',
    subtitle: 'Nhập môn jazz, swing, blues, hợp âm jazz, ii – V – I, turnaround, line cliché và cách đọc một tiến trình.',
    author: 'Lamar',
    audience: 'Đã học Nhạc Lý Cơ Bản và hợp âm 7; người chơi piano muốn bước vào jazz',
    hue: 42,
    glyph: '♭',
    coverImage: jazzCover1,
    preface: jazzPreface(1, 'nhập môn, swing, blues, hợp âm jazz và các tiến trình — nền móng của mọi tập sau.'),
    parts: JAZZ_PARTS.slice(0, 4),
  },
  {
    id: 'jazz-theory-book-2',
    title: 'The Jazz Theory Book',
    volume: 'Tập 2 · Hoà âm và thế bấm',
    subtitle: 'Hệ thống hợp âm – âm giai, xếp hợp âm và thế bấm từ shell tới upper structure, tay trái, bass đi, comping và đệm.',
    author: 'Lamar',
    audience: 'Đã học Tập 1',
    hue: 42,
    glyph: '♭',
    coverImage: jazzCover2,
    preface: jazzPreface(2, 'hợp âm – âm giai, thế bấm, tay trái và đệm — lý thuyết thành âm thanh trên phím đàn.'),
    parts: JAZZ_PARTS.slice(4, 7),
  },
  {
    id: 'jazz-theory-book-3',
    title: 'The Jazz Theory Book',
    volume: 'Tập 3 · Tái hoà âm và hình thức',
    subtitle: 'Thay thế hợp âm, hợp âm lướt, tái hoà âm (gospel, đổi nhịp, đổi thể loại), constant structures, ca khúc 32 ô, rhythm changes và vòng Coltrane.',
    author: 'Lamar',
    audience: 'Đã học Tập 1 – 2',
    hue: 42,
    glyph: '♭',
    coverImage: jazzCover3,
    preface: jazzPreface(3, 'thay thế, tái hoà âm và các hình thức chuẩn mọi người chơi jazz phải thuộc.'),
    parts: JAZZ_PARTS.slice(7, 9),
  },
  {
    id: 'jazz-theory-book-4',
    title: 'The Jazz Theory Book',
    volume: 'Tập 4 · Ngẫu hứng và sáng tác',
    subtitle: 'Ngẫu hứng từ nốt dẫn hướng tới superimposition và triad pairs, xây dựng và phân tích bài solo, sáng tác, jazz điệu thức và jazz hiện đại.',
    author: 'Lamar',
    audience: 'Đã học Tập 1 – 3',
    hue: 42,
    glyph: '♭',
    coverImage: jazzCover4,
    preface: jazzPreface(4, 'ngẫu hứng — nền tảng, phương pháp, nâng cao, bài solo — rồi sáng tác và jazz hiện đại.'),
    parts: JAZZ_PARTS.slice(9, 13),
  },
]

/** "Về tác giả", shared by every book and course. */
export const ABOUT_AUTHOR = `
**Lamar** — tên thật là **Trần Lâm**.

- Tốt nghiệp **Piano** hệ trung cấp dài hạn 11 năm tại **Nhạc viện TP. Hồ Chí Minh**.
- Tốt nghiệp đại học chuyên ngành **Âm nhạc học** tại Nhạc viện TP. Hồ Chí Minh.
- Cố vấn và quản lý âm nhạc.
- Nhà sản xuất âm nhạc.
- Nhà nghiên cứu theo hướng **âm nhạc học hệ thống** (*systematic musicology*) — ngành nối lý thuyết âm nhạc với âm học, tâm lý học âm nhạc, khoa học biểu diễn và âm nhạc học tính toán; xem [[am-nhac-hoc-he-thong]].

Các sách và giáo trình trong tủ sách này do Lamar biên soạn và tổng hợp từ thư viện của Trung tâm lý thuyết âm nhạc học by Lamar.
`

/** Opening of every foreword: who compiled the book, how, and what it aims for. */
export const foreword = (title: string) => `
**${title}** do **Lamar** biên soạn và tổng hợp. Nội dung các bài lấy từ thư viện của Trung tâm lý thuyết âm nhạc học by Lamar — nơi Lamar viết và đối chiếu từng bài với nguồn — rồi được sắp xếp lại thành một trình tự học, có lời dẫn, mục tiêu, câu hỏi và bài tập riêng cho sách.

Cuốn sách này không đứng một mình. Nó là một viên gạch trong một công trình lớn hơn nhiều: một **tủ sách âm nhạc tiếng Việt** đi từ nốt nhạc đầu tiên của đứa trẻ ngồi vào đàn cho tới những câu hỏi khó nhất của sáng tác, phân tích và âm nhạc học. Người Việt học nhạc lâu nay phải ghép tri thức từ những mảnh rời: một cuốn dịch chỗ này, một bài giảng chép tay chỗ kia, một video không rõ nguồn. Lamar muốn những mảnh ấy trở thành **một hệ thống liền mạch**, viết bằng tiếng mẹ đẻ, đủ sâu để đứng cạnh các giáo trình của những nền giáo dục âm nhạc lớn nhất thế giới.

## Lamar hướng đến
- **Một bộ giáo trình tiếng Việt có hệ thống.** Mỗi cuốn là một con đường học rõ ràng, từ dễ đến khó, và mọi cuốn nối vào nhau thành một tấm bản đồ chung: nhạc lý dẫn tới hoà âm, hoà âm dẫn tới phức điệu và hình thức, hình thức dẫn tới phân tích và sáng tác. Không có bài nào là ốc đảo.
- **Kiến thức có nguồn, trung thực tới từng dòng.** Mỗi bài ghi tài liệu tham khảo; chỗ nào nguồn chưa đối chiếu hoặc mâu thuẫn được ghi rõ ngay trong bài. Lamar tin rằng người học xứng đáng được biết điều gì là chắc chắn, điều gì còn bỏ ngỏ — và rằng một nền học thuật chỉ đứng vững khi nó dám nói "chỗ này chưa rõ".
- **Đi tới tận nguồn.** Thay vì học qua lời kể lại nhiều lớp, tủ sách đọc thẳng những tác phẩm nền tảng — Fux, Albrechtsberger, Taneev, Sposobin, Mazel, Asafyev và nhiều người khác — rồi đem chúng về tiếng Việt, đặt cạnh nhau, đối chiếu và nối thành một mạch.
- **Học bằng tai và tay.** Mọi khái niệm đều được nghe, chơi trên đàn và tìm lại trong tác phẩm thật. Lý thuyết không phải để thuộc lòng; lý thuyết là cách để nghe sâu hơn, chơi đúng hơn và viết hay hơn.
- **Nhìn âm nhạc rộng hơn lý thuyết sách vở.** Theo tinh thần âm nhạc học hệ thống, các bài nối lý thuyết với âm học, tâm lý nghe, khoa học biểu diễn, lịch sử và triết học — để người học hiểu *vì sao*, không chỉ nhớ *luật*.
- **Phục vụ người dạy lẫn người tự học.** Giáo viên có một trình tự dạy chặt chẽ; người tự học, dù ở bất cứ đâu, có thể tự đi trọn con đường mà không cần ai dắt tay.
- **Mở cho tất cả.** Tri thức âm nhạc không nên là đặc quyền của số ít người may mắn được vào nhạc viện. Ai có một chiếc điện thoại và lòng ham học đều có thể mở tủ sách này ra và bắt đầu.

## Mục tiêu tối thượng
Mục tiêu tối thượng của Lamar là **góp phần đặt nền móng cho một nền học thuật âm nhạc Việt Nam viết bằng tiếng Việt** — một nền móng đủ vững để các thế hệ sau đứng lên đó mà đi xa hơn. Lamar mong có một ngày người Việt học nhạc không còn phải cảm thấy tri thức lớn luôn nằm ở một ngôn ngữ khác; một ngày học trò Việt Nam có thể đọc Sposobin, Fux hay Asafyev bằng chính tiếng mình, hiểu chúng đến tận gốc, rồi dùng chúng để nghe, để chơi, để viết nên âm nhạc của chính dân tộc mình và để đối thoại ngang hàng với thế giới.

Mỗi cuốn sách trong tủ sách là một bước trên con đường ấy. Con đường còn dài, và sẽ không bao giờ thật sự kết thúc — vì âm nhạc không bao giờ kết thúc. Nhưng nếu cuốn sách này giúp một người hiểu sâu hơn một bản nhạc, dạy hay hơn một buổi học, hay can đảm viết ra nốt nhạc đầu tiên của riêng mình, thì nó đã làm được điều Lamar mong muốn.
`

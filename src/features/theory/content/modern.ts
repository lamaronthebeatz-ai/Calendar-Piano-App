import type { Article } from '../wiki'

export const modern: Article[] = [
  {
    slug: 'cac-thoi-ky',
    title: 'Các thời kỳ âm nhạc phương Tây',
    category: 'modern',
    aliases: ['thời kỳ', 'lịch sử âm nhạc', 'Baroque', 'Cổ điển', 'Lãng mạn', 'Phục hưng', 'Trung cổ', 'Classical period', 'Romantic', 'Renaissance', 'phong cách'],
    summary: 'Sáu giai đoạn lớn từ Trung cổ đến thế kỷ 20 — mỗi thời kỳ gắn với những kỹ thuật lý thuyết riêng.',
    wiki: 'Classical_music',
    body: `
| Thời kỳ | Khoảng năm | Nhà soạn nhạc tiêu biểu | Đặc trưng lý thuyết |
|---|---|---|---|
| [[thoi-ky-trung-co|Trung cổ]] | ~500–1400 | [[Hildegard von Bingen]], [[Machaut]] | Thánh ca đơn âm, [[dieu-thuc|điệu thức nhà thờ]], khởi đầu phức điệu |
| [[thoi-ky-phuc-hung|Phục hưng]] | ~1400–1600 | [[Josquin]], [[Palestrina]] | [[doi-am]] thanh nhạc, quãng 3 và 6 trở thành [[thuan-nghich|thuận]] |
| [[thoi-ky-baroque|Baroque]] | ~1600–1750 | [[Bach]], [[Handel]], [[Vivaldi]] | [[bass-so]], [[fugue]], [[mo-tien-hoa-am]], hệ thống trưởng – thứ được xác lập |
| [[thoi-ky-co-dien|Cổ điển]] | ~1750–1820 | [[Haydn]], [[Mozart]], [[Beethoven]] | [[hinh-thuc-sonata]], [[ket-cau|chủ điệu]] với bass Alberti, câu nhạc cân đối |
| [[thoi-ky-lang-man|Lãng mạn]] | ~1820–1900 | [[Chopin]], [[Schumann]], [[Liszt]], [[Brahms]], [[Wagner]] | [[hoa-am-cromatic]], [[trung-am-cromatic]], rubato, tiểu phẩm piano |
| [[thoi-ky-the-ky-20|Thế kỷ 20 – nay]] | 1900– | [[Debussy]], [[Schoenberg]], [[Stravinsky]], [[Bartók]], [[Steve Reich|Reich]] | [[an-tuong]], [[phi-dieu-tinh]], [[ky-thuat-12-am]], [[nhip-hon-hop]], [[toi-gian]] |

## Song song với nhạc cổ điển
Từ đầu thế kỷ 20: **jazz** (ragtime → swing → bebop → modal…), rồi nhạc pop/rock — kế thừa hoà âm chức năng và phát triển theo hướng riêng (xem [[swing]], [[he-thong-hop-am-am-giai]]).

Danh sách đầy đủ theo từng thời kỳ và trường phái: xem nhóm **Nhà soạn nhạc** — mỗi người có một trang riêng.

## Với người học piano
Biết thời kỳ giúp chọn cách chơi đúng phong cách: hoa mỹ và cách dùng pedal (xem [[ky-hieu-hoa-my]], [[ban-dap]]) ở nhạc Bach khác hẳn Chopin.

Hệ thống lên dây cũng thay đổi theo thời gian: xem [[luat-binh-quan]].
`,
  },
  {
    slug: 'an-tuong',
    title: 'Hoà âm ấn tượng',
    category: 'modern',
    aliases: ['ấn tượng', 'impressionism', 'hợp âm song song', 'hoà âm phi chức năng'],
    summary: 'Phong cách đầu thế kỷ 20 (Debussy, Ravel): hợp âm được dùng như "màu sắc" thay vì chức năng, các hợp âm trượt song song, âm giai ngũ cung và toàn cung.',
    wiki: 'Impressionism_in_music',
    body: `
## Các kỹ thuật đặc trưng
- **Hợp âm trượt song song** (planing): cả khối hợp âm di chuyển cùng hướng, phá bỏ quy tắc cấm [[dan-giong|quãng 5 song song]]. Ví dụ: "La cathédrale engloutie" của [[Debussy]].
- **Âm giai không trưởng – thứ**: [[am-giai-cromatic|toàn cung]], [[am-giai-ngu-cung|ngũ cung]], [[dieu-thuc|điệu thức nhà thờ]].
- **Hợp âm mở rộng không giải quyết**: hợp âm 9, 11, 13 được ngân như một màu sắc ([[hop-am-mo-rong]]).
- **Hoà âm quãng 4 và 5**: xem [[hoa-am-quang-bon]].
- **Bass ngân dài**, nhịp điệu mềm, mờ ranh giới ô nhịp ([[bass-ngan]]).

::staff treble C4+E4+G4+B4 D4+F4+A4+C5 E4+G4+B4+D5 F4+A4+C5+E5 | Hợp âm 7 trượt song song theo âm giai — "planing" diatonic

## Tác phẩm piano tiêu biểu
- [[Debussy]]: "Clair de lune", 24 Préludes, Estampes.
- [[Ravel]]: Jeux d'eau, Gaspard de la nuit.

Hoà âm ấn tượng ảnh hưởng mạnh đến jazz (Bill Evans) và nhạc phim. Bối cảnh: [[cac-thoi-ky]].
`,
  },
  {
    slug: 'phi-dieu-tinh',
    title: 'Âm nhạc phi điệu tính',
    category: 'modern',
    aliases: ['phi điệu tính', 'atonality', 'atonal', 'vô điệu tính', 'giải phóng nghịch âm', 'Trường phái Vienna thứ hai'],
    summary: 'Âm nhạc không có chủ âm hay giọng làm trung tâm; mọi 12 nửa cung bình đẳng, nghịch âm không cần giải quyết.',
    wiki: 'Atonality',
    body: `
Âm nhạc có tính điệu được tổ chức quanh một [[bac-am-giai|chủ âm]] và [[chuc-nang-hoa-am|hoà âm chức năng]]. Từ khoảng năm 1908–1909, **[[Schoenberg|Arnold Schoenberg]]** viết những tác phẩm từ bỏ hoàn toàn trung tâm này — ví dụ Ba tiểu phẩm piano Op. 11 (1909).

## Đặc điểm
- Không có [[hoa-bieu]]; [[dau-hoa]] được ghi trực tiếp cho từng nốt.
- **"Giải phóng nghịch âm"**: [[thuan-nghich|nghịch âm]] không còn phải giải quyết về thuận âm.
- Sự mạch lạc đến từ [[motif]], quãng đặc trưng và tập hợp nốt, thay vì từ [[cau-ket]].

## Trường phái Vienna thứ hai
[[Schoenberg]] cùng hai học trò [[Alban Berg]] và [[Anton Webern]]. Giai đoạn "phi điệu tính tự do" (khoảng 1908–1921) dẫn tới [[ky-thuat-12-am]].

## Công cụ phân tích
[[tap-hop-cao-do|Lý thuyết tập hợp cao độ]] được phát triển để phân tích loại nhạc này. Tiền thân: [[hoa-am-cromatic]] cuối thời Lãng mạn.
`,
  },
  {
    slug: 'ky-thuat-12-am',
    title: 'Kỹ thuật 12 âm',
    category: 'modern',
    aliases: ['12 âm', 'twelve-tone', 'dodecaphony', 'serialism', 'chuỗi 12 âm', 'tone row', 'hàng âm', 'âm nhạc chuỗi', 'ma trận 12 âm'],
    summary: 'Phương pháp sáng tác của Schoenberg: cả bản nhạc được xây từ một "chuỗi" sắp xếp đủ 12 nửa cung, mỗi nốt chỉ xuất hiện một lần.',
    wiki: 'Twelve-tone_technique',
    body: `
Schoenberg hệ thống hoá phương pháp này vào đầu những năm 1920 để tạo trật tự cho [[phi-dieu-tinh|âm nhạc phi điệu tính]]. Suite cho piano Op. 25 là một trong những tác phẩm 12 âm hoàn chỉnh đầu tiên.

## Chuỗi (hàng âm)
Nhà soạn nhạc sắp xếp 12 nốt của [[am-giai-cromatic]] theo một thứ tự riêng. Không nốt nào được lặp lại trước khi đủ 12 nốt — để không nốt nào nổi lên thành chủ âm.

::img Schoenberg - Piano Piece op.33a tone row.png | Chuỗi 12 âm của Klavierstück Op. 33a (Schoenberg)

## Bốn dạng biến đổi
| Dạng | Ký hiệu | Cách tạo |
|---|---|---|
| Nguyên dạng | P | Chuỗi gốc |
| Đảo | I | Lật ngược mọi [[quang|quãng]] (lên thành xuống) |
| Nghịch hành | R | Đọc từ cuối về đầu |
| Đảo nghịch hành | RI | Đảo rồi đọc ngược |

Mỗi dạng có thể dịch lên 12 cao độ → **48 dạng** của một chuỗi, thường được sắp xếp thành **ma trận 12 × 12**. Các phép biến đổi này giống kỹ thuật phát triển [[motif]] truyền thống.

## Chủ nghĩa chuỗi toàn phần
Sau 1945, [[Messiaen]], [[Boulez]], [[Karlheinz Stockhausen|Stockhausen]] áp dụng "chuỗi" cả cho [[truong-do]], [[cuong-do]], [[cach-dien-tau]]. Công cụ phân tích: [[tap-hop-cao-do]].
`,
  },
  {
    slug: 'tap-hop-cao-do',
    title: 'Lý thuyết tập hợp cao độ',
    category: 'modern',
    aliases: ['pitch-class set', 'set theory', 'lớp cao độ', 'pitch class', 'số Forte', 'Forte number', 'prime form', 'vector quãng', 'interval vector', 'ký hiệu số nguyên'],
    summary: 'Công cụ phân tích nhạc thế kỷ 20: biểu diễn nốt bằng số 0–11, nhóm thành tập hợp và so sánh cấu trúc quãng giữa chúng.',
    wiki: 'Set_theory_(music)',
    body: `
## Lớp cao độ và số nguyên
Bỏ qua quãng 8 và tên [[trung-am]], mỗi nốt là một **lớp cao độ** đánh số: C = 0, C♯/D♭ = 1, D = 2 … B = 11. Phép tính theo **mod 12** (như mặt đồng hồ).

| Nốt | C | C♯ | D | D♯ | E | F | F♯ | G | G♯ | A | A♯ | B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Số | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |

## Dạng chuẩn và dạng nguyên tố
- C trưởng = {0, 4, 7}; A thứ = {9, 0, 4}.
- **Dạng nguyên tố** (prime form) đưa tập hợp về dạng gọn nhất bắt đầu từ 0, coi phép dịch giọng và phép đảo là tương đương. Hợp âm trưởng và thứ có chung dạng nguyên tố **(037)** — Allen Forte đặt tên là **3-11**.

## Vector quãng
Đếm số lần xuất hiện của 6 loại quãng (1 đến 6 nửa cung) trong tập hợp. Hợp âm trưởng (037) có vector **⟨001110⟩**: một quãng 3 thứ, một quãng 3 trưởng, một quãng 4 đúng (= 5 đúng đảo).

## Ứng dụng
Allen Forte (*The Structure of Atonal Music*, 1973) hệ thống hoá phương pháp này để phân tích [[phi-dieu-tinh]] và [[ky-thuat-12-am]]. Tư duy "đồng hồ 12 giờ" cũng giải thích vì sao [[hop-am-bay-giam]] và [[am-giai-bat-cung]] đối xứng.
`,
  },
  {
    slug: 'am-giai-bat-cung',
    title: 'Âm giai bát cung',
    category: 'modern',
    aliases: ['octatonic', 'octatonic scale', 'diminished scale', 'âm giai giảm', 'nửa cung – cung', 'cung – nửa cung', 'mode 2 Messiaen'],
    summary: 'Âm giai 8 nốt xen kẽ nửa cung và cung; chỉ có 3 phiên bản khác nhau — gắn liền với hợp âm 7 giảm.',
    wiki: 'Octatonic_scale',
    body: `
Hai dạng (bắt đầu từ C):
- **Nửa cung – cung**: C – D♭ – E♭ – E – F♯ – G – A – B♭.
- **Cung – nửa cung**: C – D – E♭ – F – F♯ – G♯ – A – B.

::keyboard C4 Db4 Eb4 E4 F#4 G4 A4 Bb4 | Bát cung nửa cung – cung trên C

## Đối xứng
Âm giai là hợp của **hai [[hop-am-bay-giam|hợp âm 7 giảm]]** (C – E♭ – F♯ – A và D♭ – E – G – B♭). Dịch lên quãng 3 thứ cho ra chính nó → chỉ có **3** âm giai bát cung khác nhau (giống [[am-giai-cromatic|âm giai toàn cung]] chỉ có 2).

## Ứng dụng
- **Jazz**: dạng nửa cung – cung trên hợp âm 7 át ♭9 (C7♭9); dạng cung – nửa cung trên hợp âm °7 (xem [[he-thong-hop-am-am-giai]]).
- **Cổ điển**: Rimsky-Korsakov, Stravinsky ("Petrushka", "Le Sacre du printemps"), Bartók; Messiaen gọi nó là "điệu thức chuyển vị giới hạn số 2".

::img Diminished scales on Db, D, and Eb.PNG | Ba âm giai bát cung — tất cả những gì tồn tại

Phân tích bằng [[tap-hop-cao-do]]: {0, 1, 3, 4, 6, 7, 9, 10}.
`,
  },
  {
    slug: 'da-dieu-tinh',
    title: 'Đa điệu tính',
    category: 'modern',
    aliases: ['polytonality', 'bitonality', 'song điệu tính', 'hợp âm Petrushka', 'Petrushka chord'],
    summary: 'Hai hoặc nhiều giọng vang lên cùng lúc — ví dụ tay phải ở Đô trưởng, tay trái ở Fa♯ trưởng.',
    wiki: 'Polytonality',
    body: `
Mỗi lớp giữ [[hoa-bieu|giọng]] riêng của nó, tạo ra những va chạm [[thuan-nghich|nghịch]] có tổ chức.

## Hợp âm Petrushka
[[Stravinsky]] (ballet "Petrushka", 1911): **C trưởng + F♯ trưởng** vang cùng lúc — hai giọng cách nhau một tritone, xa nhau nhất trên [[vong-quang-nam]].

::keyboard C4 E4 G4 F#5 A#5 C#6 | Hợp âm Petrushka: C trưởng (dưới) + F♯ trưởng (trên)

Đáng chú ý: tất cả các nốt của hợp âm này nằm trong một [[am-giai-bat-cung]].

## Các nhà soạn nhạc
- [[Milhaud|Darius Milhaud]] — "Saudades do Brasil" (piano).
- [[Ives|Charles Ives]], [[Bartók|Béla Bartók]].

## Thử trên piano
Tay phải chơi giai điệu đơn giản trên phím trắng, tay trái đệm hợp âm trên phím đen (F♯ – A♯ – C♯) — một bài tập [[ket-cau]] thú vị. Liên quan: [[phi-dieu-tinh]], [[cac-thoi-ky]].
`,
  },
  {
    slug: 'am-cum',
    title: 'Âm cụm',
    category: 'modern',
    aliases: ['tone cluster', 'cluster', 'cụm âm', 'hợp âm cụm'],
    summary: 'Nhiều nốt liền nhau (cách nhau nửa cung hoặc một cung) vang cùng lúc — thường chơi bằng lòng bàn tay hoặc cẳng tay.',
    wiki: 'Tone_cluster',
    body: `
Thay vì chồng [[quang|quãng 3]] ([[hop-am-ba]]) hay quãng 4 ([[hoa-am-quang-bon]]), âm cụm chồng **quãng 2** — âm thanh dày đặc, giống một "khối màu" hơn là hợp âm.

::keyboard C4 D4 E4 F4 G4 | Âm cụm phím trắng C – G (dùng lòng bàn tay)
::keyboard F#4 G#4 A#4 C#5 D#5 | Âm cụm phím đen (dùng nắm tay hoặc lòng bàn tay)

## Các loại
- **Diatonic**: chỉ phím trắng.
- **Ngũ cung**: chỉ phím đen.
- **Cromatic**: cả phím trắng và đen — dày đặc nhất.

## Nhà soạn nhạc
- **[[Cowell|Henry Cowell]]** — "The Tides of Manaunaun" (1917): tay trái chơi âm cụm bằng cẳng tay.
- Charles Ives — Concord Sonata (dùng một thanh gỗ để nhấn âm cụm).
- Ligeti, Penderecki — âm cụm cho dàn nhạc.

Trong nhạc pop và jazz, "cluster voicing" (các [[hop-am-mo-rong|nốt mở rộng]] xếp sát nhau) là một dạng âm cụm nhẹ — xem [[xep-hop-am]].
`,
  },
  {
    slug: 'toi-gian',
    title: 'Âm nhạc tối giản',
    category: 'modern',
    aliases: ['minimalism', 'tối giản', 'minimal music', 'phasing', 'lệch pha'],
    summary: 'Phong cách từ những năm 1960: các mẫu ngắn lặp lại liên tục và biến đổi rất chậm, hoà âm đơn giản, nhịp đều.',
    wiki: 'Minimal_music',
    body: `
## Kỹ thuật chính
- **Lặp lại**: một [[ostinato]] ngắn được lặp đi lặp lại hàng chục, hàng trăm lần.
- **Quá trình cộng**: thêm từng nốt vào mẫu (1 → 1 2 → 1 2 3…) — Philip Glass.
- **Lệch pha** (phasing): hai người chơi cùng một mẫu, một người tăng tốc rất nhẹ cho đến khi lệch một nốt rồi khớp lại — Steve Reich, "Piano Phase" (1967) cho hai cây đàn piano.
- **Hoà âm tĩnh**: một hoặc vài hợp âm kéo dài; thay đổi nhỏ trở nên rất rõ.

## Tác phẩm tiêu biểu
- [[Terry Riley]] — "In C" (1964): 53 mẫu nhạc ngắn, mỗi người chơi tự quyết định khi nào chuyển mẫu.
- [[Steve Reich]] — "Music for 18 Musicians".
- [[Philip Glass]] — "Metamorphosis", "Glassworks" (piano).

## Ảnh hưởng
Nhạc phim, nhạc điện tử, post-rock và nhạc piano "tân cổ điển" (Ludovico Einaudi, Max Richter). Liên quan: [[da-nhip]], [[ket-cau]], [[cac-thoi-ky]].
`,
  },
  {
    slug: 'hoa-am-dieu-thuc',
    title: 'Hoà âm điệu thức',
    category: 'modern',
    aliases: ['modal harmony', 'hợp âm điệu thức', 'kết điệu thức', 'modal cadence', 'Dorian shuttle', 'nốt đặc trưng điệu thức', 'characteristic pitch'],
    summary: 'Cách dựng và nối hợp âm để làm nổi màu của một điệu thức (Dorian, Mixolydian, Lydian…) thay vì kéo về chủ âm bằng V – I: chọn hợp âm chứa nốt đặc trưng và dùng các kết riêng của từng điệu.',
    wiki: 'Mode_(music)',
    refs: [
      ['Open Music Theory 2e — Modal schemas', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/07%3A_Popular_Music/7.12%3A_Modal_Schemas'],
      ['Wardley — How do I mode? (PDF)', 'https://wardley.org/images/music/theory/HowDoIMode.pdf'],
      ['Open Music Theory — Popular music: modal harmony', 'https://pressbooks.nebraska.edu/openmusictheory/?p=558'],
      ['Wikipedia — So What (Miles Davis composition)', 'https://en.wikipedia.org/wiki/So_What_(Miles_Davis_composition)'],
    ],
    body: `
Trong [[he-thong-hoa-am-co-dien|hoà âm cổ điển]], giọng được xác lập bằng **V – I** và cảm âm. Trong **hoà âm điệu thức**, mục tiêu khác: làm nghe rõ **màu riêng** của một [[dieu-thuc|điệu thức]]. Thủ pháp này phổ biến trong nhạc ấn tượng, jazz điệu thức, nhạc phim và rất nhiều nhạc pop – rock.

## Nguyên tắc 1: làm nổi nốt đặc trưng
**Nốt đặc trưng** là nốt phân biệt điệu thức với âm giai trưởng hoặc thứ cùng chủ âm. Chọn hợp âm **chứa** nốt đó.
| Điệu thức | Nốt đặc trưng | Hợp âm đặc trưng | Tiến trình / kết tiêu biểu |
|---|---|---|---|
| **Dorian** | ♮6 | **IV trưởng** | i – IV ("con thoi Dorian") |
| **Mixolydian** | ♭7 | **♭VII** | ♭VII – I; kết "plagal kép" ♭VII – IV – I |
| **Lydian** | ♯4 | **II trưởng** | I – II; kết II – IV – I |
| **Aeolian** | ♭6, ♭7 | ♭VI, ♭VII | ♭VI – ♭VII – i (hoặc I) |
| **Phrygian** | ♭2 | **♭II** | ♭II – i |

## Nguyên tắc 2: tránh "kéo" về hoà âm trưởng – thứ
- Hợp âm **V7** và tritone của nó gợi mạnh giọng trưởng – thứ. Ví dụ ở Sol Mixolydian, G7 làm nổi tritone F – B; có thể xếp các nốt thành hợp âm **sus** trên G để tránh tritone.
- Hạn chế **cảm âm**: trong Dorian, Mixolydian, Aeolian, bậc 7 cách chủ âm **một cung** — chính điều này làm mất lực hút V – I.

## Hợp âm điệu thức vẫn có chức năng
Các hợp âm điệu thức nhìn chung vẫn **tương ứng chức năng** với hợp âm diatonic cùng vị trí, nhưng các nốt biến đổi làm ranh giới giữa các chức năng **chồng lấn** nhiều hơn. Vì thế kết điệu thức vẫn nghe có **đích đến** dù không có V – I.

## Ví dụ
- **"So What"** (Miles Davis, 1959): 16 ô Rê Dorian – 8 ô Mi♭ Dorian – 8 ô Rê Dorian; chỉ hai "vùng" hợp âm, người ngẫu hứng tự do theo điệu thức.
- **Debussy**: nhiều đoạn dùng điệu thức để "tắt" chức năng cảm âm (xem [[an-tuong]], [[hoa-am-song-song]]).
- **Hợp âm mượn** trong nhạc pop (♭VII, ♭VI) chính là mượn từ Mixolydian và Aeolian — xem [[hop-am-muon]].

Hệ thống hợp âm – âm giai trong jazz: [[he-thong-hop-am-am-giai]].
`,
  },
  {
    slug: 'toan-diatonic',
    title: 'Toàn diatonic',
    category: 'modern',
    aliases: ['toàn diatonic', 'pandiatonicism', 'pandiatonic', 'toàn âm giai', 'hoà âm toàn diatonic', 'pandiatonism'],
    summary: 'Dùng tự do mọi nốt của âm giai diatonic — kể cả vang cùng lúc — mà không theo cú pháp chức năng T – S – D; thường tạo hợp âm có quãng 2.',
    wiki: 'Pandiatonicism',
    refs: [
      ['Wikipedia — Pandiatonicism', 'https://en.wikipedia.org/wiki/Pandiatonicism'],
      ['Andy Brick — Contemporary theory notes: pandiatonicism', 'https://personal.stevens.edu/~abrick/contemp_theory/contemp_theory_notes_11.html'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Impressionism and extended tonality', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/32%3A_Impressionism_and_Extended_Tonality'],
      ['LCS Productions — Music history glossary: pandiatonicism', 'https://lcsproductions.net/MusicHistory/MusHistRev/Glossary/P.html'],
    ],
    body: `
**Toàn diatonic** (pandiatonicism) là kỹ thuật dùng âm giai **diatonic** (7 nốt, ví dụ chỉ phím trắng) **mà không bị ràng buộc bởi điệu tính chức năng**: các nốt không cần đóng vai trò bậc hay hợp âm có hướng giải quyết.

## Định nghĩa của Slonimsky
Thuật ngữ do nhà âm nhạc học **Nicolas Slonimsky** đặt (các nguồn ghi nơi xuất hiện khác nhau — trong sách *Music since 1900* hoặc trong từ điển Baker's). Theo ông, toàn diatonic cho phép dùng **cùng lúc bất kỳ hoặc tất cả bảy nốt** của âm giai diatonic, trong đó **bè trầm quyết định** hoà âm.

## Nhận biết
- Hoà âm **diatonic** (không có nốt lạ) nhưng **không có** tiến trình T – PD – D – T (xem [[chuc-nang-hoa-am]]).
- Hợp âm thường chứa ít nhất một **quãng 2** — không còn là chồng quãng 3 thuần tuý.
- Nghịch âm diatonic **không cần giải quyết**; âm thanh "trong" nhưng không "đi đâu".

## So sánh nhanh
| | Hoà âm chức năng | Toàn diatonic | [[am-cum|Âm cụm diatonic]] |
|---|---|---|---|
| Nguồn nốt | Diatonic + cromatic | Chỉ diatonic | Diatonic |
| Cách xếp | Chồng quãng 3 | Tự do, có quãng 2 | Toàn quãng 2 liền nhau |
| Hướng đi | Có (về chủ âm) | Không bắt buộc | Không |

## Ví dụ
[[Stravinsky]] — *Pulcinella*, một số đoạn trong *Petrushka*. Tổng quan các thủ pháp: [[hoa-am-the-ky-20]].
`,
  },
  {
    slug: 'hop-am-chong',
    title: 'Hợp âm chồng',
    category: 'modern',
    aliases: ['polychord', 'hợp âm chồng', 'hợp âm kép', 'upper structure', 'upper structure triad', 'hợp âm cấu trúc trên', 'bichord'],
    summary: 'Hai (hoặc nhiều) hợp âm vang cùng lúc, nghe được như những khối riêng — khác với đa điệu tính (hai giọng kéo dài) và với hợp âm mở rộng (một hợp âm cao).',
    wiki: 'Polychord',
    refs: [
      ['Wikipedia — Polychord', 'https://en.wikipedia.org/wiki/Polychord'],
      ['Wikipedia — Polytonality', 'https://en.wikipedia.org/wiki/Polytonality'],
      ['Wikipedia — Upper structure', 'https://en.wikipedia.org/wiki/Upper_structure'],
      ['Wikipedia — Petrushka chord', 'https://en.wikipedia.org/wiki/Petrushka_chord'],
      ['Kaminsky — Ravel\'s late music and the problem of polytonality / polymodality (PDF)', 'https://music.arts.uci.edu/abauer/201_2018/downloads/Kaminsky_Ravel_polymodality.pdf'],
      ['Harmony and Musicianship with Solfège — 20th-century compositional techniques', 'https://pressbooks.pub/harmonyandmusicianshipwithsolfege/?p=395'],
    ],
    body: `
**Hợp âm chồng** gồm hai hay nhiều hợp âm đặt chồng lên nhau, thường là **hai hợp âm ba**. Ký hiệu: hợp âm trên viết **trên** một vạch ngang, hợp âm dưới viết **dưới** (ví dụ F trên C).

## Ba khái niệm dễ nhầm
| Khái niệm | Bản chất | Cách nghe |
|---|---|---|
| **[[hop-am-mo-rong|Hợp âm mở rộng]]** | Một hợp âm cao (9, 11, 13) | Một khối, một nốt gốc |
| **Hợp âm chồng** | Hai hợp âm chồng nhau, là **một sự kiện âm thanh** | Tai phải nghe được **hai khối riêng** |
| **[[da-dieu-tinh|Đa điệu tính]]** | Hai **giọng** (trung tâm điệu tính) song song **kéo dài** | Hai lớp nhạc ở hai giọng |

Một tiêu chí cảm nhận: hai hợp âm **gần nhau** (nhiều nốt chung, gần trên vòng quãng 5) thường được nghe là **một hợp âm mở rộng**; hai hợp âm **xa nhau** mới được nghe là hợp âm chồng. Hindemith và Milton Babbitt thậm chí cho rằng tai **không thể** cảm nhận hai nốt gốc cùng lúc — vấn đề vẫn còn tranh luận.

## Hợp âm Petrushka
[[Stravinsky]] (*Petrushka*, 1911): **Đô trưởng + Fa♯ trưởng**, hai hợp âm cách nhau tritone. Hợp âm thường được giải thích bằng hình ảnh một nghệ sĩ piano rải đồng thời trên **phím trắng** và **phím đen**. Có tài liệu chỉ ra âm thanh tương tự đã xuất hiện trong *Jeux d'eau* (1901) của [[Ravel]] — mười năm trước.

::keyboard C4 E4 G4 F#5 A#5 C#6 | Đô trưởng + Fa♯ trưởng

## Trong jazz: hợp âm ba cấu trúc trên
Người chơi piano jazz đặt một **hợp âm ba** ở tay phải trên **khung 3 – 7** của hợp âm 7 át ở tay trái — gọi là **upper structure triad**. Ví dụ hợp âm Rê trưởng trên C7 cho ra C13♯11 (ký hiệu "US II"). Cách này chủ yếu dùng cho hợp âm át biến đổi (xem [[xep-hop-am]], [[he-thong-hop-am-am-giai]]).

Tổng quan: [[hoa-am-the-ky-20]].
`,
  },
  {
    slug: 'dieu-thuc-chuyen-vi-gioi-han',
    title: 'Điệu thức chuyển vị giới hạn',
    category: 'modern',
    aliases: ['modes of limited transposition', 'điệu thức Messiaen', 'Messiaen modes', 'chuyển vị giới hạn', 'âm giai đối xứng'],
    summary: 'Bảy âm giai đối xứng của Olivier Messiaen (1944): vì cấu trúc lặp lại bên trong, mỗi âm giai chỉ dịch giọng được một số ít lần trước khi trùng lại chính nó.',
    wiki: 'Mode_of_limited_transposition',
    refs: [
      ['Wikipedia — Mode of limited transposition', 'https://en.wikipedia.org/wiki/Mode_of_limited_transposition'],
      ['Routledge Encyclopedia of Modernism — Technique de mon langage musical', 'https://www.rem.routledge.com/articles/technique-de-mon-langage-musical'],
      ['arXiv — Messiaen et les mathématiques', 'https://arxiv.org/pdf/2008.11936'],
    ],
    body: `
Trong sách *Technique de mon langage musical* (Kỹ thuật ngôn ngữ âm nhạc của tôi, **1944**, NXB Leduc), [[Messiaen]] trình bày **bảy "điệu thức chuyển vị giới hạn"**.

## "Chuyển vị giới hạn" nghĩa là gì?
[[am-giai-truong|Âm giai trưởng]] dịch được sang **12** cao độ khác nhau. Nhưng một âm giai được xây từ **một mẫu quãng lặp lại** sẽ trùng lại chính nó sau ít lần dịch. Ví dụ âm giai toàn cung C – D – E – F♯ – G♯ – A♯: dịch lên nửa cung được một âm giai mới, nhưng dịch lên **một cung** lại ra **đúng các nốt cũ** → chỉ có **2** phiên bản.

## Bảy điệu thức
| Điệu | Cấu trúc | Số nốt | Số phiên bản |
|---|---|---|---|
| **1** | Toàn cung — [[am-giai-cromatic|âm giai toàn cung]] | 6 | 2 |
| **2** | Nửa cung – cung xen kẽ — [[am-giai-bat-cung|âm giai bát cung]] | 8 | 3 |
| **3** | Cung – nửa cung – nửa cung lặp lại | 9 | 4 |
| **4 – 7** | Các mẫu đối xứng khác | 6 – 10 | 6 mỗi điệu |

Điệu 1 và điệu 2 đã có trước Messiaen (âm giai toàn cung ở Debussy; âm giai bát cung ở các nhà soạn nhạc Nga như Rimsky-Korsakov); Messiaen hệ thống hoá chúng cùng các điệu mới thành một bộ.

## Vì sao "giới hạn" lại hấp dẫn?
- Vì mẫu lặp **chia quãng 8 thành các phần bằng nhau**, âm giai **không có một chủ âm duy nhất** — tạo cảm giác lơ lửng, "bất động", rất hợp với ý tưởng tôn giáo về sự vĩnh cửu trong nhạc Messiaen.
- Messiaen ưa thích **điệu 2**; ông có cảm thụ **màu – âm** và liên kết điệu này với các sắc **xanh – tím**.

Công cụ phân tích các âm giai đối xứng: [[tap-hop-cao-do]]. Tổng quan: [[hoa-am-the-ky-20]].
`,
  },
  {
    slug: 'nhac-pho',
    title: 'Âm nhạc phổ',
    category: 'modern',
    aliases: ['spectral music', 'spectralism', 'nhạc phổ', 'hoà âm phổ', 'Grisey', 'Murail'],
    summary: 'Trào lưu Pháp từ thập niên 1970 (Grisey, Murail): xây hoà âm từ phân tích phổ của âm thanh thật — các bồi âm và sự biến đổi của chúng theo thời gian.',
    wiki: 'Spectral_music',
    refs: [
      ['Wikipedia — Partiels', 'https://en.wikipedia.org/wiki/Partiels'],
      ['Wikipedia — Gérard Grisey', 'https://en.wikipedia.org/wiki/G%C3%A9rard_Grisey'],
      ['Hasegawa (2009) — Gérard Grisey and the "nature" of harmony (PDF)', 'https://hasegawa.research.mcgill.ca/pdf/Hasegawa-Grisey_and_the_Nature_of_Harmony_2009.pdf'],
      ['MusicWeb International — Grisey, Les Espaces Acoustiques (review)', 'https://www.musicweb-international.com/classrev/2002/Oct02/Grisey.htm'],
    ],
    body: `
**Âm nhạc phổ** ra đời ở Pháp trong thập niên 1970, phần nào là **phản ứng** trước sự trừu tượng của [[ky-thuat-12-am|nhạc chuỗi]]. Thay vì xây tác phẩm từ chuỗi nốt hay [[motif]], các nhà soạn nhạc lấy cảm hứng từ **tính chất vật lý của chính âm thanh**. Nhóm tiêu biểu (sinh trong thập niên 1940): **Gérard Grisey**, **Tristan Murail**, Michaël Levinas, Hugues Dufourt — gắn với nhóm hoà tấu **L'Itinéraire**.

## Từ bồi âm thành hợp âm
Mỗi nốt nhạc là tổng của nhiều [[chuoi-boi-am|bồi âm]]. Nhạc phổ "phóng to" cấu trúc đó: dùng máy phân tích phổ (sonogram) để xem một âm thanh thật gồm những bồi âm nào, mạnh yếu ra sao, thay đổi thế nào theo thời gian — rồi **giao mỗi bồi âm cho một nhạc cụ**.

## Ví dụ kinh điển: Partiels (Grisey, 1975)
- Viết cho 18 nhạc cụ; mở đầu bằng **phân tích sonogram tiếng tấn công của một nốt Mi trầm trên kèn trombone** (các nguồn ghi E2 hoặc E1).
- Phổ âm đó được "tổng hợp lại bằng dàn nhạc": mỗi nhạc cụ đảm nhận một bồi âm, mô phỏng cả sự **biến đổi theo thời gian** của tiếng kèn.
- Là phần thứ ba của chu kỳ *Les Espaces acoustiques* (1974–1985); được coi là tác phẩm **định hình** nhạc phổ. Trước đó, *Périodes* (1974) đã thử nghiệm kỹ thuật này.

Grisey về sau **không nhận** cái nhãn "nhạc phổ" trong các bài phỏng vấn và bài viết.

## Liên hệ với hoà âm truyền thống
Ý tưởng hoà âm bắt nguồn từ chuỗi bồi âm đã có từ [[Rameau]] (xem [[he-thong-hoa-am-co-dien]]). Nhạc phổ đưa ý tưởng này đến tận cùng: hoà âm **là** âm sắc. Các bồi âm cao **không khớp** với 12 nốt bình quân, nên nhạc phổ thường dùng **vi cung** (quãng nhỏ hơn nửa cung — xem [[luat-binh-quan]]).
`,
  },
]

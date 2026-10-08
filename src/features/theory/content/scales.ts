import type { Article } from '../wiki'

export const scales: Article[] = [
  {
    slug: 'am-giai-truong',
    title: 'Âm giai trưởng',
    category: 'scales',
    aliases: ['gam trưởng', 'giọng trưởng', 'major scale', 'âm giai', 'gam'],
    summary: 'Chuỗi 7 nốt theo công thức cung–cung–nửa–cung–cung–cung–nửa; mang màu sắc tươi sáng.',
    wiki: 'Major_scale',
    body: `
Công thức tính bằng [[cung-nua-cung]]:
**1 – 1 – ½ – 1 – 1 – 1 – ½**

::keyboard C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng (C major): chỉ dùng phím trắng
::staff treble C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng trên khoá Sol

Áp công thức từ nốt khác sẽ cần [[dau-hoa]]. Ví dụ Sol trưởng: G – A – B – C – D – E – **F♯** – G.

::keyboard G4 A4 B4 C5 D5 E5 F#5 G5 | Sol trưởng cần F♯ để giữ đúng công thức

## Cấu trúc hai nửa
Âm giai trưởng gồm hai **tứ âm** (nhóm 4 nốt) giống hệt nhau, cách nhau một cung: C–D–E–F | G–A–B–C, mỗi nhóm theo mẫu 1 – 1 – ½.

Các dấu hoá cần thiết được gom vào [[hoa-bieu]]. Tên và vai trò từng nốt: [[bac-am-giai]]. Mỗi âm giai trưởng có một [[am-giai-thu]] song song (xem [[giong-song-song]]).
`,
  },
  {
    slug: 'am-giai-thu',
    title: 'Âm giai thứ',
    category: 'scales',
    aliases: ['gam thứ', 'giọng thứ', 'minor scale', 'thứ tự nhiên', 'thứ hoà âm', 'thứ giai điệu', 'harmonic minor', 'melodic minor'],
    summary: 'Âm giai mang màu sắc buồn, trầm; có ba dạng: tự nhiên, hoà âm và giai điệu.',
    wiki: 'Minor_scale',
    body: `
## Thứ tự nhiên
**1 – ½ – 1 – 1 – ½ – 1 – 1** (tính bằng [[cung-nua-cung]])

::keyboard A4 B4 C5 D5 E5 F5 G5 A5 | La thứ tự nhiên (A minor): toàn phím trắng

La thứ dùng chung [[hoa-bieu]] với Đô trưởng — xem [[giong-song-song]].

## Thứ hoà âm
Nâng **bậc 7** lên nửa cung: A – B – C – D – E – F – **G♯** – A. Bậc 7 nâng trở thành **cảm âm**, kéo mạnh về âm chủ và cho phép có [[hop-am-ba|hợp âm V trưởng]] (E–G♯–B). Quãng F–G♯ là [[quang|quãng 2 tăng]] đặc trưng, nghe "phương Đông".

::keyboard A4 B4 C5 D5 E5 F5 G#5 A5 | La thứ hoà âm

## Thứ giai điệu
Đi **lên**: nâng cả bậc 6 và 7 (A – B – C – D – E – **F♯** – **G♯** – A) để tránh quãng 2 tăng. Đi **xuống**: trở về thứ tự nhiên (theo truyền thống cổ điển). Trong jazz, thứ giai điệu dùng dạng đi lên cho cả hai chiều.

::keyboard A4 B4 C5 D5 E5 F#5 G#5 A5 | La thứ giai điệu (chiều đi lên)
`,
  },
  {
    slug: 'bac-am-giai',
    title: 'Bậc âm giai',
    category: 'scales',
    aliases: ['bậc', 'scale degree', 'chủ âm', 'át âm', 'hạ át âm', 'cảm âm', 'thượng chủ âm', 'hạ trung âm', 'tonic', 'dominant', 'subdominant', 'leading tone'],
    summary: 'Mỗi nốt trong âm giai có số thứ tự (1–7) và một tên chức năng, như chủ âm, át âm, cảm âm.',
    wiki: 'Degree_(music)',
    body: `
| Bậc | Tên | Tên quốc tế | Trong Đô trưởng |
|---|---|---|---|
| 1 | Chủ âm | Tonic | C |
| 2 | Thượng chủ âm | Supertonic | D |
| 3 | Trung âm | Mediant | E |
| 4 | Hạ át âm | Subdominant | F |
| 5 | Át âm | Dominant | G |
| 6 | Hạ trung âm | Submediant | A |
| 7 | Cảm âm | Leading tone | B |

## Ý nghĩa
- **Chủ âm** (1): điểm dừng, "nhà" của bản nhạc.
- **Át âm** (5): quan trọng thứ hai, tạo lực hút mạnh về chủ âm.
- **Cảm âm** (7): cách chủ âm nửa cung, "muốn" đi lên chủ âm. Trong [[am-giai-thu|giọng thứ tự nhiên]] bậc 7 cách chủ âm một cung nên gọi là **bậc 7 thứ** (subtonic).

Hợp âm dựng trên các bậc được ghi bằng số La Mã (I, IV, V…): xem [[chuc-nang-hoa-am]]. Ứng dụng trong [[am-giai-truong]] và [[am-giai-thu]].
`,
  },
  {
    slug: 'hoa-bieu',
    title: 'Hoá biểu',
    category: 'scales',
    aliases: ['bộ khoá', 'key signature', 'giọng', 'điệu tính', 'giọng điệu'],
    summary: 'Nhóm dấu thăng hoặc giáng đặt ở đầu khuông, cho biết bản nhạc thuộc giọng nào.',
    wiki: 'Key_signature',
    body: `
Hoá biểu gồm các [[dau-hoa]] đặt ngay sau [[khoa-nhac]], áp dụng cho mọi nốt cùng tên trong suốt bản nhạc.

## Thứ tự dấu
- Dấu thăng: **F – C – G – D – A – E – B** ("Fa Đô Sol Rê La Mi Si")
- Dấu giáng: **B – E – A – D – G – C – F** (ngược lại thứ tự dấu thăng)

## Mẹo nhận giọng trưởng
- Với dấu thăng: lấy dấu thăng **cuối cùng**, lên [[cung-nua-cung|nửa cung]] là âm chủ. (F♯ C♯ → D trưởng.)
- Với dấu giáng: dấu giáng **áp chót** chính là tên giọng. (B♭ E♭ A♭ → E♭ trưởng.) Riêng 1 dấu giáng là F trưởng.

## Bảng hoá biểu
| Số dấu | Giọng trưởng (thăng) | Giọng thứ (thăng) | Giọng trưởng (giáng) | Giọng thứ (giáng) |
|---|---|---|---|---|
| 0 | C | a | C | a |
| 1 | G | e | F | d |
| 2 | D | b | B♭ | g |
| 3 | A | f♯ | E♭ | c |
| 4 | E | c♯ | A♭ | f |
| 5 | B | g♯ | D♭ | b♭ |
| 6 | F♯ | d♯ | G♭ | e♭ |
| 7 | C♯ | a♯ | C♭ | a♭ |

Mỗi hoá biểu ứng với một [[am-giai-truong]] và một [[am-giai-thu]] — xem [[giong-song-song]]. Đổi cả bài sang hoá biểu khác: [[dich-giong]]. Toàn bộ được sắp xếp gọn trong [[vong-quang-nam]].
`,
  },
  {
    slug: 'vong-quang-nam',
    title: 'Vòng quãng năm',
    category: 'scales',
    aliases: ['vòng tròn quãng 5', 'circle of fifths', 'vòng quãng 5'],
    summary: 'Sơ đồ xếp 12 giọng theo chuỗi quãng 5 đúng; mỗi bước theo chiều kim đồng hồ thêm một dấu thăng.',
    wiki: 'Circle_of_fifths',
    body: `
::circle-of-fifths | Vòng ngoài: giọng trưởng · vòng trong: giọng thứ song song · viền: số dấu hoá

Đi **theo chiều kim đồng hồ**, mỗi bước lên một [[quang|quãng 5 đúng]] và [[hoa-bieu]] thêm một dấu thăng. Đi **ngược chiều** (lên quãng 4), mỗi bước thêm một dấu giáng. Ở đáy vòng, F♯ trưởng và G♭ trưởng là [[trung-am]] — vòng tròn khép kín nhờ [[luat-binh-quan]].

## Dùng để làm gì
- Tra nhanh hoá biểu của mọi giọng.
- Tìm giọng song song: cặp trong–ngoài cùng ô (C – a). Xem [[giong-song-song]].
- Các giọng **cạnh nhau** chỉ khác một dấu hoá → [[chuyen-giong]] mượt mà.
- Ba ô liền nhau (F – C – G) cho ba [[hop-am-ba|hợp âm]] chính IV – I – V của giọng ở giữa.
- Đi ngược chiều kim đồng hồ là chuỗi **át âm → chủ âm** (G → C → F → B♭…), nền tảng của nhiều [[vong-hop-am]] như ii – V – I và [[mo-tien-hoa-am|mô tiến quãng 5]].
- Hai giọng **đối diện** nhau (C và F♯) xa nhau nhất — vang cùng lúc tạo [[da-dieu-tinh]].
`,
  },
  {
    slug: 'giong-song-song',
    title: 'Giọng song song và giọng cùng tên',
    category: 'scales',
    aliases: ['giọng song song', 'giọng cùng tên', 'relative key', 'parallel key', 'giọng họ hàng'],
    summary: 'Giọng song song dùng chung hoá biểu (C trưởng – La thứ); giọng cùng tên dùng chung âm chủ (C trưởng – Đô thứ).',
    wiki: 'Relative_key',
    body: `
## Giọng song song (relative)
Một giọng trưởng và một giọng thứ có **cùng [[hoa-bieu]]**:
- Âm chủ giọng thứ = **bậc 6** của giọng trưởng (hoặc thấp hơn [[quang|quãng 3 thứ]]).
- C trưởng ↔ La thứ; G trưởng ↔ Mi thứ; F trưởng ↔ Rê thứ.

## Giọng cùng tên (parallel)
Cùng **âm chủ**, khác hoá biểu:
- C trưởng (không dấu) ↔ Đô thứ (3 dấu giáng).
- Giọng thứ cùng tên có bậc 3, 6, 7 thấp hơn nửa cung.

::keyboard C4 E4 G4 | C trưởng: C – E – G
::keyboard C4 Eb4 G4 | C thứ: C – E♭ – G (bậc 3 hạ xuống)

## Giọng họ hàng gần
Các giọng có hoá biểu khác nhau không quá một dấu: giọng gốc, giọng song song, và hai giọng hai bên trên [[vong-quang-nam]] cùng các giọng song song của chúng. Đây là đích đến phổ biến khi [[chuyen-giong]]. Mượn hợp âm từ giọng cùng tên: xem [[hop-am-muon]].
`,
  },
  {
    slug: 'dieu-thuc',
    title: 'Điệu thức nhà thờ',
    category: 'scales',
    aliases: ['điệu thức', 'mode', 'modes', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'điệu Dorian'],
    summary: 'Bảy âm giai tạo ra khi bắt đầu từ mỗi bậc khác nhau của âm giai trưởng — mỗi điệu có màu sắc riêng.',
    wiki: 'Mode_(music)',
    body: `
Chơi các phím trắng nhưng lấy **nốt khác** làm âm chủ, ta được 7 điệu thức:
| Điệu | Bắt đầu từ (phím trắng) | Công thức | Nốt đặc trưng | Màu sắc |
|---|---|---|---|---|
| Ionian | C | = [[am-giai-truong|trưởng]] | — | Sáng |
| Dorian | D | thứ, **6 trưởng** | ♮6 | Thứ nhưng tươi, jazz/funk |
| Phrygian | E | thứ, **2 thứ** | ♭2 | Tây Ban Nha, flamenco |
| Lydian | F | trưởng, **4 tăng** | ♯4 | Lơ lửng, nhạc phim |
| Mixolydian | G | trưởng, **7 thứ** | ♭7 | Blues, rock |
| Aeolian | A | = [[am-giai-thu|thứ tự nhiên]] | — | Buồn |
| Locrian | B | thứ, **2 thứ, 5 giảm** | ♭2, ♭5 | Bất ổn, hiếm dùng |

::keyboard D4 E4 F4 G4 A4 B4 C5 D5 | Rê Dorian: phím trắng từ D đến D
::keyboard G4 A4 B4 C5 D5 E5 F5 G5 | Sol Mixolydian: phím trắng từ G đến G

## Cách nghĩ thực hành
So sánh với âm giai trưởng/thứ cùng âm chủ và chỉ nhớ **nốt khác biệt**. Ví dụ: Dorian = thứ tự nhiên nhưng bậc 6 nâng lên.

Điệu thức có nguồn gốc từ thánh ca Trung cổ và được dùng nhiều trong jazz, nhạc dân gian và nhạc phim. Xem thêm [[am-giai-ngu-cung]], [[am-giai-blues]]. Trong jazz, mỗi điệu thức gắn với một loại hợp âm: [[he-thong-hop-am-am-giai]].
`,
  },
  {
    slug: 'am-giai-ngu-cung',
    title: 'Âm giai ngũ cung',
    category: 'scales',
    aliases: ['ngũ cung', 'pentatonic', 'ngũ âm', 'pentatonic scale', 'cung thương giốc chủy vũ'],
    summary: 'Âm giai 5 nốt không có nửa cung; nền tảng của nhạc dân gian Việt Nam, châu Á và nhiều nhạc pop, blues.',
    wiki: 'Pentatonic_scale',
    body: `
Bỏ bậc 4 và bậc 7 của [[am-giai-truong]] (hai nốt tạo [[cung-nua-cung|nửa cung]]), ta được **ngũ cung trưởng**: C – D – E – G – A.

::keyboard C4 D4 E4 G4 A4 | Ngũ cung trưởng trên C
::keyboard F#4 G#4 A#4 C#5 D#5 | Năm phím đen chính là một âm giai ngũ cung

## Ngũ cung thứ
Bắt đầu từ bậc 5 của ngũ cung trưởng: A – C – D – E – G (song song với C ngũ cung trưởng, như [[giong-song-song]]). Đây là nền tảng của [[am-giai-blues]] và solo guitar rock.

## Trong âm nhạc Việt Nam
Nhạc dân gian và cổ truyền Việt Nam dựa phần lớn trên hệ ngũ cung với năm âm **Hò – Xự – Xang – Xê – Cống** (tương ứng gần đúng Đô – Rê – Fa – Sol – La trong một số điệu). Về các tác phẩm piano Việt Nam dùng chất liệu dân gian: [[piano-viet-nam]]. Các **điệu Bắc, điệu Nam** và **hơi** (Xuân, Ai, Oán…) biến đổi cao độ và luyến láy trên khung ngũ cung này.

## Vì sao dễ nghe?
Không có nửa cung và [[thuan-nghich|tritone]] nên mọi nốt chơi cùng nhau đều thuận tai — lý do giáo viên hay cho học trò ngẫu hứng trên phím đen.
`,
  },
  {
    slug: 'am-giai-blues',
    title: 'Âm giai blues',
    category: 'scales',
    aliases: ['blues scale', 'nốt blue', 'blue note', 'gam blues'],
    summary: 'Ngũ cung thứ thêm nốt "blue" (bậc 5 giáng), tạo màu sắc đặc trưng của blues, jazz và rock.',
    wiki: 'Blues_scale',
    body: `
Âm giai blues (dạng 6 nốt) = [[am-giai-ngu-cung|ngũ cung thứ]] + **♭5**:
**1 – ♭3 – 4 – ♭5 – 5 – ♭7**

::keyboard C4 Eb4 F4 Gb4 G4 Bb4 | Âm giai blues trên C: C – E♭ – F – G♭ – G – B♭

## Nốt blue
Các nốt ♭3, ♭5, ♭7 gọi là **nốt blue**. Trên guitar hay giọng hát, chúng thường được uốn (bend) vào khoảng giữa hai phím đàn; trên piano, người chơi mô phỏng bằng cách **láy nhanh** từ ♭3 lên 3 (E♭ → E).

Âm giai blues thường được chơi trên khung [[blues-12-nhip]] với các [[hop-am-bay|hợp âm 7 át]]. Liên quan: [[dieu-thuc|Mixolydian]], [[dao-phach]].
`,
  },
  {
    slug: 'am-giai-cromatic',
    title: 'Âm giai cromatic và âm giai toàn cung',
    category: 'scales',
    aliases: ['âm giai nửa cung', 'chromatic scale', 'cromatic', 'chromatic', 'âm giai toàn cung', 'whole tone scale', 'âm giai cung'],
    summary: 'Âm giai cromatic dùng cả 12 nửa cung; âm giai toàn cung gồm 6 nốt cách nhau đều một cung.',
    wiki: 'Chromatic_scale',
    body: `
## Âm giai cromatic
Đi lần lượt qua **mọi phím** (trắng và đen) — 12 [[cung-nua-cung|nửa cung]] trong một quãng 8. Quy ước: đi lên dùng dấu thăng, đi xuống dùng dấu giáng.

::keyboard C4 C#4 D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 | Âm giai cromatic: tất cả 12 phím

**Ngón bấm** chuẩn cho piano: ngón 3 trên mọi phím đen, ngón 1 trên phím trắng; chỗ hai phím trắng liền nhau (E–F, B–C) dùng ngón 1–2 (xem [[ngon-bam]]).

## Âm giai toàn cung
Sáu nốt cách đều nhau **một cung**: C – D – E – F♯ – G♯ – A♯. Không có chủ âm rõ ràng nên nghe mơ hồ, như trong mơ. Chỉ có **hai** âm giai toàn cung khác nhau (bắt đầu từ C hoặc C♯).

::keyboard C4 D4 E4 F#4 G#4 A#4 | Âm giai toàn cung trên C

Claude Debussy dùng âm giai toàn cung rất nhiều (ví dụ prelude "Voiles") — xem [[an-tuong]]. Hợp âm tăng (xem [[hop-am-ba]]) được dựng hoàn toàn từ âm giai này. Một âm giai đối xứng khác: [[am-giai-bat-cung]]. Dùng 12 nốt bình đẳng như một hệ thống: [[ky-thuat-12-am]].
`,
  },
  {
    slug: 'dich-giong',
    title: 'Dịch giọng',
    category: 'scales',
    aliases: ['transposition', 'chuyển tông', 'dịch tông', 'nhạc cụ chuyển giọng', 'transposing instrument', 'concert pitch', 'cao độ thực'],
    summary: 'Chuyển toàn bộ bản nhạc lên hoặc xuống một quãng cố định, giữ nguyên mọi quan hệ giữa các nốt.',
    wiki: 'Transposition_(music)',
    body: `
Dịch giọng khác với [[chuyen-giong]]: chuyển giọng là chuyển động **bên trong** tác phẩm; dịch giọng là viết/chơi **cả tác phẩm** ở cao độ khác — ví dụ hạ một bài hát xuống cho vừa giọng học trò.

## Các bước dịch giọng
1. Xác định [[quang]] cần dịch (C trưởng → E♭ trưởng: lên 3 thứ).
2. Đổi [[hoa-bieu]] sang giọng mới (0 dấu → 3 dấu giáng).
3. Dời mỗi nốt đúng **số bậc** (quãng 3 → mỗi nốt lên 2 bậc tên nốt): C → E♭, D → F, E → G…
4. Điều chỉnh các [[dau-hoa|dấu hoá bất thường]] theo cùng quãng: F♯ trong C trưởng → A (bình) trong E♭ trưởng.
5. Với [[ky-hieu-hop-am|hợp âm]]: dời gốc hợp âm cùng quãng, giữ nguyên hậu tố (Dm7 → Fm7).

::keyboard C4 E4 G4 | C trưởng
::keyboard Eb4 G4 Bb4 | Dịch lên 3 thứ → E♭ trưởng: cùng hình dạng quãng

Suy nghĩ bằng **số bậc** (I – IV – V, xem [[bac-am-giai]]) thay vì tên nốt giúp dịch giọng tức thì.

## Nhạc cụ chuyển giọng
Một số nhạc cụ đọc nốt khác với âm thanh thực (cao độ thực = **concert pitch**, cao độ của piano):
| Nhạc cụ | Viết C, nghe ra |
|---|---|
| Clarinet, trumpet, sax tenor (B♭) | B♭ (thấp hơn 2 trưởng; sax tenor thấp thêm 1 quãng 8) |
| Kèn cor (F) | F (thấp hơn 5 đúng) |
| Sax alto (E♭) | E♭ (thấp hơn 6 trưởng) |
| Guitar, contrabass | C thấp hơn 1 quãng 8 |
| Piccolo | C cao hơn 1 quãng 8 |

Khi đệm piano cho các nhạc cụ này, cần biết bản của họ đang viết ở giọng nào.
`,
  },
]

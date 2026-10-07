import type { Article } from './wiki'

/**
 * Nội dung lý thuyết. Thêm bài mới: thêm một object vào ARTICLES.
 * Liên kết sang bài khác bằng [[slug]] hoặc [[slug|chữ hiển thị]]; slug, tiêu đề hay
 * alias đều dùng được. Mục "Các bài nhắc đến trang này" tự sinh từ các liên kết đó.
 */
export const CATEGORIES = {
  basics: { title: 'Nền tảng', description: 'Nốt, khuông nhạc, khoá và bàn phím — đọc được bản nhạc.' },
  rhythm: { title: 'Nhịp & tiết tấu', description: 'Âm thanh kéo dài bao lâu và được chia phách thế nào.' },
  pitch: { title: 'Cao độ & quãng', description: 'Khoảng cách giữa các nốt — viên gạch của giai điệu.' },
  harmony: { title: 'Âm giai & hoà âm', description: 'Âm giai, giọng, hợp âm và cách chúng liên kết.' },
}

export const ARTICLES: Article[] = [
  {
    slug: 'not-nhac',
    title: 'Nốt nhạc',
    category: 'basics',
    aliases: ['nốt', 'note', 'tên nốt'],
    summary: 'Ký hiệu cho một âm thanh, cho biết cao độ (cao hay thấp) và trường độ (dài hay ngắn).',
    body: `
Mỗi nốt nhạc mang hai thông tin: **cao độ** — vị trí của nốt trên [[khuong-nhac]] — và **trường độ** — hình dạng của nốt (xem [[truong-do]]).

## Bảy tên nốt
Âm nhạc phương Tây dùng 7 tên nốt lặp lại theo từng [[quang|quãng 8]]:
| Tên Latin | Đô | Rê | Mi | Fa | Sol | La | Si |
|---|---|---|---|---|---|---|---|
| Tên chữ cái | C | D | E | F | G | A | B |

Sau Si là Đô của quãng 8 kế tiếp. Để phân biệt các quãng 8, ta thêm số: **C4** là Đô giữa (Middle C) trên [[ban-phim|bàn phím piano]].

::keyboard C4 D4 E4 F4 G4 A4 B4 | Bảy nốt tự nhiên ứng với bảy phím trắng

Giữa các phím trắng có phím đen — đó là các nốt mang [[dau-hoa]].
`,
  },
  {
    slug: 'khuong-nhac',
    title: 'Khuông nhạc',
    category: 'basics',
    aliases: ['khuông', 'staff', 'khuông nhạc đôi', 'grand staff'],
    summary: 'Năm dòng kẻ song song dùng để ghi cao độ của nốt nhạc.',
    body: `
Khuông nhạc gồm **5 dòng** và **4 khe**, đánh số từ dưới lên. Nốt càng nằm cao trên khuông thì âm càng cao. Nốt vượt ra ngoài khuông được ghi trên **dòng kẻ phụ**.

Bản thân khuông nhạc chưa cho biết tên nốt — phải nhờ [[khoa-nhac]] đặt ở đầu khuông.

::staff treble C4 E4 G4 B4 D5 F5 A5 | Nốt trên dòng kẻ phụ (C4) và trên các dòng, khe

## Khuông nhạc đôi
Piano dùng **khuông nhạc đôi**: khuông trên đặt [[khoa-sol]] (thường cho tay phải), khuông dưới đặt [[khoa-fa]] (thường cho tay trái). Hai khuông gặp nhau ở Đô giữa (C4).
`,
  },
  {
    slug: 'khoa-nhac',
    title: 'Khoá nhạc',
    category: 'basics',
    aliases: ['khoá', 'khóa nhạc', 'clef'],
    summary: 'Ký hiệu đặt ở đầu khuông nhạc, quy định tên nốt cho từng dòng và khe.',
    body: `
Khoá nhạc "neo" một nốt vào một dòng cụ thể trên [[khuong-nhac]]; từ đó suy ra tên mọi nốt còn lại. Hai khoá dùng nhiều nhất cho piano:
- [[khoa-sol]] — neo nốt Sol (G4) vào dòng 2.
- [[khoa-fa]] — neo nốt Fa (F3) vào dòng 4.

Ngoài ra còn **khoá Đô** (dùng cho viola), ít gặp khi học piano.
`,
  },
  {
    slug: 'khoa-sol',
    title: 'Khoá Sol',
    category: 'basics',
    aliases: ['khóa Sol', 'treble clef', 'G clef'],
    summary: 'Khoá nhạc cho âm vực cao; vòng xoắn của khoá ôm lấy dòng 2 — nốt Sol (G4).',
    body: `
::img GClef.svg | Ký hiệu khoá Sol

Khoá Sol là một loại [[khoa-nhac]], dùng cho khuông trên của piano (tay phải).

## Cách nhớ nốt
- Các **dòng** từ dưới lên: **E4 – G4 – B4 – D5 – F5** (Mi – Sol – Si – Rê – Fa).
- Các **khe** từ dưới lên: **F4 – A4 – C5 – E5** (Fa – La – Đô – Mi).

::staff treble E4 G4 B4 D5 F5 | Năm dòng của khoá Sol
::staff treble F4 A4 C5 E5 | Bốn khe của khoá Sol

So sánh với [[khoa-fa]] ở khuông dưới.
`,
  },
  {
    slug: 'khoa-fa',
    title: 'Khoá Fa',
    category: 'basics',
    aliases: ['khóa Fa', 'bass clef', 'F clef'],
    summary: 'Khoá nhạc cho âm vực thấp; hai dấu chấm kẹp dòng 4 — nốt Fa (F3).',
    body: `
::img FClef.svg | Ký hiệu khoá Fa

Khoá Fa là một loại [[khoa-nhac]], dùng cho khuông dưới của piano (tay trái).

## Cách nhớ nốt
- Các **dòng** từ dưới lên: **G2 – B2 – D3 – F3 – A3** (Sol – Si – Rê – Fa – La).
- Các **khe** từ dưới lên: **A2 – C3 – E3 – G3** (La – Đô – Mi – Sol).

::staff bass G2 B2 D3 F3 A3 | Năm dòng của khoá Fa

Đô giữa (C4) nằm trên dòng kẻ phụ thứ nhất **phía trên** khuông khoá Fa — cũng chính là dòng kẻ phụ **phía dưới** khuông [[khoa-sol]].
`,
  },
  {
    slug: 'ban-phim',
    title: 'Bàn phím piano',
    category: 'basics',
    aliases: ['bàn phím', 'phím đàn', 'keyboard', 'Đô giữa', 'middle C'],
    summary: 'Piano tiêu chuẩn có 88 phím (52 trắng, 36 đen), sắp xếp theo nhóm 2 và 3 phím đen lặp lại.',
    body: `
Để định hướng, hãy nhìn các **nhóm phím đen**: nhóm 2 phím và nhóm 3 phím xen kẽ nhau.
- Phím trắng ngay **bên trái nhóm 2 phím đen** là **Đô (C)**.
- Phím trắng ngay **bên trái nhóm 3 phím đen** là **Fa (F)**.

::keyboard C4 F4 | Đô (C) và Fa (F) — hai mốc dễ tìm nhất

Hai phím liền nhau (kể cả trắng–đen) cách nhau [[cung-nua-cung|nửa cung]]. Phím đen mang tên có [[dau-hoa]]: phím đen giữa C và D là **C♯** hay **D♭**.

Đô gần giữa đàn nhất gọi là **Đô giữa (C4)**, điểm gặp nhau của [[khoa-sol]] và [[khoa-fa]].
`,
  },
  {
    slug: 'dau-hoa',
    title: 'Dấu hoá',
    category: 'basics',
    aliases: ['dấu thăng', 'dấu giáng', 'dấu bình', 'sharp', 'flat', 'natural', 'accidental'],
    summary: 'Ký hiệu nâng hoặc hạ cao độ của nốt: thăng ♯, giáng ♭, bình ♮.',
    body: `
| Dấu | Tên | Tác dụng |
|---|---|---|
| ♯ | Thăng | Nâng nốt lên [[cung-nua-cung|nửa cung]] |
| ♭ | Giáng | Hạ nốt xuống nửa cung |
| ♮ | Bình | Huỷ dấu thăng/giáng trước đó |

::keyboard C#4 Eb4 F#4 | C♯, E♭, F♯ là các phím đen

Dấu hoá đặt **ngay trước một nốt** (dấu hoá bất thường) có hiệu lực đến hết ô nhịp. Dấu hoá đặt **ở đầu khuông** tạo thành [[hoa-bieu]] và có hiệu lực cho cả bản nhạc.

Hai tên cho cùng một phím, như C♯ và D♭, gọi là **trùng âm** (enharmonic).
`,
  },
  {
    slug: 'truong-do',
    title: 'Trường độ',
    category: 'rhythm',
    aliases: ['độ dài nốt', 'hình nốt', 'nốt tròn', 'nốt trắng', 'nốt đen', 'nốt móc đơn', 'dấu lặng', 'chấm dôi', 'note value'],
    summary: 'Độ dài của một nốt, thể hiện qua hình dạng nốt; mỗi hình nốt bằng một nửa hình nốt trước nó.',
    body: `
Trường độ được tính bằng **phách**. Trong nhịp phổ biến 4/4 (xem [[so-chi-nhip]]), nốt đen = 1 phách:
| Hình nốt | Giá trị | Số phách (4/4) | Dấu lặng tương ứng |
|---|---|---|---|
| Nốt tròn | 1 | 4 | Lặng tròn |
| Nốt trắng | 1/2 | 2 | Lặng trắng |
| Nốt đen | 1/4 | 1 | Lặng đen |
| Nốt móc đơn | 1/8 | 1/2 | Lặng đơn |
| Nốt móc kép | 1/16 | 1/4 | Lặng kép |

**Dấu lặng** là khoảng im lặng có cùng độ dài với nốt tương ứng.

## Chấm dôi
Dấu chấm sau nốt làm nốt dài thêm **một nửa** giá trị của nó: nốt trắng chấm dôi = 2 + 1 = 3 phách.
`,
  },
  {
    slug: 'so-chi-nhip',
    title: 'Số chỉ nhịp',
    category: 'rhythm',
    aliases: ['nhịp', 'loại nhịp', 'time signature', 'ô nhịp', 'vạch nhịp', '4/4', '3/4', '6/8'],
    summary: 'Hai con số ở đầu bản nhạc: số trên là số phách trong một ô nhịp, số dưới là hình nốt được tính làm một phách.',
    body: `
Bản nhạc được chia thành các **ô nhịp** bằng **vạch nhịp**. Số chỉ nhịp cho biết mỗi ô nhịp chứa bao nhiêu [[truong-do|trường độ]].
| Nhịp | Ý nghĩa | Cảm giác |
|---|---|---|
| 2/4 | 2 phách, nốt đen = 1 phách | Hành khúc |
| 3/4 | 3 phách, nốt đen = 1 phách | Valse (mạnh – nhẹ – nhẹ) |
| 4/4 | 4 phách, nốt đen = 1 phách | Phổ biến nhất (còn ký hiệu C) |
| 6/8 | 6 nốt móc đơn, nhóm 3+3 | Đung đưa, 2 phách lớn |

Nhịp 2/4, 3/4, 4/4 là **nhịp đơn** (phách chia đôi); 6/8 là **nhịp kép** (phách chia ba).
`,
  },
  {
    slug: 'cung-nua-cung',
    title: 'Cung và nửa cung',
    category: 'pitch',
    aliases: ['cung', 'nửa cung', 'bán cung', 'whole step', 'half step', 'semitone'],
    summary: 'Nửa cung là khoảng cách nhỏ nhất giữa hai phím liền nhau trên piano; một cung bằng hai nửa cung.',
    body: `
Trên [[ban-phim]], đi từ một phím sang phím **liền kề** (trắng hoặc đen) là **nửa cung**. Bỏ qua một phím là **một cung**.

::keyboard E4 F4 B4 C5 | E–F và B–C: hai cặp phím trắng chỉ cách nửa cung

Vì không có phím đen giữa E–F và B–C, hai cặp này chỉ cách nửa cung; mọi cặp phím trắng liền nhau khác cách nhau một cung.

Cung và nửa cung là đơn vị để đo [[quang]] và để xây dựng [[am-giai-truong]].
`,
  },
  {
    slug: 'quang',
    title: 'Quãng',
    category: 'pitch',
    aliases: ['quãng nhạc', 'interval', 'quãng 8', 'quãng tám', 'octave'],
    summary: 'Khoảng cách cao độ giữa hai nốt, gọi theo số bậc (2, 3, 4…) và tính chất (trưởng, thứ, đúng…).',
    body: `
Quãng có hai phần: **số** — đếm số tên nốt từ nốt dưới đến nốt trên (C→E là C-D-E = **quãng 3**) — và **tính chất** — xác định bằng số [[cung-nua-cung|nửa cung]].
| Nửa cung | Quãng | Ví dụ từ C |
|---|---|---|
| 0 | Đồng âm | C–C |
| 1 | 2 thứ | C–D♭ |
| 2 | 2 trưởng | C–D |
| 3 | 3 thứ | C–E♭ |
| 4 | 3 trưởng | C–E |
| 5 | 4 đúng | C–F |
| 6 | 4 tăng / 5 giảm | C–F♯ |
| 7 | 5 đúng | C–G |
| 8 | 6 thứ | C–A♭ |
| 9 | 6 trưởng | C–A |
| 10 | 7 thứ | C–B♭ |
| 11 | 7 trưởng | C–B |
| 12 | 8 đúng (quãng 8) | C–C |

::keyboard C4 E4 | Quãng 3 trưởng C–E (4 nửa cung)

Xếp chồng các quãng 3 tạo thành [[hop-am-ba]]. Chuỗi quãng 5 đúng tạo nên [[vong-quang-nam]].
`,
  },
  {
    slug: 'am-giai-truong',
    title: 'Âm giai trưởng',
    category: 'harmony',
    aliases: ['gam trưởng', 'giọng trưởng', 'major scale', 'âm giai'],
    summary: 'Chuỗi 7 nốt theo công thức cung–cung–nửa–cung–cung–cung–nửa; mang màu sắc tươi sáng.',
    body: `
Công thức tính bằng [[cung-nua-cung]]:
**1 – 1 – ½ – 1 – 1 – 1 – ½**

::keyboard C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng (C major): chỉ dùng phím trắng
::staff treble C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng trên khoá Sol

Áp công thức từ nốt khác sẽ cần [[dau-hoa]]. Ví dụ Sol trưởng: G – A – B – C – D – E – **F♯** – G.

::keyboard G4 A4 B4 C5 D5 E5 F#5 G5 | Sol trưởng cần F♯ để giữ đúng công thức

Các dấu hoá cần thiết được gom vào [[hoa-bieu]]. Mỗi âm giai trưởng có một [[am-giai-thu]] song song dùng chung hoá biểu.
`,
  },
  {
    slug: 'am-giai-thu',
    title: 'Âm giai thứ',
    category: 'harmony',
    aliases: ['gam thứ', 'giọng thứ', 'minor scale', 'thứ tự nhiên', 'thứ hoà âm', 'giọng song song'],
    summary: 'Âm giai mang màu sắc buồn, trầm; công thức tự nhiên: cung–nửa–cung–cung–nửa–cung–cung.',
    body: `
## Thứ tự nhiên
**1 – ½ – 1 – 1 – ½ – 1 – 1** (tính bằng [[cung-nua-cung]])

::keyboard A4 B4 C5 D5 E5 F5 G5 A5 | La thứ tự nhiên (A minor): toàn phím trắng

## Giọng song song
La thứ dùng chung [[hoa-bieu]] với Đô trưởng — chúng là **giọng song song**. Âm chủ của giọng thứ song song nằm ở **bậc 6** của [[am-giai-truong]] (hay thấp hơn một [[quang|quãng 3 thứ]]).

## Thứ hoà âm
Nâng bậc 7 lên nửa cung: La thứ hoà âm = A – B – C – D – E – F – **G♯** – A. Bậc 7 nâng tạo lực kéo mạnh về âm chủ.
`,
  },
  {
    slug: 'hoa-bieu',
    title: 'Hoá biểu',
    category: 'harmony',
    aliases: ['bộ khoá', 'key signature', 'giọng', 'điệu tính'],
    summary: 'Nhóm dấu thăng hoặc giáng đặt ở đầu khuông, cho biết bản nhạc thuộc giọng nào.',
    body: `
Hoá biểu gồm các [[dau-hoa]] đặt ngay sau [[khoa-nhac]], áp dụng cho mọi nốt cùng tên trong suốt bản nhạc.

## Thứ tự dấu
- Dấu thăng: **F – C – G – D – A – E – B**
- Dấu giáng: **B – E – A – D – G – C – F** (ngược lại thứ tự dấu thăng)

## Mẹo nhận giọng trưởng
- Với dấu thăng: lấy dấu thăng **cuối cùng**, lên [[cung-nua-cung|nửa cung]] là âm chủ. (F♯ → G trưởng.)
- Với dấu giáng: dấu giáng **áp chót** chính là tên giọng. (B♭ E♭ A♭ → E♭ trưởng.) Riêng 1 dấu giáng là F trưởng.

Mỗi hoá biểu ứng với một [[am-giai-truong]] và một [[am-giai-thu]] song song. Toàn bộ được sắp xếp gọn trong [[vong-quang-nam]].
`,
  },
  {
    slug: 'vong-quang-nam',
    title: 'Vòng quãng năm',
    category: 'harmony',
    aliases: ['vòng tròn quãng 5', 'circle of fifths'],
    summary: 'Sơ đồ xếp 12 giọng theo chuỗi quãng 5 đúng; mỗi bước theo chiều kim đồng hồ thêm một dấu thăng.',
    body: `
::circle-of-fifths | Vòng ngoài: giọng trưởng · vòng trong: giọng thứ song song · viền: số dấu hoá

Đi **theo chiều kim đồng hồ**, mỗi bước lên một [[quang|quãng 5 đúng]] và [[hoa-bieu]] thêm một dấu thăng. Đi **ngược chiều**, mỗi bước thêm một dấu giáng.

## Dùng để làm gì
- Tra nhanh hoá biểu của mọi giọng.
- Tìm giọng song song: cặp trong–ngoài cùng ô (C – a). Xem [[am-giai-thu]].
- Các giọng **cạnh nhau** chỉ khác một dấu hoá nên chuyển giọng rất mượt.
- Ba ô liền nhau (F – C – G) cho ba [[hop-am-ba|hợp âm]] chính I – IV – V của giọng ở giữa.
`,
  },
  {
    slug: 'hop-am-ba',
    title: 'Hợp âm ba',
    category: 'harmony',
    aliases: ['hợp âm', 'chord', 'triad', 'hợp âm trưởng', 'hợp âm thứ'],
    summary: 'Ba nốt xếp chồng theo quãng 3: nốt gốc, nốt bậc 3 và nốt bậc 5.',
    body: `
Hợp âm ba được xây bằng cách chồng hai [[quang|quãng 3]] lên nốt gốc. Tính chất của hai quãng 3 quyết định loại hợp âm:
| Loại | Cấu tạo (nửa cung) | Ví dụ | Ký hiệu |
|---|---|---|---|
| Trưởng | 3 trưởng + 3 thứ (4 + 3) | C – E – G | C |
| Thứ | 3 thứ + 3 trưởng (3 + 4) | C – E♭ – G | Cm |
| Giảm | 3 thứ + 3 thứ (3 + 3) | B – D – F | B° |
| Tăng | 3 trưởng + 3 trưởng (4 + 4) | C – E – G♯ | C+ |

::keyboard C4 E4 G4 | Hợp âm Đô trưởng (C)
::keyboard A4 C5 E5 | Hợp âm La thứ (Am)

## Hợp âm trong giọng
Dựng hợp âm ba trên từng bậc của [[am-giai-truong]] Đô trưởng:
| I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|
| C | Dm | Em | F | G | Am | B° |

Bậc I, IV, V là các hợp âm trưởng chính — cũng là ba ô liền nhau trên [[vong-quang-nam]].
`,
  },
]

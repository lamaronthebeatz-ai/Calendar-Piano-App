import type { Article } from '../wiki'

export const basics: Article[] = [
  {
    slug: 'not-nhac',
    title: 'Nốt nhạc',
    category: 'basics',
    aliases: ['nốt', 'note', 'tên nốt', 'cao độ'],
    summary: 'Ký hiệu cho một âm thanh, cho biết cao độ (cao hay thấp) và trường độ (dài hay ngắn).',
    wiki: 'Musical_note',
    body: `
Mỗi nốt nhạc mang hai thông tin: **cao độ** — vị trí của nốt trên [[khuong-nhac]] — và **trường độ** — hình dạng của nốt (xem [[truong-do]]).

## Bảy tên nốt
Âm nhạc phương Tây dùng 7 tên nốt lặp lại theo từng [[quang|quãng 8]]:
| Tên Latin | Đô | Rê | Mi | Fa | Sol | La | Si |
|---|---|---|---|---|---|---|---|
| Tên chữ cái | C | D | E | F | G | A | B |

Sau Si là Đô của quãng 8 kế tiếp. Để phân biệt các quãng 8, ta thêm số (ký hiệu khoa học): **C4** là Đô giữa trên [[ban-phim|bàn phím piano]], **A4** là nốt La chuẩn 440 Hz (xem [[luat-binh-quan]]).

::keyboard C4 D4 E4 F4 G4 A4 B4 | Bảy nốt tự nhiên ứng với bảy phím trắng

Giữa các phím trắng có phím đen — đó là các nốt mang [[dau-hoa]].

## Cấu tạo hình nốt
- **Đầu nốt**: hình bầu dục, rỗng hoặc đặc — vị trí của nó cho biết cao độ.
- **Đuôi nốt** (thân): vạch thẳng; nốt nằm từ dòng 3 trở lên thì đuôi quay xuống bên trái, dưới dòng 3 thì quay lên bên phải.
- **Móc** hoặc **gạch nối**: cho biết các trường độ ngắn (móc đơn, móc kép…).
`,
  },
  {
    slug: 'khuong-nhac',
    title: 'Khuông nhạc',
    category: 'basics',
    aliases: ['khuông', 'staff', 'khuông nhạc đôi', 'grand staff', 'dòng kẻ phụ', 'ledger line'],
    summary: 'Năm dòng kẻ song song dùng để ghi cao độ của nốt nhạc.',
    wiki: 'Staff_(music)',
    body: `
Khuông nhạc gồm **5 dòng** và **4 khe**, đánh số từ dưới lên. Nốt càng nằm cao trên khuông thì âm càng cao. Nốt vượt ra ngoài khuông được ghi trên **dòng kẻ phụ**.

Bản thân khuông nhạc chưa cho biết tên nốt — phải nhờ [[khoa-nhac]] đặt ở đầu khuông.

::staff treble C4 E4 G4 B4 D5 F5 A5 | Nốt trên dòng kẻ phụ (C4, A5) và trên các dòng, khe

## Khuông nhạc đôi
Piano dùng **khuông nhạc đôi**, nối bằng dấu ngoặc ôm: khuông trên đặt [[khoa-sol]] (thường cho tay phải), khuông dưới đặt [[khoa-fa]] (thường cho tay trái). Hai khuông gặp nhau ở Đô giữa (C4).

::img Grand staff.svg | Khuông nhạc đôi của piano

## Các thành phần khác trên khuông
- **Vạch nhịp** chia khuông thành các ô nhịp (xem [[so-chi-nhip]]).
- **Vạch kép** đánh dấu kết đoạn; **vạch kết** (mảnh + đậm) đánh dấu hết bài.
- Ở đầu mỗi dòng nhạc theo thứ tự: [[khoa-nhac]] → [[hoa-bieu]] → [[so-chi-nhip]].
`,
  },
  {
    slug: 'khoa-nhac',
    title: 'Khoá nhạc',
    category: 'basics',
    aliases: ['khoá', 'khóa nhạc', 'clef'],
    summary: 'Ký hiệu đặt ở đầu khuông nhạc, quy định tên nốt cho từng dòng và khe.',
    wiki: 'Clef',
    body: `
Khoá nhạc "neo" một nốt vào một dòng cụ thể trên [[khuong-nhac]]; từ đó suy ra tên mọi nốt còn lại.
| Khoá | Nốt được neo | Dòng | Dùng cho |
|---|---|---|---|
| [[khoa-sol]] | Sol (G4) | 2 | Piano tay phải, violin, sáo, giọng nữ |
| [[khoa-fa]] | Fa (F3) | 4 | Piano tay trái, cello, bass, giọng nam trầm |
| [[khoa-do]] | Đô (C4) | 3 (khoá Đô dòng 3) | Viola |

::img Middle C in four clefs.svg | Cùng một nốt Đô giữa (C4) được viết trong bốn khoá khác nhau

Khoá nhạc giúp hạn chế [[khuong-nhac|dòng kẻ phụ]]: nhạc cụ âm vực nào dùng khoá đó để nốt nằm gọn trong khuông.
`,
  },
  {
    slug: 'khoa-sol',
    title: 'Khoá Sol',
    category: 'basics',
    aliases: ['khóa Sol', 'treble clef', 'G clef'],
    summary: 'Khoá nhạc cho âm vực cao; vòng xoắn của khoá ôm lấy dòng 2 — nốt Sol (G4).',
    wiki: 'Clef',
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
    wiki: 'Clef',
    body: `
::img FClef.svg | Ký hiệu khoá Fa

Khoá Fa là một loại [[khoa-nhac]], dùng cho khuông dưới của piano (tay trái).

## Cách nhớ nốt
- Các **dòng** từ dưới lên: **G2 – B2 – D3 – F3 – A3** (Sol – Si – Rê – Fa – La).
- Các **khe** từ dưới lên: **A2 – C3 – E3 – G3** (La – Đô – Mi – Sol).

::staff bass G2 B2 D3 F3 A3 | Năm dòng của khoá Fa
::staff bass A2 C3 E3 G3 | Bốn khe của khoá Fa

Đô giữa (C4) nằm trên dòng kẻ phụ thứ nhất **phía trên** khuông khoá Fa — cũng chính là dòng kẻ phụ **phía dưới** khuông [[khoa-sol]].
`,
  },
  {
    slug: 'khoa-do',
    title: 'Khoá Đô',
    category: 'basics',
    aliases: ['khóa Đô', 'C clef', 'alto clef', 'tenor clef', 'khoá Đô dòng 3', 'khoá Đô dòng 4'],
    summary: 'Khoá nhạc "di động" có tâm chỉ vào nốt Đô giữa (C4); phổ biến nhất là khoá Đô dòng 3 cho viola.',
    wiki: 'Clef',
    body: `
::img Alto clef.svg | Ký hiệu khoá Đô

Tâm của khoá Đô chỉ vào dòng nào thì dòng đó là **Đô giữa (C4)**. Hai vị trí còn được dùng ngày nay:
- **Khoá Đô dòng 3 (alto)** — viola.
- **Khoá Đô dòng 4 (tenor)** — các nốt cao của cello, kèn bassoon, trombone.

::staff alto F3 A3 C4 E4 G4 | Năm dòng của khoá Đô dòng 3 (tâm khoá = C4 ở dòng giữa)

Người học piano hiếm khi đọc khoá Đô, nhưng sẽ gặp nó khi đọc tổng phổ hoà tấu hoặc nhạc thính phòng. Xem thêm [[khoa-nhac]].
`,
  },
  {
    slug: 'ban-phim',
    title: 'Bàn phím piano',
    category: 'basics',
    aliases: ['bàn phím', 'phím đàn', 'keyboard', 'Đô giữa', 'middle C', '88 phím'],
    summary: 'Piano tiêu chuẩn có 88 phím (52 trắng, 36 đen), từ A0 đến C8, sắp xếp theo nhóm 2 và 3 phím đen lặp lại.',
    wiki: 'Musical_keyboard',
    body: `
Để định hướng, hãy nhìn các **nhóm phím đen**: nhóm 2 phím và nhóm 3 phím xen kẽ nhau.
- Phím trắng ngay **bên trái nhóm 2 phím đen** là **Đô (C)**.
- Phím trắng ngay **bên trái nhóm 3 phím đen** là **Fa (F)**.

::keyboard C4 F4 | Đô (C) và Fa (F) — hai mốc dễ tìm nhất

Hai phím liền nhau (kể cả trắng–đen) cách nhau [[cung-nua-cung|nửa cung]]. Phím đen mang tên có [[dau-hoa]]: phím đen giữa C và D là **C♯** hay **D♭**.

## Toàn bộ bàn phím
Piano có 88 phím, từ **A0** (thấp nhất) đến **C8** (cao nhất) — hơn 7 [[quang|quãng 8]]. Đô gần giữa đàn nhất gọi là **Đô giữa (C4)**, điểm gặp nhau của [[khoa-sol]] và [[khoa-fa]].

::img 88-key piano colored octaves.svg | 88 phím, mỗi màu là một quãng 8; Đô giữa và La 440 Hz được đánh dấu

Xem thêm: [[ban-dap]] (pedal), [[ngon-bam]], [[ky-hieu-quang-tam]] (chơi cao/thấp một quãng 8).
`,
  },
  {
    slug: 'dau-hoa',
    title: 'Dấu hoá',
    category: 'basics',
    aliases: ['dấu thăng', 'dấu giáng', 'dấu bình', 'thăng kép', 'giáng kép', 'sharp', 'flat', 'natural', 'accidental', 'dấu hoá bất thường'],
    summary: 'Ký hiệu nâng hoặc hạ cao độ của nốt: thăng ♯, giáng ♭, bình ♮, thăng kép 𝄪, giáng kép 𝄫.',
    wiki: 'Accidental_(music)',
    body: `
| Dấu | Tên | Tác dụng |
|---|---|---|
| ♯ | Thăng | Nâng nốt lên [[cung-nua-cung|nửa cung]] |
| ♭ | Giáng | Hạ nốt xuống nửa cung |
| ♮ | Bình | Huỷ dấu thăng/giáng trước đó |
| 𝄪 | Thăng kép | Nâng lên một cung |
| 𝄫 | Giáng kép | Hạ xuống một cung |

::keyboard C#4 Eb4 F#4 | C♯, E♭, F♯ là các phím đen

## Phạm vi hiệu lực
- Đặt **ngay trước một nốt** (dấu hoá bất thường): hiệu lực cho nốt cùng cao độ đến **hết ô nhịp** đó.
- Đặt **ở đầu khuông** ([[hoa-bieu]]): hiệu lực cho mọi nốt cùng tên trong cả bản nhạc.

Hai tên cho cùng một phím, như C♯ và D♭, gọi là [[trung-am]]. Chú ý: E♯ là phím F, và C♭ là phím B.
`,
  },
  {
    slug: 'ky-hieu-quang-tam',
    title: 'Ký hiệu 8va và 8vb',
    category: 'basics',
    aliases: ['8va', '8vb', '15ma', 'ottava', 'chơi cao một quãng 8'],
    summary: 'Ký hiệu yêu cầu chơi cao (8va) hoặc thấp (8vb) hơn một quãng 8 so với nốt viết, để tránh quá nhiều dòng kẻ phụ.',
    wiki: 'Octave',
    body: `
Khi nốt nằm quá cao hoặc quá thấp so với [[khuong-nhac]], người viết nhạc dùng ký hiệu **ottava** thay vì chồng nhiều dòng kẻ phụ.
| Ký hiệu | Ý nghĩa |
|---|---|
| 8va (đặt trên nốt) | Chơi **cao hơn** 1 [[quang|quãng 8]] |
| 8vb (đặt dưới nốt) | Chơi **thấp hơn** 1 quãng 8 |
| 15ma | Chơi cao hơn 2 quãng 8 |
| loco | Trở lại cao độ như viết |

Đường gạch đứt nối sau ký hiệu cho biết phạm vi áp dụng. Trên piano, 8va rất hay gặp ở các đoạn tay phải chạy lên [[ban-phim|vùng phím cao]].
`,
  },
]

import type { Article } from '../wiki'

export const basics: Article[] = [
  {
    slug: 'not-nhac',
    title: 'Nốt nhạc',
    category: 'basics',
    aliases: ['nốt', 'note', 'tên nốt', 'cao độ'],
    summary: 'Ký hiệu cho một âm thanh, cho biết cao độ (cao hay thấp) và trường độ (dài hay ngắn).',
    wiki: 'Musical_note',
    refs: [
      ['Wikipedia — Ut queant laxis', 'https://en.wikipedia.org/wiki/Ut_queant_laxis'],
      ['Wikipedia — Solfège', 'https://en.wikipedia.org/wiki/Solf%C3%A8ge'],
      ['Britannica — Evolution of Western staff notation', 'https://www.britannica.com/art/musical-notation/Evolution-of-Western-staff-notation'],
      ['Wikipedia — Scientific pitch notation', 'https://en.wikipedia.org/wiki/Scientific_pitch_notation'],
      ['Music Theory Practice — Note stem direction', 'https://music-theory-practice.com/guides/note-stem-direction'],
      ['Dorico manual — Stem direction', 'https://archive.steinberg.help/dorico/v2/en/dorico/topics/notation_reference/notation_reference_stems_direction_c.html'],
    ],
    body: `
Mỗi nốt nhạc mang hai thông tin: **cao độ** — vị trí của nốt trên [[khuong-nhac]] — và **trường độ** — hình dạng của nốt (xem [[truong-do]]).

## Bảy tên nốt
Âm nhạc phương Tây dùng 7 tên [[not-lap-lai|nốt lặp]] lại theo từng [[quang|quãng 8]]:
| Tên Latin | Đô | Rê | Mi | Fa | Sol | La | Si |
|---|---|---|---|---|---|---|---|
| Tên chữ cái | C | D | E | F | G | A | B |

Sau Si là Đô của quãng 8 kế tiếp. Để phân biệt các quãng 8, ta thêm số (ký hiệu khoa học): **C4** là Đô giữa trên [[ban-phim|bàn phím piano]], **A4** là nốt La chuẩn 440 Hz (xem [[luat-binh-quan]]).

::keyboard C4 D4 E4 F4 G4 A4 B4 | Bảy nốt tự nhiên ứng với bảy phím trắng

Giữa các phím trắng có phím đen — đó là các nốt mang [[dau-hoa]].

## Cấu tạo hình nốt
- **Đầu nốt**: hình bầu dục, rỗng hoặc đặc — vị trí của nó cho biết cao độ.
- **Đuôi nốt** (thân): vạch thẳng. Nốt **trên dòng 3** → đuôi quay **xuống**, gắn ở **bên trái** đầu nốt; nốt **dưới dòng 3** → đuôi quay **lên**, gắn ở **bên phải**. Nốt **đúng dòng 3**: quy ước phổ biến (và mặc định của phần mềm) là quay xuống, nhưng sách chép nhạc *Behind Bars* của Elaine [[glenn-gould|Gould]] cho phép theo hướng các nốt xung quanh.
- **Móc** hoặc **gạch nối**: cho biết các trường độ ngắn (móc đơn, móc kép…).

## Lịch sử tên nốt Đô – Rê – Mi
- Tên các nốt bắt nguồn từ thánh ca Latin **"Ut queant laxis"** (lời thường được gán cho Paulus Diaconus, thế kỷ 8). Mỗi câu của bài bắt đầu **cao hơn câu trước một bậc**, nên âm tiết đầu mỗi câu — **ut, re, mi, fa, sol, la** — trở thành tên của sáu nốt. Việc đặt tên này thường được gán cho [[guido-d-arezzo|Guido d'Arezzo]] (thế kỷ 11).
- Hệ thống của Guido chỉ có **6 nốt**. Nốt thứ 7 được thêm sau, gọi là **si** — ghép từ chữ cái đầu của *Sancte Iohannes*, câu cuối bài thánh ca. Các nguồn ghi thời điểm khác nhau (từ thế kỷ 15 đến 18).
- Thế kỷ 17 ở Ý, **ut** được đổi thành **do** vì âm "mở" dễ hát hơn; người đề xuất thường được ghi là Giovanni Battista Doni.
- Thế kỷ 19 ở Anh, Sarah Glover đổi **si** thành **ti** để mỗi âm tiết bắt đầu bằng một chữ cái khác nhau. Các nước dùng hệ "Đô cố định" vẫn giữ **si** — cũng là cách gọi ở Việt Nam.

Xem cách dùng các âm tiết này khi hát: [[xuong-am]].

## Lịch sử hình nốt
1. **Neume** (thế kỷ 9–12): ký hiệu chỉ hướng lên – xuống của giọng hát, chưa ghi chính xác cao độ hay trường độ.
2. Cuối thế kỷ 13, phần lớn neume được đơn giản hoá thành **nốt vuông** — vẫn còn dùng trong sách thánh ca Gregorian ngày nay.
3. **[[ky-am|Ký âm]] định lượng** (mensural) bổ sung các hình nốt cho trường độ. Đầu nốt **hình bầu dục** hiện đại chỉ là dạng cách điệu của đầu nốt hình thoi trong ký âm vuông.

Từ khi khuông nhạc và hình nốt ổn định, các thay đổi lớn về sau của ký âm chủ yếu nằm ở **nhịp điệu** (xem [[truong-do]]).

## Khi giảng dạy: "Đô giữa là C4 hay C3?"
- Theo **ký hiệu cao độ khoa học**, Đô giữa luôn là **C4**; số quãng 8 tăng lên mỗi khi đi từ Si sang Đô (nên nốt ngay dưới C4 là **B3**).
- Ký hiệu Helmholtz (hay gặp trong sách châu Âu) viết Đô giữa là **c′**.
- Một số hãng đàn điện tử và phần mềm (như Yamaha, Ableton Live) lại gọi Đô giữa là **C3**. Chuẩn MIDI chỉ quy định Đô giữa là **nốt số 60**, không quy định tên. Khi học sinh dùng đàn điện tử, cần nói rõ quy ước để tránh nhầm.
`,
  },
  {
    slug: 'khuong-nhac',
    title: 'Khuông nhạc',
    category: 'basics',
    aliases: ['khuông', 'staff', 'khuông nhạc đôi', 'grand staff', 'dòng kẻ phụ', 'ledger line'],
    summary: 'Năm dòng kẻ song song dùng để ghi cao độ của nốt nhạc.',
    wiki: 'Staff_(music)',
    refs: [
      ['Britannica — Evolution of Western staff notation', 'https://www.britannica.com/art/musical-notation/Evolution-of-Western-staff-notation'],
      ['John Haines — The origins of the musical staff (The Musical Quarterly)', 'https://edisciplinas.usp.br/pluginfile.php/5344411/mod_resource/content/0/The%20origins%20of%20the%20musical%20staff_John%20Haines.pdf'],
      ['The Met — Musical bodies: the Guidonian hand', 'https://www.metmuseum.org/perspectives/musical-bodies-guidonian-hand'],
    ],
    body: `
Khuông nhạc gồm **5 dòng** và **4 khe**, đánh số từ dưới lên. Nốt càng nằm cao trên khuông thì âm càng cao. Nốt vượt ra ngoài khuông được ghi trên **dòng kẻ phụ**.

Bản thân khuông nhạc chưa cho biết [[not-nhac|tên nốt]] — phải nhờ [[khoa-nhac]] đặt ở đầu khuông.

::staff treble C4 E4 G4 B4 D5 F5 A5 | Nốt trên dòng kẻ phụ (C4, A5) và trên các dòng, khe

## Lịch sử
- Khuông nhạc ra đời từ việc kẻ **dòng** để định vị neume. Người ta đánh dấu một dòng là một cao độ cố định, thường là **C hoặc F** — tiền thân của [[khoa-nhac]].
- [[guido-d-arezzo|Guido d'Arezzo]] (khoảng năm 1030) theo truyền thống được coi là người tạo ra khuông **4 dòng**. Giới nghiên cứu ngày nay thận trọng hơn: dòng kẻ đã có từ trước, Guido là người **mở rộng lên 4 dòng** và phổ biến phương pháp. Theo giai thoại, khoảng năm 1028 Giáo hoàng John XIX mời ông đến Rome và học được cách [[doc-not-nhanh|đọc nhạc]] chỉ trong một buổi chiều.
- Khuông **5 dòng** dùng cho [[ky-am|ký âm]] định lượng (nhạc thế tục). Các nguồn không thống nhất thời điểm nó trở thành chuẩn. Sách thánh ca Gregorian đến nay vẫn dùng khuông 4 dòng.

## Khuông nhạc đôi
Piano dùng **khuông nhạc đôi**, nối bằng dấu ngoặc ôm: khuông trên đặt [[khoa-sol]] (thường cho tay phải), khuông dưới đặt [[khoa-fa]] (thường cho tay trái). Hai khuông gặp nhau ở [[ban-phim|Đô giữa]] (C4).

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
    refs: [
      ['Merriam-Webster — clef', 'https://www.merriam-webster.com/dictionary/clef'],
      ['Ewell & Schmidt-Jones, Music Fundamentals (LibreTexts) — Clef', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Fundamentals_(Ewell_and_Schmidt-Jones)/01%3A_Pitch_and_Major_Scales_and_Keys/1.02%3A_Clef'],
      ['Music Theory (LibreTexts) — Moveable C-clef, other clefs', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_(LibreTexts)/02%3A_The_Elements_of_Pitch-Sound_Symbol_and_Tone/2.06%3A_Moveable_C-Clef_Other_Clefs'],
    ],
    body: `
Khoá nhạc "neo" một nốt vào một dòng cụ thể trên [[khuong-nhac]]; từ đó suy ra tên mọi nốt còn lại.
| Khoá | Nốt được neo | Dòng | Dùng cho |
|---|---|---|---|
| [[khoa-sol]] | Sol (G4) | 2 | Piano tay phải, violin, sáo, giọng nữ |
| [[khoa-fa]] | Fa (F3) | 4 | Piano tay trái, cello, bass, giọng nam trầm |
| [[khoa-do]] | Đô (C4) | 3 (khoá Đô dòng 3) | Viola |

::img Middle C in four clefs.svg | Cùng một nốt Đô giữa (C4) được viết trong bốn khoá khác nhau

Khoá nhạc giúp hạn chế [[khuong-nhac|dòng kẻ phụ]]: nhạc cụ âm vực nào dùng khoá đó để nốt nằm gọn trong khuông.

## Khoá nhạc vốn là chữ cái
Khoá nhạc ban đầu chính là **chữ cái [[not-nhac|tên nốt]]** viết lên một dòng của khuông; theo Merriam-Webster, chúng được dùng đều đặn từ **thế kỷ 12**.
| Khoá hiện đại | Bắt nguồn từ |
|---|---|
| [[khoa-sol]] | Chữ **G** kiểu Gothic |
| [[khoa-fa]] | Chữ **F** — hai dấu chấm là dấu vết của nét chữ |
| [[khoa-do]] | Chữ **C** |

## Khoá "di động" và các khoá đã lỗi thời
Ngày xưa khoá có thể đặt trên **nhiều dòng khác nhau** để nốt của từng bè nằm gọn trong khuông. Từ đó có nhiều tên khoá:
- **Khoá Sol dòng 1** (khoá violin kiểu Pháp) và **khoá Đô dòng 1** (khoá soprano): đã thôi dùng.
- Ngày nay chỉ còn hai khoá [[xuong-am|Đô di động]] phổ biến: **alto** (dòng 3) và **tenor** (dòng 4).

Người học piano chủ yếu cần khoá Sol và khoá Fa. Khoá Đô gặp khi đọc tổng phổ hoặc nhạc thính phòng.
`,
  },
  {
    slug: 'khoa-sol',
    title: 'Khoá Sol',
    category: 'basics',
    aliases: ['khóa Sol', 'treble clef', 'G clef'],
    summary: 'Khoá nhạc cho âm vực cao; vòng xoắn của khoá ôm lấy dòng 2 — nốt Sol (G4).',
    wiki: 'Clef',
    refs: [
      ['Merriam-Webster — clef', 'https://www.merriam-webster.com/dictionary/clef'],
      ['Ewell & Schmidt-Jones, Music Fundamentals (LibreTexts) — Clef', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Fundamentals_(Ewell_and_Schmidt-Jones)/01%3A_Pitch_and_Major_Scales_and_Keys/1.02%3A_Clef'],
    ],
    body: `
::img GClef.svg | Ký hiệu khoá Sol

Khoá Sol là một loại [[khoa-nhac]], dùng cho [[khuong-nhac|khuông]] trên của piano (tay phải).

## Cách nhớ nốt
- Các **dòng** từ dưới lên: **E4 – G4 – B4 – D5 – F5** (Mi – Sol – Si – Rê – Fa).
- Các **khe** từ dưới lên: **F4 – A4 – C5 – E5** (Fa – La – Đô – Mi).

::staff treble E4 G4 B4 D5 F5 | Năm dòng của khoá Sol
::staff treble F4 A4 C5 E5 | Bốn khe của khoá Sol

## Nguồn gốc hình dạng
Khoá Sol là chữ **G** kiểu Gothic được cách điệu; vòng xoắn của nó quấn quanh **dòng 2** — nốt Sol (G4). Vì thế nó còn được gọi là **khoá G**, và trước đây là **khoá violin**.

## Mốc định hướng
Ba nốt dễ nhận nhất trên khoá Sol: **[[ban-phim|Đô giữa]] (C4)** trên dòng kẻ phụ dưới, **Sol (G4)** ở dòng 2, **Đô cao (C5)** ở khe 3. Từ các mốc này có thể đọc các nốt khác theo [[quang|quãng]] (xem [[doc-not-nhanh]]).

::staff treble C4 G4 C5 | Ba nốt mốc của khoá Sol

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
    refs: [
      ['Merriam-Webster — clef', 'https://www.merriam-webster.com/dictionary/clef'],
      ['Ewell & Schmidt-Jones, Music Fundamentals (LibreTexts) — Clef', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Fundamentals_(Ewell_and_Schmidt-Jones)/01%3A_Pitch_and_Major_Scales_and_Keys/1.02%3A_Clef'],
    ],
    body: `
::img FClef.svg | Ký hiệu khoá Fa

Khoá Fa là một loại [[khoa-nhac]], dùng cho [[khuong-nhac|khuông]] dưới của piano (tay trái).

## Cách nhớ nốt
- Các **dòng** từ dưới lên: **G2 – B2 – D3 – F3 – A3** (Sol – Si – Rê – Fa – La).
- Các **khe** từ dưới lên: **A2 – C3 – E3 – G3** (La – Đô – Mi – Sol).

::staff bass G2 B2 D3 F3 A3 | Năm dòng của khoá Fa
::staff bass A2 C3 E3 G3 | Bốn khe của khoá Fa

[[ban-phim|Đô giữa]] (C4) nằm trên dòng kẻ phụ thứ nhất **phía trên** khuông khoá Fa — cũng chính là dòng kẻ phụ **phía dưới** khuông [[khoa-sol]].

## Nguồn gốc hình dạng
Khoá Fa vốn là chữ **F**. Hai dấu chấm **kẹp lấy dòng 4** — nốt Fa (F3), Fa ngay dưới Đô giữa.

## Mốc định hướng
Ba nốt dễ nhận nhất: **Đô trầm (C3)** ở khe 2, **Fa (F3)** ở dòng 4, **Đô giữa (C4)** trên dòng kẻ phụ trên.

::staff bass C3 F3 C4 | Ba nốt mốc của khoá Fa

## So với khoá Sol
Cùng một vị trí trên khuông, **[[not-nhac|tên nốt]]** ở khoá Fa cao hơn khoá Sol **một bậc 3** (dòng 1: Sol thay vì Mi; khe 1: La thay vì Fa), nhưng **cao độ** thì thấp hơn nhiều (dòng 1 khoá Fa là G2, dòng 1 khoá Sol là E4). Vì vậy không thể đọc khoá Fa bằng cách "nhìn như khoá Sol" — cần học mốc riêng của nó.
`,
  },
  {
    slug: 'khoa-do',
    title: 'Khoá Đô',
    category: 'basics',
    aliases: ['khóa Đô', 'C clef', 'alto clef', 'tenor clef', 'khoá Đô dòng 3', 'khoá Đô dòng 4'],
    summary: 'Khoá nhạc "di động" có tâm chỉ vào nốt Đô giữa (C4); phổ biến nhất là khoá Đô dòng 3 cho viola.',
    wiki: 'Clef',
    refs: [
      ['Music Theory (LibreTexts) — Moveable C-clef, other clefs', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_(LibreTexts)/02%3A_The_Elements_of_Pitch-Sound_Symbol_and_Tone/2.06%3A_Moveable_C-Clef_Other_Clefs'],
      ['Merriam-Webster — clef', 'https://www.merriam-webster.com/dictionary/clef'],
    ],
    body: `
::img Alto clef.svg | Ký hiệu khoá Đô

Tâm của khoá Đô chỉ vào dòng nào thì dòng đó là **[[ban-phim|Đô giữa]] (C4)**. Hai vị trí còn được dùng ngày nay:
- **Khoá Đô dòng 3 (alto)** — viola.
- **Khoá Đô dòng 4 (tenor)** — các nốt cao của cello, kèn bassoon, trombone.

::staff alto F3 A3 C4 E4 G4 | Năm dòng của khoá Đô dòng 3 (tâm khoá = C4 ở dòng giữa)

## Vì sao viola cần khoá riêng?
Âm vực viola nằm **giữa** violin và cello. Viết bằng [[khoa-sol|khoá Sol]] hay [[khoa-fa|khoá Fa]] đều cần rất nhiều [[khuong-nhac|dòng kẻ phụ]]; khoá Đô dòng 3 đặt Đô giữa vào **giữa khuông**, nên phần lớn nốt viola nằm gọn trong 5 dòng.

## Lịch sử
Khoá Đô bắt nguồn từ chữ **C**, và từng được đặt ở **mọi dòng** trừ dòng trên cùng — nên gọi là khoá Đô "di động". Mỗi vị trí có tên riêng, ví dụ soprano (dòng 1), alto (dòng 3), tenor (dòng 4). Ngày nay chỉ còn alto và tenor được dùng thường xuyên.

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
    refs: [
      ['Classic FM — Why does a piano have 88 keys?', 'https://www.classicfm.com/discover-music/instruments/piano/why-88-keys/'],
      ["Living Pianos — Why aren't keyboards divided into an even number of octaves?", 'https://www.livingpianos.com/articles/why-arent-keyboards-divided-into-an-even-number-of-octaves/'],
      ['J. C. Neupert — Fortepiano "Mozart"', 'https://www.jc-neupert.de/en/component/virtuemart/new-instruments/fortepianos/fortepiano-mozart,-new-detail'],
      ['Wikipedia — Imperial Bösendorfer', 'https://en.wikipedia.org/wiki/Imperial_B%C3%B6sendorfer'],
    ],
    body: `
Để định hướng, hãy nhìn các **nhóm phím đen**: nhóm 2 phím và nhóm 3 phím xen kẽ nhau.
- Phím trắng ngay **bên trái nhóm 2 phím đen** là **Đô (C)**.
- Phím trắng ngay **bên trái nhóm 3 phím đen** là **Fa (F)**.

::keyboard C4 F4 | Đô (C) và Fa (F) — hai mốc dễ tìm nhất

Hai phím liền nhau (kể cả trắng–đen) cách nhau [[cung-nua-cung|nửa cung]]. Phím đen mang tên có [[dau-hoa]]: phím đen giữa C và D là **C♯** hay **D♭**.

## Toàn bộ bàn phím
Piano có 88 phím, từ **A0** (thấp nhất) đến **C8** (cao nhất) — hơn 7 [[quang|quãng 8]]. Đô gần giữa đàn nhất gọi là **Đô giữa (C4)**, điểm gặp nhau của [[khoa-sol]] và [[khoa-fa]].

::img 88-key piano colored octaves.svg | 88 phím, mỗi màu là một quãng 8; Đô giữa và La 440 Hz được đánh dấu

## Vì sao là 88 phím?
Số phím tăng dần theo lịch sử, vì nhà soạn nhạc luôn muốn thêm âm vực:
| Thời kỳ | Số phím / âm vực |
|---|---|
| Đàn của Cristofori (đầu thế kỷ 18) | Khoảng **49** phím |
| Thời [[wolfgang-amadeus-mozart|Mozart]] | **5 quãng 8** (Fa – Fa, 61 phím). Mozart không viết vượt âm vực này; [[ludwig-van-beethoven|Beethoven]] chỉ vượt từ [[hinh-thuc-sonata|Sonata]] "Waldstein" Op. 53 (1804) |
| Giữa thế kỷ 19 ([[frederic-chopin|Chopin]], [[franz-liszt|Liszt]]) | Khoảng **85** phím, 7 quãng 8 |
| Cuối những năm 1880 | **88** phím — Steinway thêm 3 phím và chuẩn này được các hãng khác theo (có nguồn cho rằng Chickering làm trước) |

Có đàn **nhiều hơn 88 phím**: mẫu **Bösendorfer Imperial** có **97 phím** (xuống đến C0). [[ferruccio-busoni|Busoni]] đặt làm năm 1909 để chuyển soạn một tác phẩm organ có nốt thấp hơn bàn phím thường. Các phím thêm được sơn **đen** để người chơi không nhầm.

Lịch sử cây đàn: [[lich-su-piano]].

Bên trong cây đàn: [[cau-tao-piano]]. Xem thêm: [[tu-the]] (cách ngồi), [[ban-dap]] (pedal), [[ngon-bam]], [[ky-hieu-quang-tam]] (chơi cao/thấp một quãng 8).
`,
  },
  {
    slug: 'dau-hoa',
    title: 'Dấu hoá',
    category: 'basics',
    aliases: ['dấu thăng', 'dấu giáng', 'dấu bình', 'thăng kép', 'giáng kép', 'sharp', 'flat', 'natural', 'accidental', 'dấu hoá bất thường'],
    summary: 'Ký hiệu nâng hoặc hạ cao độ của nốt: thăng ♯, giáng ♭, bình ♮, thăng kép 𝄪, giáng kép 𝄫.',
    wiki: 'Accidental_(music)',
    refs: [
      ['Wikipedia — Accidental (music)', 'https://en.wikipedia.org/wiki/Accidental_(music)'],
      ['Britannica — Accidental', 'https://www.britannica.com/print/article/2950'],
      ['Dorico manual — Common practice accidental duration rule', 'https://steinberg.help/dorico/v1/en/dorico/topics/notation_reference/notation_reference_accidentals_common_practice_r.html'],
      ['Henle Blog — Cautionary accidentals: just enough or are extras OK too?', 'https://blog.henle.de/en/2012/09/03/the-crux-of-sharp-or-flat-just-enough-cautionary-accidentals-or-are-extras-o-k-too/'],
    ],
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
- Đặt **ngay trước một nốt** (dấu hoá bất thường): hiệu lực cho các nốt **cùng cao độ, cùng [[quang|quãng 8]]** đến **hết [[so-chi-nhip|ô nhịp]]** đó, trừ khi bị một dấu hoá khác huỷ.
- **Ngoại lệ — [[cham-doi-dau-noi|dấu nối]]**: nếu nốt có dấu hoá được **nối** sang ô nhịp sau, nốt nối vẫn giữ dấu hoá đó.
- Đặt **ở đầu [[khuong-nhac|khuông]]** ([[hoa-bieu]]): hiệu lực cho mọi nốt cùng tên trong cả bản nhạc.

Hai tên cho cùng một phím, như C♯ và D♭, gọi là [[trung-am]]. Chú ý: E♯ là phím F, và C♭ là phím B.

## Khi giảng dạy: ba chỗ học sinh hay sai
1. **Quãng 8 khác**: dấu thăng trước F4 **không** áp dụng cho F5 trong cùng ô nhịp. Thực tế không phải nhà soạn nhạc nào cũng theo đúng quy tắc này, nên bản in tốt thường thêm dấu nhắc.
2. **Sang ô nhịp mới**: dấu hoá bất thường hết hiệu lực ở vạch nhịp (trừ nốt nối).
3. **Dấu hoá nhắc** (dấu hoá lịch sự, thường đặt trong ngoặc): chỉ để **nhắc**, không thay đổi nốt. Ví dụ ở Sol trưởng, sau một ô có F♮, nốt F ở ô kế tiếp có thể được ghi lại dấu ♯ dù hoá biểu đã có. Nhà xuất bản [[an-ban-urtext|Henle]] cho biết không có quy tắc cứng về việc dùng bao nhiêu dấu nhắc.

## Lịch sử: vì sao ♭, ♮, ♯ trông như vậy?
- Dấu hoá đầu tiên chỉ áp dụng cho **nốt B** (khoảng thế kỷ 10).
- **♭** bắt nguồn từ chữ **b tròn** (*b rotundum*) — nốt B được hạ xuống. Tên tiếng Pháp *bémol* nghĩa là "b mềm".
- **♮** và **♯** đều bắt nguồn từ chữ **b vuông** (*b quadratum*) — nốt B giữ nguyên. Về sau hình vuông được kéo dài các cạnh theo hai cách, tách thành hai dấu bình và thăng.
- Ban đầu **không có dấu bình**: dấu thăng huỷ dấu giáng và ngược lại.
- Trong tiếng Đức, **B** là Si giáng, còn **H** (vốn là chữ b vuông bị biến dạng) là Si tự nhiên. Vì thế mới có [[motif|motif]] B-A-C-H (Si♭ – La – Đô – Si) mà [[Bach]] và nhiều người sau dùng.
`,
  },
  {
    slug: 'ky-hieu-quang-tam',
    title: 'Ký hiệu 8va và 8vb',
    category: 'basics',
    aliases: ['8va', '8vb', '15ma', 'ottava', 'chơi cao một quãng 8'],
    summary: 'Ký hiệu yêu cầu chơi cao (8va) hoặc thấp (8vb) hơn một quãng 8 so với nốt viết, để tránh quá nhiều dòng kẻ phụ.',
    wiki: 'Octave',
    refs: [
      ['SMuFL (W3C) — Octaves', 'https://www.w3.org/2021/03/smufl14/tables/octaves.html'],
      ['Dynamic Music Room — What do 8va and 8vb mean?', 'https://dynamicmusicroom.com/8va-and-8vb-mean/'],
      ['Steinberg forum — 8va / 8va bassa', 'https://forums.steinberg.net/t/feature-request-8va-8vab/668072'],
    ],
    body: `
Khi nốt nằm quá cao hoặc quá thấp so với [[khuong-nhac]], người viết nhạc dùng ký hiệu **ottava** thay vì chồng nhiều dòng kẻ phụ.
| Ký hiệu | Ý nghĩa |
|---|---|
| 8va (đặt trên nốt) | Chơi **cao hơn** 1 [[quang|quãng 8]] |
| 8vb (đặt dưới nốt) | Chơi **thấp hơn** 1 quãng 8 |
| 15ma | Chơi cao hơn 2 quãng 8 |
| loco | Trở lại cao độ như viết |

Đường gạch đứt nối sau ký hiệu cho biết phạm vi áp dụng. Trên piano, 8va rất hay gặp ở các đoạn tay phải chạy lên [[ban-phim|vùng phím cao]].

## Cách đọc chính xác
- **8va** đặt **trên** khuông; **8vb** (hoặc *8va bassa*, *8ba*, hay chỉ số **8**) đặt **dưới** khuông.
- Đường gạch đứt kéo dài suốt đoạn bị ảnh hưởng và thường kết thúc bằng một **nét móc**. Hết đường gạch (hoặc gặp chữ *loco* — "đúng chỗ") thì chơi lại đúng cao độ viết.
- **15ma** (*quindicesima*, "thứ mười lăm") = 2 quãng 8. Gọi là "mười lăm" vì từ nốt đầu đến nốt cuối của hai quãng 8 có 15 bậc **nếu đếm cả hai đầu** — giống cách đếm [[quang]].

## "8vb" hay "8va bassa"?
Hai cách viết cùng nghĩa. Theo chuẩn phông ký hiệu nhạc SMuFL, dạng đúng là *8va bassa* (*8va* là viết tắt của *ottava*); **8vb** là dạng "sai" nảy sinh khi người không nói tiếng Ý tưởng "va" nghĩa là "alta" (cao). Tuy vậy, 8vb nay đã thành cách viết thông dụng.

## Khoá có số 8
Một số khoá có số **8** nhỏ trên hoặc dưới: chơi cao hơn hoặc thấp hơn một quãng 8 so với viết. Ví dụ [[khoa-sol|khoá Sol]] có số 8 ở dưới dùng cho guitar và giọng tenor.

8vb hay gặp nhất ở [[khoa-fa|khoá Fa]] — đặc biệt **tay trái piano** và contrabass.
`,
  },
]

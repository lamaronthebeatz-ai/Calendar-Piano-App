import type { Article } from '../wiki'

export const basics: Article[] = [
  {
    slug: 'nhac-ly-co-ban',
    title: 'Nhạc lý cơ bản: hệ thống và lộ trình',
    category: 'basics',
    aliases: ['nhạc lý cơ bản', 'nhạc lý', 'lộ trình nhạc lý', 'music fundamentals', 'music theory basics', 'kiến thức nhạc lý'],
    summary: 'Bài tổng quan của mục: nhạc lý cơ bản là "bảng chữ cái" để đọc và hiểu bản nhạc — ký hiệu, tiết tấu, cao độ, âm giai, hợp âm — và thứ tự học từ ký hiệu đến hoà âm, hình thức.',
    wiki: 'Music_theory',
    refs: [
      ['Open Music Theory (Gotham và cộng sự) — Phần I: Fundamentals', 'https://viva.pressbooks.pub/openmusictheory/part/fundamentals/'],
      ['Wikipedia — Music theory', 'https://en.wikipedia.org/wiki/Music_theory'],
      ['Wikipedia — Musical notation', 'https://en.wikipedia.org/wiki/Musical_notation'],
      ['OpenStax — Understanding Basic Music Theory (Schmidt-Jones)', 'https://human.libretexts.org/Bookshelves/Music/Book%3A_Understanding_Basic_Music_Theory_(OpenSTAX)'],
    ],
    body: `
**Nhạc lý cơ bản** là những kiến thức để **đọc, viết và gọi tên** những gì nghe thấy trong âm nhạc: nốt nào, dài bao lâu, thuộc giọng nào, tạo thành hợp âm gì. Các giáo trình nhập môn như *Open Music Theory* sắp xếp phần này theo trình tự: **ký hiệu cao độ → ký hiệu tiết tấu → âm giai, hoá biểu, [[dieu-thuc|điệu thức]] → [[quang|quãng]] → hợp âm ba → hợp âm bảy**; mỗi chương giả định người học đã nắm các chương trước.

## Bản nhạc ghi lại những gì?
| Thông tin | Ghi bằng | Bài |
|---|---|---|
| **Cao độ** — nốt nào | Vị trí trên khuông, khoá, dấu hoá | [[not-nhac]], [[khuong-nhac]], [[khoa-nhac]], [[dau-hoa]] |
| **Trường độ** — dài bao lâu | Hình nốt, dấu lặng, chấm dôi | [[truong-do]], [[dau-lang]], [[cham-doi-dau-noi]] |
| **Nhịp** — phách tổ chức thế nào | Số chỉ nhịp, vạch nhịp | [[so-chi-nhip]] |
| **Giọng** — nốt nào là trung tâm | Hoá biểu | [[hoa-bieu]], [[dieu-tinh]] |
| **Tốc độ, sắc thái, cách đánh** | Thuật ngữ Ý, ký hiệu | [[nhip-do]], [[cuong-do]], [[cach-dien-tau]] |
Những gì bản nhạc **không** ghi hết — [[rubato|rubato]], cân bằng các bè, [[am-sac|màu âm]] — thuộc về diễn tấu (xem [[dien-tau]]).

## Lộ trình học
1. **Đọc nốt**: [[ban-phim]] → [[not-nhac]] → [[ten-not-va-he-thong-xuong-am]] → [[khuong-nhac]] → [[khoa-nhac]] ([[khoa-sol]], [[khoa-fa]], [[khoa-do]]) → [[dau-hoa]] → [[ky-hieu-quang-tam]].
   Trình bày bản nhạc: [[vach-nhip-va-trinh-bay-ban-nhac]] → [[quy-tac-ghep-duoi-va-chia-nhom-not]] → [[dau-luyen-dau-noi-va-dau-cau]]; đọc tổng phổ: [[nhac-cu-dich-giong-va-doc-tong-pho]].
2. **Tiết tấu**: theo lộ trình trong [[tiet-tau]].
3. **Cao độ và quãng**: theo lộ trình trong [[cao-do]].
4. **Âm giai và giọng**: theo lộ trình trong [[am-giai]].
5. **Hợp âm và hoà âm**: [[hop-am-ba]] → [[the-dao-hop-am]] → [[hop-am-bay]], rồi toàn bộ [[giao-trinh-hoa-am]].
6. **[[hinh-thuc-am-nhac|Hình thức]]**: [[lo-trinh-hinh-thuc]].
7. **Ký hiệu diễn tấu**: [[dien-tau]].

## Học nhạc lý cùng với tai và tay
Nhạc lý chỉ thành kỹ năng khi gắn với **âm thanh**: đọc thì hát hoặc đánh thử, nghe thì gọi tên. Xem [[luyen-tai]], [[xuong-am]], [[am-tiet-nhip]], [[ky-am]], và về phía người dạy: [[cach-day-doc-not]], [[doc-not-nhanh]], [[lo-trinh-luyen-tai-su-pham]].

**Góc nhìn lịch sử:** ký âm ngày nay là điểm cuối của gần một nghìn năm phát triển, từ neume qua khuông nhạc của Guido đến vạch nhịp thế kỷ 17 — xem [[lich-su-ky-am]].

**Ký âm bình ca:** [[ky-am-binh-ca-gregorian]] (khuông 4 dòng, khoá Đô và khoá Fa di động, neume) và [[gregorio-va-gabc]] (soạn nốt vuông trên máy tính).

**Cách ghi khác và tên cao độ:** [[gian-pho-ky-am-so]] (ký âm bằng số), [[ky-hieu-cao-do-c4-helmholtz-midi]] (C4, c′, MIDI 60), và mã hoá cho máy tính ở [[am-nhac-hoc-ky-thuat-so]].

**Nhạc lý theo cấp độ (ABRSM):** [[chuong-trinh-nhac-ly-abrsm]] → [[nhac-ly-cap-1-2]] → [[nhac-ly-cap-3-4]] → [[nhac-ly-cap-5]].

**Nhạc lý trong giáo trình piano:** vị trí tay đầu tiên — [[vi-tri-nam-ngon-va-am-giai-nam-not]]; các chương trình nhạc lý ABRSM, RCM, Trinity được so sánh ở [[danh-gia-giao-trinh-piano-va-nhac-ly]].
`,
  },
  {
    slug: 'not-nhac',
    title: 'Nốt nhạc',
    category: 'basics',
    aliases: ['nốt', 'note', 'tên nốt'],
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
Mỗi nốt nhạc mang hai thông tin: **[[cao-do|cao độ]]** — vị trí của nốt trên [[khuong-nhac]] — và **trường độ** — hình dạng của nốt (xem [[truong-do]]).

## Bảy tên nốt
Âm nhạc phương Tây dùng 7 tên nốt, [[not-lap-lai|lặp lại]] theo từng [[quang|quãng 8]]:
| Tên Latin | Đô | Rê | Mi | Fa | Sol | La | Si |
|---|---|---|---|---|---|---|---|
| Tên chữ cái | C | D | E | F | G | A | B |

Sau Si là Đô của quãng 8 kế tiếp. Để phân biệt các quãng 8, ta thêm số (ký hiệu khoa học): **C4** là Đô giữa trên [[ban-phim|bàn phím piano]], **A4** là nốt La chuẩn 440 Hz (xem [[luat-binh-quan]]).

::keyboard C4 D4 E4 F4 G4 A4 B4 | Bảy nốt tự nhiên ứng với bảy phím trắng

Giữa các phím trắng có phím đen — đó là các nốt mang [[dau-hoa]].

## Cấu tạo hình nốt
- **Đầu nốt**: hình bầu dục, rỗng hoặc đặc — vị trí của nó cho biết cao độ.
- **Đuôi nốt** (thân): vạch thẳng. Nốt **trên dòng 3** → đuôi quay **xuống**, gắn ở **bên trái** đầu nốt; nốt **dưới dòng 3** → đuôi quay **lên**, gắn ở **bên phải**. Nốt **đúng dòng 3**: quy ước phổ biến (và mặc định của phần mềm) là quay xuống, nhưng sách chép nhạc *Behind Bars* của Elaine Gould cho phép theo hướng các nốt xung quanh.
- **Móc** hoặc **gạch nối**: cho biết các trường độ ngắn (móc đơn, móc kép…).

## Lịch sử tên nốt Đô – Rê – Mi
- Tên các nốt bắt nguồn từ thánh ca Latin **"[[thanh-ca-gregorian|Ut queant laxis]]"** (lời thường được gán cho Paulus Diaconus, thế kỷ 8). Mỗi câu của bài bắt đầu **cao hơn câu trước một bậc**, nên âm tiết đầu mỗi câu — **ut, re, mi, fa, sol, la** — trở thành tên của sáu nốt. Việc đặt tên này thường được gán cho [[guido-d-arezzo|Guido d'Arezzo]] (thế kỷ 11).
- Hệ thống của Guido chỉ có **6 nốt**. Nốt thứ 7 được thêm sau, gọi là **si** — ghép từ chữ cái đầu của *Sancte Iohannes*, câu cuối bài thánh ca. Các nguồn ghi thời điểm khác nhau (từ thế kỷ 15 đến 18).
- Thế kỷ 17 ở Ý, **ut** được đổi thành **do** vì âm "mở" dễ hát hơn; người đề xuất thường được ghi là Giovanni Battista Doni.
- Thế kỷ 19 ở Anh, Sarah Glover đổi **si** thành **ti** để mỗi âm tiết bắt đầu bằng một chữ cái khác nhau. Các nước dùng hệ "Đô cố định" vẫn giữ **si** — cũng là cách gọi ở Việt Nam.

Xem cách dùng các âm tiết này khi hát: [[xuong-am]].

## Lịch sử hình nốt
1. **[[ky-am-binh-ca-gregorian|Neume]]** (thế kỷ 9–12): ký hiệu chỉ hướng lên – xuống của giọng hát, chưa ghi chính xác cao độ hay trường độ.
2. Cuối thế kỷ 13, phần lớn neume được đơn giản hoá thành **nốt vuông** — vẫn còn dùng trong sách thánh ca Gregorian ngày nay.
3. **[[ky-am|Ký âm]] định lượng** (mensural) bổ sung các hình nốt cho trường độ. Đầu nốt **hình bầu dục** hiện đại chỉ là dạng cách điệu của đầu nốt hình thoi trong ký âm vuông.

Từ khi khuông nhạc và hình nốt ổn định, các thay đổi lớn về sau của ký âm chủ yếu nằm ở **[[tiet-tau|nhịp điệu]]** (xem [[truong-do]]).

## Khi giảng dạy: "Đô giữa là C4 hay C3?"
- Theo **[[ky-hieu-cao-do-c4-helmholtz-midi|ký hiệu cao độ]] khoa học**, Đô giữa luôn là **C4**; số quãng 8 tăng lên mỗi khi đi từ Si sang Đô (nên nốt ngay dưới C4 là **B3**).
- Ký hiệu Helmholtz (hay gặp trong sách châu Âu) viết Đô giữa là **c′**.
- Một số hãng đàn điện tử và phần mềm (như Yamaha, Ableton Live) lại gọi Đô giữa là **C3**. Chuẩn [[synthesizer|MIDI]] chỉ quy định Đô giữa là **nốt số 60**, không quy định tên. Khi học sinh dùng đàn điện tử, cần nói rõ quy ước để tránh nhầm.
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
- Khuông nhạc ra đời từ việc kẻ **dòng** để định vị [[thanh-ca-gregorian|neume]]. Người ta đánh dấu một dòng là một [[cao-do|cao độ]] cố định, thường là **C hoặc F** — tiền thân của [[khoa-nhac]].
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
    aliases: ['khoá', 'khoá nhạc', 'clef'],
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
| [[khoa-sol]] | Sol (G4) | 2 | Piano tay phải, [[violin|violin]], sáo, giọng nữ |
| [[khoa-fa]] | Fa (F3) | 4 | Piano tay trái, [[cello|cello]], bass, giọng nam trầm |
| [[khoa-do]] | Đô (C4) | 3 (khoá Đô dòng 3) | [[viola|Viola]] |

::img Middle C in four clefs.svg | Cùng một nốt Đô giữa (C4) được viết trong bốn khoá khác nhau

Khoá nhạc giúp hạn chế [[khuong-nhac|dòng kẻ phụ]]: nhạc cụ [[cao-do|âm vực]] nào dùng khoá đó để nốt nằm gọn trong khuông.

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
- Ngày nay chỉ còn hai vị trí khoá Đô phổ biến: **alto** (dòng 3) và **tenor** (dòng 4).

Người học piano chủ yếu cần khoá Sol và khoá Fa. Khoá Đô gặp khi đọc tổng phổ hoặc [[nhac-thinh-phong|nhạc thính phòng]].
`,
  },
  {
    slug: 'khoa-sol',
    title: 'Khoá Sol',
    category: 'basics',
    aliases: ['khoá Sol', 'treble clef', 'G clef'],
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
Khoá Sol là chữ **G** kiểu Gothic được cách điệu; vòng xoắn của nó quấn quanh **dòng 2** — nốt Sol (G4). Vì thế nó còn được gọi là **khoá G**, và trước đây là **khoá [[violin|violin]]**.

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
    aliases: ['khoá Fa', 'bass clef', 'F clef'],
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
Cùng một vị trí trên khuông, **[[not-nhac|tên nốt]]** ở khoá Fa cao hơn khoá Sol **một quãng 3** tính theo tên nốt (dòng 1: Sol thay vì Mi; khe 1: La thay vì Fa), nhưng **[[cao-do|cao độ]]** thì thấp hơn nhiều (dòng 1 khoá Fa là G2, dòng 1 khoá Sol là E4). Vì vậy không thể đọc khoá Fa bằng cách "nhìn như khoá Sol" — cần học mốc riêng của nó.
`,
  },
  {
    slug: 'khoa-do',
    title: 'Khoá Đô',
    category: 'basics',
    aliases: ['khoá Đô', 'C clef', 'alto clef', 'tenor clef', 'khoá Đô dòng 3', 'khoá Đô dòng 4'],
    summary: 'Khoá nhạc "di động" có tâm chỉ vào nốt Đô giữa (C4); phổ biến nhất là khoá Đô dòng 3 cho viola.',
    wiki: 'Clef',
    refs: [
      ['Music Theory (LibreTexts) — Moveable C-clef, other clefs', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_(LibreTexts)/02%3A_The_Elements_of_Pitch-Sound_Symbol_and_Tone/2.06%3A_Moveable_C-Clef_Other_Clefs'],
      ['Merriam-Webster — clef', 'https://www.merriam-webster.com/dictionary/clef'],
    ],
    body: `
::img Alto clef.svg | Ký hiệu khoá Đô

Tâm của khoá Đô chỉ vào dòng nào thì dòng đó là **[[ban-phim|Đô giữa]] (C4)**. Hai vị trí còn được dùng ngày nay:
- **Khoá Đô dòng 3 (alto)** — [[viola|viola]].
- **Khoá Đô dòng 4 (tenor)** — các nốt cao của [[cello|cello]], kèn [[bassoon|bassoon]], [[trombone|trombone]].

::staff alto F3 A3 C4 E4 G4 | Năm dòng của khoá Đô dòng 3 (tâm khoá = C4 ở dòng giữa)

## Vì sao viola cần khoá riêng?
[[cao-do|Âm vực]] viola nằm **giữa** [[violin|violin]] và cello. Viết bằng [[khoa-sol|khoá Sol]] hay [[khoa-fa|khoá Fa]] đều cần rất nhiều [[khuong-nhac|dòng kẻ phụ]]; khoá Đô dòng 3 đặt Đô giữa vào **giữa khuông**, nên phần lớn nốt viola nằm gọn trong 5 dòng.

## Lịch sử
Khoá Đô bắt nguồn từ chữ **C**, và từng được đặt ở **mọi dòng** trừ dòng trên cùng — nên gọi là khoá Đô "di động". Mỗi vị trí có tên riêng, ví dụ soprano (dòng 1), alto (dòng 3), tenor (dòng 4). Ngày nay chỉ còn alto và tenor được dùng thường xuyên.

Người học piano hiếm khi đọc khoá Đô, nhưng sẽ gặp nó khi đọc tổng phổ hoà tấu hoặc [[nhac-thinh-phong|nhạc thính phòng]]. Xem thêm [[khoa-nhac]].
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
Số phím tăng dần theo lịch sử, vì nhà soạn nhạc luôn muốn thêm [[cao-do|âm vực]]:
| Thời kỳ | Số phím / âm vực |
|---|---|
| Đàn của Cristofori (đầu thế kỷ 18) | Khoảng **49** phím |
| Thời [[wolfgang-amadeus-mozart|Mozart]] | **5 quãng 8** (Fa – Fa, 61 phím). Mozart không viết vượt âm vực này; [[ludwig-van-beethoven|Beethoven]] chỉ vượt từ [[hinh-thuc-sonata|Sonata]] "Waldstein" Op. 53 (1804) |
| Giữa thế kỷ 19 ([[frederic-chopin|Chopin]], [[franz-liszt|Liszt]]) | Khoảng **85** phím, 7 quãng 8 |
| Cuối những năm 1880 | **88** phím — Steinway thêm 3 phím và chuẩn này được các hãng khác theo (có nguồn cho rằng Chickering làm trước) |

Có đàn **nhiều hơn 88 phím**: mẫu **Bösendorfer Imperial** có **97 phím** (xuống đến C0). [[ferruccio-busoni|Busoni]] đặt làm năm 1909 để [[phoi-khi-nguyen-ly-co-ban|chuyển soạn]] một tác phẩm [[organ-ong|organ]] có nốt thấp hơn bàn phím thường. Các phím thêm được sơn **đen** để người chơi không nhầm.

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
- Đặt **ngay trước một nốt** (dấu hoá bất thường): hiệu lực cho các nốt **cùng [[cao-do|cao độ]], cùng [[quang|quãng 8]]** đến **hết [[so-chi-nhip|ô nhịp]]** đó, trừ khi bị một dấu hoá khác huỷ.
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
    aliases: ['8va', '8vb', '15ma', 'ottava', 'chơi cao một quãng 8', 'octave sign', 'dấu quãng 8'],
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
| loco | Trở lại [[cao-do|cao độ]] như viết |

Đường gạch đứt nối sau ký hiệu cho biết phạm vi áp dụng. Trên piano, 8va rất hay gặp ở các đoạn tay phải chạy lên [[ban-phim|vùng phím cao]].

## Cách đọc chính xác
- **8va** đặt **trên** khuông; **8vb** (hoặc *8va bassa*, *8ba*, hay chỉ số **8**) đặt **dưới** khuông.
- Đường gạch đứt kéo dài suốt đoạn bị ảnh hưởng và thường kết thúc bằng một **nét móc**. Hết đường gạch (hoặc gặp chữ *loco* — "đúng chỗ") thì chơi lại đúng cao độ viết.
- **15ma** (*quindicesima*, "thứ mười lăm") = 2 quãng 8. Gọi là "mười lăm" vì từ nốt đầu đến nốt cuối của hai quãng 8 có 15 bậc **nếu đếm cả hai đầu** — giống cách đếm [[quang]].

## "8vb" hay "8va bassa"?
Hai cách viết cùng nghĩa. Theo chuẩn phông ký hiệu nhạc SMuFL, dạng đúng là *8va bassa* (*8va* là viết tắt của *ottava*); **8vb** là dạng "sai" nảy sinh khi người không nói tiếng Ý tưởng "va" nghĩa là "alta" (cao). Tuy vậy, 8vb nay đã thành cách viết thông dụng.

## Khoá có số 8
Một số khoá có số **8** nhỏ trên hoặc dưới: chơi cao hơn hoặc thấp hơn một quãng 8 so với viết. Ví dụ [[khoa-sol|khoá Sol]] có số 8 ở dưới dùng cho guitar và giọng tenor.

8vb hay gặp nhất ở [[khoa-fa|khoá Fa]] — đặc biệt **tay trái piano** và [[double-bass|contrabass]].
`,
  },
  {
    slug: "gian-pho-ky-am-so",
    title: "Giản phổ (ký âm bằng số, jianpu)",
    category: 'basics',
    also: ['musicianship'],
    aliases: ["giản phổ", "jianpu", "ký âm bằng số", "ký âm số", "numbered notation", "numbered musical notation", "Ziffersystem", "Galin-Paris-Chevé", "Chevé", "nhạc số"],
    summary: "Giản phổ ghi bậc âm bằng các số 1 – 7 (Đô di động), chấm trên/dưới để đổi quãng 8, gạch dưới để rút ngắn trường độ, gạch ngang để kéo dài, 0 là dấu lặng. Ý tưởng được Rousseau trình Viện Hàn lâm Khoa học Paris năm 1742, phát triển thành hệ Galin – Paris – Chevé ở Pháp thế kỷ 19, rồi trở thành lối ghi nhạc phổ biến nhất ở Trung Quốc. Bài có bảng quy tắc, ví dụ đổi qua lại với khuông nhạc, và một lưu ý: chưa có nguồn tin cậy về việc dùng giản phổ ở Việt Nam.",
    wiki: "Numbered_musical_notation",
    refs: [
      ["Wikipedia — Numbered musical notation", "https://en.wikipedia.org/wiki/Numbered_musical_notation"],
      ["Wikipedia — Jianpu", "https://www.Wikipedia.org/wiki/Jianpu"],
      ["Dictéco — Rousseau, Projet concernant de nouveaux signes pour la musique (1742)", "https://dicteco.huma-num.fr/en/pdffile/32879"],
      ["Rousseau Online — Projet (PDF)", "https://www.rousseauonline.ch/pdf/rousseauonline-0065.pdf"],
      ["Wikipedia — Galin-Paris-Chevé system", "https://en.wikipedia.org/wiki/Galin-Paris-Chev%C3%A9_system"],
      ["Wikipedia — Pierre Galin", "https://en.wikipedia.org/wiki/Pierre_Galin"],
      ["Guitar Pro — Jianpu (hướng dẫn)", "https://www.guitar-pro.com/docs/gp8/score/note/jianpu"],
      ["Stanford — Chinese music notation", "https://web.stanford.edu/group/scme/cgi-bin/chinese-music/notation"],
      ["Wikipedia — Gongche notation", "https://en.wikipedia.org/wiki/Gongche_notation"],
    ],
    body: `
Một cách ghi nhạc khác bên cạnh [[khuong-nhac]] — gần với [[xuong-am|xướng âm Đô di động]]. Lịch sử ký âm nói chung: [[lich-su-ky-am]].

## Quy tắc
| Ký hiệu | Nghĩa |
|---|---|
| **1 2 3 4 5 6 7** | Bảy bậc của [[am-giai-truong|âm giai trưởng]]: Đô Rê Mi Fa Sol La Si (1 = [[bac-am-giai|chủ âm]], **Đô di động**) |
| Chấm **trên** số (1̇) | Lên một [[quang|quãng 8]]; hai chấm = hai quãng 8 |
| Chấm **dưới** số (1̣) | Xuống một quãng 8 |
| Số trơn | [[truong-do|Nốt đen]] |
| **Một gạch dưới** | Nốt móc đơn; **hai gạch** = móc kép |
| **Gạch ngang** sau số: 1 – | Thêm một phách đen: "1 –" = nốt trắng, "1 – – –" = nốt tròn |
| Chấm **sau** số | [[cham-doi-dau-noi|Chấm dôi]] (thêm nửa giá trị) |
| **0** | [[dau-lang|Dấu lặng]]; lặng dài thì lặp số 0, không dùng gạch ngang |
*(Theo Wikipedia và hướng dẫn của phần mềm Guitar Pro.)*
Giọng được ghi ở đầu bài, vd. "1 = G": khi đó 1 – 7 là Sol La Si Đô Rê Mi Fa♯. [[am-giai|Âm giai]] [[am-giai-thu|thứ tự nhiên]] bắt đầu từ 6.

::staff treble C4=1 D4=2 E4=3 F4=4 G4=5 A4=6 B4=7 C5=1̇ | "1 = C": giản phổ và khuông nhạc
::staff treble G4=1 A4=2 B4=3 C5=4 D5=5 E5=6 F#5=7 G5=1̇ | "1 = G": cùng dãy số, đổi giọng — Fa♯ tự xuất hiện ở bậc 7

## Lịch sử
- **Jean-Jacques Rousseau** trình *Projet concernant de nouveaux signes pour la musique* lên Viện Hàn lâm Khoa học Paris tháng 8/1742 (ngày 12 hay 22 — các nguồn khác nhau): các số 1 – 7 viết trên một dòng thay cho khuông năm dòng mà ông phê phán. Viện không chấp nhận; ông mở rộng ý tưởng trong *Dissertation sur la musique moderne* (1743). Xem thêm [[tranh-luan-rameau-rousseau]].
- **Pierre Galin** (giáo viên toán ở Bordeaux) in phương pháp dạy nhạc năm 1818; **Aimé Paris** truyền bá; **Nanine Paris** và **Émile Chevé** in *Méthode élémentaire de musique vocale* (1844) → **hệ Galin – Paris – Chevé**, đọc số bằng [[not-nhac|tên nốt]] xướng âm.
- Ở **Trung Quốc**, giản phổ phần lớn thay thế lối ghi **công xích** (*gongche*) truyền thống; [[thoi-ky-the-ky-20|thế kỷ 20]] có cuộc cạnh tranh giữa công xích, giản phổ và khuông nhạc trong giáo dục âm nhạc.

## Ưu và nhược
*(Nhận xét của thư viện.)*
- **Ưu:** dễ in, dễ học, đọc theo bậc nên **dịch giọng** chỉ cần đổi "1 = …" — xem [[dich-giong]]; rất hợp cho hát.
- **Nhược:** không cho thấy hình dáng [[giai-dieu|giai điệu]] trên dòng kẻ; khó với nhạc nhiều bè, nhiều [[dau-hoa|dấu hoá]] ngoài giọng, hoặc nhạc piano hai tay.

## Còn ở Việt Nam?
Các lượt tìm kiếm bằng tiếng Việt **không** tìm thấy nguồn tin cậy về việc dùng giản phổ ở Việt Nam (kể cả sách thánh ca). Nhạc cổ truyền Việt có hệ tên nốt riêng — **hò, xự, xang, xê, cống** — xem [[ly-thuyet-am-nhac-co-truyen-viet-nam]]. Thư viện Trường ĐH Văn hoá Hà Nội có một công trình (2022) về "các phương thức [[ky-am|ký âm]] trên thế giới và vấn đề ký [[am-nhac-truyen-thong-viet-nam|âm nhạc truyền thống Việt Nam]]" — chưa đọc được nội dung.
`,
  },
  {
    slug: "ky-hieu-cao-do-c4-helmholtz-midi",
    title: "Gọi tên cao độ: C4, Helmholtz, số MIDI và tần số",
    category: 'basics',
    also: ['pitch', 'listening'],
    aliases: ["ký hiệu cao độ", "scientific pitch notation", "C4", "Helmholtz notation", "ký hiệu Helmholtz", "số MIDI", "MIDI note number", "A4", "ISO 16", "công thức tần số"],
    summary: "\"Đô giữa\" là C4 trong ký hiệu khoa học, c′ trong ký hiệu Helmholtz, nốt số 60 trong MIDI và khoảng 261,63 Hz khi La = 440 Hz. Bài giải thích cách đánh số quãng 8 (đổi số ở giữa Si và Đô), bảng đối chiếu các hệ, công thức f = 440 · 2^((m − 69)/12), tiêu chuẩn ISO 16 (La = 440 Hz), và lý do phần mềm gọi Đô giữa là C3 hay C4 khác nhau.",
    wiki: "Scientific_pitch_notation",
    refs: [
      ["Wikipedia — Scientific pitch notation", "https://en.wikipedia.org/wiki/Scientific_pitch_notation"],
      ["Open Music Theory — American Standard Pitch Notation", "https://viva.pressbooks.pub/openmusictheory/chapter/aspn/"],
      ["Wikipedia — Helmholtz pitch notation", "https://en.wikipedia.org/wiki/Helmholtz_pitch_notation"],
      ["UNSW — Note names, MIDI numbers and frequencies", "https://newt.phys.unsw.edu.au/jw/notes.html"],
      ["McGill — MIDI và tần số", "https://caml.music.mcgill.ca/~gary/307/week1/node11.html"],
      ["ISO 16:1975", "https://www.iso.org/standard/3601.html"],
      ["Wikipedia — A440 (pitch standard)", "https://en.wikipedia.org/wiki/A440_(pitch_standard)"],
      ["Wikipedia — Scientific pitch (Sauveur)", "https://en.wikipedia.org/wiki/Scientific_pitch"],
      ["MIDI Association — về đánh số quãng 8", "https://midi.org/community/midi-specifications/midi-octave-and-note-numbering-standard"],
    ],
    body: `
Bài này bổ sung cho [[not-nhac]] và [[ban-phim]]. Lịch sử cao độ chuẩn: [[luat-binh-quan]].

## Ký hiệu khoa học (C4)
- Chữ cái + **số [[quang|quãng 8]]**: Đô giữa = **C4**, La trên nó = **A4**.
- Số đổi **giữa Si và Đô**: B3 → C4 (không phải giữa La và Si).
- Piano 88 phím đi từ A0 đến C8.
- Thường gắn với Hội [[am-hoc-co-ban|Âm học]] Hoa Kỳ (ASA) — *chưa thấy văn bản gốc của ASA.*

## Ký hiệu Helmholtz
Dùng chữ hoa/thường và dấu phẩy, dấu phẩy ngược: … C͵ – C – c – **c′** – c″ – c‴ …
- **c′** (Đô "một gạch") = Đô giữa = C4; quãng 8 từ c′ đến b′ gọi là "quãng tám một gạch".
- **c** (chữ thường) = "quãng tám nhỏ" = C3; **C** (chữ hoa) = "quãng tám lớn" = C2.
- Tiếng Anh đôi khi viết C͵ thành CC.
Ký hiệu này rất hay gặp trong sách cũ, sách nhạc khí và tài liệu Đức.

::staff bass C2=C2_·_C C3=C3_·_c | Bè trầm: quãng tám lớn và quãng tám nhỏ
::staff treble C4=C4_·_c′ C5=C5_·_c″ C6=C6_·_c‴ | Bè cao: từ Đô giữa trở lên

## Bảng đối chiếu
| Khoa học | Helmholtz | MIDI | Tần số (La = 440) |
|---|---|---|---|
| A0 | A͵͵ | 21 | 27,5 Hz |
| C4 (Đô giữa) | c′ | **60** | ≈ 261,63 Hz |
| A4 | a′ | **69** | **440 Hz** |
| C8 | c′′′′′ | 108 | ≈ 4186 Hz |
**Công thức** (MIDI m): **f = 440 · 2^((m − 69) / 12)**. Mỗi [[cung-nua-cung|nửa cung]] nhân tần số với ¹²√2 ≈ 1,0595 — chính là [[luat-binh-quan|bình quân 12]].
*Ví dụ:* m = 60 → 440 · 2^(−9/12) ≈ 261,63 Hz. *(Giá trị A0, C8 thư viện tính bằng công thức.)*

## Vì sao phần mềm gọi Đô giữa là C3?
Chuẩn MIDI chỉ định **số** (60), không định **tên**. Vì vậy hãng và phần mềm gọi khác nhau: nhiều người dùng cho biết Yamaha và Logic Pro mặc định gọi số 60 là **C3**, có phần mềm còn gọi C5. *(Nguồn diễn đàn; chính diễn đàn của MIDI Association cũng ghi nhận là không có quy định cụ thể.)* Khi đọc tài liệu, hãy kiểm tra "Đô giữa = ?" trước.

## La = 440 Hz
- **ISO 16:1975**: La trên [[khuong-nhac|khuông]] [[khoa-sol|khoá Sol]] = **440 Hz**, nhạc cụ lên dây chính xác trong khoảng **0,5 Hz**; thay khuyến nghị R 16 năm 1955, được xác nhận lại năm 2022.
- Hội nghị London **1939** (tại Broadcasting House) đã khuyến nghị 440 Hz.
- Trước đó, Joseph Sauveur (1713) đề xuất "[[cao-do|cao độ]] khoa học" C4 = 256 Hz (luỹ thừa của 2) — giới nhạc không theo.
Dàn nhạc thực tế thường lên dây cao hơn 440 một chút — xem [[luat-binh-quan]] và [[cao-do-tuyet-doi]].
`,
  },
  {
    slug: "ten-not-va-he-thong-xuong-am",
    title: "Tên nốt và các hệ thống gọi tên âm",
    category: 'basics',
    aliases: ["tên nốt nhạc", "tên nốt theo chữ cái", "note names", "letter notation", "tonic sol-fa", "tên nốt tiếng Đức", "ハニホヘトイロ"],
    summary: "Cùng một cao độ có thể được gọi bằng chữ cái (C D E…), bằng âm tiết (Do Re Mi…) hoặc theo hệ thống riêng của từng nước như Đức hay Nhật. Bài này so sánh các hệ thống, giải thích khác biệt giữa Do cố định và Do di động (Kodály, tonic sol-fa) và thói quen dùng ở Việt Nam.",
    refs: [
      ["Wikipedia – Letter notation", "https://en.wikipedia.org/wiki/Letter_notation"],
      ["Wikipedia – Solfège", "https://en.wikipedia.org/wiki/Solf%C3%A8ge"],
      ["Wikipedia – Iroha", "https://en.wikipedia.org/wiki/Iroha"],
      ["Wikibooks (tiếng Nhật) – 音名 (tên âm)", "https://ja.wikibooks.org/wiki/%E9%9F%B3%E5%90%8D"],
      ["Florida State University – Pitch Solmization Handout", "https://myweb.fsu.edu/nrogers/Handouts/Pitch_Solmization_Handout.pdf"],
      ["Chromatone – Solmization", "https://chromatone.center/theory/notes/solmization/"],
    ],
    body: `
Mỗi [[not-nhac|nốt nhạc]] trên [[khuong-nhac|khuông nhạc]] tương ứng với một cao độ, nhưng tên gọi của cao độ ấy thay đổi theo ngôn ngữ và truyền thống sư phạm. Học sinh piano ở Việt Nam thường gặp cùng lúc âm tiết Đô Rê Mi và chữ cái C D E (sách ABRSM, ký hiệu hợp âm, phần mềm).

## Hai họ tên gọi: chữ cái và âm tiết

**Tên chữ cái** (letter notation) dùng bảy chữ A–G. Tiếng Anh bắt đầu thang âm quen thuộc từ C: C D E F G A B. **Tên âm tiết** (solmization, solfège) bắt nguồn từ các âm tiết ut–re–mi–fa–sol–la mà [[guido-d-arezzo|Guido d'Arezzo]] dùng để dạy hát; về sau ut được đổi thành do ở Ý và thêm âm thứ bảy si (theo Wikipedia – Solfège). Lịch sử chi tiết xem [[lich-su-ky-am]].

## Bảng đối chiếu

| Tiếng Anh | Ý / Pháp / Việt | Đức | Nhật |
|---|---|---|---|
| C | Do (Đô) | C | Ha (ハ) |
| D | Re (Rê) | D | Ni (ニ) |
| E | Mi | E | Ho (ホ) |
| F | Fa (Pha) | F | He (ヘ) |
| G | Sol (Son) | G | To (ト) |
| A | La | A | I (イ) |
| B | Si | H | Ro (ロ) |
| B♭ | Si giáng | B | Hen-ro (変ロ) |
| F♯ | Fa thăng | Fis | Ei-he (嬰ヘ) |
| E♭ | Mi giáng | Es | Hen-ho (変ホ) |

::staff treble C4 D4 E4 F4 G4 A4 B4 C5 | Âm giai Đô trưởng: C D E F G A B C = Đô Rê Mi Fa Sol La Si Đô

### Hệ thống Đức: H, B và các đuôi -is, -es

Trong tiếng Đức, **H** là Si bình (B♮) còn **B** là Si giáng (B♭) (theo Wikipedia – Letter notation). Thăng được thêm đuôi *-is* (Cis, Dis, Fis, Gis, Ais), giáng thêm đuôi *-es* (Des, Ges, Ces); riêng E♭ và A♭ rút gọn thành **Es** và **As**. Vì thế tên gọi "BACH" của Bach là chuỗi Si giáng – La – Đô – Si.

### Hệ thống Pháp, Ý và Việt Nam

Tiếng Ý và Pháp dùng do (ut) re mi fa sol la si; thăng/giáng là *diesis/bemolle* (Ý), *dièse/bémol* (Pháp). Tiếng Việt kế thừa trực tiếp truyền thống này: sách giáo khoa và nhạc viện viết Đô, Rê, Mi, Fa (Pha), Sol (Son), La, Si, kèm "thăng" và "giáng" (xem [[dau-hoa]]). Đây là quy ước phổ biến trong thực tế giảng dạy; tác giả chưa tìm được văn bản chuẩn hoá chính thức nên đây là nhận định dựa trên thực tiễn.

### Hệ thống Nhật

Nhật dùng thứ tự chữ kana *iroha* gán cho A B C D E F G: イ ロ ハ ニ ホ ヘ ト, nên Đô là ハ (Ha). Thăng thêm 嬰 (ei), giáng thêm 変 (hen) đặt trước tên nốt (theo Wikibooks tiếng Nhật – 音名). Ở Nhật, tên Ý, Anh và Đức cũng được dùng song song.

## Do cố định và Do di động

Đây là khác biệt quan trọng nhất về sư phạm (theo Wikipedia – Solfège):

- **Do cố định (fixed do)**: mỗi âm tiết gắn với một cao độ tuyệt đối; Do luôn là C dù bản nhạc ở giọng nào. Phổ biến ở các nước nói tiếng Latinh và Slavơ (Pháp, Ý, Tây Ban Nha, Nga…).
- **Do di động (movable do)**: âm tiết chỉ bậc trong giọng; Do là chủ âm. Ở giọng Sol trưởng, nốt G được hát là "Do". Phổ biến ở Anh, Mỹ và nhiều nước nói tiếng Đức, và là cốt lõi của phương pháp [[zoltan-kodaly|Kodály]] ở Hungary.

**Tonic sol-fa** của Anh (thế kỷ 19) dùng Do di động với chữ viết tắt d r m f s l t; âm bậc bảy được đổi thành *ti* để chữ viết tắt không trùng chữ s của sol. Hệ di động còn có âm tiết biến âm như di, ri, fi (thăng) và ra, me, te (giáng) (theo bảng của FSU – Pitch Solmization Handout). Về giọng thứ, các trường phái khác nhau: có nơi dùng *la-based minor* (chủ âm thứ hát là La), có nơi dùng *do-based minor* (chủ âm vẫn là Do); phương pháp Kodály thường theo La làm chủ âm thứ.

::staff treble k:1# G4 A4 B4 C5 D5 E5 F#5 G5 | Giọng Sol trưởng – Do cố định hát Sol La Si Đô Rê Mi Fa Sol; Do di động hát Do Re Mi Fa Sol La Ti Do

| Tiêu chí | Do cố định | Do di động |
|---|---|---|
| Âm tiết chỉ | Cao độ tuyệt đối | Bậc trong giọng |
| Ưu điểm | Gắn với phím đàn, hợp nhạc cụ | Rèn cảm giác chức năng, dịch giọng dễ |
| Khó khăn | Giọng nhiều dấu hoá khó cảm nhận chức năng | Phải xác định chủ âm, khó với nhạc chuyển giọng nhiều |

Không có hệ thống "đúng" tuyệt đối; nhiều giáo viên kết hợp: đọc nốt trên đàn theo tên cố định, còn luyện tai và xướng âm theo bậc (xem [[xuong-am]]).

## Quy ước ở Việt Nam và trong kỳ thi ABRSM

- Trên lớp: tên Đô Rê Mi theo kiểu cố định là phổ biến; giáo viên nên nói rõ khi chuyển sang tên bậc.
- Trong đề thi lý thuyết ABRSM và sách tiếng Anh: tên chữ cái C D E và thuật ngữ Anh (crotchet, quaver…).
- Ký hiệu hợp âm (C, Am, G7) luôn dùng chữ cái; xem [[ky-hieu-hop-am]].
- Khi cần chỉ quãng tám cụ thể, dùng C4, A4… theo [[ky-hieu-quang-tam]].

## Lỗi thường gặp

- Đọc chữ "B" trong bản nhạc Đức thành Si bình; thực tế là Si giáng.
- Lẫn Do di động với Do cố định khi học viên đổi giáo viên hoặc đổi sách.
- Viết "Sol" và "Son", "Fa" và "Pha" lẫn lộn trong cùng một bài; nên chọn một cách viết và dùng nhất quán.

## Luyện tập

1. Viết bảng đối chiếu bảy nốt tự nhiên theo bốn hệ thống, sau đó che một cột và điền lại.
2. Dịch tên các tác phẩm: "Sonate in Es-Dur", "Messe in h-Moll", "Fantaisie en fa mineur" sang tiếng Việt.
3. Hát âm giai Sol trưởng bằng hai cách: tên cố định (Sol La Si…) và tên bậc (Do Re Mi…), cảm nhận khác biệt.

Xem thêm: [[nhac-ly-co-ban]], [[khoa-nhac]], [[xuong-am]], [[ky-hieu-quang-tam]].
`,
  },
  {
    slug: "vach-nhip-va-trinh-bay-ban-nhac",
    title: "Vạch nhịp và cách trình bày bản nhạc",
    category: 'basics',
    aliases: ["vạch kép", "vạch kết thúc", "barline", "double barline", "final barline", "dashed barline", "số ô nhịp", "measure numbers", "bar numbers", "dòng nhạc", "system", "brace và bracket", "khuông nhạc lớn", "rehearsal mark", "ký hiệu tập dượt"],
    summary: "Vạch nhịp chia bản nhạc thành các ô nhịp; mỗi loại vạch (đơn, kép, kết thúc, nhắc lại, nét đứt) mang một ý nghĩa riêng. Bài này giải thích cách đánh số ô nhịp, dòng nhạc, ngoặc nhọn và ngoặc vuông nối khuông, cách trình bày khuông nhạc lớn của piano và ký hiệu tập dượt.",
    refs: [
      ["Dorico (Steinberg) – Types of barlines", "https://steinberg.help/dorico/v3.5/en/dorico/topics/notation_reference/notation_reference_barlines/notation_reference_barlines_types_r.html"],
      ["Wikipedia – Staff (music)", "https://en.wikipedia.org/wiki/Staff_(music)"],
      ["Dorico (Steinberg) – Brackets and braces", "https://archive.steinberg.help/dorico/v3/en/dorico/topics/notation_reference/notation_reference_brackets_braces/notation_reference_brackets_braces_c.html"],
      ["MuseScore Handbook 4 – Brackets", "https://musescore.org/en/handbook/4/brackets"],
      ["Soundslice – Barlines", "https://www.soundslice.com/help/en/creating/notations/97/barlines/"],
      ["Elaine Gould – Behind Bars (Faber Music, 2011), giới thiệu sách", "https://symposium.music.org/51/item/479-behind-bars-the-definitive-guide-to-music-notation.html"],
    ],
    body: `
**Vạch nhịp** (barline) là nét thẳng đứng cắt ngang [[khuong-nhac|khuông nhạc]], chia bản nhạc thành các **ô nhịp** (bar, measure). Mỗi ô nhịp chứa tổng [[truong-do|trường độ]] đúng bằng [[so-chi-nhip|số chỉ nhịp]] quy định, và phách thứ nhất (phách mạnh) luôn nằm ngay sau vạch nhịp. Ngoài việc chia nhịp, các loại vạch đặc biệt còn báo hiệu chỗ chuyển đoạn, nhắc lại hay kết thúc.

## Các loại vạch nhịp

| Loại | Hình dáng | Ý nghĩa |
|---|---|---|
| Vạch đơn (single) | Một nét mảnh | Ngăn cách hai ô nhịp |
| Vạch kép (double) | Hai nét mảnh sát nhau | Kết thúc một đoạn, trước khi đổi hoá biểu, nhịp hoặc tốc độ |
| Vạch kết thúc (final) | Nét mảnh + nét đậm | Kết thúc tác phẩm hoặc chương |
| Vạch nhắc lại (repeat) | Vạch kết thúc kèm hai chấm | Nhắc lại đoạn nằm giữa hai vạch |
| Vạch nét đứt (dashed) | Nét đứt quãng | Chia nhỏ ô nhịp phức tạp hoặc vạch do người biên tập thêm |

Theo tài liệu tham khảo của Dorico, vạch kép thường đánh dấu thay đổi quan trọng như ký hiệu tập dượt, đổi [[hoa-bieu]] hay đổi tốc độ; vạch nét đứt giúp đọc dễ hơn các số chỉ nhịp phức tạp (ví dụ chia 7/8 thành 2+2+3, xem [[nhip-hon-hop]]) và phân biệt vạch biên tập với vạch có trong bản gốc. Ngoài ra còn có vạch ngắn hoặc vạch "tick" chỉ cắt một phần khuông, chủ yếu dùng trong thánh ca bình ca để chỉ chỗ lấy hơi.

::rhythm 4/4 q q q q / h h / w // | Ba ô nhịp 4/4 với vạch đơn và vạch kết thúc ở cuối

Lưu ý: vạch kép **không** có nghĩa là nhắc lại. Chỉ khi có hai chấm đứng cạnh vạch mới là dấu nhắc lại; chi tiết về khung nhắc lại, khung lần 1 và lần 2 (first/second endings, volta) xem [[dau-nhac-lai]].

## Ô nhịp và đánh số ô nhịp

Số ô nhịp (bar numbers) giúp giáo viên và học sinh nói "bắt đầu từ ô 17" thay vì đếm tay. Các quy ước phổ biến (xem Elaine Gould, *Behind Bars*):

- Thường in số ô nhịp ở đầu mỗi dòng nhạc, đặt phía trên khuông trên cùng; bản tổng phổ có thể đánh số mỗi ô hoặc mỗi 5–10 ô.
- **Ô nhịp lấy đà** (anacrusis, upbeat) không đầy đủ ở đầu bài không được tính là ô 1; ô nhịp đầy đủ đầu tiên mới là ô 1. Xem [[nhip-lay-da]].
- Ô lấy đà cộng với ô thiếu ở cuối bài thường tạo thành một ô nhịp đủ.
- Với khung lần 1 và lần 2, nhiều nhà xuất bản đánh số cả hai khung tuần tự; cách này không thống nhất giữa các ấn bản, nên khi dạy cần thống nhất với học sinh đang dùng ấn bản nào.

## Dòng nhạc, ngoặc nhọn và ngoặc vuông

Một **dòng nhạc** (system) là tập hợp các khuông được đọc đồng thời, nối với nhau bằng một vạch đứng ở đầu dòng (system barline).

- **Ngoặc nhọn** (brace) nối các khuông của **một** nhạc cụ do một người chơi: piano, organ, harp. Theo Wikipedia – Staff (music), hai khuông nối bằng ngoặc nhọn tạo thành **khuông nhạc lớn** (grand staff, great stave); nhiều khuông của một nhạc cụ thì nối bằng ngoặc nhọn chứ không dùng ngoặc vuông.
- **Ngoặc vuông** (bracket) nối các nhạc cụ khác nhau thuộc cùng một nhóm, ví dụ bộ dây trong dàn nhạc hay bốn bè hợp xướng. Theo tài liệu Dorico, ngoặc nhọn đôi khi được dùng bên trong ngoặc vuông để gộp các nhạc cụ giống nhau.

## Khuông nhạc lớn của piano

Bản nhạc piano chuẩn gồm khuông trên dùng [[khoa-sol]] cho tay phải và khuông dưới dùng [[khoa-fa]] cho tay trái, nối bằng ngoặc nhọn. Các điểm cần chú ý:

- Vạch nhịp kéo liền qua cả hai khuông, cho thấy hai tay đọc như một đơn vị. Ngược lại, trong bản hợp xướng, vạch nhịp thường ngắt giữa các khuông để chừa chỗ cho lời ca.
- [[khoa-nhac|Khoá]] và hoá biểu được viết lại ở đầu mỗi dòng; số chỉ nhịp chỉ viết ở đầu bài hoặc khi đổi nhịp.
- Khi đổi hoá biểu hay số chỉ nhịp ở đầu dòng mới, ký hiệu báo trước (courtesy) được đặt ở cuối dòng trước.
- Các ký hiệu [[cach-dien-tau|cách diễn tấu]] và cường độ dùng chung cho hai tay thường được đặt giữa hai khuông.

::grand C5+E5/C3=I B4+D5/G2=V C5+E5/C3=I | Khuông nhạc lớn – tay phải khoá Sol, tay trái khoá Fa, nối bằng ngoặc nhọn

Đổi khoá giữa bài (ví dụ tay trái chuyển lên khoá Sol) là hiện tượng bình thường trong nhạc piano; khoá mới được viết nhỏ hơn ngay trước nốt cần đổi.

## Ký hiệu tập dượt

**Ký hiệu tập dượt** (rehearsal marks) là chữ cái A, B, C… hoặc số ô nhịp trong khung vuông/tròn, đặt phía trên dòng nhạc ở đầu các đoạn quan trọng, thường trùng với vạch kép. Chúng chủ yếu dùng trong nhạc thính phòng và dàn nhạc; trong bản piano độc tấu ít gặp hơn, nhưng các ấn bản sư phạm đôi khi dùng để chia đoạn luyện tập.

## Lỗi thường gặp

- Coi ô lấy đà là ô 1, dẫn tới lệch số ô nhịp so với giáo viên.
- Kẻ vạch kép ở mọi chỗ kết đoạn nhỏ; vạch kép nên dành cho thay đổi thật sự.
- Viết vạch kết thúc ở giữa bài khi chỉ đổi giọng; trường hợp này dùng vạch kép.
- Dùng ngoặc vuông cho piano trong bài tập chép nhạc.
- Ô nhịp sai tổng trường độ: luôn cộng lại mỗi ô so với số chỉ nhịp.

## Luyện tập

1. Lấy một bài piano đang học, đánh số ô nhịp bằng bút chì ở đầu mỗi dòng; kiểm tra có ô lấy đà không.
2. Tìm trong bài các vạch kép và ghi lý do (đổi giọng, đổi nhịp, kết đoạn).
3. Chép một đoạn tám ô nhịp lên khuông nhạc lớn: kẻ ngoặc nhọn, khoá, hoá biểu, số chỉ nhịp, vạch nhịp xuyên hai khuông và vạch kết thúc.
4. Nâng cao: chép một ô 7/8 và chia bằng vạch nét đứt theo nhóm 2+2+3.

Xem thêm: [[khuong-nhac]], [[dau-nhac-lai]], [[so-chi-nhip]], [[quy-tac-ghep-duoi-va-chia-nhom-not]].
`,
  },
  {
    slug: "quy-tac-ghep-duoi-va-chia-nhom-not",
    title: "Quy tắc hướng đuôi nốt, ghép đuôi và chia nhóm nốt",
    category: 'basics',
    aliases: ["hướng đuôi nốt", "ghép đuôi nốt", "chia nhóm nốt", "chia nhóm dấu lặng", "stem direction", "beaming", "grouping notes and rests", "notation rules ABRSM", "Behind Bars"],
    summary: "Đuôi nốt hướng lên hay xuống tuỳ vị trí so với dòng kẻ giữa; móc đơn, móc kép được ghép và chia nhóm sao cho người đọc thấy rõ từng phách. Bài này trình bày các quy tắc chuẩn theo sách nhạc lý ABRSM và Elaine Gould \"Behind Bars\", kèm ví dụ đúng – sai.",
    refs: [
      ["MyMusicTheory – Grouping and beaming", "https://mymusictheory.com/rhythm/grouping-and-beaming/"],
      ["MyMusicTheory – Rhythm questions ABRSM Grade 5", "https://mymusictheory.com/rhythm/rhythm-questions-abrsm-grade-5/"],
      ["MyMusicTheory – Beaming and grouping (Grade 3)", "https://mymusictheory.com/rhythm/beaming-and-grouping-grade-3/"],
      ["The Open University – 4.2 Grouping rests", "https://www.open.edu/openlearn/history-the-arts/music/an-introduction-music-theory/content-section-4.2"],
      ["Dorico (Steinberg) – Stem direction", "https://archive.steinberg.help/dorico/v2/en/dorico/topics/notation_reference/notation_reference_stems_direction_c.html"],
      ["Music Theory Practice – Note stem direction", "https://music-theory-practice.com/guides/note-stem-direction"],
      ["Elaine Gould – Behind Bars (Faber Music, 2011), bài điểm sách", "https://symposium.music.org/51/item/479-behind-bars-the-definitive-guide-to-music-notation.html"],
    ],
    body: `
Viết nhạc đúng [[truong-do|trường độ]] mới chỉ là một nửa; nửa còn lại là viết sao cho **dễ đọc**. Nguyên tắc chung mà các sách nhạc lý theo chương trình ABRSM nhấn mạnh là: cách ghép và chia nhóm nốt phải **làm lộ rõ các phách** của [[so-chi-nhip|số chỉ nhịp]] (theo MyMusicTheory). Các quy tắc dưới đây là quy ước khắc in (engraving) đã ổn định; cuốn *Behind Bars* của Elaine Gould (Faber Music, 2011) là tài liệu tham khảo đầy đủ nhất hiện nay, và chính sách này thường đưa ra nhiều phương án cho những tình huống khác nhau thay vì một luật duy nhất.

## Hướng đuôi nốt

Đuôi nốt (stem) của một nốt đơn được quyết định bởi **dòng kẻ giữa** của [[khuong-nhac|khuông nhạc]] (dòng 3):

- Nốt **dưới** dòng giữa: đuôi hướng **lên**, đặt bên phải đầu nốt.
- Nốt **trên** dòng giữa: đuôi hướng **xuống**, đặt bên trái đầu nốt.
- Nốt **nằm ngay trên** dòng giữa (Si4 ở [[khoa-sol]], Rê3 ở [[khoa-fa]]): quy ước trong sách giáo khoa là hướng xuống; tài liệu Dorico ghi nhận phần mềm có thể cho đuôi theo các nốt bên cạnh.
- Đuôi dài chừng một quãng tám (3,5 khe) tính từ đầu nốt.

::staff treble E4 F4 G4 A4 / B4 / C5 D5 E5 F5 | Khoá Sol – Mi4 đến La4 đuôi lên; Si4 (dòng giữa) quy ước đuôi xuống; Đô5 trở lên đuôi xuống

**Nhóm nốt ghép đuôi** hoặc hợp âm: xét nốt **xa dòng giữa nhất**; nếu nốt đó ở trên thì cả nhóm đuôi xuống và ngược lại. Các nguồn diễn đạt hơi khác nhau (có nguồn lấy trung bình nốt cao nhất và thấp nhất, có nguồn theo đa số nốt) nhưng trong bài thi, quy tắc "nốt xa nhất" là an toàn nhất. Khi hai bè chung một khuông, bè trên luôn đuôi lên và bè dưới luôn đuôi xuống, bất kể vị trí.

## Ghép đuôi theo số chỉ nhịp

Gạch ghép (beam) thay cho móc (flag) của móc đơn, móc kép. Quy tắc cơ bản: **ghép theo từng phách**.

### Nhịp đơn (2/4, 3/4, 4/4)

- Mỗi phách là một nốt đen, nên móc đơn ghép từng đôi, móc kép ghép từng bốn.
- Trong 4/4, được phép ghép bốn móc đơn của nửa ô đầu (phách 1–2) hoặc nửa ô sau (phách 3–4), nhưng **không ghép vượt qua giữa ô nhịp** (từ phách 2 sang phách 3).
- Trong 3/4, nhiều sách nhạc lý theo chương trình ABRSM chấp nhận ghép cả sáu móc đơn khi cả ô toàn móc đơn; khi nhịp điệu hỗn hợp thì vẫn ghép theo phách. Nên kiểm tra lại với tài liệu thi hiện hành.

::rhythm 4/4 e-e-e-e e-e-e-e // | ĐÚNG – 4/4 ghép thành hai nửa, nhìn thấy giữa ô nhịp

::rhythm 4/4 e-e e-e-e-e e-e // | SAI – gạch ghép vượt qua giữa ô (phách 2 sang phách 3)

### Nhịp ghép (6/8, 9/8, 12/8)

Phách là nốt đen chấm, nên móc đơn ghép theo nhóm ba. Theo MyMusicTheory: trong nhịp ghép, không bao giờ ghép nhóm lớn hơn một phách.

::rhythm 6/8 e-e-e e-e-e // | ĐÚNG – 6/8 ghép hai nhóm ba, thấy rõ hai phách

::rhythm 6/8 q e q e // | Nốt đen + móc đơn – mỗi phách vẫn tách bạch trong 6/8

## Chia nhóm dấu lặng

[[dau-lang|Dấu lặng]] không được ghép đuôi, nên càng cần viết rõ phách (theo The Open University):

- Mỗi phách dùng dấu lặng riêng; trong 3/4, sau một nốt đen phải viết **hai dấu lặng đen**, không dùng dấu lặng trắng.
- Trong 4/4, dấu lặng trắng được phép ở nửa đầu hoặc nửa sau ô nhịp, nhưng không vắt qua giữa ô (phách 2–3).
- Tránh dấu lặng chấm trong nhịp đơn (trừ khi ngắn hơn một phách).
- Dấu lặng tròn dùng cho cả ô nhịp im lặng ở mọi nhịp và được đặt giữa ô.

::rhythm 3/4 q rq rq // | ĐÚNG – 3/4 nốt đen và hai dấu lặng đen

::rhythm 4/4 q rq rq q // | ĐÚNG – hai dấu lặng đen ở phách 2 và 3

::rhythm 4/4 q rh q // | SAI – dấu lặng trắng vắt qua giữa ô 4/4

## Dấu nối qua vạch nhịp và giữa ô nhịp

Một nốt không thể kéo qua vạch nhịp; phần vượt sang ô sau phải viết bằng nốt mới nối bằng [[cham-doi-dau-noi|dấu nối]]. Tương tự, trong 4/4, nốt bắt đầu ở nửa phách và kéo qua giữa ô nhịp nên tách thành hai nốt nối với nhau để thấy phách 3. Ngoại lệ được chấp nhận rộng rãi là mẫu đảo phách đơn giản đen – trắng – đen.

::rhythm 4/4 q e-e~ e-e q // | ĐÚNG – nốt kéo qua giữa ô được tách và nối, thấy rõ phách 3

::rhythm 4/4 q h q // | Chấp nhận được – mẫu đảo phách đen, trắng, đen

## Lỗi thường gặp trong bài thi nhạc lý ABRSM

- Ghép móc đơn qua giữa ô 4/4 hoặc ghép nhóm bốn móc đơn trong 6/8.
- Viết dấu lặng trắng ở phách 2 của 4/4 hoặc dấu lặng trắng sau nốt đen trong 3/4.
- Đuôi sai phía: đuôi lên nhưng đặt bên trái đầu nốt.
- Dùng dấu nối bên trong một phách khi một nốt chấm là đủ.
- Đổi hướng đuôi lung tung trong một nhóm ghép; cả nhóm chung một hướng.
- Ở Grade 5, câu hỏi chọn ô nhịp viết đúng thường chỉ khác nhau hai chi tiết; cần so sánh từng ô (theo MyMusicTheory – Rhythm questions).

## Luyện tập

1. Cấp 1–2: lấy mười nốt rời trên khoá Sol, vẽ đuôi đúng hướng; kiểm tra bằng thước kẻ dòng giữa.
2. Cấp 3: viết lại một đoạn 4/4 toàn móc đơn có móc rời thành nhóm ghép đúng; sau đó làm với 6/8.
3. Cấp 4–5: điền dấu lặng cho các ô nhịp thiếu trong 2/4, 3/4, 4/4, 6/8; đọc to số phách khi viết.
4. Sửa lỗi: giáo viên viết năm ô sai có chủ ý, học sinh tìm và ghi lý do.
5. Đánh nhịp tay trên từng phách khi đọc bài viết của chính mình để kiểm tra xem phách có hiện rõ hay không.

Xem thêm: [[not-nhac]], [[truong-do]], [[vach-nhip-va-trinh-bay-ban-nhac]], [[dau-luyen-dau-noi-va-dau-cau]].
`,
  },
  {
    slug: "dau-luyen-dau-noi-va-dau-cau",
    title: "Dấu luyến, dấu nối và dấu chỉ câu nhạc",
    category: 'basics',
    aliases: ["dấu luyến", "dấu câu nhạc", "slur", "phrase mark", "phrasing slur", "legato slur", "mezzo staccato", "phân biệt dấu luyến và dấu nối"],
    summary: "Dấu luyến, dấu nối và dấu chỉ câu nhạc đều là đường cong nhưng mang ba chức năng khác nhau: nối trường độ, chơi liền tiếng, và chỉ ranh giới câu nhạc. Bài này hướng dẫn cách phân biệt chúng trên bản nhạc piano, cách chơi luyến và các kết hợp như portato.",
    refs: [
      ["Notation Composer – Slurs (Phrase Marks)", "https://www.notation.com/ComposerDocs5/slurs_(phrase_marks).htm"],
      ["Flutecentric – Slurs, Ties and Phrase Marks", "https://flutecentric.com/teaching-flute/slurs-ties-and-phrase-marks/"],
      ["OnMusic Dictionary – Phrase marks", "https://dictionary.onmusic.org/terms/2583-phrase_marks"],
      ["Fiveable – AP Music Theory: Dynamics and articulation", "https://fiveable.me/ap-music-theory/unit-1/dynamics-articulation/study-guide/hYmA9fBlhEhye7XIEhOi.md"],
      ["notat.io – Problem differentiating ties/slurs (diễn đàn)", "https://notat.io/viewtopic.php?p=15039"],
      ["Elaine Gould – Behind Bars (Faber Music, 2011), bài điểm sách", "https://symposium.music.org/51/item/479-behind-bars-the-definitive-guide-to-music-notation.html"],
    ],
    body: `
Trên bản nhạc có ba loại đường cong trông gần giống nhau: **dấu nối** (tie), **dấu luyến** (slur) và **dấu chỉ câu nhạc** (phrase mark). Nhầm lẫn giữa chúng là lỗi đọc nhạc phổ biến nhất ở học sinh piano mới học, vì một bên làm thay đổi số lần bấm phím, bên kia chỉ thay đổi cách nối âm.

## Ba loại đường cong

| Ký hiệu | Nối những nốt nào | Ý nghĩa khi chơi |
|---|---|---|
| Dấu nối (tie) | Hai nốt **cùng cao độ** đứng liền nhau | Chỉ bấm một lần, giữ đủ tổng trường độ |
| Dấu luyến (slur) | Hai hay nhiều nốt **khác cao độ** | Chơi liền tiếng (legato), không ngắt giữa các nốt |
| Dấu câu (phrase mark) | Cả một câu nhạc dài | Chỉ đường nét, nơi bắt đầu và kết thúc ý nhạc |

Theo tài liệu Notation Composer, dấu nối gộp trường độ của hai nốt cùng cao độ để nốt thứ nhất vang trong tổng thời gian của cả hai; còn dấu luyến gom các nốt thành một nhóm mà người chơi diễn giải, ở mức độ nhất định mang tính chủ quan. Quy tắc viết dấu nối và nốt chấm được trình bày ở [[cham-doi-dau-noi]].

::staff treble G4 G4 / A4 B4 C5 D5 | Hai nốt Sol4 cùng cao độ có thể được nối (dấu nối); bốn nốt La–Si–Đô–Rê khác cao độ chỉ có thể được luyến

### Dấu luyến và dấu câu: một ký hiệu, hai chức năng?

Các nguồn không thống nhất. Một số giáo trình tách bạch: dấu luyến là chỉ dẫn [[cach-dien-tau|cách diễn tấu]] (articulation) cho một nhóm nốt ngắn, còn dấu câu bao trùm một ý nhạc hoàn chỉnh (theo Flutecentric). Trong khi đó, Gardner Read trong cuốn *Music Notation* coi hai thuật ngữ gần như tương đương (theo cùng nguồn). Trên thực tế, bản nhạc piano chỉ dùng một loại đường cong; người chơi phải tự suy ra chức năng từ độ dài và ngữ cảnh. Xem thêm [[cau-nhac]] và [[dien-dat-cau-nhac]].

## Cách phân biệt dấu nối với dấu luyến

1. **Kiểm tra cao độ**: dấu nối chỉ có thể nối hai nốt cùng tên, cùng quãng tám, kể cả cùng dấu hoá. Nếu khác cao độ thì chắc chắn là dấu luyến.
2. **Kiểm tra vị trí**: dấu nối nối hai nốt **liền kề**; dấu luyến có thể trải qua nhiều nốt và nhiều ô nhịp.
3. **Hình dáng**: dấu nối thường ngắn, đi từ đầu nốt này sang đầu nốt kia; dấu luyến thường dài hơn và đặt ở phía đầu nốt hoặc đuôi nốt tuỳ hướng.
4. **Trường hợp khó**: hai nốt cùng cao độ nằm ở đầu hoặc cuối một dấu luyến dài. Nếu đường cong ngắn nối riêng hai nốt đó thì là dấu nối; nếu đường cong dài chứa các nốt khác thì nốt lặp lại vẫn phải đánh lại. Một số phần mềm và người dùng diễn đàn thừa nhận trường hợp này dễ gây nhầm (theo notat.io).
5. **Nối trong hợp âm**: mỗi nốt được nối có đường cong riêng; nốt không có dấu nối phải đánh lại.

::staff treble C4+E4+G4 C4+E4+A4 | Hợp âm Đô–Mi–Sol sang Đô–Mi–La – nếu Đô và Mi được nối thì chỉ bấm lại La

## Chơi luyến trên piano

Piano không thể thực sự "nối" âm như giọng hát hay đàn dây; legato trên piano được tạo bằng cách nhả phím trước đúng lúc phím sau được bấm (xem [[cach-dien-tau]]). Các điểm sư phạm thường được nhấn mạnh:

- Ngón tay chuyển trọng lượng từ phím này sang phím kia; không nhấc tay giữa dấu luyến.
- Cuối dấu luyến thường có một khoảng nhấc nhẹ. Với **luyến hai nốt** trong nhạc thời Cổ điển, nhiều giáo viên dạy nốt đầu nặng hơn, nốt sau nhẹ và ngắn hơn (động tác "xuống – lên"). Đây là quy ước diễn tấu phổ biến, nhưng mức độ ngắn của nốt cuối phụ thuộc phong cách và ngữ cảnh, không phải luật tuyệt đối.
- Với dấu luyến dài như dấu câu, không nhất thiết ngắt ở cuối từng ô nhịp; chỗ ngắt là cuối câu.
- Pedal có thể hỗ trợ nối âm, nhưng không được thay thế cho legato bằng ngón tay.

::staff treble E4 F4 G4 F4 E4 | Năm nốt dưới một dấu luyến – chơi liền, nhấc tay nhẹ sau nốt Mi cuối

## Kết hợp dấu luyến với ký hiệu khác

- **Portato** (còn gọi mezzo staccato, louré): chấm staccato hoặc gạch tenuto đặt dưới dấu luyến. Nốt được tách nhẹ, nửa liền nửa ngắt. Người chơi đàn dây mô tả các mức tenuto – portato – staccato từ liền đến ngắt (theo notat.io, nguồn diễn đàn). Trên piano thường chơi bằng trọng lượng cánh tay, mỗi nốt hơi tách.
- **Luyến + nhấn** (accent): nốt có dấu nhấn vẫn nằm trong dòng liền tiếng.
- **Dấu luyến trên nốt lặp lại** (không phải dấu nối): thường mang nghĩa portato.
- Ký hiệu nâng cao khác: xem [[ky-hieu-nang-cao]].

### Lưu ý về ấn bản

Trong nhạc Baroque, nhiều dấu luyến trong ấn bản cũ là do người biên tập thêm vào; bản Urtext thường tách dấu luyến của nhà soạn nhạc với dấu của người biên tập. Trước khi tuân theo một dấu luyến trong Bach, nên kiểm tra ấn bản.

## Lỗi thường gặp

- Đánh lại nốt bị nối, hoặc không đánh lại nốt nằm dưới dấu luyến.
- Quên giữ nốt bị nối đủ trường độ khi dấu nối vắt qua [[vach-nhip-va-trinh-bay-ban-nhac|vạch nhịp]].
- Nhấc tay ở mỗi vạch nhịp khi dấu luyến kéo dài qua nhiều ô.
- Chơi portato như staccato thực sự, quá ngắn.

## Luyện tập

1. Giáo viên đưa năm đoạn nhạc; học sinh tô màu dấu nối và dấu luyến khác nhau trước khi chơi.
2. Chơi năm nốt Đô–Rê–Mi–Fa–Sol liền tiếng tay phải, sau đó tay trái, lắng nghe không có khoảng trống.
3. Luyến hai nốt: Mi–Rê, Fa–Mi, Sol–Fa… mỗi cặp "xuống – lên".
4. Chơi cùng một âm hình theo ba cách: legato, portato, staccato; so sánh khác biệt.
5. Đọc một bài trong sách đang học và đánh dấu chỗ kết câu bằng bút chì.

Xem thêm: [[cham-doi-dau-noi]], [[cach-dien-tau]], [[dien-dat-cau-nhac]], [[quy-tac-ghep-duoi-va-chia-nhom-not]].
`,
  },
  {
    slug: "chuong-trinh-nhac-ly-abrsm",
    title: "Chương trình nhạc lý ABRSM (Cấp 1–8)",
    category: 'basics',
    aliases: ["ABRSM Music Theory", "ABRSM theory grades", "nhạc lý ABRSM", "thi nhạc lý ABRSM", "Grade 5 Theory", "đề cương nhạc lý ABRSM", "online theory exam"],
    summary: "Tổng quan chương trình thi nhạc lý (Music Theory) của ABRSM từ Cấp 1 đến Cấp 8: mỗi cấp bổ sung kiến thức gì, những thay đổi năm 2018 và hình thức thi trực tuyến từ 2020–2021, vai trò của Cấp 5 nhạc lý như điều kiện dự thi thực hành Cấp 6–8, và so sánh ngắn với Trinity.",
    refs: [
      ["Going Digital – ABRSM’s New Online Theory Exams (MyMusicTheory)", "https://mymusictheory.com/2021/01/01/going-digital-abrsms-new-online-theory-exams/"],
      ["ABRSM Music Theory Online Exams: All you need to know", "https://www.piano-composer-teacher-london.co.uk/post/abrsm-music-theory-online-exams-all-you-need-to-know"],
      ["ABRSM Theory Exams: the End of an Era? (David Barton)", "https://www.davidbartonmusic.co.uk/?p=9187"],
      ["ABRSM Grade 5 Theory: a Debate? (David Barton)", "https://www.davidbartonmusic.co.uk/?p=9469"],
      ["MyMusicTheory – ABRSM exam board page", "https://mymusictheory.com/exam-boards/abrsm/"],
      ["About Trinity Music Theory Exams", "https://support.trinitycollege.com/support/solutions/articles/202000098217-about-trinity-music-theory-exams"],
      ["Discovering Music Theory (Scorestore blog)", "https://scorestore.co.uk/blog/discovering-music-theory.html"],
    ],
    body: `
ABRSM (Associated Board of the Royal Schools of Music) tổ chức thi **nhạc lý** (music theory) thành 8 cấp, tách riêng với thi thực hành (practical). Bài này tóm tắt cấu trúc chương trình; nội dung chi tiết từng chặng xem [[nhac-ly-cap-1-2]], [[nhac-ly-cap-3-4]] và [[nhac-ly-cap-5]]. Kiến thức nền xem [[nhac-ly-co-ban]], còn hệ thống thi nói chung xem [[thi-cap-do]].

Lưu ý: ABRSM không công khai mọi chi tiết trong kết quả tìm kiếm; phần lớn thông tin dưới đây được đối chiếu từ các trang giáo viên và nhà xuất bản tài liệu luyện thi. Trước khi đăng ký thi, giáo viên nên tải đề cương (syllabus) mới nhất trên trang ABRSM.

## Nguyên tắc chung: chương trình tích luỹ

Đề cương nhạc lý ABRSM có tính **tích luỹ** (cumulative): thi Cấp 3 vẫn phải nắm toàn bộ kiến thức Cấp 1–2 (MyMusicTheory). Học sinh có thể thi thẳng Cấp 5 nhưng vẫn phải học kiến thức các cấp dưới.

## Những thay đổi từ 2018 đến 2021

### Thay đổi nội dung năm 2018

Theo thông báo của ABRSM năm 2018 (được các trang luyện thi trích lại), đề thi Cấp 1–5 **bỏ các câu hỏi viết sáng tác**: viết tiết tấu, đặt nhạc cho lời (word-setting), viết giai điệu, và câu hỏi viết bốn bè SATB dạng tổng phổ rút gọn hoặc tổng phổ mở (short/open score) ở Cấp 5. Khoá Đô dòng 3 (alto) vẫn ở Cấp 4 và khoá Đô dòng 4 (tenor) vẫn ở Cấp 5. Các kỹ năng sáng tác không biến mất hoàn toàn: theo một nhà xuất bản, chúng được dạy kỹ hơn ở giáo trình Cấp 6–8 vì không còn được kiểm tra ở cấp thấp.

### Thi trực tuyến từ 2020–2021

Do đại dịch, ABRSM thử nghiệm thi **Cấp 5 trực tuyến** vào tháng 8/2020, rồi mở rộng cho Cấp 1–5 (MyMusicTheory). Các đặc điểm được nhiều nguồn mô tả:

- Câu hỏi chủ yếu dạng **trắc nghiệm** và kéo–thả trên màn hình; không còn viết nhạc bằng tay.
- Tổng điểm là **75** thay vì 100, điểm đỗ là **50** (khoảng 67%).
- Số lượng thuật ngữ nước ngoài phải học thuộc được **cắt giảm đáng kể**, và một số chủ đề được lược bớt ở mỗi cấp.

ABRSM khẳng định đề thi vẫn kiểm tra cùng kiến thức với cùng chuẩn mực (theo Scorestore). Một số giáo viên phản biện rằng bài thi ngắn hơn và ngưỡng điểm giỏi thấp hơn khiến kỳ thi **dễ hơn** (David Barton). Đây là ý kiến cá nhân, chưa có số liệu độc lập.

### Cấp 6–8

Theo MyMusicTheory (cập nhật 2026), Cấp 6–8 vẫn là bài thi **giấy** tại hội đồng thi, gồm hoà âm và đối âm, sáng tác, và hiểu biết chung về âm nhạc phương Tây (tác giả, tác phẩm, cấu trúc, phong cách, thời kỳ). Hình thức này có thể thay đổi; cần kiểm tra lại với ABRSM tại Việt Nam.

## Bảng tóm tắt theo cấp

Bảng dưới liệt kê những gì **mới bổ sung** ở mỗi cấp (theo đề cương hiện hành, cần kiểm tra lại từng chi tiết với tài liệu chính thức).

| Cấp | Kiến thức bổ sung chính |
|---|---|
| 1 | Khoá Sol, khoá Fa; nốt tròn đến móc kép, dấu chấm dôi, dấu nối; nhịp 2/4, 3/4, 4/4; Đô, Sol, Rê, Fa trưởng; quãng trên chủ âm (chỉ số); hợp âm ba chủ âm |
| 2 | Nhịp 2/2, 3/2, 4/2; liên ba; thêm La, Si giáng, Mi giáng trưởng và La, Mi, Rê thứ |
| 3 | Hoá biểu đến 4 dấu (trưởng và thứ); nhịp kép 6/8, 9/8, 12/8; móc ba; quãng có tính chất; dịch giọng quãng tám |
| 4 | Hoá biểu đến 5 dấu; nốt tròn đôi, chấm dôi kép, liên hai; thăng kép và giáng kép; âm giai cromatic; quãng tăng, giảm; tên kỹ thuật các bậc; hợp âm I, IV, V; khoá Đô dòng 3; dấu hoa mỹ; nhạc cụ dàn nhạc |
| 5 | Mọi hoá biểu đến 7 dấu; nhịp không đều (5/4, 7/8...); khoá Đô dòng 4; quãng kép; hợp âm I, ii, IV, V và thể đảo; cấu kết; dịch giọng cho nhạc cụ chuyển giọng; âm nhạc trong ngữ cảnh |
| 6–8 | Hoà âm, đối âm, sáng tác, phân tích và kiến thức lịch sử – phong cách |

## Cấp 5 nhạc lý và điều kiện thi thực hành Cấp 6–8

Muốn dự thi thực hành (Practical hoặc Performance Grade) Cấp 6, 7, 8 của ABRSM, thí sinh phải đã đỗ **Cấp 5 trở lên** ở một trong các môn: Nhạc lý (Music Theory), **Practical Musicianship** (nhạc sĩ tính thực hành, thi trực tiếp, không trực tuyến), hoặc một môn **Jazz** độc tấu Cấp 5. Theo trang hỗ trợ của Trinity, ABRSM chấp nhận cả chứng chỉ nhạc lý Trinity Cấp 5 trở lên. Một số nguồn ghi "về nguyên tắc" ABRSM chấp nhận Cấp 5 nhạc lý của hội đồng khác, nên cần xác nhận trước khi đăng ký.

## So sánh ngắn với Trinity

| Tiêu chí | ABRSM | Trinity College London |
|---|---|---|
| Điều kiện nhạc lý cho thực hành Cấp 6–8 | Bắt buộc Cấp 5 (hoặc tương đương) | Không yêu cầu |
| Hình thức thi nhạc lý | Cấp 1–5 trực tuyến; Cấp 6–8 thi giấy | Thi số; từ tháng 5/2025 không còn thi giấy tại Anh và Ireland |
| Giao diện | Chủ yếu trắc nghiệm | Có giao diện ghi nhạc trên màn hình (nền tảng MusicGurus) |

Nguồn: trang hỗ trợ của Trinity. Nội dung từng cấp của Trinity khác ABRSM ở thứ tự đưa chủ đề; xem thêm [[danh-gia-giao-trinh-piano-va-nhac-ly]].

## Khi giảng dạy

1. Học song song nhạc lý với cấp đàn thấp hơn khoảng 1–2 cấp; nhạc lý giúp đọc bản nhạc nhanh hơn ở bài thi thực hành.
2. Vì đề thi trực tuyến, hãy cho học sinh làm bài mẫu trên máy tính, không chỉ trên giấy. Kỹ năng **viết** nhạc tay vẫn nên luyện, vì Cấp 6–8 thi viết.
3. Không bỏ hẳn sáng tác dù đề Cấp 1–5 không còn kiểm tra: tập viết câu trả lời 2 ô nhịp, đặt hợp âm cho [[cau-ket]] sẽ chuẩn bị cho Cấp 6.
4. Lập sổ [[thuat-ngu]] theo cấp và ôn bằng thẻ.

## Lỗi thường gặp

- Dùng sách luyện thi bản trước 2018 mà không biết dạng câu hỏi sáng tác đã bị bỏ, hoặc ngược lại dùng tài liệu mới mà bỏ qua kỹ năng viết cần cho Cấp 6.

Xem thêm: [[nhac-ly-cap-1-2]], [[nhac-ly-cap-5]], [[thi-cap-do]], [[hoa-bieu]].
`,
  },
  {
    slug: "nhac-ly-cap-1-2",
    title: "Nhạc lý Cấp 1–2 (ABRSM)",
    category: 'basics',
    aliases: ["ABRSM Grade 1 theory", "ABRSM Grade 2 theory", "nhạc lý lớp 1", "nhạc lý grade 1", "nhạc lý grade 2", "tonic triad", "simple time"],
    summary: "Nội dung nhạc lý ABRSM Cấp 1 và Cấp 2: trường độ, số chỉ nhịp đơn, các giọng trưởng và thứ được yêu cầu, quãng tính theo số, hợp âm ba chủ âm và thuật ngữ, kèm ví dụ và bài tập có đáp án.",
    refs: [
      ["MyMusicTheory – ABRSM Grade 1 lessons", "https://mymusictheory.com/tag/abrsm1/"],
      ["MyMusicTheory – ABRSM Grade 1 syllabus", "https://mymusictheory.com/?p=29475"],
      ["Hello Music Theory – A Complete Guide To Grade 1 Music Theory", "https://products.hellomusictheory.com/complete-guide-to-grade-1"],
      ["Going Digital – ABRSM’s New Online Theory Exams", "https://mymusictheory.com/2021/01/01/going-digital-abrsms-new-online-theory-exams/"],
      ["ABRSM Music Theory Online Exams: All you need to know", "https://www.piano-composer-teacher-london.co.uk/post/abrsm-music-theory-online-exams-all-you-need-to-know"],
    ],
    body: `
Cấp 1 và Cấp 2 là chặng nhập môn của [[chuong-trinh-nhac-ly-abrsm]]. Nội dung trùng phần lớn với [[nhac-ly-co-ban]], nhưng đề thi đòi hỏi trả lời **chính xác và nhanh** trên máy tính. Thông tin đề cương dưới đây lấy theo các trang luyện thi trích đề cương ABRSM (MyMusicTheory, Hello Music Theory); theo đề cương hiện hành, cần kiểm tra lại các chi tiết nhỏ.

## Cấp 1: những gì cần biết

### Cao độ và khoá

Đọc và viết nốt trên khuông nhạc ở [[khoa-sol]] và [[khoa-fa]], kể cả nốt trên dòng kẻ phụ (ledger lines). Biết [[dau-hoa]] thăng, giáng, bình và khái niệm cung, nửa cung (tone, semitone), xem [[cung-nua-cung]].

### Trường độ và nhịp

Đề cương Cấp 1 gồm nốt tròn (semibreve), nốt trắng (minim), nốt đen (crotchet), móc đơn (quaver), móc kép (semiquaver) cùng [[dau-lang]] tương ứng; dấu nối (tie); nốt và dấu lặng có một chấm dôi. Thí sinh được dùng tên kiểu Mỹ như *whole note*, *half note*. Số chỉ nhịp đơn 2/4, 3/4, 4/4, cách đặt vạch nhịp và **nhóm nốt** (grouping) đúng trong các nhịp này. Xem [[truong-do]] và [[so-chi-nhip]].

::rhythm 4/4 q:1 q:2 e-e q / h. q / q. e h // | Ví dụ 4/4 hợp lệ ở Cấp 1, mỗi ô đủ bốn phách

### Giọng, âm giai, quãng, hợp âm

[[am-giai-truong|Âm giai trưởng]] và hoá biểu của **Đô, Sol, Rê, Fa trưởng** ở cả hai khoá; hợp âm ba chủ âm (tonic triad) thể nguyên vị; bậc âm giai **chỉ ghi bằng số**; quãng tính từ chủ âm lên, **chỉ gọi theo số** (quãng 2, 3, ... 8).

::staff treble k:1# G4=1 A4=2 B4=3 C5=4 D5=5 E5=6 F#5=7 G5=8 | Sol trưởng đi lên, bậc ghi bằng số

::staff treble C4+E4+G4=C G4+B4+D5=G D4+F#4+A4=D F4+A4+C5=F | Bốn hợp âm ba chủ âm của Cấp 1

### Thuật ngữ

Một danh sách ngắn thuật ngữ tiếng Ý về nhịp độ, cường độ và cách diễn tấu (ví dụ *allegro*, *andante*, *piano*, *forte*, *crescendo*, *legato*, *staccato*). Từ khi thi trực tuyến, số lượng thuật ngữ đã được giảm bớt; xem danh sách chính thức và [[thuat-ngu]].

## Cấp 2: phần bổ sung

- **Nhịp**: thêm 2/2, 3/2, 4/2 (phách là nốt trắng). Thêm **liên ba** (triplet), xem [[lien-ba]].
- **Giọng**: thêm La, Si giáng, Mi giáng trưởng và **La, Mi, Rê thứ** (theo các trang luyện thi). Âm giai thứ học cả dạng hoà âm (harmonic) và giai điệu (melodic), xem [[am-giai-thu]].
- **Quãng và hợp âm**: vẫn tính từ chủ âm, theo số, nhưng áp dụng cho các giọng mới; hợp âm ba chủ âm của các giọng mới.
- **Cao độ**: đọc nốt trên nhiều dòng kẻ phụ hơn (đến hai dòng kẻ phụ; theo đề cương hiện hành, cần kiểm tra lại).

::rhythm 3/2 h h h / h. q h / w h // | Nhịp 3/2, mỗi ô ba nốt trắng

::staff treble A4 B4 C5 D5 E5 F5 G#5 A5 | La thứ hoà âm, bậc 7 nâng lên Sol thăng

## Ví dụ giải mẫu

**Ví dụ 1 (nhóm nốt).** Trong 4/4, viết bốn móc đơn liên tiếp ở phách 1–2 thì nối chung một vạch (beam) được, nhưng không nối móc đơn vắt qua giữa ô (từ phách 2 sang 3) vì sẽ che mất điểm giữa ô. Ở 3/4, nối sáu móc đơn chung một vạch là chấp nhận được.

**Ví dụ 2 (quãng theo số).** Trong Rê trưởng, nốt La trên chủ âm Rê là quãng 5 (đếm Rê–Mi–Fa thăng–Sol–La = 5 nốt). Ở Cấp 1–2 chỉ cần trả lời "5", chưa cần gọi tính chất ("quãng 5 đúng").

**Ví dụ 3 (hoá biểu).** Hoá biểu một dấu giáng (Si giáng) là Fa trưởng hoặc Rê thứ. Phân biệt bằng cách xem nốt kết bài và có Đô thăng (bậc 7 nâng của Rê thứ) hay không.

::staff treble k:1b D4 E4 F4 G4 A4 Bb4 C#5 D5 | Rê thứ hoà âm, cùng hoá biểu với Fa trưởng

## Luyện tập (có đáp án)

1. Ô nhịp 3/4 có: nốt trắng có chấm. Còn thiếu bao nhiêu phách? — *Đáp án*: không thiếu, nốt trắng chấm dôi = 3 phách.
2. Viết dấu lặng hoàn tất ô 4/4 đã có: nốt đen, móc đơn. — *Đáp án*: dấu lặng móc đơn rồi dấu lặng trắng (lặng móc đơn hoàn tất phách 2, lặng trắng cho phách 3–4).
3. Trong Fa trưởng, nốt Si giáng là bậc mấy? — *Đáp án*: bậc 4.
4. Hợp âm Mi giáng – Sol – Si giáng là hợp âm ba chủ âm của giọng nào? — *Đáp án*: Mi giáng trưởng (Cấp 2).
5. Một liên ba móc đơn trong 2/4 chiếm bao lâu? — *Đáp án*: một phách đen.

## Lỗi thường gặp

- Quên chấm dôi kéo dài thêm **một nửa** giá trị nốt, không phải thêm một phách.
- Đặt hoá biểu sai thứ tự hoặc sai dòng (ví dụ Fa thăng ở khoá Fa phải ở dòng 4). Ôn [[hoa-bieu]].
- Đếm quãng không tính nốt xuất phát (Đô lên Mi là quãng 3, không phải 2). Xem [[quang]].
- Nối vạch các móc đơn vắt qua giữa ô 4/4.

## Khi giảng dạy

Cho học sinh vừa đàn vừa nói tên bậc: hợp âm ba chủ âm được đàn ngay trên phím, quãng được hát rồi đếm. Mỗi buổi chỉ cần 10 phút bài tập ngắn trên máy để làm quen giao diện thi.

Xem thêm: [[nhac-ly-cap-3-4]], [[am-giai-truong]], [[hop-am-ba]], [[truong-do]].
`,
  },
  {
    slug: "nhac-ly-cap-3-4",
    title: "Nhạc lý Cấp 3–4 (ABRSM)",
    category: 'basics',
    aliases: ["ABRSM Grade 3 theory", "ABRSM Grade 4 theory", "compound time", "technical names of scale degrees", "nhạc lý grade 3", "nhạc lý grade 4"],
    summary: "Nội dung nhạc lý ABRSM Cấp 3 và Cấp 4: hoá biểu đến 4 rồi 5 dấu, nhịp kép, móc ba, quãng có tính chất, dịch giọng quãng tám, âm giai cromatic, tên kỹ thuật các bậc, hợp âm I–IV–V, khoá Đô dòng 3 và dấu hoa mỹ, kèm ví dụ giải mẫu.",
    refs: [
      ["MyMusicTheory – ABRSM Grade 3 lessons", "https://mymusictheory.com/tag/abrsm3/"],
      ["MyMusicTheory – Grade 3 Music Theory PDF (ABRSM)", "https://courses.mymusictheory.com/courses/grade-3-course-pdf-abrsm"],
      ["MyMusicTheory – ABRSM Grade 4 lessons", "https://mymusictheory.com/tag/abrsm4/"],
      ["MyMusicTheory – ABRSM Grade 4 syllabus", "https://mymusictheory.com/?p=31741"],
      ["ABRSM Music Theory | Grade 4 (MyMusicTheory course)", "https://courses.mymusictheory.com/courses/grade-4-music-theory-abrsm"],
      ["A Complete Guide To Grade 4 Music Theory (Hello Music Theory)", "https://cart.hellomusictheory.com/study-guide-grade-4"],
    ],
    body: `
Cấp 3–4 là chặng giữa của [[chuong-trinh-nhac-ly-abrsm]]: số giọng tăng nhanh, xuất hiện nhịp kép, quãng có tính chất và khoá Đô. Vì đề cương tích luỹ, học sinh cần nắm vững [[nhac-ly-cap-1-2]] trước. Danh sách dưới đây tổng hợp từ các trang luyện thi trích đề cương ABRSM (MyMusicTheory, Hello Music Theory); những điểm các nguồn không thống nhất được ghi rõ.

## Cấp 3

- **Giọng**: mọi giọng trưởng và thứ có **đến 4 dấu** thăng hoặc giáng; âm giai thứ hoà âm và giai điệu.
- **Trường độ**: thêm **móc ba** (demisemiquaver) và dấu lặng tương ứng.
- **Nhịp kép** (compound time): 6/8, 9/8, 12/8 cùng cách nhóm nốt và dấu lặng. Các nhịp như 3/8, 6/4, 9/4 có thuộc Cấp 3 hay không: theo đề cương hiện hành, cần kiểm tra lại.
- **Cao độ**: đọc nốt vượt quá hai dòng kẻ phụ.
- **Quãng**: tính từ chủ âm lên, gọi **cả số và tính chất** (trưởng, thứ, đúng).
- **Dịch giọng** (transposition): chép một giai điệu **cách một quãng tám** từ khoá Sol sang khoá Fa và ngược lại. Xem [[dich-giong]].
- Hợp âm ba chủ âm nguyên vị ở các giọng mới; thuật ngữ bổ sung.

### Nhịp kép

Trong nhịp kép, phách là **nốt có chấm**: 6/8 có hai phách nốt đen chấm dôi, 9/8 ba phách, 12/8 bốn phách. Móc đơn được nhóm theo ba.

::rhythm 6/8 e-e-e e-e-e / q e q e / q. e-e-e / q. q. // | 6/8 hai phách nốt đen chấm dôi; nhóm móc đơn theo ba

### Quãng có tính chất (tính từ chủ âm)

Từ chủ âm của giọng trưởng, quãng 2, 3, 6, 7 là **trưởng**; quãng 4, 5, 8 là **đúng**. Trong giọng thứ, quãng 3 và 6 tính từ chủ âm là **thứ**; quãng 7 là thứ ở dạng tự nhiên, nhưng trưởng nếu dùng bậc 7 nâng của thứ hoà âm. Xem [[quang]].

::staff treble C4+Eb4=3_thứ C4+Ab4=6_thứ C4+B4=7_trưởng C4+G4=5_đúng | Quãng tính từ chủ âm Đô thứ, Si bình là bậc 7 nâng

## Cấp 4

Theo các trang luyện thi, Cấp 4 bổ sung:

- **Giọng**: trưởng và thứ **đến 5 dấu**.
- **Trường độ**: **nốt tròn đôi** (breve) và dấu lặng, **chấm dôi kép**, **liên hai** (duplet); mọi số chỉ nhịp đơn và kép đều đặn (regular).
- **Dấu hoá**: thăng kép, giáng kép, cách huỷ và **nốt trùng âm** (enharmonic).
- [[am-giai-cromatic|Âm giai cromatic]].
- **Quãng** giữa hai nốt bất kỳ, gồm tăng và giảm. Các nguồn khác nhau ở giới hạn: một nguồn ghi "không vượt quá quãng tám", nguồn khác chỉ ghi "giữa hai nốt bất kỳ". Theo đề cương hiện hành, cần kiểm tra lại.
- **Tên kỹ thuật các bậc** (technical names), xem [[bac-am-giai]].
- **Hợp âm ba nguyên vị** trên bậc I, IV, V. Xem [[hop-am-ba]].
- **Khoá Đô dòng 3** (alto clef): đọc nốt trong các giọng của cấp và chép cùng cao độ giữa khoá Sol hoặc Fa và khoá Đô dòng 3. Xem [[khoa-do]].
- **Dấu hoa mỹ** (ornaments): nhận biết ký hiệu như láy rền (trill), láy chùm (turn), láy (mordent). Danh sách cụ thể: theo đề cương hiện hành, cần kiểm tra lại. Xem [[ky-hieu-hoa-my]].
- Kiến thức chung về **nhạc cụ dàn nhạc** tiêu chuẩn.
- Có dịch giọng ở quãng khác ngoài quãng tám hay không: các nguồn tìm được không xác nhận; theo đề cương hiện hành, cần kiểm tra lại.

### Tên kỹ thuật các bậc

| Bậc | Tiếng Anh | Tiếng Việt |
|---|---|---|
| I | tonic | chủ âm |
| II | supertonic | thượng chủ âm |
| III | mediant | trung âm |
| IV | subdominant | hạ át âm |
| V | dominant | át âm |
| VI | submediant | hạ trung âm |
| VII | leading note | cảm âm (âm dẫn) |

Trong giọng thứ tự nhiên, bậc VII cách chủ âm một cung được gọi là *subtonic*; tên này ít gặp ở đề thi.

### Khoá Đô dòng 3

Khoá Đô dòng 3 đặt Đô giữa (C4) ở **dòng giữa** khuông. Dùng cho đàn viola.

::staff alto C4 D4 E4 F4 G4 / B3 A3 G3 | Khoá Đô dòng 3, Đô giữa nằm trên dòng 3

::staff treble C4 D4 E4 F4 G4 | Cùng giai điệu, cùng cao độ, viết ở khoá Sol

## Ví dụ giải mẫu

**Ví dụ 1 (quãng tăng, giảm).** Fa – Si: đếm 4 nốt nên là quãng 4; Fa–Si giáng là quãng 4 đúng, nên Fa–Si bình rộng hơn nửa cung là **quãng 4 tăng**. Si – Fa (lên) là **quãng 5 giảm**.

**Ví dụ 2 (âm giai cromatic).** Đề ABRSM thường chấp nhận nhiều cách viết âm giai cromatic, miễn là bắt đầu và kết thúc cùng nốt và không dùng một tên nốt quá hai lần liên tiếp (quy ước được các sách luyện thi nêu; cần kiểm tra lại với đề cương).

::staff treble C4 C#4 D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 C5 | Một cách viết âm giai cromatic từ Đô đi lên

**Ví dụ 3 (hợp âm I, IV, V).** Ở Mi trưởng (4 thăng, Cấp 3 trở lên): I = Mi–Sol thăng–Si, IV = La–Đô thăng–Mi, V = Si–Rê thăng–Fa thăng.

::staff treble k:4# E4+G#4+B4=I A4+C#5+E5=IV B4+D#5+F#5=V | Hợp âm I, IV, V của Mi trưởng

## Luyện tập (có đáp án)

1. Đổi một ô 2/4 gồm hai nốt đen sang 6/8 với cùng cảm giác hai phách. — *Đáp án*: hai nốt đen chấm dôi.
2. Tên kỹ thuật của Rê trong Sol trưởng? — *Đáp án*: át âm.
3. Giọng có 5 giáng? — *Đáp án*: Rê giáng trưởng hoặc Si giáng thứ (Cấp 4).
4. La – Đô thăng là quãng gì? — *Đáp án*: quãng 3 trưởng.
5. Nốt trùng âm của Fa thăng kép? — *Đáp án*: Sol (bình).

## Lỗi thường gặp

- Nhầm 6/8 với 3/4: cả hai có sáu móc đơn mỗi ô, nhưng 6/8 nhóm 3+3, 3/4 nhóm 2+2+2.
- Gọi quãng theo khoảng cách phím mà quên tên chữ: Đô–Rê thăng và Đô–Mi giáng nghe như nhau nhưng là quãng 2 tăng và quãng 3 thứ.
- Đọc khoá Đô dòng 3 như khoá Sol, sai một nốt trên mỗi dòng.

Xem thêm: [[nhac-ly-cap-5]], [[am-giai-cromatic]], [[khoa-do]], [[quang]].
`,
  },
  {
    slug: "nhac-ly-cap-5",
    title: "Nhạc lý Cấp 5 (ABRSM)",
    category: 'basics',
    aliases: ["ABRSM Grade 5 theory", "nhạc lý grade 5", "irregular time signatures", "transposing instruments", "cadences grade 5"],
    summary: "Nội dung nhạc lý ABRSM Cấp 5, cấp điều kiện để thi thực hành Cấp 6–8: mọi hoá biểu, nhịp không đều, khoá Đô dòng 4, quãng kép, hợp âm I–ii–IV–V và thể đảo, cấu kết, dịch giọng cho nhạc cụ chuyển giọng, nhạc cụ và câu hỏi theo ngữ cảnh; kèm ví dụ và mẹo làm bài.",
    refs: [
      ["MyMusicTheory – ABRSM Grade 5 lessons", "https://mymusictheory.com/tag/abrsm5/"],
      ["MyMusicTheory – ABRSM Grade 5 syllabus", "https://mymusictheory.com/?p=31743"],
      ["Music theory grade 5 (Jade Bultitude)", "https://jadebultitude.com/music-theory-grade-5/"],
      ["ABRSM Music Theory | Grade 5 Crash Course (MyMusicTheory)", "https://courses.mymusictheory.com/courses/abrsm-music-theory-grade-5-crash-course"],
      ["Grade 5 music theory test (MyMusicTheory)", "https://mymusictheory.com/tests/grade-5-music-theory-test/"],
      ["ABRSM Grade 5 Theory: a Debate? (David Barton)", "https://www.davidbartonmusic.co.uk/?p=9469"],
      ["Going Digital – ABRSM’s New Online Theory Exams", "https://mymusictheory.com/2021/01/01/going-digital-abrsms-new-online-theory-exams/"],
    ],
    body: `
Cấp 5 là cấp được thi nhiều nhất trong [[chuong-trinh-nhac-ly-abrsm]], vì đỗ Cấp 5 nhạc lý (hoặc môn tương đương) là điều kiện để thi thực hành Cấp 6–8 của ABRSM. Đề cương tích luỹ toàn bộ [[nhac-ly-cap-1-2]] và [[nhac-ly-cap-3-4]]. Nội dung dưới đây theo các trang luyện thi trích đề cương ABRSM (MyMusicTheory, Jade Bultitude); điểm nào chưa xác nhận được ghi rõ.

## Nội dung đề cương

- **Giọng**: mọi giọng trưởng và thứ đến **7 dấu** thăng hoặc giáng.
- **Nhịp không đều** (irregular time signatures) như 5/4, 7/4, 5/8, 7/8. Các nhóm liên âm bất thường khác ngoài liên ba và liên hai (ví dụ liên năm): theo đề cương hiện hành, cần kiểm tra lại.
- **Khoá**: thêm **khoá Đô dòng 4** (tenor clef). Chép giai điệu đơn giản giữa bốn khoá (Sol, Fa, Đô dòng 3, Đô dòng 4) cách quãng tám hoặc cùng cao độ. Xem [[khoa-do]].
- **Quãng**: mọi quãng kể cả **quãng kép** (vượt quãng tám), gồm trưởng, thứ, đúng, tăng, giảm. Xem [[quang]].
- **Hợp âm**: thể nguyên vị (a), đảo 1 (b), đảo 2 (c) của hợp âm **I, ii, IV, V** trong mọi giọng của cấp. Xem [[the-dao-hop-am]].
- **Cấu kết**: chọn hợp âm phù hợp tại điểm cấu kết của một giai điệu đơn giản ở Đô, Sol, Rê hoặc Fa trưởng; các loại cấu kết hoàn toàn, nửa và plagal. Cấu kết lừa (interrupted) có thuộc Cấp 5 không: theo đề cương hiện hành, cần kiểm tra lại. Xem [[cau-ket]].
- **Dịch giọng**: chuyển một giai điệu ngắn viết cho nhạc cụ **in Si giáng, La hoặc Fa** về cao độ thực (concert pitch) và ngược lại; đề cho sẵn quãng dịch. Xem [[dich-giong]].
- **Thuật ngữ, ký hiệu, nhạc cụ, dấu hoa mỹ** và **âm nhạc trong ngữ cảnh** (music in context): trả lời các câu hỏi về một trích đoạn tổng phổ. Danh sách dấu hoa mỹ cụ thể không tìm thấy trong nguồn; xem [[ky-hieu-hoa-my]].

**Đã bỏ**: từ 2018, ABRSM bỏ câu viết bốn bè SATB ở dạng tổng phổ rút gọn hoặc tổng phổ mở, cùng các câu sáng tác giai điệu và đặt nhạc cho lời. Tài liệu cũ vẫn còn những bài này; học sinh không cần luyện chúng để thi Cấp 5, nhưng chúng hữu ích cho Cấp 6.

## Nhịp không đều

Ô 5/4 thường chia 3+2 hoặc 2+3; ô 7/8 chia 2+2+3, 3+2+2 hoặc 2+3+2. Cách nối vạch móc đơn cho thấy cách chia.

::rhythm 5/4 q q q q q / h. h // | 5/4, ở đây chia 3+2

::rhythm 7/8 e-e e-e e-e-e / e-e-e e-e e-e // | 7/8 chia 2+2+3 rồi 3+2+2

## Khoá Đô dòng 4

Khoá Đô dòng 4 đặt Đô giữa (C4) trên **dòng thứ tư** tính từ dưới lên. Cello, bassoon (kèn fagot) và trombone dùng khoá này cho âm vực cao. Mẹo: một nốt ở khoá Đô dòng 4 đọc thấp hơn **một quãng 3** so với cùng vị trí đó ở khoá Đô dòng 3.

## Hợp âm và cấu kết

Ở Đô trưởng: I = Đô–Mi–Sol, ii = Rê–Fa–La, IV = Fa–La–Đô, V = Sol–Si–Rê. Ký hiệu *Ib* nghĩa là hợp âm I với nốt Mi ở bè trầm; *Ic* có Sol ở bè trầm.

| Cấu kết | Hợp âm | Cảm giác |
|---|---|---|
| Hoàn toàn (perfect) | V – I | kết thúc trọn vẹn |
| Plagal | IV – I | kết "Amen", mềm |
| Nửa (imperfect) | I, ii hoặc IV – V | dừng tạm, chưa xong |

::grand G4+B4+D5/G3=V G4+C5+E5/C3=I | Cấu kết hoàn toàn ở Đô trưởng

::grand A4+C5+F5/F3=IV G4+C5+E5/C3=I | Cấu kết plagal

::grand G4+C5+E5/C3=I G4+B4+D5/G3=V | Cấu kết nửa

**Cách chọn hợp âm cấu kết**: xem hai nốt giai điệu cuối câu. Nếu là Rê → Đô, chọn V – I. Nếu Đô → Si hoặc Đô → Rê, gợi ý I – V. Nốt Đô giữ nguyên trên Fa → Đô ở bè trầm gợi ý IV – I. Mỗi nốt giai điệu phải thuộc hợp âm được chọn.

## Dịch giọng cho nhạc cụ chuyển giọng

| Nhạc cụ | Âm thực so với nốt viết | Khi viết từ cao độ thực |
|---|---|---|
| Clarinet, trumpet in Si giáng | thấp hơn quãng 2 trưởng | viết **cao hơn** quãng 2 trưởng |
| Clarinet in La | thấp hơn quãng 3 thứ | viết cao hơn quãng 3 thứ |
| Horn in Fa | thấp hơn quãng 5 đúng | viết cao hơn quãng 5 đúng |

**Ví dụ**: giai điệu thực ở Fa trưởng cho clarinet in Si giáng phải viết ở **Sol trưởng** (hoá biểu cũng dịch lên một cung).

::staff treble k:1b F4 G4 A4 Bb4 C5 | Cao độ thực, Fa trưởng

::staff treble k:1# G4 A4 B4 C5 D5 | Phần viết cho clarinet in Si giáng, Sol trưởng

## Luyện tập (có đáp án)

1. Quãng Đô (C4) – Mi (E5)? — *Đáp án*: quãng 3 trưởng kép (quãng 10 trưởng).
2. Hợp âm Fa thăng – La – Rê ở Rê trưởng ký hiệu thế nào? — *Đáp án*: Ib (Fa thăng ở bè trầm).
3. Giọng có 6 thăng? — *Đáp án*: Fa thăng trưởng hoặc Rê thăng thứ.
4. Nốt viết Rê cho horn in Fa nghe ra nốt gì? — *Đáp án*: Sol, thấp hơn quãng 5 đúng.
5. Giai điệu kết Si → Đô ở Đô trưởng, chọn hợp âm nào? — *Đáp án*: V – I.

## Mẹo làm bài

- Theo MyMusicTheory, đề trực tuyến 75 điểm, điểm đỗ 50; câu hỏi chủ yếu trắc nghiệm. Đọc kỹ đề, đặc biệt các từ "cao hơn/thấp hơn" và "cao độ thực/nốt viết" ở câu dịch giọng.
- Với câu quãng, luôn đếm tên chữ trước rồi mới xét tính chất.
- Với câu ngữ cảnh, xác định giọng, nhịp và khoá của từng bè trước khi trả lời.
- Ôn [[thuat-ngu]] theo nhóm (nhịp độ, cường độ, sắc thái) vì danh sách đã rút gọn nhưng vẫn phải thuộc chính xác.

## Lỗi thường gặp

- Dịch nốt nhưng quên dịch hoá biểu, hoặc dịch sai hướng.
- Nhầm ii với II (ii là hợp âm thứ trong giọng trưởng).
- Chọn hợp âm cấu kết không chứa nốt giai điệu.

Xem thêm: [[chuong-trinh-nhac-ly-abrsm]], [[cau-ket]], [[hop-am-ba]], [[thi-cap-do]].
`,
  },
  {
    slug: "nhac-cu-dich-giong-va-doc-tong-pho",
    title: "Nhạc cụ dịch giọng và cách đọc tổng phổ",
    category: 'basics',
    aliases: ["nhạc cụ chuyển giọng", "cao độ thực và cao độ ghi", "đọc tổng phổ dàn nhạc", "concert pitch", "full score reading"],
    summary: "Giải thích nhạc cụ dịch giọng (clarinet và trumpet Si giáng, kèn horn Fa, saxophone alto Mi giáng, các nhạc cụ dịch quãng tám), sự khác nhau giữa cao độ ghi và cao độ thực (concert pitch), thứ tự các bè trong tổng phổ dàn nhạc, khoá Đô alto và tenor, cùng mẹo cho người chơi piano khi đọc bản thu gọn.",
    refs: [
      ["Stonekick - Transposing for different instruments", "https://stonekick.com/blog/transposing-for-different-instruments.html"],
      ["Soundslice - Transposing instruments", "https://www.soundslice.com/help/en/creating/basics/83/transposing-instruments"],
      ["ConductIt - Using Transpositions", "https://conductit.eu/study-room/score-study-preperation-background/transpositions/using-transpositions/"],
      ["Andrew Hugill - Orchestra Manual, score layouts", "https://andrewhugill.com/OrchestraManual/layouts.html"],
      ["Beat Kitchen - Reading the orchestra", "https://beatkitchen.io/guides/orchestral/02-reading-the-orchestra/"],
      ["Dolmetsch - Music theory online, score formats", "https://dolmetsch.com/musictheory26.htm"],
      ["Newzik - Reading an orchestral score", "https://en.blog.newzik.com/blog/lire-partition-orchestre-astuces"],
    ],
    body: `
## Cao độ ghi và cao độ thực
Với piano, nốt ghi trên khuông là nốt nghe thấy. Nhưng nhiều nhạc cụ hơi được ghi theo cách khác: người chơi đọc **cao độ ghi** (written pitch) và nhạc cụ phát ra **cao độ thực** (concert pitch, sounding pitch) khác đi một quãng cố định. Những nhạc cụ đó gọi là **nhạc cụ dịch giọng** (transposing instruments). Lý do chủ yếu là lịch sử: người chơi cả họ nhạc cụ (ví dụ các cỡ saxophone) dùng cùng một thế bấm cho cùng một nốt ghi, dù nhạc cụ có kích thước khác nhau.

Tên nhạc cụ cho biết điều quan trọng nhất: **"nhạc cụ ở giọng X" nghĩa là khi chơi nốt ghi là Đô, nó phát ra nốt X.** Clarinet Si giáng đọc Đô → nghe Si giáng. Đây là phép [[dich-giong|dịch giọng]] được áp dụng thường trực.

## Các nhạc cụ dịch giọng thường gặp
| Nhạc cụ | Ghi Đô thì nghe | Âm thanh so với nốt ghi |
|---|---|---|
| [[clarinet]] Si giáng, trumpet Si giáng | Si giáng | thấp hơn quãng hai trưởng |
| Clarinet La | La | thấp hơn quãng ba thứ |
| [[kenh-horn|Kèn horn]] Fa, kèn Anh (cor anglais) | Fa | thấp hơn quãng năm đúng |
| [[saxophone|Saxophone]] alto Mi giáng | Mi giáng | thấp hơn quãng sáu trưởng |
| Saxophone tenor Si giáng | Si giáng | thấp hơn quãng chín trưởng |
| Piccolo, celesta | Đô | cao hơn một quãng tám |
| Contrabass, contrabassoon, guitar | Đô | thấp hơn một quãng tám |

Các quãng của clarinet, horn Fa và saxophone alto được nhiều nguồn hướng dẫn xác nhận (Stonekick, Soundslice). Theo ConductIt, trong dàn kèn hơi các giọng chính là Si giáng, Mi giáng và Fa, còn trong tổng phổ dàn nhạc thường gặp nhất là Si giáng, Fa và La. Nhạc cụ dịch quãng tám (octave transposers) chỉ để tránh quá nhiều dòng kẻ phụ; tên nốt không đổi nên chúng thường không được coi là "dịch giọng" theo nghĩa hẹp.

::staff treble k:2# D4 E4 F#4 G4 A4 | Bè clarinet Si giáng ghi ở Rê trưởng (2 dấu thăng)...

::staff treble C4 D4 E4 F4 G4 | ...nghe thực tế là Đô trưởng - mọi nốt thấp hơn một cung

::staff treble G4 A4 B4 C5 D5 | Bè horn Fa ghi Sol trưởng - nghe là Đô trưởng, thấp hơn quãng năm đúng

Quy tắc ngón tay: muốn biết bè ghi nằm ở giọng nào, lấy giọng thực rồi **cộng** quãng của nhạc cụ (Đô trưởng thực → Rê trưởng cho clarinet Si giáng; La trưởng cho saxophone alto). Muốn đọc ra âm thanh thực, **trừ** quãng đó.

Lưu ý lịch sử: tổng phổ cổ điển và lãng mạn ghi kèn horn và trumpet ở nhiều giọng khác nhau (horn in E, in D...), thường không có hoá biểu. Một số tổng phổ hiện đại in toàn bộ ở cao độ thực (score in C); hãy đọc ghi chú đầu tổng phổ trước.

## Thứ tự các bè trong tổng phổ
Tổng phổ (full score) xếp các bè theo họ nhạc cụ từ trên xuống. Theo Andrew Hugill và Beat Kitchen, thứ tự chuẩn của [[dan-nhac-giao-huong|dàn nhạc giao hưởng]] là:
1. **Bộ gỗ (woodwinds):** piccolo, flute, oboe, kèn Anh, clarinet, clarinet bass, bassoon, contrabassoon.
2. **Bộ đồng (brass):** horn, trumpet, trombone, tuba (horn đứng trên trumpet dù âm vực thấp hơn).
3. **[[bo-go-dan-nhac|Bộ gõ]] (percussion):** timpani trước, rồi các nhạc cụ gõ khác.
4. **Harp, piano, celesta; nghệ sĩ độc tấu và giọng hát** đặt ngay trên bộ dây.
5. **Bộ dây (strings):** violin I, violin II, viola, cello, contrabass.

Các nhóm được nối bằng ngoặc vuông ở lề trái. Trang đầu ghi tên đầy đủ, các trang sau ghi tên viết tắt; bè nào nghỉ dài có thể bị lược khỏi trang (Beat Kitchen). Vị trí một số nhạc cụ thay đổi theo nhà soạn nhạc và thời kỳ, nên đừng học thuộc máy móc.

## Khoá Đô trong tổng phổ
Ngoài [[khoa-sol|khoá Sol]] và [[khoa-fa|khoá Fa]], tổng phổ dùng [[khoa-do|khoá Đô]]: **khoá alto** (Đô giữa ở dòng 3) cho viola; **khoá tenor** (Đô giữa ở dòng 4) cho các đoạn cao của cello, bassoon và trombone.

::staff alto C4 D4 E4 F4 G4 | Khoá alto - dòng giữa là Đô giữa (C4), khoá thường trực của viola

## Mẹo cho người chơi piano
- **Bản thu gọn (piano reduction):** bản đệm concerto hoặc opera đã quy mọi bè về cao độ thực; khi đối chiếu với tổng phổ, nhớ rằng nốt ghi ở bè "Cl." (clarinet) trong tổng phổ không phải nốt bạn nghe.
- Khi đệm cho học sinh chơi clarinet hay saxophone, hãy hỏi "nốt Đô của em là nốt gì trên piano?" thay vì so tên nốt.
- Đọc tổng phổ theo lớp: trước hết bè trầm (cello, contrabass) và giai điệu, sau đó thêm hoà âm của bộ đồng và bộ gỗ.

## Luyện tập
1. Viết lại câu "Twinkle" ở Đô trưởng cho clarinet Si giáng, horn Fa, saxophone alto.
2. Đàn trên piano một bè clarinet in sẵn, vừa đàn vừa hạ một cung.
3. Lấy trang đầu một bản giao hưởng của Mozart, khoanh tròn từng họ nhạc cụ, xác định nhạc cụ nào dịch giọng.

## Lỗi thường gặp
- Dịch ngược chiều (cộng thay vì trừ).
- Quên rằng hoá biểu của bè dịch giọng cũng thay đổi.
- Đọc viola bằng khoá Sol vì không để ý biểu tượng khoá Đô.

Xem thêm: [[dich-giong]], [[khoa-do]], [[dan-nhac-giao-huong]], [[clarinet]].
`,
  },
]

import type { Article } from '../wiki'

/**
 * Phức điệu theo hệ thống Fux, đọc từ nguyên văn bản dịch Anh *Practical Rules for Learning Composition*
 * (bản rút gọn của *Gradus ad Parnassum*). Các bài năm loại hai bè có sẵn ở polyphony.ts; loạt này bổ sung
 * những gì sách nói thêm: quy tắc chung, chi tiết từng loại, ba – bốn bè, mô phỏng, fugue, đối âm kép, đáp đề.
 */
const SRC: [string, string] = ['J. J. Fux, Practical Rules for Learning Composition — bản dịch Anh của Gradus ad Parnassum (London: J. Preston, [1791?]), bản quét Internet Archive', 'https://archive.org/details/practicalrulesfo00fuxj']
const IMSLP: [string, string] = ['IMSLP — Gradus ad Parnassum (Fux): bản Latin 1725 và các bản dịch', 'https://imslp.org/wiki/Gradus_ad_Parnassum_(Fux,_Johann_Joseph)']
const WIKI: [string, string] = ['Wikipedia — Gradus ad Parnassum', 'https://en.wikipedia.org/wiki/Gradus_ad_Parnassum']

export const fux: Article[] = [
  {
    slug: 'he-thong-fux-gradus-ad-parnassum',
    title: 'Hệ thống Fux: Gradus ad Parnassum theo nguyên văn',
    category: 'polyphony',
    also: ['musicology'],
    aliases: ['hệ thống Fux', 'Gradus ad Parnassum', 'Practical Rules for Learning Composition', 'lộ trình Fux', 'phương pháp Fux', 'Fux nguyên văn'],
    summary: 'Trang mở đầu của hệ thống Fux, đọc thẳng từ bản dịch Anh thế kỷ 18 của Gradus ad Parnassum (Practical Rules for Learning Composition): nguồn và những điểm chưa chắc về ấn bản, cấu trúc năm chương của sách, các khái niệm nền (đối âm đơn giản và hoa mỹ, cantus firmus ở trên hay ở dưới), bảng thuật ngữ cổ – hiện đại, các mốc của truyền thống và lộ trình học trong thư viện.',
    refs: [
      SRC, IMSLP, WIKI,
      ['Wikipedia — Johann Joseph Fux', 'https://en.wikipedia.org/wiki/Johann_Joseph_Fux'],
      ['Wikipedia — Gioseffo Zarlino', 'https://en.wikipedia.org/wiki/Gioseffo_Zarlino'],
      ['Jeppesen, Counterpoint: The Polyphonic Vocal Style of the Sixteenth Century (Internet Archive)', 'https://ia801707.us.archive.org/2/items/counterpointpoly00jepp/counterpointpoly00jepp.pdf'],
    ],
    body: `
## Nguồn của loạt bài
- **Nguyên bản**: [[johann-joseph-fux|Johann Joseph Fux]] (1660 – 1741), *Gradus ad Parnassum* ("Những bậc thang lên núi Parnassus"), tiếng Latin, Vienna 1725, đề tặng hoàng đế Charles VI — người Fux phục vụ làm nhạc trưởng triều đình. Phần thực hành viết dưới dạng đối thoại thầy Aloysius – trò Josephus (xem [[doi-am-5-loai]]).
- **Tài liệu dùng ở đây**: bản tiếng Anh *Practical Rules for Learning Composition, translated from a work intitled Gradus ad Parnassum*, khắc bản J. Caulfield. Đây là bản **rút gọn**: bỏ hình thức đối thoại, giữ quy tắc và ví dụ nhạc.
- **Chưa chắc về ấn bản**: thư mục Thư viện Quốc hội Mỹ ghi London, J. Preston, năm *[1791?]* (có dấu hỏi); một số thư mục khác ghi năm 1768 và người dịch là J. C. Heck — tao **chưa đối chiếu** được trang tên sách gốc, nên loạt bài chỉ ghi "bản dịch Anh thế kỷ 18".
- Bản quét là ảnh khắc đồng thế kỷ 18; chữ được nhận dạng tự động (OCR) nên một vài con số trong ví dụ bị mờ. Chỗ nào chưa đọc chắc, bài ghi rõ.

## Sách có những gì
| Chương | Nội dung | Bài trong thư viện |
|---|---|---|
| I | Đối âm hai bè: quy tắc chung về chuyển động; năm loại (nốt chọi nốt, hai nốt, bốn nốt, nối lệch phách, hoa mỹ) | [[quy-tac-chung-fux]], [[nam-loai-hai-be-fux]] |
| II | Đối âm ba bè: hợp âm ba "hoàn hảo", năm loại ở ba vị trí của cantus | [[doi-am-ba-be-fux]] |
| III | Đối âm bốn bè: bè thứ tư là bè nhân đôi; thứ tự xếp các quãng thuận; đi kèm nghịch âm | [[doi-am-bon-be-fux]] |
| IV | Mô phỏng (imitation) | [[mo-phong-va-fugue-hai-be-fux]] |
| V | Fugue hai, ba, bốn bè; kết chính thức và kết đánh lừa | [[mo-phong-va-fugue-hai-be-fux]], [[fugue-ba-bon-be-fux]] |
| Tiếp | Đối âm kép ở quãng 8, 10, 12; đảo ngược chiều | [[doi-am-kep-fux]] |
| Tiếp | Fugue có đối đề, fugue trên cantus firmus, fugue chromatic, fugue ba chủ đề | [[fugue-doi-de-va-nhieu-chu-de-fux]] |
| Phụ lục | Biến tấu (diminution), nốt sớm, quy tắc đáp đề, chỗ đặt nốt treo theo nhịp, mẫu phong cách *a cappella* | [[dap-de-va-trang-tri-fux]] |

## Hai cặp khái niệm nền
- **Đối âm đơn giản** (*plain, simple*): các bè cùng trường độ, "nốt chọi nốt", **chỉ dùng thuận âm**. **Đối âm hoa mỹ** (*figurative*): trường độ khác nhau, thuận xen nghịch.
- Giai điệu cho sẵn có thể tự nghĩ ra hoặc lấy từ một bài thánh ca; khi đó gọi là **[[cantus-firmus|canto fermo]]**. Cantus ở bè dưới thì gọi là *contrapunto sopra il soggetto* (đối âm **trên** chủ đề); ở bè trên thì là *contrapunto sotto il soggetto* (đối âm **dưới** chủ đề).

## Thuật ngữ của bản dịch
| Bản dịch thế kỷ 18 | Nghĩa hiện nay | Tiếng Việt |
|---|---|---|
| Concord / Discord | consonance / dissonance | [[thuan-nghich|thuận / nghịch]] |
| Perfect concord: 8, 5 · imperfect: 3, 6 | perfect / imperfect consonance | thuận hoàn toàn / không hoàn toàn |
| Regular (similar), contrary, oblique motion | similar, contrary, oblique | [[quang-va-chuyen-dong-doi-am|cùng chiều, ngược chiều, chuyển động xiên]] |
| Semibreve, minum, crotchet, quaver | whole, half, quarter, eighth note | nốt tròn, trắng, đen, móc đơn |
| Syncopation (of discords) | suspension | [[doi-am-loai-4|nốt treo]] |
| Mi against Fa | tritone / cross relation | âm hưởng ba cung, đối sai |
| Harmonical triad 1 · 3 · 5 | triad | [[hop-am-ba|hợp âm ba]] |
| Sharp / flat third | major / minor third | quãng 3 trưởng / thứ |
| Decime, Duodecime | tenth, twelfth | quãng 10, quãng 12 |
| Formal / fictitious cadence | authentic / deceptive cadence | [[cau-ket|kết chính thức / kết đánh lừa]] |
| Guide / Answer | subject (dux) / answer (comes) | chủ đề / đáp đề |
| Contra subject | countersubject | đối đề |
| Treble, Counter Tenor, Tenor, Bass | soprano, alto, tenor, bass | S, A, T, B |

## Các mốc của truyền thống
| Năm | Tác phẩm | Ý nghĩa |
|---|---|---|
| 1558 | Zarlino, *Le istitutioni harmoniche* | Giải thích lệnh cấm quãng 5, [[dan-giong|quãng 8 song song]]; coi hợp âm ba là nền |
| 1725 | Fux, *Gradus ad Parnassum* (tiếng Latin, Vienna) | Phương pháp **năm loại** — đối thoại giữa thầy Aloysius (đại diện [[giovanni-pierluigi-da-palestrina|Palestrina]]) và trò Josephus |
| Thế kỷ 18 | Bản dịch Anh *Practical Rules for Learning Composition* | Bản rút gọn dùng cho loạt bài này |
| 1931 | Jeppesen, *Counterpoint* (tiếng Đan Mạch; tiếng Đức 1935, tiếng Anh 1939) | Sửa nhiều chỗ của Fux theo đúng phong cách Palestrina — xem [[phong-cach-palestrina]] |
Trường phái Nga – Việt Nam (Taneyev) là một hệ thống riêng: [[phuc-dieu-nghiem-khac]].

## Lộ trình
1. [[doi-am]] — đối âm là gì; [[doi-am-5-loai]] — phương pháp năm loại và số phận cuốn *Gradus*; [[phong-cach-palestrina]] — phong cách mà Fux lấy làm mẫu.
2. [[quang-va-chuyen-dong-doi-am]] — quãng và chuyển động.
3. [[cantus-firmus]] — giai điệu cho sẵn.
4. [[quy-tac-chung-fux]] — sáu quy tắc chung và loại 1 theo nguyên văn.
5. [[doi-am-loai-1]] → [[doi-am-loai-2]] → [[doi-am-loai-3]] → [[doi-am-loai-4]] → [[doi-am-loai-5]] — luyện từng loại.
6. [[nam-loai-hai-be-fux]] — những chi tiết Fux nói thêm ở từng loại.
7. [[doi-am-ba-be-fux]] → [[doi-am-bon-be-fux]].
8. [[mo-phong-va-fugue-hai-be-fux]] — mô phỏng, luật giọng của fugue, fugue hai bè.
9. [[fugue-ba-bon-be-fux]] — bè thứ ba, thứ tư và các loại kết.
10. [[doi-am-kep-fux]] — quãng 8, 10, 12 và đảo ngược chiều; [[doi-am-kep]] — đối âm kép và canon trong nhạc Bach.
11. [[fugue-doi-de-va-nhieu-chu-de-fux]].
12. [[dap-de-va-trang-tri-fux]] — quy tắc đáp đề, trang trí, phong cách *a cappella*.
13. [[fugue]] — bước sang phức điệu tự do.

Bảng tra nhanh: [[cong-thuc-doi-am-fux]].
`,
  },
  {
    slug: 'quy-tac-chung-fux',
    title: 'Sáu quy tắc chung và đối âm nốt chọi nốt (Fux)',
    category: 'polyphony',
    aliases: ['quy tắc chung của Fux', 'sáu quy tắc Fux', 'mi contra fa', 'quãng 5 ẩn Fux', 'plain counterpoint'],
    summary: 'Chương I của Fux mở bằng các quy tắc áp dụng cho mọi kiểu viết: chuyển động ngược chiều và xiên dùng tự do, cùng chiều chỉ để đi vào thuận không hoàn toàn; quãng 5/8 ẩn; không nhảy vào quãng 8 hay đồng âm; ưu tiên thuận không hoàn toàn; giữ đúng giọng; tránh mi chọi fa; luôn giữ điều độ, đa dạng và giai điệu đẹp. Tiếp theo là ba điểm của đối âm nốt chọi nốt hai bè, kèm ví dụ minh hoạ trên cantus Dorian của Fux.',
    refs: [SRC, ['Wikibooks — Species counterpoint in two voices', 'https://en.wikibooks.org/wiki/Music_Theory/Counterpoint/Species_Counterpoint/In_Two_Voices']],
    body: `
## Ba kiểu chuyển động
Bản dịch gọi ba kiểu chuyển động là *regular* (cùng chiều), *contrary* (ngược chiều) và *oblique* (xiên: một bè đứng, một bè đi). Bài [[quang-va-chuyen-dong-doi-am]] trình bày đủ bốn kiểu theo cách gọi hiện đại (thêm song song).

## Sáu quy tắc chung
| # | Quy tắc (theo bản dịch) | Lý do Fux đưa ra |
|---|---|---|
| 1 | **Ngược chiều và xiên** dùng cho mọi bước đi; **cùng chiều** chỉ khi đi từ thuận hoàn toàn sang không hoàn toàn, hoặc từ không hoàn toàn sang không hoàn toàn. Ở đây chỉ **8 và 5** là thuận hoàn toàn; **3 và 6** là không hoàn toàn | Để tránh quãng 5 và quãng 8 liên tiếp, **lộ hay ẩn**. Quãng ẩn lộ ra khi điền các nốt trung gian vào khoảng nhảy |
| 2 | Không đi vào quãng 8 hay đồng âm **bằng bước nhảy** — khi bè dưới lên một bậc mà bè trên nhảy xuống, **dù là ngược chiều** | (Sách chỉ cho ví dụ) |
| 3 | **Thuận không hoàn toàn** được ưu tiên hơn thuận hoàn toàn | Vì "hài hoà hơn" |
| 4 | Các nốt phải hợp với **bản chất của giọng** (điệu thức) | — |
| 5 | Tránh hết mức có thể **quan hệ "mi chọi fa"** (*inharmonic relation*) | Tức quãng ba cung và đối sai (quan hệ chéo) giữa hai bè |
| 6 | Luôn giữ **điều độ, đa dạng và giai điệu đẹp** | Quy tắc bao trùm |
::scan fux 2.2 | Quy tắc 2: đi vào quãng 8 và đồng âm bằng bước nhảy

::staff treble E4+C5=6 G4+D5=5 | Quãng 5 ẩn: hai bè cùng đi lên từ quãng 6 vào quãng 5. Điền nốt trung gian (bè dưới E – F – G, bè trên C – D) sẽ lộ ra chuỗi quãng song song mà quy tắc 1 muốn tránh
::scan fux 2.1 | Quãng 5 ẩn (*Hidden Fifths*) và quãng 8 ẩn (*Hidden Eights*) trong sách

Bốn quy tắc chuyển động quen thuộc trong các giáo trình hiện đại (ví dụ Wikibooks) là cách viết gọn của quy tắc 1: từ hoàn toàn sang hoàn toàn chỉ bằng ngược chiều hoặc xiên; từ hoàn toàn sang không hoàn toàn, từ không hoàn toàn sang không hoàn toàn — mọi chuyển động; từ không hoàn toàn sang hoàn toàn — ngược chiều hoặc xiên.

## Đối âm nốt chọi nốt hai bè
Ba điểm chính, theo đúng thứ tự trong sách:
1. **Mỗi nốt cantus có thuận âm riêng của nó.** Cantus ở dưới thì tính quãng **lên**, cantus ở trên thì tính quãng **xuống**.
2. **Mở và kết bằng thuận hoàn toàn.**
3. **Nốt áp chót**: cantus ở dưới cần **quãng 6 trưởng**; cantus ở trên cần **quãng 3 thứ** (đảo của 6 trưởng). Ví dụ của sách ở giọng Re ("D, la, sol, re").
::scan fux 3.1 | Hai bài mẫu nốt chọi nốt của sách: đối âm trên cantus và dưới cantus — áp chót 6 → 8 và 3 → 1

::staff treble D4+A4=5 F4+A4=3 E4+G4=3 D4+A4=5 G4+B4=3 F4+C5=5 A4+C5=3 G4+B4=3 F4+D5=6 E4+C#5=6 D4+D5=8 | Minh hoạ (tự soạn, đã kiểm theo sáu quy tắc): đối âm ở trên cantus Dorian của Fux D – F – E – D – G – F – A – G – F – E – D. Mở 5, kết 8; áp chót 6 trưởng E – C#; mọi lần vào quãng 5, 8 đều bằng ngược chiều hoặc xiên

Kiểm từng bước của ví dụ:
| Bước | Chuyển động | Quãng | Quy tắc |
|---|---|---|---|
| 1 → 2 | Xiên | 5 → 3 | Được |
| 3 → 4 | Ngược chiều | 3 → 5 | Vào hoàn toàn bằng ngược chiều |
| 4 → 5 | Cùng chiều | 5 → 3 | Hoàn toàn sang không hoàn toàn: được |
| 8 → 9 | Ngược chiều | 3 → 6 | Được |
| 9 → 10 | Cùng chiều | 6 → 6 | Không hoàn toàn sang không hoàn toàn: được |
| 10 → 11 | Ngược chiều | 6 → 8 | Áp chót 6 trưởng mở ra quãng 8 |

Luyện kỹ loại này: [[doi-am-loai-1]]. Các loại sau: [[nam-loai-hai-be-fux]]. Toàn bộ hệ thống: [[he-thong-fux-gradus-ad-parnassum]].
`,
  },
  {
    slug: 'nam-loai-hai-be-fux',
    title: 'Năm loại đối âm hai bè theo nguyên văn Fux',
    category: 'polyphony',
    aliases: ['năm loại theo Fux', 'nota cambiata Fux', 'đối âm hoa mỹ Fux', 'florid counterpoint', 'syncopation Fux', 'nốt treo theo Fux'],
    summary: 'Những gì bản dịch Practical Rules nói về loại 2 – 5 ở hai bè, vượt ngoài phần cơ bản: ô áp chót 5 – 6 hay 5 – 3, cấm hai bước nhảy quãng 3 cùng chiều, lặng nửa ô ở đầu, nhịp ba 3 : 1; quy tắc năm nốt đen, lấp quãng 3, nota cambiata; nốt treo như "sự trì hoãn của thuận âm", bảng giải quyết ở trên và ở dưới, vì sao không treo từ đồng âm hay quãng 8; đối âm hoa mỹ như "phần tu từ" của âm nhạc.',
    refs: [SRC, ['Open Music Theory 2 — Fourth-species counterpoint', 'https://viva.pressbooks.pub/openmusictheory/chapter/fourth-species-counterpoint/']],
    body: `
Bài này bổ sung cho năm bài luyện tập [[doi-am-loai-1]] … [[doi-am-loai-5]] (viết theo các giáo trình hiện đại). Ở đây chỉ ghi những gì **sách của Fux nói** — kể cả chỗ khác với giáo trình hiện đại.

## Loại 2: hai nốt chọi một
- Dùng ở **nhịp hai**: phách đầu mạnh, phách sau nhẹ. **Nốt trắng đầu phải thuận**; nốt thứ hai thuận hoặc nghịch. Nghịch âm chỉ được dùng khi **đi liền bậc** từ thuận sang thuận; **nhảy thì chỉ dùng thuận**.
::scan fux 3.2 | *Diminutio*: nốt nghịch ở phách nhẹ đi liền bậc giữa hai thuận âm
- **Quy tắc 1 — ô áp chót**: cantus ở dưới thì hai nốt là **quãng 5 rồi quãng 6 trưởng**; cantus ở trên thì **quãng 5 rồi quãng 3 thứ**.
- **Quy tắc 2**: tránh **những bước nhảy quãng 3 liên tiếp cùng chiều** — chúng sinh ra quãng 5 / 8 song song bị cấm. Nhảy lớn hơn (quãng 4, 5, 6) thì được, vì "ít chướng tai hơn".
::scan fux 3.3 | Ex. 1 — hai bước nhảy quãng 3 liền sinh quãng 5, 8 song song ("bad"); Ex. 2 — bước nhảy lớn hơn ("good")
- **Quy tắc 3**: cantus ở trên thì đối âm **mở bằng lặng nửa ô**.
- Khi hai bè đi sát đến mức không còn chỗ để đi ngược chiều, được dùng **bước nhảy quãng 6 hoặc quãng 8**.
::scan fux 3.4 | Bước nhảy quãng 6 hay 8 khi hai bè đi sát nhau
::scan fux 4.1 | Bài mẫu loại 2: đối âm trên và dưới cantus
- **Nhịp ba** (ba nốt chọi một): nốt ở giữa có thể là nghịch.
::scan fux 4.2 | Ba nốt chọi một ở nhịp 3/2

## Loại 3: bốn nốt chọi một
- Năm nốt đen đi liền bậc lên hoặc xuống: **nốt 1, 3, 5 thuận; nốt 2, 4 nghịch**.
- Nhưng có lúc nốt 2 và 4 thuận còn **nốt 3 nghịch** — để **lấp đầy một quãng 3**. Quy về dạng gốc thì đó vẫn là nốt lướt hợp lệ.
- **Nota cambiata** (*nốt đổi*): đi từ nghịch sang thuận **bằng bước nhảy**. Fux giải thích: bước nhảy quãng 3 từ nốt 2 sang nốt 3 "lẽ ra" nằm ở nốt 1 sang nốt 2, khi đó nốt 2 là quãng 6 (thuận). Lấp quãng 3 đó lại thì cần móc đơn — mà **móc đơn không dùng trong phong cách này**, nên hình cambiata được ưa hơn.
- Ô áp chót có mẫu riêng cho cantus ở dưới và ở trên (sách chỉ cho bằng ví dụ nhạc).
::scan fux 4.3,4.4 | Các mẫu bốn nốt đen Ex. 1 – 8 của sách, có cả mẫu với cantus ở trên (Ex. 8)
::scan fux 5.1 | Bài mẫu loại 3: đối âm trên và dưới cantus

::staff treble C4+C5=8 B4=7 G4=5 A4=6 / D4+B4=6 | Nota cambiata (8 – 7 – 5 – 6): nốt B nghịch nhảy xuống G thay vì đi liền bậc — Fux coi đây là bước nhảy "dời chỗ" của một nốt lướt

## Loại 4: nối lệch phách
- Nối lệch phách (*syncopation*) có hai dạng: **thuận** — cả phách mạnh lẫn nhẹ đều thuận; **nghịch** — nốt ở phách nhẹ thuận, nốt nối sang phách mạnh **thành nghịch**.
::scan fux 5.2 | Ex. 1 — nối lệch phách thuận (*Concords*); Ex. 2 — nối lệch phách nghịch (*Discords*)
- Ở các loại trước, nghịch âm chỉ là nốt lướt; ở loại này nó "**giữ vai chính trong hoà âm**" và **phải giải quyết xuống một bậc** vào thuận âm kế tiếp.
- Fux nói rõ: **nghịch âm thật ra chỉ là sự trì hoãn của thuận âm** — bỏ dấu nối đi thì thấy ngay chuỗi thuận âm đứng sau.

| Cantus ở dưới (đối âm treo ở trên) | Cantus ở trên (đối âm treo ở dưới) |
|---|---|
| 2 → 1 | 2 → 3 |
| 4 → 3 | 4 → 5 |
| 7 → 6 | 7 → 8 |
| 9 → 8 | 9 → 10 |
::scan fux 5.3 | Các cách giải quyết nghịch âm treo xuống một bậc theo bảng trên
::scan fux 6.2 | Các nối lệch phách ở bè dưới và "The same inverted"

- Vì nghịch âm chỉ là trì hoãn, **không được treo từ đồng âm sang quãng 2, hay từ quãng 8 sang quãng 9**: bỏ dấu nối sẽ lộ ra hai đồng âm hay hai quãng 8 liền nhau.
::scan fux 6.1 | "Bad": treo 1 – 2 – 1 và 8 – 9 – 8 — bỏ dấu nối lộ ra đồng âm và quãng 8 liền
- **Ô áp chót**: cantus ở dưới thì dùng **7 → 6**; cantus ở trên thì dùng **2 → 3**, rồi vào đồng âm.
- **Nối lệch phách ở mọi ô**, nhiều nhất có thể trong chừng mực tiến hành đúng, đa dạng và giai điệu cho phép.
::scan fux 6.3 | Bài mẫu loại 4: áp chót 7 → 6 (cantus ở dưới) và 2 → 3 (cantus ở trên)
- Sách còn chỉ những kiểu nối khác (thay dấu nối bằng **dấu chấm dôi** cho "chuyển động sinh động hơn"; chen móc đơn — **chỉ ở nốt đen thứ hai và thứ tư** của ô) và nói rõ chúng thuộc về loại 5.
::scan fux 7.1 | Các kiểu nối khác: thay dấu nối bằng dấu chấm dôi, chen móc đơn — "good", "bad"

**Chỗ cần lưu ý**: bảng trên chép đúng bản dịch, gồm cả 4 → 5 và 7 → 8 ở bè dưới. Các giáo trình hiện đại (bảng ở [[doi-am-loai-4]]) chỉ coi **2 – 3** và **9 – 10** là chuẩn, 4 – 5 tuỳ sách, 7 – 8 thường bị cấm. Tao chưa đối chiếu đoạn này với nguyên bản Latin.

## Loại 5: đối âm hoa mỹ
- Fux gọi đây là "**phần trang trí và tu từ của âm nhạc**": hỗn hợp mọi loại trước — nốt chấm, nốt nối, thuận xen nghịch, nhiều kiểu trường độ.
- Một điều sách nhấn mạnh: đặt **hai nốt đen ở đầu ô mà không có nối lệch phách** làm giai điệu nghe như **sắp kết**, cắt đứt dòng chảy. Muốn giữ chuyển động liên tục thì hoặc nối lệch phách, hoặc thêm hai nốt đen nữa cho đủ ô.
::scan fux 7.2 | "Indifferent" và "Better": hai nốt đen đầu ô, và cách nối cho giai điệu chảy tiếp
- Phần thực hành và các mẫu nhịp điệu: [[doi-am-loai-5]].
::scan fux 7.3,7.4 | Hai bài mẫu đối âm hoa mỹ: đối âm trên và dưới cantus

Tiếp theo: [[doi-am-ba-be-fux]]. Toàn bộ hệ thống: [[he-thong-fux-gradus-ad-parnassum]].
`,
  },
  {
    slug: 'doi-am-ba-be-fux',
    title: 'Đối âm ba bè theo Fux',
    category: 'polyphony',
    aliases: ['ba bè theo Fux', 'three-part counterpoint Fux', 'harmonical triad', 'hợp âm ba hoàn hảo'],
    summary: 'Chương II: vì sao ba bè là kết cấu "hoàn hảo nhất" (hợp âm ba 1 – 3 – 5 không cần thêm nốt), các nhận xét bổ sung — đủ hợp âm ba ở mọi ô trừ khi vì giai điệu hay tránh song song, chừa chỗ khi bè trầm đi lên, quy tắc chuyển động áp dụng cả bè giữa nhưng được nới — và từng loại ở ba bè: nốt trắng nhảy quãng 3 để đủ hợp âm, bốn nốt đen chọi hai nốt tròn, quãng 5 "che" bởi nốt treo chỉ được ở bè giữa, dấu lặng chặn quãng 5 ẩn.',
    refs: [SRC, ['Open Music Theory 2 — Three-part counterpoint (tham khảo)', 'https://viva.pressbooks.pub/openmusictheory/']],
    body: `
## Vì sao ba bè "hoàn hảo nhất"
Fux lập luận: **[[hop-am-ba|hợp âm ba]] 1 – 3 – 5** gồm đúng ba nốt, nên ba bè dùng được trọn hợp âm mà **không cần thêm nốt nào**; thêm bè nữa chỉ là **nhân đôi** một nốt đã có. Đối âm ba bè là "ba bè ngang hàng chọi nhau", theo **mọi quy tắc của hai bè**, cộng thêm các nhận xét sau.

## Ba nhận xét bổ sung
1. **Đặt đủ hợp âm ba ở mỗi ô** trừ khi không thể. Đôi khi chọn quãng 6 hay quãng 8 thay cho hợp âm ba — để **giai điệu đẹp hơn** hoặc để **tránh hai quãng 8 / 5 liền nhau**.
::scan fux 8.1 | Ex. 1 – 5: chọn quãng cho ba bè — "good" và "not so good"
2. Khi **bè trầm đi lên liền bậc**, phải chừa đủ chỗ giữa các bè để chúng đi **ngược chiều** được.
3. Quy tắc chuyển động áp dụng cho **cả bè giữa** chứ không riêng hai bè ngoài. Nhưng khi nhiều bè, để tránh lỗi lớn hơn, **không phải lúc nào cũng giữ trọn** được.

## Những ngoại lệ Fux tự giải thích
- Một bước **cùng chiều vào quãng hoàn toàn** ở ví dụ "không tránh được": đổi sang ngược chiều thì lại thành thuận không hoàn toàn đi cùng chiều vào hoàn toàn, và bè giữa sẽ thành **đồng âm** với bè trầm — mà **đồng âm kém hài hoà hơn quãng 8**.
- **Không vượt quá năm dòng kẻ** của khuông mỗi bè nếu không cần thiết.
- Bè trên đi từ quãng 10 vào quãng 8 bằng cùng chiều ở hai ô cuối **được chấp nhận**, vì quãng 10 không dùng được ở kết.
::scan fux 9.3 | Ex. a, b: hai cách viết đoạn kết ba bè sách đưa ra
- Chuỗi hợp âm 6 đi lên **ở phách mạnh** chướng tai hơn ở phách nhẹ.
- Ví dụ của mỗi loại đều viết **ba lần**, cantus lần lượt ở bè trên, giữa và dưới.
::scan fux 9.1,9.2 | Loại 1 ba bè: cantus ở bè trên (Ex. 1), giữa (Ex. 2), dưới (Ex. 3)

## Từng loại ở ba bè
| Loại | Điều Fux nói thêm |
|---|---|
| 1 | Như trên; ở một ô Fux bỏ hợp âm ba vì **quãng 8 ở bè trên hay hơn về giai điệu** |
| 2 | Để đủ hợp âm ba và tránh hai quãng 5, nốt trắng **được nhảy quãng 3**. Gần cuối có chỗ dùng **nối lệch phách** (trái với loại 2) vì nếu không sẽ ra đồng âm hoặc quãng 8 "trống hoà âm"; quãng **3 trưởng ở kết** dùng để tránh hai quãng 5 |
| 3 | **Bốn nốt đen chọi hai nốt tròn** (một bè đen, hai bè tròn). Chủ yếu xét **nốt ở phách mạnh**: không đặt được hợp âm ba ở nốt mạnh đầu thì ít nhất ở nốt thứ hai, thứ ba. Có thể cho một bè đen, một bè trắng, một bè tròn |
| 4 | Bè thứ ba nhận **đúng thuận âm nó sẽ có nếu không có nốt treo** — kể cả khi bè trầm treo. **Quãng 5 liên tiếp được "che" bởi nốt treo chỉ chấp nhận ở bè giữa**; quãng 8 thì không, vì quãng 8 kém hài hoà hơn quãng 5 |
| 5 | Mọi quy tắc trên trong chừng mực có thể; **dùng ngược chiều ở hầu hết các ô** giúp bài viết dễ |
::scan fux 10.1,10.2 | Loại 2 ba bè: Ex. 1 – 3, cantus đổi chỗ qua ba bè
::scan fux 11.1,11.2,11.3,11.4 | Loại 3 ba bè: bốn nốt đen chọi hai nốt tròn, Ex. 1 – 5
::scan fux 12.2,12.3 | Loại 4 ba bè: Ex. 1 – 4, kể cả khi bè trầm treo (Ex. 4)
::scan fux 13.2,13.3 | Loại 5 ba bè: Ex. 1 – 3, cantus đổi chỗ qua ba bè

## Các chi tiết tinh tế ở loại 4
- Nghịch âm ở **phách nhẹ trên bè trầm đứng yên** không chỉ được phép mà "**được coi là thanh nhã**".
::scan fux 12.1 | Loại 4: *Sine Ligatura* và *Cum Ligatura* — bỏ dấu nối để thấy thuận âm đứng sau; các chuỗi 8 – 9 – 8, 5 – 6 – 5
- Quãng 7 có thể đi kèm quãng 8 khi nốt đó **thuộc chính cantus** và nốt treo cần xuất hiện ở đó.
- Bè trầm được **mở bằng dấu lặng** ở ô đầu khi không thể nối lệch phách và không loại nào khác lấp được; Fux cũng chỉ cách thay: cho **bè Alto (Counter Tenor) tạm làm bè trầm** ở ô đầu.
::scan fux 13.1 | Ex. 1 – 3: mở bè trầm bằng dấu lặng và các cách thay cho đoạn mở
- Một dấu lặng đặt đúng chỗ **chặn được hai quãng 5 ẩn** — ở loại này quãng 5 ẩn đặc biệt không được phép.

Tiếp theo: [[doi-am-bon-be-fux]].
`,
  },
  {
    slug: 'doi-am-bon-be-fux',
    title: 'Đối âm bốn bè theo Fux',
    category: 'polyphony',
    also: ['harmony'],
    aliases: ['bốn bè theo Fux', 'four-part counterpoint Fux', 'thứ tự xếp quãng thuận', 'nhân đôi nốt treo'],
    summary: 'Chương III: bè thứ tư chỉ là nhân đôi một nốt của hợp âm ba; mọi quy tắc chuyển động phải giữ giữa tất cả các cặp bè; thứ tự xếp quãng theo phép chia điều hoà (quãng 5 ở dưới, quãng 3 ở trên); vì sao nhân đôi quãng 3 tốt hơn đồng âm; cách đi kèm nốt treo — thuận âm đi kèm phải còn nguyên khi giải quyết, nhân đôi quãng 2 hơn quãng 4 — và các cách giải quyết nghịch âm khác thường.',
    refs: [SRC, ['Wikipedia — Harmonic series (music)', 'https://en.wikipedia.org/wiki/Harmonic_series_(music)']],
    body: `
## Bè thứ tư là bè nhân đôi
Bè thêm vào "**không gì hơn là nhân đôi một thuận âm đã có trong hợp âm ba**", trừ vài hợp âm. Mọi quy tắc tiến hành và chuyển động của chương trước phải giữ "nhiều nhất có thể", để có tương quan đúng **không chỉ giữa hai bè ngoài mà giữa mọi bè**.
::scan fux 14.1 | Loại 1 bốn bè: Ex. 1 – 4, cantus lần lượt ở từng bè

## Thứ tự xếp các quãng thuận
Fux suy thứ tự tự nhiên từ **phép chia điều hoà quãng 8**: chia quãng 8 sinh ra quãng 5; chia quãng 5 sinh ra quãng 3. Vì thế **quãng 5 đặt ở dưới, quãng 3 ở trên** — đúng như trật tự của [[chuoi-boi-am|chuỗi bội âm]] (âm 2 – 3 – 4 – 5: quãng 8, 5, 4, 3 trưởng). Trật tự này chỉ bị phá khi có lý do, ví dụ để tiến hành đúng từ ô này sang ô sau.
::scan fux 15.1 | Loại 2 bốn bè: Ex. 1 – 4

## Loại 3 ở bốn bè: chọn nốt nhân đôi
- Ở một ô, Fux **nhân đôi quãng 3** thay vì dùng đồng âm. Dùng đồng âm thì (1) hoà âm **thiếu**, vì đồng âm ở phách mạnh "trống hoà âm"; (2) quãng 3 hay 10 chỉ là nốt lướt ở bè trên sẽ **khó nghe ra** vì quá ngắn.
- Ở một ô khác, hai bè Tenor đi trái quy tắc chuyển động "nhưng không tránh được" vì bị bó vào bốn nốt đen; có thể sửa bằng cách **chia nốt tròn** ở bè Alto. Fux nói điều này cũng áp dụng cho các loại trước: vài **lỗi nhỏ được bỏ qua** vì cùng lý do.
::scan fux 15.2,16.1 | Loại 3 bốn bè: bốn nốt đen chọi ba bè nốt tròn, Ex. 1 – 4

## Loại 4 ở bốn bè: đi kèm nốt treo
- **Thuận âm đi kèm lúc treo phải còn nguyên lúc giải quyết** — có nối lệch phách hay không thì vẫn là cùng thuận âm đó.
- Đôi khi phải **chia nốt tròn** để giải quyết đúng, ví dụ khi **7 – 6 được đi kèm bằng quãng 5**: nếu bè đi kèm toàn nốt tròn, hoà âm không xếp đúng luật được.
::scan fux 17.1,18.1 | Ex. a – e (các cách đi kèm nốt treo), rồi bài mẫu loại 4 bốn bè Ex. 1 – 4
- Nốt treo 2 và 4 (bè trầm treo) lẽ ra đi kèm quãng 6. Khi phải nhân đôi, **nhân đôi quãng 2 tốt hơn quãng 4**: giải quyết xong quãng 2 thành **quãng 3**, hài hoà hơn quãng 6 do quãng 4 nhân đôi sinh ra.
::scan fux 18.2 | Bè trầm treo: cách nhân đôi được sách ghi "better"
- Fux ghi chú một ô thiếu nốt đi kèm "vẫn thuộc về hoà âm đầy đủ" — chấp nhận được trong bốn bè.
::scan fux 18.3,19.1,19.2 | Loại 5 bốn bè: Ex. 1 – 4

## Giải quyết nghịch âm theo cách khác
Trước khi sang chương Mô phỏng, Fux lưu ý vài nghịch âm có thể giải quyết khác thường (ví dụ quãng 4 vào **quãng 6 và 3**). Đoạn văn này trong bản quét bị mờ một phần; các trường hợp còn lại cần đối chiếu ví dụ nhạc trước khi chép.
::scan fux 19.3,19.4 | Các nghịch âm giải quyết khác thường: 9 – 6, 9 – 10, 7 – 10, 4 – 6…

## Liên hệ với hoà âm
Bốn bè của Fux là cầu nối từ đối âm sang [[luat-hoa-am-bon-be|luật hoà âm bốn bè]]: nhân đôi, trật tự quãng 5 dưới – quãng 3 trên, và nốt treo đi kèm (xem [[not-ngoai-hop-am]]).

Tiếp theo: [[mo-phong-va-fugue-hai-be-fux]].
`,
  },
  {
    slug: 'mo-phong-va-fugue-hai-be-fux',
    title: 'Mô phỏng, luật giọng của fugue và fugue hai bè (Fux)',
    category: 'polyphony',
    also: ['form'],
    aliases: ['mô phỏng theo Fux', 'imitation Fux', 'fugue hai bè', 'đáp đề giọng', 'tonal answer Fux', 'quãng 4 và quãng 5 của giọng'],
    summary: 'Chương IV – V: mô phỏng là bè sau lặp lại bè trước ở bất kỳ quãng nào, không bị bó vào cung – nửa cung hay giọng; fugue thì bè sau lặp đúng quãng, đúng loại cung – nửa cung và bị bó chặt vào giọng. Giọng được giới hạn bởi quãng 5 và quãng 4 trong quãng 8, nên chủ đề trải quãng 5 thì đáp đề trong quãng 4 và ngược lại; fugue chỉ mở bằng đồng âm, quãng 8, quãng 5. Phương pháp viết fugue hai bè từng bước: kết thứ nhất ở bậc V, thứ hai ở bậc III, stretto rồi kết cuối.',
    refs: [SRC, ['Wikipedia — Fugue (tonal and real answer)', 'https://en.wikipedia.org/wiki/Fugue']],
    body: `
## Mô phỏng
- Khi bè sau theo bè trước sau vài dấu lặng, **ở cùng các quãng**, mà **không bị bó** vào cung hay nửa cung, hay vào giọng — đó là **mô phỏng** (*imitation*).
- Không cần mô phỏng **mọi nốt** của bè trước (điều đó chỉ riêng **canon**); mô phỏng một phần chủ đề là đủ.
- Mô phỏng nên dùng **ở giữa** hơn là ở đầu bài, vì ở giữa không phải giữ giọng nghiêm ngặt.
- Mô phỏng có thể vào ở **mọi quãng**: đồng âm, 2, 3, 4, 5, 6, 7, 8.
::scan fux 20.1 | Mô phỏng ở đồng âm, quãng 2, 3, 4, 5, 6, 7 và 8
Hệ thống hoá đầy đủ (P, R, bảy hình thức mô phỏng): [[mo-phong-don-gian]]; mô phỏng toàn phần: [[canon-hai-be]].

## Fugue: định nghĩa và luật giọng
- **Fugue**: bè sau lặp lại vài nốt của bè trước **bằng đúng các quãng** và **đúng loại cung – nửa cung**, và **bị bó chặt vào quy tắc của giọng**.
- **Mỗi giọng được xác định bởi một quãng 5 và một quãng 4 nằm trong quãng 8**; chủ đề fugue phải tuân theo giới hạn đó.
- Vì vậy khi bè thứ nhất **trải quãng 5**, bè sau không được ra khỏi giọng mà phải ở **trong quãng 4** — và ngược lại. Mô phỏng thì không phải theo luật này: chỉ cần cùng bậc hay cùng bước nhảy.
- **Fugue chỉ được mở bằng các quãng tạo nên giọng: đồng âm, quãng 8, quãng 5.** Mô phỏng thì mở ở quãng nào cũng được.

| Giọng Re (Dorian) | Quãng 5 | Quãng 4 |
|---|---|---|
| Chia quãng 8 Re – Re | Re – La | La – Re |
| Chủ đề nhảy Re → La (quãng 5, bậc I → V) | | Đáp đề La → Re (quãng 4, bậc V → I) |
::scan fux 21.1 | Ex. 1 – 4: chia quãng 8 của giọng thành quãng 5 và quãng 4, và các cặp chủ đề – đáp đề tương ứng
Đây chính là cái các sách sau gọi là **đáp đề giọng** (*tonal answer*), khác **đáp đề thực** (dịch nguyên quãng 5) — xem [[fugue]].

## Phương pháp viết fugue hai bè
Fux gọi đây là "phương pháp ngắn nhưng đúng quy củ":
1. Chọn **chủ đề hợp với giọng**, ghi vào bè sẽ mở đầu; kiểm tra lại chủ đề có hợp giọng không.
2. Cho bè thứ hai lặp lại các nốt đó **ở quãng 4 hoặc quãng 5**; trong lúc đó bè thứ nhất viết những nốt hợp với bè mô phỏng **theo cách của [[doi-am-loai-5|đối âm hoa mỹ]]**.
3. Viết tiếp giai điệu vài ô rồi sắp xếp để **kết thứ nhất ở bậc V** của giọng.
4. Lấy lại chủ đề, **thường ở bè đã mở đầu**, nhưng **ở quãng khác**, sau dấu lặng một ô hay nửa ô (bỏ dấu lặng được nếu thay bằng một bước nhảy lớn).
5. Cho bè thứ hai vào lại sau vài dấu lặng, **trước khi chủ đề ở bè thứ nhất sắp kết**; viết tiếp một chút rồi **kết thứ hai ở bậc III**.
6. Đưa chủ đề vào lần nữa ở một bè, sắp xếp để bè kia mô phỏng **sớm hơn lúc đầu**, nếu được thì **chỉ sau một ô** — hai bè hợp lại và fugue khép bằng **kết cuối**.

::form Trình_bày_(I_–_V) Kết_ở_V Chủ_đề_ở_quãng_khác Kết_ở_III Stretto Kết_cuối | Sơ đồ fugue hai bè theo Fux
::scan fux 22.1 | *Fuga a 2*: kết thứ nhất ở bậc V ("Cad. in 5"), kết thứ hai ở bậc III ("Cad. in 3")

## Ba lưu ý từ các ví dụ
- Ví dụ thứ nhất cho đáp đề ở **quãng 5 trên**; ví dụ thứ hai cùng chủ đề cho đáp đề ở **quãng 4 dưới** — đúng luật "quãng 5 thì đáp trong quãng 4 và ngược lại".
::scan fux 22.2,22.3 | Hai fugue hai bè khác của sách: đáp đề ở quãng 4 dưới, rồi ở các giọng khác
- Gần cuối, nốt của chủ đề **được đổi bằng nối lệch phách**: Fux nói điều đó không chỉ được phép mà còn "có hiệu quả dễ chịu"; đôi khi phải **chia nốt** để các bè dồn sát nhau.
- Fugue ở giọng La: quãng 2 Mi – Fa ở chủ đề được đáp bằng **quãng 3 La – Đô**, vì không có cách nào khác giữ đúng loại cung – nửa cung; đáp bằng nửa cung La – Si giáng thì sẽ **sai giọng**. (Chữ "H" trong bản dịch là cách gọi nốt Si theo kiểu Đức.)

Tiếp theo: [[fugue-ba-bon-be-fux]]. Quy tắc đáp đề chi tiết ở phụ lục: [[dap-de-va-trang-tri-fux]].
`,
  },
  {
    slug: 'fugue-ba-bon-be-fux',
    title: 'Fugue ba và bốn bè, kết chính thức và kết đánh lừa (Fux)',
    category: 'polyphony',
    also: ['form'],
    aliases: ['fugue ba bè Fux', 'fugue bốn bè Fux', 'formal cadence', 'fictitious cadence', 'kết đánh lừa Fux'],
    summary: 'Cách đưa bè thứ ba vào fugue (bằng hợp âm ba hoặc bằng một nghịch âm treo — cách sau "khéo hơn"), chọn quãng vào bè cho đa dạng; kết chính thức (quãng 3 thăng → quãng 8) và kết giả (quãng 3 thứ đánh lừa tai), cách tránh kết bằng cách giữ quãng 3 thăng ở bè trên còn bè trầm đổi nốt; vì sao fugue hai bè có vẻ kết nhiều hơn và vì sao kết chính thức chỉ dùng khi chủ đề vào; thứ tự vào bè trong fugue bốn bè và cách chừa chỗ.',
    refs: [SRC, ['Wikipedia — Cadence (deceptive cadence)', 'https://en.wikipedia.org/wiki/Cadence']],
    body: `
## Bè thứ ba
- Mọi điều về ba bè (nhất là **hợp âm ba**, xem [[doi-am-ba-be-fux]]) và mọi quy tắc fugue hai bè giữ nguyên **cho đến khi bè thứ ba vào**.
- Bè thứ ba vào **sau khi hai bè đã nói xong chủ đề**, hoặc sau vài nốt thêm mà người viết nối vào giai điệu chủ đề — tuỳ phán đoán.
- Để bè thứ ba "không có vẻ tầm thường", phải đưa nó vào **bằng một hợp âm ba** hoặc **bằng một nghịch âm treo** — cách sau "được coi là khéo hơn".
- Quãng vào bè: vì **đa dạng** là điều cốt yếu, bè thứ ba thường vào ở quãng của **bè mở đầu** (tức là như chủ đề), đáp lại đáp đề; nếu bản chất các bè hợp với quãng khác hơn thì tuỳ người viết. (Câu này bị mờ một phần trong bản quét.)

## Kết chính thức và kết giả
| | Cách làm | Tác dụng |
|---|---|---|
| **Kết chính thức** (*formal cadence*) | Đóng bằng **quãng 3 thăng** (cảm âm) rồi vào **quãng 8** | Báo hiệu một chỗ kết thật |
| **Kết giả** (*fictitious cadence*) | Thay quãng 3 thăng bằng **quãng 3 thứ** | Tai chờ kết chính thức thì **bị đánh lừa** |
| **Tránh kết** | Giữ quãng 3 thăng ở **bè trên**, còn **bè trầm chọn thuận âm khác** thay cho quãng 8 | Như [[cau-ket|kết đánh lừa]] của hoà âm; Fux nói ở nhiều bè thì "càng thanh nhã" |
::scan fux 23.1 | Ex. a — kết chính thức (*Formal Cadence*); Ex. b — kết giả (*Fictitious Cadences*); Ex. c — tránh kết

- Ở fugue ba bè, **không dùng kết chính thức có quãng 3 thăng**, vì trên đó **chủ đề không vào được** — trừ khi sắp xếp được để chủ đề vào ngay.
- Khi làm được như vậy, kết chính thức và kết giả có thể đặt **không chỉ ở bậc V hay III** mà ở các bậc khác **không quá xa giọng**.
- Kết chính thức có thể được dựng ở một bậc lạ **bằng chính chủ đề**: kết rơi đúng vào **nốt đầu** (hay **nốt thứ hai**) của chủ đề. Fux gọi những kết như thế là "**đẹp và khéo**".

## Hai câu hỏi Fux tự trả lời
1. **Vì sao fugue hai bè có vẻ dùng kết nhiều hơn?** Vì "kết" ở hai bè chỉ là **7 – 6** hay **2 – 3**, ngắn — đúng hơn là **sự chuẩn bị** cho kết chính thức; chúng chỉ thành kết thật khi có **bè thứ ba**.
2. **Vì sao kết chính thức chỉ dùng khi chủ đề vào?** Vì kết chính thức nghĩa là **đóng lại**, chỉ hợp ở cuối bài hay cuối một chủ đề để báo chủ đề mới sắp đến. Còn chủ đề vào **ngay trên kết** thì cho thấy chỗ kết thật **còn xa**, và giữ được **dòng chảy liên tục** của fugue.

## Viết bè trầm cho hai bè đi xuống
Trước ví dụ fugue ba bè, Fux chỉ cách thêm bè trầm cho hai bè đi xuống bằng chuỗi nốt treo: quãng 7 giải quyết vào 6, quãng 2 vào 3; quãng 4 cũng vậy khi đã có sẵn từ trước.
::scan fux 25.1 | Thêm bè trầm cho hai bè trên đi xuống bằng chuỗi nốt treo, Ex. 1 – 2

## Ví dụ fugue ba bè: Fux tự bình
Sau khi bè thứ ba vào, hai bè trên đi kèm bằng hoà âm đúng; **Tenor lấy lại chủ đề ở quãng khác** lúc đầu; **Soprano nghỉ** để chuẩn bị vào lại ở quãng khác, **báo trước bằng một nghịch âm mạnh**, rồi đóng bằng **quãng 6 thứ**. Tenor nghỉ ba ô — vì bè trên và bè dưới đi sát quá không còn chỗ, và vì Tenor sắp lấy lại chủ đề.
::scan fux 25.2 | Fugue ba bè của sách

## Fugue bốn bè
- Mọi điều về bốn bè đã có ở [[doi-am-bon-be-fux]]; chỉ còn hỏi: **bè thứ tư theo sau bè nào?** Tuỳ người viết, nhưng **theo thói quen**: **Alto theo Soprano, Bass theo Tenor**.
- Càng nhiều bè càng phải giữ cho chúng **không chen chúc**; nếu lỡ bị chèn, phải **sửa lại ý đồ** hoặc cho một bè **nghỉ** đến khi vào lại được. Tốt nhất là **sắp xếp ngay từ đầu**.
- Hai quy tắc phòng ngừa: (1) viết một bè thì **luôn để mắt các bè khác**; (2) **chừa đủ chỗ** cho tiến hành tự do và giai điệu đẹp.
- Fugue bốn bè **không cần giữ bốn bè liên tục**: vài bè đi trong khi bè khác nghỉ để lấy lại chủ đề; gần cuối mới cả bốn bè cùng lấp đầy hoà âm.
::scan fux 26.1 | Fugue bốn bè của sách: các bè vào lần lượt, có lúc nghỉ, cuối bài mới đủ bốn bè

Tiếp theo: [[doi-am-kep-fux]].
`,
  },
  {
    slug: 'doi-am-kep-fux',
    title: 'Đối âm kép ở quãng 8, 10, 12 và đảo ngược chiều (Fux)',
    category: 'polyphony',
    aliases: ['đối âm kép theo Fux', 'double counterpoint Fux', 'đối âm ở quãng 10', 'đối âm ở quãng 12', 'al rovescio', 'al contrario riverso', 'đảo ngược chiều nghiêm'],
    summary: 'Đối âm kép theo nguyên văn Fux: ba quy tắc chung (khác trường độ, vào sau dấu lặng, không vượt giới hạn); bảng đổi quãng và quy tắc riêng ở quãng 8 (tránh quãng 5, không nhảy vào quãng 8, quãng 8 không ở phách mạnh), quãng 10 (cấm song song 3, 10, 6; quãng 4 treo ở bè trên) và quãng 12 (mọi quãng trừ 6 và 7 – 6); biến hai bè thành trio, quatuor; đảo ngược chiều "đơn" và "nghiêm" với bảng mi chọi fa.',
    refs: [SRC, ['Rothfarb (UCSB) — Invertible counterpoint', 'https://rothfarb.faculty.music.ucsb.edu/courses/103/invertible-cpt.html']],
    body: `
## Đối âm kép là gì
Lối viết "khéo léo" trong đó các bè **đổi chỗ**: bè trên thành bè dưới và ngược lại, **không sửa gì khác**, sinh ra một giai điệu kép khác hẳn về độ trầm bổng. Fux biết các tác giả khác kể cả đối âm kép ở quãng 3, 4, 5, 6 — ông bỏ qua vì chúng **hẹp và ít khác nhau**, chỉ dạy ba loại hữu ích nhất: **quãng 8, 10, 12**. Đây là chương chuẩn bị cho **fugue nhiều chủ đề**.

## Ba quy tắc chung
1. Để các chủ đề tách bạch, **trường độ phải khác nhau**: một bè nốt dài, một bè nốt ngắn.
2. Một bè vào **sau bè kia vài dấu lặng**, **không bao giờ cùng lúc**.
3. **Không vượt giới hạn** của từng loại.

## Ở quãng 8
| Quãng gốc | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Sau khi đảo | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
- **Tránh quãng 5** — đảo thành quãng 4.
- **Không nhảy vào quãng 8** — đảo thành đồng âm; vì cùng lý do **quãng 8 không đặt ở phách mạnh**.
::scan fux 27.1 | Ex. 1 — quãng 8 đảo thành đồng âm; Ex. 2 — một bài đối âm ở quãng 8 và bản đảo (*Inversion*)
- **Không vượt quá quãng 8** giữa hai bè — vượt thì chỉ ra quãng ghép, "cùng một thứ" với quãng đơn, chẳng sinh hoà âm mới.
::scan fux 28.1,28.2 | Ex. 1 – 3 và bài đối âm ở quãng 8 với các bản đảo (*Inversio*, *Inversio in Octavam inferior*)
- Nối lệch phách cũng đảo được (7 – 6 thành 2 – 3).
- Nếu ở **mọi phách mạnh** hai bè đi **ngược chiều hoặc xiên**, có thể biến hai bè thành **trio** chỉ bằng cách chép bè đối âm và **dịch xuống một quãng 10**.

## Ở quãng 10
| Quãng gốc | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Sau khi đảo | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
- **Không hai quãng 3 hay hai quãng 10 liền nhau** cùng chiều (đảo thành quãng 8 / đồng âm song song); **không hai quãng 6** (thành hai quãng 5).
- **Quãng 4 không dùng ở bè trên khi treo** — đảo thành quãng 7.
- **Không vượt quá quãng 10.**
::scan fux 28.3 | *Transpositio in Decimam inferior*: dịch đối âm xuống quãng 10
- Kết quả tương đương: **nâng cantus lên một quãng 3 và hạ đối âm một quãng 8** ("hai bậc thêm vào quãng 8 thành quãng 10").
::scan fux 31.1 | Đối âm ở quãng 10: bài gốc (Ex. 1) và bản đảo (Ex. 2)
- **Thành trio**: chép cantus nốt-đối-nốt và dịch xuống một quãng 10, hai bè kia giữ nguyên — ba bè vang **song song quãng 3 / 6**. Thêm bè thứ tư thì bè đó nghỉ, kéo dài giai điệu, hoặc vào chủ đề bằng ngược chiều.
::scan fux 31.2 | *Tricinium*: ba bè dựng từ đối âm ở quãng 10
- Nếu đảo **ngay từ đầu bài**, phải **mở bằng quãng 3 hoặc đồng âm của giọng** để bè đảo còn trong giọng; tốt hơn là đảo ở giữa bài, sau một chủ đề đúng giọng.

## Ở quãng 12
| Quãng gốc | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Sau khi đảo | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
- Dùng được **mọi quãng trừ quãng 6** (đảo thành 7) **và nốt treo 7 – 6** (thành 6 – 7). Không vượt quá quãng 12.
::scan fux 34.2 | Một bài đối âm ở quãng 12
- Đảo bằng cách đặt bè trên xuống **quãng 12 dưới**, cantus giữ nguyên; hoặc hạ đối âm **một quãng 8** và nâng cantus **một quãng 5**.
::scan fux 35.1,35.2 | Bản đảo ở quãng 12 của bài đối âm
- Bè đảo có vẻ sang giọng khác, nhưng đó là **giọng họ hàng**; khi nhiều bè, kết chính thức vẫn sắp đúng giọng được.
- **Muốn thành trio** (thêm đối âm ở quãng 10): **mở và kết bằng quãng 5**; chỉ đi **ngược chiều hoặc xiên**; **cấm nghịch âm treo** — riêng **quãng 6 được dùng khi treo** (ngoại lệ).
::scan fux 34.1,35.3 | Đối âm ở quãng 12 viết thành ba bè: Ex. a – c và một trio
- Kết hợp cả ba loại: dùng **quãng 5 và quãng 8 chỉ bằng ngược chiều, quãng 3 bằng xiên**, thì từ đối âm ở quãng 12 rút ra được cả đối âm ở quãng 8 và 10 — một bản hai bè "**duetto**" viết đúng luật dễ dàng thành **trio** hay **quatuor**.

## Đảo ngược chiều
Bài không có nghịch âm treo có thể đảo theo **chiều ngược** bằng hai cách:
| Tên | Cách làm |
|---|---|
| **Ngược chiều đơn** (*al rovescio*) | Nốt đi lên thành đi xuống, **không giữ loại cung – nửa cung** |
| **Ngược chiều nghiêm** (*al contrario riverso*) | Đảo sao cho **mi luôn chọi fa**: nửa cung đáp nửa cung, cung đáp cung |
::scan fux 36.3 | Ví dụ của sách ở phần đảo ngược chiều: Ex. 1 – 2

| Giọng trưởng: quãng 8 đi lên | C | D | E | F | G | A | B | C |
|---|---|---|---|---|---|---|---|---|
| Đáp bằng thang âm đi xuống từ E (bậc III) | E | D | C | B | A | G | F | E |

| Giọng thứ: quãng 8 đi lên | A | B | C | D | E | F | G | A |
|---|---|---|---|---|---|---|---|---|
| Đáp bằng thang âm đi xuống từ G (bậc VII) | G | F | E | D | C | B | A | G |
Nhận xét của người biên soạn: ở cả hai bảng, trục đối xứng là **nốt Re** (D ↔ D), nên nửa cung E – F được đáp bằng C – B và B – C bằng F – E. Sách nói "nếu một bè mở bằng E hoặc C thì bè kia đáp bằng C hoặc E" (giọng thứ), khớp với bảng; câu tương ứng ở giọng trưởng bị lệch chữ trong bản quét.

Fux dặn: bài nào cũng đảo được, nhưng không phải lần đảo nào cũng cho giai điệu đẹp — phải dùng **thận trọng**, kẻo "khoe nhiều kỹ xảo" mà **giai điệu chịu thiệt**.
::scan fux 39.1,39.2 | Ex. 1 — *Al Roverscio*, Ex. 2 — *Al Contrario Riverso*; tiếp theo là một bài dùng đảo ngược chiều

Đối âm kép trong nhạc Bach: [[doi-am-kep]]. Tiếp theo: [[fugue-doi-de-va-nhieu-chu-de-fux]].
`,
  },
  {
    slug: 'fugue-doi-de-va-nhieu-chu-de-fux',
    title: 'Fugue có đối đề, fugue trên cantus firmus và fugue nhiều chủ đề (Fux)',
    category: 'polyphony',
    also: ['form'],
    aliases: ['fugue có đối đề', 'contra subject', 'fugue trên cantus firmus', 'fugue ba chủ đề', 'fugue chromatic Fux'],
    summary: 'Đối âm kép đưa vào fugue: đối đề vào sau dấu lặng và đổi chỗ ở quãng 8 với chủ đề suốt bài, có thể vào ở ô thứ hai hay ba; fugue dựa trên đối âm ở quãng 10 (khi nào được thay bằng quãng 3, 6); fugue trên cantus firmus — chọn chủ đề hợp với từng ô cantus hoặc rút chủ đề từ chính cantus; đảo chủ đề chromatic; fugue ba chủ đề với ba loại trường độ.',
    refs: [SRC, ['Wikipedia — Countersubject', 'https://en.wikipedia.org/wiki/Countersubject']],
    body: `
## Fugue có đối đề
- Fux dùng một fugue để chứng minh "**ích lợi lớn của đối âm kép**": cách chèn một **đối đề** (*contra subject*) và mang nó đi suốt fugue.
- Đối đề **vào sau một dấu lặng**, và nhờ đổi chỗ các bè nó luôn **đáp chủ đề ở quãng 8** — lúc ở bè ngoài, lúc ở bè giữa; từ sự đa dạng đó sinh ra hoà âm mới.
::scan fux 29.1 | *A Double Fugue*: các số 1 – 6 đánh dấu chỗ chủ đề và đối đề vào (phần đầu)
- Một "**mẹo khéo**": ba bè trên cùng **mô phỏng đối đề** để kéo nó dài thêm sau khi chủ đề chính đã ngừng.
- Có thể làm vậy với cả hai chủ đề rồi kết bằng cách **đổi trường độ** vài nốt.
- Đối đề **không nhất thiết vào ở ô đầu** của chủ đề; để đa dạng, nó có thể vào ở **ô thứ hai hay thứ ba**, tuỳ chủ đề cho phép.
::scan fux 33.1 | Ex. 1 – 3: đối đề (*Contra Subject*) vào ở những ô khác nhau của chủ đề

## Fugue dựa trên đối âm ở quãng 10
- Một đối đề có thể vừa đảo ở quãng 8 vừa đảo ở quãng 10, nên bài thành **trio** được; nâng đối đề một quãng 8 thì nó bị hạ một quãng 3 tương đối.
::scan fux 32.1,32.2,32.3 | Đối đề đảo ở quãng 8 và quãng 10: *Transpositio in 3iam superior*, *in 8vam inferior*, rồi bản ba bè
- Fux tự giải thích vì sao trong fugue mẫu, đối đề đi bằng **quãng 3 và 6** chứ không phải quãng 10: lấy quãng 10 thì bè Alto, rồi bè Tenor **thiếu hoà âm**, nên lấy **quãng 3 dưới** thay; chỗ khác lấy **quãng 6** để **nối các bè sát hơn**. Bản chất vẫn là đối âm ở quãng 10.
- Sau dấu lặng, chủ đề được đưa vào **bằng đảo** — đúng quy tắc "sau dấu lặng phải là chủ đề".
::scan fux 33.2 | Fugue của sách, các số đánh dấu lần vào của chủ đề (phần đầu)

## Fugue trên cantus firmus
- Fux nói: không có đối âm kép thì **không thể đưa nhiều chủ đề vào một bài**; mà thiếu nhiều chủ đề thì bài viết, **nhất là phong cách nhà thờ**, "nhạt và hời hợt".
- Trước khi ghi chủ đề sẽ ghép với [[cantus-firmus]], phải xét **từng ô cantus**: chủ đề (ở dạng gốc hay **đảo ngược chiều đơn / nghiêm**) có hợp hoà âm với nó ở mọi ô, hay ít nhất phần lớn các ô không.
- Cách khác: **rút chủ đề từ chính cantus** bằng cách đổi trường độ các nốt.
::scan fux 41.1,41.2 | Fugue trên cantus firmus (*Canto fermo* ở bè giữa)

## Chủ đề chromatic
Chủ đề chromatic đảo khác chủ đề diatonic: đảo theo luật diatonic sẽ **trái giọng**, nên phải sắp sao cho **nốt đầu và nốt cuối nằm trong giới hạn của giọng**. Sách kèm một fugue viết theo cách đảo này.
::scan fux 42.1,42.2 | Ex. 1 – 3 của mục chủ đề chromatic, rồi bài fugue kèm theo

## Fugue ba chủ đề
Một bài có thể "tô điểm bằng nhiều chủ đề", mỗi chủ đề khác về tính chất và trường độ — nhờ đối âm kép. Fux nhận xét fugue ba chủ đề của mình:
1. Chủ đề thứ hai dựa trên đối âm ở một quãng (chữ số bị mờ trong bản quét), chủ đề thứ ba dựa trên **đối âm ở quãng 12**.
2. Mỗi chủ đề **khác nhau về trường độ** để chuyển động của chúng rõ ràng.
3. Sau khi chủ đề vào ở quãng 12, **không để quãng 6 xuất hiện giữa các bè** — nếu không thì không đảo được (quãng 6 thành quãng 7, xem [[doi-am-kep-fux]]).
4. Không phải lúc nào cũng mang trọn chủ đề — để đưa chủ đề khác vào, hoặc vì giai điệu.
5. Bài ba chủ đề **nên có thêm một bè đi kèm**, để có chỗ cho vài bè đi trong khi bè khác nghỉ.
::scan fux 43.1 | Fugue ba chủ đề của Fux

Bức tranh rộng của fugue (cấu trúc, đoạn nối, stretto, tác phẩm của Bach): [[fugue]]. Tiếp theo: [[dap-de-va-trang-tri-fux]].
`,
  },
  {
    slug: 'dap-de-va-trang-tri-fux',
    title: 'Quy tắc đáp đề, trang trí và phong cách a cappella (Fux)',
    category: 'polyphony',
    also: ['form', 'sacred'],
    aliases: ['quy tắc đáp đề', 'rules of the answer', 'guide và answer', 'diminution Fux', 'nốt sớm Fux', 'stile a cappella', 'phong cách a cappella'],
    summary: 'Phần phụ lục của Fux: bốn quy tắc đáp đề (giai điệu giống chủ đề, giữ đúng giọng, bậc I và V đáp nhau ở nốt đầu – cuối và ở bước nhảy) cùng kết luận "giai điệu đáng coi trọng hơn giọng"; biến tấu bằng chia nhỏ nốt (diminution), lời nhắc đừng lạm dụng trang trí, nốt sớm (anticipation); chỗ đặt nốt treo theo từng loại nhịp; và mẫu phong cách nhà thờ a cappella (Kyrie).',
    refs: [SRC, ['Wikipedia — A cappella', 'https://en.wikipedia.org/wiki/A_cappella']],
    body: `
## Bốn quy tắc đáp đề
Bản dịch gọi chủ đề là *Guide* (bè dẫn) và đáp đề là *Answer*.
1. **Giai điệu của đáp đề phải khớp đúng** giai điệu của bè dẫn.
2. Phải giữ **chuyển giọng đúng** — tức hợp hoàn toàn với giọng.
3. **Bậc I và bậc V phải đáp nhau** ở **nốt đầu và nốt cuối** của bè dẫn và đáp đề.
4. Trong **một bước nhảy**, ở đầu hay giữa chủ đề, bậc I và bậc V cũng phải đáp nhau.

## Khi quy tắc va nhau
- Có chủ đề đáp được **hai cách**: (a) cho **nốt cuối hợp giọng**; (b) theo **quy tắc xướng âm** (*solfaing*), cho giai điệu **giống bè dẫn hơn**. Cả hai đều đúng phần nào, nhưng Fux chọn (b) vì **hay hơn** và **giống bè dẫn hơn** — và kết luận: "**giai điệu đáng được coi trọng hơn giọng**".
::scan fux 45.1 | Ex. 2 – 3: hai cách đáp cùng một chủ đề (*Answer* … *or*)
- Ví dụ khác: nếu đáp bước nhảy La – Re bằng Re – La "theo luật" thì trái cả chuyển giọng lẫn giai điệu — hoặc phải dùng nửa cung Re – Mi giáng để đáp La – Si giáng của bè dẫn, hoặc bước nhảy bị đứng trước bởi quãng 3 Re – Fa.
::scan fux 45.2 | Đáp đề ở giọng có Si giáng — cách a ghi "Bad", cách b
- Cùng một chủ đề có thể đáp **khác nhau tuỳ giọng mà chủ đề chuyển sang**; cả hai cách đều đúng.
::scan fux 45.3 | Cùng một chủ đề đáp ở hai giọng khác nhau
- **Chủ đề chromatic**: quy về diatonic, đáp theo luật, rồi mới thêm các nửa cung chromatic vào đáp đề. Có lúc không thể đáp bằng đúng chuỗi nửa cung vì sẽ cần **nốt ngoài giọng**.
::scan fux 46.1,46.2,46.3 | Chủ đề chromatic: Ex. 1 – 4, đáp đề "bad" (chỗ đánh dấu sao) và đáp đề đúng, rồi các ví dụ hai bè
- Để chuyển động sinh động hơn, nốt trắng đầu của bè dẫn có thể **đáp bằng nốt đen**.
Đối chiếu đáp đề giọng và đáp đề thực: [[mo-phong-va-fugue-hai-be-fux]], [[fugue]].

## Biến tấu bằng chia nhỏ nốt
- Khác với biến tấu thường (nốt đi bằng quãng 3 được lấp đầy), **diminution** dùng cho các nốt **đi bằng bước nhảy**.
::scan fux 44.1 | Mười mẫu chia nhỏ nốt (*diminution*) cho các bước nhảy
- Có kiểu biến tấu **lệch khỏi luật đối âm**: đi từ thuận sang nghịch hay nghịch sang nghịch **bằng nhảy** — trong đối âm thì cấm, chỉ được trong **sáng tác thông thường**. Sách cho nhiều ví dụ: nốt gốc trước, dạng biến tấu sau.
::scan fux 44.2 | Ex. 1 – 3 của phần biến tấu
- Fux nhắc: người viết **đừng dùng trang trí quá tay**, vì người biểu diễn vốn đã "đủ hăng hái thêm vào thật nhiều — tiếc thay thường rất không đúng lúc".
- **Nốt sớm** (*anticipation*): lấy **một nửa trường độ** của nốt trước giao cho nốt sau. Fux ghi lối này "**rất thịnh hành trong âm nhạc hiện đại của chúng ta**" và dùng hiệu quả tốt. Xem thêm [[not-ngoai-hop-am]].

## Nốt treo đặt ở đâu trong ô nhịp
| Loại nhịp | Nốt treo (nghịch) đặt ở |
|---|---|
| Nhịp thường, nhịp hai | Chỉ **phách đầu** (phách mạnh) |
| Nhịp nhanh (*Presto*), ô chia bốn nốt đen | Nốt đen **thứ nhất và thứ ba** |
| Nhịp chậm (*Adagio*) | **Mọi nốt đen** |
::scan fux 46.4 | Ex. 1 – 3: vị trí nốt treo trong ô nhịp
Đây là nguyên lý chung: nốt treo rơi vào **phách mạnh tương đối** của đơn vị đang được cảm nhận — xem [[doi-am-loai-4]], [[dao-phach]].

## Phong cách a cappella
Sách kết bằng **một mẫu sáng tác theo phong cách nhà thờ**, "gọi đúng là *stile a cappella* vì chỉ do các bè hát trình diễn": một **Kyrie eleison** nhiều bè mô phỏng. Đây là đích của toàn bộ lộ trình — phong cách mà [[phong-cach-palestrina]] phân tích, dùng trong [[thanh-le-va-requiem|thánh lễ]] và [[motet]].
::scan fux 47.1,47.2,47.3 | *Kyrie eleison* bốn bè *a cappella*
::scan fux 48.1,49.1 | Hai đoạn tiếp theo ở cuối sách: *Kyrie* (*Tutti un poco Allegro*) và *Amen* (*Tutti Presto moderato*), có bè trầm số

Toàn bộ hệ thống: [[he-thong-fux-gradus-ad-parnassum]].
`,
  },
]

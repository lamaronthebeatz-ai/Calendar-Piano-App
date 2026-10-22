import type { Article } from '../wiki'

/**
 * Hệ thống Albrechtsberger: đọc từ bản dịch Anh *Collected Writings on Thorough-Bass, Harmony, and Composition*
 * (Seyfried biên tập, Novello 1855, ba tập). Một hệ riêng trong mục hoà âm — không trộn với hoà âm Nga – Xô viết.
 * Mọi quy tắc ghi theo sách, có số trang; chỗ OCR hay bản in có vấn đề thì ghi rõ trong bài.
 */
const SRC: [string, string] = ['J. G. Albrechtsberger, Collected Writings on Thorough-Bass, Harmony, and Composition, ed. I. von Seyfried, transl. S. Novello (London: Novello, 1855), 3 tập trong 1 — bản quét Internet Archive', 'https://archive.org/details/jgalbrechtsberg00albrgoog']
const HATHI: [string, string] = ['HathiTrust — Albrechtsberger’s collected writings on thorough-bass, harmony and composition (Novello, 1855)', 'https://catalog.hathitrust.org/Record/100780619']
const IMSLP: [string, string] = ['IMSLP — Albrechtsberger, Gründliche Anweisung zur Composition (1790)', 'https://imslp.org/wiki/Gr%C3%BCndliche_Anweisung_zur_Composition_(Albrechtsberger%2C_Johann_Georg)']

export const albrechtsberger: Article[] = [
  {
    slug: 'he-thong-albrechtsberger',
    title: 'Hệ thống Albrechtsberger: bass liên tục, hoà âm và sáng tác',
    category: 'harmony',
    also: ['polyphony', 'musicology'],
    aliases: ['hệ thống Albrechtsberger', 'Collected Writings on Thorough-Bass', 'Sämmtliche Schriften über Generalbaß', 'Albrechtsberger Seyfried', 'Albrechtsberger 1855', 'lộ trình Albrechtsberger'],
    summary: 'Trang mở đầu của loạt bài đọc thẳng từ tuyển tập ba tập của Albrechtsberger do học trò Seyfried biên tập (bản dịch Anh Novello 1855): ai viết phần nào, cấu trúc ba tập (bass liên tục và hoà âm; hướng dẫn sáng tác nghiêm khắc – tự do, mô phỏng, fugue; đối âm kép, fugue kép, canon và phụ lục), các thuật ngữ cổ, tiểu sử theo lời sách và lộ trình học trong thư viện — một hệ riêng, tách khỏi hoà âm Nga – Xô viết.',
    refs: [SRC, HATHI, IMSLP, ['Britannica — Johann Georg Albrechtsberger', 'https://britannica.com/print/article/13091'], ['Dineen, "Figured Bass and Modulation: The Wiener-Tonschule of Joseph Preindl" — Music Theory Online 8.3 (ghi chú)', 'https://mtosmt.org/issues/mto.02.8.3/mto.02.8.3.dineen_notes.html']],
    body: `
## Cuốn sách
- **Tên**: *J. G. Albrechtsberger's Collected Writings on Thorough-Bass, Harmony, and Composition, for Self-Instruction* — "tuyển tập các bài viết về bass liên tục, hoà âm và sáng tác, để tự học".
- **Biên tập**: học trò **Ignaz Ritter von Seyfried**, người "sắp xếp có hệ thống, mở rộng và biên tập" những ví dụ thầy đã giảng miệng; kèm "hướng dẫn ngắn về đọc tổng phổ và mô tả mọi nhạc cụ dùng đến nay".
- **Bản dịch**: **Sabilla Novello** dịch từ tiếng Đức cho *Novello's Library for the Diffusion of Musical Knowledge*; phần nhạc do **Vincent Novello** hiệu đính. London, Novello, **1855**, ba tập (bản quét dùng ở đây đóng "ba tập trong một").
- Bản Đức gốc: *Sämmtliche Schriften über Generalbaß, Harmonie-Lehre und Tonsetzkunst* (Vienna, 1826, 3 tập — theo bài [[hoa-am-truong-phai-phuong-tay]]). Bản tiếng Anh dịch từ **lần in thứ hai**; sách không ghi năm của hai lần in Đức.

## Ai viết phần nào — lời tựa của Seyfried
Đây là điểm phải nhớ khi đọc mọi bài của loạt này:
- "**Tập thứ nhất**, một trường dạy bass liên tục, phải **biên soạn phần lớn**, vì chỉ có một phần rất nhỏ tư liệu cần thiết." Tức là Tập I chủ yếu do **Seyfried** soạn.
- Các tập sau, "Hướng dẫn sáng tác", thì "đã được chính **Albrechtsberger** soạn hết sức chính xác"; bản thảo "đến tay nhà in theo lối viết mộc mạc thường ngày của ông, gần như đúng lời ông giảng".
- Seyfried chỉ thêm những gì cần vì "sự tiến bộ phi thường của khí nhạc trong hơn hai mươi năm"; ở lần in thứ hai ông **đưa chương Đảo lên ngay sau Mô phỏng**, chuyển **luật viết năm bè** từ Tập III sang Tập II, và bổ sung nhiều cho Phụ lục.
- Thứ tự học giữ theo Albrechtsberger, người được "nhà tiên tri Fux" ủng hộ: đối âm đơn giản → lối tự do, mô phỏng, đảo → fugue đơn → đối âm kép ở quãng 8, 10, 12 và fugue kép → **canon**, "như viên đá đỉnh vòm, vương miện của khoá lý thuyết".
Điều này khớp với nhận xét của Dineen (*Music Theory Online*, 2002) rằng sách gốc năm 1790 của Albrechtsberger gần như không có phần hoà âm học.

## Ba tập
| Tập | Nội dung | Bài trong thư viện |
|---|---|---|
| I (tr. 9 – 76) | Bass liên tục và hoà âm: quãng, thuận – nghịch, hợp âm 3 – 7 – 9 – 11 – 13, chuyển động, nghịch âm, quãng ngầm định của từng chữ số, đệm, sáu tiến hành nguy hiểm, hoà âm thuần khiết, quãng tăng – giảm, chuyển giọng, kết, đệm chia hai tay | [[quang-va-hop-am-albrechtsberger]], [[chuyen-dong-va-nghich-am-albrechtsberger]], [[bass-so-albrechtsberger]], [[dem-bass-so-albrechtsberger]], [[sau-tien-hanh-nguy-hiem]], [[hoa-am-thuan-khiet-albrechtsberger]], [[chuyen-giong-va-ket-albrechtsberger]] |
| II (tr. 81 – 182) | Hướng dẫn sáng tác: nền tảng; **năm loại** sáng tác nghiêm khắc ở hai, ba, bốn, năm bè; lối tự do; mô phỏng; đảo; fugue | [[nen-tang-sang-tac-albrechtsberger]], [[nam-loai-hai-be-albrechtsberger]], [[ba-be-albrechtsberger]], [[bon-va-nam-be-albrechtsberger]], [[mo-phong-va-dao-albrechtsberger]], [[fugue-albrechtsberger]] |
| III (tr. 187 – ) | Fugue trên chorale; đối âm kép ở quãng 8, 10, 12; fugue kép; canon; phụ lục về phong cách, nhạc cụ, đọc tổng phổ | [[fugue-chorale-va-doi-am-kep-albrechtsberger]], [[fugue-kep-va-canon-albrechtsberger]], [[phu-luc-albrechtsberger]] |

## Tiểu sử theo lời sách
Phần "Hồi ký tiểu sử" ở đầu sách cho biết (chưa đối chiếu nguồn khác, trừ chỗ ghi):
- Sinh **3/2/1736** ở Klosterneuburg, cách Vienna "khoảng hai league"; bảy tuổi hát bè cao ở tu viện; học bass liên tục với Leopold Pittner.
- Học ở trường tu viện Benedictine **Melk**, làm organ ở đó **mười hai năm**; nghiên cứu Caldara, Fux, Mann, Riepel, Pergolesi, Graun, Handel, Benda, Hasse, Bach.
- **1772** nhận chức organ cung đình; sau khi Leopold Hoffmann, nhạc trưởng nhà thờ St. Stephen, mất (sách ghi **1792**), ông được cử thay — bài [[hoa-am-truong-phai-phuong-tay]] ghi thêm các mốc theo Britannica.
- Mất **7/3/1809**; chôn ở nghĩa trang nơi Mozart nằm.
- Câu sách dẫn lời ông: "Tôi viết fugue hay chẳng phải công của tôi, vì chẳng có ý nào đến với tôi mà lại không hợp với đối âm kép." Sách cũng nói lối viết tự do "chưa bao giờ hợp" với ông.
- Danh sách học trò sách in gồm **Beethoven**, Eybler, Gänsbacher, **Hummel**, Preindl (người kế nhiệm), Seyfried, Weigl và nhiều người khác.

## Thuật ngữ cổ của sách
| Bản dịch 1855 | Nghĩa trong loạt bài |
|---|---|
| Thorough-bass | bass liên tục, tức [[bass-so|bass số]] |
| Grade | bậc (của âm giai, của khuông) |
| Fundamental note / part | nốt nền, bè nền — **là nốt trầm**, kể cả ở thể đảo |
| Common chord, harmonic triad | hợp âm ba |
| Position of the octave / fifth / third | vị trí quãng 8 / 5 / 3 (nốt nào nằm trên cùng) |
| Changing note | nốt đổi — nốt ngoài hợp âm ở phách mạnh |
| Suspension: preparation – percussion – resolution | nốt treo: chuẩn bị – đánh – giải quyết |
| Seventh major grade | bậc 7 trưởng, tức cảm âm |
| Unharmonious transverse position; Mi contra Fa | quan hệ chéo nghịch tai (đối sai) |
| Class (of strict composition) | loại — năm loại như Fux |
| Inganni | các kết đánh lừa |

## Lộ trình
1. Tập I theo thứ tự bảng trên — học song song trên bàn phím.
2. Tập II: [[nen-tang-sang-tac-albrechtsberger]] → [[nam-loai-hai-be-albrechtsberger]] → [[ba-be-albrechtsberger]] → [[bon-va-nam-be-albrechtsberger]] → [[mo-phong-va-dao-albrechtsberger]] → [[fugue-albrechtsberger]].
3. Tập III và phụ lục.
4. Tra nhanh: [[tra-cuu-albrechtsberger]].

Bối cảnh: dòng hoà âm Vienna từ Albrechtsberger đến Sechter và sách giáo khoa Mỹ — [[hoa-am-truong-phai-phuong-tay]]. Năm loại theo nguyên văn Fux, "nhà tiên tri" của Albrechtsberger: [[he-thong-fux-gradus-ad-parnassum]]. Hoà âm Nga – Xô viết là một hệ riêng: [[hoa-am-truong-phai-nga-xo-viet]].
`,
  },
  {
    slug: 'quang-va-hop-am-albrechtsberger',
    title: 'Quãng, thuận – nghịch và các loại hợp âm (Albrechtsberger)',
    category: 'harmony',
    aliases: ['quãng theo Albrechtsberger', 'hợp âm 11 và 13 Albrechtsberger', 'quãng 4 thuận và quãng 4 nghịch', 'position of the octave', 'vị trí hợp âm Albrechtsberger'],
    summary: 'Tập I, §I – X và §LXI: quãng (nửa cung lớn – nhỏ, các loại của từng quãng), thuận và nghịch, hợp âm hoàn toàn, không hoàn toàn và nghịch, quãng 4 thuận và quãng 4 nghịch, bốn loại hợp âm ba và hai thể đảo, ba vị trí của hợp âm, năm loại hợp âm chính — hợp âm 7, 9, 11, 13 sinh ra bằng cách thêm nốt dưới hợp âm 7 — và "chỗ ngồi" của mỗi hợp âm trong giọng.',
    refs: [SRC],
    body: `
Bài này chép hệ thống quãng và hợp âm của **Tập I** (phần Seyfried biên soạn — xem [[he-thong-albrechtsberger]]). Nhiều chỗ khác cách dạy hiện nay; bài ghi đúng như sách và đánh dấu chỗ bản in tự mâu thuẫn.

## 1. Quãng (§I – II, tr. 9 – 11)
- "Khoảng cách từ âm này đến âm khác gọi là **quãng**." Quãng nhỏ nhất là **nửa cung**.
- Sách viết "**chỉ có tám quãng**" rồi kể ra **mười**: đồng âm, 2, 3, 4, 5, 6, 7, 8, 9, 10 (lỗi nằm trong bản in). "Đồng âm là một con số nhưng không thật là quãng"; quãng 10 có thể coi là quãng 3 trên quãng 8.
- **Nửa cung nhỏ** là nửa cung cùng bậc (C – C♯); **nửa cung lớn** là nửa cung khác bậc (C – D♭). Một cung = một nửa cung lớn + một nửa cung nhỏ. Lưu ý cách gọi này **ngược** với nhiều sách hiện nay — xem [[cung-nua-cung]].
- Quãng đơn chuyển lên một quãng 8 vẫn giữ tên, **trừ quãng 2, 4, 6**: đôi khi chúng xuất hiện dưới dạng quãng 9, 11, 13 và "phải phân biệt" với quãng đơn thật.

| Quãng | Các loại sách thừa nhận |
|---|---|
| Đồng âm | đúng, tăng |
| 2 | thứ, trưởng, tăng |
| 3 | giảm, thứ, trưởng |
| 4 | giảm, đúng ("đúng, hay trưởng"), tăng |
| 5 | giảm, đúng, tăng |
| 6 | giảm, thứ, trưởng, tăng |
| 7 | giảm, thứ, trưởng — **không có quãng 7 tăng** |
| 8 | "thường chỉ hai loại": giảm, đúng; đôi khi tăng |
| 9 | thứ, trưởng |
| 10 | giảm, thứ, trưởng |
Bảng chuẩn hiện nay: [[quang]].

## 2. Thuận và nghịch (§III, tr. 11)
- **Thuận**: đồng âm đúng, quãng 3 thứ và trưởng, quãng 5 đúng, quãng 6 thứ và trưởng, quãng 8 đúng, quãng 10. **Nghịch**: đồng âm tăng, quãng 2 thứ, và **mọi quãng còn lại** — tức là mọi quãng 4 đều nằm trong nhóm nghịch.
- Một quãng thuận **trở thành nghịch theo ngữ cảnh**: "quãng 5 đúng đi cùng quãng 6, quãng 6 đi cùng quãng 7, quãng 8 đúng đi cùng quãng 9".
- Quãng 5 và 8 là **thuận hoàn toàn**. Câu tiếp theo bản in ghi "cả hai quãng 3 và **quãng 5** là không hoàn toàn" — gần như chắc là in nhầm của "quãng 6", vì ngay sau đó sách dựng hợp âm không hoàn toàn từ quãng 3 và 6. Sách không tự sửa.

| Loại hợp âm | Thành phần | Ghi chú |
|---|---|---|
| **Hợp âm thuận hoàn toàn** | quãng 3, 5, 8 — "chỉ hợp âm ba là hoàn toàn" | Hai cách xếp khác, và cách bỏ một nốt, nhân đôi nốt khác |
| **Hợp âm thuận không hoàn toàn** | quãng 3, 6, 8 (tức [[the-dao-hop-am|hợp âm 6]]) | Cũng xếp lại và nhân đôi được |
| **Hợp âm nghịch** | có một hay nhiều quãng nghịch: 6/5/3, 8/6/5, 6/4/2, 7/5/3, 8/5/4, 9/5/3… | Một vài hợp âm 6 có quãng hoá biến cũng bị xếp vào đây; danh sách này (ví dụ 29) chưa giải thích được hết |

## 3. Bốn loại hợp âm ba, thể đảo, vị trí (§IV – V, tr. 12 – 13)
- "Hợp âm ba có bốn loại": **trưởng, thứ, giảm, tăng**. Hai loại đầu thuận, hai loại sau **nghịch**.
- Mỗi hợp âm ba có **hai thể đảo**: lấy quãng 3 làm bè trầm sinh ra **hợp âm 6**; lấy quãng 5 làm bè trầm sinh ra **hợp âm 6/4**. Sách vẫn gọi nốt trầm của thể đảo là **nốt nền**. Chi tiết hiện đại: [[hop-am-ba]], [[the-dao-hop-am]].
- **Quãng 4 thuận và quãng 4 nghịch**: quãng 4 đúng đi với quãng 6 thì "thường gọi là quãng 4 thuận"; đi với quãng 5 thì là "quãng 4 nghịch".
- Hợp âm ba **không ghi số**; một dấu ♮, ♭ hay ♯ đứng một mình chỉ loại quãng 3.
- **Ba vị trí** của mỗi hợp âm, theo nốt nằm trên cùng: **vị trí quãng 8**, **vị trí quãng 5**, **vị trí quãng 3**. Với hợp âm không có các quãng đó, gọi là vị trí thứ nhất, thứ hai, thứ ba.
- Lời khuyên: với giọng quá xa, dùng giọng **trùng âm** dễ đọc hơn — Rê giáng trưởng thay Đô thăng trưởng, La giáng trưởng thay Son thăng trưởng (xem [[trung-am]]).

## 4. Năm loại hợp âm chính (§III, VI – X, tr. 11 – 15)
"Hợp âm có năm loại chính: hợp âm ba, hợp âm 7, hợp âm 9, hợp âm 11 và hợp âm 13." Mọi hợp âm chứa quãng 2, 4, 7, 9 là nghịch; khi các quãng đó được **nối** (nốt đã vang không đánh lại) thì gọi là **có chuẩn bị**.

| Hợp âm | Cách sinh ra theo sách | Khi đệm |
|---|---|---|
| **7** | quãng 3, 5, 7 — trưởng, thứ hoặc giảm | Ba thể đảo: **5 – 6** (bè trầm là quãng 3), **3 – 4 – 6** (bè trầm là quãng 5), **2 – 4 – 6** (bè trầm là quãng 7); ở thể đảo cuối, quãng 4 "được coi là thuận" |
| **9** | thêm một nốt **quãng 3 dưới** hợp âm 7: dưới G – B – D – F thêm E | Bốn bè thì bỏ quãng 7, 5 hoặc 3 |
| **11** | thêm một nốt **quãng 5 dưới** hợp âm 7: dưới G – B – D – F thêm C | Luôn bỏ một, đôi khi hai nốt; bỏ 7 và 9 còn lại "hợp âm 4 – 5"; đảo đặt quãng 4 xuống trầm thành "hợp âm 2 – 5" |
| **13** | thêm một nốt **quãng 7 dưới** nốt gốc hợp âm 7: dưới G♯ – B – D – F thêm A | Thường bỏ quãng 7, 9 hoặc 11 |

- **Quãng 9 khác quãng 2**: quãng 9 thật được chuẩn bị ở bè trên rồi đi xuống; quãng 2 thì buộc **bè trầm** đi xuống một bậc (nó là nốt treo ở bè trầm).
- **Quãng 11 khác quãng 4**, **quãng 13 khác quãng 6**: giống nhau về âm thanh nhưng khác quãng ngầm định và cách giải quyết.
So sánh với cách hiểu hiện đại về hợp âm 9 – 11 – 13 xếp chồng quãng 3 lên trên: [[hop-am-mo-rong]].

## 5. "Chỗ ngồi" của hợp âm trong giọng (§LXI, tr. 41 – 42)
"Nhiều hợp âm có chỗ thích hợp, hay vị trí tự nhiên, luôn tính từ nốt chủ của giọng trưởng hay thứ."
| Hợp âm | Bậc | Ví dụ |
|---|---|---|
| Hợp âm 7 (át) | bậc V | G ở Đô trưởng, E ở La thứ |
| Hợp âm 5 – 6 (thể đảo của nó) | bậc VII | B ở Đô trưởng, G♯ ở La thứ |
| Hợp âm 2 (thể đảo) | bậc IV | F ở Đô trưởng, D ở La thứ |
| Hợp âm 7 có hợp âm ba giảm | bậc VII của giọng trưởng | B ở Đô trưởng |
| Hợp âm 7 giảm | bậc VII của giọng thứ | G♯ ở La thứ |
| Hợp âm quãng 2 tăng; quãng 6 tăng | bậc VI của giọng thứ | F ở La thứ |
| Hợp âm 11 | "luôn" trên **chủ âm** | — |
| Hợp âm 13 | "không ngoại lệ" trên **chủ âm giọng thứ** | — |
Việc đặt hợp âm 11 và 13 trên chủ âm khác hẳn cách gọi tên hiện nay (các hợp âm đó ngày nay thường được hiểu là nốt treo hay [[bass-ngan|bass ngân]] trên chủ âm).

Tiếp theo: [[chuyen-dong-va-nghich-am-albrechtsberger]]. Tổng quan: [[he-thong-albrechtsberger]].
`,
  },
  {
    slug: 'chuyen-dong-va-nghich-am-albrechtsberger',
    title: 'Chuyển động và cách dùng nghịch âm (Albrechtsberger)',
    category: 'harmony',
    aliases: ['chuyển động theo Albrechtsberger', 'nốt đổi Albrechtsberger', 'chuẩn bị đánh giải quyết', 'nghịch âm không chuẩn bị', 'anticipation Albrechtsberger'],
    summary: 'Tập I, §XI – XIII và §LVIII – LX: bốn kiểu chuyển động (cả "song song" theo nghĩa nốt lặp), sáu luật đi từ hợp âm này sang hợp âm khác, ba cách dùng nghịch âm (nốt lướt, nốt đổi, nốt treo), ba thời chuẩn bị – đánh – giải quyết, nốt nào của quãng nghịch phải đi và đi về đâu, ngoại lệ quãng 7 trưởng đi lên, nghịch âm kéo dài, nghịch âm không chuẩn bị trong lối tự do và cách giải thích bằng "anticipation".',
    refs: [SRC],
    body: `
## Bốn kiểu chuyển động (§XI, tr. 15)
| Tên trong sách | Nghĩa |
|---|---|
| **Thuận chiều** (direct) | mọi bè cùng đi lên hoặc cùng đi xuống |
| **Ngược chiều** (contrary) | bè này xuống, bè kia lên |
| **Xiên** (oblique) | một bè đứng yên hoặc lặp lại, bè kia đi |
| **"Song song"** (parallel) | các bè **đứng nguyên bậc và lặp lại liên tục** — nghĩa riêng của sách, không phải song song theo nghĩa hiện nay |
Ba kiểu đầu tương ứng [[quang-va-chuyen-dong-doi-am|cách gọi trong đối âm]].

## Sáu luật nối hợp âm thuận (§XI)
1. Từ một hợp âm thuận hoàn toàn sang một hợp âm thuận hoàn toàn khác: **phải dùng ngược chiều**, hoặc cho một bè đứng yên.
2. Từ hoàn toàn sang không hoàn toàn (từ quãng 8 hay 5 sang quãng 3 hay 6): **mọi chuyển động**.
3. Từ không hoàn toàn sang hoàn toàn: **ngược chiều hoặc xiên**.
4. Từ không hoàn toàn sang không hoàn toàn: **cả bốn kiểu**.
5. **Cấm** hai quãng 5 đúng hoặc hai quãng 8 liền nhau: chúng "không chỉ nghe mỏng mà còn cực kỳ chướng tai".
6. Ngoại lệ: trong bài nhiều bè, chuỗi quãng 8 rải qua các nhạc cụ cao thấp khác nhau "không bị coi là quãng 8 liền nhau mà là đồng âm nhân đôi, nhân ba, nhân bốn".
Đối chiếu luật hiện nay: [[dan-giong]], [[luat-hoa-am-bon-be]].

## Ba cách dùng nghịch âm (§XII – XIII, tr. 15 – 16)
| Cách | Định nghĩa theo sách |
|---|---|
| **Nốt lướt** (passing note) | Hai nốt trên một hợp âm, **nốt đầu** (ở phách mạnh) thuộc hợp âm, **nốt sau** là nốt lướt |
| **Nốt đổi** (changing note) | Nốt **thứ hai** thuộc hợp âm, còn nốt đầu — dù ở phách mạnh — không thuộc hợp âm; nó "chỉ là sự treo của thuận âm theo sau" |
| **Nốt treo** (suspension) | Sinh ra khi bè trầm đổi, ví dụ quãng 7 |
"Nốt đổi" của Tập I gần với **appoggiatura** hiện nay; còn "nốt đổi" của Fux trong Tập II là hình khác — xem [[nam-loai-hai-be-albrechtsberger]] và [[not-ngoai-hop-am]].

## Ba thời của nốt treo
- **Chuẩn bị**: nốt đó vang như thuận âm ở phần nhẹ của ô trước.
- **Đánh** (percussion): lúc nó thành nghịch — "luôn là nghịch âm".
- **Giải quyết**: sau khi đánh, nốt nghịch đi **lên hoặc xuống một bậc** vào thuận âm. Chuẩn bị và giải quyết phải là thuận.

| Quãng nghịch | Nốt nào là nốt nghịch | Đi đâu |
|---|---|---|
| 4, 7, 9, 11, 13 | **nốt trên** | xuống một bậc |
| 7 trưởng khi đi cùng quãng 4, 6 thứ, 9, 11 hay 13 thứ | nốt trên | **lên** một bậc (ngoại lệ) |
| 2 và 4 tăng | **nốt dưới** | thường xuống một bậc |
| 5 giảm | nốt trên | xuống một bậc |

- Trong **lối tự do**, quãng 7 thứ trên át âm, quãng 5 giảm (và đảo của nó), quãng 4 tăng được dùng **không chuẩn bị**, "nhưng luôn phải giải quyết đúng luật". Cũng trong lối tự do, nghịch âm này có thể giải quyết vào nghịch âm khác.

## Nghịch âm kéo dài (§LVIII, tr. 39)
- Mọi nghịch âm phải giải quyết vào thuận âm, "nhưng không nhất thiết ngay lập tức": nó có thể **đứng nguyên bậc** và đổi thành quãng khác trước khi giải quyết (ví dụ quãng 4 trên G thành quãng 5 trên F khi bè trầm đi xuống).
- Cách thứ hai: **đổi vị trí hoà âm** — một hợp âm nghịch gốc chuyển sang thể đảo, hay ngược lại, rồi mới giải quyết.

## Nghịch âm không chuẩn bị (§LIX – LX, tr. 39 – 41)
Trong lối tự do có **hai trường hợp**:
1. **Nghịch âm giải quyết vào nghịch âm khác**: quãng 9 → quãng 7 → quãng 5 giảm. Để hiểu, "phải tưởng tượng một thuận âm đi qua giữa hai nghịch âm" — một quãng 8 tưởng tượng nối quãng 9 với quãng 7.
2. **Nghịch âm đến ngay sau hợp âm thuận**: thường ở kết với hợp âm 7, ở các thể đảo 5 – 6, 3 – 4, 2; với hợp âm 7 thứ hay 7 giảm trên bậc VII; hợp âm 7 thứ trên bậc II của giọng thứ (B – D – F – A ở La thứ); hợp âm 9 thứ trên át âm giọng thứ (E – G♯ – B – D – F); hợp âm 9 trưởng trên át âm giọng trưởng (G – B – D – F – A).
- Sách giải thích bằng hình **anticipation**: một quãng "xuất hiện trước khi được chờ đợi, trong khi tai tự điền các mắt xích ở giữa". Điền lại các nốt tưởng tượng thì "mọi nghịch âm thành thuận âm", nên việc vào không chuẩn bị "không chỉ được biện minh mà còn bị xoá bỏ hẳn".
- Lưu ý: "anticipation" ở đây là cách giải thích của sách, khác **nốt sớm** theo nghĩa hiện nay (xem [[not-ngoai-hop-am]]).

Tiếp theo: [[bass-so-albrechtsberger]].
`,
  },
  {
    slug: 'bass-so-albrechtsberger',
    title: 'Bass số: quãng ngầm định và cách ghi số (Albrechtsberger)',
    category: 'harmony',
    also: ['chromatic'],
    aliases: ['bass số Albrechtsberger', 'quãng ngầm định', 'implied intervals', 'Telemann curve', 'đường cong Telemann', 'bảng chữ số bass số'],
    summary: 'Tập I, §XIV – XXIII và §XL – XLVII: nguyên tắc không ghi đủ mọi quãng, mỗi chữ số kéo theo những quãng nào (bảng một số và bảng hai số), quãng 2, 3, 4, 5, 6, 7, 8, 9 ở từng loại, gạch ngang và gạch ngắn, "tasto solo", các dấu ghi số, phẩm chất của một bè bass số tốt (dễ và đúng), cách ghi hợp âm đổi, hợp âm ba giảm với đường cong Telemann.',
    refs: [SRC, ['Wikipedia — Figured bass', 'https://en.wikipedia.org/wiki/Figured_bass']],
    body: `
Mở đầu Tập I, Seyfried viết: bass liên tục "là nền tảng của mọi âm nhạc"; nó dạy ta quy mọi tác phẩm về hợp âm gốc và hợp âm dẫn xuất, và "chỉ bằng một bè bass có số, giúp người am hiểu theo đúng một tác phẩm nhiều bè". Bài tổng quát: [[bass-so]].

## Nguyên tắc: quãng ngầm định (§XIV)
- "Đã thành luật chung là không ghi trên bè trầm mọi quãng của hợp âm", nên phải thuộc **những quãng ngầm định** của từng chữ số.
- Nốt trầm **không có số** → luôn đánh **hợp âm ba hoàn toàn** (trừ khi ghi "unisoni" hay **"tasto solo"** — tay trái đánh một mình, không đệm).
- Dấu ♭, ♯ hay ♮ đứng riêng chỉ quãng 3 giảm, thứ hay trưởng.

## Bảng một chữ số (§XXII, tr. 20)
| Số | Kéo theo |
|---|---|
| (không số) | hợp âm ba |
| 2 | quãng 4 và 6 |
| 3 | quãng 5 và 8 |
| 4 | quãng 5 và 8 |
| 4 tăng | quãng 2 và 6 |
| 5 giảm | quãng 3 thứ và 6 thứ |
| 5 đúng | quãng 3 và 8 |
| 6 | quãng 3 và 8 |
| 7 | quãng 3 và 5 |
| 8 | quãng 3 và 5 |
| 9 | quãng 3 và 5 |
| 10 | quãng 5 và 8 |

## Bảng hai chữ số (§XXIII, tr. 20 – 22)
| Hai số | Thêm | Hai số | Thêm |
|---|---|---|---|
| 2 thứ + 3 trưởng | 5 | 4 + 6 | 8 hoặc nhân đôi 6 |
| 2 + 4 | 6 | 4 + 7 thứ | 5 hoặc 8 |
| 2 + 5 | nhân đôi một trong hai | 4 + 8 | 5 |
| 2 + 7 trưởng | 4 | 4 + 9 | 5 |
| 3 + 4 | 6 | 4 + 10 | 6 tăng |
| 3 + 5 | 8 hoặc nhân đôi | 5 + 6 | 3 hoặc 8 |
| 3 + 6 | 8 hoặc nhân đôi | 5 + 7 | 3 |
| 3 + 7 | 5 hoặc 8 | 5 giảm + 8 | 3 thứ |
| 3 + 8 | 5 | 5 + 10 | 3 |
| 3 + 9 | 5 | 6 + 7 | 2 hoặc 3 |
| 4 + 5 | 8 | 6 + 8 | 3 |
| 6 + 9 | 3 | 7 + 8 | 3 |
| 7 + 9 | 3 | 8 + 9 | 4 |
| 8 + 10 | 5 | | |

## Từng chữ số — những điều sách dặn thêm (§XIV – XXI)
- **2**: luôn kéo theo 4 và 6; ghi 5/2 thì nhân đôi quãng 5 hoặc quãng 2. Gạch ngang sau số nghĩa là **giữ các quãng đó** sang nốt trầm sau; bè trầm phải xuống nửa cung hay một cung để quãng 2 thành quãng 3.
- **3 giảm** kéo theo 5 giảm và 7 giảm. Nhiều hợp âm ba liền nhau thì **đi ngược chiều**; nhiều quãng 3 trên bè trầm đi bậc thì chỉ hợp âm đầu và cuối đánh đủ bốn bè, ở giữa ba bè, nhanh thì hai bè.
- **4 giảm** kéo theo quãng 6 thứ nhân đôi (bè trầm là cảm âm); **4 đúng** kéo theo 5 và 8, "rất hợp với kết"; **4 tăng** kéo theo 2 trưởng và 6 trưởng.
- **5 giảm** — có chuẩn bị hay không — kéo theo 3 thứ và 6 thứ; nốt trầm phải ở bậc IV hoặc bậc VII trưởng và **đi lên nửa cung lớn**. **5 tăng** thường chỉ là nốt lướt sau quãng 5 đúng.
- **6**: kéo theo 3 và 8, hoặc nhân đôi 3 hay 6. **Không nhân đôi quãng 3 hay 6 trưởng khi nó là cảm âm**: "nghe quá gắt". Chuỗi quãng 6 nên đi ngược chiều, thỉnh thoảng bỏ một quãng và nhân đôi quãng khác.
- **7**: mọi quãng 7 dùng làm nốt treo giải quyết đi xuống kéo theo 3 và 5, hoặc 3 và 8, hoặc quãng 3 nhân đôi. **7 trưởng là cảm âm** giải quyết lên quãng 8 thì kéo theo 2 trưởng và 4 đúng, kể cả khi không chuẩn bị.
- **8**: chuỗi quãng 8 là "**đồng âm được nâng lên**", đánh không đệm, ghi "unisoni" hoặc một gạch ngang dài. Gạch ngắn: giữ nguyên hợp âm vừa đánh.
- **9**: chuẩn bị ở bè trên, giải quyết xuống; kéo theo 3 và 5. Khi bè trầm đi lên thì bỏ quãng 5, nhân đôi quãng 3 để tránh hai quãng 5. Quãng 9 đi với 3 và 5; quãng 2 đi với 4 và 6 — và quãng 2 là nốt treo **ở bè trầm**, quãng 9 thì do các bè trên chuẩn bị.

## Các dấu và cách ghi (§XL – XLVII, tr. 36 – 37)
1. Các số **1 – 9**; quãng 11 và 13 ghi thấp một quãng 8 "cho dễ đọc nhanh". (Sách viết "như quãng 4 và quãng 5"; nhưng bảng ở §XLVII lại ghi hợp âm 13 bằng số 6 — nên coi chữ "quãng 5" là điểm chưa rõ.)
2. Các dấu ♯, ×, ♭, ♭♭, ♮.
3. Chuỗi gạch ngắn: lặp lại cùng một quãng.
- Một bè bass số tốt có hai phẩm chất: **dễ** — "càng ít số càng tốt, vì nhiều số làm mỏi mắt"; và **đúng** — đủ dấu để người am hiểu "không thể nhầm hoà âm này với hoà âm khác".
- Nhiều số thì xếp chồng theo chiều dọc trên nốt trầm, thiếu chỗ thì đặt dưới.
- Đánh hợp âm trên một **nốt đổi**: vẽ **gạch xiên đi lên** và đặt số trên nốt nền thật của hợp âm.
- Hợp âm ba **giảm** thường ghi theo kiểu **Telemann** — một dấu cong trên số 6 hay 6/5, gọi là "**đường cong Telemann**" (hình dạng chính xác của dấu không đọc rõ được trên bản quét).

| Hợp âm | Ghi |
|---|---|
| 4 và 6 | 6/4 |
| 4 và 5 | 5/4 |
| 5 và 6 | 6/5 |
| 5 và 2 | 5/2 |
| 9 với quãng 3 hoặc 5 | 9 |
| 9 với quãng 7 | 9/7 |
| 3 và 4 | 4/3 |
| 13 trên bè nền | ♯7/6/4 |
| 7 với quãng 4 | 7/4 |
| 9 với quãng 4 | 9/4 |

Đối chiếu ký hiệu hiện đại: [[ky-hieu-hop-am]]. Tiếp theo: [[dem-bass-so-albrechtsberger]].
`,
  },
  {
    slug: 'dem-bass-so-albrechtsberger',
    title: 'Đệm bass số: vị trí, nhân đôi, âm giai và đệm chia hai tay (Albrechtsberger)',
    category: 'harmony',
    also: ['improvisation'],
    aliases: ['đệm bass số', 'đệm âm giai', 'divided accompaniment', 'đệm chia hai tay', 'rolling bass', 'hoà âm khép và hoà âm rải Albrechtsberger'],
    summary: 'Tập I, phần thực hành trên bàn phím: hợp âm ba ở ba vị trí trong mọi giọng, bốn luật nối chuỗi hợp âm ba, hợp âm ba giảm, nhân đôi và bước nhảy cấm, đệm âm giai đi lên – đi xuống (kiểu quy tắc quãng 8), chuỗi hợp âm 6, các luật chung khi đệm, mỗi ô nhịp đánh mấy hợp âm, bè trầm chạy nốt nhanh, bài tập và cách đệm chia hai tay với sáu vị trí khép – rải.',
    refs: [SRC],
    body: `
## Hợp âm ba ở mọi vị trí (§XXIV – XXXI, tr. 22 – 25)
- Phải thuộc hợp âm ba và hai thể đảo (hợp âm 6, 6/4) **ở mọi vị trí và mọi giọng**. Ba vị trí ở phần bài tập: **vị trí 1** — quãng 8 trên cùng, quãng 5 giữa, quãng 3 dưới; **vị trí 2** — quãng 3 trên, 8 giữa, 5 dưới; **vị trí 3** — quãng 5 trên, 3 giữa, 8 dưới.
- **Bốn luật** khi nhiều hợp âm ba nối nhau: (1) cho quãng 3, 5, 8 **luân phiên** nằm trên cùng; (2) dùng chuyển động **xiên và ngược chiều** để tránh quãng 5, 8 liền nhau; (3) giữ các hợp âm **gần nhau nhất**, tránh nhảy xa; (4) khi hai tay sát nhau thì thay quãng 8 bằng **đồng âm**.
- **Hợp âm ba giảm** ("minor diminished triad") nằm trên bậc VII của giọng trưởng, bậc II của giọng thứ, và — theo sách — trên bậc VI và VII trưởng của giọng thứ (F♯ và G♯ ở La thứ). Quãng 5 giảm, "như một nghịch âm thật", luôn giải quyết đi xuống.

## Nhân đôi (§XXXII, LIII, tr. 25 – 26, 37)
| Được nhân đôi | Điều kiện |
|---|---|
| Quãng 3 thứ và trưởng | Quãng 3 trưởng **không** được nhân đôi khi là cảm âm: nó "đã gây ấn tượng mạnh hơn các âm khác" |
| Quãng 6 thứ và trưởng | Không được là cảm âm |
| Quãng 5 đúng | — |
| Quãng 8 đúng | Chỉ khi bè trầm kết đúng luật vào hợp âm hoàn toàn sau quãng 7 trưởng |
| Quãng 2 trưởng (đi với quãng 5); quãng 4 đúng (trong hợp âm 6/4 thuận); quãng 5 đúng (đi với quãng 2) | Ba nghịch âm sách cho nhân đôi ở §XXXII |
Nhưng §LIII lại viết: "**Mọi thuận âm đều nhân đôi được; nghịch âm thì không**", vì chúng nghe khó chịu và sinh quãng 8 liền khi giải quyết. Bản in tự mâu thuẫn; hai luật nên hiểu là: tránh nhân đôi nghịch âm, trừ ba trường hợp đã kể.

## Bước nhảy cấm (§XXXIII)
"Mọi bước nhảy đến một quãng **tăng** đều không hay": quãng 2 tăng (F – G♯), quãng 4 tăng (C – F♯), quãng 5 tăng (C – G♯). Dùng **đảo** của chúng thì hơn hẳn: quãng 7 giảm thay quãng 2 tăng, quãng 5 giảm thay quãng 4 tăng, quãng 4 giảm thay quãng 5 tăng.

## Đệm âm giai (§XXXV – XXXVI, tr. 26 – 29)
- Khi bè trầm đi lên hoặc xuống trọn tám bậc, nó thường ghi ít số hoặc không số; vì bè trầm đi thẳng một chiều nên phải đệm **ngược chiều**. Sinh viên phải tập công thức này "ở mọi giọng trưởng thứ và cả ba vị trí, vì nó rất cần cho việc dạo đầu".
- Số đọc từ bản quét (ví dụ 172):

| Bậc | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Đô trưởng đi lên | — | 4/3 | 6 | 6/5 | — | 6 | 6/5 | — |
| Đô trưởng đi xuống (C B A G F E D C) | — | 6 | 6 (có gạch?) | — | 4/2 | 6 | 6/4/3 | — |
| La thứ đi lên (A B C D E F♯ G♯ A) | — | 6 (có gạch?) | 6 | 6/5 | ♯ | 6 | 6/5 ♯ | — |
Dấu "6 có gạch" chưa đọc chắc. Đây là cùng ý với **quy tắc quãng 8** của trường phái Ý – Pháp — xem [[luoc-do-galant]].
- Bè trầm đi chậm: đặt **hai hợp âm trên mỗi nốt** (chuỗi 7 – 6, 4 – 3) cho phần đệm "duyên dáng và đa dạng hơn".
- **Quãng 4 tăng ở bè giữa** là ngoại lệ: nó không giải quyết xuống vào quãng 6 mà **đi lên** vào quãng 4 (F♯ – C sang G – D).
- Với quãng 6 trưởng, thay quãng 8 hay quãng 3 nhân đôi bằng **quãng 4** (6/4/3) — sách cho là "còn tốt hơn".
- **Chuỗi hợp âm 6** trên bè trầm đi bậc: tốt nhất đệm **ba bè** chỉ với quãng 3, vì bốn bè dễ sinh quãng 5, 8 ẩn — "dù ở bè giữa vẫn bị cấm trong lối nghiêm khắc". Sách tả cảnh người chơi organ chỉ thấy số 6, giữ hợp âm gần nhau theo luật, và thế là "những quãng 5 và 8 xé tai" bật ra.

## Luật chung khi đệm (§XLVIII – LVII, tr. 37 – 39)
- Mọi bè đi đồng âm thì chỉ đánh bè trầm, hoặc nhân đôi ở tay phải để có *forte*. *Tasto solo*: giữ nốt, chỉ đánh lại khi nó yếu đi.
- Tay phải quá cao hay quá thấp thì chỉ đổi vị trí **ở hợp âm thuận**.
- Luật chung là đệm **bốn bè**; nhiều khi ba hay hai bè hay hơn, nhưng điều đó "chỉ có được nhờ kinh nghiệm chín chắn" — sinh viên cứ giữ bốn bè.
- Đồng âm thay quãng 8 ở chỗ chật, hay nhân đôi theo luật — vẫn tính là bốn bè.
- **Mỗi phần chính của ô nhịp đánh một hợp âm**: bốn hợp âm trong nhịp 4/4; hai trong ô hai phần (alla breve, 2/4, 6/4, 6/8 nhanh); ba trong ô ba phần (3/8, 3/4, 3/2, 9/8 chậm). Nhịp ba nhanh: hai hợp âm (phách đầu và phách cuối); chùm ba: một hợp âm ở nốt đầu. Luật này giữ nguyên khi bè trầm chia nhỏ hay có nốt lướt — hợp âm luôn đánh vào **phần thật của ô**. Xem [[nhip-dieu-hoa-am]].

## Bè trầm chạy nốt nhanh (§LXII, tr. 48)
- Bè trầm chạy đều trong ô nhịp chẵn: **một hợp âm** cho cả chuỗi; chạy không đều: một hợp âm **mỗi phần ô**, vì hoà âm nền đổi ở từng phần. Ô nhịp lẻ: một hợp âm cho cả chuỗi.
- Nhưng khi bè trầm **chuyển giọng**, mỗi nốt không phải nốt lướt đều phải ghi số và có hợp âm riêng.

## Bài tập (§LXII – LXXXIII, tr. 42 – 52)
Sách cho bài tập mọi hợp âm ở mọi vị trí, rồi hai mươi bài bass số: quãng 2 chuẩn bị, quãng 3 (thường không ghi số), quãng 4 chuẩn bị (ba bè và bốn bè), 4 – 6, 5 – 6, quãng 6, quãng 7 chuẩn bị, quãng 2 đi qua, 2 – 5, 2 – 4 – 5, quãng 7 đi qua, quãng 9, 4 – 9, 6 – 9, 7 – 9, rồi các hợp âm hỗn hợp ở ba và bốn bè. Vài lời dặn đi kèm:
- Nối hợp âm thuận khi bè nền đi lên quãng 5: đệm **ngược chiều**; khi đã ngược chiều thì **vị trí quãng 8** tốt hơn, vì vị trí quãng 3 hay sinh quãng 5 ẩn.
- Trong giọng thứ, đi thuận chiều sẽ sinh quãng 5, 8 ẩn và bước nhảy quãng 2 tăng — nên đi ngược chiều, và vị trí quãng 3 thì tốt hơn.
- Hợp âm 6 trong chuỗi quãng 4 chuẩn bị phải nhân đôi quãng 3 hoặc 6; nếu có quãng 6 tăng thì nhân đôi quãng 3 và **không bao giờ dùng vị trí quãng 3**.
- Chuỗi hợp âm 7 trên bè trầm đi quãng 4 – quãng 5 xen kẽ: hợp âm 7 đầu có quãng 3 và 8, hợp âm sau có quãng 3 và 5, hoặc ngược lại.
- Số không đặt ngay trên nốt thì hợp âm phải đánh **giữa nốt đó và nốt sau**.
Sinh viên "sẽ đến đích sớm hơn nếu từ chối trợ giúp của các hợp âm viết sẵn và chỉ theo bè bass số".

## Đệm chia hai tay (§CXXV, tr. 72 – 76)
- Không nhất thiết tay trái chỉ đánh nốt nền còn tay phải đánh hết các quãng; chia các quãng cho **cả hai tay**, vẫn giữ khoảng cách đúng luật, gọi là **đệm chia hai tay** (*divided accompaniment*).
- Mỗi hợp âm ba có quãng 8 nhân đôi có **sáu vị trí** so với bè trầm: ba vị trí đầu (quãng 5, 8 hoặc 3 trên cùng) dùng trong **hoà âm khép**; ba vị trí kia dùng trong **hoà âm rải**. Hợp âm 6, 6/4, 7, 4/3, 6/5, 2 cũng có sáu vị trí như vậy.
- Sách cho một câu bass số đệm thường, rồi đệm chia hai tay với hoà âm rải ở vị trí thứ nhất, thứ hai, thứ ba. Tập I kết thúc ở đây.
Đối chiếu khái niệm hiện đại: [[ky-nang-dan-phim-chuc-nang]].

Tiếp theo: [[sau-tien-hanh-nguy-hiem]].
`,
  },
  {
    slug: 'sau-tien-hanh-nguy-hiem',
    title: 'Sáu tiến hành nguy hiểm và hợp âm 7 cùng các dẫn xuất (Albrechtsberger)',
    category: 'harmony',
    aliases: ['sáu tiến hành nguy hiểm', 'six hazardous progressions', 'tiến hành nguy hiểm bass số', 'hợp âm 7 và dẫn xuất Albrechtsberger'],
    summary: 'Tập I, §XXXVII – XXXIX: sáu chỗ người đệm bass số dễ phạm quãng 5 – 8 liền nhất (quãng 2 sát bè trầm; quãng 4 tăng ở bè trong cùng; hợp âm 6 sau hợp âm ba trên bè trầm đi bậc; nhiều hợp âm 6 đi thuận chiều; hợp âm 7 giải quyết vào hợp âm ba hoàn toàn; quãng 9 rồi hợp âm 5 – 6 khi bè trầm lên quãng 3) cùng cách sửa từng chỗ, rồi cách nối hợp âm 7 và các hợp âm dẫn xuất: 5 – 6, 3 – 4 – 6, 2, 9, 11 (hợp âm 4 – 5), 13.',
    refs: [SRC],
    body: `
## Sáu tiến hành nguy hiểm (§XXXVII, tr. 29 – 32)
"Trường hợp vừa nói dẫn ta đến **sáu tiến hành nguy hiểm**, phải hết sức tránh."
| # | Tiến hành | Cách sửa theo sách |
|---|---|---|
| 1 | **Quãng 2 là quãng thấp nhất**, ngay sát bè trầm | Đổi vị trí hoặc bỏ một quãng. Nếu một trong hai quãng 5 là đúng, quãng kia giảm, thì dùng được trong lối tự do, nhưng tốt hơn là đổi vị trí hợp âm sau để quãng 2 đi xuống |
| 2 | **Quãng 4 tăng là quãng trong cùng** của các bè đệm | Bỏ quãng 2, hoặc đi xuống từ hợp âm đầu vào hợp âm 4 tăng |
| 3 | **Hợp âm 6 sau hợp âm ba**, hay ngược lại, trên bè trầm đi bậc | Cách duy nhất "mà cả chuyển động ngược chiều cũng không làm dịu" là **bỏ quãng 8 của nốt nền**. Thêm: sau hợp âm 6 mà đến hợp âm ba có quãng 5 giảm thì các bè đệm phải **đi lên ngược chiều** bè trầm; hợp âm 6 sau quãng 5 thì nhân đôi quãng 6 hay đổi vị trí; quãng 5 giảm không được đi sang quãng 5 đúng (lên hay xuống) |
| 4 | **Nhiều hợp âm 6 đi thuận chiều** — sinh quãng 5 liền, có khi quãng 8 liền với bè trầm | Ngược chiều hoặc nhân đôi đúng |
| 5 | **Hợp âm 7 có quãng 3 và 5, giải quyết vào hợp âm ba hoàn toàn** — sinh quãng 5 liền | Đổi vị trí, đi ngược chiều, đôi khi nhân đôi một quãng, hoặc chia quãng cho hai tay (coi chừng quãng 5 ẩn). **Không được** cho cảm âm đi xuống để có ngược chiều: cảm âm "luôn cần giải quyết đi lên một bậc" |
| 6 | **Quãng 9** ở bè trên hay bè giữa, rồi **hợp âm 5 – 6 có quãng 5 giảm** khi bè trầm đi lên quãng 3 — hai quãng 5 đúng liền nhau; hay gặp nhất ở vị trí quãng 5 | (1) bỏ một quãng, nhân đôi một thuận âm — giọng thứ bỏ quãng 5 đúng, nhân đôi quãng 3 thứ; giọng trưởng giữ quãng 5 nhưng nhân đôi quãng 3 của hợp âm 5 – 6 rồi mới đánh quãng 6; (2) đánh chuỗi quãng 9 chỉ **ba bè**; (3) đệm bốn bè thì **ngược chiều là chắc nhất** |
Bài hiện đại về cùng vấn đề: [[dan-giong]], [[luat-hoa-am-bon-be]].

## Nối hợp âm 7 (§XXXVIII, tr. 32)
Sách phân tích một chuỗi hợp âm 7 kết ở Mi thứ:
- Ở hợp âm thứ hai, **bỏ quãng 5** và thay bằng quãng 8 của nốt nền, để tránh quãng 5 liền.
- Quãng 7 của hợp âm thứ hai đã **được chuẩn bị** bằng quãng 8 ở hợp âm trước, rồi **giải quyết** vào quãng 3 ở hợp âm sau; còn quãng 3 cũ trở thành quãng 7 của nốt trầm mới — cơ chế chuỗi hợp âm 7 (xem [[mo-tien-hoa-am]]).
- Ở hợp âm Mi thứ cuối, nhân đôi quãng 3 và bỏ quãng 8 để quãng 5 giảm không đi thuận chiều vào quãng 5 đúng.

## Các hợp âm dẫn xuất (§XXXIX, tr. 32 – 36)
"Ai đã nắm đủ cách nối hợp âm 7 thì cũng biết cách xử lý các dẫn xuất của nó": quãng 5 trong hợp âm **5 – 6**, quãng 3 trong hợp âm **3 – 4 – 6**, quãng 2 trong hợp âm **2 – 4 – 6** (khi nằm sát bè trầm) đều xử lý như quãng 7.
| Hợp âm | Theo sách |
|---|---|
| **2** | Quãng 7 ở trên trở thành **quãng 2 chuẩn bị ở bè trầm**; bè trầm "đúng bản chất" đi xuống một bậc, kéo quãng 6 đi theo, tạo hợp âm 3 – 5 – 6 rồi giải quyết vào chủ âm |
| **9** | Sinh ra khi thêm quãng 3 dưới hợp âm 7, nên "quãng 9 thật ra chỉ là quãng 7 của hợp âm gốc" và xử lý như thế; không phải lúc nào cũng đủ năm bè — bỏ quãng 5 hay quãng 7 tuỳ ý |
| **11** | Thêm quãng 5 dưới hợp âm 7; bốn bè thì bỏ quãng 5 hoặc 9; ghi số **4** thay vì 11. Quãng 9 có thể đi lên quãng 10 hay xuống quãng 8. Bỏ cả 7 và 9 (nhân đôi quãng 8) còn lại **hợp âm 4 – 5** |
| **13** | Thêm nốt nền dưới hợp âm 7 giảm (dưới G♯ – B – D – F thêm A): quãng 7 thành quãng 13, quãng 5 thành 11, quãng 3 thành 9, nốt gốc thành quãng 7 (cảm âm); quãng 11 phải đi xuống, quãng 9 đi lên hay xuống đều được |
Những hợp âm này được chuẩn bị bằng chính hợp âm 7 mà chúng sinh ra, "để các quãng đã có mặt và dùng được làm nốt treo".

Tiếp theo: [[hoa-am-thuan-khiet-albrechtsberger]].
`,
  },
  {
    slug: 'hoa-am-thuan-khiet-albrechtsberger',
    title: 'Hoà âm thuần khiết và các quãng tăng – giảm (Albrechtsberger)',
    category: 'harmony',
    aliases: ['hoà âm thuần khiết', 'pure harmony', 'quãng 4 thuận', 'consonant fourth', 'quãng tăng giảm Albrechtsberger', 'Lauda Sion Albrechtsberger'],
    summary: 'Tập I, §LXXXIV – XCVIII: "hoà âm thuần khiết" — viết ba, bốn bè chỉ bằng thuận âm và không có quãng 4 thuận giữa các bè trên — vì sao quãng 4 đó bị loại, cách xếp hợp âm thay thế, các hợp âm 6 phải tránh, ba bài mẫu của Albrechtsberger; rồi bảng chỗ ngồi, quãng đi kèm và cách chuẩn bị – giải quyết của từng quãng giảm và tăng, đến quãng 6 tăng có "hợp âm gốc là hợp âm ba giảm kép".',
    refs: [SRC],
    body: `
## Hoà âm thuần khiết (§LXXXIV, tr. 52 – 55)
- **Định nghĩa**: "Khi một bài ba hay bốn bè chỉ gồm thuận âm hoàn toàn và không hoàn toàn, và **không có quãng 4 thuận**, thì nói nó viết bằng **hoà âm thuần khiết**."
- **Quãng 4 thuận** nằm "từ quãng 5 đến quãng 8" trong hợp âm hoàn toàn, và "từ quãng 3 đến quãng 6" trong hợp âm không hoàn toàn. Ví dụ trên bè trầm C, nốt G (quãng 5) và nốt C trên (quãng 8) cách nhau một quãng 4.
- **Vì sao loại**: các quãng đều thuận với bè trầm, "nhưng vị trí của chúng với nhau tạo thành những quãng 4, mà tai tinh tế nghe như nghịch âm, nên **không được phép trong lối viết thuần khiết**".
- **Cách xếp**: chọn vị trí sao cho không quãng nào tạo quãng 4 với quãng khác, mà quãng 5 luôn nằm **trên đồng âm hay quãng 8 của bè trầm**. Hệ quả: đôi khi phải nhân đôi quãng 3 để tránh quãng 5 liền (bỏ quãng 5 thì không thể có quãng 4 thuận); đôi khi nhân đôi quãng 5 để tránh quãng 8 liền; quãng 3 nhân đôi không bao giờ được là cảm âm.
- Với hợp âm hoàn toàn, **quãng 8 không bao giờ nằm ở bè trên**; với hợp âm 6, **quãng 6 không bao giờ nằm ở bè trên**.
- Bài chỉ có hợp âm hoàn toàn, không nhân đôi quãng 3, là "thuần khiết và trong sáng nhất". Đồng âm nhân đôi (hai bè) chỉ hợp ở kết cuối, vì ở giữa nghe quá mỏng.
- **Hợp âm 6 phải tránh** (ngoài 6 giảm, 6 tăng): quãng 3 trưởng với quãng 6 thứ (chứa quãng 4 giảm hoặc 5 tăng giữa các bè trên); quãng 3 thứ với quãng 6 trưởng (chứa quãng 4 tăng hoặc 5 giảm).
- **Ba bài mẫu**, đều ghi "của Albrechtsberger": *Miserere* (toàn hợp âm hoàn toàn), *Amplius lava me* (hoàn toàn và không hoàn toàn), và thánh ca *Lauda Sion salvatorem* bốn bè "không có quãng 4 thuận".
Cùng mối quan tâm có mặt trong đối âm nghiêm khắc, nơi quãng 4 là nghịch giữa hai bè: [[quang-va-chuyen-dong-doi-am]].

## Các quãng tăng – giảm (§LXXXV – XCVIII, tr. 55 – 58)
Sách nói dùng đúng các quãng nghịch, tăng và giảm cần "sự chắc chắn chỉ có được nhờ thực hành và kinh nghiệm".
| Quãng | Chỗ ngồi | Đi kèm | Chuẩn bị – giải quyết |
|---|---|---|---|
| 3 giảm | chỉ ở giọng thứ, trên bậc IV tăng (C♯ ở Son thứ) | 5 giảm, 7 giảm | Luôn chuẩn bị, giải quyết đi xuống; ghi bằng đường cong Telemann; có thể thay quãng 3 thứ trong hợp âm 7 giảm "vì nghe bớt gắt" |
| 4 giảm | cảm âm của mọi giọng thứ (F♯ ở Son thứ) | — | Như quãng 3 giảm |
| 5 giảm | bậc VII, giọng trưởng và thứ | 3 thứ, 6 | Có hoặc không chuẩn bị; không chuẩn bị thì giải quyết đi xuống |
| "5 thứ" (quãng 5 của hợp âm ba giảm, ghi số 5) | cảm âm giọng trưởng; bậc II giọng thứ khi bè trầm nhảy và hoà âm bốn bè | 3 thứ, 8 | Được coi là **thuận không hoàn toàn** — không cần chuẩn bị, giải quyết |
| 6 giảm | bậc IV tăng, chỉ giọng thứ | — | Nốt treo của quãng 5 giảm trong hợp âm 7 giảm; chuẩn bị, giải quyết đi xuống |
| 7 giảm | bậc IV tăng hoặc cảm âm, chỉ giọng thứ | 3 thứ, 5 giảm | Có hoặc không chuẩn bị; luôn giải quyết đi xuống |
| 8 giảm | bậc IV tăng | 3, 5 | Nốt treo của quãng 7 ngay sau; chuẩn bị, đi xuống |
| Đồng âm tăng | trên chủ âm | 3 và 5, hoặc 4 và 6 | "Phần nào như nốt lướt"; giải quyết đi lên |
| 2 tăng | bậc VI giọng thứ | 4 tăng, 6 trưởng | Chuẩn bị ở bè nền, giải quyết đi xuống |
| 3 tăng | bậc II thứ của giọng thứ | 2 trưởng, 5 tăng | "Hợp âm đến sớm", đổi thành 3 – 4 tăng – 6 |
| 4 tăng | bậc IV của mọi giọng (với 2 hoặc 3 thứ và 6 trưởng) | — | Không cần chuẩn bị, hoặc là nốt lướt; luôn giải quyết đi lên |
| 5 tăng | trên hợp âm ba trưởng của giọng trưởng; bậc III giọng thứ | 3, 8 | Chuẩn bị hay đi qua đều giải quyết đi lên |
| 6 tăng | bậc VI giọng thứ | 3 trưởng nhân đôi; hoặc 3 trưởng và 4 tăng (quãng 4 phải chuẩn bị như quãng 5); hoặc 3 trưởng và 5 đúng khi sau là 6/4 (giọng trưởng) | Luôn giải quyết đi lên. "**Hợp âm gốc của nó là hợp âm ba giảm kép**" |
Đối chiếu cách gọi ngày nay: [[hop-am-sau-tang]], [[hop-am-bay-giam]], [[hop-am-cam-am]].

Tiếp theo: [[chuyen-giong-va-ket-albrechtsberger]].
`,
  },
  {
    slug: 'chuyen-giong-va-ket-albrechtsberger',
    title: 'Chuyển giọng, kết và các kết đánh lừa "Inganni" (Albrechtsberger)',
    category: 'harmony',
    aliases: ['chuyển giọng Albrechtsberger', 'Inganni', 'kết đánh lừa Albrechtsberger', 'năm giọng họ hàng', 'hợp âm 7 giảm trùng âm Albrechtsberger'],
    summary: 'Tập I, §XCIX – CXXIV: định nghĩa chuyển giọng, năm giọng họ hàng của Đô trưởng và La thứ, chuyển giọng qua hợp âm 7 thứ của giọng mới, qua hợp âm 6/5 có quãng 5 giảm, qua hợp âm 7 giảm và bốn dạng "trùng âm" của nó, từ một hợp âm ba sang cả 24 giọng; bốn loại kết (hoàn toàn, không hoàn toàn, ngắt, đánh lừa) và mười lăm nhóm kết đánh lừa "Inganni" xếp theo hợp âm.',
    refs: [SRC],
    body: `
## Chuyển giọng là gì (§XCIX, tr. 58)
- Mỗi bài có một **giọng chính**, "mở đầu và phải kết đúng luật" ở đó. Đứng mãi một giọng thì "nhàm chán, đơn điệu" — "*Đa dạng thì dễ chịu!*". Khi một câu đã ở giọng chính đủ lâu để tai nhận chắc chủ âm, "luật đa dạng đòi hỏi sang giọng khác, và gọi là **chuyển giọng**".
- **Định nghĩa**: "Chuyển giọng là nghệ thuật nối các giọng gần hay xa bằng một chuỗi hợp âm khéo, dễ, trôi chảy tự nhiên, hoặc đôi khi bất ngờ, gây ngạc nhiên."

## Năm giọng họ hàng
| Từ Đô trưởng | Quan hệ | Từ La thứ | Quan hệ |
|---|---|---|---|
| Son trưởng | át | Đô trưởng | quãng 3 thứ trên |
| Mi thứ | quãng 3 trên | Mi thứ | át |
| La thứ | quãng 6 trên | Son trưởng | quãng 7 thứ trên |
| Rê thứ | quãng 2 trên | Rê thứ | quãng 4 trên |
| Fa trưởng | quãng 4 trên | Fa trưởng | quãng 6 trên |
Hai câu bass số mẫu đi qua đủ năm giọng rồi về nhà. Đối chiếu: [[chuyen-giong]].

## Các con đường chuyển giọng (§C – CVII, tr. 58 – 63)
| Cách | Theo sách |
|---|---|
| **Hợp âm 7 thứ của giọng mới** (hay thể đảo) | "Cách tự nhiên nhất". Đô → Son: qua hợp âm 4/2 trên C (thể đảo của D – F♯ – A – C) |
| **Hợp âm 6/5 có quãng 5 giảm** | Đô → La thứ: tai chờ kết về Son trưởng thì gặp một kết đánh lừa, rồi hợp âm 6/5 "dẫn bất ngờ" sang La thứ |
| **Quãng 6 trưởng với quãng 3 thứ** | La thứ → Rê thứ, Đô → Mi thứ, La thứ → Fa trưởng, Đô → Rê thứ, La thứ → Son trưởng |
| **Hợp âm 7 giảm** | "Rất hợp để chuyển sang mọi giọng" qua vài hợp âm trung gian; sách cho từ Đô sang mười một giọng, trưởng hay thứ |
| **Hợp âm 7 giảm "trùng âm"** | "Hợp âm này, gọi là **trùng âm**, có **bốn dạng biến đổi**, nhờ đó ta chuyển sang mọi giọng": 7/5/3, 6/5/3, 6/4/3, 6/4/2 |
| **Từ một hợp âm ba sang mọi giọng** | Từ hợp âm Đô trưởng sách cho đường sang đủ 11 giọng trưởng và 12 giọng thứ; từ Đô thứ cũng vậy. Sách dặn dịch các ví dụ sang mọi giọng, mọi vị trí |
Xem thêm [[hop-am-bay-giam]], [[trung-am]].

## Bốn loại kết (§CVIII, tr. 64)
| Kết | Theo sách | Gần với |
|---|---|---|
| **Hoàn toàn** | Bè nền đi từ át về chủ, "kết bài với sự thoả mãn trọn vẹn" | kết chính thức |
| **Không hoàn toàn**, nửa kết | Từ chủ hay hạ át đến át; giọng thứ còn từ bậc VI đến át | nửa kết |
| **Ngắt** (interrupted) | Đã chuẩn bị đúng cho một hợp âm hoàn toàn nhưng kết chờ đợi bị thay bằng hợp âm khác | kết lừa |
| **Đánh lừa** (deceptive) — "**Inganni**" | "Phần nào là kết ngắt nhưng mở rộng nhiều": một chuỗi hợp âm nối đúng luật lại **kết ở giọng lạ**, người nghe "ngạc nhiên, bối rối và bị đánh lừa" | — |
Lưu ý thuật ngữ: "kết ngắt" của sách là cái ngày nay thường gọi là kết lừa; "kết đánh lừa" của sách rộng hơn — kết hẳn sang giọng khác. Đối chiếu: [[cau-ket]]. Theo danh mục tác phẩm trong sách, Albrechtsberger có in riêng một tập *Inganni (Trugschlüsse)*.

## Mười lăm nhóm kết đánh lừa (§CIX – CXXIII, tr. 64 – 71)
Với người thạo chuyển giọng, "có thể tạo kết đánh lừa muôn hình vạn trạng, vì từ mọi quãng có thể chuyển, như qua một mê cung, sang mọi giọng". Sách xếp ví dụ theo hợp âm dùng để đánh lừa:
| Qua hợp âm | Một vài ví dụ (từ → đến) |
|---|---|
| quãng 2 thứ | Rê thứ → Si giáng trưởng, Mi giáng trưởng |
| quãng 2 trưởng | Đô trưởng → Mi thứ, Fa trưởng, La thứ, Rê thứ |
| quãng 2 tăng | Đô trưởng → Son trưởng, La thứ, Si thứ, Rê thứ, Fa thăng thứ |
| hợp âm ba thứ | Đô thứ → Si giáng trưởng, Fa thứ, La giáng trưởng, Rê thứ… |
| hợp âm ba trưởng | Đô trưởng → Si giáng trưởng, Fa trưởng, Son thứ, La trưởng… |
| quãng 4 đúng với quãng 5 | Rê thứ → Si giáng trưởng, Rê trưởng; Đô trưởng → La trưởng |
| quãng 4 tăng với quãng 2 trưởng | Đô trưởng → Rê thứ, La thứ, Đô thứ, Mi, La trưởng, Son |
| quãng 4 tăng với quãng 3 thứ | Mi thứ → La thứ, Si giáng trưởng, Son trưởng, Đô trưởng, Đô thăng thứ |
| quãng 5 giảm với quãng 3 thứ và 6 | Đô trưởng → Đô thứ; Rê thứ → La thứ, Son, Fa trưởng, Rê trưởng… |
| 3 – 4 – 6 | Đô trưởng → La thứ, Fa, La trưởng, Fa thứ, La giáng trưởng, Son thăng thứ… |
| quãng 6 tăng | La thứ → Si trưởng, Đô trưởng, Rê thứ, Mi thứ |
| 7 giảm | Rê thứ → Son thứ, Fa trưởng, Fa thứ, La giáng trưởng, Rê trưởng, Si thứ… |
| 7 át | Đô trưởng → Fa trưởng, Fa thứ, Đô thứ, Si giáng trưởng, Mi thứ, Rê thứ |
| 7 trưởng | Đô trưởng → Rê thứ, Đô thứ, Fa |
| hai hợp âm 9 | Đô trưởng → Mi thứ, Đô thứ; Fa trưởng → Đô trưởng, Rê thứ… |
Chương cuối nhóm này (§CXXIV) là hai bài bass số dài nối liền nhiều kết đánh lừa.

Tiếp theo — Tập II: [[nen-tang-sang-tac-albrechtsberger]].
`,
  },
  {
    slug: 'nen-tang-sang-tac-albrechtsberger',
    title: 'Nền tảng sáng tác: điệu thức, giọng gần, lối nghiêm khắc và lối tự do (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['lối nghiêm khắc và lối tự do', 'stilo alla capella', 'strict and free composition', 'Notae abjectae', 'giọng gần Albrechtsberger', 'Mi Fa Albrechtsberger'],
    summary: 'Tập II, §CXXVI – CXXXI — phần chính Albrechtsberger viết: quãng và cách ghi số khi sáng tác, thuận – nghịch (mọi quãng 4 là nghịch), ba kiểu chuyển động, sáu điệu thức cổ và 24 giọng mới, năm giọng gần và thứ tự chuyển giọng thường dùng, hoà âm cho âm giai bè trầm theo lối cổ và lối mới, cách đệm khi bè trầm nhảy, định nghĩa sáng tác nghiêm khắc (stilo alla capella) và tự do, các luật chung của năm loại.',
    refs: [SRC],
    body: `
Từ Tập II, theo lời tựa, là bản thảo của **chính Albrechtsberger**, "gần như đúng lời ông giảng" (xem [[he-thong-albrechtsberger]]). Câu mở đầu: "Mọi tác phẩm âm nhạc đều gồm những hợp âm, được luật của chân và mỹ sắp đặt, thành một chỉnh thể trọn vẹn"; nghệ thuật sáng tác là nắm những luật để "nối các ý một cách tự nhiên, làm vừa tai và thành một chỉnh thể hoàn toàn đúng".

## Quãng, thuận – nghịch, chuyển động (§CXXVI – CXXVIII, tr. 81 – 83)
- Khi ghi số: số nhỏ viết **dưới** số lớn; **không ghi số** hợp âm hoàn toàn ở nốt trầm đầu và cuối (hầu hết bài mở bằng hợp âm ba — trừ khi mở bằng hợp âm 6 trên bậc III — và kết bằng hợp âm ba ở giọng chính); đa số hợp âm, nhất là thuận (trừ 6/4), chỉ cần một số.
- **Thuận hoàn toàn**: đồng âm, quãng 5, quãng 8. **Thuận không hoàn toàn**: quãng 3, 6, 10 thứ và trưởng. **Nghịch**: đồng âm tăng, quãng 2 thứ, trưởng, tăng, quãng 3 giảm, "**cả ba quãng 4**", quãng 5 giảm và tăng, quãng 6 tăng, ba quãng 7, quãng 8 giảm, hai quãng 9.
- Chú thích của tác giả: "Nay người ta còn viết cả quãng 6 giảm; ai cho phép điều đó thì cũng phải chấp nhận quãng 3 tăng, trong đối âm kép ở quãng 8."
- **Ba kiểu chuyển động**: thuận chiều, xiên, ngược chiều. Kiểu "song song" (nốt lặp) bị bỏ, vì trong đối âm nghiêm khắc **không được đánh lặp một nốt**. Thuận chiều là "nguy hiểm nhất, nhất là trong sáng tác nghiêm khắc hai bè, nơi không chấp nhận quãng 5, 8 hay đồng âm ẩn".

## Điệu thức và giọng (§CXXIX, tr. 83 – 84)
- "Tiền nhân chúng ta, nhiều trăm năm trước, bằng lòng với sáu giọng sau, có lẽ gốc từ Hy Lạp": **Dorius** (D), **Phrygius** (E), **Lydius** (F), **Mixolydius** (G), **Aeolius** (A), **Jonicus** (C) — không có điệu trên B. Xem [[dieu-thuc]].
- **Chính thức** (authentic): kết bằng bè nền đi xuống quãng 5 (G – C); **phụ** (plagal): sáu giọng tương ứng, kết bằng bè nền đi xuống quãng 4 (C – G). Chú thích: ngày nay kết kiểu phụ thì thường treo quãng 8 ở hợp âm áp chót bằng quãng 9.
- Các **giống** (genus): diatonic (chủ yếu nguyên cung), chromatic (nửa cung lạ), enharmonic (phần tư cung), mixtum (cả ba) — sách dẫn Marpurg.
- Nay thừa nhận **24 giọng** (12 trưởng, 12 thứ); giọng thứ song song ở quãng 3 thứ dưới giọng trưởng.
- Trong bài dài (giao hưởng, concerto, tứ tấu, hợp xướng, fugue dài) chỉ dùng **năm giọng gần** (analogous keys). Thứ tự thường gặp ở giọng trưởng: lên át → bậc VI thứ → bậc IV → bậc II thứ → có thể bậc III thứ → về chủ (Đô → Son → La thứ → Fa → Rê thứ → Mi thứ → Đô). Ở giọng thứ: chủ → bậc III (Đô trưởng) → bậc VII (Son trưởng) → át (Mi thứ) → bậc IV (Rê thứ) → bậc VI (Fa trưởng) → về La thứ. **Không** phải giọng gần: bậc VII của giọng trưởng, bậc II của giọng thứ.
- "Thứ tự trên không phải là luật; khiếu thẩm mỹ tinh và cảm nhận đúng — trên hết là nghiên cứu kỹ những mẫu hay — mới là người dẫn đường chắc nhất." Chú thích: luật năm giọng gần "có lẽ đã trói buộc thiên tài quá mức nửa thế kỷ trước", nhưng nay người ta lại tưởng chuyển qua mọi giọng là đỉnh cao; "cực đoan thì luôn phải tránh, đường giữa luôn là tốt nhất".
- **Chuyển trùng âm** (G♯ – A♭): đặt dấu luyến ở bè đổi tên, nhất là kèn và dây, để dàn nhạc không vênh với organ, "vốn không có phần tư cung vì luật bình quân cố định" (xem [[luat-binh-quan]]).

## Âm giai của bè nền (§CXXX, tr. 84 – 88)
- **Âm giai bè trầm lối cổ**: chỉ hợp âm hoàn toàn hay hợp âm 6 — dùng cho mọi giọng trong **lối nghiêm khắc**. **Lối mới**: "ba hợp âm hoàn toàn, hai không hoàn toàn và ba nghịch" — dùng trong **lối tự do**. Đối chiếu quy tắc quãng 8: [[dem-bass-so-albrechtsberger]].
- Bè trầm đi chậm có thể đặt hai hợp âm trên mỗi nốt; cảnh báo một ví dụ có "năm quãng 5 ẩn phải luôn tránh ở phần mạnh của ô". Ở Đô thứ, "bè trầm đi xuống quãng 7 giảm còn hơn đi lên quãng 2 tăng".
- Giọng thứ: đi lên thì **nâng bậc 6 và 7** "cho giai điệu tốt hơn", đi xuống giữ nguyên; nhịp chậm thì các bậc thầy đôi khi giữ bậc 6. Âm giai trưởng – thứ của các nhà soạn nhạc mới "không thuộc loại 1 của lối nghiêm khắc", vì loại 1 cấm mọi nghịch âm không chuẩn bị.

| Bè trầm nhảy | Nốt thứ hai mang |
|---|---|
| lên quãng 3 / xuống quãng 6 | hợp âm 6, chuyển động xiên |
| lên quãng 4 / xuống quãng 5 | hợp âm hoàn toàn theo giọng |
| lên quãng 5 / xuống quãng 4 | như trên |
| lên quãng 6 / xuống quãng 3 | khi hoàn toàn, khi không hoàn toàn |
| lên quãng 7 thứ / xuống quãng 2 trưởng | hợp âm 2 – 4 tăng – 6 trưởng, chuyển động xiên |
| lên quãng 7 trưởng / xuống quãng 2 thứ | như trên nếu là nốt lướt; nếu là nốt thật và đi lên: 5 giảm, 3 thứ, 6 |
| quãng 8 | giữ nguyên hoà âm |
- Dưới một bè trên, nốt nền có thể là quãng 3, 6, 5 hoặc 8 dưới — "là những thuận âm duy nhất dùng xen kẽ dưới một bè trên trong bốn loại đầu".

## Nghiêm khắc và tự do (§CXXXI, tr. 88 – 89)
**Sáng tác nghiêm khắc**
- "Là lối chỉ dùng **giọng hát**, không có nhạc cụ đệm", nên luật chặt hơn, "vì ca sĩ không phát âm dễ như nhạc công". Dùng chủ yếu ở nhà thờ, nên gọi là ***Stilo alla Capella***; có thể đệm organ, hoặc violin – oboe theo bè cao, trombone theo alto – tenor, contrebass – cello – bassoon theo bè trầm.
- Khi không đệm: không được nhảy quãng nghịch, trừ quãng 4 và 5 giảm có giải quyết sớm; cấm nhảy **đến hay từ** một nghịch âm.
- Hai bè: trong cả năm loại **không chấp nhận quãng 5, 8, đồng âm ẩn**; ba bè cho phép vài chỗ, bốn bè nhiều hơn — "nhưng phải đặc biệt coi chừng ở bè trên".
- **Loại 1** không có hợp âm nghịch nào — chỉ hợp âm hoàn toàn và hợp âm 6. **Loại 2, 3** cho nghịch âm khi là **nốt lướt đi bậc ở phần nhẹ**, trừ các "nốt đổi" của Fux. **Không** dùng *Notae abjectae* ("nốt bỏ" — vừa đi qua, vừa nhảy, vừa lạ với hợp âm; chỉ được trong lối tự do, nhất là bè violin). Mọi nốt treo (từ loại 4) phải chuẩn bị bằng thuận âm và **giải quyết đi xuống** nửa cung hay một cung. **Cấm** đoạn chromatic và enharmonic.
- "Thuộc về sáng tác nghiêm khắc là **năm loại đầu**, như trình bày trong sách này và **sách của Fux**." Ví dụ gần như toàn *alla breve*.
- **Không lặp nốt**: không loại nào cho lặp một nốt cùng tên trong một ô — trừ loại 5 ở nốt treo bị ngắt, và bài có lời với nhiều âm tiết ngắn.

**Sáng tác tự do**
- Cho phép nghịch âm **không chuẩn bị** ở mọi phần ô, "nhưng luôn phải giải quyết đúng và tự nhiên"; lặp nốt, nhảy quãng nghịch (nhất là ở violin, viola, cello, bassoon), nốt hoa mỹ, dấu lặng để thở.
- Cả hai lối: "mọi nốt **Fa** giải quyết đi xuống nửa cung, mọi nốt **Mi** đi lên nửa cung, trừ khi dùng kết đánh lừa".
- Ba phong cách tự do: **nhà thờ, thính phòng, sân khấu** — xem [[phu-luc-albrechtsberger]].
- Lời khuyên: "Ta tìm được nghìn ví dụ lối tự do dễ hơn hai mươi ví dụ lối nghiêm khắc"; vì không có nguyên lý đối âm thì không đạt được độ trong sáng ở lối nào, "nên bắt đầu bằng sáng tác nghiêm khắc hai bè".

Tiếp theo: [[nam-loai-hai-be-albrechtsberger]].
`,
  },
  {
    slug: 'nam-loai-hai-be-albrechtsberger',
    title: 'Năm loại sáng tác nghiêm khắc hai bè (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['năm loại Albrechtsberger', 'mười luật loại 1 Albrechtsberger', 'Mi contra Fa', 'Ottava battuta', 'nốt treo dài ngắn', 'changing notes Fux Albrechtsberger'],
    summary: 'Tập II, §CXXXII – CXXXVII: loại 1 với mười luật đánh số (Mi contra Fa, quãng 5 – 8 ẩn, kết, bước nhảy cấm), luật giai điệu, Ottava battuta, các bài mẫu có liệt kê lỗi; loại 2 với năm điểm, loại 3 với bảng phách mạnh – nhẹ và hai "nốt đổi" của Fux, loại 4 với nốt treo nghịch và thuận cùng cách giải quyết, loại 5 hoa mỹ với bốn độ dài nốt treo — và những chỗ Albrechtsberger tự nói là khác Fux.',
    refs: [SRC, ['Wikipedia — Gradus ad Parnassum', 'https://en.wikipedia.org/wiki/Gradus_ad_Parnassum']],
    body: `
Albrechtsberger gọi năm cấp của Fux là năm **loại** (*class*) và dạy trên một **chorale** (*canto fermo*), với đối âm ở trên hay ở dưới. Sách dặn: dạy loại 1 đủ ở nhiều giọng trưởng thứ rồi mới sang loại 2 "với cùng những chorale". Đối chiếu năm loại theo nguyên văn Fux: [[nam-loai-hai-be-fux]].

## Loại 1: nốt chọi nốt — mười luật (§CXXXII, tr. 89 – 91)
1. Khi hai nốt của hợp âm sau tạo **thuận hoàn toàn**, tránh chuyển động thuận chiều; dùng xiên hoặc ngược chiều. **Quãng ẩn**: một quãng 8 đến bằng bước nhảy "chứa quãng 5, dù không đánh mà tai tự điền". Với organ có pedal, quãng 5, 8 liền phải tránh **cả khi ngược chiều**, vì người chơi hay đổi quãng 4 đi lên thành quãng 5 đi xuống.
2. Khi hợp âm sau là **thuận không hoàn toàn**, dùng được cả ba chuyển động. (Từ loại 2, nghịch âm "xếp chung với thuận không hoàn toàn".)
3. **Mở và kết bằng thuận hoàn toàn**; đối âm ở trên **không kết** bằng quãng 5, đối âm ở dưới **không mở** bằng quãng 5 — kết bằng quãng 5 "nghe mỏng", mở với quãng 5 làm nốt nền "chỉ sang giọng lạ".
4. Mọi ô có hợp âm thuận, **không hoàn toàn nhiều hơn hoàn toàn**.
5. **Tránh đồng âm** — "nghe quá mỏng" — trừ ô đầu và ô cuối.
6. Chorale ở trên: nốt áp chót của đối âm dưới là **quãng 3 thứ** (kết đồng âm) hay **quãng 10** (kết quãng 8). Chorale ở dưới: đối âm trên có **quãng 6 trưởng** ở nốt áp chót, kết quãng 8.
7. Hai quãng 3 trưởng không đi liền nhau khi bước **một cung**; được khi bước nửa cung. Cũng không được khi cả hai bè nhảy quãng 3 trưởng — sinh **Mi contra Fa**. Theo cách gọi cổ, Mi là âm dưới, Fa là âm trên của nửa cung lớn; hợp âm thuộc giọng thăng nối hợp âm thuộc giọng giáng tạo "một vị trí chéo nghịch tai, gọi là Mi contra Fa". Hai quãng 3 trưởng khi cả hai bè nhảy quãng 5 đúng cũng cấm, vì tạo quãng 7 trưởng chéo — "luôn khó hát".
8. Kết trọn hay nửa kết **cấm ở giữa bài**; ở hai ô cuối được phép nửa kết.
9. **Cấm** nhảy mọi quãng tăng, phần lớn quãng giảm và cả ba quãng 7 — "những quãng khó hát". Bài hát không đệm phải tránh mọi thứ làm lung lay việc hát dễ và chắc. Không nhảy quá quãng 8.
10. Không dùng **quá ba** quãng 3 hay 6 liền thuận chiều — chúng "phá vẻ trang nghiêm" và chỉ hợp với bài hát vui hay opera. Đối âm hai bè không đứng yên quá ba ô. Các bước nhảy qua ba, bốn nốt **phác ra quãng 7 trưởng hay quãng 9** là sai; quãng 7 thứ thì được; quãng 4 tăng qua hai, ba nốt cũng cấm.

## Luật giai điệu và Ottava battuta (§CXXXIII, tr. 91 – 94)
- Trước khi viết, xét **những giọng mà chorale đi qua**; giọng gốc được nhận ra ở nốt cuối.
- Sau bước nhảy quãng 6 hay 8 thì đi ngược lại; **cảm âm** đi lên nửa cung, **bậc 4** (nhất là giọng trưởng) đi xuống bậc 3.
- ***Ottava battuta*** — quãng 8 đánh ở phần mạnh khi bè trên **nhảy xuống** quãng 4, 5, 6 vào quãng 8 còn bè dưới đi lên một bậc ngược chiều. "Các bậc thầy cổ cấm nó ở bài hai bè trở lên; tôi không dùng nó ở bài hai bè, dù nghiêm khắc hay tự do; nó chấp nhận được ở ba bè, càng được ở bốn bè" — có lẽ vì "hiệu quả mơ hồ, giống đồng âm".
- Sách cho bài mẫu có **sáu lỗi** và bài có **bảy lỗi**, kể từng lỗi: mở không đúng giọng mà chorale kết; đồng âm ở giữa; quãng 8 "kiểu kết" sau quãng 6 trưởng; quãng 4 tăng ở loại 1 (không có nghịch âm); quá nhiều quãng 6 liền; nhảy quãng 4 tăng; quãng 8 ẩn; quãng 5 giảm; đoạn chromatic; quãng 3 thứ ở nốt áp chót (phải là quãng 6 trưởng); quãng 5 ở ô cuối. Lời ghi chú: các bè được bắt chéo; khi có chéo bè thì hơn ba quãng 3 liền cũng được.
- **Fux và điệu Phrygian**: "Lạ là Fux, trong ví dụ của ông, mở điệu này bằng quãng 3 thứ và kết bằng quãng 3 trưởng như các giọng thứ khác. Nhưng danh tiếng ông vẫn bất tử… Tôi sẽ giữ 24 giọng đã định của các bậc thầy hiện đại trong suốt năm loại." Với giọng xa, chọn giọng dễ hơn — Son giáng trưởng thay Fa thăng trưởng.

## Loại 2: hai hay ba nốt chọi một (§CXXXIV, tr. 94 – 97)
Mọi luật loại 1 vẫn giữ, **trừ luật 4 và 5**.
- **Thứ nhất**: có thể mở bằng dấu lặng, nhưng nốt đầu luôn thuận hoàn toàn. **Phần mạnh** luôn thuận; **phần nhẹ** thuận hoặc nghịch — kể cả đồng âm. Nghịch âm phải vào **bằng bậc** (giữa ba nốt đi lên hay xuống), hoặc nằm giữa hai nốt giống nhau (thêu).
- **Thứ hai — kết**: đối âm trên ở ô áp chót có "quãng 5 đúng và quãng 7 trưởng" hoặc "quãng 10 thứ và quãng 6 trưởng", rồi quãng 6 trưởng lên quãng 8. *Lưu ý*: bản in ghi đúng "quãng 7 trưởng", nhưng ví dụ ngay dưới ghi số 5 – 6 → 8 và câu sau nói quãng 6 "chỉ được chuẩn bị bằng quãng 5" — nhiều khả năng là in nhầm của "quãng 6 trưởng". Đối âm dưới: quãng 5 đúng rồi quãng 3 thứ hay 10, kết đồng âm hoặc quãng 8.
- **Thứ ba**: cấm, **kể cả khi ngược chiều**, đi từ quãng 5, 8 hay đồng âm sang quãng 5, 8, đồng âm với chỉ một bước nhảy quãng 3 ở giữa — "chướng tai như quãng 5 liền thuận chiều". Hết lỗi khi các quãng hoàn toàn rơi vào phần nhẹ. Cũng cấm **lặp đi lặp lại vài nốt**.
- **Thứ tư**: sau một bước nhảy xa giữa hai nốt, nốt thứ ba nên quay lại; ba nốt nhảy liền không được phác ra hợp âm 9 hay quãng 7 trưởng.
- **Thứ năm**: cấm nhảy quá quãng 8, nhảy ba quãng 7, mọi quãng tăng và phần lớn quãng giảm.
- Hai bài mẫu được chấm: đối âm trên **tám lỗi**, đối âm dưới **mười hai lỗi** (quãng 6 mở bài, nhảy quãng 4 tăng, đi thuận chiều từ nghịch âm sang thuận hoàn toàn, quãng 5 giảm vào bằng bước nhảy, quan hệ chéo, quãng 5 ẩn…). Ghi chú: trong bè hát cấm nhảy quãng 10.

## Loại 3: bốn, sáu hay tám nốt chọi một (§CXXXV, tr. 97 – 102)
- **Nốt đầu luôn thuận**; các nốt khác có thể nghịch nếu vào bằng bậc và nằm giữa hai thuận âm. Sau ba, bốn nốt đi bậc mà **nhảy quãng 3 sang ô mới** thì rất "không hay".
- **Phần mạnh – nhẹ của ô**:

| Nhịp | Mạnh | Nhẹ |
|---|---|---|
| 2 nốt đen, alla breve | phần 1 | phần 2 |
| mọi nhịp ba | phần 1 | 2, 3 |
| 4 nốt đen ("ô đôi của nhịp 2/4") | 1, 3 | 2, 4 |
| 6 phách | 1, 4 | còn lại |
| 9 phách | 1, 4, 7 | còn lại |
| 12 phách | 1, 4, 7, 10 | còn lại |
- **Hai nốt đổi** "gọi theo uy tín của nhạc trưởng Fux… cuốn *Gradus ad Parnassum* mà mọi người đi sau đều tìm đến": nốt đổi **trên** đi xuống từ quãng 7 sang quãng 5 ở nốt thứ hai của phách mạnh; nốt đổi **dưới** đi xuống từ quãng 4 sang quãng 7. Hai nốt nghịch này "được nhảy đi" — dùng ở hai, ba, bốn bè. Các bậc thầy khác còn dùng **dạng đảo** của chúng, nhưng sinh quãng 5 ẩn, nên "ít khi dùng trong lối nghiêm khắc".
- **Kết**: đối âm trên kết thúc ô áp chót bằng quãng 6 trưởng; đối âm dưới bằng quãng 3 thứ hay 10.
- Đối âm hay nhất "giữ một loại hợp âm trong mỗi ô", hợp với phong cách nhà thờ.
- Hai bài mẫu ở Mi thứ được chấm **mười một** và **mười ba** lỗi. Câu then chốt: "Không sách dạy nào cho phép **nhảy đến hay từ một nghịch âm** trong lối nghiêm khắc — trừ hai nốt đổi của Fux và dạng đảo của chúng." Quãng 7 thứ nhảy thì "luôn tốt"; bốn nốt đi bậc rồi nhảy tiếp cùng chiều là "lỗi giai điệu".

## Loại 4: nối và nốt treo (§CXXXVI, tr. 102 – 105)
- Nốt treo có hai loại: **nghịch** (quãng 2, 4, 7, 9, 5 giảm hay tăng được nối) và **thuận** (đồng âm — loại này cho phép ở phần mạnh — quãng 3, 5, 6, 8, 10).

| Nốt treo nghịch | Bè | Giải quyết |
|---|---|---|
| ba quãng 2 | đối âm dưới (bè trầm) | xuống nửa cung hay một cung vào quãng 3 |
| ba quãng 4 | đối âm trên | xuống quãng 3 |
| ba quãng 7 | đối âm trên | xuống vào quãng 6 |
| hai quãng 9 | bè trên | xuống quãng 8 |
| quãng 4 đúng và tăng | bè dưới | xuống vào quãng 5 |
| quãng 5 giảm | — | tốt nhất về quãng 3 dưới, nhưng không ngay — chen quãng 3 thứ hay 6 ở phần nhẹ |
- **Khác Fux**: Fux có một ví dụ quãng 9 ở bè dưới, "thật ra là quãng 2 trên quãng 8"; Fux cấm giải quyết quãng 7 vào quãng 8 ở bè dưới — "đúng ở hai bè", nhưng nhiều nhà soạn nhạc nổi tiếng dùng nó trong bài nhiều bè.
- Chuỗi nốt treo phủ lên chuỗi quãng 8 – 10, 5 – 6: được chấp nhận "kể cả bởi những người khắt khe", nhưng **khuyên người mới học đừng dùng**. Cấm quãng 9 chuẩn bị bằng quãng 8 vì sinh "gần như quãng 8 liền".
- Mở bằng **dấu lặng** một phần ô; mọi phần nhẹ chứa thuận âm (để chuẩn bị); nốt treo nằm ở phần mạnh.
- **Kết**: đối âm trên có **7 thứ → 6 trưởng**; đối âm dưới có **2 → 3 thứ**. Với điệu Phrygian của Fux (chorale kết F – E), quãng 7 trưởng giải quyết vào quãng 6 trưởng tự nhiên; sách chê người chơi organ dùng D♯ ở đây.
- Lối tự do: quãng 7 được nhảy sang quãng 3 nếu giai điệu đẹp hơn; khi chuỗi nốt treo không hay, được chen một hai thuận âm không nối. "Những ràng buộc quá chặt của loại này đôi khi cần ngoại lệ."

## Loại 5: đối âm hoa mỹ (§CXXXVII, tr. 105 – 108)
- *Contrapunctum floridum* trộn mọi loại nốt, giữ luật bốn loại trước, thêm: một phần ô **không chứa bốn nốt nhanh**, chỉ thỉnh thoảng hai, và không ở đầu phần ô; loại 2 không kéo dài quá **bốn phần ô**; loại 3 không quá **năm phần ô**; loại 1 chỉ cho ô cuối; nốt dài ở phần nhẹ phải nối sang ô sau.
- **Bốn độ dài nốt treo** — thuật ngữ của Albrechtsberger: **dài** (một phần ô), **dài hơn** (hai phần), **ngắn** (nửa phần), **ngắn hơn** (một phần tư); loại này chỉ dùng **dài** và **ngắn**. Nốt treo dài có thể trang trí ("nốt treo bị chia", *ligatura rupta*); sau hợp âm quãng 8 thì hai cách trang trí "dễ bị chê là quãng 8 liền", dù Fux dùng chúng.
- **Thiếu trang**: bản quét nhảy từ tr. 105 sang tr. 108; các ví dụ của Fux ở cuối chương (và có thể một phần lời) không có trong bản dùng ở đây.

Tiếp theo: [[ba-be-albrechtsberger]].
`,
  },
  {
    slug: 'ba-be-albrechtsberger',
    title: 'Sáng tác nghiêm khắc ba bè (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['ba bè Albrechtsberger', 'quãng đi kèm Albrechtsberger', 'hợp âm thiếu', 'rolling bass cadence'],
    summary: 'Tập II, §CXXXVIII – CXLII: bảng "quãng thứ ba" đi kèm mỗi quãng, hợp âm được phép ở loại 1, khi nào được quãng 5 – 8 ẩn, quan hệ chéo, ô cuối và ô áp chót; loại 2, 3, 4, 5 ở ba bè với các luật kết, nốt treo không dài hơn nốt chuẩn bị, hợp âm 6/4 rải trên bè trầm, hai đối âm cùng lúc như "nếm trước lối tự do", và danh sách mười lỗi của một bài mẫu.',
    refs: [SRC],
    body: `
## Quãng đi kèm (§CXXXVIII, tr. 109 – 111)
Ba bè đòi biết bass số: hai quãng đã có thì quãng thứ ba là gì.
| Quãng trên bè trầm | Đi kèm |
|---|---|
| đồng âm | quãng 3; ô đầu còn được quãng 5 |
| 2 thứ | thường 4 đúng hay 5, đôi khi 3 trưởng |
| 2 trưởng | 4 đúng hay 5 |
| 2 tăng | chỉ 4 tăng |
| 3 thứ, trưởng | 5 đúng hay 8 |
| 4 giảm | 5 giảm hay 6 thứ |
| 4 đúng | là nốt treo: 5 hay 6 tuỳ giọng; không treo: luôn quãng 6 |
| 4 tăng | 2 trưởng, 3 thứ hay 6 trưởng; khi treo còn 5 đúng |
| 5 giảm | 3 thứ hay 6 |
| 5 đúng | quãng 3; cả quãng 6 khi quãng 5 là nốt treo |
| 5 tăng | 3 trưởng hay 7 trưởng |
| 6 thứ, trưởng | 3, 8 hoặc đồng âm (đồng âm hiếm) |
| 6 tăng | 3 trưởng; ít khi 5 đúng; hiếm hơn 4 tăng |
| 7 giảm | 3 thứ hay 5 giảm |
| 7 thứ | 3, 5 đúng hay 8 |
| 7 trưởng | không chuẩn bị, lên quãng 8: 2 trưởng hay 4; chuẩn bị, xuống: 3 trưởng, hiếm khi 8 |
| 8 giảm | 6 thứ, hiếm khi 3 thứ |
| 8 đúng | quãng 3 theo giọng |
| 9 thứ / 9 trưởng | 3 hoặc 6 thứ / 3 hoặc 6 trưởng |
| hai quãng 10 | 5 đúng, 8, hoặc một quãng 3 |

## Loại 1 ba bè
- Chỉ **hai hợp âm hoàn toàn** và **hợp âm 6** (không 6 giảm, 6 tăng); vẫn cấm hợp âm 3 – 4, 6/4 và 7 át. Gọi: quãng 5 + 3 là "**hợp âm ba điều hoà hoàn toàn**"; 3 + 6 là "**không hoàn toàn**" — nhưng 3 trưởng với 6 thứ thì thành nghịch. Nhân đôi để tránh lỗi thì gọi là "hợp âm hai nốt nhân đôi" (ba bè).
- **Quãng ẩn**: ba bè cho **hai quãng 5, 8 hay đồng âm ẩn**, nhất là khi bè thứ ba đi ngược chiều hoặc bè nền nhảy quãng 4 — với điều kiện **bè trên của cặp đó đi bậc**.
- "Hai quãng 8 tăng hay giảm liền nhau" (tức quan hệ chéo) nghe nghịch tai.
- **Ô cuối** nhân đôi quãng 8 được, nhưng chorale ở bè trầm thì một bè trên phải có quãng 3. **Ô áp chót**: chorale ở trên hay giữa → hợp âm ba trưởng trên át âm; chorale ở dưới → quãng 6 trưởng với quãng 3 thứ.
- Hai, ba hợp âm 6 liền là không lỗi trong đối âm đơn; nhưng trong **đối âm kép** thì lỗi, vì đảo lại sinh quãng 5 liền.
- Luật cũ "giữ chuỗi quãng 6 sát nhau" để các quãng 4 ở trên không chướng tai: sách gọi là "**tuỳ tiện, ít khi theo được**".
- Handel, Bach "thường dùng" ba lối có quãng 5 ẩn; các lối khác khi cả ba bè đi thuận chiều, hay hai bè trên nhảy cùng lúc, "hầu hết bị cấm".

## Loại 2 và 3 ba bè (§CXXXIX – CXL, tr. 113 – 116)
- Loại 2: quãng 5, 8 có bước nhảy quãng 3 ở giữa nay **chấp nhận ở bè giữa**, nhưng vẫn lỗi ở bè trên và bè dưới. Tránh dùng quá thường các tiến hành 6/3 – 5/3, 8/6 – 8/6.
- Loại 2 và 3 chấp nhận **quan hệ chéo khi không chướng tai**, và hợp âm thiếu ở phần nhẹ. Ô cuối nên có quãng 3: "chỉ ở ô cuối ta mới nhận ra giọng thật", không có quãng 3 thì không biết trưởng hay thứ — dù nhiều bài sám hối, requiem cổ kết chỉ với 5 và 8, "có lẽ cố ý để lại cảm giác chưa trọn"; bài giọng thứ hay kết bằng quãng 3 trưởng.
- Sách ghi lại một **giấy phép hai quãng 5 của Fux** (cho dùng ở lối tự do) kèm bản sửa.
- Loại 3: mở bằng dấu lặng nửa phần ô, và — khác hai bè — **mở bằng quãng 3** cũng được nếu bè bổ sung có quãng 5 hay 8. Kết khi đối âm ở dưới: hoặc lướt qua quãng 3 thứ dưới chorale, hoặc lấy át âm "tạo **kết bè trầm lăn** quen thuộc".

## Loại 4 ba bè (§CXLI, tr. 116 – 119)
- Quãng 7 thứ (hiếm khi 7 trưởng không phải cảm âm) có thể đi kèm quãng 8 thay quãng 3. Hợp âm 6/4 chỉ ở phần nhẹ, làm giải quyết của 5/6 treo trên bè trầm đứng yên.
- Nghịch âm **treo ở phần mạnh, chuẩn bị ở phần nhẹ, giải quyết vào thuận âm gần nhất ở phần nhẹ sau**. Bắt đầu bằng dấu lặng nốt trắng. Khi cần, phần mạnh được dùng dấu lặng hay nốt không nối.
- Bài mẫu bị chấm **mười lỗi**: thay quãng 3 bằng quãng 5; nhảy quãng 6 trưởng có cảm âm ("khó hát không có nhạc cụ"; nhảy quãng 6 trưởng thường "nay được phép"); quãng 5 trơ ở phần mạnh ("nghe mỏng"); Mi contra Fa; hợp âm 6/5 không giải quyết vào hợp âm ba; quan hệ chéo F – F♯; đồng âm chuẩn bị ở ô áp chót thay vì 4 – 3…

## Loại 5 ba bè (§CXLII, tr. 119 – 123)
- Xen kẽ ba loại trước với nốt ngắn hơn; mở và kết bằng hợp âm hoàn toàn, **vẫn cấm kết bằng quãng 5**. Kết khi đối âm ở trên: 4 – 3 hay 7 – 6; ở dưới: quãng 2 treo rồi quãng 3 thứ.
- "Nốt treo **dài hơn nốt chuẩn bị** là sai và không hay; ngắn hơn hay bằng thì luôn dùng được."
- Hướng tới "hoà âm ba bè đầy đủ cùng phong cách trong sáng"; không ở lâu một loại; loại 1 dành cho ô cuối; loại 4 chủ yếu với nốt treo ngắn.
- **Hợp âm 6/4 rải**: được trên **ba nốt sau** trong bốn nốt trầm rải qua hợp âm ba, không được trên nốt đầu nếu không chuẩn bị.
- Hai đối âm khác loại cùng lúc trên một chorale "thuộc loại 5, và là **nếm trước lối tự do**". Ghi chú: hợp âm 7 át đi qua "không phải lỗi, các bậc thầy hiện nay dùng nhiều".

Đối chiếu Fux: [[doi-am-ba-be-fux]]. Tiếp theo: [[bon-va-nam-be-albrechtsberger]].
`,
  },
  {
    slug: 'bon-va-nam-be-albrechtsberger',
    title: 'Bốn và năm bè, từ lối nghiêm khắc sang lối tự do (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['bốn bè Albrechtsberger', 'năm bè Albrechtsberger', 'Quarta fundata', 'đối âm đều và không đều', 'diabolus in musica Albrechtsberger'],
    summary: 'Tập II, §CXLIII – CXLVII: đối âm "đều" và "không đều", hợp âm được phép ở loại 1 bốn bè và lệnh cấm Quarta fundata, quãng ẩn và giới hạn bước nhảy, bảng quãng đi kèm từng nốt treo (9, 7, 4, 2), ô áp chót và ô cuối; loại 5 bốn bè, chuyển sang lối tự do (nhảy đến nghịch âm, chromatic, Mi contra Fa "diabolus in musica" không còn cấm), luật nhân đôi khi viết năm bè, và lời khuyên cho sáu bè trở lên.',
    refs: [SRC],
    body: `
## Loại 1 bốn bè (§CXLIII, tr. 123 – 125)
- Bài nhiều bè mà các nốt cùng trường độ thuộc loại 1, viết bằng **đối âm đều**; các loại khác là **đối âm không đều**.
- Chỉ dùng **hợp âm hoàn toàn** và **hợp âm 6** có quãng 3 theo giọng và quãng 8 — không bao giờ xếp sao cho quãng 6 thứ đi với quãng 3 trưởng ("hợp âm sai"). Cấm hai hợp âm 6/4, mọi hợp âm nghịch, và ***Quarta fundata*** — "quãng 4 trong thể đảo thứ hai của hợp âm 7 át, dùng trên bậc II của âm giai bè trầm với quãng 6 trưởng và 3 thứ" (lối tự do thì cho).
- Ô cuối chỉ đủ hợp âm ba khi chorale ở bè trầm; chorale ở bè trên hay giữa thì ô cuối không có quãng 5 (8/8/3 hoặc 8/3/1). Ô áp chót khi chorale ở dưới: hợp âm 6 với quãng 3 thứ nhân đôi, hoặc với quãng 8.
- **Quãng ẩn** được khi không chướng tai và **bè trên đi bậc**; tốt nhất ở bè trong. Ở bè trên, bước nhảy trong các chỗ đó không quá quãng 5; bè dưới và giữa đến quãng 6 hay 8. Bè trầm nhảy quãng 4 hay lên quãng 6 thì được quãng ẩn thuận chiều, nhưng nếu ở bè trên thì một, hai bè còn lại phải đi ngược chiều.
- Những kết mà cảm âm không đi lên "trái với luật cổ".

## Loại 2 – 4 bốn bè (§CXLIV – CXLVI, tr. 125 – 130)
- Loại 2: tránh hai bước nhảy quãng 3 nhất là ở hai bè ngoài, sinh tiến hành "giống quãng 5", "giống quãng 8".
- Loại 3: tránh quãng 5, 8 lộ từ phần nhẹ sang phần mạnh; vì đối âm "lăn hay nhảy", được chạm và nhân đôi nốt của bè khác, dùng đồng âm thay quãng 8.
- Loại 4: "nghịch âm treo chỉ là thuận âm bị chậm lại" và trong lối nghiêm khắc luôn **giải quyết xuống một bậc**.

| Nốt treo | Đi kèm | Ghi chú |
|---|---|---|
| 9 | quãng 3 và 5 đúng; hoặc 6 thay 5; hoặc quãng 3 nhân đôi (không phải cảm âm) | giải quyết vào quãng 8 |
| 7 | quãng 3 và 8; thường quãng 3 nhân đôi | nếu có quãng 5 thì ở phần nhẹ phải nhảy sang 8 hay quãng 3 nhân đôi — giữ quãng 5 khi 7 xuống 6 sinh hợp âm 6/5 không được phép |
| 4 | quãng 5 và 8, hoặc 5 nhân đôi; hoặc 6 và 8 | thường là quãng 4 đúng, giải quyết vào quãng 3 |
| 2 | quãng 5 nhân đôi; hoặc quãng 5 và chính quãng 2 nhân đôi | "nghịch âm treo duy nhất ở bè thấp nhất trong loại này" |
- Quãng 3 hay 6 không phải cảm âm thường được nhân đôi cho giai điệu dễ; nhưng quãng 6 nhân đôi không được giải quyết vào quãng 5 đúng. Lối tự do mới cho "chuẩn bị một nghịch âm bằng nghịch âm khác và giải quyết đánh lừa vào nghịch âm khác".
- Ô áp chót: bè trầm có át âm → **4 – 3** với 5 và 8; chorale ở bè nền → **7 – 6** với quãng 3 thứ nhân đôi; bè dưới mang nốt treo → hợp âm 5/2 → 5/3.

## Loại 5 bốn bè và sang lối tự do (§CXLVII, tr. 130 – 142)
- Đối âm hoa mỹ có thể ở bè trên, dưới hay giữa; các bè kia đi đều với chorale. Bè thứ tư lần lượt có quãng 8, quãng 3 nhân đôi, quãng 6 nhân đôi, quãng 5 nhân đôi.
- Một nốt chromatic (F – F♯) "không hề chướng tai, vì đoạn chromatic và diatonic có thể xen nhau cho sinh động" — nhưng dùng nhiều giống chromatic là xấu, trừ chủ đề fugue chromatic chọn vì tính chất bi thương. Hợp âm 6/4 cấm ở đầu bài.
- **Sang lối tự do** khi đã chắc tay lối nghiêm khắc kể cả đổi chỗ các bè: lối tự do "cho phép nhảy từ hay đến một nghịch âm"; bè trên được mở và kết bằng quãng 3, bè dưới được mở nhưng không kết bằng quãng 3; được đoạn chromatic; và "**Mi contra Fa, 'diabolus in musica' như các thầy cổ gọi, không còn bị cấm trong lối tự do**, miễn là không chướng tai". Sinh viên phải viết lại mọi ví dụ "trong cả hai lần đổi chỗ bè".

## Năm bè trở lên (tr. 142 – 149)
- Năm bè "chủ yếu đòi **nhân đôi quãng khéo léo**", tập được năm cách đổi chỗ bè; ở loại 5 mỗi bè có thể mang một loại khác nhau cùng lúc.
- **Luật nhân đôi**: ưu tiên nhân đôi **thuận hoàn toàn** hơn không hoàn toàn; trong hợp âm 6/4 không chuẩn bị thì nhân đôi quãng 4 đúng thay quãng 8; quãng 2 (đi qua hay treo) có thể nhân đôi thay quãng 6 trong hợp âm 6/4/2 hoặc thay quãng 5 trong 5/2. Nghịch âm chỉ nhân đôi khi là nốt đi qua; **cảm âm** cũng vậy — kể cả khi là quãng 3 hay 6, cấm ở phần mạnh trong bài năm bè trở lên; chấp nhận ở bè trong như nốt nền nhân đôi.
- Sáu, bảy, tám bè, hay hợp xướng đôi, ba, bốn: chỉ cần "cẩn thận hơn trong việc dẫn bè đúng ngữ pháp và nhân đôi tất yếu"; "nghiên cứu sâu các mẫu kinh điển" sẽ dạy phần còn lại. Sách không đưa thêm luật.

Đối chiếu bốn bè hiện đại: [[luat-hoa-am-bon-be]]; bốn bè của Fux: [[doi-am-bon-be-fux]]. Tiếp theo: [[mo-phong-va-dao-albrechtsberger]].
`,
  },
  {
    slug: 'mo-phong-va-dao-albrechtsberger',
    title: 'Mô phỏng và đảo (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['mô phỏng Albrechtsberger', 'per arsin et thesin', 'mô phỏng khoa học', 'đảo đơn và đảo nghiêm', 'đảo ngược dòng'],
    summary: 'Tập II, §CXLVIII – CXLIX: mô phỏng là gì, khác fugue và canon ở đâu, tám mô phỏng đơn ở mọi quãng, mô phỏng thuận và ngược chiều, bảy "mô phỏng khoa học" (đảo nghiêm, đảo tự do, ngược dòng, ngược dòng đảo, tăng, giảm trường độ, per arsin et thesin); rồi bốn loại đảo — đơn, nghiêm (chỉ bắt đầu được trên quãng 7, 6, 3 trưởng), ngược dòng, ngược dòng ngược chiều — cùng điều kiện dùng.',
    refs: [SRC],
    body: `
## Mô phỏng (§CXLVIII, tr. 149 – 156)
- "Một giai điệu ngắn được một hay nhiều bè lặp lại — khi sau một phần ô, khi sau hai ba phần, khi sau cả ô. Có thể ở mọi quãng kể cả quãng 8, ở bè trên hay dưới."
- "Trong mô phỏng, câu đáp **không buộc phải khớp** giọng, bước nhảy, nửa cung và nguyên cung chính xác như trong fugue hay canon." Ở ba bè trở lên chỉ cần hai bè mô phỏng nhau; nhưng "bài sẽ đẹp và khoa học hơn nếu mọi bè đều mô phỏng". Mẫu: các tác phẩm nhà thờ và madrigal của **Caldara**.
- Vì không còn viết trên chorale, các nốt treo 2, 4, 7, 9 khi **cả hai bè cùng đi** có thể giải quyết vào thuận âm khác (bè kia nhảy thay vì chờ). Câu mở chương về cách giải quyết này đọc nghĩa chưa rõ trong bản dịch Anh — nên đối chiếu bản Đức.
- **Giá trị**: mô phỏng đem lại "sự thống nhất của kế hoạch — trật tự tiết kiệm của ý tưởng"; ý được "phát triển theo chủ đề ở các bè khác nhau"; nó "đóng vai chính trong mọi tác phẩm không bị ném ra vô kế hoạch".
- **Tám mô phỏng đơn**: ở đồng âm, quãng 2, 3, 4, 5, 6, 7 trên hay dưới, và quãng 8 trên hay dưới. **Thuận chiều**: câu đáp giữ nguyên thứ tự nốt; **ngược chiều**: đảo hướng các quãng.

| "Mô phỏng khoa học" | Định nghĩa của sách |
|---|---|
| Đảo nghiêm | nửa cung, nguyên cung đáp đúng, theo chiều ngược |
| Đảo tự do | không giữ chính xác thứ tự quãng |
| Ngược dòng (retrograde) | câu đáp bắt đầu chủ đề từ cuối |
| Ngược dòng đảo | ngược dòng + ngược chiều — "có mùi tỉ mỉ sách vở; tai tinh nhất cũng khó nhận ra chủ đề" |
| Tăng trường độ | đáp bằng nốt dài hơn (trắng thay đen) |
| Giảm trường độ | đáp bằng nốt ngắn hơn |
| *Per arsin et thesin* | đáp ở phần ô ngược lại: chủ đề ở phần mạnh, câu đáp ở phần nhẹ. "*Arsis* là phách nhẹ, *Thesis* là phách mạnh" |
Hệ thống hoá theo trường phái Nga (P, R, bảy hình thức): [[mo-phong-don-gian]].

## Đảo (§CXLIX, tr. 156 – 157)
"Có bốn loại đảo":
1. **Đơn**: nốt đi lên thành đi xuống và ngược lại, "quãng không tái hiện thật chính xác"; làm ở quãng 8, 5, 4, 2 và đồng âm.
2. **Nghiêm**: như trên nhưng "nguyên cung đáp nguyên cung, nửa cung đáp nửa cung" — "chỉ làm được khi bắt đầu đảo trên **quãng 7 trưởng, 6 trưởng hoặc 3 trưởng** ở trên". Ví dụ của sách: chủ đề lên quãng 4 đúng, xuống quãng 3 thứ, lên một cung; ba bản đảo trên 7, 6, 3 trưởng đảo đúng từng quãng, còn năm bản kia đổi vài quãng nên chỉ là đảo đơn.
3. **Ngược dòng**: bắt đầu từ nốt cuối, viết ngược về nốt đầu — trên chủ âm hoặc quãng 3 dưới.
4. **Ngược dòng ngược chiều**: đảo tiếp bản ngược dòng.
- Loại 3 và 4 **không dùng khi chủ đề có nốt chấm dôi** — ví dụ cho "giai điệu tồi và khập khiễng". Loại 1 và 2 "luôn tốt khi chủ đề không có nghịch âm treo ở phần mạnh".
- Đảo "rất hữu ích — gần như hơn cả mô phỏng": trình bày một ý "trong vô số tư thế" và dẫn sang giọng khác. Đảo một chủ đề đơn ở mọi quãng, thêm hợp âm đúng, "anh sẽ tự ngạc nhiên vì những chuyển giọng thú vị nhất".
Tương ứng trong hệ Taneyev: [[doi-vi-dao-anh]]; trong Fux: [[doi-am-kep-fux]] (đảo ngược chiều đơn và nghiêm).

Tiếp theo: [[fugue-albrechtsberger]].
`,
  },
  {
    slug: 'fugue-albrechtsberger',
    title: 'Fugue hai, ba, bốn bè (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony', 'form'],
    aliases: ['fugue Albrechtsberger', 'repercussion', 'thứ tự vào bè fugue', 'đáp đề Albrechtsberger', 'ricercata', 'per contrarium reversum', 'half-stretto'],
    summary: 'Tập II, §CL – CLI: định nghĩa và thuật ngữ (Dux, Comes, đối đề, chủ đề xen, stretto, nửa stretto), luật đáp đề với bảng bảy cách đổi quãng, kế hoạch fugue hai bè từng bước, fugue ba bè trở lên — kết đánh lừa trước khi bè thứ ba vào, nốt đổi của Fux và "nốt đánh tự do", năm cách trang trí chủ đề, giọng gần và giới hạn chuyển giọng, bảng thứ tự vào bè, các giấy phép trong bài mẫu, ricercata và fugue per contrarium simplex / reversum.',
    refs: [SRC, ['Wikipedia — Fugue', 'https://en.wikipedia.org/wiki/Fugue']],
    body: `
## Thuật ngữ (§CL, tr. 157 – 160)
"Nhánh này cần nhất cho âm nhạc nhà thờ, và là trang sức lớn nhất của nó."
| Thuật ngữ | Theo sách |
|---|---|
| Fugue | Tên gọi từ việc một bè "như bay trốn trước bè khác", bè đuổi theo mô phỏng các quãng của chủ đề, thường ở quãng 5 trên hay quãng 4 dưới, hoặc quãng 8 |
| Dux, Comes | chủ đề dẫn và câu đáp |
| Đối đề | phần viết chọi chủ đề khi bè thứ hai vào |
| Fugue kép / đơn | đối đề giữ nguyên ở mọi bè thì là chủ đề thứ hai — **fugue kép**; không giữ thì là **fugue đơn** |
| Chủ đề xen | "ý thỉnh thoảng, không quá khác chủ đề hay đối đề"; tốt nhất lấy từ một đoạn của chủ đề, đối đề hay một bè bổ sung có mô phỏng (sách không dùng chữ "episode") |
| Stretto | đoạn chủ đề "được rút ngắn, ép lại", thường gần cuối, "là trang sức lớn" |
| Nửa stretto | bè thứ hai vào trước khi bè thứ nhất hết chủ đề ("một số bậc thầy" gọi vậy) |
- Chọn chủ đề "mạnh, giàu biểu cảm — nếu được, hợp với stretto". Stretto gần nhất để dành cho kết, trước đó là một kết hoàn toàn hay không hoàn toàn ở bậc III hay V.

## Đáp đề
- Chủ đề bắt đầu và kết ở chủ âm → đáp ở quãng 5 trên (hay 4 dưới). Chủ đề đi từ chủ sang át → đáp đi từ át về chủ, và ngược lại; chủ đề mở và kết ở át → đáp mở và kết ở chủ.
- "Luật cổ nói: muốn đáp đúng, chủ âm đổi thành át âm, quãng 5 đổi thành chủ âm." Vì thế các bước của chủ đề thường phải đổi trong câu đáp, "để câu đáp đầu không dẫn ta sang giọng lạ và bị cấm":

| # | Chủ đề | Câu đáp |
|---|---|---|
| 1 | bước quãng 2 | nhảy quãng 3 (và ngược lại) |
| 2 | bước quãng 2 | hai nốt bằng nhau đứng yên |
| 3 | nhảy quãng 4 | nhảy quãng 3 |
| 4 | nhảy quãng 5 | nhảy quãng 4 |
| 5 | nhảy quãng 4 hay 6 | nhảy quãng 5 |
| 6 | nhảy quãng 7 | nhảy quãng 6 |
| 7 | nhảy quãng 8 | nhảy quãng 7 |
Đây là cái ngày nay gọi là **đáp đề giọng** — xem [[fugue]], và luật của Fux ở [[mo-phong-va-fugue-hai-be-fux]].

## Kế hoạch fugue hai bè
1. Bè thứ hai vào với chủ đề, bè thứ nhất viết **đối đề** bằng nhiều nốt ngắn "chủ yếu theo đối âm loại 5".
2. Sau một đoạn chuyển giọng hay mô phỏng ngắn, đặt **nửa kết thứ nhất ở át âm** (công thức 7 – 6 hay 4 – 3).
3. Một bè chuyển giọng tự do vài phần ô cho đến khi bè kia đưa chủ đề vào ở át hay chủ; bè này vào trước khi bè kia hết chủ đề — "**nửa stretto**".
4. Chủ đề đã hai lần trọn thì **nửa kết ở bậc III**, rồi vào **stretto** ở bè nào hợp nhất.
5. Fugue thanh nhạc thường lặp lại phần mở đầu của từng bè, ép chặt hơn.
6. Vài ô chuyển giọng hay mô phỏng, rồi kết ở chủ âm bằng 7 – 6 ở trên hay 2 – 3 ở dưới.
- Cấm trong fugue hai bè: **kết bè trầm** (bè dưới xuống quãng 5, bè trên có 4 – 3 ở ô áp chót). Được nhảy vào hợp âm 7 át và thể đảo như nốt đi qua.
- Sách phân tích fugue Fa trưởng (Dux ở alto từ chủ âm; Comes ở soprano từ át âm; kết thứ nhất ở ô 11 – 12 trên át âm; kết thứ hai ở La thứ; stretto từ ô 25; "đôi khi được — thậm chí thường cần — bắt đầu stretto ở át âm và đáp ở chủ âm").
- Một fugue ở "**Mi phụ**" (Mi thứ không F♯): kết thứ nhất ở bậc VI; câu đáp trên quãng 4 thay quãng 5 "được phép giữa fugue"; nốt cuối chủ đề thấp một bậc trong stretto — được, miễn bè vào sau cùng có đủ chủ đề.
- Fugue cho violin và kèn "rộng đất hơn": không cần giữ trong năm dòng kẻ, nhảy quá quãng 8 được — "là lỗi khi viết cho giọng hát".

## Fugue ba bè trở lên (§CLI, tr. 160 – 182)
- **Không được** sau khi hết chủ đề dẫn lên quãng 5 ở bè trên hay từ quãng 5 lên chủ ở bè khác — "người nghe được báo trước, mọi bất ngờ bị phá". Bè thứ hai nên bắt đầu trên hay dưới nốt cuối của bè thứ nhất.
- Thường đặt **kết đánh lừa trước khi bè thứ ba vào**. Fugue ba bè trở lên không dùng kết trọn (4 – 3 với 5) trừ trước stretto cuối. Kết đánh lừa "cần thiết, đẹp và khéo như việc đưa chủ đề vào dưới một nghịch âm hay nốt lướt".
- "Ngoài **hai nốt đổi của Fux** còn nhiều nốt khác, không phải nốt đổi mà là **nốt đánh tự do**" — thuận hay nghịch, luôn vào bằng bậc. Chỉ ghi số những gì người chơi organ không đoán được từ luật âm giai và bước nhảy; sách dẫn C. P. E. Bach.

| Trang trí chủ đề | Theo sách |
|---|---|
| Tăng trường độ | chủ đề xuất hiện bằng nốt dài hơn |
| Giảm trường độ | nốt ngắn hơn, ở chủ âm hay giọng gần |
| Rút gọn | chủ đề ngắn một đoạn thì lặp trọn lên hay xuống (một phần trang bị dán phiếu thư viện che mất, đọc không trọn) |
| Nối lệch (syncopation) | đưa chủ đề vào trễ nửa hay một phần ô bằng dấu nối |
| Ép (contraction) | hai bè ép chủ đề, đối đề hay chủ đề xen lại gần nhau — cách hai ô (giữa bài), một ô ("tốt nhất ở kết"), một phần ô |
| Ngắt (lesser) | chia các nốt của chủ đề bằng dấu lặng — "không đẹp bằng", nghe như tiếng vọng đùa giỡn |
- **Giọng gần**: mỗi giọng chính có năm giọng gần (sáu bậc đi lên ở giọng trưởng, đi xuống ở giọng thứ); loại bậc VII ở giọng trưởng, bậc II ở giọng thứ. Fugue ba bốn bè dễ kéo dài 60 – 70 ô bằng mô phỏng ở các giọng gần.
- "Chuỗi quãng 5 cổ và nhạt trong mô phỏng không còn dùng, thậm chí bị coi là lỗi khi quá ba lần." Đừng đi từ giọng thăng sang giọng giáng, vì người nghe quên giọng gốc. "Nhiều người chơi organ thiếu kinh nghiệm tưởng lang thang qua 24 giọng là đẹp." Fugue có thể kéo dài bằng *tasto solo* hay bass ngân.
- Mỗi bè thỉnh thoảng nên nghỉ, nhất là trước chủ đề — cho kèn và giọng hát thở; ở giọng mới, chủ đề phải có ít nhất một bè đi kèm.
- **Thứ tự vào bè** (*repercussion*): đẹp nhất là theo **thứ tự tự nhiên** lên hay xuống, xen kẽ chủ – át. Sách in bảng các thứ tự bốn bè từ số 3 đến 24: mười thứ tự "thường và đẹp nhất" (hai bè đầu liền nhau), bốn thứ tự "ít dùng" (hai bè đầu quá xa), tám thứ tự "đáp ở quãng 8", thường chỉ ở giữa fugue. Chủ đề mở trên bậc II, III, IV, VI, VII của chủ thì đáp ở bậc tương ứng của át.
- Mọi phần ô phải có ít nhất một bè đánh nốt, để giai điệu không ngưng đọng.

## Giấy phép trong các bài mẫu
- Được mở hay kết câu đáp bằng nốt ngắn hơn hay dài hơn; stretto "như một mẹo"; dẫn chủ đề sang Si giáng trưởng giữa fugue "do stretto gây ra"; bè mở fugue không cần mở stretto cuối; chủ đề vào bằng bước nhảy cũng như bằng dấu lặng.
- Ở Rê thứ: Si giáng hợp giọng hơn Si bình; được nhân đôi quãng 3 trưởng khi nó là bậc III hay VI của giọng trưởng, hay bậc VI của giọng thứ; giọng thứ kết bằng quãng 3 trưởng khi là kết cuối.
- Bài mẫu của Caffaro, của **Handel** (*Te Deum* Utrecht) và một Offertorium *Dextera Domini* của Albrechtsberger, có phân tích stretto và đối âm kép.

## Ricercata và fugue đảo
- ***Ricercata***: "một loại fugue được tiền nhân rất quý"; phần hai mọi bè vào lại (nếu được, không ai nhận ra) bằng **đảo đơn hay nghiêm**, bè trên thành bè dưới, và một bè phải vào lại một mình để Dux, Comes hiện rõ dưới dạng mới.
- *Per contrarium simplex*: đảo không giữ nửa cung – nguyên cung; *per contrarium reversum*: giữ đúng.
- Bài mẫu của **Fux** (Son thứ, đảo nghiêm ở quãng 5) có dấu lặng trước chủ đề đảo: "**Fux đặt điều này thành luật, nhưng nay không còn theo**, vì sự trở lại của chủ đề, nếu đưa vào đúng, sẽ không lọt khỏi tai người nghe chăm chú." Ricercata cho organ ba bè đảo nghiêm, sách ghi tên một tác giả bị OCR làm hỏng (có lẽ Kirnberger — chưa kiểm).

Tiếp theo — Tập III: [[fugue-chorale-va-doi-am-kep-albrechtsberger]].
`,
  },
  {
    slug: 'fugue-chorale-va-doi-am-kep-albrechtsberger',
    title: 'Fugue trên chorale và đối âm kép ở quãng 8, 10, 12 (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['đối âm kép Albrechtsberger', 'octava acuta', 'decima gravis', 'duodecima', 'fugue chorale', 'thêm bè quãng 3'],
    summary: 'Tập III, §CLII – CLV: fugue trên chorale; đối âm kép ở quãng 8 (hay 15) với bảng đảo, bốn luật và cách thêm bè song song quãng 3 – 6; ở quãng 10 (hay 3) với nhận xét từng quãng, khi nào thành trio, quatuor; ở quãng 12 (hay 5) với bảy luật — và lý do sách gạt bỏ đối âm kép ở quãng 2, 4, 6, 7.',
    refs: [SRC],
    body: `
## Fugue trên chorale (§CLII, tr. 187 – 191)
- Chủ đề thường là vài nốt **của chính chorale, ở dạng giảm trường độ**, vào lần lượt ở ba bè "như fugue thường" cho đến khi bè thứ tư mang giai điệu chorale vào; mỗi khi chorale vào, các bè khác **làm mô phỏng**.
- Có bài chỉ một bè mang chorale, các bè khác là mô phỏng hoa mỹ — mẫu: *Ave Maria* của Fux. Không muốn viết fugue thì thêm các bè hát, violin, organ bằng mô phỏng đúng luật.
- "Fugue chorale hiệu quả nhất là khi giai điệu chorale đi bằng nốt tròn hay dài hơn các bè fugue đi kèm" — nếu mọi bè cùng trường độ thì tai không nhận ra chorale, vốn "phải nổi trội ở mỗi lần trở lại". Một fugue đơn có thể "bất ngờ đan với chorale, đem sức sống mới cho cả bài".

## Đối âm kép ở quãng 8 (§CLIII, tr. 191 – 197)
- Đối âm đơn thêm quãng mới vào một bè có sẵn; đối âm kép thì **hai bè giữ nguyên**, hoà âm đổi nhờ **chuyển vị**. Bè trầm lên một quãng 8 thành bè trên — *octava acuta*; hạ quãng 8 — *octava gravis*.

| Quãng | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Đảo thành | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
"Quãng giảm thành tăng, thứ thành trưởng, trưởng thành thứ, tăng thành giảm."
- **Cấm nốt treo quãng 9**: đảo lại thành 9 – 8 → 2 – 1, ở quãng 15 thành 7 – 8.
- **Luật 1**: hai bè không quá quãng 8, nếu được.
- **Luật 2**: không đưa quãng 8 vào **bằng bước nhảy ở phần mạnh** — đảo lại thành đồng âm trơ. (Không áp cho ba, bốn bè; quãng 8 treo ngắn, quãng 8 đi qua, ở đầu và cuối thì được.)
- **Luật 3**: không đưa quãng 5 đúng vào bằng bước nhảy — đảo thành **quãng 4 không chuẩn bị**. Quãng 5 được khi là nốt đi qua, là **nốt đổi của Fux** (đảo thành quãng 4), hay khi treo và chuẩn bị bằng 3, 6, 8.
- **Luật 4**: không dùng hai quãng 9 làm nốt treo. Quãng 10, 11, 12 nên ghi 3, 4, 5 — "luật chính của đối âm này là không vượt quá quãng 8". Quãng 4, 7, 2 được dùng làm nốt treo hay nốt đi qua.
- **Thêm bè quãng 3**: nếu bài hai bè chỉ có 3, 6, 8 ở phần mạnh, không hai thuận âm giống nhau liền nhau, nghịch âm chỉ là nốt đi qua, chỉ có chuyển động xiên và ngược chiều — thì thêm quãng 3 trên cho một bè thành **ba bè**, cho cả hai thành **bốn bè**. Nhưng "không phải lúc nào cũng được": có thể sinh quan hệ chéo, cảm âm nhân đôi, giải quyết sai; quãng 3 thêm "cho hoà âm đầy hơn nhưng **không bao giờ sinh giai điệu mới**".
- "Một số bậc thầy đòi loại nốt treo khỏi fugue sẽ đảo; họ đúng nếu cả đối đề cũng phải đảo — điều không bao giờ làm được." Lời bình: "Dùng kiến thức một cách sáng suốt là ranh giới giữa **Nghệ thuật và Sách vở**."

## Đối âm kép ở quãng 10 (§CLIV, tr. 197 – 206)
| Quãng | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Đảo thành | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
- *Decima acuta*: một hai bè đi song song quãng 10 hay 3 **trên** chủ đề; *decima gravis*: **dưới**.
- Quãng 3 → 8: hai bè **cấm** đi quãng 3 thuận chiều; hai quãng 3 thuận chiều thì đảo thành quãng 8 liền — "cấm nghiêm ngặt". Quãng 6 → 5: không hai quãng 6 liền, cũng không một quãng 6 vào bằng thuận chiều. Quãng 5 → 6: quãng 5 đúng vào bằng thuận chiều vẫn cấm theo luật nghiêm khắc. Quãng 4 → 7: được làm nốt đi qua; không treo ở bè trên. Quãng 2 treo không được đến sau quãng 3.
- "Kết này, **Fux dùng, không nên theo**" — chỗ duy nhất sách bác Fux trực tiếp ở tập này; nhưng **nốt đổi của Fux** ở bè trên thì "rất hợp" với hai bè.
- Ba bè: đảo ở quãng 3 hay 10 **trên** "luôn hay hơn" ở dưới, vì ít sinh Mi contra Fa; ở giọng thứ, đảo lên quãng 3 – 10 cần ít dấu hoá hơn. Muốn đi quãng 10 trên đến tận ô cuối mà không bè tự do: không nốt treo nghịch, chỉ 3, 5, 8, đồng âm xen kẽ, không thuận chiều, quãng 5 chỉ là nốt đi qua, ô áp chót quãng 6 trưởng lên quãng 8. "Thuốc giải tốt nhất là tránh quãng 5 ở phần mạnh trong chủ đề gốc."

## Đối âm kép ở quãng 12 (§CLV, tr. 206 – 213)
| Quãng | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Đảo thành | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
1. Không vượt quãng 12 nếu không có lý do.
2. Không đưa quãng 6 vào bằng bước nhảy (đảo thành quãng 7 không chuẩn bị); hai quãng 6 không liền nhau, trừ 6 trưởng rồi 6 tăng.
3. Không dùng ở bè trên quãng 7 treo **chuẩn bị bằng và giải quyết vào quãng 6** — mỗi quãng 6 đảo thành quãng 7.
4. Bè trên mở và kết bằng **quãng 5 đúng hay 12**, nhất là khi đảo xuống quãng 12 và chủ đề giữ giọng.
5. Đảo lên quãng 12 thành ba bè: nốt đầu (át âm) ở bè trên phải có chủ âm ở bè tự do; nốt cuối kéo dài vài ô để hai bè kia kết ở chủ âm.
6. Muốn bốn bè đi quãng 10 suốt: chủ đề hai bè chỉ có 3, 5, 8, không nốt treo nghịch, không thuận chiều.
7. Đảo ở quãng 5 thay quãng 12: không có quãng 8 không chuẩn bị ở phần mạnh.
- Nốt treo được ở hai bè: quãng 4, 2, 9. Sách cho *Fuga alla Duodecima* của Fux làm mẫu.
- "Các bậc thầy cổ còn nói đến đối âm ở quãng 2 hay 9, 4 hay 11, 6 hay 13, 7 hay 14" — chúng "hiếm khi cho giai điệu trôi chảy", toàn nghịch âm không chuẩn bị; "những mẹo vô ích này đã bị loại khỏi hệ thống của chúng ta".

So sánh: quy tắc của Fux — [[doi-am-kep-fux]]; công thức tổng quát Iv của Taneyev — [[doi-vi-chuyen-dong-chieu-doc]]; đối âm kép trong nhạc Bach — [[doi-am-kep]]. Tiếp theo: [[fugue-kep-va-canon-albrechtsberger]].
`,
  },
  {
    slug: 'fugue-kep-va-canon-albrechtsberger',
    title: 'Fugue kép và canon (Albrechtsberger)',
    category: 'harmony',
    also: ['polyphony', 'form'],
    aliases: ['fugue kép Albrechtsberger', 'canon Albrechtsberger', 'Inventio canon', 'canon câu đố', 'canon đóng và mở', 'đối âm ba lần'],
    summary: 'Tập III, §CLVI – CLVII: fugue kép hai chủ đề và ba, bốn chủ đề — bốn điều kiện, bốn luật đối âm ba – bốn lần ở quãng 8, bảng ba cách đổi chỗ chính và các cách phụ, mẫu fugue ba chủ đề của Mattheson; canon — định nghĩa "mô phỏng nghiêm nhất", các loại (hữu hạn, vô hạn, mở, đóng, đôi, câu đố…), canon ở đồng âm và quãng 8, cách viết một Inventio ba bè, cách ghi canon bằng số, canon "của Mozart" và canon câu đố Kuhlau, cùng canon Albrechtsberger gửi Haydn.',
    refs: [SRC, ['Wikipedia — Canon (music)', 'https://en.wikipedia.org/wiki/Canon_(music)']],
    body: `
## Fugue kép (§CLVI, tr. 213 – 219)
- Hai chủ đề: "khó phân biệt với fugue có đối âm kép ở quãng 8"; đối đề có thể vào cùng lúc với chủ đề hay sau. Phải theo luật fugue đơn và đối âm ở quãng 8, "nếu không các chủ đề không đổi chỗ được".
- **Ba chủ đề trở lên** — cần: (1) thêm một hai bè hơn số chủ đề, để có bè nghỉ; (2) dùng đối âm ở quãng 8; (3) các chủ đề **khác trường độ**, không mở cùng lúc nhưng **phải kết cùng lúc**; (4) dùng **đối âm ba lần** (ba chủ đề), **bốn lần** (bốn chủ đề) ở quãng 8.
- **Bốn luật đối âm ba – bốn lần**: không nốt treo quãng 9; hai bè không đi hai quãng 4 đúng liền (đảo ra quãng 5 liền) — trừ khi quãng 4 sau là tăng; quãng 5 chỉ đi xiên hoặc treo bởi quãng 6 (nếu không, đảo ra hợp âm 6/4 không chuẩn bị); quãng 6 chỉ đi xiên, kèm quãng 8 hay đồng âm thay quãng 3 (bè tự do bổ sung quãng 3). Các ký hiệu số ở trang này in rất nhỏ, vài chỗ đọc chưa chắc.
- Giữ đúng các luật thì fugue ba chủ đề đổi chỗ được **sáu cách**, bốn chủ đề **hai mươi bốn cách**. Trước khi viết, thử chủ đề ở ba bốn cách đổi chỗ.

| Cách đổi chỗ chính | Trên | Giữa | Dưới |
|---|---|---|---|
| Số 1 | bè trên | bè giữa | bè dưới |
| Số 2 | bè dưới | bè trên | bè giữa |
| Số 3 | bè giữa | bè dưới | bè trên |
Mỗi cách chính có các cách phụ "phải sinh cùng quãng"; chỉ ba cách chính cho quãng và hợp âm khác nhau. (Cách đọc bảng theo cột là cách hiểu của người biên soạn.)
- Không nhất thiết ba chủ đề vào trong vài ô đầu: mẫu **fugue organ Son thứ ba chủ đề của Mattheson** — chủ đề 1 làm fugue đơn 34 ô, chủ đề 2 phát triển riêng 74 ô, chủ đề 3 25 ô, rồi ghép dần, cả ba cùng vang ở ô áp chót.
- Fugue "là trang sức chính cho giao hưởng và tứ tấu, và gây hiệu quả mạnh trên sân khấu"; thay chủ đề khô cứng bằng chủ đề giàu biểu cảm — mẫu là **Handel**.

## Canon (§CLVII, tr. 219 – 237)
- "Canon là một loại fugue giữ **mô phỏng nghiêm nhất**." Chủ đề "phải lặp đúng từ đầu đến cuối": trường độ (ở đồng âm và quãng 8 cả tên nốt), dấu lặng (trừ lần vào đầu), chấm dôi, nốt nối, bước nhảy, nửa cung – nguyên cung, nốt hoa mỹ — "tóm lại, mọi chi tiết".

| Loại | Theo sách |
|---|---|
| Hữu hạn | có kết, không lặp lại |
| Vô hạn | có dấu nhắc, không kết; có thể có dấu ngân chỉ chỗ mỗi bè dừng |
| Ngược dòng | mỗi ô được bè sau đáp ngược |
| Tăng, giảm trường độ, đảo | "xử lý như fugue khéo" |
| Đôi, ba, bốn | *a quattro*, *a sei*, *a otto voci* |
| Mở / đóng | mở: viết từng bè; đóng: mọi chủ đề viết liền trên một khuông |
| Phức (đối âm) | luôn mở và hữu hạn; mỗi đối đề thành một đoạn và một canon mới |
| Câu đố | không có dấu, không số, không tên bè, thường không khoá |
| *Climax*, *polymorphus* | chỉ nêu tên — sách dẫn sang Marpurg, *Abhandlung von der Fuge*, phần hai |
- Canon "đúng, dễ và nghiêm nhất" là ở **đồng âm và quãng 8** — chỉ ở đó mọi nửa cung, nguyên cung khớp hoàn toàn; quãng 5 và 4 "khớp đủ"; quãng 2, 3, 6, 7, 9 thì không. Canon hai bè ở đồng âm, quãng 8 "không cần học riêng, không cần đối âm kép": viết "nốt đối nốt, bước nhảy đối bước nhảy".
- Hát sai giọng: soprano với tenor hát một canon đồng âm, hay bốn giọng nam hát canon viết cho giọng hỗn hợp, sẽ thành hợp âm 6/4 thay hợp âm ba — "phải giữ đúng khoá hay giọng".
- **Hữu hạn ↔ vô hạn**: bỏ nốt cuối mỗi bè, đặt dấu nhắc đầu ô 2 và cuối ô cuối, cho các bè đi trơn từ nốt cuối về nốt đầu ô 2; ngược lại thêm một nốt kết ở mỗi bè.
- Một giai điệu đi bậc nhiều có thể giấu nhiều câu đáp: canon *Virgam virtutis tuae* còn viết được ở quãng 2 trên, 3 dưới, 6 trên, 7 dưới, 8, 9, 10 dưới. "Canon ở quãng 6, 7 và 8 đều sinh từ đối âm kép ở quãng 8; ở quãng 10 chỉ là chuyển vị đối âm đơn xuống một quãng 8."
- **Canon đồng âm ba bè trở lên — *Inventio***: trước hết viết một *Tricinium* ba giọng cùng khoá, không mở cùng lúc — gọi là *Inventio*; xong mới chuyển thành canon mở hay đóng (mẫu của Caldara). Ba điều phải giữ: từng bè chảy trong sáng; hai ba bè tự thành song tấu, tam tấu hoàn hảo; cấu trúc hoà âm chỉ trọn vẹn khi bè cuối cùng vào. Ở canon bốn bè, sách đổi chỗ bè 3 và 4 vì nếu không thì hợp âm 6/4 đánh tự do xuất hiện "ba lần".
- **Ghi canon**: đặt các khoá theo thứ tự vào trước khoá đầu, dùng dấu hay **số chỉ quãng** đánh dấu chỗ mỗi bè vào; số ở trên là quãng trên, ở dưới là quãng dưới, và "phải đếm từ nốt đầu".
- **Canon phức** khó và cần luyện thường xuyên; mẫu là *Agnus Dei* năm bè của Palestrina — một **canon đôi**.
- Người nghe dễ "bị tai đánh lừa", tưởng nghe canon nghiêm trong khi đó chỉ là mô phỏng chủ đề.
- **Bốn canon "của W. A. Mozart"** (*Ave Maria*, *Lacrimoso son io*, *Alleluja*, *Sie ist dahin*) — sách gọi Mozart là "Orpheus Đức của chúng ta"; tên tác giả theo lời sách, chưa đối chiếu danh mục Köchel. Canon opera (giọng khác nhau lặp giai điệu ở quãng 4) "chỉ là mô phỏng tự do".
- **Canon câu đố**: giải bằng cách thử mọi quãng, đảo, ngược dòng, ba khoá và chín cách chuyển, thêm dấu lặng, tăng giảm trường độ; mẫu của Kirnberger và Kuhlau. Lời bình: "một câu đố chỉ là câu đố… ta chẳng được bao nhiêu", nhưng nó "mài sắc trí óc".
- **Phụ chương**: Haydn gửi Albrechtsberger tấm thiếp "*Alt und schwach bin ich*" ("Tôi già và yếu"); Albrechtsberger đáp bằng một *canone perpetuo* bốn bè (ở quãng 5 dưới và quãng 8 dưới; và ở quãng 4 trên).

Canon theo hệ Taneyev: [[canon-hai-be]], [[canon-ba-bon-be]]; các loại canon trong nhạc Bach: [[doi-am-kep]]. Tiếp theo: [[phu-luc-albrechtsberger]].
`,
  },
  {
    slug: 'phu-luc-albrechtsberger',
    title: 'Phụ lục: ba phong cách, nhạc cụ và đọc tổng phổ (Albrechtsberger – Seyfried)',
    category: 'harmony',
    also: ['organology', 'sacred'],
    aliases: ['phong cách nhà thờ thính phòng sân khấu', 'nhạc cụ thế kỷ 19 Albrechtsberger', 'đọc tổng phổ', 'full-score playing', 'thứ tự nhạc cụ trong tổng phổ'],
    summary: 'Phụ lục Tập III — phần lớn là lời của người biên tập Seyfried: phân biệt phong cách nhà thờ, thính phòng, sân khấu và những lạm dụng trong nhạc nhà thờ; mô tả các nhạc cụ đầu thế kỷ 19 (bàn phím, dây gảy, dây kéo, kèn) với tầm âm, khoá, cách ghi kèn chuyển giọng và nhận xét về tính chất; hướng dẫn chơi tổng phổ trên đàn phím và học phối khí.',
    refs: [SRC],
    body: `
**Ai viết**: phụ lục nhắc đến những nhạc sĩ sinh sau khi Albrechtsberger mất (1809) — Chopin, Liszt, Mendelssohn — và có câu tự xưng của người biên tập. Vậy phần lớn phụ lục là lời **Seyfried**, phản ánh thực tiễn khoảng 1820 – 1850 chứ không phải của Albrechtsberger.

## Ba phong cách (tr. 238 – 240)
- Nhà thờ, thính phòng, sân khấu "phải phân biệt rõ, theo bản chất và theo đích của chúng"; sách chê "sự pha trộn không thể biện minh" thời đó. Mỗi người nên chọn một nhánh hợp thiên hướng: "Một bậc thầy toàn năng hiếm hơn phượng hoàng — Mozart của chúng ta là một ngôi sao băng rực rỡ như thế."
- **Nhà thờ**: thánh lễ, graduale, offertorium, thánh vịnh, thánh ca, cantata, oratorio; viết đối âm nghiêm khắc hay tự do, bốn năm bè, *stilo alla capella*, có hay không organ. **Thính phòng**: mọi bài cho phòng khách hay hoà nhạc — giao hưởng, độc tấu đến ngũ tấu, sonata, biến tấu, concerto, aria, ouverture, fantasia. **Sân khấu**: opera nghiêm, opera hài, operetta, melodrama, ballet — nhánh "chịu thay đổi thời trang nhiều nhất"; người viết cần kinh nghiệm hiệu quả kịch, trí tưởng tượng "vẽ bằng nhạc", hiểu thực tế giọng và nhạc cụ.
- **Lịch sử nhạc nhà thờ theo sách**: ban đầu chỉ có giọng hát, hoà âm chậm và trang nghiêm hợp với nhà thờ vang của Ý; vì ca sĩ chỉ dựa vào chính mình nên mọi thứ nguy cho việc hát đúng bị loại khỏi *stilo alla capella* — "vì thế các luật chính của sáng tác nghiêm khắc vẫn giữ nguyên". Sau đó thêm organ, bass số, contrebass, violin, rồi oboe, trumpet, trống, trombone, cornetto (*Zinke*), bassoon; organ thường thấp hơn cao độ dàn nhạc "ít nhất một phần tư cung" nên phải dùng kèn bù.
- "Mục đích chính của một tác phẩm tôn giáo là diễn tả bằng nốt nhạc đúng ý nghĩa của lời." Bị chê: đoạn violin ồn ào, bè trầm nhảy nhót "quá trần tục", trombone đi đồng âm với bè hát, solo đầy hoa mỹ, aria khoe kỹ thuật có cadenza, đoạn nhạc cụ kiểu concerto. Xem [[thanh-le-va-requiem]].

## Nhạc cụ (tr. 240 – 254)
Tầm âm chủ yếu in bằng ví dụ nhạc; bảng dưới chỉ ghi điều sách nói bằng lời (tầm âm đọc từ hình là gần đúng).
| Nhóm | Nhạc cụ và điều sách nói |
|---|---|
| Bàn phím | **Organ**: 1 – 3 bàn phím bốn quãng tám, pedal; âm chính 16 feet; "đoạn nhanh, trang trí rực rỡ không hợp tính chất" trừ concerto organ. **Harpsichord**: dây gảy bằng lông quạ — "đã hiếm và mất uy tín". **Piano**: sáu đến bảy quãng tám, "tầm âm lớn nhất của mọi đàn phím". **Clavichord**: tiếng yếu nhưng hợp diễn tả dịu dàng. Kèm danh sách 35 đàn lai. Xem [[lich-su-piano]] |
| Dây gảy | Guitar sáu dây E A d g b e′, ghi khoá Son, **nghe thấp một quãng 8**; lute với tablature sáu dòng; mandora; mandoline; harp pedal 41 dây "lên dây Mi giáng"; trống định âm — trước kia luôn ghi C và G, nay ghi theo cao độ thật |
| Dây kéo | **Violin** g d′ a′ e″ — violin I thường giữ giai điệu, violin II cho "những quãng bổ sung gần nhất"; "người chơi không bao giờ nên nghe riêng mình". **Viola** c g d a, khoá Đô dòng 3 — các nhà soạn nhạc cũ cho viola đi theo bè trầm, "các bậc thầy hiện đại" cho nó bè riêng; số lượng nên bằng nửa số violin. Viola d'amore, viola da gamba, **cello** C G D A ("tiếng cao giống giọng tenor đẹp"), baryton, **contrebass** — "nhìn bè trầm mà biết bậc thầy"; tránh bè trầm "kiểu trống" chỉ chủ – át |
| Kèn gỗ | **Flute** từ D′ đến G‴; **oboe** C′ – D‴, giọng hợp: Son, Đô, Fa, Si giáng, Mi giáng trưởng; **cor anglais** nghe thấp quãng 5; **clarinet** từ E nhỏ, dùng từng cặp, đổi đoạn ống để đổi giọng, tính chất "nỗi buồn thống thiết" ở adagio giọng thứ; **corno di bassetto** "tầm âm lớn nhất của kèn"; **bassoon** — trung gian giữa cello và contrebass |
| Kèn đồng | **Horn** ghi ở Đô trưởng kèm tên ống chuyển; "một cây horn phải hát"; **trumpet** ghi ở Đô, đôi *clarino*; **trombone** — trang nghiêm, "có chỗ danh dự trong nhạc nhà thờ", nhưng "lối cổ cho trombone đi đồng âm với giọng hát trong fugue không nên theo"; ophicleide, bugle có phím, serpent |
Ghi chú: phần clarinet in vừa "Si" vừa "Si giáng", chưa rõ ý sách ở vài chỗ. Đối chiếu nhạc cụ học: [[phoi-khi-va-viet-cho-nhac-cu]], [[dan-nhac-giao-huong]].

## Chơi tổng phổ (tr. 254 – 256)
- Tổng phổ là "bản kế hoạch viết từng ô, mọi bè chồng lên nhau". Trước kia bè trầm tổng phổ có ghi số; nay đã bỏ.
- Cần: quen **cả năm khoá**; đọc ngay các nhạc cụ chuyển giọng (horn, trumpet, trống ghi ở Đô; clarinet ở La hay Si giáng; corno di bassetto, cor anglais); xem trước thứ tự nhạc cụ, vì chưa có quy ước chung.
- Thứ tự sách đề xuất: flute trên cùng, rồi oboe, clarinet, horn, bassoon, trombone, trumpet, trống — nửa trên là toàn bộ kèn; rồi violin, viola, các giọng hát, cello, contrebass.
- Bài có hát mà không ai hát thì "bổn phận đầu tiên là làm nghe rõ các bè hát có giai điệu" — tenor, bass chơi cao một quãng 8 ở tay phải. Đoạn không hợp đàn phím được soạn lại "miễn đừng làm hỏng tính chất riêng"; ngón út tay trái luôn đánh nốt nền "để bè trầm lăn không tình cờ sinh hợp âm 6/4". Hát recitative: cho ca sĩ nốt mở đầu trong hợp âm kết của phần đệm.
- Học phối khí: nghiên cứu tổng phổ kinh điển, nghe nhiều lần, so hiệu quả với phương tiện, hỏi nhạc công, và "thử nhiều lần — coi đó là bài tập, không phải kiệt tác". Sách ca ngợi Beethoven nối tiếp Haydn, Mozart. "*Vita brevis, ars longa!*"

Tra nhanh toàn bộ hệ thống: [[tra-cuu-albrechtsberger]].
`,
  },
  {
    slug: 'tra-cuu-albrechtsberger',
    title: 'Tra cứu nhanh: các luật chính của Albrechtsberger',
    category: 'harmony',
    also: ['polyphony'],
    aliases: ['tra cứu Albrechtsberger', 'tóm tắt Albrechtsberger', 'cheat sheet Albrechtsberger'],
    summary: 'Một trang gom các luật hay dùng nhất của bộ sách: luật nối hợp âm, quãng ngầm định của bass số, sáu tiến hành nguy hiểm, nhân đôi, mười luật loại 1, đặc điểm năm loại, nốt treo và giải quyết, đáp đề, đối âm kép ở quãng 8 – 10 – 12, các thuật ngữ cổ — kèm số trang để mở lại sách.',
    refs: [SRC],
    body: `
## Hoà âm và bass liên tục (Tập I)
| Chủ đề | Luật | Trang |
|---|---|---|
| Nối hợp âm | Hoàn toàn → hoàn toàn: ngược chiều hay xiên; → không hoàn toàn: mọi chuyển động; không hoàn toàn → hoàn toàn: ngược chiều hay xiên; cấm 5, 8 liền | 15 |
| Không số | hợp âm ba; "tasto solo": không đệm | 16, 20 |
| 2 · 4 tăng · 6 · 7 · 9 | 4 + 6 · 2 + 6 · 3 + 8 · 3 + 5 · 3 + 5 | 20 |
| Nhân đôi | Thuận âm được, cảm âm thì không; nghịch âm chỉ ba ngoại lệ (§XXXII) | 25, 37 |
| Hợp âm mỗi ô | một hợp âm mỗi phần chính của ô | 37 – 39 |
| Sáu tiến hành nguy hiểm | 2 sát bè trầm; 4 tăng ở trong cùng; 6 sau hợp âm ba trên bè trầm đi bậc; chuỗi 6 thuận chiều; 7 có 3 và 5 vào hợp âm ba; 9 rồi 5 – 6 khi bè trầm lên quãng 3 | 29 – 32 |
| Hoà âm thuần khiết | không quãng 4 thuận giữa các bè trên | 52 |
| Năm giọng họ hàng | Đô: Son, Mi thứ, La thứ, Rê thứ, Fa | 58 |
| Bốn loại kết | hoàn toàn, không hoàn toàn, ngắt, đánh lừa (*Inganni*) | 64 |

## Sáng tác nghiêm khắc (Tập II)
| Loại | Đặc điểm chính | Kết (đối âm trên / dưới) |
|---|---|---|
| 1 | Chỉ thuận âm, không hoàn toàn nhiều hơn; mười luật | 6 trưởng → 8 / 3 thứ → 1 |
| 2 | Phần mạnh thuận; nghịch âm đi bậc ở phần nhẹ | 5 – 6 → 8 / 5 – 3 → 1 |
| 3 | Nốt đầu thuận; hai nốt đổi của Fux | 6 trưởng / 3 thứ ở nốt cuối ô áp chót |
| 4 | Nốt treo: chuẩn bị ở phần nhẹ, treo ở phần mạnh, giải quyết đi xuống | 7 – 6 / 2 – 3 |
| 5 | Trộn; nốt treo "dài" và "ngắn"; loại 1 chỉ ở ô cuối | — |
- Cấm nhảy quãng tăng, phần lớn quãng giảm, ba quãng 7, quá quãng 8; không quá ba quãng 3 hay 6 liền thuận chiều; không lặp nốt.
- Ba bè: hai quãng ẩn được nếu bè trên của cặp đi bậc. Bốn bè: thêm quãng ẩn ở bè trong; cấm *Quarta fundata*.
- Lối tự do: nghịch âm không chuẩn bị (phải giải quyết), nhảy đến nghịch âm, chromatic, Mi contra Fa.

## Fugue và đối âm kép (Tập II – III)
| Chủ đề | Luật |
|---|---|
| Đáp đề | chủ ↔ át; bước 2 ↔ nhảy 3; nhảy 4 → 3; 5 → 4; 4 hay 6 → 5; 7 → 6; 8 → 7 |
| Fugue hai bè | nửa kết ở V → chủ đề lại, nửa stretto → nửa kết ở III → stretto → kết |
| Đối âm kép quãng 8 | n → 9 − n; không treo quãng 9; không nhảy vào quãng 8 ở phần mạnh; quãng 5 không vào bằng bước nhảy |
| Quãng 10 | n → 11 − n; cấm 3, 6 liền và 3, 6 thuận chiều |
| Quãng 12 | n → 13 − n; quãng 6 không vào bằng bước nhảy; không 7 – 6 ở bè trên |
| Canon | mô phỏng nghiêm nhất; đúng nhất ở đồng âm và quãng 8 |

## Thuật ngữ
Bass liên tục = [[bass-so|bass số]] · bậc (grade) · nốt nền (fundamental note — nốt trầm) · vị trí quãng 8, 5, 3 · nốt đổi · chuẩn bị – đánh – giải quyết · loại (class) · *Notae abjectae* · *Ottava battuta* · Mi contra Fa · *Quarta fundata* · *per arsin et thesin* · *Inganni* · *octava acuta / gravis* · *Inventio*.

Tổng quan: [[he-thong-albrechtsberger]].
`,
  },
]

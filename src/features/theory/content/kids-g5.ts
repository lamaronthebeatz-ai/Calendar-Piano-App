import type { Article } from '../wiki'

/**
 * Piano & Nhạc lý cho Trẻ em — Grade 5: theory following ABRSM's Music Theory syllabus for Grade 5
 * (outline from 2020) and the piano requirements of the Practical Grades 2027 & 2028 specification.
 * Examples: music/ex/g5.txt.
 */
const THEORY: [string, string] = ['ABRSM — The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf']
const PIANO: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsG5: Article[] = [
  {
    slug: 'tre-em-g5-nhip-le',
    title: 'Nhịp lẻ và cách chia phách bất thường',
    category: 'rhythm',
    unlisted: true,
    aliases: ['nhịp 5/4 cho trẻ', 'nhịp 7/8 cho trẻ', 'liên năm'],
    summary: 'Nhịp 5/4, 7/4, 5/8, 7/8 — ô nhịp ghép từ nhóm hai và nhóm ba; liên năm, liên sáu, liên bảy và các cách chia phách khác thường.',
    body: `
## Nhịp lẻ
Trong **nhịp lẻ** (*irregular time*), ô nhịp không chia đều thành nhóm hai hay nhóm ba, mà **ghép** các nhóm. Đề cương Grade 5 có bốn nhịp: **5/4, 7/4, 5/8, 7/8**.

::ex g5-nhip-le | 5/4 (thường 3 + 2 hoặc 2 + 3); 7/8 nhóm 2 + 2 + 3; 5/8 nhóm 3 + 2. Cách nối gạch cho biết nhóm.

Đếm nhịp lẻ: đếm theo nhóm — 7/8 (2 + 2 + 3) đếm "**1**-2 **1**-2 **1**-2-3", nhấn đầu mỗi nhóm. Bài *Gió đồng* ở phần Tác phẩm viết nhịp 5/4 nhóm 3 + 2.

## Chia phách bất thường
Ngoài liên ba (Grade 2) và liên hai (Grade 4), một phách còn có thể chia thành **5, 6, 7** nốt đều nhau — số ghi trên nhóm.

::ex g5-chia-bat-thuong | Liên năm, liên sáu, liên bảy móc kép — mỗi nhóm chiếm đúng một phách nốt đen.

Mẹo: chơi đều trong phách — nốt đầu nhóm đúng phách, nốt cuối kịp trước phách sau.

## Luyện tập
1. Vỗ 7/8 theo hai cách nhóm 2 + 2 + 3 và 3 + 2 + 2. Nghe khác nhau thế nào?
2. Viết một ô 5/8 dạng 2 + 3 bằng móc đơn có gạch nối đúng.
3. Chơi bài *Gió đồng*, chân dậm hai nhóm 3 + 2 mỗi ô.

## Gợi ý cho phụ huynh và giáo viên
Xem [[nhip-hon-hop]], [[so-chi-nhip]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-khoa-tenor',
    title: 'Khoá tenor và bốn khoá',
    category: 'basics',
    unlisted: true,
    aliases: ['khoá Đô dòng 4 cho trẻ', 'chép qua bốn khoá'],
    summary: 'Khoá Đô dòng 4 (tenor) — dùng cho nốt cao của cello, fagốt, trombone; đọc nốt ở bốn khoá và chép một giai điệu từ khoá này sang khoá khác một quãng tám.',
    body: `
**Khoá tenor** là khoá Đô có tâm ở **dòng 4**: dòng 4 là Đô giữa. Nó dùng cho âm vực cao của **cello**, **fagốt**, **trombone**.

::ex g5-khoa-tenor | Khoá tenor: dòng (Rê, Fa, La, Đô giữa, Mi) và khe (Mi, Sol, Si, Rê).

## Bốn khoá
::ex g5-bon-khoa | Đô giữa ở khoá Sol, alto, tenor và khoá Fa.

Khoá alto và khoá tenor là **cùng một ký hiệu**, chỉ dời tâm từ dòng 3 lên dòng 4. Cách đọc chắc nhất: tìm **Đô giữa** rồi đếm lên, xuống.

## Chép qua khoá
Đề Grade 5 yêu cầu chép một giai điệu đơn giản **từ bất kỳ khoá nào sang khoá khác**, ở cùng cao độ hoặc cách một quãng tám.

::ex g5-chep-tenor | Giai điệu khoá Fa (trên) chép sang khoá tenor (dưới) cùng cao độ.

## Luyện tập
1. Đọc tên nốt mọi dòng, khe của khoá tenor.
2. Chép tay trái *Von fremden Ländern* (ô 1 – 4) sang khoá tenor.

## Gợi ý cho phụ huynh và giáo viên
Xem [[khoa-do]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-dich-giong-nhac-cu',
    title: 'Nhạc cụ dịch giọng: Si♭, La và Fa',
    category: 'pitch',
    unlisted: true,
    aliases: ['nhạc cụ dịch giọng cho trẻ', 'clarinet si giáng'],
    summary: 'Clarinet, trumpet "in B♭" vang thấp hơn nốt viết một quãng 2 trưởng; clarinet "in A" thấp hơn quãng 3 thứ; kèn co "in F" thấp hơn quãng 5 đúng — cách chuyển sang âm thực và ngược lại.',
    body: `
Một số nhạc cụ là **nhạc cụ dịch giọng**: nốt **viết** khác nốt **vang** (âm thực, *concert pitch*). Tên "in B♭" cho biết: khi nhạc công đọc **Đô**, âm vang ra là **Si♭**.

| Nhạc cụ | Viết Đô vang ra | Âm thực so với nốt viết |
|---|---|---|
| clarinet in B♭, trumpet in B♭ | Si♭ | thấp hơn **quãng 2 trưởng** |
| clarinet in A | La | thấp hơn **quãng 3 thứ** |
| kèn co (horn) in F | Fa | thấp hơn **quãng 5 đúng** |

## Từ bản viết sang âm thực
Chuyển **xuống** đúng quãng, kể cả **hoá biểu**: hoá biểu cũng dịch theo.

::ex g5-dich-si-giang | Clarinet in B♭ viết ở Rê trưởng → âm thực ở Đô trưởng, thấp hơn một quãng 2 trưởng.

::ex g5-dich-fa | Horn in F viết ở Đô trưởng → âm thực ở Fa trưởng, thấp hơn một quãng 5 đúng.

## Từ âm thực sang bản viết
Làm ngược lại: chuyển **lên** cùng quãng. Đề thi cho biết quãng và hướng — đọc kỹ.

## Luyện tập
1. Một bài ở Sol trưởng (âm thực): clarinet in B♭ phải viết ở giọng nào? (La trưởng)
2. Chuyển câu đầu *Ode to Joy* (Đô trưởng) sang bản viết cho horn in F.

## Gợi ý cho phụ huynh và giáo viên
Lỗi hay gặp: dịch nốt mà quên dịch hoá biểu, hoặc quên dấu hoá bất thường. Xem [[dich-giong]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-giong-sau-dau',
    title: 'Giọng đến sáu dấu và vòng quãng năm',
    category: 'scales',
    unlisted: true,
    aliases: ['vòng quãng năm cho trẻ', 'Fa thăng trưởng Sol giáng trưởng'],
    summary: 'Fa♯ và Sol♭ trưởng, Rê♯ và Mi♭ thứ — các giọng sáu dấu; vòng quãng năm sắp mọi giọng theo số dấu và cho thấy giọng trùng âm.',
    body: `
## Giọng sáu dấu
::ex g5-sau-dau | Fa♯ trưởng (6 thăng), Sol♭ trưởng (6 giáng), Rê♯ thứ (6 thăng), Mi♭ thứ (6 giáng).

**Fa♯ trưởng** và **Sol♭ trưởng** vang **giống hệt nhau** trên piano — hai **giọng trùng âm**. Tương tự Rê♯ thứ và Mi♭ thứ.

## Vòng quãng năm
Đi **lên một quãng 5** từ Đô, mỗi bước thêm **một dấu thăng**: Đô – Sol – Rê – La – Mi – Si – Fa♯. Đi **xuống một quãng 5** (hay lên quãng 4), mỗi bước thêm **một dấu giáng**: Đô – Fa – Si♭ – Mi♭ – La♭ – Rê♭ – Sol♭. Hai nhánh gặp nhau ở Fa♯ = Sol♭.

::circle-of-fifths | Vòng quãng năm: giọng trưởng vòng ngoài, giọng thứ song song vòng trong.

Vòng quãng năm cũng là công cụ trong trang **Bảng tính** của app.

## Luyện tập
1. Viết hoá biểu Fa♯ trưởng và Mi♭ thứ ở khoá tenor.
2. Giọng nào cách Si♭ trưởng một bước trên vòng quãng năm? (Fa trưởng và Mi♭ trưởng)

## Gợi ý cho phụ huynh và giáo viên
Xem [[vong-quang-nam]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-quang-kep-va-bat-ky',
    title: 'Quãng kép và quãng từ bất kỳ nốt nào',
    category: 'pitch',
    unlisted: true,
    aliases: ['quãng kép cho trẻ', 'quãng 9 quãng 10'],
    summary: 'Quãng lớn hơn quãng tám (9, 10, 12…) và gọi tên mọi quãng đơn, kép từ bất kỳ nốt nào, kể cả quãng tăng và giảm ít gặp.',
    body: `
## Quãng kép
Quãng **lớn hơn một quãng tám** là **quãng kép**. Gọi tên bằng cách cộng 7: quãng 9 = quãng 2 + một quãng tám, quãng 10 = 3 + 8… Tính chất giữ nguyên.

::ex g5-quang-kep | Đô – Rê cao: 9 trưởng; Đô – Mi cao: 10 trưởng; Đô – Sol cao hai quãng tám: 12 đúng; Mi – Sol: 10 thứ; Fa – Mi: 14 trưởng.

Đề thi chấp nhận cả cách gọi "quãng 3 trưởng kép" (*compound major 3rd*) thay cho "10 trưởng".

## Từ bất kỳ nốt nào
Grade 5 bỏ giới hạn "trong giọng": nốt dưới có thể là bất kỳ nốt nào, kể cả Mi♯ hay Si♭… Cách làm không đổi — coi nốt dưới là âm chủ của giọng trưởng, so sánh, rồi điều chỉnh.

::ex g5-quang-bat-ky | Mi♭ – Đô♯ (6 tăng), Si♭ – Mi (4 tăng), Sol♯ – Fa (7 giảm), Rê♭ – La (5 tăng), Mi♭ – Fa♯ (2 tăng).

Nếu nốt dưới không là âm chủ của giọng trưởng thông thường (ví dụ Sol♯), hãy tạm bỏ dấu hoá của **cả hai** nốt, gọi tên quãng, rồi tính lại: Sol – Fa là 7 thứ; nâng nốt dưới lên Sol♯ làm quãng hẹp nửa cung → **7 giảm**.

## Luyện tập
1. Gọi tên: La – Đô♯ (cách hơn một quãng tám), Fa♯ – Mi♭, Si – Fa.
2. Viết trên Rê♭: 9 thứ, 6 tăng, 12 đúng.

## Gợi ý cho phụ huynh và giáo viên
Xem [[quang]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-hop-am-the-dao',
    title: 'Hợp âm I, II, IV, V và thế đảo',
    category: 'harmony',
    unlisted: true,
    aliases: ['thế đảo hợp âm cho trẻ', 'Ia Ib Ic'],
    summary: 'Ba thế của hợp âm ba: thế gốc (a), đảo một (b), đảo hai (c) — nhận biết bằng nốt ở bè trầm; hợp âm trên bậc I, II, IV, V trong mọi giọng của cấp.',
    body: `
Một hợp âm ba có ba nốt; **nốt ở bè trầm** quyết định **thế** của nó:

| Thế | Ký hiệu | Bè trầm là |
|---|---|---|
| thế gốc | a (ví dụ Ia) | nốt gốc |
| đảo một | b (Ib) | nốt bậc 3 của hợp âm |
| đảo hai | c (Ic) | nốt bậc 5 của hợp âm |

::ex g5-the-dao | Hợp âm I và II của Đô trưởng ở ba thế.

## Bốn hợp âm của Grade 5
**I** (chủ), **II** (trên chủ), **IV** (hạ át), **V** (át). Trong giọng trưởng, **II là hợp âm thứ** (Đô trưởng: Rê – Fa – La).

::ex g5-hop-am-chinh-ba-the | Sol trưởng: Ia – Vb – Ia – IVa – Ic – Va – Ia. Bè trầm đi gần nhau nhờ thế đảo: Sol – Fa♯ – Sol – Đô – Rê – Rê – Sol.

Hợp âm **Ic – V** ở cuối câu là "kết có 6/4" rất quen trong nhạc cổ điển — hợp âm Ic như một nốt dựa trên bè trầm át.

## Luyện tập
1. Gọi tên (số và thế): Mi – Sol – Đô trong Đô trưởng (Ib); La – Rê – Fa♯ trong Rê trưởng (Ic).
2. Viết IIb của Fa trưởng (bè trầm Si♭).

## Gợi ý cho phụ huynh và giáo viên
Xem [[the-dao-hop-am]], [[hop-am-ba]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-cau-ket',
    title: 'Các loại kết và chọn hợp âm cho giai điệu',
    category: 'harmony',
    unlisted: true,
    aliases: ['kết hoàn toàn cho trẻ', 'kết plagal', 'nửa kết'],
    summary: 'Kết hoàn toàn (V – I), kết plagal (IV – I), nửa kết (… – V) ở các giọng Đô, Sol, Rê, Fa trưởng; chọn hợp âm hợp với giai điệu ở chỗ kết câu.',
    body: `
**Kết** là hai hợp âm cuối câu, như dấu câu trong văn.

| Kết | Hợp âm | Cảm giác |
|---|---|---|
| hoàn toàn (*perfect*) | V – I | dấu chấm: trọn vẹn |
| plagal | IV – I | "Amen" — mềm, trang nghiêm |
| nửa kết (*imperfect*) | I (II, IV) – V | dấu phẩy: chưa xong |

::ex g5-ket-hoan-toan | Đô trưởng: kết hoàn toàn V – I, kết plagal IV – I, nửa kết I – V.

## Chọn hợp âm cho giai điệu
Đề Grade 5 cho một giai điệu (Đô, Sol, Rê hoặc Fa trưởng) và yêu cầu chọn hợp âm ở chỗ kết câu. Cách làm:
1. Nhìn **nốt giai điệu** ở chỗ đó.
2. Tìm trong I, II, IV, V hợp âm **chứa** nốt ấy.
3. Chọn sao cho đúng loại kết: cuối bài thường **V – I**; giữa bài, câu "hỏi" thường dừng ở **V**.

| Nốt giai điệu (bậc) | Có trong hợp âm |
|---|---|
| 1 | I, IV |
| 2 | V, II |
| 3 | I |
| 4 | IV, II |
| 5 | I, V |
| 6 | IV, II |
| 7 | V |

::ex g5-chon-hop-am | Fa trưởng: ô 3 nốt Si♭ – La – Sol → IV rồi V (Si♭ thuộc IV, Sol thuộc V); ô cuối Fa → I. Kết hoàn toàn.

## Luyện tập
1. Đặt kết cho câu cuối *Twinkle* (Đô trưởng): Rê – Rê – Đô.
2. Hát giai điệu *Ode to Joy* và chọn I hoặc V cho từng ô.

## Gợi ý cho phụ huynh và giáo viên
Xem [[cau-ket]], [[chuc-nang-hoa-am]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-ky-hieu-hoa-my',
    title: 'Viết ký hiệu cho nốt hoa mỹ',
    category: 'expression',
    unlisted: true,
    aliases: ['thay nốt hoa mỹ bằng ký hiệu'],
    summary: 'Nhìn một nốt hoa mỹ được viết ra bằng nốt thường và thay nó bằng ký hiệu đúng: láy rền, láy chùm, láy trên, láy dưới, nốt dựa.',
    body: `
Ở Grade 4 bạn nhận ra ký hiệu. Grade 5 yêu cầu làm **ngược lại**: thấy một đoạn nốt hoa mỹ **viết ra đầy đủ**, thay bằng **ký hiệu** (đề cương nói rõ: chỉ chiều này, không yêu cầu viết ký hiệu ra thành nốt).

::ex g5-hoa-my-ky-hieu | Viết ra: láy rền (Rê – Mi xen kẽ), láy chùm (Mi – Fa – Mi – Rê – Mi), láy trên (Sol – La – Sol). Sau vạch kép: các ký hiệu tương ứng.

Cách nhận ra:
- **Xen kẽ nhanh** hai nốt kề nhau, nhiều lần → **láy rền** (tr).
- **Bốn nốt quanh** nốt chính (trên – chính – dưới – chính) → **láy chùm**.
- **Ba nốt nhanh** chính – trên – chính → **láy trên**; chính – dưới – chính → **láy dưới**.
- Một nốt **chen trước** nốt chính, lấy một phần thời gian → **nốt dựa**.

## Gợi ý cho phụ huynh và giáo viên
Xem [[ky-hieu-hoa-my]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-giong-hat-nhac-cu',
    title: 'Giọng hát, nhạc cụ và khoá của chúng',
    category: 'organology',
    unlisted: true,
    aliases: ['SATB cho trẻ', 'giọng soprano alto tenor bass'],
    summary: 'Bốn giọng hát soprano – alto – tenor – bass và khoá dùng cho chúng; tổng kết các bộ nhạc cụ, khoá và cách phát âm.',
    body: `
## Bốn giọng hát
| Giọng | Tiếng Việt | Thường viết ở |
|---|---|---|
| Soprano (S) | nữ cao | khoá Sol |
| Alto (A) | nữ trầm | khoá Sol |
| Tenor (T) | nam cao | khoá Sol có số 8 bên dưới (vang thấp hơn một quãng tám), hoặc khoá Fa |
| Bass (B) | nam trầm | khoá Fa |

::ex g5-giong-hat | Bốn bè S – A – T – B; bè tenor dùng khoá Sol có số 8.

## Nhạc cụ và khoá
| Khoá | Nhạc cụ tiêu biểu |
|---|---|
| Sol | violin, sáo, oboe, clarinet, trumpet, horn |
| alto | viola |
| tenor | nốt cao của cello, fagốt, trombone |
| Fa | cello, contrabass, fagốt, trombone, tuba, timpani |

Nhắc lại bốn bộ (Grade 4): **dây** (kéo vĩ / gảy), **gỗ** (thổi qua lỗ hoặc lưỡi gà), **đồng** (rung môi), **gõ**. Đàn piano là nhạc cụ có dây được **gõ bằng búa** — thường xếp vào bộ phím hoặc bộ gõ tuỳ cách phân loại.

## Gợi ý cho phụ huynh và giáo viên
Xem [[nhac-khi-the-gioi]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g5-ky-thuat',
    title: 'Âm giai, staccato, cromatic ngược chiều và hợp âm bảy giảm Grade 5',
    category: 'technique',
    unlisted: true,
    aliases: ['kỹ thuật grade 5'],
    summary: 'Yêu cầu ABRSM Grade 5 (2027 & 2028): mười âm giai hai tay, âm giai staccato, ngược chiều Rê♭ trưởng và Đô♯ thứ hoà âm, cromatic ngược chiều bắt đầu cách quãng 3 trưởng, hợp âm rải và hợp âm bảy giảm từ Si.',
    body: `
## Yêu cầu của kỳ thi
Theo đặc tả ABRSM 2027 & 2028 (thuộc lòng, đều):

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai | La, Mi, Si, Fa♯, Rê♭ trưởng; Fa♯, Đô♯, Sol♯, Mi♭, Si♭ thứ (hoà âm hoặc giai điệu) | 2 quãng tám | liền tiếng, hai tay |
| Âm giai staccato | La♭ trưởng; Fa thứ | 2 quãng tám | **nảy tiếng**, từng tay |
| Âm giai ngược chiều | Rê♭ trưởng; Đô♯ thứ hoà âm | 2 quãng tám | liền tiếng, từ âm chủ |
| Cromatic ngược chiều | tay trái từ Fa♯, tay phải từ La♯ | 2 quãng tám | hai tay **cách nhau quãng 3 trưởng** |
| Hợp âm rải | La, Mi, Si, Fa♯, La♭, Rê♭ trưởng; Fa♯, Đô♯, Sol♯, Mi♭, Fa, Si♭ thứ | 2 quãng tám | hai tay |
| Hợp âm bảy giảm | bắt đầu từ Si | 2 quãng tám | từng tay |

## Âm giai staccato
Staccato ở tốc độ âm giai: nảy từ **cổ tay nhẹ**, ngón vẫn đúng như khi chơi liền; giữ đều tuyệt đối.

::ex g5-staccato | La♭ trưởng staccato, tay phải, hai quãng tám đi lên.

## Cromatic ngược chiều cách quãng 3
::ex g5-nguoc-chieu-cromatic | Tay phải từ La♯ đi lên, tay trái từ Fa♯ đi xuống (một quãng tám đầu).

## Hợp âm bảy giảm
**Hợp âm bảy giảm** xếp chồng toàn quãng 3 thứ: Si – Rê – Fa – La♭. Ngón 1 – 2 – 3 – 4, luồn ngón cái nối quãng tám.

::ex g5-bay-giam | Hợp âm bảy giảm từ Si, tay phải, hai quãng tám.

## Gợi ý cho phụ huynh và giáo viên
Muốn thi piano thực hành Grade 6 – 8 của ABRSM, học sinh phải đạt trước nhạc lý Grade 5 (hoặc Practical Musicianship / Jazz Grade 5) — xem phần Kiểm tra cuối cấp. Xem [[ngon-bam]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g5-thi-tau-va-nghe',
    title: 'Thị tấu và luyện tai Grade 5',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu grade 5', 'phong cách thời kỳ cho trẻ'],
    summary: 'Bài thị tấu Grade 5 khoảng 8 – 12 ô, có hợp âm bốn nốt, nghịch phách, chậm lại cuối bài; bài nghe Grade 5 thêm xướng âm sáu nốt và câu hỏi về phong cách, thời kỳ.',
    body: `
## Bài thị tấu Grade 5
Theo đặc tả ABRSM 2027 & 2028, thêm: **khoảng 8 – 12 ô**; giọng **Mi, La♭ trưởng**, **Fa♯, Đô thứ**; **hợp âm bốn nốt** (tối đa hai nốt mỗi tay); **nghịch phách** đơn giản; **chậm lại ở cuối**; **ff**.

::ex g5-thi-tau | Bài đọc mẫu ở La♭ trưởng: tìm chỗ nghịch phách (ô 7) và chỗ chậm lại.

## Bốn bài nghe Grade 5
- **A.** Hát hoặc chơi lại từ trí nhớ một giai điệu (như Grade 4).
- **B.** **Xướng âm sáu nốt** từ bản nhạc: trong khoảng quãng 5 trên và quãng 4 dưới âm chủ, giọng trưởng đến hai dấu; bắt đầu và kết thúc ở âm chủ, không quãng lớn hơn quãng 3 trừ **quãng 4 đi lên từ át về chủ**.
- **C. (i)** Trả lời về một đặc điểm (cường độ, cách chơi, tốc độ, giọng, tính chất) và **phong cách – thời kỳ**; **(ii)** vỗ lại tiết tấu một trích đoạn, nói nhịp hai, ba hay bốn.

::ex g5-xuong-am | Mẫu xướng âm sáu nốt ở Rê trưởng: xuống La (quãng 4 dưới âm chủ) rồi nhảy quãng 4 về Rê.

## Phong cách và thời kỳ
| Thời kỳ | Khoảng | Dấu hiệu dễ nghe | Trong sách này |
|---|---|---|---|
| Baroque | ~1600 – 1750 | nhiều bè đan nhau, nhịp đều, hoa mỹ | Petzold, Bach (Invention 8) |
| Cổ điển | ~1750 – 1820 | giai điệu rõ, đệm hợp âm rải, câu cân đối | Clementi, Beethoven |
| Lãng mạn | ~1820 – 1900 | giai điệu hát, hoà âm giàu màu, co giãn nhịp | Schumann, Tchaikovsky, Burgmüller |
| Thế kỷ XX | 1900 – | hoà âm mới, nhịp lạ, ảnh hưởng jazz, dân gian | Satie, Joplin |

Mốc năm chỉ là ước lệ. Xem [[cac-thoi-ky]], [[thoi-ky-baroque]], [[thoi-ky-co-dien]], [[thoi-ky-lang-man]].

## Gợi ý cho phụ huynh và giáo viên
Xem [[xuong-am]], [[thi-tau]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g5-doc-hieu',
    title: 'Đọc hiểu một đoạn nhạc: câu hỏi tổng hợp',
    category: 'form',
    unlisted: true,
    aliases: ['music in context grade 5', 'phân tích đoạn nhạc cho trẻ'],
    summary: 'Câu hỏi tổng hợp kiểu đề nhạc lý Grade 5 trên một đoạn piano giọng Mi thứ: giọng, hợp âm và thế đảo, kết, quãng, thuật ngữ, nhạc cụ có thể chơi giai điệu.',
    body: `
::ex g5-doc-hieu | Đoạn tám ô, Mi thứ, 3/4.

## Thử trả lời
1. Giọng? *(Mi thứ — một dấu thăng, có Rê♯ cảm âm, kết ở Mi)*
2. *Andante espressivo*? *(thong thả, diễn cảm)*
3. Hợp âm ở ô 2 (bè trầm Si, giai điệu Fa♯ – Mi – Rê♯)? *(V của Mi thứ, thế gốc — Va)*
4. Hai ô cuối kết loại gì? *(V – I: kết hoàn toàn)*
5. Quãng giữa nốt đầu (Si) và nốt cao nhất của ô 3 (Si cao)? *(8 đúng)*
6. Nốt hoa mỹ? *(không có)* — đôi khi câu trả lời đúng là "không có"!
7. Nhạc cụ nào có thể chơi giai điệu ở đúng cao độ viết? *(violin, sáo, oboe — không phải clarinet in B♭ vì nó dịch giọng)*
8. Có mấy câu? *(hai câu bốn ô; câu một dừng ở hợp âm Đô trưởng — chưa về chủ, như dấu phẩy; câu hai kết hoàn toàn về I)*

## Gợi ý cho phụ huynh và giáo viên
Grade 5 nhạc lý là điều kiện để thi piano thực hành Grade 6 – 8 của ABRSM (hoặc Practical Musicianship / Jazz Grade 5) — xem Kiểm tra cuối cấp.
`,
    refs: [THEORY],
  },
]

import type { Article } from '../wiki'

/**
 * Piano & Nhạc lý cho Trẻ em — Grade 1: theory following ABRSM's Music Theory syllabus for Grade 1
 * (outline "The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5") and the piano requirements of the
 * Practical Grades 2027 & 2028 specification. Examples: music/ex/g1.txt.
 */
const THEORY: [string, string] = ['ABRSM — The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf']
const PIANO: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsG1: Article[] = [
  {
    slug: 'tre-em-g1-truong-do',
    title: 'Trường độ: từ nốt tròn đến nốt móc kép',
    category: 'rhythm',
    unlisted: true,
    aliases: ['móc đơn móc kép cho trẻ', 'semiquaver'],
    summary: 'Năm hình nốt của Grade 1 — tròn, trắng, đen, móc đơn, móc kép — mỗi hình bằng nửa hình trước; các dấu lặng tương ứng; đọc tiết tấu bằng âm tiết ta, ti-ti, ti-ka-ti-ka.',
    body: `
Ở cuốn Initial bạn đã biết nốt tròn, trắng, đen. Grade 1 thêm hai hình nốt nhanh hơn: **nốt móc đơn** và **nốt móc kép**. Quy luật rất đơn giản: **mỗi hình nốt dài bằng nửa hình đứng trước nó**.

## Cây trường độ
::ex g1-cay-truong-do | Một nốt tròn = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn = 16 nốt móc kép.

| Tên Việt | Tên Anh (ABRSM) | Tên Mỹ | Số phách (khi phách là nốt đen) |
|---|---|---|---|
| nốt tròn | semibreve | whole note | 4 |
| nốt trắng | minim | half note | 2 |
| nốt đen | crotchet | quarter note | 1 |
| nốt móc đơn | quaver | eighth note | ½ |
| nốt móc kép | semiquaver | sixteenth note | ¼ |

Đề thi ABRSM viết bằng tiếng Anh và chấp nhận cả hai kiểu tên (semibreve hay whole note…), nên bạn nên quen cả hai.

Nốt móc đơn có **một** móc ở đuôi, móc kép có **hai** móc. Khi đứng thành nhóm, các móc được nối thành **gạch nối**: một gạch cho móc đơn, hai gạch cho móc kép.

## Dấu lặng
::ex g1-dau-lang-du | Dấu lặng tròn, trắng, đen, móc đơn, móc kép — từ dài đến ngắn.

Dấu lặng tròn treo **dưới** dòng 4; dấu lặng trắng ngồi **trên** dòng 3 — mẹo nhớ: "tròn nặng nên treo, trắng nhẹ nên ngồi". Dấu lặng tròn còn dùng cho **cả một ô nhịp im lặng**, bất kể số chỉ nhịp.

## Đọc bằng âm tiết
::ex g1-moc-don-moc-kep | ta = nốt đen; ti-ti = hai móc đơn; ti-ka-ti-ka = bốn móc kép (cả nhóm vẫn bằng một phách).

## Luyện tập
1. Vỗ ví dụ trên trong khi chân giữ phách đều.
2. Một nốt trắng bằng bao nhiêu nốt móc đơn? Một nốt đen bằng bao nhiêu móc kép? (4; 4)
3. Viết một dấu lặng duy nhất thay cho hai dấu lặng móc đơn liền nhau ở đầu phách.

## Gợi ý cho phụ huynh và giáo viên
Đề cương nhạc lý ABRSM Grade 1 gồm năm hình nốt này, dấu lặng tương ứng, dấu nối và nốt chấm dôi đơn. Xem thêm [[truong-do]], [[dau-lang]], [[am-tiet-nhip]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-cham-doi-va-dau-noi',
    title: 'Nốt chấm dôi, dấu nối và dấu luyến',
    category: 'rhythm',
    unlisted: true,
    aliases: ['dấu nối trẻ em', 'nốt đen chấm dôi'],
    summary: 'Dấu chấm dôi làm nốt dài thêm một nửa; dấu nối cộng hai nốt cùng cao độ thành một âm dài, kể cả qua vạch nhịp; dấu luyến nối các nốt khác cao độ để chơi liền tiếng.',
    body: `
## Chấm dôi: thêm một nửa
Dấu chấm đặt bên phải đầu nốt làm nốt **dài thêm một nửa** giá trị của chính nó.

| Nốt | Giá trị | Có chấm dôi |
|---|---|---|
| nốt trắng (2 phách) | 2 | 2 + 1 = **3 phách** |
| nốt đen (1 phách) | 1 | 1 + ½ = **1 phách rưỡi** |
| nốt móc đơn (½ phách) | ½ | ½ + ¼ = ¾ phách |

::ex g1-cham-doi | Nốt trắng chấm dôi chiếm trọn ô 3/4. Nhóm "nốt đen chấm dôi + móc đơn" (đọc *ta-i ti*) lấp đầy hai phách: nốt đen chấm dôi kéo qua nửa đầu phách thứ hai, móc đơn chen vào nửa sau.

Mẹo đếm nốt đen chấm dôi: đếm "**1 – 2 – và**", nốt móc đơn rơi đúng chữ "và".

## Dấu nối
**Dấu nối** là đường cong nối **hai nốt cùng cao độ**: chỉ đánh nốt đầu, rồi **giữ** thêm độ dài của nốt sau. Dấu nối cho phép kéo một âm **qua vạch nhịp** — điều mà chấm dôi không làm được.

::ex g1-noi-qua-vach | Nốt Mi ở phách 3 được giữ sang phách 1 của ô sau; nốt Si giữ suốt hai ô.

## Dấu nối hay dấu luyến?
Hai ký hiệu trông giống nhau nhưng khác nghĩa:
- **Dấu nối**: hai nốt **cùng** cao độ → giữ thành một âm.
- **Dấu luyến**: các nốt **khác** cao độ → chơi **liền tiếng**.

::ex g1-dau-noi-dau-luyen | Ô 1 – 2: dấu nối (Sol – Sol, đánh một lần). Ô 3: dấu luyến trên bốn nốt khác nhau.

## Luyện tập
1. Một nốt trắng chấm dôi bằng bao nhiêu nốt móc đơn? (6)
2. Vỗ ví dụ chấm dôi, đếm to "1 – 2 – và".
3. Trong một bài bạn đang học, tìm một dấu nối và một dấu luyến; chỉ ra khác biệt.

## Gợi ý cho phụ huynh và giáo viên
Sai lầm phổ biến nhất là đánh lại nốt sau dấu nối. Cho trẻ hát "ta-a" kéo dài qua vạch nhịp trước khi chơi. Xem [[cham-doi-dau-noi]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-nhip-va-nhom-not',
    title: 'Nhịp 2/4, 3/4, 4/4 và cách nhóm nốt',
    category: 'rhythm',
    unlisted: true,
    aliases: ['nhóm nốt móc', 'beaming cho trẻ'],
    summary: 'Ba nhịp đơn của Grade 1, cách gạch nối nốt móc theo phách để mắt thấy ngay đâu là phách, điền dấu lặng cho đủ ô nhịp và nhịp lấy đà.',
    body: `
Ở nhịp 2/4, 3/4 và 4/4, **mỗi phách là một nốt đen**. Đây là ba **nhịp đơn** của Grade 1: số trên cho biết số phách, số dưới (4) cho biết phách là nốt đen.

## Nhóm nốt theo phách
Nốt móc được nối bằng gạch sao cho **mỗi nhóm bắt đầu ở đầu một phách** — nhìn vào là thấy phách ở đâu.

::ex g1-nhom-moc | Nhịp 4/4: tám móc đơn có thể nối thành hai nhóm bốn nốt (mỗi nhóm nửa ô). Nhịp 3/4: nhóm theo từng phách, hoặc cả ô.

Quy tắc dễ nhớ cho Grade 1:
- Móc đơn thường nối **từng đôi** (một phách) — trong 4/4 có thể nối bốn nốt cho phách 1 – 2 hoặc 3 – 4, **không** nối qua giữa ô (phách 2 sang 3).
- Móc kép nối **từng bốn** (một phách).
- Không nối nốt móc của hai phách khác nhau bằng một gạch nếu điều đó che mất phách.

## Ô nhịp phải đủ phách
Mỗi ô phải có **đúng** số phách số chỉ nhịp yêu cầu. Thiếu thì điền **dấu lặng**; viết dấu lặng theo từng phách, không gộp tuỳ ý.

::ex g1-o-thieu-not | Hai ô còn trống một phách (chỗ để trống): bạn cần thêm nốt hoặc dấu lặng gì? (một nốt đen hoặc một dấu lặng đen)

## Nhịp lấy đà
Một số bài bắt đầu **trước phách mạnh**: ô đầu tiên thiếu phách, gọi là **nhịp lấy đà**. Phần thiếu thường được "trả lại" ở ô cuối.

::ex g1-nhip-lay-da | Bài 3/4 bắt đầu bằng một phách lấy đà; ô cuối chỉ còn hai phách.

## Luyện tập
1. Viết số chỉ nhịp cho ô: nốt đen chấm dôi, móc đơn, nốt trắng. (4/4)
2. Nối gạch cho tám móc đơn trong 4/4 theo hai cách đúng.
3. Đếm số phách của ô lấy đà trong một bài bạn đang học.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 1: "nhịp đơn 2/4, 3/4, 4/4, vạch nhịp và cách nhóm các trường độ trên trong các nhịp này". Xem [[so-chi-nhip]], [[nhip-lay-da]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-doc-not-hai-khoa',
    title: 'Đọc nốt ở khoá Sol và khoá Fa',
    category: 'basics',
    unlisted: true,
    aliases: ['tên nốt khoá fa cho trẻ', 'dòng kẻ phụ trẻ em'],
    summary: 'Tên mọi nốt trên khuông ở hai khoá, các dòng kẻ phụ quanh Đô giữa và cách chuyển tay sang vị trí năm ngón mới.',
    body: `
Ở Initial bạn đọc nốt bằng nốt mốc. Grade 1 cần đọc **mọi nốt trên khuông** ở cả hai khoá, cùng **Đô giữa** viết ở khoá nào cũng nhận ra.

## Khoá Sol
::ex g1-not-khoa-sol | Từ Đô giữa (dòng kẻ phụ) lên La cao (dòng kẻ phụ trên): tên chữ cái dưới mỗi nốt.

- **Dòng** (từ dưới lên): Mi – Sol – Si – Rê – Fa (E G B D F).
- **Khe**: Fa – La – Đô – Mi (F A C E).

## Khoá Fa
::ex g1-not-khoa-fa | Từ Mi trầm lên Đô giữa: dòng kẻ phụ trên cùng là Đô giữa.

- **Dòng**: Sol – Si – Rê – Fa – La (G B D F A).
- **Khe**: La – Đô – Mi – Sol (A C E G).

Để ý: cùng một **vị trí** trên khuông nhưng tên nốt ở hai khoá **khác nhau** — dòng 1 khoá Sol là Mi, dòng 1 khoá Fa là Sol. Đừng đọc khoá Fa như khoá Sol!

## Quanh Đô giữa: dòng kẻ phụ
::ex g1-dong-ke-phu | Các nốt ngay quanh Đô giữa có thể viết ở khuông trên hoặc khuông dưới bằng dòng kẻ phụ.

## Vị trí năm ngón mới
Mỗi bài thị tấu Grade 1 có thể nằm ở **bất kỳ vị trí năm ngón nào** (theo đặc tả ABRSM 2027 & 2028). Cách tìm: nhìn **nốt thấp nhất và cao nhất** của tay đó trong bài, đặt ngón 1 và ngón 5 (hoặc ngược lại ở tay trái) lên hai nốt ấy.

## Luyện tập
1. Đọc to tên mọi nốt của một dòng nhạc khoá Fa trong bài bạn đang học.
2. Thẻ nốt: mỗi ngày 10 thẻ, mỗi khoá 5 thẻ, đo thời gian.
3. Viết Đô giữa ở hai khuông, rồi viết Si và Rê kề bên nó ở cả hai khuông.

## Gợi ý cho phụ huynh và giáo viên
Đề cương nhạc lý Grade 1 yêu cầu "tên nốt trên khuông, kể cả Đô giữa ở cả hai khoá"; các dòng kẻ phụ xa hơn đến ở Grade 2. Xem [[khoa-sol]], [[khoa-fa]], [[doc-not-nhanh]].
`,
    refs: [THEORY, PIANO],
  },
  {
    slug: 'tre-em-g1-dau-hoa-cung-nua-cung',
    title: 'Dấu thăng, dấu giáng, dấu bình; cung và nửa cung',
    category: 'pitch',
    unlisted: true,
    aliases: ['dấu hoá cho trẻ', 'nửa cung'],
    summary: 'Ba dấu hoá nâng, hạ, trả nốt về tự nhiên; hiệu lực của dấu hoá trong ô nhịp; nửa cung là hai phím sát nhau, một cung là hai nửa cung.',
    body: `
## Ba dấu hoá
- **Dấu thăng ♯**: nâng nốt lên **nửa cung** — phím sát bên phải.
- **Dấu giáng ♭**: hạ nốt xuống **nửa cung** — phím sát bên trái.
- **Dấu bình ♮**: huỷ dấu thăng hay giáng, trả nốt về **tự nhiên** (phím trắng).

::ex g1-dau-hoa | Fa và Fa♯; Si và Si♭; Fa♯ rồi dấu bình trả về Fa.

Dấu hoá viết **trước** đầu nốt, đúng dòng hoặc khe của nốt; khi đọc tên ta nói sau: "Fa thăng".

## Dấu hoá có hiệu lực bao lâu?
Một dấu hoá **bất thường** (viết trước nốt, không ở hoá biểu) có hiệu lực cho **mọi nốt cùng vị trí trong ô nhịp đó**, đến hết ô. Sang ô sau, nốt trở về như cũ.

::ex g1-hieu-luc-dau-hoa | Ô 1: dấu thăng làm hai nốt Fa đều là Fa♯, đến dấu bình ở ô 2. Ô 3: Fa♯ có dấu riêng, rồi Fa tự nhiên — vì đây là ô mới.

## Cung và nửa cung
**Nửa cung** là khoảng cách giữa hai phím **sát nhau** (không có phím nào ở giữa), dù trắng hay đen. **Một cung** = hai nửa cung.

::ex g1-cung-nua-cung | Giữa các phím trắng, chỉ có Mi – Fa và Si – Đô là nửa cung (không có phím đen ở giữa); các cặp khác cách một cung.

::keyboard E4 F4 B4 C5 | Hai cặp phím trắng sát nhau: Mi – Fa và Si – Đô

## Luyện tập
1. Trên đàn, tìm Fa♯, Si♭, Đô♯, Mi♭. Phím nào là phím đen?
2. Mi♯ là phím nào? (Fa — vì giữa Mi và Fa không có phím đen.)
3. Đánh dấu "C" (cung) hay "N" (nửa cung) cho các cặp: Đô – Rê, Mi – Fa, Sol – La, Si – Đô, Fa – Fa♯.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 1 có dấu thăng, giáng, bình và cách huỷ chúng; dấu thăng kép, giáng kép đến ở Grade 4. Xem [[dau-hoa]], [[cung-nua-cung]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-am-giai-truong',
    title: 'Âm giai trưởng và hoá biểu: Đô, Sol, Rê, Fa',
    category: 'scales',
    unlisted: true,
    aliases: ['âm giai trưởng cho trẻ', 'hoá biểu Sol trưởng'],
    summary: 'Công thức cung – cung – nửa – cung – cung – cung – nửa của âm giai trưởng, bốn giọng Đô, Sol, Rê, Fa trưởng và hoá biểu của chúng ở hai khoá.',
    body: `
## Công thức của âm giai trưởng
Chơi tám phím trắng từ Đô đến Đô: bạn nghe một **âm giai trưởng**. Bí mật nằm ở khoảng cách giữa các nốt:

**cung – cung – nửa cung – cung – cung – cung – nửa cung**

::ex g1-cau-truc-truong | Đô trưởng: nửa cung nằm giữa bậc 3 – 4 (Mi – Fa) và bậc 7 – 8 (Si – Đô).

Bắt đầu từ nốt khác mà vẫn giữ đúng công thức, ta phải dùng **phím đen**.

## Sol trưởng — một dấu thăng
Từ Sol, đi theo công thức: bậc 7 phải là **Fa♯** để cách bậc 8 (Sol) nửa cung.
::ex g1-am-giai-sol-truong | Sol trưởng: Sol La Si Đô Rê Mi Fa♯ Sol.

## Rê trưởng — hai dấu thăng
::ex g1-am-giai-re-truong | Rê trưởng: Fa♯ và Đô♯.

## Fa trưởng — một dấu giáng
Từ Fa, bậc 4 phải cách bậc 3 (La) nửa cung: đó là **Si♭**.
::ex g1-am-giai-fa-truong | Fa trưởng: Fa Sol La Si♭ Đô Rê Mi Fa.

## Hoá biểu
Thay vì viết dấu hoá trước mỗi nốt, ta ghi chúng **một lần** ở đầu mỗi dòng nhạc, ngay sau khoá: đó là **hoá biểu**. Mọi nốt cùng tên trong bài đều theo hoá biểu, ở mọi quãng tám.

::ex g1-hoa-bieu | Hoá biểu Đô trưởng (không dấu), Sol trưởng (Fa♯), Rê trưởng (Fa♯, Đô♯), Fa trưởng (Si♭) — ở khoá Sol và khoá Fa.

| Giọng | Hoá biểu |
|---|---|
| Đô trưởng | không có dấu |
| Sol trưởng | 1 thăng: Fa♯ |
| Rê trưởng | 2 thăng: Fa♯, Đô♯ |
| Fa trưởng | 1 giáng: Si♭ |

## Luyện tập
1. Viết âm giai Rê trưởng đi lên ở khoá Fa, có hoá biểu; đánh dấu các nửa cung bằng dấu móc.
2. Một bài có hoá biểu một dấu giáng: nốt Si trong bài là phím nào?
3. Chơi bốn âm giai, nói tên từng nốt khi chơi.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 1: cấu tạo âm giai trưởng (vị trí cung và nửa cung), âm giai và hoá biểu Đô, Sol, Rê, Fa trưởng ở hai khoá. Xem [[am-giai-truong]], [[hoa-bieu]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-bac-quang-va-hop-am-chu',
    title: 'Bậc, quãng trên âm chủ và hợp âm chủ',
    category: 'harmony',
    unlisted: true,
    aliases: ['quãng theo số cho trẻ', 'hợp âm chủ cho trẻ'],
    summary: 'Đánh số bậc của âm giai, gọi tên quãng bằng số (quãng 2 đến quãng 8) tính từ âm chủ, và hợp âm chủ ở thế gốc của bốn giọng Grade 1.',
    body: `
## Bậc của âm giai
Các nốt của âm giai được **đánh số** từ 1 (âm chủ) đến 8 (âm chủ cao hơn một quãng tám). Số ấy là **bậc**.

::ex g1-bac | Sol trưởng: Sol là bậc 1, Rê là bậc 5, Fa♯ là bậc 7.

## Quãng: đếm cả hai đầu
**Quãng** là khoảng cách giữa hai nốt. Ở Grade 1, ta gọi quãng **bằng số**, tính từ **âm chủ** lên: đếm tên nốt **kể cả nốt đầu và nốt cuối**.

::ex g1-quang-tren-chu | Các quãng trên âm chủ Đô: Đô – Rê là quãng 2, Đô – Mi quãng 3 … Đô – Đô quãng 8 (quãng tám).

Ví dụ: từ Đô lên Sol: Đô (1) – Rê (2) – Mi (3) – Fa (4) – Sol (5) → **quãng 5**.

Hai nốt vang **cùng lúc** là quãng **hoà âm**; nối tiếp nhau là quãng **giai điệu**.

::ex g1-quang-giai-dieu | Fa trưởng: tìm quãng giữa âm chủ Fa và từng nốt khác (Fa – La: 3, Fa – Đô: 5, Fa – Rê: 6).

## Hợp âm chủ
Chồng bậc **1 – 3 – 5** lên nhau ta có **hợp âm chủ** ở thế gốc — ba nốt nằm trên ba dòng liền nhau hoặc ba khe liền nhau.

::ex g1-hop-am-chu | Hợp âm chủ của Đô, Sol, Rê, Fa trưởng (khoá Sol).

::ex g1-hop-am-chu-fa | Cùng bốn hợp âm ở khoá Fa.

## Luyện tập
1. Trong Rê trưởng, bậc 4 là nốt gì? (Sol) Bậc 7? (Đô♯)
2. Gọi tên quãng (bằng số) từ Fa lên Si♭, từ Sol lên Mi, từ Rê lên Rê cao.
3. Viết hợp âm chủ Sol trưởng ở khoá Fa; chơi nó bằng tay trái ngón 5 – 3 – 1.

## Gợi ý cho phụ huynh và giáo viên
Grade 1 chỉ hỏi bậc bằng số và quãng trên âm chủ bằng số; tính chất quãng (trưởng, thứ, đúng) đến ở Grade 3. Xem [[quang]], [[hop-am-ba]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-thuat-ngu-va-ky-hieu',
    title: 'Thuật ngữ và ký hiệu thường gặp',
    category: 'expression',
    unlisted: true,
    aliases: ['thuật ngữ tiếng Ý cho trẻ', 'allegro andante'],
    summary: 'Các từ tiếng Ý về tốc độ, cường độ, cách chơi và các ký hiệu nhắc lại, dấu ngân — vốn từ của nhạc lý ABRSM Grade 1.',
    body: `
Nhạc sĩ thường dùng **tiếng Ý** để ghi tốc độ, cường độ và cách chơi. Bảng dưới đây là những từ hay gặp nhất ở cấp này.

## Tốc độ
| Thuật ngữ | Nghĩa |
|---|---|
| Lento, Adagio | chậm |
| Andante | đi thong thả, vừa chậm |
| Moderato | vừa phải |
| Allegretto | khá nhanh (chậm hơn Allegro) |
| Allegro | nhanh, vui |
| rallentando (rall.), ritardando (rit.) | chậm dần |
| a tempo | trở lại tốc độ ban đầu |

## Cường độ
| Ký hiệu | Nghĩa |
|---|---|
| **pp** – **p** – **mp** | rất nhỏ – nhỏ – hơi nhỏ |
| **mf** – **f** – **ff** | hơi to – to – rất to |
| crescendo (cresc.), dấu mở **<** | to dần |
| diminuendo (dim.), decrescendo, dấu khép **>** | nhỏ dần |

::ex g1-thuat-ngu | Allegretto; to dần từ p lên f, nhỏ dần về p; dấu ngân (fermata) ở cuối: giữ lâu hơn bình thường.

## Cách chơi
::ex g1-staccato-accent | Dấu chấm (staccato) – nảy tiếng; dấu > (accent) – nhấn; gạch ngang (tenuto) – giữ đủ, hơi nhấn; dấu ^ – nhấn mạnh hơn nữa.

- **legato**: liền tiếng · **staccato**: nảy tiếng
- **cantabile**: như hát · **dolce**: ngọt ngào
- **con moto**: có chuyển động · **poco**: một chút · **molto**: rất

## Nhắc lại
::ex g1-dau-nhac-lai | Dấu nhắc lại: chơi đoạn giữa hai dấu hai lần.

- **D.C.** (*da capo*): trở lại từ đầu · **Fine**: hết (khi nhắc lại, dừng ở đây).

## Luyện tập
1. Tìm mọi thuật ngữ tiếng Ý trong ba bài bạn đang học và viết nghĩa.
2. Xếp theo thứ tự từ chậm đến nhanh: Allegro, Lento, Moderato, Andante.
3. Chơi một câu nhạc theo ba cách: legato *p*, staccato *f*, rồi cresc. từ *p* đến *f*.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 1 nói "một số thuật ngữ và ký hiệu thường dùng về tốc độ, cường độ, chỉ dẫn biểu diễn và dấu cách chơi"; danh sách chính xác không được công bố trong đề cương — bảng trên là lựa chọn của người biên soạn. Xem [[cuong-do]], [[nhip-do]], [[cach-dien-tau]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g1-am-giai-va-ky-thuat',
    title: 'Âm giai thứ, hai tay cùng lúc và các bài kỹ thuật Grade 1',
    category: 'technique',
    unlisted: true,
    aliases: ['âm giai La thứ cho trẻ', 'kỹ thuật Grade 1'],
    summary: 'Âm giai Đô trưởng hai tay cùng chiều; Sol, Fa trưởng, La, Rê thứ hai quãng tám từng tay; ba dạng âm giai thứ; ngược chiều và hợp âm rải — đúng yêu cầu ABRSM Grade 1 (2027 & 2028).',
    body: `
## Yêu cầu của kỳ thi
Theo đặc tả ABRSM 2027 & 2028, âm giai và hợp âm rải chơi **thuộc lòng, liền tiếng và đều**:

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai cùng chiều | Đô trưởng | 1 quãng tám | **hai tay cùng lúc** |
| Âm giai cùng chiều | Sol, Fa trưởng; La, Rê thứ (tự nhiên, hoà âm hoặc giai điệu) | 2 quãng tám | từng tay |
| Âm giai ngược chiều | Đô trưởng | 1 quãng tám | hai tay từ âm chủ (đồng âm) |
| Hợp âm rải | Sol trưởng, La thứ | 1 quãng tám | từng tay |

## Hai tay cùng lúc
Đô trưởng hai tay là bài đầu tiên hai tay khác ngón nhau: tay phải luồn ngón cái ở Fa, tay trái vắt ngón 3 ở La khi đi lên.

::ex g1-am-giai-do-hai-tay | Đô trưởng hai tay, một quãng tám, có số ngón. Tập từng nửa: bốn nốt đầu, rồi bốn nốt sau.

Mẹo: hai ngón cái không bao giờ chơi cùng lúc khi đi lên (tay phải ngón 1 ở Fa, tay trái ngón 1 ở Sol) — hãy nghe chỗ "đổi ngón" của từng tay.

## Ba dạng âm giai thứ
Âm giai **La thứ** là "người họ hàng" của Đô trưởng (cùng không dấu hoá). Có ba dạng:
- **Tự nhiên**: chỉ phím trắng từ La đến La.
- **Hoà âm**: nâng bậc 7 (Sol♯) cả khi lên và xuống.
- **Giai điệu**: đi lên nâng bậc 6 và 7 (Fa♯, Sol♯), đi xuống trở về tự nhiên.

::ex g1-am-giai-la-thu | La thứ hoà âm (lên và xuống), rồi La thứ giai điệu.

Kỳ thi cho bạn **chọn** một trong ba dạng. Ở Grade 2, nhạc lý sẽ học kỹ hơn.

::ex g1-am-giai-re-thu-hai-qd | Rê thứ tự nhiên, hai quãng tám, tay phải. Ngón 4 rơi vào Đô (bậc 7) một lần mỗi quãng tám.

## Ngược chiều và hợp âm rải
::ex g1-nguoc-chieu-do | Đô trưởng ngược chiều một quãng tám: hai ngón cái bắt đầu cùng ở Đô giữa.

::ex g1-rai-sol-la | Hợp âm rải Sol trưởng và La thứ một quãng tám, từng tay.

## Cách tập
1. Chậm, đều, nghe rõ từng nốt; dùng máy đếm nhịp (trang Bảng tính của app có).
2. Mỗi ngày một giọng mới + ôn hai giọng cũ.
3. Nhắm mắt chơi để tay tự nhớ đường đi.

## Gợi ý cho phụ huynh và giáo viên
Xem [[am-giai-thu]] và [[ngon-bam]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g1-thi-tau-va-nghe',
    title: 'Thị tấu và luyện tai Grade 1',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu grade 1', 'bài nghe grade 1'],
    summary: 'Thông số bài thị tấu Grade 1 (đến 6 ô nhịp, 2/4 – 3/4, giọng Sol, Fa trưởng, La thứ…), hai bài đọc mẫu và bốn bài nghe của kỳ thi kèm trò chơi tập ở nhà.',
    body: `
## Bài thị tấu Grade 1
Theo đặc tả ABRSM 2027 & 2028, so với Initial bài đọc Grade 1 có thể:
- dài đến **6 ô nhịp**, nhịp **2/4** hoặc **3/4** (ngoài 4/4);
- ở giọng **Sol, Fa trưởng** và **La thứ** (ngoài Đô trưởng, Rê thứ), thỉnh thoảng có dấu hoá bất thường (chỉ trong giọng thứ);
- ở **bất kỳ vị trí năm ngón nào**;
- có nốt trắng chấm dôi, nốt móc đơn, dấu lặng, dấu luyến, dấu nhấn, **mf**, **mp**, to dần – nhỏ dần.

Nhớ năm câu hỏi chuẩn bị ở cuốn Initial: nhịp – vị trí tay – nốt đầu – hướng đi – ký hiệu. Ở Grade 1 thêm câu thứ sáu: **hoá biểu**?

::ex g1-thi-tau-1 | Bài đọc 1: Sol trưởng, 3/4. Tay phải ngón 1 đặt ở đâu?

::ex g1-thi-tau-2 | Bài đọc 2: Fa trưởng, 2/4. Đừng quên Si♭!

## Bốn bài nghe
Theo đặc tả ABRSM 2027 & 2028:
- **A.** Vỗ theo phách, **vỗ mạnh ở phách mạnh**, rồi nói bản nhạc đi **nhịp hai hay nhịp ba**.
- **B.** Hát lại như tiếng vọng **ba câu**, mỗi câu hai ô, giọng trưởng, trong khoảng **âm chủ – bậc ba**.
- **C.** Nghe một câu hai ô chơi hai lần; lần hai **đổi một nốt**. Nói chỗ đổi **gần đầu hay gần cuối**.
- **D.** Trả lời về hai đặc điểm: **cường độ** (to/nhỏ, đổi đột ngột hay dần dần) và **cách chơi** (liền/tách tiếng).

::ex g1-nghe-thay-doi | Trò "thám tử": lần hai, nốt nào đã đổi? (nốt thứ hai của ô 2: Mi thành Fa — gần cuối)

## Tập ở nhà
1. Bật nhạc bất kỳ, vỗ phách và tìm phách mạnh; đoán nhịp hai hay ba.
2. Người lớn hát câu Đô – Rê – Mi, bạn hát lại ngay.
3. Chơi trò thám tử với các câu trong sách.

## Gợi ý cho phụ huynh và giáo viên
Xem [[thi-tau]] và [[luyen-tai]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g1-doc-hieu-giai-dieu',
    title: 'Đọc hiểu một giai điệu',
    category: 'form',
    unlisted: true,
    aliases: ['music in context grade 1', 'phân tích giai điệu cho trẻ'],
    summary: 'Tổng hợp cả cuốn qua một giai điệu: nhịp, giọng, ô nhịp, nốt cao nhất, quãng, thuật ngữ, câu nhạc — dạng câu hỏi "âm nhạc trong ngữ cảnh" của đề thi nhạc lý Grade 1.',
    body: `
Đề thi nhạc lý ABRSM Grade 1 kết thúc bằng một số **câu hỏi đơn giản về một giai điệu** (khoá Sol hoặc khoá Fa). Đây là lúc bạn dùng mọi điều đã học.

::ex g1-giai-dieu-phan-tich | Một giai điệu 8 ô nhịp ở Sol trưởng.

## Thử trả lời
1. Số chỉ nhịp là gì? Mỗi ô có mấy phách? *(3/4 — ba phách đen)*
2. Bài ở giọng nào? Vì sao? *(Sol trưởng — hoá biểu Fa♯, bắt đầu và kết thúc ở Sol)*
3. *Andante* nghĩa là gì? *(đi thong thả)*
4. Nốt cao nhất là nốt gì, ở ô nào? *(Mi, ô 6)*
5. Có bao nhiêu nốt trắng chấm dôi? *(hai — ô 4 và ô 8)*
6. Quãng giữa hai nốt đầu tiên (Rê – Si)? *(quãng 3, đi xuống)*
7. Dấu ở ô 5 nghĩa là gì? *(to dần)*; dấu chấm ở ô 7? *(staccato — nảy tiếng)*
8. Bài có mấy câu nhạc? *(hai câu, mỗi câu bốn ô; vạch kép chia đôi)*

## Câu nhạc
Giai điệu thường chia thành **câu**, như câu văn có dấu chấm. Câu thứ nhất đi xuống và dừng ở Sol; câu thứ hai leo lên nốt cao nhất (Mi) rồi trở về Sol — giống hai câu của một đoạn văn: câu sau nói tiếp và khép lại. Khi chơi, hãy **thở** giữa hai câu: nhấc tay nhẹ, như lấy hơi khi hát.

## Luyện tập
Chọn một bài ở phần Tác phẩm của sách và tự đặt tám câu hỏi như trên rồi trả lời.

## Gợi ý cho phụ huynh và giáo viên
Đề thi nhạc lý Grade 1 làm trực tuyến, gồm các câu trắc nghiệm theo đề cương. Xem [[cau-nhac]].
`,
    refs: [THEORY],
  },
]

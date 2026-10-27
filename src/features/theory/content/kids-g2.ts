import type { Article } from '../wiki'

/**
 * Piano & Nhạc lý cho Trẻ em — Grade 2: theory following ABRSM's Music Theory syllabus for Grade 2
 * (outline from 2020) and the piano requirements of the Practical Grades 2027 & 2028 specification.
 * Examples: music/ex/g2.txt.
 */
const THEORY: [string, string] = ['ABRSM — The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf']
const PIANO: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsG2: Article[] = [
  {
    slug: 'tre-em-g2-nhip-moi',
    title: 'Nhịp 2/2, 3/2, 4/2 và 3/8',
    category: 'rhythm',
    unlisted: true,
    aliases: ['alla breve cho trẻ', 'nhịp 3/8'],
    summary: 'Khi số dưới của số chỉ nhịp là 2, phách là nốt trắng; khi là 8, phách là nốt móc đơn. Bốn nhịp mới của Grade 2, cách đếm và cách nhóm nốt.',
    body: `
Ở Grade 1, số dưới luôn là 4: phách là **nốt đen**. Grade 2 mở rộng: **số dưới cho biết hình nốt nào là một phách**.

| Số dưới | Phách là | Ví dụ |
|---|---|---|
| 2 | nốt trắng | 2/2, 3/2, 4/2 |
| 4 | nốt đen | 2/4, 3/4, 4/4 |
| 8 | nốt móc đơn | 3/8 |

## Nhịp 2/2 (alla breve)
Mỗi ô có **hai phách nốt trắng**. Ký hiệu **₵** (chữ C có gạch dọc) là cách viết khác của 2/2, gọi là *alla breve*. Nhạc 2/2 nghe "hai nhịp lớn" mỗi ô, nhẹ và trôi hơn 4/4.

::ex g2-nhip-hai-hai | 2/2: nốt trắng là một phách; hai nốt đen chia đôi phách ("1 – và").

## Nhịp 3/2 và 4/2
::ex g2-nhip-tren-hai | 3/2: ba phách nốt trắng (gặp nhiều trong nhạc Baroque, thánh ca). 4/2: bốn phách nốt trắng — một ô 4/2 có thể chứa một **nốt tròn kép** (*breve*), nốt dài bằng hai nốt tròn.

## Nhịp 3/8
Mỗi ô có **ba phách nốt móc đơn**. Nhịp 3/8 thường nhanh, nghe như một vòng xoay nhỏ.

::ex g2-nhip-ba-tam | 3/8: mỗi móc đơn một phách; nốt đen = 2 phách; nốt đen chấm dôi = cả ô.

## Nhóm nốt
- Trong **2/2**, nhóm theo **nửa ô** (mỗi phách nốt trắng): bốn móc đơn một nhóm.
- Trong **3/8**, cả ô thường nối thành **một nhóm** ba móc đơn (hoặc sáu móc kép).

::ex g2-nhom-hai-hai | 2/2: móc đơn nhóm bốn nốt theo phách trắng. 3/8: móc kép và móc đơn nối chung một nhóm cả ô.

## Luyện tập
1. Viết lại một ô 4/4 (nốt trắng, hai nốt đen) sang 2/2: các nốt có đổi không? (không — chỉ cách đếm đổi)
2. Đếm và vỗ ví dụ 3/8 trên, nhấn phách đầu ô.
3. Một ô gồm nốt trắng chấm dôi, nốt đen và nốt trắng: cộng lại 3 + 1 + 2 = 6 phách đen = 3 phách trắng → số chỉ nhịp 3/2.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 2: "nhịp đơn 2/2, 3/2, 4/2, 3/8 và cách nhóm nốt, dấu lặng; liên ba". Xem [[so-chi-nhip]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-lien-ba',
    title: 'Liên ba',
    category: 'rhythm',
    unlisted: true,
    aliases: ['triplet cho trẻ', 'chùm ba'],
    summary: 'Ba nốt chơi trong thời gian của hai, đánh dấu bằng số 3: đọc "tri-o-la", đếm đều trong một phách, và liên ba có dấu lặng.',
    body: `
**Liên ba** là nhóm **ba nốt** chơi trong thời gian bình thường dành cho **hai nốt** cùng hình. Nhóm được đánh dấu bằng số **3** (thường kèm ngoặc hoặc gạch nối).

::ex g2-lien-ba | Hai móc đơn chiếm một phách đen — một liên ba móc đơn cũng chiếm đúng một phách, nhưng chia làm ba. Đọc: "ti-ti" rồi "tri-o-la".

Cách tập: giữ phách đều bằng chân, nói "**tri-o-la**" sao cho ba âm tiết đều nhau và "tri" rơi đúng phách. Đừng biến liên ba thành "móc đơn chấm dôi + móc kép".

## Liên ba trong giai điệu
::ex g2-lien-ba-giai-dieu | Liên ba móc đơn xen nốt đen. Ô cuối: liên ba có một dấu lặng ở giữa — vẫn đếm "tri-(o)-la".

## Liên ba nốt đen
Trong nhịp 2/2 hay 4/4, ba nốt đen có thể chiếm thời gian của hai nốt đen (một nốt trắng): số 3 đặt trên ba nốt đen, thường kèm ngoặc vuông. Bạn gặp nó trong bài *Đò chiều* ở phần Tác phẩm.

## Luyện tập
1. Vỗ xen kẽ: một phách "ti-ti", một phách "tri-o-la", lặp lại đến khi đều.
2. Một liên ba móc đơn bằng bao nhiêu nốt đen? (một)
3. Tìm các liên ba trong bài *Đò chiều* và đếm to khi chơi chậm.

## Gợi ý cho phụ huynh và giáo viên
Liên ba thuộc đề cương nhạc lý Grade 2; các cách chia bất thường khác (liên năm, liên sáu…) đến ở Grade 5. Xem [[lien-ba]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-dong-ke-phu',
    title: 'Hai dòng kẻ phụ trên và dưới mỗi khuông',
    category: 'basics',
    unlisted: true,
    aliases: ['dòng kẻ phụ grade 2'],
    summary: 'Đọc các nốt nằm trên đến hai dòng kẻ phụ phía trên và phía dưới khuông Sol, khuông Fa — mở rộng tầm đọc của bạn thêm gần một quãng tám mỗi phía.',
    body: `
Khi nốt cao hay thấp hơn năm dòng, ta kẻ thêm những đoạn **dòng kẻ phụ** ngắn chỉ dành cho nốt đó. Đề cương Grade 2 yêu cầu đọc đến **hai dòng kẻ phụ** ở trên và dưới mỗi khuông.

## Khoá Sol
::ex g2-ke-phu-sol | Phía trên: La (dòng phụ 1), Si (trên dòng phụ 1), Đô (dòng phụ 2), Rê (trên dòng phụ 2). Phía dưới: Đô giữa (dòng phụ 1), Si, La (dòng phụ 2).

## Khoá Fa
::ex g2-ke-phu-fa | Phía trên: Đô giữa (dòng phụ 1), Rê, Mi (dòng phụ 2). Phía dưới: Mi (dòng phụ 1), Rê, Đô (dòng phụ 2).

## Mẹo đọc
- Đếm dòng phụ **từ khuông ra ngoài**: dòng phụ gần khuông nhất là dòng 1.
- Dùng nốt mốc: **Đô cao** (C6) nằm trên dòng phụ 2 phía trên khoá Sol; **Đô trầm** (C2) trên dòng phụ 2 phía dưới khoá Fa — đúng hai quãng tám cách Đô giữa.

## Luyện tập
1. Viết ba nốt Đô ở ba vị trí: Đô giữa, Đô cao (dòng phụ 2 trên khoá Sol), Đô trầm (dòng phụ 2 dưới khoá Fa); chơi chúng trên đàn.
2. Đọc tên các nốt có dòng kẻ phụ trong bài *Ballad mưa* (tay trái).

## Gợi ý cho phụ huynh và giáo viên
Đọc nốt kẻ phụ chậm là chuyện bình thường; luyện bằng thẻ mỗi ngày vài phút hiệu quả hơn một buổi dài. Xem [[khuong-nhac]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-giong-truong-moi',
    title: 'Giọng La, Si♭ và Mi♭ trưởng',
    category: 'scales',
    unlisted: true,
    aliases: ['hoá biểu ba dấu', 'thứ tự dấu thăng giáng'],
    summary: 'Ba giọng trưởng mới của Grade 2, hoá biểu của chúng và thứ tự cố định của dấu thăng (Fa – Đô – Sol…) và dấu giáng (Si – Mi – La…).',
    body: `
Công thức âm giai trưởng không đổi: **cung – cung – nửa – cung – cung – cung – nửa**. Áp vào ba nốt mới, ta được ba giọng mới.

## La trưởng — ba dấu thăng
::ex g2-am-giai-la-truong | La trưởng: Đô♯, Fa♯, Sol♯.

## Si♭ trưởng — hai dấu giáng
::ex g2-am-giai-si-giang | Si♭ trưởng: Si♭, Mi♭.

## Mi♭ trưởng — ba dấu giáng
::ex g2-am-giai-mi-giang | Mi♭ trưởng: Si♭, Mi♭, La♭.

## Hoá biểu
::ex g2-hoa-bieu-moi | Hoá biểu La, Si♭, Mi♭ trưởng ở hai khoá.

Dấu hoá trong hoá biểu luôn viết theo **thứ tự cố định**:
- Dấu thăng: **Fa – Đô – Sol** – Rê – La – Mi – Si.
- Dấu giáng: **Si – Mi – La** – Rê – Sol – Đô – Fa (ngược lại của thứ tự dấu thăng).

::ex g2-thu-tu-dau | Ba dấu thăng đầu và ba dấu giáng đầu, đúng vị trí trên khuông.

## Mẹo tìm giọng từ hoá biểu
- Hoá biểu thăng: dấu thăng **cuối cùng** là bậc 7; âm chủ cao hơn nó **nửa cung** (Sol♯ → La trưởng).
- Hoá biểu giáng: dấu giáng **áp chót** là âm chủ (Si♭, **Mi♭**, La♭ → Mi♭ trưởng). Riêng một dấu giáng là Fa trưởng.

| Giọng | Hoá biểu |
|---|---|
| La trưởng | 3 thăng: Fa♯, Đô♯, Sol♯ |
| Si♭ trưởng | 2 giáng: Si♭, Mi♭ |
| Mi♭ trưởng | 3 giáng: Si♭, Mi♭, La♭ |

## Luyện tập
1. Viết hoá biểu bảy giọng trưởng đã học (Đô, Sol, Rê, La, Fa, Si♭, Mi♭) ở khoá Fa.
2. Hoá biểu có Si♭ và Mi♭: giọng trưởng nào? Có Fa♯, Đô♯, Sol♯: giọng nào?
3. Viết âm giai Mi♭ trưởng đi xuống, không dùng hoá biểu mà ghi dấu hoá trước từng nốt.

## Gợi ý cho phụ huynh và giáo viên
Xem [[hoa-bieu]] và [[vong-quang-nam]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-am-giai-thu',
    title: 'Giọng thứ song song và âm giai thứ hoà âm',
    category: 'scales',
    unlisted: true,
    aliases: ['giọng song song cho trẻ', 'thứ hoà âm grade 2'],
    summary: 'Mỗi giọng trưởng có một giọng thứ "anh em" chung hoá biểu, bắt đầu từ bậc 6; cấu tạo âm giai thứ hoà âm (nâng bậc 7); ba giọng La, Mi, Rê thứ và hợp âm chủ của chúng.',
    body: `
## Giọng song song
Đô trưởng và **La thứ** dùng **cùng các nốt**, cùng hoá biểu (không dấu). Chúng là **giọng song song** (người Anh gọi là *relative*). Âm chủ của giọng thứ song song nằm ở **bậc 6** của giọng trưởng — tức thấp hơn âm chủ trưởng **ba nửa cung** (một quãng 3 thứ).

::ex g2-song-song | Đô trưởng (Đô → Đô) và La thứ tự nhiên (La → La): cùng bảy nốt, khác điểm bắt đầu.

| Giọng trưởng | Giọng thứ song song | Hoá biểu |
|---|---|---|
| Đô | La thứ | không dấu |
| Sol | Mi thứ | Fa♯ |
| Fa | Rê thứ | Si♭ |

## Âm giai thứ hoà âm
Nhạc lý Grade 2 dùng **thứ hoà âm**: âm giai thứ tự nhiên với **bậc 7 nâng lên nửa cung**. Bậc 7 nâng **không** có trong hoá biểu — luôn ghi bằng **dấu hoá bất thường**.

::ex g2-thu-hoa-am-la | La thứ hoà âm: Sol♯ ở bậc 7. Giữa bậc 6 (Fa) và bậc 7 (Sol♯) là một bước rộng (một cung rưỡi) — màu riêng của âm giai thứ hoà âm.

::ex g2-thu-hoa-am-mi | Mi thứ hoà âm: hoá biểu Fa♯, thêm Rê♯.

::ex g2-thu-hoa-am-re | Rê thứ hoà âm: hoá biểu Si♭, thêm Đô♯.

## Hợp âm chủ của các giọng mới
Hợp âm chủ thứ có bậc 3 **thấp hơn** hợp âm chủ trưởng nửa cung — nghe buồn, tối hơn.

::ex g2-hop-am-chu-moi | Hợp âm chủ La, Si♭, Mi♭ trưởng và La, Mi, Rê thứ.

## Bậc và quãng
Như Grade 1, bậc và quãng trên âm chủ chỉ cần gọi **bằng số** — nay ở cả bảy giọng trưởng và ba giọng thứ.

::ex g2-quang-tren-chu | Mi♭ trưởng: quãng 3, 5, 6, 7, 8 trên âm chủ.

## Luyện tập
1. Giọng thứ song song của Sol trưởng là gì? Của Fa trưởng?
2. Viết âm giai Mi thứ hoà âm đi lên ở khoá Fa, có hoá biểu.
3. Nghe người lớn chơi hợp âm chủ trưởng và thứ, đoán "vui" hay "buồn".

## Gợi ý cho phụ huynh và giáo viên
Thứ giai điệu chỉ vào nhạc lý ở Grade 3, nhưng kỳ thi piano từ Grade 1 đã cho chọn một trong ba dạng âm giai thứ. Xem [[am-giai-thu]], [[giong-song-song]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-thuat-ngu',
    title: 'Thêm thuật ngữ và ký hiệu',
    category: 'expression',
    unlisted: true,
    aliases: ['thuật ngữ grade 2'],
    summary: 'Các từ bổ nghĩa (più, meno, poco a poco, sempre), tính chất (cantabile, grazioso, leggiero, maestoso), tốc độ thay đổi và ký hiệu D.S., coda, prima/seconda volta.',
    body: `
Grade 2 bổ sung các từ **ghép** với thuật ngữ đã biết để nói chính xác hơn.

## Từ bổ nghĩa
| Từ | Nghĩa | Ví dụ |
|---|---|---|
| più | hơn | *più mosso* — nhanh hơn |
| meno | ít hơn | *meno mosso* — chậm hơn |
| poco a poco | dần dần từng chút | *cresc. poco a poco* |
| sempre | luôn luôn | *sempre legato* |
| subito | đột ngột | *subito p* |
| non troppo | không quá | *Allegro non troppo* |

## Tính chất
| Từ | Nghĩa |
|---|---|
| cantabile | như hát |
| grazioso | duyên dáng |
| leggiero | nhẹ nhàng |
| maestoso | trang nghiêm, uy nghi |
| tranquillo | yên tĩnh |
| vivace | sống động, nhanh |

::ex g2-thuat-ngu | *Andante cantabile* — thong thả, như hát; dấu ngân; *più mosso* — nhanh hơn.

## Đi tìm đường trong bản nhạc
- **Prima volta / seconda volta** (ngoặc 1 và 2): lần đầu chơi ngoặc 1 rồi nhắc lại; lần hai bỏ ngoặc 1, chơi ngoặc 2.
- **D.S.** (*dal segno*): trở về ký hiệu 𝄋.
- **Coda** (𝄌): đoạn kết; "al Coda" — nhảy tới đoạn kết.

## Luyện tập
1. Dịch: *Allegro non troppo*, *sempre staccato*, *meno mosso*, *cresc. poco a poco*.
2. Chọn một bài ở phần Tác phẩm, đặt cho nó một thuật ngữ tính chất phù hợp và giải thích vì sao.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 2 chỉ ghi "thêm thuật ngữ và ký hiệu thông dụng"; danh sách trên là lựa chọn của người biên soạn. Xem [[thuat-ngu]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g2-ky-thuat',
    title: 'Âm giai hai quãng tám hai tay, âm giai cromatic và hợp âm rải Grade 2',
    category: 'technique',
    unlisted: true,
    aliases: ['kỹ thuật grade 2', 'âm giai cromatic cho trẻ'],
    summary: 'Yêu cầu ABRSM Grade 2 (2027 & 2028): Sol, Fa trưởng, La, Rê thứ hai tay; Rê, La trưởng, Mi, Sol thứ từng tay; Đô trưởng ngược chiều hai quãng tám; cromatic từ Rê; hợp âm rải hai quãng tám.',
    body: `
## Yêu cầu của kỳ thi
Theo đặc tả ABRSM 2027 & 2028 (thuộc lòng, liền tiếng, đều):

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai cùng chiều | Sol, Fa trưởng; La, Rê thứ (tự nhiên, hoà âm hoặc giai điệu) | 2 quãng tám | **hai tay cùng lúc** |
| Âm giai cùng chiều | Rê, La trưởng; Mi, Sol thứ (ba dạng, tuỳ chọn) | 2 quãng tám | từng tay |
| Âm giai ngược chiều | Đô trưởng | 2 quãng tám | hai tay từ âm chủ |
| Âm giai cromatic | bắt đầu từ Rê | 1 quãng tám | từng tay |
| Hợp âm rải | Rê, La trưởng; Mi, Sol thứ | 2 quãng tám | từng tay |

## Hai quãng tám, hai tay
::ex g2-am-giai-hai-tay | Sol trưởng hai tay, đi lên hai quãng tám (đi xuống theo ngón ngược lại). Hai tay đổi ngón ở những chỗ khác nhau — tập từng quãng tám trước.

## Âm giai cromatic
**Âm giai cromatic** đi qua **mọi phím**, trắng và đen, mỗi bước nửa cung. Ngón tay phải theo quy tắc: **ngón 3 cho phím đen**, ngón 1 cho phím trắng, riêng hai cặp phím trắng sát nhau (Mi – Fa, Si – Đô) dùng ngón 1 – 2.

::ex g2-cromatic-re | Cromatic từ Rê, tay phải, một quãng tám đi lên.

## Ngược chiều hai quãng tám
::ex g2-nguoc-chieu-hai-qd | Đô trưởng ngược chiều hai quãng tám: hai ngón cái bắt đầu cùng ở Đô giữa và lại cùng rơi vào hai nốt Đô cách đó một quãng tám.

## Hợp âm rải hai quãng tám
Ngón cái phải **luồn** dưới bàn tay để nối hai quãng tám; cổ tay di chuyển ngang, đều, không nhấc lên.

::ex g2-rai-re-truong | Hợp âm rải Rê trưởng tay phải, hai quãng tám: 1 – 2 – 3 – 1 – 2 – 3 – 5.

## Gợi ý cho phụ huynh và giáo viên
Tập cromatic chậm với mắt nhìn ngón 3 trên phím đen. Xem [[am-giai-cromatic]], [[luyen-hop-am-rai]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g2-thi-tau-va-nghe',
    title: 'Thị tấu và luyện tai Grade 2',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu grade 2'],
    summary: 'Bài thị tấu Grade 2 có hai tay cùng lúc, giọng Rê trưởng, Mi và Sol thứ, nốt tròn, nhóm nốt đen chấm dôi – móc đơn, dấu nối; bốn bài nghe thêm câu hỏi về tốc độ.',
    body: `
## Bài thị tấu Grade 2
Theo đặc tả ABRSM 2027 & 2028, ngoài mọi yếu tố của Grade 1, bài đọc Grade 2 có thể có:
- **hai tay chơi cùng lúc**;
- giọng **Rê trưởng**, **Mi thứ**, **Sol thứ**;
- **nốt tròn**, nhóm **nốt đen chấm dôi – móc đơn**, **dấu nối**, cường độ **pp**.

::ex g2-thi-tau-1 | Bài đọc 1: Rê trưởng, hai tay. Tay trái chỉ đổi nốt mỗi ô — nhìn trước!

::ex g2-thi-tau-2 | Bài đọc 2: Mi thứ, 3/4. Rê♯ ở tay trái là bậc 7 nâng của Mi thứ hoà âm.

Khi hai tay cùng chơi, **đọc theo chiều dọc**: ở mỗi phách, nhìn nốt của cả hai khuông như một "hợp âm".

## Bốn bài nghe Grade 2
- **A.** Vỗ phách, nhấn phách mạnh, nói nhịp hai hay ba.
- **B.** Hát lại ba câu hai ô, giọng trưởng, trong khoảng **âm chủ – âm át** (Đô đến Sol).
- **C.** Nghe một câu hai ô chơi hai lần; nhận ra **cao độ hoặc tiết tấu** đã đổi và **mô tả** (hoặc hát, vỗ lại).
- **D.** Trả lời về hai đặc điểm: một trong cường độ / cách chơi, và **tốc độ** (chậm dần, nhanh dần hay giữ nguyên).

## Tập ở nhà
1. Người lớn chơi một câu rồi chơi lại với một chỗ đổi tiết tấu; bạn vỗ lại phiên bản thứ hai.
2. Nghe một bản nhạc và nói: tốc độ có đổi không?

## Gợi ý cho phụ huynh và giáo viên
Xem [[thi-tau]], [[luyen-tai]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g2-doc-hieu',
    title: 'Đọc hiểu một giai điệu khoá Fa',
    category: 'form',
    unlisted: true,
    aliases: ['music in context grade 2'],
    summary: 'Áp dụng mọi kiến thức Grade 2 vào một giai điệu khoá Fa nhịp 2/2: giọng, nhịp, liên ba, quãng, thuật ngữ.',
    body: `
::ex g2-doc-hieu | Một giai điệu khoá Fa, nhịp 2/2.

## Thử trả lời
1. Giọng của bài? *(Si♭ trưởng — hoá biểu hai dấu giáng, kết ở Si♭)*
2. Số chỉ nhịp nghĩa là gì? *(hai phách nốt trắng mỗi ô)*
3. Ở ô 5, số 3 trên ba nốt đen nghĩa là gì? *(liên ba: ba nốt đen trong thời gian một nốt trắng)*
4. Nốt đầu tiên là nốt gì? *(Si♭)* Quãng giữa nó và nốt thứ hai? *(quãng 3)*
5. Nốt thấp nhất của bài? *(Si♭ đầu và cuối bài)*
6. *Moderato* nghĩa là gì? *(vừa phải)*
7. Bài có hợp âm chủ rải ra ở đâu? *(ô 1: Si♭ – Rê – Fa)*

## Luyện tập
Chọn bản *Minuet in G minor* ở phần Tác phẩm: nói giọng, số chỉ nhịp, tìm các bậc 7 nâng (Fa♯) và nốt cao nhất.

## Gợi ý cho phụ huynh và giáo viên
Đề thi nhạc lý ABRSM luôn kết thúc bằng câu hỏi về một đoạn nhạc thật — hãy tập "đọc hiểu" chính các bài trẻ đang chơi.
`,
    refs: [THEORY],
  },
]

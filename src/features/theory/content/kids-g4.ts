import type { Article } from '../wiki'

/**
 * Piano & Nhạc lý cho Trẻ em — Grade 4: theory following ABRSM's Music Theory syllabus for Grade 4
 * (outline from 2020) and the piano requirements of the Practical Grades 2027 & 2028 specification.
 * Examples: music/ex/g4.txt.
 */
const THEORY: [string, string] = ['ABRSM — The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf']
const PIANO: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsG4: Article[] = [
  {
    slug: 'tre-em-g4-moi-so-chi-nhip',
    title: 'Mọi số chỉ nhịp đơn và kép',
    category: 'rhythm',
    unlisted: true,
    aliases: ['phân loại nhịp cho trẻ', 'nhịp đôi ba bốn'],
    summary: 'Gọi tên mọi số chỉ nhịp theo hai câu hỏi: đơn hay kép (phách chia đôi hay chia ba), và đôi, ba hay bốn (mấy phách mỗi ô) — kể cả 6/4, 9/16, 2/8.',
    body: `
Grade 4 yêu cầu nhận ra **mọi** nhịp đơn và kép có hai, ba hoặc bốn phách. Mỗi số chỉ nhịp trả lời hai câu hỏi.

## Câu 1: đơn hay kép?
- **Nhịp đơn**: phách là một nốt **không chấm** — chia đôi. Số trên là **2, 3 hoặc 4**.
- **Nhịp kép**: phách là một nốt **chấm dôi** — chia ba. Số trên là **6, 9 hoặc 12**.

## Câu 2: đôi, ba hay bốn?
- Nhịp đơn: số trên **chính là** số phách.
- Nhịp kép: số trên **chia 3**.

| | Đôi (2 phách) | Ba (3 phách) | Bốn (4 phách) |
|---|---|---|---|
| Đơn, phách nốt trắng | 2/2 | 3/2 | 4/2 |
| Đơn, phách nốt đen | 2/4 | 3/4 | 4/4 |
| Đơn, phách móc đơn | 2/8 | 3/8 | 4/8 |
| Kép, phách trắng chấm dôi | 6/4 | 9/4 | 12/4 |
| Kép, phách đen chấm dôi | 6/8 | 9/8 | 12/8 |
| Kép, phách móc đơn chấm dôi | 6/16 | 9/16 | 12/16 |

::ex g4-bang-nhip | 6/4 (kép đôi, phách nốt trắng chấm dôi); 9/16 (kép ba, phách móc đơn chấm dôi); 2/8 (đơn đôi).

Đề thi thường cho một ô nhạc và hỏi: "đây là nhịp đơn hay kép, đôi, ba hay bốn?" — hoặc yêu cầu thêm số chỉ nhịp.

## Luyện tập
1. Phân loại: 3/2, 12/16, 4/8, 9/4, 2/2.
2. Viết một ô 6/4 và một ô 3/2 có cùng sáu nốt đen; nối gạch/nhóm cho thấy sự khác nhau.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 4: "mọi số chỉ nhịp đơn và kép đôi, ba, bốn và cách nhóm nốt, dấu lặng". Xem [[so-chi-nhip]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-not-tron-kep-cham-doi-kep-lien-hai',
    title: 'Nốt tròn kép, chấm dôi kép và liên hai',
    category: 'rhythm',
    unlisted: true,
    aliases: ['breve', 'double dotted', 'duplet'],
    summary: 'Nốt tròn kép dài bằng hai nốt tròn; dấu chấm thứ hai thêm một phần tư giá trị; liên hai đặt hai nốt vào thời gian của ba trong nhịp kép.',
    body: `
## Nốt tròn kép
**Nốt tròn kép** (*breve*) dài bằng **hai nốt tròn**; dấu lặng tròn kép là một khối chữ nhật lấp đầy khe 3 của khuông. Thường gặp trong nhịp 4/2.

::ex g4-not-tron-kep | Nốt tròn kép và dấu lặng tròn kép trong nhịp 4/2.

## Chấm dôi kép
Dấu chấm thứ nhất thêm **một nửa**, dấu chấm thứ hai thêm **một nửa của phần vừa thêm** (tức một phần tư giá trị gốc).

| Nốt | Giá trị (phách đen) |
|---|---|
| nốt trắng chấm dôi kép | 2 + 1 + ½ = 3½ |
| nốt đen chấm dôi kép | 1 + ½ + ¼ = 1¾ |

::ex g4-cham-doi-kep | Nốt trắng chấm dôi kép + móc đơn = 4 phách; nốt đen chấm dôi kép + móc kép = 2 phách.

## Liên hai
Ngược với liên ba: trong **nhịp kép**, một phách chấm dôi bình thường chứa ba móc đơn; **liên hai** đặt **hai** nốt đều nhau vào đúng phách ấy, đánh dấu bằng số **2**.

::ex g4-lien-hai | Nhịp 6/8: phách thứ hai của ô 1 và ô 2 là liên hai — hai móc đơn chia đều phách chấm dôi.

## Luyện tập
1. Một nốt tròn kép bằng bao nhiêu nốt móc đơn? (16)
2. Viết một ô 3/4 bắt đầu bằng nốt trắng chấm dôi kép.
3. Vỗ ví dụ liên hai: đếm "1 – và – a, 2 – và" (hai nốt đều trong phách 2).

## Gợi ý cho phụ huynh và giáo viên
Xem [[truong-do]], [[lien-ba]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-khoa-alto',
    title: 'Khoá Đô dòng 3 (khoá alto)',
    category: 'basics',
    unlisted: true,
    aliases: ['khoá alto cho trẻ', 'khoá viola'],
    summary: 'Khoá Đô đặt Đô giữa trên dòng 3 — khoá của đàn viola. Đọc nốt, cùng một cao độ ở ba khoá, chép một giai điệu sang khoá alto.',
    body: `
Ngoài khoá Sol và khoá Fa còn **khoá Đô**: tâm của khoá chỉ vào dòng nào thì dòng đó là **Đô giữa**. Khi tâm nằm ở **dòng 3**, ta có **khoá alto** — khoá chính của **đàn viola**.

::ex g4-khoa-alto | Khoá alto: dòng (Fa, La, Đô giữa, Mi, Sol) và khe (Sol, Si, Rê, Fa).

## Cùng một nốt ở ba khoá
::ex g4-ba-khoa | Đô giữa ở khoá Sol (dòng phụ dưới), khoá alto (dòng 3), khoá Fa (dòng phụ trên).

Khoá alto nằm "giữa" hai khoá kia: các nốt quanh Đô giữa nằm gọn trong khuông, không cần dòng kẻ phụ.

## Chép sang khoá alto
Đề Grade 4 có thể yêu cầu chép một giai điệu từ khoá Sol hay khoá Fa sang khoá alto **ở cùng cao độ**.

::ex g4-chep-sang-alto | Giai điệu khoá Sol (trên) chép sang khoá alto (dưới) ở cùng cao độ: vị trí trên khuông đổi, tên nốt giữ nguyên.

Mẹo: tìm vị trí **Đô giữa** ở hai khoá rồi đếm từng nốt lên xuống từ đó.

## Luyện tập
1. Đọc tên các nốt ở dòng và khe khoá alto ba lần mỗi ngày.
2. Chép câu đầu *Minuet Sol trưởng* (Grade 2) sang khoá alto.

## Gợi ý cho phụ huynh và giáo viên
Khoá Đô dòng 4 (tenor) đến ở Grade 5. Xem [[khoa-do]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-thang-kep-trung-am',
    title: 'Dấu thăng kép, giáng kép và nốt trùng âm',
    category: 'pitch',
    unlisted: true,
    aliases: ['thăng kép cho trẻ', 'enharmonic cho trẻ'],
    summary: 'Dấu thăng kép (𝄪) nâng một cung, dấu giáng kép (𝄫) hạ một cung; nốt trùng âm là hai tên gọi khác nhau của cùng một phím.',
    body: `
## Thăng kép và giáng kép
- **Dấu thăng kép** (ký hiệu như chữ x): nâng nốt lên **một cung** (hai nửa cung).
- **Dấu giáng kép** (hai dấu giáng): hạ nốt xuống **một cung**.

::ex g4-thang-kep | Fa thăng kép là phím Sol; Si giáng kép là phím La; từ Fa thăng kép về Fa♯ chỉ cần viết dấu thăng.

Vì sao cần? Để giữ đúng **tên bậc** trong âm giai. Ví dụ Sol♯ thứ hoà âm có bậc 7 là Fa nâng lên từ Fa♯: phải viết **Fa thăng kép**, không được viết Sol (sẽ có hai bậc tên "Sol").

## Nốt trùng âm
Hai tên khác nhau cho **cùng một phím** gọi là **trùng âm** (*enharmonic*).

::ex g4-trung-am | Đô♯ = Rê♭; Mi = Fa♭; Si♯ = Đô.

Mọi phím có ít nhất hai tên: Đô = Si♯ = Rê giáng kép.

## Luyện tập
1. Viết một tên trùng âm cho: Fa♯, Mi♭, Si, Sol thăng kép.
2. Phím nào là La giáng kép? (Sol)

## Gợi ý cho phụ huynh và giáo viên
Xem [[dau-hoa]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-giong-nam-dau-ten-bac',
    title: 'Giọng đến năm dấu và tên kỹ thuật các bậc',
    category: 'scales',
    unlisted: true,
    aliases: ['tên bậc âm giai cho trẻ', 'tonic dominant cho trẻ'],
    summary: 'Si trưởng, Rê♭ trưởng, Sol♯ thứ, Si♭ thứ; bảy tên kỹ thuật của các bậc — chủ, trên chủ, trung, hạ át, át, hạ trung, cảm âm.',
    body: `
## Giọng năm dấu
| Hoá biểu | Giọng trưởng | Giọng thứ song song |
|---|---|---|
| 5 ♯ (Fa Đô Sol Rê La) | Si trưởng | Sol♯ thứ |
| 5 ♭ (Si Mi La Rê Sol) | Rê♭ trưởng | Si♭ thứ |

::ex g4-hoa-bieu-nam-dau | Hoá biểu Si trưởng và Rê♭ trưởng.

Sol♯ thứ hoà âm có bậc 7 là **Fa thăng kép**; Si♭ thứ hoà âm có bậc 7 là **La♮**.

## Tên kỹ thuật các bậc
Ngoài số, mỗi bậc có một **tên** nói lên vai trò của nó:

| Bậc | Tên Việt | Tên Anh |
|---|---|---|
| 1 | âm chủ | tonic |
| 2 | trên chủ | supertonic |
| 3 | trung âm | mediant |
| 4 | hạ át | subdominant |
| 5 | át | dominant |
| 6 | hạ trung | submediant |
| 7 | cảm âm | leading note |

::ex g4-ten-bac | Tên các bậc của Rê trưởng.

Cách nhớ: **át** (bậc 5) cách âm chủ một quãng 5 lên; **hạ át** (bậc 4) cách âm chủ một quãng 5 *xuống*; **trung âm** ở giữa chủ và át, **hạ trung** ở giữa chủ và hạ át. **Cảm âm** cách âm chủ nửa cung, "kéo" về âm chủ. (Trong giọng thứ tự nhiên, bậc 7 cách âm chủ một cung và gọi là *subtonic*.)

## Luyện tập
1. Bậc hạ át của Mi trưởng? Cảm âm của Sol♯ thứ hoà âm?
2. Viết âm giai Rê♭ trưởng và đặt tên kỹ thuật dưới mỗi nốt.

## Gợi ý cho phụ huynh và giáo viên
Xem [[bac-am-giai]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-am-giai-cromatic',
    title: 'Cách viết âm giai cromatic',
    category: 'scales',
    unlisted: true,
    aliases: ['viết âm giai cromatic'],
    summary: 'Âm giai cromatic đi qua mười hai nửa cung; quy ước viết: dùng dấu thăng khi đi lên, dấu giáng khi đi xuống, không quá hai lần cùng một tên nốt liên tiếp.',
    body: `
**Âm giai cromatic** gồm **mười hai nửa cung** liền nhau trong một quãng tám. Đề cương Grade 4 yêu cầu biết **cách viết** nó.

::ex g4-cromatic-viet | Cromatic từ Rê: đi lên dùng dấu thăng, đi xuống dùng dấu giáng.

## Quy ước
1. Bắt đầu và kết thúc ở cùng một nốt (cách một quãng tám).
2. Mỗi tên nốt xuất hiện **không quá hai lần liên tiếp** (Rê, Rê♯ — được; Rê, Rê♯, Rê thăng kép — không).
3. Thường dùng **thăng khi lên**, **giáng khi xuống** — đây là cách viết dễ đọc nhất.

## Luyện tập
1. Viết âm giai cromatic đi lên từ Sol ở khoá Fa.
2. Đếm số nốt: một âm giai cromatic đi lên một quãng tám, tính cả nốt đầu và nốt cuối, có bao nhiêu nốt? (13)

## Gợi ý cho phụ huynh và giáo viên
Có cách viết "hoà âm" của âm giai cromatic giữ nguyên các bậc của giọng; ở cấp này chỉ cần cách viết đơn giản trên. Xem [[am-giai-cromatic]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-moi-quang',
    title: 'Mọi quãng trong một quãng tám: tăng và giảm',
    category: 'pitch',
    unlisted: true,
    aliases: ['quãng tăng giảm cho trẻ'],
    summary: 'Thêm quãng tăng và giảm; gọi tên quãng giữa hai nốt bất kỳ trong giọng, không chỉ trên âm chủ.',
    body: `
## Năm tính chất
- **Đúng** (4, 5, 8) → rộng thêm nửa cung: **tăng**; hẹp lại nửa cung: **giảm**.
- **Trưởng** (2, 3, 6, 7) → hẹp nửa cung: **thứ**; rộng nửa cung: **tăng**.
- **Thứ** → hẹp thêm nửa cung: **giảm**.

::ex g4-quang-tang-giam | Đô – Fa (4 đúng) → Đô – Fa♯ (4 tăng); Đô – Sol♭ (5 giảm); Đô – Mi (3 trưởng) → Mi♭ (3 thứ) → Mi giáng kép (3 giảm); Đô – Mi♯ (3 tăng).

**Quãng 4 tăng** và **quãng 5 giảm** cùng có sáu nửa cung (trùng âm), còn gọi chung là *tritone*.

## Quãng giữa hai nốt bất kỳ
Cách làm như Grade 3: coi **nốt dưới** là âm chủ của một giọng trưởng, so nốt trên với âm giai đó, rồi điều chỉnh.

::ex g4-quang-bat-ky | Các quãng trong La trưởng (không tính từ âm chủ): Đô♯ – Sol♯ (5 đúng), Rê – Si (6 trưởng), Mi – Rê (7 thứ), Fa♯ – Đô♯ (5 đúng), Sol♯ – Rê (5 giảm), Si – Rê (3 thứ).

Ví dụ Sol♯ – Rê: Sol♯ trưởng có bậc 5 là Rê♯; Rê hẹp hơn nửa cung → quãng 5 đúng hẹp lại → **5 giảm**.

## Luyện tập
1. Gọi tên: Fa – Si, Mi – Đô, La♭ – Mi♭, Rê♯ – La.
2. Viết trên Si♭: 4 tăng, 6 thứ, 7 trưởng.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 4: "mọi quãng không quá một quãng tám giữa hai nốt diatonic bất kỳ trong các giọng của cấp". Xem [[quang]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-hop-am-i-iv-v',
    title: 'Hợp âm ba trên bậc I, IV, V',
    category: 'harmony',
    unlisted: true,
    aliases: ['hợp âm chính cho trẻ', 'I IV V'],
    summary: 'Ba hợp âm chính của một giọng — chủ (I), hạ át (IV), át (V) — ở thế gốc; ký hiệu La Mã; trong giọng thứ dùng âm giai hoà âm nên V là hợp âm trưởng.',
    body: `
Hợp âm ba dựng trên các bậc 1, 4, 5 là **ba hợp âm chính**: chúng đủ để đệm cho rất nhiều bài hát.

::ex g4-hop-am-i-iv-v | Sol trưởng: I (Sol – Si – Rê), IV (Đô – Mi – Sol), V (Rê – Fa♯ – La). Mi thứ: i, iv, V — V có Rê♯ (bậc 7 nâng).

## Ký hiệu
Số La Mã ghi bậc của **nốt gốc**: I, IV, V. Nhiều sách viết chữ thường cho hợp âm thứ (i, iv) — ABRSM chấp nhận cả cách viết chỉ dùng chữ hoa.

Trong **giọng thứ**, đề cương quy định dùng **thứ hoà âm**: hợp âm V có bậc 7 nâng, nên V là hợp âm **trưởng** (Mi thứ: Si – Rê♯ – Fa♯).

## Hợp âm (nhiều nốt hơn)
"Hợp âm" trong đề thi có thể có bốn nốt chia hai khuông, nhưng vẫn chỉ gồm ba **tên** nốt của hợp âm ba.

::ex g4-hop-am-bon-be | Fa trưởng: I – IV – V viết cho hai tay, mỗi hợp âm có nốt gốc ở bè trầm.

## Luyện tập
1. Viết I, IV, V của Rê trưởng và Si♭ thứ ở khoá Sol.
2. Đệm câu đầu *Ode to Joy* bằng I và V (Đô trưởng).

## Gợi ý cho phụ huynh và giáo viên
Thế đảo (b, c) và hợp âm trên bậc II đến ở Grade 5. Xem [[hop-am-ba]], [[chuc-nang-hoa-am]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-hoa-my',
    title: 'Các nốt hoa mỹ',
    category: 'expression',
    unlisted: true,
    aliases: ['láy cho trẻ', 'trill mordent cho trẻ'],
    summary: 'Nhận ra và gọi tên láy rền (trill), láy chùm (turn), láy trên và láy dưới (mordent), nốt dựa ngắn (acciaccatura) và nốt dựa dài (appoggiatura).',
    body: `
**Nốt hoa mỹ** là những nốt trang trí viết bằng ký hiệu nhỏ. Đề cương Grade 4 yêu cầu **nhận ra và gọi tên** sáu loại.

::ex g4-hoa-my | Láy rền (tr), láy chùm (~), láy trên, láy dưới (có gạch), nốt dựa ngắn (có gạch chéo), nốt dựa dài.

| Ký hiệu | Tên Việt | Tên Anh | Cách chơi (thông thường) |
|---|---|---|---|
| tr | láy rền | trill | đánh nhanh xen kẽ nốt chính và nốt trên |
| ∽ | láy chùm | turn | nốt trên – nốt chính – nốt dưới – nốt chính |
| răng cưa ngắn | láy trên | upper mordent | nốt chính – nốt trên – nốt chính, rất nhanh |
| răng cưa có gạch dọc | láy dưới | lower mordent | nốt chính – nốt dưới – nốt chính |
| nốt nhỏ có gạch chéo | nốt dựa ngắn | acciaccatura | "đánh vội" sát trước nốt chính |
| nốt nhỏ không gạch | nốt dựa dài | appoggiatura | chiếm một phần thời gian của nốt chính |

::ex g4-hoa-my-viet-ra | Viết ra bằng nốt thường: láy rền, láy chùm (sau nốt), láy trên.

Cách chơi chính xác thay đổi theo thời kỳ (Baroque thường bắt đầu láy rền từ nốt trên) — hãy hỏi giáo viên cho từng bài.

## Luyện tập
1. Tìm các nốt hoa mỹ trong *Minuet Sol thứ* (Grade 2) và *Trăng quê* ở phần Tác phẩm.
2. Nghe giáo viên chơi từng loại, gọi tên.

## Gợi ý cho phụ huynh và giáo viên
Grade 5 yêu cầu thêm việc thay nốt hoa mỹ viết ra bằng ký hiệu. Xem [[ky-hieu-hoa-my]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-nhac-cu-dan-nhac',
    title: 'Nhạc cụ trong dàn nhạc giao hưởng',
    category: 'organology',
    unlisted: true,
    aliases: ['nhạc cụ dàn nhạc cho trẻ'],
    summary: 'Bốn bộ của dàn nhạc — dây, gỗ, đồng, gõ — tên các nhạc cụ chính, khoá chúng dùng và cách chúng phát ra âm thanh.',
    body: `
Đề thi Grade 4 có thể hỏi những câu đơn giản về **nhạc cụ của dàn nhạc giao hưởng**.

## Bốn bộ
| Bộ | Nhạc cụ (từ cao đến thấp) | Phát âm bằng |
|---|---|---|
| Dây | violin, viola, cello, contrabass | kéo vĩ (hoặc gảy — *pizzicato*) trên dây |
| Gỗ | sáo piccolo, sáo (flute), oboe, clarinet, fagốt (bassoon) | thổi qua lỗ (sáo) hoặc qua lưỡi gà (oboe, clarinet, fagốt) |
| Đồng | trumpet, kèn co (horn), trombone, tuba | rung môi trong ống thổi hình phễu |
| Gõ | timpani, trống, chũm choẹ, xylophone… | gõ, đánh |

Sáo hiện nay làm bằng kim loại nhưng vẫn thuộc **bộ gỗ** — tên bộ dựa trên cách phát âm truyền thống, không phải chất liệu.

## Khoá của nhạc cụ
::ex g4-nhom-nhac-cu | Violin, sáo: khoá Sol. Viola: khoá alto. Cello, fagốt: khoá Fa (nốt cao dùng thêm khoá Đô dòng 4 — Grade 5).

## Luyện tập
1. Nhạc cụ nào trong bộ dây dùng khoá alto? (viola)
2. Kể ba nhạc cụ có lưỡi gà.
3. Nghe *Hành khúc lính chì* (phần Tác phẩm) và tưởng tượng nó được dàn nhạc chơi: bè nào giao cho trống, bè nào cho kèn?

## Gợi ý cho phụ huynh và giáo viên
Xem [[nhac-khi-the-gioi]], [[violin]], [[sao-flute]], [[trumpet]], [[bo-go-dan-nhac]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g4-ky-thuat',
    title: 'Âm giai, cromatic và hợp âm rải Grade 4',
    category: 'technique',
    unlisted: true,
    aliases: ['kỹ thuật grade 4'],
    summary: 'Yêu cầu ABRSM Grade 4 (2027 & 2028): Si♭, Mi♭ trưởng, Si, Đô thứ hai tay; Si, Fa♯, La♭ trưởng, Fa♯, Fa thứ từng tay; Mi♭ trưởng và Đô thứ hoà âm ngược chiều; cromatic từ Fa♯ hai tay; hợp âm rải.',
    body: `
## Yêu cầu của kỳ thi
Theo đặc tả ABRSM 2027 & 2028 (thuộc lòng, liền tiếng, đều; âm giai thứ: hoà âm hoặc giai điệu):

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai cùng chiều | Si♭, Mi♭ trưởng; Si, Đô thứ | 2 quãng tám | hai tay |
| Âm giai cùng chiều | Si, Fa♯, La♭ trưởng; Fa♯, Fa thứ | 2 quãng tám | từng tay |
| Âm giai ngược chiều | Mi♭ trưởng; Đô thứ hoà âm | 2 quãng tám | hai tay từ âm chủ |
| Cromatic cùng chiều | bắt đầu từ Fa♯ | 2 quãng tám | **hai tay** |
| Hợp âm rải | Si♭, Mi♭ trưởng; Si, Đô thứ | 2 quãng tám | hai tay |
| Hợp âm rải | Si, Fa♯, La♭ trưởng; Fa♯, Fa thứ | 2 quãng tám | từng tay |

## Âm giai có phím đen ở đầu
Các giọng giáng (Si♭, Mi♭, La♭) **không** bắt đầu bằng ngón cái: ngón cái luôn rơi vào phím trắng sau phím đen.

::ex g4-am-giai-hai-tay | Mi♭ trưởng hai tay, hai quãng tám đi lên: tay phải bắt đầu ngón 3, ngón 4 luôn ở Si♭; tay trái ngón 3 ở Mi♭, ngón 4 ở La♭.

## Cromatic hai tay
::ex g4-cromatic-fa-thang | Cromatic từ Fa♯, hai tay cùng chiều, một quãng tám đầu. Ngón 3 cả hai tay trên phím đen; tay trái dùng ngón 2 ở Si và Mi.

## Gợi ý cho phụ huynh và giáo viên
Xem [[ngon-bam]], [[am-giai-cromatic]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g4-thi-tau-va-nghe',
    title: 'Thị tấu và luyện tai Grade 4',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu grade 4', 'xướng âm grade 4'],
    summary: 'Bài thị tấu Grade 4 khoảng 8 ô nhịp, có 6/8, nhịp lấy đà, nốt cromatic, dấu ngân, tenuto; bài nghe Grade 4: hát hoặc chơi lại giai điệu, xướng âm năm nốt, nói tính chất và vỗ tiết tấu.',
    body: `
## Bài thị tấu Grade 4
Theo đặc tả ABRSM 2027 & 2028, thêm vào các cấp trước: dài **khoảng 8 ô nhịp**; nhịp **6/8**; **nhịp lấy đà**; **nốt cromatic**; **dấu ngân**; **tenuto**.

::ex g4-thi-tau-1 | Si♭ trưởng, 6/8, có nhịp lấy đà và dấu ngân ở ô 4. Ô 6 có Mi♮ — nốt cromatic.

## Bốn bài nghe Grade 4
- **A.** **Hát hoặc chơi lại từ trí nhớ** một giai điệu (trong một quãng tám, giọng đến ba dấu) giám khảo chơi hai lần.
- **B.** **Xướng âm năm nốt** từ bản nhạc, tự do tốc độ, ở Đô, Fa hoặc Sol trưởng; trong khoảng quãng 3 trên và dưới âm chủ, bắt đầu và kết thúc ở âm chủ, không có quãng lớn hơn quãng 3.
- **C. (i)** Trả lời về hai đặc điểm: một trong cường độ / cách chơi / tốc độ / giọng, và **tính chất** của bản nhạc. **(ii)** Vỗ lại tiết tấu một trích đoạn và nói nhịp hai, ba hay bốn.

::ex g4-xuong-am | Mẫu xướng âm năm nốt ở Sol trưởng: bắt đầu và kết thúc ở Sol, đi liền bậc.

Mẹo xướng âm: hát thầm âm chủ trước, rồi nghĩ từng bước "lên một, xuống một" — đừng đoán cả câu.

## Gợi ý cho phụ huynh và giáo viên
Xem [[xuong-am]], [[thi-tau]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g4-doc-hieu',
    title: 'Đọc hiểu một đoạn nhạc piano',
    category: 'form',
    unlisted: true,
    aliases: ['music in context grade 4'],
    summary: 'Một đoạn piano giọng Đô thứ: giọng, tên bậc, quãng, hợp âm, nốt hoa mỹ, thuật ngữ — dạng câu hỏi tổng hợp của đề nhạc lý Grade 4.',
    body: `
::ex g4-doc-hieu | Đoạn nhạc tám ô, Đô thứ, nhịp 3/4.

## Thử trả lời
1. Giọng? *(Đô thứ — ba dấu giáng, có Si♮ là cảm âm nâng)*
2. *Andante con moto*? *(thong thả, có chuyển động)*
3. Ký hiệu nhỏ đầu ô 5? *(nốt dựa ngắn — acciaccatura)*
4. Hợp âm tay trái ô 4 (Sol – Si – Rê)? *(V của Đô thứ, có Si♮)*
5. Tên kỹ thuật của nốt Sol? *(át)* Của La♭? *(hạ trung)*
6. Quãng giữa hai nốt đầu (Sol – Đô)? *(4 đúng)*
7. Đường cong lớn bao ô 1 – 4? *(dấu câu — phrase mark: chơi liền thành một câu)*
8. Bài kết ở hợp âm nào? *(I — Đô thứ)*

## Gợi ý cho phụ huynh và giáo viên
Đề thi Grade 4 có thêm câu hỏi về nhạc cụ dàn nhạc — liên hệ bài trước.
`,
    refs: [THEORY],
  },
]

import type { Article } from '../wiki'

/**
 * Piano & Nhạc lý cho Trẻ em — Grade 3: theory following ABRSM's Music Theory syllabus for Grade 3
 * (outline from 2020) and the piano requirements of the Practical Grades 2027 & 2028 specification.
 * Examples: music/ex/g3.txt.
 */
const THEORY: [string, string] = ['ABRSM — The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf']
const PIANO: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsG3: Article[] = [
  {
    slug: 'tre-em-g3-nhip-kep',
    title: 'Nhịp kép: 6/8, 9/8 và 12/8',
    category: 'rhythm',
    unlisted: true,
    aliases: ['nhịp kép cho trẻ', 'nhịp 6/8 cho trẻ'],
    summary: 'Trong nhịp kép, mỗi phách là một nốt đen chấm dôi chia ba móc đơn: 6/8 có hai phách, 9/8 ba phách, 12/8 bốn phách. Phân biệt 6/8 với 3/4 và cách nhóm nốt theo phách chấm dôi.',
    body: `
Các nhịp đã học (2/4, 3/4, 4/4, 2/2…) là **nhịp đơn**: mỗi phách chia **đôi**. Grade 3 thêm **nhịp kép**: mỗi phách là một **nốt đen chấm dôi**, chia **ba** móc đơn.

| Số chỉ nhịp | Số phách | Mỗi phách | Đếm |
|---|---|---|---|
| 6/8 | 2 | nốt đen chấm dôi | **1** – và – a – **2** – và – a |
| 9/8 | 3 | nốt đen chấm dôi | **1** … **2** … **3** … |
| 12/8 | 4 | nốt đen chấm dôi | **1** … **2** … **3** … **4** … |

Mẹo: trong nhịp kép, **số trên chia 3** cho ra số phách (6 : 3 = 2).

## 6/8 không phải 3/4
Cả hai đều có sáu móc đơn mỗi ô, nhưng nhóm khác hẳn:
::ex g3-don-kep | 3/4: ba phách, móc đơn nhóm từng đôi (1 – và – 2 – và – 3 – và). 6/8: hai phách, móc đơn nhóm từng ba (1 – và – a – 2 – và – a).

3/4 nghe như điệu valse "MỘT – hai – ba"; 6/8 nghe như nhịp đung đưa hay nhịp phi ngựa "MỘT – và – a – HAI – và – a".

## Các tiết tấu thường gặp trong 6/8
::ex g3-sau-tam | Nốt đen chấm dôi (cả phách); nốt đen + móc đơn (dài – ngắn, rất hay gặp); ba móc đơn; nốt trắng chấm dôi (cả ô).

## 9/8 và 12/8
::ex g3-chin-muoi-hai | 9/8: ba phách chấm dôi. 12/8: bốn phách chấm dôi — nghe như 4/4 mà mỗi phách chia ba (nhịp của nhiều bài blues chậm và ballad).

## Nhóm nốt
Trong nhịp kép, móc đơn và móc kép được nối **theo từng phách chấm dôi**, để mắt thấy ngay hai (hay ba, bốn) phách lớn.

::ex g3-nhom-kep | 6/8: nhóm ba móc đơn; sáu móc kép một nhóm (một phách).

## Luyện tập
1. Vỗ ví dụ 6/8, chân dậm hai phách lớn mỗi ô.
2. Viết số chỉ nhịp: ô có nốt đen chấm dôi + ba móc đơn + nốt đen chấm dôi (9/8).
3. Chơi bài *Nhảy dây* ở phần Tác phẩm và đếm "1 – và – a – 2 – và – a".

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 3: "nhịp kép 6/8, 9/8, 12/8 và cách nhóm nốt, dấu lặng". Xem [[so-chi-nhip]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-moc-ba',
    title: 'Nốt móc ba',
    category: 'rhythm',
    unlisted: true,
    aliases: ['demisemiquaver cho trẻ', '32nd note'],
    summary: 'Nốt móc ba (demisemiquaver) bằng nửa móc kép — tám nốt trong một phách đen — và dấu lặng móc ba; đọc chúng trong nhóm chấm dôi.',
    body: `
Tiếp tục chia đôi: **một móc kép = hai móc ba**. Nốt **móc ba** (*demisemiquaver*, *32nd note*) có **ba** móc ở đuôi hoặc **ba** gạch nối.

::ex g3-moc-ba | Một móc đơn = hai móc kép = bốn móc ba; dấu lặng móc ba có ba "móc".

| Hình nốt | Bao nhiêu nốt trong một phách đen |
|---|---|
| móc đơn | 2 |
| móc kép | 4 |
| móc ba | 8 |

Móc ba thường xuất hiện trong nhạc chậm (Adagio, Andante) như những nốt trang trí nhanh, hoặc sau nốt chấm dôi.

::ex g3-moc-ba-giai-dieu | Nốt móc đơn chấm dôi + hai móc ba = một phách; ô 2: móc kép xen móc ba.

## Luyện tập
1. Một nốt trắng bằng bao nhiêu nốt móc ba? (16)
2. Viết một phách 2/4 gồm: móc kép chấm dôi + móc ba + móc đơn.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 3 đưa nốt và dấu lặng móc ba vào cùng nhịp kép. Xem [[truong-do]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-ke-phu-va-dich-quang-tam',
    title: 'Dòng kẻ phụ xa và dịch một quãng tám giữa hai khoá',
    category: 'basics',
    unlisted: true,
    aliases: ['dịch giọng quãng tám cho trẻ', 'chuyển khoá Sol sang Fa'],
    summary: 'Đọc nốt quá hai dòng kẻ phụ; chép một giai điệu từ khoá Sol sang khoá Fa (hoặc ngược lại) thấp hoặc cao hơn đúng một quãng tám.',
    body: `
## Quá hai dòng kẻ phụ
Grade 3 không giới hạn số dòng kẻ phụ. Cách đọc: tìm nốt **Đô** gần nhất (Đô6 trên dòng phụ 2 phía trên khoá Sol; Đô2 trên dòng phụ 2 phía dưới khoá Fa) rồi đếm tiếp, hoặc đếm dòng phụ như đếm dòng khuông.

::ex g3-ke-phu-xa | Khoá Sol: Mi6, Fa6, Sol6 (ba dòng phụ trở lên). Khoá Fa: La1, Sol1, Fa1.

Trong nhạc piano, nốt rất cao hay rất thấp thường được ghi gọn bằng **8va** (chơi cao hơn một quãng tám) hoặc **8vb** (thấp hơn một quãng tám) — bạn sẽ gặp từ Grade 4 – 5.

## Dịch một quãng tám sang khoá khác
Đề thi Grade 3 có thể yêu cầu **chép lại một giai điệu ở khoá kia, thấp (hoặc cao) hơn một quãng tám**. Nốt mới có **cùng tên** nhưng ở quãng tám khác.

::ex g3-dich-quang-tam | Giai điệu khoá Sol (trên) chép thấp hơn một quãng tám sang khoá Fa (dưới). Cùng hoá biểu, cùng nhịp, cùng tên nốt.

Các bước:
1. Viết khoá mới, **hoá biểu** và **số chỉ nhịp**.
2. Viết nốt đầu ở đúng quãng tám mới — kiểm tra trên đàn.
3. Chép từng nốt **giữ nguyên hướng đi và khoảng cách**; kiểm tra lại số nốt mỗi ô.
4. Chép cả dấu hoá bất thường, dấu nối, dấu luyến, cường độ.

## Luyện tập
1. Chép tay trái của *Nhảy dây* (ô 1 – 4) lên khoá Sol, cao hơn một quãng tám.
2. Chép câu đầu *Twinkle* (khoá Sol) xuống khoá Fa, thấp hơn một quãng tám.

## Gợi ý cho phụ huynh và giáo viên
Lỗi thường gặp: chép đúng vị trí trên khuông (thành sai tên nốt) thay vì đúng tên nốt. Cho trẻ đọc to tên nốt khi chép. Xem [[dich-giong]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-giong-den-bon-dau',
    title: 'Các giọng đến bốn dấu hoá',
    category: 'scales',
    unlisted: true,
    aliases: ['Mi trưởng La giáng trưởng cho trẻ', 'giọng 4 dấu'],
    summary: 'Hai giọng trưởng mới Mi và La♭, sáu giọng thứ mới (Si, Fa♯, Đô♯, Sol, Đô, Fa thứ) và bảng đủ mười tám giọng đến bốn dấu hoá cùng giọng song song.',
    body: `
## Hai giọng trưởng mới
::ex g3-am-giai-mi-truong | Mi trưởng: bốn dấu thăng — Fa♯, Đô♯, Sol♯, Rê♯.

::ex g3-am-giai-la-giang | La♭ trưởng: bốn dấu giáng — Si♭, Mi♭, La♭, Rê♭.

::ex g3-hoa-bieu-bon-dau | Hoá biểu Mi trưởng và La♭ trưởng ở hai khoá.

## Bảng giọng đến bốn dấu
Mỗi hoá biểu là của **một giọng trưởng** và **giọng thứ song song** của nó (âm chủ ở bậc 6 của giọng trưởng).

| Hoá biểu | Giọng trưởng | Giọng thứ song song |
|---|---|---|
| không dấu | Đô | La |
| 1 ♯ | Sol | Mi |
| 2 ♯ | Rê | Si |
| 3 ♯ | La | Fa♯ |
| 4 ♯ | Mi | Đô♯ |
| 1 ♭ | Fa | Rê |
| 2 ♭ | Si♭ | Sol |
| 3 ♭ | Mi♭ | Đô |
| 4 ♭ | La♭ | Fa |

## Trưởng hay thứ?
Cùng hoá biểu, làm sao biết bài ở giọng trưởng hay thứ? Nhìn:
- **nốt cuối** (thường là âm chủ) và hợp âm cuối;
- **bậc 7 nâng** của giọng thứ — một dấu hoá bất thường lặp lại (ví dụ Rê♯ trong bài hoá biểu một dấu thăng → Mi thứ).

## Luyện tập
1. Viết hoá biểu Si thứ, Fa♯ thứ, Fa thứ ở hai khoá.
2. Một bài có hoá biểu ba dấu giáng, nhiều Si♮ và kết ở Đô: giọng gì? (Đô thứ)
3. Viết âm giai Đô♯ thứ hoà âm đi lên ở khoá Sol (bậc 7: Si♯ — chính là phím Đô!).

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 3: "âm giai và hoá biểu mọi giọng trưởng, thứ đến bốn dấu thăng, giáng, cả thứ hoà âm và thứ giai điệu". Xem [[vong-quang-nam]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-thu-giai-dieu',
    title: 'Âm giai thứ giai điệu và ba dạng âm giai thứ',
    category: 'scales',
    unlisted: true,
    aliases: ['thứ giai điệu cho trẻ'],
    summary: 'Thứ giai điệu nâng bậc 6 và 7 khi đi lên, trở về tự nhiên khi đi xuống; so sánh ba dạng tự nhiên – hoà âm – giai điệu trên cùng một âm chủ.',
    body: `
Thứ hoà âm có bước rộng giữa bậc 6 và bậc 7 (một cung rưỡi) — khó hát. Để giai điệu đi lên mượt hơn, người ta nâng **cả bậc 6** khi đi lên: đó là **thứ giai điệu**.

::ex g3-thu-giai-dieu | La thứ giai điệu: đi lên Fa♯, Sol♯; đi xuống trở về Sol, Fa (dấu bình).

## Ba dạng trên cùng âm chủ
::ex g3-thu-ba-dang | Đô thứ hoà âm (Si♮), rồi Đô thứ giai điệu: lên La♮, Si♮; xuống Si♭, La♭ theo hoá biểu.

| Dạng | Đi lên | Đi xuống |
|---|---|---|
| Tự nhiên | theo hoá biểu | theo hoá biểu |
| Hoà âm | nâng bậc 7 | nâng bậc 7 |
| Giai điệu | nâng bậc 6 và 7 | như tự nhiên |

Mẹo: bốn nốt cuối của thứ giai điệu **đi lên** (ở La thứ: Mi – Fa♯ – Sol♯ – La) giống hệt bốn nốt cuối của âm giai **trưởng cùng tên** (La trưởng).

## Luyện tập
1. Viết Mi thứ giai điệu, lên và xuống, ở khoá Fa, dùng hoá biểu.
2. Viết Sol thứ ba dạng (chỉ đi lên), đánh dấu bậc đã nâng.
3. Hát La thứ giai điệu đi lên rồi đi xuống, nghe sự khác nhau ở bậc 6 – 7.

## Gợi ý cho phụ huynh và giáo viên
Xem [[am-giai-thu]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-quang-tinh-chat',
    title: 'Tính chất quãng: trưởng, thứ, đúng',
    category: 'pitch',
    unlisted: true,
    aliases: ['quãng trưởng quãng thứ cho trẻ', 'quãng đúng'],
    summary: 'Gọi tên quãng trên âm chủ bằng số và tính chất: trong giọng trưởng mọi quãng là trưởng hoặc đúng; trong giọng thứ hoà âm có quãng 3 thứ và quãng 6 thứ.',
    body: `
Từ Grade 3, quãng có **hai phần tên**: **số** (đếm tên nốt) và **tính chất** (đo số nửa cung).

## Trong giọng trưởng
Tính từ âm chủ lên các bậc của **âm giai trưởng**:
- quãng 2, 3, 6, 7 là **trưởng**;
- quãng 4, 5, 8 (và đồng âm) là **đúng**.

::ex g3-quang-tinh-chat | Các quãng trên âm chủ Đô trưởng.

| Quãng | Số nửa cung | Ví dụ từ Đô |
|---|---|---|
| 2 trưởng | 2 | Đô – Rê |
| 3 trưởng | 4 | Đô – Mi |
| 4 đúng | 5 | Đô – Fa |
| 5 đúng | 7 | Đô – Sol |
| 6 trưởng | 9 | Đô – La |
| 7 trưởng | 11 | Đô – Si |
| 8 đúng | 12 | Đô – Đô |

## Quãng thứ
Một quãng trưởng **hẹp lại nửa cung** (nốt trên hạ xuống) thành quãng **thứ** — cùng số, khác tính chất.

::ex g3-quang-thu | Trên âm chủ Đô thứ hoà âm: quãng 3 thứ (Đô – Mi♭), quãng 6 thứ (Đô – La♭); quãng 7 vẫn trưởng (Đô – Si♮, bậc 7 nâng).

Đây là lý do giọng thứ "nghe buồn": quãng 3 trên âm chủ là quãng 3 **thứ**.

## Cách gọi tên một quãng
1. Đếm số: tên nốt dưới đến tên nốt trên, kể cả hai đầu.
2. Coi nốt dưới là **âm chủ** của một giọng trưởng: nốt trên có nằm trong âm giai trưởng đó không? Có → trưởng (2, 3, 6, 7) hoặc đúng (4, 5, 8). Thấp hơn nửa cung → thứ.

## Luyện tập
1. Gọi tên: Sol – Mi, Fa – La♭, Rê – Si, La – Fa.
2. Viết quãng 6 thứ trên Mi; quãng 3 trưởng trên Si♭.

## Gợi ý cho phụ huynh và giáo viên
Ở Grade 3 chỉ hỏi quãng **trên âm chủ**; quãng giữa hai nốt bất kỳ và quãng tăng, giảm đến ở Grade 4. Xem [[quang]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-thuat-ngu',
    title: 'Thuật ngữ Grade 3',
    category: 'expression',
    unlisted: true,
    aliases: ['thuật ngữ grade 3'],
    summary: 'Thêm các từ về tốc độ, tính chất và cách chơi: con brio, espressivo, sostenuto, sforzando, ten., ad libitum, rubato…',
    body: `
## Tính chất và cách chơi
| Thuật ngữ | Nghĩa |
|---|---|
| con brio | sôi nổi, rực rỡ |
| con moto | có chuyển động |
| espressivo (espress.) | diễn cảm |
| sostenuto | ngân giữ |
| marcato | nhấn rõ từng nốt |
| sforzando (**sf**, **sfz**) | nhấn mạnh đột ngột |
| tenuto (ten.) | giữ đủ độ dài |
| ad libitum (ad lib.) | tự do (tốc độ, cách chơi) |
| rubato | co giãn nhịp độ cho diễn cảm |
| allargando | chậm và rộng dần |
| morendo | tắt dần (nhỏ và chậm dần) |
| e, ed | và |

::ex g3-thuat-ngu | *Allegro con brio* với **sf** — nhấn đột ngột; *Lento e espressivo* — chậm và diễn cảm.

## Luyện tập
1. Dịch: *Andante sostenuto*, *Allegro ma non troppo*, *con moto e leggiero*.
2. Chọn hai bài ở phần Tác phẩm, tìm và giải nghĩa mọi chỉ dẫn biểu diễn.

## Gợi ý cho phụ huynh và giáo viên
Đề cương Grade 3 chỉ ghi "thêm thuật ngữ và ký hiệu"; danh sách trên là lựa chọn của người biên soạn. Xem [[thuat-ngu]].
`,
    refs: [THEORY],
  },
  {
    slug: 'tre-em-g3-ky-thuat',
    title: 'Âm giai, cromatic ngược chiều và hợp âm rải Grade 3',
    category: 'technique',
    unlisted: true,
    aliases: ['kỹ thuật grade 3'],
    summary: 'Yêu cầu ABRSM Grade 3 (2027 & 2028): Rê, La trưởng, Mi, Sol thứ hai tay; Si♭, Mi♭ trưởng, Si, Đô thứ từng tay; Mi trưởng ngược chiều; cromatic ngược chiều từ Rê; hợp âm rải hai tay.',
    body: `
## Yêu cầu của kỳ thi
Theo đặc tả ABRSM 2027 & 2028 (thuộc lòng, liền tiếng, đều; từ Grade 3 âm giai thứ chỉ còn **hoà âm hoặc giai điệu**, tuỳ chọn):

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai cùng chiều | Rê, La trưởng; Mi, Sol thứ | 2 quãng tám | **hai tay** |
| Âm giai cùng chiều | Si♭, Mi♭ trưởng; Si, Đô thứ | 2 quãng tám | từng tay |
| Âm giai ngược chiều | Mi trưởng | 2 quãng tám | hai tay từ âm chủ |
| Cromatic ngược chiều | bắt đầu từ Rê | 1 quãng tám | hai tay từ Rê (đồng âm) |
| Hợp âm rải | Rê, La trưởng; Mi, Sol thứ | 2 quãng tám | **hai tay** |
| Hợp âm rải | Si♭, Mi♭ trưởng; Si, Đô thứ | 2 quãng tám | từng tay |

## Âm giai thứ hai tay
::ex g3-am-giai-thu-hai-tay | Mi thứ hoà âm, hai tay, hai quãng tám đi lên. Tay phải dùng ngón 4 ở Rê♯; tay trái ngón 4 ở Fa♯ của quãng tám thứ hai.

## Cromatic ngược chiều
Hai ngón cái cùng ở Rê; tay phải đi lên, tay trái đi xuống. Vì phím đen đối xứng quanh Rê (và quanh Sol♯/La♭), **hai tay luôn chơi cùng loại phím và cùng số ngón** — đẹp như soi gương.

::ex g3-cromatic-nguoc | Cromatic ngược chiều từ Rê, một quãng tám.

## Hợp âm rải hai tay
::ex g3-rai-hai-tay | Hợp âm rải Rê trưởng hai tay, hai quãng tám. Hai ngón cái luồn ở những thời điểm khác nhau — tập từng tay thật vững trước.

## Gợi ý cho phụ huynh và giáo viên
Xem [[am-giai-cromatic]], [[luyen-hop-am-rai]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g3-thi-tau-va-nghe',
    title: 'Thị tấu và luyện tai Grade 3',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu grade 3'],
    summary: 'Bài thị tấu Grade 3 đến 8 ô nhịp, nhịp 3/8, giọng La, Si♭, Mi♭ trưởng, Si thứ, ra ngoài vị trí năm ngón, có quãng hai nốt; bốn bài nghe Grade 3 với câu hỏi trưởng hay thứ.',
    body: `
## Bài thị tấu Grade 3
Theo đặc tả ABRSM 2027 & 2028, thêm vào các yếu tố của Grade 1 – 2:
- dài **đến 8 ô nhịp**; nhịp **3/8**;
- giọng **La, Si♭, Mi♭ trưởng**, **Si thứ**;
- tay đi **ra ngoài vị trí năm ngón**;
- **hợp âm hai nốt** ở một trong hai tay.

::ex g3-thi-tau-1 | Bài đọc 1: La trưởng, 3/8. Ở ô 6 tay phải nhảy lên La cao — phải đổi vị trí.

::ex g3-thi-tau-2 | Bài đọc 2: Si thứ, tay trái hợp âm hai nốt. La♯ là bậc 7 nâng.

Khi phải đổi vị trí, tìm chỗ **nghỉ tự nhiên** (nốt dài, dấu lặng, cuối câu) để dời tay, và nhìn trước nốt đầu của vị trí mới.

## Bốn bài nghe Grade 3
- **A.** Vỗ phách, nhấn phách mạnh, nói nhịp **hai, ba hay bốn**.
- **B.** Hát lại ba câu hai ô, giọng **trưởng hoặc thứ**, trong khoảng một quãng tám.
- **C.** Nghe một câu đến bốn ô, chơi hai lần; nhận ra và mô tả chỗ đổi **cao độ hoặc tiết tấu**.
- **D.** Trả lời về hai đặc điểm: một trong cường độ / cách chơi / tốc độ, và **giọng trưởng hay thứ**.

## Tập ở nhà
1. Người lớn chơi hợp âm trưởng, thứ xen kẽ — bạn nói "trưởng" hay "thứ".
2. Nghe các bài trong phần Tác phẩm: bài nào giọng thứ? (Polonaise, Old French Song, Đò chiều ở Grade 2…)

## Gợi ý cho phụ huynh và giáo viên
Xem [[thi-tau]], [[luyen-tai]].
`,
    refs: [PIANO],
  },
  {
    slug: 'tre-em-g3-doc-hieu',
    title: 'Đọc hiểu một giai điệu nhịp 6/8',
    category: 'form',
    unlisted: true,
    aliases: ['music in context grade 3'],
    summary: 'Một giai điệu 6/8 có nhịp lấy đà: tìm giọng, số phách, quãng có tính chất, tiết tấu chấm dôi và cấu trúc câu.',
    body: `
::ex g3-doc-hieu | Giai điệu Mi♭ trưởng, nhịp 6/8, bắt đầu bằng nhịp lấy đà.

## Thử trả lời
1. Giọng? *(Mi♭ trưởng — ba dấu giáng, kết ở Mi♭)*
2. Mỗi ô có mấy phách? *(hai phách nốt đen chấm dôi)*
3. Nốt lấy đà dài bao lâu? *(một móc đơn)* — ô cuối thiếu đúng phần ấy.
4. Quãng từ âm chủ Mi♭ lên Sol (ô 1)? *(3 trưởng)* Từ Mi♭ lên La♭ (ô 3, so với âm chủ)? *(4 đúng)*
5. *Andantino* nghĩa là gì? *(thường hiểu là nhanh hơn Andante một chút)*
6. Dấu luyến ở ô 2 nối những nốt nào? *(Rê – Mi♭)*
7. Giai điệu có mấy câu? *(một câu bốn ô, kết về âm chủ)*

## Luyện tập
Với *Old French Song* (Tchaikovsky): nói giọng, nhịp, tìm các bậc 7 nâng (Fa♯) và đếm số câu.

## Gợi ý cho phụ huynh và giáo viên
Xem [[cau-nhac]].
`,
    refs: [THEORY],
  },
]

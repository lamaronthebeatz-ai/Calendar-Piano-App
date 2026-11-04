import type { Article } from '../wiki'

/**
 * Ba bài "tư liệu phân tích" cho cuốn Phân tích tác phẩm âm nhạc: minuet có trio, biến tấu, rondo – sonata. Tác phẩm
 * chọn từ danh mục "Материал для анализа" của Sposobin; số ô đếm trên bản mã hoá Humdrum (Craig Sapp, theo ấn bản
 * Durand 1915 do Dukas hiệu đính), ô lấy đà là ô 0.
 */
const SPOSOBIN: [string, string] = ['Способин И. В., Музыкальная форма, 7-е изд. — М.: Музыка, 1984 (theo bản 1958)', 'https://nakhodka-music.ru/files/sposobin_i_v_muzykal_naya_forma_1984.pdf']
const MAZEL: [string, string] = ['Мазель Л. А., Строение музыкальных произведений, 2-е изд. — М.: Музыка, 1979', 'https://www.choirbgam.by/wp-content/uploads/2023/04/Мазель-Л.-Строение-музыкальных-произведений.pdf']
const kern = (n: string): [string, string] => [`Humdrum (Craig Sapp) — bản mã hoá ${n}, dùng để đếm ô và đọc hoà âm`, `https://raw.githubusercontent.com/craigsapp/beethoven-piano-sonatas/master/kern/${n}.krn`]

export const ptamTuLieu: Article[] = [
  {
    slug: 'phan-tich-menuetto-op2-so1',
    title: 'Phân tích: Beethoven, Sonata Op. 2 số 1, chương 3 (Menuetto và Trio)',
    category: 'analysis',
    aliases: ['Menuetto Op. 2 số 1', 'Minuet và trio Beethoven', 'Sonata số 1 Fa thứ chương 3', 'minuet có trio'],
    summary: 'Menuetto (Allegretto, Fa thứ) và Trio (Fa trưởng) của sonata piano số 1: mẫu ba đoạn phức có trio. Minuet là ba đoạn đơn có nhắc lại (40 ô), đoạn đầu là đoạn nhạc ba câu mà Sposobin dẫn làm ví dụ; trio ba đoạn đơn (33 ô); minuet da capo.',
    wiki: 'Piano_Sonata_No._1_(Beethoven)',
    refs: [kern('sonata01-3'), SPOSOBIN, ['Wikipedia — Piano Sonata No. 1 (Beethoven)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._1_(Beethoven)']],
    body: `## Tổng quan
Sonata piano **Fa thứ Op. 2 số 1** là sonata đầu tiên [[ludwig-van-beethoven|Beethoven]] cho in (1796, đề tặng Haydn — theo Wikipedia). Chương 3 là **Menuetto, Allegretto** nhịp 3/4, Fa thứ, có **Trio** Fa trưởng; sau trio, minuet được chơi lại (*da capo*).

Sposobin đưa chương này vào danh mục tư liệu cho cả **ba đoạn đơn** (minuet và trio, xét riêng từng bản) [^sposobin-1984, ch. IV, tr. 138] lẫn **ba đoạn phức** (cả chương) [^sposobin-1984, ch. V, tr. 157]. Lý thuyết: [[hinh-thuc-nga-hinh-thuc-don]], [[hinh-thuc-nga-ba-phan-phuc]]; kiểu thể loại: [[minuet-va-trio]].

Số ô trong bài đếm trên bản mã hoá Humdrum (ấn bản Durand 1915); ô lấy đà là ô 0.

## Hình thức toàn chương
::form Minuet:40 Trio:33 Minuet_da_capo:40 | Ba đoạn phức có trio (số dưới mỗi khối là số ô, chưa tính nhắc lại)
| Phần | Ô | Giọng | Hình thức |
|---|---|---|---|
| **Minuet** | 1 – 40 | Fa thứ | Ba đoạn đơn có nhắc lại: ‖: a :‖: b a′ :‖ |
| **Trio** | 41 – 73 | Fa trưởng | Ba đoạn đơn có nhắc lại |
| **Minuet da capo** | 1 – 40 | Fa thứ | Thường chơi không nhắc lại |

Tương phản giữa minuet và trio là tương phản **điệu thức** (Fa thứ – Fa trưởng, cùng âm chủ) và **cách cấu tạo**: minuet viết hợp âm, có những dấu lặng ngắt hơi; trio chạy móc đơn liền, legato. Đây là kiểu trio "thứ – trưởng cùng tên" rất thường gặp ở Beethoven.

## Minuet (ô 1 – 40)
| Ô | Phần | Nội dung |
|---|---|---|
| 0 – 14 | **a** | Đoạn nhạc chuyển giọng Fa thứ → La giáng trưởng (giọng song song) |
| 15 – 28 | **b** (đoạn giữa) | Mở bằng hợp âm bảy giảm, tiến hành chuyển hướng sang La giáng trưởng rồi Si giáng thứ (ô 15 – 18); dừng ở vùng Si giáng thứ với át Fa (ô 19 – 24); đường đi xuống dẫn về **Đô — át của Fa thứ** (ô 25 – 28) |
| 29 – 40 | **a′** (tái hiện) | Câu đầu trở lại cao hơn một quãng tám (ô 29 – 32); phần tiếp theo đổi để **kết ở Fa thứ** (ô 33 – 38); hai ô khép (ô 39 – 40) |

**Đoạn đầu là đoạn nhạc ba câu.** Sposobin dẫn đúng Menuet này khi nói rằng ba đoạn đơn cho phép đoạn đầu tự do hơn hai đoạn: có thể gặp "đoạn nhạc ba câu" [^sposobin-1984, §54, tr. 124 – 125]. Trên bản nhạc: câu một ô 1 – 4 (Fa thứ), câu hai ô 5 – 10 (đã sang La giáng trưởng), câu ba ô 11 – 14 — hai lần kết hai ô giống nhau (ô 11 – 12 = 13 – 14) khẳng định La giáng trưởng.

**Vì sao là ba đoạn chứ không phải hai đoạn có tái hiện?** Phần tái hiện (ô 29 – 40) dài 12 ô, gần bằng đoạn đầu (14 ô): nó nhắc lại **cả đoạn nhạc đầu** (có viết lại phần cuối) và kết trọn ở giọng chính, chứ không chỉ một câu. Theo tiêu chí Mazel nêu, như vậy là **ba đoạn đơn** (mục "Ba đoạn đơn" trong [[hinh-thuc-nga-hinh-thuc-don]]); các dấu nhắc lại ‖: a :‖: b a′ :‖ là cách viết truyền thống của minuet (mục "Lặp các phần").

**Tái hiện có thay đổi**: không lặp nguyên — câu đầu lên quãng tám, phần sau viết lại để không chuyển sang La giáng trưởng mà ở lại Fa thứ. Đây là thay đổi bắt buộc của mọi tái hiện khi đoạn đầu là đoạn nhạc chuyển giọng.

## Trio (ô 41 – 73)
| Ô | Phần | Nội dung |
|---|---|---|
| 41 – 50 | **a** | Fa trưởng; móc đơn liền ở tay phải (ô 41 – 44), chuỗi tiến lên (ô 45 – 48), kết ở **Đô trưởng** (ô 49 – 50) |
| 51 – 65 | **b** | Bass ngân trên Đô (ô 51 – 53); bè trầm đi lên theo âm giai Đô – Rê – Mi – Fa – Sol – La (ô 55 – 60), chuỗi hợp âm đi theo (tới ô 62); ba hợp âm rời dẫn về át bảy (ô 63 – 65) |
| 66 – 73 | **a′** | Bốn ô đầu trở lại nguyên vẹn (ô 66 – 69 = 41 – 44); bốn ô sau đổi để kết ở Fa trưởng |

Trio ngắn hơn và đơn giản hơn minuet — đúng điều Sposobin và Mazel nói về trio: tương phản bằng tính chất, nhưng cấu trúc thường gọn hơn phần một (xem mục "Đoạn giữa: trio và episode" trong [[hinh-thuc-nga-ba-phan-phuc]]).

## Cách nghe và tập
- Nghe ba lần: minuet, trio, minuet da capo — chú ý cảm giác **trở về** khi minuet bắt đầu lại sau trio.
- Đánh dấu ba câu của đoạn đầu (ô 1 – 4, 5 – 10, 11 – 14) trên bản nhạc; hát câu hai để thấy nó dài hơn câu một hai ô.
- Trong trio, giữ tiếng móc đơn đều và legato để tương phản rõ với minuet.

## Tóm tắt theo khung phân tích
| Yếu tố | Tóm tắt |
|---|---|
| **Hình thức** | Ba đoạn phức có trio; minuet và trio đều ba đoạn đơn có nhắc lại |
| **Hoà âm** | Minuet: Fa thứ → La giáng trưởng → Si giáng thứ → át → Fa thứ. Trio: Fa trưởng → Đô trưởng → át → Fa trưởng |
| **Tương phản** | Thứ – trưởng cùng tên; hợp âm ngắt – móc đơn liền |
| **Điều đáng nhớ** | Đoạn nhạc ba câu (ô 1 – 14); tái hiện viết lại để ở giọng chính |`,
  },
  {
    slug: 'phan-tich-bien-tau-op26',
    title: 'Phân tích: Beethoven, Sonata Op. 26, chương 1 (Andante con variazioni)',
    category: 'analysis',
    aliases: ['Biến tấu Op. 26', 'Sonata số 12 chương 1', 'Andante con variazioni', 'biến tấu nghiêm Beethoven'],
    summary: 'Chương 1 sonata La giáng trưởng Op. 26: chủ đề 34 ô và năm biến tấu cùng kích thước, rồi coda 15 ô — mẫu biến tấu nghiêm (trang trí) mà Sposobin phân tích từng biến tấu; biến tấu III ở La giáng thứ, biến tấu IV scherzando.',
    wiki: 'Piano_Sonata_No._12_(Beethoven)',
    refs: [kern('sonata12-1'), SPOSOBIN, MAZEL, ['Wikipedia — Piano Sonata No. 12 (Beethoven)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._12_(Beethoven)']],
    body: `## Tổng quan
Sonata **La giáng trưởng Op. 26** (in năm 1802 — theo Wikipedia) mở đầu bằng một chương **biến tấu** chứ không phải allegro sonata; chương 3 là hành khúc tang lễ (*Marcia funebre sulla morte d'un eroe*). Chương 1: **Andante con variazioni**, nhịp 3/8.

Sposobin chọn chương này làm mẫu **biến tấu nghiêm (trang trí)** "có giá trị nghệ thuật rất cao" và phân tích từng biến tấu [^sposobin-1984, §84, tr. 164]; tóm tắt phân tích ấy ở mục 7 của [[hinh-thuc-nga-bien-tau]]. Bài này đi theo số ô trên bản nhạc để bạn tự kiểm.

Số ô đếm trên bản mã hoá Humdrum (ấn bản Durand 1915); ô lấy đà là ô 0.

## Sơ đồ
::form Chủ_đề:34 I:34 II:34 III:34 IV:34 V:34 Coda:15 | Chủ đề, năm biến tấu và coda (số ô)
| Phần | Ô | Giọng | Ghi chú |
|---|---|---|---|
| Chủ đề | 1 – 34 | La giáng trưởng | Hai đoạn có tái hiện: 16 + 10 + 8 ô |
| Biến tấu I | 35 – 68 | La giáng trưởng | Hình hoá hoà âm, giai điệu dời phách |
| Biến tấu II | 69 – 102 | La giáng trưởng | Giai điệu xuống bè trầm, chuyển động móc kép |
| Biến tấu III | 103 – 136 | **La giáng thứ** (bảy dấu giáng) | *Minore*; đảo phách |
| Biến tấu IV | 137 – 170 | La giáng trưởng | Scherzando, staccato |
| Biến tấu V | 171 – 204 | La giáng trưởng | Giai điệu chủ đề ở trên, hình hoá |
| Coda | 205 – 219 | La giáng trưởng | Bass ngân trên Mi giáng rồi về chủ |

Mọi biến tấu giữ **đúng 34 ô** của chủ đề: đó là dấu hiệu rõ nhất của **biến tấu nghiêm** — giữ cấu trúc và kế hoạch hoà âm của chủ đề, chỉ đổi cách trình bày (xem mục 5 của [[hinh-thuc-nga-bien-tau]]).

## Chủ đề (ô 1 – 34)
| Ô | Phần | Nội dung |
|---|---|---|
| 0 – 8 | Câu một | Giai điệu bắt đầu từ Mi giáng (ô lấy đà), dừng ở át (ô 8) |
| 9 – 16 | Câu hai | Bắt đầu như câu một, kết trọn ở La giáng trưởng (ô 16) |
| 17 – 26 | Đoạn giữa | 10 ô; rời giọng chính, dừng trên át Mi giáng (ô 25 – 26) |
| 27 – 34 | Tái hiện | Câu hai trở lại, kết ở La giáng trưởng |

Sposobin gọi chủ đề là **hai đoạn có tái hiện** và ghi những nét làm nó "dễ biến tấu": nhiều đỉnh giai điệu là nốt dài, trình bày đầy đặn, âm vực thuận cho hát [^sposobin-1984, §84, tr. 164].

## Các biến tấu
Bảng dưới ghi điều Sposobin nhận xét [^sposobin-1984, §84, tr. 164] cạnh điều đọc được trên bản nhạc.

| Biến tấu | Sposobin | Trên bản nhạc |
|---|---|---|
| **I** | Giữ trọn nền hoà âm; âm giai điệu dời phách, đổi quãng tám, sang bè khác | Kế hoạch hoà âm giữ nguyên: ô 35 – 36 vẫn La giáng – Si giáng ở bè trầm như ô 1 – 2, ô 38 vẫn về Mi giáng như ô 4 |
| **II** | Giai điệu một phần ở bè trầm, rồi sang bè giữa; móc kép ở tay trái | Ô lấy đà và các ô đầu có bass rất trầm (Mi giáng 2) |
| **III** | *Minore*: thay đổi lớn nhất; giai điệu đi lên theo quãng hai, đảo phách; hoà âm đổi nhiều trừ bốn kết chính | Hoá biểu bảy dấu giáng (La giáng thứ) từ ô 103 |
| **IV** | Trở về trưởng; âm vực sáng, nhảy quãng tám, đệm staccato | Hoá biểu trở lại bốn dấu giáng |
| **V** | Đợt tăng chuyển động thứ hai; giai điệu chủ đề nằm trên và được hình hoá | Ô lấy đà đổi thành Đô – Fa – Mi giáng (chủ đề chỉ có một nốt Mi giáng) |
| **Coda** | 15 ô, gần tính chất chủ đề, gồm bốn phần bổ sung | Ô 205 – 219, bass Mi giáng kéo dài (ô 205 – 215) rồi kết ở chủ |

## Biến tấu nhìn ở tầm cả chương
Mazel nhận xét rằng logic tương phản giữa các biến tấu ở đây gợi logic của **chu kỳ sonata cổ điển**, và biến tấu III (thứ, bi thương) tương ứng với hành khúc tang lễ ở chương 3 của chính sonata này [^mazel-1979, ch. IX §4]. Nghe biến tấu III rồi nghe đầu chương 3 để so sánh.

Đường cong của chu kỳ: chủ đề bình thản → I, II tăng dần chuyển động → III tối, chậm lại về cảm giác → IV sáng, nhẹ → V tăng chuyển động lần nữa → coda yên lại. Đây là cách **gom nhóm** biến tấu mà mục 6 của [[hinh-thuc-nga-bien-tau]] mô tả.

## Cách nghe và tập
- Hát giai điệu chủ đề, rồi tìm nó trong từng biến tấu: ở bè nào, bị chia nhỏ ra sao.
- Đánh riêng bè trầm của chủ đề (ô 1 – 8) rồi bè trầm ô 35 – 42: các bậc chính và chỗ kết trùng nhau, chỉ cách đi quanh chúng đổi.
- So sánh biến tấu III với chủ đề ở bốn chỗ kết chính — chỗ duy nhất hoà âm không đổi.

## Tóm tắt theo khung phân tích
| Yếu tố | Tóm tắt |
|---|---|
| **Hình thức** | Chủ đề + 5 biến tấu nghiêm (mỗi phần 34 ô) + coda 15 ô |
| **Chủ đề** | Hai đoạn có tái hiện 16 + 10 + 8 ô |
| **Điệu tính** | La giáng trưởng; biến tấu III La giáng thứ |
| **Điều đáng nhớ** | Biến tấu nghiêm giữ cấu trúc; minore ở giữa chu kỳ; liên hệ với hành khúc tang lễ |`,
  },
  {
    slug: 'phan-tich-pathetique-chuong-3',
    title: 'Phân tích: Sonata "Pathétique" Op. 13, chương 3 (Rondo)',
    category: 'analysis',
    aliases: ['Pathétique chương 3', 'Rondo Pathétique', 'Op. 13 chương 3', 'rondo – sonata Beethoven', 'Sonata Bi tráng chương 3'],
    summary: 'Chương 3 (Rondo, Allegro, Đô thứ) của sonata Op. 13: rondo – sonata A – B – A – C – A – B – A + coda trong 210 ô. Phần phụ B ở Mi giáng trưởng khi trình bày, trở lại ở Đô trưởng; episode giữa ở La giáng trưởng với chủ đề mới; coda nhắc đầu chủ đề ở La giáng trưởng trước khi kết.',
    wiki: 'Piano_Sonata_No._8_(Beethoven)',
    refs: [kern('sonata08-3'), SPOSOBIN, ['Wikipedia — Piano Sonata No. 8 (Beethoven)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._8_(Beethoven)']],
    body: `## Tổng quan
Chương cuối sonata **Đô thứ Op. 13** (*Grande sonate pathétique*, in năm 1799 — theo Wikipedia): **Rondo, Allegro**, nhịp 2/2, dài **210 ô**. Chương 2 của cùng sonata là một rondo đơn: [[phan-tich-pathetique-chuong-2]]. Đặt hai chương cạnh nhau sẽ thấy rõ khác biệt giữa **rondo** và **rondo – sonata**.

Sposobin đưa chương này vào phụ lục phân tích của sách, dưới đề mục **"15. Rondo – sonata"**, với sơ đồ có chú thích [^sposobin-1984, tr. 380 – 383]. Bản OCR của phụ lục chỉ đọc được vài chú thích; những chỗ đọc được được dẫn bên dưới. Lý thuyết: [[hinh-thuc-nga-rondo-sonata]].

Số ô đếm trên bản mã hoá Humdrum (ấn bản Durand 1915); ô lấy đà là ô 0.

## Sơ đồ
::form A:17 nối:7 B:37 A:17 C:42 A:14 B:36 A:12 Coda:28 | Rondo – sonata (số ô)
| Ô | Phần | Giọng | Chức năng kiểu sonata |
|---|---|---|---|
| 0 – 17 | **A** — phần chính (refrain) | Đô thứ | Phần chính |
| 18 – 24 | Khâu nối | Đô thứ → Mi giáng trưởng | Phần nối |
| 25 – 61 | **B** | **Mi giáng trưởng** | Phần phụ + phần kết; ô 57 – 61 dẫn về át Sol |
| 62 – 78 | **A** | Đô thứ | Phần chính nhắc lại (dấu hiệu rondo) |
| 79 – 120 | **C** — episode giữa | **La giáng trưởng**; ô 107 – 120 trên bass Sol | Thay cho phần phát triển |
| 121 – 134 | **A** (rút gọn) | Đô thứ → chuẩn bị Đô trưởng | Phần chính trong tái hiện, tràn vào khâu nối |
| 135 – 170 | **B** | **Đô trưởng** | Phần phụ trong tái hiện, ở giọng chính (trưởng cùng tên) |
| 171 – 182 | **A** | Đô thứ | Lần thứ tư của phần chính |
| 182 – 210 | Coda | Đô thứ | Có nhắc đầu chủ đề ở La giáng trưởng (ô 203 – 206) |

**Vì sao là rondo – sonata?** Có đủ hai dấu hiệu [[hinh-thuc-nga-rondo-sonata|mà các sách Nga nêu]]: (1) phần chính trở lại **sau phần phụ, trước episode giữa** (ô 62) — điều rondo có mà sonata không có; (2) phần phụ B **trình bày ở giọng khác** (Mi giáng trưởng) và **trở lại ở giọng chính** trong tái hiện (Đô trưởng, ô 135) — quan hệ giọng của sonata. Sơ đồ đầy đủ: A B A – C – A B A, coda.

## Phần chính (ô 0 – 17)
Sposobin ghi phần chính là **"đoạn nhạc với câu hai nhắc lại"** [^sposobin-1984, tr. 380]. Trên bản nhạc: câu một ô 1 – 4, câu hai ô 5 – 8, câu hai nhắc lại ô 9 – 12 (giai điệu giống hệt, bass xuống quãng tám), rồi phần kết ô 12 – 17 khẳng định Đô thứ. Đầu chủ đề là ô lấy đà Sol – Đô – Rê dẫn vào Mi giáng — motif dễ nhận ra mỗi lần A trở lại.

## Khâu nối và phần phụ (ô 18 – 61)
- **Khâu nối (ô 18 – 24)**: chuỗi át bảy (Đô7 → Fa thứ, Si giáng 7) dẫn tới Mi giáng trưởng.
- **Phần phụ (ô 25 – 43)**: Mi giáng trưởng; chủ đề có bass Rê – Mi giáng luân phiên (ô 25 – 32), rồi một ý thứ hai nhảy nhót hơn (từ ô 37).
- **Kết (ô 44 – 56)**: các câu kết ở Mi giáng trưởng; ô 51 – 56 trên bass Mi giáng ngân.
- **Dẫn về A (ô 57 – 61)**: dừng trên **Sol — át của Đô thứ**, bass Sol ngân, chuẩn bị phần chính trở lại.

## Episode giữa (ô 79 – 120)
Thay vì phát triển chất liệu cũ, Beethoven viết **chủ đề mới**, legato, ở La giáng trưởng (bậc VI của Đô thứ): ô 79 – 86 trình bày, ô 87 – 94 trình bày lại cao hơn một quãng tám. Từ ô 99 là chuỗi đi xuống, rồi một đoạn dài **trên bass Sol** (ô 107 – 120) với hợp âm rải và âm giai — chuẩn bị phần chính.

Đối chiếu với mô tả của Sposobin về episode giữa của rondo – sonata [^sposobin-1984, §121, tr. 226]: vào **không chuyển tiếp** (ô 79 đổi giọng ngay sau A); ở **điệu tính phụ**, với rondo – sonata thứ thường là bậc VI hoặc cùng tên — ở đây bậc VI; giữa episode và tái hiện **gần như luôn có khâu nối** — ở đây là đoạn bass Sol ô 107 – 120. Khi phần giữa là phát triển thay vì episode, rondo – sonata gần sonata hơn (mục 6 của [[hinh-thuc-nga-rondo-sonata]]).

## Tái hiện (ô 121 – 182)
- **A rút gọn (ô 121 – 128)**: chỉ câu một và câu hai, không có câu hai nhắc lại; từ ô 128 chất liệu **chuyển thành khâu nối** đi tới át của Đô (ô 133 – 134). Một chú thích đọc được trong sơ đồ của Sposobin là "tái hiện chuyển thành khâu nối" [^sposobin-1984, tr. 383] — khớp với chỗ này.
- **B ở Đô trưởng (ô 135 – 158)**: phần phụ và ý thứ hai trở lại, chuyển về giọng chính trưởng.
- **Dẫn về A (ô 159 – 170)**: trở lại Đô thứ qua chuỗi hợp âm cromatic và hợp âm bảy giảm, dừng trên át (ô 170).
- **A (ô 171 – 182)**: câu một nguyên vẹn, câu sau đổi hướng và mở vào coda.

## Coda (ô 182 – 210)
- Ô 182 – 197: chuỗi kết; bè trầm xoay quanh Sol bằng La giáng và Fa thăng (ô 189 – 192), rồi luân phiên I – V (ô 193 – 197).
- Ô 198 – 202: hợp âm **Rê giáng trưởng** ([[hop-am-napoli|hợp âm Napoli]] của Đô thứ) rồi át.
- **Ô 203 – 206**: đầu chủ đề — Đô, Rê giáng, Si giáng, Đô — vang khẽ ở **La giáng trưởng**: lần duy nhất phần chính xuất hiện ngoài Đô thứ.
- Ô 207 – 210: [[hop-am-sau-tang|hợp âm sáu tăng]] (La giáng – Đô – Mi giáng – Fa thăng), át, rồi chạy xuống kết.

## Cách nghe và tập
- Nghe một lần, đánh dấu mỗi lần phần chính trở lại: bốn lần ở Đô thứ (từ ô 1, 62, 121, 171) và một lần đầu chủ đề ở La giáng trưởng trong coda.
- So sánh B ở ô 25 và ở ô 135: cùng chất liệu, khác giọng.
- Đặt cạnh chương 2: rondo A B A C A ở đó không có phần phụ trở lại ở giọng chính.

## Tóm tắt theo khung phân tích
| Yếu tố | Tóm tắt |
|---|---|
| **Hình thức** | Rondo – sonata A B A – C – A B A + coda, 210 ô |
| **Giọng** | A Đô thứ; B Mi giáng trưởng → Đô trưởng; C La giáng trưởng |
| **Episode giữa** | Chủ đề mới ở bậc VI thay cho phần phát triển; khâu nối trên bass Sol ngân dài |
| **Điều đáng nhớ** | A thứ ba rút gọn chuyển thành khâu nối; coda nhắc chủ đề ở La giáng trưởng, rồi hợp âm Napoli và sáu tăng |`,
  },
]

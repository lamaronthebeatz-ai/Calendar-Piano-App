import type { Article } from '../wiki'

export const rhythm: Article[] = [
  {
    slug: 'truong-do',
    title: 'Trường độ',
    category: 'rhythm',
    aliases: ['độ dài nốt', 'hình nốt', 'nốt tròn', 'nốt trắng', 'nốt đen', 'nốt móc đơn', 'nốt móc kép', 'note value'],
    summary: 'Độ dài của một nốt, thể hiện qua hình dạng nốt; mỗi hình nốt bằng một nửa hình nốt trước nó.',
    wiki: 'Note_value',
    body: `
Trường độ được tính bằng **phách**. Trong nhịp phổ biến 4/4 (xem [[so-chi-nhip]]), nốt đen = 1 phách:
| Hình nốt | Giá trị | Số phách (4/4) | Dấu lặng tương ứng |
|---|---|---|---|
| Nốt tròn | 1 | 4 | Lặng tròn |
| Nốt trắng | 1/2 | 2 | Lặng trắng |
| Nốt đen | 1/4 | 1 | Lặng đen |
| Nốt móc đơn | 1/8 | 1/2 | Lặng đơn |
| Nốt móc kép | 1/16 | 1/4 | Lặng kép |
| Nốt móc ba | 1/32 | 1/8 | Lặng ba |

::img Quarter notes and rest.svg | Nốt đen và dấu lặng đen
::img Eighth notes and rest.svg | Nốt móc đơn (riêng lẻ và nối gạch) cùng dấu lặng đơn

## Quy tắc chia đôi
1 nốt tròn = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn = 16 nốt móc kép. Muốn chia ba thay vì chia đôi, dùng [[lien-ba]].

## Gạch nối
Các nốt móc đơn trở xuống thường được **nối bằng gạch ngang** theo từng phách để dễ đọc — một gạch = móc đơn, hai gạch = móc kép.

Kéo dài trường độ: xem [[cham-doi-dau-noi]]. Im lặng: xem [[dau-lang]].
`,
  },
  {
    slug: 'dau-lang',
    title: 'Dấu lặng',
    category: 'rhythm',
    aliases: ['lặng', 'rest', 'lặng tròn', 'lặng trắng', 'lặng đen', 'lặng đơn'],
    summary: 'Ký hiệu cho khoảng im lặng; mỗi hình nốt có một dấu lặng cùng độ dài.',
    wiki: 'Rest_(music)',
    body: `
Im lặng cũng là một phần của nhịp điệu — dấu lặng phải được **đếm** chính xác như nốt.

::img Music rests.svg | Các dấu lặng từ dài đến ngắn

## Phân biệt lặng tròn và lặng trắng
- **Lặng tròn**: khối chữ nhật **treo dưới** dòng 4 (như cái mũ treo móc).
- **Lặng trắng**: khối chữ nhật **ngồi trên** dòng 3 (như cái mũ đội trên đầu).

Lặng tròn còn được dùng để chỉ **im lặng cả ô nhịp**, bất kể [[so-chi-nhip]] là gì (ví dụ cả ô 3/4).

Giá trị các dấu lặng: xem bảng trong [[truong-do]]. Dấu lặng cũng có thể có [[cham-doi-dau-noi|chấm dôi]].
`,
  },
  {
    slug: 'cham-doi-dau-noi',
    title: 'Chấm dôi và dấu nối',
    category: 'rhythm',
    aliases: ['chấm dôi', 'dấu nối', 'tie', 'dotted note', 'nốt chấm dôi', 'chấm dôi kép'],
    summary: 'Hai cách kéo dài trường độ: chấm dôi cộng thêm một nửa giá trị nốt; dấu nối gộp hai nốt cùng cao độ thành một.',
    wiki: 'Dotted_note',
    body: `
## Chấm dôi
Dấu chấm sau nốt làm nốt dài thêm **một nửa** giá trị của chính nó.
| Nốt | Phép tính | Tổng (4/4) |
|---|---|---|
| Nốt trắng chấm dôi | 2 + 1 | 3 phách |
| Nốt đen chấm dôi | 1 + ½ | 1½ phách |
| Nốt móc đơn chấm dôi | ½ + ¼ | ¾ phách |

**Chấm dôi kép** (hai chấm) cộng thêm ½ rồi ¼ giá trị: nốt đen chấm dôi kép = 1 + ½ + ¼ = 1¾ phách.

Hình tiết tấu "đen chấm dôi + móc đơn" (1½ + ½) rất phổ biến, tạo cảm giác nhún nhảy.

## Dấu nối
Dấu nối là đường cong nối **hai nốt cùng cao độ** — chỉ đánh nốt đầu và giữ luôn cho nốt sau. Dùng khi nốt kéo **qua vạch nhịp**, hoặc khi cần độ dài không viết được bằng một hình nốt.

::img Music-tie.svg | Dấu nối

Đừng nhầm với **dấu luyến** (slur) — đường cong nối các nốt **khác** cao độ, yêu cầu chơi liền tiếng (xem [[cach-dien-tau]]).

Xem thêm: [[truong-do]], [[dao-phach]].
`,
  },
  {
    slug: 'so-chi-nhip',
    title: 'Số chỉ nhịp',
    category: 'rhythm',
    aliases: ['nhịp', 'loại nhịp', 'time signature', 'ô nhịp', 'vạch nhịp', 'nhịp đơn', 'nhịp kép', 'phách mạnh', 'phách nhẹ', '4/4', '3/4', '2/4', '6/8'],
    summary: 'Hai con số ở đầu bản nhạc: số trên là số phách trong một ô nhịp, số dưới là hình nốt được tính làm một phách.',
    wiki: 'Time_signature',
    body: `
Bản nhạc được chia thành các **ô nhịp** bằng **vạch nhịp**. Số chỉ nhịp cho biết mỗi ô nhịp chứa bao nhiêu [[truong-do|trường độ]].
| Nhịp | Ý nghĩa | Phách mạnh – nhẹ | Gặp trong |
|---|---|---|---|
| 2/4 | 2 phách, nốt đen = 1 phách | M – n | Hành khúc, polka |
| 3/4 | 3 phách, nốt đen = 1 phách | M – n – n | Valse, minuet |
| 4/4 | 4 phách, nốt đen = 1 phách | M – n – m – n | Pop, rock, phần lớn nhạc |
| 2/2 | 2 phách, nốt trắng = 1 phách | M – n | Hành khúc nhanh |
| 6/8 | 6 nốt móc đơn, nhóm 3+3 | M – n – n – m – n – n | Barcarolle, ballad đung đưa |

(M = mạnh, m = mạnh vừa, n = nhẹ)

## Nhịp đơn và nhịp kép
- **Nhịp đơn** (2/4, 3/4, 4/4): mỗi phách **chia đôi**.
- **Nhịp kép** (6/8, 9/8, 12/8): mỗi phách là nốt đen chấm dôi, **chia ba**. 6/8 thực chất có **2 phách lớn**, không phải 6.

## Ký hiệu đặc biệt
::img Common time.svg | Chữ C — "common time", tương đương 4/4

Chữ C có gạch dọc là **alla breve** (cut time), tương đương 2/2.

## Nhịp lẻ
5/4, 7/8… ghép từ các nhóm 2 và 3 (ví dụ 7/8 = 2+2+3), thường gặp trong nhạc dân gian Balkan và jazz.

Xem thêm: [[nhip-do]], [[nhip-lay-da]], [[dao-phach]].
`,
  },
  {
    slug: 'nhip-do',
    title: 'Nhịp độ',
    category: 'rhythm',
    aliases: ['tempo', 'tốc độ', 'BPM', 'metronome', 'máy đếm nhịp', 'Allegro', 'Andante', 'Adagio', 'Largo', 'Presto', 'Moderato', 'ritardando', 'accelerando'],
    summary: 'Tốc độ của bản nhạc, đo bằng số phách mỗi phút (BPM) hoặc ghi bằng thuật ngữ tiếng Ý.',
    wiki: 'Tempo',
    body: `
Nhịp độ được ghi ở đầu bản nhạc, phía trên [[so-chi-nhip]]: bằng con số máy đếm nhịp (ví dụ ♩ = 120 nghĩa là 120 nốt đen mỗi phút) hoặc bằng thuật ngữ.

## Thuật ngữ nhịp độ (chậm → nhanh)
| Thuật ngữ | Nghĩa | BPM tham khảo |
|---|---|---|
| Grave | Trang nghiêm, rất chậm | 25–45 |
| Largo | Rộng rãi, chậm | 40–60 |
| Adagio | Chậm, thong thả | 55–75 |
| Andante | Đi bộ, vừa phải hơi chậm | 75–105 |
| Moderato | Vừa phải | 100–120 |
| Allegretto | Hơi nhanh | 100–128 |
| Allegro | Nhanh, vui tươi | 120–160 |
| Vivace | Sống động | 155–175 |
| Presto | Rất nhanh | 170–200 |
| Prestissimo | Nhanh nhất có thể | > 200 |

Khoảng BPM chỉ mang tính tham khảo; người biểu diễn quyết định dựa trên tính chất bản nhạc.

## Thay đổi nhịp độ
| Thuật ngữ | Viết tắt | Nghĩa |
|---|---|---|
| ritardando | rit. | Chậm dần |
| rallentando | rall. | Chậm dần |
| accelerando | accel. | Nhanh dần |
| a tempo | | Trở lại nhịp độ ban đầu |
| rubato | | Co giãn nhịp tự do để biểu cảm |
| fermata | 𝄐 | Ngân dài tuỳ ý (xem [[cach-dien-tau]]) |

Thuật ngữ về tính chất (dolce, cantabile…): xem [[thuat-ngu]].
`,
  },
  {
    slug: 'lien-ba',
    title: 'Liên ba',
    category: 'rhythm',
    aliases: ['chùm ba', 'triplet', 'tuplet', 'liên năm', 'liên sáu', 'liên hai', 'nhóm liên'],
    summary: 'Nhóm ba nốt chơi trong thời gian của hai nốt cùng loại — cách chia ba một phách trong nhịp đơn.',
    wiki: 'Tuplet',
    body: `
Trong nhịp đơn, phách bình thường chỉ chia đôi. Muốn chia ba, ta dùng **liên ba**: ba nốt viết kèm số **3**, chơi trong thời gian của hai nốt.

::img Music-triplet.svg | Liên ba móc đơn: 3 nốt trong thời gian 1 nốt đen

| Nhóm | Chơi trong thời gian của |
|---|---|
| Liên ba móc đơn | 1 nốt đen (2 móc đơn) |
| Liên ba nốt đen | 1 nốt trắng (2 nốt đen) |
| Liên năm móc kép | 1 nốt đen (4 móc kép) |
| Liên sáu móc kép | 1 nốt đen (4 móc kép) |
| Liên hai (trong nhịp kép) | 1 nốt đen chấm dôi (3 móc đơn) |

## Mẹo luyện
- Đếm "**1**-la-li **2**-la-li" cho liên ba, chia đều ba phần.
- Bài khó kinh điển cho piano: **3 chọi 2** (tay phải liên ba, tay trái hai nốt). Câu gợi nhớ: "nice cup of tea" — tay trái đánh ở "nice" và "of".

So sánh với [[so-chi-nhip|nhịp kép]], nơi phách vốn đã chia ba.
`,
  },
  {
    slug: 'dao-phach',
    title: 'Đảo phách',
    category: 'rhythm',
    aliases: ['nghịch phách', 'syncopation', 'syncope', 'nhấn lệch phách'],
    summary: 'Việc nhấn vào phách nhẹ hoặc phần nhẹ của phách, làm lệch trọng âm tự nhiên của nhịp.',
    wiki: 'Syncopation',
    body: `
Mỗi [[so-chi-nhip]] có quy luật phách mạnh – nhẹ. **Đảo phách** xảy ra khi trọng âm rơi vào chỗ lẽ ra nhẹ, tạo cảm giác bất ngờ, cuốn hút.

## Các cách tạo đảo phách
- **Nốt dài bắt đầu ở phách nhẹ**: ví dụ trong 4/4: móc đơn – đen – móc đơn (nốt đen rơi giữa phách).
- **[[cham-doi-dau-noi|Dấu nối]] qua phách mạnh**: nốt bắt đầu trước phách mạnh và ngân qua nó, nên phách mạnh không được đánh.
- **Dấu nhấn (>)** đặt trên phách nhẹ (xem [[cach-dien-tau]]).
- **[[dau-lang|Dấu lặng]] ở phách mạnh**.

Đảo phách là linh hồn của ragtime, jazz, Latin, funk và pop hiện đại.

Xem thêm: [[am-giai-blues]], [[blues-12-nhip]].
`,
  },
  {
    slug: 'nhip-lay-da',
    title: 'Nhịp lấy đà',
    category: 'rhythm',
    aliases: ['ô nhịp lấy đà', 'anacrusis', 'pickup', 'upbeat', 'nhịp thiếu'],
    summary: 'Một hoặc vài nốt đứng trước ô nhịp đầy đủ đầu tiên, dẫn vào phách mạnh.',
    wiki: 'Anacrusis',
    body: `
Nhiều giai điệu không bắt đầu ở phách mạnh mà bắt đầu bằng vài nốt "lấy đà". Ô nhịp chứa các nốt này là một **ô nhịp thiếu**.

## Quy tắc bù trừ
Theo truyền thống, **ô nhịp cuối** bài sẽ thiếu đúng phần mà ô lấy đà đã dùng, để tổng hai ô cộng lại bằng một ô đầy đủ. Ví dụ bài 3/4 có lấy đà 1 phách → ô cuối có 2 phách.

## Ví dụ quen thuộc
- "Happy Birthday" (3/4) bắt đầu bằng 2 nốt lấy đà "Hap-py".
- Quốc ca Mỹ "The Star-Spangled Banner" bắt đầu bằng hai nốt lấy đà "O-oh".
- "Für Elise" (Beethoven) bắt đầu bằng nốt lấy đà E5 – D♯5 trước ô nhịp đầu tiên.

Khi đếm, hãy đếm cả các phách còn thiếu trước nốt lấy đà để vào đúng nhịp. Xem thêm [[so-chi-nhip]], [[cau-nhac]].
`,
  },
]

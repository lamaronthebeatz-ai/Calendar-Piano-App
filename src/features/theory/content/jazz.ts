import type { Article } from '../wiki'

export const jazz: Article[] = [
  {
    slug: 'swing',
    title: 'Swing',
    category: 'jazz',
    aliases: ['nhịp swing', 'swing feel', 'shuffle', 'móc đơn swing', 'backbeat'],
    summary: 'Cách chơi các cặp móc đơn dài – ngắn (gần tỉ lệ liên ba 2:1) cùng trọng âm ở phách 2 và 4 — "nhịp đập" của jazz.',
    wiki: 'Swing_(jazz_performance_style)',
    body: `
Trong jazz, hai nốt móc đơn viết bằng nhau thường **không** được chơi bằng nhau: nốt đầu dài hơn, nốt sau ngắn hơn.

| Cách viết | Cách chơi (nhịp độ vừa) |
|---|---|
| Hai móc đơn ♫ | Như [[lien-ba]]: nốt đen + móc đơn trong một nhóm liên ba (2 : 1) |

Đầu bản nhạc thường ghi "**Swing**" hoặc "**Swung 8ths**" kèm công thức ♫ = ♩♪ (liên ba). Ngược lại, "**Straight 8ths**" nghĩa là chơi đều.

## Tỉ lệ thay đổi theo nhịp độ
- Chậm: swing đậm, gần 2 : 1 hoặc hơn.
- Nhanh: swing nhẹ dần, gần như đều.

## Trọng âm
- Trọng âm rơi vào **phách 2 và 4** (backbeat) — ngược với nhạc cổ điển nhấn phách 1 và 3 (xem [[so-chi-nhip]]).
- Nốt móc đơn rơi vào phần nhẹ của phách ("&") thường được nhấn, tạo [[dao-phach]].

**Shuffle** là swing với cảm giác liên ba rõ và nặng, thường gặp trong [[blues-12-nhip]].
`,
  },
  {
    slug: 'he-thong-hop-am-am-giai',
    title: 'Hệ thống hợp âm – âm giai',
    category: 'jazz',
    aliases: ['chord-scale', 'chord scale theory', 'âm giai cho hợp âm', 'altered scale', 'âm giai biến đổi', 'Lydian dominant', 'thứ giai điệu jazz', 'avoid note', 'nốt tránh'],
    summary: 'Cách nghĩ của jazz: mỗi hợp âm đi kèm một âm giai (thường là một điệu thức) để ngẫu hứng và chọn nốt mở rộng.',
    wiki: 'Chord-scale_system',
    body: `
Mỗi [[hop-am-bay|hợp âm 7]] được "phủ" bằng một âm giai 7 nốt chứa các nốt của hợp âm cùng các [[hop-am-mo-rong|nốt mở rộng]] 9, 11, 13.

## Trong vòng ii – V – I ở Đô trưởng
| Hợp âm | Âm giai | Ghi chú |
|---|---|---|
| Dm7 | D Dorian | Phím trắng từ D (xem [[dieu-thuc]]) |
| G7 | G Mixolydian | Phím trắng từ G |
| Cmaj7 | C Ionian hoặc C Lydian | F là **nốt tránh** trên Cmaj7; Lydian (F♯) tránh được điều đó |

## Âm giai cho hợp âm 7 át đặc biệt
| Hợp âm | Âm giai | Nguồn gốc | Nốt (gốc G) |
|---|---|---|---|
| G7♯11 | Lydian át | Bậc 4 của [[am-giai-thu|thứ giai điệu]] D | G A B C♯ D E F |
| G7alt (♭9 ♯9 ♯11 ♭13) | Âm giai biến đổi (altered) | Bậc 7 của thứ giai điệu A♭ | G A♭ B♭ B C♯ E♭ F |
| G7♭9 | Bát cung nửa – cung | Xem [[am-giai-bat-cung]] | G A♭ B♭ B C♯ D E F |

::keyboard G4 Ab4 Bb4 B4 C#5 Eb5 F5 | G altered: giữ 3 và 7 (B, F), mọi nốt khác đều biến hoá

## Các hợp âm còn lại
- m7♭5 → Locrian (hoặc Locrian ♮2).
- °7 → bát cung **cung – nửa cung**.

## Nốt tránh
Nốt cách một nốt hợp âm [[cung-nua-cung|nửa cung]] phía trên (như F trên Cmaj7 vì nghịch với E) — có thể lướt qua nhưng không nên ngân dài.

Các âm giai này là "bảng màu" cho [[xep-hop-am]] và [[tai-hoa-am]].
`,
  },
  {
    slug: 'thay-the-tritone',
    title: 'Thay thế tritone',
    category: 'jazz',
    aliases: ['tritone substitution', 'tritone sub', 'bII7', 'hợp âm thay thế', 'thay thế át'],
    summary: 'Thay hợp âm 7 át bằng hợp âm 7 át cách nó một tritone (G7 → D♭7); hai hợp âm chung cặp nốt 3 – 7 nên cùng chức năng.',
    wiki: 'Tritone_substitution',
    body: `
G7 = G – **B** – D – **F**. D♭7 = D♭ – **F** – A♭ – **C♭ (= B)**. Cả hai cùng chứa [[thuan-nghich|tritone]] B – F, chỉ đổi vai trò bậc 3 và bậc 7 (xem [[trung-am]]).

::keyboard G3 B3 D4 F4 | G7
::keyboard Db4 F4 Ab4 B4 | D♭7 — chung cặp B, F với G7

## Hiệu quả
ii – V – I: Dm7 – G7 – Cmaj7 → ii – ♭II7 – I: **Dm7 – D♭7 – Cmaj7**. Bè trầm đi xuống liền nửa cung D – D♭ – C, rất mượt.

## Liên hệ
- D♭7 có cấu trúc trùng âm với [[hop-am-sau-tang|hợp âm 6 Đức]] của Đô — hai truyền thống cổ điển và jazz gặp nhau.
- Có thể áp dụng cho mọi [[hop-am-at-phu|át phụ]]: E7 – A7 – D7 – G7 – C → E7 – E♭7 – D7 – D♭7 – C (bè trầm cromatic).
- Âm giai biến đổi của G7 chính là Lydian át của D♭7 (xem [[he-thong-hop-am-am-giai]]).

::img Tritone substitutions.png | Thay thế tritone (tương đương hợp âm 6 Ý)

Là một trong những kỹ thuật [[tai-hoa-am]] phổ biến nhất.
`,
  },
  {
    slug: 'xep-hop-am',
    title: 'Xếp hợp âm',
    category: 'jazz',
    aliases: ['voicing', 'cách xếp hợp âm', 'rootless voicing', 'shell voicing', 'drop 2', 'close voicing', 'open voicing', 'thế bấm hợp âm jazz'],
    summary: 'Cách chọn và sắp xếp các nốt của hợp âm trên bàn phím: xếp hẹp, xếp rộng, shell, rootless, drop 2…',
    wiki: 'Voicing_(music)',
    body: `
Cùng một hợp âm, cách xếp nốt khác nhau cho màu sắc rất khác nhau.

## Xếp hẹp và xếp rộng
- **Xếp hẹp** (close): các nốt nằm trong một [[quang|quãng 8]] — C – E – G – B.
- **Xếp rộng** (open): trải hơn một quãng 8 — C3 – G3 – E4 – B4, vang và thoáng.

## Shell voicing (tay trái)
Chỉ chơi **gốc + 3 + 7** (hoặc gốc + 7 + 3) — đủ để xác định tính chất hợp âm. Dm7: D – F – C; G7: G – F – B; Cmaj7: C – E – B.

## Rootless voicing (Bill Evans)
Bỏ nốt gốc (để bass chơi), thêm nốt mở rộng:
| Hợp âm | Dạng A (3 – 5 – 7 – 9) | Dạng B (7 – 9 – 3 – 5) |
|---|---|---|
| Dm9 | F – A – C – E | C – E – F – A |
| G13 | B – E – F – A (3 – 13 – 7 – 9) | F – A – B – E (7 – 9 – 3 – 13) |
| Cmaj9 | E – G – B – D | B – D – E – G |

::keyboard F4 A4 C5 E5 | Dm9 dạng A
::keyboard F4 A4 B4 E5 | G13 không gốc — chỉ một nốt (C → B) thay đổi so với hợp âm trước

Nối ii – V – I bằng xen kẽ dạng A và B, mỗi bè chỉ di chuyển tối đa một bậc — chính là [[dan-giong]] tốt.

## Drop 2
Lấy hợp âm xếp hẹp, hạ **nốt cao thứ hai** xuống một quãng 8: C – E – G – B → G – C – E – B. Rất phổ biến trong guitar và piano big band.

Âm giai chọn nốt mở rộng: [[he-thong-hop-am-am-giai]]. Xếp theo quãng 4: [[hoa-am-quang-bon]].
`,
  },
  {
    slug: 'hoa-am-quang-bon',
    title: 'Hoà âm quãng 4',
    category: 'jazz',
    aliases: ['quartal harmony', 'hợp âm quãng 4', 'quartal voicing', 'So What chord', 'hợp âm quãng 5', 'quintal'],
    summary: 'Hợp âm xây bằng các quãng 4 chồng lên nhau thay vì quãng 3 — âm thanh mở, lơ lửng của jazz modal và nhạc thế kỷ 20.',
    wiki: 'Quartal_and_quintal_harmony',
    body: `
Hoà âm truyền thống chồng [[quang|quãng 3]] ([[hop-am-ba]]). Hoà âm quãng 4 chồng **quãng 4 đúng**: D – G – C – F.

::keyboard D4 G4 C5 F5 | Hợp âm quãng 4 trên D

## Đặc điểm
- Không rõ trưởng hay thứ; không có lực kéo [[chuc-nang-hoa-am|chức năng]] mạnh → hợp với nhạc **điệu thức** ([[dieu-thuc]]).
- Có thể **dịch song song** theo các nốt của âm giai mà vẫn hợp — trong D Dorian: D–G–C, E–A–D, G–C–F, A–D–G…

## Hợp âm "So What"
Ba quãng 4 + một quãng 3 trưởng ở trên: **E – A – D – G – B**. Đặt tên theo bài "So What" (Miles Davis, album *Kind of Blue*, 1959), do Bill Evans chơi.

::keyboard E4 A4 D5 G5 B5 | Hợp âm So What (Em11 không gốc)

## Ứng dụng
- Jazz modal: McCoy Tyner, Herbie Hancock.
- Nhạc cổ điển thế kỷ 20: Scriabin (hợp âm "huyền bí"), Hindemith, Bartók (xem [[cac-thoi-ky]]).
- Đảo một chồng quãng 4 sẽ thành quãng 5 (**hoà âm quãng 5**, xem [[quang-dao]]).

Liên quan: [[xep-hop-am]], [[an-tuong]].
`,
  },
  {
    slug: 'tai-hoa-am',
    title: 'Tái hoà âm',
    category: 'jazz',
    aliases: ['reharmonization', 'reharm', 'đổi hợp âm', 'thay hợp âm', 'hợp âm thay thế diatonic'],
    summary: 'Thay đổi hợp âm dưới một giai điệu có sẵn để tạo màu sắc mới, mà giai điệu vẫn giữ nguyên.',
    wiki: 'Reharmonization',
    body: `
Nguyên tắc: nốt giai điệu ở chỗ quan trọng (phách mạnh, nốt dài) phải là nốt của hợp âm mới, hoặc một [[hop-am-mo-rong|nốt mở rộng]] hợp lý.

## Các kỹ thuật (từ nhẹ đến mạnh)
| Kỹ thuật | Ví dụ (trong Đô trưởng) | Bài liên quan |
|---|---|---|
| Thay bằng hợp âm cùng chức năng | C → Am hoặc Em; F → Dm | [[chuc-nang-hoa-am]] |
| Thêm nốt 7, 9, 13 | C → Cmaj9 | [[hop-am-mo-rong]] |
| Chèn ii – V trước hợp âm đích | … → Em7 – A7 → Dm | [[hop-am-at-phu]] |
| Thay thế tritone | G7 → D♭7 | [[thay-the-tritone]] |
| Mượn từ giọng cùng tên | F → Fm | [[hop-am-muon]] |
| Hợp âm 7 giảm lướt | C – C♯°7 – Dm7 | [[hop-am-bay-giam]] |
| Bass ngân | Mọi hợp âm trên G | [[bass-ngan]] |
| Trung âm cromatic | C → A♭maj7 | [[trung-am-cromatic]] |
| Bè trầm cromatic đi xuống | C – C/B – C/B♭ – A7 | [[dan-giong]] |

## Gợi ý luyện tập
1. Chọn một bài quen (ví dụ "Twinkle Twinkle Little Star") với vòng gốc I – IV – V.
2. Áp từng kỹ thuật một, chơi lại và nghe sự khác biệt.
3. Kết hợp với [[xep-hop-am]] để các hợp âm mới nối mượt.

Liên quan: [[vong-hop-am]], [[he-thong-hop-am-am-giai]].
`,
  },
  {
    slug: 'hinh-thuc-ca-khuc-32',
    title: 'Hình thức ca khúc 32 ô nhịp',
    category: 'jazz',
    aliases: ['AABA', '32-bar form', 'hình thức AABA', 'bridge', 'jazz standard', 'rhythm changes', 'Great American Songbook'],
    summary: 'Cấu trúc AABA, mỗi đoạn 8 ô nhịp — khuôn mẫu của ca khúc Broadway, Tin Pan Alley và phần lớn jazz standard.',
    wiki: 'Thirty-two-bar_form',
    body: `
| Đoạn | Số ô nhịp | Vai trò |
|---|---|---|
| A | 8 | Chủ đề chính, kết ở giọng chính |
| A | 8 | Nhắc lại (có thể đổi kết) |
| **B** (bridge) | 8 | Tương phản: giai điệu mới, thường [[chuyen-giong]] (hay sang giọng IV) |
| A | 8 | Quay lại chủ đề |

## Ví dụ
- "Over the Rainbow" (Harold Arlen, 1939).
- "I Got Rhythm" (Gershwin, 1930) — vòng hợp âm của nó ("**rhythm changes**") là nền cho hàng trăm bài bebop.
- "Blue Moon" (Rodgers & Hart, 1934).
- Biến thể **ABAC** (cũng 32 ô): "Fly Me to the Moon".

## Trong biểu diễn jazz
Một lượt chơi trọn 32 ô nhịp gọi là một **chorus**. Cấu trúc thường gặp: chơi giai điệu (head) → các nhạc công lần lượt ngẫu hứng nhiều chorus trên cùng vòng hợp âm → chơi lại head.

So sánh: [[blues-12-nhip]] (12 ô), [[hinh-thuc-am-nhac|hình thức phiên khúc – điệp khúc]] của pop, [[hinh-thuc-am-nhac|hình thức ba đoạn]] ABA trong nhạc cổ điển.
`,
  },
]

import type { Article } from '../wiki'

export const pitch: Article[] = [
  {
    slug: 'cung-nua-cung',
    title: 'Cung và nửa cung',
    category: 'pitch',
    aliases: ['cung', 'nửa cung', 'bán cung', 'whole step', 'half step', 'semitone', 'whole tone'],
    summary: 'Nửa cung là khoảng cách nhỏ nhất giữa hai phím liền nhau trên piano; một cung bằng hai nửa cung.',
    wiki: 'Semitone',
    body: `
Trên [[ban-phim]], đi từ một phím sang phím **liền kề** (trắng hoặc đen) là **nửa cung**. Bỏ qua một phím là **một cung**.

::keyboard E4 F4 B4 C5 | E–F và B–C: hai cặp phím trắng chỉ cách nửa cung

Vì không có phím đen giữa E–F và B–C, hai cặp này chỉ cách nửa cung; mọi cặp phím trắng liền nhau khác cách nhau một cung.

## Nửa cung dị và nửa cung đồng
- **Nửa cung dị** (diatonic): hai nốt khác tên — C–D♭, E–F.
- **Nửa cung đồng** (chromatic): hai nốt cùng tên — C–C♯.

Cung và nửa cung là đơn vị để đo [[quang]] và để xây dựng [[am-giai-truong]]. Một quãng 8 gồm 12 nửa cung bằng nhau (xem [[luat-binh-quan]]).
`,
  },
  {
    slug: 'quang',
    title: 'Quãng',
    category: 'pitch',
    aliases: ['quãng nhạc', 'interval', 'quãng 8', 'quãng tám', 'octave', 'quãng đúng', 'quãng trưởng', 'quãng thứ', 'quãng tăng', 'quãng giảm', 'tritone'],
    summary: 'Khoảng cách cao độ giữa hai nốt, gọi theo số bậc (2, 3, 4…) và tính chất (trưởng, thứ, đúng, tăng, giảm).',
    wiki: 'Interval_(music)',
    body: `
Quãng có hai phần: **số** — đếm số tên nốt từ nốt dưới đến nốt trên (C→E là C-D-E = **quãng 3**) — và **tính chất** — xác định bằng số [[cung-nua-cung|nửa cung]].
| Nửa cung | Quãng | Ví dụ từ C |
|---|---|---|
| 0 | Đồng âm | C–C |
| 1 | 2 thứ | C–D♭ |
| 2 | 2 trưởng | C–D |
| 3 | 3 thứ | C–E♭ |
| 4 | 3 trưởng | C–E |
| 5 | 4 đúng | C–F |
| 6 | 4 tăng / 5 giảm (tritone) | C–F♯ / C–G♭ |
| 7 | 5 đúng | C–G |
| 8 | 6 thứ | C–A♭ |
| 9 | 6 trưởng | C–A |
| 10 | 7 thứ | C–B♭ |
| 11 | 7 trưởng | C–B |
| 12 | 8 đúng (quãng 8) | C–C |

::keyboard C4 E4 | Quãng 3 trưởng C–E (4 nửa cung)
::staff treble C4+E4 C4+G4 C4+C5 | Quãng 3, quãng 5 và quãng 8 viết trên khuông

## Hai họ tính chất
- Quãng **1, 4, 5, 8**: đúng → (thêm nửa cung) tăng; (bớt nửa cung) giảm.
- Quãng **2, 3, 6, 7**: trưởng ↔ thứ; trưởng thêm nửa cung là tăng, thứ bớt nửa cung là giảm.

## Quãng giai điệu và quãng hoà âm
Hai nốt vang **lần lượt** là quãng giai điệu; vang **cùng lúc** là quãng hoà âm.

## Mẹo nhớ bằng bài hát
- Quãng 4 đúng đi lên: "Here Comes the Bride".
- Quãng 5 đúng đi lên: chủ đề "Star Wars".
- Quãng 8 đi lên: "Somewhere Over the Rainbow".

Liên quan: [[quang-dao]], [[thuan-nghich]], [[hop-am-ba]], [[vong-quang-nam]]. Đọc nốt bằng quãng: [[doc-not-nhanh]]. Chơi quãng 8 trên piano: [[ky-thuat-quang-tam]]. Cách đếm quãng bằng số nửa cung (0–11) là nền tảng của [[tap-hop-cao-do]].
`,
  },
  {
    slug: 'quang-dao',
    title: 'Đảo quãng',
    category: 'pitch',
    aliases: ['quãng đảo', 'interval inversion', 'đảo ngược quãng'],
    summary: 'Đưa nốt dưới của quãng lên một quãng 8 (hoặc ngược lại); số quãng cộng lại luôn bằng 9.',
    wiki: 'Inversion_(music)',
    body: `
Khi đảo [[quang]], nốt dưới chuyển lên trên một quãng 8 (C–E thành E–C).

## Hai quy tắc
- **Số quãng**: tổng luôn bằng **9** → 2 ↔ 7, 3 ↔ 6, 4 ↔ 5, 1 ↔ 8.
- **Tính chất**: trưởng ↔ thứ, tăng ↔ giảm, đúng giữ nguyên đúng.

| Quãng | Đảo thành |
|---|---|
| 3 trưởng (C–E) | 6 thứ (E–C) |
| 2 thứ (E–F) | 7 trưởng (F–E) |
| 4 đúng (C–F) | 5 đúng (F–C) |
| 4 tăng (C–F♯) | 5 giảm (F♯–C) |

::staff treble C4+E4 E4+C5 | 3 trưởng C–E đảo thành 6 thứ E–C

Mẹo: muốn biết quãng 6 thì đảo nó thành quãng 3 (dễ nhận hơn) rồi đổi tính chất. Đảo quãng cũng là nền tảng của [[the-dao-hop-am]].
`,
  },
  {
    slug: 'thuan-nghich',
    title: 'Quãng thuận và quãng nghịch',
    category: 'pitch',
    aliases: ['thuận âm', 'nghịch âm', 'consonance', 'dissonance', 'quãng thuận', 'quãng nghịch', 'giải quyết'],
    summary: 'Quãng thuận nghe êm, ổn định; quãng nghịch nghe căng, có xu hướng "giải quyết" về quãng thuận.',
    wiki: 'Consonance_and_dissonance',
    body: `
| Loại | Quãng | Cảm giác |
|---|---|---|
| Thuận hoàn toàn | Đồng âm, 8 đúng, 5 đúng | Rỗng, rất ổn định |
| Thuận không hoàn toàn | 3 và 6 (trưởng, thứ) | Êm, ấm |
| Thuận/nghịch tuỳ ngữ cảnh | 4 đúng | Thuận khi ở giữa, nghịch khi ở bè trầm |
| Nghịch | 2, 7, các quãng tăng/giảm (tritone) | Căng, cần đi tiếp |

## Giải quyết
Quãng nghịch tạo **sức căng** và thường đi tới quãng thuận gần nhất — gọi là **giải quyết**. Ví dụ: tritone B–F trong [[hop-am-bay|hợp âm G7]] giải quyết về C–E của hợp âm C.

Sự luân phiên căng – nghỉ này là động cơ của [[chuc-nang-hoa-am|hoà âm chức năng]] và [[dan-giong]]. Cơ sở vật lý của độ thuận: xem [[chuoi-boi-am]].
`,
  },
  {
    slug: 'trung-am',
    title: 'Trùng âm',
    category: 'pitch',
    aliases: ['enharmonic', 'đồng âm khác tên', 'trùng âm khác tên'],
    summary: 'Hai tên nốt khác nhau cho cùng một phím đàn, như C♯ và D♭.',
    wiki: 'Enharmonic_equivalence',
    body: `
Trên [[ban-phim]], mỗi phím đen có (ít nhất) hai tên: C♯ = D♭, F♯ = G♭… Ngay cả phím trắng cũng có tên trùng âm: E♯ = F, B♯ = C, F♭ = E.

::keyboard C#4 | Một phím: có thể gọi là C♯ hoặc D♭

## Vì sao phải chọn đúng tên?
Tên nốt phụ thuộc vào **chức năng**, không chỉ cao độ:
- Trong [[am-giai-truong|Rê trưởng]], nốt bậc 7 là **C♯**, không phải D♭ (mỗi tên chữ cái chỉ xuất hiện một lần).
- [[quang|Quãng]] C–D♯ là **2 tăng**, còn C–E♭ là **3 thứ** — cùng âm thanh, khác chức năng.

Trùng âm còn dùng để **chuyển giọng** bất ngờ (xem [[chuyen-giong]], [[hop-am-bay-giam]], [[hop-am-sau-tang]]) và giúp khép kín [[vong-quang-nam]] (F♯ trưởng = G♭ trưởng).
`,
  },
  {
    slug: 'chuoi-boi-am',
    title: 'Chuỗi bồi âm',
    category: 'pitch',
    aliases: ['bồi âm', 'âm bội', 'harmonic series', 'overtone', 'họa âm', 'âm sắc', 'timbre'],
    summary: 'Một nốt nhạc thực chất gồm âm gốc và nhiều âm phụ có tần số bằng bội số nguyên của âm gốc.',
    wiki: 'Harmonic_series_(music)',
    body: `
Khi gõ một phím đàn, dây đàn rung cả chiều dài **và** từng phần ½, ⅓, ¼… của nó, tạo ra các **bồi âm** có tần số gấp 2, 3, 4… lần âm gốc.

::img Music-harmonic.svg | Chuỗi bồi âm trên nốt C

| Bồi âm | Tần số | Quãng so với âm gốc C2 |
|---|---|---|
| 1 | f | C2 (âm gốc) |
| 2 | 2f | C3 — [[quang|quãng 8]] |
| 3 | 3f | G3 — quãng 8 + 5 đúng |
| 4 | 4f | C4 — 2 quãng 8 |
| 5 | 5f | E4 — 2 quãng 8 + 3 trưởng |
| 6 | 6f | G4 |

Các bồi âm 4–5–6 tạo thành [[hop-am-ba|hợp âm trưởng]] C–E–G — một lý do hợp âm trưởng nghe "tự nhiên". Tỉ lệ tần số càng đơn giản (2:1, 3:2) thì quãng càng [[thuan-nghich|thuận]].

## Âm sắc
Cường độ tương đối của các bồi âm quyết định **âm sắc** — lý do piano và violin chơi cùng nốt nhưng nghe khác nhau.
`,
  },
  {
    slug: 'luat-binh-quan',
    title: 'Luật bình quân',
    category: 'pitch',
    aliases: ['bình quân 12', 'equal temperament', 'A440', 'La 440', 'cao độ chuẩn', 'lên dây', 'tần số'],
    summary: 'Hệ thống lên dây chia quãng 8 thành 12 nửa cung bằng nhau; chuẩn hiện đại lấy A4 = 440 Hz.',
    wiki: 'Equal_temperament',
    body: `
## Cao độ chuẩn
Từ giữa thế kỷ 20, nốt **A4 = 440 Hz** được dùng làm chuẩn quốc tế (ISO 16). Mỗi [[quang|quãng 8]] lên cao thì tần số **gấp đôi**: A5 = 880 Hz, A3 = 220 Hz.

## Bình quân 12 nửa cung
Piano hiện đại được lên dây theo **luật bình quân**: quãng 8 chia thành 12 [[cung-nua-cung|nửa cung]] có tỉ lệ tần số bằng nhau (căn bậc 12 của 2 ≈ 1,0595).
- **Ưu điểm**: mọi giọng đều chơi được và nghe "đều nhau" → tự do [[chuyen-giong]], dùng [[trung-am]].
- **Đánh đổi**: các quãng (trừ quãng 8) đều lệch nhẹ so với tỉ lệ tự nhiên của [[chuoi-boi-am]]; quãng 3 trưởng hơi rộng.

## Lịch sử
Bối cảnh lịch sử: [[cac-thoi-ky]]. Lên dây và bảo quản đàn trong thực tế: [[bao-duong-piano]]. Trước đó, các hệ thống như **Pythagore** hay **bình quân bất đều** (well temperament) khiến mỗi giọng có màu sắc riêng. Bộ "Clavier bình quân" (Das Wohltemperierte Klavier) của [[Bach|J.S. Bach]] gồm 24 Prelude và Fugue ở đủ 24 giọng trưởng – thứ, chứng minh việc chơi được ở mọi giọng (xem [[fugue]]).
`,
  },
]

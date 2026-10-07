import type { Article } from '../wiki'

export const expression: Article[] = [
  {
    slug: 'cuong-do',
    title: 'Cường độ',
    category: 'expression',
    aliases: ['sắc thái', 'dynamics', 'to nhỏ', 'piano', 'forte', 'crescendo', 'diminuendo', 'decrescendo', 'pp', 'mf', 'ff', 'sforzando'],
    summary: 'Độ to nhỏ của âm thanh, ghi bằng ký hiệu tiếng Ý từ pp (rất nhỏ) đến ff (rất to).',
    wiki: 'Dynamics_(music)',
    body: `
| Ký hiệu | Tên | Nghĩa |
|---|---|---|
| ppp | pianississimo | Cực nhỏ |
| pp | pianissimo | Rất nhỏ |
| p | piano | Nhỏ |
| mp | mezzo piano | Hơi nhỏ |
| mf | mezzo forte | Hơi to |
| f | forte | To |
| ff | fortissimo | Rất to |
| fff | fortississimo | Cực to |

::img Music dynamic piano.svg | Ký hiệu p (piano — nhỏ)

Tên đầy đủ của cây đàn piano là **pianoforte** — "nhỏ – to", vì nó là nhạc cụ phím đầu tiên chơi được cả nhỏ lẫn to tuỳ lực ngón tay.

## Thay đổi cường độ
::img Crescendo-decrescendo.svg | "Dấu càng" crescendo (to dần) và decrescendo (nhỏ dần)

| Ký hiệu | Nghĩa |
|---|---|
| cresc. / < | To dần |
| dim. / decresc. / > | Nhỏ dần |
| sf, sfz (sforzando) | Nhấn mạnh đột ngột một nốt |
| fp (fortepiano) | To rồi lập tức nhỏ |
| subito p | Đột ngột nhỏ |

Cường độ là **tương đối**: f trong nhạc Mozart nhẹ hơn f trong nhạc Rachmaninoff. Kết hợp với [[cach-dien-tau]] và [[nhip-do]] để tạo biểu cảm.
`,
  },
  {
    slug: 'cach-dien-tau',
    title: 'Cách diễn tấu',
    category: 'expression',
    aliases: ['articulation', 'legato', 'staccato', 'tenuto', 'accent', 'dấu nhấn', 'dấu luyến', 'slur', 'fermata', 'dấu ngân', 'marcato', 'portato'],
    summary: 'Các ký hiệu cho biết cách đánh từng nốt: liền tiếng (legato), nảy (staccato), nhấn (accent), ngân (fermata)…',
    wiki: 'Articulation_(music)',
    body: `
| Ký hiệu | Tên | Cách chơi |
|---|---|---|
| Đường cong trên nhóm nốt | Legato (dấu luyến) | Liền tiếng, nốt này nối nốt kia không ngắt |
| Chấm trên/dưới nốt | Staccato | Ngắn, nảy — khoảng một nửa trường độ |
| Giọt nước ▼ | Staccatissimo | Rất ngắn, sắc |
| Gạch ngang – | Tenuto | Giữ đủ trường độ, hơi nhấn |
| Chấm + gạch | Portato | Hơi tách, mềm |
| > | Accent | Nhấn mạnh |
| ^ | Marcato | Nhấn rất mạnh |
| 𝄐 | Fermata | Ngân dài tuỳ ý, dừng lại |

::img Music-slur.svg | Dấu luyến (legato)
::img Music-staccato.svg | Staccato
::img Music-fermata.svg | Fermata (dấu ngân)

## Kỹ thuật trên piano
- **Legato**: chuyển trọng lượng từ ngón này sang ngón kia, nhấc ngón trước **đúng lúc** ngón sau đánh xuống. Không phụ thuộc vào [[ban-dap|pedal]].
- **Staccato**: nảy từ cổ tay (nhịp nhanh, nhẹ) hoặc từ ngón (rất nhanh).
- Cuối dấu luyến, nhấc tay nhẹ nhàng — như "thở" ở cuối [[cau-nhac]].

Đừng nhầm dấu luyến với [[cham-doi-dau-noi|dấu nối]] (nối hai nốt **cùng** cao độ).
`,
  },
  {
    slug: 'dau-nhac-lai',
    title: 'Dấu nhắc lại',
    category: 'expression',
    aliases: ['dấu hồi', 'repeat', 'da capo', 'D.C.', 'dal segno', 'D.S.', 'coda', 'fine', 'volta', 'khung 1 khung 2', 'segno', 'D.C. al Fine'],
    summary: 'Các ký hiệu điều hướng giúp viết gọn bản nhạc: vạch nhắc lại, khung 1–2, D.C., D.S., Coda, Fine.',
    wiki: 'Repeat_sign',
    body: `
::img Repeatsign.svg | Vạch nhắc lại

| Ký hiệu | Nghĩa |
|---|---|
| ‖: … :‖ | Chơi đoạn giữa hai vạch **hai lần** (nếu không có ‖: thì quay về đầu bài) |
| Khung 1, khung 2 (volta) | Lần 1 chơi khung 1 rồi quay lại; lần 2 bỏ khung 1, chơi khung 2 |
| **D.C.** (Da Capo) | Quay về **đầu** bài |
| **D.S.** (Dal Segno) | Quay về **dấu Segno** 𝄋 |
| **Fine** | Kết thúc tại đây (sau khi đã quay lại) |
| **al Coda** / To Coda 𝄌 | Đến dấu Coda thì nhảy xuống **đoạn Coda** ở cuối |

::img Coda sign.svg | Dấu Coda

## Đọc kết hợp
- **D.C. al Fine**: quay về đầu, chơi đến chữ Fine thì dừng.
- **D.S. al Coda**: quay về dấu Segno, chơi đến "To Coda", nhảy tới phần Coda.
- Theo quy ước, khi quay lại bằng D.C./D.S. thì **không lặp lại** các vạch nhắc lại lần nữa (trừ khi ghi "con repetizione").

Các dấu này phản ánh [[hinh-thuc-am-nhac]] của bài — ví dụ ABA thường viết bằng D.C. al Fine.
`,
  },
  {
    slug: 'ky-hieu-hoa-my',
    title: 'Hoa mỹ',
    category: 'expression',
    aliases: ['nốt hoa mỹ', 'ornament', 'láy', 'láy rền', 'trill', 'mordent', 'láy ngân', 'turn', 'nốt hoa mỹ ngắn', 'acciaccatura', 'grace note', 'láy đơn'],
    summary: 'Các ký hiệu trang trí giai điệu: láy rền (trill), láy đơn (mordent), láy kép (turn), nốt dựa và nốt vuốt.',
    wiki: 'Ornament_(music)',
    body: `
| Ký hiệu | Tên | Cách chơi (trên nốt C) |
|---|---|---|
| tr | Láy rền (trill) | Luân phiên nhanh C – D – C – D… (nhạc Baroque thường bắt đầu từ nốt trên: D – C – D – C…) |
| Răng cưa ngắn | Láy đơn trên (upper mordent) | C – D – C (nhanh) |
| Răng cưa có gạch | Láy đơn dưới (lower mordent) | C – B – C |
| ∽ | Láy kép (turn) | D – C – B – C |
| Nốt nhỏ có gạch chéo | Nốt vuốt (acciaccatura) | Lướt rất nhanh vào nốt chính |
| Nốt nhỏ không gạch | Nốt dựa (appoggiatura) | Chiếm một phần trường độ nốt chính, thường một nửa |

::img Upper.lower.mordent.notation.svg | Ký hiệu láy đơn trên và láy đơn dưới
::img Music-acciaccatura.svg | Nốt vuốt (acciaccatura)

Hoa mỹ dùng nốt trong [[am-giai-truong|âm giai]] hiện hành; nếu cần [[dau-hoa]] thì dấu được viết nhỏ trên/dưới ký hiệu.

## Theo phong cách
- **Baroque** (Bach, Handel): hoa mỹ rất nhiều, người chơi được phép tự thêm.
- **Cổ điển** (Mozart, Haydn): rõ ràng, thanh lịch.
- **Lãng mạn** (Chopin): hoa mỹ được viết ra thành chuỗi nốt nhỏ dài, chơi tự do ([[nhip-do|rubato]]).

Về bản chất, hoa mỹ là các [[not-ngoai-hop-am]] (nốt thêu, nốt dựa) được viết tắt. Phong cách từng thời kỳ: [[cac-thoi-ky]].
`,
  },
  {
    slug: 'ban-dap',
    title: 'Bàn đạp piano',
    category: 'expression',
    aliases: ['pedal', 'pê-đan', 'pedan', 'pedal vang', 'sustain pedal', 'una corda', 'sostenuto', 'pedal giảm âm', 'Ped.'],
    summary: 'Piano có ba pedal: phải (vang — giữ tiếng), trái (una corda — nhỏ và mềm), giữa (sostenuto — giữ tiếng chọn lọc).',
    wiki: 'Piano_pedals',
    body: `
::img Steinway grand piano - pedals.jpg | Ba pedal của đàn grand piano, từ trái sang phải: una corda, sostenuto, pedal vang

| Pedal | Vị trí | Tác dụng |
|---|---|---|
| **Pedal vang** (sustain, damper) | Phải | Nâng toàn bộ bộ giảm âm → các nốt tiếp tục vang sau khi nhấc tay |
| **Una corda** (soft) | Trái | Búa gõ ít dây hơn (grand) hoặc gần dây hơn (upright) → tiếng nhỏ, mềm |
| **Sostenuto** | Giữa | Chỉ giữ những nốt **đang được nhấn** khi đạp pedal (trên đàn upright, pedal giữa thường là pedal tập — giảm âm) |

## Ký hiệu
- **Ped.** … **✱**: đạp tại "Ped.", nhả tại dấu sao.
- Đường ngang có dấu móc ⌊___⋀___⌋: chữ V ngược là chỗ **thay pedal** (nhả rồi đạp lại ngay).
- **una corda** / **tre corde**: bật / tắt pedal trái.

## Pedal đổi hợp âm (pedal "nối")
Kỹ thuật cơ bản nhất: **đánh hợp âm mới → ngay sau đó nhả pedal → đạp lại**. Pedal đạp **sau** khi tay đánh (không phải cùng lúc) để tiếng của hợp âm cũ không lẫn vào hợp âm mới.

Quy tắc chung: đổi pedal mỗi khi đổi hợp âm (xem [[vong-hop-am]]). Pedal không thay thế cho legato của ngón tay (xem [[cach-dien-tau]]).
`,
  },
  {
    slug: 'ngon-bam',
    title: 'Ngón bấm',
    category: 'expression',
    aliases: ['số ngón', 'fingering', 'thế bấm', 'luồn ngón', 'vắt ngón', 'thế tay năm ngón'],
    summary: 'Hệ thống đánh số ngón tay 1–5 (ngón cái là 1) ghi trên bản nhạc, giúp chơi trôi chảy và ổn định.',
    wiki: 'Fingering_(music)',
    body: `
Cả hai tay: **1 = ngón cái, 2 = trỏ, 3 = giữa, 4 = áp út, 5 = út**.

## Thế tay năm ngón
Đặt 5 ngón lên 5 phím trắng liền nhau (ví dụ C – D – E – F – G) — thế tay đầu tiên cho người mới học.

## Âm giai một quãng 8 — Đô trưởng
| Tay | Đi lên (C → C) |
|---|---|
| Phải | 1 2 3 – **1** 2 3 4 5 (luồn ngón 1 dưới ngón 3 sang F) |
| Trái | 5 4 3 2 1 – **3** 2 1 (vắt ngón 3 qua ngón 1 sang A) |

::keyboard C4 D4 E4 F4 G4 A4 B4 C5 | Tay phải luồn ngón cái ở F

## Nguyên tắc chọn ngón
- Ngón cái và ngón út **hạn chế** đặt trên phím đen (trừ khi bắt buộc).
- Dùng **cùng một ngón bấm** mỗi lần tập — để "trí nhớ cơ bắp" hình thành.
- Ở các đoạn nhắc lại, ngón bấm giống nhau → dễ thuộc [[motif]] và [[cau-nhac]].
- Âm giai [[am-giai-cromatic|cromatic]]: ngón 3 trên phím đen.

Các nhóm phím đen 2–3 trên [[ban-phim]] quyết định nhiều lựa chọn ngón bấm cho âm giai có [[dau-hoa]].
`,
  },
  {
    slug: 'thuat-ngu',
    title: 'Thuật ngữ biểu cảm',
    category: 'expression',
    aliases: ['thuật ngữ tiếng Ý', 'thuật ngữ âm nhạc', 'dolce', 'cantabile', 'espressivo', 'con brio', 'agitato', 'maestoso', 'leggiero', 'sempre', 'poco', 'molto'],
    summary: 'Các thuật ngữ (chủ yếu tiếng Ý) mô tả tính chất, cảm xúc của âm nhạc, như dolce, cantabile, con brio.',
    wiki: 'Glossary_of_musical_terminology',
    body: `
## Tính chất
| Thuật ngữ | Nghĩa |
|---|---|
| dolce | Ngọt ngào, êm dịu |
| cantabile | Như hát |
| espressivo (espr.) | Biểu cảm |
| con brio | Sôi nổi, đầy sinh lực |
| con moto | Có chuyển động, hơi nhanh |
| agitato | Kích động, bồn chồn |
| maestoso | Hùng tráng, uy nghi |
| grazioso | Duyên dáng |
| leggiero | Nhẹ nhàng |
| scherzando | Đùa vui, tinh nghịch |
| tranquillo | Yên tĩnh |
| sostenuto | Giữ tiếng, đầy đặn |
| cantando | Hát lên |

## Từ bổ nghĩa
| Thuật ngữ | Nghĩa | Ví dụ |
|---|---|---|
| molto | Rất | molto espressivo |
| poco | Một chút | poco rit. |
| poco a poco | Dần dần | cresc. poco a poco |
| più | Hơn | più mosso (nhanh hơn) |
| meno | Ít hơn | meno mosso (chậm hơn) |
| sempre | Luôn luôn | sempre legato |
| subito | Đột ngột | subito p |
| non troppo | Không quá | Allegro ma non troppo |
| ma | Nhưng | |
| assai | Rất, khá | Allegro assai |

Thuật ngữ nhịp độ: xem [[nhip-do]]. Cường độ: xem [[cuong-do]]. Cách đánh: xem [[cach-dien-tau]]. Tên thể loại (nocturne, étude…): xem [[the-loai]].
`,
  },
]

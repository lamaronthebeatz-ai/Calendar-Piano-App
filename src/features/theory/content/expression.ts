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

Tên đầy đủ của cây đàn piano là **[[lich-su-piano|pianoforte]]** — "nhỏ – to", vì nó là nhạc cụ phím đầu tiên chơi được cả nhỏ lẫn to tuỳ lực ngón tay.

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

Đừng nhầm dấu luyến với [[cham-doi-dau-noi|dấu nối]] (nối hai nốt **cùng** cao độ). Tremolo, glissando, hợp âm rải có ký hiệu: [[ky-hieu-nang-cao]].
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
    refs: [
      ['Melanie Spanswick — Perfect pedalling', 'https://melaniespanswick.com/2015/05/19/perfect-pedalling/'],
      ['Yamaha — Piano pedagogy: pedaling', 'https://hub.yamaha.com/music-educators/instruments/piano/piano-pedagogy-pedaling'],
      ['Pianist Magazine — 5 top tips to help with pedalling', 'https://www.pianistmagazine.com/blogs/5-top-tips-to-help-with-pedalling/'],
    ],
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

## Các kỹ thuật pedal
| Kỹ thuật | Cách làm | Dùng khi |
|---|---|---|
| **Pedal liền tiếng** (legato, "pedal trễ") | Đạp **ngay sau** khi tay đánh hợp âm mới — nhả và đạp lại thật nhanh | Nối các hợp âm liền mạch; phổ biến nhất |
| **Pedal trực tiếp** | Đạp **cùng lúc** với tay, nhả **cùng lúc** khi nhấc tay | Hợp âm khối rõ ràng, vang; tạo nhấn nhịp |
| **Nửa pedal** | Chỉ đạp **một phần**: một số bộ giảm âm vẫn chạm dây | Giảm nhoè ở các nốt cao mà vẫn giữ nốt trầm |
| **Pedal rung** (flutter) | Nhấp pedal **rất nhanh, nhẹ** liên tục | Giảm tích tụ âm thanh; tạo màu lung linh trong nhạc ấn tượng |

**Độ sâu pedal là một dải**, không chỉ "lên" hay "xuống"; pedal una corda cũng dùng được ở các độ sâu khác nhau. Ký hiệu pedal trên bản nhạc **không bao giờ** cho biết chính xác đạp sâu bao nhiêu — người chơi phải nghe để điều chỉnh.

Nhiều giáo viên nhấn mạnh: **legato trước hết là việc của ngón tay**; pedal chủ yếu thêm màu sắc, độ vang, hoặc nối những chỗ ngón tay không nối được (như [[buoc-nhay-xa|bước nhảy xa]]).

## Pedal đổi hợp âm (pedal "nối")
Kỹ thuật cơ bản nhất: **đánh hợp âm mới → ngay sau đó nhả pedal → đạp lại**. Pedal đạp **sau** khi tay đánh (không phải cùng lúc) để tiếng của hợp âm cũ không lẫn vào hợp âm mới.

Pedal hoạt động bằng cách nâng bộ giảm âm — xem [[bo-may-piano]]. Quy tắc chung: đổi pedal mỗi khi đổi hợp âm (xem [[vong-hop-am]]). Pedal không thay thế cho legato của ngón tay (xem [[cach-dien-tau]]).
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

Ngón bấm đủ 12 âm giai trưởng: xem bảng trong [[luyen-am-giai]].

## Nguyên tắc chọn ngón
- Ngón cái và ngón út **hạn chế** đặt trên phím đen (trừ khi bắt buộc).
- Dùng **cùng một ngón bấm** mỗi lần tập — để "trí nhớ cơ bắp" hình thành.
- Ở các đoạn nhắc lại, ngón bấm giống nhau → dễ thuộc [[motif]] và [[cau-nhac]].
- Âm giai [[am-giai-cromatic|cromatic]]: ngón 3 trên phím đen.

Các nhóm phím đen 2–3 trên [[ban-phim]] quyết định nhiều lựa chọn ngón bấm cho âm giai có [[dau-hoa]]. Kỹ thuật luồn ngón chi tiết: [[luyen-am-giai]], [[luyen-hop-am-rai]]. Bài tập ngón (Hanon, Czerny): [[bai-tap-ngon]]. Tư thế tay đúng: [[tu-the]].
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

Bảng tra nhanh Anh – Việt – Ý: [[bang-thuat-ngu]]. Thuật ngữ nhịp độ: xem [[nhip-do]]. Cường độ: xem [[cuong-do]]. Cách đánh: xem [[cach-dien-tau]]. Tên thể loại (nocturne, étude…): xem [[the-loai]].
`,
  },
  {
    slug: 'ky-hieu-nang-cao',
    title: 'Ký hiệu piano nâng cao',
    category: 'expression',
    aliases: ['tremolo', 'glissando', 'hợp âm rải có ký hiệu', 'arpeggiato', 'đường lượn sóng', 'cross-staff', 'chơi chéo khuông', 'ký hiệu viết tắt'],
    summary: 'Tremolo (gạch chéo trên đuôi nốt), glissando (đường thẳng hoặc lượn sóng), hợp âm rải (đường lượn sóng dọc) và nốt chéo khuông.',
    wiki: 'Abbreviation_(music)',
    refs: [
      ['MuseScore Handbook — Arpeggios and glissandos', 'https://handbook.musescore.org/notation/expressive-markings/arpeggios-and-glissandos'],
      ['LilyPond — Tremolo repeats', 'https://lilypond.org/doc/v2.25/Documentation/notation/tremolo-repeats'],
      ['LilyPond — Common notation for keyboards', 'https://lilypond.org/doc/v2.25/Documentation/notation/common-notation-for-keyboards'],
    ],
    body: `
## Tremolo
Lặp lại rất nhanh. Trên piano thường là **luân phiên giữa hai nốt hoặc hai hợp âm** (quãng 8, hợp âm), vì lặp một nốt đơn nhanh khó hơn nhiều so với nhạc cụ dây.
- Số **gạch chéo** trên đuôi nốt cho biết cách chia nhỏ: mỗi gạch tương đương một gạch nối. Ví dụ nốt trắng có **một gạch** = chơi thành **4 nốt móc đơn** (xem [[truong-do]]).
- Tremolo có thể chia cho **hai tay**.

## Glissando
Đường **thẳng hoặc lượn sóng** nối hai nốt, kèm chữ "gliss.": trên piano là một lần **vuốt** nhanh qua các phím — thường trên phím trắng, đôi khi trên phím đen. Glissando có thể đi qua cả hai khuông.

## Hợp âm rải có ký hiệu (arpeggiato)
**Đường lượn sóng dọc** bên cạnh hợp âm: chơi các nốt **lần lượt thật nhanh**, thường từ dưới lên (có mũi tên xuống thì rải từ trên xuống). Một đường lượn sóng có thể trải qua **cả hai khuông** — khi đó hai tay rải liền một mạch. Khác với [[luyen-hop-am-rai|hợp âm rải]] viết ra thành nốt.

## Nốt chéo khuông
Nốt được viết trên khuông này nhưng chơi bằng tay thường đọc khuông kia — hay gặp khi giai điệu chuyển qua lại giữa hai tay. Tremolo và hợp âm rải hai tay cũng thường được viết chéo khuông (xem [[khuong-nhac|khuông nhạc đôi]]).

Lưu ý: phần lớn nguồn là hướng dẫn của phần mềm ký âm (MuseScore, LilyPond). Các ký hiệu cơ bản khác: [[cach-dien-tau]], [[ky-hieu-hoa-my]], [[dau-nhac-lai]], [[ky-hieu-quang-tam]].
`,
  },
  {
    slug: 'bang-thuat-ngu',
    title: 'Bảng thuật ngữ Anh – Việt – Ý',
    category: 'expression',
    aliases: ['thuật ngữ Anh Việt', 'glossary', 'từ điển âm nhạc', 'tra thuật ngữ', 'English Vietnamese music terms'],
    summary: 'Bảng tra nhanh các thuật ngữ thường gặp bằng tiếng Anh, tiếng Việt và tiếng Ý (hoặc ký hiệu), mỗi dòng dẫn tới bài viết chi tiết.',
    body: `
Mỗi thuật ngữ tiếng Việt là một liên kết tới bài giải thích.

## Ký âm và nhịp
| Tiếng Anh | Tiếng Việt | Ý / ký hiệu |
|---|---|---|
| Note | [[not-nhac|Nốt nhạc]] | nota |
| Staff (Stave) | [[khuong-nhac|Khuông nhạc]] | — |
| Clef (treble / bass) | [[khoa-nhac|Khoá nhạc]] (Sol / Fa) | 𝄞 / 𝄢 |
| Sharp / Flat / Natural | [[dau-hoa|Dấu thăng / giáng / bình]] | ♯ ♭ ♮ |
| Key signature | [[hoa-bieu|Hoá biểu]] | — |
| Time signature | [[so-chi-nhip|Số chỉ nhịp]] | 4/4, 3/4… |
| Bar (Measure) | Ô nhịp | — |
| Beat | Phách | — |
| Whole / Half / Quarter / Eighth note | [[truong-do|Nốt tròn / trắng / đen / móc đơn]] | — |
| Rest | [[dau-lang|Dấu lặng]] | — |
| Tie / Dotted note | [[cham-doi-dau-noi|Dấu nối / Chấm dôi]] | — |
| Triplet | [[lien-ba|Liên ba]] | 3 |
| Upbeat (Pickup) | [[nhip-lay-da|Nhịp lấy đà]] | anacrusi |

## Cao độ, âm giai, hoà âm
| Tiếng Anh | Tiếng Việt | Ý / ký hiệu |
|---|---|---|
| Semitone / Whole tone | [[cung-nua-cung|Nửa cung / Cung]] | — |
| Interval | [[quang|Quãng]] | — |
| Octave | Quãng 8 | 8va |
| Major / Minor scale | [[am-giai-truong|Âm giai trưởng]] / [[am-giai-thu|thứ]] | maggiore / minore |
| Scale degree (tonic, dominant…) | [[bac-am-giai|Bậc (chủ âm, át âm…)]] | — |
| Chord / Triad | [[hop-am-ba|Hợp âm / Hợp âm ba]] | accordo |
| Inversion | [[the-dao-hop-am|Thể đảo]] | — |
| Cadence | [[cau-ket|Kết]] | cadenza |
| Modulation | [[chuyen-giong|Chuyển giọng]] | — |
| Transposition | [[dich-giong|Dịch giọng]] | — |
| Arpeggio | [[luyen-hop-am-rai|Hợp âm rải]] | arpeggio |

## Diễn tấu
| Tiếng Anh | Tiếng Việt | Ý / ký hiệu |
|---|---|---|
| Tempo | [[nhip-do|Nhịp độ]] | Allegro, Andante, Adagio… |
| Slowing down / Speeding up | Chậm dần / Nhanh dần | ritardando / accelerando |
| Dynamics: soft / loud | [[cuong-do|Cường độ]]: nhỏ / to | piano (p) / forte (f) |
| Getting louder / softer | To dần / Nhỏ dần | crescendo / diminuendo |
| Smoothly connected | [[cach-dien-tau|Liền tiếng (dấu luyến)]] | legato |
| Short, detached | Ngắt tiếng, nảy | staccato |
| Hold (pause) | Ngân tuỳ ý | fermata 𝄐 |
| Ornament / Trill | [[ky-hieu-hoa-my|Hoa mỹ / Láy rền]] | tr |
| Repeat | [[dau-nhac-lai|Dấu nhắc lại]] | da capo, dal segno |
| Sustain pedal | [[ban-dap|Pedal vang]] | Ped. |
| Soft pedal | Pedal giảm âm | una corda |
| Fingering | [[ngon-bam|Ngón bấm]] | 1–5 |
| Sight-reading | [[thi-tau|Thị tấu]] | — |
| Phrasing | [[dien-dat-cau-nhac|Diễn đạt câu nhạc]] | — |
| With expression / Sweetly / Singing | [[thuat-ngu|Biểu cảm / Ngọt ngào / Như hát]] | espressivo / dolce / cantabile |
`,
  },
]

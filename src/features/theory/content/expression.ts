import type { Article } from '../wiki'

export const expression: Article[] = [
  {
    slug: 'dien-tau',
    title: 'Diễn tấu và biểu cảm: hệ thống và lộ trình',
    category: 'expression',
    aliases: ['diễn tấu', 'biểu cảm âm nhạc', 'lộ trình diễn tấu', 'ký hiệu diễn tấu', 'performance practice tổng quan'],
    summary: 'Bài tổng quan của mục: những gì bản nhạc ghi về cách chơi (sắc thái, cách đánh, nhịp độ, hoa mỹ, bàn đạp, ngón bấm), những gì không ghi (rubato, phong cách thời kỳ), và thứ tự học các bài.',
    wiki: 'Musical_expression',
    refs: [
      ['Wikipedia — Musical expression', 'https://en.wikipedia.org/wiki/Musical_expression'],
      ['Wikipedia — Historically informed performance', 'https://en.wikipedia.org/wiki/Historically_informed_performance'],
    ],
    body: `
Hai người chơi cùng một bản nhạc, cùng đúng nốt, vẫn có thể nghe khác hẳn nhau. Phần khác biệt đó — to nhỏ, dài ngắn, nhanh chậm, [[am-sac|màu âm]] — là **diễn tấu**. Một phần được nhà soạn nhạc **ghi lại** bằng ký hiệu và thuật ngữ; phần còn lại thuộc về **quy ước** của từng thời kỳ và **lựa chọn** của người chơi.

## Những gì bản nhạc ghi
| Thông tin | Bài |
|---|---|
| To – nhỏ | [[cuong-do]] |
| Cách đánh từng nốt (legato, staccato, nhấn…) | [[cach-dien-tau]] |
| Tốc độ | [[nhip-do]] |
| Trang trí | [[ky-hieu-hoa-my]] |
| Bàn đạp | [[ban-dap]] |
| Ngón bấm | [[ngon-bam]] |
| Nhắc lại, nhảy đoạn | [[dau-nhac-lai]] |
| Ký hiệu ít gặp | [[ky-hieu-nang-cao]], [[ky-hieu-quang-tam]] |
| Thuật ngữ | [[thuat-ngu]], [[bang-thuat-ngu]] |

## Những gì bản nhạc không ghi hết
- **Thời gian co giãn**: [[rubato]].
- **[[cau-nhac|Câu nhạc]]** — hơi thở, đỉnh câu, cân bằng bè: [[dien-dat-cau-nhac]], [[lam-noi-giai-dieu]].
- **Phong cách thời kỳ** — ví dụ hoa mỹ [[thoi-ky-baroque|Baroque]] bắt đầu từ nốt trên, pedal trong [[wolfgang-amadeus-mozart|Mozart]]: [[phong-cach-dien-tau]], [[tinh-xac-thuc-bieu-dien]].
- **Văn bản nào là "đúng"**: các ấn bản khác nhau ghi khác nhau — [[an-ban-urtext]].

## Lộ trình học
1. **Ký hiệu cơ bản**: [[cuong-do]] → [[cach-dien-tau]] → [[nhip-do]] → [[thuat-ngu]].
2. **Trên đàn**: [[ngon-bam]] → [[ban-dap]] → [[ky-hieu-hoa-my]].
3. **Đọc bản nhạc đầy đủ**: [[dau-nhac-lai]] → [[ky-hieu-nang-cao]] → [[bang-thuat-ngu]].
4. **Vượt qua ký hiệu**: [[rubato]] → [[dien-dat-cau-nhac]] → [[phong-cach-dien-tau]] → [[an-ban-urtext]].
5. **Hiểu để diễn**: [[phan-tich-va-bieu-dien]], [[so-sanh-ban-thu]].
`,
  },
  {
    slug: 'cuong-do',
    title: 'Cường độ',
    category: 'expression',
    aliases: ['sắc thái', 'dynamics', 'to nhỏ', 'piano', 'forte', 'crescendo', 'diminuendo', 'decrescendo', 'pp', 'mf', 'ff', 'sforzando'],
    summary: 'Độ to nhỏ của âm thanh, ghi bằng ký hiệu tiếng Ý từ pp (rất nhỏ) đến ff (rất to).',
    wiki: 'Dynamics_(music)',
    refs: [
      ['Pianist Magazine — 5 top tips for voicing (key speed and weight)', 'https://www.pianistmagazine.com/5-top-tips-for-voicing'],
      ['Elliott Sound Products — Frequency, amplitude & dB', 'https://www.sound-au.com/articles/fadb.htm'],
      ['Wikipedia — Dynamics (music)', 'https://en.wikipedia.org/wiki/Dynamics_(music)'],
      ['AllClassical — Gabrieli, Sonata pian\' e forte (1597)', 'https://research.allclassical.org/composer/gabrieli-giovanni/sacrae-symphoniae-no-6-sonata-pian-e-forte/'],
      ['Classic FM — Tchaikovsky\'s pppppp', 'https://classicfm.com/composers/tchaikovsky/music/pppppp-pathetique'],
      ['Bach Cantatas — Discussion: dynamics and "terraced dynamics"', 'https://bach-cantatas.com/Topics/Dynamics.htm'],
    ],
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

Tên đầy đủ của cây [[dan-piano|đàn piano]] là **[[lich-su-piano|pianoforte]]** — "nhỏ – to", vì nó là nhạc cụ phím đầu tiên chơi được cả nhỏ lẫn to tuỳ lực ngón tay.

## Thay đổi cường độ
::img Crescendo-decrescendo.svg | "Dấu càng" crescendo (to dần) và decrescendo (nhỏ dần)

| Ký hiệu | Nghĩa |
|---|---|
| cresc. / < | To dần |
| dim. / decresc. / > | Nhỏ dần |
| sf, sfz (sforzando) | Nhấn mạnh đột ngột một nốt |
| fp (fortepiano) | To rồi lập tức nhỏ |
| subito p | Đột ngột nhỏ |

## Lịch sử ký hiệu cường độ
- **[[hinh-thuc-sonata|Sonata]] pian' e forte** (1597) của [[giovanni-gabrieli|Giovanni Gabrieli]] là một trong những tác phẩm **đầu tiên** ghi cường độ vào bản nhạc: hai nhóm nhạc cụ luân phiên chơi *piano* và *forte*. Các nguồn không thống nhất đây có phải là bản **đầu tiên** hay không.
- **"Cường độ bậc thang"** (đổi đột ngột giữa nhỏ và to, không có to dần) thường được dạy là đặc trưng của [[thoi-ky-baroque|Baroque]], gắn với đàn [[dan-phim-co|harpsichord]] vốn chỉ đổi được to – nhỏ bằng cách đổi [[ban-phim|bàn phím]]. Tuy vậy, có học giả cho rằng quan niệm "chỉ có bậc thang" là một phong cách biểu diễn giữa [[thoi-ky-the-ky-20|thế kỷ 20]], vì các sách lý luận thế kỷ 17–18 vẫn khen ngợi sự **uốn cường độ từng nốt**. Vấn đề còn tranh cãi.
- Các nhà soạn nhạc về sau **mở rộng thang**: [[Tchaikovsky]] ghi **pppppp** (sáu chữ p) cho một câu bassoon trong [[the-loai|Giao hưởng]] số 6 "Pathétique" — thực tế gần như không thể chơi được, nên nhiều nhạc trưởng (từ Hans Richter) cho clarinet trầm thay thế mấy nốt đó.

## Khi giảng dạy
Cường độ **tương đối** theo phong cách và nhạc cụ: *f* của [[wolfgang-amadeus-mozart|Mozart]] (viết cho fortepiano tiếng nhẹ) không giống *f* của [[sergei-rachmaninoff|Rachmaninoff]]. Ký hiệu cho biết **tính chất và mối quan hệ** giữa các đoạn hơn là một mức decibel cố định.

## Tạo to nhỏ trên piano
- Độ to phụ thuộc vào **tốc độ búa gõ dây**, tức là tốc độ nhấn phím: nhấn **nhanh, chắc** → to; nhấn **chậm, nhẹ** → nhỏ (xem [[bo-may-piano]]). Đây cũng là cách làm nổi một nốt trong [[hop-am-ba|hợp âm]] ([[lam-noi-giai-dieu]]).
- Dùng **trọng lượng cánh tay** thay vì chỉ sức ngón để có tiếng to mà vẫn đẹp; giữ cổ tay mềm.
- Tai người cảm nhận độ to theo thang logarit: phải tăng khoảng **10 dB** mới nghe "to gấp đôi" (xem [[am-hoc-co-ban]]) — nên dải pp – ff cần được **phân bậc có chủ ý**.

## Gợi ý luyện cường độ
- Chơi cùng một câu ở **ba mức** p – mf – f, rồi ghi âm nghe lại để kiểm tra sự khác biệt có thật rõ không.
- Luyện crescendo/diminuendo đều trên một [[luyen-am-giai|âm giai]] đi lên – đi xuống.
- Phân biệt **cường độ** với **tốc độ**: học trò hay vô tình nhanh dần khi to dần (xem [[kiem-soat-toc-do]]).

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
    refs: [
      ['Wikipedia — Staccato', 'https://en.wikipedia.org/wiki/Staccato'],
      ['Henle — Mozart Piano Sonatas, preface (staccato dots and strokes)', 'https://www.henle.de/media/72/a5/00/1690886047/0002-1690886047-sync.pdf'],
      ['Wikipedia — Accent (music)', 'https://en.wikipedia.org/wiki/Accent_(music)'],
    ],
    body: `
| Ký hiệu | Tên | Cách chơi |
|---|---|---|
| Đường cong trên nhóm nốt | Legato (dấu luyến) | Liền tiếng, nốt này nối nốt kia không ngắt |
| Chấm trên/dưới nốt | Staccato | Ngắn, nảy — khoảng một nửa [[truong-do|trường độ]] |
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

## Staccato dài bao lâu?
"Khoảng một nửa trường độ" chỉ là **quy ước gần đúng** của thời hiện đại (phần mềm [[ky-am|ký âm]] cũng mặc định cắt 50%). Độ dài thực tế tuỳ **tốc độ, phong cách và ngữ cảnh**. Một nguồn đầu thế kỷ 19 (Moscheles, *Études* Op. 70) mô tả:
| Ký hiệu | Độ dài theo Moscheles |
|---|---|
| Chấm | Nửa sau của nốt thành **lặng** |
| Gạch / nêm | Ngắn hơn: khoảng **ba phần tư** nốt thành lặng |
| Chấm dưới dấu luyến (portato) | Khoảng **ba phần tư** trường độ; trong chương chậm gần như đủ giá trị |

## Chấm hay nêm trong nhạc Mozart?
Trong bản thảo, [[Mozart]] viết staccato khi là **chấm**, khi là **nêm**, nhưng **không nhất quán**. Trước khoảng năm 1850, chấm, gạch và nêm có lẽ được hiểu **gần như cùng nghĩa** (dù vài nhà lý luận thập niên 1750 phân biệt: nêm ngắn và sắc hơn). Nhà xuất bản Henle vì vậy thường **in một loại dấu** cho staccato của Mozart. Ngày nay, quy ước là chấm = staccato, nêm = staccatissimo (mạnh, ngắn hơn).

Bài học cho người dạy: đọc **lời tựa và phần bình chú** của ấn bản để biết biên tập viên xử lý ký hiệu thế nào — xem [[an-ban-urtext]].

Đừng nhầm dấu luyến với [[cham-doi-dau-noi|dấu nối]] (nối hai nốt **cùng** [[cao-do|cao độ]]). Tremolo, glissando, hợp âm rải có ký hiệu: [[ky-hieu-nang-cao]]. Cách tay tạo ra legato, staccato, portato: [[ky-thuat-cham-phim]].
`,
  },
  {
    slug: 'dau-nhac-lai',
    title: 'Dấu nhắc lại',
    category: 'expression',
    aliases: ['dấu hồi', 'repeat', 'da capo', 'D.C.', 'dal segno', 'D.S.', 'coda', 'fine', 'volta', 'khung 1 khung 2', 'segno', 'D.C. al Fine', 'repeat sign', 'dấu nhắc lại'],
    summary: 'Các ký hiệu điều hướng giúp viết gọn bản nhạc: vạch nhắc lại, khung 1–2, D.C., D.S., Coda, Fine.',
    wiki: 'Repeat_sign',
    refs: [
      ['Wikipedia — Da capo', 'https://en.wikipedia.org/wiki/Da_capo'],
      ['Cross-Eyed Pianist — To repeat or not to repeat? Thoughts on Schubert\'s D960', 'https://crosseyedpianist.com/2012/12/14/to-repeat-or-not-to-repeat-thoughts-on-schuberts-d960/'],
      ['Interlude — Second time around: repeats in Schubert\'s last piano sonata', 'https://interlude.hk/second-time-around-repeats-schuberts-last-piano-sonata/'],
      ['Pianist Magazine — Repeat signs in music', 'https://www.pianistmagazine.com/repeat-signs-in-music'],
      ['Metropolitan Opera — 10 essential musical terms (da capo aria)', 'https://www.metopera.org/link/6720ce5733ef43f6a416d4e6ff08d203.aspx'],
    ],
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

## Lần lặp lại không phải lần "photocopy"
- **Vũ khúc [[thoi-ky-baroque|Baroque]]** thường có dạng ‖: A :‖: B :‖. Người chơi được trông đợi **thêm hoa mỹ ở lần lặp thứ hai**; một số nhà soạn nhạc (như [[Byrd]]) còn viết sẵn lần lặp có trang trí. [[Bach]] dùng vạch nhắc lại trong nhiều chương [[the-loai|tổ khúc]] và mong người chơi trang trí khi lặp lại (xem [[ky-hieu-hoa-my]]).
- **[[opera|Aria da capo]]** (A – B – A): khi A quay lại, ca sĩ thường **[[ngau-hung-piano|ngẫu hứng]] thêm hoa mỹ**.

## Có nên chơi lại phần trình bày sonata?
Câu hỏi này vẫn **còn tranh cãi**, nhất là với các sonata lớn của [[Schubert]]:
- [[andras-schiff|András Schiff]] ví việc bỏ lặp như "**cắt cụt một chi**"; [[alfred-brendel|Alfred Brendel]] cho rằng dấu nhắc lại "**không phải mệnh lệnh** phải tuân theo máy móc" và việc bỏ có thể giúp tác phẩm mạch lạc hơn.
- Lặp lại giúp người nghe **nắm cấu trúc**, và ở một số tác phẩm, khung 1 dẫn đến **chỗ hoà âm khác** với khung 2.
- Việc bỏ lặp phổ biến dần từ **giữa – cuối thế kỷ 19**; các bản thu âm đầu tiên hay bỏ vì đĩa có thời lượng hạn chế.

Lời khuyên thực tế của tạp chí Pianist cho **thi cấp độ**: tập cả hai cách, và thường bỏ lặp khi thi vì giám khảo có ít thời gian — kiểm tra quy định của kỳ thi (xem [[thi-cap-do]]). Bối cảnh hình thức: [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'ky-hieu-hoa-my',
    title: 'Hoa mỹ',
    category: 'expression',
    also: ['improvisation'],
    aliases: ['nốt hoa mỹ', 'ornament', 'láy', 'láy rền', 'trill', 'mordent', 'láy ngân', 'turn', 'nốt hoa mỹ ngắn', 'acciaccatura', 'grace note', 'láy đơn'],
    summary: 'Các ký hiệu trang trí giai điệu: láy rền (trill), láy đơn (mordent), láy kép (turn), nốt dựa và nốt vuốt.',
    wiki: 'Ornament_(music)',
    refs: [
      ['C. P. E. Bach, Versuch (1753), English translation — On the trill', 'https://versuch.cpebach.org/v-html/part-I/chapter-2/section-3/I-2-3-p5.html'],
      ['Bach Cantatas — Discussion: the trill in Bach', 'https://bach-cantatas.com/Topics/Trill.htm'],
      ['Princeton University Press — Neumann, Ornamentation in Baroque and Post-Baroque Music (1978)', 'https://press.princeton.edu/isbn/9780691027074'],
      ['Oxford Academic — Haydn\'s keyboard music: studies in performance practice', 'https://academic.oup.com/book/49145/chapter/422059296'],
      ['Henle Blog — The riddle of a neighbouring trill tone in Chopin\'s Berceuse (with J. S. Bach\'s ornament table)', 'https://blog.henle.de/en/2015/04/27/about-the-difficulties-of-notating-ornamentation-%e2%80%93-the-riddle-of-a-neighbouring-trill-tone-in-chopin%e2%80%99s-berceuse/'],
    ],
    body: `
| Ký hiệu | Tên | Cách chơi (trên nốt C) |
|---|---|---|
| tr | Láy rền (trill) | Luân phiên nhanh C – D – C – D… (nhạc [[thoi-ky-baroque|Baroque]] thường bắt đầu từ nốt trên: D – C – D – C…) |
| Răng cưa ngắn | Láy đơn trên (upper mordent) | C – D – C (nhanh) |
| Răng cưa có gạch | Láy đơn dưới (lower mordent) | C – B – C |
| ∽ | Láy kép (turn) | D – C – B – C |
| Nốt nhỏ có gạch chéo | Nốt vuốt (acciaccatura) | Lướt rất nhanh vào nốt chính |
| Nốt nhỏ không gạch | Nốt dựa (appoggiatura) | Chiếm một phần [[truong-do|trường độ]] nốt chính, thường một nửa |

::img Upper.lower.mordent.notation.svg | Ký hiệu láy đơn trên và láy đơn dưới
::img Music-acciaccatura.svg | Nốt vuốt (acciaccatura)

Hoa mỹ dùng nốt trong [[am-giai-truong|âm giai]] hiện hành; nếu cần [[dau-hoa]] thì dấu được viết nhỏ trên/dưới ký hiệu.

## Láy rền bắt đầu từ nốt nào?
Đây là câu hỏi giáo viên gặp nhiều nhất khi dạy nhạc Baroque và Cổ điển.
- **[[carl-philipp-emanuel-bach|C. P. E. Bach]]**, trong cuốn *Versuch über die wahre Art das Clavier zu spielen* (Tiểu luận về cách chơi đàn phím đúng, **1753**), viết: láy rền thông thường **"luôn bắt đầu từ nốt cao hơn một bậc"** so với nốt chính. Các sách lý luận Bắc Đức thời đó **thống nhất** quan điểm này.
- **[[Bach|J. S. Bach]]** viết một **bảng hoa mỹ** (*Explication*) trong cuốn sổ đàn phím cho con trai Wilhelm Friedemann (khi đó 10 tuổi); láy rền trong bảng cũng bắt đầu từ nốt trên. Bảng này có lẽ chỉ là **trích ngắn** từ bảng hoa mỹ năm 1689 của d'Anglebert, và là hướng dẫn chung chứ không phải quy định cho mọi trường hợp.
- **Frederick Neumann** (1978) phản bác: những quy tắc cứng nhắc **không hợp với sự tự do** của nhạc sĩ thời đó, và bằng chứng cho cách hiểu phổ biến là chưa đủ. Quan điểm của ông cũng bị nhiều học giả phản đối.

Gợi ý thực tế: với nhạc Bắc Đức thời Baroque (Bach và các con), cách được các sách lý luận đương thời ủng hộ là **bắt đầu từ nốt trên**. Với các phong cách khác, khi phân vân hãy đọc **phần chú thích của ấn bản** — xem [[an-ban-urtext]] và [[phong-cach-dien-tau]].

Cách chơi láy rền: [[ky-thuat-lay-ren]].

## Theo phong cách
- **Baroque** (Bach, [[george-frideric-handel|Handel]]): hoa mỹ rất nhiều, người chơi được phép tự thêm.
- **Cổ điển** ([[wolfgang-amadeus-mozart|Mozart]], [[joseph-haydn|Haydn]]): rõ ràng, thanh lịch.
- **[[thoi-ky-lang-man|Lãng mạn]]** ([[frederic-chopin|Chopin]]): hoa mỹ được viết ra thành chuỗi nốt nhỏ dài, chơi tự do ([[rubato]]).

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
      ['Wikipedia — Piano pedals', 'https://en.wikipedia.org/wiki/Piano_pedals'],
      ['Piano Street — Inspired by Mozart\'s piano', 'https://www.pianostreet.com/blog/piano-news/inspired-by-mozarts-piano-12267/'],
      ['Practising the Piano — Pedalling problems and possibilities', 'https://practisingthepiano.com/pedalling-problems-possibilities/'],
      ['Pianist Magazine — How to play the first movement of Beethoven\'s Moonlight Sonata', 'https://pianistmagazine.com/learn-how-to-play-the-first-movement-of-beethovens-moonlight-sonata'],
      ['Illinois IDEALS — Interpretation of Chopin\'s pedal markings on modern pianos', 'https://www.ideals.illinois.edu/items/114051'],
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
| **Pedal liền tiếng** (legato, "pedal trễ") | Đạp **ngay sau** khi tay đánh [[hop-am-ba|hợp âm]] mới — nhả và đạp lại thật nhanh | Nối các hợp âm liền mạch; phổ biến nhất |
| **Pedal trực tiếp** | Đạp **cùng lúc** với tay, nhả **cùng lúc** khi nhấc tay | Hợp âm khối rõ ràng, vang; tạo nhấn nhịp |
| **Nửa pedal** | Chỉ đạp **một phần**: một số bộ giảm âm vẫn chạm dây | Giảm nhoè ở các nốt cao mà vẫn giữ nốt trầm |
| **Pedal rung** (flutter) | Nhấp pedal **rất nhanh, nhẹ** liên tục | Giảm tích tụ âm thanh; tạo màu lung linh trong nhạc ấn tượng |

**Độ sâu pedal là một dải**, không chỉ "lên" hay "xuống"; pedal una corda cũng dùng được ở các độ sâu khác nhau. Ký hiệu pedal trên bản nhạc **không bao giờ** cho biết chính xác đạp sâu bao nhiêu — người chơi phải nghe để điều chỉnh.

Nhiều giáo viên nhấn mạnh: **legato trước hết là việc của ngón tay**; pedal chủ yếu thêm màu sắc, độ vang, hoặc nối những chỗ ngón tay không nối được (như [[buoc-nhay-xa|bước nhảy xa]]).

## Lịch sử pedal
| Thời kỳ | Cơ chế |
|---|---|
| Thế kỷ 18 | Bộ nâng giảm âm điều khiển bằng **tay** (cần gạt), rồi bằng **đầu gối** (khoảng từ 1765 ở Đức). Đàn Walter thời [[Mozart]] có hai cần đầu gối: một nâng mọi bộ giảm âm, một chỉ nâng phần âm cao — dù có học giả nghi ngờ cần đầu gối được lắp sau khi Mozart mất |
| Cuối thế kỷ 18 – 19 | Chuyển dần sang **bàn đạp chân** |
| 1844 | Hãng Boisselot (Pháp) giới thiệu pedal giữ tiếng chọn lọc (**sostenuto**) |
| 1874–1876 | **Steinway** hoàn thiện, đăng ký bằng sáng chế và đưa sostenuto vào đàn grand. Châu Âu chậm hơn nhiều |

Mozart **không ghi ký hiệu pedal** nào trong bản nhạc, nên cách ông dùng pedal vẫn là ẩn số.

## Ký hiệu pedal của các nhà soạn nhạc lớn
- **[[Beethoven]] — "Ánh trăng" [[phan-tich-anh-trang-chuong-1|Op. 27 số 2]], chương 1**: ghi "*Si deve suonare tutto questo pezzo delicatissimamente e senza sordino*" — chơi cả chương thật nhẹ và **không có bộ giảm âm**, tức là **giữ pedal vang suốt chương**. Trên đàn của Beethoven tiếng tắt nhanh; trên đàn grand hiện đại, giữ suốt sẽ thành một khối âm ồn, nên phần lớn người chơi **đổi pedal theo hợp âm** để giữ tính chất mà không bị nhoè.
- **[[Chopin]]**: ký hiệu *Ped. … ✱* của ông **không nên đọc theo nghĩa đen**. Hệ ký hiệu này thuộc thời mà người ta thường đạp **cùng lúc** với tay, chưa phải pedal trễ. Ở nhiều chỗ Chopin chỉ ghi khi muốn một **pedal dài đặc biệt** (ví dụ giữ nốt bass trong hoà âm), còn pedal thông thường thì không cần ghi.
- **[[Debussy]]** gần như **không ghi pedal**. Ông được cho là đã nói: "Pedal không thể viết ra được: nó thay đổi theo từng cây đàn, từng căn phòng." Pedal của đàn thời ông cũng rất không đồng đều.

[[anton-rubinstein|Anton Rubinstein]] gọi pedal là "**linh hồn của cây [[dan-piano|đàn piano]]**" (câu này hay bị gán nhầm cho [[arthur-rubinstein|Arthur Rubinstein]]).

## Khi giảng dạy
Ký hiệu pedal chỉ là **điểm khởi đầu**: như lời Debussy, phải **nghe** để điều chỉnh theo cây đàn, căn phòng và tốc độ — và luôn kiểm tra bằng tai xem hoà âm có bị lẫn không.

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
    refs: [
      ['MTNA 2024 — Teaching the skill and artistry of piano fingering (B. Wristen, handout)', 'https://www.mtna.org/downloads/conference/handouts/2024/Teaching%20Skill%2C%20Artistry%20of%20Fingering_B.%20Wristen%20handout.docx'],
      ['Interlude — Fluent fingers', 'https://interlude.hk/fluent-fingers/'],
      ['Melanie Spanswick — Fruitful fingering, part 2', 'https://melaniespanswick.com/2019/01/12/fruitful-fingering-part-2/'],
      ['Fran\'s Piano Studio — Fingering schemes: help or hindrance?', 'https://franspianostudio.me/2020/03/08/fingering-schemes-help-or-hindrance/'],
      ['Wikipedia — Fingering (music)', 'https://en.wikipedia.org/wiki/Fingering_(music)'],
      ['Wikipedia — L\'art de toucher le clavecin', 'https://en.wikipedia.org/wiki/L%27art_de_toucher_le_clavecin'],
      ['C. P. E. Bach, Versuch (1753), English translation — On fingering', 'https://versuch.cpebach.org/v-html/part-I/chapter-1/I-1-p86.html'],
      ['Ross Duffin — on the legend of Bach and the thumb', 'https://casfaculty.case.edu/ross-duffin/?p=2281'],
      ['Merriam-Webster — English fingering', 'https://www.merriam-webster.com/dictionary/English%20fingering'],
    ],
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

Ngón bấm đủ 12 [[am-giai-truong|âm giai trưởng]]: xem bảng trong [[luyen-am-giai]].

## Nguyên tắc chọn ngón
- Ngón cái và ngón út **hạn chế** đặt trên phím đen (trừ khi bắt buộc).
- Dùng **cùng một ngón bấm** mỗi lần tập — để "trí nhớ cơ bắp" hình thành.
- Ở các đoạn nhắc lại, ngón bấm giống nhau → dễ thuộc [[motif]] và [[cau-nhac]].
- [[am-giai|Âm giai]] [[am-giai-cromatic|cromatic]]: ngón 3 trên phím đen.

## Thêm nguyên tắc từ giáo trình sư phạm
Một bài trình bày tại hội nghị MTNA 2024 tóm tắt:
- Quay về **thế tay nhỏ, tự nhiên nhất** càng thường càng tốt.
- **Không** vắt ngón số nhỏ qua ngón số lớn.
- **Ngón mạnh** (hoặc lực cánh tay) cho **[[so-chi-nhip|phách mạnh]]**.
- Khoảng cách [[quang]] phải **vừa với độ mở** giữa hai ngón.
- Ngón dài hợp với phím đen. **Cỡ bàn tay** cũng là một yếu tố.

Cố định ngón bấm giúp nhạc trôi và dễ thuộc. Đổi ngón giữa chừng (ví dụ từ 1–2 sang 2–1) trong đoạn nhanh là nguyên nhân hay gây vấp. Chỉ ghi lên bản nhạc **những số ngón cần thiết**: ghi quá nhiều, học sinh sẽ quen bỏ qua tất cả. Đôi khi một ngón bấm "kém hiệu quả" lại **biểu cảm hơn** — nhưng đó phải là lựa chọn có chủ ý.

## Bài tập theo cấp
| Cấp | Bài tập |
|---|---|
| 1 | Năm ngón **lần lượt, [[giai-dieu|liền bậc]]** trong thế tay năm ngón (C – D – E – F – G và ngược lại) |
| 2 | Vẫn thế tay đó nhưng **nhảy quãng 3** (C – E, D – F…) |
| 3 | [[luyen-am-giai|Âm giai]], [[luyen-hop-am-rai|hợp âm rải]] và [[hop-am-ba|hợp âm]] rời — thuộc các mẫu này thì ngón bấm của bản nhạc sẽ "tự nhiên" hơn |
| 4 | Với bài mới: **dành vài buổi đầu** tìm ngón bấm trước khi chơi, tự đề xuất rồi thử. Ghi vào bản nhạc và **giữ nguyên**; chỉ đổi khi có lý do, và đổi thì tập lại từ đầu |

Ngón bấm in sẵn không phải bất di bất dịch: nếu không hợp tay thì đổi — nhưng nên quyết định sớm. Thuộc ngón không thay được việc hiểu hoà âm của bài (xem [[hoc-thuoc-bai]]).

## Lịch sử ngón bấm
- **Trước thế kỷ 18**: âm giai thường được chơi bằng **các ngón dài vắt qua nhau** (ví dụ 3-4-3-4 hoặc 2-3-2-3), phân biệt ngón "mạnh" và "yếu"; **ngón cái ít được dùng**. Lối này bị lãng quên hơn hai thế kỷ, đến năm 1977 mới được Maria Boxall khôi phục cho đàn [[dan-phim-co|harpsichord]].
- **Khoảng 1700–1775**: chuyển dần sang dùng **đều cả năm ngón** với ngón cái giữ vai trò trung tâm.
  - **[[Couperin|François Couperin]]**, *L'art de toucher le clavecin* (1716; bản 1717 có thêm phần bổ sung): một nguồn chính về ngón bấm thời [[thoi-ky-baroque|Baroque]], có dùng ngón cái trong các đoạn điêu luyện.
  - **[[carl-philipp-emanuel-bach|C. P. E. Bach]]**, *Versuch* (1753): ngón út **ít khi** đặt lên phím đen, ngón cái **chỉ khi cần**; các ngón 2, 3, 4 vắt qua ngón cái; chỉ **đổi ngón trên một nốt** khi nốt đó khá dài.
- **Giai thoại "[[johann-sebastian-bach|Bach]] phát minh ra ngón cái"**: thường được kể, nhưng nhà nghiên cứu Ross Duffin cho là **huyền thoại** — nhạc Bach chắc chắn cần ngón cái, nhưng không có nghĩa Bach dùng ngón bấm như hiện đại.

## Hai cách đánh số
Thế kỷ 19 ở Anh dùng "**ngón bấm kiểu Anh**": ngón cái ghi bằng **dấu +** (hoặc 0), các ngón còn lại đánh số **1 đến 4**. Cách đánh số **1 – 5** gọi là "kiểu lục địa". Từ đầu [[thoi-ky-the-ky-20|thế kỷ 20]], Anh cũng chuyển sang 1 – 5, nay dùng ở mọi nơi. Khi dạy bằng **bản in cũ** (ví dụ một số bản *Études* của Cramer), cần lưu ý điều này kẻo học sinh đọc sai ngón.

Các nhóm phím đen 2–3 trên [[ban-phim]] quyết định nhiều lựa chọn ngón bấm cho âm giai có [[dau-hoa]]. Kỹ thuật luồn ngón chi tiết: [[luyen-am-giai]], [[luyen-hop-am-rai]]. Bài tập ngón (Hanon, [[carl-czerny|Czerny]]): [[bai-tap-ngon]]. Tư thế tay đúng: [[tu-the]].
`,
  },
  {
    slug: 'thuat-ngu',
    title: 'Thuật ngữ biểu cảm',
    category: 'expression',
    aliases: ['thuật ngữ tiếng Ý', 'thuật ngữ âm nhạc', 'dolce', 'cantabile', 'espressivo', 'con brio', 'agitato', 'maestoso', 'leggiero', 'sempre', 'poco', 'molto'],
    summary: 'Các thuật ngữ (chủ yếu tiếng Ý) mô tả tính chất, cảm xúc của âm nhạc, như dolce, cantabile, con brio.',
    wiki: 'Glossary_of_musical_terminology',
    refs: [
      ['Classic FM — Why do we use Italian words in music notation?', 'https://www.classicfm.com/discover-music/music-theory/why-italian-words-in-music-notation/'],
      ['Musical Geography — 17th-century music centers of Italy', 'https://musicalgeography.org/project/17th-century-music-centers-of-italy/'],
      ['Reverb — A basic guide to German markings in classical music', 'https://reverb.com/news/a-basic-guide-to-german-markings-in-classical-music'],
      ['Cambridge Companion to Debussy — Debussy and expression', 'https://www.cambridge.org/core/books/cambridge-companion-to-debussy/debussy-and-expression/C3EC36DB19B22B6BEA4F3A563E9C306C'],
    ],
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
| [[ban-dap|sostenuto]] | Giữ tiếng, đầy đặn |
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

## Vì sao lại là tiếng Ý?
Thời [[thoi-ky-baroque|Baroque]] (thế kỷ 17 – giữa thế kỷ 18), nhiều thể loại mới — **[[hinh-thuc-sonata|sonata]], [[hinh-thuc-concerto|concerto]], opera** — ra đời ở **Ý**, và nhạc sĩ Ý làm việc ở khắp các triều đình châu Âu (Dresden, Vienna, Munich, Warsaw…). Khi các nhà soạn nhạc bắt đầu ghi chỉ dẫn chi tiết như *andante*, *rallentando*, cả châu Âu dùng theo — và thói quen ấy còn đến nay.

## Không phải lúc nào cũng tiếng Ý
| Ngôn ngữ | Ví dụ | Ghi chú |
|---|---|---|
| **Đức** | *Lebhaft* (sôi nổi), *Langsam* (chậm), *Innig* (sâu lắng), *Mit Ausdruck* (biểu cảm) | [[Beethoven]] dùng tiếng Đức ở một số tác phẩm (như [[giao-huong|Giao hưởng]] "Đồng quê"); [[Mahler]] dùng nhiều, có khi trộn với tiếng Ý |
| **Pháp** | *Cédez* (chậm lại), *Retenu* (kìm lại), *Doux* (êm), *Très expressif* | [[Debussy]] ghi rất nhiều chỉ dẫn tiếng Pháp, mô tả cả **tính chất cảm xúc** của từng câu |
| **Anh** | *Slowly*, *With feeling* | Phổ biến trong nhạc hiện đại, [[nhac-pho|nhạc phổ]] thông |

Khi dạy, hãy cho học sinh tra nghĩa **mọi** chỉ dẫn trên bản nhạc trước khi tập — chúng là lời tác giả nói trực tiếp với người chơi.

Bảng tra nhanh Anh – Việt – Ý: [[bang-thuat-ngu]]. Thuật ngữ nhịp độ: xem [[nhip-do]]. Cường độ: xem [[cuong-do]]. Cách đánh: xem [[cach-dien-tau]]. Tên thể loại ([[tieu-pham-piano|nocturne]], étude…): xem [[the-loai]].
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
Lặp lại rất nhanh. Trên piano thường là **luân phiên giữa hai nốt hoặc hai [[hop-am-ba|hợp âm]]** ([[quang|quãng 8]], hợp âm), vì lặp một nốt đơn nhanh khó hơn nhiều so với nhạc cụ dây.
- Số **gạch chéo** trên đuôi nốt cho biết cách chia nhỏ: mỗi gạch tương đương một gạch nối. Ví dụ nốt trắng có **một gạch** = chơi thành **4 nốt móc đơn** (xem [[truong-do]]).
- Tremolo có thể chia cho **hai tay**.

## Glissando
Đường **thẳng hoặc lượn sóng** nối hai nốt, kèm chữ "gliss.": trên piano là một lần **vuốt** nhanh qua các phím — thường trên phím trắng, đôi khi trên phím đen. Glissando có thể đi qua cả hai khuông.

## Hợp âm rải có ký hiệu (arpeggiato)
**Đường lượn sóng dọc** bên cạnh hợp âm: chơi các nốt **lần lượt thật nhanh**, thường từ dưới lên (có mũi tên xuống thì rải từ trên xuống). Một đường lượn sóng có thể trải qua **cả hai khuông** — khi đó hai tay rải liền một mạch. Khác với [[luyen-hop-am-rai|hợp âm rải]] viết ra thành nốt.

## Nốt chéo khuông
Nốt được viết trên khuông này nhưng chơi bằng tay thường đọc khuông kia — hay gặp khi [[giai-dieu|giai điệu]] chuyển qua lại giữa hai tay. Tremolo và hợp âm rải hai tay cũng thường được viết chéo khuông (xem [[khuong-nhac|khuông nhạc đôi]]).

Lưu ý: phần lớn nguồn là hướng dẫn của phần mềm [[ky-am|ký âm]] (MuseScore, LilyPond). Các ký hiệu cơ bản khác: [[cach-dien-tau]], [[ky-hieu-hoa-my]], [[dau-nhac-lai]], [[ky-hieu-quang-tam]].

Cách chơi tremolo bằng xoay cẳng tay: [[tremolo-xoay-cang-tay]].
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
| Cadence | [[cau-ket|Kết]] | [[cadenza|cadenza]] |
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
  {
    slug: 'rubato',
    title: 'Rubato',
    category: 'expression',
    also: ['rhythm', 'technique'],
    aliases: ['tempo rubato', 'rubato', 'thời gian bị đánh cắp', 'stolen time', 'co giãn nhịp độ', 'thời gian biểu cảm', 'agogic', 'trọng âm trường độ', 'ritardando cuối bài', 'vòm câu nhạc'],
    summary: 'Sự co giãn thời gian có chủ ý khi biểu diễn. Có hai loại: rubato kiểu cũ (giai điệu xê dịch trên phần đệm đều — Mozart, Chopin) và rubato kiểu mới (cả nhịp độ co giãn). Lịch sử, nghiên cứu đo đạc bản thu và cách dạy.',
    wiki: 'Tempo_rubato',
    refs: [
      ['Hudson — Stolen Time: The History of Tempo Rubato (Oxford, Clarendon Press, 1994)', 'https://academic.oup.com/book/49267'],
      ['Hudson — Stolen Time, chapter on violin and keyboard sources', 'https://academic.oup.com/book/49267/chapter/422339966'],
      ['Wikipedia — Tempo rubato', 'https://en.wikipedia.org/wiki/Tempo_rubato'],
      ['Mozart — letter from Augsburg, October 1777 (German text, Projekt Gutenberg)', 'https://projekt-gutenberg.org/authors/wolfgang-amadeus-mozart/books/mozarts-briefe/chapter/27'],
      ['Research Catalogue — Ingredients that make the performance more flexible in early recordings (Leopold Mozart, C. P. E. Bach)', 'https://researchcatalogue.net/view/2388267/2587890'],
      ['Lawrence-King — Looking for a good time? (Tosi and rubamento di tempo)', 'https://andrewlawrenceking.com/category/history-of-emotions/moving-the-passions/page/2/'],
      ['Repp (1992), JASA — Diversity and commonality in music performance: Träumerei (abstract)', 'https://labs.sonicfield.org/library/diversity-and-commonality-in-music-performance-an-analysis-of-timing-microstruct'],
      ['Todd (1985), Music Perception — A model of expressive timing in tonal music (PDF)', 'https://www.continuum-hypothesis.com/music/todd.pdf'],
      ['Demos, Lisboa & Chaffin (2016), Frontiers in Psychology — Flexibility of expressive timing in repeated musical performances', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5047881/'],
      ['Friberg & Sundberg (1999), JASA — Does music performance allude to locomotion? (PDF)', 'https://continuum-hypothesis.com/music/Does_music_performance_allude_to_locomotion_A_mode.pdf'],
      ['Honing (2004) — on kinematic models of the final ritard', 'https://mcg.uva.nl/mcg-2023/abstracts/honing-2004a.html'],
      ["Rothstein (2005), Music Theory Online — Like falling off a log: rubato in Chopin's Prelude in A-flat major", 'https://www.mtosmt.org/issues/mto.05.11.1/mto.05.11.1.rothstein_essay.html'],
      ['Philip — Early Recordings and Musical Style, 1900–1950 (Cambridge, 1992), catalogue record', 'https://cageweb.be/catalog/orp01:000015042'],
    ],
    body: `
**Tempo rubato** (tiếng Ý: "thời gian bị đánh cắp") là sự **co giãn thời gian có chủ ý** khi biểu diễn: kéo dài chỗ này, rút ngắn chỗ kia so với [[kiem-soat-toc-do|nhịp đều]]. Rubato không phải là "chơi tự do theo cảm hứng" mà là một kỹ năng có lịch sử, có quy luật và có thể đo đạc.

## Hai loại rubato
Nhà âm nhạc học **Richard Hudson** (*Stolen Time: The History of Tempo Rubato*, Oxford, 1994) phân biệt:
| | Rubato kiểu cũ | Rubato kiểu mới |
|---|---|---|
| Cái gì co giãn? | Chỉ **[[giai-dieu|giai điệu]]**: các nốt được kéo, đẩy so với phách | **Toàn bộ** nhịp độ: cả giai điệu lẫn phần đệm |
| Phần đệm | Giữ **nhịp đều** | Co giãn theo |
| Thời kỳ tiêu biểu | Thế kỷ 17–18, còn trong Chopin | Thế kỷ 19 đến nay |
| Hình ảnh | Giai điệu "trôi" trên một nền nhịp vững | Cả câu nhạc "thở" nhanh – chậm |
Khi bàn về "rubato đúng phong cách", cần nói rõ đang nói về loại nào.

## Lịch sử
- **Thanh nhạc**: theo Hudson, thực hành này có trong ca hát từ lâu trước khi có tên. Khảo luận về ca hát của **Pier Francesco Tosi** (*Opinioni de' cantori antichi*, 1723) thường được coi là nơi sớm nhất nói tới việc "đánh cắp thời gian" (*rubamento di tempo*) — người hát xê dịch nốt giai điệu trong khi bè trầm giữ nhịp.
- **Đàn phím**: Quantz nhắc đến tempo rubato với người đệm đàn phím năm 1752; Marpurg đưa nó vào sách dạy đàn phím năm 1755–1756.
- **[[leopold-mozart|Leopold Mozart]]** cho rằng nghệ sĩ độc tấu thật sự được uốn giai điệu tự do, còn người đệm phải giữ nhịp đều và **không bị kéo theo**.
- **W. A. [[wolfgang-amadeus-mozart|Mozart]]**, trong thư gửi cha từ Augsburg (tháng 10/1777), kể rằng người nghe ở đó ngạc nhiên vì ông **luôn giữ đúng nhịp**; họ không hiểu được rằng trong một Adagio có tempo rubato, **tay trái vẫn đi đều**, trong khi ở Augsburg tay trái cứ chạy theo giai điệu. Đây là mô tả rõ nhất của rubato kiểu cũ trên đàn phím. Theo Hudson, [[joseph-haydn|Haydn]], Mozart và [[ludwig-van-beethoven|Beethoven]] đều **không viết chữ "rubato"** trong bản nhạc.
- **Chopin**: các học trò kể ông yêu cầu tay trái (phần đệm) **giữ nhịp chặt chẽ**, còn giai điệu được tự do co giãn (Georges Mathias, 1882, thuật lại lời bà Camille Dubois). Câu nói "tay trái là người chỉ huy" và hình ảnh của [[franz-liszt|Liszt]] về **gió lay lá trên một thân cây đứng vững** được lưu truyền rộng rãi nhưng chỉ qua nguồn thứ cấp — có thể dùng để minh hoạ, không nên trích như lời nguyên văn (xem [[Chopin]]).
- **Thế kỷ 19–20**: rubato kiểu mới — co giãn toàn bộ nhịp độ — trở thành phổ biến. Nghiên cứu bản thu đầu [[thoi-ky-the-ky-20|thế kỷ 20]] (Robert Philip, *Early Recordings and Musical Style*, 1992) cho thấy cách co giãn nhịp độ và xử lý [[tiet-tau|tiết tấu]] là một trong những lĩnh vực **thay đổi nhiều nhất** trong phong cách biểu diễn giai đoạn 1900–1950 (xem [[lich-su-thu-am]], [[phong-cach-dien-tau]]).

## Rubato đo được: nghiên cứu khoa học
**Repp (1992) — 28 bản thu Träumerei.** Bruno Repp đo khoảng cách giữa các nốt trong 28 bản thu [[phan-tich-traumerei|Träumerei]] của [[robert-schumann|Schumann]]:
- Nhịp độ **chậm lại rõ rệt ở cuối các phần lớn**, và các nốt nhấn trong những cử chỉ giai điệu thường được **kéo dài**.
- Ở tầng **lớn** (theo cấu trúc phần, câu), các nghệ sĩ **giống nhau**; khác biệt cá nhân nằm chủ yếu ở các đoạn **ngắn**. Nhạc càng nhiều ranh giới cấu trúc thì đường cong nhịp độ của các nghệ sĩ càng giống nhau.
- Hình dạng thời gian phổ biến nhất của một cử chỉ giai điệu lặp lại là **hình parabol** (chậm – nhanh – chậm).

**Hình vòm câu nhạc.** Mô hình của Neil Todd (1985) suy ra cách co giãn nhịp độ từ **cấu trúc nhóm** của âm nhạc: **chậm ở ranh giới câu, nhanh hơn ở giữa câu**. Một nghiên cứu năm 2016 (Demos, Lisboa và Chaffin) cũng thấy nhịp độ **chậm và kém ổn định ở đầu và cuối câu**, nhanh và ổn định hơn ở giữa (xem [[cau-nhac]], [[sieu-nhip]]).

**Chậm lại cuối bài.** Friberg và Sundberg (1999) so sánh **ritardando cuối bài** với cách người chạy (vũ công chuyên nghiệp) **dừng lại**: vận tốc trung bình khi dừng chạy khớp tốt với nhịp độ trung bình trong các ritardando cuối bài. Các mô hình "động học" này có giới hạn — chúng bỏ qua số nốt và cấu trúc tiết tấu (Honing, 2004).

**Rubato và phân tích.** William Rothstein (*Music Theory Online*, 2005), phân tích rubato trong [[the-loai|Prelude]] Op. 28 số 17 của Chopin, cho rằng một cách tiếp cận **có ý thức** với rubato là điều thiết yếu khi dạy "phân tích cho người biểu diễn" (xem [[phan-tich-va-bieu-dien]]).

## Bốn dạng rubato thường gặp
Tổng hợp từ các nghiên cứu trên:
| Dạng | Mô tả | Liên hệ |
|---|---|---|
| **Vòm câu nhạc** | Nhanh dần tới giữa câu, chậm lại ở cuối câu | Todd; [[dien-dat-cau-nhac]] |
| **Kéo dài nốt nhấn** (agogic) | Kéo dài nhẹ một nốt quan trọng thay vì đánh to hơn | Repp |
| **Chậm cuối phần, cuối bài** | Ritardando ở ranh giới cấu trúc lớn | Repp; Friberg – Sundberg |
| **Giai điệu tự do trên đệm đều** | Rubato kiểu cũ | Mozart, Chopin |

## Gợi ý dạy học
Các gợi ý sau là kinh nghiệm sư phạm, dựa trên các nguyên tắc ở trên:
1. **Chơi đúng nhịp trước** (có máy đếm nhịp): rubato chỉ có nghĩa khi người chơi có một nhịp gốc vững để "vay" và "trả".
2. **Tìm cấu trúc**: đánh dấu câu nhạc, đỉnh câu, các kết — rubato đi theo cấu trúc (xem [[phuong-phap-phan-tich-tac-pham]]).
3. **Luyện rubato kiểu cũ**: tay trái giữ nhịp đều với máy đếm nhịp, tay phải hát giai điệu xê dịch nhẹ quanh phách.
4. **So sánh bản thu**: nghe 2–3 nghệ sĩ chơi cùng đoạn và đánh dấu chỗ họ chậm lại (xem [[so-sanh-ban-thu]]).
5. **Tự thu âm và nghe lại**: rubato người chơi cảm thấy thường khác với rubato người nghe nghe thấy.
6. **Tránh công thức**: chậm lại ở **mọi** cuối câu như nhau làm bản nhạc rời rạc; mức độ nên phụ thuộc vào tầm quan trọng của ranh giới.

Liên quan: [[nhip-do]], [[ky-vong-am-nhac]], [[phan-tich-nocturne-op9-so2]], [[phong-cach-dien-tau]].
`,
  },
  {
    slug: 'phong-cach-dien-tau',
    title: 'Phong cách diễn tấu theo thời kỳ',
    category: 'expression',
    also: ['philosophy'],
    aliases: ['diễn tấu theo phong cách', 'historically informed performance', 'HIP', 'chơi Bach trên piano', 'chơi Mozart', 'phong cách Baroque', 'phong cách Cổ điển'],
    summary: 'Cùng một ký hiệu nhưng mỗi thời kỳ chơi khác nhau. Chơi nhạc Baroque, Cổ điển và Lãng mạn trên piano hiện đại đặt ra những câu hỏi về cường độ, nối – ngắt, pedal, hoa mỹ và rubato.',
    refs: [
      ['Ravinia — Bach to Bach: going for Baroque is an instrumental decision', 'https://backstage.ravinia.org/posts/2017/7/25/bach-to-bach-going-for-baroque-is-an-instrumental-decision.html'],
      ['University of Pretoria — Bach on the modern piano (dissertation)', 'https://repository.up.ac.za/handle/2263/53399'],
      ['Bera (2009), Musicology Papers — Mozart on the piano or on the fortepiano: plea for a compromise', 'https://www.musicologypapers.edituramediamusica.ro/images/Reviste/MP_24_02_Adriana_Bera.pdf'],
      ['City, University of London — Performing Classical-period music on the modern piano', 'https://openaccess.city.ac.uk/8485/1/Performing_Classical-period_music_on_the_modern_piano.pdf'],
      ['Encyclopedia.com — Rubato', 'https://encyclopedia.com/literature-and-arts/performing-arts/music-history/rubato'],
      ['Classical Music — Rubato: a guide to "robbed time"', 'https://www.classical-music.com/features/musical-terms/discovering-music-rubato/'],
    ],
    body: `
Ký hiệu trên bản nhạc **không tự giải thích hết**: cùng một dấu chấm staccato hay một chữ *[[ban-dap|Ped.]]* được hiểu khác nhau ở mỗi thời kỳ. Phong trào **[[dien-tau|diễn tấu]] theo hiểu biết lịch sử** (historically informed performance) — tranh luận sôi nổi từ giữa [[thoi-ky-the-ky-20|thế kỷ 20]] — tìm hiểu nhạc cụ, sách lý luận và thói quen của từng thời kỳ để đưa ra lựa chọn có cơ sở. Bối cảnh các thời kỳ: [[cac-thoi-ky]].

## Baroque: Bach trên piano hiện đại
- [[johann-sebastian-bach|Bach]] **không biết** đến piano hiện đại; nhạc đàn phím của ông viết cho [[dan-phim-co|harpsichord]], clavichord, organ.
- Hai phía tranh luận: phía "nhạc cụ cổ" chơi Bach trên harpsichord hoặc chơi trên piano theo lối "không piano"; phía còn lại cho rằng nếu biết piano hiện đại, Bach hẳn đã thích nó. Một lập luận thêm: chính Bach thường **chuyển soạn** tác phẩm của mình cho nhạc cụ khác, nên [[am-sac|âm sắc]] có lẽ không phải điều cốt yếu với ông.
- Piano mang lại **sắc thái cường độ**, nhiều màu âm và pedal — người chơi cần quyết định dùng chúng đến đâu.
- Các câu hỏi thực hành: cường độ (xem [[cuong-do]] — tranh luận "bậc thang"), [[ky-hieu-hoa-my|hoa mỹ]] (láy rền từ nốt trên), [[dau-nhac-lai|trang trí khi lặp lại]], [[choi-phuc-dieu|chơi phức điệu]].

## Cổ điển: Mozart – fortepiano và piano hiện đại
| | [[lich-su-piano|Fortepiano]] thời [[wolfgang-amadeus-mozart|Mozart]] | Piano hiện đại |
|---|---|---|
| Tiếng | Nhẹ hơn, **tắt nhanh** — tính chất "**nói**" | Dài, âm trầm vang hơn — tính chất "**hát**" |
| Pedal | Cần đầu gối, tác dụng **yếu hơn nhiều** | Pedal rất mạnh — thường chỉ dùng **nửa pedal** hoặc đổi nhiều hơn |
| [[cao-do|Cao độ]] | Phổ biến khoảng **A = 430 Hz** | Thường 440–445 Hz (xem [[luat-binh-quan]]) |

Hệ quả: những chỗ Mozart viết **ngắt, tách** khó tạo hiệu quả trên piano hiện đại vì tiếng ngân dài. Có hai hướng: một "trường phái hiện đại" chấp nhận chơi dài, hát hơn; phía khác (gắn với Paul Badura-Skoda, Malcolm Bilson) cho rằng đổi cách diễn tấu gốc làm mất **tính chất hùng biện** mà các nhà soạn nhạc Cổ điển theo đuổi. Xem [[cach-dien-tau]] về chấm và nêm staccato.

## Lãng mạn: rubato của Chopin
- Theo lời kể của học trò (công bố năm 1882), [[Chopin]] muốn **tay trái** (phần đệm) giữ **nhịp chặt chẽ**, còn **[[giai-dieu|giai điệu]]** được tự do nhanh – chậm. Có lúc hai tay "lệch pha", rồi bù lại để gặp nhau.
- [[leopold-mozart|Leopold Mozart]], cha của Mozart, cũng đã nói phần đệm nên **giữ đúng nhịp** — nghĩa là ý tưởng này có từ trước Chopin.
- Ở thời Chopin, [[rubato|rubato]] giống "thời gian **bị lệch**" hơn là "thời gian **bị đánh cắp**" rồi trả lại. "Tay trái [[kiem-soat-toc-do|giữ nhịp]]" dựa trên lời kể của học trò, **không phải** chỉ dẫn do Chopin tự viết.
- Lý thuyết rubato: [[nhip-do]]; nghiên cứu về cách người biểu diễn uốn câu: [[dien-dat-cau-nhac]].

## Ý nghĩa với người dạy
Không có một "cách đúng duy nhất". Mục tiêu là giúp học sinh **biết các lựa chọn và lý do** của chúng — đọc ký hiệu trong bối cảnh thời kỳ, [[so-sanh-ban-thu|nghe nhiều bản thu]] khác nhau (xem [[nghe-nhac-chu-dong]]), và dùng ấn bản đáng tin cậy (xem [[an-ban-urtext]]).

Tranh luận triết học về "biểu diễn xác thực" ([[bieu-hien-cam-xuc-am-nhac|Kivy]], Taruskin): [[tinh-xac-thuc-bieu-dien]].
`,
  },
  {
    slug: 'an-ban-urtext',
    title: 'Ấn bản nhạc và Urtext',
    category: 'expression',
    aliases: ['Urtext', 'ấn bản', 'chọn ấn bản', 'edition', 'Henle', 'Bärenreiter', 'Wiener Urtext', 'ấn bản biên tập', 'ấn bản hướng dẫn'],
    summary: 'Ấn bản Urtext cố gắng tái hiện đúng ý tác giả từ các nguồn gốc; ấn bản hướng dẫn thêm ngón bấm, cường độ, pedal của người biên tập. Biết khác biệt giúp giáo viên chọn đúng sách cho học sinh.',
    refs: [
      ['Wikipedia — Urtext edition', 'https://en.wikipedia.org/wiki/Urtext_edition'],
      ['Wikipedia — G. Henle Verlag', 'https://en.wikipedia.org/wiki/G._Henle_Verlag'],
      ['Practising the Piano — On editions', 'https://practisingthepiano.com/on-editions/'],
      ['University of Minnesota Libraries — Types of scores', 'https://libguides.umn.edu/types-of-scores-and-how-to-find-them/putting-it-all-together'],
      ['Norwegian Academy of Music — Jan Gunnar Sorbo, PhD on Bülow\'s edition', 'https://nmh.no/en/research/projects/jan-gunnar-sorbo-completed-phd'],
      ['Classics Today — The plain truth about Urtext', 'https://www.classicstoday.com/?p=41470'],
    ],
    body: `
## Urtext là gì?
**Urtext** (tiếng Đức: "văn bản gốc") là ấn bản cố gắng tái hiện **đúng ý định của nhà soạn nhạc**, không thêm bớt. Biên tập viên đối chiếu mọi nguồn: **bản thảo tay** của tác giả, bản chép của học trò, trợ lý, và các **bản in đầu tiên**; các quyết định được giải thích trong **chú thích hoặc phần bình chú** cuối sách.

Lưu ý: Urtext là một **lý tưởng** hơn là tuyệt đối — hai biên tập viên làm từ cùng nguồn vẫn có thể ra hai bản khác nhau. Urtext hiện đại thường là dạng **lai**: văn bản gốc kèm một ít ngón bấm gợi ý.

## Các nhà xuất bản Urtext
| Nhà xuất bản | Ghi chú |
|---|---|
| **G. Henle Verlag** | Thành lập ngày 20/10/1948 ở Đức. Người sáng lập Günter Henle là một người chơi piano nghiệp dư, khó chịu vì các biên tập viên tự ý sửa bản nhạc ông chơi. Từ đầu chỉ chuyên Urtext |
| **Bärenreiter** | Thành lập năm 1923; ấn bản Urtext chính thức đầu tiên khoảng năm 1950 |
| **Wiener Urtext** | Một nhà xuất bản Urtext lớn khác |

## Ấn bản hướng dẫn (ấn bản biên tập)
Ấn bản **hướng dẫn** ưu tiên **dễ chơi**: người biên tập thêm ngón bấm, [[cuong-do|cường độ]], [[nhip-do|nhịp độ]], [[ban-dap|pedal]], có khi ghép nguồn hoặc sửa nốt.
- **[[Czerny]]**: cách ghi ngón bấm và chỉ dẫn [[dien-tau|diễn tấu]] trở nên phổ biến từ ông. Tuy vậy, ấn bản [[johann-sebastian-bach|Bach]] của Czerny **thay đổi nhiều** so với bản gốc, nên không nên dùng làm nguồn chính.
- **[[hans-von-bulow|Hans von Bülow]]**: ấn bản [[ludwig-van-beethoven|Beethoven]] nổi tiếng, phản ánh thói quen diễn tấu [[thoi-ky-lang-man|Lãng mạn]] thế kỷ 19 — **diễn giải** của người biên tập nổi bật hơn hẳn so với Urtext hiện đại.

Những ấn bản này có **giá trị lịch sử** (cho thấy người xưa chơi thế nào), nhưng người học dễ **nhầm chỉ dẫn của biên tập viên với ý tác giả**.

## Khi giảng dạy
- Với học sinh, Urtext có **ngón bấm gợi ý** là lựa chọn an toàn; giáo viên bổ sung ngón bấm và chỉ dẫn riêng (xem [[ngon-bam]]).
- Tập cho học sinh đọc **lời tựa và phần bình chú**: đó là chỗ biên tập viên giải thích những vấn đề như chấm hay nêm staccato, láy rền bắt đầu từ đâu (xem [[cach-dien-tau]], [[ky-hieu-hoa-my]]).
- So sánh hai ấn bản của cùng một bài là cách rất tốt để học sinh hiểu chỗ nào là **ý tác giả**, chỗ nào là **ý người biên tập**.

Liên quan: [[phong-cach-dien-tau]], [[lo-trinh-tac-pham]].
`,
  },
]

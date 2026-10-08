import type { Article } from '../wiki'

export const harmony: Article[] = [
  {
    slug: 'he-thong-hoa-am-co-dien',
    title: 'Hoà âm cổ điển: hệ thống và lộ trình',
    category: 'harmony',
    aliases: ['hoà âm cổ điển', 'hoà âm thời kỳ thông dụng', 'common practice harmony', 'hoà âm truyền thống', 'lộ trình học hoà âm', 'bản đồ hoà âm'],
    summary: 'Bài tổng quan: lý thuyết hoà âm cổ điển hình thành thế nào (Rameau, Weber, Riemann), "bản đồ" các tiến trình hợp âm, và lộ trình học từng bước qua các bài trong thư viện.',
    wiki: 'Harmony',
    refs: [
      ['Wikipedia — Traité de l\'harmonie (Rameau, 1722)', 'https://en.wikipedia.org/wiki/Trait%C3%A9_de_l%27harmonie_r%C3%A9duite_%C3%A0_ses_principes_naturels'],
      ['Wikipedia — Gottfried Weber', 'https://en.wikipedia.org/wiki/Gottfried_Weber'],
      ['Wikipedia — Hugo Riemann', 'https://en.wikipedia.org/wiki/Hugo_Riemann'],
      ['Open Music Theory — Performing harmonic analysis using the phrase model', 'https://viva.pressbooks.pub/openmusictheory/chapter/performing-harmonic-analysis-using-the-phrase-model/'],
      ['Music Theory Online — Meeùs, Toward a post-Schoenbergian grammar of tonal harmonic progressions', 'https://www.mtosmt.org/issues/mto.00.6.1/mto.00.6.1.meeus.php'],
      ['Moreno (EuroMAC 2017) — Root progressions in Bach\'s chorales', 'https://creaa.unistra.fr/websites/gream/Activites/Euromac_2017_-_Postprint_-_Extended_abstract_-_MORENO_Rodolfo.pdf'],
      ['Milne Open Textbooks — Diatonic descending-fifth sequences', 'https://milnepublishing.geneseo.edu/fundamentals-function-form/chapter/25-diatonic-descending-fifth-sequences/'],
    ],
    body: `
**Hoà âm cổ điển** (hoà âm "thời kỳ thông dụng" — common practice) là ngôn ngữ hoà âm của âm nhạc phương Tây từ khoảng thời Baroque đến cuối thế kỷ 19: [[Bach]], [[Mozart]], [[Beethoven]], [[Chopin]]… Đây là nền tảng để hiểu cả nhạc phổ thông, jazz lẫn các thử nghiệm của [[hoa-am-the-ky-20|thế kỷ 20]].

## Lý thuyết hoà âm hình thành thế nào
| Năm | Người | Đóng góp |
|---|---|---|
| **1722** | [[Rameau]] — *Traité de l'harmonie* | Khái niệm **"bè trầm gốc"** (fundamental bass): mỗi hợp âm có một **nốt gốc** ngầm, dù nốt nào nằm ở bè trầm. Từ đó có khái niệm **[[the-dao-hop-am|thể đảo]]**, và cách nhìn âm nhạc theo **chiều dọc** (hợp âm) thay vì chỉ chiều ngang (các bè) |
| **1817–21** | Gottfried Weber | Phát triển ý của Vogler thành **[[chuc-nang-hoa-am|ký hiệu số La Mã]]**: chữ hoa – chữ thường chỉ cả **bậc** lẫn **tính chất** hợp âm. Nêu khái niệm **"đa nghĩa"**: cùng một hợp âm C có thể là I của Đô trưởng, IV của Sol trưởng, V của Fa trưởng |
| **1893** | Hugo Riemann | **Lý thuyết chức năng**: ba chức năng **T – S – D** (chủ – hạ át – át); đặt ra các thuật ngữ "hoà âm chức năng", "chủ âm", "át âm", "hạ át âm" vẫn dùng đến nay |
| **1906** | Heinrich Schenker | Khái niệm **chủ âm hoá** (tonicization) — xem [[hop-am-at-phu]], [[phan-tich-schenker]] |

Ngày nay có **hai trường phái** song song: phân tích bằng **số La Mã** (phổ biến ở Mỹ và Tây Âu) và phân tích **chức năng** kiểu Riemann (phổ biến ở các nước nói tiếng Đức, Bắc Âu và Đông Âu). Thư viện này dùng số La Mã nhưng luôn ghi chú chức năng.

## Ba câu hỏi về mỗi hợp âm
Hiểu hoà âm có hệ thống nghĩa là trả lời được ba câu hỏi cho mỗi hợp âm:
1. **Nó là gì?** — cấu tạo, tính chất, thể đảo: [[hop-am-ba]], [[hop-am-bay]], [[the-dao-hop-am]].
2. **Nó làm gì?** — chức năng và hướng đi: [[chuc-nang-hoa-am]], [[cau-ket]].
3. **Nó nối thế nào?** — từng bè đi đâu: [[dan-giong]], [[luat-hoa-am-bon-be]].

## Bản đồ tiến trình
**Mô hình câu nhạc** (phrase model): phần lớn câu nhạc cổ điển đi theo trình tự
**Chủ mở đầu → Hạ át → Át → Chủ kết** (T – PD – D – T).
| Chức năng | Giọng trưởng | Giọng thứ |
|---|---|---|
| Chủ (T) | I (vi, iii đôi khi thay thế) | i |
| Hạ át mạnh (PD) | IV, ii | iv, ii° |
| Át (D) | V, V7, vii° | V, V7, vii°7 |

- Câu nhạc **hầu như luôn** đi theo chiều này, hiếm khi đi ngược (từ át về hạ át).
- Một câu cần ít nhất **chủ** và **át**; hạ át làm tăng lực đẩy về kết.

::staff treble C4+E4+G4 C4+F4+A4 C4+E4+G4 B3+D4+F4+G4 C4+E4+G4 | T – PD – (I6/4) – D7 – T trong Đô trưởng: I – IV – I6/4 – V7 – I

## Chuyển động nốt gốc: tiến trình nào "mạnh"?
Trong *Structural Functions of Harmony*, [[Schoenberg]] chia chuyển động nốt gốc thành ba nhóm:
| Nhóm | Chuyển động nốt gốc | Ví dụ (Đô trưởng) | Ghi chú của Schoenberg |
|---|---|---|---|
| **Mạnh** ("đi lên") | Lên quãng 4 (= xuống quãng 5), xuống quãng 3 | G → C, C → Am | Dùng không hạn chế |
| **Yếu** ("đi xuống") | Xuống quãng 4 (= lên quãng 5), lên quãng 3 | C → G, Am → C | Nên dùng trong chuỗi ba hợp âm để thành tiến trình mạnh |
| **Rất mạnh** | Lên hoặc xuống quãng 2 | IV → V, V → vi | |

Nghiên cứu khối liệu **254 câu nhạc** trong thánh ca 4 bè của Bach (Moreno, 2017) xác nhận: chuyển động **xuống quãng 5** là loại **phổ biến nhất** và quan trọng nhất với hầu hết hợp âm. Đó cũng là lý do [[vong-quang-nam]] và chuỗi [[mo-tien-hoa-am|mô tiến quãng 5]] có sức mạnh đặc biệt.

## Lộ trình học hoà âm cổ điển trong thư viện
1. **Nền tảng**: [[quang]] → [[hop-am-ba]] → [[the-dao-hop-am]] → [[bac-am-giai]].
2. **Cú pháp**: [[chuc-nang-hoa-am]] → [[cau-ket]] → [[vong-hop-am]].
3. **Viết bè**: [[luat-hoa-am-bon-be]] → [[dan-giong]] → [[not-ngoai-hop-am]].
4. **Hợp âm 7**: [[hop-am-bay]] (đặc biệt V7).
5. **Thực hành**: [[phan-tich-hoa-am]] → [[phoi-hoa-am-giai-dieu]].
6. **Mở rộng trong giọng**: [[hop-am-at-phu]] → [[chuyen-giong]] → [[hop-am-muon]].
7. **Hoà âm nửa cung**: [[hoa-am-cromatic]] → [[hop-am-napoli]] → [[hop-am-sau-tang]] → [[hop-am-bay-giam]] → [[mo-tien-hoa-am]] → [[trung-am-cromatic]].
8. **Lý thuyết nâng cao**: [[neo-riemann]], [[phan-tich-schenker]], [[bass-so]].

Sau đó chuyển sang hệ thống thứ hai: [[hoa-am-the-ky-20]].
`,
  },
  {
    slug: 'hoa-am-the-ky-20',
    title: 'Hoà âm thế kỷ XX: hệ thống các thủ pháp',
    category: 'harmony',
    aliases: ['hoà âm thế kỷ 20', 'hoà âm hiện đại', 'twentieth-century harmony', 'post-tonal', 'hậu điệu tính', 'toàn diatonic', 'pandiatonicism', 'hợp âm chồng', 'polychord'],
    summary: 'Bài tổng quan về các cách xây hợp âm và nối hợp âm sau năm 1900: chồng quãng 3 mở rộng, chồng quãng 4 – 5, quãng 2 và cụm âm, hợp âm chồng, hoà âm song song, toàn diatonic, âm giai đối xứng, đến phi điệu tính — kèm lộ trình học.',
    refs: [
      ['Harmony and Musicianship with Solfège — 20th-century compositional techniques', 'https://pressbooks.pub/harmonyandmusicianshipwithsolfege/?p=395'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Impressionism and extended tonality', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/32%3A_Impressionism_and_Extended_Tonality'],
      ['Andy Brick — Contemporary theory notes (planing, pandiatonicism)', 'https://personal.stevens.edu/~abrick/contemp_theory/contemp_theory_notes_11.html'],
      ['University of Tennessee — 20th-century terms (PDF)', 'https://music.utk.edu/wp-content/uploads/2023/05/20thCterms.pdf'],
      ['WorldCat — Persichetti, Twentieth-Century Harmony (1961)', 'https://search.worldcat.org/oclc/398434'],
      ['Wikipedia — Petrushka chord', 'https://en.wikipedia.org/wiki/Petrushka_chord'],
      ['Wikipedia — Pandiatonicism', 'https://en.wikipedia.org/wiki/Pandiatonicism'],
      ['Wikipedia — Quartal and quintal harmony', 'https://en.wikipedia.org/wiki/Quartal_and_quintal_harmony'],
      ['Library of Congress — Henry Cowell and the joys of noise', 'https://blogs.loc.gov/music/2020/11/henry-cowell-and-the-joys-of-noise/'],
      ['Hindemith, The Craft of Musical Composition (1942 English ed., PDF excerpt)', 'https://pmf.oicrm.org/media/public/documents/ART-HEB-1942-01.pdf'],
      ['Teoria — Extended harmony in Debussy\'s La fille aux cheveux de lin', 'https://teoria.com/en/articles/debussy-fille-aux-cheveux-de-lin/02.php'],
    ],
    body: `
Sau năm 1900, nhiều nhà soạn nhạc tìm cách **phá vỡ** hoặc **mở rộng** hệ thống [[he-thong-hoa-am-co-dien|hoà âm cổ điển]]. Thay đổi cốt lõi gồm hai mặt:
- **Cách xây hợp âm**: không chỉ chồng [[quang|quãng 3]] mà còn chồng quãng 4, quãng 5, quãng 2, hoặc chồng hai hợp âm.
- **Vai trò của hợp âm**: hợp âm được chọn vì **màu sắc âm thanh** nhiều hơn vì **chức năng** (đi đâu, giải quyết thế nào).

Sách *Twentieth-Century Harmony* (1961) của Vincent Persichetti là giáo trình kinh điển trình bày có hệ thống các thủ pháp này: hợp âm chồng quãng 3, 4, 2, hợp âm thêm nốt, hợp âm chồng, chuyển động hoà âm, và hoà âm trong điệu tính, đa điệu tính, phi điệu tính, nhạc chuỗi.

## Bảng tổng quan các thủ pháp
| Thủ pháp | Ý tưởng | Ví dụ tiêu biểu | Bài chi tiết |
|---|---|---|---|
| **Chồng quãng 3 mở rộng** | Hợp âm 9, 11, 13 dùng như **màu**, không giải quyết | [[Debussy]] dùng hợp âm 9 át **không giải quyết**; "Clair de lune" ô 15 có hợp âm E♭m9 với nốt 9 ở giai điệu | [[hop-am-mo-rong]] |
| **Hợp âm thêm nốt** | Thêm nốt 6, 9 vào hợp âm ba mà không thêm 7 | Nhạc phim, pop, jazz | [[hop-am-6-va-add]] |
| **Chồng quãng 4 – 5** (quartal, quintal) | Hợp âm xếp bằng quãng 4 (hoặc 5) | [[Ravel]] — *Sonatine* (1906); [[Hindemith]] — *Mathis der Maler*; [[Bartók]]; [[mccoy-tyner|McCoy Tyner]] phổ biến trong jazz thập niên 1960 | [[hoa-am-quang-bon]] |
| **Chồng quãng 2 – cụm âm** | Nốt **liền nhau** vang cùng lúc | [[Cowell]] đặt tên "tone cluster"; *Adventures in Harmony* (khoảng 1913), *Dynamic Motion* (1916) chơi bằng **cả cẳng tay** | [[am-cum]] |
| **Hợp âm chồng** (polychord) | **Hai hợp âm** vang cùng lúc, tai nghe được là **hai khối riêng** | **Hợp âm Petrushka** của [[Stravinsky]] (1911): Đô trưởng + Fa♯ trưởng, cách nhau tritone | [[da-dieu-tinh]] |
| **Hoà âm song song** (planing) | Cả hợp âm **trượt song song** — cố ý phá luật cấm quãng song song | Debussy — "La cathédrale engloutie" | [[hoa-am-song-song]] |
| **Toàn diatonic** (pandiatonicism) | Dùng **tự do mọi nốt** của âm giai, không theo cú pháp chức năng; thường có quãng 2 trong hợp âm | Stravinsky — *Pulcinella*; thuật ngữ do Nicolas Slonimsky đặt | — |
| **Hoà âm điệu thức** | Dùng [[dieu-thuc]] thay cho trưởng – thứ; mất lực hút của cảm âm | Debussy; jazz điệu thức | [[dieu-thuc]] |
| **Âm giai đối xứng** | Âm giai toàn cung, âm giai bát cung | Debussy — "Voiles"; [[Messiaen]] | [[am-giai-cromatic]], [[am-giai-bat-cung]] |
| **Quan hệ trung âm, chuyển hoá Neo-Riemann** | Nối các hợp âm trưởng – thứ không theo chức năng mà theo **dẫn giọng tối thiểu** | Nhạc phim, Wagner muộn | [[trung-am-cromatic]], [[neo-riemann]] |
| **Phi điệu tính, 12 âm** | Bỏ hẳn trung tâm giọng | [[Schoenberg]], Webern, Berg | [[phi-dieu-tinh]], [[ky-thuat-12-am]], [[tap-hop-cao-do]] |
| **Hợp âm tổng hợp** | Hợp âm "đặt riêng" cho một tác phẩm | "Hợp âm huyền bí" của [[Scriabin]] trong *Prometheus* (1910) — sáu nốt xếp chủ yếu bằng quãng 4 | — |

## Hindemith: một cách xếp hạng hợp âm có hệ thống
Trong *The Craft of Musical Composition* (bản gốc tiếng Đức, bản tiếng Anh 1942), [[Hindemith]] đề xuất:
- **Chuỗi 1**: xếp 12 nốt theo **mức độ gần gũi** với một nốt chủ: C – G – F – A – E – E♭ – A♭ – D – B♭ – D♭ – B – F♯.
- **Chuỗi 2**: xếp các quãng theo **độ mạnh hoà âm**: quãng 5 đứng đầu, **tritone** đứng cuối.
- Sáu **nhóm hợp âm** (I – VI) theo mức **căng** tăng dần; hợp âm chứa **tritone** thì căng hơn.

Đây là một nỗ lực đưa hoà âm "mọi loại hợp âm" vào một hệ thống thống nhất, thay vì chỉ hợp âm chồng quãng 3.

## Cách tiếp cận một tác phẩm thế kỷ 20
1. **Hợp âm được xây bằng quãng gì?** (3, 4, 2, hay hai hợp âm chồng?)
2. **Hợp âm có chức năng không**, hay chỉ là màu? Có cảm âm, có kết V – I không?
3. **Nốt lấy từ đâu?** Âm giai trưởng – thứ, điệu thức, ngũ cung, toàn cung, bát cung, hay cả 12 nốt?
4. **Chuyển động** giữa các hợp âm: theo chức năng, song song, theo dẫn giọng tối thiểu, hay theo một [[ostinato]] / [[bass-ngan|bass ngân]]?

## Lộ trình học
[[hop-am-mo-rong]] → [[hop-am-6-va-add]] → [[an-tuong]] → [[hoa-am-song-song]] → [[dieu-thuc]] → [[hoa-am-quang-bon]] → [[am-cum]] → [[da-dieu-tinh]] → [[am-giai-bat-cung]] → [[neo-riemann]] → [[phi-dieu-tinh]] → [[tap-hop-cao-do]] → [[ky-thuat-12-am]] → [[toi-gian]]. Hoà âm jazz (cũng là một nhánh của thế kỷ 20): [[he-thong-hop-am-am-giai]], [[xep-hop-am]], [[thay-the-tritone]], [[tai-hoa-am]].
`,
  },
  {
    slug: 'hop-am-ba',
    title: 'Hợp âm ba',
    category: 'harmony',
    aliases: ['hợp âm', 'chord', 'triad', 'hợp âm trưởng', 'hợp âm thứ', 'hợp âm giảm', 'hợp âm tăng'],
    summary: 'Ba nốt xếp chồng theo quãng 3: nốt gốc, nốt bậc 3 và nốt bậc 5.',
    wiki: 'Triad_(music)',
    refs: [
      ['Hear and Play — Six exercises on the major triad', 'https://www.hearandplay.com/main/here-are-six-exercises-on-the-major-triad-that-you-can-add-to-your-warm-up-routine'],
      ['PianoGroove — Triads jazz piano lesson', 'https://www.pianogroove.com/?p=110'],
    ],
    body: `
Hợp âm ba được xây bằng cách chồng hai [[quang|quãng 3]] lên nốt gốc. Tính chất của hai quãng 3 quyết định loại hợp âm:
| Loại | Cấu tạo (nửa cung) | Ví dụ | Ký hiệu |
|---|---|---|---|
| Trưởng | 3 trưởng + 3 thứ (4 + 3) | C – E – G | C |
| Thứ | 3 thứ + 3 trưởng (3 + 4) | C – E♭ – G | Cm |
| Giảm | 3 thứ + 3 thứ (3 + 3) | B – D – F | B° hoặc Bdim |
| Tăng | 3 trưởng + 3 trưởng (4 + 4) | C – E – G♯ | C+ hoặc Caug |

::keyboard C4 E4 G4 | Hợp âm Đô trưởng (C)
::keyboard A4 C5 E5 | Hợp âm La thứ (Am)
::staff treble C4+E4+G4 C4+Eb4+G4 B3+D4+F4 C4+E4+G#4 | Trưởng, thứ, giảm, tăng

## Hợp âm trong giọng
Dựng hợp âm ba trên từng bậc của [[am-giai-truong]] (chỉ dùng nốt trong âm giai):
| I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|
| C | Dm | Em | F | G | Am | B° |

Quy luật cho mọi giọng trưởng: **I, IV, V trưởng; ii, iii, vi thứ; vii° giảm**. Trong [[am-giai-thu|giọng thứ hoà âm]]: i, ii°, III⁺, iv, V, VI, vii°.

## Bài tập: hợp âm ba ở cả 12 giọng
Bảng dưới được suy ra trực tiếp từ công thức 4 + 3 nửa cung ở trên, nhóm theo **hình dạng phím trắng/đen** để dễ nhớ:
| Hình dạng | Hợp âm trưởng |
|---|---|
| Ba phím trắng | C (C–E–G), F (F–A–C), G (G–B–D) |
| Trắng – **đen** – trắng | D (D–F♯–A), E (E–G♯–B), A (A–C♯–E) |
| **Đen** – trắng – **đen** | D♭ (D♭–F–A♭), E♭ (E♭–G–B♭), A♭ (A♭–C–E♭) |
| Ba phím đen | G♭ (G♭–B♭–D♭) |
| Trắng – đen – đen | B (B–D♯–F♯) |
| Đen – trắng – trắng | B♭ (B♭–D–F) |

::keyboard D4 F#4 A4 | D trưởng: nốt giữa là phím đen
::keyboard Db4 F4 Ab4 | D♭ trưởng: hai nốt ngoài là phím đen

Lộ trình tập (tổng hợp từ các bài hướng dẫn piano):
1. **Vài giọng mỗi buổi**: bắt đầu 2–3 giọng, buổi sau chọn 3 giọng khác, đến khi đủ 12.
2. **Đi theo [[vong-quang-nam]]**: chơi một hợp âm trưởng, lên quãng 5, chơi hợp âm tiếp theo, đến hết 12 giọng. Sau đó làm lại với hợp âm thứ.
3. **Trưởng → thứ bằng một nốt**: hạ nốt bậc 3 xuống nửa cung (C → Cm), đi lần lượt lên theo nửa cung đến khi về C. Làm ngược lại: nâng bậc 3 để đổi thứ → trưởng.
4. **Thêm thể đảo**: mỗi giọng chơi nguyên vị, đảo 1, đảo 2 — xem [[the-dao-hop-am]].
5. **Xáo thứ tự giọng**, chơi cả hợp âm khối và rải, từng tay riêng. Giữ **tốc độ chậm** để mọi hợp âm đều đúng.
6. Khi trưởng và thứ đã chắc, thêm hợp âm **giảm** và **nói to tính chất** (trưởng / thứ / giảm) khi chơi để luyện tai — xem [[luyen-tai]].

Liên quan: [[the-dao-hop-am]], [[hop-am-bay]], [[ky-hieu-hop-am]], [[chuc-nang-hoa-am]]. Chồng quãng khác thay cho quãng 3: [[hoa-am-quang-bon]] (quãng 4), [[am-cum]] (quãng 2).

Hoà âm cổ điển được xây trên nền hợp âm ba — xem bức tranh tổng thể và lộ trình học ở [[he-thong-hoa-am-co-dien]].
`,
  },
  {
    slug: 'the-dao-hop-am',
    title: 'Thể đảo hợp âm',
    category: 'harmony',
    aliases: ['thể đảo', 'đảo hợp âm', 'inversion', 'thế đảo 1', 'thể đảo 2', 'thể nguyên vị', 'hợp âm 6/4', 'slash chord'],
    summary: 'Cách sắp xếp hợp âm theo nốt nằm ở bè trầm: nguyên vị (nốt gốc), đảo 1 (nốt bậc 3), đảo 2 (nốt bậc 5).',
    wiki: 'Inversion_(music)',
    refs: [
      ['Open Music Theory — 6/4 chords as forms of prolongation', 'https://viva.pressbooks.pub/openmusictheory/chapter/64-chords-as-prolongations/'],
      ["Wikipedia — Traité de l'harmonie (Rameau)", 'https://en.wikipedia.org/wiki/Trait%C3%A9_de_l%27harmonie_r%C3%A9duite_%C3%A0_ses_principes_naturels'],
      ['Iowa State — Part writing second inversion triads', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/10-4-part-writing-second-inversion-triads-and-suspensions-tutorial/'],
    ],
    body: `
Thể đảo được xác định bởi **nốt thấp nhất** (bè trầm), không phụ thuộc thứ tự các nốt phía trên.
| Thể | Nốt ở bè trầm | Ví dụ (C) | Ký hiệu số | Ký hiệu hợp âm |
|---|---|---|---|---|
| Nguyên vị | Nốt gốc | C – E – G | 5/3 | C |
| Đảo 1 | Nốt bậc 3 | E – G – C | 6 (6/3) | C/E |
| Đảo 2 | Nốt bậc 5 | G – C – E | 6/4 | C/G |

::staff treble C4+E4+G4 E4+G4+C5 G4+C5+E5 | Hợp âm C: nguyên vị, đảo 1, đảo 2

## Vì sao cần thể đảo?
- **Bè trầm mượt hơn**: thay vì nhảy xa, bè trầm đi liền bậc (C – C/B – Am – Am/G…).
- **Tay đỡ di chuyển**: trên piano, chuyển C → F → G bằng thể đảo (C–E–G → C–F–A → B–D–G) chỉ cần dịch ngón tối thiểu — xem [[dan-giong]].
- **Màu sắc**: đảo 2 nghe chưa ổn định, thường dùng ở **I6/4 kết** trước V (xem [[cau-ket]]).

## Ai nghĩ ra khái niệm "thể đảo"?
[[Rameau]] (1722) đưa ra ý tưởng **"bè trầm gốc"**: C–E–G và E–G–C có chung một **nốt gốc** C — một là nguyên vị, một là thể đảo. Đây là bước ngoặt giúp hoà âm có thể phân tích theo hợp âm (xem [[he-thong-hoa-am-co-dien]]).

## Hợp âm đảo 2 cần cẩn thận
Đảo 2 (6/4) có quãng 4 với bè trầm nên nghe **không ổn định**; trong hoà âm cổ điển nó chỉ dùng theo **bốn cách**: 6/4 kết, 6/4 lướt, 6/4 thêu, 6/4 rải — và nhân đôi **nốt bass**. Chi tiết: [[luat-hoa-am-bon-be]].

## Ký hiệu số cho hợp âm 7
| Thể | Bè trầm | Ký hiệu |
|---|---|---|
| Nguyên vị | Nốt gốc | 7 |
| Đảo 1 | Bậc 3 | 6/5 |
| Đảo 2 | Bậc 5 | 4/3 |
| Đảo 3 | Bậc 7 | 4/2 (hoặc 2) |

Hợp âm 7 có thêm **đảo 3** (nốt bậc 7 ở bè trầm). Các số "6", "6/4" đến từ cách ghi [[quang]] so với bè trầm — xem [[bass-so]].
`,
  },
  {
    slug: 'hop-am-bay',
    title: 'Hợp âm bảy',
    category: 'harmony',
    aliases: ['hợp âm 7', 'seventh chord', 'hợp âm 7 át', 'dominant seventh', 'maj7', 'm7', 'm7b5', 'nửa giảm', 'G7'],
    summary: 'Hợp âm ba thêm một quãng 3 nữa phía trên (nốt bậc 7); có 5 loại chính, quan trọng nhất là hợp âm 7 át (V7).',
    wiki: 'Seventh_chord',
    refs: [
      ['Journal of Seventeenth-Century Music — Seconda pratica, counterpoint and politics', 'https://sscm-jscm.org/jscm-issues/volume-18-no-1/seconda-pratica-counterpoint-and-politics/'],
      ['Gresham College — Frolova-Walker lecture transcript (on Monteverdi and the dominant seventh)', 'https://www.gresham.ac.uk/sites/default/files/transcript/2022-11-24-1800_FrolovaWalker-T.pdf'],
      ['Iowa State — Part writing seventh chords', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/10-5-part-writing-seventh-chords-tutorial/'],
      ['Toby Rush — The dominant seventh (PDF)', 'https://www.tobyrush.com/theorypages/en-uk/pdf/0302thedominantseventh.EN-uk.pdf'],
    ],
    body: `
| Loại | Cấu tạo | Ví dụ | Ký hiệu |
|---|---|---|---|
| 7 trưởng | Trưởng + 7 trưởng | C – E – G – B | Cmaj7, CΔ7 |
| 7 át | Trưởng + 7 thứ | G – B – D – F | G7 |
| 7 thứ | Thứ + 7 thứ | D – F – A – C | Dm7 |
| 7 nửa giảm | Giảm + 7 thứ | B – D – F – A | Bm7♭5, Bø7 |
| 7 giảm | Giảm + 7 giảm | B – D – F – A♭ | B°7, Bdim7 |

::keyboard G4 B4 D5 F5 | G7 — hợp âm 7 át trong giọng Đô trưởng
::staff treble C4+E4+G4+B4 G4+B4+D5+F5 D4+F4+A4+C5 B3+D4+F4+A4 | Cmaj7, G7, Dm7, Bø7

## Hợp âm 7 át (V7)
Chứa [[thuan-nghich|tritone]] giữa bậc 3 và bậc 7 (B–F trong G7). Tritone này giải quyết vào trong: B → C, F → E — tạo kết V7 → I mạnh nhất trong [[chuc-nang-hoa-am|hoà âm chức năng]].

## Quy tắc nốt 7
- **Giải quyết**: nốt 7 của hợp âm luôn đi **xuống liền bậc**. Trong V7 → I, nốt 7 (bậc 4, Fa) xuống bậc 3 (Mi).
- **Chuẩn bị**: theo phong cách chặt, nốt 7 nên đến bằng **nốt chung** từ hợp âm trước (như nốt trễ) hoặc bằng **bước liền bậc** (như nốt lướt, nốt thêu).
- V7 nguyên vị → I nguyên vị có hai nốt khuynh hướng kéo ngược nhau; thường để **một hợp âm thiếu nốt 5** — xem [[luat-hoa-am-bon-be]].
- Ký hiệu thể đảo của hợp âm 7: 7, 6/5, 4/3, 4/2 — xem [[the-dao-hop-am]].

## Lịch sử: nốt 7 "không được chuẩn bị"
- Trong đối âm Phục hưng, quãng 7 là **nghịch âm** phải chuẩn bị và giải quyết cẩn thận (xem [[doi-am-5-loai]]).
- Năm **1600**, nhà lý luận Giovanni Artusi chỉ trích các madrigal của [[Monteverdi]], đặc biệt *Cruda Amarilli*, vì dùng nghịch âm quá tự do — ở đó một bè **nhảy thẳng** vào nốt 7, tức coi âm thanh này là **một hợp âm tự thân** chứ không còn là nốt trễ. Monteverdi đáp lại trong lời tựa tập madrigal thứ năm (1605): quy tắc đối âm có thể bị vượt qua vì **yêu cầu biểu cảm của lời ca** — gọi là *seconda pratica* (thực hành thứ hai).
- Hợp âm 7 át **không phổ biến ngay**: phải vài thập kỷ sau nó mới thành thông lệ; đến các sonata violin Op. 5 của [[Corelli]] (1700), hệ thống điệu tính đã hoàn chỉnh.

## Hợp âm 7 trong giọng trưởng
| Imaj7 | ii7 | iii7 | IVmaj7 | V7 | vi7 | viiø7 |
|---|---|---|---|---|---|---|
| Cmaj7 | Dm7 | Em7 | Fmaj7 | G7 | Am7 | Bø7 |

Hợp âm 7 là "ngôn ngữ mặc định" của jazz (xem [[vong-hop-am|ii – V – I]]). Thêm nốt cao hơn: [[hop-am-mo-rong]]. Hợp âm 7 giảm có cấu trúc đối xứng đặc biệt: [[hop-am-bay-giam]]. Thay V7 bằng ♭II7: [[thay-the-tritone]].
`,
  },
  {
    slug: 'ky-hieu-hop-am',
    title: 'Ký hiệu hợp âm',
    category: 'harmony',
    aliases: ['hợp âm ký hiệu', 'chord symbol', 'lead sheet', 'đọc hợp âm', 'tên hợp âm', 'sus'],
    summary: 'Cách viết tắt hợp âm bằng chữ cái và hậu tố (Cm, G7, Fmaj7, Dsus4…), dùng trong nhạc pop, jazz và đệm hát.',
    wiki: 'Chord_chart',
    refs: [
      ['Wikipedia — Lead sheet', 'https://en.wikipedia.org/wiki/Lead_sheet'],
      ['Wikipedia — Real Book', 'https://en.wikipedia.org/wiki/Real_Book'],
      ['Wikipedia — Nashville Number System', 'https://en.wikipedia.org/wiki/Nashville_Number_System'],
      ['Princeton Library — Brandt & Roemer, Standardized Chord Symbol Notation (1976)', 'https://catalog.princeton.edu/catalog/1473161'],
    ],
    body: `
Chữ cái in hoa = **nốt gốc**. Hậu tố cho biết loại hợp âm:
| Ký hiệu | Đọc | Thành phần (gốc C) |
|---|---|---|
| C | Đô trưởng | C E G |
| Cm, C- | Đô thứ | C E♭ G |
| C°, Cdim | Đô giảm | C E♭ G♭ |
| C+, Caug | Đô tăng | C E G♯ |
| C7 | Đô 7 (át) | C E G B♭ |
| Cmaj7, CΔ | Đô 7 trưởng | C E G B |
| Cm7 | Đô thứ 7 | C E♭ G B♭ |
| Cm7♭5, Cø | Đô nửa giảm | C E♭ G♭ B♭ |
| C°7 | Đô 7 giảm | C E♭ G♭ B𝄫 (=A) |
| C6 | Đô 6 | C E G A |
| Csus4 | Đô sus 4 | C F G |
| Csus2 | Đô sus 2 | C D G |
| Cadd9 | Đô thêm 9 | C E G D |
| C9 | Đô 9 | C E G B♭ D |
| C/E | Đô, bass Mi | E ở bè trầm + C E G |

## Hợp âm treo (sus)
Thay nốt bậc 3 bằng bậc 4 (sus4) hoặc bậc 2 (sus2) → không trưởng không thứ, nghe lơ lửng; truyền thống thường **giải quyết** sus4 → 3 (Csus4 → C).

## Ký hiệu gạch chéo
**C/E** nghĩa là hợp âm C với **E ở bè trầm** — chính là [[the-dao-hop-am|thể đảo 1]]. Nốt sau gạch có thể không thuộc hợp âm (C/B♭).

Nền tảng: [[hop-am-ba]], [[hop-am-bay]], [[hop-am-mo-rong]]. C6 khác Am7 thế nào, add9 khác 9 thế nào: [[hop-am-6-va-add]].

## Lịch sử ký hiệu hợp âm
- **Lead sheet**: nhạc jazz thường được ghi gọn bằng giai điệu kèm ký hiệu hợp âm. Từ những năm 1940, các lead sheet được gom thành sách bán cho nhạc công — gọi là **fake book** (sách để "chơi ứng phó" một bài lạ). Tháng 5/1942, George Goodwin phát hành bộ thẻ **Tune-Dex** đầu tiên ghi lời, giai điệu và hợp âm. Nhiều fake book thời đó in **không có bản quyền**.
- **Hệ thống số Nashville**: Neal Matthews Jr. (nhóm Jordanaires) nghĩ ra cuối thập niên 1950, lấy cảm hứng từ cách ghi "nốt hình" của các nhóm hát phúc âm; sau đó Charlie McCoy áp dụng cho hợp âm. Hợp âm được ghi bằng **số bậc** (1, 4, 5, 6m…) nên đổi giọng tức thì — cùng ý tưởng với [[bac-am-giai|số La Mã]].
- **Chuẩn hoá**: cuốn *Standardized Chord Symbol Notation* của Carl Brandt và Clinton Roemer (1976) là tài liệu tham khảo chính cho ký hiệu jazz: chữ "7" đứng một mình **luôn** là 7 thứ; nốt biến đổi để trong ngoặc. Sách bỏ ký hiệu **tam giác** cho 7 trưởng vì nó bị dùng với hai nghĩa trái ngược. Dù vậy, các nhà xuất bản vẫn khác nhau đôi chút.
`,
  },
  {
    slug: 'hop-am-mo-rong',
    title: 'Hợp âm mở rộng',
    category: 'harmony',
    aliases: ['hợp âm 9', 'hợp âm 11', 'hợp âm 13', 'extended chord', 'tension', 'nốt căng', 'hợp âm jazz'],
    summary: 'Hợp âm 7 tiếp tục chồng quãng 3 lên trên để có nốt 9, 11, 13 — màu sắc phong phú của jazz và R&B.',
    wiki: 'Extended_chord',
    refs: [
      ["Teoria — Extended harmony in Debussy's La fille aux cheveux de lin", 'https://teoria.com/en/articles/debussy-fille-aux-cheveux-de-lin/02.php'],
      ['WJEC — Debussy (teaching resource, PDF)', 'https://resource.download.wjec.co.uk/vtc/2023-24/edu/edu23-24_1-3/pdf/debussy.pdf'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Impressionism and extended tonality', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/32%3A_Impressionism_and_Extended_Tonality'],
    ],
    body: `
Tiếp tục chồng [[quang|quãng 3]] lên [[hop-am-bay]]:
| Nốt mở rộng | Bằng nốt | Ví dụ trên C |
|---|---|---|
| 9 | Bậc 2 (cao hơn 1 quãng 8) | D |
| 11 | Bậc 4 | F |
| 13 | Bậc 6 | A |

Cmaj9 = C – E – G – B – **D**. G13 = G – B – D – F – (A) – (C) – **E**.

## Lược bỏ nốt
Hợp âm 13 đầy đủ có 7 nốt — quá nhiều cho hai tay. Thứ tự ưu tiên giữ lại: **3 và 7** (quyết định tính chất) → nốt mở rộng → nốt gốc (bè bass có thể chơi) → **5** (bỏ đầu tiên).

::keyboard E4 G4 B4 D5 | Cmaj9 không nốt gốc: E – G – B – D (tay phải), thường gặp trong jazz piano

## Nốt căng biến hoá
Trên hợp âm 7 át còn có ♭9, ♯9, ♯11, ♭13 — tạo sức căng mạnh trước khi giải quyết (xem âm giai biến đổi trong [[he-thong-hop-am-am-giai]]). Nốt 11 tự nhiên thường **tránh** trên hợp âm trưởng vì [[thuan-nghich|nghịch]] với nốt bậc 3.

Xem thêm: [[ky-hieu-hop-am]], [[vong-hop-am]], [[xep-hop-am]] (cách xếp nốt), [[he-thong-hop-am-am-giai]] (chọn nốt căng).

## Hợp âm mở rộng như màu sắc (Debussy)
Trong hoà âm cổ điển, hợp âm 9 át là hợp âm **căng**, phải giải quyết. [[Debussy]] thường để chúng **không giải quyết**, chọn chúng vì **âm thanh giàu có** hơn là vì chức năng — một phần phản ứng của ông với Wagner. Ví dụ ô 15 của "Clair de lune" có hợp âm **E♭m9** với nốt 9 ở giai điệu (xem [[phan-tich-clair-de-lune]]). Cách dùng này nối thẳng sang hoà âm jazz. Tổng quan: [[hoa-am-the-ky-20]].
`,
  },
  {
    slug: 'chuc-nang-hoa-am',
    title: 'Chức năng hoà âm',
    category: 'harmony',
    aliases: ['hoà âm chức năng', 'chức năng', 'harmonic function', 'số La Mã', 'roman numeral', 'T S D'],
    summary: 'Mỗi hợp âm trong giọng đảm nhận một vai trò: chủ (ổn định), hạ át (rời xa), át (căng, muốn về chủ).',
    wiki: 'Function_(music)',
    refs: [
      ['Wikipedia — Hugo Riemann', 'https://en.wikipedia.org/wiki/Hugo_Riemann'],
      ['Wikipedia — Gottfried Weber', 'https://en.wikipedia.org/wiki/Gottfried_Weber'],
      ['Open Music Theory — Performing harmonic analysis using the phrase model', 'https://viva.pressbooks.pub/openmusictheory/chapter/performing-harmonic-analysis-using-the-phrase-model/'],
      ['Music Theory Online — Meeùs, post-Schoenbergian grammar of harmonic progressions', 'https://www.mtosmt.org/issues/mto.00.6.1/mto.00.6.1.meeus.php'],
    ],
    body: `
Hợp âm được ghi bằng **số La Mã** theo [[bac-am-giai]]: chữ hoa = trưởng (I, IV, V), chữ thường = thứ (ii, iii, vi), ° = giảm.
| Nhóm chức năng | Hợp âm (giọng trưởng) | Vai trò |
|---|---|---|
| **Chủ (T)** | I (và vi, iii) | Ổn định, điểm dừng |
| **Hạ át (S)** | IV, ii | Chuyển động rời khỏi chủ, chuẩn bị cho át |
| **Át (D)** | V, V7, vii° | Căng thẳng, đòi về chủ |

## Câu chuyện T – S – D – T
Hầu hết âm nhạc có tính điệu đi theo vòng: **nghỉ → rời đi → căng → về nhà**. Ví dụ: I – IV – V – I, hoặc I – ii – V – I.

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+G4 C4+E4+G4 | I – IV – V – I trong Đô trưởng (thể đảo gần nhau)

## Vì sao V muốn về I?
Hợp âm V chứa **cảm âm** (B trong Đô trưởng) cách chủ âm nửa cung; V7 còn có thêm [[thuan-nghich|tritone]]. Cả hai tạo lực hút mạnh về I — nền tảng của [[cau-ket]].

## Nguồn gốc khái niệm
- **Số La Mã**: Georg Joseph Vogler đề xuất, Gottfried Weber (1817–21) hoàn thiện với chữ hoa – chữ thường chỉ tính chất. Weber còn chỉ ra tính **"đa nghĩa"**: hợp âm C là I của Đô trưởng, IV của Sol trưởng, V của Fa trưởng.
- **Chức năng T – S – D**: Hugo Riemann (1893). Ông đặt ra cả thuật ngữ "hoà âm chức năng". Lý thuyết của Riemann vẫn là chuẩn ở các nước nói tiếng Đức, Bắc Âu và Đông Âu; số La Mã phổ biến ở Mỹ và Tây Âu.

## Mô hình câu nhạc
Một câu nhạc điển hình đi **Chủ mở đầu → Hạ át → Át → Chủ kết** (T – PD – D – T), **hầu như không đi ngược** từ át về hạ át. Khi phân tích, gán nhãn D cho hợp âm át ở kết trước, rồi tìm hợp âm hạ át mạnh **ngay trước** nó. Chi tiết và bảng các hợp âm theo chức năng: [[he-thong-hoa-am-co-dien]].

## Tiến trình mạnh và yếu
Theo Schoenberg, nốt gốc **lên quãng 4 (xuống quãng 5)** hoặc **xuống quãng 3** là tiến trình **mạnh**; lên quãng 5 hoặc lên quãng 3 là **yếu**; lên/xuống quãng 2 là **rất mạnh**.

Ứng dụng: [[vong-hop-am]], [[hop-am-at-phu]], [[chuyen-giong]]. Mở rộng nhóm hạ át bằng hợp âm cromatic: [[hoa-am-cromatic]]. Phân tích nhiều tầng: [[phan-tich-schenker]].
`,
  },
  {
    slug: 'vong-hop-am',
    title: 'Vòng hợp âm',
    category: 'harmony',
    aliases: ['tiến trình hợp âm', 'chord progression', 'vòng hòa âm', 'I-V-vi-IV', 'ii-V-I', 'vòng Canon', 'vòng 4 hợp âm'],
    summary: 'Chuỗi hợp âm nối tiếp nhau; một số vòng phổ biến xuất hiện trong hàng ngàn bài hát.',
    wiki: 'Chord_progression',
    refs: [
      ["Wikipedia — List of variations on Pachelbel's Canon", 'https://en.wikipedia.org/wiki/List_of_variations_on_Pachelbel%27s_Canon'],
      ['Berklee Online — Common chord progressions', 'https://online.berklee.edu/takenote/common-chord-progressions-and-how-to-make-them-your-own/'],
      ['Puget Sound — Shorter progressions from the circle of fifths', 'https://musictheory.pugetsound.edu/mt21c/ShorterProgressionsFromTheCircleOfFifths.html'],
      ["Moreno (EuroMAC 2017) — Root progressions in Bach's chorales", 'https://creaa.unistra.fr/websites/gream/Activites/Euromac_2017_-_Postprint_-_Extended_abstract_-_MORENO_Rodolfo.pdf'],
    ],
    body: `
| Vòng | Trong Đô trưởng | Gặp trong |
|---|---|---|
| I – IV – V – I | C – F – G – C | Nhạc thiếu nhi, dân ca, rock 'n' roll |
| I – V – vi – IV | C – G – Am – F | Vô số bài pop ("Let It Be", "Someone Like You") |
| vi – IV – I – V | Am – F – C – G | Biến thể thứ của vòng trên |
| I – vi – IV – V | C – Am – F – G | Nhạc thập niên 50 ("Stand By Me") |
| ii – V – I | Dm7 – G7 – Cmaj7 | Xương sống của jazz |
| Vòng Canon | C – G – Am – Em – F – C – F – G | Canon in D (Pachelbel) |
| Vòng quãng 5 | Am – Dm – G – C – F – B° – E – Am | "Autumn Leaves", nhạc Baroque |

::staff treble C4+E4+G4 B3+D4+G4 C4+E4+A4 C4+F4+A4 | I – V – vi – IV với thể đảo gần nhau

## Câu chuyện của vòng I – V – vi – IV
- Hoà âm của **Canon** (Pachelbel) là I – V – vi – iii – IV – I – IV – V. Rất ít bài pop dùng đúng nguyên vòng (một ví dụ: "Graduation (Friends Forever)"), nhưng **rất nhiều** bài dùng dạng rút gọn hoặc biến đổi, như "Basket Case" (Green Day).
- Vòng **I – V – vi – IV** nổi tiếng nhờ màn medley "4 Chords" của nhóm hài Axis of Awesome, ghép hàng chục bài hit dùng cùng vòng này.
- **ii – V – I** được nhiều tài liệu coi là tiến trình phổ biến nhất trong jazz (nhận định định tính, chưa có thống kê); ví dụ "Autumn Leaves", "Tune-Up", "Lady Bird".
- Trong thánh ca Bach, chuyển động nốt gốc **xuống quãng 5** là phổ biến nhất — gốc rễ của vòng quãng 5 và ii – V – I (xem [[he-thong-hoa-am-co-dien]]).

## Cách luyện trên piano
1. Chơi vòng ở **nguyên vị** để hiểu cấu trúc.
2. Chuyển sang [[the-dao-hop-am|thể đảo]] gần nhất để tay phải gần như không di chuyển ([[dan-giong]]).
3. Tay trái chơi nốt gốc, sau đó thử các kiểu đệm (rải, Alberti, nhịp).
4. **Dịch giọng**: chơi lại cùng vòng ở G, F, D… — dùng [[vong-quang-nam]] để biết các hợp âm (xem [[dich-giong]]).

Liên quan: [[chuc-nang-hoa-am]], [[blues-12-nhip]], [[hop-am-muon]], [[mo-tien-hoa-am]]. Biến tấu vòng hợp âm: [[tai-hoa-am]].
`,
  },
  {
    slug: 'cau-ket',
    title: 'Kết',
    category: 'harmony',
    aliases: ['cadence', 'kết nhạc', 'kết chính', 'kết trọn', 'kết nửa', 'kết plagal', 'kết lừa', 'kết Amen', 'authentic cadence', 'half cadence', 'deceptive cadence'],
    summary: 'Công thức hợp âm đánh dấu chỗ ngắt của câu nhạc — như dấu chấm, dấu phẩy trong câu văn.',
    wiki: 'Cadence',
    refs: [
      ['Wikipedia — Cadence', 'https://en.wikipedia.org/wiki/Cadence'],
      ['Wikipedia — Landini cadence', 'https://en.wikipedia.org/wiki/Landini_cadence'],
      ['Wikipedia — Clausula (music)', 'https://en.wikipedia.org/wiki/Clausula_(music)'],
      ['Open Music Theory — La in the bass (Phrygian half cadence)', 'https://viva.pressbooks.pub/openmusictheory/chapter/la-in-the-bass/'],
      ['Open Music Theory — Modal mixture (Picardy third)', 'https://viva.pressbooks.pub/openmusictheory/chapter/modal-mixture/'],
    ],
    body: `
| Loại kết | Hợp âm | Cảm giác | Tương tự |
|---|---|---|---|
| **Kết chính (trọn)** | V(7) → I, cả hai nguyên vị, giai điệu kết ở chủ âm | Dứt khoát, xong hẳn | Dấu chấm |
| **Kết chính không trọn** | V → I nhưng có thể đảo hoặc giai điệu không ở chủ âm | Kết nhưng còn mở | Dấu chấm phẩy |
| **Kết nửa** | … → V | Dừng lửng, chờ tiếp | Dấu phẩy, dấu hỏi |
| **Kết plagal (Amen)** | IV → I | Nhẹ nhàng, trang trọng | "A-men" cuối thánh ca |
| **Kết lừa** | V → vi | Bất ngờ, kéo dài câu nhạc — làm trái [[cam-xuc-am-nhac|kỳ vọng]] của người nghe | Câu chưa xong |

::staff treble B3+D4+G4 C4+E4+G4 | Kết chính V → I (G → C)
::staff treble B3+D4+G4 C4+E4+A4 | Kết lừa V → vi (G → Am)

::img Authentic Cadence Trill.svg | Kết chính kiểu Baroque, có láy rền trên hợp âm át

## Kết với I6/4
Trong nhạc cổ điển, trước V thường có **hợp âm I đảo 2** (C/G → G7 → C) — gọi là "6/4 kết", thực chất là âm thêu của V (xem [[the-dao-hop-am]]).

## Phân biệt kết chính hoàn toàn và không hoàn toàn
**Kết chính hoàn toàn** (PAC) cần đủ ba điều kiện: V **nguyên vị**, I **nguyên vị**, và Soprano kết ở **chủ âm**. Thiếu bất kỳ điều kiện nào → **kết chính không hoàn toàn** (IAC). Kết thường được trang trí bằng **nốt trễ 4–3** trên V — vẫn gọi tên theo hợp âm gốc V – I.

## Các kết đặc biệt
| Kết | Mô tả | Ghi chú |
|---|---|---|
| **Kết nửa Phrygian** | **iv6 → V** trong giọng thứ; bè trầm đi **nửa cung** từ bậc 6 xuống bậc 5 | Gợi màu điệu Phrygian, nghe cổ kính; thời Baroque hay dùng để kết một chương chậm, nối ngay sang chương nhanh |
| **Quãng 3 Picardy** | Bài giọng **thứ** kết bằng hợp âm chủ **trưởng** | Rất phổ biến thế kỷ 16–17, ít dần ở thế kỷ 18–19; nguồn gốc tên gọi không rõ — xem [[hop-am-muon]] |
| **Kết Landini** | Bè trên đi bậc 7 → **xuống bậc 6** → lên bậc 8 | Đặt theo tên Francesco Landini (1325–1397) nhưng không do ông nghĩ ra; dùng đến thế kỷ 15 |

## Lịch sử
Thời Phục hưng, kết được hiểu theo **giai điệu từng bè**: một kết bốn bè gồm bốn công thức (*clausula*) vang cùng lúc — của bè soprano, alto, tenor, bass. Kết plagal ít được các nhà lý luận thế kỷ 16 mô tả, và nguồn gốc của nó đến nay vẫn còn tranh luận.

Kết là nền tảng chia [[cau-nhac]] và [[hinh-thuc-am-nhac|hình thức]]. Lý do V → I mạnh: xem [[chuc-nang-hoa-am]]. Hợp âm hạ át cromatic trước V trong kết: [[hop-am-napoli]], [[hop-am-sau-tang]].
`,
  },
  {
    slug: 'dan-giong',
    title: 'Dẫn giọng',
    category: 'harmony',
    aliases: ['dẫn bè', 'voice leading', 'hoà âm 4 bè', 'SATB', 'quãng 5 song song', 'quãng 8 song song'],
    summary: 'Nghệ thuật nối các hợp âm sao cho từng bè (giọng) di chuyển mượt và độc lập.',
    wiki: 'Voice_leading',
    refs: [
      ['Huron (2001), Music Perception — Tone and voice', 'https://muse.jhu.edu/book/47915'],
      ['MIT Press — Huron, Voice Leading: The Science behind a Musical Art (2016)', 'https://www.penguinrandomhouse.com/books/657442/voice-leading-by-david-huron/'],
      ['Wikipedia — Consecutive fifths', 'https://en.wikipedia.org/wiki/Consecutive_fifths'],
    ],
    body: `
Hoà âm cổ điển viết cho **4 bè**: Soprano – Alto – Tenor – Bass (SATB). Mỗi hợp âm là một "lát cắt dọc", nhưng mỗi bè là một giai điệu ngang.

## Quy tắc cơ bản
- **Giữ nốt chung**: nốt có ở cả hai hợp âm thì giữ nguyên trong cùng bè.
- **Đi liền bậc** khi có thể; tránh nhảy xa ở các bè giữa.
- **Cảm âm đi lên chủ âm**; nốt 7 của hợp âm 7 đi xuống (xem [[hop-am-bay]]).
- **Tránh quãng 5 và quãng 8 song song**: hai bè cách nhau quãng 5 (hoặc 8) rồi cùng chuyển sang một quãng 5 (8) khác — làm mất tính độc lập của bè.
- **Chuyển động ngược chiều** giữa bass và soprano tạo cân bằng.

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+G4 C4+E4+G4 | I – IV – V – I với dẫn giọng mượt: mỗi nốt di chuyển tối đa một bậc

## Khoa học đằng sau dẫn giọng
David Huron (2001; sách *Voice Leading*, 2016) chỉ ra rằng các quy tắc dẫn giọng truyền thống **khớp gần như hoàn toàn** với những gì khoa học biết về cảm nhận thính giác. Mục đích chính của dẫn giọng là tạo ra các **dòng giai điệu mà tai nghe tách biệt**. Sáu nguyên lý ông nêu gồm: âm có cao độ rõ (toneness), liền mạch về thời gian, hạn chế che lấp, **hoà lẫn âm** (tonal fusion), **gần nhau về cao độ** (pitch proximity) và **đồng biến cao độ** (pitch co-modulation).

Bộ quy tắc đầy đủ và bảng kiểm tra lỗi: [[luat-hoa-am-bon-be]].

## Ứng dụng cho piano
Khi đệm hát, chọn [[the-dao-hop-am|thể đảo]] sao cho tay phải di chuyển ít nhất — đó chính là dẫn giọng tốt. Nguyên tắc này cũng là gốc của [[doi-am]] và [[doi-am-5-loai]]. Lý thuyết đo khoảng cách dẫn giọng giữa các hợp âm: [[neo-riemann]].

Liên quan: [[not-ngoai-hop-am]], [[thuan-nghich]].
`,
  },
  {
    slug: 'not-ngoai-hop-am',
    title: 'Nốt ngoài hợp âm',
    category: 'harmony',
    aliases: ['nốt lướt', 'nốt thêu', 'nốt chờ', 'nốt trễ', 'non-chord tone', 'passing tone', 'neighbor tone', 'suspension', 'appoggiatura', 'nốt dựa'],
    summary: 'Các nốt trong giai điệu không thuộc hợp âm đang vang, làm giai điệu mềm mại và có sức căng.',
    wiki: 'Nonchord_tone',
    refs: [
      ['Puget Sound, Music Theory for the 21st Century — Suspension', 'https://musictheory.pugetsound.edu/mt21c/Suspension.html'],
      ['My Music Theory — Suspensions in figured bass', 'https://mymusictheory.com/figured-bass/suspensions-figured-bass/'],
      ['Fiveable — Suspensions and retardations (AP Music Theory)', 'https://fiveable.me/ap-music-theory/unit-6/identifying-writing-suspensions-identifying-retardations/study-guide/MTmgSE1WwoFrPavalhGw'],
    ],
    body: `
| Loại | Cách đi | Ví dụ trên hợp âm C |
|---|---|---|
| **Nốt lướt** | Nối hai nốt hợp âm bằng bước liền bậc, cùng chiều | E – **F** – G |
| **Nốt thêu** | Rời nốt hợp âm một bậc rồi quay về | E – **F** – E |
| **Nốt dựa (appoggiatura)** | Nhảy tới nốt ngoài (thường ở phách mạnh) rồi giải quyết liền bậc | **D** (nhấn) → C |
| **Nốt trễ (suspension)** | Giữ nốt của hợp âm trước sang hợp âm sau, rồi đi xuống | F (giữ từ hợp âm F trước đó) → E |
| **Nốt thoát** | Đi liền bậc ra rồi nhảy về | D – **E** – C |
| **Nốt đón (anticipation)** | Vang sớm nốt của hợp âm kế tiếp | **C** trước khi hợp âm C vang |

## Nốt trễ: ba giai đoạn và cách gọi tên
Nốt trễ gồm **chuẩn bị** (nốt thuộc hợp âm trước) → **trễ** (giữ sang phách mạnh của hợp âm mới, thành nghịch âm) → **giải quyết** (đi **xuống liền bậc**). Nếu giải quyết **đi lên**, gọi là **nốt trễ ngược** (retardation).

Nốt trễ được gọi bằng **hai số**: quãng với bè trầm lúc trễ → lúc giải quyết (quãng lớn hơn quãng 8 thu gọn lại):
| Loại | Thường gặp trên | Ghi chú |
|---|---|---|
| **9–8** | Hợp âm nguyên vị | Phổ biến ở nhiều chỗ |
| **7–6** | Hợp âm đảo 1 | Ví dụ iii → vi trong giọng trưởng |
| **4–3** | Hợp âm nguyên vị | Rất hay gặp ở **kết** (trên V) |
| **2–3** | Hợp âm đảo 1 | **Bè trầm** là bè bị trễ, nên số "ngược" |

**Chuỗi nốt trễ**: nốt giải quyết của nốt trễ này lại là nốt chuẩn bị cho nốt trễ kế tiếp — rất phổ biến trong nhạc Baroque.

**Bass ngân** (pedal point): nốt bè trầm giữ nguyên trong khi hợp âm phía trên thay đổi — xem [[bass-ngan]].

## Vì sao quan trọng?
Giai điệu chỉ gồm nốt hợp âm nghe cứng nhắc. Nốt ngoài hợp âm tạo [[thuan-nghich|nghịch – giải quyết]] liên tục, giúp giai điệu "hát".

Khi phân tích bản nhạc, hãy xác định hợp âm trước, rồi gọi tên các nốt còn lại. Hợp âm sus (xem [[ky-hieu-hop-am]]) thực chất là nốt trễ được "đóng băng". Liên quan: [[giai-dieu]], [[ky-hieu-hoa-my]].
`,
  },
  {
    slug: 'hop-am-at-phu',
    title: 'Hợp âm át phụ',
    category: 'harmony',
    aliases: ['át phụ', 'secondary dominant', 'V/V', 'át của át', 'V7/ii'],
    summary: 'Hợp âm át "mượn" để dẫn vào một hợp âm khác ngoài chủ âm, như V/V (D7 → G trong Đô trưởng).',
    wiki: 'Secondary_chord',
    refs: [
      ['Wikipedia — Secondary chord', 'https://en.wikipedia.org/wiki/Secondary_chord'],
      ['Open Music Theory 2e — Tonicization', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/04%3A_Diatonic_Harmony_Tonicization_and_Modulation/4.14%3A_Tonicization'],
      ['Puget Sound — Voice leading secondary chords', 'https://musictheory.pugetsound.edu/mt21c/VoiceLeadingSecondaryChords.html'],
      ['Puget Sound — Tonicization versus modulation', 'https://musictheory.pugetsound.edu/mt21c/TonicizationVersusModulation.html'],
    ],
    body: `
Mỗi hợp âm trưởng hoặc thứ trong giọng có thể được "chủ âm hoá" tạm thời bằng cách đặt **hợp âm át của nó** ngay trước.

| Hợp âm đích (Đô trưởng) | Át phụ | Ký hiệu | Nốt mới xuất hiện |
|---|---|---|---|
| ii (Dm) | A7 | V7/ii | C♯ |
| iii (Em) | B7 | V7/iii | D♯ |
| IV (F) | C7 | V7/IV | B♭ |
| V (G) | D7 | V7/V | F♯ |
| vi (Am) | E7 | V7/vi | G♯ |

::keyboard D4 F#4 A4 C5 | D7 = V7/V trong Đô trưởng (F♯ là cảm âm của G)

## Nhận biết
Một hợp âm trưởng hoặc 7 át **không thuộc giọng**, tiếp theo là hợp âm cách nó quãng 5 đúng xuống → gần như chắc chắn là át phụ.

Chuỗi át phụ nối tiếp nhau tạo nên vòng E7 – A7 – D7 – G7 – C (ragtime, jazz). Nếu hợp âm đích được giữ lâu và có [[cau-ket]] riêng, đó là [[chuyen-giong]]. Nền tảng: [[chuc-nang-hoa-am]].

## Hợp âm cảm âm phụ
Ngoài hợp âm át, có thể dùng **hợp âm cảm âm** của hợp âm đích: hợp âm **giảm**, **7 nửa giảm** hoặc **7 giảm**, có nốt gốc **thấp hơn nửa cung** so với hợp âm đích. Ví dụ vii°7/V trong Đô trưởng = **F♯ – A – C – E♭** → G. Xem [[hop-am-bay-giam]].

## Chủ âm hoá hay chuyển giọng?
**Chủ âm hoá** (tonicization) là nhấn mạnh **tạm thời** một hợp âm như thể nó là chủ âm — kéo dài từ hai, ba hợp âm đến một câu, và **không có kết** ở giọng mới. Nếu có **kết** ở giọng mới → đó là [[chuyen-giong]]. Với các đoạn ngắn kết bằng kết chính (như trong thánh ca Bach), ranh giới có thể mơ hồ.

## Lịch sử thuật ngữ
- Trước khoảng 1939, sách lý thuyết **chưa có** khái niệm này: hợp âm át phụ cùng hợp âm đích được coi là một **"chuyển giọng thoáng qua"**.
- Riemann gọi là *Zwischendominante* ("át xen giữa") — vẫn là thuật ngữ tiếng Đức hiện nay.
- Heinrich Schenker đưa ra khái niệm **chủ âm hoá** năm 1906.
- Walter Piston dùng cách ghi "V7 of IV" năm 1933 và thuật ngữ "**secondary dominant**" (át phụ) trong sách *Harmony* (1941). Schoenberg gọi là "át nhân tạo".
`,
  },
  {
    slug: 'hop-am-muon',
    title: 'Hợp âm mượn',
    category: 'harmony',
    aliases: ['mượn điệu thức', 'modal interchange', 'borrowed chord', 'iv thứ', 'bVII', 'bVI'],
    summary: 'Hợp âm lấy từ giọng cùng tên (thường là giọng thứ) để tô màu cho giọng trưởng, như Fm trong Đô trưởng.',
    wiki: 'Borrowed_chord',
    refs: [
      ['Open Music Theory — Modal mixture', 'https://viva.pressbooks.pub/openmusictheory/chapter/modal-mixture/'],
      ['Wikipedia — Borrowed chord', 'https://en.wikipedia.org/wiki/Borrowed_chord'],
      ["Music Theory Online — Review of Wollenberg, Schubert's Fingerprints", 'https://www.mtosmt.org/issues/mto.13.19.3/mto.13.19.3.clark.php'],
      ['Milne Open Textbooks — Mixture', 'https://milnepublishing.geneseo.edu/fundamentals-function-form/chapter/29-mixture/'],
    ],
    body: `
Đô trưởng và Đô thứ có cùng âm chủ ([[giong-song-song|giọng cùng tên]]). Mượn hợp âm của Đô thứ khi đang ở Đô trưởng tạo ra màu sắc u buồn, điện ảnh.
| Hợp âm mượn | Trong Đô trưởng | Hiệu quả |
|---|---|---|
| iv | Fm | Buồn man mác, rất hay ở cuối bài (F → Fm → C) |
| ♭VI | A♭ | Hùng tráng, nhạc phim |
| ♭VII | B♭ | Rock, "Mixolydian" |
| ♭III | E♭ | Sáng bất ngờ |
| ii° / iiø7 | D° / Dm7♭5 | Hạ át u tối |

::keyboard F4 Ab4 C5 | Fm — hợp âm iv mượn từ Đô thứ

Vòng **I – ♭VI – ♭VII – I** (C – A♭ – B♭ – C) là "kết anh hùng" nổi tiếng trong nhạc phim và game.

Khác với [[hop-am-at-phu]] (tạo lực hút về một hợp âm), hợp âm mượn chủ yếu thay đổi **màu sắc**. Hợp âm ♭VI, ♭III cũng là [[trung-am-cromatic]] của I. Liên quan: [[dieu-thuc]], [[vong-hop-am]].

## Mượn đổi màu, không đổi chức năng
Hợp âm mượn thay **tính chất** của hợp âm nhưng **giữ chức năng**: iv vẫn là hạ át như IV. Nốt hay được mượn nhất từ giọng thứ cùng tên là **♭6**, sau đó là ♭3 và ♭7. Hợp âm mượn phổ biến nhất trong giọng trưởng: **iv** và **♭VI**.

## Theo chiều ngược lại: quãng 3 Picardy
Trong giọng **thứ**, dạng mượn phổ biến duy nhất là **kết bằng hợp âm chủ trưởng** (quãng 3 Picardy) — rất thông dụng thế kỷ 16–17 (xem [[cau-ket]]).

## Schubert — bậc thầy pha trộn trưởng – thứ
[[Schubert]] gắn liền với thủ pháp này; nhà phê bình Eric Blom (1928) gọi đó là "thủ pháp ưa thích" của ông, thường dùng để diễn tả cảm xúc hai mặt. Ví dụ "Der Neugierige" trong *Die schöne Müllerin*: hợp âm chủ trưởng đổi thành **chủ thứ** đúng lúc nhân vật cất lời hỏi dòng suối.

## Trong nhạc rock
Hai tiến trình rất phổ biến: **I – ♭VII – ♭VI – ♭VII** và **I – ♭VI – IV**; ♭VI và ♭VII đến từ điệu Aeolian (thứ tự nhiên).
`,
  },
  {
    slug: 'chuyen-giong',
    title: 'Chuyển giọng',
    category: 'harmony',
    aliases: ['chuyển điệu', 'modulation', 'đổi tông', 'hợp âm chung', 'pivot chord'],
    summary: 'Chuyển trung tâm âm nhạc từ giọng này sang giọng khác, xác nhận bằng một kết ở giọng mới.',
    wiki: 'Modulation_(music)',
    refs: [
      ['Wikipedia — Modulation (music)', 'https://en.wikipedia.org/wiki/Modulation_(music)'],
      ['Puget Sound — Tonicization versus modulation', 'https://musictheory.pugetsound.edu/mt21c/TonicizationVersusModulation.html'],
      ['Harmony and Musicianship with Solfège — Enharmonic modulation and other types', 'https://pressbooks.pub/harmonyandmusicianshipwithsolfege/chapter/enharmonic-modulation-and-other-types-of-modulation/'],
      ['Open Music Theory 1e — Modulation', 'https://human.libretexts.org/Bookshelves/Music/Open_Music_Theory_1e/03:_Harmony/3.10:_Modulation'],
    ],
    body: `
## Các cách chuyển giọng
- **Qua hợp âm chung (pivot)**: tìm hợp âm thuộc cả hai giọng. Đô trưởng → Sol trưởng: Am là vi của C **và** ii của G → Am – D7 – G.
- **Qua át của giọng mới**: dùng [[hop-am-at-phu|hợp âm át]] của giọng đích rồi kết ở đó.
- **Trực tiếp (đột ngột)**: nhảy thẳng sang giọng mới, thường lên nửa cung hoặc một cung ở điệp khúc cuối bài pop ("truck driver's modulation").
- **Qua [[trung-am]]**: viết lại tên một [[hop-am-bay-giam|hợp âm 7 giảm]] hoặc [[hop-am-sau-tang|hợp âm 6 Đức]] để rẽ sang giọng xa.

## Giọng đích phổ biến
Giọng **át** (lên quãng 5), giọng **[[giong-song-song|song song]]**, giọng **hạ át** — tức các giọng họ hàng gần trên [[vong-quang-nam]].

## Nhận biết khi đọc nhạc
Xuất hiện đều đặn một [[dau-hoa]] lạ (ví dụ F♯ liên tục trong bài Đô trưởng) kèm [[cau-ket]] ở giọng mới → đã chuyển sang Sol trưởng.

Chuyển giọng là trụ cột của [[hinh-thuc-sonata]].

## Chuyển giọng hay chỉ chủ âm hoá?
Tiêu chí phân biệt chính: **có kết ở giọng mới** hay không. Chỉ nhấn mạnh vài hợp âm mà không có kết → [[hop-am-at-phu|chủ âm hoá]]; có ít nhất một kết ở giọng mới → chuyển giọng.

## Giọng họ hàng gần của Đô trưởng
Hoá biểu khác nhau **không quá một dấu**: **Sol trưởng, Fa trưởng, La thứ, Mi thứ, Rê thứ**. Chuyển sang các giọng này nghe mượt vì có nhiều nốt chung. Chuyển giọng qua hợp âm chung là cách **phổ biến nhất** trong nhạc cổ điển, thường dùng để đến giọng họ hàng gần.

## Thêm hai cách chuyển giọng
- **Qua nốt chung**: giữ một **nốt** (không phải hợp âm) của giọng cũ làm cầu nối, thường vang một mình rồi nhạc tiếp tục ở giọng mới. Ví dụ nốt Fa ngân trong Si♭ trưởng dẫn sang Fa trưởng.
- **Trùng âm qua hợp âm 6 Đức hoặc 7 giảm**: một hợp âm 7 át có thể được viết lại thành hợp âm [[hop-am-sau-tang|6 Đức]] (và ngược lại) bằng cách đổi tên nốt 7 thứ ↔ 6 tăng — dịch trung tâm giọng nửa cung. Hợp âm [[hop-am-bay-giam|7 giảm]] đối xứng nên mỗi nốt đều có thể làm cảm âm → bốn giọng đích. Kết hợp hai loại này có thể đi từ **bất kỳ giọng nào sang bất kỳ giọng nào** trong vài hợp âm — đặc trưng của thời **Lãng mạn**.

**"Truck driver modulation"** trong nhạc pop: đi từ hợp âm chủ cũ sang **hợp âm át của giọng mới** (cao hơn nửa cung hoặc một cung) rồi vào chủ mới.
`,
  },
  {
    slug: 'hop-am-6-va-add',
    title: 'Hợp âm 6 và hợp âm add',
    category: 'harmony',
    aliases: ['hợp âm 6', 'C6', 'Cm6', 'hợp âm add9', 'add9', 'add2', 'hợp âm thêm nốt', 'sixth chord', 'added tone chord'],
    summary: 'C6 (C–E–G–A) có cùng bốn nốt với Am7 nhưng khác nốt trầm và chức năng; Cadd9 thêm nốt 9 mà không có nốt 7 nên vẫn ổn định, còn C9 có nốt 7 thứ nên mang tính át.',
    wiki: 'Added_tone_chord',
    refs: [
      ['oolimo — Sixth chords', 'https://www.oolimo.com/en/chord-types/sixth-chords'],
      ['KVR Audio forum — Why a C6 is not an Am7?', 'https://kvraudio.com/forum/viewtopic.php?p=7191029'],
    ],
    body: `
## Hợp âm 6
Hợp âm ba trưởng thêm nốt [[quang|quãng 6 trưởng]] trên nốt gốc: **C6 = C – E – G – A**. Cm6 = C – E♭ – G – A.

::keyboard C4 E4 G4 A4 | C6: C – E – G – A

## C6 hay Am7?
Am7 = A – C – E – G: **cùng bốn nốt** với C6. Khác nhau ở:
| | C6 | Am7 |
|---|---|---|
| Nốt trầm thường dùng | C | A |
| Nốt gốc được nghe | C | A |
| Chức năng | Hợp âm chủ trưởng có màu sắc (thường thay cho I) | Hợp âm thứ — ví dụ ii trong Sol trưởng (hạ át) |

Tên hợp âm cho người chơi biết **nên nghe đâu là nốt gốc** (xem [[the-dao-hop-am]], [[chuc-nang-hoa-am]]). C6 rất hay gặp ở hợp âm kết của swing và nhạc pop cổ (xem [[ky-hieu-hop-am]]).

## Hợp âm add
Hợp âm ba **thêm một nốt** mà không thêm nốt 7:
| Ký hiệu | Nốt (gốc C) | Đặc điểm |
|---|---|---|
| **Cadd9** (Cadd2) | C – E – G – D | Không có nốt 7 → **ổn định**, hay dùng như hợp âm chủ có màu sắc |
| **C9** | C – E – G – B♭ – D | Có nốt **7 thứ** → mang tính **át**, muốn giải quyết (thường về F) — xem [[hop-am-mo-rong]] |
| Cmaj9 | C – E – G – B – D | Có nốt 7 trưởng → màu jazz, mơ màng |

::keyboard C4 D4 E4 G4 | Cadd9 xếp hẹp: C – D – E – G — nốt 9 sát nốt 3 tạo âm thanh "lấp lánh"

Điểm mấu chốt: **có nốt 7 hay không** quyết định hợp âm nghe ổn định hay căng (xem [[thuan-nghich]], [[hop-am-bay]]).
`,
  },
  {
    slug: 'luat-hoa-am-bon-be',
    title: 'Luật hoà âm bốn bè',
    category: 'harmony',
    aliases: ['luật hoà âm', 'part-writing', 'viết bè', 'hoà âm 4 bè SATB', 'nhân đôi', 'doubling', 'quãng 5 ẩn', 'hidden fifths', 'quãng 8 ẩn', 'hợp âm 6/4 kết', 'cadential 6/4'],
    summary: 'Bộ quy tắc viết hoà âm cho bốn bè Soprano – Alto – Tenor – Bass: âm vực, khoảng cách, nhân đôi, các lỗi quãng song song, nốt khuynh hướng và bốn loại hợp âm 6/4 — cùng lý do khoa học đằng sau.',
    wiki: 'Voice_leading',
    refs: [
      ['Open Music Theory — Chords in SATB style', 'https://viva.pressbooks.pub/openmusictheory/chapter/chords-in-satb-style/'],
      ['Open Music Theory — 6/4 chords as forms of prolongation', 'https://viva.pressbooks.pub/openmusictheory/chapter/64-chords-as-prolongations/'],
      ['Milne Open Textbooks — Guide to SATB part-writing', 'https://milnepublishing.geneseo.edu/fundamentals-function-form-workbook/front-matter/guide-to-satb-part-writing/'],
      ['Iowa State — Chord voicing and part writing, general principles', 'https://iastate.pressbooks.pub/comprehensivemusicianship/?p=359'],
      ['Iowa State — Part writing seventh chords', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/10-5-part-writing-seventh-chords-tutorial/'],
      ['Puget Sound, Music Theory for the 21st Century — Objectionable parallels', 'https://musictheory.pugetsound.edu/mt21c/ObjectionableParallels.html'],
      ['Wikipedia — Consecutive fifths', 'https://en.wikipedia.org/wiki/Consecutive_fifths'],
      ['Huron (2001), Music Perception — Tone and voice: a derivation of the rules of voice-leading from perceptual principles', 'https://muse.jhu.edu/book/47915'],
    ],
    body: `
## Vì sao có luật?
Các quy tắc viết bè được rút ra từ việc nghiên cứu thực tế sáng tác, đặc biệt là **thánh ca 4 bè của [[Bach]]**. Mục tiêu: mỗi bè là **một giai điệu độc lập** mà tai vẫn nghe tách bạch. Nhà tâm lý học David Huron (2001) chỉ ra rằng phần lớn các quy tắc truyền thống có thể **suy ra từ các nguyên lý cảm nhận thính giác** đã được thực nghiệm (như sự gần nhau về cao độ, sự hoà lẫn âm). Luật không phải để cấm đoán tuỳ tiện — mỗi luật bảo vệ sự rõ ràng của các bè.

## 1. Âm vực và cách viết
- Soprano và Alto viết trên khuông **khoá Sol**, Tenor và Bass trên khuông **khoá Fa**; đuôi nốt Soprano và Tenor quay lên, Alto và Bass quay xuống.
- Âm vực mỗi bè theo quy ước thông dụng trong sách giáo khoa (các sách chênh nhau đôi chút):
| Bè | Âm vực thường dùng |
|---|---|
| Soprano | C4 – G5 |
| Alto | G3 – C5 |
| Tenor | C3 – G4 |
| Bass | E2 – C4 |

## 2. Khoảng cách và vị trí
- Hai bè **liền nhau ở phía trên** (S–A, A–T) cách nhau **không quá một quãng 8**. Bass và Tenor được phép xa hơn.
- **Không bắt chéo bè**: bè dưới không vượt lên trên bè trên.

## 3. Nhân đôi
Hợp âm ba có 3 nốt nhưng có 4 bè, nên phải **nhân đôi** một nốt:
| Trường hợp | Nhân đôi |
|---|---|
| Hợp âm trưởng, thứ **nguyên vị** | Nhân đôi **nốt gốc** |
| Hợp âm **đảo 2** (6/4) | Nhân đôi **nốt bass** |
| **Cảm âm** | **Không bao giờ** nhân đôi (vì nó phải đi lên chủ âm — hai bè cùng đi lên sẽ tạo quãng 8 song song) |

## 4. Các lỗi chuyển động
Có bốn kiểu chuyển động giữa hai bè: **song song, cùng chiều, ngược chiều, xiên** (xem [[doi-am]]).
- **Quãng 5 và quãng 8 song song** (hai bè cách nhau quãng 5 hoặc 8 rồi cùng chuyển sang quãng 5 hoặc 8 khác): bị cấm vì làm hai bè **"dính" vào nhau**, mất độc lập. Lịch sử: Johannes de Garlandia là người đầu tiên cấm (khoảng năm 1300), dù thế kỷ 14 vẫn còn dùng nhiều; quy ước ổn định từ khoảng **1450**.
- **Quãng 5 và 8 ẩn** (trực tiếp): **hai bè ngoài** (Soprano và Bass) đi **cùng chiều** tới một quãng 5 hoặc 8, trong khi Soprano **nhảy**. Nếu Soprano đi **liền bậc** thì được chấp nhận. Một số giáo viên chặt hơn, tránh cả khi Soprano đi liền bậc.
- **Quãng 2 tăng** trong giọng thứ (bậc 6 lên bậc 7 nâng) — tránh trong một bè (xem [[am-giai-thu]]).

## 5. Nốt khuynh hướng
| Nốt | Phải đi | Ngoại lệ |
|---|---|---|
| **Cảm âm** (bậc 7) | Lên chủ âm | Ở bè **giữa** (Alto, Tenor) có thể **xuống quãng 3** về bậc 5 — tai ít chú ý bè giữa hơn |
| **Nốt 7 của hợp âm 7** | **Xuống liền bậc** | Trong V7 → I, nốt 7 (bậc 4) xuống bậc 3 |

Nốt 7 của hợp âm 7 cũng nên được **chuẩn bị**: đến bằng nốt chung (như một [[not-ngoai-hop-am|nốt trễ]]) hoặc bằng bước liền bậc. Khi V7 nguyên vị → I nguyên vị, hai nốt khuynh hướng kéo ngược nhau; cách giải: để **một hợp âm thiếu nốt 5**, hoặc cho cảm âm ở bè giữa xuống quãng 3.

## 6. Bốn loại hợp âm 6/4
Hợp âm [[the-dao-hop-am|đảo 2]] nghe chưa ổn định nên chỉ dùng trong bốn tình huống:
| Loại | Bè trầm | Cách dùng |
|---|---|---|
| **6/4 kết** | Bậc 5, đứng yên rồi đi tiếp V | Thực chất là **V được trang trí**: nốt 6 và 4 trên bass xuống 5 và 3 — ghi V6/4–5/3 |
| **6/4 lướt** | Đi **liền bậc** qua nốt giữa | Nằm giữa hai hợp âm **cùng chức năng** (ví dụ I – V6/4 – I6) |
| **6/4 thêu** (6/4 bass ngân) | **Đứng yên** | Hai bè trên đi lên nốt thêu rồi về (ví dụ I – IV6/4 – I) |
| **6/4 rải** | Nhảy qua các nốt của **một hợp âm** | Bass rải hợp âm (như kiểu đệm valse) |

## 7. Cách nối hai hợp âm
1. **Giữ nốt chung** trong cùng bè.
2. Các bè khác đi tới **nốt gần nhất** của hợp âm mới, ưu tiên liền bậc.
3. Nếu **không có nốt chung**, cho ba bè trên đi **ngược chiều** với bass.

## Bảng kiểm tra lỗi (sau khi viết xong)
- [ ] Mỗi bè trong âm vực? Khoảng cách S–A, A–T ≤ quãng 8?
- [ ] Không bắt chéo bè?
- [ ] Nhân đôi đúng? Không nhân đôi cảm âm?
- [ ] Không có quãng 5 / 8 song song giữa **bất kỳ cặp bè nào**?
- [ ] Không có quãng 5 / 8 ẩn ở hai bè ngoài khi Soprano nhảy?
- [ ] Cảm âm lên, nốt 7 xuống?
- [ ] Hợp âm 6/4 thuộc một trong bốn loại trên?

Xem nguyên lý chung ở [[dan-giong]]; áp dụng ở [[phoi-hoa-am-giai-dieu]]. Quy tắc này thuộc **hoà âm cổ điển** — nhiều nhà soạn nhạc thế kỷ 20 cố ý phá bỏ, ví dụ [[hoa-am-song-song]].
`,
  },
  {
    slug: 'phan-tich-hoa-am',
    title: 'Phương pháp phân tích hoà âm',
    category: 'harmony',
    aliases: ['phân tích hoà âm', 'harmonic analysis', 'cách phân tích hợp âm', 'ghi số La Mã', 'tìm hợp âm trong bản nhạc'],
    summary: 'Quy trình 7 bước để phân tích hoà âm một bản nhạc: xác định giọng và nhịp điệu hoà âm, liệt kê nốt, tách nốt ngoài hợp âm, ghi số La Mã, kiểm tra bè trầm và gọi tên các kết.',
    refs: [
      ['learnmusictheory.net — Harmonic analysis 1: homophonic texture (PDF)', 'https://learnmusictheory.net/PDFs/pdffiles/01-05-04-HarmonicAnalysis1HomophonicTexture.pdf'],
      ['Open Music Theory — Performing harmonic analysis using the phrase model', 'https://viva.pressbooks.pub/openmusictheory/chapter/performing-harmonic-analysis-using-the-phrase-model/'],
      ['Puget Sound, Music Theory for the 21st Century — Suspension', 'https://musictheory.pugetsound.edu/mt21c/Suspension.html'],
      ['Fiveable — Nonchord tone (AP Music Theory)', 'https://fiveable.me/ap-music-theory/key-terms/nonchord-tone.md'],
      ['Wikipedia — Gottfried Weber (multiple meaning)', 'https://en.wikipedia.org/wiki/Gottfried_Weber'],
    ],
    body: `
Phân tích hoà âm là kỹ năng cốt lõi để **hiểu** bản nhạc mình chơi — giúp [[hoc-thuoc-bai|học thuộc]] (trí nhớ phân tích), [[thi-tau|thị tấu]] và [[dien-dat-cau-nhac|diễn đạt câu nhạc]]. Nên bắt đầu với nhạc **thời Cổ điển** có kết cấu chủ điệu rõ (Mozart, Haydn, Clementi, Beethoven).

## Quy trình 7 bước
**1. Xác định giọng và nhịp điệu hoà âm.** Đọc [[hoa-bieu]], nhìn nốt cuối bè trầm, tìm [[dau-hoa|dấu hoá]] lạ (cảm âm của giọng thứ). Sau đó xác định **chỗ hợp âm đổi** — tốc độ đổi hợp âm gọi là **nhịp điệu hoà âm**. Trong kết cấu chủ điệu, nó thường trùng với nhịp của phần đệm.

**2. Liệt kê nốt.** Với mỗi hợp âm, ghi các nốt từ thấp lên cao, bỏ nốt trùng, rồi xếp thành **chồng quãng 3** để tìm **nốt gốc**.

**3. Tách nốt ngoài hợp âm.** Gạch bỏ các [[not-ngoai-hop-am|nốt lướt, nốt thêu, nốt trễ, nốt dựa, nốt thoát]] **trước** khi kết luận hợp âm. Ký hiệu nhanh: P (lướt), N (thêu), SUS (trễ), APP (dựa), ET (thoát).

**4. Ghi số La Mã.** Xác định tính chất (trưởng, thứ, giảm, tăng) và bậc của nốt gốc: chữ **hoa** cho trưởng, chữ **thường** cho thứ; thêm ký hiệu [[the-dao-hop-am|thể đảo]].

**5. Kiểm tra bè trầm.** Bè trầm phải khớp với ký hiệu thể đảo đã ghi.

**6. Gọi tên các kết** ở cuối mỗi câu (xem [[cau-ket]]):
| Kết | Điều kiện |
|---|---|
| Kết chính hoàn toàn (PAC) | V **nguyên vị** → I **nguyên vị**, Soprano kết ở **chủ âm** |
| Kết chính không hoàn toàn (IAC) | Thiếu một trong các điều kiện trên |
| Kết nửa (HC) | Dừng ở **V** |
| Kết lừa | V → vi (hoặc hợp âm khác thay I) |
| Kết plagal | IV → I |

**7. Kiểm tra lại**: mọi nốt hoặc là nốt hợp âm, hoặc là nốt ngoài hợp âm đã gọi tên; cảm âm đi lên, nốt 7 của hợp âm đi xuống; kết đặt đúng tên.

Cuối cùng, ghi **chức năng** (T – PD – D – T) cho cả câu theo [[he-thong-hoa-am-co-dien|mô hình câu nhạc]].

## Mẹo và bẫy thường gặp
- **Bắt đầu từ hai bè ngoài** (Soprano và Bass); bè giữa dễ gây nhầm.
- **Ưu tiên nốt ở phách mạnh**: ví dụ ba nốt F–A (thiếu một nốt) có thể là Fa trưởng thiếu C, hoặc Rê thứ thiếu D — nốt ở phách mạnh và hợp âm trước/sau giúp quyết định.
- **Nốt 7 của V7 hay nốt trễ?** Nốt 7 của hợp âm cũng đi xuống liền bậc như nốt trễ, nhưng nó **thuộc hợp âm**. Hãy hỏi: nốt này có trong ký hiệu hợp âm không?
- **Nốt trễ ở kết**: kết thường có nốt trễ 4–3 trên V. Gọi tên nốt trễ là nốt ngoài hợp âm, và gọi tên kết theo **hợp âm gốc** (V – I).
- **Nốt ngoài hợp âm không phải "nốt sai"**: chúng đúng phong cách khi đi theo các mẫu quen thuộc.
- **Một hợp âm, nhiều nghĩa**: như Weber chỉ ra, Đô trưởng có thể là I, IV hay V tuỳ giọng — vì vậy luôn xác định **giọng của đoạn đó** trước (có thể đã [[chuyen-giong|chuyển giọng]]).
- Ghi phân tích bằng **bút chì** dưới khuông; đánh dấu nốt ngoài hợp âm trước khi viết số La Mã.

## Bài phân tích mẫu trong thư viện
[[phan-tich-prelude-do-truong]] (rải hợp âm — rất hợp để luyện bước 2), [[phan-tich-sonata-k545]], [[phan-tich-fur-elise]], [[phan-tich-nocturne-op9-so2]], [[phan-tich-canon-pachelbel]].
`,
  },
  {
    slug: 'phoi-hoa-am-giai-dieu',
    title: 'Phối hoà âm cho giai điệu',
    category: 'harmony',
    aliases: ['phối hoà âm', 'đặt hợp âm cho giai điệu', 'harmonize a melody', 'harmonization', 'soạn hợp âm', 'làm hoà âm'],
    summary: 'Các bước đặt hợp âm cho một giai điệu: xác định câu và kết trước, chọn nhịp điệu hoà âm, loại trừ hợp âm không hợp, viết bè trầm, rồi điền bè giữa — kèm các mẹo thực hành.',
    refs: [
      ['Iowa State, Comprehensive Musicianship — Introduction to harmonizing a melody', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/11-1-introduction-to-harmonizing-a-melody-tutorial/'],
      ['Iowa State — Harmonizing a melody with root position triads', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/11-2-harmonizing-a-melody-with-root-position-triads-theory-exercises/'],
      ['Iowa State — Harmonizing a melody with seventh chords', 'https://iastate.pressbooks.pub/comprehensivemusicianship/chapter/11-4-harmonizing-a-melody-with-seventh-chords-tutorial/'],
      ['CUNY — Harmonize a melody (course document, PDF)', 'https://gcmteachinghub.commons.gc.cuny.edu/wp-content/blogs.dir/18213/files/2023/06/Scott-Miller-Harmonize-a-Melody-1.pdf'],
    ],
    body: `
Phối hoà âm là **ngược** với phân tích: có giai điệu, cần tìm hợp âm. Đây là kỹ năng giáo viên piano dùng hằng ngày — đệm hát, soạn bài cho học sinh, viết phần tay trái cho một giai điệu đơn giản.

## Quy trình
**1. Liệt kê nguyên liệu.** Viết ra các [[hop-am-ba|hợp âm ba]] của giọng ở **nguyên vị**. Dưới mỗi nốt giai điệu, ghi **những hợp âm có chứa nốt đó** (mỗi nốt thuộc ba hợp âm ba).

**2. Tìm câu nhạc và kết — trước khi chọn bất cứ hợp âm nào.** Xác định chỗ giai điệu dừng (cuối [[cau-nhac|câu]]) và quyết định **kết mạnh hay yếu**:
- Chỗ ngắt giữa → kết yếu hơn (thường [[cau-ket|kết nửa]] ở V).
- Chỗ kết bài → kết mạnh (V – I). Kết càng mạnh khi giai điệu kết ở **bậc 1**.

**3. Chọn nhịp điệu hoà âm** — bao lâu đổi hợp âm một lần (mỗi ô nhịp, mỗi nửa ô…). Giữ nhịp điệu hoà âm **tương tự** giữa các câu giống nhau giúp bài có sự thống nhất.

**4. Loại trừ.** Gạch bỏ những hợp âm không dẫn được tới kết đã chọn, hoặc tạo tiến trình ngược mô hình T – PD – D – T (xem [[he-thong-hoa-am-co-dien]]). Ví dụ kết chính ở ô cuối **bắt buộc** V – I.

**5. Chọn tiến trình, nghĩ đến bè trầm.** Ở đầu bài, xác lập giọng nhưng **đừng dùng hết hợp âm mạnh ngay** để còn lực đẩy về sau. Dùng [[the-dao-hop-am|thể đảo]] để bè trầm **đi liền bậc** — ví dụ hợp âm chủ đảo 1 cho bè trầm hay hơn.

**6. Viết bè trầm và kiểm tra với giai điệu** — trước khi viết bè giữa: tránh quãng 5/8 song song giữa giai điệu và bè trầm; sửa lúc này dễ hơn nhiều.

**7. Điền bè giữa** theo [[luat-hoa-am-bon-be]]: giữ nốt chung, đi tới nốt gần nhất; không có nốt chung thì đi ngược chiều bass. Cuối cùng soát lỗi.

## Mẹo
- **Người mới**: bắt đầu chỉ với hợp âm ba **nguyên vị** và trục **I – V**. Chuỗi I – V – I – V – I là chuyển động cơ bản nhất, chỉ nghe "đơn điệu" khi thiếu thể đảo.
- Sau đó thêm **IV và ii** (hạ át), rồi **vi**; cuối cùng mới đến [[hop-am-bay|hợp âm 7]], [[hop-am-at-phu|át phụ]] và [[hop-am-muon|hợp âm mượn]].
- Nhân đôi: hợp âm nguyên vị nhân đôi nốt gốc; hợp âm 6/4 nhân đôi nốt bass.
- Nốt giai điệu ở **phách nhẹ** thường không cần hợp âm riêng — có thể là [[not-ngoai-hop-am|nốt lướt hoặc nốt thêu]].
- **Trên piano**: khi đã có tiến trình, chọn một [[dem-hat-piano|kiểu đệm]] và dùng [[dan-giong|dẫn giọng]] gần nhất để tay phải ít di chuyển. Để tô màu: [[tai-hoa-am]].
`,
  },
  {
    slug: 'hoa-am-song-song',
    title: 'Hoà âm song song',
    category: 'harmony',
    aliases: ['planing', 'chuyển động song song của hợp âm', 'hợp âm trượt', 'parallel chords', 'parallelism', 'hoà âm trượt'],
    summary: 'Cả hợp âm di chuyển song song, mọi nốt cùng đi một quãng — thủ pháp đặc trưng của Debussy, cố ý phá luật cấm quãng 5 và 8 song song của hoà âm cổ điển.',
    wiki: 'Parallel_harmony',
    refs: [
      ['Wikipedia — Parallel harmony', 'https://en.wikipedia.org/wiki/Parallel_harmony'],
      ['Wikipedia — La cathédrale engloutie', 'https://en.wikipedia.org/wiki/La_cath%C3%A9drale_engloutie'],
      ['Andy Brick — Contemporary theory notes: planing', 'https://personal.stevens.edu/~abrick/contemp_theory/contemp_theory_notes_11.html'],
      ['Puget Sound, Music Theory for the 21st Century — Impressionism', 'https://musictheory.pugetsound.edu/mt21c/Impressionism.html'],
    ],
    body: `
**Hoà âm song song** (planing): mọi nốt của hợp âm cùng đi lên hoặc xuống **một khoảng như nhau** — cả khối hợp âm "trượt" trên bàn phím. Trong [[luat-hoa-am-bon-be|hoà âm cổ điển]] đây là lỗi (quãng 5 và 8 song song); ở đây nó là **chủ ý**: các bè không còn là giai điệu độc lập mà hoà làm **một dải màu âm thanh**.

## Hai loại
| Loại | Cách làm | Kết quả |
|---|---|---|
| **Song song diatonic** | Hợp âm trượt **theo các nốt của âm giai** (chỉ phím trắng chẳng hạn) | **Tính chất** hợp âm thay đổi (trưởng, thứ, giảm…) theo âm giai |
| **Song song cromatic** (song song "thật") | Mọi nốt di chuyển **đúng cùng một quãng** | Tính chất hợp âm **giữ nguyên**; nhanh chóng ra khỏi giọng |

Mọi loại hợp âm đều có thể trượt song song: hợp âm ba, hợp âm 7 – 9, hợp âm [[hoa-am-quang-bon|quãng 4]], [[am-cum|cụm âm]].

::staff treble C4+E4+G4 D4+F4+A4 E4+G4+B4 F4+A4+C5 | Song song diatonic: cùng hình dạng trên phím trắng — C, Dm, Em, F
::staff treble C4+E4+G4 D4+F#4+A4 E4+G#4+B4 F#4+A#4+C#5 | Song song cromatic: luôn là hợp âm trưởng — C, D, E, F♯

## Lịch sử
- Hát song song quãng 4, quãng 5 đã có từ **organum** thời Trung cổ (sách *Musica enchiriadis*) — xem [[ket-cau]].
- Hoà âm cổ điển cấm chuyển động này để giữ các bè độc lập.
- Cuối thế kỷ 19 – đầu thế kỷ 20, hợp âm trượt song song trở thành dấu hiệu của **trường phái ấn tượng**; một nguồn cho rằng hoà âm quãng 4 song song đã xuất hiện trong tác phẩm năm 1891 của [[Satie]]. [[Debussy]] dùng trong nhiều tác phẩm: *Prélude à l'après-midi d'un faune*, *Nocturnes*, *La Mer*… (xem [[an-tuong]]).

## Ví dụ: "La cathédrale engloutie" (Debussy)
Prelude số 10 tập 1 mô tả nhà thờ chìm dưới biển trong một truyền thuyết. Hợp âm đầu tiên chỉ có **quãng 5 trống** (Sol – Rê); các hợp âm mở đầu vạch ra một **âm giai ngũ cung** Sol trưởng. Các nguồn liên hệ chất liệu này với nhạc **gamelan** Java mà Debussy nghe ở Triển lãm Thế giới 1889 và với **organum** song song quãng 5. Những khối hợp âm trượt song song gợi tiếng **chuông** ngân vang.

## Trên piano
- Song song cromatic: giữ **nguyên thế tay**, dịch cả bàn tay — kỹ thuật như [[buoc-nhay-xa|di chuyển khối]].
- Song song diatonic: giữ khoảng cách ngón trên các phím của âm giai, chất lượng hợp âm tự đổi.
- Hãy dùng [[ban-dap|pedal]] theo tai: Debussy gần như không ghi pedal.

Tổng quan các thủ pháp thế kỷ 20: [[hoa-am-the-ky-20]].
`,
  },
]

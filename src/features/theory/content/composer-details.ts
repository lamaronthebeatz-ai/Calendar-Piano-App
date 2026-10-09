import type { Person } from './people'

/**
 * Nội dung chi tiết cho các nhà soạn nhạc hay gặp khi dạy piano: tiểu sử ngắn và tác phẩm theo
 * cấp độ. Khoá là tên đúng như trong composers.ts. Cấp độ chỉ là tương đối — mỗi nhà xuất bản
 * dùng thang riêng (xem lo-trinh-tac-pham).
 */
export const COMPOSER_DETAILS: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Johann Sebastian Bach': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1685 | Sinh ở Eisenach (Đức), trong một gia đình nhạc sĩ nhiều đời |
| 1708–1717 | Nhạc sĩ organ, rồi Konzertmeister (trưởng dàn nhạc) ở triều đình Weimar |
| 1717–1723 | Nhạc trưởng triều đình Köthen — thời kỳ viết nhiều nhạc khí, trong đó có tập 1 [[luat-binh-quan|Clavier bình quân]] (1722) |
| 1723–1750 | Cantor nhà thờ Thomaskirche ở Leipzig cho đến khi mất |

Âm nhạc của Bach là đỉnh cao của [[doi-am]] và [[fugue]]. Sau khi ông mất, các tác phẩm lớn ít được biểu diễn rộng rãi; năm 1829 [[Mendelssohn]] dàn dựng lại *Cuộc khổ nạn theo Thánh Matthew*, mở đầu sự phục hưng âm nhạc Bach.

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ cấp | [[phan-tich-minuet-sol-truong|Minuet Sol trưởng BWV Anh. 114]] (sách Anna Magdalena) | Từ năm 1970 được xác định là của **Christian Petzold**, không phải Bach |
| Sơ cấp | Minuet Sol thứ BWV Anh. 115, Minuet Sol trưởng Anh. 116, Hành khúc Rê trưởng Anh. 122 | Trong các tuyển tập "bài dễ" của Bärenreiter |
| Sơ – trung cấp | Little Preludes (BWV 924, 926, 927, 933–938, 939, 942…) | Bước tiếp theo sau các minuet |
| Trung cấp | [[lo-trinh-tac-pham|Inventions 2 bè]] BWV 772–786 (bắt đầu [[phan-tich-invention-so-1|số 1]], số 8) | Luyện hai tay độc lập |
| Trung cấp cao | Sinfonia (Inventions 3 bè), các tổ khúc | |
| Nâng cao | Clavier bình quân, Goldberg Variations | Xem [[phan-tich-prelude-do-truong]] |

Số BWV và các phiên bản có thể khác nhau giữa các ấn bản.
`,
    refs: [
      ['Bärenreiter — Bach: Little piano pieces', 'https://www.barenreiter.co.uk/little-piano-pieces.html'],
      ['Bärenreiter — Bach: Easy piano pieces and dances', 'https://barenreiter.co.uk/easy-piano-pieces-and-dances-piano-j-s-bach.html'],
      ['PTNA — Minuet in G BWV Anh. 114', 'https://enc.piano.or.jp/en/musics/22592'],
    ],
  },

  'Wolfgang Amadeus Mozart': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1756 | Sinh ở Salzburg; cha là [[Leopold Mozart]] — nhạc sĩ và thầy dạy |
| 1761–1764 | Những sáng tác đầu tiên (từ 5 tuổi), được chép trong **sổ nhạc của chị gái Nannerl** |
| 1760s–1770s | Lưu diễn khắp châu Âu cùng gia đình khi còn nhỏ |
| 1781 | Rời Salzburg, sống tự do ở Vienna |
| 1791 | Mất ở Vienna, để lại bản Requiem dang dở |

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ cấp | Các bài trong **sổ nhạc Nannerl**: Minuet K. 1, Minuet Fa trưởng **K. 2**, Allegro K. 3, Minuet K. 5 | 17 bài Mozart viết khi 5–8 tuổi, đều dễ chơi |
| Trung cấp | **6 Sonatina Vienna** (K. 439b) | Chuyển soạn từ các divertimento cho kèn (1783), người chuyển soạn có lẽ là Ferdinand Kauer; được xếp ở mức trung cấp |
| Trung cấp | **Sonata Đô trưởng K. 545** | "Dành cho người mới học" — xem [[phan-tich-sonata-k545]] |
| Trung – cao | Sonata K. 331 (có [[phan-tich-rondo-alla-turca|Rondo alla Turca]]), biến tấu "Ah vous dirai-je, Maman" | |
| Nâng cao | Các sonata và concerto lớn | |
`,
    refs: [
      ['Wikipedia — Nannerl Notenbuch', 'https://en.wikipedia.org/wiki/Nannerl_Notenbuch'],
      ['Alfred — Mozart: 6 Viennese Sonatinas (Juilliard Store listing)', 'https://juilliardstore.com/products/mozart-6-viennese-sonatinas-pf-00-1707'],
    ],
  },

  'Ludwig van Beethoven': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1770 | Sinh ở Bonn (Đức) |
| 1792 | Chuyển đến Vienna; học với [[Haydn]]; nổi tiếng trước hết là nghệ sĩ piano ứng tác |
| cuối 1790s | Bắt đầu bị suy giảm thính lực |
| 1802 | Viết "Di chúc Heiligenstadt" — bức thư bày tỏ tuyệt vọng vì bệnh điếc |
| 1800–1802 | Dạy piano cho [[Czerny]] khi Czerny còn nhỏ |
| 1827 | Mất ở Vienna |

Ông là cầu nối giữa thời [[thoi-ky-co-dien|Cổ điển]] và [[thoi-ky-lang-man|Lãng mạn]]; 32 sonata piano của ông được [[hans-von-bulow|Hans von Bülow]] ví là "Tân Ước" của văn học piano (Clavier bình quân của Bach là "Cựu Ước").

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ – trung cấp sớm | **Sonatina Sol trưởng Anh. 5 số 1** | Bài dạy rất phổ biến, nhưng giới nghiên cứu **nghi ngờ** Beethoven là tác giả (tìm thấy trong giấy tờ sau khi ông mất) |
| Sơ – trung cấp | Écossaise Mi♭ WoO 86, Sáu Écossaise WoO 83, Sonatina Fa trưởng | Có trong tuyển tập *My First Beethoven* (Schott) |
| Trung cấp | **[[phan-tich-fur-elise|Für Elise]]** WoO 59; Bagatelle Op. 33 số 3 và số 6 | |
| Trung – cao | Sonata "Pathétique" Op. 13 ([[phan-tich-pathetique-chuong-2|chương 2]]), chương 1 Sonata "[[phan-tich-anh-trang-chuong-1|Ánh trăng]]" | Ô nhịp 3 của "Ánh trăng" có [[hop-am-napoli]] |
| Nâng cao | Các sonata còn lại, concerto | |
`,
    refs: [
      ['Wikipedia — Sonatina in G major (attributed to Beethoven)', 'https://en.wikipedia.org/wiki/Sonatina_in_G_major_(attributed_to_Beethoven)'],
      ['Schott — My First Beethoven', 'https://www.schott-music.com/en/my-first-beethoven-noc331975.html'],
      ['Interlude — Carl Czerny: Beethoven\'s student and Liszt\'s teacher', 'https://interlude.hk/carl-czerny-born-on-february-21-1791-beethovens-student-and-liszts-teacher/'],
    ],
  },

  'Frédéric Chopin': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1810 | Sinh ở Żelazowa Wola, gần Warsaw (Ba Lan); mẹ người Ba Lan, cha người Pháp |
| 1830 | Rời Ba Lan; không bao giờ trở về |
| 1831 | Định cư ở Paris — dạy đàn, chơi trong các salon, ít biểu diễn công khai |
| 1838–1847 | Thời gian gắn bó với nhà văn George Sand |
| 1849 | Mất ở Paris vì bệnh lao |

Gần như toàn bộ tác phẩm của Chopin viết cho piano — xem các thể loại ở [[the-loai]] và cách chơi rubato ở [[nhip-do]].

## Tác phẩm piano theo cấp độ
Chopin không có bài cho người mới bắt đầu. Các tuyển tập "dễ nhất" (như *14 of His Easiest Piano Selections* của Alfred) được xếp ở mức **trung cấp – trung cấp cao**:
| Tác phẩm | Ghi chú |
|---|---|
| [[phan-tich-prelude-mi-thu-op28-so4|Prelude Mi thứ Op. 28 số 4]] | Thường là bài Chopin đầu tiên được giao |
| [[phan-tich-prelude-la-truong-op28-so7|Prelude La trưởng Op. 28 số 7]], Prelude Si thứ Op. 28 số 6 | |
| Mazurka Fa trưởng Op. 68 số 3 | Làm quen tiết tấu mazurka |
| Valse La thứ (xuất bản sau khi mất) | |
| Nocturne Sol thứ Op. 37 số 1 | Một nocturne dễ hơn |
| [[phan-tich-nocturne-op9-so2|Nocturne Op. 9 số 2]] | Khó hơn, nhiều hoa mỹ |
`,
    refs: [
      ['Alfred — Chopin: 14 of His Easiest Piano Selections', 'https://www.alfred.com/products/chopin-14-of-his-easiest-piano-selections-a-practical-performing-edition-00-pb-0000868'],
      ['Schott — My First Chopin', 'https://www.schott-music.com/en/my-first-chopin-noc333233.html'],
    ],
  },

  'Carl Czerny': {
    more: `
## Tiểu sử ngắn
- Sinh năm **1791** ở Vienna; học piano đầu tiên với cha (Wenzel Czerny), rồi với **[[Beethoven]]** — các buổi học dừng lại khoảng năm 1802 nhưng hai người vẫn là bạn thân. Ông cũng chịu ảnh hưởng của [[Clementi]] và [[johann-nepomuk-hummel|Hummel]].
- Bắt đầu dạy đàn ở Vienna từ năm **15 tuổi**; học trò có cháu trai của Beethoven và nổi tiếng nhất là **[[Liszt]]** (từ 1821, Czerny không lấy học phí). Liszt về sau đề tặng thầy bộ *Transcendental Études*.
- Sáng tác **gần 1.000** tác phẩm (số opus lên tới hơn 800, nhiều số bị dùng lặp, cùng hàng trăm tác phẩm không có số opus).
- Mất năm **1857** ở Vienna.

## Các tuyển tập luyện tập theo thứ tự độ khó
| Tuyển tập | Nội dung |
|---|---|
| **Op. 599** — Phương pháp thực hành cho người mới học | 100 bài, xếp theo kỹ năng cần luyện |
| **Op. 849** — 30 bài luyện kỹ thuật mới | "Cầu nối" giữa Op. 599 và Op. 299 |
| **Op. 299** — Trường phái tốc độ (School of Velocity) | Luyện chạy ngón nhanh cho cả hai tay |
| **Op. 740** — Nghệ thuật khéo léo của ngón tay | Nâng cao |

Thứ tự Op. 849 – 299 – 740 chủ yếu dựa trên ý kiến giáo viên và nhà xuất bản, chưa phải một thang chuẩn. Xem tranh luận về bài tập ngón ở [[bai-tap-ngon]].
`,
    refs: [
      ['Britannica — Carl Czerny', 'https://www.britannica.com/print/article/149245'],
      ['Interlude — Carl Czerny: Beethoven\'s student and Liszt\'s teacher', 'https://interlude.hk/carl-czerny-born-on-february-21-1791-beethovens-student-and-liszts-teacher/'],
      ['Musicroom — Czerny: Collected studies Op. 299, 740, 849', 'https://www.musicroom.com/carl-czerny-collected-studies-op-299-op-740-op-849-hl50499876'],
    ],
  },

  'Friedrich Burgmüller': {
    more: `
## Tiểu sử ngắn
- Sinh ngày **4/12/1806** ở **Regensburg** (Đức); học nhạc với cha (cũng là nhạc sĩ). Em trai Norbert Burgmüller là một nhà soạn nhạc tài năng nhưng mất sớm.
- Chuyển đến **Paris** (năm 1832 theo đa số nguồn, có nguồn ghi 1834), trở thành thầy dạy piano rất thành công; nhập quốc tịch Pháp năm 1842.
- Viết nhạc ballet *La Péri* (1843) và đoạn "Peasant Pas de Deux" được chèn vào ballet *Giselle* của Adolphe Adam (1841).
- Từ 1855 lui về Beaulieu (Pháp) và mất ở đó năm **1874**.

## Ba tuyển tập étude
| Tuyển tập | Trình độ |
|---|---|
| **Op. 100** — 25 bài luyện dễ và tiến bộ | **Trung cấp sớm** (khoảng Grade 2–5); mỗi bài có tên gợi hình ảnh |
| **Op. 105** — 12 bài luyện | Cao hơn |
| **Op. 109** — 18 bài luyện đặc trưng | Cao hơn |

Các bài Op. 100 số 9 (La Chasse), 15 (Ballade), 20 (La Tarentelle), 21 (Barcarolle) hợp trình độ Grade 4–5 — xem [[lo-trinh-tac-pham]]. Mỗi bài là một bài học về [[dien-dat-cau-nhac|diễn đạt]] và tính chất.
`,
    refs: [
      ['Wikipedia — Friedrich Burgmüller', 'https://en.wikipedia.org/wiki/Friedrich_Burgm%C3%BCller'],
      ['Carl Maria von Weber Gesamtausgabe — Burgmüller, Friedrich', 'https://weber-gesamtausgabe.de/en/A0025C9.html'],
      ['Engadine Music — Burgmüller Op. 100 grade listing', 'https://engadinemusic.com.au/collections/august-print-special/grade_grade-2?page=4'],
    ],
  },

  'Muzio Clementi': {
    more: `
## Tiểu sử ngắn
- Sinh tháng **1/1752** ở **Rome**; cha là thợ bạc. Sir Peter Beckford, một người Anh giàu có, đưa ông sang Anh để tiếp tục học (khoảng năm 1766).
- **Đêm Giáng sinh 1781**, Hoàng đế Joseph II tổ chức một cuộc "thi tài" piano giữa Clementi và **[[Mozart]]** ở Vienna. Hai người ngẫu hứng, chơi tác phẩm của mình và cùng thị tấu sonata của Paisiello; Hoàng đế tuyên bố **hoà**. Trong thư gửi cha, Mozart chê Clementi là "một người thợ máy" (*mechanicus*). Ngược lại, Clementi sau này kể rằng ông chưa từng nghe ai chơi với tinh thần và duyên dáng như Mozart.
- Từ 1782 sống hẳn ở **London**, chỉ rời đi khi lưu diễn châu Âu. Ông lập lại công ty **xuất bản nhạc và sản xuất đàn piano** (1798). Lối chơi [[cach-dien-tau|legato]] trôi chảy của ông ảnh hưởng đến cả một thế hệ: [[john-field|John Field]], Johann Baptist Cramer, Ignaz Moscheles, [[Czerny]].
- Bộ étude **Gradus ad Parnassum** Op. 44 gồm 100 bài, in thành 3 tập (1817, 1819, 1826).
- Thế kỷ 19 gọi ông là "cha đẻ của piano" — đây là lời tôn vinh, không phải danh hiệu chính thức. Mất năm **1832**.

## Sonatina Op. 36 theo cấp độ
Phân tích chương 1 của số 1: [[phan-tich-sonatina-clementi-op36-1]].
Sáu sonatina được **đánh số theo độ khó tăng dần**. Mức dưới đây theo thang của Piano Street (đọc từ bảng, nên chỉ mang tính tương đối):
| Sonatina | Giọng | Mức (Piano Street) |
|---|---|---|
| Số 1 | Đô trưởng | 3 |
| Số 2 | Sol trưởng | 4 |
| Số 4 | Fa trưởng | 5 |
| Số 5 | Sol trưởng | 6 |
| Số 6 | Rê trưởng | 6 |

Số 1 thường được xếp **trung cấp thấp – trung cấp**; các chương nhanh là phần khó nhất. Ấn bản ABRSM (gộp Op. 36 với Op. 4) ghi Grade 5–8 cho **cả tập**, không phải cho từng bài. Học xong Op. 36 thường chuyển sang sonatina của [[Kuhlau]] — xem [[lo-trinh-tac-pham]] và [[hinh-thuc-sonata]].
`,
    refs: [
      ['Kennedy Center — Muzio Clementi', 'https://www.kennedy-center.org/artists/c/ca-cn/muzio-clementi/'],
      ['Mozart Documents — 24 December 1781', 'https://www.mozartdocuments.org/documents/24-december-1781/'],
      ['PTNA Piano Encyclopedia — Clementi', 'https://enc.piano.or.jp/en/persons/85'],
      ['Piano Street — Clementi Sonatinas', 'https://www.pianostreet.com/clementi-sheet-music/sonatinas'],
      ['Da Capo Academy — Easy Clementi sonatinas', 'https://dacapomusic.ca/easy-clementi-sonatinas'],
      ['Performers Music — Sonatinas Op. 36 and Op. 4 (ABRSM)', 'https://www.performersmusicchicago.com/sonatinas-op-36-and-op-4-clementi-pet-9781854720863'],
    ],
  },

  'Friedrich Kuhlau': {
    more: `
## Tiểu sử ngắn
- Sinh ngày **11/9/1786** ở **Uelzen** (Đức), trong một gia đình nhạc công quân đội (ông nội và cha chơi oboe).
- Thời nhỏ bị ngã trên băng và **mất thị lực mắt phải** (các nguồn ghi năm khác nhau).
- Học hoà âm với C. F. G. Schwencke ở Hamburg; từ 1804 biểu diễn piano và sáng tác.
- Năm **1810** chạy sang **Copenhagen** để tránh bị quân Pháp bắt lính; làm nhạc công triều đình (1812), nhập quốc tịch Đan Mạch (1813).
- Sang Vienna năm 1821 và 1825, kết thân với **[[Beethoven]]** và giới thiệu nhiều tác phẩm của Beethoven với khán giả Copenhagen.
- Thành công lớn nhất: nhạc cho vở kịch **Elverhøj** (1828), dựa trên ballad Đan Mạch và Thụy Điển. Ông được gọi là "Beethoven của sáo" dù không chơi sáo.
- Nhà cháy làm mất toàn bộ bản thảo chưa xuất bản. Mất ngày **12/3/1832** gần Copenhagen.

## Sonatina theo cấp độ
| Sonatina | Mức (Piano Street) |
|---|---|
| Op. 55 số 1 | 4 |
| Op. 55 số 2 | 5 |
| Op. 20 số 1, số 2 | 5 |
| Op. 20 số 3 | 6 |

Theo nhà xuất bản Alfred, Op. 20 nên học **sau** Sonatina Op. 36 của [[Clementi]] và **khó hơn một chút** so với Op. 55. Cả tuyển tập 9 sonatina (Op. 20 và 55) được xếp trung cấp đến trung cấp muộn. Xem [[lo-trinh-tac-pham]].
`,
    refs: [
      ['Deutsche Biographie — Kuhlau, Friedrich', 'https://www.deutsche-biographie.de/118567837.html'],
      ['Den Store Danske (lex.dk) — Friedrich Kuhlau', 'https://lex.dk/Friedrich_Kuhlau'],
      ['Kennedy Center — Friedrich Kuhlau', 'https://www.kennedy-center.org/artists/k/ko-kz/friedrich-kuhlau/'],
      ['Kjos — Kuhlau Sonatinas Opus 20, Opus 55', 'https://kjos.com/kuhlau-sonatinas-opus-20-opus-55.html'],
      ['Performers Music — Kuhlau: 9 Sonatinas, Opp. 20 & 55 (Alfred)', 'https://www.performersmusicchicago.com/9-sonatinas-opp-20-55-alf-00-4889'],
    ],
  },

  'Robert Schumann': {
    more: `
## Tiểu sử ngắn
- Bỏ ngành luật để theo nghề nghệ sĩ piano, học với **Friedrich Wieck**.
- Một **chấn thương ngón tay phải** chấm dứt giấc mơ biểu diễn, và ông chuyển hẳn sang sáng tác. Nguyên nhân còn tranh cãi: Wieck cho rằng do một dụng cụ cơ học tự chế giữ một ngón trong khi tập các ngón khác; Clara thì phủ nhận chuyện đó.
- Năm **1840** cưới **[[clara-schumann|Clara Wieck]]** sau một vụ kiện kéo dài với chính Wieck, người phản đối cuộc hôn nhân.
- Bệnh tâm thần xuất hiện từ 1833. Ngày 27/9/1854 ông nhảy xuống sông Rhine, được cứu, rồi tự xin vào nhà thương ở **Endenich** (gần Bonn). Ông mất ở đó năm **1856**.

## Tác phẩm theo cấp độ
**Album für die Jugend** (Album cho tuổi trẻ) Op. 68 (phân tích một bài: [[phan-tich-wilder-reiter]]) — 43 tiểu phẩm viết năm **1848** cho các con gái. Khác với *Kinderszenen* (cảnh tuổi thơ, viết **về** trẻ em), tập này **cho trẻ em chơi**. Phần II, từ số 19, dành cho người lớn và khó hơn.
| Bài | Ghi chú |
|---|---|
| Số 1 — Melodie | Mở đầu tập, giai điệu đơn giản; Piano Street xếp mức 3 |
| Số 2 — Soldatenmarsch (Hành khúc người lính) | Sol trưởng; có trong tuyển ABRSM Signature (Grade 3 cho cả tập) |
| Số 8 — Wilder Reiter (Kỵ sĩ hoang dã) | Presto ghi **dễ, Grade 3** |
| Số 10 — Fröhlicher Landmann (Bác nông dân vui vẻ) | Chưa tìm được cấp độ riêng |

Các bài khác (*Kinderszenen*, *Carnaval*…) khó hơn nhiều — xem [[lo-trinh-tac-pham]] và phân tích *Träumerei* ở [[phan-tich-traumerei]].
`,
    refs: [
      ['Wikipedia — Album for the Young (Schumann)', 'https://en.wikipedia.org/wiki/Album_for_the_Young'],
      ['Wikipedia — Robert Schumann', 'https://en.wikipedia.org/wiki/Robert_Schumann'],
      ['Christian Science Monitor — Schumann\'s discordant strains', 'https://www.csmonitor.com/2001/0712/p16s2.html'],
      ['Piano Street — Schumann: Album for the Young', 'https://www.pianostreet.com/schumann-sheet-music/album-for-the-young/'],
      ['Presto Music — The Wild Horseman (Grade 3)', 'https://www.prestomusic.com/sheet-music/products/9682512--robert-schumann-the-wild-horseman-from-album-for-the-young-op-68-best-of-grade-3-piano'],
    ],
  },

  'Pyotr Ilyich Tchaikovsky': {
    more: `
## Tiểu sử ngắn
- 1862–1865: là một trong những sinh viên sáng tác đầu tiên của **Nhạc viện St. Petersburg** mới thành lập, học phối khí và sáng tác với Anton Rubinstein.
- Từ **1866**, theo lời mời của Nikolai Rubinstein, dạy lý thuyết và hoà âm ở **Nhạc viện Moscow** (đến khoảng 1878).
- Năm 1877 suy sụp tinh thần. Ông trao đổi thư từ thường xuyên với bà **Nadezhda von Meck**.
- Mất năm **1893**.

## Tác phẩm piano theo cấp độ
| Tuyển tập | Cấp độ |
|---|---|
| **Album cho thiếu nhi** Op. 39 — 24 bài (1878) | Từ **rất dễ đến khá khó**: ấn bản ABRSM ghi Grade 2–6, Alfred ghi trung cấp – trung cấp muộn |
| **Bốn mùa** Op. 37a — 12 bài, mỗi bài một tháng | **Trung cấp đến nâng cao**: *Tháng Sáu* Grade 6–8; *Tháng Năm* và *Tháng Tám* nâng cao |

Op. 39 được viết từ tháng 5 đến tháng 7/1878 khi ông ở Kamenka với gia đình em gái, đề tặng cháu trai **Vladimir "Volodya" Davydov** (khi đó khoảng 7 tuổi). Trong thư gửi bà von Meck, ông viết muốn "góp một phần nhỏ vào kho nhạc cho trẻ em". Chưa tìm được cấp độ riêng cho *Morning Prayer* (số 1) hay *Old French Song* (số 16). Xem [[lo-trinh-tac-pham]].
`,
    refs: [
      ['Tchaikovsky Research — Children\'s Album', 'https://en.tchaikovsky-research.net/pages/Children\'s_Album'],
      ['Tchaikovsky Research — Vladimir Davydov', 'https://en.tchaikovsky-research.net/pages/Vladimir_Davydov'],
      ['Biography.com — Pyotr Ilyich Tchaikovsky', 'https://www.biography.com/musicians/pyotr-ilyich-tchaikovsky'],
      ['Performers Music — Album for the Young Op. 39 (ABRSM)', 'https://www.performersmusicchicago.com/album-for-the-young-op-39-tchaikovsky-pet-9781854722058'],
      ['Henle — Tchaikovsky: The Seasons', 'https://www.thomann.co.uk/henle_verlag_tschaikowsky_die_jahreszeiten.htm'],
      ['Presto Music — June from The Seasons', 'https://www.prestomusic.com/sheet-music/products/9675255--pyotr-ilyich-tchaikovsky-june-from-the-seasons-op-37a'],
    ],
  },

  'Claude Debussy': {
    more: `
## Tiểu sử ngắn
- Vào **Nhạc viện Paris** khoảng năm 1872, khi mới 10 tuổi.
- Đoạt giải nhì Prix de Rome năm 1883. Năm **1884** đoạt **Prix de Rome** với cantata *L'Enfant prodigue*, được sang Villa Médicis ở Rome, nhưng về Paris sớm hơn hạn.
- Con gái **Claude-Emma ("Chouchou")** sinh ngày 30/10/1905. Ông viết *Children's Corner* (1906–1908, in năm 1908 — xem [[phan-tich-golliwogg-cakewalk]]) và ballet *La Boîte à joujoux* cho con.
- Mất năm **1918**. Phong cách: xem [[an-tuong]].

## Tác phẩm theo cấp độ
Các tuyển tập "Debussy dễ nhất" (Schott *My First Debussy*, Presto) thường gồm các bài dưới đây. Schott xếp cả tập ở **trung cấp**.
| Bài | Ghi chú |
|---|---|
| *The Little Shepherd* (Children's Corner) | Thường được xếp vào nhóm dễ |
| *Le petit nègre* | Có trong các tuyển tập dễ; chưa thấy cấp độ riêng |
| *Rêverie* (1890) | Presto xếp vào nhóm dễ ở chỗ này, trung cấp ở chỗ khác |
| *Arabesque số 1* | Theo Da Capo: nhịp điệu đơn giản (chủ yếu móc đơn) nhưng có **4 dấu thăng** và hai bè giai điệu; Da Capo xếp RCM Level 10 |
| *Clair de lune* (Suite bergamasque) | Phổ biến; chưa nguồn nào cho cấp độ cụ thể — phân tích ở [[phan-tich-clair-de-lune]] |

Các nguồn **không thống nhất** về thứ tự độ khó. Cái khó chung của Debussy là [[hoa-am-cromatic|hoà âm nửa cung]] và hoá biểu nhiều dấu. *Golliwog's Cakewalk* (bài cuối của *Children's Corner*) chế giễu [[hoa-am-cromatic|hợp âm Tristan]] của [[Wagner]]. Xem [[lo-trinh-tac-pham]].
`,
    refs: [
      ['Henle — Children\'s Corner', 'https://henle.de/fr/Children-s-Corner-Petite-Suite-pour-piano-seul/HN-382'],
      ['Larousse — Claude Debussy', 'https://www.larousse.fr/encyclopedie/musdico/Debussy/167142'],
      ['Biography.com — Claude Debussy', 'https://www.biography.com/musicians/claude-debussy'],
      ['Schott — My First Debussy', 'https://www.schott-music.com/en/my-first-debussy-noc724257.html'],
      ['Presto Music — Essential repertoire: Debussy', 'https://www.prestomusic.com/sheet-music/articles/4323--essential-repertoire-piano-sheet-music-essentials-claude-debussy'],
      ['Da Capo Academy — Easy Debussy pieces', 'https://www.dacapomusic.ca/blog/easy-debussy-pieces'],
    ],
  },
}

import type { Article } from '../wiki'
import { buildPeople, person as p } from './people'

/**
 * Nghệ sĩ piano biểu diễn, từ thời Mozart đến nay. Người đã có trang nhà soạn nhạc được đánh dấu
 * `existing` (vẫn có tên trong bảng, link về trang sẵn có). Trang được sinh bởi people.ts.
 */

const PERIODS = [
  {
    id: 'p19',
    slug: 'nghe-si-piano-the-ky-19',
    title: 'Nghệ sĩ piano thế kỷ 18–19',
    years: '~1770–1900',
    intro: `Đàn piano phát triển từ fortepiano tới grand hiện đại (xem [[lich-su-piano]]), kéo theo thế hệ nghệ sĩ bậc thầy (virtuoso) và độc tấu piano như một loại hình biểu diễn riêng. Nhiều nghệ sĩ đồng thời là nhà soạn nhạc và nhà sư phạm.`,
    groups: [
      ['classical', 'Thời Cổ điển và chuyển giao'],
      ['virtuoso', 'Thời đại nghệ sĩ bậc thầy'],
      ['teachers', 'Các nhà sư phạm lớn'],
    ],
  },
  {
    id: 'p20a',
    slug: 'nghe-si-piano-dau-the-ky-20',
    title: 'Nghệ sĩ piano đầu thế kỷ 20',
    years: '~1900–1950',
    intro: `"Thời hoàng kim" của piano và cũng là thời của những bản thu âm đầu tiên — lần đầu tiên cách chơi của nghệ sĩ được lưu lại cho đời sau. Đặc trưng các trường phái quốc gia: [[truong-phai-piano]].`,
    groups: [
      ['golden', 'Thế hệ thời hoàng kim'],
      ['german', 'Truyền thống Đức – Áo'],
      ['others', 'Pháp, Tây Ban Nha và các nơi khác'],
    ],
  },
  {
    id: 'p20b',
    slug: 'nghe-si-piano-hien-dai',
    title: 'Nghệ sĩ piano từ 1950 đến nay',
    years: '1950–nay',
    intro: `Các cuộc thi quốc tế ([[frederic-chopin|Chopin]] ở Warsaw, [[pyotr-ilyich-tchaikovsky|Tchaikovsky]] ở Moscow, Van Cliburn, Nữ hoàng Elisabeth…) trở thành bệ phóng sự nghiệp. Cuộc thi Chopin được tổ chức lần đầu năm 1927; năm 1980, **[[dang-thai-son|Đặng Thái Sơn]]** trở thành người châu Á đầu tiên giành giải nhất.`,
    groups: [
      ['russian', 'Trường phái Nga – Xô Viết'],
      ['western', 'Châu Âu và châu Mỹ'],
      ['asia', 'Châu Á'],
      ['new', 'Thế hệ mới'],
    ],
  },
  {
    id: 'pjz',
    slug: 'nghe-si-piano-jazz',
    title: 'Nghệ sĩ piano jazz',
    years: '1900–nay',
    intro: `Từ ragtime và stride ở Harlem đến bebop, modal và fusion — piano jazz phát triển song song với nhạc cổ điển (xem [[swing]], [[xep-hop-am]], [[dem-hat-piano|các kiểu đệm]]).`,
    groups: [
      ['early', 'Ragtime và stride'],
      ['modern', 'Swing, bebop và hiện đại'],
    ],
  },
] as const

const PIANISTS = [
  // ── Thế kỷ 18–19 ──
  p('Wolfgang Amadeus Mozart', '1756–1791', 'Áo', 'p19:classical', 'Thần đồng biểu diễn khắp châu Âu từ nhỏ; tự chơi các concerto piano của mình.', ['Concerto piano K. 466, 467'], { existing: true }),
  p('Muzio Clementi', '1752–1832', 'Ý – Anh', 'p19:classical', 'Nghệ sĩ và nhà sản xuất đàn piano; từng "đấu đàn" với Mozart năm 1781.', ['Gradus ad Parnassum'], { existing: true }),
  p('Ludwig van Beethoven', '1770–1827', 'Đức', 'p19:classical', 'Nổi tiếng ở Vienna trước hết với tư cách nghệ sĩ piano ứng tác.', ['Sonata "Appassionata"'], { existing: true }),
  p('Johann Nepomuk Hummel', '1778–1837', 'Áo', 'p19:classical', 'Học trò Mozart, một trong những nghệ sĩ piano nổi tiếng nhất đầu thế kỷ 19.', ['Concerto piano La thứ'], { existing: true }),
  p('John Field', '1782–1837', 'Ireland', 'p19:classical', 'Học trò Clementi, sống ở Nga; cha đẻ của nocturne.', ['18 Nocturne'], { existing: true }),
  p('Friedrich Kalkbrenner', '1785–1849', 'Đức – Pháp', 'p19:classical', 'Nghệ sĩ bậc thầy hàng đầu ở Paris thập niên 1820–30; Chopin từng tính theo học ông.', ['Méthode pour apprendre le piano-forte'], { topics: ['ngon-bam'] }),
  p('Ignaz Moscheles', '1794–1870', 'Séc – Đức', 'p19:classical', 'Bạn và thầy của Mendelssohn; về sau dạy tại Nhạc viện Leipzig.', ['24 Études Op. 70']),
  p('Frédéric Chopin', '1810–1849', 'Ba Lan – Pháp', 'p19:virtuoso', 'Ít biểu diễn công khai nhưng lối chơi tinh tế, giàu rubato trở thành huyền thoại.', ['Nocturne, Ballade, Étude'], { existing: true }),
  p('Franz Liszt', '1811–1886', 'Hungary', 'p19:virtuoso', 'Nghệ sĩ piano vĩ đại nhất thế kỷ 19; người đặt ra hình thức độc tấu (recital).', ['Hungarian Rhapsodies'], { existing: true }),
  p('Sigismond Thalberg', '1812–1871', 'Thuỵ Sĩ – Áo', 'p19:virtuoso', 'Đối thủ nổi tiếng của Liszt; kỹ thuật đặt giai điệu ở giữa, hai ngón cái, bao quanh bằng hợp âm rải — tạo cảm giác "ba tay".', ['Fantasia trên opera "Moïse"'], { topics: ['lam-noi-giai-dieu', 'luyen-hop-am-rai'] }),
  p('Charles-Valentin Alkan', '1813–1888', 'Pháp', 'p19:virtuoso', 'Bạn của Chopin; kỹ thuật đáng kinh ngạc, sống ẩn dật.', ['12 Études Op. 39'], { existing: true }),
  p('Clara Schumann', '1819–1896', 'Đức', 'p19:virtuoso', 'Một trong những nghệ sĩ piano lớn nhất thế kỷ 19; năm 1837 chơi thuộc lòng Sonata Appassionata ở Berlin — có lẽ là người đầu tiên biểu diễn thuộc lòng một cách có hệ thống.', ['Ra mắt nhiều tác phẩm của Robert Schumann và Brahms'], { existing: true }),
  p('Anton Rubinstein', '1829–1894', 'Nga', 'p19:virtuoso', 'Đối thủ ngang tầm Liszt; nổi tiếng với chuỗi "buổi độc tấu lịch sử" đi qua toàn bộ văn học piano.', ['Melody in F'], { existing: true }),
  p('Carl Tausig', '1841–1871', 'Ba Lan – Đức', 'p19:virtuoso', 'Học trò xuất sắc nhất của Liszt, mất năm 29 tuổi.', ['Tägliche Studien (bài tập hằng ngày)'], { topics: ['bai-tap-ngon'] }),
  p('Teresa Carreño', '1853–1917', 'Venezuela', 'p19:virtuoso', 'Nữ nghệ sĩ piano lừng danh, được mệnh danh "Nữ thần Valkyrie của piano".', ['Concerto của Grieg']),
  p('Ignacy Jan Paderewski', '1860–1941', 'Ba Lan', 'p19:virtuoso', 'Nghệ sĩ piano nổi tiếng nhất thế giới cuối thế kỷ 19; năm 1919 làm Thủ tướng Ba Lan.', ['Minuet cung Sol', 'Biên tập toàn tập Chopin'], { short: 'Paderewski' }),
  p('Carl Czerny', '1791–1857', 'Áo', 'p19:teachers', 'Học trò Beethoven, thầy của Liszt — mắt xích nối hai thế hệ.', ['Op. 299, Op. 740'], { existing: true }),
  p('Hans von Bülow', '1830–1894', 'Đức', 'p19:teachers', 'Học trò Liszt, nghệ sĩ piano và nhạc trưởng; ra mắt Concerto piano số 1 của Tchaikovsky (1875).', ['Ấn bản sonata Beethoven có chú giải'], { topics: ['dien-dat-cau-nhac'] }),
  p('Theodor Leschetizky', '1830–1915', 'Ba Lan – Áo', 'p19:teachers', 'Một trong những người thầy piano nổi tiếng nhất mọi thời đại; học trò có Paderewski và Schnabel.', ['Trường phái Leschetizky ở Vienna'], { topics: ['phuong-phap-luyen-tap'] }),

  // ── Đầu thế kỷ 20 ──
  p('Ferruccio Busoni', '1866–1924', 'Ý – Đức', 'p20a:golden', 'Nghệ sĩ piano, nhà soạn nhạc và nhà tư tưởng; nổi tiếng với các bản chuyển soạn Bach.', ['Chaconne Bach – Busoni', 'Fantasia contrappuntistica'], { short: 'Busoni', topics: ['fugue', 'doi-am'] }),
  p('Leopold Godowsky', '1870–1938', 'Ba Lan – Mỹ', 'p20a:golden', '"Nghệ sĩ piano của các nghệ sĩ piano"; nổi tiếng với các bản chuyển soạn cực khó.', ['53 Studies on Chopin\'s Études'], { topics: ['the-loai'] }),
  p('Sergei Rachmaninoff', '1873–1943', 'Nga', 'p20a:golden', 'Một trong những nghệ sĩ piano vĩ đại nhất thế kỷ 20, bàn tay rất rộng; các bản thu của ông là chuẩn mực.', ['Concerto piano số 2 và 3'], { existing: true }),
  p('Josef Hofmann', '1876–1957', 'Ba Lan – Mỹ', 'p20a:golden', 'Học trò duy nhất của Anton Rubinstein; giám đốc Học viện Curtis.', ['Piano Playing (sách)']),
  p('Artur Schnabel', '1882–1951', 'Áo', 'p20a:german', 'Người đầu tiên thu âm trọn bộ 32 sonata piano của Beethoven (1932–1935).', ['Trọn bộ sonata Beethoven', 'Ấn bản sonata Beethoven'], { short: 'Schnabel', topics: ['hinh-thuc-sonata'] }),
  p('Wilhelm Backhaus', '1884–1969', 'Đức', 'p20a:german', 'Chuyên gia Beethoven và Brahms với sự nghiệp kéo dài hơn 60 năm.', ['Sonata Beethoven']),
  p('Edwin Fischer', '1886–1960', 'Thuỵ Sĩ', 'p20a:german', 'Thực hiện bản thu âm trọn bộ Clavier bình quân đầu tiên (1933–1936).', ['Clavier bình quân'], { topics: ['fugue', 'luat-binh-quan'] }),
  p('Wilhelm Kempff', '1895–1991', 'Đức', 'p20a:german', 'Tiếng đàn trữ tình, tinh tế trong Beethoven và Schubert.', ['Sonata Beethoven và Schubert']),
  p('Walter Gieseking', '1895–1956', 'Đức', 'p20a:german', 'Nổi tiếng với âm sắc và pedal tinh tế trong Debussy và Ravel.', ['Toàn bộ tác phẩm piano Debussy'], { topics: ['an-tuong', 'ban-dap'] }),
  p('Rudolf Serkin', '1903–1991', 'Séc – Mỹ', 'p20a:german', 'Đại diện truyền thống Đức – Áo; đồng sáng lập Liên hoan Marlboro.', ['Sonata Beethoven']),
  p('Alfred Cortot', '1877–1962', 'Pháp – Thuỵ Sĩ', 'p20a:others', 'Huyền thoại Chopin; đồng sáng lập École Normale de Musique de Paris; ấn bản có bài tập riêng cho từng đoạn khó.', ['Chopin Préludes', 'Principes rationnels de la technique pianistique'], { short: 'Cortot', topics: ['phuong-phap-luyen-tap'] }),
  p('Marguerite Long', '1874–1966', 'Pháp', 'p20a:others', 'Ra mắt Concerto Sol trưởng của Ravel (1932); sáng lập cuộc thi Long – Thibaud.', ['Concerto Sol trưởng (Ravel)']),
  p('Arthur Rubinstein', '1887–1982', 'Ba Lan – Mỹ', 'p20a:others', 'Một trong những nghệ sĩ Chopin được yêu mến nhất, sự nghiệp biểu diễn gần 80 năm.', ['Nocturne và Mazurka của Chopin'], { topics: ['the-loai'] }),
  p('Myra Hess', '1890–1965', 'Anh', 'p20a:others', 'Tổ chức chuỗi hoà nhạc trưa ở National Gallery suốt Thế chiến II; chuyển soạn "Jesu, Joy of Man\'s Desiring".', ['Jesu, Joy of Man\'s Desiring (chuyển soạn)']),
  p('Vladimir Horowitz', '1903–1989', 'Nga – Mỹ', 'p20a:others', 'Kỹ thuật và âm sắc huyền thoại; trở về biểu diễn ở Moscow năm 1986.', ['Horowitz in Moscow', 'Scarlatti, Scriabin, Rachmaninoff'], { short: 'Horowitz', topics: ['cuong-do'] }),
  p('Claudio Arrau', '1903–1991', 'Chile', 'p20a:others', 'Tiếng đàn sâu, đầy đặn; nổi tiếng với Beethoven và Liszt.', ['Sonata Beethoven']),
  p('Dinu Lipatti', '1917–1950', 'Romania', 'p20a:others', 'Tài năng hiếm có, mất năm 33 tuổi; buổi độc tấu cuối cùng ở Besançon (1950) được ghi âm.', ['Valse của Chopin', 'Concerto Schumann']),
  p('Alicia de Larrocha', '1923–2009', 'Tây Ban Nha', 'p20a:others', 'Đại sứ của âm nhạc piano Tây Ban Nha và Mozart.', ['Iberia (Albéniz)', 'Goyescas (Granados)']),

  // ── Từ 1950 đến nay ──
  p('Heinrich Neuhaus', '1888–1964', 'Nga', 'p20b:russian', 'Người thầy huyền thoại của Nhạc viện Moscow; thầy của Richter và Gilels.', ['Nghệ thuật chơi đàn piano (sách)'], { topics: ['dien-dat-cau-nhac', 'lam-noi-giai-dieu', 'truong-phai-piano'] }),
  p('Sviatoslav Richter', '1915–1997', 'Nga', 'p20b:russian', 'Một trong những nghệ sĩ piano vĩ đại nhất thế kỷ 20, kho tác phẩm rộng lớn.', ['Clavier bình quân', 'Tranh triển lãm (Mussorgsky)'], { short: 'Richter' }),
  p('Emil Gilels', '1916–1985', 'Nga', 'p20b:russian', 'Học trò Neuhaus; giải nhất cuộc thi Ysaÿe (nay là Nữ hoàng Elisabeth) năm 1938.', ['Concerto Brahms', 'Sonata Beethoven'], { short: 'Gilels' }),
  p('Vladimir Ashkenazy', '1937–', 'Nga – Iceland', 'p20b:russian', 'Đồng giải nhất cuộc thi Tchaikovsky 1962; sau trở thành nhạc trưởng.', ['Trọn bộ Rachmaninoff', 'Étude của Chopin']),
  p('Arturo Benedetti Michelangeli', '1920–1995', 'Ý', 'p20b:western', 'Nổi tiếng với sự hoàn hảo và âm sắc kiểm soát tuyệt đối.', ['Images (Debussy)', 'Concerto Sol trưởng (Ravel)'], { short: 'Michelangeli' }),
  p('Glenn Gould', '1932–1982', 'Canada', 'p20b:western', 'Diễn giải Bach độc đáo; ngừng biểu diễn trực tiếp năm 1964 để chỉ thu âm.', ['Goldberg Variations (1955 và 1981)'], { short: 'Gould', topics: ['doi-am', 'bien-tau'] }),
  p('Alfred Brendel', '1931–2025', 'Áo', 'p20b:western', 'Nghệ sĩ piano đầu tiên thu âm toàn bộ tác phẩm piano độc tấu của Beethoven; góp phần đưa sonata Schubert vào chương trình biểu diễn. Buổi hoà nhạc cuối năm 2008 ở Vienna; mất ngày 17/6/2025 tại London.', ['Toàn bộ tác phẩm piano độc tấu của Beethoven', 'Musical Thoughts and Afterthoughts (sách, 1976)'], { short: 'Brendel' }),
  p('Van Cliburn', '1934–2013', 'Mỹ', 'p20b:western', 'Giành giải nhất cuộc thi Tchaikovsky đầu tiên (1958) giữa Chiến tranh Lạnh; cuộc thi Van Cliburn mang tên ông.', ['Concerto số 1 Tchaikovsky']),
  p('Martha Argerich', '1941–', 'Argentina', 'p20b:western', 'Giải nhất cuộc thi Chopin 1965; được xem là một trong những nghệ sĩ piano vĩ đại nhất còn sống.', ['Concerto Prokofiev số 3', 'Kreisleriana (Schumann)'], { short: 'Argerich' }),
  p('Maurizio Pollini', '1942–2024', 'Ý', 'p20b:western', 'Giải nhất cuộc thi Chopin 1960; nổi tiếng từ Chopin đến Boulez, Nono.', ['Étude của Chopin (1972)'], { short: 'Pollini' }),
  p('Daniel Barenboim', '1942–', 'Argentina – Israel', 'p20b:western', 'Nghệ sĩ piano và nhạc trưởng; đồng sáng lập dàn nhạc West-Eastern Divan.', ['Sonata Beethoven']),
  p('Radu Lupu', '1945–2022', 'Romania', 'p20b:western', 'Tiếng đàn tinh tế, nội tâm trong Schubert và Brahms.', ['Sonata Schubert']),
  p('Murray Perahia', '1947–', 'Mỹ', 'p20b:western', 'Nổi tiếng với Mozart, Bach và các concerto Mozart vừa đàn vừa chỉ huy.', ['Concerto Mozart']),
  p('András Schiff', '1953–', 'Hungary – Anh', 'p20b:western', 'Chuyên gia Bach, Beethoven, Schubert; nhiều bài giảng về sonata Beethoven.', ['Partita và Clavier bình quân (Bach)']),
  p('Krystian Zimerman', '1956–', 'Ba Lan', 'p20b:western', 'Giải nhất cuộc thi Chopin 1975; nổi tiếng với sự tỉ mỉ, kể cả về cơ khí đàn.', ['Ballade của Chopin'], { topics: ['bo-may-piano'] }),
  p('Ivo Pogorelić', '1958–', 'Croatia', 'p20b:western', 'Bị loại ở vòng 3 cuộc thi Chopin 1980, khiến Martha Argerich rời ban giám khảo để phản đối.', ['Sonata số 2 của Chopin']),
  p('Mitsuko Uchida', '1948–', 'Nhật Bản – Anh', 'p20b:asia', 'Nổi tiếng với Mozart và Schubert.', ['Trọn bộ sonata Mozart']),
  p('Đặng Thái Sơn', '1958–', 'Việt Nam', 'p20b:asia', 'Người châu Á đầu tiên giành giải nhất cuộc thi Chopin (1980); giảng dạy tại Nhạc viện New England (Boston).', ['Concerto piano của Chopin', 'Nocturne'], { wiki: 'Đặng_Thái_Sơn', topics: ['dien-dat-cau-nhac', 'piano-viet-nam'] }),
  p('Lang Lang', '1982–', 'Trung Quốc', 'p20b:asia', 'Góp phần đưa piano cổ điển đến đông đảo khán giả trẻ, nhất là ở Trung Quốc.', ['Concerto Tchaikovsky số 1']),
  p('Yuja Wang', '1987–', 'Trung Quốc', 'p20b:asia', 'Kỹ thuật bùng nổ và tác phong biểu diễn mới mẻ.', ['Concerto Rachmaninoff số 3']),
  p('Seong-Jin Cho', '1994–', 'Hàn Quốc', 'p20b:asia', 'Giải nhất cuộc thi Chopin 2015.', ['Concerto Chopin số 1']),
  p('Leif Ove Andsnes', '1970–', 'Na Uy', 'p20b:new', 'Nổi tiếng với Grieg và chương trình hoà nhạc giàu ý tưởng.', ['Concerto Grieg']),
  p('Evgeny Kissin', '1971–', 'Nga', 'p20b:new', 'Thần đồng chơi hai concerto Chopin năm 12 tuổi (1984).', ['Concerto Chopin số 1 và 2']),
  p('Daniil Trifonov', '1991–', 'Nga', 'p20b:new', 'Giải nhất cuộc thi Tchaikovsky và Rubinstein năm 2011.', ['Transcendental Études (Liszt)']),

  // ── Jazz ──
  p('Scott Joplin', 'k. 1868–1917', 'Mỹ', 'pjz:early', '"Vua ragtime".', ['Maple Leaf Rag'], { existing: true }),
  p('James P. Johnson', '1894–1955', 'Mỹ', 'pjz:early', '"Cha đẻ của stride piano"; đưa cảm giác swing và hoà âm phong phú vào ragtime.', ['Carolina Shout', 'Charleston'], { topics: ['dem-hat-piano', 'buoc-nhay-xa'] }),
  p('Fats Waller', '1904–1943', 'Mỹ', 'pjz:early', 'Học trò James P. Johnson, người đưa stride piano đến với công chúng.', ['Ain\'t Misbehavin\'', 'Honeysuckle Rose'], { topics: ['dem-hat-piano'] }),
  p('Art Tatum', '1909–1956', 'Mỹ', 'pjz:modern', 'Kỹ thuật và hoà âm vượt thời đại, được cả các nghệ sĩ cổ điển ngưỡng mộ.', ['Tiger Rag', 'Tea for Two'], { topics: ['tai-hoa-am'] }),
  p('Duke Ellington', '1899–1974', 'Mỹ', 'pjz:modern', 'Nhà soạn nhạc và nghệ sĩ piano dẫn dắt big band.', ['Mood Indigo'], { existing: true }),
  p('Thelonious Monk', '1917–1982', 'Mỹ', 'pjz:modern', 'Một trong những người sáng lập bebop; hoà âm góc cạnh và khoảng lặng độc đáo.', ['\'Round Midnight', 'Straight, No Chaser'], { short: 'Monk' }),
  p('Bud Powell', '1924–1966', 'Mỹ', 'pjz:modern', 'Chuyển ngôn ngữ bebop của kèn sang piano: giai điệu nhanh tay phải, shell voicing tay trái.', ['Un Poco Loco'], { topics: ['xep-hop-am'] }),
  p('Oscar Peterson', '1925–2007', 'Canada', 'pjz:modern', 'Kỹ thuật điêu luyện, swing mạnh mẽ.', ['Hymn to Freedom', 'Night Train'], { topics: ['swing'] }),
  p('Bill Evans', '1929–1980', 'Mỹ', 'pjz:modern', 'Hoà âm ấn tượng và rootless voicing; chơi trong album "Kind of Blue" của Miles Davis.', ['Waltz for Debby', 'Peace Piece'], { short: 'Bill Evans', topics: ['xep-hop-am', 'hoa-am-quang-bon', 'an-tuong'] }),
  p('McCoy Tyner', '1938–2020', 'Mỹ', 'pjz:modern', 'Pianist của bộ tứ John Coltrane; hoà âm quãng 4 đặc trưng.', ['Passion Dance'], { topics: ['hoa-am-quang-bon', 'dieu-thuc'] }),
  p('Herbie Hancock', '1940–', 'Mỹ', 'pjz:modern', 'Từ jazz modal với Miles Davis đến funk và điện tử.', ['Maiden Voyage', 'Cantaloupe Island'], { topics: ['dieu-thuc'] }),
  p('Chick Corea', '1941–2021', 'Mỹ', 'pjz:modern', 'Kết hợp jazz, Latin và cổ điển.', ['Spain', 'Children\'s Songs'], { topics: ['dao-phach'] }),
  p('Keith Jarrett', '1945–', 'Mỹ', 'pjz:modern', 'Nổi tiếng với các buổi độc tấu ngẫu hứng hoàn toàn.', ['The Köln Concert (1975)'], { topics: ['ngau-hung-piano'] }),
]

export const pianists: Article[] = buildPeople(PERIODS, PIANISTS, {
  category: 'pianists',
  noun: 'nghệ sĩ piano',
  groupLabel: 'Nhóm',
  worksTitle: 'Ghi âm và tác phẩm tiêu biểu',
  footer: 'Danh sách nhà soạn nhạc theo thời kỳ: [[thoi-ky-baroque]], [[thoi-ky-co-dien]], [[thoi-ky-lang-man]], [[thoi-ky-the-ky-20]].',
})

export const pianoSchools: Article[] = [
  {
    slug: 'truong-phai-piano',
    title: 'Các trường phái piano',
    category: 'pianists',
    aliases: ['trường phái piano', 'trường phái Nga', 'trường phái Pháp', 'Russian piano school', 'French piano school', 'jeu perlé'],
    summary: 'Trường phái Nga coi trọng tiếng đàn "hát" và giai điệu rộng; trường phái Pháp coi trọng sự trong trẻo, chuỗi nốt nhanh đều như ngọc (jeu perlé). Ranh giới đã mờ dần trong thế kỷ 20.',
    refs: [
      ['Piano Street — The Russian piano school', 'https://www.pianostreet.com/blog/piano-news/the-russian-piano-school-4332/'],
      ['classical-pianists.net — Konstantin Igumnov', 'https://classical-pianists.net/vii/konstantin-igumnov'],
      ['HEM Genève — Pearly playing: the origins of the French piano', 'https://www.hesge.ch/hem/en/publications/jeu-perle-aux-origines-du-piano-francais'],
      ['UPH Journal — The revolution of the French school of piano playing', 'https://ojs.uph.edu/index.php/JSM/article/view/6775'],
    ],
    body: `
## Trường phái Nga
- **Ba trụ cột** thường được nhắc tới ở Nhạc viện Moscow: **Alexander Goldenweiser**, **Konstantin Igumnov** và **[[heinrich-neuhaus|Heinrich Neuhaus]]**. Neuhaus dạy tại Nhạc viện Moscow từ 1922 đến 1964; học trò có [[Richter]] và [[Gilels]].
- **Tiếng đàn hát**: Igumnov là ví dụ được ghi chép kỹ nhất — tiếng đàn đẹp, nhiều màu sắc, "mang tính chất giọng người"; ưa sự tinh tế, kiềm chế, pianissimo rất mỏng. ([[Richter]] nhận xét tiếng đàn của ông sáng và tinh tế nhưng âm vực sắc thái khá hẹp.)
- Truyền thống gắn với lối chơi rộng, giàu [[giai-dieu|giai điệu]], bắt rễ từ dân ca Nga và dòng [[Anton Rubinstein]] – [[Rachmaninoff]].

Kỹ thuật liên quan: [[lam-noi-giai-dieu]], [[dien-dat-cau-nhac]].

## Trường phái Pháp
- **Jeu perlé** ("lối chơi như ngọc trai"): chuỗi nốt **nhanh, sạch, đều**; nhẹ nhưng rõ từng ngón.
- Nhấn mạnh **ngón tay độc lập**, phát âm rõ, **dùng pedal tiết kiệm** ([[ban-dap]]); [[am-sac|âm sắc]] sáng, kết cấu cân về phía bè trên.
- Lý tưởng biểu cảm thiên về sự **sáng sủa, tiết chế** hơn là cảm xúc chủ quan. [[Saint-Saëns]] và [[marguerite-long|Marguerite Long]] được nêu như những đại diện; các giáo sư Nhạc viện Paris truyền phong cách này qua khoảng 150 năm.

Kỹ thuật liên quan: [[luyen-am-giai]], [[cach-dien-tau]].

## So sánh và lưu ý
| | Trường phái Nga | Trường phái Pháp |
|---|---|---|
| Lý tưởng âm thanh | Tiếng "hát", ấm, đôi khi mờ ảo | Trong trẻo, sáng, rõ nét |
| Kỹ thuật nổi bật | Trọng lượng cánh tay, legato | Ngón tay độc lập, jeu perlé |
| Biểu cảm | Nội tâm, rộng | Tiết chế, thanh lịch |

Các học giả lưu ý rằng các trường phái quốc gia **đã pha trộn** trong [[thoi-ky-the-ky-20|thế kỷ 20]], nên khác biệt ngày nay không còn rõ như trước. Xem các nghệ sĩ: [[nghe-si-piano-dau-the-ky-20]], [[nghe-si-piano-hien-dai]].
`,
  },
  {
    slug: 'piano-viet-nam',
    title: 'Âm nhạc piano Việt Nam',
    category: 'pianists',
    aliases: ['piano Việt Nam', 'nhạc piano Việt', 'nhà soạn nhạc Việt Nam', 'Nhạc viện Hà Nội', 'Học viện Âm nhạc Quốc gia Việt Nam', 'Vietnamese piano music'],
    summary: 'Âm nhạc cổ điển phương Tây đến Việt Nam từ cuối thế kỷ 19; Nhạc viện (nay là Học viện Âm nhạc Quốc gia Việt Nam) thành lập năm 1956. Các nhà soạn nhạc đưa chất liệu dân gian vào piano.',
    refs: [
      ['Temple University — 20th century Vietnamese piano music', 'https://sites.temple.edu/performingartsnews/2021/01/25/20th-century-vietnamese-piano-music/'],
      ['Temple University — Recital program, Nam Nguyễn (PDF)', 'https://boyer.temple.edu/sites/boyer/files/documents/2021.2.10%20CLNCS%20Nam%20Nguyen%2C%20piano.pdf'],
      ['University of Oregon — Louise Thái Thị Lang\'s Fêtes du Têt', 'https://scholarsbank.uoregon.edu/xmlui/handle/1794/29867'],
      ['Wikipedia — Nguyễn Văn Quỳ', 'https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_V%C4%83n_Qu%E1%BB%B3'],
    ],
    body: `
## Bối cảnh
- Âm nhạc cổ điển phương Tây đến Việt Nam từ **cuối thế kỷ 19**, thời thuộc địa Pháp.
- **1956**: thành lập trường âm nhạc chuyên nghiệp đầu tiên, nay là **Học viện Âm nhạc Quốc gia Việt Nam**.
- Chiến tranh và điều kiện cơ sở vật chất hạn chế đã làm chậm sự phát triển trong phần lớn lịch sử hiện đại.

## Đặc điểm của nhạc piano Việt Nam
- Ban đầu nhiều tác phẩm được viết cho mục đích **giảng dạy**; khi các nhạc sĩ được đào tạo bài bản hơn, tác phẩm trở nên phức tạp và độc đáo hơn.
- Các nhà soạn nhạc đưa **chất liệu dân gian** vào ngôn ngữ piano — giúp thế hệ trẻ vừa tiếp thu âm nhạc phương Tây vừa hiểu bản sắc dân tộc (xem [[am-giai-ngu-cung]] và phần nhạc Việt Nam trong đó).
- Mảng tác phẩm này **ít được biết đến** ngay cả ở Việt Nam, vì ít được biểu diễn và ít tài liệu.

## Một số nhà soạn nhạc và tác phẩm (theo các nguồn tìm được)
| Nhà soạn nhạc | Năm | Tác phẩm được nhắc đến |
|---|---|---|
| Louise Nguyễn Văn Tỵ | 1915–2007 | *Viet Nam: Album pour piano* |
| Louise Thái Thị Lang | — | *Fêtes du Têt* (piano) |
| Nguyễn Văn Quỳ ("Quỳ Sonate") | 1925–2022 | 9 [[hinh-thuc-sonata|sonata]] cho violin và piano |
| Trần Tất Toại | sinh 1929 | *Dòng nước trong* |
| Nguyễn Hữu Tuấn | 1942–2008 | Các [[the-loai|prelude]] cho piano |
| Nguyễn Đình Lượng | 1945–2005 | Các prelude cho piano |
| Đặng Hữu Phúc | sinh 1953 | *Suite cho piano* |

Các nhà soạn nhạc Nguyễn Văn Nam, Nguyễn Trọng Bằng, Đoàn Nho (học ở Moscow và Kiev) được biết đến chủ yếu qua tác phẩm giao hưởng.

## Nghệ sĩ biểu diễn
Năm 1980, [[dang-thai-son|Đặng Thái Sơn]] trở thành người châu Á đầu tiên giành giải nhất cuộc thi [[frederic-chopin|Chopin]] (xem [[nghe-si-piano-hien-dai]]).

Lưu ý: các nguồn chủ yếu là chương trình hoà nhạc và luận văn ở nước ngoài, nên danh sách trên **chưa đầy đủ**; luận văn *Solo Piano Music by Vietnamese Composers* của Nam Hoàng Nguyễn là tài liệu chuyên sâu nhất được biết đến. Bổ sung từ tư liệu trong nước sẽ giúp danh sách đầy đủ hơn.
`,
  },
]

/**
 * Short introductions to each school / group on the period pages (composers and pianists), keyed "period:group".
 * Shown under the group's heading, before its table; the sources are listed on the period page.
 */
export interface School {
  intro: string
  refs: [string, string][]
}

const W = (title: string, page: string): [string, string] => [`Wikipedia — ${title}`, `https://en.wikipedia.org/wiki/${page}`]

export const SCHOOLS: Record<string, School> = {
  // ── Trung cổ ──
  'med:chant': {
    intro: `**Thánh ca** (nổi tiếng nhất là thánh ca Gregorian) là bài hát **đơn âm** bằng tiếng Latin trong nghi lễ của Giáo hội phương Tây, dựa trên các [[dieu-thuc|điệu thức nhà thờ]]. Ban đầu thánh ca được truyền miệng, rồi ghi bằng các ký hiệu neume chỉ hướng đi của giai điệu; [[guido-d-arezzo|Guido d'Arezzo]] (thế kỷ 11) đề xuất xếp nốt trên các dòng kẻ — tiền thân của [[khuong-nhac]] — và dạy hát bằng âm tiết Ut–Re–Mi (xem [[xuong-am]]).`,
    refs: [W('Gregorian chant', 'Gregorian_chant'), W('Guido of Arezzo', 'Guido_of_Arezzo')],
  },
  'med:troubadour': {
    intro: `Các **nhà thơ – nhạc sĩ cung đình** thế kỷ 11–13: **troubadour** ở miền Nam nước Pháp hát bằng tiếng Occitan, **trouvère** ở miền Bắc hát bằng tiếng Pháp cổ, và **Minnesinger** ở các vùng nói tiếng Đức. Đề tài chính là **tình yêu cung đình**; phần lớn bài hát là [[ket-cau|đơn âm]] và là những bài hát **thế tục** sớm nhất còn lưu lại với cả lời lẫn nhạc.`,
    refs: [W('Troubadour', 'Troubadour'), W('Trouvère', 'Trouv%C3%A8re'), W('Minnesang', 'Minnesang')],
  },
  'med:notredame': {
    intro: `Nhóm nhạc sĩ gắn với **nhà thờ Đức Bà Paris** khoảng 1160–1250. Họ phát triển **organum** — thêm bè vào thánh ca — và ghi tiết tấu bằng các mẫu dài – ngắn lặp lại ("điệu thức tiết tấu"). Tên [[leonin|Léonin]] và [[perotin|Pérotin]] được biết qua một khảo luận khuyết danh (gọi là Anonymous IV). Âm nhạc Pháp thế kỷ 13 thường được gọi chung là **Ars antiqua** ("nghệ thuật cũ") để phân biệt với Ars nova; [[franco-cua-koln|Franco của Köln]] hệ thống hoá ký hiệu [[truong-do|trường độ]] thời này.`,
    refs: [W('Notre-Dame school', 'Notre-Dame_school'), W('Ars antiqua', 'Ars_antiqua')],
  },
  'med:arsnova': {
    intro: `**Ars nova** ("nghệ thuật mới") lấy tên từ một khảo luận gắn với [[philippe-de-vitry|Philippe de Vitry]] (khoảng 1320): ký âm mới cho phép chia nốt **thành hai** chứ không chỉ thành ba, mở đường cho tiết tấu phức tạp hơn. Đại diện lớn nhất ở Pháp là [[guillaume-de-machaut|Machaut]]; ở Ý có [[francesco-landini|Landini]] và Jacopo da Bologna. Cuối thế kỷ 14, phong cách **Ars subtilior** ("nghệ thuật tinh tế hơn") đẩy tiết tấu và ký âm đến mức cực kỳ phức tạp — thuật ngữ do nhà âm nhạc học Ursula Günther đặt (1963).`,
    refs: [W('Ars nova', 'Ars_nova'), W('Ars subtilior', 'Ars_subtilior'), ['Britannica — Mensural notation', 'https://www.britannica.com/art/mensural-notation']],
  },
  // ── Phục hưng ──
  'ren:burgundy': {
    intro: `Đầu thế kỷ 15, các nhạc sĩ gắn với triều đình **Công tước xứ Burgundy** (vùng nay là Pháp, Bỉ, Hà Lan) như [[guillaume-du-fay|Du Fay]] và [[gilles-binchois|Binchois]] dẫn đầu âm nhạc châu Âu. Bài thơ *Le Champion des Dames* (khoảng 1440) của Martin le Franc nói hai ông đã tiếp thu "**contenance angloise**" (phong thái Anh) và theo [[john-dunstable|Dunstable]] — thường được hiểu là lối dùng nhiều [[thuan-nghich|quãng 3 và quãng 6]] êm ái, dù chính nghĩa của cụm từ này vẫn còn bàn cãi.`,
    refs: [W('Burgundian School', 'Burgundian_School'), ['Princeton — Martin Le Franc and the "contenance angloise"', 'https://collaborate.princeton.edu/en/publications/new-music-for-a-world-grown-old-martin-le-franc-and-the-contenanc/']],
  },
  'ren:flemish': {
    intro: `Các nhạc sĩ từ **vùng Vlaanderen và miền Bắc nước Pháp** chiếm ưu thế khắp châu Âu khoảng 1450–1600 và làm việc ở nhiều triều đình, nhà thờ — đặc biệt ở Ý. Đặc trưng là **mô phỏng xuyên suốt**: mọi bè lần lượt nhắc lại cùng một ý nhạc (xem [[doi-am]]). Từ [[johannes-ockeghem|Ockeghem]] qua [[josquin-des-prez|Josquin]] đến [[orlande-de-lassus|Lassus]], họ viết thánh lễ, motet và chanson.`,
    refs: [W('Franco-Flemish School', 'Franco-Flemish_School')],
  },
  'ren:italy': {
    intro: `Ý thế kỷ 16 có hai trung tâm lớn. Ở **Rome**, [[giovanni-pierluigi-da-palestrina|Palestrina]] trở thành mẫu mực của phức điệu nhà thờ trong sáng, nghe rõ lời — giai đoạn Công đồng Trent (1545–1563) đòi hỏi lời kinh phải nghe được; câu chuyện ông "cứu" phức điệu bằng *Missa Papae Marcelli* chỉ là giai thoại. Ở **Venice**, nhà thờ Thánh Marco với các dàn hợp xướng đặt đối diện (*cori spezzati*) cho [[andrea-gabrieli|Andrea]] và [[giovanni-gabrieli|Giovanni Gabrieli]] lối viết nhiều dàn. Song song là **madrigal** — ca khúc thế tục nhiều bè vẽ nghĩa lời thơ bằng âm nhạc, đến [[carlo-gesualdo|Gesualdo]] thì [[am-giai-cromatic|cromatic]] táo bạo.`,
    refs: [W('Roman School', 'Roman_School'), W('Venetian School (music)', 'Venetian_School_(music)'), W('Madrigal', 'Madrigal')],
  },
  'ren:france': {
    intro: `**Chanson Paris** thế kỷ 16: ca khúc thế tục bằng tiếng Pháp, thường ngắn, nhịp nhàng, nhiều đoạn hát cùng tiết tấu. Nhà in **Pierre Attaingnant** in nhạc ở Paris từ năm 1528 giúp chanson lan rộng. [[clement-janequin|Janequin]] nổi tiếng với các chanson tả cảnh (tiếng chim, trận đánh); [[claude-le-jeune|Le Jeune]] thử nghiệm phổ nhạc theo nhịp thơ cổ (*musique mesurée*).`,
    refs: [W('Chanson', 'Chanson'), W('Pierre Attaingnant', 'Pierre_Attaingnant')],
  },
  'ren:iberia': {
    intro: `Phức điệu nhà thờ Tây Ban Nha đạt đỉnh với [[cristobal-de-morales|Morales]], [[francisco-guerrero|Guerrero]] và [[tomas-luis-de-victoria|Victoria]]. Đây cũng là nơi phát triển sớm nhạc khí độc tấu: *El Maestro* (1536) của [[luis-de-milan|Luis de Milán]] là tuyển tập nhạc in đầu tiên cho đàn **vihuela**, còn [[antonio-de-cabezon|Cabezón]], nhạc sĩ đàn phím của vua Felipe II, viết các biến tấu cho đàn phím (xem [[bien-tau]]).`,
    refs: [W('Luis de Milán', 'Luis_de_Mil%C3%A1n'), W('Antonio de Cabezón', 'Antonio_de_Cabez%C3%B3n'), W('Tomás Luis de Victoria', 'Tom%C3%A1s_Luis_de_Victoria')],
  },
  'ren:england': {
    intro: `Âm nhạc nhà thờ Anh đi qua nhiều lần đổi tôn giáo của thế kỷ 16 với [[thomas-tallis|Tallis]] và [[william-byrd|Byrd]]. Năm 1588, tuyển tập *Musica transalpina* (madrigal Ý lời Anh) mở ra trào lưu **madrigal Anh** ([[thomas-morley|Morley]], [[thomas-weelkes|Weelkes]]). Các **virginalist** — Byrd, [[john-bull|Bull]], [[orlando-gibbons|Gibbons]] — viết cho đàn virginal (họ [[dan-phim-co|harpsichord]]), còn [[john-dowland|Dowland]] nổi tiếng với ca khúc cho đàn lute.`,
    refs: [W('English Madrigal School', 'English_Madrigal_School'), W('Musica Transalpina', 'Musica_Transalpina'), W('Fitzwilliam Virginal Book', 'Fitzwilliam_Virginal_Book')],
  },
  'ren:germany': {
    intro: `Ở các vùng nói tiếng Đức, cuộc **Cải cách Tin Lành** đưa **thánh ca cộng đoàn** (chorale) bằng tiếng Đức vào trung tâm đời sống âm nhạc — nền móng cho nhạc nhà thờ Đức về sau, đến tận [[johann-sebastian-bach|Bach]]. [[hans-leo-hassler|Hassler]] học ở Venice với Andrea Gabrieli và mang phong cách Ý về Đức; [[michael-praetorius|Praetorius]] để lại bộ khảo luận *Syntagma musicum* mô tả nhạc cụ và thực hành biểu diễn thời đó.`,
    refs: [W('Chorale', 'Chorale'), W('Hans Leo Hassler', 'Hans_Leo_Hassler'), W('Syntagma musicum', 'Syntagma_musicum')],
  },
  // ── Baroque ──
  'bar:earlyitaly': {
    intro: `Quanh năm 1600 ở Florence, các nhạc sĩ và học giả (nhóm **Camerata**) muốn phục hồi cách hát kể của kịch Hy Lạp, tạo ra lối hát **độc xướng có đệm** trên [[bass-so|bè trầm liên tục]]. Từ đó ra đời **opera**: *Euridice* (1600) của [[jacopo-peri|Peri]] là vở opera sớm nhất còn lưu bản nhạc, rồi *L'Orfeo* (1607) của [[claudio-monteverdi|Monteverdi]]. [[girolamo-frescobaldi|Frescobaldi]] là bậc thầy đàn phím, có ảnh hưởng tới nhiều thế hệ sau.`,
    refs: [W('Florentine Camerata', 'Florentine_Camerata'), W('Euridice (Peri)', 'Euridice_(Peri)'), W("L'Orfeo", "L%27Orfeo")],
  },
  'bar:germany17': {
    intro: `Âm nhạc Đức thế kỷ 17 phát triển giữa và sau **Chiến tranh Ba mươi năm** (1618–1648). [[heinrich-schutz|Schütz]] học ở Venice với Giovanni Gabrieli và đưa phong cách Ý vào nhạc nhà thờ Đức. Ở miền Bắc, trường phái **organ Bắc Đức** đạt đỉnh với [[dieterich-buxtehude|Buxtehude]] ở Lübeck — năm 1705 chàng trai [[johann-sebastian-bach|Bach]] đã đi bộ hàng trăm km đến nghe ông; ở miền Nam, [[johann-pachelbel|Pachelbel]] và [[johann-jakob-froberger|Froberger]] viết nhiều cho đàn phím.`,
    refs: [W('North German organ school', 'North_German_organ_school'), W('Heinrich Schütz', 'Heinrich_Sch%C3%BCtz'), W('Dieterich Buxtehude', 'Dieterich_Buxtehude')],
  },
  'bar:france': {
    intro: `Baroque Pháp gắn chặt với **triều đình Louis XIV**: [[jean-baptiste-lully|Lully]] nắm quyền kiểm soát opera và tạo ra *tragédie en musique*, ballet và khúc mở màn kiểu Pháp. Các **clavecinist** như [[louis-couperin|Louis]] và [[francois-couperin|François Couperin]] viết tổ khúc cho [[dan-phim-co|clavecin]] với [[ky-hieu-hoa-my|hoa mỹ]] dày đặc. [[jean-philippe-rameau|Rameau]] vừa là nhà soạn opera vừa là nhà lý thuyết (*Traité de l'harmonie*, 1722 — xem [[tranh-luan-rameau-rousseau]]). Cách chơi riêng của Pháp: [[cham-doi-dau-noi|notes inégales]].`,
    refs: [W('French Baroque music', 'French_Baroque_music'), W('Jean-Baptiste Lully', 'Jean-Baptiste_Lully'), W('François Couperin', 'Fran%C3%A7ois_Couperin')],
  },
  'bar:england': {
    intro: `Sau thời kỳ Thanh giáo, nước Anh **Phục hồi vương triều** (1660) cũng phục hồi nhạc nhà thờ và sân khấu. [[john-blow|Blow]] và học trò của ông là [[henry-purcell|Purcell]] — tác giả opera *Dido and Aeneas* — là hai tên tuổi lớn nhất; sau Purcell, đời sống âm nhạc London do [[george-frideric-handel|Handel]] chi phối.`,
    refs: [W('Henry Purcell', 'Henry_Purcell'), W('John Blow', 'John_Blow')],
  },
  'bar:lateitaly': {
    intro: `Ý cuối thế kỷ 17 – đầu 18 là trung tâm của **nhạc khí**: [[arcangelo-corelli|Corelli]] định hình trio sonata và **concerto grosso**; [[antonio-vivaldi|Vivaldi]] phổ biến concerto độc tấu ba chương với các đoạn **ritornello** (xem [[hinh-thuc-concerto]]). Trường phái **Naples** — [[alessandro-scarlatti|Alessandro Scarlatti]], [[francesco-durante|Durante]], [[giovanni-battista-pergolesi|Pergolesi]] — nổi bật về opera và về cách dạy sáng tác bằng [[partimento]]. [[domenico-scarlatti|Domenico Scarlatti]] để lại hơn 500 sonata một chương cho đàn phím.`,
    refs: [W('Concerto grosso', 'Concerto_grosso'), W('Neapolitan School', 'Neapolitan_School'), W('Domenico Scarlatti', 'Domenico_Scarlatti')],
  },
  'bar:lategermany': {
    intro: `Đỉnh cao Baroque Đức – Áo: [[johann-sebastian-bach|Bach]] và [[george-frideric-handel|Handel]] cùng sinh năm 1685. Các nhà soạn nhạc Đức thời này kết hợp **phong cách Ý** (concerto, aria) với **phong cách Pháp** (vũ khúc, hoa mỹ) và truyền thống đối âm Đức — [[johann-joachim-quantz|Quantz]] gọi đó là "phong cách pha trộn". [[johann-joseph-fux|Fux]] viết *Gradus ad Parnassum* (1725), giáo trình [[doi-am-5-loai|đối âm]] được dùng suốt hai thế kỷ; [[georg-philipp-telemann|Telemann]] là người sáng tác nhiều nhất thời đó.`,
    refs: [W('Johann Sebastian Bach', 'Johann_Sebastian_Bach'), W('Johann Joachim Quantz', 'Johann_Joachim_Quantz'), W('Gradus ad Parnassum', 'Gradus_ad_Parnassum')],
  },
  // ── Cổ điển ──
  'cla:galant': {
    intro: `Giữa thế kỷ 18, thị hiếu chuyển từ [[doi-am|phức điệu]] Baroque sang **phong cách galant**: giai điệu nhẹ nhàng, rõ câu, đệm đơn giản (xem [[luoc-do-galant]]). [[carl-philipp-emanuel-bach|C. P. E. Bach]] đại diện cho "phong cách cảm xúc" (*empfindsamer Stil*) đầy bất ngờ; dàn nhạc **Mannheim** dưới thời [[johann-stamitz|Johann Stamitz]] nổi tiếng về kỷ luật và các đoạn [[cuong-do|crescendo]]; [[giovanni-battista-sammartini|Sammartini]] là một trong những người viết giao hưởng sớm nhất; [[christoph-willibald-gluck|Gluck]] cải cách opera (*Orfeo ed Euridice*, 1762). [[johann-christian-bach|J. C. Bach]] ở London có ảnh hưởng tới cậu bé Mozart.`,
    refs: [W('Galant music', 'Galant_music'), W('Mannheim school', 'Mannheim_school'), W('Empfindsamer Stil', 'Empfindsamer_Stil')],
  },
  'cla:vienna': {
    intro: `**Trường phái Cổ điển Vienna** (đôi khi gọi là "trường phái Vienna thứ nhất") chỉ ba tên tuổi [[joseph-haydn|Haydn]], [[wolfgang-amadeus-mozart|Mozart]] và [[ludwig-van-beethoven|Beethoven]], cùng nhiều nhạc sĩ làm việc ở Vienna thời đó. Họ đưa [[hinh-thuc-sonata]], giao hưởng, tứ tấu đàn dây, [[hinh-thuc-concerto|concerto piano]] lên thành chuẩn mực (xem [[the-loai]]); đàn [[lich-su-piano|fortepiano]] trở thành nhạc cụ trung tâm của nhạc thính phòng.`,
    refs: [W('First Viennese School', 'First_Viennese_School'), W('Classical period (music)', 'Classical_period_(music)')],
  },
  'cla:europe': {
    intro: `Ngoài Vienna, các trung tâm lớn là **Paris** (opéra comique của [[andre-gretry|Grétry]], giao hưởng của [[francois-joseph-gossec|Gossec]], Nhạc viện Paris mà [[luigi-cherubini|Cherubini]] sau này đứng đầu), **London** (nơi [[muzio-clementi|Clementi]] biểu diễn, dạy và sản xuất đàn piano), **Madrid** ([[luigi-boccherini|Boccherini]]) và các nhà hát opera Ý ([[giovanni-paisiello|Paisiello]], [[domenico-cimarosa|Cimarosa]]). Nhiều người trong nhóm này để lại **bài học piano** quen thuộc: sonatina của Clementi, [[friedrich-kuhlau|Kuhlau]], [[anton-diabelli|Diabelli]] và etude của [[carl-czerny|Czerny]] (xem [[lo-trinh-tac-pham]]).`,
    refs: [W('Muzio Clementi', 'Muzio_Clementi'), W('Luigi Cherubini', 'Luigi_Cherubini'), W('Opéra comique', 'Op%C3%A9ra_comique')],
  },
  // ── Lãng mạn ──
  'rom:early': {
    intro: `Thế hệ Lãng mạn đầu tiên đặt **cảm xúc cá nhân** lên hàng đầu: [[franz-schubert|Schubert]] với hàng trăm ca khúc (Lied); [[hector-berlioz|Berlioz]] với *Symphonie fantastique* (1830) kể chuyện bằng âm nhạc (xem [[am-nhac-tuyet-doi]]); [[felix-mendelssohn|Mendelssohn]] dàn dựng lại *Cuộc khổ nạn theo Thánh Matthew* của Bach (1829). Piano trở thành nhạc cụ của thời đại với các tiểu phẩm tính cách của [[frederic-chopin|Chopin]], [[robert-schumann|Schumann]], [[franz-liszt|Liszt]] và nghệ thuật trình diễn bậc thầy kiểu [[niccolo-paganini|Paganini]] (xem [[the-loai]], [[rubato]]).`,
    refs: [W('Romantic music', 'Romantic_music'), W('Symphonie fantastique', 'Symphonie_fantastique'), W('Lied', 'Lied')],
  },
  'rom:opera': {
    intro: `Thế kỷ 19 là thời hoàng kim của opera. Ở Đức, [[richard-wagner|Wagner]] tạo ra **nhạc kịch** liền mạch với hệ thống leitmotif và xây nhà hát riêng ở Bayreuth (khai trương 1876). Ở Ý, [[giuseppe-verdi|Verdi]] thống trị nửa sau thế kỷ, rồi trào lưu **verismo** (hiện thực) với *Cavalleria rusticana* (1890) của [[pietro-mascagni|Mascagni]] và [[giacomo-puccini|Puccini]]. Paris có grand opéra của [[giacomo-meyerbeer|Meyerbeer]] và *Carmen* của [[georges-bizet|Bizet]]; nhạc nhẹ sân khấu có operetta của [[jacques-offenbach|Offenbach]], [[johann-strauss-ii|Johann Strauss II]] và [[arthur-sullivan|Sullivan]].`,
    refs: [W('Richard Wagner', 'Richard_Wagner'), W('Verismo (music)', 'Verismo_(music)'), W('Operetta', 'Operetta')],
  },
  'rom:german': {
    intro: `Nửa sau thế kỷ 19, nhạc Đức chia hai hướng trong cái gọi là **"cuộc chiến của phái Lãng mạn"**: một bên là [[johannes-brahms|Brahms]] trung thành với hình thức cổ điển và [[am-nhac-tuyet-doi|âm nhạc tuyệt đối]]; bên kia là "trường phái Đức mới" của Liszt và Wagner với thơ giao hưởng và nhạc chương trình. Thế hệ sau — [[anton-bruckner|Bruckner]], [[gustav-mahler|Mahler]], [[richard-strauss|Richard Strauss]] — mở rộng dàn nhạc và [[hoa-am-cromatic|hoà âm cromatic]] đến giới hạn, dẫn sang [[phi-dieu-tinh|phi điệu tính]] của thế kỷ 20.`,
    refs: [W('War of the Romantics', 'War_of_the_Romantics'), W('New German School', 'New_German_School')],
  },
  'rom:france': {
    intro: `Sau thất bại trong Chiến tranh Pháp – Phổ, [[camille-saint-saens|Saint-Saëns]] và Romain Bussine lập **Société nationale de musique** (1871) với khẩu hiệu *Ars gallica*, để giới thiệu tác phẩm khí nhạc của các nhạc sĩ Pháp. Nhóm học trò của [[cesar-franck|Franck]] ([[vincent-d-indy|d'Indy]], [[ernest-chausson|Chausson]]) phát triển [[bien-doi-chu-de|hình thức tuần hoàn]]; [[gabriel-faure|Fauré]] với hoà âm tinh tế là cầu nối sang [[an-tuong|Ấn tượng]].`,
    refs: [W('Société nationale de musique', 'Soci%C3%A9t%C3%A9_nationale_de_musique'), W('César Franck', 'C%C3%A9sar_Franck')],
  },
  'rom:russia': {
    intro: `[[mikhail-glinka|Glinka]] thường được xem là người mở đầu nhạc cổ điển Nga. Thập niên 1860, [[mily-balakirev|Balakirev]] tập hợp **"Nhóm Năm người"** ([[cesar-cui|Cui]], [[modest-mussorgsky|Mussorgsky]], [[alexander-borodin|Borodin]], [[nikolai-rimsky-korsakov|Rimsky-Korsakov]]) theo hướng dân tộc, phần lớn tự học. Hướng kia là đào tạo bài bản kiểu châu Âu: [[anton-rubinstein|Anton Rubinstein]] lập Nhạc viện Saint Petersburg (1862), nơi [[pyotr-ilyich-tchaikovsky|Tchaikovsky]] học. Thế hệ sau — [[alexander-glazunov|Glazunov]], [[sergei-rachmaninoff|Rachmaninoff]] — kết hợp cả hai.`,
    refs: [W('The Five (composers)', 'The_Five_(composers)'), W('Saint Petersburg Conservatory', 'Saint_Petersburg_Conservatory')],
  },
  'rom:national': {
    intro: `**Chủ nghĩa dân tộc** trong âm nhạc: các nhà soạn nhạc đưa dân ca, vũ điệu, truyền thuyết và [[dieu-thuc|điệu thức]] của quê hương vào tác phẩm khí nhạc và opera. Ở Séc có [[bedrich-smetana|Smetana]] và [[antonin-dvorak|Dvořák]]; Na Uy có [[edvard-grieg|Grieg]]; Phần Lan có [[jean-sibelius|Sibelius]]; Tây Ban Nha có [[isaac-albeniz|Albéniz]] và [[enrique-granados|Granados]] với nhiều tác phẩm piano mang âm hưởng dân gian.`,
    refs: [W('Musical nationalism', 'Musical_nationalism')],
  },
  'rom:americas': {
    intro: `Ở Anh, [[hubert-parry|Parry]], [[charles-villiers-stanford|Stanford]] và [[edward-elgar|Elgar]] mở đầu cái gọi là **"Phục hưng âm nhạc Anh"** cuối thế kỷ 19. Ở Mỹ, [[louis-moreau-gottschalk|Gottschalk]] là nghệ sĩ piano – nhà soạn nhạc người Mỹ đầu tiên nổi tiếng ở châu Âu; [[amy-beach|Amy Beach]] thuộc nhóm nhạc sĩ Boston (Second New England School), còn [[edward-macdowell|MacDowell]] được biết qua các tiểu phẩm piano như *To a Wild Rose*.`,
    refs: [W('English Musical Renaissance', 'English_Musical_Renaissance'), W('Second New England School', 'Second_New_England_School')],
  },
  // ── Thế kỷ 20 ──
  'm20:impressionism': {
    intro: `[[claude-debussy|Debussy]] và [[maurice-ravel|Ravel]] được gắn nhãn **Ấn tượng** (mượn từ hội hoạ) — dù cả hai không thích tên gọi này. Họ dùng [[hoa-am-song-song|hợp âm song song]], [[am-giai-cromatic|âm giai toàn cung]], [[am-giai-ngu-cung|ngũ cung]] và [[dieu-thuc|điệu thức]] để tạo **màu âm** thay vì lực hút chức năng (xem [[an-tuong]]). [[erik-satie|Satie]] đi theo hướng giản dị, châm biếm; [[nadia-boulanger|Nadia Boulanger]] về sau trở thành người thầy của nhiều nhà soạn nhạc khắp thế giới.`,
    refs: [W('Impressionism in music', 'Impressionism_in_music'), W('Nadia Boulanger', 'Nadia_Boulanger')],
  },
  'm20:vienna2': {
    intro: `**Trường phái Vienna thứ hai**: [[arnold-schoenberg|Schoenberg]] và các học trò [[alban-berg|Berg]], [[anton-webern|Webern]]. Họ đi từ [[hoa-am-cromatic|hoà âm cromatic]] hậu Lãng mạn sang [[phi-dieu-tinh|phi điệu tính]] (khoảng 1908), rồi Schoenberg xây dựng [[ky-thuat-12-am]] (đầu thập niên 1920) để có một nguyên tắc tổ chức cao độ mới. Webern với các tác phẩm cực ngắn, cô đọng ảnh hưởng mạnh tới thế hệ sau 1945.`,
    refs: [W('Second Viennese School', 'Second_Viennese_School'), W('Twelve-tone technique', 'Twelve-tone_technique')],
  },
  'm20:russia': {
    intro: `[[alexander-scriabin|Scriabin]] và [[igor-stravinsky|Stravinsky]] (*Le Sacre du printemps*, 1913 — xem [[nhip-hon-hop]]) đưa nhạc Nga ra tiên phong. Sau 1917, nhạc sĩ Liên Xô làm việc dưới kiểm soát chính trị: năm 1948, một nghị quyết của Đảng (thời Zhdanov) phê phán [[dmitri-shostakovich|Shostakovich]], [[sergei-prokofiev|Prokofiev]], [[aram-khachaturian|Khachaturian]] và nhiều người khác là "hình thức chủ nghĩa"; họ chỉ được phục hồi chính thức năm 1958. [[dmitry-kabalevsky|Kabalevsky]] để lại nhiều tác phẩm piano cho trẻ em.`,
    refs: [W('Zhdanov Doctrine', 'Zhdanov_Doctrine'), ['Gresham College — The Year 1948 in Soviet Music', 'https://www.gresham.ac.uk/node/13912']],
  },
  'm20:neoclassical': {
    intro: `Sau Thế chiến I, nhiều nhà soạn nhạc quay lại **sự rõ ràng của thế kỷ 18** — hình thức cân đối, kết cấu mỏng, giọng điệu trào phúng — gọi là **tân cổ điển** (Stravinsky giai đoạn *Pulcinella* là ví dụ tiêu biểu, xem [[toan-diatonic]]). Năm 1920, nhà phê bình Henri Collet đặt tên **"Nhóm Sáu"** (Les Six) cho [[darius-milhaud|Milhaud]], [[arthur-honegger|Honegger]], [[francis-poulenc|Poulenc]], [[germaine-tailleferre|Tailleferre]], [[georges-auric|Auric]] và Louis Durey. Ở Đức, [[paul-hindemith|Hindemith]] và [[carl-orff|Orff]] (với phương pháp giáo dục âm nhạc riêng — xem [[phuong-phap-giao-duc-am-nhac]]).`,
    refs: [W('Neoclassicism (music)', 'Neoclassicism_(music)'), W('Les Six', 'Les_Six')],
  },
  'm20:national': {
    intro: `Âm nhạc dân tộc thế kỷ 20 dựa trên **sưu tầm dân ca thực địa** hơn là phỏng theo: [[bela-bartok|Bartók]] và [[zoltan-kodaly|Kodály]] ghi âm hàng nghìn bài dân ca Hungary và vùng lân cận, rồi biến chúng thành ngôn ngữ hiện đại (xem *Mikrokosmos* trong [[nhip-hon-hop]]). [[leos-janacek|Janáček]] xây giai điệu từ ngữ điệu lời nói Séc; ở Mỹ Latin có [[heitor-villa-lobos|Villa-Lobos]] (Brazil), [[alberto-ginastera|Ginastera]] và [[astor-piazzolla|Piazzolla]] (Argentina, tango mới).`,
    refs: [W('Béla Bartók', 'B%C3%A9la_Bart%C3%B3k'), W('Leoš Janáček', 'Leo%C5%A1_Jan%C3%A1%C4%8Dek'), W('Heitor Villa-Lobos', 'Heitor_Villa-Lobos')],
  },
  'm20:britain': {
    intro: `[[ralph-vaughan-williams|Vaughan Williams]] và [[gustav-holst|Holst]] sưu tầm dân ca Anh và nghiên cứu nhạc thời Tudor, tạo nên một giọng Anh riêng với nhiều [[dieu-thuc|điệu thức]]. [[benjamin-britten|Britten]], với opera *Peter Grimes* (1945), là nhà soạn nhạc Anh nổi bật nhất giữa thế kỷ; [[william-walton|Walton]] và [[michael-tippett|Tippett]] cùng thế hệ.`,
    refs: [W('Ralph Vaughan Williams', 'Ralph_Vaughan_Williams'), W('Peter Grimes', 'Peter_Grimes')],
  },
  'm20:america': {
    intro: `Âm nhạc Mỹ thế kỷ 20 tìm bản sắc riêng: [[charles-ives|Ives]] thử nghiệm [[da-dieu-tinh|đa điệu tính]] và trích dẫn thánh ca, hành khúc; [[henry-cowell|Cowell]] dùng [[am-cum|âm cụm]]. Ranh giới giữa nhạc cổ điển và **jazz** mờ dần với [[george-gershwin|Gershwin]] (*Rhapsody in Blue*, 1924), [[duke-ellington|Ellington]] và [[leonard-bernstein|Bernstein]]; [[aaron-copland|Copland]] tạo nên "âm thanh Mỹ" quen thuộc (*Appalachian Spring*). [[scott-joplin|Joplin]] với ragtime là gốc rễ của jazz piano (xem [[dao-phach]]).`,
    refs: [W('Charles Ives', 'Charles_Ives'), W('Rhapsody in Blue', 'Rhapsody_in_Blue'), W('Appalachian Spring', 'Appalachian_Spring')],
  },
  'm20:avantgarde': {
    intro: `Sau 1945, các khoá học hè ở **Darmstadt** (từ 1946) trở thành trung tâm của nhạc tiên phong châu Âu: [[pierre-boulez|Boulez]], [[karlheinz-stockhausen|Stockhausen]], [[luigi-nono|Nono]] mở rộng [[ky-thuat-12-am|nhạc chuỗi]] sang cả trường độ, cường độ, âm sắc. Những hướng khác: [[olivier-messiaen|Messiaen]] với [[dieu-thuc-chuyen-vi-gioi-han|điệu thức riêng]] và tiếng chim; [[john-cage|Cage]] với âm nhạc **ngẫu nhiên** (xem [[dinh-nghia-am-nhac]]); [[gyorgy-ligeti|Ligeti]] và [[krzysztof-penderecki|Penderecki]] với các khối âm dày (xem [[am-cum]]); [[gerard-grisey|Grisey]] và [[tristan-murail|Murail]] với [[nhac-pho|âm nhạc phổ]].`,
    refs: [W('Darmstädter Ferienkurse', 'Darmst%C3%A4dter_Ferienkurse'), W('Serialism', 'Serialism'), W('Aleatoric music', 'Aleatoric_music')],
  },
  'm20:minimal': {
    intro: `**Âm nhạc tối giản** ra đời ở Mỹ thập niên 1960: [[la-monte-young|La Monte Young]] với những âm ngân rất dài, *In C* (1964) của [[terry-riley|Terry Riley]], các quá trình lệch pha của [[steve-reich|Reich]] và mẫu lặp của [[philip-glass|Glass]] (xem [[toi-gian]], [[ostinato]]). Một nhánh khác, đôi khi gọi là "tối giản tâm linh", gồm [[arvo-part|Pärt]] (phong cách *tintinnabuli*), [[henryk-gorecki|Górecki]] và [[john-tavener|Tavener]]. [[john-adams|John Adams]] đưa tối giản vào giao hưởng và opera.`,
    refs: [W('Minimal music', 'Minimal_music'), W('In C', 'In_C'), W('Holy minimalism', 'Holy_minimalism')],
  },
  'm20:film': {
    intro: `Âm nhạc cho điện ảnh kế thừa ngôn ngữ dàn nhạc hậu Lãng mạn: [[erich-wolfgang-korngold|Korngold]] mang phong cách opera Vienna vào Hollywood thập niên 1930. [[bernard-herrmann|Herrmann]] (các phim của Hitchcock), [[nino-rota|Rota]] (Fellini, *Bố già*), [[ennio-morricone|Morricone]], [[john-williams|John Williams]] và [[joe-hisaishi|Joe Hisaishi]] (phim Studio Ghibli) là những tên tuổi mà học trò piano hay muốn chơi bản chuyển soạn.`,
    refs: [W('Film score', 'Film_score'), W('Erich Wolfgang Korngold', 'Erich_Wolfgang_Korngold')],
  },
  // ── Nghệ sĩ piano ──
  'p19:classical': {
    intro: `Thời chuyển giao từ [[lich-su-piano|fortepiano]] sang piano hiện đại. Những nghệ sĩ – nhà soạn nhạc như [[muzio-clementi|Clementi]], [[johann-nepomuk-hummel|Hummel]] và [[ludwig-van-beethoven|Beethoven]] vừa biểu diễn vừa viết cho chính mình; [[john-field|John Field]], học trò của Clementi, đặt tên cho thể loại **nocturne** mà Chopin phát triển sau này. Nhiều người trong số họ đồng thời là nhà sư phạm (xem [[lich-su-ky-thuat-piano]]).`,
    refs: [W('John Field (composer)', 'John_Field_(composer)'), W('Muzio Clementi', 'Muzio_Clementi')],
  },
  'p19:virtuoso': {
    intro: `Thời đại của **nghệ sĩ bậc thầy**: [[franz-liszt|Liszt]] biểu diễn trước những đám đông cuồng nhiệt, và năm 1840 ở London ông quảng cáo các buổi diễn độc tấu của mình là "Pianoforte Recitals" — gốc của khái niệm **recital** ngày nay. Năm 1837, ông và [[sigismond-thalberg|Thalberg]] có màn "đấu đàn" nổi tiếng ở Paris. [[frederic-chopin|Chopin]] chọn những buổi diễn thân mật trong salon; [[clara-schumann|Clara Schumann]] là một trong những nghệ sĩ đầu tiên chơi thuộc lòng trước công chúng (xem [[hoc-thuoc-bai]]).`,
    refs: [['Classical Music — 1840: Liszt and the piano recital', 'https://www.classical-music.com/features/composers/who-invented-the-piano-recital'], W('Franz Liszt', 'Franz_Liszt'), W('Sigismond Thalberg', 'Sigismond_Thalberg')],
  },
  'p19:teachers': {
    intro: `Ba "mắt xích" của các dòng sư phạm piano: [[carl-czerny|Czerny]] học Beethoven và dạy Liszt, để lại hàng nghìn bài luyện ngón (xem [[bai-tap-ngon]]); [[hans-von-bulow|Hans von Bülow]], học trò Liszt, là nghệ sĩ và nhạc trưởng nổi tiếng với các ấn bản có chú giải (xem [[an-ban-urtext]]); [[theodor-leschetizky|Leschetizky]] ở Vienna dạy cả một thế hệ nghệ sĩ lớn, trong đó có Paderewski và Schnabel (xem [[truong-phai-piano]]).`,
    refs: [W('Theodor Leschetizky', 'Theodor_Leschetizky'), W('Carl Czerny', 'Carl_Czerny')],
  },
  'p20a:golden': {
    intro: `Những nghệ sĩ lớn cuối thế kỷ 19 – đầu thế kỷ 20, thời mà người ta hay gọi là "thời hoàng kim" của piano: [[sergei-rachmaninoff|Rachmaninoff]], [[josef-hofmann|Hofmann]], [[leopold-godowsky|Godowsky]], [[ferruccio-busoni|Busoni]]. Họ vừa là nhà soạn nhạc hoặc chuyển soạn, vừa thuộc thế hệ đầu tiên để lại **bản thu âm** và cuộn piano (xem [[lich-su-thu-am]]), nên ta còn nghe được phong cách tự do, nhiều [[rubato]] của thời ấy.`,
    refs: [W('Josef Hofmann', 'Josef_Hofmann'), W('Ferruccio Busoni', 'Ferruccio_Busoni')],
  },
  'p20a:german': {
    intro: `Truyền thống Đức – Áo đặt **sự trung thành với tác phẩm** lên trên phô diễn: chơi trọn vẹn các tác phẩm lớn của Bach, Mozart, Beethoven, Schubert. [[artur-schnabel|Schnabel]] là người đầu tiên thu âm trọn bộ 32 sonata của Beethoven (cho hãng HMV, 1932–1935); [[wilhelm-kempff|Kempff]], [[wilhelm-backhaus|Backhaus]], [[edwin-fischer|Fischer]] và [[rudolf-serkin|Serkin]] tiếp nối đường hướng này (xem [[tinh-xac-thuc-bieu-dien]]).`,
    refs: [['Library of Congress — The musical life and legacy of Artur Schnabel', 'https://blogs.loc.gov/music/2018/11/the-musical-life-and-legacy-of-artur-schnabel/'], W('Piano sonatas (Beethoven)', 'Piano_sonatas_(Beethoven)')],
  },
  'p20a:others': {
    intro: `Ngoài thế giới Đức – Áo: [[alfred-cortot|Cortot]] và [[marguerite-long|Marguerite Long]] — hai trụ cột của trường phái Pháp và Nhạc viện Paris; [[arthur-rubinstein|Arthur Rubinstein]] gắn với Chopin; [[vladimir-horowitz|Horowitz]] với kỹ thuật và âm thanh huyền thoại; [[claudio-arrau|Arrau]] (Chile), [[dinu-lipatti|Lipatti]] (Romania) và [[alicia-de-larrocha|Alicia de Larrocha]] (Tây Ban Nha, nổi tiếng với Albéniz và Granados).`,
    refs: [W('Alfred Cortot', 'Alfred_Cortot'), W('Vladimir Horowitz', 'Vladimir_Horowitz')],
  },
  'p20b:russian': {
    intro: `Trường phái Nga – Xô Viết hình thành quanh các nhạc viện Moskva và Leningrad. [[heinrich-neuhaus|Heinrich Neuhaus]] dạy ở Nhạc viện Moskva từ 1922 đến 1964; học trò của ông gồm [[sviatoslav-richter|Richter]] và [[emil-gilels|Gilels]], và cuốn *Nghệ thuật chơi piano* (1958) của ông nhấn mạnh **âm thanh và trí tưởng tượng** hơn kỹ thuật thuần tuý (xem [[truong-phai-piano]]).`,
    refs: [['classicalm.com — Heinrich Neuhaus', 'https://classicalm.com/en/artist/3085/Neuhaus-Heinrich'], W('Heinrich Neuhaus', 'Heinrich_Neuhaus')],
  },
  'p20b:western': {
    intro: `Nửa sau thế kỷ 20, các **cuộc thi quốc tế** và **đĩa hát** đưa nghệ sĩ piano tới khán giả toàn cầu: [[van-cliburn|Van Cliburn]] (Mỹ) đoạt giải nhất cuộc thi Tchaikovsky đầu tiên ở Moskva năm 1958; [[martha-argerich|Argerich]] và [[maurizio-pollini|Pollini]] đều thắng cuộc thi Chopin (1965 và 1960). [[glenn-gould|Glenn Gould]] với *Goldberg Variations* (1955) rồi rời sân khấu để chỉ thu âm; [[alfred-brendel|Brendel]], [[andras-schiff|Schiff]], [[murray-perahia|Perahia]] nổi bật với Bach, Mozart, Beethoven, Schubert.`,
    refs: [W('International Tchaikovsky Competition', 'International_Tchaikovsky_Competition'), W('International Chopin Piano Competition', 'International_Chopin_Piano_Competition'), W('Glenn Gould', 'Glenn_Gould')],
  },
  'p20b:asia': {
    intro: `Từ cuối thế kỷ 20, châu Á trở thành một trung tâm lớn của piano. [[dang-thai-son|Đặng Thái Sơn]] là nghệ sĩ châu Á đầu tiên đoạt giải nhất cuộc thi Chopin (1980); [[seong-jin-cho|Seong-Jin Cho]] (Hàn Quốc) đoạt giải năm 2015. [[mitsuko-uchida|Mitsuko Uchida]] nổi tiếng với Mozart và Schubert; [[lang-lang|Lang Lang]] và [[yuja-wang|Yuja Wang]] thuộc thế hệ ngôi sao toàn cầu (xem [[piano-viet-nam]]).`,
    refs: [W('International Chopin Piano Competition', 'International_Chopin_Piano_Competition'), W('Đặng Thái Sơn', '%C4%90%E1%BA%B7ng_Th%C3%A1i_S%C6%A1n')],
  },
  'p20b:new': {
    intro: `Thế hệ sinh từ thập niên 1970 trở đi: [[evgeny-kissin|Kissin]] (thần đồng thu âm hai concerto Chopin năm 12 tuổi), [[leif-ove-andsnes|Andsnes]] (Na Uy) và [[daniil-trifonov|Trifonov]] (đoạt giải nhất cuộc thi Tchaikovsky 2011).`,
    refs: [W('Evgeny Kissin', 'Evgeny_Kissin'), W('Daniil Trifonov', 'Daniil_Trifonov')],
  },
  'pjz:early': {
    intro: `Piano jazz bắt đầu từ **ragtime** — tay trái đều đặn, tay phải [[dao-phach|đảo phách]] — với [[scott-joplin|Scott Joplin]]. Ở Harlem thập niên 1920, **stride piano** mở rộng ragtime với tay trái "sải" giữa bè trầm và hợp âm (xem [[dem-hat-piano]]); [[james-p-johnson|James P. Johnson]] là người đặt nền và [[fats-waller|Fats Waller]] là học trò nổi tiếng nhất của ông.`,
    refs: [W('Stride piano', 'Stride_(music)'), W('Ragtime', 'Ragtime')],
  },
  'pjz:modern': {
    intro: `[[art-tatum|Art Tatum]] nâng kỹ thuật piano jazz lên mức huyền thoại. Thời **bebop** (thập niên 1940), [[bud-powell|Bud Powell]] chuyển ngôn ngữ kèn sang piano, còn [[thelonious-monk|Monk]] có lối hoà âm góc cạnh riêng. Sau đó, [[bill-evans|Bill Evans]] với [[xep-hop-am|thế bấm không gốc]] và jazz điệu thức; [[mccoy-tyner|McCoy Tyner]] với [[hoa-am-quang-bon|hoà âm quãng 4]]; [[herbie-hancock|Hancock]] và [[chick-corea|Corea]] với fusion; [[keith-jarrett|Keith Jarrett]] với [[ngau-hung-tu-do|ngẫu hứng tự do]] (xem [[ngau-hung-jazz]]).`,
    refs: [W('Jazz piano', 'Jazz_piano'), W('Bebop', 'Bebop')],
  },
}

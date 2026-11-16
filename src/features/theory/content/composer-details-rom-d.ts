import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Lãng mạn Pháp (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_D: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'César Franck': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/12/1822 | Sinh tại Liège (khi đó thuộc Vương quốc Hà Lan thống nhất, nay là Bỉ) |
| 1835 | Gia đình chuyển sang Paris; cha muốn biến ông thành thần đồng piano kiểu Liszt, Thalberg |
| 10/1837 | Vào Nhạc viện Paris sau khi cha nhập quốc tịch Pháp |
| 22/4/1842 | Rời Nhạc viện, ghi là "tự nguyện", nhưng nhiều khả năng do lệnh của cha |
| 22/2/1848 | Cưới Félicité Desmousseaux giữa lúc Paris nổi dậy |
| 22/1/1858 | Làm maître de chapelle nhà thờ Sainte-Clotilde; khoảng một năm sau thành người chơi organ chính trên cây đàn Cavaillé-Coll mới, giữ đến khi mất |
| 1/2/1872 | Được bổ nhiệm giáo sư organ Nhạc viện; lúc này mới phát hiện mình không còn là công dân Pháp và nhập tịch ngay |
| 1885 | *Variations symphoniques*; nhận Bắc Đẩu Bội tinh hạng hiệp sĩ (công bố 14/7, nghị định 6/8/1885) |
| 26/9/1886 | Sonata violin La trưởng được trao làm quà cưới cho Eugène Ysaÿe ở Arlon; công diễn 16/12/1886 tại Brussels |
| 1886 | Theo Wikipedia tiếng Pháp, làm chủ tịch Société nationale de musique đến khi mất (xem mục Giai thoại) |
| 17/2/1889 | Giao hưởng Rê thứ ra mắt tại Nhạc viện, Jules Garcin chỉ huy |
| 19/4/1890 | Tứ tấu đàn dây ra mắt, được khen |
| 1890 | Bị tai nạn xe trên phố Paris |
| 8/11/1890 | Mất ở Paris, sau viêm màng phổi biến chứng viêm màng ngoài tim |

## Âm nhạc và đóng góp
Franck là trung tâm của dòng nhạc khí nghiêm túc Pháp cuối thế kỷ 19, chủ yếu nhờ thập niên cuối đời. Dấu ấn của ông là **hình thức chu kỳ**: chất liệu của chương trước trở lại ở chương sau, thường sinh ra từ một motif mầm; *Giao hưởng Rê thứ* (tặng học trò Henri Duparc) và *Sonata violin* là hai ví dụ tiêu biểu. Hoà âm của ông dày nốt chromatic, chuyển giọng liên tục, chịu ảnh hưởng Liszt và Wagner nhưng gắn với truyền thống [[organ-ong]] Pháp. Với *Six Pièces* (1856–1864, có *Grande Pièce symphonique*), ông mở đường cho kiểu giao hưởng cho organ mà Widor và Vierne phát triển. Ngoài ra còn *Prélude, choral et fugue* cho piano, *Variations symphoniques* cho piano và dàn nhạc, Ngũ tấu piano, [[oratorio-cantata-passion]] *Les Béatitudes* (1869–1879, đón nhận kém). Học trò của ông (d'Indy, Duparc, Chausson…) gọi ông là "Père Franck" và về sau lập Schola Cantorum. Xem thêm [[giao-huong]], [[nhac-thinh-phong]], [[thoi-ky-lang-man]].

## Giai thoại và điều chưa chắc
- **Đám cưới vượt chiến luỹ (1848)**: chỉ dựa vào lời kể của d'Indy rằng đoàn đưa dâu trèo qua chiến luỹ "với sự giúp đỡ vui vẻ của quân nổi dậy". D'Indy là học trò rất sùng kính, tiểu sử của ông thường bị coi là thiên về tôn vinh.
- **Tai nạn làm ông chết?** Wikipedia tiếng Anh tả xe ông đi bị một xe điện ngựa kéo đâm (tháng 7/1890); Wikipedia tiếng Pháp ghi đầu tháng 5/1890, xe bị một omnibus đâm. Một bác sĩ bệnh học (1970) cho rằng nhiễm trùng hô hấp đủ gây tử vong; R. J. Stove phản bác rằng người đương thời không nghi ngờ vai trò của chấn thương. Nguyên nhân thật vẫn còn tranh cãi.
- **Chủ tịch Société nationale**: Wikipedia tiếng Pháp nói sau năm 1886 Franck được cử làm chủ tịch; Wikipedia tiếng Anh nói ông từ chối chức này và d'Indy chỉ nhận sau khi ông mất. Hai nguồn lệch nhau.
- **Lời chê của Gounod** về Giao hưởng Rê thứ ("sự khẳng định bất lực đẩy đến mức giáo điều") chỉ là lời được thuật lại, không phải văn bản của Gounod.
- **Sonata viết cho cello?** Giả thuyết dựa vào lời kể miệng của Pablo Casals và một bức thư của Antoine Ysaÿe, chưa có bằng chứng bản thảo. Chuyện buổi công diễn ở bảo tàng Brussels chơi ba chương cuối trong bóng tối vì không được thắp đèn đến từ d'Indy, người có mặt.

## Bối cảnh
Paris thời Đế chế thứ hai và Cộng hoà thứ ba. Franck sống giản dị bằng nghề dạy tư và chơi organ ở Sainte-Clotilde, nhà thờ tân gothic mới xây ở quận 7, nơi học trò tụ tập trên gác đàn mỗi Chủ nhật.
`,
    refs: [
      ['Wikipedia (tiếng Anh): César Franck', 'https://en.wikipedia.org/wiki/C%C3%A9sar_Franck'],
      ['Wikipedia (tiếng Pháp): César Franck', 'https://fr.wikipedia.org/wiki/C%C3%A9sar_Franck'],
      ['Wikipedia (tiếng Anh): Symphony in D minor (Franck)', 'https://en.wikipedia.org/wiki/Symphony_in_D_minor_(Franck)'],
      ['Wikipedia (tiếng Anh): Violin Sonata (Franck)', 'https://en.wikipedia.org/wiki/Violin_Sonata_(Franck)'],
      ['Wikipedia (tiếng Pháp): Société nationale de musique', 'https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_musique'],
    ],
  },
  'Édouard Lalo': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 27/1/1823 | Sinh tại Lille |
| 1839 | Sang Paris học violin với Pierre Baillot và François-Antoine Habeneck (Wikipedia tiếng Pháp) |
| 1848 hoặc 1856 | Cùng bạn bè lập tứ tấu Armingaud, chơi viola rồi violin hai (tiếng Anh ghi 1848, tiếng Pháp ghi tham gia từ 1856) |
| k. 1865 | Cưới nữ ca sĩ alto Julie Besnier de Maligny, người khích lệ ông viết opera |
| 1873 | Nhận Bắc Đẩu Bội tinh |
| 7/2/1875 | *Symphonie espagnole*, viết năm 1874 cho Pablo de Sarasate, ra mắt ở Paris |
| 1877 | Concerto cello Rê thứ |
| 1878–1879 | *Le roi d'Ys* bị Théâtre-Lyrique (1878) rồi Opéra (1879) từ chối |
| 1882 | Ballet *Namouna* ở Opéra, không thành công |
| 7/5/1888 | *Le roi d'Ys* ra mắt tại Opéra-Comique (diễn ở nhà hát Châtelet); chưa đầy một năm đạt 100 suất |
| 1889 | Được thăng hạng sĩ quan Bắc Đẩu Bội tinh (Wikipedia tiếng Pháp) |
| 22/4/1892 | Mất ở Paris; opera *La jacquerie* còn dở, do Arthur Coquard hoàn thành |

## Âm nhạc và đóng góp
Lalo là nghệ sĩ dây thính phòng trước khi là nhà soạn nhạc, nên đóng góp lớn của ông là góp phần hồi sinh [[nhac-thinh-phong]] Pháp giữa lúc công chúng chỉ chuộng [[opera]]. Ông nổi tiếng với dàn nhạc sáng, nhịp điệu sắc và dùng chất liệu dân gian (Tây Ban Nha, Na Uy, Nga, Bretagne). *Symphonie espagnole* thật ra là một concerto violin năm chương; *Concerto cello* và *Giao hưởng Sol thứ* (1886) vẫn còn trong tiết mục. *Le roi d'Ys*, dựa trên truyền thuyết Bretagne về thành phố chìm, là thành công sân khấu duy nhất của ông và diễn gần 500 suất ở Opéra-Comique trong nửa thế kỷ. Xem [[hinh-thuc-concerto]], [[ballet]].

## Giai thoại và điều chưa chắc
- **"Người gốc Tây Ban Nha"**: thường được dùng để giải thích *Symphonie espagnole*. Wikipedia tiếng Anh chỉ xếp ông vào thể loại "người Pháp gốc Tây Ban Nha" mà không giải thích trong bài; người biên soạn chưa thấy nguồn trình bày gia phả cụ thể.
- **Ảnh hưởng tới Tchaikovsky**: có cơ sở. Tháng 3/1878 ở Clarens, Tchaikovsky chơi *Symphonie espagnole* cùng học trò Iosif Kotek, rồi bắt tay viết Concerto violin ngay sau đó.
- **Năm vào tứ tấu Armingaud** và **năm nhận Bắc Đẩu Bội tinh** khác nhau giữa các bản Wikipedia (xem bảng).
- *Fiesque*: Hervey (1894) kể các nhà hát từng nhận vở nhưng "luôn có chuyện" ngăn nó lên sàn diễn.

## Bối cảnh
Lille là thành phố công nghiệp miền bắc nước Pháp; ở Paris, Lalo sống chật vật nhiều năm bằng nghề chơi đàn thính phòng. Ông chỉ nổi tiếng ở tuổi gần 60, khi sau 1871 nhạc giao hưởng Pháp có thêm chỗ trình diễn.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Édouard Lalo', 'https://en.wikipedia.org/wiki/%C3%89douard_Lalo'],
      ['Wikipedia (tiếng Pháp): Édouard Lalo', 'https://fr.wikipedia.org/wiki/%C3%89douard_Lalo'],
      ['Wikipedia (tiếng Anh): Symphonie espagnole', 'https://en.wikipedia.org/wiki/Symphonie_espagnole'],
      ['Wikipedia (tiếng Anh): Le roi d\'Ys', 'https://en.wikipedia.org/wiki/Le_roi_d%27Ys'],
      ['Arthur Hervey, Masters of French Music (1894), Project Gutenberg', 'https://gutenberg.org/files/37410/37410-h/37410-h.htm'],
    ],
  },
  'Camille Saint-Saëns': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 9/10/1835 | Sinh tại Paris; cha mất khi ông còn rất nhỏ, mẹ và bà dì nuôi dạy |
| 1846 | Ra mắt chính thức ở Salle Pleyel năm 10 tuổi, chơi Concerto K. 450 của Mozart và Concerto số 3 của Beethoven |
| 1848 | Vào Nhạc viện Paris; giải organ năm 1851 |
| 1858–1877 | Organ nhà thờ La Madeleine, kế nhiệm Lefébure-Wély |
| 1861–1865 | Dạy ở trường Niedermeyer (chỗ dạy duy nhất của ông); Gabriel Fauré là học trò |
| 1870–1871 | Phục vụ trong Vệ binh quốc gia; lánh sang Anh thời Công xã |
| 25/2/1871 | Cùng Romain Bussine lập Société nationale de musique, khẩu hiệu "Ars gallica" |
| 17/11/1871 | Buổi hoà nhạc đầu tiên của Hội ở Salle Pleyel (có nguồn ghi 25/11) |
| 1875 | Cưới Marie-Laure Truffot |
| 1878 | Hai con trai mất: André (2 tuổi) ngã từ cửa sổ, sáu tuần sau Jean-François (6 tháng) mất vì viêm phổi |
| 2/12/1877 | *Samson et Dalila* ra mắt ở Weimar bằng tiếng Đức nhờ Liszt; Opéra Paris chỉ dựng năm 1892 |
| 1881 | Rời vợ trong kỳ nghỉ ở La Bourboule (tháng 7), không gặp lại; vào Viện Hàn lâm Mỹ thuật |
| 3/1886 | Buổi diễn riêng đầu tiên của *Carnaval des animaux* (3/3, tại nhà nghệ sĩ cello Charles Lebouc) |
| 1886 | Rời Société nationale cùng Bussine khi Hội mở cửa cho nhạc nước ngoài |
| 19/5/1886 | Giao hưởng số 3 "Organ" ra mắt ở St James's Hall, London, ông chỉ huy; Paris nghe ngày 9/1/1887 |
| 1913 | Bắc Đẩu Bội tinh hạng Đại thập tự |
| 16/12/1921 | Mất vì đau tim ở Alger; quốc tang ở La Madeleine, chôn ở Montparnasse |
| 25/2/1922 | Buổi công diễn đầu tiên của *Carnaval des animaux* (Concerts Colonne, Gabriel Pierné chỉ huy); Durand in trọn bộ tháng 4/1922 |

## Âm nhạc và đóng góp
Saint-Saëns là nhạc sĩ đa năng nhất nước Pháp thế kỷ 19: nghệ sĩ piano, organ, nhà soạn nhạc, nhà phê bình, nhà thơ nghiệp dư, người mê thiên văn. Phong cách của ông trong sáng, cân đối, gần chủ nghĩa cổ điển, kỹ thuật viết hoàn hảo. Ông viết 5 [[giao-huong]], 5 concerto piano, concerto violin và cello, 12 [[opera]] (*Samson et Dalila* đứng vững nhất), bốn [[tho-giao-huong]] theo mô hình Liszt, như *Danse macabre* (1874). *Giao hưởng số 3*, đề tặng Liszt, kết hợp organ và piano bốn tay. Bằng việc đồng sáng lập Société nationale (1871), ông giúp nhạc khí Pháp, vốn bị opera lấn át, có chỗ trình diễn. Về sau ông thành người bảo thủ: kính trọng Wagner nhưng "không bao giờ theo tôn giáo Wagner", và kịch liệt chống Debussy. Xem [[hinh-thuc-concerto]], [[thoi-ky-lang-man]].

## Giai thoại và điều chưa chắc
- **Carnaval des animaux bị giấu**: có thật. Ông cấm in khi còn sống vì sợ hại danh tiếng nhà soạn nhạc nghiêm túc và ghi trong di chúc cho in sau khi mất. Riêng *Thiên nga* được in năm 1887. Tác phẩm vẫn được diễn bán riêng tư nhiều lần (nhà Pauline Viardot có Liszt dự, năm 1886). Việc viết cho học sinh trường Niedermeyer chỉ là giả thuyết.
- **Bỏ về giữa buổi ra mắt *Le Sacre du printemps* (1913)**: chuyện rất phổ biến nhưng chính Stravinsky nói Saint-Saëns không có mặt. Lời được thuật lại rằng ông gọi Stravinsky là điên là ở buổi hoà nhạc năm 1914.
- **"Biết mọi thứ, chỉ thiếu sự thiếu kinh nghiệm"**: câu gán cho Berlioz, qua Jean Gallois, không có văn bản chắc chắn.
- **Thần đồng**: Wikipedia ghi trước 3 tuổi đã có tai tuyệt đối và dò giai điệu trên đàn. Chuyện sau buổi ra mắt năm 1846 ông đề nghị chơi thuộc lòng bất kỳ sonata nào của Beethoven rất hay được kể, nhưng các phần nguồn người biên soạn đã đọc không xác nhận.
- **Liszt khen** là nghệ sĩ organ giỏi nhất thế giới (1858) và **Wagner nâng ly** gọi ông là nhà soạn nhạc Pháp vĩ đại nhất còn sống (Hervey 1894) đều là lời được thuật lại.
- **Phim đầu tiên**: ông viết nhạc cho phim *L'Assassinat du duc de Guise* (1908); Wikipedia tiếng Pháp nói đây có lẽ là nhạc phim đầu tiên do một nhà soạn nhạc nổi tiếng viết riêng; bản tiếng Anh không khẳng định "đầu tiên".
- **Société nationale**: tiếng Anh ghi ông là phó chủ tịch dưới Bussine, tiếng Pháp ghi hai người cùng chủ trì.

## Bối cảnh
Paris từ Đế chế thứ hai đến sau Thế chiến I. Sau thất bại 1870–1871, giới nhạc sĩ muốn chứng minh nước Pháp có nền nhạc khí riêng trước nước Đức. Saint-Saëns đi 179 chuyến tới 27 nước, ưa nghỉ đông ở Alger và Ai Cập.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Camille Saint-Saëns', 'https://en.wikipedia.org/wiki/Camille_Saint-Sa%C3%ABns'],
      ['Wikipedia (tiếng Pháp): Camille Saint-Saëns', 'https://fr.wikipedia.org/wiki/Camille_Saint-Sa%C3%ABns'],
      ['Wikipedia (tiếng Anh): The Carnival of the Animals', 'https://en.wikipedia.org/wiki/The_Carnival_of_the_Animals'],
      ['Wikipedia (tiếng Anh): Symphony No. 3 (Saint-Saëns)', 'https://en.wikipedia.org/wiki/Symphony_No._3_(Saint-Sa%C3%ABns)'],
      ['Wikipedia (tiếng Anh): Société Nationale de Musique', 'https://en.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_Nationale_de_Musique'],
      ['Wikipedia (tiếng Pháp): Société nationale de musique', 'https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_musique'],
      ['Arthur Hervey, Masters of French Music (1894), Project Gutenberg', 'https://gutenberg.org/files/37410/37410-h/37410-h.htm'],
    ],
  },
  'Léo Delibes': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 21/2/1836 | Sinh tại Saint-Germain-du-Val (nay thuộc La Flèche) |
| k. 1848 | Vào Nhạc viện Paris; từ năm 18 tuổi học sáng tác với Adolphe Adam |
| 1856 | Tác phẩm sân khấu đầu tay *Deux sous de charbon* ở Folies-Nouvelles |
| 1862 hoặc 1863 | Vào làm ở Opéra Paris (nguồn lệch năm) |
| 1866 | Ballet *La Source*, viết chung với Ludwig Minkus (mỗi người hai cảnh) |
| 25/5/1870 | *Coppélia* ra mắt ở Opéra (Salle Le Peletier), biên đạo Arthur Saint-Léon |
| 1871 | Rời Opéra để chuyên sáng tác |
| 1873 | *Le roi l'a dit* ở Opéra-Comique |
| 1876 | Ballet *Sylvia* ở Opéra |
| 1880 | *Jean de Nivelle* ở Opéra-Comique |
| 1881 | Giáo sư sáng tác Nhạc viện, kế nhiệm Henri Reber (Wikipedia tiếng Pháp ghi 1880) |
| 14/4/1883 | *Lakmé* ra mắt ở Opéra-Comique |
| 1884 | Vào Viện Hàn lâm Mỹ thuật |
| 16/1/1891 | Mất tại nhà ở Paris; chôn ở nghĩa trang Montmartre |
| 1893 | *Kassya* dở dang, do Massenet hoàn thành, được dựng |

## Âm nhạc và đóng góp
Delibes là bậc thầy của [[ballet]] Pháp: ông đưa nhạc ballet từ vai trò đệm thành nhạc giao hưởng có chủ đề riêng cho nhân vật, có tiết tấu nhảy múa rõ và màu dàn nhạc tinh tế. *Coppélia* (búp bê máy, theo E. T. A. Hoffmann) có những điệu nhảy dân tộc như mazurka, czardas; *Sylvia* được nhiều nhà phê bình đánh giá cao hơn về mặt nhạc. Trong [[opera]], *Lakmé* (bối cảnh Ấn Độ thuộc Anh) là đỉnh cao của chủ nghĩa phương Đông Pháp, với *Song ca hoa* và *Aria chuông*. Grove xếp *Lakmé* là kiệt tác của ông. Phong cách ông kế thừa Adam, mở đường cho Tchaikovsky.

## Giai thoại và điều chưa chắc
- **Tchaikovsky và *Sylvia***: có thư khen *Sylvia* là ballet đầu tiên mà âm nhạc là điều quan tâm duy nhất; câu "biết trước thì đã không viết *Hồ thiên nga*" chỉ được ghi là "được cho là đã nói".
- **Nhạc ballet trong *Faust* của Gounod**: một giả thuyết năm 1991 cho rằng Delibes viết; các nghiên cứu năm 2015 và 2019 không ủng hộ.
- **Ngôi sao *Coppélia***: Giuseppina Bozzacchi, 16 tuổi, đóng Swanhilda; chiến tranh Pháp – Phổ cắt ngang loạt diễn và cô mất trong vòng vây Paris, đúng ngày sinh nhật 17 tuổi.
- **Năm vào Opéra và năm làm giáo sư** khác nhau tuỳ nguồn (xem bảng).

## Bối cảnh
Paris thời Đế chế thứ hai: Opéra ở Salle Le Peletier với đoàn ballet được nuôi bởi giới thượng lưu, cùng các nhà hát nhỏ chuyên operetta nơi Delibes tập nghề đệm đàn. Ông đi lên từ những sân khấu bình dân đến Viện Hàn lâm.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Léo Delibes', 'https://en.wikipedia.org/wiki/L%C3%A9o_Delibes'],
      ['Wikipedia (tiếng Pháp): Léo Delibes', 'https://fr.wikipedia.org/wiki/L%C3%A9o_Delibes'],
      ['Wikipedia (tiếng Anh): Coppélia', 'https://en.wikipedia.org/wiki/Copp%C3%A9lia'],
      ['Arthur Hervey, Masters of French Music (1894), Project Gutenberg', 'https://gutenberg.org/files/37410/37410-h/37410-h.htm'],
    ],
  },
  'Emmanuel Chabrier': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/1/1841 | Sinh tại Ambert (Auvergne) |
| 1861–1880 | Học luật theo ý gia đình, làm công chức Bộ Nội vụ, sáng tác lúc rảnh |
| 1877 | Opéra bouffe *L'étoile* |
| 1880 | Nghe *Tristan und Isolde* ở München, bỏ việc công chức để chuyên sáng tác |
| 7–12/1882 | Đi khắp Tây Ban Nha cùng vợ (San Sebastián, Sevilla, Granada, Barcelona…) |
| 4/11/1883 | *España* ra mắt ở Théâtre du Château d'Eau, Charles Lamoureux chỉ huy |
| 1886 | Opera *Gwendoline* |
| 1887 | Opéra comique *Le roi malgré lui* |
| k. 1890 | Tài chính và sức khoẻ sa sút |
| 13/9/1894 | Mất ở Paris, 53 tuổi, vì bệnh thần kinh nhiều khả năng do giang mai; *Briséïs* bỏ dở |

## Âm nhạc và đóng góp
Chabrier gần như tự học, không qua nhạc viện, nên phong cách độc lập: nhịp điệu nảy, hoà âm táo bạo, hài hước, màu dàn nhạc rực rỡ. *España*, rhapsody cho dàn nhạc sau chuyến đi Tây Ban Nha, là tác phẩm nổi tiếng nhất; ngoài ra có *Joyeuse marche*, *Suite pastorale*, *Dix pièces pittoresques* và *Bourrée fantasque* cho piano ([[tieu-pham-piano]]). Ông không viết giao hưởng, concerto hay thánh nhạc. Debussy, Ravel, Satie, Poulenc, Stravinsky đều chịu ảnh hưởng; một nhà phê bình gọi nhạc ông là "cái nôi của chủ nghĩa hiện đại Pháp". Xem [[opera]], [[thoi-ky-lang-man]].

## Giai thoại và điều chưa chắc
- **"Tristan khiến ông bỏ việc"**: các nguồn đều nêu buổi nghe *Tristan* năm 1880 trước quyết định bỏ ngạch công chức; còn mức độ nhân quả là cách kể của tiểu sử.
- **Nhà sưu tập tranh Ấn tượng**: có thật; ông là bạn thân của Manet, sưu tập tranh Manet, Monet, Renoir và xuất hiện trong tranh của Manet, Degas, Fantin-Latour.
- **Ngày ra mắt *España***: tiếng Anh bài chính chỉ ghi tháng 11/1883; bài riêng về tác phẩm ghi 4/11/1883.
- *España* sống tiếp qua điệu valse của Waldteufel (1886), bài hát *Hot Diggity* (1956) và bản nhại *Españaña* của Satie (1913).

## Bối cảnh
Paris thời Cộng hoà thứ ba, thế giới các quán cà phê, xưởng hoạ, salon văn học; Chabrier giao du với Verlaine, Zola, Daudet. Ông là "nhạc sĩ nghiệp dư" của giới hoạ sĩ, sống bằng lương công chức gần 20 năm.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Emmanuel Chabrier', 'https://en.wikipedia.org/wiki/Emmanuel_Chabrier'],
      ['Wikipedia (tiếng Pháp): Emmanuel Chabrier', 'https://fr.wikipedia.org/wiki/Emmanuel_Chabrier'],
      ['Wikipedia (tiếng Anh): España (Chabrier)', 'https://en.wikipedia.org/wiki/Espa%C3%B1a_(Chabrier)'],
    ],
  },
  'Charles-Marie Widor': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 21/2/1844 | Sinh tại Lyon (giấy khai sinh ghi 1844; chính ông và bia mộ ghi 1845) |
| 1860s | Học organ với Jacques-Nicolas Lemmens và sáng tác với François-Joseph Fétis ở Brussels |
| 1/1870 | Được bổ nhiệm "tạm thời một năm" làm organ nhà thờ Saint-Sulpice |
| 1872 | Bốn giao hưởng organ Op. 13 |
| 19/10/1879 | Tự trình diễn Giao hưởng organ số 5 tại cung Trocadéro |
| 1890 | Kế nhiệm Franck làm giáo sư organ Nhạc viện Paris |
| 1896 | Giáo sư sáng tác |
| 1910 | Vào Viện Hàn lâm Mỹ thuật; thư ký thường trực từ 1914 |
| 1920 | Cưới Mathilde de Montesquiou-Fézensac, lúc 76 tuổi |
| 1921 | Đồng sáng lập Nhạc viện Mỹ ở Fontainebleau |
| 4/1932 | Thu âm Giao hưởng số 5 ở Saint-Sulpice |
| cuối 1933 | Rời Saint-Sulpice sau khoảng 64 năm |
| 12/3/1937 | Mất ở Paris, chôn trong hầm mộ Saint-Sulpice |

## Âm nhạc và đóng góp
Widor được coi là người định hình **giao hưởng cho organ**: mười bản, viết cho các cây đàn Cavaillé-Coll đầy màu sắc dàn nhạc. Finale *Toccata* của Giao hưởng số 5 (Fa thứ, Op. 42 số 1) dựa trên chuỗi hợp âm rải staccato không ngừng, là một trong những bản organ được chơi nhiều nhất. Ông còn viết concerto, nhạc thính phòng, opera *Les pêcheurs de Saint-Jean* (1905) và một khảo luận phối khí bổ sung cho sách của Berlioz. Là thầy dạy, ông đào tạo Vierne, Dupré, Albert Schweitzer, Honegger, Milhaud. Xem [[organ-ong]], [[giao-huong]].

## Giai thoại và điều chưa chắc
- **Chức "tạm thời" 64 năm**: đúng theo các nguồn, dù Wikipedia tiếng Pháp lưu ý ngày bắt đầu còn có chỗ bàn.
- **Năm sinh** 1844 hay 1845: xem bảng.
- **Toccata chơi càng nhanh càng hay?** Bản thu năm 1932 khi ông gần 90 tuổi có tốc độ chậm rõ rệt; Widor ưa phát âm rành mạch. Tuy nhiên tuổi tác cũng có thể ảnh hưởng tốc độ trong bản thu đó.
- **Nhạc đám cưới**: bản *Toccata* nổi tiếng hẳn khi thay Hành khúc cưới của Mendelssohn ở lễ cưới Công chúa Margaret năm 1960.

## Bối cảnh
Saint-Sulpice là một trong những nhà thờ lớn nhất Paris, với cây đàn Cavaillé-Coll. Gác đàn của Widor là nơi lui tới của nhạc sĩ, học trò và khách quý suốt từ Đế chế thứ hai đến thập niên 1930.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Charles-Marie Widor', 'https://en.wikipedia.org/wiki/Charles-Marie_Widor'],
      ['Wikipedia (tiếng Pháp): Charles-Marie Widor', 'https://fr.wikipedia.org/wiki/Charles-Marie_Widor'],
      ['Wikipedia (tiếng Anh): Symphony for Organ No. 5 (Widor)', 'https://en.wikipedia.org/wiki/Symphony_for_Organ_No._5_(Widor)'],
    ],
  },
  'Gabriel Fauré': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/5/1845 | Sinh tại Pamiers (Ariège); vài nguồn cũ ghi 13/5, nhưng sổ khai sinh ngày 13 ghi "sinh hôm qua" |
| 10/1854 | Được gửi vào trường Niedermeyer ở Paris, ở nội trú 11 năm |
| 1861 | Saint-Saëns nhận dạy piano, mở đầu tình bạn khoảng 60 năm |
| 7/1865 | Ra trường với bằng maître de chapelle |
| 1/1866 | Organ nhà thờ Saint-Sauveur, Rennes; bị yêu cầu từ chức đầu năm 1870 |
| 1870 | Tòng quân trong chiến tranh Pháp – Phổ |
| 1871 | Thành viên sáng lập Société nationale de musique |
| 1874 | Thay Saint-Saëns ở La Madeleine; 3/1877 nhận vị trí của Théodore Dubois |
| 7–11/1877 | Đính hôn rồi bị Marianne Viardot huỷ hôn |
| 1883 | Cưới Marie Fremiet |
| 16/1/1888 | *Requiem* (bản đầu, 5 chương) ra mắt ở La Madeleine trong tang lễ kiến trúc sư Joseph Lesoufaché |
| 21/1/1893 | Bản *Requiem* thêm Offertoire và Libera me |
| 1896 | Organ chính La Madeleine; giáo sư sáng tác Nhạc viện thay Massenet |
| 12/7/1900 | Bản *Requiem* cho dàn nhạc lớn ở Trocadéro (in 1901) |
| k. 1903 | Bắt đầu điếc nặng |
| 1905–1920 | Giám đốc Nhạc viện Paris |
| 1909 | Vào Viện Hàn lâm |
| 1913 | Opera *Pénélope* |
| 4/11/1924 | Mất vì viêm phổi ở Paris; quốc tang ở La Madeleine (8/11), chôn ở Passy |

## Âm nhạc và đóng góp
Fauré là bậc thầy của sự tinh tế: giai điệu dài, hoà âm chuyển giọng bất ngờ nhưng mềm, dùng điệu thức cổ học được ở trường Niedermeyer (vốn chuyên đào tạo nhạc nhà thờ). Ông là nhà soạn [[lied]] kiểu Pháp (mélodie) hàng đầu: *Après un rêve*, các tập *La bonne chanson*, *L'horizon chimérique*. Piano ([[tieu-pham-piano]]) có 13 nocturne, 13 barcarolle; [[nhac-thinh-phong]] có hai sonata violin, hai ngũ tấu piano, tứ tấu đàn dây là tác phẩm cuối. *Requiem* Op. 48 bỏ Dies irae, nhấn vào sự an ủi hơn là phán xét ([[thanh-le-va-requiem]]). *Pavane* (1887) đề tặng nữ bá tước Greffulhe. Là thầy dạy và giám đốc Nhạc viện, ông đào tạo Ravel, Nadia Boulanger, Enescu, Koechlin và hiện đại hoá chương trình học.

## Giai thoại và điều chưa chắc
- **Requiem để tưởng nhớ cha mẹ?** Cha ông mất năm 1885, mẹ mất đêm giao thừa 1887 khi ông đã bắt đầu viết. Fauré tự nói *Requiem* "không viết cho điều gì cả… để vui, nếu có thể gọi thế". Wikipedia nêu cái chết của cha là một động cơ có thể, nhưng phần mở đầu bài viết lại nói lý do không rõ và dường như không liên quan.
- **Linh mục chê "những thứ mới mẻ"**: sau buổi đầu, linh mục La Madeleine được thuật lại đã nói nhà thờ không cần những cái mới như thế.
- **Bị đuổi khỏi Rennes**: chuyện kể ông hút thuốc trong giờ giảng và đến thánh lễ trong trang phục dạ tiệc sau một đêm khiêu vũ; là lời kể của tiểu sử.
- **Liszt "hết ngón"**: Liszt được kể đã dừng chơi *Ballade* sau vài ô nhịp, nói mình "hết ngón tay"; các nhà viết tiểu sử hiểu câu này khác nhau.
- **Ambroise Thomas** được kể đã dọa từ chức nếu Fauré được nhận vào Nhạc viện (1892).
- **Vụ Ravel và Giải Rome (1905)**: Ravel bị loại lần thứ sáu gây bê bối; Dubois rời chức và Fauré lên thay. Mối liên hệ nhân quả trực tiếp là cách đọc phổ biến.
- **Dolly là con Fauré?** Một số người nghi ông là cha của Hélène, con gái Emma Bardac (sau là vợ Debussy); các nhà viết tiểu sử cho là khó xảy ra, không có bằng chứng.
- **Ngày ra mắt *Pénélope***: các bản Wikipedia đã đọc chỉ ghi năm 1913.

## Bối cảnh
Fauré đi từ một tỉnh lẻ miền nam qua ngôi trường nội trú dạy nhạc nhà thờ đến trung tâm Paris: gác đàn La Madeleine, các salon quý tộc như của nữ bá tước Greffulhe, rồi văn phòng giám đốc Nhạc viện. Ông sống qua Đế chế thứ hai, Công xã và Thế chiến I.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Gabriel Fauré', 'https://en.wikipedia.org/wiki/Gabriel_Faur%C3%A9'],
      ['Wikipedia (tiếng Pháp): Gabriel Fauré', 'https://fr.wikipedia.org/wiki/Gabriel_Faur%C3%A9'],
      ['Wikipedia (tiếng Anh): Requiem (Fauré)', 'https://en.wikipedia.org/wiki/Requiem_(Faur%C3%A9)'],
      ['Wikipedia (tiếng Anh): Société Nationale de Musique', 'https://en.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_Nationale_de_Musique'],
    ],
  },
  'Ernest Chausson': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 20/1/1855 | Sinh tại Paris trong gia đình giàu; cha là nhà thầu xây dựng tham gia công cuộc cải tạo Paris của Haussmann |
| 1870s | Học luật, thành luật sư nhưng không mặn mà |
| k. 1879–1881 | Học với Massenet rồi Franck ở Nhạc viện; trượt Giải Rome năm 1881 và rời trường |
| 1883 | Cưới Jeanne Escudier; năm người con |
| 1883 hoặc 1886 | Làm thư ký Société nationale de musique đến khi mất (tiếng Pháp ghi từ 1883, tiếng Anh ghi từ 1886) |
| 1888 | Nhạc cho *La Tempête*, được cho là lần đầu dùng celesta |
| 1889–1890 | Giao hưởng Si giáng trưởng |
| 29/6/1896 | Hoàn thành *Poème* cho violin và dàn nhạc ở Firenze |
| 27/12/1896 | *Poème* ra mắt ở Nhạc viện Nancy (Ysaÿe độc tấu, Guy Ropartz chỉ huy); Paris nghe ngày 4/4/1897 |
| 10/6/1899 | Mất ở Limay, ngã xe đạp đâm vào tường, vỡ sọ, 44 tuổi |
| 1903 | Opera *Le roi Arthus* ra mắt ở Brussels |

## Âm nhạc và đóng góp
Chausson nằm giữa Franck và Debussy: chất trữ tình và hình thức chu kỳ học từ Franck, hoà âm và opera chịu ảnh hưởng Wagner, nhưng màu sắc mờ ảo đã báo trước Ấn tượng. Giai đoạn cuối của ông gắn với thơ Tượng trưng và văn học Nga. *Poème* Op. 25, ban đầu mang tựa *Le chant de l'amour triomphant* theo truyện của Turgenev, là tác phẩm nổi tiếng nhất. Còn có *Giao hưởng Si giáng* (một trong số ít [[giao-huong]] Pháp đáng chú ý thời đó), *Concert* Op. 21 cho violin, piano và tứ tấu dây, chu kỳ ca khúc *Poème de l'amour et de la mer* ([[lied]]), thơ giao hưởng *Viviane* và [[opera]] *Le roi Arthus*. Tứ tấu dây Op. 35 còn dở, d'Indy hoàn thành.

## Giai thoại và điều chưa chắc
- **Tai nạn hay tự sát?** Các nguồn đều ghi tai nạn xe đạp. Wikipedia tiếng Anh nhắc giả thuyết tự sát dựa trên chứng trầm cảm của ông nhưng chỉ là suy đoán. Wikipedia dẫn lời ông viết năm 20 tuổi rằng ông có linh cảm đời mình sẽ ngắn.
- **Đoạn tuyệt với Debussy**: Wikipedia tiếng Anh nói tình bạn chấm dứt khoảng 5 năm trước khi Chausson mất, vì ông không chấp nhận lối sống của Debussy; Debussy vẫn quý nhạc của ông.
- **Turgenev và gia đình Viardot**: truyện của Turgenev được cho là phản chiếu quan hệ của gia đình Viardot và Fauré; ý định cuối của Chausson là bản nhạc không kèm câu chuyện.
- **Celesta đầu tiên**: Wikipedia chỉ viết "được cho là" (1888), trước Tchaikovsky.

## Bối cảnh
Salon nhà Chausson ở Paris là chỗ gặp gỡ của Fauré, Debussy, Dukas, Monet và nhiều hoạ sĩ, nhà thơ. Sự giàu có giúp ông không phải sống bằng nghề nhạc, nhưng ông nổi tiếng hay tự nghi ngờ tài năng mình.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Ernest Chausson', 'https://en.wikipedia.org/wiki/Ernest_Chausson'],
      ['Wikipedia (tiếng Pháp): Ernest Chausson', 'https://fr.wikipedia.org/wiki/Ernest_Chausson'],
      ['Wikipedia (tiếng Anh): Poème (Chausson)', 'https://en.wikipedia.org/wiki/Po%C3%A8me_(Chausson)'],
      ['Wikipedia (tiếng Pháp): Société nationale de musique', 'https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_musique'],
    ],
  },
  'Cécile Chaminade': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 8/8/1857 | Sinh ở Batignolles, khi đó ở ngoại ô Paris |
| 1869 | Chơi đàn cho Georges Bizet, bạn gia đình, người rất ấn tượng |
| thập niên 1870 | Cha không cho vào Nhạc viện; học riêng piano với Félix Le Couppey, violin với Martin Marsick, sáng tác với Augustin Savard và Benjamin Godard |
| 1878 | Buổi hoà nhạc salon toàn tác phẩm của mình, khuôn mẫu cho các buổi diễn sau |
| 1888 | Ballet *Callirhoë* |
| 1901 | Cưới nhà xuất bản Louis-Mathieu Carbonel (sống riêng); ông mất năm 1907 |
| 1902 | *Concertino* cho sáo Op. 107 |
| 1907–1908 | Lưu diễn Hoa Kỳ và Canada |
| 1913 | Bắc Đẩu Bội tinh hạng hiệp sĩ |
| 13/4/1944 | Mất ở Monte-Carlo; sau cải táng ở nghĩa trang Passy |

## Âm nhạc và đóng góp
Chaminade viết hơn 400 tác phẩm, khoảng một nửa cho piano, cùng khoảng 150 bài hát. Nhạc của bà du dương, dễ tiếp cận, hơi chromatic, thuộc dòng [[thoi-ky-lang-man]]; bản thân bà tự nhận mình theo trường phái Lãng mạn. Những [[tieu-pham-piano]] như *Scarf Dance* (*Pas des écharpes* trong *Callirhoë*) bán rất chạy, vào tận phòng khách gia đình Anh, Mỹ. *Concertino cho sáo* nay là tác phẩm được chơi nhiều nhất của bà. Bà là nghệ sĩ piano – nhà soạn nhạc nữ hiếm hoi sống được bằng nghề vào cuối thế kỷ 19; Société nationale từng đưa nhạc bà vào chương trình. Nhà phê bình khen tiểu phẩm nhưng ít mặn mà với tác phẩm lớn, điều Wikipedia cho là có thể do định kiến giới.

## Giai thoại và điều chưa chắc
- **Bizet gọi bà là "Mozart bé nhỏ" (mon petit Mozart)**: Wikipedia tiếng Pháp ghi biệt danh này; bản tiếng Anh chỉ nói Bizet ấn tượng. Người biên soạn chưa thấy văn bản gốc của Bizet.
- **Lời cấm của người cha**: Wikipedia tiếng Pháp dẫn câu "trong giới tư sản, con gái sinh ra để làm vợ và làm mẹ"; nguồn gốc nguyên văn chưa được đối chiếu.
- **"Nữ nhà soạn nhạc đầu tiên nhận Bắc Đẩu Bội tinh"**: Wikipedia tiếng Anh viết "nhà soạn nhạc nữ đầu tiên", tiếng Pháp viết "nữ nhạc sĩ đầu tiên". Người biên soạn chưa đối chiếu hồ sơ Léonore, nên coi đây là khẳng định cần kiểm thêm.
- **Gặp Tổng thống Theodore Roosevelt** trong chuyến lưu diễn Mỹ: Wikipedia tiếng Pháp nói bà ăn trưa với Roosevelt nhưng không nói rõ ở Nhà Trắng.
- **"Câu lạc bộ Chaminade"** ở Mỹ được nhắc nhiều trong sách phổ thông nhưng hai nguồn ở đây không đề cập.

## Bối cảnh
Paris và London cuối thế kỷ 19, thời các salon tư gia và thị trường bản nhạc in cho người chơi nghiệp dư đang bùng nổ. Phụ nữ trung lưu được học đàn nhưng hiếm khi được làm nghề; Chaminade đi con đường ngoài Nhạc viện.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Cécile Chaminade', 'https://en.wikipedia.org/wiki/C%C3%A9cile_Chaminade'],
      ['Wikipedia (tiếng Pháp): Cécile Chaminade', 'https://fr.wikipedia.org/wiki/C%C3%A9cile_Chaminade'],
    ],
  },
}

import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ trường phái dân tộc, châu Mỹ và Anh thời Lãng mạn (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_F: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Stanisław Moniuszko': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/5/1819 | Sinh ở Ubiel, tỉnh Minsk (nay thuộc Belarus), trong một gia đình quý tộc có đất; Wikipedia ghi 5/5 theo lịch cũ, Grove ghi 5/5/1820 |
| 1837–1839 | Học Carl Friedrich Rungenhagen ở Berlin |
| 1840 | Cưới Aleksandra Mueller, định cư ở Vilnius, làm organist nhà thờ St. John |
| 1847 | *Halka* (bản hai màn) ra mắt ở Vilnius, chính ông chỉ huy (Grove ghi Warszawa, 1846) |
| 1858 | *Halka* dựng ở Warszawa; ông chuyển về đây làm nhạc trưởng Nhà hát Opera |
| 28/9/1865 | *Straszny dwór* (Lâu đài ma) ra mắt ở Nhà hát Lớn Warszawa, chậm vì cuộc Khởi nghĩa tháng Giêng 1863 |
| 1868 | Đến Praha gặp Smetana; *Halka* diễn ở Praha do Smetana dàn dựng |
| 1869 | *Paria* ra mắt ở Warszawa |
| 1871 | In sách giáo khoa hoà âm bằng tiếng Ba Lan |
| 4/6/1872 | Mất ở Warszawa vì đau tim |

## Âm nhạc và đóng góp
Moniuszko thường được gọi là "cha đẻ [[opera]] dân tộc Ba Lan". Ông viết khoảng hai chục vở opera và hơn 300 ca khúc, phần lớn trên thơ Ba Lan (Mickiewicz, Kraszewski, Pol…). Mười hai tập *Śpiewnik domowy* (Sách hát gia đình) được viết "để dùng hằng ngày", mang nhịp các điệu polonaise, mazurka, kujawiak, krakowiak, và trở thành vốn hát chung của các hội hợp xướng Ba Lan. Phong cách opera gần Auber và Rossini nhưng nặng phần hợp xướng và giai điệu vũ khúc Ba Lan. *Halka* và *Straszny dwór* vẫn là cột trụ của kho opera Ba Lan. Ông còn đi dạy ở Nhạc viện Warszawa. Xem thêm [[dan-toc-nhac-hoc]] về khái niệm âm nhạc dân tộc.

## Giai thoại và điều chưa chắc
- **Năm sinh và năm ra mắt *Halka***: Grove 1904–1910 ghi sinh 5/5/1820 và *Halka* ra mắt ở Warszawa năm 1846; Wikipedia tiếng Anh ghi 1819 (lịch mới 17/5) và buổi đầu ở Vilnius năm 1847. Người biên soạn chưa đối chiếu được nguồn gốc.
- **Lỗi niên đại trong nguồn**: Wikipedia tiếng Anh viết vở *Beata* được dựng "ngày 2/2/1878" ngay trước câu ông mất năm 1872 — tự mâu thuẫn, không nên dùng con số này.
- **Đám tang**: con số "tới 100.000 người" đưa tiễn là con số Wikipedia đưa; nên coi là ước lượng.
- **Ông là của ai?** Ba Lan, Litva và Belarus đều nhận Moniuszko; từ thập niên 1990 Belarus coi ông là nhân vật văn hoá của mình, còn phía Litva nhấn mạnh các cantata dùng thần thoại Litva (*Milda*, *Nijolė*).

## Bối cảnh
Vilnius và Warszawa giữa thế kỷ 19 nằm trong Đế quốc Nga sau các lần phân chia Ba Lan. Không có nhà nước, người Ba Lan giữ bản sắc qua ngôn ngữ, nhà thờ và âm nhạc trong phòng khách gia đình. Cuộc Khởi nghĩa tháng Giêng 1863 bị dập tắt khiến mọi vở diễn mang màu dân tộc phải đợi; đám tang Moniuszko năm 1872 thành một cuộc biểu dương lòng yêu nước.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Stanisław Moniuszko', 'https://en.wikipedia.org/wiki/Stanis%C5%82aw_Moniuszko'],
      ['Grove 1904–1910, tập III, tr. 243 — Moniuszko (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782853/page/n282/mode/1up'],
    ],
  },
  'Bedřich Smetana': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/3/1824 | Sinh ở Litomyšl (Bohemia, Đế quốc Habsburg), tên khai sinh Friedrich |
| 1843–1844 | Đến Praha với hai mươi florin; từ tháng 1/1844 học sáng tác với Josef Proksch |
| 1848 | Tham gia chớp nhoáng cuộc khởi nghĩa Praha; viết những bản nhạc mang tinh thần dân tộc đầu tiên; mở trường dạy nhạc nhờ thư từ với Liszt |
| 11/10/1856 | Rời Praha sang Göteborg (Thuỵ Điển): mở trường nhạc, chỉ huy hội hợp xướng |
| 19/4/1859 | Vợ đầu Kateřina mất ở Dresden trên đường về |
| 1861–1862 | Trở về Praha hẳn; tự học lại tiếng Séc |
| 30/5/1866 | *Cô dâu bị bán* ra mắt (bản hai màn có thoại); buổi đầu thất bại |
| 1866 | Làm nhạc trưởng chính Nhà hát Tạm; *Người Brandenburg ở Bohemia* (5/1) và *Dalibor* (1868) cũng ra mắt trong thời gian này |
| 1874 | Điếc tai phải, đến tháng 10 điếc hẳn tai trái; rời nhà hát |
| 14/3 và 4/4/1875 | *Vyšehrad* rồi *Vltava* ra mắt ở Praha |
| 11/6/1881 | *Libuše* khai trương Nhà hát Quốc gia |
| 5/11/1882 | Trọn bộ *Má vlast* ra mắt ở cung Žofín, Adolf Čech chỉ huy |
| 23/4/1884 | Gia đình đưa vào nhà thương điên Kateřinky |
| 12/5/1884 | Mất tại đó |

## Âm nhạc và đóng góp
Ở quê hương, Smetana được coi là cha đẻ âm nhạc Séc. Ông theo phe "tân Đức" của Liszt và Wagner: tám vở [[opera]] (*Cô dâu bị bán*, *Dalibor*, *Libuše*, *Hai bà goá*, *Nụ hôn*, *Bí mật*, *Bức tường quỷ*…) và chu kỳ sáu [[tho-giao-huong]] *Má vlast* (Tổ quốc) vẽ lịch sử, truyền thuyết và cảnh vật Bohemia: *Vyšehrad*, *Vltava*, *Šárka*, *Từ đồng cỏ và rừng Bohemia*, *Tábor*, *Blaník*. Grove nhận xét các thơ giao hưởng của ông nối tiếp truyền thống Liszt và tăng sức gợi hình. Tứ tấu dây Mi thứ *Z mého života* (Từ cuộc đời mình) là [[nhac-thinh-phong]] tự truyện: ở chương cuối, một nốt Mi cao ngân dài trên tiếng tremolo vẽ lại lúc ông bắt đầu điếc. Phần lớn *Má vlast*, *Nụ hôn*, *Bí mật* và hai tứ tấu được viết khi ông đã hoàn toàn không nghe được.

## Giai thoại và điều chưa chắc
- **Nguyên nhân điếc và cái chết**: bệnh viện ghi "sa sút trí tuệ tuổi già". Gia đình tin là giang mai; một phân tích biên bản khám nghiệm (Ernst Levin, 1972) và các xét nghiệm mô của Emanuel Vlček cuối thế kỷ 20 cũng nghiêng về giang mai, nhưng bác sĩ Jiří Ramba phản bác (mẫu quá cũ, có triệu chứng không khớp). Wikipedia tiếng Đức viết như một sự thật rằng ông nhiễm bệnh mùa xuân 1874 — hai bài viết lệch nhau về mức chắc chắn.
- **"Học trò của Liszt"**: Grove viết ông "học Liszt một thời gian ngắn"; Wikipedia tiếng Anh chỉ kể thư từ, sự giúp đỡ và các lần thăm Weimar, không nói đến việc học chính thức.
- **Vợ đầu mất ở đâu?** Grove ghi bà mất ở Göteborg năm 1860; Wikipedia ghi mất ở Dresden ngày 19/4/1859 trên đường về.
- **Giai điệu *Vltava***: không phải ông tự nghĩ hoàn toàn: nó bắt nguồn từ điệu *La Mantovana* (thế kỷ 17), cũng là gốc của quốc ca Israel *Hatikvah* qua một dị bản Romania, và có trong một bài dân ca Séc.
- **Đã thành nghi lễ**: từ năm 1952, liên hoan Mùa xuân Praha mở màn bằng *Má vlast* vào dịp 12/5, ngày giỗ ông.

## Bối cảnh
Praha thập niên 1860 đang trong "phục hưng dân tộc" Séc: sau thất bại của Áo ở Solferino (1859), chế độ nới tay, người Séc lập hội hợp xướng Hlahol, Nhà hát Tạm (1862) và quyên tiền xây Nhà hát Quốc gia. Các phe nhạc sĩ cãi nhau xem opera Séc nên "Wagner" hay "dân gian"; Smetana đứng giữa cơn bão đó cho tới khi bệnh tật buộc ông về sống với con gái ở làng Jabkenice.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Bedřich Smetana', 'https://en.wikipedia.org/wiki/Bed%C5%99ich_Smetana'],
      ['Wikipedia (tiếng Anh): Má vlast', 'https://en.wikipedia.org/wiki/M%C3%A1_vlast'],
      ['Wikipedia (tiếng Đức): Bedřich Smetana', 'https://de.wikipedia.org/wiki/Bed%C5%99ich_Smetana'],
      ['Grove 1904–1910, tập IV, tr. 485 — Smetana (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782861/page/n540/mode/1up'],
    ],
  },
  'Henryk Wieniawski': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/7/1835 | Sinh ở Lublin; cha là bác sĩ gốc Do Thái đã cải đạo, mẹ là em gái nghệ sĩ piano Edward Wolff |
| 1843 | Tám tuổi được nhận đặc cách vào Nhạc viện Paris, lớp Lambert Massart |
| 1846 | Giải nhất violin khi mới 11 tuổi (Grove) |
| 1847 | In opus 1, *Grand Caprice fantastique* |
| 1860 | Cưới Isabella Hampton; sang Sankt-Peterburg theo lời mời của Anton Rubinstein, ở đến 1872 |
| 1862 | Concerto violin số 2 Rê thứ |
| 1872–1874 | Lưu diễn Mỹ cùng Rubinstein, đi tới California |
| 1875 | Giáo sư violin ở Nhạc viện Brussels, thay Vieuxtemps (Grove ghi 1874) |
| 1879 | Lưu diễn Nga dở dang, ngã bệnh ở Odessa |
| 31/3/1880 | Mất ở Moskva vì bệnh tim (Grove ghi 2/4) |

## Âm nhạc và đóng góp
Wieniawski là một trong những nghệ sĩ violin lớn nhất thế kỷ 19. Grove tả lối chơi của ông vừa bốc lửa vừa ấm áp, kỹ thuật "không có khó khăn nào tồn tại". Ông để lại 24 số opus: hai [[hinh-thuc-concerto]] (số 2 Rê thứ được chơi nhiều hơn số 1 Fa thăng thứ), *Légende* op. 17, các polonaise, mazurka, fantasia trên *Faust* của Gounod, và tập *L'École moderne* op. 10 mà một bảng xếp hạng đặt độ khó chỉ sau 24 Caprice của Paganini. Lối cầm vĩ nâng khuỷu tay, ấn ngón trỏ sâu (thường gọi là "cầm vĩ kiểu Nga") được gắn với tên ông, rồi lan rộng qua Leopold Auer. Cuộc thi violin mang tên ông lập năm 1935 (Ginette Neveu giải nhất, David Oistrakh giải nhì).

## Giai thoại và điều chưa chắc
- ***Légende* và đám cưới**: Wikipedia kể cha mẹ Isabella Hampton phản đối hôn sự, và chính *Légende* làm họ đổi ý. Đây là chuyện kể quen thuộc; người biên soạn chưa thấy chứng cứ thư từ đi kèm.
- **Joachim chơi nốt buổi diễn**: Grove kể ở Berlin ông lên cơn đau giữa concerto, Joseph Joachim từ hàng ghế khán giả bước lên cầm đàn của ông chơi hết chương trình. Chuyện chỉ thấy trong Grove, không có ngày tháng.
- **Ngày mất**: 31/3 (Wikipedia) hay 2/4/1880 (Grove) — có thể do chênh lịch Nga cũ – mới, nhưng nguồn không giải thích.
- **Thời gian Paris**: Wikipedia ghi ông học 1843–1846 rồi quay lại thêm một năm (1849); Grove nói sau chuyến đi Nga ông về Paris học thêm sáng tác.

## Bối cảnh
Đời Wieniawski là đời một ngôi sao lưu diễn: Paris, London (ông còn chơi viola trong Hội Tứ tấu Beethoven), mười hai năm làm nghệ sĩ độc tấu cho Sa hoàng ở Sankt-Peterburg, rồi những chuyến tàu hoả xuyên nước Mỹ. Những tuần cuối đời, ông được bà Nadezhda von Meck — người bảo trợ của Tchaikovsky — đón về nhà chăm sóc ở Moskva.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Henryk Wieniawski', 'https://en.wikipedia.org/wiki/Henryk_Wieniawski'],
      ['Grove 1904–1910, tập V, tr. 519 — Wieniawski (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782879/page/n578/mode/1up'],
    ],
  },
  'Antonín Dvořák': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 8/9/1841 | Sinh ở Nelahozeves gần Praha; cha làm chủ quán trọ, hàng thịt và chơi đàn zither |
| 1853 | Gửi sang Zlonice ở với cậu; học violin, piano, organ với Antonín Liehmann |
| 9/1857 | Vào Trường Organ Praha |
| 1862 | Ban nhạc của ông được thuê cho Nhà hát Tạm; ông ngồi bè viola, dưới quyền chỉ huy của Smetana từ 1866 |
| 1873 | Cưới Anna Čermáková; làm organist nhà thờ St. Adalbert; cantata *Những người thừa kế Núi Trắng* thành công |
| 1874–1877 | Nhận học bổng nhà nước Áo; Brahms ngồi hội đồng xét và giới thiệu ông với nhà xuất bản Simrock |
| 1878 | *Vũ khúc Slav* (bản bốn tay) in ở Simrock, nổi tiếng khắp nước Đức |
| 1891 | Bằng danh dự Cambridge; giáo sư Nhạc viện Praha |
| 9/1892 | Sang New York làm giám đốc Nhạc viện Quốc gia Mỹ, lương 15.000 đô la một năm |
| Hè 1893 | Nghỉ ở làng người Séc Spillville (Iowa), viết Tứ tấu "Mỹ" op. 96 |
| 16/12/1893 | Giao hưởng số 9 *Từ Thế giới mới* ra mắt ở Carnegie Hall, Anton Seidl chỉ huy New York Philharmonic |
| 1894–1895 | Concerto cello Si thứ op. 104 (xong 2/1895) |
| 1895 | Về hẳn Bohemia |
| 1901 | *Rusalka* ra mắt; làm giám đốc Nhạc viện Praha |
| 1/5/1904 | Mất ở Praha sau năm tuần ốm, chưa rõ bệnh; chôn ở nghĩa trang Vyšehrad |

## Âm nhạc và đóng góp
Dvořák đưa nhịp điệu và tinh thần dân ca Bohemia, Moravia vào các khuôn khổ cổ điển mà Brahms gìn giữ: chín [[giao-huong]], [[hinh-thuc-concerto]] cho cello, violin, piano, nhiều [[nhac-thinh-phong]] (tứ tấu, ngũ tấu, tam tấu *Dumky*), *Stabat Mater* và [[thanh-le-va-requiem]], mười vở [[opera]] mà chín vở bằng tiếng Séc. Grove ghi ông đưa được các điệu furiant và dumka vào hình thức cổ điển. Ở Mỹ, ông viết báo cho rằng âm nhạc Mỹ tương lai nên dựa trên nhạc người Mỹ gốc Phi và thổ dân; học trò Harry Burleigh hát spiritual cho ông nghe. Cuối đời ông chuyển sang [[tho-giao-huong]] theo truyện cổ của Erben và opera, đỉnh cao là *Rusalka*.

## Giai thoại và điều chưa chắc
- **Anh hàng thịt thành nhà soạn nhạc?** Grove viết người cha "định cho con theo nghề" hàng thịt. Wikipedia tiếng Anh và tiếng Đức chỉ nói người cha kinh doanh quán trọ và hàng thịt, không nói Dvořák đã học nghề hay có giấy chứng nhận. Chuyện "Dvořák từng là thợ mổ" vì thế chưa chắc.
- **Bản polka lạc giọng**: Grove kể cậu bé viết một bản polka cho dàn nhạc làng nhưng ghi bè kèn trumpet in Fa theo âm thực, nên tiếng kèn nghịch tai cả bài. Chỉ thấy trong Grove.
- **Mười bốn hay chín người con?** Wikipedia tiếng Anh: Dvořák là con cả trong 14 người (8 người sống); Wikipedia tiếng Đức: con đầu trong 9 người.
- **"Nhạc Mỹ thật" trong Giao hưởng số 9?** Trên New York Herald (15/12/1893) ông nói không dùng giai điệu thổ dân mà viết "chủ đề riêng mang đặc điểm" của nhạc ấy. Bài *Goin' Home* là lời của học trò William Arms Fisher đặt năm 1922 lên chủ đề chương Largo — không phải spiritual cổ truyền. Chuyện ông đổi chủ đề sang kèn cor anglais vì nhớ giọng Burleigh chỉ là lời đồn.
- **Lên Mặt Trăng**: chuyện Neil Armstrong mang băng thu Giao hưởng số 9 theo Apollo 11 chỉ dựa trên một cuốn sách năm 2005.

## Bối cảnh
Dvořák đi từ một làng ven sông Vltava, qua những quán cà phê Praha nơi ông kéo viola kiếm sống, tới các liên hoan hợp xướng ở Anh và một nhạc viện ở Manhattan do bà Jeannette Thurber lập, mở cửa cho cả phụ nữ và học viên da màu. Mùa hè 1893 ở Spillville, giữa cánh đồng Iowa và một cộng đồng nói tiếng Séc, ông gọi nơi ấy là "Vysoká mùa hè" — tên ngôi làng nghỉ của ông ở quê nhà.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Antonín Dvořák', 'https://en.wikipedia.org/wiki/Anton%C3%ADn_Dvo%C5%99%C3%A1k'],
      ['Wikipedia (tiếng Anh): Symphony No. 9 (Dvořák)', 'https://en.wikipedia.org/wiki/Symphony_No._9_(Dvo%C5%99%C3%A1k)'],
      ['Wikipedia (tiếng Đức): Antonín Dvořák', 'https://de.wikipedia.org/wiki/Anton%C3%ADn_Dvo%C5%99%C3%A1k'],
      ['Grove 1904–1910, tập I, tr. 755 — Dvořák (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782838/page/n820/mode/1up'],
    ],
  },
  'Edvard Grieg': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 15/6/1843 | Sinh ở Bergen; mẹ là giáo viên nhạc, dạy ông piano từ năm sáu tuổi; họ Greig gốc Scotland |
| 1858–1862 | Theo lời khuyên của Ole Bull, học Nhạc viện Leipzig |
| 1860 | Qua khỏi viêm màng phổi và lao; phổi trái bị huỷ, sức khoẻ yếu suốt đời |
| 1863–1866 | Ở Copenhagen, gặp Gade và Rikard Nordraak |
| 11/6/1867 | Cưới em họ Nina Hagerup, giọng soprano |
| 1868 | Viết Concerto piano La thứ; Liszt viết thư giới thiệu giúp ông nhận trợ cấp đi học |
| 3/4/1869 | Concerto ra mắt ở Copenhagen, Edmund Neupert độc tấu |
| 1870 | Gặp Liszt ở Roma; Liszt đọc thẳng bản thảo Concerto |
| 1874 | Ibsen nhờ viết nhạc cho vở *Peer Gynt* |
| 24/2/1876 | *Peer Gynt* công diễn ở Christiania (Oslo) |
| 1885 | Dọn về Troldhaugen gần Bergen |
| 1888, 1893 | In tổ khúc *Peer Gynt* số 1 (op. 46) và số 2 (op. 55) |
| 1894, 1906 | Tiến sĩ danh dự Cambridge, rồi Oxford |
| 1899 | Huỷ các buổi diễn ở Pháp để phản đối vụ Dreyfus |
| 1903 | Thu chín đĩa 78 vòng ở Paris |
| 4/9/1907 | Mất ở Bergen vì suy tim |

## Âm nhạc và đóng góp
Grieg là nhà soạn nhạc Na Uy được biết đến nhiều nhất. Ông mạnh nhất ở khuôn khổ nhỏ: 66 *Tiểu phẩm trữ tình* (Lyric Pieces) trong mười tập là mẫu mực của [[tieu-pham-piano]], cùng hơn trăm [[lied]] (*Haugtussa*). Grove nhận xét ông khéo đặt những chủ đề gần như dân ca thật vào khuôn khổ cổ điển, và sẵn sàng uốn luật hình thức theo ý mình. Tác phẩm lớn: Concerto piano La thứ, ba sonata violin, sonata cello, tứ tấu dây Son thứ, tổ khúc *Thời Holberg*. Nhạc cho *Peer Gynt* gồm 26 đoạn, sau rút tám đoạn thành hai tổ khúc: *Buổi sáng*, *Cái chết của Åse*, *Điệu múa của Anitra*, *Trong cung điện vua núi*, *Bài ca Solveig*. Grieg ủng hộ việc tự trị của Na Uy cùng nhà thơ Bjørnson.

## Giai thoại và điều chưa chắc
- **Ghét chính bản nhạc nổi tiếng nhất**: trong thư năm 1874 gửi Frants Beyer, ông viết rằng đoạn *Trong cung điện vua núi* là thứ ông "không chịu nổi khi nghe", nồng mùi phân bò và chủ nghĩa dân tộc Na Uy cường điệu — nhưng hy vọng người ta nhận ra sự mỉa mai. Đây là trích thư có trong Wikipedia, không phải giai thoại.
- **Làm vì bị cuốn vào**: ông đến với *Peer Gynt* khi dự án opera với Bjørnson đổ vỡ vì cãi nhau nên viết nhạc hay lời trước; Bjørnson phật ý một thời gian.
- **Rời Leipzig "cũng ngốc như lúc vào"**: ý ông viết năm 1881 cho người viết tiểu sử Aimar Grønvold, theo Wikipedia. Grove thì liệt kê đầy đủ các thầy ở Leipzig (Hauptmann, Richter, Reinecke, Moscheles…).
- **Liszt và tiếng kèn**: Liszt khuyên giao chủ đề thứ hai cho trumpet độc tấu; Grieg không theo. Grieg còn nhẹ nhàng nói Liszt chơi chương đầu quá nhanh.
- **Lời cuối**: Wikipedia ghi là "Thôi, nếu phải thế thì thế".

## Bối cảnh
Bergen thế kỷ 19 là thành phố cảng buôn bán, nhìn ra biển Bắc; Na Uy còn trong liên minh với Thuỵ Điển cho tới 1905 và đang đi tìm bản sắc riêng qua dân ca, truyện cổ và kịch Ibsen. Troldhaugen, ngôi nhà gỗ bên hồ của vợ chồng Grieg, có một căn chòi nhỏ để ông sáng tác; tro của ông được đặt trong vách đá gần đó. Đám tang năm 1907 có 30.000 – 40.000 người.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Edvard Grieg', 'https://en.wikipedia.org/wiki/Edvard_Grieg'],
      ['Wikipedia (tiếng Anh): Peer Gynt (Grieg)', 'https://en.wikipedia.org/wiki/Peer_Gynt_(Grieg)'],
      ['Wikipedia (tiếng Đức): Edvard Grieg', 'https://de.wikipedia.org/wiki/Edvard_Grieg'],
      ['Grove 1904–1910, tập II, tr. 241 — Grieg (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782846/page/n276/mode/1up'],
    ],
  },
  'Pablo de Sarasate': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/3/1844 | Sinh ở Pamplona (Navarra); cha là trưởng ban kèn pháo binh |
| k. 1852 | Buổi diễn công khai đầu tiên ở La Coruña khi tám tuổi |
| 1/1/1856 | Vào Nhạc viện Paris (Grove), học Jean-Delphin Alard |
| 1857 | Giải nhất solfège và violin (Grove) |
| 1860–1861 | Ra mắt Paris; 22/5/1861 lần đầu diễn ở London, St. James's Hall |
| 1878 | *Zigeunerweisen* |
| 1883 | *Carmen Fantasy* |
| 1904 | Thu một số đĩa |
| 20/9/1908 | Mất ở Biarritz vì viêm phế quản mạn |

## Âm nhạc và đóng góp
Sarasate là nghệ sĩ violin nổi tiếng nhất của Tây Ban Nha thế kỷ 19. Cả Grove lẫn Wikipedia nhấn mạnh điểm riêng của ông là âm thanh trong sáng, không uỷ mị, và sự dễ dàng phi thường. Nhạc của ông chủ yếu là bản trình diễn: *Zigeunerweisen* (Giai điệu Di-gan) cho violin và dàn nhạc, *Carmen Fantasy* trên các chủ đề của Bizet, bốn tập *Vũ khúc Tây Ban Nha* op. 21, 22, 23, 26, các fantasia trên opera. Nhiều tác phẩm lớn được viết cho ông: *Symphonie espagnole* của Lalo, *Introduction et Rondo capriccioso* của Saint-Saëns, một concerto của Mackenzie. George Bernard Shaw viết rằng ông "để giới phê bình thở dốc phía sau hàng dặm".

## Giai thoại và điều chưa chắc
- **Thần đồng tự cầm đàn**: Wikipedia kể "hình như" cậu bé thấy cha vật lộn với một đoạn khó rồi cầm đàn chơi hoàn hảo. Chính chữ "hình như" cho thấy đây là chuyện kể chưa có chứng cứ.
- **Chuyến đi Paris bi thảm**: Wikipedia kể mẹ ông chết vì đau tim trên tàu ở biên giới Pháp – Tây Ban Nha, còn cậu mắc dịch tả và được lãnh sự Tây Ban Nha ở Bayonne nuôi. Grove chỉ viết ông "sang Pháp khi còn nhỏ".
- **Giải nhất năm nào?** Wikipedia nói ông đoạt giải nhất năm 17 tuổi; Grove ghi ông vào trường đầu năm 1856 và đoạt giải nhất ngay năm sau (khoảng 13 tuổi). Hai nguồn lệch nhau rõ.
- **Tránh Paganini vì tay nhỏ**: Grove (đoạn bổ sung) cho rằng ông ít chơi Paganini, một phần vì bàn tay rất nhỏ.
- **Cây Stradivari 1724**: Grove ghi đó là quà của nữ hoàng Isabella II khi ông còn nhỏ; ông để lại nó cho Nhạc viện Paris, nay ở Musée de la Musique.

## Bối cảnh
Dù sống chủ yếu ở Paris và lưu diễn từ Bồ Đào Nha tới Na Uy, từ London tới Moskva và cả châu Mỹ, Sarasate năm nào cũng về Pamplona dự lễ hội San Fermín. Nghệ sĩ piano Berthe Marx đi cùng ông khoảng 600 buổi diễn. Màu Tây Ban Nha trong nhạc ông là "Tây Ban Nha nhìn từ phòng hoà nhạc Paris", đúng thời Bizet viết *Carmen*.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Pablo de Sarasate', 'https://en.wikipedia.org/wiki/Pablo_de_Sarasate'],
      ['Grove 1904–1910, tập IV, tr. 224 — Sarasate (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782861/page/n261/mode/1up'],
    ],
  },
  'Zdeněk Fibich': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 21/12/1850 | Sinh ở Všebořice (Bohemia); cha là viên chức kiểm lâm người Séc, mẹ là người Vienna nói tiếng Đức |
| k. 1859–1865 | Học trung học tiếng Đức ở Vienna rồi trường tiếng Séc ở Praha |
| 1865–1867 | Nhạc viện Leipzig: Moscheles, Jadassohn, Richter |
| 1868–1869 | Gần một năm ở Paris, rồi học Vinzenz Lachner ở Mannheim |
| 1873–1874 | Chỉ huy hợp xướng ở Vilnius; vợ và cặp con sinh đôi mất ở đó |
| 1874 | Về Praha; opera đầu *Bukovín* |
| 1875 | Cưới Betty Hanušová (em vợ trước); phó nhạc trưởng Nhà hát Tạm đến 1878 |
| 1878–1881 | Chỉ huy hợp xướng nhà thờ Nga ở Praha |
| 1890s | Chu kỳ piano *Nálady, dojmy a upomínky* |
| 1895 | Rời vợ để sống với học trò Anežka Schulzová |
| 1897 | Opera *Šárka* |
| 15/10/1900 | Mất ở Praha (Grove ghi 10/10) |

## Âm nhạc và đóng góp
Fibich đứng thứ ba sau Smetana và Dvořák trong âm nhạc Séc thế kỷ 19, nhưng hướng đi khác: học vấn song ngữ, nhạc khí gần Weber, Mendelssohn, Schumann rồi Wagner. Ông viết ba [[giao-huong]], nhiều [[tho-giao-huong]], khoảng bảy [[opera]] (*Cô dâu xứ Messina*, *Bão tố*, *Šárka*), [[nhac-thinh-phong]], và đặc biệt thể melodrama (lời nói trên nền nhạc) với bộ ba sân khấu *Hippodamia*. Wikipedia ghi ông là người đầu tiên viết thơ giao hưởng dân tộc Séc (*Záboj, Slavoj a Luděk*), gợi cảm hứng cho *Má vlast*. Chu kỳ *Tâm trạng, ấn tượng và hồi ức* là một cuốn nhật ký bằng [[tieu-pham-piano]] về mối tình với Schulzová; bản số 139 Rê giáng trưởng về sau thành *Poème*, tác phẩm người ta nhớ đến ông nhất.

## Giai thoại và điều chưa chắc
- **Bao nhiêu bản?** Wikipedia ghi chu kỳ piano có 376 bản; Grove ghi khoảng 352 bản piano hai tay và tổng cộng chừng 700 tác phẩm. Con số tuỳ cách đếm.
- **Ngày mất**: 15/10/1900 (Wikipedia) hay 10/10/1900 (Grove).
- **Nhạc trưởng mười bốn tuổi**: Grove kể năm 14 tuổi ông đã viết một giao hưởng Mi giáng trưởng và tự chỉ huy buổi diễn đầu một phần của nó.
- **Danh tiếng qua lăng kính học trò**: sau khi ông mất, học trò Zdeněk Nejedlý viết hàng loạt chuyên khảo bênh vực thầy rất thiên vị; Wikipedia lưu ý giới nghiên cứu sau phải gỡ dần định kiến đó.

## Bối cảnh
Praha sau 1874 chia phe gay gắt quanh Wagner. Fibich cùng nhà mỹ học Otakar Hostinský bị gạt khỏi Nhà hát Quốc gia và Nhạc viện, phải sống bằng lớp dạy tư — nơi vẫn đông học trò giỏi như Kovařovic, Ostrčil. Chuyện ông bỏ vợ theo người học trò trẻ là đề tài bàn tán của giới văn nghệ Praha cuối thế kỷ.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Zdeněk Fibich', 'https://en.wikipedia.org/wiki/Zden%C4%9Bk_Fibich'],
      ['Grove 1904–1910, tập II, tr. 32 — Fibich (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782846/page/n49/mode/1up'],
    ],
  },
  'Isaac Albéniz': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 29/5/1860 | Sinh ở Camprodon (Girona); cha là viên chức hải quan (Grove ghi 1861) |
| k. 1864 | Bốn tuổi chơi bốn tay cùng chị ở Teatre Romea, Barcelona |
| 1867 | Thi đỗ phần piano Nhạc viện Paris nhưng không được nhận vì quá nhỏ |
| 1868 | Bản in đầu tiên, *Marcha militar* |
| 1876 | Ở Nhạc viện Leipzig một thời gian ngắn, rồi học Nhạc viện Brussels nhờ học bổng hoàng gia |
| 1880 | Đến Budapest tìm học Liszt nhưng Liszt đang ở Weimar |
| 1883 | Gặp Felip Pedrell; cưới Rosina Jordana |
| 1888 | Hãng Érard tài trợ 20 buổi hoà nhạc nhạc ông ở Triển lãm Barcelona |
| 1890s | Sống ở London và Paris; opera *Henry Clifford*, *Pepita Jiménez*, *Merlin* |
| 1900 | Mắc bệnh thận Bright |
| 1905–1908 | *Iberia*, mười hai "ấn tượng" cho piano |
| 18/5/1909 | Mất ở Cambo-les-Bains (Pháp), vài tuần sau khi được Bắc Đẩu Bội tinh (Grove ghi 25/5) |

## Âm nhạc và đóng góp
Albéniz là một trong những người đặt nền cho piano Tây Ban Nha hiện đại. Thời trẻ ông viết nhạc phòng khách; sau khi gặp Pedrell, ông đi vào chất liệu dân gian Andalucía, flamenco, jota, với các tập *Chants d'Espagne*, *Suite española*. Đỉnh cao là *Iberia*: bốn tập, kỹ thuật cực khó, hoà âm táo bạo — Grove (phụ lục) ghi giới "siêu hiện đại" ở Pháp rất quý *Iberia*. Ông còn viết [[opera]] (bộ ba vua Arthur do Francis Money-Coutts đặt hàng, chỉ xong *Merlin*) và zarzuela. Dù không viết cho guitar, nhiều bản của ông (*Asturias*, *Granada*, *Sevilla*) nay thuộc kho nhạc guitar cổ điển qua chuyển soạn của Tárrega và những người khác. Xem thêm [[nghe-si-piano-the-ky-19]].

## Giai thoại và điều chưa chắc
- **Trốn lên tàu sang châu Mỹ**: chuyện cậu bé 12 tuổi trốn vé sang Buenos Aires rồi tự diễn khắp Cuba, Mỹ, Anh, Đức được Wikipedia gọi thẳng là "huyền thoại phổ biến": ông có đi diễn nhiều nước nhưng đi cùng cha, người phải đi công tác thường xuyên — đối chiếu lịch diễn với lịch công tác của cha thì thấy.
- **Học trò của Liszt?** Grove ghi ông là học trò Liszt; Wikipedia nói ông tới Budapest thì Liszt không có ở đó. Không có chứng cứ ông được Liszt dạy.
- ***Asturias* không phải của Asturias**: bản này vốn là khúc dạo đầu cho piano trong *Chants d'Espagne*, cái tên *Asturias (Leyenda)* được đặt sau khi ông mất; nhạc mang màu Andalucía nhiều hơn miền Asturias.
- **Ngày sinh, ngày mất**: Grove lệch một năm (1861) và một tuần (25/5).
- **Đồ chơi trên sân khấu**: theo lời người chị, sau buổi diễn bốn tay năm bốn tuổi, khán giả ném đồ chơi lên sân khấu và cậu bé ngồi chơi luôn. Chỉ có một nguồn là chính gia đình.

## Bối cảnh
Tây Ban Nha cuối thế kỷ 19 vừa mất thuộc địa cuối cùng (1898); giới trí thức "Thế hệ 98" mà Albéniz gần gũi đi tìm bản sắc dân tộc. Ông sống phần lớn ở nước ngoài — Brussels, London, Paris — và chính từ Paris, giữa Debussy, Dukas, Fauré, ông viết về Sevilla, Málaga, Granada trong *Iberia*.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Isaac Albéniz', 'https://en.wikipedia.org/wiki/Isaac_Alb%C3%A9niz'],
      ['Grove 1904–1910, tập I, tr. 60 — Albeniz, Isaac (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782838/page/n81/mode/1up'],
      ['Grove 1904–1910, tập V (Phụ lục), tr. 605 — Albeniz (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782879/page/n672/mode/1up'],
    ],
  },
  'Jean Sibelius': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 8/12/1865 | Sinh ở Hämeenlinna, Đại công quốc Phần Lan (thuộc Đế quốc Nga), trong gia đình bác sĩ nói tiếng Thuỵ Điển; tên khai sinh Johan Christian Julius |
| 1885–1889 | Bỏ học luật, vào Học viện Âm nhạc Helsinki (nay là Học viện Sibelius); gặp Busoni |
| 1889–1891 | Học ở Berlin (Albert Becker), rồi Vienna (Robert Fuchs, Karl Goldmark) |
| 28/4/1892 | *Kullervo* ra mắt ở Helsinki, thành công lớn; cùng năm cưới Aino Järnefelt |
| 4/11/1899 | Nhạc *Lễ kỷ niệm Báo chí*, có hoạt cảnh cuối *Phần Lan thức dậy* |
| 2/7/1900 | Bản sửa (op. 26) diễn ở Helsinki, Robert Kajanus chỉ huy; sau mang tên *Finlandia* |
| 1904 | Dọn về Ainola bên hồ Tuusula, Järvenpää |
| 1907–1908 | Mổ vì nghi ung thư họng; buộc bỏ thuốc lá và rượu một thời gian |
| 1924–1926 | Giao hưởng số 7, nhạc *The Tempest*, *Tapiola* — những tác phẩm lớn cuối cùng |
| k. 1945 | Đốt nhiều bản thảo, có lẽ gồm cả Giao hưởng số 8 |
| 20/9/1957 | Mất ở Ainola vì xuất huyết não, thọ 91 tuổi |

## Âm nhạc và đóng góp
Sibelius được coi là nhà soạn nhạc lớn nhất của Phần Lan và gắn với việc hình thành bản sắc dân tộc khi nước này còn dưới quyền Nga. Cốt lõi là bảy [[giao-huong]]: chúng đi từ âm hưởng Tchaikovsky (số 1) tới những kết cấu nén chặt, nơi cả chương mọc lên từ vài motif nhỏ (số 5, số 7 một chương). Bên cạnh là [[tho-giao-huong]] lấy từ sử thi *Kalevala* (*Lemminkäinen* với *Thiên nga xứ Tuonela*, *Tapiola*), *En saga*, tổ khúc *Karelia*, *Valse triste*, [[hinh-thuc-concerto]] violin Rê thứ và hơn trăm ca khúc. *Finlandia* là tác phẩm nổi tiếng nhất, mang tinh thần yêu nước công khai; đoạn hymne giữa bài sau được tách riêng thành *Bài ca Finlandia*.

## Giai thoại và điều chưa chắc
- **Tên giả để lách kiểm duyệt**: Wikipedia viết *Finlandia* "phải" diễn dưới tên khác (như *Cảm xúc vui khi mùa xuân Phần Lan thức dậy*, *Hành khúc hợp xướng Scandinavia*), nhưng danh sách tên đó bị gắn nhãn thiếu nguồn, và nguồn duy nhất là một trang du lịch nói đến tên "Impromptu". Coi là chưa chắc.
- **Ai chỉ huy, khi nào thành "Finlandia"?** Bài *Finlandia* ghi buổi 4/11/1899 do Sibelius chỉ huy và buổi 2/7/1900 do Kajanus; bài Sibelius thì nói cái tên chỉ xuất hiện sau, trước hết cho bản piano, rồi năm 1901 cho bản dàn nhạc.
- **Bài ca không phải dân ca**: *Bài ca Finlandia* hay bị tưởng là dân ca cổ, thực ra là nhạc của Sibelius; lời của Veikko Antero Koskenniemi viết năm 1941.
- **"Sự im lặng ở Järvenpää"**: ba mươi năm cuối ông không công bố tác phẩm lớn nào, nhưng vẫn viết dở Giao hưởng số 8 (đã hứa cho Koussevitzky ra mắt ở Boston). Bà Aino kể thập niên 1940 ông bỏ bản thảo vào giỏ giặt rồi đốt trong lò sưởi phòng ăn; không biết chắc thứ gì bị đốt.
- **Đàn sếu**: hai ngày trước khi ông mất, theo nhà viết tiểu sử Tawaststjerna, ông thấy một đàn sếu bay về, một con tách đàn lượn một vòng trên Ainola. Đây là lời kể trong gia đình, không thể kiểm chứng.

## Bối cảnh
Phần Lan cuối thế kỷ 19 là đại công quốc tự trị dưới Sa hoàng, đang bị "Nga hoá": báo *Päivälehti* bị đình bản vì phê phán, và buổi *Lễ kỷ niệm Báo chí* 1899 là cuộc quyên góp ủng hộ báo giới. Tầng lớp trên nói tiếng Thuỵ Điển như gia đình Sibelius học tiếng Phần Lan để gắn với dân tộc. Ainola, ngôi nhà gỗ trong rừng, có lò sưởi, cửa sổ nhìn ra hồ và đường bay của chim di cư.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Jean Sibelius', 'https://en.wikipedia.org/wiki/Jean_Sibelius'],
      ['Wikipedia (tiếng Anh): Finlandia', 'https://en.wikipedia.org/wiki/Finlandia'],
      ['Wikipedia (tiếng Đức): Jean Sibelius', 'https://de.wikipedia.org/wiki/Jean_Sibelius'],
    ],
  },
  'Carl Nielsen': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 9/6/1865 | Sinh ở Sortelung gần Nørre Lyndelse, đảo Funen; con thứ bảy trong mười hai người con của một thợ sơn nhà kiêm nhạc công làng |
| 1/11/1879 | Vào ban kèn tiểu đoàn 16 ở Odense, thổi kèn hiệu và trombone alto |
| 1884–1886 | Học Học viện Âm nhạc Hoàng gia Copenhagen (Wikipedia tiếng Đức ghi vào trường 1883) |
| 8/9/1888 | *Tổ khúc cho dàn dây* op. 1 diễn ở Tivoli |
| 1889–1905 | Kéo violin bè hai trong Dàn nhạc Hoàng gia Đan Mạch |
| 10/5/1891 | Cưới nhà điêu khắc Anne Marie Brodersen ở Firenze, sau khi gặp ở Paris |
| 11/1902 | Opera *Saul og David* ra mắt, báo chê |
| 11/1906 | Opera hài *Maskarade* ra mắt, diễn 25 buổi trong bốn tháng đầu |
| 1905–1914 | Nhạc trưởng thứ hai Nhà hát Hoàng gia |
| 2/1916 | Giao hưởng số 4 *Không thể dập tắt* ra mắt ở Copenhagen |
| 1922 | Giao hưởng số 5; Ngũ tấu kèn gỗ |
| 1925 | Cơn đau tim nặng |
| 1927 | Tự truyện *Min fynske barndom* (Tuổi thơ ở Funen) |
| 1928 | Concerto clarinet viết cho Aage Oxenvad |
| 3/10/1931 | Mất ở Copenhagen vì suy tim, vừa nhận chức giám đốc Học viện |

## Âm nhạc và đóng góp
Nielsen là nhà soạn nhạc Đan Mạch quan trọng nhất. Sáu [[giao-huong]] của ông đi từ hậu Lãng mạn sang một tiếng nói riêng, cứng cỏi: số 4 là "sức sống, ý chí sống không thể dập tắt" (lời ông), viết giữa Thế chiến I, với hai bộ timpani đối đầu ở cuối; số 5 có tay trống con tự ý phá ngang dàn nhạc. Nhà phê bình Robert Simpson gọi lối đi từ giọng này kết sang giọng khác của ông là "điệu tính tiến triển" (progressive tonality). Ông còn viết hai [[opera]], ba [[hinh-thuc-concerto]] (violin, flute, clarinet), Ngũ tấu kèn gỗ — trụ cột của [[nhac-thinh-phong]] cho kèn — và hơn 290 bài hát, thánh ca; tập *Melodibog* cho các trường dân lập (1922) đưa nhạc ông vào đời sống hằng ngày của người Đan Mạch.

## Giai thoại và điều chưa chắc
- **Mười sáu năm hay mười sáu mùa?** Đoạn mở đầu bài Wikipedia nói ông chơi violin 16 năm, nhưng thân bài ghi 1889–1905 — không khớp hẳn.
- **Năm vào nhạc viện**: 1884 (Wikipedia tiếng Anh) hay 1883 (Wikipedia tiếng Đức).
- **Giao hưởng số 4 và chiến tranh**: tên gọi và lời ông về "ý chí sống" có thật; nhưng gán từng đoạn nhạc với chiến trận là cách nghe của người sau, ông không viết chương trình như thế.
- **Cuộc hôn nhân**: ông có ngoại tình, một người con trai ngoài giá thú (1888, trước khi cưới) và một con gái (1912) mà bà Anne Marie không bao giờ biết; hai người ly thân năm 1919. Wikipedia nêu có nguồn.
- **Lời cuối**: theo Wikipedia, ông nói với người nhà: "Mọi người đứng đó như đang chờ điều gì vậy."

## Bối cảnh
Funen là vùng quê trồng trọt, đời sống nông dân nghèo với nhạc làng ở đám cưới, hội hè — điều Nielsen tả trong tự truyện. Copenhagen cuối thế kỷ 19 có Nhà hát Hoàng gia, Tivoli và hội Musikforeningen; Nielsen đi từ ghế violin bè hai lên bục chỉ huy và cuối cùng là nhà soạn nhạc in trên tờ 100 krone (1997–2010).
`,
    refs: [
      ['Wikipedia (tiếng Anh): Carl Nielsen', 'https://en.wikipedia.org/wiki/Carl_Nielsen'],
      ['Wikipedia (tiếng Đức): Carl Nielsen (Komponist)', 'https://de.wikipedia.org/wiki/Carl_Nielsen_(Komponist)'],
    ],
  },
  'Enrique Granados': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 27/7/1867 | Sinh ở Lleida (Lérida); cha là đại uý quân đội sinh ở La Habana |
| 1880s | Học piano ở Barcelona (Francisco Jurnet, Joan Baptista Pujol), học Felip Pedrell |
| 1887–1889 | Ở Paris; không vào được Nhạc viện, học riêng Charles-Wilfrid de Bériot |
| 1890 | *12 Danzas españolas* cho piano |
| 1898 | Opera *María del Carmen* thành công, được vua Alfonso XIII chú ý |
| 1903 | Thắng cuộc thi của Nhạc viện Madrid với *Allegro de concierto* |
| 1911 | Ra mắt tổ khúc piano *Goyescas* |
| 28/1/1916 | Opera *Goyescas* ra mắt ở Metropolitan Opera, New York (buổi ở châu Âu bị huỷ vì chiến tranh) |
| 24/3/1916 | Chết đuối khi phà *Sussex* bị tàu ngầm Đức phóng ngư lôi giữa eo biển Manche |

## Âm nhạc và đóng góp
Granados thuộc trường piano Catalunya cùng Albéniz và Malats, và lập Học viện Granados ở Barcelona (học viện này đào tạo nhiều nghệ sĩ, nổi bật là Frank Marshall và Alicia de Larrocha). Nhạc ông chia ba giai đoạn: lãng mạn (*Escenas románticas*), dân tộc (*Danzas españolas*), và "Goya" — tổ khúc *Goyescas* gợi từ tranh Francisco de Goya, các *Tonadillas* cho giọng hát. Lối viết nhiều bè đan nhau, trang trí dày, gần với [[tieu-pham-piano]] của Chopin và Liszt hơn là flamenco trực diện. Ông cũng viết [[nhac-thinh-phong]], zarzuela, thơ giao hưởng *Dante*. Bériot dạy ông đặc biệt tinh tế ở tiếng đàn và pedal, điều ông đưa vào giảng dạy. Ông thu nhiều cuộn đàn tự động Duo-Art ở New York ngay trước chuyến về định mệnh.

## Giai thoại và điều chưa chắc
- **Chết khi cứu vợ — nhưng thế nào?** Các lời kể không khớp. Nhân chứng Daniel Sargent kể vợ ông, bà Amparo, không leo được lên xuồng; Granados đặt bà lên một bè nhỏ và bám bên cạnh, cả hai chìm. Một người sống sót khác kể ông đã ở trên xuồng, thấy vợ dưới nước thì nhảy xuống cứu. Wikipedia tiếng Đức theo bản thứ hai: ông được cứu rồi lao trở lại.
- **Thắt lưng vàng**: chuyện ông chìm vì đeo thắt lưng đầy vàng (tiền diễn ở Mỹ, đòi trả bằng vàng) là "lời kể về sau", không có nhân chứng rõ ràng.
- **Lỡ tàu vì Tổng thống**: ông ở lại New York để chơi cho Tổng thống Woodrow Wilson, lỡ chuyến tàu thẳng về Tây Ban Nha nên phải vòng qua Anh. Chuỗi sự kiện này hai nguồn đều nêu.
- **Tên khai sinh**: Pantaleón Enrique Joaquín Granados Campiña; tiếng Catalan gọi Enric Granados i Campiña.

## Bối cảnh
Barcelona quanh 1900 là thành phố công nghiệp sôi động của phong trào Modernisme Catalan, nơi Granados mở nhạc viện riêng và chơi nhạc cùng Pablo Casals. Năm 1916 châu Âu đang trong Thế chiến I; Đức tuyên bố chiến tranh tàu ngầm không giới hạn, và vụ *Sussex* (có cả hành khách Mỹ) làm căng thẳng thêm quan hệ Mỹ – Đức.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Enrique Granados', 'https://en.wikipedia.org/wiki/Enrique_Granados'],
      ['Wikipedia (tiếng Đức): Enrique Granados', 'https://de.wikipedia.org/wiki/Enrique_Granados'],
    ],
  },
  'Louis Moreau Gottschalk': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 8/5/1829 | Sinh ở New Orleans; bà ngoại và vú nuôi là người Creole gốc Saint-Domingue |
| 1840 | Ra mắt không chính thức ở khách sạn St. Charles |
| 1842 | 13 tuổi sang Paris (Grove: 12 tuổi); Nhạc viện từ chối, học riêng Charles Hallé, Camille Stamaty, Maleden |
| 1840s | *Bamboula*, *La Savane*, *Le Bananier* |
| 1852 | Lưu diễn Tây Ban Nha rất thành công (Grove) |
| 1853 | Về Mỹ, lưu diễn liên tục |
| 1854–1857 | Ở Cuba, Puerto Rico và vùng Caribe; *Souvenir de Porto Rico* (k. 1857) |
| 1860s | Nghệ sĩ piano nổi tiếng nhất Tân Thế giới; theo phe Liên bang trong Nội chiến |
| 1865 | Rời Mỹ sau tai tiếng ở Oakland (California), không bao giờ trở lại |
| 24/11/1869 | Ngã quỵ khi đang diễn ở Rio de Janeiro |
| 18/12/1869 | Mất ở Tijuca, Rio de Janeiro; năm 1870 hài cốt đưa về Brooklyn |

## Âm nhạc và đóng góp
Gottschalk là nghệ sĩ piano người Mỹ đầu tiên nổi tiếng quốc tế. *Bamboula (Danse des nègres)* và *La Savane*, viết khi còn ở Paris, đưa giai điệu và nhịp điệu Creole Louisiana, gốc Phi – Caribe, vào [[tieu-pham-piano]] hoà nhạc: Wikipedia coi đó là tiền thân của jazz. Các chuyến đi Cuba, Puerto Rico, Nam Mỹ cho ông chất liệu habanera, nhịp đảo phách; ông cũng chỉ huy những "đại lễ hội" hàng trăm nhạc công với giao hưởng *La Nuit des tropiques*. Grove 1906 đánh giá ông là nghệ sĩ biểu diễn thiên tài nhưng "không phải nghệ sĩ lớn nhất theo nghĩa cao nhất" vì không gắn với trường phái cổ điển — một cách nhìn châu Âu mà giới nghiên cứu sau này xem lại. Ông có học trò nhỏ Teresa Carreño. Xem [[nghe-si-piano-the-ky-19]].

## Giai thoại và điều chưa chắc
- **Chopin tiên tri "vua piano"**: Wikipedia dẫn câu Chopin nói sau buổi diễn ở Salle Pleyel: "Đưa tay đây, con; ta đoán con sẽ thành vua của các nghệ sĩ piano." Grove không nhắc; người biên soạn chưa thấy nguồn gốc đương thời của câu này.
- **"Nước Mỹ là xứ đầu máy hơi nước"**: câu của Pierre Zimmerman khi Nhạc viện Paris từ chối không cần nghe cậu chơi — theo Wikipedia.
- **Bản nhạc cuối tên "Cái chết"**: Grove kể ông không chơi hết bản *La Morte* như có linh cảm; Wikipedia nói ông chơi xong *Morte!!* rồi mới ngã khi bắt đầu bản *Tremolo*.
- **Chết vì gì?** Sốt vàng da, quá liều quinine, hay áp xe vỡ trong bụng (một bài viết đĩa nhạc của Jeremy Nicholas) — các nguồn khác nhau.
- **Người cha**: Grove ghi cha là người Anh, tiến sĩ khoa học ở Cambridge (Massachusetts); Wikipedia gọi ông là người Mỹ gốc Do Thái và Creole. Chuyện tai tiếng ở Oakland, ông chối và cho là đối thủ của hãng đàn Chickering bày ra.

## Bối cảnh
New Orleans thập niên 1830 là thành phố cảng nói tiếng Pháp, nơi nhạc châu Âu, nhạc nô lệ gốc Phi ở Congo Square và nhạc Caribe trộn vào nhau. Gottschalk sống cuộc đời lữ khách trên tàu hoả và tàu thuỷ — một tờ báo năm 1865 nói ông đã đi 95.000 dặm đường sắt và chơi 1.000 buổi.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Louis Moreau Gottschalk', 'https://en.wikipedia.org/wiki/Louis_Moreau_Gottschalk'],
      ['Grove 1904–1910, tập II, tr. 205 — Gottschalk (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782846/page/n236/mode/1up'],
    ],
  },
  'Hubert Parry': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 27/2/1848 | Sinh ở Bournemouth; cha là Thomas Gambier Parry, hoạ sĩ nghiệp dư và nhà bảo trợ nghệ thuật ở Highnam (Gloucester) |
| 1861 | Vào trường Eton |
| 1867 | Còn ở Eton đã lấy bằng Cử nhân Âm nhạc Oxford |
| 1870 | Tốt nghiệp Exeter College, Oxford |
| 1870–1877 | Làm bảo hiểm ở Lloyd's London theo ý cha và nhà vợ (Grove: "khoảng ba năm") |
| 1875 | Phụ tá biên tập *Từ điển Âm nhạc* của George Grove, viết 123 mục |
| 1880 | *Cảnh trong Prometheus Unbound* ở Liên hoan Gloucester |
| 1883 | Giáo sư sáng tác và lịch sử âm nhạc Học viện Âm nhạc Hoàng gia (RCM) |
| 1887 | *Blest Pair of Sirens*, viết theo đặt hàng của Stanford |
| 1895 | Kế Grove làm giám đốc RCM đến cuối đời (bài Wikipedia về Stanford ghi 1894) |
| 1898 / 24/7/1902 | Phong hiệp sĩ; rồi tước nam tước |
| 1902 | Anthem *I was glad* cho lễ đăng quang Edward VII |
| 1916 | *Jerusalem* trên thơ William Blake |
| 7/10/1918 | Mất ở Rustington vì cúm Tây Ban Nha |

## Âm nhạc và đóng góp
Parry là một trong những người khởi đầu "phục hưng âm nhạc Anh". Grove (do chính các đồng nghiệp viết) coi *Prometheus Unbound* (1880) là "đánh dấu một thời kỳ" của âm nhạc Anh, đặc biệt nhờ cách đặt nhạc đúng trọng âm tiếng Anh. Ông viết năm [[giao-huong]], *Biến tấu giao hưởng* ([[bien-tau]]), nhiều tác phẩm [[oratorio-cantata-passion]] cho các liên hoan, các tập *English Lyrics*, và *Songs of Farewell* (1916–1918) cho hợp xướng. Ngày nay ông được nhớ nhất qua *Jerusalem*, *I was glad*, *Blest Pair of Sirens* và giai điệu thánh ca *Repton*. Với vai trò nhà giáo, nhà sử học (*The Evolution of the Art of Music*) và giám đốc RCM, ông dạy Vaughan Williams, Holst, Bridge, Ireland; Elgar nói ông học được nghề nhiều nhất từ các bài Parry viết trong từ điển Grove.

## Giai thoại và điều chưa chắc
- ***Jerusalem* và phong trào nữ quyền**: bài hát (1916) được phong trào đòi quyền bầu cử cho phụ nữ dùng ngay; Wikipedia ghi cả Parry và vợ đều đồng cảm với phong trào này.
- **Bao lâu ở Lloyd's?** Grove viết "khoảng ba năm", Wikipedia ghi 1870–1877.
- **"Lớn nhất từ Purcell"**: Stanford gọi Parry là nhà soạn nhạc Anh lớn nhất từ Purcell; Delius không đồng ý. Danh hiệu này về sau lại hay được gán cho Elgar — đó là đánh giá, không phải sự kiện.
- **Năm làm giám đốc RCM**: 1895 (bài về Parry) hay 1894 (bài về Stanford).

## Bối cảnh
Parry sinh ra trong giới địa chủ có học, đi qua Eton, Oxford, City of London. Nước Anh thời Victoria khi đó bị châu Âu gọi là "xứ không có âm nhạc"; các liên hoan hợp xướng như Ba Hợp xướng (Gloucester, Worcester, Hereford) và RCM mới lập (1883) là nơi thế hệ của ông xây lại nền âm nhạc dân tộc. Ông mê đi thuyền buồm.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Hubert Parry', 'https://en.wikipedia.org/wiki/Hubert_Parry'],
      ['Grove 1904–1910, tập III, tr. 624 — Parry, Sir Charles Hubert Hastings (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782853/page/n681/mode/1up'],
      ['Grove 1904–1910, tập V (Phụ lục), tr. 657 — Parry (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782879/page/n724/mode/1up'],
    ],
  },
  'Charles Villiers Stanford': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 30/9/1852 | Sinh ở Dublin, con một của luật sư John James Stanford; cha mẹ đều là nhạc sĩ nghiệp dư |
| 1863–1864 | Một hành khúc cậu viết (k. 1860) được chơi trong vở kịch câm *Puss in Boots* ở Theatre Royal, Dublin (Grove) |
| 1870 | Vào Queens' College, Cambridge |
| 1873–1874 | Organist Trinity College (Grove ghi bổ nhiệm 1873; Wikipedia: chính thức 21/2/1874) |
| 1874–1876 | Học Reinecke ở Leipzig, Kiel ở Berlin |
| 6/2/1881 | Opera đầu *The Veiled Prophet of Khorassan* ra mắt ở Hannover |
| 1883 | Giáo sư sáng tác Học viện Âm nhạc Hoàng gia (RCM) từ khi lập trường |
| 1885–1902 | Chỉ huy Bach Choir |
| 1887 | Giáo sư âm nhạc Đại học Cambridge |
| 1896 | Opera hài *Shamus O'Brien* |
| 1898–1910 | Chỉ huy Liên hoan Leeds |
| 1902 | Phong hiệp sĩ |
| 1904 | *Songs of the Sea* |
| 29/3/1924 | Mất ở London; tro chôn ở Tu viện Westminster gần mộ Purcell |

## Âm nhạc và đóng góp
Stanford quan trọng nhất ở vai trò thầy dạy: Vaughan Williams, Holst, Coleridge-Taylor, Ireland, Bridge, Rebecca Clarke, Bliss, Howells đều qua lớp ông. Ông viết bảy [[giao-huong]] (số 3 "Ireland"), sáu *Rhapsody Ireland*, chín [[opera]], [[nhac-thinh-phong]], và đặc biệt nhạc nhà thờ Anh giáo: các bộ Service ở Si giáng (1879), La, Fa, Đô vẫn hát hằng tuần ở các nhà thờ chính toà. Bài hợp xướng không đệm *The Blue Bird* là một trong những bản ngắn được hát nhiều nhất của ông. Grove ghi ông đưa Hội Âm nhạc Đại học Cambridge lên tầm cao và tổ chức nhiều buổi ra mắt ở Anh (Brahms, Schumann).

## Giai thoại và điều chưa chắc
- **Mối thù với Elgar**: Stanford từng giúp Elgar, nhưng khi Elgar lên giáo sư ở Birmingham (1904), Stanford gửi một bức thư mà Elgar thấy "đáng ghét". Thư không còn, nên không ai biết nó viết gì. Bài giảng đầu của Elgar có câu về những người viết rhapsody — người ta coi là nhắm vào Stanford.
- **"Nồng mùi hương trầm"**: câu Stanford được cho là nói về *The Dream of Gerontius* — Wikipedia ghi là chưa kiểm chứng.
- **Cãi nhau với Parry**: từ khi Parry làm giám đốc RCM, hai người xung đột nhiều lần, gay nhất cuối 1916; vậy mà khi Parry mất, chính Stanford vận động để Parry được chôn ở nhà thờ St Paul.
- ***Shamus O'Brien* diễn bao nhiêu buổi?** Hồi ký Henry Wood nói hơn 100, người viết tiểu sử ông ghi 82.
- **Lời phê**: học trò Edgar Bainton nhớ ông chỉ phê "Thầy thích, con ạ" hoặc "Xấu kinh khủng, con ạ".

## Bối cảnh
Dublin thời Stanford còn thuộc Vương quốc Anh; ông mang chất dân ca Ireland vào phòng hoà nhạc London. Cambridge những năm 1870 là thế giới của các college, nhà nguyện và hội âm nhạc sinh viên; còn RCM ở South Kensington là nơi ông đứng lớp suốt bốn mươi năm.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Charles Villiers Stanford', 'https://en.wikipedia.org/wiki/Charles_Villiers_Stanford'],
      ['Grove 1904–1910, tập IV, tr. 671 — Stanford, Sir Charles Villiers (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782861/page/n734/mode/1up'],
    ],
  },
  'Edward Elgar': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/6/1857 | Sinh ở Lower Broadheath gần Worcester; cha lên dây đàn, có cửa hàng nhạc và làm organist nhà thờ Công giáo St George |
| 1877 | Học violin ngắn hạn ở London với Pollitzer — những bài học cuối cùng; về cơ bản tự học |
| k. 1879–1884 | Chỉ huy ban nhạc nhân viên nhà thương điên hạt (Powick) |
| 8/5/1889 | Cưới Caroline Alice Roberts ở Brompton Oratory; gia đình bà phản đối và tước quyền thừa kế. *Salut d'Amour* là quà đính hôn |
| 1891 | Lui về Malvern sau khi không tìm được chỗ đứng ở London |
| 1896 | *King Olaf* ở Hanley đem lại tiếng tăm |
| 19/6/1899 | *Biến tấu Enigma* ra mắt, Hans Richter chỉ huy |
| 1900 | *The Dream of Gerontius* ra mắt ở Liên hoan Birmingham, buổi diễn hỏng vì dàn hợp xướng chuẩn bị kém |
| 1901 | Hành khúc *Pomp and Circumstance* số 1; giai điệu sau thành *Land of Hope and Glory* (1902) |
| 5/7/1904 | Phong hiệp sĩ |
| 3/12/1908 | Giao hưởng số 1 ra mắt ở Manchester (Richter) |
| 1910 | Concerto violin cho Fritz Kreisler |
| 10/1919 | Concerto cello ra mắt, buổi diễn bị coi là thảm hoạ |
| 7/4/1920 | Vợ mất |
| 1924 | Nhạc trưởng của Nhà vua (Master of the King's Musick) |
| 23/2/1934 | Mất vì ung thư; chôn cạnh vợ ở Little Malvern |

## Âm nhạc và đóng góp
Elgar là nhà soạn nhạc Anh đầu tiên từ thời Purcell được cả châu Âu xếp vào hàng lớn; Richard Strauss từng nâng ly chúc ông như một người cách tân. Tự học, lớn lên giữa cửa hàng nhạc, dàn nhạc nghiệp dư và nhà thờ, ông có cảm quan dàn nhạc tuyệt vời — Grove cho rằng việc phải soạn cho đủ loại nhạc cụ ở nhà thương Powick đã rèn điều đó. Tác phẩm chính: *Biến tấu Enigma* ([[bien-tau]]), oratorio *Gerontius* ([[oratorio-cantata-passion]]), hai [[giao-huong]], [[hinh-thuc-concerto]] violin và cello, *Introduction and Allegro* cho dàn dây, *Pomp and Circumstance*. Ông cũng là một trong những nhà soạn nhạc đầu tiên thu đĩa nghiêm túc nhạc của mình.

## Giai thoại và điều chưa chắc
- **"Enigma" là gì?** Elgar nói có một chủ đề lớn "chạy qua và bên trên cả tập" nhưng không bao giờ vang lên, và không tiết lộ. Mọi lời giải được đưa ra từ đó đến nay đều là phỏng đoán. Mỗi biến tấu là chân dung một người bạn — điều này có thật, Grove 1904 đã ghi.
- **Gerontius "thất bại"**: buổi đầu kém vì hợp xướng, nhưng giới phê bình vẫn khen tác phẩm; nói "thất bại" là cường điệu.
- **Concerto violin**: Wikipedia ghi khi thì 1909, khi thì 1910.
- **Người tình bí mật**: một số lời đề tặng (như ba dấu sao trong lời đề Concerto violin) bị cho là ám chỉ hôn thê cũ Helen Weaver — chỉ là suy đoán.
- **Câu cuối đời**: Wikipedia dẫn ông nói tin rằng sau cái chết "chẳng có gì ngoài sự quên lãng hoàn toàn", dù ông là người Công giáo.
- **Giao hưởng số 3**: ông để lại phác thảo; Anthony Payne hoàn thành năm 1997, ra mắt 15/2/1998.

## Bối cảnh
Worcestershire và đồi Malvern là quê hương Elgar: thành phố nhà thờ chính toà, Liên hoan Ba Hợp xướng, xe đạp và đồng quê. Là người Công giáo, con một chủ tiệm, không học đại học trong một nước Anh Anh giáo và trọng giai cấp, ông luôn thấy mình là kẻ đứng ngoài — kể cả khi đã thành biểu tượng của Đế quốc Anh thời Edward.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Edward Elgar', 'https://en.wikipedia.org/wiki/Edward_Elgar'],
      ['Grove 1904–1910, tập I, tr. 772 — Elgar (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782838/page/n837/mode/1up'],
      ['Grove 1904–1910, tập V (Phụ lục), tr. 635 — Elgar (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782879/page/n702/mode/1up'],
    ],
  },
  'Edward MacDowell': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/12/1860 | Sinh ở New York trong gia đình gốc Quaker (Grove và các sách cũ ghi 1861) |
| 1870s | Học piano với Juan Buitrago và bạn bè ông, trong đó có Teresa Carreño |
| 1877 | Vào Nhạc viện Paris học Marmontel bằng học bổng (Grove ghi 1876) |
| 1879–1880s | Học Nhạc viện Hoch ở Frankfurt: piano Carl Heymann, sáng tác Joachim Raff |
| k. 1881–1882 | Đến Weimar chơi cho Liszt; Liszt giới thiệu *Tổ khúc hiện đại* số 1 |
| 1884 | Cưới Marian Nevins, học trò cũ; sống ở Wiesbaden để sáng tác |
| 1885 / 1890 | Concerto piano số 1 và số 2 |
| 1888 | Về Mỹ, định cư ở Boston |
| 1896 | Giáo sư âm nhạc đầu tiên của Đại học Columbia; *Woodland Sketches* op. 51 |
| 1897 | Tổ khúc "Thổ dân" op. 48 |
| 2/1904 | Từ chức sau xung đột với hiệu trưởng Nicholas Murray Butler; bị xe ngựa thuê đâm |
| 1907 | Cùng vợ lập MacDowell Colony ở Peterborough (New Hampshire) |
| 23/1/1908 | Mất ở New York |

## Âm nhạc và đóng góp
MacDowell là nhà soạn nhạc Mỹ đầu tiên được châu Âu coi trọng như một người ngang hàng. Ông viết theo lối Lãng mạn Đức của thầy Raff và Liszt: hai [[hinh-thuc-concerto]] piano (số 2 Rê thứ được coi là quan trọng bậc nhất của nhạc Mỹ trước Gershwin), bốn sonata piano, hai tổ khúc dàn nhạc, và nhất là các tập [[tieu-pham-piano]] mang tên thiên nhiên: *Woodland Sketches* với *To a Wild Rose* (Gửi đoá hồng dại) — bản ngắn được chơi nhiều nhất — *Sea Pieces*, *New England Idyls*. Tổ khúc "Thổ dân" dùng giai điệu thổ dân Bắc Mỹ. Grove viết ông phản đối việc tách nhạc sĩ Mỹ ra để khen hay chê riêng.

## Giai thoại và điều chưa chắc
- **Năm sinh**: 1861 được dùng đến tận 1975, khi một bài trên *Musical Quarterly* sửa thành 1860.
- **Nguyên nhân suy sụp**: Grove (bản 1906) gọi đó là "suy sụp não" do làm việc quá sức và lo nghĩ; Wikipedia nói tai nạn xe ngựa 1904 "có thể góp phần"; nhà nghiên cứu E. Douglas Bomberger đề xuất ngộ độc bromide — thuốc an thần thời đó — bị chẩn đoán nhầm. Chưa có kết luận.
- **Ngày mất trong Grove**: phụ lục Grove ghi "24/1/1907", lệch với 23/1/1908 của các nguồn khác — có lẽ là lỗi in.
- **Bút danh Edgar Thorn**: mười ba bản piano và bốn bài hát (1896–1898) ông in dưới tên giả; cuốn tiểu sử đầu (Gilman, 1909) không nhắc tới.
- **Học trò của Carreño?** Grove ghi ông học "một thời gian ngắn" với Carreño; Wikipedia chỉ nói ông học qua nhóm bạn của Buitrago, có Carreño.

## Bối cảnh
Nước Mỹ cuối thế kỷ 19 vẫn coi Đức là thánh địa âm nhạc; MacDowell trở về như một "người Mỹ đã thành danh ở Đức". Nhà gỗ ở Peterborough, nơi ông viết giữa rừng thông, trở thành MacDowell Colony — trại sáng tác mà bà Marian duy trì gần nửa thế kỷ cho các nghệ sĩ về sáng tác.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Edward MacDowell', 'https://en.wikipedia.org/wiki/Edward_MacDowell'],
      ['Grove 1904–1910, tập III, tr. 4 — MacDowell (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782853/page/n23/mode/1up'],
      ['Grove 1904–1910, tập V (Phụ lục), tr. 652 — MacDowell (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782879/page/n719/mode/1up'],
    ],
  },
  'Amy Beach': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 5/9/1867 | Sinh ở Henniker (New Hampshire), tên Amy Marcy Cheney |
| 1875 | Gia đình chuyển về Boston; học piano Ernst Perabo, rồi Carl Baermann |
| 1881–1882 | Học hoà âm với Junius W. Hill — lớp sáng tác chính thức duy nhất; còn lại tự học |
| 10/1883 | Ra mắt chuyên nghiệp ở Boston Music Hall, chơi concerto Son thứ của Moscheles (Wikipedia ghi 18/10, Grove ghi 24/10) |
| 1885 | Cưới bác sĩ phẫu thuật Henry Harris Aubrey Beach, hơn bà 24 tuổi; từ đó ký tên "Mrs. H. H. A. Beach" |
| 1892 | Thánh lễ Mi giáng trưởng op. 5 do Hội Handel và Haydn trình diễn |
| 30/10/1896 | Giao hưởng "Gaelic" op. 32 ra mắt với Dàn nhạc Giao hưởng Boston |
| 1900 | Concerto piano op. 45, bà tự độc tấu với Giao hưởng Boston |
| 1905 | Ngũ tấu piano op. 67 |
| 6/1910 | Chồng mất; bảy tháng sau mẹ mất |
| 10/1912 | Ra mắt châu Âu ở Dresden |
| 1932 | Opera một màn *Cabildo* |
| 27/12/1944 | Mất ở New York |

## Âm nhạc và đóng góp
Beach được coi là nữ nhà soạn nhạc Mỹ đầu tiên thành công với nhạc nghệ thuật quy mô lớn, và giao hưởng "Gaelic" là [[giao-huong]] đầu tiên do một phụ nữ Mỹ sáng tác và xuất bản. Bà viết theo ngôn ngữ hậu Lãng mạn Brahms – Dvořák, dùng chất liệu dân ca Ireland, Scotland trong "Gaelic". Tác phẩm gồm [[thanh-le-va-requiem]] Mi giáng, [[hinh-thuc-concerto]] piano, sonata violin, ngũ tấu piano ([[nhac-thinh-phong]]), hơn trăm ca khúc ([[lied]]) và nhiều tác phẩm hợp xướng. Grove 1904 đã có mục riêng về bà, ghi đến op. 53.

## Giai thoại và điều chưa chắc
- **Thần đồng**: Wikipedia kể một tuổi bà hát đúng khoảng bốn mươi bài, hai tuổi ứng tác bè đối, bốn tuổi "viết" ba điệu waltz trong đầu suốt một mùa hè không có đàn. Các chuyện này đến từ gia đình và hồi ức của chính bà.
- **Mẹ cấm chơi đàn**: mẹ bà từng không cho con ngồi vào đàn, sợ làm mất uy quyền của cha mẹ.
- **Màu của giọng**: bà được cho là thấy mỗi giọng một màu, nhưng chỉ có màu cho vài giọng — Wikipedia viết bằng chữ "có lẽ", nên đây là giả thuyết.
- **Điều kiện hôn nhân**: bà đồng ý không dạy piano, chỉ diễn tối đa hai buổi một năm (tiền góp từ thiện) và tập trung sáng tác. Chuyện chồng "cấm học sáng tác" thường được kể; Wikipedia chỉ nói ông "có thể không muốn" bà học thầy. Nhìn lại, bà viết rằng mình đã hạnh phúc và chồng thì mãn nguyện.
- **Ngày ra mắt 1883**: hai nguồn lệch nhau sáu ngày.

## Bối cảnh
Boston cuối thế kỷ 19 là thủ đô âm nhạc của nước Mỹ, với Dàn nhạc Giao hưởng Boston (lập 1881) và các hội hợp xướng lâu đời. Một phụ nữ thượng lưu khi ấy được trông đợi làm bà chủ salon và nhà bảo trợ hơn là nghệ sĩ chuyên nghiệp; Beach sáng tác trong khuôn khổ đó, rồi sau khi goá chồng mới đi diễn châu Âu và mùa hè về MacDowell Colony.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Amy Beach', 'https://en.wikipedia.org/wiki/Amy_Beach'],
      ['Grove 1904–1910, tập I, tr. 210 — Beach, Mrs. H. H. A. (bản quét Internet Archive)', 'https://archive.org/details/cu31924021782838/page/n241/mode/1up'],
    ],
  },
}

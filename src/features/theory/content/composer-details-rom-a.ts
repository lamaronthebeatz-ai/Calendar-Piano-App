import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Lãng mạn sớm (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_A: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'John Field': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 26/7/1782 | Sinh ở phố Golden Lane, Dublin; cha chơi violin trong các nhà hát Dublin |
| 24/3/1792 | Ra mắt công chúng ở Dublin, lúc chín tuổi |
| 1793 | Gia đình chuyển sang London; học việc với Muzio Clementi, phụ ông bán và giới thiệu đàn |
| 7/2/1799 | Tự trình diễn Concerto piano số 1 ở London, lúc 16 tuổi |
| 1802 | Cùng Clementi sang Paris rồi đến Sankt-Peterburg |
| 1806 | Buổi hòa nhạc đầu tiên ở Moskva |
| 1810 | Cưới Adelaide Percheron, một nữ pianist người Pháp từng là học trò |
| 1832 | Sang London chữa bệnh; khiêng quan tài Clementi; Giáng sinh năm đó diễn Concerto số 7 ở Paris |
| 1834–1835 | Nằm chín tháng trong một bệnh viện ở Napoli |
| 23/1/1837 | Mất ở Moskva vì viêm phổi |

## Âm nhạc và đóng góp
Field được xem là người khai sinh nocturne cho piano: [[tieu-pham-piano]] một chương, giai điệu tay phải hát như một aria, tay trái rải hợp âm rộng có pedal đỡ. Ông viết 18 nocturne, bảy concerto piano, sonata và biến tấu trên dân ca Nga (*Kamarinskaya*). Chopin làm cho thể loại này nổi tiếng; Liszt in lại các nocturne của Field theo nguồn Nga hiếm, kèm lời tựa ca ngợi dài. Ở Nga, Field góp phần lớn vào việc hình thành trường phái piano địa phương. Glinka từng học ông vài buổi.

## Giai thoại và điều chưa chắc
- **Vì sao ở lại Nga**: Wikipedia tiếng Anh ghi rõ là không rõ, chỉ đoán rằng có lẽ ông làm đại lý bán đàn cho hãng Clementi.
- **"Drunken John"**: Wikipedia tiếng Đức chép biệt danh này, gắn với thói uống rượu quá độ. Bài tiếng Anh chỉ nói lối sống phung phí làm sức khoẻ ông sa sút từ giữa thập niên 1820.
- **Glinka**: bài tiếng Đức nói Glinka chỉ học tổng cộng ba buổi; đừng gọi Glinka là "học trò" của Field theo nghĩa đầy đủ.
- **Câu chơi chữ lúc hấp hối**: theo một nhân chứng, khi được hỏi theo đạo nào, ông đáp mình không phải "Calviniste" mà là "Claveciniste" (người chơi đàn phím). Chuyện chỉ có một nhân chứng.
- **Haydn khen**: khoảng năm 1795, Haydn khen ông diễn một concerto của Dussek. Năm chỉ là ước lượng.

## Bối cảnh
London cuối thế kỷ 18 là nơi các hãng đàn như Clementi cạnh tranh, và nghệ sĩ trẻ cũng là người trình diễn hàng mẫu. Ở Sankt-Peterburg và Moskva đầu thế kỷ 19, giới quý tộc Nga thuê thầy dạy đàn phương Tây với giá cao. Field biểu diễn ở Hội Philharmonic mới lập, dạy trong các dinh thự và in nhạc với các nhà xuất bản Nga lẫn Leipzig. Tiểu thuyết *Chiến tranh và hòa bình* của Tolstoy có nhắc đến một bản nocturne của Field.
`,
    refs: [
      ['Wikipedia (tiếng Anh): John Field (composer)', 'https://en.wikipedia.org/wiki/John_Field_(composer)'],
      ['Wikipedia (tiếng Đức): John Field', 'https://de.wikipedia.org/wiki/John_Field'],
    ],
  },
  'Niccolò Paganini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 27/10/1782 | Sinh ở Genova, con thứ ba của một người buôn đồ hàng hải |
| k. 1795–1796 | Sang Parma tìm Alessandro Rolla; Rolla chuyển cậu sang Ferdinando Paer, rồi Gasparo Ghiretti |
| 1801 | Violin thứ nhất của Cộng hòa Lucca |
| 1805 | Phục vụ Elisa Bonaparte (Baciocchi), em gái Napoléon, ở Lucca |
| cuối 1809 | Rời triều đình, trở lại đời nghệ sĩ lưu diễn tự do |
| 1820 | Ricordi (Milano) in *24 Capriccio* làm Op. 1 |
| 1828 | Đến Viên, được Hoàng đế Franz I phong "nghệ sĩ thính phòng hoàng gia"; chia tay Antonia Bianchi, mẹ của con trai Achille |
| 1828–1831 | Lưu diễn khắp Đức, Ba Lan, Bohemia, kết thúc ở Strasbourg (2/1831); sau đó Paris và nước Anh |
| 1833 | Gặp Berlioz ở Paris, đặt viết một tác phẩm cho viola |
| 9/1834 | Thôi biểu diễn, về Genova |
| 1836 | Mở sòng bạc ở Paris; thất bại, mất trắng |
| 27/5/1840 | Mất ở Nice (khi đó thuộc vương quốc Sardinia) vì xuất huyết nội |
| 1876 / 1896 | Thi hài mới được chôn ở Parma; năm 1896 cải táng vào nghĩa trang mới |

## Âm nhạc và đóng góp
Paganini biến violin thành nhạc cụ trình diễn thần sắc: bồi âm, pizzicato tay trái, nhảy dây xa, chơi cả bài trên một dây Sol (có khi lên dây Sol cao hơn bình thường). *24 Capriccio* Op. 1, có lẽ viết khoảng 1805–1809, trở thành kinh thư của violin và nguồn cảm hứng cho Liszt, Schumann, Brahms, Rachmaninoff (Capriccio số 24 sinh ra cả một dòng [[bien-tau]]). Ông còn viết sáu concerto violin, các bộ biến tấu (*Le streghe*, *Il carnevale di Venezia*) và nhiều nhạc cho guitar. Cây Guarneri của ông được gọi là "Il Cannone" vì tiếng đàn rất vang. Buổi nghe Paganini tháng 4/1832 đã khiến Liszt quyết làm "Paganini của piano", xem [[nghe-si-piano-the-ky-19]].

## Giai thoại và điều chưa chắc
- **Bán linh hồn cho quỷ**: không có chứng cứ nào. Điều có thật là tin đồn: khi ông đến Viên năm 1828, báo chí đã đồn về "phép phù thủy" của tiếng đàn (Wikipedia tiếng Đức). Trước khi sang Đức, ông đọc cho Julius Max Schottky chép tiểu sử để bác bỏ tin đồn. Chính tiểu sử ấy lại không đáng tin hoàn toàn (xem dòng dưới).
- **Năm sinh**: Paganini tự khai 1784 với những người viết tiểu sử đầu tiên, nên suốt thế kỷ 19 năm này được coi là đúng. Các nguồn hiện nay ghi 1782.
- **Bị từ chối mai táng**: có thật. Ông mất trước khi kịp làm phép xức dầu, lại mang tiếng dính líu với quỷ. Giáo hội không cho chôn ở Genova; phải mất bốn năm và đơn gửi Giáo hoàng mới đưa được thi hài về Genova, nhưng đến 1876 mới chôn.
- **Đứt dây giữa buổi diễn**: phim ảnh dựng cảnh đối thủ phá đàn. Wikipedia tiếng Anh ghi chính Paganini thỉnh thoảng cố ý làm đứt dây để khoe tài chơi trên số dây còn lại.
- **Bàn tay dị thường**: giả thuyết Marfan hay Ehlers–Danlos chỉ là suy đoán hậu thế. Một phân tích ADN trên con cháu không xác nhận Marfan (bài tiếng Đức).
- **Capriccio trên sân khấu**: theo bài tiếng Đức, ông không bao giờ chơi các Capriccio trong buổi diễn của mình.
- Paganini bị chẩn đoán giang mai từ 1822. Thuốc chữa bằng thủy ngân và thuốc phiện để lại tác dụng phụ nặng.

## Bối cảnh
Bắc Ý thời Napoléon đổi chủ liên tục: Lucca thành lãnh địa của Elisa Bonaparte, Parma sau 1815 thuộc Marie Louise, vợ hai của Napoléon. Từ 1828, Paganini sống như một ngôi sao: nhà hát chật kín, vé đắt, báo thời trang bàn về lối sống của ông. Ông kết thân với Rossini và Berlioz. Cây guitar ông tặng Berlioz nay nằm ở Musée de la Musique, Paris.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Niccolò Paganini', 'https://en.wikipedia.org/wiki/Niccol%C3%B2_Paganini'],
      ['Wikipedia (tiếng Đức): Niccolò Paganini', 'https://de.wikipedia.org/wiki/Niccol%C3%B2_Paganini'],
    ],
  },
  'Louis Spohr': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 5/4/1784 | Sinh ở Braunschweig; năm 1786 gia đình chuyển về Seesen |
| 1799 | Chuyến lưu diễn đầu tiên đến Hamburg thất bại; xin công tước Braunschweig giúp tiền |
| 1805–1812 | Concertmaster triều đình Gotha |
| 2/2/1806 | Cưới nghệ sĩ harp Dorette Scheidler; hai vợ chồng lưu diễn bộ đôi violin – harp |
| 1808 | Tập nhạc với Beethoven tại nhà Beethoven |
| 1810 | Chỉ huy lễ hội âm nhạc bằng một cuộn giấy, gây chú ý |
| 1813–1815 | Nhạc trưởng Theater an der Wien, Viên |
| 1817–1819 | Giám đốc opera Frankfurt, dựng *Faust* (opera của ông, từng bị Viên từ chối) |
| 1820 | Sang London, chỉ huy Hội Philharmonic |
| 1822 | Giám đốc âm nhạc triều đình Kassel theo đề nghị của Weber, giữ đến cuối đời |
| 1823 | Opera *Jessonda* |
| 1857 | Bị cho nghỉ hưu trái ý; gãy tay, thôi chơi violin |
| 22/10/1859 | Mất ở Kassel |

## Âm nhạc và đóng góp
Spohr là nghệ sĩ violin lừng danh, nhạc trưởng và nhà soạn nhạc rất được trọng thời mình. Ông viết mười [[giao-huong]], mười opera, 18 concerto violin, bốn concerto clarinet (cho Johann Simon Hermstedt) và nhiều [[nhac-thinh-phong]], trong đó có 36 tứ tấu dây và các "tứ tấu đôi". *Violinschule* (sách dạy violin) hệ thống hoá kỹ thuật thời ấy và vẫn còn được in. Theo Wikipedia tiếng Đức, sau khi Weber (1826) và Beethoven (1827) mất, nhiều người coi ông là nhà soạn nhạc Đức còn sống quan trọng nhất, cho tới khi Schubert, Mendelssohn và Schumann được biết đến rộng rãi vào giữa thập niên 1840. Cùng Weber và Marschner, ông là đại diện chính của [[opera]] Lãng mạn Đức.

## Giai thoại và điều chưa chắc
- **"Người đầu tiên dùng đũa chỉ huy"**: các nguồn chỉ nói ông là *một trong những người đầu tiên* hay "người tiên phong". Wikipedia tiếng Đức nhắc buổi chỉ huy bằng cuộn giấy năm 1810 và buổi chỉ huy bằng đũa ở London năm 1820.
- **Phát minh chỗ tì cằm**: Wikipedia tiếng Anh ghi "khoảng 1820". Bài tiếng Đức nói ông mô tả nó lần đầu trong *Violinschule* năm 1833, sau mười năm thử nghiệm. Năm in sách cũng lệch: 1832 (bài tiếng Anh) hay 1833 (bài tiếng Đức).
- **Ông cũng được ghi là người nghĩ ra chữ cái đánh dấu chỗ tập** (rehearsal letters) trên tổng phổ.
- **Beethoven chơi đàn**: Spohr kể đàn piano nhà Beethoven lạc dây và Beethoven chơi mạnh tay, cẩu thả. Đó là lời kể của một người, viết trong tự truyện.
- *Jessonda* bị Đức Quốc xã cấm vì có chuyện một người hùng châu Âu yêu công chúa Ấn Độ.

## Bối cảnh
Spohr sống trong mạng lưới các triều đình nhỏ của Đức: Braunschweig, Gotha, rồi Kassel của tuyển hầu tước xứ Hessen. Ở đó, Kapellmeister vừa chỉ huy dàn nhạc, vừa dựng opera, vừa viết nhạc cho lễ lạt. Hai vợ chồng violin – harp đi diễn ở Ý (1816–1817), Anh (1820) và Paris (1821) cho thấy đời sống lưu diễn của nghệ sĩ đầu thế kỷ 19.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Louis Spohr', 'https://en.wikipedia.org/wiki/Louis_Spohr'],
      ['Wikipedia (tiếng Đức): Louis Spohr', 'https://de.wikipedia.org/wiki/Louis_Spohr'],
    ],
  },
  'Carl Maria von Weber': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18 hay 19/11/1786 | Sinh ở Eutin; rửa tội ngày 20/11 với tên Carl Friedrich Ernst |
| 1798 | Học Michael Haydn ở Salzburg (miễn phí); mẹ mất vì lao |
| 1803 | Học Abbé Vogler ở Viên |
| 1804 | Nhạc trưởng nhà hát Breslau, lúc 17 tuổi |
| 1807–1810 | Thư ký riêng của công tước Ludwig ở Stuttgart |
| 1810 | Bị bắt vì biển thủ và hối lộ, bị trục xuất khỏi Württemberg cùng cha |
| 1813–1816 | Giám đốc opera Praha |
| 1817 | Giám đốc opera Dresden; 4/11 cưới ca sĩ Caroline Brandt |
| 1819 | *Aufforderung zum Tanz* (Lời mời khiêu vũ) |
| 18/6/1821 | *Der Freischütz* ra mắt ở Schauspielhaus Berlin, thành công vang dội |
| 1823 | *Euryanthe*, opera duy nhất soạn liền mạch không lời thoại |
| 12/4/1826 | Chỉ huy buổi ra mắt *Oberon* ở London |
| 5/6/1826 | Mất trong giấc ngủ ở nhà Sir George Smart, London, 39 tuổi, vì lao |
| 12/1844 | Hài cốt đưa về Dresden; Wagner đọc điếu văn và viết nhạc cho lễ cải táng |

## Âm nhạc và đóng góp
Weber được xem là người khai sinh [[opera]] Lãng mạn Đức. *Der Freischütz* đưa rừng sâu, ma quỷ, dân ca và đời sống thợ săn lên sân khấu; vở diễn được xem là một cột mốc của [[thoi-ky-lang-man]]. *Euryanthe* có những đoạn báo trước opera đầu tay của Wagner. Ngoài opera, ông viết hai concerto clarinet và một concertino (cho Heinrich Baermann), *Konzertstück* cho piano và dàn nhạc, và *Aufforderung zum Tanz*. Marschner, Meyerbeer, Wagner và cả Glinka chịu ảnh hưởng của ông.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: chỉ biết "khoảng 18/11/1786"; Wikipedia tiếng Anh ghi 18/19. Tên "Maria" chỉ thấy trong giấy tờ từ những năm sau.
- **Họ hàng với Mozart**: có thật. Constanze, vợ Mozart, là con của chú cùng cha khác mẹ của Weber, tức Weber và Constanze là anh em họ.
- **Vụ Stuttgart 1810**: không phải giai thoại. Weber bị bắt, bị buộc tội biển thủ và hối lộ, trả nợ đến 1816.
- **Tham vọng "thần đồng"**: cha ông, Franz Anton, muốn biến con thành một Mozart thứ hai. Weber sinh ra đã bị tật ở hông, bốn tuổi mới biết đi.
- Ông giữ nhật ký từ 26/2/1810 cho tới ba ngày trước khi mất, là nguồn rất quý cho người nghiên cứu.

## Bối cảnh
Sau các cuộc chiến Napoléon, những nhà hát cung đình Đức như Dresden vẫn chuộng opera Ý. Weber làm việc để dựng một nền opera tiếng Đức, với lối tập dượt có tổ chức mà ông bắt đầu từ Breslau. Ở Berlin năm 1821, *Der Freischütz* được nghe như một tuyên ngôn văn hoá Đức. Khi nhận lời sang London năm 1826, ông đã mắc lao.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Carl Maria von Weber', 'https://en.wikipedia.org/wiki/Carl_Maria_von_Weber'],
      ['Wikipedia (tiếng Đức): Carl Maria von Weber', 'https://de.wikipedia.org/wiki/Carl_Maria_von_Weber'],
    ],
  },
  'Gioachino Rossini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 29/2/1792 | Sinh ở Pesaro (Lãnh thổ Giáo hoàng); cha thổi trumpet, mẹ là ca sĩ |
| thời niên thiếu | Vào Liceo Musicale Bologna, học hát, cello, piano rồi sáng tác |
| 1812 | *La pietra del paragone* diễn 53 đêm ở La Scala; được miễn nghĩa vụ quân sự |
| 6/2/1813 | *Tancredi* ra mắt ở La Fenice, Venezia |
| 22/5/1813 | *L'italiana in Algeri* ra mắt ở Venezia |
| 1815 | Sang Napoli làm việc cho ông bầu Domenico Barbaja |
| 20/2/1816 | *Il barbiere di Siviglia* (lúc đầu tên *Almaviva*) ra mắt ở Teatro Argentina, Roma; đêm đầu thất bại |
| 1816–1817 | *Otello*, *La Cenerentola*, *La gazza ladra* |
| 3/1822 | Cưới ca sĩ Isabella Colbran; sang Viên, gặp Beethoven |
| 1824 | Ký hợp đồng ở Paris |
| 6/1825 | *Il viaggio a Reims* mừng lễ đăng quang Charles X |
| 3/8/1829 | *Guillaume Tell* ra mắt, opera cuối cùng |
| 1831–1841 | Viết *Stabat Mater* |
| 1846 | Cưới Olympe Pélissier sau khi Colbran mất (1845) |
| 12/1858 | Bắt đầu các buổi salon tối thứ Bảy ở Paris và Passy |
| 1864 | *Petite messe solennelle* trình diễn lần đầu |
| 13/11/1868 | Mất ở Passy sau ca mổ ung thư đại trực tràng |
| 1887 | Hài cốt đưa về nhà thờ Santa Croce, Firenze |

## Âm nhạc và đóng góp
Rossini đưa opera buffa lên đỉnh, nối tiếp Mozart, Cimarosa và Paisiello: tiết tấu sôi nổi, hòa âm giản dị, hát hoa mỹ và "Rossini crescendo", tức một câu nhạc lặp lại, mỗi lần dày và to hơn. Ông chuẩn hoá cấu trúc aria hai phần (cantabile chậm rồi cabaletta nhanh) mà cả thế hệ bel canto sau dùng lại. Overture của ông thường là "chương sonata không có phát triển" có mở đầu chậm. Ông hay đem overture cũ sang vở mới: overture *Il barbiere* vốn là của *Aureliano in Palmira*. *Guillaume Tell* mở đường cho grand opéra Pháp. Sau 1829, ông chỉ viết *Stabat Mater*, *Petite messe solennelle*, các ca khúc *Soirées musicales* và hàng trăm tiểu phẩm salon gọi đùa là *Péchés de vieillesse* ("Tội lỗi tuổi già"). Xem thêm [[opera]].

## Giai thoại và điều chưa chắc
- **Viết *Il barbiere* trong 13 ngày**: con số do chính Rossini kể với Wagner năm 1860 (theo Wikipedia tiếng Đức). Bài tiếng Anh về vở opera viết "chưa đầy ba tuần". Lời tự kể sau 44 năm nên được đọc thận trọng.
- **Đêm đầu tiên *Il barbiere***: thất bại có thật. Phe ủng hộ Paisiello (người đã có một vở cùng tên) huýt sáo, trên sân khấu lại xảy ra nhiều sự cố. Từ đêm thứ hai vở diễn thành công.
- **Gặp Beethoven (1822)**: chỉ biết qua lời Rossini kể lại với nhiều người, trong đó có Hanslick và Wagner. Theo lời kể, Beethoven khuyên ông cứ viết thêm "Barbiere", đừng viết opera nghiêm.
- **Về hưu vì lười hay vì giàu**: các giải thích kiểu này lưu hành từ khi ông còn sống. Giới nghiên cứu hiện nay (Gossett, Osborne) cho rằng ông không định bỏ opera; bệnh tật (di chứng lậu, trầm cảm) và hoàn cảnh mới là nguyên nhân chính.
- **Món Tournedos Rossini**: mang tên ông, gắn với tiếng sành ăn của ông ở Paris. Nguồn không nói ai chế ra món này.
- Sinh ngày 29/2, ông chỉ có "sinh nhật thật" bốn năm một lần.

## Bối cảnh
Ý thời Rossini là các nhà hát thương mại sống nhờ mùa diễn Carnival, nơi nhà soạn nhạc phải nộp vở mới trong vài tuần. Ở Napoli, ông bầu Barbaja điều hành Teatro San Carlo, nơi Rossini viết nhiều vai cho Isabella Colbran. Ở Viên năm 1822 có "cơn sốt Rossini": Schindler, phụ tá của Beethoven, gọi đó là "một cuộc truy hoan sùng bái". Về già, salon tối thứ Bảy của ông ở Passy là nơi giới nghệ sĩ Paris tụ họp.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Gioachino Rossini', 'https://en.wikipedia.org/wiki/Gioachino_Rossini'],
      ['Wikipedia (tiếng Đức): Gioachino Rossini', 'https://de.wikipedia.org/wiki/Gioachino_Rossini'],
      ['Wikipedia (tiếng Anh): The Barber of Seville', 'https://en.wikipedia.org/wiki/The_Barber_of_Seville'],
    ],
  },
  'Franz Schubert': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 31/1/1797 | Sinh ở Himmelpfortgrund, ngoại ô Viên; cha là thầy giáo |
| 1804 | Salieri để ý đến cậu bé |
| 11/1808 | Vào Stadtkonvikt nhờ học bổng ca đoàn; kết bạn với Joseph von Spaun |
| 5/1812 | Mẹ mất; từ tháng sau học riêng Salieri hai buổi một tuần (đến 1817) |
| 1814 | *Gretchen am Spinnrade* (thơ trong *Faust* của Goethe); dạy học ở trường của cha |
| 1815 | Năm sáng tác dồi dào nhất; viết *Erlkönig* lúc 18 tuổi |
| 1816–1817 | Ở nhờ nhà Franz von Schober; Schober giới thiệu ca sĩ Johann Michael Vogl |
| 1818 | Dạy nhạc cho gia đình bá tước Esterházy ở Zseliz |
| 1/12/1820 | *Erlkönig* hát lần đầu trong một buổi tụ họp riêng |
| 7/3/1821 | *Erlkönig* ra mắt công chúng ở Theater am Kärntnertor (Vogl hát, Hüttenbrenner đệm) |
| 1821 | *Erlkönig* in thành Op. 1 |
| 1822 | Giao hưởng Si thứ "Dang dở"; *Wanderer-Fantasie* |
| 1/1823 | Nằm viện vì bệnh mà giới nghiên cứu cho là giang mai |
| 1827 | *Winterreise*; cầm đuốc trong đám tang Beethoven |
| 26/3/1828 | Buổi hòa nhạc công khai duy nhất toàn tác phẩm của mình |
| 19/11/1828 | Mất ở nhà anh trai Ferdinand, 31 tuổi; chôn gần mộ Beethoven ở Währing |
| 1888 | Mộ Schubert và Beethoven dời về Zentralfriedhof |

## Âm nhạc và đóng góp
Schubert viết hơn 600 [[lied]]. Ông biến bài hát Đức thành một thể loại lớn: phần piano không chỉ đệm mà dựng cảnh (guồng quay sợi trong *Gretchen*, vó ngựa ba liên trong *Erlkönig*), và giọng hát chuyển màu theo nhân vật. Trong *Erlkönig*, một ca sĩ đóng bốn vai: người kể, người cha, đứa con, Vua Elf. Tiếng kêu của đứa trẻ mỗi lần cao hơn nửa cung. Liên khúc *Die schöne Müllerin* và *Winterreise* là đỉnh cao của thể loại. Ông còn để lại *Giao hưởng "Dang dở"*, Giao hưởng Đô trưởng "Lớn", Ngũ tấu "Cá hồi", Tứ tấu "Thần chết và thiếu nữ", Ngũ tấu dây Đô trưởng, các Impromptu, ba sonata cuối. Lối chuyển giọng sang trung âm cromatic của ông là dấu ấn của [[thoi-ky-lang-man]] sớm. Lúc ông còn sống, ít người ngoài vòng bạn bè ở Viên biết đến âm nhạc của ông.

## Giai thoại và điều chưa chắc
- **Schubertiade bắt đầu từ bao giờ**: bài Wikipedia tiếng Anh về Schubertiade ghi các buổi tụ họp ở nhà Ignaz von Sonnleithner "từ 1815". Bài tiếng Đức về Schubert ghi chúng được *gọi là* Schubertiade từ 1821. Hai ý không hẳn mâu thuẫn: có buổi trước, có tên sau.
- **Viết *Erlkönig* trong một buổi chiều**: chỉ có lời Spaun. Schubert còn sửa ba lần trước khi in bản thứ tư.
- **Goethe im lặng**: Spaun gửi bài hát cho Goethe xin chấp thuận, không có hồi âm. Năm 1830, nghe Wilhelmine Schröder-Devrient hát, Goethe được kể là đã khen. Lời kể này do Eduard Genast thuật lại.
- **Beethoven và Schubert**: hai người có biết nhau từ 1822 nhưng "không đi đến đâu". Câu Beethoven trên giường bệnh khen "tia lửa thiên tài" trong Schubert chỉ được ghi là "người ta nói".
- **Nguyên nhân cái chết**: giấy tờ chính thức ghi thương hàn. Một số sử gia nghĩ đến giang mai giai đoạn ba hay ngộ độc thủy ngân do chữa giang mai. Bài tiếng Đức cho rằng ông vẫn mắc giang mai, nhưng cái chết có lẽ do một bệnh nhiễm trùng cấp, nhiều khả năng là thương hàn.
- **Mối tình với Caroline Esterházy**: chỉ là "người ta nói". Tác phẩm duy nhất đề tặng cô là Fantasia Fa thứ cho piano bốn tay.
- **Đời tư**: luận điểm của Maynard Solomon về đồng tính bị tác giả tiểu sử Lorraine Byrne Bodley phản bác. Đây vẫn là chỗ tranh luận, chưa có kết luận.
- **Vì sao "Dang dở"**: không ai biết. Schubert cũng không nhắc bản này với bạn bè. Bản nhạc nằm trong tay Anselm Hüttenbrenner đến 1865.

## Bối cảnh
Viên thời Metternich kiểm duyệt gắt, đời sống văn hoá thu vào phòng khách gia đình. Schubertiade là những buổi tối không quảng cáo trong căn hộ người bạn khá giả: Vogl hát, Schubert đệm, có đọc thơ, khiêu vũ, khách từ vài người đến hơn trăm. Tranh vẽ chì nâu của Moritz von Schwind (1868, vẽ theo trí nhớ) cho thấy một buổi như thế. Luật năm 1815 buộc người đàn ông phải chứng minh nuôi được gia đình mới được cưới, nên Schubert không thể cưới Therese Grob.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Franz Schubert', 'https://en.wikipedia.org/wiki/Franz_Schubert'],
      ['Wikipedia (tiếng Đức): Franz Schubert', 'https://de.wikipedia.org/wiki/Franz_Schubert'],
      ['Wikipedia (tiếng Anh): Erlkönig (Schubert)', 'https://en.wikipedia.org/wiki/Erlk%C3%B6nig_(Schubert)'],
      ['Wikipedia (tiếng Anh): Schubertiade', 'https://en.wikipedia.org/wiki/Schubertiade'],
    ],
  },
  'Gaetano Donizetti': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 29/11/1797 | Sinh ở khu Borgo Canale, Bergamo, con út trong ba con trai |
| 1807 | Vào trường Lezioni Caritatevoli của Simon Mayr với học bổng toàn phần |
| đến 1817 | Học ở Bologna nhờ Mayr giới thiệu |
| 28/1/1822 | *Zoraida di Granata* ra mắt ở Teatro Argentina, Roma |
| 1822 | Sang Napoli theo lời mời của Barbaja; 51 opera của ông diễn ở Napoli |
| 1/6/1828 | Cưới Virginia Vasselli ở Roma (bài tiếng Anh ghi đính hôn 5/1827) |
| 26/12/1830 | *Anna Bolena* ở Teatro Carcano, Milano, với Giuditta Pasta: thành công quốc tế đầu tiên |
| 1832 | *L'elisir d'amore* ở Milano |
| 26/9/1835 | *Lucia di Lammermoor* ra mắt ở Napoli |
| 7/1837 | Virginia mất giữa dịch tả, sau ba lần sinh nở không con nào sống |
| 1838 | Sang Paris; *La fille du régiment* (1840) |
| 1842 | Nhạc sĩ triều đình Viên; *Linda di Chamounix* |
| 3/1/1843 | *Don Pasquale* ra mắt ở Paris, thành công lớn |
| 1846 | Bị đưa vào nhà điều dưỡng Ivry gần Paris |
| 8/4/1848 | Mất ở Bergamo |

## Âm nhạc và đóng góp
Donizetti viết khoảng 70 opera (bài tiếng Anh "hơn 70", bài tiếng Đức "khoảng 65 đến 70"), là trụ cột của bel canto giữa Rossini và Verdi. Ông viết nhanh và thực dụng, nhưng có tài dựng cảnh tâm lý: *Lucia di Lammermoor* là một đỉnh cao của [[opera]] Ý thế kỷ 19. Ông thành thạo cả opera nghiêm về lịch sử nước Anh (*Anna Bolena*, *Maria Stuarda*, *Roberto Devereux*) lẫn hài kịch (*L'elisir d'amore*, *Don Pasquale*, *La fille du régiment*). Kiểm duyệt ở Napoli làm ông bực bội, và đó là một lý do ông chuyển sang Paris.

## Giai thoại và điều chưa chắc
- **Giang mai thần kinh**: Wikipedia tiếng Anh nói ông mất trong trạng thái loạn trí do giang mai thần kinh. Bài tiếng Đức phản bác mạnh: giả thuyết dựa trên tính toán trọng lượng sọ không đứng vững và trên ba lần sinh nở hỏng của vợ. Năm 1998, giáo sư bệnh học Maximilian Hohenegger (Viên) gọi chẩn đoán giang mai, thậm chí cả chữ "điên", là suy đoán. Đây là chỗ hai nguồn lệch thật sự.
- **Cái sọ bị lấy mất**: khi khai quật năm 1875 để cải táng, người ta thấy thiếu sọ. Sọ được giữ trong bảo tàng Donizetti và đến tháng 5/1951 mới đặt lại cùng hài cốt (bài tiếng Đức).
- **Cha mẹ không được mời dự cưới**: theo bài tiếng Đức, họ chỉ được báo sau đám cưới và Virginia dường như chưa bao giờ gặp họ.
- **Giọng hát hỏng**: thời học với Mayr, cậu suýt bị loại khỏi ca đoàn vì một "tật ở cổ họng".

## Bối cảnh
Napoli dưới triều Bourbon có Teatro San Carlo, một trong những nhà hát lớn nhất châu Âu, do Barbaja điều hành, với kiểm duyệt khắt khe về đề tài. Năm 1837, dịch tả cướp đi vợ ông. Đến thập niên 1840, Donizetti đi lại liên tục giữa Napoli, Roma, Milano, Paris và Viên, nơi triều đình Habsburg phong ông làm nhạc sĩ cung đình.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Gaetano Donizetti', 'https://en.wikipedia.org/wiki/Gaetano_Donizetti'],
      ['Wikipedia (tiếng Đức): Gaetano Donizetti', 'https://de.wikipedia.org/wiki/Gaetano_Donizetti'],
    ],
  },
  'Vincenzo Bellini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 3/11/1801 | Sinh ở Catania, Sicilia, con cả trong bảy con; ông nội và cha đều là nhạc sĩ |
| 5/1819 | Được tỉnh Catania cấp học bổng bốn năm vào Real Collegio di Musica ở Napoli |
| 1822–1823 | Học lớp của Niccolò Zingarelli |
| 1825 | Opera đầu tay *Adelson e Salvini* ở trường; sau đó *Bianca e Fernando* |
| 1827 | *Il pirata* ở La Scala, bắt đầu hợp tác với nhà viết lời Felice Romani |
| 1830 | *I Capuleti e i Montecchi* ở La Fenice |
| 6/3/1831 | *La sonnambula* ở Teatro Carcano, Milano |
| 26/12/1831 | *Norma* ở La Scala, với Giuditta Pasta |
| trước 1835 | Sang London rồi định cư ở Paris |
| 24/1/1835 | *I puritani* ra mắt ở Théâtre-Italien, Paris; được phong Bắc đẩu Bội tinh |
| 23/9/1835 | Mất ở Puteaux gần Paris, 33 tuổi |
| 1876 | Hài cốt đưa về nhà thờ chính tòa Catania |

## Âm nhạc và đóng góp
Bellini nổi tiếng với những giai điệu dài, uốn lượn, như *Casta diva* trong *Norma*. Verdi khen giai điệu ấy là vô song; Wagner, vốn ít khen ai, say mê cách Bellini gắn nhạc với lời. Chopin và Liszt cũng ngưỡng mộ ông, còn Berlioz thì không. Ông viết chậm, đòi lời thơ thật tốt: Romani viết lời cho sáu vở. Lối hát kéo dài hơi, trang sức tinh tế ấy được Chopin ngưỡng mộ; xem thêm [[rubato]]. Các vở *Il pirata*, *I Capuleti*, *La sonnambula*, *Norma*, *I puritani* vẫn diễn thường xuyên; xem [[opera]].

## Giai thoại và điều chưa chắc
- **"Fiasco! Fiasco! Fiasco trọng thể!"**: Bellini viết câu này cho bạn là Florimo ngay đêm ra mắt *Norma*. Wikipedia tiếng Anh nói vở thành công đêm ấy "chỉ nhờ Pasta", và về sau mới trở thành kinh điển.
- **Thần đồng 18 tháng tuổi**: chuyện hát được aria lúc 18 tháng, học lý thuyết lúc hai tuổi chỉ có trong một bản tiểu sử viết tay khuyết danh ở bảo tàng Catania. Khi vào nhạc viện Napoli, ông lại bị xếp lớp sơ cấp và chưa bao giờ chơi piano giỏi.
- **Kình địch với Donizetti và Rossini**: chủ yếu là mối nghi của chính Bellini trong thư từ (ông nói đến "thù hằn" của Rossini). Thực tế Rossini lo toàn bộ tang lễ và di sản cho ông.
- **Cái chết**: ông ốm ở Puteaux, tại nhà một người bạn Anh. Khám nghiệm tử thi theo lệnh vua cho thấy viêm ruột kết cấp kèm áp xe gan.

## Bối cảnh
Napoli đầu thế kỷ 19 có nhạc viện kiểu quân sự, học trò mặc đồng phục; học trò giỏi được đi xem opera ở San Carlo vào thứ Năm và Chủ nhật. Milano với La Scala là nơi Bellini thành danh và giao du với giới thượng lưu, có cả mối tình với Giuditta Turina. Paris thập niên 1830 là nơi người Ý tranh suất ở Théâtre-Italien.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Vincenzo Bellini', 'https://en.wikipedia.org/wiki/Vincenzo_Bellini'],
      ['Wikipedia (tiếng Đức): Vincenzo Bellini', 'https://de.wikipedia.org/wiki/Vincenzo_Bellini'],
    ],
  },
  'Hector Berlioz': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 11/12/1803 | Sinh ở La Côte-Saint-André (Isère); cha là bác sĩ |
| 9/1821 | Lên Paris học y theo ý cha; lén chép tổng phổ Gluck ở thư viện Nhạc viện |
| 1824 | Tốt nghiệp trường y rồi bỏ nghề y |
| 8/1826 | Vào Nhạc viện Paris, học Le Sueur và Reicha |
| 11/9/1827 | Xem Harriet Smithson đóng Ophelia trong *Hamlet* và say mê cô |
| 1830 | Đoạt Giải Roma với cantata *La mort de Sardanapale*; đính hôn với Marie "Camille" Moke |
| 5/12/1830 | *Symphonie fantastique* ra mắt ở Nhạc viện Paris, Habeneck chỉ huy; Liszt có mặt |
| 1831–1832 | Ở Villa Medici, Roma; *Le retour à la vie* (sau đổi tên *Lélio*) |
| 3/10/1833 | Cưới Harriet Smithson ở Đại sứ quán Anh, Paris (Liszt làm chứng) |
| 11/1834 | *Harold en Italie*, viết theo đặt hàng của Paganini |
| 12/1837 | *Grande messe des morts* (Requiem) ở Les Invalides |
| 1838 | *Benvenuto Cellini* thất bại; 12/1838 Paganini tặng 20.000 franc |
| 1839 | Giao hưởng kịch *Roméo et Juliette* |
| 1843–1844 | *Khảo luận phối khí* |
| 1846 | *La damnation de Faust* thất bại |
| 1854 | Harriet mất |
| 11/1863 | Ba hồi cuối *Les Troyens* diễn ở Théâtre-Lyrique, bị cắt nhiều |
| 8/3/1869 | Mất ở nhà riêng phố Calais, Paris |

## Âm nhạc và đóng góp
Berlioz không học piano, chỉ chơi đàn rất vụng. Ông nói điều này giúp ông nghĩ thẳng bằng dàn nhạc. *Symphonie fantastique* là [[giao-huong]] có chương trình: một nghệ sĩ thất tình uống thuốc phiện và mơ thấy người yêu, hiện thành một giai điệu trở lại suốt năm chương, gọi là **idée fixe**. Chữ này vốn là một thuật ngữ y học thời đó. Đây là tiền thân của leitmotif Wagner và của [[tho-giao-huong]] Liszt. Berlioz phá khuôn thể loại: giao hưởng với viola độc tấu, "giao hưởng kịch", "truyền kỳ kịch". *Khảo luận phối khí* ảnh hưởng suốt thế kỷ 19 và 20. Liszt chuyển soạn toàn bộ *Symphonie fantastique* cho piano để nhiều người được nghe. Xem [[triet-hoc-lang-man-ve-am-nhac]].

## Giai thoại và điều chưa chắc
- **Định giết người yêu cũ (1831)**: có thật trong lời kể của các nguồn. Nghe tin Camille Moke bỏ ông để lấy Camille Pleyel, Berlioz bỏ Roma, sắm súng, thuốc độc và đồ cải trang để giết cô, Pleyel và mẹ cô. Đến Nice, ông đổi ý. Về sau ông gọi mấy tuần ở Nice là quãng hạnh phúc nhất đời. Phần lớn chi tiết đến từ *Mémoires* của chính ông, nên cũng mang màu tự kịch hoá.
- **Tuổi Camille Moke**: Wikipedia tiếng Anh ghi 19, tiếng Đức ghi 18.
- **Smithson ở buổi ra mắt**: cô không có mặt ngày 5/12/1830. Cô chỉ nghe bản sửa năm 1832 cùng *Lélio*, và sau buổi ấy hai người mới gặp nhau.
- **Paganini và *Harold***: Paganini chê phần viola "không đủ việc để làm" và chưa bao giờ chơi tác phẩm này. Ông chỉ nghe nó năm 1838, quỳ xuống hôn tay Berlioz, vài ngày sau gửi 20.000 franc. Bài tiếng Đức ghi tiền được gửi qua con trai Achille.
- **Năm in *Khảo luận***: chính Wikipedia tiếng Anh ghi cả 1843 lẫn 1844.
- **Tình mối đầu Estelle**: *Mémoires* nói ông chỉ gặp Estelle Dubœuf mùa hè 1815. Bài tiếng Đức cho rằng nhiều khả năng ông gặp cô nhiều lần.

## Bối cảnh
Paris sau Cách mạng tháng Bảy 1830 là thủ đô của nghệ thuật Lãng mạn. Khán phòng buổi diễn lại năm 1832 có Liszt, Chopin, Paganini, Dumas, Gautier, Heine, Hugo, George Sand. Nhạc viện Paris với Habeneck là nơi duy nhất có dàn nhạc đủ sức chơi Beethoven. Để sống, Berlioz viết phê bình cho *Journal des débats* và làm thủ thư Nhạc viện.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Hector Berlioz', 'https://en.wikipedia.org/wiki/Hector_Berlioz'],
      ['Wikipedia (tiếng Đức): Hector Berlioz', 'https://de.wikipedia.org/wiki/Hector_Berlioz'],
      ['Wikipedia (tiếng Anh): Symphonie fantastique', 'https://en.wikipedia.org/wiki/Symphonie_fantastique'],
    ],
  },
  'Fanny Mendelssohn': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 14/11/1805 | Sinh ở Hamburg, con cả trong bốn người con của chủ ngân hàng Abraham Mendelssohn |
| 1816 | Zelter viết cho Goethe rằng cô con gái lớn "có thể chơi cho ông nghe Sebastian Bach" |
| 1819 | Thuộc lòng và đàn cả 24 prelude trong *Bình quân luật* của Bach mừng sinh nhật cha; bắt đầu học Zelter |
| 1820 | Cùng Felix vào Sing-Akademie Berlin |
| 1821 | Abraham lập các buổi *Sonntagsmusik* (nhạc Chủ nhật) tại nhà |
| 1826–1827 | Một số Lied của cô được in dưới tên Felix (Op. 8 và Op. 9) |
| 1829 | Cưới họa sĩ Wilhelm Hensel |
| 1831 | Tự điều hành lại *Sonntagsmusik* ở Leipziger Straße 3 |
| 1839–1840 | Du lịch Ý; quen những người đoạt Giải Roma, trong đó có Charles Gounod |
| 1841 | Liên khúc piano *Das Jahr* (Năm tháng) |
| 1846 | In tập Lied đầu tiên dưới tên mình, Op. 1 |
| 14/5/1847 | Mất ở Berlin vì đột quỵ khi tập cantata *Die erste Walpurgisnacht* của Felix |

## Âm nhạc và đóng góp
Fanny để lại hơn 450 tác phẩm: hơn 250 Lied, hơn 125 bản piano, một tứ tấu dây, tứ tấu piano, Tam tấu piano Op. 11, một overture, bốn cantata. Phần lớn chưa in khi bà còn sống. *Das Jahr* gồm các bản piano cho từng tháng trong năm, phác từ những nơi bà yêu thích ở Ý; đó là một chu kỳ [[tieu-pham-piano]] có tầm vóc lớn. Bà tự nhận viết [[lied]] hợp với mình nhất. Felix gọi bà là "Minerva" và hầu như mọi tác phẩm đều đưa bà góp ý trước.

## Giai thoại và điều chưa chắc
- **Nữ hoàng Victoria hát nhầm (1842)**: có thật theo thư từ gia đình. Ở điện Buckingham, Nữ hoàng định hát tặng Felix bài bà thích nhất của ông, *Italien*. Felix phải thú nhận bài ấy là của Fanny.
- **Sonate Phục sinh (1828)**: bản thảo thất lạc, khi tìm lại năm 1970 bị gán cho Felix; đến 2010 phân tích tài liệu mới trả về Fanny.
- **Cha cấm sáng tác**: cách nói này quá đà. Abraham viết rằng âm nhạc sẽ là nghề của Felix, còn với Fanny "chỉ có thể và phải là một vật trang sức". Felix ủng hộ riêng tư nhưng ngần ngại việc in. Hensel, chồng bà, thì ủng hộ.
- **Hồi ký gia đình**: bộ sử gia đình do con trai Sebastian Hensel biên soạn bị một số nhà nghiên cứu cho là cố tô vẽ bà như người không có tham vọng ngoài phạm vi gia đình.
- **Một lần chỉ đạo buổi tập**: năm 1838, bà góp ý tốc độ trong buổi tập *Paulus* ở Berlin, và nhạc trưởng Rungenhagen sau đó hỏi ý bà mọi chi tiết.

## Bối cảnh
Nhà Mendelssohn ở Leipziger Straße 3, Berlin có một sảnh vườn, nơi các buổi *Sonntagsmusik* nửa công khai diễn Bach, Gluck, Beethoven và nhạc của hai chị em, có khi cả trong vườn. Đó là "sân khấu" chính của Fanny, vì phụ nữ thượng lưu thời ấy hiếm khi được biểu diễn công khai.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Fanny Mendelssohn', 'https://en.wikipedia.org/wiki/Fanny_Mendelssohn'],
      ['Wikipedia (tiếng Đức): Fanny Hensel', 'https://de.wikipedia.org/wiki/Fanny_Hensel'],
    ],
  },
  'Felix Mendelssohn': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 3/2/1809 | Sinh ở Hamburg; ông nội là triết gia Do Thái Moses Mendelssohn |
| 21/3/1816 | Rửa tội theo giáo hội Cải cách tại nhà ở Berlin |
| 1819 | Học đối âm và sáng tác với Carl Friedrich Zelter |
| 1821 | Zelter đưa cậu đến gặp Goethe |
| 1825 | *Bát tấu dây* Mi giáng trưởng, lúc 16 tuổi |
| 1826 | Overture *Giấc mộng đêm hè* |
| 11/3/1829 | Chỉ huy *Thương khó theo Thánh Matthew* của Bach ở Sing-Akademie Berlin, cùng diễn viên Eduard Devrient; diễn lại 21/3 (sinh nhật Bach), và Zelter chỉ huy buổi thứ ba ngày Thứ Sáu Tuần Thánh 17/4 |
| 1829 | Lần đầu sang Anh, chuyến đầu trong mười chuyến; Scotland gợi ý *Hebrides* và Giao hưởng "Scotland" |
| 1/1833 | Thua Rungenhagen trong cuộc bầu giám đốc Sing-Akademie |
| 1833 | Giám đốc âm nhạc Düsseldorf |
| 4/10/1835 | Buổi hòa nhạc đầu tiên với tư cách nhạc trưởng dàn nhạc Gewandhaus, Leipzig |
| 28/3/1837 | Cưới Cécile Jeanrenaud |
| 21/3/1839 | Ra mắt Giao hưởng Đô trưởng "Lớn" của Schubert, bản thảo do Schumann tìm thấy |
| 3/4/1843 | Khai giảng Nhạc viện Leipzig, nhạc viện đầu tiên của Đức |
| 26/8/1846 | Oratorio *Elias* ra mắt ở Birmingham |
| 4/11/1847 | Mất ở Leipzig sau nhiều cơn đột quỵ, sáu tháng sau chị Fanny |

## Âm nhạc và đóng góp
Mendelssohn kết hợp cảm xúc Lãng mạn với hình thức Cổ điển trong sáng: *Bát tấu*, *Giấc mộng đêm hè* (overture hòa nhạc đời đầu, *Hành khúc đám cưới* viết năm 1843), Concerto violin Mi thứ, Giao hưởng "Ý" và "Scotland", *Bài ca không lời* (một dạng [[tieu-pham-piano]]), [[oratorio-cantata-passion]] *Paulus* và *Elias*. Ông góp phần làm nên kiểu nhạc trưởng hiện đại, tức người chuyên chỉ huy chứ không chỉ là nhạc công dẫn dàn. Ông dựng nền "nhạc lịch sử" khi diễn lại Bach, Handel và Schubert, quyên tiền dựng tượng đài Bach ở Leipzig (1843). Nhạc viện Leipzig do ông lập, có Moscheles và Schumann giảng dạy, trở thành thành trì của khuynh hướng bảo thủ trong cuộc tranh luận với Liszt và Wagner.

## Giai thoại và điều chưa chắc
- **"Buổi diễn đầu tiên kể từ khi Bach mất"**: là cách nói phổ biến nhưng không chính xác. Classical Music (BBC) ghi tác phẩm vẫn được diễn lác đác ở nhà thờ Thomaskirche, Leipzig sau 1750; Wikipedia tiếng Anh viết thận trọng rằng nó chưa từng được nghe gần như trọn vẹn ở ngoài Leipzig cho đến 1829. Bản 1829 cũng không trọn vẹn: Mendelssohn cắt mười aria và sáu chorale, rút ngắn khoảng một nửa. Ca đoàn có 158 người, đông hơn nhiều so với thời Bach. Hơn 1.000 người không mua được vé.
- **"Một diễn viên và con trai một người Do Thái"**: Wikipedia tiếng Anh trích câu Mendelssohn nói rằng phải nhờ hai người như thế mới hồi sinh được bản nhạc Kitô giáo vĩ đại nhất. Người biên soạn chưa đối chiếu được câu này với thư tay gốc, nên chỉ coi là lời truyền lại.
- **Thua bầu ở Sing-Akademie (1833)**: Devrient cho rằng có yếu tố bài Do Thái. Đó là ý kiến của một người bạn thân, không phải kết luận.
- **Thư tình gửi Jenny Lind**: năm 2013, George Biddlecombe xác nhận quỹ học bổng Mendelssohn giữ tư liệu cho biết đã có những lá thư như vậy, nhưng chúng đã bị huỷ, nên nội dung không thể kiểm chứng.
- **Hình ảnh "luôn vui vẻ"**: chân dung này phần nhiều đến từ hồi ký gia đình của Sebastian Hensel. R. Larry Todd gọi đó là một "quá trình lý tưởng hoá".
- Wagner gửi Mendelssohn bản giao hưởng thời trẻ, và Mendelssohn làm mất tổng phổ, khiến Wagner bực. Năm 1850, Wagner công kích ông trong bài *Das Judenthum in der Musik*.

## Bối cảnh
Berlin thập niên 1820: nhà Mendelssohn là salon của giới trí thức; Felix nghe Hegel giảng ở đại học. Sing-Akademie của Zelter giữ kho bản thảo Bach do bà dì Sarah Levy hiến tặng. Leipzig thập niên 1830–1840 là thành phố thương mại và xuất bản. Dàn nhạc Gewandhaus dưới tay ông trở thành một trung tâm hòa nhạc của châu Âu; Nhạc viện khai giảng ngay trong các toà nhà của Gewandhaus.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Felix Mendelssohn', 'https://en.wikipedia.org/wiki/Felix_Mendelssohn'],
      ['Wikipedia (tiếng Đức): Felix Mendelssohn Bartholdy', 'https://de.wikipedia.org/wiki/Felix_Mendelssohn_Bartholdy'],
      ['Classical Music (BBC): How Mendelssohn helped bring Bach\'s St Matthew Passion back to life', 'https://www.classical-music.com/features/composers/how-mendelssohn-helped-bring-bachs-st-matthew-passion-back-to-life'],
      ['Wikipedia (tiếng Anh): St Matthew Passion', 'https://en.wikipedia.org/wiki/St_Matthew_Passion'],
    ],
  },
  'Franz Liszt': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 22/10/1811 | Sinh ở Doborján (nay Raiding, Áo), vương quốc Hungary |
| 1821–1823 | Học Czerny (miễn phí) và Salieri ở Viên |
| 13/4/1823 | Buổi diễn cuối ở Viên, gắn với truyền thuyết "nụ hôn thánh hiến" của Beethoven |
| 8/3/1824 | Ra mắt ở Paris; không vào được Nhạc viện Paris, học riêng Reicha và Paer |
| 1827 | Cha mất; ở Paris với mẹ, dạy đàn |
| 4/1832 | Nghe Paganini, quyết làm "Paganini của piano" |
| 1833 | Bắt đầu quan hệ với nữ bá tước Marie d'Agoult; ba con: Blandine, Cosima, Daniel |
| 31/3/1837 | "Đấu" với Thalberg ở salon công chúa Belgiojoso |
| 9/6/1840 | Buổi diễn ở Hanover Square Rooms, London: lần đầu chữ "recital" được dùng cho buổi diễn của ông |
| 27/12/1841 | Buổi diễn ở Sing-Akademie Berlin, mở đầu "Lisztomania" |
| 1847 | Gặp công chúa Carolyne zu Sayn-Wittgenstein ở Kiev; thôi lưu diễn |
| 7/1848 | Định cư ở Weimar, sống tại biệt thự Altenburg |
| 22/10/1861 | Đám cưới với Carolyne ở Roma bị Vatican chặn vào phút chót |
| 25/4 và 31/7/1865 | Nhận tonsure rồi bốn chức thánh nhỏ; được gọi là "Abbé Liszt" |
| 14/11/1875 | Học viện Âm nhạc Hoàng gia Budapest khai giảng, Liszt làm chủ tịch |
| 31/7/1886 | Mất ở Bayreuth trong mùa lễ hội Wagner; chôn ở đó theo ý Cosima |

## Âm nhạc và đóng góp
Liszt là nghệ sĩ piano lừng lẫy nhất thế kỷ 19. Ông được ghi công là người đầu tiên tổ chức buổi độc tấu (recital) theo nghĩa hiện đại. Ông cũng là người khởi xướng lớp học mẫu (masterclass). Ở Weimar, ông chỉ huy, dựng *Lohengrin* của Wagner, tổ chức các lễ hội Berlioz. Ông sáng tạo [[tho-giao-huong]]: các tác phẩm dàn nhạc một chương theo một ý thơ hay hội họa (*Les préludes*, *Tasso*, *Mazeppa*). Kèm theo là kỹ thuật biến đổi chủ đề, cũng dùng trong Sonata Si thứ. Tác phẩm piano gồm *Études d'exécution transcendante*, *Années de pèlerinage*, *Rhapsodie hongroise*, *La campanella*, và hàng trăm bản chuyển soạn (Schubert, Beethoven, opera) giúp phổ biến âm nhạc của người khác. Những đổi mới hòa âm cuối đời của ông được xem là đi trước Ấn tượng. Xem [[nghe-si-piano-the-ky-19]], [[lich-su-piano]].

## Giai thoại và điều chưa chắc
- **Nụ hôn của Beethoven (1823)**: Wikipedia tiếng Anh ghi Beethoven "được cho là" bước lên sân khấu hôn trán cậu bé; bài tiếng Đức gọi thẳng là "truyền thuyết". Chưa có chứng cứ chắc chắn Beethoven dự buổi ấy.
- **Bà con ngất xỉu**: Heine, người đặt chữ *Lisztomanie* (bài báo 25/4/1844), kể ông từng nghe chuyện các cơn ngất ở Berlin và nhún vai cho là hiện tượng của một nước Đức "thiếu tự do chính trị", cho đến khi tự xem Liszt ở Paris. Các chuyện giành găng tay, khăn tay, giữ bã cà phê, mẩu xì gà là lời kể đương thời, khó kiểm chứng từng vụ.
- **Paganini "biến đổi" Liszt**: thường được kể như một bước ngoặt đột ngột, nhưng Wikipedia tiếng Anh cho rằng nhiều khả năng ông đã làm lại kỹ thuật từ 1828–1832.
- **Ai thắng Thalberg**: Jules Janin viết "hai người thắng, không ai thua". Công chúa Belgiojoso nói "Thalberg là nghệ sĩ piano số một thế giới, Liszt là người duy nhất". Riêng Alan Walker cho rằng Liszt thắng rõ.
- **"Linh mục" Liszt**: ông chỉ nhận các chức nhỏ, chưa bao giờ làm linh mục.
- **Nguyên nhân cái chết**: chính thức là viêm phổi, nhưng có thể là đau tim.
- **Số thơ giao hưởng**: mười hai bản thời Weimar cộng *Von der Wiege bis zum Grabe* (1881–1882) thành mười ba. Một số lời chương trình đi kèm được người khác viết hộ.

## Bối cảnh
Paris thập niên 1830 cho Liszt các salon, Saint-Simon và Lamennais. Tám năm lưu diễn (1839–1847) đưa ông khắp châu Âu, tới tận Kiev, quyên tiền cho tượng Beethoven ở Bonn và cho nạn nhân vụ cháy lớn ở Hamburg năm 1842. Weimar, thành phố của Goethe và Schiller, thành trung tâm của "Trường phái Đức mới". Về già ông sống "ba nơi": Roma, Weimar, Budapest.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Franz Liszt', 'https://en.wikipedia.org/wiki/Franz_Liszt'],
      ['Wikipedia (tiếng Đức): Franz Liszt', 'https://de.wikipedia.org/wiki/Franz_Liszt'],
      ['Wikipedia (tiếng Anh): Lisztomania', 'https://en.wikipedia.org/wiki/Lisztomania'],
    ],
  },
  'Stephen Heller': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 15/5/1813 | Sinh ở Pest, Hungary, trong một gia đình Do Thái (Grove 1900 ghi 1815) |
| k. 1822 | Lúc chín tuổi chơi Concerto cho hai piano của Dussek với thầy Franz Brauer ở Pest |
| 1820s | Gửi sang Viên học Czerny nhưng không đủ tiền, chuyển sang học Anton Halm |
| k. 1828 | Thành công trong buổi diễn đầu tiên ở Viên, lúc 15 tuổi; cha dẫn đi lưu diễn Hungary, Ba Lan, Đức |
| 1830–1838 | Ốm ở Augsburg, ở lại đó, sống trong nhà nhà văn – nhà ngoại giao August von Eichthal |
| 1838 | Sang Paris, giao du với Chopin, Berlioz, Liszt |
| 1850 | Lần đầu sang Anh (theo phụ lục Grove) |
| 3/5/1862 | Chơi Concerto Mi giáng trưởng cho hai piano của Mozart với Charles Hallé ở Crystal Palace, London |
| 14/1/1888 | Mất ở Paris |

## Âm nhạc và đóng góp
Heller viết khoảng 150 tác phẩm, gần như toàn cho piano: [[tieu-pham-piano]] có tên gợi hình (*Promenades d'un solitaire* Op. 78, *Nuits blanches*, *Voyage autour de ma chambre*), fantasia trên opera, chuyển soạn Lied của Schubert (giúp Schubert được biết ở Pháp). Ông nổi tiếng nhất với các tuyển tập étude giàu chất hát: 25 Études Op. 45, 30 Études Op. 46, 25 Études Op. 47. Đến nay chúng vẫn được dùng để dạy đàn. Phong cách gần Schumann và Mendelssohn; theo bài tiếng Đức, các tác phẩm muộn đã báo trước Ấn tượng Pháp. Ông dạy Isidor Philipp, sau này là trưởng khoa piano Nhạc viện Paris.

## Giai thoại và điều chưa chắc
- **Năm sinh**: Wikipedia tiếng Anh và tiếng Đức ghi 1813; từ điển Grove bản đầu (1900) ghi 15/5/1815. Nguồn không giải thích chỗ lệch.
- **Học trò Czerny**: thường bị chép nhầm. Ông được gửi đến Czerny nhưng không trả nổi học phí nên học Halm.
- **Bước ngoặt**: bài tiếng Đức nói ông được biết đến nhờ Liszt chơi étude hòa nhạc *La chasse* Op. 29 ở Paris. Schumann cũng viết bình luận tốt về một sonata của ông.
- **Ít biểu diễn**: Grove nói ở Paris ông hiếm khi ra sân khấu, chủ yếu sống bằng dạy và sáng tác, và được giới yêu nhạc có học ở Pháp, Anh mến chuộng chừng 25 năm.

## Bối cảnh
Augsburg thập niên 1830 là chốn ẩn của một thần đồng kiệt sức: ông sống trong nhà Eichthal, vợ ông này là nghệ sĩ harp Elise Krings. Paris từ 1838 là thị trường nhạc salon và étude cho người chơi nghiệp dư. Heller sống ở đó suốt nửa sau cuộc đời, cũng là thời Chopin, Liszt, Berlioz hoạt động.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Stephen Heller', 'https://en.wikipedia.org/wiki/Stephen_Heller'],
      ['Wikipedia (tiếng Đức): Stephen Heller', 'https://de.wikipedia.org/wiki/Stephen_Heller'],
      ['Grove, A Dictionary of Music and Musicians (1900), Wikisource: Heller, Stephen', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Heller,_Stephen'],
    ],
  },
  'Charles-Valentin Alkan': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 30/11/1813 | Sinh tên Charles-Valentin Morhange ở số 1 rue de Braque, Paris; các con lấy tên cha, Alkan, làm họ |
| 6/10/1820 | Thi vào Nhạc viện Paris lúc gần bảy tuổi; giám khảo ghi "khả năng kinh ngạc" |
| 1827 | Lưu diễn ở Brussels với violin Lambert Massart |
| 1832 | Diễn Concerto da camera số 1 ở Nhạc viện; vào hội Enfants d'Apollon |
| 1837–1848 | Sống ở Square d'Orléans, hàng xóm của Chopin và George Sand |
| 23/4/1837 | Tham gia buổi chia tay Paris của Liszt |
| 1839–1844 | Rút khỏi sân khấu sáu năm, trùng thời gian người con trai (được cho là con ông) Élie-Miriam Delaborde ra đời |
| 1848 | Hụt chức trưởng khoa piano Nhạc viện vào tay Marmontel; bắt đầu sống ẩn dật |
| 1849 | Chopin hấp hối gửi lại cho ông bản phương pháp piano dở dang |
| 1857 | *12 Études dans tous les tons mineurs* Op. 39 |
| 1873 | Loạt sáu *Petits concerts* ở phòng trưng bày Érard |
| 29/3/1888 | Mất ở Paris, chôn ở nghĩa trang Montmartre |

## Âm nhạc và đóng góp
Alkan viết gần như chỉ cho đàn phím, với độ khó thuộc loại cao nhất thế kỷ 19. Op. 39 chứa cả một *Giao hưởng cho piano solo* (số 4–7) và một *Concerto cho piano solo*. *Grande sonate "Les quatre âges"* Op. 33 vẽ bốn tuổi đời người; có đoạn viết tới mười một bè. Ông còn là bậc thầy piano pédalier (piano có bàn đạp kiểu organ), viết nhạc "cho organ hay piano pédalier". Sau khi ông mất, nhạc ông bị quên, chỉ còn Busoni, Egon Petri, Sorabji bênh vực. Xem [[nghe-si-piano-the-ky-19]].

## Giai thoại và điều chưa chắc
- **Chết vì tủ sách đổ**: Wikipedia tiếng Anh gọi đây là truyền thuyết dai dẳng nhưng vô căn cứ: ông với cuốn Talmud trên kệ cao và tủ đổ đè. Chuyện do pianist Isidor Philipp lan truyền. Hugh Macdonald dẫn thư đương thời của một học trò: Alkan được tìm thấy nằm trong bếp, dưới một cái giá treo áo – ô nặng, sau khi người gác cổng nghe tiếng rên. Truyền thuyết có thể bắt nguồn từ chuyện kể về một giáo sĩ Do Thái ở Metz, quê tổ nhà Alkan.
- **Delaborde là con ông**: Alkan không nhận cũng không chối. Người đương thời mặc nhiên coi là vậy.
- **Ẩn sĩ**: ông không hoàn toàn khép cửa. Năm 1880, Frederick Niecks bị người gác cổng đuổi về, nhưng vài ngày sau gặp ông ở Érard và được tiếp rất thân mật.
- **Vụ 1848**: Alkan viết cho George Sand gọi việc bổ nhiệm Marmontel là "đáng xấu hổ nhất". Bài tiếng Đức chỉ nói "có lẽ" do mưu đồ chính trị.

## Bối cảnh
Square d'Orléans là khu nhà quanh một sân trong ở Paris, nơi Chopin, George Sand, Dumas, vũ nữ Taglioni cùng sống, nên là phòng khách nghệ thuật của Paris Lãng mạn. Gia đình Alkan thuộc cộng đồng Do Thái gốc vùng Metz ở khu Marais; cha ông mở trường nhạc tư cho trẻ em. Về già, Alkan đọc Talmud và dịch lại Kinh Thánh sang tiếng Pháp.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Charles-Valentin Alkan', 'https://en.wikipedia.org/wiki/Charles-Valentin_Alkan'],
      ['Wikipedia (tiếng Đức): Charles-Valentin Alkan', 'https://de.wikipedia.org/wiki/Charles-Valentin_Alkan'],
    ],
  },
  'Clara Schumann': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 13/9/1819 | Sinh ở Leipzig; cha Friedrich Wieck và mẹ Mariane đều dạy piano |
| 1825 | Cha mẹ ly hôn; Clara ở với cha, học mỗi ngày một giờ |
| 20 hay 28/10/1828 | Lần đầu chơi ở Gewandhaus Leipzig (bài tiếng Đức ghi 20/10, bài tiếng Anh ghi 28/10) |
| 8/11/1830 | Buổi hòa nhạc riêng đầu tiên ở Gewandhaus |
| 9/1831–4/1832 | Lưu diễn Paris cùng cha; chơi cho Goethe ở Weimar; dự buổi ra mắt Paris của Chopin |
| 1835 | Diễn Concerto piano La thứ của mình ở Gewandhaus, Mendelssohn chỉ huy |
| 12/1837–4/1838 | Loạt độc tấu ở Viên; 15/3/1838 được phong "Nghệ sĩ thính phòng hoàng gia" |
| 12/9/1840 | Cưới Robert Schumann sau khi kiện cha ra toà, một ngày trước khi tròn 21 tuổi |
| 4/12/1845 | Ra mắt Concerto piano của Robert ở Dresden |
| 1846 | Tam tấu piano Sol thứ Op. 17 |
| 2/1854 | Robert suy sụp tâm thần, vào nhà thương Endenich; Brahms ở bên gia đình |
| 29/7/1856 | Robert mất |
| 1878 | Giáo sư piano đầu tiên của Nhạc viện Hoch, Frankfurt |
| 12/3/1891 | Buổi diễn công khai cuối cùng, ở Frankfurt |
| 20/5/1896 | Mất ở Frankfurt sau cơn đột quỵ ngày 26/3; chôn cạnh Robert ở Bonn |

## Âm nhạc và đóng góp
Sự nghiệp biểu diễn của Clara kéo dài 61 năm. Bà thay đổi chương trình độc tấu: bớt những bản phô trương ngón, thêm Bach, Beethoven, Chopin, Schumann, Brahms. Bà ra mắt nhiều tác phẩm của chồng và của Brahms. Bà là một trong những người đầu tiên chơi thuộc lòng, góp phần biến điều đó thành chuẩn mực của [[nghe-si-piano-the-ky-19]]. Tác phẩm của bà gồm Concerto piano La thứ Op. 7 ([[hinh-thuc-concerto]]), Tam tấu Op. 17, *Ba Romance* cho violin và piano, biến tấu trên chủ đề của Robert, nhiều [[lied]] và [[tieu-pham-piano]]. Sau khi Robert mất, bà nuôi bảy người con còn sống bằng lưu diễn, thường cùng Joseph Joachim. Từ thập niên 1960, âm nhạc của bà được tái khám phá.

## Giai thoại và điều chưa chắc
- **Người đầu tiên chơi thuộc lòng**: các nguồn viết thận trọng "một trong những người đầu tiên". Wieck dạy con chơi theo tai và học thuộc, và báo chí ghi nhận bà chơi thuộc từ năm 13 tuổi như một điều lạ.
- **Clara và Brahms**: thư Brahms cho thấy tình cảm sâu đậm, nhưng không có bằng chứng về một mối tình. Bà đã đốt nhiều thư theo yêu cầu của Brahms, cho đến khi con gái Marie can.
- **"Đàn bà không nên mong sáng tác"**: câu bà viết trong nhật ký có thật. Câu ấy cần đọc trong hoàn cảnh: bà vừa nuôi con, vừa lưu diễn, vừa là vợ một nhà soạn nhạc đang lên, chứ không phải một tuyên bố lý thuyết.
- **Không được thăm chồng**: suốt hai năm Robert ở Endenich, bà không được phép vào thăm, trong khi Brahms đến thường xuyên.
- **Tờ 100 Mác**: chân dung bà (in đá năm 1835) in trên tờ 100 Mác Đức từ 1989 đến 2002.

## Bối cảnh
Leipzig thập niên 1830 là thành phố của Gewandhaus, nhà xuất bản và tờ *Neue Zeitschrift für Musik* của Robert. Viên năm 1838 rơi vào "cơn sốt Clara Wieck": Grillparzer làm thơ sau khi nghe bà chơi *Appassionata*. Về già bà dạy ở Frankfurt, học trò từ nhiều nước kéo đến học.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Clara Schumann', 'https://en.wikipedia.org/wiki/Clara_Schumann'],
      ['Wikipedia (tiếng Đức): Clara Schumann', 'https://de.wikipedia.org/wiki/Clara_Schumann'],
    ],
  },
}

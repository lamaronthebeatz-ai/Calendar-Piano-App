import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Baroque sớm (Ý và Đức thế kỷ 17), nguồn trong refs. Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_BAR_A: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Giulio Caccini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1551 | Sinh (thường ghi 8/10/1551), nhiều khả năng ở Roma; cha là thợ mộc, anh là nhà điêu khắc Giovanni Caccini |
| thập niên 1560 | Được Đại công tước Francesco de' Medici đưa về Firenze học tiếp sau khi đã học đàn lute, viol và hạc cầm ở Roma |
| trước 1579 | Hát giọng tenor tại triều Medici, biểu diễn trong đám cưới, lễ nghi quốc gia và các *intermedio* |
| 1592 | Sang Roma làm thư ký cho bá tước Bardi |
| 1600 | Viết nhạc cho *Il rapimento di Cefalo* và hợp tác với Peri trong *Euridice* |
| 1602 | Xuất bản *Le nuove musiche* (lời đề tặng ghi tháng 2/1601 theo lịch Firenze) |
| 1614 | Xuất bản tập *Le nuove musiche* thứ hai |
| 1618 | Mất ở Firenze, chôn ở Santissima Annunziata (10/12/1618) |

## Âm nhạc và đóng góp
Caccini là một trong những người định hình lối độc xướng có bè trầm (monody): một giọng hát cùng nền hoà âm đơn giản, đối lập với phức điệu cuối Phục hưng ([[thoi-ky-phuc-hung]]). Ông thuộc nhóm Camerata ở nhà bá tước Bardi, nơi người ta tìm cách khôi phục kịch nhạc Hy Lạp cổ. *Le nuove musiche* gom madrigal và aria độc xướng kèm [[bass-so]], trong đó có *Amarilli, mia bella*. Ông còn là thầy dạy hát cho nhiều ca sĩ, trong đó có Giovanni Gualberto Magli, người hát trong buổi diễn đầu của *L'Orfeo* của Monteverdi. Không còn bản nhạc đa bè nào của ông, dù tài liệu cho thấy ông từng dính đến nhạc nhiều dàn hợp xướng.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Roma chỉ là điều "được cho là".
- **Tranh giành ưu tiên**: Domenico Melli in tập độc xướng ở Venezia vào tháng 3/1602, sớm hơn Caccini; Wikipedia cho rằng cách ghi ngày đề tặng và lời tựa của ông nhằm tự nhận mình là người khai sinh phong cách này.
- **Tính cách**: nguồn nhấn mạnh ông ganh tị và cạnh tranh, kể cả chuyện ông chạy đua in *Euridice* trước bản của Peri và cấm ca sĩ của mình tham gia vở của Peri; đây là lời kể của một nguồn, người biên soạn chưa đối chiếu được tài liệu gốc.
- **Ave Maria "của Caccini"**: bản nổi tiếng thực ra do Vladimir Vavilov viết, không phải ông.

## Bối cảnh
Firenze cuối thế kỷ 16 là nơi triều Medici dựng những *intermedio* công phu cho đám cưới và quốc lễ, được xem là tiền thân của opera. Nhóm Camerata họp ở nhà bá tước Bardi để bàn chuyện đưa lời thơ lên trước nhạc. Cùng với Venezia, Firenze là trung tâm tiến bộ nhất châu Âu quanh năm 1600.
`,
    refs: [
      ['Wikipedia — Giulio Caccini', 'https://en.wikipedia.org/wiki/Giulio_Caccini'],
    ],
  },

  'Jacopo Peri': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1561 | Sinh 20/8, ở Roma hoặc Firenze trong một gia đình trung lưu |
| thời trẻ | Hát ở tu viện Servite Santissima Annunziata, Firenze; có thể học với Cristofano Malvezzi |
| k. 9/1588 | Vào triều Medici làm ca sĩ tenor và nhạc công đàn phím, về sau là nhà soạn nhạc |
| k. 1597 | Cùng nhà thơ Ottavio Rinuccini làm *Dafne*, thường được xem là opera đầu tiên, nay phần lớn thất truyền |
| 6/10/1600 | *Euridice* công diễn tại Palazzo Pitti nhân đám cưới Marie de' Medici và Henri IV |
| 1628 | Viết *La Flora* cùng Marco da Gagliano |
| 12/8/1633 | Mất ở Firenze, thọ 71 tuổi, chôn ở Santa Maria Novella |

## Âm nhạc và đóng góp
*Euridice* là vở [[opera]] sớm nhất còn lưu giữ trọn vẹn. Peri đưa vào lối recitative để đẩy hành động đi giữa các aria và hợp xướng, dựa trên thử nghiệm độc xướng của Camerata Florence, nhóm hoạt động cùng người bảo trợ Jacopo Corsi. Về sau, phong cách opera của ông trông cũ kỹ so với lớp cải cách trẻ hơn như Monteverdi, dù ảnh hưởng của ông lên họ khá lớn. Ngày nay *Euridice* hiếm khi được dàn dựng, chủ yếu như một tư liệu lịch sử.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Roma hay Firenze chưa ngã ngũ; ông tự nói là Roma, và Wikipedia cho rằng có thể ông nói vậy vì lý do chính trị.
- **"Opera đầu tiên"**: danh hiệu của *Dafne* dựa trên chứng cứ hạn chế vì bản nhạc phần lớn mất.
- **Biệt danh *Il Zazzerino*** ("người tóc vàng") được ghi nhận, không có thêm chi tiết.
- Bài Wikipedia về ông bị gắn nhãn thiếu trích dẫn (7/2023), nên một số chi tiết kém chắc.

## Bối cảnh
Ngày 6/10/1600, cung Pitti ở Firenze tổ chức tiệc cưới cho Marie de' Medici và vua Pháp Henri IV, và *Euridice* được diễn trong dịp ấy. Tu viện Santissima Annunziata là nơi nhiều nhạc sĩ trẻ vào hát để tìm sự bảo trợ của nhà Medici.
`,
    refs: [
      ['Wikipedia — Jacopo Peri', 'https://en.wikipedia.org/wiki/Jacopo_Peri'],
    ],
  },

  'Claudio Monteverdi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1567 | Làm lễ rửa tội 15/5 ở Cremona, con một dược sĩ |
| 1582 | In tập motet đầu tay *Sacrae cantiunculae* ở Venezia, khoảng 15 tuổi; học trò của Marc'Antonio Ingegneri |
| 1590–91 | Vào phục vụ công tước Vincenzo I Gonzaga ở Mantova |
| 1599 | Cưới ca sĩ cung đình Claudia de Cattaneis |
| 1601 | Làm *maestro di cappella* ở Mantova |
| 1607 | *L'Orfeo* công diễn; vợ mất vào tháng 9 |
| 1610 | In *Vespro della Beata Vergine*, đề tặng giáo hoàng Paul V |
| 1612 | Bị cho thôi việc sau khi Vincenzo mất |
| 1613 | Làm *maestro di cappella* tại Nhà thờ San Marco, Venezia |
| 1637 | Nhà hát opera công cộng San Cassiano mở ở Venezia |
| 1640–43 | Viết *Il ritorno d'Ulisse in patria* và *L'incoronazione di Poppea* |
| 29/11/1643 | Mất ở Venezia, an táng ở nhà thờ Frari |

## Âm nhạc và đóng góp
Monteverdi bắc cầu giữa Phục hưng và [[thoi-ky-baroque]]. Ông viết chín tập madrigal ([[madrigal]]); tập thứ tám (1638) có các bản theo *stile concitato* mang đề tài chiến trận. Ba vở [[opera]] còn trọn vẹn là *L'Orfeo*, *Il ritorno d'Ulisse in patria* và *L'incoronazione di Poppea*; phần lớn sân khấu của ông thất lạc, riêng *L'Arianna* chỉ còn khúc than. Nhạc thánh có *Vespers* 1610 và *Messa et salmi* (1650) do Cavalli biên tập.

## Giai thoại và điều chưa chắc
- **Cuộc tranh luận Artusi**: từ 1600, lý thuyết gia Giovanni Maria Artusi chê hoà âm và điệu thức của ông mà không nêu tên; ông hứa viết luận văn bênh vực *seconda pratica* nhưng bản ấy không bao giờ xuất hiện (thư năm 1632 cho thấy ông còn làm một luận thuyết tên *Melodia*).
- **Tác giả *Poppea***: học giả còn tranh luận phần nào do Monteverdi viết, và nghi có dấu tay của Cavalli.
- **Học vấn thời trẻ**: tài liệu thiếu, nên chuyện ông hát ở ca đoàn nhà thờ Cremona hay học đại học chưa được xác nhận.
- **Hậu quả chiến tranh**: nhiều tác phẩm triều Mantova mất, có thể trong vụ cướp phá năm 1630.
- Nguồn còn ghi: ông từng bị cướp đường ở Sanguinetto (1613), mê giả kim thuật (thư 1625–26), và con trai bị Toà án Dị giáo bắt năm 1627.
- Ý nghĩa của *canto alla francese* mà ông mang từ Spa về còn bàn cãi.

## Bối cảnh
Ở Mantova, triều Gonzaga cho ông danh tiếng nhưng lương và lương hưu thất thường. Ở Venezia, ông chỉ huy khoảng 30 ca sĩ và sáu nhạc công của San Marco, nhận đơn đặt hàng từ giới bảo trợ và các triều đình nước ngoài, và có tự do về tiền bạc và chính trị hơn. Năm 1630 chiến tranh phá Mantova trong khi dịch hạch tràn vào Venezia.
`,
    refs: [
      ['Wikipedia — Claudio Monteverdi', 'https://en.wikipedia.org/wiki/Claudio_Monteverdi'],
    ],
  },

  'Salamone Rossi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1570 | Sinh ở Mantova (có thể 19/8); từng có thuyết là con của sử gia Azariah de' Rossi nhưng ông này không có con trai |
| 1587 | Được thuê làm nhạc sĩ cung đình Gonzaga ở Mantova |
| 1589 | In tập đầu: 19 canzonetta ba bè |
| 1600 | In những madrigal có bè trầm liên tục sớm nhất ở hai tập đầu trong năm tập madrigal, có tablature cho chitarrone |
| 1607–1622 | In bốn tập nhạc khí gồm sinfonia, gagliarda và sonata, trong đó có sonata trio sớm |
| 1623 | In *Ha-shirim asher li-Shlomo* ở Venezia, lời giới thiệu của Leon of Modena |
| 1628 | Kết thúc 41 năm phục vụ với tư cách trưởng dàn nhạc |
| k. 1630 | Mất |

## Âm nhạc và đóng góp
Rossi viết canzonetta, madrigal, sinfonia, gagliarda và sonata, và được ghi nhận trong những người đầu tiên viết sonata trio. *Ha-shirim asher li-Shlomo* là bộ nhạc phụng vụ Do Thái in sớm nhất thuộc loại này, đưa phức điệu kiểu Ý vào hội đường. Tên "Bài ca của Solomon" không chỉ Nhã ca trong Kinh Thánh, vốn không có trong tập, mà nhiều khả năng chơi chữ với tên ông (Shlomo).

## Giai thoại và điều chưa chắc
- **Năm sinh và mất**: năm sinh chỉ là "có lẽ"; cái chết không có tài liệu chính xác, nhiều khả năng xảy ra trong Chiến tranh kế vị Mantova, hoặc khi quân Áo cướp phá khu ghetto, hoặc trong đợt dịch hạch sau đó.
- **Không phải đeo huy hiệu vàng**: ông được miễn đeo huy hiệu vàng bắt buộc với người Do Thái ở Mantova, phản ánh địa vị ở cung đình.
- **Em gái Madama Europa**: được cho là hát trong *Il Ratto di Europa* (1608) và có thể là nữ ca sĩ opera chuyên nghiệp Do Thái đầu tiên; điều này chỉ là suy đoán.

## Bối cảnh
Triều Gonzaga thuê các nhà soạn nhạc như Monteverdi, Gastoldi, Wert, Viadana để làm nhạc cho tiệc, đám cưới, kịch và nghi lễ nhà nguyện. Rossi nhiều khả năng cộng tác với một nhóm kịch Do Thái, giữ vai trò đáng kể trong sân khấu Mantova ở ghetto, cộng đồng Kitô giáo và cung đình. Khu ghetto bị phá trong cuộc xâm lược của quân Áo.
`,
    refs: [
      ['Wikipedia — Salamone Rossi', 'https://en.wikipedia.org/wiki/Salamone_Rossi'],
    ],
  },

  'Girolamo Frescobaldi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 9/1583 | Sinh ở Ferrara (ngày chính xác chưa chắc: 9, 13 hay 15/9) |
| thời trẻ | Thần đồng, học với Luzzasco Luzzaschi ở Ferrara |
| 1607 | Là organ thủ ở Santa Maria in Trastevere, Roma (tháng 1–5); cùng đoàn tuỳ tùng của tổng giám mục Guido Bentivoglio sang Flanders, chuyến đi duy nhất ngoài nước Ý |
| 21/7/1608 | Được bầu làm organ thủ Thánh đường Thánh Phêrô, nhận việc 31/10 |
| 18/2/1613 | Cưới Orsola Travaglini |
| 1614–1615 | Lời mời từ Mantova không thành; tháng 4/1615 đã trở lại Roma |
| 1615 | In *Toccate e partite* |
| 22/11/1628 | Được nghỉ để vào phục vụ Medici ở Firenze |
| 4/1634 | Trở lại Roma theo lời triệu của nhà Barberini và giáo hoàng Urban VIII |
| 1635 | In *Fiori musicali* |
| 1/3/1643 | Mất sau khoảng 10 ngày bệnh, chôn ở Santi Apostoli |

## Âm nhạc và đóng góp
Frescobaldi là bậc thầy toccata, ricercar và canzona cho đàn phím, phục vụ ở [[organ-ong]] và [[dan-phim-co]]. *Aria detta la Frescobalda* (1627) là một trong những bộ biến tấu đầu tiên trên một chủ đề do tác giả tự soạn, và ông cho phép thay đổi nhịp độ ngay trong tác phẩm. *Fiori musicali* là tập phụng vụ duy nhất của ông, còn *Cento partite sopra passacagli* được nguồn xem là tác phẩm ấn tượng nhất. Bản chép tay *Fiori musicali* của J. S. Bach, ký và ghi năm 1714, cho thấy Bach học ông.

## Giai thoại và điều chưa chắc
- **Họ Frescobaldi ở Firenze**: không có chứng cứ liên hệ với dòng quý tộc cùng tên.
- **Đến Roma năm 1604?**: có báo cáo ghi năm này, nhưng chỉ xác nhận được từ 1607.
- **Con số "30.000 người nghe ông ở Thánh đường Thánh Phêrô"** là chuyện thường kể; bài Wikipedia tiếng Anh không có chi tiết này, nên người biên soạn chưa thấy nguồn xác nhận.
- **Bất hoà với bảo trợ**: ông xa cách Enzo Bentivoglio sau một chuyện tình với cô gái trẻ.
- Ghi chú trong Toccata IX: "Non senza fatiga si giunge al fine".

## Bối cảnh
Ferrara dưới triều Alfonso II d'Este đón Monteverdi, Dowland, Lassus, Merulo, Gesualdo. Luzzaschi là một trong số ít người chơi và soạn cho đàn archicembalo của Vicentino. Ở Roma, ông làm việc gắn với những dòng bảo trợ của giáo hội và hồng y Aldobrandini.
`,
    refs: [
      ['Wikipedia — Girolamo Frescobaldi', 'https://en.wikipedia.org/wiki/Girolamo_Frescobaldi'],
    ],
  },

  'Francesco Cavalli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 14/2/1602 | Sinh với tên Pietro Francesco Caletti-Bruni ở Crema, thuộc Cộng hoà Venezia |
| 1616 | Là ca sĩ soprano nhí ở San Marco, học với Monteverdi |
| 1639 | Làm organ thủ thứ hai ở San Marco; bắt đầu viết cho sân khấu với *Le nozze di Teti e di Peleo* |
| 1644 | *Ormindo* |
| 1649 | *Giasone* (5/1) |
| 1651 | *La Calisto* (28/11) |
| 1660–62 | Được triệu sang Paris: dựng lại *Xerse* (1660), *Ercole amante* (7/2/1662) |
| 1665 | Organ thủ thứ nhất San Marco |
| 1668 | *Maestro di cappella* San Marco |
| 14/1/1676 | Mất ở Venezia, 73 tuổi |

## Âm nhạc và đóng góp
Cavalli là nhà soạn [[opera]] hàng đầu ở Venezia giữa thế kỷ 17. Khác với các vở của Monteverdi cho dàn nhạc cung đình Mantova, bản nhạc của ông dùng dàn dây nhỏ và [[bass-so]] hợp với nhà hát công cộng. Ông có hơn ba mươi, thậm chí hơn bốn mươi hai vở được quy cho (nguồn ghi hai con số), trong đó điểm phổ 26 vở còn ở Thư viện Marciana. Nhạc thánh gồm các Magnificat theo lối nhiều dàn hợp xướng, tụng ca Đức Mẹ và một Requiem tám bè, nhiều khả năng dành cho tang lễ của chính ông.

## Giai thoại và điều chưa chắc
- **Tên Cavalli** đến từ người bảo trợ, quý tộc Venezia Federico Cavalli.
- **Quy tác giả**: biên niên của Cristoforo Ivanovich (1681) gán cho ông nhiều vở vô danh; Thomas Walker cho rằng bảy trường hợp, cùng hai trường hợp khác, đáng ngờ.
- Nhạc của một số vở như *Coriolano* và *Masenzio* đã mất; *Eliogabalo* soạn 1667 nhưng ghi nhận công diễn lần đầu mãi 11/1999.

## Bối cảnh
Hầu hết vở của ông ra mắt ở các nhà hát Venezia, nhất là San Cassiano, rồi Santi Giovanni e Paolo, Sant'Apollinare và San Moisè. *Ercole amante* được dựng ở Salle des Machines trong cung Tuileries, với nhạc múa của Lully.
`,
    refs: [
      ['Wikipedia — Francesco Cavalli', 'https://en.wikipedia.org/wiki/Francesco_Cavalli'],
    ],
  },

  'Giacomo Carissimi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1605 | Rửa tội 18/4, nhiều khả năng ở Marino gần Roma; ngày sinh không rõ; con út trong sáu người, cha là thợ đóng thùng |
| 10/1623 | Hát trong ca đoàn nhà thờ chính toà Tivoli; organ thủ ở đó 10/1624–10/1627 |
| 1628 | *Maestro di cappella* nhà thờ San Rufino ở Assisi; cùng năm nhận chức tương đương ở Sant'Apollinare, Roma, giữ đến khi mất |
| 1637 | Thụ phong linh mục |
| 1656 | Nữ hoàng Christina của Thụy Điển, khi đó ở Roma, bổ nhiệm ông *maestro di cappella del concerto di camera* |
| 12/1/1674 | Mất ở Roma |

## Âm nhạc và đóng góp
Carissimi giúp định hình oratorio tiếng Latin. *Jephte* (1648) có lẽ là tác phẩm nổi tiếng nhất; còn có *Jonas*, *Judicium Extremum*, *Dives Malus* và *Baltazar*. Ông cũng viết nhiều cantata và motet ([[motet]]). Phong cách ông ảnh hưởng đến Kerll và Charpentier.

## Giai thoại và điều chưa chắc
- **Học vấn thời trẻ** không được biết.
- **Chưa từng rời nước Ý**: nguồn chỉ nói ông "dường như" không đi đâu ngoài Ý.
- **Từ chối lời mời lớn**: dù có lời mời từ những nơi danh tiếng hơn, trong đó có việc kế nhiệm Monteverdi ở San Marco, ông ở lại Sant'Apollinare khoảng 46 năm.
- **Chân dung tính cách**: người kế nhiệm ở Collegium năm 1686 tả ông cao, gầy, tiết kiệm và hay u sầu; nguồn tự đánh dấu trích dẫn này chưa đầy đủ.
- **Pepys**: nhật ký ngày 22/7/1644 khen một bản của "Seignor Charissimi", thừa nhận bản ấy quá hay để ông phán xét.
- Lars Englund giả thuyết rằng sự quan tâm của Christina đến nhạc Carissimi nằm trong quá trình bà tự chuyển từ nữ vương Luther sang nữ hoàng Công giáo; đây chỉ là giả thuyết.

## Bối cảnh
Nhà thờ Sant'Apollinare ở Roma thuộc Collegium Germanicum, học viện đào tạo linh mục. Carissimi giữ chức nhạc trưởng ở đó gần nửa thế kỷ, trong khi giới cung đình Roma, kể cả nữ hoàng lưu vong Christina, tìm đến nhạc của ông.
`,
    refs: [
      ['Wikipedia — Giacomo Carissimi', 'https://en.wikipedia.org/wiki/Giacomo_Carissimi'],
    ],
  },

  'Barbara Strozzi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1619 | Sinh ở Venezia, rửa tội 6/8; mẹ được gọi là "La Greghetta" |
| k. 1635–36 | Nicolò Fontei in *Bizzarrie poetiche* khen giọng hát của bà |
| 1637 | Lúc 18 tuổi mang họ cha Strozzi |
| 1644 | Op. 1, *Il primo libro di madrigali*, đề tặng Vittoria della Rovere |
| 1651 | Op. 2, *Cantate, ariette e duetti* |
| 1655 | Op. 5, *Sacri musicali affetti*, tập nhạc thánh duy nhất còn biết |
| 1664 | Op. 8, *Arie a voce sola*, ấn phẩm cuối cùng còn biết |
| 11/11/1677 | Mất ở Padova, 58 tuổi, được cho là chôn ở Eremitani; không để di chúc |

## Âm nhạc và đóng góp
Bà in tám tập, gần như toàn nhạc thế tục cho giọng hát: madrigal, cantata, aria. Wikipedia nhận định bà có nhiều nhạc thế tục được in hơn bất kỳ nhà soạn nhạc nào cùng thời, điều mà nguồn gắn với việc bà làm việc không nhờ nhà thờ hay sự bảo trợ quý tộc ổn định. Lời thơ phần lớn lấy từ Marino. Các bản như *Lagrime mie* thuộc kiểu cantata độc xướng với bè trầm liên tục ([[bass-so]]) của [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Cha mẹ**: giấy rửa tội không ghi tên cha. Giulio Strozzi được cho là cha ruột nhưng ông gọi bà là con nuôi; mẹ có những tên khác nhau trong các nguồn (Isabella Griega, Isabella Garzoni), có thể là người hầu trong nhà ông.
- **Quan hệ với Giovanni Paolo Vidman**: bà được cho là tình nhân của quý tộc này, có con, nhưng số con ở các nguồn lệch nhau.
- **Lời cáo buộc cưỡng bức**: một lá thư viết sau khi bà mất nói bà bị Vidman cưỡng bức; Wikipedia ghi khả năng đây là câu chuyện bảo vệ danh dự, trong khi chứng cứ khác gợi ý sự ép buộc.
- **"Kỹ nữ"**: bài Wikipedia dùng từ "tình nhân", không dùng từ "kỹ nữ"; cách gọi này là diễn giải về sau.
- Bà được ghi cho vay tiền Vidman với lãi khoảng 10%.

## Bối cảnh
Ở Venezia, Giulio Strozzi lập Accademia degli Unisoni, nhánh của Accademia degli Incogniti, một học hội trí thức có ảnh hưởng chính trị. Hội họp trong nhà Strozzi, cho Barbara cơ hội hát và trình diễn bán công khai các tác phẩm của mình trước giới học giả và nghệ sĩ.
`,
    refs: [
      ['Wikipedia — Barbara Strozzi', 'https://en.wikipedia.org/wiki/Barbara_Strozzi'],
    ],
  },

  'Heinrich Schütz': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1585 | Sinh 18/10 (lịch cũ 8/10) ở Köstritz, con cả |
| 1590 | Gia đình dọn đến Weißenfels, cha mở quán trọ và sau làm thị trưởng |
| 1598 | Landgraf Moritz xứ Hessen-Kassel phát hiện giọng hát của cậu khi nghỉ đêm ở quán trọ |
| 8/1599 | Được đưa về triều Kassel để học |
| 1609–1612 | Học ở Venezia với Giovanni Gabrieli, người ông về sau gọi là thầy duy nhất |
| 1615 | Chuyển sang Dresden làm nhà soạn nhạc cho tuyển hầu Sachsen |
| 1619 | Cưới Magdalena Wildeck (mất 1625 sau khi sinh hai con gái); in *Psalmen Davids* |
| 1628 | Trở lại Venezia, có thể gặp Monteverdi |
| 1636 | *Musikalische Exequien* |
| 1648 | Chiến tranh Ba mươi năm kết thúc |
| 1664–66 | Christmas Story và các Passion theo Luca, Gioan, Matthêu |
| 6/11/1672 | Mất vì đột quỵ ở Dresden, 87 tuổi |

## Âm nhạc và đóng góp
Schütz hấp thụ lối nhiều dàn hợp xướng và concertato của Gabrieli, ảnh hưởng của Monteverdi, mà vẫn giữ đối vị kiểu Hà Lan. Ông đặt nền cho dàn nhạc triều đình Dresden (nay là Staatskapelle). *Musikalische Exequien* (1636) thường được gọi là bản Requiem tiếng Đức đầu tiên ([[thanh-le-va-requiem]]); *Symphoniae sacrae* và *Geistliche Chormusik* là những tập lớn; các Passion thập niên 1660 thường được xem là hay nhất trước Bach. Thời chiến, ông viết quy mô nhỏ hơn, nhiều bản thân mật.

## Giai thoại và điều chưa chắc
- ***Dafne* (Torgau, 1627)**: thường được xem là opera Đức đầu tiên nhưng nhạc đã mất, cùng gần như toàn bộ nhạc nghi lễ và sân khấu của ông.
- **Chân dung Rembrandt**: bức *Man with a Sheet of Music* (1633) thường bị gắn với ông nhưng giới nghiên cứu xem là không xác thực.
- **Gặp Monteverdi năm 1628**: chỉ là khả năng.
- **Không còn nhạc khí thuần**: dù có tiếng chơi organ, không bản nhạc không lời nào còn lại.
- **Mộ**: mộ ở nhà thờ Frauenkirche cũ ở Dresden bị phá năm 1727 khi nhà thờ bị dỡ.

## Bối cảnh
Chiến tranh Ba mươi năm tàn phá hạ tầng âm nhạc Đức, khiến những tác phẩm hoành tráng kiểu Venezia thời đầu của ông khó thực hiện. Năm 1641 ông phải sang Đan Mạch lần nữa vì triều đình tuyển hầu Dresden kiệt quệ; ông muốn về hưu ở Weißenfels sống với chị gái nhưng triều đình liên tục gọi ông về Dresden.
`,
    refs: [
      ['Wikipedia — Heinrich Schütz', 'https://en.wikipedia.org/wiki/Heinrich_Sch%C3%BCtz'],
    ],
  },

  'Johann Hermann Schein': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 20/1/1586 | Sinh ở Grünhain |
| thời nhỏ | Cha mất; chuyển đến Dresden, vào ca đoàn tuyển hầu Sachsen làm soprano nhí, học với Kapellmeister Rogier Michael |
| 1603–1607 | Học ở Pforta |
| 1608–1612 | Học luật và nhân văn ở Đại học Leipzig |
| sau đó | Làm nhạc trưởng gia đình và gia sư cho nhà von Wolffersdorff, rồi Kapellmeister ở Weimar (nguồn không ghi năm) |
| 1615 | Làm Thomaskantor ở Leipzig, giữ đến khi mất |
| 1617 | In *Banchetto musicale*, bộ duy nhất nhạc khí của ông, hai mươi tổ khúc biến tấu |
| 1627 | In *Cantional oder Gesangbuch Augspurgischer Confession* |
| 19/11/1630 | Mất ở Leipzig, 44 tuổi |

## Âm nhạc và đóng góp
Schein là Thomaskantor ở Leipzig, chức sau này của Bach, chỉ huy ca đoàn Thomanerchor và là giám đốc âm nhạc của thành phố. Ông viết cả nhạc thánh (*Cymbalum Sionium* 1615, *Opella nova* 1618 và 1626, *Israelis Brünnlein* 1623) lẫn nhạc thế tục (*Venus Kräntzlein* 1609, *Musica boscareccia* 1621, *Diletti pastorali* 1624). Nhạc thế tục có cả những bài rượu giản dị, hóm hỉnh.

## Giai thoại và điều chưa chắc
- ***Banchetto musicale***: "rất có thể" viết làm nhạc bữa ăn cho triều Weissenfels và Weimar, nhưng nguồn không xác nhận.
- **Mô hình**: nhạc concerto thời đầu của ông "dường như" lấy Viadana làm mẫu, cũng chưa xác nhận.
- **Sức khoẻ và gia đình**: yếu hơn bạn mình là Schütz; vợ mất khi sinh và bốn trong năm người con chết non; ông mắc lao, gút, scorbut và bệnh thận.
- Bài Wikipedia về ông bị gắn nhãn thiếu trích dẫn.

## Bối cảnh
Ông chỉ huy Thomanerchor và dạy ở Thomasschule, trường gắn với nhà thờ Thomaskirche ở Leipzig. Nguồn nhắc ông là bạn của Heinrich Schütz.
`,
    refs: [
      ['Wikipedia — Johann Hermann Schein', 'https://en.wikipedia.org/wiki/Johann_Hermann_Schein'],
    ],
  },

  'Samuel Scheidt': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 3/11/1587 | Rửa tội ở Halle (ngày sinh không rõ) |
| thời trẻ | Học ở Halle, rồi sang Amsterdam học với Sweelinck |
| sau đó | Về Halle làm organ thủ cung đình, rồi Kapellmeister cho hầu tước Brandenburg |
| 1622 | Từ chối chức organ thủ chính nhà thờ Marienkirche ở Danzig |
| 1624 | Xuất bản *Tabulatura nova* |
| 1628 | Mất vị trí ở chỗ hầu tước do Wallenstein; làm giám đốc âm nhạc ba nhà thờ ở Halle, kể cả nhà thờ Chợ |
| 24/3/1654 | Mất |

## Âm nhạc và đóng góp
Scheidt được xem là nhà soạn organ Đức đầu tiên có tầm quốc tế, đại diện phong cách Bắc Đức mới. Ông viết nhiều chorale prelude theo lối "biến tấu có khuôn mẫu" (biến tấu trên thánh ca), cùng fugue, tổ khúc vũ điệu, fantasia cho [[organ-ong]], và nhạc thanh nhạc thánh có hoặc không có bè trầm. Toàn tập do Breitkopf & Härtel xuất bản, 16 tập. *Tabulatura nova* có bản biên tập mới của Harald Vogel (1994).

## Giai thoại và điều chưa chắc
- **Ngày sinh** chỉ biết ngày rửa tội.
- **Wallenstein**: nguồn nhắc đây là lý do ông mất việc, không nêu chi tiết; chưa rõ thời điểm ông trở lại làm Kapellmeister.
- **Danzig**: em trai Gottfried ứng tuyển nhưng không được; chức thuộc về Paul Siefert.
- Bài Wikipedia về ông chỉ trích dẫn Britannica, và gắn nhãn thiếu trích dẫn (4/2021).

## Bối cảnh
Khác với Schütz, ông ở lại Đức suốt Chiến tranh Ba mươi năm, sống bằng dạy học và các việc nhỏ. Nguồn gắn phong cách Bắc Đức với truyền thống Tin Lành, trong khi miền Nam Đức vẫn gần mẫu Ý hơn.
`,
    refs: [
      ['Wikipedia — Samuel Scheidt', 'https://en.wikipedia.org/wiki/Samuel_Scheidt'],
    ],
  },

  'Johann Jakob Froberger': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 19/5/1616 | Rửa tội ở Stuttgart (ngày sinh không rõ) |
| 1621 | Cha Basilius làm Kapellmeister cung đình Stuttgart |
| 1634 | Nhà nguyện Stuttgart bị giải thể sau thất bại Tin Lành ở Nördlingen; Froberger sang Wien |
| 1637 | Cha mẹ và một chị mất vì dịch hạch; ông làm organ thủ cung đình Wien, được phép đi học ở Roma |
| 1649 | Trở về Wien, trình *arca musurgica* và *Libro Secondo* cho hoàng đế Ferdinand III |
| 1649–1653 | Du hành rộng: Dresden, Hà Lan, Brussels, London, Paris (1652) |
| 1656 | In *Libro Quarto* |
| 2/4/1657 | Ferdinand III mất |
| 1662–1667 | Dạy nhạc cho nữ công tước Sibylla ở Héricourt |
| 6 hoặc 7/5/1667 | Mất ở Mainz |

## Âm nhạc và đóng góp
Froberger được ghi nhận định hình tổ khúc đàn phím (allemande, courante, sarabande, gigue), chịu ảnh hưởng *style brisé* Pháp ([[dan-phim-co]]). Ông có các tác phẩm mô tả như allemande vượt sông Rhein, các lamentation và *tombeau* cho Blancrocher. Lúc sinh thời chỉ hai bản được in: Fantasia Hexachord (Kircher, 1650) và một bản trong *Fugues et caprices* của Roberday (1660). Nguồn chính là *Libro Secondo* (1649) và *Libro Quarto* (1656), đề tặng Ferdinand III.

## Giai thoại và điều chưa chắc
- **Thầy**: thường nói ông học với Frescobaldi ở Roma; nghiên cứu gần đây cho rằng thầy chính trong chuyến thứ hai là Athanasius Kircher, và một quan điểm cũ nói ông học với Carissimi.
- **Chuyến đi London**: ông bị cướp trong chuyến đi được nhắc trong *Plainte faite à Londres*; nguồn không nói gì về đắm tàu hay cướp biển.
- **Blancrocher**: được kể là chết trong tay Froberger (11/1652).
- **Chuyện sứ thần Thuỵ Điển** do Mattheson kể được xem là khó tin.
- **Gián điệp**: các chuyến đi 1649–53 có thể kèm nhiệm vụ ngoại giao hay do thám, chỉ là suy đoán.

## Bối cảnh
Hoàng đế Ferdinand III là người chơi nhạc nghiệp dư nhiệt thành; nhạc cung đình tạm ngừng khi hoàng hậu Maria Leopoldine mất (8/1649). Với người kế vị Leopold I, quan hệ của Froberger căng thẳng. Thư của Huygens với nữ công tước Sibylla là nguồn chính về mười năm cuối đời ông.
`,
    refs: [
      ['Wikipedia — Johann Jakob Froberger', 'https://en.wikipedia.org/wiki/Johann_Jakob_Froberger'],
    ],
  },

  'Dieterich Buxtehude': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1637 | Rửa tội với tên Diderich Hansen Buxtehude; nơi sinh nhiều khả năng Helsingborg, một số học giả cho là Oldesloe |
| 1657–60 | Organ thủ St. Mary's, Helsingborg (nguồn ghi 1657–58 hoặc 1660) |
| 1660–1668 | Organ thủ St. Olaf's, Helsingør |
| 1668 | Làm organ thủ Marienkirche Lübeck, kế nhiệm Franz Tunder; cưới con gái Tunder là Anna Margarethe |
| 1673 | Tổ chức lại chuỗi hoà nhạc Abendmusik, kéo dài đến 1810 |
| 1703 | Handel và Mattheson đến Lübeck; ông đề nghị nhường chức với điều kiện người kế cưới con gái lớn của ông; cả hai từ chối |
| 1705 | J. S. Bach khoảng 20 tuổi đi bộ từ Arnstadt đến Lübeck hơn 400 km, ở gần ba tháng |
| 9/5/1707 | Mất ở Lübeck |

## Âm nhạc và đóng góp
Buxtehude là trung tâm của truyền thống organ Bắc Đức ([[organ-ong]]). Ông có 19 prelude xen kẽ ngẫu hứng và [[fugue]], hơn 40 chorale, hai chaconne và một passacaglia (BuxWV 161), có ảnh hưởng đến Bach và Brahms. *La Capricciosa* (BuxWV 250) gồm 32 biến tấu, có thể gợi ý cho *Goldberg*. Hơn một trăm bản thanh nhạc còn lại, ít được biết đến trước thế kỷ 20; nhiều tác phẩm, trong đó điểm oratorio, đã mất.

## Giai thoại và điều chưa chắc
- **Nơi sinh và ngày sinh**: sổ rửa tội ở các nơi khả dĩ không kéo về thập niên 1630.
- **Chuyến đi bộ của Bach (1705)**: có trong nguồn như một sự kiện; chi tiết lý do và lịch trình chưa bàn ở đây.
- **Điều kiện cưới con gái**: nằm trong lời kể về chuyến thăm 1703 của Handel và Mattheson.
- **Chân dung**: bức duy nhất còn lại là *Musical Company* (1674) của Voorhout, vẽ ông chơi viol; nghiên cứu sau này đặt nghi vấn về một nhân vật khác trong tranh có phải ông không.
- **Chu kỳ bảy tổ khúc "các hành tinh"** do Mattheson nhắc là đã mất.

## Bối cảnh
Marienkirche ở Lübeck có hai đàn organ: đàn lớn cho lễ chính và đàn nhỏ cho nghi thức cầu nguyện và tang lễ. Ông còn làm thủ quỹ nhà thờ như Tunder trước đó. Lübeck là thành phố đế quốc tự do nên ông có nhiều tự chủ.
`,
    refs: [
      ['Wikipedia — Dieterich Buxtehude', 'https://en.wikipedia.org/wiki/Dieterich_Buxtehude'],
    ],
  },

  'Heinrich Ignaz Franz Biber': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/8/1644 | Rửa tội ở Wartenberg, Bohemia (nay Stráž pod Ralskem) |
| trước 1668 | Làm việc ở triều công tước Johann Seyfried von Eggenberg, Graz |
| đầu thập niên 1660 | Phục vụ giám mục Karl II von Liechtenstein-Kastelkorn ở Kroměříž |
| hè 1670 | Được cử đi Absam mua đàn của Jacob Stainer nhưng không tới nơi, thay vào đó vào phục vụ tổng giám mục Maximilian Gandolph von Kuenburg ở Salzburg |
| 30/5/1672 | Cưới Maria Weiss ở Hellbrunn; 11 con, bốn người sống đến trưởng thành |
| 1676 | Bắt đầu in nhạc; Karl II mới cấp giấy giải nhiệm |
| 1679 / 1684 | Phó Kapellmeister / Kapellmeister ở Salzburg |
| 1690 | Được phong quý tộc, "Biber von Bibern" |
| 3/5/1704 | Mất ở Salzburg, chôn ở Petersfriedhof |

## Âm nhạc và đóng góp
Biber là nghệ sĩ violin điêu luyện, dùng scordatura (lên dây khác thường). *Sonate Mân Côi* (Rosary/Mystery Sonatas, k. 1676) gồm mười lăm sonata scordatura và một passacaglia cho violin độc tấu; *Harmonia artificioso-ariosa* (1696) gồm bảy partita. *Battalia à 10* (1673) là bản mô tả trận đánh. *Missa Salisburgensis à 53* (1682) từng bị gán cho Orazio Benevoli, nay quyền tác giả của Biber được xem là chắc chắn.

## Giai thoại và điều chưa chắc
- **Rời Kroměříž**: nguồn nói ông "rời bỏ chủ trái phép"; Karl II tổn thương nhưng không hành động vì hai tổng giám mục là bạn, và trì hoãn giấy giải nhiệm đến 1676.
- **Học vấn thời đầu** chưa rõ; có thể học trường Dòng Tên ở Opava.
- ***Sonate Mân Côi***: ngày chỉ là ước chừng và không được in lúc sinh thời.
- **Một sonata ba bè** (hai violin và trombone) có thể là của Antonio Bertali.
- Ngày và chức danh phong quý tộc, quản gia ghi ở các nguồn lệch nhau.

## Bối cảnh
Kroměříž là triều giám mục ở Moravia, nơi Pavel Josef Vejvanovský chỉ huy nhà nguyện và tài chơi violin của Biber được đánh giá cao. Ở Salzburg, ông thăng chức dần ở triều tổng giám mục; nhà thờ chính toà rộng lớn gợi cảm hứng cho các tác phẩm nhiều dàn của ông.
`,
    refs: [
      ['Wikipedia — Heinrich Ignaz Franz Biber', 'https://en.wikipedia.org/wiki/Heinrich_Ignaz_Franz_Biber'],
    ],
  },

  'Johann Pachelbel': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1653 | Rửa tội 11/9 ở Nürnberg (ngày sinh không rõ) |
| 1669 | Ghi danh Đại học Altdorf, làm organ thủ St. Lorenz; khó khăn tài chính khiến rời trong vòng một năm |
| 1670 | Học bổng ở Gymnasium Poeticum, Regensburg |
| trước 1673 | Phó organ thủ nhà thờ St. Stephen, Wien, khoảng năm năm |
| 1677–78 | Organ thủ cung đình Eisenach, rời 18/5/1678 |
| 6/1678 | Organ thủ Predigerkirche, Erfurt, giữ 12 năm |
| 1683 | Vợ đầu và con trai mất vì dịch; in *Musicalische Sterbens-Gedancken* |
| 1690 | Phục vụ triều Württemberg ở Stuttgart, bỏ đi vì quân Pháp tấn công |
| 1692 | Organ thủ Gotha |
| 1695 | Organ thủ St. Sebaldus, Nürnberg |
| 1699 | In *Hexachordum Apollinis* |
| 3/1706 | Mất ở khoảng 52 tuổi, chôn 9/3 ở nghĩa trang St. Rochus |

## Âm nhạc và đóng góp
Pachelbel viết hơn 200 bản organ ([[organ-ong]]): chorale prelude (gần nửa số bản còn lại), khoảng 30 fugue tự do và 90 fugue Magnificat ([[fugue]]), sáu chaconne, cùng toccata và fantasia. *Hexachordum Apollinis* (1699) có sáu nhóm aria với biến tấu. Nhạc thính phòng gồm *Musicalische Ergötzung* và Canon cung Rê trưởng, soạn cho ba violin và bè trầm kèm một gigue. Canon nổi lên mạnh từ thập niên 1970 sau bản thu của Jean-François Paillard (1968) và nhạc phim *Ordinary People* (1980); chuỗi hợp âm của nó được pop dùng rộng rãi.

## Giai thoại và điều chưa chắc
- **Ngày sinh và ngày mất**: Mattheson ghi mất 3 hoặc 7/3; nguồn cho rằng 6 hoặc 7/3 hợp lý hơn.
- **Thầy Wecker**: thuyết chỉ dựa vào tiểu sử của Walther năm 1732, được xem là khó tin.
- **Thầy ở Wien**: Kerll có thể dạy ông, chưa xác nhận.
- **Gặp Bach nhỏ (1694)**: có thể dự đám cưới Johann Christoph Bach ở Ohrdruf, nơi cậu bé Johann Sebastian chín tuổi có thể gặp ông; chưa chắc.
- **Niên đại Canon**: nguồn đã đọc không cho ngày soạn.
- Phần lớn tổ khúc harpsichord gán cho ông có tác giả đáng ngờ.

## Bối cảnh
Nürnberg là thành phố đế quốc tự do với truyền thống âm nhạc riêng, Pachelbel là nhà soạn nhạc lớn cuối cùng của truyền thống ấy. Ở Eisenach ông thân với Johann Ambrosius Bach và làm cha đỡ đầu cho con gái ông ấy ở Erfurt, đồng thời dạy Johann Christoph Bach, anh trai Johann Sebastian. Wien mang gu Ý, nơi Pachelbel, một người Luther, thấm nhạc Công giáo.
`,
    refs: [
      ['Wikipedia — Johann Pachelbel', 'https://en.wikipedia.org/wiki/Johann_Pachelbel'],
    ],
  },

  'Johann Kuhnau': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 6/4/1660 | Sinh ở Geising, Sachsen; gia đình gốc Bohemia, vốn tên Kuhn |
| k. 1670 | Được gửi đến Dresden học với các nhạc sĩ cung đình |
| 1680 | Dịch hạch đến Dresden, ông về quê; học ở Johanneum, Zittau, sau đó học luật ở Leipzig |
| 5/1681 | Viết một aria cho tang lễ hiệu trưởng Titius ở Zittau |
| 1684 | Khoảng 24 tuổi, làm organ thủ nhà thờ Thomaskirche, Leipzig |
| 1688 | Hoàn thành luận văn luật và bắt đầu hành nghề luật |
| 1689 | Cưới vợ; để lại ba con gái |
| 1701 | Kế nhiệm Johann Schelle làm Thomaskantor, giữ đến khi mất |
| 5/6/1722 | Mất ở Leipzig |

## Âm nhạc và đóng góp
Kuhnau là người tiền nhiệm của Bach ở Leipzig, nổi tiếng với sonata đàn phím mô tả các câu chuyện Kinh Thánh trong *Biblische Historien* ([[dan-phim-co]]). *Sonata si giáng trưởng* của ông từng được xem là sonata bàn phím sớm nhất; nghiên cứu sau cho thấy nó là bản đầu tiên được in ở Đức, theo cách gọi tên của các nhà soạn nhạc nước ngoài.

## Giai thoại và điều chưa chắc
- **Nguồn tiểu sử**: phần lớn lấy từ bản tự truyện do Johann Mattheson in năm 1740.
- ***Uns ist ein Kind geboren*** (BWV 142) từng bị gán cho Bach, nay nhiều khả năng của Kuhnau.
- ***Fundamenta compositionis***: từng bị gán cho Bach; có vẻ là bản chép một phần của bản gốc Kuhnau.
- **Đối thủ**: nguồn nói những nhạc sĩ như Telemann và học trò cũ Fasch bị cho là làm suy yếu vai trò Kantor của ông, cùng với sức khoẻ sa sút.
- **Tác phẩm đáng ngờ hay mất**: kể cả opera *Orpheus* và *Markus-Passion*.

## Bối cảnh
Ở Zittau, ông biết Christian Weise, hiệu trưởng gymnasium, và viết nhạc cho các vở kịch học đường của Weise; nhạc ấy nay đã mất. Ở Leipzig, Thomaskantor điều hành nhiều hoạt động âm nhạc của nhà thờ và dạy ở Thomasschule; Willi Apel mô tả chức này là "phiền toái và khó khăn" cho cả Kuhnau lẫn Bach.
`,
    refs: [
      ['Wikipedia — Johann Kuhnau', 'https://en.wikipedia.org/wiki/Johann_Kuhnau'],
    ],
  },
}

import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Phục hưng (phần A: Power … Palestrina; nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_REN_A: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Leonel Power': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1370–1385 | Sinh (khoảng k. 1380, suy từ phong cách và các chức vụ; có nguồn nêu k. 1375) |
| trước 1421 | Văn bản sớm nhất gọi ông là thầy dạy ca đồng tử của nhà nguyện gia đình Thomas xứ Lancaster, Công tước Clarence (mất 1421) |
| 14/5/1423 | Gia nhập hội huynh đệ Christ Church, Canterbury |
| đầu 1440s | Tài liệu mô tả ông là người xứ Kent |
| 5/6/1445 | Mất ở Canterbury, an táng hôm sau |

## Âm nhạc và đóng góp
Power chủ yếu viết motet và các phần của thánh lễ ([[thanh-le-va-requiem]], [[motet]]). Khoảng 40 tác phẩm được xác định chắc chắn là của ông, và ông là tác giả có nhiều bài nhất trong Old Hall Manuscript. Ông thuộc nhóm đầu tiên gom các phần của Ordinary thành một chỉnh thể cùng chủ đề để trình diễn nối tiếp. *Missa Alma redemptoris mater* đặt bài antiphon nguyên dạng, không trang sức, ở bè tenor của mọi chương; đây là bộ thánh lễ chu kỳ duy nhất gán chắc cho ông, một bước sớm của kỹ thuật [[cantus-firmus]]. Người ta thường xếp ông cùng John Dunstable là hai nhà soạn nhạc Anh hàng đầu giai đoạn 1410–1445.

## Giai thoại và điều chưa chắc
- **Năm sinh** chỉ là ước lượng; các nguồn lệch nhau (k. 1375 hay k. 1380).
- **Gốc Ireland**: W. H. G. Flood (1905) cho rằng ông người Ireland; giới nghiên cứu hiện nay thường bác vì Flood không có nguồn nào ngoài những tài liệu đã biết.
- **Biệt danh "Polbero"** xuất hiện trong một số tài liệu nhưng nguồn đối chiếu hạn chế.
- Có tác phẩm được ghi lẫn giữa Power và Dunstable (có bản ghi "có thể là của Dunstable").
- Việc ông làm việc cho Công tước Bedford chỉ là khả năng, chưa có xác nhận.

## Bối cảnh
Anh đầu thế kỷ 15: nhạc sĩ phục vụ nhà thờ lớn và gia đình quý tộc, vừa dạy ca đồng tử vừa soạn nhạc. Canterbury là một trung tâm tôn giáo lớn. Phần lớn bản chép tay Anh bị mất sau cuộc giải thể tu viện, nên nhạc của ông còn lại chủ yếu qua Old Hall Manuscript và các nguồn lục địa.
`,
    refs: [
      ['Wikipedia — Leonel Power', 'https://en.wikipedia.org/wiki/Leonel_Power'],
    ],
  },

  'John Dunstable': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1390 | Sinh (theo Margaret Bent, suy từ các tác phẩm sớm nhất k. 1410–1420); nơi sinh không rõ |
| 1423–1429 | Phục vụ Công tước Bedford, nhiếp chính ở Pháp; có thể đã theo ông sang Pháp |
| 1426 | Có thể là năm Bedford thăm St Albans, dịp ra đời motet *Albanus roseo rutilat* |
| 1436 | Hồ sơ thuế ghi ông có tài sản ở Normandy, Cambridgeshire, Essex và London |
| 1437 | Sau khi Hoàng hậu Joan mất, có vẻ ông chuyển sang phục vụ Humphrey, Công tước Gloucester |
| 24/12/1453 | Mất ở London, chôn ở St Stephen Walbrook |

## Âm nhạc và đóng góp
Khoảng 50 tác phẩm còn lại được gán cho ông, gần như toàn bộ là thanh nhạc: hai bộ thánh lễ trọn vẹn, vài chương lẻ, khoảng 12 motet isorhythm hoàn chỉnh, ba Magnificat và bảy antiphon Đức Mẹ ([[motet]], [[thanh-le-va-requiem]]). Ông gắn với "contenance angloise" (phong cách Anh): hợp âm ba đầy đặn, ưa quãng 3 và 6, có thể vay từ fauxbourdon Pháp, đồng thời vẫn dùng isorhythm. Ông được xem là một trong những người đầu tiên dựng thánh lễ trên một [[cantus-firmus]] duy nhất (*Missa Rex seculorum*). Ảnh hưởng của ông lên Du Fay, Binchois và thế hệ lục địa sau đó được nhắc rộng rãi, và ông là cầu nối giữa Trung cổ và [[thoi-ky-phuc-hung]].

## Giai thoại và điều chưa chắc
- **Ông là ai**: nhiều người cùng tên thời đó; ứng viên "John Dunstavylle", canon ở Hereford, không thuyết phục.
- **Nhầm với thánh Dunstan** thế kỷ 10 do đọc sai Tinctoris; đây là sai lầm cũ.
- **Nhà toán học, thiên văn, chiêm tinh**: dựa vào văn bia và bản chép tay ông sở hữu; không có trước tác khoa học gốc còn lại.
- **Tác phẩm gán lẫn**: nhiều bài được ghi cho cả Binchois, John Forest và Leonel Power; *O rosa bella* từng gán cho ông nay thường gán cho John Bedingham.
- Các bài carol Anh vô danh có thể là của ông nhưng chưa chứng minh.
- Tên viết "Dunstaple" phổ biến trong nguồn cổ hơn "Dunstable".

## Bối cảnh
Thời Chiến tranh Trăm năm: người Anh cai trị một phần nước Pháp, triều đình Bedford đưa nhạc sĩ Anh sang lục địa. Việc phần lớn nhạc Anh bị thất lạc sau Cải cách khiến nhạc của ông sống sót chủ yếu trong bản chép tay ở Ý, Đức, Bỉ.
`,
    refs: [
      ['Wikipedia — John Dunstaple', 'https://en.wikipedia.org/wiki/John_Dunstaple'],
    ],
  },

  'Guillaume Du Fay': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 5/8/1397 | Sinh, có lẽ gần Brussels, con ngoài giá thú của một linh mục |
| 1409–1412 | Ca đồng tử ở nhà thờ chính toà Cambrai |
| 1414 | Giữ chức tuyên uý ở St. Géry, Cambrai, khi mới khoảng 16 tuổi |
| 1420–1424 | Phục vụ triều Malatesta ở Rimini và Pesaro |
| 1428 | Vào ca đoàn giáo hoàng ở Roma dưới Martin V, rồi Eugene IV |
| 1434 | Làm maistre de chappelle cho Công tước Amadeus VIII xứ Savoy |
| 1436 | Soạn *Nuper rosarum flores* cho lễ thánh hiến mái vòm của Brunelleschi ở Florence |
| 1439–1440 | Trở về Cambrai (văn bản đầu tiên ở đó: 27/12/1440) |
| 1453 | Soạn khúc than về sự thất thủ Constantinople |
| 27/11/1474 | Mất ở Cambrai, chôn trong nhà thờ chính toà |

## Âm nhạc và đóng góp
Du Fay để lại bảy bộ thánh lễ trọn vẹn, 28 chương lẻ, 22 motet, 87 chanson cùng thánh ca, antiphon, Magnificat. Tác phẩm tiêu biểu: *Nuper rosarum flores*, *Missa Se la face ay pale*, *Missa L'homme armé* và các bài *Ave maris stella* theo fauxbourdon ([[motet]], [[thanh-le-va-requiem]]). Chịu ảnh hưởng "contenance angloise" của Dunstable, ông hoà trộn lối Anh, Ý và Pháp–Flanders thành một giọng quốc tế; bài sớm còn dấu isorhythm kiểu cuối Trung cổ, bài muộn mượt và giàu giai điệu hơn. Ông là một trong những nhạc sĩ đầu tiên được coi chủ yếu là "nhà soạn nhạc" ([[thoi-ky-phuc-hung]]).

## Giai thoại và điều chưa chắc
- **Nơi sinh và cha mẹ** chủ yếu dựa vào di chúc của ông.
- **Bằng luật 1437**: có ý kiến cho là cấp theo sắc lệnh giáo hoàng chứ không phải thi cử.
- **Chanson *L'homme armé***: chưa rõ ông có phải tác giả giai điệu hay không.
- **Bia mộ ở Lille**: Nys đề xuất dựa trên một tranh khắc gỗ Florence c. 1460; Brine phản bác.
- **Bức vẽ nhỏ có lẽ là Binchois** cạnh ông thường được coi là chân dung duy nhất chắc chắn của ông.
- **Bản Requiem (khoảng 1460) và hai luận văn** của ông đã mất.
- Ông xin được nghe một motet lúc hấp hối nhưng không kịp dàn xếp.

## Bối cảnh
Cambrai là trung tâm âm nhạc lớn của vùng Burgundy–Flanders; Du Fay đi qua cung đình Ý, giáo triều và Savoy, nhưng không phải thành viên thường xuyên của nhà nguyện Burgundy. Cuộc đời ông là chuỗi hợp đồng với nhà thờ và triều đình, hưởng bổng lộc giáo sĩ.
`,
    refs: [
      ['Wikipedia — Guillaume Du Fay', 'https://en.wikipedia.org/wiki/Guillaume_Du_Fay'],
    ],
  },

  'Gilles Binchois': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1400 | Sinh, có lẽ ở Mons (Hainaut) |
| 8/12/1419 | Văn bản đầu tiên: organ ở Ste Waudru, Mons |
| 28/7/1423 | Ghi nhận ông chuyển đến Lille |
| cuối 1420s | Vào nhà nguyện triều đình Burgundy dưới Philip the Good (năm chính xác không rõ) |
| 7/1/1430 | Nhận bổng lộc ở St Donatian, Bruges |
| 18/1/1431 | Soạn motet *Nove cantum melodie* nhân lễ rửa tội của Anthony, con ngoài giá thú của Công tước |
| 1437 | Nhận bổng lộc ở Ste Waudru, Mons; được phong thư ký danh dự của triều đình |
| 1452–1453 | Làm viện trưởng St Vincent, Soignies; nghỉ hưu ở đó với lương hưu hậu |
| 20/9/1460 | Mất ở Soignies, chôn ở St Vincent |

## Âm nhạc và đóng góp
Khoảng 54 chanson (47 rondeau, 7 ballade) và khoảng 60 tác phẩm thánh nhạc gồm chương thánh lễ, thánh vịnh, motet. Chanson của ông phần lớn nhịp ba, giai điệu giản dị, đối xứng, được coi là bậc thầy "tiểu hoạ" của thể loại ([[ca-khuc-the-tuc-trung-co]]). Thánh nhạc chủ yếu đồng âm, thường theo fauxbourdon, một số nhà phê bình xem là khá quy củ. Tác phẩm quy mô lớn duy nhất còn lại là motet isorhythm dang dở *Nove cantum melodie*. Không có thánh lễ chu kỳ trọn vẹn nào còn lại. Ông chịu ảnh hưởng "contenance angloise" nhưng theo "bản nghe của riêng mình" (Strohm); cách xử lý cadence và nghịch âm của ông có phần tiến bộ.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Mons là khả năng cao; việc cho là Binche không có chứng cứ.
- **Ca đồng tử ở Cambrai**: dựa trên cách đọc sai một nguồn.
- **Chân dung *Léal Souvenir***: gán cho Van Eyck còn tranh luận.
- **Binh nghiệp, nghề thuốc**: có thể làm lính dưới William de la Pole; một lần ghi chuyện chữa đau răng năm 1437 gợi ý ông có hiểu biết y học.
- **Ngày *Nove cantum melodie***: một nguồn ghi vừa 1431 vừa 1481, rõ ràng là lỗi in.
- **Thánh lễ ghép từ chương lẻ**: các bản dựng lại bị coi là không thuyết phục.
- Trong thơ *Le champion des dames* ông bị mô tả thua cặp nghệ sĩ đàn vielle mù; đây là hình ảnh văn chương.

## Bối cảnh
Triều Burgundy dưới Philip the Good là một trong những cung đình phô trương nhất châu Âu, lấy Alexander Đại đế làm hình mẫu. Ông là giáo sĩ chứ không phải linh mục, điều triều đình này cho phép. Bổng lộc ở bốn nhà thờ giúp ông sống ổn định.
`,
    refs: [
      ['Wikipedia — Gilles Binchois', 'https://en.wikipedia.org/wiki/Gilles_Binchois'],
    ],
  },

  'Johannes Ockeghem': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1410–1430 | Sinh (khoảng năm sinh còn tranh cãi), có lẽ ở Saint-Ghislain, Hainaut |
| 1443 | Văn bản đầu tiên: ca sĩ "bè trái" ở nhà thờ Đức Bà Antwerp |
| 1446–1448 | Phục vụ Charles I, Công tước Bourbon, ở Moulins |
| k. 1452 | Đến Paris làm maestro di cappella nhà vua và thủ quỹ St. Martin ở Tours |
| 1460 | Soạn khúc than cho cái chết của Binchois |
| k. 1461 | Bản Requiem có lẽ soạn cho tang lễ Charles VII |
| 1470 | Đi sứ sang Tây Ban Nha cho vua Pháp |
| 6/2/1497 | Mất, có lẽ ở Tours, nơi ông để lại di chúc |

## Âm nhạc và đóng góp
Ông phục vụ ba đời vua Pháp: Charles VII, Louis XI, Charles VIII. Khoảng 14 bộ thánh lễ, trong đó *Requiem* là bản phức điệu còn lại sớm nhất ([[thanh-le-va-requiem]]), *Missa prolationum* toàn canon theo nhịp độ và *Missa cuiusvis toni* có thể hát ở bất kỳ [[dieu-thuc]] nào. Ông còn khoảng 21 chanson (nổi tiếng nhất *Fors seulement*) và vài motet. Khoảng một nửa thánh lễ dùng [[cantus-firmus]]; ba bộ mượn chanson, báo trước thánh lễ "parody" thế kỷ 16. Phong cách đặc trưng ở bè dài, liên tục, bè trầm rộng và nhịp điệu mỗi bè một khác; ảnh hưởng lớn tới Josquin và thế hệ Hà Lan sau ([[doi-am]]).

## Giai thoại và điều chưa chắc
- **Năm sinh**: có nguồn dựa vào câu "tiếc thay ông chết trước 100 tuổi" của Crétin để ngược về sớm; thật ra chỉ là dẫn chứng gián tiếp.
- **Nơi sinh**: Saint-Ghislain dựa trên tài liệu 1607; từng có đề xuất Okegem, Dendermonde, Bavay.
- **Học Binchois**: có khả năng nhưng chưa chứng minh.
- **Chân dung** thường dùng chỉ được nhận diện dè dặt là ông.
- **Tên viết**: "Ockeghem" từ bản chữ ký gốc đã mất, nguồn thế kỷ 15 chủ yếu ghi "Okeghem".
- **Số tác phẩm** thu hẹp dần vì nhiều bài bị gán sai.
- **Nơi mất ở Tours** suy từ di chúc.
- Giả thuyết bè trầm của ông phản ánh giọng hát chính ông chỉ là phỏng đoán.

## Bối cảnh
Nhà nguyện hoàng gia Pháp là chức vụ danh giá, thủ quỹ St. Martin ở Tours là bổng lộc nhàn và giàu. Triều đình dùng ông cả cho việc ngoại giao. Sau khi ông mất nhiều nhà thơ và nhạc sĩ (kể cả Josquin với *Nymphes des bois*) viết khúc than cho ông.
`,
    refs: [
      ['Wikipedia — Johannes Ockeghem', 'https://en.wikipedia.org/wiki/Johannes_Ockeghem'],
    ],
  },

  'Antoine Busnois': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1430 | Sinh, có lẽ gần Béthune (Pas-de-Calais); chỉ là giả định |
| 1450s | Những nhắc đến đầu tiên ở triều đình Pháp |
| 28/2/1461 | Ở Tours, nộp đơn xin xá tội vì đã cùng người khác đánh một linh mục; trong thời gian bị vạ tuyệt thông ông còn cử hành thánh lễ dù chưa thụ phong, rồi được Giáo hoàng Pius II ân xá |
| 1465 | Phó tế ở St. Martin, Tours (nơi Ockeghem làm thủ quỹ); cuối năm làm thầy ca đồng tử ở Poitiers |
| 1466 | Rời Poitiers đột ngột, sang Burgundy |
| 1467 | Vào triều Burgundy làm ca sĩ và valet de chambre |
| 1475 | Có mặt ở cuộc vây Neuss |
| 1477 | Trận Nancy, Charles the Bold tử trận |
| trước 6/11/1492 | Mất; lúc đó đang làm việc ở St. Sauveur, Bruges |

## Âm nhạc và đóng góp
Ông được nể là một trong những nhạc sĩ nổi nhất châu Âu giữa thời Du Fay và Ockeghem, và là nhà soạn chanson nhiều và quan trọng nhất giữa Du Fay và Claudin de Sermisy ([[ca-khuc-the-tuc-trung-co]]). Phần chắc chắn là của ông gồm ba thánh lễ, khoảng 14 motet/Magnificat và khoảng 62 tác phẩm thế tục (chủ yếu rondeau, vài bergerette). Giai điệu uyển chuyển, dễ hát, dùng mô phỏng tiết chế, cảm giác hợp âm ba mạnh báo trước thực hành thế kỷ 16. Ông nằm giữa lối đồng âm giản dị của Du Fay–Binchois và đối âm mô phỏng của Josquin ([[doi-am]]).

## Giai thoại và điều chưa chắc
- **Tuổi trẻ**: vụ đánh linh mục và vạ tuyệt thông là chi tiết hiếm thấy trong tiểu sử nhạc sĩ.
- ***L'homme armé***: Pietro Aron gợi ý ông có thể là tác giả giai điệu; chưa rõ ông có phải tác giả bộ thánh lễ *L'homme armé* đầu tiên không. Taruskin cho thánh lễ của ông là mẫu cho các bộ sau; Fallows lại cho sự phức tạp của nó có thể cho thấy ông đã vay từ Du Fay.
- **Sáu thánh lễ *L'homme armé* ở Naples**: gán cho ông chỉ theo phong cách.
- ***Fortuna desperata***: gán cho ông còn gây tranh cãi vì hầu hết nguồn ghi vô danh.
- **Nơi sinh** Busnes/Béthune chỉ là phỏng đoán.

## Bối cảnh
Ông đi từ nhà thờ Tours, nơi Ockeghem nổi danh, sang triều Burgundy rực rỡ của Charles the Bold, theo ông vào cả những chiến dịch quân sự. Sau cái chết của Charles năm 1477, miền Burgundy rơi vào tay Habsburg và Pháp, còn đời ông những năm sau đó ít được ghi lại.
`,
    refs: [
      ['Wikipedia — Antoine Busnois', 'https://en.wikipedia.org/wiki/Antoine_Busnois'],
    ],
  },

  'Josquin des Prez': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1450–1455 | Sinh, nơi sinh còn tranh cãi (vùng đông bắc nước Pháp hay Bỉ ngày nay) |
| k. 1466 | Được chú thím chỉ định thừa kế |
| 19/4/1477 | Văn bản chắc chắn đầu tiên: ca sĩ nhà nguyện René xứ Anjou ở Aix-en-Provence |
| 20/6/1484 | Vào phục vụ Hồng y Ascanio Sforza ở Milan, sau đó theo ông đến Roma |
| 6/1489–4/1494 | Ca sĩ ca đoàn giáo hoàng ở Roma |
| 1499–1501 | Hai lần đến Troyes (xác nhận năm 2008) |
| 1503 | Đến Ferrara phục vụ Ercole I d'Este với lương 200 ducat; tháng 4/1504 rời đi vì dịch hạch |
| 3/5/1504 | Làm provost nhà thờ Notre-Dame ở Condé |
| 27/8/1521 | Mất ở Condé |

## Âm nhạc và đóng góp
Ông là ca sĩ chuyên nghiệp cả đời, tác phẩm gần như hoàn toàn thanh nhạc: các bộ thánh lễ (hai bộ *L'homme armé*, *Missa Pange lingua*, *Missa Hercules Dux Ferrariae*, *Missa La sol fa re mi*...), motet (*Ave Maria… Virgo serena*, *Miserere mei, Deus*, *Inviolata*) và chanson (*Mille regretz*, *Plus nulz regretz*) ([[motet]], [[thanh-le-va-requiem]]). Giới học giả ghi nhận ông chuyển từ những melisma dài sang các mô-típ ngắn dễ nhận chuyền giữa các bè, mô phỏng và cân bằng giữa các bè, chú ý lời văn và sớm có minh hoạ từ ngữ; ông cũng gắn với thánh lễ paraphrase và parody ([[doi-am]], [[ket-cau]]). Ông là nhà soạn nhạc phương Tây đầu tiên giữ được danh tiếng lâu dài sau khi mất.

## Giai thoại và điều chưa chắc
- **Học trò của Ockeghem**: Zarlino, Zacconi nói vậy nhưng không có chứng cứ.
- **Triều Louis XI, Matthias Corvinus ở Vienna**: chưa xác nhận; lời kể của Hồng y Aleandro năm 1539 có thể là tin đồn hay nhầm người.
- **"Juschino"** đưa chó săn cho nhà Gonzaga: chưa chắc là ông.
- **Dòng chữ "JOSQUINJ" trong Nhà nguyện Sistina**: chỉ là khả năng gần nhất với chữ ký, không phải bút tích chắc chắn.
- **Glarean** kể *La sol fa re mi* có từ chuyện một nhà quý tộc bị đuổi những kẻ cầu hôn, và *Memor esto verbi tui* là lời nhắc nhà vua về bổng lộc đã hứa; đều là chuyện kể muộn.
- ***Bonitatem fecisti***, từng cho là motet tạ ơn của ông, nay gán cho Carpentras.
- **Niên đại** *Missa Hercules Dux Ferrariae* (đầu 1480s hay k. 1503–04) vẫn tranh luận.
- Có nhà nghiên cứu cho danh tiếng của ông từng bị thổi phồng so với đương thời.

## Bối cảnh
Ông sống qua các trung tâm quyền lực: cung René xứ Anjou, nhà Sforza ở Milan, giáo triều Roma, vua Pháp Louis XII, Ferrara. Nhà in Petrucci ở Venice giúp nhạc của ông lan khắp châu Âu, một yếu tố lớn trong danh tiếng ([[lich-su-in-an-am-nhac]]).
`,
    refs: [
      ['Wikipedia — Josquin des Prez', 'https://en.wikipedia.org/wiki/Josquin_des_Prez'],
    ],
  },

  'Heinrich Isaac': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1450 | Sinh, có lẽ ở Brabant (nơi sinh chưa xác nhận) |
| 15/9/1484 | Văn bản đầu tiên: ca sĩ của Công tước Sigismund ở Innsbruck |
| 7/1485 | Ca sĩ ở Santa Maria del Fiore, Florence |
| 4/1492 | Soạn hai motet sau cái chết của Lorenzo de' Medici, trong đó có khúc than *Quis dabit capiti meo aquam* |
| 3/4/1497 | Được bổ nhiệm nhà soạn nhạc cung đình của Hoàng đế Maximilian I |
| 1502 | Về Florence, lập di chúc đầu tiên, đến thăm triều Este ở Ferrara |
| 14/4/1508 | Nhà thờ chính toà Konstanz đặt viết *Choralis Constantinus* |
| 30/5/1514 | Nhận chức danh dự ở Santa Maria del Fiore |
| 26/3/1517 | Mất ở Florence |

## Âm nhạc và đóng góp
Isaac để lại 36 bộ thánh lễ Ordinary còn nguyên và nhiều chương lẻ, hàng trăm motet, bài hát tiếng Pháp, Đức, Ý và nhạc khí ([[motet]], [[thanh-le-va-requiem]]). Đồ sộ nhất là *Choralis Constantinus*, hơn 450 motet dựa trên chant cho phần Proper, hoàn tất cùng Ludwig Senfl và in năm 1555 ([[thanh-ca-gregorian]]). Bài nổi tiếng nhất là *Innsbruck, ich muss dich lassen*; giai điệu về sau thành bài thánh ca Luther *O Welt, ich muss dich lassen*, mà Bach từng dùng trong *St Matthew Passion*. Ông giúp đưa phong cách đa âm Franco-Flemish vào các vùng nói tiếng Đức; Anton Webern lấy tiến sĩ với công trình về *Choralis Constantinus*.

## Giai thoại và điều chưa chắc
- **Gốc gác**: Glarean gọi ông "Henricus Isaac Germanus", còn di chúc của chính ông ghi "Ugonis de Flandria".
- **Giai điệu *Innsbruck***: chưa rõ giai điệu do ông sáng tác hay chỉ là bản phối.
- ***A la battaglia***: ngày và mục đích chính xác chưa rõ.
- **Hôn nhân** với Bartolomea không rõ năm; nhà Medici có thể đã sắp xếp (phỏng đoán).
- **Thư từ Ferrara** so sánh ông với Josquin: ông sẵn lòng soạn theo yêu cầu hơn.
- Một "organist Isaac" trước đây từng bị nhầm với ông, nay gán cho Isaac Argyropoulos.

## Bối cảnh
Ông làm việc ở Innsbruck, Florence và triều Habsburg ở Vienna. Giữ ràng buộc với Medici trong khi làm nhạc sĩ cho Maximilian I là cách sống phổ biến của nhạc sĩ giỏi thời đó. Thành Florence dưới Medici là nơi nhạc lễ hội, nhạc nhà thờ và nhạc triều đình đan xen; motet *Palle, palle* ám chỉ huy hiệu Medici.
`,
    refs: [
      ['Wikipedia — Heinrich Isaac', 'https://en.wikipedia.org/wiki/Heinrich_Isaac'],
    ],
  },

  'Pierre de la Rue': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1452 | Sinh, có lẽ ở Tournai (nguồn tham khảo ghi cả k. 1460) |
| 1469–1470 | Một "Peter vander Straten", nhiều khả năng là ông, hát giọng tenor ở Ste. Gudule, Brussels |
| 1489–1492 | Nhận lương của hội huynh đệ ở 's-Hertogenbosch; 1492 trở thành thành viên chính thức và vào Grande chapelle của Hoàng đế Maximilian |
| 1494 | Philip the Handsome thừa kế Grande chapelle |
| 1506 | Gặp nạn đắm tàu ở eo biển Manche, ở ba tháng tại triều Henry VII; Philip chết vì bệnh sốt phát ban |
| 1506–1508 | Phục vụ Juana xứ Castile ở Tây Ban Nha, lên chức premier chapelain |
| 1508–1514 | Triều đình đặt ở Mechelen và Brussels; có thể là những năm sung mãn nhất |
| 1516 | Nghỉ hưu, có lẽ vào tháng 5 hoặc 6 |
| 20/11/1518 | Mất ở Kortrijk |

## Âm nhạc và đóng góp
Khoảng 31 thánh lễ (gồm *Missa Ave sanctissima Maria* sáu bè và *Missa L'homme armé I*), 25 motet, sáu bài *Salve regina*, bảy Magnificat còn lại (từ tám bài đã viết, mỗi bài theo một điệu thức) và khoảng 30 chanson ([[motet]], [[thanh-le-va-requiem]]). Ông viết bản Requiem phức điệu sớm còn lại. Điểm đặc trưng là âm vực trầm rất thấp, nhiều cromatic và nghịch âm dày, viết 5–6 bè sớm, canon phức tạp (như canon nhịp độ bốn bè ở Agnus Dei của thánh lễ *L'homme armé*) ([[doi-am]], [[cantus-firmus]]). Ông thường xé các kết cấu dày bằng những đoạn hai bè, như Ockeghem và Josquin.

## Giai thoại và điều chưa chắc
- **Peter vander Straten = La Rue**: rất có khả năng nhưng chưa chắc.
- **Ở Siena 1483–85**: tiểu sử cũ đặt ông ở đó, nhưng ca sĩ ấy là một La Rue khác; ông có lẽ chưa đến Ý.
- **Văn bia** gợi ông từng phục vụ vua Pháp và vua Hungary, không có tài liệu khác xác nhận; các bản chép văn bia còn lại có chỗ mâu thuẫn.
- **Vì sao Juana quý ông**: giả thuyết là nhạc của ông xoa dịu bà, chỉ là suy đoán.
- **Gán sai**: *Absalom, fili mi* từng cho là của Josquin; *Lamentationes Hieremiae* gán cho Mahu.
- Văn bia nói ông không "sa vào tội của Venus", ngầm so với các đồng nghiệp; nơi chôn đã thất lạc.

## Bối cảnh
Ông gắn đời mình với nhà nguyện Habsburg–Burgundy, một trong những dàn ca đoàn lớn nhất châu Âu, đi theo triều đình khắp Hà Lan và Tây Ban Nha. Cái chết của Philip năm 1506 và chứng điên của Juana định hình năm tháng sau đó. Khi mất ông khá giàu đối với một ca sĩ không thuộc dòng quý tộc; di chúc để lại tiền làm lễ cầu hồn và quà cho người thân, tổ chức từ thiện.
`,
    refs: [
      ['Wikipedia — Pierre de La Rue', 'https://en.wikipedia.org/wiki/Pierre_de_La_Rue'],
    ],
  },

  'Jacob Obrecht': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1457–1458 | Sinh, có lẽ ở Ghent (viết cả Hobrecht) |
| 1460 | Mẹ, Lijsbette Gheeraerts, mất khi khoảng 20 tuổi |
| 1476 | Erasmus được cho là một trong các ca đồng tử của ông (chỉ một nguồn: Reese, 1959) |
| 1487 | Công tước Ercole I d'Este mời đến Ferrara sáu tháng |
| 1488 | Cha, Willem Obrecht, kèn trumpet thành phố Ghent, mất |
| k. 1503–1504 | Đi qua Tyrol, có lẽ nghe bài hát làm nền cho *Missa Maria zart* |
| 1504 | Trở lại Ferrara |
| đầu 1505 | Công tước Ercole mất; Obrecht thất nghiệp |
| cuối 7/1505 | Mất vì dịch hạch ở Ferrara, ngay trước 1/8 |

## Âm nhạc và đóng góp
Chủ yếu là thánh nhạc: thánh lễ, motet, thêm một số chanson. *Missa Sub tuum presidium* tăng số bè từ ba lên bảy qua các chương; *Missa Maria zart* (k. 1504) dựa trên một bài ca sùng kính của Tyrol và là một trong những bộ thánh lễ Ordinary dài nhất, hơn một tiếng ([[thanh-le-va-requiem]], [[cantus-firmus]]). Ông dùng nhiều kỹ thuật [[cantus-firmus]]: mảnh, dạng ngược, sắp lại nốt theo trường độ. Ông chịu ơn Ockeghem ở những giai điệu vòng rộng, câu dài; xa dần các thể cố định trong chanson; thích viết thánh lễ vì tự do hơn. Tinctoris xếp ông vào các bậc thầy đương thời, và cuối thế kỷ 15 ông được xem là nhà soạn thánh lễ nổi nhất châu Âu cho đến khi Josquin vượt lên sau khi ông mất.

## Giai thoại và điều chưa chắc
- **Năm sinh** chỉ là ước lượng 1457/8.
- **Chân dung**: gán cho Hans Memling hay Quentin Matsys, chưa có kết luận.
- **Vai trò ở Ferrara sau 1504** không rõ.
- **Học vấn thời trẻ** thiếu tài liệu.
- **Quan hệ với Erasmus** chỉ dựa vào một nguồn.
- Khi một lần thiếu hụt sổ sách, ông đền bằng cách tặng các cuốn sách hát tự chép.
- Ảnh hưởng lâu dài lên người sau có vẻ hạn chế; có thể ông chỉ đơn giản bị lỗi thời.

## Bối cảnh
Ông làm việc ở nhiều nhà thờ chính toà Flanders và Hà Lan với những hợp đồng ngắn hạn, hai lần kết thúc không êm. Triều Ferrara của nhà Este nổi tiếng mời các nhạc sĩ phương bắc. Cái chết của ông xảy ra giữa đợt dịch hạch, ít lâu sau khi người bảo trợ qua đời.
`,
    refs: [
      ['Wikipedia — Jacob Obrecht', 'https://en.wikipedia.org/wiki/Jacob_Obrecht'],
    ],
  },

  'Jean Mouton': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1459 | Sinh với tên Jean de Hollingue, có lẽ gần Boulogne-sur-Mer (có thể sớm hơn) |
| trước 1477 | Có lẽ làm ca sĩ và thầy ở nhà thờ tập thể Saint-Omer |
| 1483 | Làm maître de chapelle ở Nesle; k. 1483 thụ phong linh mục |
| 1500 | Trông coi ca đồng tử ở nhà thờ chính toà Amiens |
| 1501–1502 | Dạy ca đồng tử ở Grenoble, rồi có lẽ vào phục vụ Anne xứ Brittany |
| 1513 | Soạn *Christus vincit* nhân cuộc bầu Leo X |
| 1515 | Được Leo X phong công chứng viên tông toà ở Bologna, chuyến đi duy nhất ra ngoài nước Pháp mà ta biết |
| 1518 | Kế nhiệm Loyset Compère làm canon ở Saint-Quentin |
| 30/10/1522 | Mất ở Saint-Quentin, chôn ở đó |

## Âm nhạc và đóng góp
Từ khoảng 1509 ông là nhà soạn nhạc chính của triều đình Pháp, viết cho đám cưới, lễ đăng quang, bầu giáo hoàng và tang lễ. Còn lại 15 thánh lễ, 9 Magnificat, khoảng 20 chanson và hơn 100 motet ([[motet]], [[thanh-le-va-requiem]]). Ông dùng mô phỏng theo cặp, canon và phức điệu các bè bình đẳng như Josquin, nhưng kết cấu đồng đều, ít tương phản hơn; sau 1500 chú ý hơn đến hợp âm, có thể do ảnh hưởng Ý ([[doi-am]]). *Nesciens mater* cho tám bè là canon bốn lớp. Ông là thầy có ảnh hưởng, học trò nổi nhất là Adrian Willaert. Glarean khen giai điệu ông "chảy như sợi chỉ mềm" và nói ai cũng có bản nhạc của ông.

## Giai thoại và điều chưa chắc
- **Năm sinh và quê** (Haut-Wignes) chưa có tài liệu vững.
- **Học Josquin** và **vào phục vụ Anne xứ Brittany** chỉ là suy luận.
- **Biên tập Medici Codex**: chưa xác minh.
- **Vai trò ở Field of the Cloth of Gold** (1520): chỉ được xem là có thể.
- Mouton đôi khi bị lẫn với các nhạc sĩ cùng thời có tên giống; cần cẩn trọng với các gán ghép cũ.

## Bối cảnh
Ông sống trong triều đình Pháp thời Louis XII và François I, thời kỳ Pháp mở rộng sang Ý. Nhà thờ tập thể và nhà thờ chính toà phía bắc nước Pháp (Amiens, Grenoble, Saint-Quentin) là nơi ông làm việc nhiều nhất. Nhà in Petrucci và Attaingnant giúp nhạc ông lưu hành rộng ([[lich-su-in-an-am-nhac]]).
`,
    refs: [
      ['Wikipedia — Jean Mouton', 'https://en.wikipedia.org/wiki/Jean_Mouton'],
    ],
  },

  'Adrian Willaert': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1490 | Sinh, có lẽ ở Rumbeke gần Roeselare hoặc ở Bruges |
| k. 1515 | Lần đầu đến Roma; ca đoàn nhầm một motet của ông là của Josquin |
| 7/1515 | Vào phục vụ Hồng y Ippolito I d'Este ở Ferrara; có thể đi cùng ông, kể cả sang Hungary (1517–1519) |
| 1520 | Ippolito mất; ông chuyển sang Công tước Alfonso I xứ Ferrara |
| 1527 | Được bổ nhiệm maestro di cappella ở San Marco, Venice, nhờ Doge Andrea Gritti; giữ chức đến khi mất |
| 1550 | In *Salmi spezzati*, tác phẩm đa hợp xướng đầu tiên của trường phái Venice |
| 7/12/1562 | Mất ở Venice |
| 1568 | *Musica nova* in sau khi ông mất |

## Âm nhạc và đóng góp
Ông viết gần như mọi thể loại thời mình: 8 (có thể 10) thánh lễ, hơn 50 thánh vịnh và thánh ca, hơn 150 motet, khoảng 60 chanson Pháp, hơn 70 madrigal Ý và 17 ricercare ([[motet]], [[madrigal]]). Ông được coi là người sáng lập trường phái Venice, phát triển lối viết hợp xướng đối đáp cho hai ban hát trên hai gác của San Marco; ông cũng góp phần chuẩn hoá madrigal năm bè cùng Cipriano de Rore và giúp hình thành canzone và ricercare, tiền thân nhạc khí. Ông dạy nhiều nhạc sĩ lớn: Rore, Zarlino, Andrea Gabrieli. *Quid non ebrietas?* (hay "Duo cromatic") là bài hai bè nổi tiếng về cromatic.

## Giai thoại và điều chưa chắc
- **Học luật ở Paris** rồi mới chuyển sang âm nhạc, và học với Jean Mouton: chỉ do Zarlino kể.
- **Câu chuyện ở Roma**: ca đoàn giáo hoàng hát motet của ông tưởng của Josquin; khi ông nói mình là tác giả, các ca sĩ không chịu hát lại. Đây là truyền thuyết, nguồn kể muộn.
- **Phát minh lối đối đáp**: Zarlino gán công cho ông, nhưng nghiên cứu sau cho thấy Dominique Phinot và Johannes Martini đã dùng sớm hơn; chỉ các bài của ông là nổi tiếng trước.
- **Quê**: Rumbeke hay Bruges.
- **Số thánh lễ**: 8 hay 10.
- Việc ông ảnh hưởng đến Palestrina trẻ tuổi chỉ là khả năng.

## Bối cảnh
Venice là nước cộng hoà thương mại giàu có; nhà thờ San Marco có hai gác đàn organ đối diện, rất hợp lối hát đối đáp ([[organ-ong]]). Chức maestro di cappella ở đó cho ông quyền lực lớn trong nhạc Venice. Trước đó ông ở Ferrara dưới nhà Este.
`,
    refs: [
      ['Wikipedia — Adrian Willaert', 'https://en.wikipedia.org/wiki/Adrian_Willaert'],
    ],
  },

  'Nicolas Gombert': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1495 | Sinh, có lẽ ở miền nam Flanders giữa Lille và Saint-Omer, có thể La Gorgue |
| 1526 | Thuê làm ca sĩ trong nhà nguyện Hoàng đế Charles V |
| 1529 | Có tài liệu là thầy ca đồng tử của nhà nguyện |
| 1530s | Thụ phong giáo sĩ (có lẽ linh mục), nhận bổng lộc ở nhiều nhà thờ chính toà |
| 1540 | Biến mất khỏi sổ sách nhà nguyện; Cardan về sau viết rằng ông bị kết án làm khổ sai vì xâm hại một cậu bé thuộc triều đình |
| k. 1547 | Có lẽ được ân xá; một lá thư gửi motet từ Tournai cho Ferrante I Gonzaga thuộc thời gian này |
| 1556–1561 | Mất trong khoảng này: Finck ghi ông còn sống năm 1556, Cardan ghi ông đã mất năm 1561 |

## Âm nhạc và đóng góp
Khoảng 10 thánh lễ (chín còn nguyên), khoảng 140 motet, khoảng 70 chanson, tám Magnificat và vài bài khác ([[motet]], [[thanh-le-va-requiem]]). Motet là phần có ảnh hưởng nhất. Lối viết dày đặc, các bè đan nhau, mô phỏng ở khoảng cách rất gần, ưa âm vực trầm, vào bè không đều, đảo phách; có đoạn đa điệu thức và quan hệ chéo (false relation) để biểu cảm ([[doi-am]]). Ông viết cho 8, 10 và 12 bè nhưng đổi nhóm bè liên tục thay vì chia đối đáp. Nhạc ông được Lassus, Monteverdi và những người khác lấy làm chất liệu; thế hệ sau chuyển sang kết cấu giản dị hơn, một phần vì yêu cầu rõ lời của Công đồng Trent, còn lối đối âm của ông sống tiếp trong canzona và ricercar.

## Giai thoại và điều chưa chắc
- **Học Josquin ở Condé**: chỉ dựa trên Hermann Finck.
- **Án khổ sai**: nguồn chính là Cardan; không rõ thời gian bị giam.
- **Magnificat soạn trong xiềng xích**: Cardan nói chúng giúp ông được ân xá và nhận một bổng lộc; một giả thuyết khác cho là tập motet bốn bè thống hối (*First Book*) mới là tác phẩm Cardan nhắc.
- **Chanson ký "Nicolas"** ở Paris có thể là của Nicolas de La Grotte hay Guillaume Nicolas.
- **Ngày mất** và những năm cuối không rõ.
- Ông chưa bao giờ chính thức có chức danh giám đốc âm nhạc.

## Bối cảnh
Nhà nguyện Charles V đi theo Hoàng đế khắp lãnh thổ rộng lớn của ông từ Tây Ban Nha đến Hà Lan, Đức, Ý. Gombert không chính thức là nhà soạn nhạc cung đình nhưng thường soạn nhạc cho các sự kiện quan trọng trong đời hoàng đế.
`,
    refs: [
      ['Wikipedia — Nicolas Gombert', 'https://en.wikipedia.org/wiki/Nicolas_Gombert'],
    ],
  },

  'Jacques Arcadelt': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/8/1507 | Sinh ở Namur |
| cuối 1520s | Có mặt ở Florence, có thể gặp Philippe Verdelot |
| trước 1538 | Chuyển đến Roma, vào ca đoàn giáo hoàng ở St. Peter |
| 1539 | Vào ca đoàn Sistina làm magister puerorum; in bốn tập madrigal |
| k. 1542 | Phổ nhạc hai sonnet của Michelangelo; Michelangelo thờ ơ |
| 1551 | Rời Ý sang Pháp, ở đó đến cuối đời |
| 1557 | In tập thánh lễ tặng Charles de Guise, Hồng y Lorraine, người ông làm maître de chapelle |
| 14/10/1568 | Mất ở Paris, 61 tuổi |

## Âm nhạc và đóng góp
Ông nổi tiếng nhất là madrigalist: khoảng 250 madrigal (khoảng 50 bài gán chưa chắc, có thể còn 250 bài vô danh khác là của ông), 125 chanson Pháp, 24 motet, ba thánh lễ, Magnificat và Lamentations ([[madrigal]], [[motet]]). Madrigal phần lớn bốn bè, giản dị, du dương, chủ yếu thuộc thang âm tự nhiên, xen kẽ đồng âm và đa âm, ít minh hoạ từ ngữ và cromatic như các madrigalist sau. Tập madrigal thứ nhất được cho là tuyển tập in nhiều nhất thời đó. Chanson của ông thường theo từng âm tiết, đôi khi có từng khổ; một số được viết lại thành madrigal.

## Giai thoại và điều chưa chắc
- **Gốc Flanders**: một bản ghi "Jacobus flandrus" ở nhà nguyện Julian (1/1539) chưa chắc là ông.
- **Số bài madrigal**: 50 bài gán chưa chắc, có thể 250 bài vô danh khác.
- **Số ấn bản tập I**: một nơi ghi 45, nơi khác ghi 58 bản in lại đến 1654; có thể do cách đếm khác nhau.
- **Michelangelo trả công bằng vải satin để may áo** và **bức *The Lute Player* của Caravaggio** vẽ một nhạc công đọc nhạc của ông: được kể như sự thật nhưng chỉ là giai thoại.
- Rabelais nhắc ông trong lời tựa Quyển IV của *Gargantua và Pantagruel* cùng dàn ca sĩ hát bài tục.
- Bài *Ave Maria* gán cho ông thật ra do Pierre-Louis Dietsch soạn năm 1842, chuyển soạn từ một chanson của ông.

## Bối cảnh
Ông sống giữa nhạc Florence, giáo triều Roma và triều đình Pháp, những nơi madrigal và chanson được ưa chuộng. Sistina là ca đoàn đa số người phương bắc; nhà in Gardano ở Venice là nhà xuất bản chính của ông ở Ý ([[lich-su-in-an-am-nhac]]).
`,
    refs: [
      ['Wikipedia — Jacques Arcadelt', 'https://en.wikipedia.org/wiki/Jacques_Arcadelt'],
    ],
  },

  'Jacobus Clemens non Papa': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1510–1515 | Sinh, có thể ở Middelburg, Zeeland (chứng cứ mâu thuẫn) |
| cuối 1530s | Nhắc đến chắc chắn đầu tiên: Attaingnant in chanson của ông ở Paris |
| 1544–1545 | Làm succentor ở nhà thờ chính toà Bruges |
| giữa 1540s | Bắt đầu hợp tác xuất bản lâu dài với Tielman Susato ở Antwerp |
| 1545–1549 | Có lẽ là chỉ huy ca đoàn của Philippe de Croÿ, Công tước Aerschot |
| 1550 | Ca sĩ và nhà soạn nhạc của hội huynh đệ Đức Bà ở 's-Hertogenbosch |
| 1555 hoặc 1556 | Có lẽ năm mất |
| 1556–1557 | Susato in *Souterliedekens* |

## Âm nhạc và đóng góp
Khoảng 15 thánh lễ (phần lớn parody) và một Requiem, 15 Magnificat, khoảng 233 motet (chỉ ba bài lời thế tục), hơn 100 tác phẩm thế tục gồm khoảng 77 chanson chính thức, và 159 *Souterliedekens* ([[motet]], [[thanh-le-va-requiem]]). *Souterliedekens* là các thánh vịnh tiếng Hà Lan dựng trên giai điệu dân gian, bộ thánh vịnh phức điệu tiếng Hà Lan hoàn chỉnh đầu tiên và là nhạc nhiều bè Tin Lành duy nhất bằng tiếng Hà Lan thời Phục hưng. Ông đại diện cho "phương ngữ phương bắc" của phong cách Franco-Flemish, dường như không đi Ý, nối thế hệ sau Josquin với thời Palestrina và Lassus; Lassus chịu ảnh hưởng ông. Nhạc ông lan sang Đức, Pháp, Tây Ban Nha, Anh.

## Giai thoại và điều chưa chắc
- **Biệt hiệu "non Papa"** ("không phải Giáo hoàng"): có thuyết Susato đùa để phân biệt với Giáo hoàng Clement VII; thuyết khác là để phân biệt với nhà thơ Jacobus Papa ở Ypres. Cả hai đều bị coi là khó tin vì Clement VII mất năm 1534, trước khi nhạc ông được in, và hai họ khác hẳn nhau; có lẽ chỉ là câu đùa rồi dính luôn.
- **Nơi sinh**: Middelburg chưa chắc.
- **Cái chết**: một bài thương tiếc của Jacobus Vaet (1558) gợi ý cái chết bạo lực nhưng không nêu chi tiết; mộ ở Diksmuide theo nguồn năm 1644.
- **Làm việc ở Dordrecht** chỉ dựa trên chứng cứ mỏng.

## Bối cảnh
Ông làm ở các thành phố Flanders và Brabant thời cực thịnh của nhà in Antwerp. Công giáo và Tin Lành đang giằng co: sau lệnh cấm sách dị giáo của Công tước Alba, các bản phổ thánh vịnh của ông vẫn còn qua được năm 1569.
`,
    refs: [
      ['Wikipedia — Clemens non Papa', 'https://en.wikipedia.org/wiki/Clemens_non_Papa'],
    ],
  },

  'Cipriano de Rore': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1515 hoặc 1516 | Sinh, có lẽ ở Ronse (Renaix), Flanders (bia mộ ghi 49 tuổi) |
| 1542 | Tập madrigal đầu tiên in ở Venice; tháng 11 ông ở Brescia, ở đó đến 4/1545 |
| 6/5/1546 | Bắt đầu làm maestro di cappella ở Ferrara dưới Công tước Ercole II d'Este |
| 1558 | Đến Munich, nơi một bản chép tay 26 motet có tranh minh hoạ của Hans Muelich được chuẩn bị |
| 7/1559 | Rời Ferrara sau khi Công tước Alfonso II chuộng một nhạc sĩ khác |
| 1560 | Sang Parma phục vụ nhà Farnese |
| 1563–1564 | Ngắn ngủi làm maestro di cappella ở San Marco, Venice sau khi Willaert mất, rồi trở lại Parma |
| 9/1565 | Mất ở Parma (giữa 11 và 20/9), chôn trong nhà thờ chính toà |
| 1566 | Tập madrigal thứ năm in sau khi ông mất |

## Âm nhạc và đóng góp
Khoảng 107 madrigal chắc chắn là của ông (in chủ yếu 1542–1565), 16 bài Latin thế tục, ít nhất bảy chanson, 53 motet, năm thánh lễ, một Passion theo Gioan và Magnificat ([[madrigal]], [[motet]]). Giọng nghiêm trang, biểu cảm, lấy lời văn dẫn dắt, ít nể cấu trúc dòng thơ; chuẩn là năm bè; thử nghiệm cromatic chịu ảnh hưởng Nicola Vicentino. Nhạc thánh của ông hướng về Josquin. Alfred Einstein gọi Monteverdi là "người kế tục tinh thần đích thực" của Rore và viết rằng "Rore nắm chìa khoá của toàn bộ sự phát triển madrigal Ý sau 1550".

## Giai thoại và điều chưa chắc
- **Học với Willaert ở Venice và hát ở San Marco**: lâu nay được kể nhưng chưa có tài liệu.
- **Liên hệ với chuyến đi Naples của Margaret xứ Parma năm 1533**: chỉ là suy đoán.
- **Lý do rời Ferrara và Venice**: suy luận, chưa xác nhận.
- **Nguyên nhân cái chết** không rõ.
- **Việc đào tạo âm nhạc** của ông không có tài liệu.
- Văn bia do cháu ông dựng bày tỏ hy vọng tên ông được nhớ đến mãi về sau.

## Bối cảnh
Ông phục vụ các triều Ferrara và Parma, và ngắn ngủi ở San Marco ([[thoi-ky-phuc-hung]]). Quê Ronse đã bị tàn phá khi ông về thăm mùa thu 1559. Venice, Ferrara là những nơi thi ca Petrarch và madrigal được thưởng thức.
`,
    refs: [
      ['Wikipedia — Cipriano de Rore', 'https://en.wikipedia.org/wiki/Cipriano_de_Rore'],
    ],
  },

  'Philippe de Monte': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1521 | Sinh ở Mechelen (năm chỉ là ước lượng) |
| thời thiếu niên | Ca đồng tử ở nhà thờ St. Rumbold, Mechelen |
| 1554 | Ấn phẩm đầu tiên, lúc khoảng 33 tuổi |
| 1554–1555 | Ở Anh một thời gian dưới thời Mary I, trong ca đoàn của Philip II |
| 1568 | Được bổ nhiệm Kapellmeister của Maximilian II ở Vienna, kế Jacobus Vaet |
| 1583 | Bắt đầu làm việc ở Prague |
| 4/7/1603 | Mất ở Prague |

## Âm nhạc và đóng góp
Ông viết hơn 1.100 madrigal thế tục trong 34 tập (không phải tập nào cũng còn), khoảng 40 thánh lễ và khoảng 260 tác phẩm thánh khác, kể cả motet và *madrigali spirituali* ([[madrigal]], [[motet]]). Ông cộng tác với nhà xuất bản Gardano ở Venice; lời tựa các tập thường cảm ơn người bảo trợ tài chính. Tác phẩm sớm táo bạo, nhiều cromatic; về sau giản dị hơn, nhiều mô-típ ngắn và đồng âm, ngược với quỹ đạo của Monteverdi. Ông chuộng thơ của Petrarca, Bembo và Sannazaro.

## Giai thoại và điều chưa chắc
- **Năm sinh** chỉ là xấp xỉ.
- **Lý do đổi phong cách**: có người cho do đổi chọn thơ, người khác cho do triều đình Habsburg.
- **Tôn giáo**: không rõ, nhưng ít có khả năng ông ủng hộ Cải cách.
- **Không có chức vụ ở nhà thờ hay nhà quý tộc nào trước khi lên Vienna** dù tài năng lớn.
- **Cách viết tên**: Philippe, Philippus, Filippo di Monte.
- Có miêu tả đương thời nói ông "trầm lặng, khiêm tốn, hiền như con gái" và không thích làm việc giữa các nhạc sĩ Tây Ban Nha trong ca đoàn Philip.

## Bối cảnh
Triều đình Habsburg ở Vienna và Prague là trung tâm văn hoá lớn của Trung Âu, với nhà nguyện hoàng gia hùng hậu. Ông cũng có thời gian ở Ý (Naples, Roma, phục vụ Hồng y Orsini) và dạy học trò như Gian Vincenzo Pinelli ở Padua.
`,
    refs: [
      ['Wikipedia — Philippe de Monte', 'https://en.wikipedia.org/wiki/Philippe_de_Monte'],
    ],
  },

  'Orlande de Lassus': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1532 | Sinh ở Mons, Hainaut (năm chỉ là khả dĩ) |
| tuổi 12 | Rời Hà Lan theo Ferrante Gonzaga đến Mantua, Sicily, Milan (1547–1549) |
| đầu 1550s | Hát và soạn nhạc cho Costantino Castrioto ở Naples |
| 1553 | Làm maestro di cappella nhà thờ St John Lateran ở Roma, khoảng một năm |
| 1555–1556 | Về Hà Lan; tác phẩm đầu in ở Antwerp |
| 1556 | Vào triều Albrecht V, Công tước Bavaria, ở Munich, ở lại đến cuối đời |
| 1558 | Cưới Regina Wäckinger |
| trước 1563 | Làm maestro di cappella ở Munich, kế Ludwig Daser |
| 1570 | Hoàng đế Maximilian II phong quý tộc, điều hiếm với nhạc sĩ |
| 1580 | Từ chối lời mời của Dresden |
| 14/6/1594 | Mất ở Munich |

## Âm nhạc và đóng góp
Hơn 2.000 tác phẩm bằng tiếng Latin, Ý, Pháp và Đức: khoảng 530 motet, 175 madrigal và villanella Ý, 150 chanson, 90 lied Đức, khoảng 60 thánh lễ hoàn chỉnh (phần lớn parody) và hơn 100 Magnificat. Tiêu biểu: *Prophetiae Sibyllarum* (12 motet), *Penitential Psalms* (1584) và *Lagrime di San Pietro* (1594, in 1595) ([[motet]], [[madrigal]], [[thanh-le-va-requiem]]). Ông là đại diện hàng đầu của phong cách phức điệu Franco-Flemish chín muồi, cùng Byrd, Palestrina, Victoria, rất đa dạng, từ hài hước đến cromatic dữ dội, trong khi ngôn ngữ hoà âm vẫn bảo thủ ngay cả khi dùng kết cấu đa hợp xướng kiểu Venice. Tác phẩm cuối chịu ảnh hưởng Phản Cải cách. Không còn nhạc khí nào của ông.

## Giai thoại và điều chưa chắc
- **Bị bắt cóc ba lần vì giọng hát khi còn bé**: chuyện kể phổ biến, chưa được xác nhận độc lập.
- **Chết đúng ngày Wilhelm V quyết định sa thải ông vì lý do kinh tế**, ông không bao giờ đọc thư: chuyện thường được kể; nguồn là một mô tả trong văn liệu về ông.
- **Penitential Psalms như sự chuộc tội cho vụ thảm sát Đêm St. Bartholomew**: chỉ một nguồn (Ferris) nói vậy, không phải sự thật đã xác lập.
- **Năm 1554 ở đâu** không rõ; chuyện ông đi Pháp và Anh thiếu chứng cứ vững.
- **Nghĩa của *musica reservata*** còn tranh luận.
- Bài hát Hà Lan ông nhắc đến đã thất lạc; mối liên hệ với Shakespeare (*Henry IV, Part II*) cần dẫn nguồn.

## Bối cảnh
Munich dưới nhà Wittelsbach là một triều đình Công giáo giàu có, có dàn nhạc và ca đoàn hàng đầu. Ông được Hoàng đế Maximilian II phong quý tộc; những năm cuối bị bệnh "u sầu" (melancholia hypochondriaca) và triều đình cắt giảm chi tiêu.
`,
    refs: [
      ['Wikipedia — Orlande de Lassus', 'https://en.wikipedia.org/wiki/Orlande_de_Lassus'],
    ],
  },

  'Costanzo Festa': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1485–1490 | Sinh, có lẽ ở Piedmont gần Turin (ước lượng từ 1480 đến 1495; gần đây nghiêng về cuối 1480s) |
| đầu 1514 | Soạn motet *Quis dabit oculis* cho tang lễ Anne xứ Brittany (mất 9/1/1514), tác phẩm có niên đại sớm nhất |
| 1514 | Đến Ferrara với các motet, cho thấy ông đã có tiếng |
| k. 1510–1517 | Sống ở Ischia, dạy nhạc cho nhà d'Avalos |
| 1517 | Đến Roma, làm ca sĩ cho Giáo hoàng Leo X; ở ca đoàn Sistina gần 30 năm |
| 9/1536 | Thử thu xếp in nhạc thánh ở Venice qua người bảo trợ Filippo Strozzi, đòi 200 scudi; không thành |
| 1537 | Madrigal ba bè in ở Venice |
| 1539 | Soạn nhạc cho một đám cưới nhà Medici |
| 1543 | Quá ốm không đi Bologna cùng Giáo hoàng |
| 10/4/1545 | Mất ở Roma |

## Âm nhạc và đóng góp
Ông là một trong số ít người Ý trong ca đoàn giáo hoàng vốn do người phương bắc chiếm ưu thế, và được mô tả là nhà phức điệu bản xứ Ý đầu tiên có tiếng quốc tế. Nhạc thánh gồm bốn thánh lễ, hơn 40 motet, Lamentations, Magnificat và kinh cầu Đức Mẹ ([[motet]], [[thanh-le-va-requiem]]); ông ít ưa mô phỏng, hay dùng đoạn đồng âm, có thể báo trước phản ứng sau Công đồng Trent. Một số madrigal sớm nhất của bất kỳ nhà soạn nào có thể là của ông, từ giữa 1520s; chủ yếu madrigal ba bè với nhịp nhanh và đoạn đồng âm dài, in chủ yếu 1543–1549 ([[madrigal]]). Tác phẩm nhạc khí nổi bật là 125 biến tấu trên *La Spagna* (cantus firmus 37 nốt). Palestrina thời trẻ mô phỏng nhạc ông.

## Giai thoại và điều chưa chắc
- **Nơi và năm sinh** chỉ dựa trên chứng cứ gián tiếp.
- ***La Spagna***: lâu nay gán cho Nanino; nghiên cứu mới cho 125 biến tấu đầu là của Festa. Tác phẩm được ví với *Gradus ad Parnassum* của Fux và nhạc cuối của Bach, một cách nói mang tính huyền thoại.
- **Quan hệ với Sebastiano Festa**: có thể nhưng chưa xác nhận.
- Rabelais nhắc ông trong lời tựa Quyển IV của *Gargantua và Pantagruel*, là người Ý duy nhất trong danh sách ca sĩ.
- Một số niên đại và thông tin trên trang nguồn thiếu dẫn nguồn.

## Bối cảnh
Ông sống giữa các triều đình Ý đầu thế kỷ 16 và ca đoàn Sistina của giáo hoàng, nơi nhạc sĩ phương bắc chiếm đa số. Roma thời Leo X (Medici) và Clement VII là trung tâm bảo trợ nghệ thuật lớn.
`,
    refs: [
      ['Wikipedia — Costanzo Festa', 'https://en.wikipedia.org/wiki/Costanzo_Festa'],
    ],
  },

  'Giovanni Pierluigi da Palestrina': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1525 hoặc 1526 | Sinh ở Palestrina, Quốc gia Giáo hoàng (có thể 3/2/1525); cha mẹ gốc Napoli |
| 1537 | Có văn bản đầu tiên ở Roma: ca đồng tử ở Santa Maria Maggiore |
| 1544–1551 | Organ nhà thờ chính toà St. Agapito ở Palestrina |
| 1551 | Giáo hoàng Julius III bổ nhiệm maestro di cappella của Cappella Giulia ở St. Peter |
| 1554 | In tập thánh lễ đầu tiên, tặng Julius III |
| 1555 | Paul IV yêu cầu ca sĩ giáo hoàng phải là giáo sĩ; ông đã có gia đình nên phải rời Cappella Giulia |
| 1555–1560 | Giám đốc âm nhạc ở St. John Lateran |
| 1561–1566 | Giám đốc âm nhạc ở Santa Maria Maggiore |
| 1571 | Trở lại Cappella Giulia, ở đó đến cuối đời |
| 1572–1580 | Mất anh/em trai, hai con trai và vợ đầu Lucrezia Gori vì dịch hạch; sau đó cưới Virginia Dormoli, một goá phụ giàu có |
| 2/2/1594 | Mất vì viêm màng phổi ở Roma, chôn ở St. Peter |

## Âm nhạc và đóng góp
Khoảng 105 thánh lễ, 68 offertory, hơn 140 madrigal, hơn 300 motet, hơn 72 thánh ca, 35 Magnificat, 11 kinh cầu và nhiều bộ Lamentations ([[thanh-le-va-requiem]], [[motet]]). Nổi bật: *Missa Papae Marcelli*, madrigal *Vestiva i colli* (1566) và các motet *Canticum canticorum* (1584). Giai điệu là công cụ chính, nghĩ trong các điệu thức nhà thờ và thường dựa trên [[thanh-ca-gregorian]]; nghịch âm chủ yếu ở phách yếu nên phức điệu mượt, phụ âm; chú ý rõ lời, âm sắc, đôi khi đa hợp xướng ([[doi-am]], [[dieu-thuc]]). Ông là nhân vật trung tâm của trường phái Roma cùng Lassus và Victoria, Bach từng nghiên cứu và chuyển soạn *Missa sine nomine*; "phong cách Palestrina" dạy ngày nay chủ yếu từ sự hệ thống hoá của Fux (1725), vốn đơn giản hoá thực hành của ông.

## Giai thoại và điều chưa chắc
- **Công đồng Trent và *Missa Papae Marcelli***: chuyện phổ biến cho rằng thánh lễ này được viết để cứu phức điệu khỏi lệnh cấm là không có cơ sở; Công đồng chưa từng cấm phức điệu nhà thờ, và thánh lễ có lẽ có trước các cuộc tranh luận đó.
- **"Vị cứu tinh của nhạc nhà thờ"**: huyền thoại được củng cố bởi chuyên khảo của Giuseppe Baini năm 1828.
- **Ngày sinh** chính xác không rõ; **phần mộ** chưa từng được xác định.
- Việc sự điềm đạm trong nhạc ông là do áp lực sản xuất hay lựa chọn có chủ ý còn tranh luận; trang nguồn cho rằng nó phản ánh tâm trạng nghi lễ.
- Ấn bản và bản thu hiện đại thường ưu tiên điệu thức quen thuộc và bố trí SATB, nên che đi sự đa dạng thực của các bài ông.

## Bối cảnh
Roma thời Phản Cải cách: giáo triều kiểm soát chặt nhạc nhà thờ, ca đoàn là chức vụ ổn định và có uy tín. Cuộc đời Palestrina gắn với ba nhà thờ lớn (St. Peter, Lateran, Santa Maria Maggiore) và những mất mát gia đình do dịch hạch những năm 1570.
`,
    refs: [
      ['Wikipedia — Giovanni Pierluigi da Palestrina', 'https://en.wikipedia.org/wiki/Giovanni_Pierluigi_da_Palestrina'],
    ],
  },
}

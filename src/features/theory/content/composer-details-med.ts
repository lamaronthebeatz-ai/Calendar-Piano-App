import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Trung cổ (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_MED: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Guido d\'Arezzo': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 991–992 | Sinh (năm phổ biến nhất, suy từ niên đại của *Micrologus*; các học giả khác đề xuất 992–998) |
| k. 1013 | Vào tu viện Pomposa để hoàn tất việc học |
| k. 1025 | Rời Pomposa sau bất đồng với các tu sĩ; sang Arezzo huấn luyện ca đoàn nhà thờ chính toà dưới quyền giám mục Tedald, bắt đầu viết *Micrologus* |
| k. 1028 | Giáo hoàng John XIX mời đến Roma; ông phải rời đi vì bệnh vào mùa hè |
| 20/5/1033 | Văn bản cuối cùng còn biết nhắc đến ông; ngày mất không rõ |

## Âm nhạc và đóng góp
Guido là nhà sư phạm hơn là nhà soạn nhạc: ông tìm cách để ca sĩ học một bài [[thanh-ca-gregorian]] mới mà không phải thuộc lòng từng giai điệu qua nhiều năm. Bốn tác phẩm còn lại của ông là *Micrologus* (cẩm nang thực hành về thánh ca, phức điệu sơ khai, [[dieu-thuc]] và ký âm), *Regulae rhythmicae*, lời tựa *Prologus in antiphonarium* và bức thư *Epistola ad Michaelem* (còn gọi *Epistola de ignoto cantu*). Ông được gắn với việc đặt nốt lên các dòng kẻ có tổ chức, tiền thân của [[khuong-nhac]], và với việc dạy cao độ bằng sáu âm tiết ut–re–mi–fa–sol–la lấy từ sáu nửa dòng đầu của bài thánh ca *Ut queant laxis* ([[xuong-am]]). Về sau Doni đổi "Ut" thành "Do" và người ta thêm "Si" để đủ thang âm.

## Giai thoại và điều chưa chắc
- **"Bàn tay Guido"**: thường được ghi cho ông, nhưng ông chỉ mô tả một dạng sơ khai; hệ thống bàn tay hoàn chỉnh với các hexachord không thể gán chắc cho ông.
- **Nơi sinh**: Arezzo hay Pomposa vẫn tranh cãi; các thuyết cho rằng ông người Anh hay người Đức bị coi là vô căn cứ.
- **Ở Pháp, học ở Saint-Maur-des-Fossés, bị bỏ tù**: những chuyện này không có chứng cứ; thuyết ở Pháp xuất hiện lần đầu năm 1494 trong tác phẩm của Trithemius.
- **Nơi ở cuối đời**: việc ông ở một tu viện Camaldoli gần Arezzo là có khả năng nhưng chưa xác nhận.
- Cả việc viện trưởng Pomposa có mời ông trở lại hay không cũng chỉ dựa vào chính bức thư của ông.

## Bối cảnh
Ý đầu thế kỷ 11: tu viện và nhà thờ chính toà là nơi đào tạo ca sĩ. Ca đoàn thuộc lòng hàng trăm bài thánh ca, nên một phương pháp đọc nhạc nhanh là điều hiếm quý. Giáo hoàng và giám mục thời đó tranh thủ các nhà sư phạm giỏi cho trường ca của mình.
`,
    refs: [
      ['Wikipedia — Guido of Arezzo', 'https://en.wikipedia.org/wiki/Guido_of_Arezzo'],
    ],
  },

  'Hildegard von Bingen': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1098 | Sinh ở Bermersheim vor der Höhe (vùng Rhein-Pfalz); năm sinh chỉ là ước chừng |
| 1112 | Vào cùng Jutta ở Disibodenberg (tuổi lúc vào tu, 8 hay 14, còn tranh luận) |
| 1136 | Được bầu làm *magistra* (bề trên) sau khi Jutta mất |
| 1141 | Nhận lệnh "viết ra" điều mình thấy, ở tuổi 42; bắt đầu *Scivias* |
| 1147–1148 | Giáo hoàng Eugenius III chấp thuận trong thượng hội đồng ở Trier |
| 1150 | Dời cùng khoảng 20 nữ tu sang Rupertsberg |
| 1165 | Lập tu viện Eibingen |
| 17/9/1179 | Mất ở Bingen, thọ 81 tuổi |

## Âm nhạc và đóng góp
Khoảng 69 sáng tác còn lại, mỗi bài có lời riêng, phần lớn thuộc chu kỳ *Symphonia armoniae celestium revelationum*. Đây là [[thanh-ca-gregorian]] đơn âm nhưng rất khác chuẩn: tầm âm rộng, nhiều đoạn kéo dài trên một âm tiết (melisma). *Ordo Virtutum* (có thể từ khoảng 1151) là vở kịch luân lý được coi là kịch nhạc sớm nhất còn biết không gắn với nghi lễ. Ngoài âm nhạc bà còn viết *Scivias*, *Liber Vitae Meritorum*, *Liber Divinorum Operum*, các luận văn y học và thiên nhiên *Physica*, *Causae et Curae*, khoảng 400 bức thư, và một ngôn ngữ bịa gọi *Lingua ignota*.

## Giai thoại và điều chưa chắc
- **Phong thánh**: tiến trình phức tạp; ngày 10/5/2012 Giáo hoàng Benedict XVI cho "phong thánh tương đương" và ngày 7/10/2012 tuyên bố bà là Tiến sĩ Hội thánh.
- **Lingua ignota**: Barbara Newman cho rằng nó dùng để gắn kết các nữ tu, Sarah Higley phản bác vì không có bằng chứng nó từng được dạy cho họ.
- **"Chỉ là người vô học"**: các học giả nữ quyền đọc lời tự nhận này là chiến lược tu từ để củng cố uy quyền.
- **Hoa bia (hops)**: *Physica* được cho là nhắc sớm nhất đến hoa bia như chất bảo quản, nhưng đây mới chỉ là "được cho là".
- Vai trò của thư ký Volmar và Guibert of Gembloux trong việc ghi chép các tác phẩm của bà cũng cần lưu ý khi nói bà "tự viết".

## Bối cảnh
Nữ tu dòng Benedict ở sông Rhein thế kỷ 12. Bà sống trong các cộng đoàn nhỏ trên sườn đồi, nơi lời cầu nguyện hát là nhịp sống hằng ngày, đồng thời viết thư cho giáo hoàng và hoàng đế và đi giảng công khai ở Đức.
`,
    refs: [
      ['Wikipedia — Hildegard of Bingen', 'https://en.wikipedia.org/wiki/Hildegard_of_Bingen'],
    ],
  },

  'Bernart de Ventadorn': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1130–1140 | Sinh (các khoảng ước lượng, không có ngày chắc) |
| k. 1147–1180 | Thời gian hoạt động sáng tác của ông |
| 1215 | Giáo sư Boncompagno ở Bologna khen ông trong *Antiqua rhetorica* |
| k. 1190–1200 | Mất (ước lượng), nhiều khả năng trong một tu viện ở vùng Dordogne |

## Âm nhạc và đóng góp
Ông được coi là troubadour nổi tiếng nhất. Trong 45 bài thơ được biết, 18 bài còn giai điệu, nhiều nhất trong số các troubadour thế kỷ 12. Bài *Can vei la lauzeta mover* (Khi thấy chim sơn ca bay) là bài tiêu biểu nhất; Ezra Pound hai lần trích nó trong Canto CXX. Người ta thường cho rằng ông ảnh hưởng đến các trouvère miền bắc Pháp, nhưng đây chỉ là mối liên hệ có khả năng. Xem thêm [[ca-khuc-the-tuc-trung-co]].

## Giai thoại và điều chưa chắc
- **Xuất thân**: Uc de Saint Circ cho rằng ông là con một thợ làm bánh ở lâu đài Ventadorn; bài thơ châm biếm của Peire d'Alvernha lại kể cha ông là người hầu, lính hay thợ bánh, mẹ là người hầu hay thợ bánh. Hai nguồn lệch nhau.
- **Mối tình với bà chủ**: ông được cho là làm thơ cho Marguerite de Turenne, vợ vị tử tước Eble III, rồi bị buộc rời Ventadorn.
- **Chuyến sang Anh theo Eleanor xứ Aquitaine**: chủ yếu dựa vào chính thơ của ông, không có tài liệu độc lập.
- **Chết trong tu viện**: chỉ là suy luận có khả năng, không ghi rõ tu viện nào.

## Bối cảnh
Miền Occitania (nam Pháp) thế kỷ 12, nơi các lâu đài của tử tước và bá tước là sân khấu của thi ca cung đình. Nhạc sĩ lưu lạc từ nơi này sang nơi khác, sống nhờ sự bảo trợ của các lãnh chúa và các phu nhân.
`,
    refs: [
      ['Wikipedia — Bernart de Ventadorn', 'https://en.wikipedia.org/wiki/Bernart_de_Ventadorn'],
    ],
  },

  'Comtessa de Dia': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1140 | Sinh (theo hộp thông tin; không chắc) |
| k. 1175 hoặc k. 1212 | Hai mốc "hoạt động" khác nhau mà các nguồn đưa ra |
| k. 1270 | Chép bản *Manuscrit du roi*, nguồn duy nhất giữ nhạc của bà |
| k. 1212 | Mất (ước lượng) |

## Âm nhạc và đóng góp
Chỉ còn năm tác phẩm: bốn canso (*Ab joi et ab joven m'apais*, *A chantar m'er de so qu'ieu non volria*, *Estât ai en greu cossirier*, *Fin ioi me don'alegranssa*) và một tenso. *A chantar* là bài canso duy nhất của một trobairitz (nữ troubadour) còn đầy đủ giai điệu, nằm ở tờ 204 của *Manuscrit du roi*. Bản thảo này chép khoảng năm 1270 cho Charles xứ Anjou. Xem [[ca-khuc-the-tuc-trung-co]].

## Giai thoại và điều chưa chắc
- **Tên và gia đình**: chỉ xuất hiện dưới danh hiệu "Comtessa de Dia", có thể tên Beatritz hoặc Isoarda; có khả năng là con gái Bá tước Isoard II của Dia.
- **Chuyện tình trong *vida***: tiểu sử truyền thống nói bà lấy William de Poitiers và yêu Raimbaut d'Orange, nhưng các học giả gắn bà với những Raimbaut khác nhau, và có giả thuyết khác hẳn về chồng và người tình.
- **Tenso *Amics, en greu consirier***: thường gán cho Raimbaut d'Aurenga; có tranh luận bà có phải tác giả không.
- Bài viết gốc cũng nói các trích dẫn không có số trang, nên khó kiểm chứng từng chi tiết.

## Bối cảnh
Vùng Dia ở Provence thế kỷ 12–13, thế giới của các lâu đài nhỏ và các vòng thi sĩ cung đình, hiếm hoi có chỗ cho giọng nữ. Thơ được hát bằng tiếng Occitan.
`,
    refs: [
      ['Wikipedia — Comtessa de Dia', 'https://en.wikipedia.org/wiki/Comtessa_de_Dia'],
    ],
  },

  'Walther von der Vogelweide': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1170 | Sinh; nơi sinh chưa rõ (Waldviertel, Nam Tirol và Bohemia đều từng được đề xuất) |
| đến 1198 | Phục vụ ở triều đình Wien của công tước Friedrich I, học nghề dưới Reinmar von Hagenau |
| 1198–1201 | Ủng hộ vua Philipp xứ Schwaben, có mặt ở lễ đăng quang tại Mainz |
| 1208 | Sau khi Philipp bị ám sát, quay sang Otto xứ Brunswick |
| 1214 | Sau trận Bouvines, theo Friedrich II |
| 1220 | Nhận một thái ấp nhỏ ở Franken từ Friedrich II |
| k. 1230 | Mất (ước lượng), chôn ở Würzburg |

## Âm nhạc và đóng góp
Ông là Minnesinger nổi tiếng nhất và cũng là nhà thơ chính trị. Các bài nổi tiếng gồm *Under der linden* (tình ca), bài "Elegie" và *Palästinalied*. Giai điệu hoàn chỉnh duy nhất được gán rõ cho ông là của *Palästinalied*, giữ trong Mảnh Münster (MS Z, thế kỷ 14). Hai bài khác chỉ còn giai điệu từng phần. Neume trong Carmina Burana và Kremsmünster không đọc được.

## Giai thoại và điều chưa chắc
- **Truyền thuyết cho chim ăn trên mộ**: đến từ truyền thống, không có tài liệu.
- **Mộ**: bia gốc có chữ Latin đã mất; tượng đài dựng năm 1843, bia hiện nay là năm 1930.
- **Làm gia sư cho Heinrich (VII)** của Friedrich II: rất đáng ngờ vì chỉ dựa vào một bài thơ.
- **Giai điệu cho các tình ca khác**: có thể mượn từ bài hát Pháp hoặc Provence, nhưng chỉ là phỏng đoán.
- Nhiều mốc (như sự kiện triều đình 1200, 1203 và năm mất) còn dấu hỏi trong nguồn.

## Bối cảnh
Các triều đình Đức đầu thế kỷ 13, từ Wien đến các cung của Philipp, Otto, Friedrich II. Minnesang là nghệ thuật tình ca hiệp sĩ; Walther dùng nó để bình luận chính trị, nên đời ông gắn với cuộc tranh ngôi hoàng đế.
`,
    refs: [
      ['Wikipedia — Walther von der Vogelweide', 'https://en.wikipedia.org/wiki/Walther_von_der_Vogelweide'],
    ],
  },

  'Thibaut de Champagne': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 30/5/1201 | Sinh ở Troyes; làm Bá tước Champagne từ lúc sinh vì cha mất ngay trước đó |
| 1215–1222 | Cuộc chiến kế vị Champagne, kết thúc sau khi ông thành niên (1222) |
| 1226 | Rời cuộc vây Avignon sớm; Louis VIII mất ngay sau đó |
| 1234 | Lên ngôi vua Navarre, nối ngôi chú Sancho VII |
| 1239–1240 | Dẫn Thập tự chinh các nam tước |
| 1250 | Giám mục Pamplona họp thượng hội đồng vạ tuyệt thông ông |
| 8/7/1253 | Mất ở Pamplona, chôn ở nhà thờ chính toà |

## Âm nhạc và đóng góp
Ông là một quý tộc làm nghề thơ nhạc, một trouvère có nhiều bài còn lại, trong đó có bài còn nhạc. Số lượng chính xác không có trong nguồn người biên soạn đã đối chiếu. Xem [[ca-khuc-the-tuc-trung-co]].

## Giai thoại và điều chưa chắc
- **Tình ái với nhiếp chính Blanche xứ Castile**: lời đồn rằng ông yêu bà và làm thơ tôn vinh; nguồn cho rằng có thể không đúng và do các nam tước ghen tị tung ra.
- **Âm mưu đầu độc Louis VIII**: Roger of Wendover nói ông tính đầu độc vua ở Avignon; Matthew Paris kể một cuộc đấu tay đôi bị Blanche chặn. Đây là tin đồn.
- **Đặc sản mang về từ Thập tự chinh**: mảnh Thánh giá thật và hoa hồng "Provins" được kể; việc nho Chardonnay có được mang về hay không chỉ là "có lẽ".
- Kết quả thập tự chinh: quân sự không vẻ vang (đạo quân 400 hiệp sĩ bại ở Gaza trước khi ông đến), nhưng ngoại giao thì thu về Jerusalem; mức độ công của ông còn bàn.

## Bối cảnh
Vương quốc Pháp và miền Champagne thế kỷ 13: hội chợ Champagne, lâu đài, và các cuộc tranh chấp giữa bá tước với vua. Một ông vua có thể vừa cầm quân vừa hát.
`,
    refs: [
      ['Wikipedia — Theobald I of Navarre', 'https://en.wikipedia.org/wiki/Theobald_I_of_Navarre'],
    ],
  },

  'Adam de la Halle': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1245–1250 | Sinh, gắn với Arras |
| k. 1262 | *Le jeu de la feuillée*, vở kịch châm biếm có chính Adam, cha ông và dân Arras |
| 1282 | Bắt đầu *Le roi de Secile* ở triều Charles xứ Anjou |
| k. 1282–1283 | *Jeu de Robin et Marion*, viết ở triều Naples |
| 1285–1288 hoặc sau 1306 | Năm mất, không xác định |

## Âm nhạc và đóng góp
Ông học ngữ pháp, thần học và âm nhạc ở tu viện Cistercian Vaucelles gần Cambrai, rồi phục vụ Robert II xứ Artois và Charles xứ Anjou. Kho tác phẩm gồm khoảng 36 chanson, 46 rondet de carole, 18 jeu-parti, 14 rondeau, 5 motet, cùng một *congé* châm biếm. Ông vừa viết đơn âm vừa viết nhiều bè ([[motet]]). *Jeu de Robin et Marion* được gọi là vở kịch thế tục Pháp có nhạc sớm nhất còn lại; xem [[ca-khuc-the-tuc-trung-co]].

## Giai thoại và điều chưa chắc
- **Biệt danh "Bossu d'Arras" (Gã gù Arras)**: nguồn cho rằng có lẽ là tên họ, và chính Adam nói mình không gù.
- **Năm mất**: giả thuyết 1288 và giả thuyết sau 1306 là hai ước lượng lệch nhau.
- ***Le jeu du pelerin***: chỉ đôi khi được gán cho ông.
- **Vợ Marie**: xuất hiện trong nhiều bài của ông; không rõ bao nhiêu phần là đời thật.

## Bối cảnh
Arras là thành phố giàu có thương gia ở miền Bắc Pháp, có truyền thống hội thi thơ và kịch. Về sau ông theo Charles xứ Anjou sang Naples, mang văn hoá Pháp xuống nam Ý.
`,
    refs: [
      ['Wikipedia — Adam de la Halle', 'https://en.wikipedia.org/wiki/Adam_de_la_Halle'],
    ],
  },

  'Léonin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1163–1190 (có dấu hỏi) | Thời gian hoạt động theo ước lượng |
| thập niên 1170 | Nội dung luận văn *ars organi* được cho là thuộc vòng quanh Léonin (bản chép còn lại thuộc k. 1220) |
| thế kỷ 13 | Anonymous IV ghi lại tên ông và gắn ông với *Magnus liber organi* |

## Âm nhạc và đóng góp
Ông được coi là nhà soạn nhạc đáng kể đầu tiên của [[organum]] nhiều bè. Anonymous IV gọi ông là "optimus organista" và nói ông làm *Magnus liber organi*, tuyển tập organum hai bè cho các bài hát của năm phụng vụ ([[thanh-ca-gregorian]]). Ông có thể đã tạo phong cách organum purum nhiều hoa mỹ và lập trường Notre-Dame, nhưng nguồn dùng lời dè dặt. Bản còn lại là các bản chép về sau: F (Firenze) và W1 (St Andrews).

## Giai thoại và điều chưa chắc
- **Ai "làm" Magnus liber**: phiên bản Anonymous IV biết chưa được tìm thấy; Roesner đặt câu hỏi này.
- **Léonin phát minh ký âm nhịp điệu**: luận điểm cũ của Waite, nguồn gọi là lỗi thời; người có khả năng hơn là Pérotin.
- **Ông là ai**: Craig Wright đề xuất ông là nhà thơ Leonius; Ian Bent đề xuất Henricus Leonellus. Cả hai chưa được xác nhận.
- Cách trình diễn thực tế chưa rõ, dù giọng organum được cho là do một ca sĩ solo hát.

## Bối cảnh
Paris cuối thế kỷ 12, nhà thờ chính toà Notre-Dame đang được xây. Các nhạc sĩ trong nhà thờ làm đẹp lễ nghi bằng cách thêm bè lên các bài thánh ca đơn âm.
`,
    refs: [
      ['Wikipedia — Léonin', 'https://en.wikipedia.org/wiki/L%C3%A9onin'],
    ],
  },

  'Pérotin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1200 | Hoạt động (ước chừng khoảng 1155/60 đến 1200/05) |
| 1198 | Giám mục Odo (Eudes de Sully) ra sắc lệnh đề cao organum phong phú; *Viderunt omnes* được gắn với lễ Giáng sinh năm này |
| 1199 | Sắc lệnh thứ hai; *Sederunt principes* gắn với lễ Thánh Stephen |
| 1200 | Pháp bị cấm lễ (interdict) của Innocent III gần cả năm, có thể đẩy một số tác phẩm sang 1200–1201 |

## Âm nhạc và đóng góp
Anonymous IV gọi ông là "Magister Perotinus" và "Perotinus Magnus", "optimus discantor". Ông đưa [[organum]] lên ba và bốn bè. Anonymous IV nêu bảy tác phẩm: organum bốn bè *Viderunt omnes*, *Sederunt principes*; organum ba bè *Alleluia Posui adiutorium*, *Alleluia Nativitas*; conductus *Salvatoris hodie*, *Dum sigillum summi Patris*, *Beata viscera*. Các gán ghép khác dựa trên phong cách của học giả sau.

## Giai thoại và điều chưa chắc
- **Ông là ai**: đề xuất là Petrus Cantor (mất 1197) hoặc Petrus Succentor (hoạt động k. 1207–1238); nguồn coi Succentor khả dĩ hơn nhưng vẫn là phỏng đoán.
- **"Abbreviavit" Magnus liber**: nghĩa là rút gọn hay viết lại, và mức độ sửa đổi không rõ.
- **Có viết trước các sắc lệnh của Odo không**: không thể khẳng định.
- **Ngày sinh/mất**: không có; mọi mốc chỉ ước lượng theo phong cách.
- Tên "Anonymous IV" chỉ là nhãn do một nhà biên tập thế kỷ 19 đặt.

## Bối cảnh
Notre-Dame, Paris, đầu thế kỷ 13. Nhà thờ lớn với khung gian cao, ca đoàn chuyên nghiệp; những bản organum bốn bè kéo dài hàng chục phút có thể đã được hát như phần trung tâm của lễ trọng.
`,
    refs: [
      ['Wikipedia — Pérotin', 'https://en.wikipedia.org/wiki/P%C3%A9rotin'],
    ],
  },

  'Franco của Köln': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| giữa thế kỷ 13 | Hoạt động, nhà lý thuyết người Đức |
| k. 1250 | Niên đại thường được nêu cho *Ars cantus mensurabilis* |

## Âm nhạc và đóng góp
Ông tự nhận là cha tuyên uý của giáo hoàng và là bề trên của dòng Hospitaller thánh John ở Köln. Trong *Ars cantus mensurabilis*, ông đặt nguyên tắc rằng hình dạng nốt cho biết [[truong-do]] của nó, thay vì phụ thuộc ngữ cảnh của các mô thức nhịp. Luận văn được chép rộng rãi và có ảnh hưởng ít nhất 200 năm. Xem thêm [[lich-su-ky-am]].

## Giai thoại và điều chưa chắc
- **Nhầm lẫn danh tính**: văn bản khác gọi ông là "Franco của Paris" và "Franco teutonicus".
- **Niên đại**: nguồn người biên soạn đã đọc nêu khoảng 1250; các nguồn khác nêu các năm khác, cần đối chiếu thêm.
- ***De mensurabili musica***: từng gán cho Johannes de Garlandia; từ thập niên 1980 các học giả kết luận ông chỉ biên tập bản thảo nặc danh vào cuối thế kỷ 13.
- **Nhạc của Franco**: không có tác phẩm nào được gán chắc; Jacques xứ Liège đầu thế kỷ 14 nói đã nghe một motet ba bè của ông. Một số tác phẩm Paris phong cách Đức đôi khi cũng được gán cho ông.

## Bối cảnh
Köln và Paris giữa thế kỷ 13: trường Notre-Dame đang kết thúc, [[motet]] phát triển và cần cách ghi trường độ chính xác hơn.
`,
    refs: [
      ['Wikipedia — Franco of Cologne', 'https://en.wikipedia.org/wiki/Franco_of_Cologne'],
    ],
  },

  'Philippe de Vitry': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 31/10/1291 | Sinh; nguồn cổ ghi Champagne, nghiên cứu mới gợi ý Vitry-en-Artois gần Arras |
| 1322 | Niên đại của *Ars nova notandi* thường gán cho ông |
| từ thời Clement VI | Ở trong đoàn tuỳ tùng giáo hoàng ở Avignon |
| 1346 | Tham gia cuộc vây Aiguillon |
| 1351 | Làm giám mục Meaux |
| 9/6/1361 | Mất ở Paris |

## Âm nhạc và đóng góp
Ông là thư ký và cố vấn của Charles IV, Philippe VI và Jean II, giữ các chức canon ở Clermont, Beauvais và Paris. Ông được ghi công với những tiến bộ về ký âm trường độ (xem [[truong-do]]) và thường được coi là người phát triển các bè isorhythm. Năm motet ba bè trong *Roman de Fauvel* và chín motet trong Ivrea Codex gắn với ông; các motet được gán có nhiều bằng chứng gồm *Garrit gallus*, *In nova fert* và *Tribum / Quoniam secta*. Chỉ nhạc thánh còn lại. Petrarca gọi ông là người tìm chân lý sắc sảo và hăng hái nhất. Xem [[motet]] và [[lich-su-ky-am]].

## Giai thoại và điều chưa chắc
- **Tác giả luận văn**: *Ars nova notandi* thường gán cho ông nhưng cả quyền tác giả lẫn sự tồn tại của luận văn đều từng bị nghi ngờ.
- **Nhạc thế tục**: ông được cho là có viết nhưng không còn lại gì.
- **Nơi sinh**: hai nguồn lệch (Champagne và Vitry-en-Artois).
- Các câu chuyện về lời chỉ trích của Giáo hoàng John XXII và lời khen của Jacques xứ Liège không nằm trong nguồn người biên soạn đã đối chiếu, nên không nêu ở đây.

## Bối cảnh
Triều đình Pháp và Avignon thời giáo hoàng, thế kỷ 14: nơi nhà thơ, giám mục và nhạc sĩ cùng là người của triều đình, thi ca Roman de Fauvel châm biếm chính quyền.
`,
    refs: [
      ['Wikipedia — Philippe de Vitry', 'https://en.wikipedia.org/wiki/Philippe_de_Vitry'],
    ],
  },

  'Guillaume de Machaut': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1300 | Sinh ở hoặc gần Reims; họ có thể từ Machault cách Reims khoảng 30 km |
| 1323–1346 | Thư ký cho Jean xứ Luxembourg, vua Bohemia |
| 1330, 1332, 1337 | Canon ở Verdun, Arras, Reims |
| 1346 | Vua Jean chết ở Crécy; Machaut tìm những người bảo trợ khác |
| 1349 | Bonne xứ Bohemia, con gái vua Jean, mất vì Cái chết Đen |
| 1357 | Dâng *Confort d'ami* cho Charles II xứ Navarre đang bị giam |
| k. 1361–1365 | *Le voir dit* |
| 1377 | Mất, có thể vào tháng 4; ngày chính xác không rõ |

## Âm nhạc và đóng góp
Ông là nhạc sĩ - nhà thơ lớn nhất thế kỷ 14 và giám sát việc chép bộ tác phẩm của mình ở Reims. Ông viết ballade, rondeau, virelai, motet ([[motet]]), *Hoquetus David* và *Messe de Nostre Dame* (đầu thập niên 1360, có thể cho nhà thờ Reims). Khúc này được gọi là thánh lễ trọn vẹn đầu tiên của một tác giả hình dung như một thể thống nhất, dù *Tournai Mass* sớm hơn. Bản rondeau *Ma fin est mon commencement* là bài nổi bật. Xem [[lich-su-ky-am]].

## Giai thoại và điều chưa chắc
- **Lễ đăng quang Charles V**: từng được chấp nhận rộng rãi là dịp hát *Messe de Nostre Dame*, nay bị cho là khó xảy ra.
- **"Thánh lễ trọn vẹn đầu tiên"**: danh hiệu bị tranh cãi; nguồn coi nó chỉ là tiền thân của thánh lễ cyclic thế kỷ 15.
- ***Le voir dit***: kể chuyện tình với cô Péronne d'Armentières 19 tuổi, độ chính xác tự truyện bị tranh luận.
- **Ngày mất**: nguồn nêu 13/4/1377 mà không giải thích.
- Nơi sinh: Reims hay gần Reims chỉ là ước đoán từ họ.

## Bối cảnh
Triều đình Luxembourg-Bohemia, rồi Reims thời Chiến tranh Trăm năm và Cái chết Đen. Machaut là giáo sĩ canon làm việc ở nhà thờ nhưng sống như nhà thơ cung đình.
`,
    refs: [
      ['Wikipedia — Guillaume de Machaut', 'https://en.wikipedia.org/wiki/Guillaume_de_Machaut'],
    ],
  },

  'Jacopo da Bologna': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1340–1386 | Thời gian hoạt động (ước lượng "fl.") |
| k. 1350 | *Non al suo amante*, bản phổ thơ Petrarca duy nhất cùng thời còn biết |

## Âm nhạc và đóng góp
Ông là một trong những nhà soạn nhạc đầu tiên của Trecento (Ars nova Ý), viết chủ yếu madrigal (cả dạng canon kiểu caccia lẫn không canon), cùng một caccia, một lauda-ballata và một motet. Chuyên luận ngắn *L'arte del biscanto misurato* chịu ảnh hưởng lý thuyết ký âm Pháp ([[truong-do]]). Lý tưởng của ông là "suave dolce melodia", các bè đều có lời và không bắt chéo nhau. 29 bài của ông nằm trong Squarcialupi Codex, bản thảo từng thuộc nhà Medici. Các madrigal *Io me sun un che*, *Oselleto salvazo* và *Vestìse la cornachia* có thể mang tính tự truyện.

## Giai thoại và điều chưa chắc
- **Chân dung**: có một bức trong Squarcialupi Codex; bức thứ hai có thể có ở bản thảo bắc Ý (Fulda, Hs. D23) nhưng do một tay chữ về sau nhận ra, nên đáng ngờ.
- **Tiểu sử**: nguồn về đời ông rất ít, chỉ có khoảng năm hoạt động; nguồn người biên soạn đã đối chiếu không nêu nơi ông phục vụ, nên không đoán.

## Bối cảnh
Bắc Ý thế kỷ 14, nơi các thành quốc và triều đình bảo trợ thi ca và nhạc, và Petrarca đang viết thơ. Xem [[lich-su-ky-am]].
`,
    refs: [
      ['Wikipedia — Jacopo da Bologna', 'https://en.wikipedia.org/wiki/Jacopo_da_Bologna'],
    ],
  },

  'Francesco Landini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1325 hoặc 1335 | Sinh, nhiều khả năng ở Firenze (Cristoforo Landino ghi Fiesole) |
| thời thơ ấu | Bị đậu mùa và mù |
| 1361 | Organist ở Santa Trinità |
| 1365 | Organist ở San Lorenzo |
| k. 1375, 1379, 1387 | Giúp dựng organ ở nhà dòng Servite, SS Annunziata và nhà thờ chính toà Firenze |
| 2/9/1397 | Mất, chôn ở San Lorenzo; bia mộ có hình ông chơi organ xách tay |

## Âm nhạc và đóng góp
Ông là nhà soạn nhạc Trecento sung sức nhất, hầu như chỉ để lại nhạc thế tục: 89 ballata hai bè, 42 ballata ba bè, 9 bài có cả hai bản, và một số madrigal, chép đầy đủ nhất trong Squarcialupi Codex. Ông cũng là ca sĩ, nhà thơ, thợ làm nhạc cụ. "Cadence Landini" ([[cau-ket]]) mang tên ông, dù ông không phát minh ra nó: Gherardello da Firenze là người đầu tiên biết dùng, còn Landini dùng một cách nhất quán.

## Giai thoại và điều chưa chắc
- **Họ Landini**: các học giả không còn chấp nhận ông thuộc gia đình Landini; thường gọi ông là "Francesco degli Organi" hay "Francesco il Cieco".
- **Năm sinh**: 1325 hay 1335 là hai ước lượng khác nhau.
- **Nơi sinh**: Firenze hay Fiesole.
- **Số ballata**: số người biên soạn tìm được là 140 (89 + 42 + 9), nên con số lớn hơn thường gặp cần kiểm lại.
- Chuyện ông được vua đảo Síp trao vòng nguyệt quế ở Venezia không nằm trong nguồn người biên soạn đã đối chiếu; nguồn chỉ nhắc Peter I của Síp mà không có ngày.

## Bối cảnh
Firenze cuối thế kỷ 14, thành phố thương gia với các nhà thờ lớn, các nhóm văn chương và việc chơi organ. Một người mù có thể trở thành nhạc sĩ và nhà chế tạo organ được kính trọng.
`,
    refs: [
      ['Wikipedia — Francesco Landini', 'https://en.wikipedia.org/wiki/Francesco_Landini'],
    ],
  },

  'Solage': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| cuối thế kỷ 14 | Hoạt động; ngoài các văn bản không biết gì về đời ông |
| 25/5/1389 | Hôn lễ thứ hai của Jean, công tước Berry, được ballade *S'aincy estoit* ca ngợi |
| trước 1402 | Giangaleazzo Visconti còn sống; virelai *Joieux de cuer* dùng khẩu hiệu "a bon droit" của nhà Visconti |

## Âm nhạc và đóng góp
Còn khoảng 12 tác phẩm (9 ballade, 2 virelai, 1 rondeau), chủ yếu trong Chantilly Codex; 10 bài có ký tên. Phong cách pha giữa lối Machaut đơn giản hơn và Ars subtilior phức tạp, với [[da-nhip]] tinh vi. *Fumeux fume par fumée* nổi tiếng vì chromatism và âm vực rất thấp, và gắn với nhóm văn chương "Fumeurs". Xem [[lich-su-ky-am]].

## Giai thoại và điều chưa chắc
- **Tên thật**: có thể là biệt danh (từ *solaz*, niềm an ủi); chữ "J" trong một ghi chú gợi ý Jean nhưng không xác định được.
- **Giả thuyết Charles/Goscalch của Reaney**: đã bị bác.
- **Người bảo trợ**: có thể là Jean de Berry, hoặc Gaston Fébus xứ Foix; ảnh hưởng Visconti cũng có dấu vết.
- **"Jaquete"** trong *Pluseurs gens*: có thể là Jacqueline, cháu gái Philip Táo bạo, nhưng chỉ là phỏng đoán.
- **Nhóm Fumeurs**: tên khiến người ta tưởng hút thuốc hay dùng thuốc, nhưng đa số nhà nhạc học nay cho rằng không có chuyện hút thật; bằng chứng chủ yếu từ thơ châm biếm của Eustache Deschamps.

## Bối cảnh
Triều đình Pháp - Avignon cuối thế kỷ 14, các quý tộc sưu tầm bản thảo đắt tiền và đặt những bài hát tinh vi cho giới chơi sành.
`,
    refs: [
      ['Wikipedia — Solage', 'https://en.wikipedia.org/wiki/Solage'],
    ],
  },

  'Baude Cordier': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| đầu thế kỷ 15 | Hoạt động (nguồn ghi "fl."); không có mốc cụ thể |

## Âm nhạc và đóng góp
Ông thuộc phong cách Ars subtilior và nổi tiếng với "nhạc để nhìn" (eye music): *Belle, bonne, sage* được viết theo hình trái tim, *Tout par compas suy composés* là canon vòng tròn có bản nhạc xếp thành hình tròn. Ông dùng các nốt tô đỏ (coloration) để đổi giá trị nốt ([[truong-do]], [[da-nhip]]). Còn khoảng mười bài thế tục, chủ yếu rondeau (như *Amans, amés secretement*), và một chương Gloria. Một số học giả coi tác phẩm của ông thuộc những ví dụ sớm có chỉ dẫn biểu diễn cho ký âm đặc biệt. Nguồn cho rằng Gilles Binchois và Karlheinz Stockhausen có thể chịu ảnh hưởng từ hướng này.

## Giai thoại và điều chưa chắc
- **Danh tính**: một dòng ghi trên một tác phẩm nói ông sinh ở Reims và có bằng Thạc sĩ Nghệ thuật; một số học giả đồng nhất ông với Baude Fresnel, người chơi harp và organ ở triều Philip Táo bạo, số khác bác bỏ.
- **Niên đại**: năm sinh và mất thường ghi k. 1380–1440 nhưng nguồn người biên soạn đã đối chiếu chỉ nói "đầu thế kỷ 15", nên các năm này chưa có nguồn.
- Chi tiết ông là người làm dây thừng (cordier là nghề dây thừng) và có thêm bản Credo không có trong nguồn đã đối chiếu.

## Bối cảnh
Triều đình Pháp thời Ars subtilior, nơi các nhạc sĩ chơi đùa với ký hiệu và chữ như một trò chơi trí tuệ của giới quý tộc. Xem [[lich-su-ky-am]].
`,
    refs: [
      ['Wikipedia — Baude Cordier', 'https://en.wikipedia.org/wiki/Baude_Cordier'],
    ],
  },

  'Johannes Ciconia': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1370 | Sinh ở Liège; cha cũng tên Johannes Ciconia và là linh mục |
| thập niên 1380–1390 | Có khả năng phục vụ Hồng y Philippe d'Alençon |
| 1401 | Gắn với nhà thờ chính toà Padova cho đến khi mất, có thể dưới quyền Francesco Zabarella |
| 10/6–13/7/1412 | Mất ở Padova (ghi là khoảng giữa hai ngày này) |

## Âm nhạc và đóng góp
Người Franco-Flemish sống phần lớn đời ở Ý, ông trộn phong cách bắc Ý, Ars nova Pháp và Ars subtilior. Tác phẩm gồm madrigal *Una panthera*, *Sus un' fontayne*, *O rosa bella* và motet *Doctorum Principum* cho Zabarella. Hai luận văn *Nova Musica* và *De Proportionibus* theo truyền thống Marchetto; *Nova Musica* mang tư tưởng nhân văn và giới thiệu ông như người phục hưng lý thuyết cổ. Xem [[sang-tac-trung-co-phuc-hung]] và [[truong-do]].

## Giai thoại và điều chưa chắc
- **Hai người cùng tên**: cha và con bị nhầm lẫn cho đến khi David Fallows làm rõ năm 1975.
- **Mức độ sáng tạo**: ấn bản của Clercx (1956) có lỗi chép; ấn bản Bent/Hallmark (1985) cho thấy một nhà soạn nhạc ít cách tân hơn trước đây tưởng.
- **Năm vào Padova và ngày mất**: nguồn người biên soạn đã đối chiếu ghi 1401 và giữa tháng 6–7/1412, nên các mốc khác (như 1403, tháng 12/1412) chưa có nguồn.
- Lai lịch vào Ý qua Roma năm 1385 không được nguồn người biên soạn đã đối chiếu xác nhận.

## Bối cảnh
Liège rồi các thành phố bắc Ý quanh 1400: nhà thờ chính toà, giới nhân văn ở Padova, và các triều đình Visconti. Ông là cầu nối giữa Ars nova và Phục hưng.
`,
    refs: [
      ['Wikipedia — Johannes Ciconia', 'https://en.wikipedia.org/wiki/Johannes_Ciconia'],
    ],
  },
}

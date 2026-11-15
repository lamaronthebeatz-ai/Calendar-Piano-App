import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Phục hưng (Ý cuối, Pháp, Tây Ban Nha, Anh; nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_REN_B: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Andrea Gabrieli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1532–1533 | Sinh, nhiều khả năng ở Venezia (giáo xứ S. Geremia); năm sinh suy từ sổ tử ghi "khoảng 52 tuổi" |
| 1555–1557 | Organ ở Cannaregio; dự thi chức organ nhà thờ San Marco nhưng không đậu (Wikipedia tiếng Ý nêu người thắng là Claudio Merulo, năm 1557) |
| 1562 | Sang Đức (Frankfurt, München), kết thân Orlande de Lassus |
| 1566 | Nhận chức organ San Marco theo Wikipedia tiếng Anh |
| 1571 | Viết nhạc mừng chiến thắng Lepanto |
| 1585 | Viết hợp xướng cho vở *Oedipus tyrannus* ở Teatro Olimpico, Vicenza; ngày 30/8 mất ở Venezia |
| 1587 | Cháu là Giovanni cho in nhiều tác phẩm của ông sau khi ông mất |

## Âm nhạc và đóng góp
Andrea là một trong những người định hình phong cách Venezia: bỏ dần lối [[ket-cau]] đối vị đặc trưng Franco-Flemish để chuyển sang kết cấu đối đáp nhiều dàn, trộn giọng hát và nhạc cụ. Ông lặp cụm nhạc giữa các nhóm bè ở cao độ khác nhau, dùng tương phản âm sắc để chia đoạn. Ảnh hưởng của Lassus thấy rõ sau 1562, kể cả nhạc thuần nhạc cụ. Tác phẩm đáng chú ý: *Sacrae Cantiones* (1565), hai tập [[madrigal]] năm bè (1566, 1570), *Primus Liber Missarum* (1572), *Psalmi Davidici* (1583) và tuyển tập *Concerti* (1587) chung với Giovanni. Ông ngại xuất bản, nên phần lớn nhạc còn lại nhờ người cháu.

## Giai thoại và điều chưa chắc
- **Năm sinh**: chỉ suy ra từ một sổ tử tìm thấy từ thập niên 1980 ghi "khoảng 52 tuổi".
- **Học Willaert**: có thể, chưa xác nhận.
- **Thời gian ở Verona**: Wikipedia tiếng Anh chỉ nêu bằng chứng gián tiếp (một madrigal in năm 1554); bản tiếng Ý nói ông hoạt động ở Verona khoảng 1550–1564.
- **Chức vụ ở San Marco**: bản tiếng Anh ghi 1566 là năm nhận chức organ; bản tiếng Ý ghi 1564 là organ thứ hai và 1584 mới lên organ thứ nhất. Hai nguồn lệch nhau.
- Nhạc cụ trong bản nhạc thường không ghi rõ nên phần lớn được suy ra khi biểu diễn.

## Bối cảnh
Venezia thế kỷ 16 là cộng hoà thương mại giàu có, và nhà thờ San Marco là trung tâm nghi lễ quốc gia. Hai gác đàn đối diện nhau trong nhà thờ khuyến khích lối viết đối đáp giữa các dàn. Các lễ mừng chiến thắng, đón sứ thần là dịp ông viết nhạc quy mô lớn.
`,
    refs: [
      ['Wikipedia (en) — Andrea Gabrieli', 'https://en.wikipedia.org/wiki/Andrea_Gabrieli'],
      ['Wikipedia (it) — Andrea Gabrieli', 'https://it.wikipedia.org/wiki/Andrea_Gabrieli'],
    ],
  },

  'Giaches de Wert': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1535 | Sinh ở Flandern, Ghent hoặc Weert (tranh luận) |
| trước 1550 | Làm ca đồng ở nhà nguyện Maria di Cardona, Avellino |
| k. 1550 | Đến Novellara làm nhạc sĩ cho một nhánh nhà Gonzaga |
| 1565 | Maestro di cappella nhà nguyện Santa Barbara ở Mantua |
| 1566 | Từ chối lời mời đến triều đình Praha; in tập motet đầu |
| 1577 | In tập madrigal thứ sáu, có ba chu trình madrigal |
| 1581 | Phổ thơ *Tirsi morir volea* của Guarini |
| 1582 | Cơn sốt rét đầu tiên, sức khoẻ yếu dần về sau |
| 1591 | In tập madrigal thứ mười |
| 6/5/1596 | Mất ở Mantua, chôn trong hầm Santa Barbara |
| 1608 | Tập madrigal thứ mười hai in sau khi mất |

## Âm nhạc và đóng góp
Wert để lại khoảng 230 [[madrigal]] trong mười sáu tập, đa số năm bè, cùng [[motet]] và nhạc thánh. Thời đầu ông chịu ảnh hưởng Cipriano de Rore: nhạc cromatic, vẽ chữ bằng nhạc, lối ngâm đọc đồng âm. Giữa đời ông gần phong cách Venezia hơn và chuyển sang thơ Guarini, Tasso. Về cuối, nhóm ca sĩ nữ ở Ferrara (*concerto delle donne*) tác động mạnh: giọng cao điêu luyện, vài đoạn gần như hát đơn báo trước monodia. Ông là mắt xích đưa madrigal Ý đến tay Monteverdi, người sau này làm việc tại Mantua.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Ghent hay Weert, cả hai bản Wikipedia (tiếng Anh, tiếng Ý) đều chưa chốt.
- **Thời gian ở Roma**: có giả thuyết, chưa được xác nhận.
- **Năm có chu trình madrigal**: Einstein xếp vào tập 1563, còn MacClintock và Fenlon xếp vào tập 1577.
- **Tarquinia Molza**: vị trí của bà trong nhóm ca sĩ nữ còn chưa chắc; bản tiếng Anh nói chuyện tình của hai người bị phát hiện năm 1589, bản tiếng Ý chỉ gọi là quan hệ "gây tranh cãi".
- **Tirsi morir volea**: Einstein chê nội dung vô giá trị và tục, nhưng đây là bài thơ được phổ nhạc nhiều bậc nhất cuối thế kỷ 16 — đó là nhận định phê bình, không phải sự kiện.

## Bối cảnh
Mantua dưới nhà Gonzaga là triều đình mê nhạc, có nhà nguyện Santa Barbara riêng. Gần đó, Ferrara nổi tiếng với nhóm ca sĩ nữ, và Wert liên tục qua lại hai nơi. Cuộc sống riêng của ông cũng nhiều biến cố, gồm cả vụ vợ ông là Lucrezia bị phát hiện ngoại tình năm 1570.
`,
    refs: [
      ['Wikipedia (en) — Giaches de Wert', 'https://en.wikipedia.org/wiki/Giaches_de_Wert'],
      ['Wikipedia (it) — Giaches de Wert', 'https://it.wikipedia.org/wiki/Giaches_de_Wert'],
    ],
  },

  'Luca Marenzio': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/10/1553 hoặc 1554 | Sinh ở Coccaglio gần Brescia, trong gia đình nghèo, cha là thư ký công chứng (ngày 18/10 chỉ là đề xuất) |
| 1572–1578 | Ca sĩ cho Hồng y Cristoforo Madruzzo ở Roma (bản tiếng Ý: vào phục vụ năm 1572) |
| k. 1578–1586 | Phục vụ Hồng y Luigi d'Este |
| 1586 | Luigi d'Este mất ngày 30/12, ông mất người bảo trợ |
| 1588 | Madrigal của ông chiếm phần lớn tuyển tập *Musica transalpina* in ở Anh |
| 1589 | Ở Firenze phục vụ Ferdinando I de' Medici; viết madrigal 18 bè cho intermedio; tháng 11 trở lại Roma |
| 1595–1596 | Sang Warszawa làm maestro di cappella cho Sigismund III Vasa |
| 22/8/1599 | Mất ở Roma, chôn ở San Lorenzo in Lucina |

## Âm nhạc và đóng góp
Marenzio được coi là đỉnh cao của [[madrigal]] Ý cuối thế kỷ 16. Ông xử lý mỗi bài thơ như một vấn đề riêng nên không có một "phong cách Marenzio" duy nhất: lúc đối vị mô phỏng, lúc đồng âm, lúc gần ngâm đọc. Ông dùng nhiều "vẽ chữ bằng nhạc", cromatic và đổi tâm trạng nhanh ngay trong một câu. Mười năm cuối nhạc trầm lắng hơn, cromatic táo bạo, được cho là chỉ Gesualdo vượt qua. Ông để lại 23 tập madrigal và các thể gần nó (gồm năm tập villanelle ba bè), cùng [[motet]] và madrigali spirituali. Ở Ba Lan ông viết motet hai dàn và Te Deum 13 bè.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: 18/10 là suy đoán dựa vào lời cha ông năm 1588 rằng ông 35 tuổi và có thể gắn với lễ thánh Luca.
- **Thời gian ở Mantua và học với Contino**: chỉ là "có thể"; chính ông kể năm năm phục vụ Gonzaga, không ghi thời điểm.
- **Danh hiệu maestro di cappella cho Luigi d'Este**: đáng ngờ, vì dàn nhạc của vị hồng y rất nhỏ.
- **Thời gian ở Ba Lan**: bản tiếng Anh nói cuối 1595–1596; bản tiếng Ý nói 1596–1598.
- **Sức khoẻ**: các tác giả thế kỷ trước cho rằng chuyến Ba Lan làm hỏng sức ông; đây là lời truyền, chưa kiểm chứng.
- **Gặp Dowland**: Dowland đến Firenze năm 1595 để gặp ông nhưng không đi tiếp; chưa rõ hai người có từng gặp nhau không.
- Biệt danh "thiên nga ngọt ngào nhất" là lời ca ngợi của người đời sau, không phải sự kiện.

## Bối cảnh
Ông sống đời nhạc sĩ của các hồng y và hoàng thân: Roma, Ferrara, Firenze rồi triều đình Ba Lan. Đây là thời madrigal được trao đổi giữa các triều đình và in rộng khắp châu Âu. Tuyển tập *Musica transalpina* góp phần khởi đầu trường phái madrigal Anh.
`,
    refs: [
      ['Wikipedia (en) — Luca Marenzio', 'https://en.wikipedia.org/wiki/Luca_Marenzio'],
      ['Wikipedia (it) — Luca Marenzio', 'https://it.wikipedia.org/wiki/Luca_Marenzio'],
    ],
  },

  'Giovanni Gabrieli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1554–1557 | Sinh ở Venezia (Wikipedia tiếng Ý ghi 1557); cha từ vùng Carnia đến ngay trước khi ông sinh |
| thập niên 1570 | Học với Orlande de Lassus ở triều đình Albert V, München, nhiều khả năng đến khoảng 1579 |
| 1584–1585 | Về Venezia; thay Claudio Merulo làm organ chính San Marco (bản tiếng Ý: tạm thay năm 1584, thắng cuộc thi ngày 1/1/1585) |
| 1586 | Thành nhà soạn nhạc chính San Marco sau khi bác Andrea mất |
| 1587 | Có motet đầu tiên trong tuyển tập *Concerti* |
| 1597 | In *Sacrae symphoniae*, làm ông nổi tiếng khắp nơi |
| 12/8/1612 | Mất ở Venezia vì biến chứng sỏi thận, chôn ở Santo Stefano |
| 1615 | *Canzoni et sonate* và *Sacrae symphoniae II* in sau khi mất |

## Âm nhạc và đóng góp
Giovanni kết thúc trường phái Venezia và đứng ở chỗ chuyển từ Phục hưng sang Baroque sớm. Ông viết chủ yếu nhạc thánh, tận dụng hai gác đàn đối diện ở San Marco, ghi rõ nhạc cụ cho từng nhóm. Ông thường được nhắc là người đầu tiên đưa chỉ dẫn cường độ và biên chế cụ thể vào bản nhạc; thực ra ông không phải luôn là người đầu tiên, chỉ là người nổi tiếng nhất thời ấy làm vậy. Tác phẩm tiêu biểu: *Sonata pian' e forte*, *Hodie Christus natus est* (10 bè), *In ecclesiis* (14 bè), các *canzon* cho đồng thau. Học trò có Hans Leo Hassler và Heinrich Schütz, những người mang phong cách này lên phương Bắc. Sau khoảng 1605 nhạc của ông thiên về đồng âm hơn.

## Giai thoại và điều chưa chắc
- **Năm sinh**: các nguồn nêu 1554, 1555 hay 1557, nên tuổi lúc mất là "khoảng 55 hoặc 58".
- **Năm Andrea mất**: bản tiếng Anh tự nó ghi 1585 ở một chỗ và ngụ ý 1586 ở chỗ khác khi nói Giovanni kế nhiệm "năm sau".
- **"Đầu tiên"**: Adrian Willaert có thể đã dùng kỹ thuật đa dàn ở Venezia trước ông; việc ghi cường độ cũng không phải độc quyền của ông.
- **Họ Gabrieli**: một nguồn nói ông lấy họ bác Andrea, nguồn khác nói đó là biệt danh gắn với cha ông.
- **Tác phẩm**: nhiều bản in lẫn bài của người khác; nhạc cụ ban đầu của nhiều canzon không được ghi.

## Bối cảnh
San Marco là nhà nguyện của Cộng hoà Venezia, nơi âm thanh được dàn dựng theo không gian. Ông còn làm organ ở Scuola Grande di San Rocco, một hội đoàn tín hữu giàu có (thời gian phục vụ: 1584–1606 theo Manzini, hoặc 1585 đến khi mất theo Bryant). Vào cuối đời bệnh tật hạn chế công việc, giáo quyền phải cử người thay.
`,
    refs: [
      ['Wikipedia (en) — Giovanni Gabrieli', 'https://en.wikipedia.org/wiki/Giovanni_Gabrieli'],
      ['Wikipedia (it) — Giovanni Gabrieli', 'https://it.wikipedia.org/wiki/Giovanni_Gabrieli'],
    ],
  },

  'Carlo Gesualdo': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 8/3/1566 | Sinh ở Venosa theo Wikipedia tiếng Ý (bản tiếng Anh: 30/3/1566; có nguồn khác ghi 1560) |
| 1585 | Anh trai Luigi mất, ông thành người thừa kế (bản tiếng Anh ghi 1584) |
| 1586 | Cưới em họ Maria d'Avalos |
| 16/10/1590 | Giết Maria và người tình Fabrizio Carafa ở Napoli (bản tiếng Ý: đêm 15–16/10) |
| 1591 | Cha mất, ông thành Hoàng tử xứ Venosa |
| 1594 | Cưới Leonora (Eleonora) d'Este, đến Ferrara, in tập madrigal đầu |
| 1611 | In tập madrigal thứ sáu và *Tenebrae Responsoria* |
| 8/9/1613 | Mất ở Gesualdo, khoảng ba tuần sau con trai Emanuele |

## Âm nhạc và đóng góp
Gesualdo viết [[madrigal]] năm bè với cromatic táo bạo nhất Phục hưng: nhiều cụm có cả mười hai nốt cromatic, quan hệ chéo, hoà âm quãng ba cromatic (như La trưởng với Fa trưởng). Cấu trúc xen những đoạn chậm, cromatic với đoạn nhanh, thuộc âm giai. Ông vẽ chữ bằng nhạc ở những từ về đau đớn, cái chết. Tác phẩm chính gồm sáu tập madrigal (1594–1611), nổi tiếng nhất là *Moro, lasso, al mio duolo* và *Beltà, poi che t'assenti*; *Cantiones sacrae* (1603); *Tenebrae Responsoria* (1611) và *Miserere*. Nhạc của ông thường được so với cromatic thế kỷ 19–20, nhưng thực ra là sự cực đoan hoá một truyền thống madrigal có sẵn.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: các học giả từng đề xuất nhiều năm từ 1557 đến 1564; ngày 8/3/1566 dựa trên thư tìm thấy năm 1989.
- **Vụ giết người**: tài liệu mâu thuẫn; một sử gia nghi ngờ lời khai và cho rằng nhiều khả năng ông thuê người ra tay, dù văn chương thường kể ông tự tay giết.
- **Đứa con bị đu chết trong nôi**: chuyện này do người sau thêm thắt; Wikipedia tiếng Anh gọi là bịa đặt.
- **Bị người hầu đánh mỗi ngày**: Campanella (1635) kể vậy, một đoạn kể cả người hầu đánh ông "lúc đi vệ sinh"; cách diễn giải này mang tính hậu thế. Hồ sơ 1613 gợi ý ông chỉ suy kiệt dần.
- **Nhạc phản ánh tội lỗi**: lời giải thích phổ biến nhưng thiếu chứng cứ chắc.
- **Ngờ vợ giết**: chỉ là suy đoán của một tác giả thế kỷ 20.

## Bối cảnh
Ông là quý tộc miền nam Ý, dòng dõi giàu có, cháu của thánh Carlo Borromeo. Nơi ông sống là lâu đài Gesualdo và Napoli, rồi Ferrara, trung tâm madrigal thời ấy. Sau vụ án ông sống phần lớn ở lâu đài, khép kín, nhờ đó có điều kiện viết nhạc không phụ thuộc thị hiếu người trả tiền.
`,
    refs: [
      ['Wikipedia (en) — Carlo Gesualdo', 'https://en.wikipedia.org/wiki/Carlo_Gesualdo'],
      ['Wikipedia (it) — Carlo Gesualdo', 'https://it.wikipedia.org/wiki/Carlo_Gesualdo'],
    ],
  },

  'Clément Janequin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1485 | Sinh ở Châtellerault, gần Poitiers (chưa có tài liệu xác nhận) |
| 1505 | Làm thư ký ở Bordeaux cho Lancelot du Fau, sau là giám mục Luçon |
| 1507 | Theo Wikipedia tiếng Pháp, bị buộc tội khi là "maître des choristes" ở Luçon (có quan hệ với phụ nữ trong Tuần Thánh), bị trục xuất khỏi giáo hội, kháng cáo lên Parlement Paris |
| 1525–1531 | Ở Bordeaux làm linh mục, giữ một số bổng lộc; năm 1531 dạy ca đồng ở Auch |
| 1534–1537 | Maître de chapelle ca đoàn Angers |
| 1549 | Sống ở Paris, rue de la Sorbonne |
| 1555 | Ký giấy với danh hiệu "chantre ordinaire" nhà nguyện vua |
| 1558 | Viết di chúc tháng 1, mất ở Paris |

## Âm nhạc và đóng góp
Janequin viết khoảng 250 chanson thế tục. Nổi nhất là loại chanson mô tả dài, nhiều đoạn, mô phỏng âm thanh tự nhiên và đời sống: tiếng chim (*Le chant des oiseaux*, *L'alouette*, *Le rossignol*), đi săn (*La chasse*), tiếng rao Paris (*Les cris de Paris*) và trận đánh (*La guerre / La bataille*). Tiếng kèn, đại bác, tiếng la của người bị thương giúp xác lập thể loại "nhạc chiến trận". Bên cạnh đó ông cũng viết chanson ngắn, tinh tế kiểu Claudin de Sermisy trên thơ Clément Marot, và cuối đời là thánh vịnh Genève cùng *chansons spirituelles*. Nhà in Pierre Attaingnant in năm tập chanson của ông.

## Giai thoại và điều chưa chắc
- **Năm sinh và nơi học**: chỉ là ước chừng; không có tài liệu về thời trẻ.
- **La bataille mừng Marignano 1515**: được cho là "có lẽ" hay "gần như chắc" viết mừng trận thắng của Pháp, nhưng đây là suy luận, không có văn bản nói thẳng.
- **Vụ Luçon 1507**: chỉ có bản tiếng Pháp nêu chi tiết; bản tiếng Anh không nhắc, nên nên coi là chuyện cần kiểm tra thêm.
- **Danh hiệu nhà nguyện vua**: bản tiếng Pháp cho rằng nhiều khả năng là danh dự, không phải việc làm thực.
- **Thái độ với Tin Lành**: không có tài liệu.
- **Giai điệu Jehan Alain dùng năm 1937**: từng được gán cho Janequin, nhưng nghiên cứu sau xác định đó là bài tình ca nặc danh in năm 1529 trong một tuyển tập của Attaingnant.
- Hình ảnh ông luôn than nghèo là một nét gán cho nhân vật, không phải giai thoại có tài liệu.

## Bối cảnh
Ông sống đời linh mục tỉnh lẻ, không giàu, phục vụ giám mục rồi nhà thờ Angers, Auch, Bordeaux trước khi về Paris. Cuối đời ông than già và nghèo trong lời đề tựa. Chanson của ông được in ở Paris nhờ kỹ thuật in nhạc mới và được hát rộng rãi trong giới thị dân và triều đình.
`,
    refs: [
      ['Wikipedia (en) — Clément Janequin', 'https://en.wikipedia.org/wiki/Cl%C3%A9ment_Janequin'],
      ['Wikipedia (fr) — Clément Janequin', 'https://fr.wikipedia.org/wiki/Cl%C3%A9ment_Janequin'],
    ],
  },

  'Claudin de Sermisy': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1490 | Sinh, có thể ở Sermaize (Oise) theo bản tiếng Pháp; bản tiếng Anh chỉ nói Picardie, Bourgogne hoặc Île-de-France, suy từ họ |
| 1508 | Làm ca sĩ ở nhà nguyện hoàng gia Louis XII |
| 1515 | Đi Ý cùng François I |
| 1516 | Được bổ nhiệm canon ở Noyon (bản tiếng Pháp) |
| 1524 | Chuyển canon từ Rouen sang Amiens (bản tiếng Pháp: Camberon, Abbeville) |
| 1532 | Phó chỉ huy (sub-master) nhà nguyện hoàng gia |
| 1533 | Canon Sainte-Chapelle, Paris |
| 1554 | Hưởng bổng ở Sainte-Catherine, Troyes |
| 13/10/1562 | Mất ở Paris, chôn ở Sainte-Chapelle |

## Âm nhạc và đóng góp
Sermisy là đại diện tiêu biểu của chanson Paris: khoảng 175 chanson bốn bè, thường kết cấu hợp âm khối, mỗi âm một chữ, nhịp nhàng như điệu nhảy, hay mở đầu bằng nhịp dài – ngắn – ngắn. Ông ưa sự rõ ràng, duyên dáng hơn là đối vị rậm rạp của người Hà Lan, và phổ nhiều thơ của Clément Marot (xem [[ket-cau]]). Ông cũng viết khoảng 12 thánh lễ gồm một Requiem, khoảng 100 [[motet]], Magnificat, Lamentations và hai bản Thương khó. Bài *Tant que vivray* (in 1527) rất nổi; nhạc ông được chuyển soạn cho viol, luýt và đàn phím. Rabelais nhắc tên ông trong *Pantagruel* quyển IV.

## Giai thoại và điều chưa chắc
- **Năm sinh, nơi sinh**: là suy đoán từ họ và năm nhận chức 1508.
- **Học Josquin**: do Pierre de Ronsard nói, nhiều nhà nghiên cứu coi là thiếu tin cậy; việc Josquin có mặt ở triều đình khoảng 1501–1503 cũng không được xác nhận.
- **Field of the Cloth of Gold 1520**: gần như chắc chắn ông hát ở đó, nhưng chưa rõ ông có viết nhạc không.
- **Niên đại tác phẩm**: được tính theo năm in, không phải năm soạn.
- **Cuối đời**: tài liệu còn lại rất ít.
- Nguồn tiếng Anh và tiếng Pháp lệch nhau về tuổi nhỏ: bản tiếng Pháp ghi ông làm ca đồng ở Sainte-Chapelle từ 1508; bản tiếng Anh ghi ông là ca sĩ nhà nguyện hoàng gia năm 1508.

## Bối cảnh
Ông phục vụ ba đời vua Pháp và sống giữa Paris, nơi nghề in nhạc của Pierre Attaingnant phát triển. Năm 1559 căn nhà lớn của ông ở Paris chứa người tị nạn từ St Quentin bị quân Tây Ban Nha tàn phá.
`,
    refs: [
      ['Wikipedia (en) — Claudin de Sermisy', 'https://en.wikipedia.org/wiki/Claudin_de_Sermisy'],
      ['Wikipedia (fr) — Claudin de Sermisy', 'https://fr.wikipedia.org/wiki/Claudin_de_Sermisy'],
    ],
  },

  'Claude Le Jeune': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1525–1530 | Sinh, nhiều khả năng ở Valenciennes (bản tiếng Anh: 1528–1530; bản tiếng Pháp: 1525–1530) |
| 1552 | Bốn chanson in trong tuyển tập ở Leuven, ghi chép sớm nhất về nhạc của ông |
| 1564 | Chuyển đến Paris, gắn với người Huguenot |
| 1570 | Gia nhập Académie de poésie et de musique của Jean-Antoine de Baïf (sắc lệnh thành lập tháng 11/1570) |
| 1581 | Cùng Baïf, d'Aubigné, Ronsard viết nhạc cho một đám cưới hoàng gia |
| 1589–1590 | Bị phát hiện là tác giả một tập sách chống Công giáo, phải rời Paris trong cuộc vây hãm |
| 1598 | In *Dodécacorde* ở La Rochelle |
| 26/9/1600 | Chôn ở nghĩa trang Tin Lành La Trinité, Paris |
| 1606 | *Octonaires*, tác phẩm hoàn tất cuối cùng, in sau khi mất |

## Âm nhạc và đóng góp
Le Jeune là đại diện chính của *musique mesurée*: đặt âm tiết dài và ngắn theo tỷ lệ 2:1 cho khớp trọng âm thơ Pháp theo mô hình thơ cổ, khiến nhịp nghe như đổi liên tục (xem [[ca-khuc-the-tuc-trung-co]]). Chanson Paris của ông nhẹ, đồng âm, a cappella, 3–8 bè. Ông cũng thử các giống âm cromatic và enharmonic của Hy Lạp cổ; vài chanson cromatic của ông nằm trong số những bài cromatic nhất trước madrigal Gesualdo. Tác phẩm: *Le Printemps* (thơ Baïf), *Dodécacorde* (12 thánh vịnh, mỗi bài một [[doi-am]] thức), *Les 150 pseaumes* và *Octonaires de la vanité* (1606, 36 bài thơ của Chandieu). Còn lại 347 bài thánh vịnh, 146 air, 66 chanson và 43 madrigal Ý.

## Giai thoại và điều chưa chắc
- **Năm sinh**: ước chừng, nơi sinh dựa vào chính các ấn phẩm của ông.
- **Gặp Lassus giữa thập niên 1550**: chưa được xác nhận.
- **Chuyến đi Ý**: chỉ là giả thuyết.
- **Ngày cải đạo**: không rõ.
- **Cứu thoát năm 1589**: Marin Mersenne (1637) kể Jacques Mauduit đã can thiệp ở cổng St Denis và cứu ông cùng bản thảo; đây là lời kể của Mersenne, không phải sự kiện được xác nhận độc lập.
- **Nhà soạn nhạc phòng vua**: chưa rõ lúc bắt đầu và kết thúc; Guédron được ghi là nhà soạn nhạc phòng vua năm 1598, nhưng văn bản công chứng 1600 vẫn gọi Le Jeune như vậy.
- Người em gái Cécile nói ông định viết thêm một bộ nữa cho nhiều bè hơn thì mất; đây là lời gia đình.

## Bối cảnh
Paris cuối thế kỷ 16 chìm trong các cuộc chiến tôn giáo. Là người Tin Lành, ông thoát vụ thảm sát St. Bartholomew (1572) nhưng sống bấp bênh, rồi chạy đến La Rochelle, thành trì Tin Lành, trước khi trở lại phục vụ vua Henri IV.
`,
    refs: [
      ['Wikipedia (en) — Claude Le Jeune', 'https://en.wikipedia.org/wiki/Claude_Le_Jeune'],
      ['Wikipedia (fr) — Claude Le Jeune', 'https://fr.wikipedia.org/wiki/Claude_Le_Jeune'],
    ],
  },

  'Juan del Encina': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/7/1468 | Sinh gần Salamanca (bản tiếng Pháp/Tây Ban Nha nói k. 1468–1469); tên khai sinh Juan de Fermoselle |
| 1484 | Vào ca đồng nhà thờ chính toà Salamanca (bản tiếng Tây Ban Nha) |
| 1492 | Vào hầu Công tước Alba thứ hai; hai eclogue diễn ở Alba de Tormes đêm Giáng sinh |
| 1496 | In *Cancionero* kèm luận về thi pháp |
| 1498 / k. 1500 | Sang Roma (bản tiếng Tây Ban Nha: 1498) |
| 1508 | Giáo hoàng Julius II bổ nhiệm làm archdeacon Málaga |
| 1519 | Hành hương Jerusalem, dâng thánh lễ đầu tiên; được trao chức prior nhà thờ León |
| 1521 | *Tribagia o Via Sacra de Hierusalem* |
| 1529–1530 | Mất; di chúc trình ngày 14/1/1530 |
| 1534 | Hài cốt chuyển về Salamanca theo nguyện vọng |

## Âm nhạc và đóng góp
Encina để lại khoảng 60 bài ca (thêm khoảng chín bài có thể của ông), chủ yếu *villancico*, thể Tây Ban Nha tương ứng frottola Ý. Ông viết ba hoặc bốn bè, nhịp theo trọng âm lời thơ để giữ rõ chữ, hoà âm đơn giản mà chắc. Ông cũng là thi sĩ và nhà viết kịch: *Cancionero* gồm eclogue và khoảng mười bốn vở ngắn, có *Égloga de Fileno*, *Aucto del Repelón* và *Plácida y Vitoriano* (1513); ông thường được coi cùng Gil Vicente là cha đẻ kịch Tây Ban Nha. Bài tiêu biểu: *Oy comamos y bebamos*, *Tan buen ganadico*, *Más vale trocar*.

## Giai thoại và điều chưa chắc
- **Năm sinh, nơi sinh**: 1468 hoặc 1469; Fermoselle, Encina de San Silvestre hay La Encina.
- **Dòng dõi**: Wikipedia tiếng Anh, dẫn Norman Roth, nói ông gốc Do Thái cải đạo.
- **Bắt đầu hầu nhà Alba**: thường là 1492, một số nguồn nói 1495.
- **Rời Tây Ban Nha**: bản tiếng Tây Ban Nha nói sau khi hụt chức maestro de capilla Salamanca (người được chọn là bạn ông, Lucas Fernández) ông sang Ý; đây là lời kể truyền lại.
- **Nơi mất**: ô thông tin nói Toledo, văn bản nói León; năm mất 1529 hay 1530.
- **Thời điểm nhận chức prior León**: 1519 hay tháng 11/1523, hai nguồn lệch nhau.
- **Nhạc nhà thờ**: không bản nhạc tôn giáo nào của ông còn được biết.
- *Plácida y Vitoriano* (1513) theo một lá thư thì không được khán giả ưa.

## Bối cảnh
Tây Ban Nha cuối thế kỷ 15: Granada thất thủ năm 1492, triều đình các quý tộc như nhà Alba nuôi thi sĩ và nhạc sĩ. Salamanca là trung tâm đại học. Về sau ông sống ở Roma dưới các giáo hoàng rồi về làm giáo sĩ ở Málaga và León, và đi cả đến Thánh địa.
`,
    refs: [
      ['Wikipedia (en) — Juan del Encina', 'https://en.wikipedia.org/wiki/Juan_del_Encina'],
      ['Wikipedia (es) — Juan del Encina', 'https://es.wikipedia.org/wiki/Juan_del_Encina'],
    ],
  },

  'Cristóbal de Morales': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1500 | Sinh ở Sevilla |
| 1526–1528 | Maestro de capilla nhà thờ Ávila (bản tiếng Tây Ban Nha) |
| 1529–1532 | Maestro de capilla Plasencia |
| 1534 | Có tên ở Roma với danh xưng "presbyter toletanus" |
| k. 1535 | Ca sĩ nhà nguyện giáo hoàng dưới Paul III |
| 1544 | In hai tập thánh lễ ở Roma |
| 1545 | Rời Roma; trở về Tây Ban Nha, làm việc ở Toledo (k. 1545–1547) |
| 1551 | Maestro de capilla Málaga |
| 1553 | Ngày 4/9 xin chức ở Toledo; mất ở Marchena hoặc Málaga trước ngày 7/10 |

## Âm nhạc và đóng góp
Morales là nhà soạn nhạc thánh Tây Ban Nha nổi nhất trước Victoria. Hai mươi hai thánh lễ còn lại, trong đó *Missa Mille regretz* (6 bè, trên chanson gán cho Josquin) và *Missa L'homme armé*, cùng *Missa pro defunctis*, 18 Magnificat, năm Lamentations và hơn 100 [[motet]] (xem [[thanh-le-va-requiem]]). Hoà âm nghe "chức năng" hơn Gombert hay Palestrina vì nhiều bước bass đi bốn, năm. Ông dùng quan hệ chéo tự do như người Anh và đôi khi chồng nhịp ba trên bốn. Tác phẩm muộn trầm tĩnh, đồng âm; ông luôn đặt trọng tâm vào việc lời hát phải nghe rõ. Bermudo gọi ông là "ánh sáng của Tây Ban Nha trong âm nhạc".

## Giai thoại và điều chưa chắc
- **Năm sinh và năm mất**: không biết ngày chính xác.
- **Ba hồ sơ năm 1522 về một organ "Cristóbal de Morales"**: chưa chắc là ông.
- **1532–1534**: không có tài liệu.
- **Bệnh**: gút, thấp khớp cấp, sốt rét chỉ là giả thiết.
- **Nơi mất**: Marchena theo bản tiếng Anh, Málaga hoặc Marchena theo bản tiếng Tây Ban Nha.
- **Tính cách**: nhiều nguồn mô tả ông khó tính, yêu cầu khắt khe và bị coi là kiêu; cụ thể từng vụ thì chưa được xác nhận.
- **Có phải nhạc Tây Ban Nha**: năm 1549 Bermudo gọi nhạc ông là "ngoại quốc"; sau đó người ta tranh luận.
- **Thời gian ở Toledo**: nguồn ghi 1545–1546 hay 1545–1547.
- **Missa pro defunctis** có thể là tác phẩm cuối, dựa trên dấu hiệu truyền bản và biên tập.

## Bối cảnh
Ông lớn lên ở Sevilla, thành phố giàu lên nhờ buôn bán với châu Mỹ, rồi vào nhà nguyện giáo hoàng, nơi Paul III ưa ca sĩ Tây Ban Nha. Khi về nước ông lận đận: tài chính và chính trị rắc rối ở nhiều nhà thờ. Sau khi Charles V mất (1558), nhạc ông được hát ở lễ tưởng niệm ở Mexico City năm 1559.
`,
    refs: [
      ['Wikipedia (en) — Cristóbal de Morales', 'https://en.wikipedia.org/wiki/Crist%C3%B3bal_de_Morales'],
      ['Wikipedia (es) — Cristóbal de Morales', 'https://es.wikipedia.org/wiki/Crist%C3%B3bal_de_Morales'],
    ],
  },

  'Luis de Milán': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1500 | Sinh (bản tiếng Tây Ban Nha: trước 1500, "có lẽ" ở Játiva) |
| trước 1535 | Phục vụ triều đình Valencia của Germaine de Foix, đến khoảng 1538 |
| 1535 | In *El juego de mandar* (trò chơi phòng khách có nhạc) |
| 12/1536 | In *El maestro*, đề tặng vua João III của Bồ Đào Nha |
| trước 1555 | Có thể đã kết hôn (không chắc) |
| 1561 | In *El cortesano*, tác phẩm cuối |
| k. 1561 | Năm mất theo phần đầu bài tiếng Anh (phần thân ghi 1559; bản tiếng Tây Ban Nha: sau 1561) |

## Âm nhạc và đóng góp
*El maestro* (1536) được coi là tuyển tập nhạc vihuela de mano in đầu tiên (và sách in đầu tiên ở Tây Ban Nha dạy một nhạc cụ). Trong đó có 40 fantasia, 6 pavana, 4 tiento và nhạc có lời (villancico, romance, soneto). Đây là một trong những bản tab Tây Ban Nha in sớm nhất và là tuyển tập đầu tiên có chỉ dẫn tốc độ bằng lời. Theo Wikipedia tiếng Anh, ông soạn thẳng trên đàn rồi mới ghi. Fantasia của ông có ba phần: mở đầu mô phỏng, các đoạn tương phản, đoạn cuối lặp kèm coda. Villancico theo cấu trúc ABBA và có hai bản, một cho ca sĩ tự trang trí, một cho phần vihuela trang trí dày. Nhạc ông trải từ đồng âm đơn giản đến đối vị và những đoạn chạy ngón điêu luyện, với cromatic khác thường. Xem [[dan-phim-co]] để so với các nhạc cụ có phím.

## Giai thoại và điều chưa chắc
- **Năm sinh, năm mất**: ước chừng; năm mất là 1559 hay k. 1561 tuỳ chỗ trong cùng một nguồn.
- **Nơi sinh**: Játiva chỉ là "có lẽ".
- **Địa vị xã hội**: "có khả năng" là quý tộc Valencia vào chức nhỏ rồi làm cha xứ; chưa xác nhận.
- **Chuyến đi Bồ Đào Nha**: lời đề tặng và villancico tiếng Bồ gợi ý ông từng đến đó, nhưng không có xác nhận.
- **Kết hôn**: chỉ được giả định.
- Cuộc sống "chắc đã ở Valencia suốt đời" và chi tiết "sơ sài" — cả hai bản đều thừa nhận tài liệu ít.
- Việc nói ông là người đầu tiên in nhạc vihuela đúng với *El maestro* nhưng chỉ là cách gọi theo tài liệu còn lại.

## Bối cảnh
Ông sống ở Valencia, thành phố cảng giàu của Vương quốc Aragón, nơi triều đình nhỏ của Germaine de Foix (goá phụ vua Fernando) và công tước Calabria nuôi nhạc sĩ. *El cortesano* mô phỏng *Il Cortegiano* của Castiglione, tả đời sống triều đình Valencia.
`,
    refs: [
      ['Wikipedia (en) — Luis de Milán', 'https://en.wikipedia.org/wiki/Luis_de_Mil%C3%A1n'],
      ['Wikipedia (es) — Luis de Milán', 'https://es.wikipedia.org/wiki/Luis_de_Mil%C3%A1n'],
    ],
  },

  'Antonio de Cabezón': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 30/3/1510 | Sinh ở Castrillo Mota de Judíos, gần Burgos; mù từ nhỏ |
| 1526 | Vào phục vụ Hoàng hậu Isabella của Bồ Đào Nha, chơi clavichord và organ |
| 1538 | Thành nhạc sĩ phòng (músico de la cámara) của Charles V |
| 1539 | Sau khi Isabella mất, dạy các con của bà, gồm hoàng tử Felipe |
| 1543 | Felipe làm nhiếp chính, phong ông làm organ triều đình |
| 1548–1556 | Cùng Felipe đi Ý, Hà Lan, Đức (1548–1549), Anh (1554–1556) |
| 1557 | Một số tác phẩm in trong *Libro de cifra nueva* của Venegas de Henestrosa |
| 26/3/1566 | Mất ở Madrid |
| 1578 | Con trai Hernando in phần lớn nhạc ông (*Obras de música para tecla, arpa y vihuela*) |

## Âm nhạc và đóng góp
Cabezón được coi là nhà soạn nhạc đàn phím lớn đầu tiên của bán đảo Iberia. Nhạc ông gồm *tiento* (đối vị mô phỏng xen đoạn tự do), *diferencias* (biến tấu trên bài hát, điệu nhảy, khuôn hoà âm), nhạc organ cho phụng vụ (Kyrie, thánh ca, Magnificat) và các bản chuyển soạn Josquin, Lassus để đàn. Các biến tấu *Diferencias sobre el canto del Caballero* và *sobre las Vacas* là những đỉnh sớm của thể loại. Ông là người chơi organ cự phách; Hernando mô tả các bản in là là "mẩu vụn trên bàn ăn của cha" (lời Hernando, hàm ý các bản chép chưa bằng ngẫu hứng của ông).

## Giai thoại và điều chưa chắc
- **Học ở Palencia với García de Baeza**: "có thể", chưa xác nhận.
- **Mù**: dựa trên lời đề tựa của con trai năm 1578 ("mù từ rất nhỏ"), là nguồn duy nhất.
- **Ảnh hưởng đến Byrd và Tallis**: chỉ là giả định, dựa trên việc ông ở Anh 1554–1556; không có chứng cứ trực tiếp.
- **Số tiento**: bản tiếng Anh nói còn 29 nhưng phép đếm chỉ ra 26; lệch chưa được giải thích.
- **Nhạc bị mất**: một thánh lễ trong kiểm kê Cuenca năm 1611 đã mất, có thể còn nhiều tác phẩm khác.
- **Đời tư**: hầu như không biết gì.
- **Con số trong Libro de cifra nueva**: bản tiếng Anh nói 14 tiento, bản tiếng Tây Ban Nha nói 40 bản nhạc của ông; hai cách đếm khác nhau.

## Bối cảnh
Ông sống ở triều đình Habsburg Tây Ban Nha đang ở đỉnh cao quyền lực, đi theo Felipe qua Milano, Napoli, Đức và Anh (đám cưới của Felipe với Mary Tudor). Nhạc ông vì thế gặp nhiều trường phái, và nhạc đàn phím Tây Ban Nha được ghi bằng bảng chữ số (cifra).
`,
    refs: [
      ['Wikipedia (en) — Antonio de Cabezón', 'https://en.wikipedia.org/wiki/Antonio_de_Cabez%C3%B3n'],
      ['Wikipedia (es) — Antonio de Cabezón', 'https://es.wikipedia.org/wiki/Antonio_de_Cabez%C3%B3n'],
    ],
  },

  'Francisco Guerrero': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 4/10/1528 | Sinh ở Sevilla (bản tiếng Anh ghi dấu hỏi ở ngày), con của hoạ sĩ Gonzalo Sánchez Guerrero |
| k. 1546 | Làm maestro de capilla nhà thờ Jaén lúc 17–18 tuổi |
| 1549 | Trở về Sevilla, làm ca sĩ ở nhà thờ chính toà |
| 1581–1582 | Một năm ở Ý, in hai tập nhạc |
| 1588–1589 | Hành hương Thánh địa; trên đường về bị cướp biển bắt, đòi tiền chuộc |
| 1590 | In sách kể chuyến đi, *El viage de Hierusalem* (Valencia) |
| 1591 | Bị lệnh bắt vì nợ in sách; nhà thờ Sevilla trả nợ, ông được thả |
| 8/11/1599 | Mất ở Sevilla trong dịch hạch |

## Âm nhạc và đóng góp
Guerrero học nhạc với anh Pedro rồi với Cristóbal de Morales. Khác Morales và Victoria viết gần như chỉ nhạc thánh, ông viết cả thánh nhạc lẫn bài thế tục và nhạc cụ. Thánh nhạc gồm thánh lễ (*Missa de la batalla escoutez*, *Missa Sancta et Immaculata*, *Missa Congratulamini mihi*), [[motet]], Magnificat, Thương khó. Ông ưa kết cấu đồng âm, giai điệu dễ hát, và biểu lộ nhiều cung bậc từ xuất thần đến tuyệt vọng. Nhạc ông sống lâu ở các nhà thờ châu Mỹ Latin: một Magnificat tìm thấy ở Lima từng bị tưởng là vô danh thế kỷ 18, nay gán cho ông.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: 4/10 chỉ có dấu hỏi trong nguồn tiếng Anh.
- **Tuổi lúc nhậm chức ở Jaén**: 17 theo bản tiếng Tây Ban Nha, 18 theo hồi ký của chính ông.
- **Chuyện cướp biển**: bản tiếng Anh nói cướp biển tấn công tàu hai lần; bản tiếng Tây Ban Nha nói cướp biển Pháp bắt ông trước khi về. Cả hai đều không nêu nguồn cụ thể.
- **Cervantes đọc sách của ông**: chỉ là suy đoán "hợp lý".
- **Magnificat ở Lima**: gán dựa trên phong cách, không có tài liệu.
- **Phục vụ Maximilian II**: bản tiếng Anh ghi "đôi lúc", không có thời gian.
- **Nguyên nhân mất**: ô thông tin ghi "Cái chết đen", văn bản ghi dịch hạch 1599.
- **Chức Málaga**: bản tiếng Tây Ban Nha nói ông được chọn kế Morales nhưng chưa bao giờ đến sống ở đó.

## Bối cảnh
Sevilla cuối thế kỷ 16 là cảng độc quyền buôn bán với châu Mỹ và có nhà thờ chính toà đồ sộ. Guerrero sống nửa đời trong cảnh túng thiếu: sau chuyến hành hương ông mắc nợ, thậm chí bị giam, rồi được chính nhà thờ cứu. Cuối đời ông định đi Thánh địa lần nữa nhưng mất trước khi kịp đi.
`,
    refs: [
      ['Wikipedia (en) — Francisco Guerrero (composer)', 'https://en.wikipedia.org/wiki/Francisco_Guerrero_(composer)'],
      ['Wikipedia (es) — Francisco Guerrero', 'https://es.wikipedia.org/wiki/Francisco_Guerrero'],
    ],
  },

  'Tomás Luis de Victoria': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1548 | Sinh, nhiều khả năng ở Ávila (Sanchidrián cũng được đề xuất, không có sổ rửa tội) |
| 1557 | Cha mất; chú Juan Luis làm người giám hộ; ông là ca đồng ở nhà thờ Ávila |
| 1565 | Được học bổng của Philip II, đến Roma làm ca sĩ ở Collegium Germanicum |
| 1572 | In tập motet đầu |
| 1574 | Thụ phong linh mục |
| 1575 | Maestro di cappella nhà thờ S. Apollinare (bản tiếng Tây Ban Nha: tháng 3/1575 làm lector ở Montserrat) |
| 1585 | In *Officium Hebdomadae Sanctae* ở Roma; tháng 5 về Tây Ban Nha |
| 1587 | Philip II bổ nhiệm làm tuyên uý của Hoàng hậu María ở Descalzas Reales, Madrid |
| 1603 | Hoàng hậu mất, để lại cho ông một chức tuyên uý |
| k. 20–27/8/1611 | Mất ở Madrid; mộ chưa xác định được |

## Âm nhạc và đóng góp
Victoria viết gần như chỉ nhạc thánh Latin nhiều bè. So với đối vị rậm của Palestrina, nhạc ông có đường nét đơn giản hơn, đồng âm nhiều, tương phản nhịp rõ; ông cũng dùng quãng cấm trong đối vị nghiêm ngặt thế kỷ 16 (như sáu trưởng đi lên) và vẽ chữ bằng nhạc kịch tính hơn thường thấy trong [[madrigal]]. Có tác phẩm đa dàn kiểu Venezia, organ đôi lúc như một giọng solo. *Officium Defunctorum* (Requiem cho Hoàng hậu, 1603) thường được coi là kiệt tác ([[thanh-le-va-requiem]]); *Officium Hebdomadae Sanctae* (1585) gồm 37 bài, trong đó 18 [[motet]] *Tenebrae Responsories*; ngoài ra là các thánh lễ *Alma redemptoris mater*, *O magnum mysterium* cùng Magnificat, Lamentations, Thương khó. Padre Martini khen các câu giai điệu của ông.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Ávila hay Sanchidrián, không có chứng cứ quyết định.
- **Gốc converso**: chỉ suy từ nghề nghiệp, tài sản gia đình; không có bằng chứng cứng.
- **Học Palestrina**: có thể, chứng cứ gián tiếp.
- **Dự tang lễ Palestrina năm 1594**: Wikipedia tiếng Anh đánh dấu cần dẫn nguồn.
- **Không lấy thêm lương**: là lời của chính ông.
- **Chân dung**: tranh thường thấy là chân dung tưởng tượng thế kỷ 19; không biết hình thật.
- **Nhà thờ Ávila**: bản tiếng Tây Ban Nha nói nhà thờ nhận sách nhạc của ông năm 1573 nhưng không trả tiền.

## Bối cảnh
Ông lớn lên trong thời kỳ Cải cách Công giáo, học ở Roma nơi Palestrina hoạt động, rồi về sống ở Descalzas Reales, một tu viện Madrid nơi bà María của Áo (em gái vua) sống ẩn dật cùng các nữ tu. Nhạc tang lễ năm 1603 viết cho chính bà.
`,
    refs: [
      ['Wikipedia (en) — Tomás Luis de Victoria', 'https://en.wikipedia.org/wiki/Tom%C3%A1s_Luis_de_Victoria'],
      ['Wikipedia (es) — Tomás Luis de Victoria', 'https://es.wikipedia.org/wiki/Tom%C3%A1s_Luis_de_Victoria'],
    ],
  },

  'John Taverner': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1490 | Sinh ở Lincolnshire, có thể gần Tattershall (một chú thích ghi k. 1495) |
| 1524 | Ca sĩ khách ở St Botolph, Boston; bản tiếng Pháp nói ông là thành viên rồi chỉ huy ca đoàn ở Tattershall |
| 1526 | Organ và chỉ huy ca đồng đầu tiên của Cardinal College, Oxford, do Hồng y Wolsey sáng lập |
| 1528 | Bị khiển trách vì dính líu nhẹ đến người Luther; được tha vì chỉ là "một nhạc sĩ" (bản tiếng Pháp: bị bỏ tù) |
| 1530 | Rời trường sau khi Wolsey thất sủng (bản tiếng Pháp: tháng 4/1530) |
| k. 1536 | Cưới goá phụ Rose Parrowe |
| 18/10/1545 | Mất ở Boston, chôn dưới tháp chuông nhà thờ giáo xứ |

## Âm nhạc và đóng góp
Taverner là nhà soạn nhạc Anh hàng đầu đầu thế kỷ 16. Phần lớn nhạc là thánh lễ, Magnificat và [[motet]], đa số được cho là soạn thập niên 1520. Ông hay dùng [[cantus-firmus]] đặt ở bè giữa, thường là bè tenor, cân đối độ dài các phần lễ bằng cách lặp chất liệu, và dùng melisma dài khi lời ngắn; vài đoạn kỹ thuật ít bè, có lẽ cho giọng solo. Tác phẩm: *Missa Gloria tibi Trinitas* (6 bè), phần Benedictus của nó khởi nguồn thể loại *In nomine* cho viol; *Missa Corona spinea*; *Western Wynde Mass* (4 bè, có giai điệu bài hát xuất hiện lần lượt ở các bè); motet *Dum transisset sabbatum*. Ông còn viết parody mass (*Mater Christi*) dựa trên motet của chính mình.

## Giai thoại và điều chưa chắc
- **Năm sinh, gia thế**: không rõ cha mẹ; một lá thư nói ông có họ với gia đình Yerburgh.
- **"Đặc vụ của Cromwell" phá tu viện**: chuyện này được kể rộng rãi nhưng ngày nay bị coi là rất đáng ngờ.
- **Ngừng sáng tác**: không có chức vụ hay tác phẩm có niên đại sau 1530, nên có ý kiến cho rằng ông thôi soạn nhạc; Wikipedia tiếng Pháp lại nói ông nhận một chức ở St Botolph, Boston năm 1537.
- **Lập trường tôn giáo**: sự kiện 1528 là nguồn duy nhất cho thấy ông có dính líu đến tư tưởng cải cách; chưa có tài liệu về một cuộc cải đạo.
- **Chữ ký**: ghi tên là "Tavernor".
- **O splendor gloriae** có thể viết chung với Christopher Tye.
- Nhà soạn nhạc John Tavener (thế kỷ 20) nhận mình là hậu duệ trực hệ — lời tự nhận.

## Bối cảnh
Nước Anh thời Henry VIII: Wolsey lập Cardinal College để làm trường kiểu mẫu, tuyển ca sĩ giỏi, rồi sụp đổ năm 1529. Sau đó là cải cách tôn giáo và giải tán tu viện, khiến kiểu nhạc lễ La-tinh bị thu hẹp dần. Boston là thị trấn buôn len giàu có, có nhà thờ lớn.
`,
    refs: [
      ['Wikipedia (en) — John Taverner (composer)', 'https://en.wikipedia.org/wiki/John_Taverner'],
      ['Wikipedia (fr) — John Taverner', 'https://fr.wikipedia.org/wiki/John_Taverner'],
    ],
  },

  'Thomas Tallis': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1505 | Sinh, có lẽ ở Kent; ước lượng từ 1500 đến 1520 |
| 1531 | Có tên ở tu viện Dover Priory là organ và thầy dạy sáu ca đồng |
| k. 1538–1540 | Ở tu viện Waltham, Essex, đến khi bị giải tán (3/1540) |
| 1540 | Vào ca đoàn Canterbury khoảng hai năm |
| k. 1543 | Có lẽ bắt đầu ở Chapel Royal (bản tiếng Pháp: 1542) |
| k. 1552 | Cưới goá phụ Joan, không có con |
| 1558–1559 | Dự tang lễ Mary I và lễ đăng quang Elizabeth I |
| 1575 | Cùng Byrd nhận độc quyền in nhạc nhiều bè 21 năm; in *Cantiones sacrae*, bán chậm |
| 23/11/1585 | Mất ở Greenwich (một số nguồn ghi 20/11) |

## Âm nhạc và đóng góp
Tallis phục vụ bốn đời vua Anh nên nhạc ông đi qua nhiều thay đổi tôn giáo. Thời đầu là antiphon Marian kiểu "votive" Anh, đường nét dài, trang trí. Thập niên 1540 ông giản lược theo yêu cầu cải cách, như *Mass for Four Voices* gần đồng âm, rồi viết các anthem và service tiếng Anh. Về sau là đối vị mô phỏng dày trong *Lamentations* và *Spem in alium*, motet 40 bè (tám dàn năm bè). *If ye love me* được gán vào thời Edward VI. Còn có *O nata lux*, *Missa Puer natus est nobis*, các giai điệu thánh vịnh trong Psalter của Parker (1567) và nhạc đàn phím *Felix namque*. Thể loại [[motet]] và [[thanh-le-va-requiem]] đều có đại diện trong nhạc ông.

## Giai thoại và điều chưa chắc
- **Năm sinh, nơi sinh**: Kent chỉ suy từ họ; không có sổ.
- **Ngày mất**: 20 hoặc 23/11/1585; có ghi chú còn nêu 3/12 theo lịch Gregorius.
- **Thôi sáng tác sau 1575**: suy từ việc không có tác phẩm còn lại, chưa chứng minh được.
- **Spem in alium**: được cho là đặt hàng bởi Bá tước Arundel, hoặc viết cho sinh nhật thứ 40 của Elizabeth I (bản tiếng Pháp); có ý kiến cho rằng được gợi từ *Ecce beatam lucem* của Striggio. Việc Tallis dính vào một âm mưu chính trị nào không có chứng cứ.
- **"Cha đẻ nhạc nhà thờ Anh"**: danh hiệu từ thời Victoria, không phải của thời ông; người đương thời gọi Byrd là "cha của âm nhạc".
- **T-A-L-L-I-S trong 69 nốt dài**: cách đọc diễn giải, không có tài liệu về chủ ý.
- **Tôn giáo riêng**: được mô tả là Công giáo; không có tài liệu về niềm tin riêng.
- **Chân dung**: duy nhất là bản khắc thế kỷ 18, sau khi mất.

## Bối cảnh
Ông làm nhạc sĩ nhà thờ trong những năm tháng đảo lộn: Henry VIII chia tách với Roma, Edward VI đẩy cải cách, Mary I phục hồi Công giáo, Elizabeth I lập Anh giáo. Ông thích nghi mà không bỏ đức tin, theo lời một số nhà viết tiểu sử. Độc quyền in nhạc năm 1575 là một canh bạc thương mại thất bại và phải xin Nữ hoàng giúp.
`,
    refs: [
      ['Wikipedia (en) — Thomas Tallis', 'https://en.wikipedia.org/wiki/Thomas_Tallis'],
      ['Wikipedia (fr) — Thomas Tallis', 'https://fr.wikipedia.org/wiki/Thomas_Tallis'],
    ],
  },

  'William Byrd': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1539–1540 | Sinh, nhiều khả năng ở London (ô thông tin tiếng Anh ghi Ingatestone, Essex) |
| 1563 | Organ và chỉ huy ca đồng nhà thờ Lincoln (đến 1572) |
| 14/9/1568 | Cưới Juliana Birley ở Lincoln |
| 19/11/1569 | Bị Dean và Chapter nêu lên cáo buộc không rõ, lương bị đình |
| 1572 | Vào Chapel Royal sau khi Robert Parsons chết đuối |
| 1575 | Cùng Tallis nhận độc quyền in nhạc 21 năm; in *Cantiones sacrae* |
| 1583 | Bị đình chỉ ở Chapel Royal một thời gian vì quan hệ với Paget liên quan vụ Throckmorton |
| 1588–1591 | In các tuyển tập ca khúc tiếng Anh; *My Ladye Nevells Booke* hoàn tất 11/9/1591 |
| k. 1594 | Chuyển đến Stondon Massey, Essex, gần người bảo trợ Sir John Petre |
| 1605–1607 | *Gradualia* I và II |
| 4/7/1623 | Mất ở Stondon Massey |

## Âm nhạc và đóng góp
Byrd bao quát hầu hết thể loại thời ông: [[motet]] La-tinh theo lối "mô phỏng giàu biểu cảm", ba thánh lễ (ba, bốn, năm bè), service và anthem Anh giáo, consort (fantasia, *In nomine*), nhạc đàn phím virginal (*My Ladye Nevells Booke*, *The Battle*, biến tấu) và ca khúc tiếng Anh. *Gradualia* (1605, 1607) là bộ thánh nhạc Công giáo lớn. Ông viết tập ca khúc 1588 (*Psalms, Sonets and Songs of Sadness and Pietie*), có nét gần [[madrigal]] nhưng ít chịu ảnh hưởng Ý hơn Morley.

## Giai thoại và điều chưa chắc
- **Năm sinh**: tài liệu năm 1598 ghi "58 tuổi hoặc xấp xỉ", nên k. 1540; di chúc 1622 ghi "năm thứ 80", lệch khoảng hai năm (có ý kiến di chúc không được cập nhật).
- **Nơi sinh**: London (văn bản) hay Ingatestone (ô thông tin); bản tiếng Tây Ban Nha nói không phải Lincolnshire như từng tin.
- **Học trò của Tallis**: dựa trên câu "bred up to Musick under Tho. Tallys" của Anthony Wood; chưa có chứng cứ quyết định.
- **Lý do vụ Lincoln 1569**: không rõ cáo buộc là gì; ảnh hưởng thanh giáo chỉ là khả năng.
- **Gia đình có phải Công giáo ngay từ đầu**: có ý kiến gia đình theo Tin Lành, hoặc chỉ trên danh nghĩa.
- **Các motet như bình luận chính trị**: những cách đọc "ẩn ý" (ví dụ Thánh vịnh 78 và vụ xử tử Campion) được tin rộng nhưng chưa được chứng minh.
- **Shakespeare**: giả thuyết (Finnis và Martin, 2003) cho rằng "the bird of loudest lay" trong *The Phoenix and the Turtle* ám chỉ Byrd; chỉ là giả thuyết.

## Bối cảnh
Byrd là người Công giáo trong nước Anh Tin Lành của Elizabeth I nhưng vẫn giữ chỗ ở Chapel Royal nhờ tài. Gia đình ông nhiều lần bị ghi vào danh sách recusant (từ chối đi lễ Anh giáo) và nộp phạt. Ở Essex ông được Petre che chở, và các thánh lễ của ông có lẽ được hát trong những buổi lễ kín của gia đình Công giáo.
`,
    refs: [
      ['Wikipedia (en) — William Byrd', 'https://en.wikipedia.org/wiki/William_Byrd'],
      ['Wikipedia (es) — William Byrd', 'https://es.wikipedia.org/wiki/William_Byrd'],
    ],
  },

  'Thomas Morley': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1557 | Sinh ở Norwich, con trai một người nấu bia; nhiều khả năng là ca đồng nhà thờ Norwich |
| trước 1574 | Chuyển đến London, ca đồng St Paul's, học với William Byrd |
| 1583 | Chỉ huy ca đoàn nhà thờ Norwich |
| 1588 | Cử nhân Oxford; Nicholas Yonge in *Musica transalpina* |
| 1589 | Organ St Paul's (bản tiếng Anh: "sớm sau 1588") |
| 1593 | Gentleman of the Chapel Royal (bản tiếng Pháp) |
| 1597 | In *A Plaine and Easie Introduction to Practicall Musicke* |
| 1598 | Nhận bằng sáng chế in nhạc, giữ đến khi mất |
| 1601 | Biên tập *The Triumphs of Oriana* |
| đầu 10/1602 | Mất ở London, khoảng 45 tuổi; chôn ở St Botolph Billingsgate |

## Âm nhạc và đóng góp
Morley là nhân vật hàng đầu của trường phái [[madrigal]] Anh: ông đưa mô hình Ý về theo thị hiếu Anh, nhạc nhẹ, nhanh, dễ hát. Ông có 11 tập madrigal, trong đó *Now is the month of maying* (thực ra là một ballett, thể có "fa-la-la") và *It was a lover and his lass* (1600). Ông còn viết nhạc đàn phím (trong *Fitzwilliam Virginal Book*), nhạc consort, nhạc thánh (*First Service*, *Burial Service*). Công trình lớn nhất là *A Plaine and Easie Introduction* (1597), một giáo trình đối thoại về đọc nhạc, đối vị và sáng tác, đề tặng Byrd, thành sách giáo khoa chuẩn của thời ấy.

## Giai thoại và điều chưa chắc
- **Năm sinh, quãng học ở Norwich**: chỉ là "nhiều khả năng".
- **Thời gian học với Byrd**: không rõ.
- **Công giáo?**: có thể ông là Công giáo; ngược lại có chứng cứ ông từng báo tin về người Công giáo. Bản tiếng Anh nêu cả hai.
- **Quan hệ với Shakespeare**: ông sống cùng giáo xứ, giả thuyết về hợp tác chưa được chứng minh; việc *It was a lover and his lass* được dùng trong buổi diễn thời Shakespeare không được xác nhận (đánh dấu cần dẫn nguồn).
- **Ngày mất**: bản tiếng Pháp nêu tháng 10/1602 nhưng thẻ phân loại ghi tháng 2/1602, hai nguồn lệch.
- **Mộ**: mất trong Đại hoả hoạn London 1666.
- Mốc 1583 ở Norwich và sự nghiệp ở St Paul's khó khớp với nhau trong cùng một nguồn.

## Bối cảnh
London thời Elizabeth I: sân khấu, in ấn và thị trường nhạc gia đình bùng nổ. Sau tuyển tập *Musica transalpina* (1588), người Anh đua nhau hát madrigal tại nhà. Độc quyền in nhạc ông giữ đến khi mất (nối tiếp độc quyền Tallis–Byrd) mang lại thu nhập cho ông.
`,
    refs: [
      ['Wikipedia (en) — Thomas Morley', 'https://en.wikipedia.org/wiki/Thomas_Morley'],
      ['Wikipedia (fr) — Thomas Morley', 'https://fr.wikipedia.org/wiki/Thomas_Morley'],
    ],
  },

  'John Bull': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1562–1563 | Sinh; nơi sinh chưa rõ (Somerset, London, Hereford hay Old Radnor) |
| 1573 | Vào ca đoàn nhà thờ Hereford |
| 1574 | Vào Children of the Chapel Royal, học với John Blitheman và William Hunnis |
| 1586 | Bằng Oxford; thành Gentleman of the Chapel Royal |
| 1591 | Organ Chapel Royal sau khi Blitheman mất |
| 1592 | Tiến sĩ nhạc Oxford |
| 1596 | Giáo sư âm nhạc đầu tiên của Gresham College |
| 1601–1602 | Chuyến đi lục địa mười tám tháng, không rõ mục đích |
| 1607 | Rời Gresham College sau vụ có con ngoài hôn nhân; cưới Elizabeth Walter |
| 1612–1613 | Bảy bản trong *Parthenia*, ấn phẩm duy nhất của ông |
| 10/1613 | Bí mật rời Anh |
| 1615–1617 | Phụ tá rồi organ chính nhà thờ Antwerp |
| 12/3/1628 | Mất ở Antwerp (bản tiếng Anh: chôn ngày 15/3) |

## Âm nhạc và đóng góp
Bull là một trong những virginalist hàng đầu đầu thế kỷ 17, được xếp cạnh Sweelinck, Frescobaldi. Ông nổi vì kỹ thuật [[dan-phim-co]] điêu luyện và đối vị: 120 canon, đa số dựa trên *Miserere* (Thánh vịnh 51), dùng nén, giãn, đảo ngược và nhiều nhịp. Ông cũng viết nhạc nhẹ hơn với tên dí dỏm như *Bull's Good-Night*, và anthem có đệm, nổi tiếng là *Star Anthem*. Nhiều bản của ông có trong *Fitzwilliam Virginal Book*. Phần lớn nhạc ông bị mất, huỷ hoặc gán nhầm cho người khác.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: nhiều đề xuất; nghiên cứu gần đây nghiêng về Old Radnor (xứ Wales) nhưng chưa có sổ.
- **Làm gián điệp cho Elizabeth**: một số chứng cứ gợi ý, chuyến đi 1601–1602 vẫn chưa giải thích được; chưa chứng minh.
- **Vụ Star Chamber 1597**: không biết kết quả.
- **Lý do rời Anh**: ông nói bị đàn áp tôn giáo (Công giáo), nhưng không có bằng chứng ông theo Công giáo; một đặc sứ Anh viết ông trốn tội "tà dâm, ngoại tình và các tội nặng khác".
- **Giai thoại giường chiếu với hai người hầu gái và vụ tấn công một mục sư**: được kể lại rộng rãi, nguồn gốc không chắc.
- **Tổng giám mục Canterbury chế ông "có nhiều nhạc hơn đức hạnh"**: lời truyền.
- **God Save the King**: ông thường bị gán nhầm là tác giả.
- **Gặp Sweelinck ở Antwerp**: nhiều khả năng nhưng chưa xác nhận.

## Bối cảnh
Nước Anh thời Elizabeth I và James I: Chapel Royal là trung tâm âm nhạc, còn Gresham College là trường mới của thành phố London. Antwerp là thành phố Công giáo nơi ông tìm chỗ nương thân, với nhà thờ chính toà lớn. Cả cuộc đời ông gắn với tiếng xấu nhiều hơn tài liệu rõ ràng.
`,
    refs: [
      ['Wikipedia (en) — John Bull (composer)', 'https://en.wikipedia.org/wiki/John_Bull_(composer)'],
      ['Wikipedia (fr) — John Bull (compositeur)', 'https://fr.wikipedia.org/wiki/John_Bull_(compositeur)'],
    ],
  },

  'John Dowland': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1563 | Sinh, có lẽ ở London; năm sinh dựa trên lời chính ông nói về tuổi (bản tiếng Pháp: 2/1/1563) |
| 1580 | Sang Paris phục vụ Sir Henry Cobham, rồi Sir Edward Stafford |
| 1588 | Cử nhân nhạc Christ Church, Oxford |
| 1594 | Xin chức luýt triều đình không thành |
| 1594–1595 | Đi Đức và Ý (Padua, Venezia, Firenze); bỏ ý định gặp Marenzio ở Roma |
| 1597 | In *First Booke of Songes or Ayres* |
| 1598 | Vào phục vụ Christian IV của Đan Mạch (đến 1606) |
| 1604 | In *Lachrimae, or Seaven Teares* |
| 1612 | Làm luýt cho vua James I; in *A Pilgrimes Solace* |
| 20/1/1626 | Lần nhận lương triều đình cuối; chôn ngày 20/2/1626 ở St Ann, Blackfriars |

## Âm nhạc và đóng góp
Dowland là bậc thầy đàn luýt và ca khúc luýt (*lute song*). Bốn tập ca khúc (1597, 1600, 1603, 1612) có *Flow my teares* (từ tập hai). *Lachrimae* (1604) gồm bảy pavane cho viol với luýt, cùng các galliard, mọi pavane lấy từ cụm bốn nốt đi xuống của "Flow my tears". Ông cũng để lại nhiều bản luýt solo (đánh số Poulton). Giọng điệu u sầu của ông hiếm thấy thời ấy; học giả vẫn bàn xem đó là một "vai diễn" nghệ thuật hay tính khí thật. Lối viết chịu ảnh hưởng consort song, nhạc nhảy và các monodist Ý.

## Giai thoại và điều chưa chắc
- **Năm sinh, nơi sinh**: London chỉ được ngầm cho là đúng; W. H. Grattan Flood nói Dalkey gần Dublin, Thomas Fuller nói Westminster; không có chứng cứ phụ.
- **"Đồng hương" ở Dublin**: lời đề tặng John Forster; A. L. Rowse đọc chữ "countryman" theo nghĩa người Ireland, điều này bị phản bác.
- **Công giáo**: ông thú nhận với Cecil có thiên hướng Công giáo và có thể đã cải đạo riêng; ông nói đơn xin chức bị từ chối vì thế, nhưng bản tiếng Pháp lưu ý nhạc sĩ Công giáo vẫn có thể làm ở triều đình.
- **Bị đuổi khỏi Đan Mạch năm 1606**: các tác giả thế kỷ 20 nói vậy; học giả hiện đại cho rằng ông tự rời đi.
- **Ngày mất**: chỉ biết ngày nhận lương cuối và ngày chôn.
- **Ấn bản 1596 *New Booke of Tabliture***: in không phép; ông gọi là "sai và không hoàn chỉnh".
- **Gặp Marenzio**: ông không đi quá Firenze.
- Chân dung gán cho ông chưa được xác thực; hình ảnh ông luôn u sầu có thể mâu thuẫn với lời kể về một người vui vẻ.

## Bối cảnh
Dowland sống đời nhạc sĩ lang thang: Paris, các triều đình Đức, Ý, rồi Copenhagen, nơi Christian IV trả lương rất cao. Ở Anh ông không được chỗ ở triều đình cho đến 1612. Khi vẫn ở Đan Mạch, các tập ca khúc của ông lại in ở London. Dòng nhạc của ông song hành với [[madrigal]] Anh nhưng thiên về giọng đơn và đàn luýt.
`,
    refs: [
      ['Wikipedia (en) — John Dowland', 'https://en.wikipedia.org/wiki/John_Dowland'],
      ['Wikipedia (fr) — John Dowland', 'https://fr.wikipedia.org/wiki/John_Dowland'],
    ],
  },
}

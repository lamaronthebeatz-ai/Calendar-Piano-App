import type { Person } from './people'

/** Tiểu sử chi tiết các nhà soạn nhạc Baroque Ý – Đức (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_BAR_C: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Arcangelo Corelli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/2/1653 | Sinh ở Fusignano (Romagna, Quốc gia Giáo hoàng); cha mất năm tuần trước khi ông chào đời |
| 1666 | Đến Bologna, thành phố có trường violin mạnh |
| 1675 | Văn bản đầu tiên ở Roma: chơi trong oratorio mùa Chay ở San Giovanni dei Fiorentini và lễ của người Pháp ở San Luigi dei Francesi |
| 1681–1694 | Xuất bản Op. 1–4, các sonata trio (da chiesa và da camera) in ở Roma |
| 1700 | Op. 5, mười hai sonata violin, kết bằng các biến tấu *La Folia* |
| 1706 | Được nhận vào Hàn lâm viện Arcadia, lấy tên Arcomelo Erimanteo |
| 8/1/1713 | Mất ở Roma, an táng ở Pantheon |
| 1714 | Op. 6, mười hai concerto grosso, in sau khi ông mất ở Amsterdam |

## Âm nhạc và đóng góp
Corelli công bố đúng sáu tập nhạc, nhưng tập nào cũng thành khuôn mẫu. Op. 1–4 là sonata trio; Op. 6 là bộ [[concerto-grosso]] kinh điển với *Concerto Giáng sinh* (số 8). Wikipedia tiếng Anh nhận xét ông là người sớm dùng hệ thống thanh điệu mới một cách có chủ đích về biểu cảm và cấu trúc, với chuỗi hoà âm đi theo vòng quãng năm. Nhạc của ông tiết chế, ít chromatic, dissonance được chuẩn bị và giải quyết rõ ràng. Là nghệ sĩ violin, ông được gắn với kỹ thuật dây đôi và dùng dây G; cuốn *The Art of Playing on the Violin* (1751) của Geminiani được cho là phản ánh nguyên tắc của ông. Op. 6 về sau ảnh hưởng đến Handel và Bach. Xem thêm [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Bị Lully đuổi khỏi Paris năm 19 tuổi**: có vẻ bắt nguồn từ Rousseau, không có chứng cứ đương thời.
- **Chuyến đi Pháp, Đức (phục vụ Maximilian II Emanuel xứ Bayern)**: không có văn bản xác nhận.
- **Xuất thân quý tộc, cậu bé xin thầy dạy nhạc**: do cha xứ Laurenti kể cuối thế kỷ 18; nghiên cứu đầu thế kỷ 20 coi là hư cấu. Chuyện tình với con gái thầy Bassani cũng bị coi là gần như bịa.
- **Gia nhập Accademia Filarmonica ở Bologna năm 1670**: Treccani ghi như sự kiện; Wikipedia tiếng Anh coi là còn tranh cãi.
- **Chuyện với Handel năm 1708** (Corelli không chơi nổi đoạn cao): hậu thế kể lại, khó kiểm chứng. Chuyến đến Naples cũng được ghi các năm 1701, 1702, 1708.
- **Lời đề tặng Op. 6 ghi năm 1712**: Treccani cho là giả mạo.
- Treccani ghi ông được Hồng y Pamphili bổ làm thầy nhạc năm 1687, trong khi Wikipedia tiếng Anh cho ông chơi cho Pamphili từ 1676–1679; hai nguồn lệch nhau về trình tự phục vụ.

## Bối cảnh
Roma thời Corelli không có dàn nhạc thường trực: nhạc công được thuê theo từng dịp, do các quý tộc và hồng y như Pamphili, Ottoboni bảo trợ. Dàn của San Luigi dei Francesi chỉ khoảng 10–20 người, nhưng các buổi lớn do Corelli điều khiển có lúc lên tới khoảng 150 người. Geminiani nhớ ông dừng cả dàn khi thấy một cây vĩ đưa sai hướng; ông tuyển nhạc công, trả công và lo tổ chức như người làm sự kiện. Những năm cuối ông ở trong cung của Hồng y Ottoboni, nơi diễn ra các buổi hoà nhạc.
`,
    refs: [
      ['Wikipedia — Arcangelo Corelli', 'https://en.wikipedia.org/wiki/Arcangelo_Corelli'],
      ['Treccani, Dizionario Biografico — Arcangelo Corelli', 'https://www.treccani.it/enciclopedia/arcangelo-corelli_(Dizionario-Biografico)/'],
    ],
  },

  'Alessandro Scarlatti': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/5/1660 | Sinh (Palermo theo Treccani; Palermo hoặc Trapani theo Wikipedia) |
| k. 1672 | Gia đình có lẽ chuyển đến Roma (suy từ giấy tờ về sau) |
| 1679 | Opera *Gli equivoci nel sembiante* diễn ở Roma; ông làm nhạc trưởng cho nữ hoàng Christina của Thuỵ Điển |
| 1684 | Nhạc trưởng của phó vương Naples |
| 1702–1708 | Rời Naples; làm việc ở Roma, Florence, Venice, được Hồng y Ottoboni và Ferdinando de Medici bảo trợ |
| 1707 | *Mitridate Eupatore*, thường được coi là kiệt tác opera của ông |
| 1708–1717 | Trở lại Naples |
| 1718–1723 | Chủ yếu ở Roma (*Telemaco*, *La Griselda* 1721, *Messa di Santa Cecilia*) |
| 22/10/1725 | Mất ở Naples |

## Âm nhạc và đóng góp
Ông là nhân vật đầu tàu của [[opera]] Naples, nhưng viết rất đa dạng: hơn 500 cantata thính phòng cho giọng đơn (Treccani nêu khoảng 800 bản gán cho ông), oratorio, thánh nhạc và nhạc cụ. Wikipedia ghi công ông với dạng overture Ý ba chương (tiền thân của giao hưởng), sonata bốn bè và việc củng cố aria da capo thay cho aria hai khổ trên nền bass lặp. Opera Ý của Handel chịu ảnh hưởng từ sân khấu của ông. Con trai ông là Domenico (xem bài riêng).

## Giai thoại và điều chưa chắc
- **Quê quán**: Palermo hay Trapani còn được nêu cả hai; Treccani viết ông sinh ở Palermo, cha là người Trapani.
- **Học trò của Carissimi**: tuy "thường được nói", Treccani nhấn mạnh không có tài liệu xác nhận.
- **"Trường phái Naples"**: Treccani coi là cách dựng của thế kỷ 19, vai trò dạy học của ông khá nhỏ.
- **Chị gái và việc xin chức ở Naples**: giả thuyết (chị là ca sĩ opera, có thể là tình nhân của một quý tộc có thế lực) chỉ là suy đoán.
- Số opera của ông không chắc; opera viết cho Ferdinando de Medici đã mất, nên không biết phong cách.

## Bối cảnh
Nửa sau đời ông xoay quanh các nhà bảo trợ: nữ hoàng lưu vong ở Roma, phó vương Tây Ban Nha ở Naples, hồng y và đại công tước vùng Tuscany có nhà hát riêng gần Florence. Wikipedia ghi khán giả Naples dần chán nhạc của ông, trong khi Roma tiếp nhận ông tốt hơn; ở Roma ông diễn opera tại nhà hát Capranica. Ông được mai táng ở nhà thờ Santa Maria di Montesanto, Naples.
`,
    refs: [
      ['Wikipedia — Alessandro Scarlatti', 'https://en.wikipedia.org/wiki/Alessandro_Scarlatti'],
      ['Treccani, Dizionario Biografico — Alessandro Scarlatti', 'https://www.treccani.it/enciclopedia/alessandro-scarlatti_(Dizionario-Biografico)/'],
    ],
  },

  'Tomaso Albinoni': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1671 | Sinh ở Venice (Wikipedia ghi 8/6; Treccani ghi 6/6) |
| 1694 | Xuất bản Op. 1 (sonata trio) và ra mắt opera *Zenobia* ở Venice |
| 1705 | Cưới Margherita Rimondi (Raimondi), ca sĩ |
| 1709 | Cha mất; ông bỏ việc kinh doanh gia đình để chuyên về nhạc (theo bản tiếng Đức) |
| 1721 | Gia sản gia đình mất, vợ mất cùng năm (theo Treccani) |
| 1722 | Được tuyển hầu Bayern mời đến Munich chỉ huy hai opera |
| 17/1/1751 | Mất ở Venice |

## Âm nhạc và đóng góp
Albinoni tự nhận là "dilettante veneto" (người nghiệp dư Venice) trong những tập đầu, và nhờ gia sản riêng nên hầu như không giữ chức nhà thờ hay triều đình, điều hiếm thời đó. Ông viết hàng chục opera (Wikipedia: ít nhất 50; chính ông từng nói tới 81 trong một libretto) nhưng phần lớn thất truyền; thứ còn lại chủ yếu là chín tập nhạc cụ, trong đó Op. 9 *12 Concerti a cinque* nổi nhất. Các concerto cho oboe của ông thuộc loại sớm nhất được in ở Ý. Bach viết fugue trên đề tài Albinoni (BWV 950, 951) và dùng bè bass của ông để dạy. Xem [[hinh-thuc-concerto]].

## Giai thoại và điều chưa chắc
- **"Adagio của Albinoni"**: bản in năm 1958 của Remo Giazotto, người nói đã dựa trên mảnh bản thảo một sonata trio của Albinoni. Lời này chưa được kiểm chứng; Wikipedia ghi một mảnh bản thảo mang dấu Dresden mà Muska Mangano tìm thấy đã làm lung lay quan điểm cho rằng đó là trò mạo danh. Treccani coi tính xác thực là đáng ngờ.
- **Năm mất**: một số nguồn cũ ghi 1750; sổ giáo xứ San Barnaba cho 1751.
- **Ngày sinh**: 6/6 hay 8/6; bản tiếng Đức nói ngày 14/6 ở nơi khác là ngày rửa tội.
- **Thầy dạy**: không rõ; chuyện học với Legrenzi chưa chứng minh được.
- **Công việc của cha**: Wikipedia gọi là thương nhân giấy; bản tiếng Đức nói xưởng giấy và bài lá.
- Nhiều sonata gán cho ông được coi là đáng ngờ về phong cách; số lượng opera cũng lệch giữa các nguồn.

## Bối cảnh
Venice đầu thế kỷ 18 có hàng loạt nhà hát opera chạy theo mùa Carnevale, và nhà in nhạc ở Amsterdam đưa nhạc của người Venice ra khắp châu Âu. Albinoni lớn lên trong gia đình bán giấy và bài lá, với nghề nghiệp ổn định, nên chơi nhạc theo kiểu chủ động chứ không phục vụ một nhà bảo trợ. Một phần bản thảo của ông mất khi Thư viện Dresden bị phá trong Thế chiến II.
`,
    refs: [
      ['Wikipedia — Tomaso Albinoni', 'https://en.wikipedia.org/wiki/Tomaso_Albinoni'],
      ['Wikipedia tiếng Đức — Tomaso Albinoni', 'https://de.wikipedia.org/wiki/Tomaso_Albinoni'],
      ['Treccani, Dizionario Biografico — Tomaso Albinoni', 'https://www.treccani.it/enciclopedia/tomaso-albinoni_(Dizionario-Biografico)/'],
    ],
  },

  'Antonio Vivaldi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 4/3/1678 | Sinh ở Venice; được bà đỡ làm phép rửa tại nhà do sức khoẻ yếu |
| 1693 | Cạo đầu (tonsure) bước vào con đường linh mục |
| 3/1703 | Thụ phong linh mục; tháng 9 làm thầy dạy violin ở Ospedale della Pietà |
| 1705 | Tập Op. 1 (sonata) được in |
| 1711 | *L'estro armonico* Op. 3 in ở Amsterdam; Pietà mời ông trở lại sau khi cho nghỉ năm 1709 |
| 1713–1714 | Opera đầu *Ottone in villa* (Vicenza); làm bầu sô nhà hát Sant'Angelo ở Venice |
| 1717/1718 | Sang Mantua làm nhạc trưởng cho thân vương Philip xứ Hesse-Darmstadt |
| 1725 | Op. 8 *Il cimento dell'armonia e dell'inventione*, gồm *Bốn mùa*, in ở Amsterdam |
| 1728 | Gặp hoàng đế Charles VI ở Trieste |
| 27/7/1741 | Mất ở Vienna |

## Âm nhạc và đóng góp
Vivaldi củng cố concerto độc tấu, với hơn 500 concerto (Wikipedia; riêng bảng phân loại trong bài chỉ cộng ra khoảng 420), phần lớn cho violin, và hơn 50 opera còn lại hoặc có ghi chép. *Bốn mùa* là bốn concerto kèm sonnet, thường được coi là ví dụ tiêu biểu của nhạc chương trình trước thế kỷ 19. Ông viết hơn 60 tác phẩm thánh nhạc cho Pietà, gồm *Gloria* RV 589 và *Stabat Mater*. Bach chuyển soạn nhiều concerto của ông cho phím đàn. Xem [[hinh-thuc-concerto]], [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Linh mục không dâng lễ vì bệnh hen**: ông xin miễn dâng lễ công khai năm 1704 (Wikipedia) hoặc bỏ nhiệm vụ dâng lễ cho một ân nhân đã mất năm 1706 (Treccani). "Hen" chỉ là cách diễn giải cụm *strettezza di petto* ("ngực tức"); lời đồn ông bỏ giữa lễ để ghi nốt nhạc không có nguồn rõ.
- **"Il Prete Rosso"**: nhiều khả năng do mái tóc đỏ, đặc điểm gia đình; Treccani nói biệt danh xuất hiện trong văn bản từ 1729.
- **Động đất ngày ông sinh**: tin đồn sai; trận động đất ở Venice là năm 1688.
- **Haydn hát trong tang lễ**: Wikipedia bác bỏ; không có nhạc trong lễ.
- **Anna Girò**: tin đồn tình cảm, ông phủ nhận trong thư 16/11/1737; Treccani coi là chưa chứng minh.
- **"94 opera"** (thư năm 1737) có thể phóng đại. Năm Mantua là 1717 hay 1718 cũng khác nhau giữa nguồn. Ngày mất 27 hay 28/7 còn lệch.

## Bối cảnh
Ospedale della Pietà là cô nhi viện cho trẻ bị bỏ rơi; các bé gái được dạy nhạc và những em giỏi nhất vào dàn nhạc và ca đoàn. Trong *Juditha triumphans* (1716), cả mười một vai, kể cả vai nam, do các cô gái ở đó hát. Ở Vienna, ông mất trong nhà của goá phụ một thợ làm yên ngựa, sau khi Charles VI qua đời khiến hy vọng về nhà hát tan; ngày nay khách sạn Sacher chiếm một phần khu đất đó.
`,
    refs: [
      ['Wikipedia — Antonio Vivaldi', 'https://en.wikipedia.org/wiki/Antonio_Vivaldi'],
      ['Treccani, Dizionario Biografico — Antonio Vivaldi', 'https://www.treccani.it/enciclopedia/antonio-vivaldi_(Dizionario-Biografico)/'],
    ],
  },

  'Francesco Durante': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 31/3/1684 | Sinh ở Frattamaggiore, gần Naples |
| 1699 | Cha mất; người chú Angelo Durante, nghệ sĩ organ, định hướng việc học nhạc |
| 1705 | Vở kịch thánh đầu tiên diễn ở Naples |
| 1710–1711 | Làm thầy thứ hai ngắn hạn ở nhạc viện Sant'Onofrio |
| 1728–1738 | Thầy chính nhạc viện Poveri di Gesù Cristo (theo Treccani) |
| k. 1742 | Thầy chính nhạc viện Santa Maria di Loreto cho đến cuối đời |
| 30/9/1755 | Mất ở Naples |

## Âm nhạc và đóng góp
Durante hầu như chỉ viết nhạc nhà thờ: các bản Requiem, nhiều Thánh lễ (trong đó *Missa Pastorale*, 1739 *Missa in Palestrina*), *Lamentations* và *Magnificat*; ông không viết cho sân khấu. Tiếng tăm lớn nhất là ở vai trò thầy: học trò kể tên gồm Pergolesi, Jommelli, Paisiello, Piccinni, Traetta, Sacchini, Fenaroli. Ông chú trọng giữ luật nghiêm, khác Alessandro Scarlatti, người đối xử với từng học trò theo cá tính. Các sonata phím đàn và concerto của ông là nhóm tác phẩm ít được biết hơn. Xem [[doi-am]].

## Giai thoại và điều chưa chắc
- **Học với Pasquini và Pitoni ở Roma**: Wikipedia ghi không có tài liệu; Treccani cũng nói giai đoạn Roma (1705–1719) và các chuyến đi Saxony, nhà Esterházy được ghi chép kém.
- **Học trò của A. Scarlatti**: được nêu rộng rãi, nhưng chuyện kế nhiệm Scarlatti năm 1725 chỉ là "người ta nói". Treccani ghi ông làm thầy chính Sant'Onofrio từ 1745.
- **Magnificat Si giáng** được ưa chuộng một phần vì bị gán cho Pergolesi; ngược lại một Magnificat Rê trưởng từng gán cho Pergolesi lại là của Durante.
- **Hasse** phản đối việc gọi Durante là nhà hoà âm vĩ đại nhất nước Ý; ông dành danh hiệu đó cho A. Scarlatti.
- Ngày của vở *Abigaile* mâu thuẫn trong Treccani (1736 hay 1763); vài bản Requiem và một số gán cho Durante hay Feo và Pergolesi còn tranh luận.

## Bối cảnh
Naples thế kỷ 18 có các "conservatorio" vốn là nhà nuôi trẻ mồ côi hay trẻ nghèo, nơi học trò sống nội trú và học nhạc rất kỹ, rồi ra làm nhạc công, ca sĩ, nhà soạn nhạc cho nhà thờ và nhà hát. Durante đi qua cả ba nơi: Poveri di Gesù Cristo, Sant'Onofrio và Santa Maria di Loreto. Ông cưới ba lần (1714, 1744, 1747 theo Treccani).
`,
    refs: [
      ['Wikipedia — Francesco Durante', 'https://en.wikipedia.org/wiki/Francesco_Durante'],
      ['Treccani, Dizionario Biografico — Francesco Durante', 'https://www.treccani.it/enciclopedia/francesco-durante_(Dizionario-Biografico)/'],
    ],
  },

  'Domenico Scarlatti': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 26/10/1685 | Sinh ở Naples, con thứ sáu của Alessandro Scarlatti (Grove 1904 ghi k. 1683) |
| 1701 | Nhạc sĩ organ và soạn nhạc của nhà nguyện hoàng gia Naples |
| 1709–1714 | Ở Roma, phục vụ nữ hoàng Ba Lan lưu vong Marie Casimire |
| 1714–1719 | Giám đốc âm nhạc Cappella Giulia ở St. Peter |
| 29/11/1719 | Có mặt ở Lisbon (theo sứ thần giáo hoàng): thầy nhạc của vua John V và công chúa Maria Barbara |
| 1729 | Theo Maria Barbara sang Seville rồi Madrid (1733) |
| 1738 | Được phong hiệp sĩ; xuất bản *Essercizi per Gravicembalo* (30 sonata) |
| 23/7/1757 | Mất ở Madrid |

## Âm nhạc và đóng góp
Di sản chính là 555 sonata cho harpsichord (số K. của Kirkpatrick theo trình tự thời gian; số L. của Longo xếp thành bộ tuỳ ý). Mỗi bản là một chương đơn, thường theo hình thức hai đoạn, có bản mang dấu vết sớm của hình thức sonata. Nhạc pha lẫn khí sắc nghiêm và nhẹ, điệu cung đình và ca khúc đường phố, hoà âm táo bạo; âm hưởng Iberia như điệu Phrygian và nốt lặp như đàn guitar. Kirkpatrick gọi điểm xoay giữa mỗi nửa là "the crux". Đa số sonata được cho là viết cho Maria Barbara. Burney là người ủng hộ tập *Essercizi* ở Anh. Xem [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Cuộc thi với Handel ở dinh Hồng y Ottoboni**: Grove 1904 ghi năm 1708, phần harpsichord bất phân thắng bại còn organ Handel hơn; Wikipedia coi đây là giai thoại truyền thống, không rõ năm. Chuyện ông làm dấu thánh khi nhắc tài Handel là từ Mainwaring.
- **Chuyến đi Anh 1719**: một nhật ký ngày 3/9/1719 nói ông "đi Anh", nhưng Kirkpatrick không thấy bằng chứng; Grove ghi cụ thể *Narciso* diễn ở London 1720. Hai nguồn lệch nhau.
- **Học với Pasquini**: Grove coi là "rất khó có", Wikipedia nói thầy dạy chưa xác nhận.
- **Nơi mất**: Grove 1904 ghi Naples (và cho rằng ông trở về Naples năm 1754), Wikipedia ghi Madrid.
- **"Fugue Con Mèo"**: hai nguồn tra được không nhắc chuyện này, nên người biên soạn không đưa vào.
- Niên đại các sonata muộn không chắc; Kirkpatrick cho rằng nhiều bản viết sau 1735.

## Bối cảnh
Lisbon của vua John V là triều đình giàu có, và Domenico dạy công chúa Maria Barbara; sau khi nàng lấy thái tử Tây Ban Nha, ông theo nàng đến Seville rồi Madrid. Một tấm bảng đặt ở nhà cũ ở Calle de Leganitos 35, Madrid. Ông kết hôn hai lần, có tổng cộng mười người con.
`,
    refs: [
      ['Wikipedia — Domenico Scarlatti', 'https://en.wikipedia.org/wiki/Domenico_Scarlatti'],
      ['Grove 1904 — Scarlatti, Domenico (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Scarlatti,_Domenico'],
    ],
  },

  'Benedetto Marcello': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 31/7 hoặc 1/8/1686 | Sinh ở Venice trong gia đình quý tộc |
| 1702 | Opera *La fede riconosciuta* ở Vicenza |
| 1708 | *12 Concerti a cinque* Op. 1 in ở Venice |
| 1711 | Vào Hội đồng Bốn mươi (Consiglio dei Quaranta) của Venice |
| 1720 | Phát hành nặc danh bài châm biếm *Il teatro alla moda* |
| 1724–1727 | Xuất bản *Estro poetico-armonico* (50 thánh vịnh) |
| 20/5/1728 | Bí mật cưới học trò hát Rosanna Scalfi |
| 1730 | Làm *provveditore* (quan cai quản) ở Pola, Istria, khoảng tám năm |
| 24/7/1739 | Mất vì lao ở Brescia, nơi ông làm camerlengo (quản sự) |

## Âm nhạc và đóng góp
Marcello là nhà quý tộc kiêm quan chức và nhà soạn nhạc (cha muốn ông học luật), học với Lotti và Gasparini. Tác phẩm nổi nhất là *Estro poetico-armonico*, các thánh vịnh, chia hai phần mỗi phần 25 bài (Venice, 1724–27); Grove 1904 gọi là một trong những công trình hay nhất của văn liệu âm nhạc. Wikipedia nói tập này có giai điệu ông dường như chép từ các giáo đường Do Thái ở Venice. Nhạc cụ của ông gần với Vivaldi, vừa có đối âm vừa có nét galant. *Il teatro alla moda* châm biếm giới opera đương thời, dù chính ông từng viết opera năm 1702.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: 31/7 hay 1/8/1686 (cả hai nguồn).
- **Burney** cho rằng thánh vịnh bị khen quá và giai điệu không mới; Grove còn nêu chuyện Rossini mượn từ Thánh vịnh 21 mà không có chứng cứ.
- **Hôn nhân**: nhà nước Venice tuyên bố hôn nhân vô hiệu sau khi ông mất; năm 1742 Rosanna kiện Alessandro Marcello đòi cấp dưỡng.
- **Ngày diễn nhiều tác phẩm** (*La Giuditta*, *Psiché*, *La morte d'Adone*, *Joaz*) lệch hoặc có dấu hỏi; *Estro* ghi 1724–26 hoặc 1724–27.
- Concerto oboe Rê thứ thường gắn với "Marcello" là của người anh Alessandro; hai nguồn tra được không nhắc điểm này nên chưa đối chiếu được ở đây.

## Bối cảnh
Ông thuộc tầng lớp thống trị Venice, nên đời sống xoay giữa Hội đồng Bốn mươi, các chức quan ở tỉnh và việc soạn nhạc như một thú riêng. Vùng Pola ở Istria khiến sức khoẻ ông sút kém vì khí hậu; ông về nghỉ ở Brescia. Đây là thế giới của giới quý tộc Venice có nhà hát và nhà thờ lớn, trong đó âm nhạc đồng thời là sân chơi của họ và chủ đề châm biếm.
`,
    refs: [
      ['Wikipedia — Benedetto Marcello', 'https://en.wikipedia.org/wiki/Benedetto_Marcello'],
      ['Grove 1904 — Marcello, Benedetto (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Marcello,_Benedetto'],
    ],
  },

  'Francesco Geminiani': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1687 | Rửa tội ở Lucca ngày 5/12 (có thể sinh 3/12); Grove 1904 ghi 1680 |
| 1707 | Thay cha trong Cappella Palatina ở Lucca |
| 1711 | Chỉ huy dàn opera ở Naples |
| 1714 | Đến London cùng Francesco Barsanti, có bá tước Essex bảo trợ |
| 1716 | In Op. 1, 12 sonata violin ở London |
| 1725–1728 | Gia nhập hội Tam điểm (Queen's Head lodge, 1725); lập chi hội ở Naples (1728) |
| 1751 | *The Art of Playing on the Violin* |
| 1761 | Ở Dublin, chuyện mất bản thảo; mất ngày 17/9/1762 |

## Âm nhạc và đóng góp
Geminiani học Alessandro Scarlatti, Lonati, rồi Corelli, và trở thành người truyền Corelli sang Anh: tập Op. 5 (1726/27) cải biên sonata Op. 5 của Corelli thành concerto grosso. Các concerto grosso Op. 2, 3, 7 đưa viola vào nhóm concertino, thực chất gần như concerto cho tứ tấu đàn dây. *The Art of Playing on the Violin* là tư liệu quan trọng về cách chơi cuối Baroque, đối lập vài quan điểm của Leopold Mozart. *Guida armonica* chứa 2.236 mẫu continuo. Burney chê cấu trúc giai điệu thiếu đều đặn, còn Hawkins xem hoà âm và chuyển giọng của ông là bước tiến; Tartini được cho là gọi ông "Il Furibondo". Xem [[concerto-grosso]], [[bass-so]].

## Giai thoại và điều chưa chắc
- **Bản thảo bị đánh cắp ở Dublin (1761)**: Wikipedia ghi một người hầu lấy mất bản thảo ông soạn lâu năm và nói chuyện này "được cho là" làm ông chóng mất; quan hệ nhân quả chỉ là giai thoại. Grove không nhắc chuyện cắp bản thảo.
- **Năm sinh 1687 hay 1680; mất 1761 hay 1762**: Grove 1904 ghi 1680 và 1761, kèm chú thích phụ lục sửa thành 24/9/1762 dựa trên *Gentleman's Magazine*; Wikipedia ghi 17/9/1762.
- **Buôn tranh**: Grove nói ông bị giam vì chuyện này và được Lord Essex cứu, không nêu chi tiết; Wikipedia chỉ nói ông thử bán tranh để trả tiền sưu tầm, không phải lúc nào cũng thành.
- **Op. 11** ghi 1754 trong bài, 1756 trong danh mục; tổng số concerto nêu trong bài (42) không khớp.
- Chuyện ông mất chức ở Naples vì nhạc công không theo kịp nhịp đổi là lời kể của Burney qua Barbella.

## Bối cảnh
Ông sống ở London giữa các quý tộc sưu tầm và các hội nhạc, gặp Handel ở triều George I (1715, Handel đệm phím). Ông cũng sống ở Paris (Grove: 1748–1755) rồi chuyển sang Dublin, nơi học trò Dubourg dẫn dắt dàn nhạc của phó vương. Ông là thành viên nổi bật của hội Philo-Musicae et Architecturae Societas họp ở quán Queen's Head, Fleet Street (1725–27).
`,
    refs: [
      ['Wikipedia — Francesco Geminiani', 'https://en.wikipedia.org/wiki/Francesco_Geminiani'],
      ['Grove 1904 — Geminiani, Francesco (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Geminiani,_Francesco'],
    ],
  },

  'Giuseppe Tartini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1692 | Sinh ở Pirano (nay Piran, Slovenia), Cộng hoà Venice; rửa tội 8/4 |
| 1710 | Cưới Elisabetta Premazore; bị kiện bắt cóc, trốn đến tu viện thánh Phanxicô ở Assisi học đối âm với Černohorský (đến 1713) |
| k. 1716 | Ở Ancona, ghi nhận "âm thứ ba" khi chơi hai dây |
| 1721 | Vào nhà thờ San Antonio (Padua) làm violin chính và trưởng dàn nhạc |
| 1723–1726 | Ở Prague, phục vụ bá tước Kinsky |
| 1726 | Lập trường dạy violin ở Padua |
| 1754 | *Trattato di musica* |
| 1770 | Mất ở Padua (Treccani và Wikipedia: 26/2; Grove 1904: 16/2) |

## Âm nhạc và đóng góp
Tartini viết hàng trăm sonata và concerto cho violin, nhưng Wikipedia lưu ý ông ít khi ghi ngày và hay sửa bản cũ, nên khó xếp niên đại. *Sonata "Trille du diable"* Sol thứ nổi tiếng nhờ những trill dây đôi khó. Ông được ghi công phát hiện "terzo suono" (âm hiệu), dùng để kiểm âm chuẩn khi chơi dây đôi, và viết các khảo luận về hoà âm và âm học. Luận về trang trí (in sau khi mất, 1771) được xem là công trình đầu tiên chỉ bàn về ornament. Xem [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Giấc mơ quỷ chơi sonata**: kể qua Lalande và Burney; Treccani cho rằng có thể vang âm tiểu sử thánh Antôn nên độ tin cậy đáng ngờ. Wikipedia nói Blavatsky thêu dệt thêm. Wikipedia gắn nhãn thiếu nguồn.
- **Gặp Veracini và về Ancona luyện tập (1716)**: chỉ là truyền thuyết từ Burney; năm không khớp tuyệt đối với mốc 1721 ở Padua.
- **Ngày mất 16/2 hay 26/2/1770**: Grove 1904 khác Wikipedia và Treccani.
- **Ngày sinh**: Grove ghi 12/4; Treccani nói chỉ chắc chắn có ngày rửa tội 8/4.
- **Cha mẹ định cho vào dòng Phanxicô**: Wikipedia ghi "reportedly" và gắn nhãn thiếu nguồn.
- **Kiếm thuật**: Wikipedia nói ông giỏi đấu kiếm ở Padua; Grove ghi ông mê đến mức suýt theo nghề kiếm sĩ.

## Bối cảnh
Padua là thành phố đại học dưới quyền Venice, và nhà thờ Sant'Antonio có dàn nhạc riêng; hợp đồng của ông cho phép chơi bên ngoài. Cuộc đời mở ra sau vụ cưới: tu viện Assisi vừa là nơi ẩn náu vừa là trường nhạc. Trường violin ở Padua thu học trò từ khắp châu Âu.
`,
    refs: [
      ['Wikipedia — Giuseppe Tartini', 'https://en.wikipedia.org/wiki/Giuseppe_Tartini'],
      ['Treccani, Dizionario Biografico — Giuseppe Tartini', 'https://www.treccani.it/enciclopedia/giuseppe-tartini_(Dizionario-Biografico)/'],
      ['Grove 1904 — Tartini, Giuseppe (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Tartini,_Giuseppe'],
    ],
  },

  'Pietro Locatelli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 3/9/1695 | Sinh ở Bergamo |
| 9/1711 | Đến Roma; có thể học ngắn với Corelli (mất 1/1713), nhưng thầy ở Roma chưa chắc |
| 1714 | Thành viên nhạc công gia đình hoàng thân Caetani |
| 1721 | Op. 1, 12 concerto grosso, in ở Amsterdam, đề tặng Hồng y Cybo |
| 1723–1728 | Lưu diễn Ý và Đức: Mantua, Venice, Munich, Dresden, Berlin, Frankfurt, Kassel |
| 1729 | Định cư ở Amsterdam đến cuối đời |
| 1733 | Op. 3 *L'arte del violino* (12 concerto, 24 capriccio) |
| 30/3/1764 | Mất ở Amsterdam, an táng ở nhà thờ Cải cách Anh trong khu Begijnhof |

## Âm nhạc và đóng góp
Locatelli là nghệ sĩ violin kỹ thuật cao: nốt rất cao, dây đôi, hợp âm rải rộng, hoà âm bồi, trill hai bè (capriccio số 16 trong Op. 3 còn gọi "Trillo del Diavolo"). Hai mươi bốn *capricci* của Op. 3 là bài tập, không phải để biểu diễn công khai. Op. 1 mô phỏng Op. 6 của Corelli; Op. 4 dùng khuôn sinfonia opera Naples. Wikipedia lưu ý capriccio số 7 của ông giống Op. 1 số 1 của Paganini, nhiều khả năng qua trường phái violin Pháp. Xem [[concerto-grosso]].

## Giai thoại và điều chưa chắc
- **Học với Corelli**: Wikipedia nêu Montanari hoặc Valentini hoặc Corelli là thầy ở Roma và đều không chắc; Treccani cũng nói thời Roma ít tư liệu.
- **Trình độ biểu diễn**: gần như không nguồn nào xác nhận mức điêu luyện cao nhất, dù ông nổi danh vì các buổi chơi. Wikipedia nêu Dunning phỏng đoán công chúng Berlin chuộng cách chơi của Graun hơn.
- **1744–1762**: không có ghi chép nào về ông; lý do không rõ. Op. 9 (1762) nay thất truyền.
- **Thu nhập 1742** (khoảng 1500 guilder, cao nhất giới nhạc sĩ Amsterdam) bị gắn nhãn cần làm rõ.
- Chuyến Venice chắc chắn có nhưng không rõ lúc nào (trước 6/1727).
- Một người Anh nghe ông năm 1741 viết rằng ông "sợ người ta học lỏm của mình".

## Bối cảnh
Amsterdam là trung tâm xuất bản nhạc châu Âu khi ông đến năm 1729; ông tự biên tập, giữ giấy phép chống in lậu cho Op. 1–8 và đổi lại tặng bản cho thư viện Đại học Leiden. Ông mở cả việc bán dây đàn ở nhà. Ông sống ở nhà trên kênh Prinsengracht, với thư viện hơn 1.000 mục gồm khoa học, thần học, lý thuyết nhạc và toàn tập Corelli; năm 1765 thư viện, nhạc cụ và tranh được đem bán đấu giá.
`,
    refs: [
      ['Wikipedia — Pietro Locatelli', 'https://en.wikipedia.org/wiki/Pietro_Locatelli'],
      ['Treccani, Dizionario Biografico — Pietro Antonio Locatelli', 'https://www.treccani.it/enciclopedia/pietro-antonio-locatelli_(Dizionario-Biografico)/'],
    ],
  },

  'Giovanni Battista Pergolesi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 4/1/1710 | Sinh ở Jesi (Marche), tên khai sinh Draghi; biệt danh Pergolesi từ làng Pergola của tổ tiên |
| k. 1723–1725 | Đến Naples học nhạc (Treccani: nhạc viện Poveri di Gesù Cristo; Wikipedia: học với Greco, Feo) |
| 1731 | Oratorio *La fenice sul rogo* |
| 1732 | *Lo frate 'nnamorato*; Thánh lễ Fa trưởng *San Emidio* |
| 28/8/1733 | *La serva padrona* diễn như intermezzo của *Il prigionier superbo* |
| 1735 | *L'Olimpiade* ở Roma; viết *Stabat Mater* |
| 16 hoặc 17/3/1736 | Mất vì lao ở Pozzuoli, 26 tuổi |

## Âm nhạc và đóng góp
Pergolesi nổi bật với [[opera]] buffa kiểu Naples: *La serva padrona* trở thành hiện tượng châu Âu và năm 1752 khơi mào Querelle des Bouffons ở Paris khi một đoàn Ý diễn nó. *Stabat Mater* (1735–36) thay thế bản của Alessandro Scarlatti năm 1724 vốn đã thấy cũ, và lan khắp châu Âu với nhiều phiên bản; Bach cũng cải biên nó. Dòng nhạc của ông mở đường cho phong cách galant. Xem [[thanh-le-va-requiem]].

## Giai thoại và điều chưa chắc
- **Cái chết**: Wikipedia ghi 16 hay 17/3; một biếm hoạ ghi 7/2/1736; Treccani 17/3. Tin đồn đầu độc chỉ là suy đoán.
- **Hoàn tất Stabat Mater trên giường bệnh**: Treccani coi nhiều khả năng là huyền thoại lãng mạn; chuyện chết trong nghèo túng và bị bỏ rơi là vô căn cứ.
- **Nhiều giai thoại do Florimo** (tiểu sử thế kỷ 19) đã bị chứng minh là bịa.
- **Gán nhầm**: *Concerti armonici* là của Wassenaer; *Magnificat* Rê trưởng là của Durante; *Se tu m'ami* là của Parisotti. Trong *Pulcinella* của Stravinsky (1920), chỉ khoảng nửa đến 8 trên 21 bản là của ông, nhiều bản của Domenico Gallo.
- **Số tác phẩm**: hơn 300 bản từng gán cho ông, chỉ khoảng 30 hoặc dưới 50 được nhận; bài viết mâu thuẫn về con số.
- **Nơi an táng**: Wikipedia nói tu viện dòng Phanxicô; một số nguồn khác nói Capuchin, người biên soạn chưa đối chiếu được.

## Bối cảnh
Naples đầu thập niên 1730 là thành phố của nhà hát và nhạc viện, nơi opera buffa bằng tiếng địa phương được chen giữa các màn opera seria dưới dạng intermezzo. Pergolesi sống ngắn ngủi đến mức phần lớn danh tiếng đến sau khi ông mất, khi nhãn tên ông được gắn lên nhiều bản không phải của ông. Ông mất ở Pozzuoli ven vịnh Naples.
`,
    refs: [
      ['Wikipedia — Giovanni Battista Pergolesi', 'https://en.wikipedia.org/wiki/Giovanni_Battista_Pergolesi'],
      ['Treccani, Dizionario Biografico — Giovanni Battista Pergolesi', 'https://www.treccani.it/enciclopedia/giovanni-battista-pergolesi_(Dizionario-Biografico)/'],
    ],
  },

  'Johann Joseph Fux': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1660 | Sinh ở Hirtenfeld, Steiermark, trong gia đình nông dân; không rõ ngày |
| k. 1680 | Học ở Graz (Wikipedia: trường Dòng Tên Ferdinandeum) |
| 1683–1687 | Học ở Ingolstadt (bản tiếng Đức); Wikipedia ghi 1685–1688 là nhạc sĩ organ ở St. Moritz |
| 1696 | Cưới Juliana Clara Schnitzenbaum; nhạc sĩ organ ở Schottenstift, Vienna |
| 1698 | Nhà soạn nhạc cung đình của hoàng đế Leopold I |
| 1701 | Nhạc trưởng nhà thờ St. Stephen (bản tiếng Đức) |
| 1715 | Hofkapellmeister (nhạc trưởng triều đình) |
| 1725 | Xuất bản *Gradus ad Parnassum* bằng tiếng Latin |
| 13/2/1741 | Mất ở Vienna |

## Âm nhạc và đóng góp
Fux là "Palestrina của Áo": ông duy trì *stile antico* (hơn nữa các Thánh lễ canon) song cũng viết theo *stile moderno*, ví dụ aria da capo trong oratorio. Ông có 19 opera, chủ yếu ở nhà hát triều đình Vienna; vở đáng kể nhất là *Constanza e Fortezza* (diễn ở lâu đài Prague năm 1723 cho lễ đăng quang của Charles VI). *Gradus ad Parnassum* (1725) là đối thoại giữa thầy Aloysius (đại diện Palestrina) và trò Josephus (đại diện Fux), trình bày phương pháp năm loại ("species") đi từ nốt đối nốt đến đối âm hoa mỹ, hai đến bốn bè. Theo Wikipedia, Haydn học sách này, còn Mizler dịch ra tiếng Đức năm 1742. Xem [[doi-am]], [[fugue]].

## Giai thoại và điều chưa chắc
- **Năm sinh** chỉ là ước chừng; chuyện học Graz, quê Hirtenfeld đều viết với từ dè dặt. Thông tin về thời trẻ rất ít.
- **Chuyến đi Ý**: Wikipedia suy ra từ ảnh hưởng của Corelli và nhạc sĩ Bologna, không có tư liệu; Wikipedia cũng cho ông học ở Roma năm 1700.
- **Thời điểm ở Ingolstadt**: hai nguồn lệch (1683–1687 so với 1685–1688).
- **Mizler**: bài Wikipedia vừa nhắc bản dịch kèm ấn bản Latin 1725 vừa nêu 1742; chưa tự giải thích.
- **Haydn và Beethoven học Gradus** là chuyện dựa vào nguồn thế kỷ 19; riêng "cuốn lý thuyết duy nhất còn lại trong thư viện Bach" cần kiểm lại.
- Bản tiếng Đức nêu căng thẳng giữa danh tiếng người bảo vệ lối nghiêm và việc các Thánh lễ lại chủ yếu theo ngôn ngữ hiện đại.

## Bối cảnh
Vienna của nhà Habsburg là triều đình Công giáo chi tiêu mạnh cho nhạc: Hofkapelle có các phó nhạc trưởng như Caldara, nhà hát triều đình dựng opera mừng lễ. Fux viết *Gradus* khi bị gout và tuổi già, và bảo cuốn sách dừng ở bốn bè vì không còn sức viết thêm. Ông qua Prague năm 1723 cùng triều đình cho lễ đăng quang.
`,
    refs: [
      ['Wikipedia — Johann Joseph Fux', 'https://en.wikipedia.org/wiki/Johann_Joseph_Fux'],
      ['Wikipedia tiếng Đức — Johann Joseph Fux', 'https://de.wikipedia.org/wiki/Johann_Joseph_Fux'],
    ],
  },

  'Jan Dismas Zelenka': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 16/10/1679 | Sinh (Wikipedia) hoặc rửa tội (bản tiếng Đức) ở Louňovice pod Blaníkem, Bohemia |
| 1709–1711 | Vào dàn nhạc triều đình Dresden, chơi violone |
| 1716–1719 | Học với Fux ở Vienna (Wikipedia) |
| 1722–1723 | Ở Prague; *Sub olea pacis* cho lễ đăng quang Charles VI (1723) |
| 1726–1739 | Lập *Inventarium*, sổ ghi tác phẩm |
| 1729–1734 | Heinichen mất; ông tạm giữ việc nhạc trưởng nhà thờ |
| 1734/1735 | Chức nhà soạn nhạc nhà thờ (Kirchen-Compositeur) |
| 23/12/1745 | Mất ở Dresden, chưa lập gia đình |

## Âm nhạc và đóng góp
Phần trọng tâm là thánh nhạc Latin cho Hofkirche, nhà thờ Công giáo của triều đình: hơn 20 Thánh lễ, bốn requiem, *Lamentations*, *Responsoria*, *Miserere* Rê thứ. Wikipedia nêu 249 tác phẩm có số ZWV. Nhạc của ông được khen ở hoà âm sáng tạo và đối âm, đặc biệt fugue ([[fugue]]); còn có sonata trio, capriccio và sáu concerto viết ở Prague. Quantz học đối âm với ông năm 1717. Nhạc ông gần như bị lãng quên đến khi Smetana đưa một suite lên năm 1863 rồi đợt phục hưng sau 1958.

## Giai thoại và điều chưa chắc
- **Học trò của Fux**: Wikipedia ghi học 1716–1719 ở Vienna; bản tiếng Đức nói chuyện này chỉ dựa trên các tường thuật thế kỷ 19 về sau.
- **Chuyến đi Venice**: Wikipedia coi là không chắc; bản tiếng Đức ghi chuyến đi Venice và Vienna.
- **Đối đầu với Hasse**: Wikipedia gọi quan niệm cạnh tranh trực tiếp là hiểu lầm; bản tiếng Đức nói hy vọng làm nhạc trưởng của ông chỉ là suy ra.
- **Quan hệ với Bach**: không có liên lạc trực tiếp được ghi lại; chỉ có thư của C.P.E. Bach liệt kê ông trong số người Bach quý.
- **Chân dung**: không có chân dung đích thực; nhiều ảnh trên mạng thực ra vẽ Fux.
- **Bản thảo**: nhiều bản mất dần dần chứ không riêng trong vụ ném bom Dresden 2/1945; theo Wikipedia, điểm cất giữ là hầm Cung Nhật Bản và chỉ mất phần nhỏ.

## Bối cảnh
Nhà thờ triều đình Công giáo ở Dresden mở năm 1708 và do Dòng Tên điều hành từ 1710; nó là một phần việc triều đình Saxony chuyển sang Công giáo để thái tử tranh ngôi vua Ba Lan. Zelenka sống giữa dàn nhạc triều đình nổi tiếng, nơi ca sĩ Ý đến năm 1730 và Hasse nhận chức nhạc trưởng năm 1731. Đến 1770 một quan chức cho rằng nhiều bản nhạc của ông quá dài và cũ.
`,
    refs: [
      ['Wikipedia — Jan Dismas Zelenka', 'https://en.wikipedia.org/wiki/Jan_Dismas_Zelenka'],
      ['Wikipedia tiếng Đức — Jan Dismas Zelenka', 'https://de.wikipedia.org/wiki/Jan_Dismas_Zelenka'],
    ],
  },

  'Georg Philipp Telemann': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1681 | Sinh ở Magdeburg (14 hoặc 24/3; xem phần dưới) |
| 1701 | Vào Đại học Leipzig học luật nhưng thành nhạc sĩ chuyên nghiệp |
| 1702 | Giám đốc nhà hát opera thành phố Leipzig |
| 1705 | Nhạc trưởng bá tước Promnitz ở Sorau |
| 1708–1709 | Eisenach, gặp J. S. Bach |
| 18/3/1712 | Giám đốc âm nhạc thành phố Frankfurt |
| 1721 | Cantor trường Johanneum và nhạc trưởng năm nhà thờ chính ở Hamburg |
| 1737–1738 | Tám tháng ở Paris |
| 25/6/1767 | Mất ở Hamburg; C.P.E. Bach, con đỡ đầu, kế nhiệm |

## Âm nhạc và đóng góp
Telemann để lại hơn 3.000 tác phẩm, khoảng một nửa đã mất (ước tính của Wikipedia); riêng cantata nhà thờ được nêu 1.043 bản. Ông giúp tạo "phong cách hỗn hợp Đức" pha yếu tố Đức, Pháp, Ý và Ba Lan, rồi hấp thụ galant mà vẫn giữ độ phức tạp đối âm. Tác phẩm nổi tiếng gồm *Tafelmusik* (1733), *Brockes Passion* (1716), *Thủy nhạc Hamburg*, 12 *Fantasia* cho sáo độc tấu, và concerto viola Sol trưởng, được coi là concerto viola sớm nhất. Về cuối đời ông còn làm vườn, trồng cây lạ. Xem [[thoi-ky-baroque]], [[opera]].

## Giai thoại và điều chưa chắc
- **Ngày sinh**: hộp thông tin Wikipedia ghi 14/3, phần dẫn ghi 24/3; Grove 1904 ghi 14/3.
- **Viết opera năm 12 tuổi**: chỉ dựa vào tự truyện của ông in ở Mattheson 1740.
- **Từ chối chức Thomaskantor**: Wikipedia nói Hamburg tăng lương nên ông xin ở lại sau khi được thông qua; Graupner khi dự tuyển cũng được nhắc là Telemann rút lui, và Bach là người cuối được chọn (1723). Hình dung "Telemann bị Leipzig từ chối" không đúng với các nguồn này.
- **Gán nhầm**: *Der aus der Löwengrube errettete Daniel* từng gán cho Handel; *Der Schulmeister* (1751) là của Fehre. Spitta và Schweitzer từng khen những bản họ tưởng của Bach mà thực ra là của Telemann.
- **Con số tác phẩm** (Grove: 40 opera, 600 overture, 44 Passion) chỉ là ước chừng.
- **Hamburg**: hôn nhân thứ hai tan vỡ (vợ chồng không còn sống chung từ 1736).

## Bối cảnh
Ông sống giữa các thành phố tự do và triều đình Đức: Leipzig có nhà hát opera thành phố, Frankfurt có xã hội thương gia, Hamburg có năm nhà thờ chính và nhà hát opera. Ở Hamburg ông đồng thời giữ nghĩa vụ nhà thờ, nhà trường và xuất bản nhạc và thơ. Wikipedia cho biết các ấn phẩm 1725–1740 giúp ông thoát cảnh khó khăn tài chính.
`,
    refs: [
      ['Wikipedia — Georg Philipp Telemann', 'https://en.wikipedia.org/wiki/Georg_Philipp_Telemann'],
      ['Grove 1904 — Telemann, Georg Philipp (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Telemann,_Georg_Philipp'],
    ],
  },

  'Christoph Graupner': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1683 | Sinh ở Hartmannsdorf gần Kirchberg, Saxony (23/1 theo Wikipedia; Grove: 1683 hoặc 1684) |
| k. 1700 | Học luật ở Leipzig và học với Kuhnau |
| 1705 | Chơi harpsichord ở nhà hát Gänsemarkt (Hamburg) dưới Keiser, cùng Handel |
| 1709–1711 | Phục vụ landgrave Ernst Ludwig ở Darmstadt; 1711 nhạc trưởng (Grove: 1710) |
| 17/1/1723 | Thử giọng ở Leipzig với hai cantata; sau đó landgrave không cho đi |
| 1754 | Mất thị lực (Grove: 1750) |
| 10/5/1760 | Mất ở Darmstadt |

## Âm nhạc và đóng góp
Graupner có khoảng 2.000 tác phẩm còn lại: 113 sinfonia, 85 overture, 44 concerto, 66 sonata, 57 partita cho phím đàn, cùng cantata nhà thờ và thế tục. Ông dùng nhạc cụ ít gặp như oboe d'amore, flute d'amore, viola d'amore, và hơn nửa số sinfonia có kèn đồng và timpani. Wikipedia nêu hơn 1.400 cantata nhà thờ. Bản thảo bị giữ trong kho nhà Hessen-Darmstadt sau khi ông mất, nên nhạc của ông không in và rất ít người biết đến suốt hơn một thế kỷ.

## Giai thoại và điều chưa chắc
- **Ngày mất**: Wikipedia ghi 10/5/1760 ở phần dẫn nhưng hộp thông tin ghi 25/6/1767 (dễ lẫn với Telemann); Grove ghi 10/5/1760, "năm thứ 78". Người biên soạn theo 1760.
- **Năm sinh**: Grove ghi 1683 hoặc 1684.
- **Số opera và cantata** mâu thuẫn ngay trong Wikipedia (tám hay mười opera; 1.418, 1.356 hay gần 1.450 cantata).
- **Chức Thomaskantor 1723**: Telemann là lựa chọn đầu rồi rút; Graupner dự tuyển, được hội đồng Leipzig ưng nhưng landgrave không cho đi, đổi lại trả nợ lương và tăng lương. Ngày 7/2/1723 Bach thử giọng và được chọn; Graupner viết thư ngày 4/5/1723 khen Bach là nhạc sĩ organ giỏi.
- **Năm mất thị lực**: 1754 hay 1750 tuỳ nguồn.

## Bối cảnh
Triều đình Hessen-Darmstadt gặp khó tài chính trong thập niên 1710: nhà hát opera đóng cửa và lương cung đình, kể cả lương Graupner, bị nợ nhiều năm; đó là lý do ông ứng tuyển ở Leipzig. Landgrave Ernst Ludwig là chủ nhà bảo trợ ông suốt hơn bốn thập niên. Hamburg, nơi ông bắt đầu, là thành phố có nhà hát Gänsemarkt, nơi Keiser và Handel làm việc.
`,
    refs: [
      ['Wikipedia — Christoph Graupner', 'https://en.wikipedia.org/wiki/Christoph_Graupner'],
      ['Grove 1904 — Graupner, Christoph (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Graupner,_Christoph'],
    ],
  },

  'Johann David Heinichen': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 27/4/1683 | Sinh ở Krössuln gần Weissenfels; cha là mục sư |
| 1696 | Vào trường Thomasschule ở Leipzig, học với Schelle, Kuhnau |
| 1702–1705 | Học luật ở Leipzig; chơi trong collegium musicum của Telemann (bản tiếng Đức) |
| 1711 | Xuất bản luận về continuo, có vòng quãng năm |
| k. 1710–1717 | Ở Ý, chủ yếu Venice; 1713 opera *Mario* và *Le passioni per troppo amore* |
| 1/8/1716 | Nhạc trưởng triều đình Dresden (bản tiếng Đức) |
| 1728 | *Der General-Bass in der Composition* |
| 16/7/1729 | Mất vì lao ở Dresden |

## Âm nhạc và đóng góp
Heinichen nổi bật với lý thuyết: *Der General-Bass in der Composition* (1728) được bản tiếng Đức coi là một trong những công trình lý thuyết quan trọng nhất thế kỷ 18; xem [[bass-so]]. Cuốn luận 1711 (*Neu erfundene und gründliche Anweisung*) trình bày vòng quãng năm, mà theo Wikipedia ông phát triển độc lập, không phải người đầu tiên (Diletsky đã nêu cuối thập niên 1670). Tại Dresden ông viết nhiều nhạc nhà thờ Công giáo cho triều đình dù là người Luther, và các concerto Dresden được Musica Antiqua Köln thu âm năm 1992. Vivaldi ảnh hưởng mạnh đến phong cách của ông.

## Giai thoại và điều chưa chắc
- **Hành nghề luật ở Weissenfels**: Wikipedia nói ông làm luật sư; bản tiếng Đức ghi "không chứng minh được".
- **Bị quỵt tiền opera ở Venice rồi sang Roma**: chỉ dựa vào Hiller (1784).
- **Gặp thái tử Friedrich August ở Venice (1716)**: Wikipedia ghi chuyện này giúp ông có chức ở Dresden; bản tiếng Đức chỉ nêu ngày bổ nhiệm.
- **Opera *Flavio Crispo* (1720)**: Wikipedia nói không bao giờ diễn khi ông còn sống; bản tiếng Đức nói bị huỷ sau tranh chấp với hai castrato.
- **Vòng quãng năm**: ông là một trong những người phát minh, không phải duy nhất.
- Vài tác phẩm gán cho ông (*Die getreue Schäferin Daphne*, Sanctus Rê trưởng) bị nghi.

## Bối cảnh
Venice những năm 1710 là thành phố của nhà hát opera và nhạc cụ, nơi ông học phong cách Ý; ở Dresden lương ông tăng lên 1.500 thaler sau các serenata đám cưới 1719. Ở triều đình Saxony ông đứng giữa nhạc trưởng, ca sĩ Ý và các castrato ngôi sao.
`,
    refs: [
      ['Wikipedia — Johann David Heinichen', 'https://en.wikipedia.org/wiki/Johann_David_Heinichen'],
      ['Wikipedia tiếng Đức — Johann David Heinichen', 'https://de.wikipedia.org/wiki/Johann_David_Heinichen'],
    ],
  },

  'George Frideric Handel': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1685 | Sinh ở Halle (Wikipedia tiếng Anh: 5/3 lịch mới; bản tiếng Đức nêu sổ rửa tội 24/2 lịch Julius) |
| k. 1692–1694 | Học với Friedrich Wilhelm Zachow, thầy duy nhất |
| 1702 | Nhạc sĩ organ nhà thờ Calvin ở Halle, hợp đồng thử một năm |
| 1703–1706 | Hamburg, chơi trong dàn nhạc nhà hát Gänsemarkt; *Almira* (1/1705) |
| 1706–1710 | Ý: Florence, Roma, Naples, Venice; *Agrippina* (Venice, 12/1709) |
| 6/1710 | Nhạc trưởng của tuyển hầu Hanover (về sau vua George I) |
| 1712 | Định cư ở Anh |
| 1717 | *Water Music* trên sông Thames cho George I; làm việc ở Cannons |
| 1723 | Dọn đến 25 Brook Street, ở đến cuối đời |
| 1727 | Nhập quốc tịch Anh; *Zadok the Priest* cho lễ đăng quang George II |
| 13/4/1742 | *Messiah* ra mắt ở Dublin |
| 1751–1752 | Mất thị lực |
| 14/4/1759 | Mất ở Brook Street; an táng ở Westminster Abbey |

## Âm nhạc và đóng góp
Handel pha truyền thống hợp xướng đối âm Đức với kịch Ý, chịu ảnh hưởng Corelli và Alessandro Scarlatti. Ông dựng [[opera]] seria Ý ở London quanh aria da capo (*Giulio Cesare*, *Rodelinda*, *Alcina*) và sau chuyển sang oratorio tiếng Anh (*Saul*, *Israel in Egypt*, *Messiah*, *Samson*, *Jephtha*), nơi hợp xướng đóng vai trung tâm. Nhạc cụ có *Water Music*, *Music for the Royal Fireworks* (1749) và concerto organ. Từ 1750 ông trình *Messiah* hằng năm cho Foundling Hospital. Xem [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Đàn clavichord trên gác mái**: Mainwaring, Hawkins, Burney kể cậu bé lén chơi dù cha phản đối; Schoelcher khó tin, Lang coi là chuyện lãng mạn chưa chứng minh.
- **Chuyến Berlin**: Mainwaring đặt năm 1698 nhưng nói cha mất sau đó (cha mất 1697); Burrows cho 1702–1703. Các tiểu sử hiện đại phần lớn nhận 1698. Cả bản tiếng Đức cũng nói trình tự của Mainwaring (1760) không thể đúng hoàn toàn.
- **Đấu kiếm với Mattheson (1704)**: chuyện từ chính Mattheson; chiếc cúc áo lớn đỡ lưỡi kiếm. Hai người sau đó làm hoà.
- **Lời mời đến Ý 1706**: Mainwaring bị nghi nhầm; có nguồn nói Gian Gastone de Medici thay vì Ferdinando.
- **Cuộc thi với D. Scarlatti** (ở dinh Ottoboni) thuộc truyền thống kể lại, không rõ năm.
- **Giải phẫu mắt 1751** do John Taylor, "lang băm", không cứu được thị lực.

## Bối cảnh
Từ 1723 nhà 25 Brook Street ở Mayfair vừa là nơi ở vừa là nơi tập, chép nhạc và bán vé; nay là Handel House Museum. Hơn 25 opera của ông ra mắt ở nhà hát Queen's Theatre (Haymarket), lập năm 1705 bởi Vanbrugh; sau đó ông chuyển sang nhà hát Covent Garden từ 1734. Năm 1728 *The Beggar's Opera* của Gay chế nhạo opera Ý và chạy 62 buổi. Wikipedia ghi ông mất trong ngôi nhà này, tang lễ nhà nước ở Westminster Abbey.
`,
    refs: [
      ['Wikipedia — George Frideric Handel', 'https://en.wikipedia.org/wiki/George_Frideric_Handel'],
      ['Wikipedia tiếng Đức — Georg Friedrich Händel', 'https://de.wikipedia.org/wiki/Georg_Friedrich_H%C3%A4ndel'],
    ],
  },

  'Johann Joachim Quantz': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 30/1/1697 | Sinh ở Oberscheden gần Göttingen (ngày này chỉ có trong tự truyện của ông) |
| 1708 | Đến Merseburg học với chú Justus Quantz (Grove nhấn mạnh 1708, không phải 1707 như Mendel ghi) |
| 1717 | Học đối âm với Zelenka |
| 1718 | Nhạc công oboe trong Nhà nguyện Ba Lan của August II ở Dresden |
| 1724–1727 | Chuyến đi Ý, Paris (Grove: đến Paris 15/8/1726) và London (3/1727) |
| 1728 | Theo August II sang Berlin; thái tử Frederick học sáo với ông |
| 1741 | Nhận lời vua Frederick, định cư ở Berlin |
| 1752 | Xuất bản *Versuch einer Anweisung die Flöte traversiere zu spielen* |
| 12/7/1773 | Mất ở Potsdam |

## Âm nhạc và đóng góp
Quantz viết hơn 200 sonata và khoảng 300 concerto cho sáo (phần lớn đến nay còn là bản thảo, 277 bản ở Neue Palais, Potsdam theo Grove), cùng khoảng 45 sonata trio và nhiều tác phẩm khác; catalog của Horst Augsbach (1997) dùng số QV. Ông thêm phím thứ hai (Mi giáng) cải thiện cao độ và phát minh ống trượt chỉnh âm. *Versuch* (1752, 24 bản khắc đồng) là chuyên luận lớn về cách chơi sáo ngang và nguồn quan trọng về thực hành biểu diễn thế kỷ 18. Ông không gia nhập dàn nhạc hoàng gia chính thức mà chơi ở triều đình và làm đàn sáo cho vua. Xem [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Quá khứ thợ rèn**: do chính ông kể trong tự truyện, từ năm 9 tuổi; cha mất khi ông chưa tròn 11.
- **Núp trong tủ cùng Katte (1730)**: ông kể với Nicolai về một cơn giận của cha thái tử; Wikipedia chỉ dẫn nguồn thứ cấp, không chứng thực.
- **Hôn nhân (1737)** không hạnh phúc; tin đồn Berlin nói vợ áp chế ông.
- **Lương**: Grove ghi 2.000 thaler, thêm tiền từng bản nhạc và 100 ducat mỗi cây sáo ông làm; con số này lấy từ một nguồn cũ.
- **Cái tên "Quouance"** trong danh mục Boivin cho thời Paris của ông.
- **Số trio, quartet**: chỉ 37 bản được ghi ở Dresden, tung tích phần còn lại không rõ.

## Bối cảnh
Ông sống ở Dresden khi dàn nhạc triều đình vào thời hoàng kim, rồi sang Berlin, ở Kronenstraße (Berlin-Mitte) và chơi ở triều đình đến cuối đời. Frederick sở hữu mười một cây sáo của ông. Bức tranh năm 1852 của Adolph Menzel vẽ vua chơi concerto sáo ở Sanssouci, C.P.E. Bach đệm harpsichord, Quantz đứng tựa tường. Buổi hoà nhạc riêng của vua do ông điều khiển là nhịp sống cố định của Potsdam.
`,
    refs: [
      ['Wikipedia — Johann Joachim Quantz', 'https://en.wikipedia.org/wiki/Johann_Joachim_Quantz'],
      ['Grove 1904 — Quantz, Johann Joachim (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Quantz,_Johann_Joachim'],
    ],
  },

  'Johann Adolph Hasse': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 25/3/1699 | Rửa tội ở Bergedorf gần Hamburg, trong gia đình ba đời nhạc sĩ organ |
| 1718–1719 | Hát tenor ở nhà hát Gänsemarkt (Hamburg), rồi ở triều đình Brunswick |
| 1721 | Opera đầu *Antioco* ở Brunswick |
| 1722–1725 | Ở Naples, học với Porpora và A. Scarlatti (bản tiếng Đức) |
| 20/7/1730 | Cưới nữ cao Faustina Bordoni; *Artaserse* ở Venice |
| 1731–1733 | Nhạc trưởng Dresden: tới Dresden 7/1731; nhậm chức chính thức 1/12/1733 (bản tiếng Đức) |
| 1747 hoặc 7/1/1749 | Thăng Oberkapellmeister (hai nguồn lệch) |
| 1750 | Sang Paris trình *Didone abbandonata*; oratorio *La conversione di Sant'Agostino* ở Dresden |
| 1764–1773 | Ở Vienna |
| 16/12/1783 | Mất ở Venice, an táng ở San Marcuola |

## Âm nhạc và đóng góp
Hasse là nhà soạn opera seria được ưa chuộng nhất châu Âu giữa thế kỷ 18, thường phổ thơ Metastasio (xem [[opera]]). Nhạc ông được nhớ vì giai điệu uyển chuyển; Wikipedia ghi ông chọn giọng theo cảm xúc (La cho tình yêu; Đô, Si giáng cho cao quý; Đô và Fa thứ cho siêu nhiên hay đáng sợ). Các opera tiêu biểu: *Artaserse* (1730), *Cleofide* (1731), *Didone abbandonata* (1742). Ngoài ra ông viết oratorio, nhiều Te Deum, nhạc nhà thờ cho Venice và sonata, concerto cho sáo có thể viết cho Frederick Đại đế. Ở Vienna, cải cách Gluck thách thức phong cách của ông, và danh tiếng sụt mạnh sau khi mất.

## Giai thoại và điều chưa chắc
- **"Cậu bé này sẽ khiến mọi người quên chúng ta"** nói về Mozart 15 tuổi (*Ascanio in Alba*, 1771): chỉ được thuật lại, không xác thực; bản tiếng Đức dùng "soll" ("được cho là").
- **Oberkapellmeister năm 1747 hay 7/1/1749**: Wikipedia và bản tiếng Đức lệch nhau.
- **Nhà Dresden bị phá**: Wikipedia ghi khi trở lại năm 1763 ông thấy nhà hư và nhà hát opera bị phá; bản tiếng Đức nói nhà ông cháy trong cuộc pháo kích 19/7/1760.
- **Ở London cuối 1734**: không chứng minh được; lý do ông từ chối lời mời cũng chỉ có ở vài nguồn.
- **Mâu thuẫn Porpora**: chuyện về aria trong *Demofoonte* chỉ nghe kể lại, nguyên nhân rạn nứt ở Naples không rõ.
- **Biệt danh**: bản tiếng Đức ghi "il divino Sassone" sau *Sesostrate* (1726); hai nguồn không nhắc "il caro Sassone" nên người biên soạn không dùng.

## Bối cảnh
Dresden dưới Augustus III có dàn opera và dàn nhạc hàng đầu; Hasse dẫn dắt khoảng ba mươi năm. Nhiều opera của ông ra mắt ở cung săn Hubertusburg (*Numa Pompilio* 1741, *Leucippo* 1747, *Il re pastore* 1755). Chiến tranh Bảy Năm khiến triều đình sang Warsaw, và khi chấm dứt vào 1763 Saxony cạn tiền nên không còn trả lương cho dàn nhạc. Năm cuối đời ông dạy học và viết nhạc nhà thờ ở Venice; Faustina mất ngày 4/11/1781.
`,
    refs: [
      ['Wikipedia — Johann Adolph Hasse', 'https://en.wikipedia.org/wiki/Johann_Adolph_Hasse'],
      ['Wikipedia tiếng Đức — Johann Adolph Hasse', 'https://de.wikipedia.org/wiki/Johann_Adolph_Hasse'],
    ],
  },
}

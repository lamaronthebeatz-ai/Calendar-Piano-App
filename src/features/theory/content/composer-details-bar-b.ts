import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Baroque Pháp, Anh, Ý (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_BAR_B: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Georg Böhm': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/9/1661 | Sinh ở Hohenkirchen, vùng Thuringia |
| 1675 | Cha, một thầy giáo kiêm nhạc sĩ organ, qua đời |
| 1684 | Tốt nghiệp trường Gymnasium ở Gotha; ngày 28/8 vào Đại học Jena |
| 1693 | Lần đầu có tài liệu nhắc ông ở Hamburg |
| 1698 | Nhận chức nhạc sĩ organ nhà thờ Johanniskirche ở Lüneburg, giữ đến cuối đời |
| 1727 | Bach chọn ông làm đại diện phía bắc để bán các partita số 2 và 3 |
| 18/5/1733 | Mất ở Lüneburg, thọ 71 tuổi; con rể Ludwig Ernst Hartmann kế nhiệm |

## Âm nhạc và đóng góp
Phần lớn nhạc của Böhm là prelude, [[fugue]] và partita cho [[organ-ong]] hoặc [[dan-phim-co]]; nhiều bản chơi được trên cả organ, harpsichord lẫn clavichord. Ông dùng *stylus phantasticus* (lối viết ứng tác, nhiều đoạn tự do) và được coi là người gần như đặt nền cho partita thánh ca (chorale partita), tức chuỗi biến tấu trên một giai điệu thánh ca Tin Lành. Những bài như *Vater unser im Himmelreich* cho thấy lối biến tấu ấy. Ông là mắt xích quan trọng trong truyền thống organ Bắc Đức dẫn tới Bach.

## Giai thoại và điều chưa chắc
- **Böhm có phải thầy của Bach?** Bach học ở trường Michaelisschule ở Lüneburg những năm 1700–1702 nên việc gặp Böhm là rất có khả năng, nhưng chứng cứ trực tiếp về các buổi học hầu như không có. Trong thư năm 1775, C. P. E. Bach nói cha mình có nghiên cứu nhạc của Böhm; có dấu hiệu ông đã sửa lại một cách viết bị cho là quá mức, nên không nên khẳng định Böhm là "thầy" của Bach.
- **Bản chép năm 1700**: một bản chép của Bach có chữ "Dom." mà người ta đọc là "domus" hay "Dominus" (thông tin công bố năm 2006); cách đọc ảnh hưởng đến kết luận về quan hệ cá nhân.
- **Thời Jena và Hamburg** hầu như không có tài liệu; chuyện ông nghe Buxtehude ở Lübeck chỉ là suy đoán. Một số tác phẩm bàn phím gán cho ông còn bị nghi về tác giả.

## Bối cảnh
Lüneburg là thành phố Hansa phía bắc nước Đức, nơi Johanniskirche là nhà thờ chính của ông suốt 35 năm. Cậu bé Bach đến đây học ở Michaelisschule khi Böhm đã ở chức vụ hơn một năm. Hamburg gần đó là trung tâm organ với vòng quanh Reincken, nơi ông xuất hiện những năm 1690.
`,
    refs: [['Wikipedia — Georg Böhm', 'https://en.wikipedia.org/wiki/Georg_B%C3%B6hm']],
  },

  'Louis Couperin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1626 | Sinh ở Chaumes-en-Brie, cách Paris khoảng 40 km về phía đông nam |
| 1650–1651 | Đến thăm Chambonnières, chơi nhạc của mình và được thuyết phục ở lại Paris |
| 9/4/1653 | Nhận chức nhạc sĩ organ nhà thờ Saint-Gervais ở Paris (400 livre mỗi năm kèm chỗ ở) |
| 1659 | Theo triều đình đến Toulouse |
| 29/8/1661 | Mất khoảng 35 tuổi |

## Âm nhạc và đóng góp
Khoảng 200 bản còn lại qua bản chép tay, không bản nào in khi ông còn sống; nguồn chính là các bản thảo Bauyn (122 bản harpsichord), Oldham (70 bản organ, tìm lại năm 1957) và Parville. Ông nổi tiếng với chaconne, passacaille và các *préludes non mesurés*: prélude "không vạch nhịp", viết bằng nốt tròn nối nhau bằng đường cong để người chơi tự quyết nhịp độ. Trên organ, ông là nhà soạn nhạc Pháp đầu tiên ghi rõ cách phối âm sắc (registration) và dùng những bè trầm nhảy cóc theo lối viola da gamba. Ảnh hưởng của Froberger, người ông có thể gặp khoảng 1651–1652, rất rõ.

## Giai thoại và điều chưa chắc
- **Chuyện Chambonnières**: theo Titon du Tillet (1732), anh em nhà Couperin chơi cho Chambonnières nghe, ông này xúc động nhận Louis làm học trò; về sau Louis từ chối thay thầy ở chức đàn harpsichord của vua vì trung thành, nên người ta lập riêng một chân viol cho ông. Phần lớn tiểu sử dựa vào lời kể của Titon du Tillet.
- **Tác giả các bản**: một số học giả (Skip Sempé, Glen Wilson năm 2013) đặt nghi vấn về việc toàn bộ các bản trong Bauyn và Oldham đều của Louis, dựa trên phong cách.

## Bối cảnh
Paris giữa thế kỷ 17: Saint-Gervais là nhà thờ lớn gắn với dòng họ Couperin, nơi nhạc sĩ organ có lương và chỗ ở riêng. Ông cũng thường đến Meudon, có lẽ làm việc cho nhà ngoại giao Abel Servien. Nhiều bản organ ghi sẵn năm và nơi soạn, cho phép lần theo phong cách ông từ 1650 đến 1659.
`,
    refs: [['Wikipedia — Louis Couperin', 'https://en.wikipedia.org/wiki/Louis_Couperin']],
  },

  'Jean-Baptiste Lully': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 28 hoặc 29/11/1632 | Sinh ở Florence với tên Giovanni Battista Lulli, trong gia đình chủ cối xay |
| 1646 | Được Roger de Lorraine để ý dịp lễ hội hoá trang, vào phục vụ Mademoiselle de Montpensier |
| 1653 | Nhảy cùng Louis XIV trong *Ballet royal de la nuit*; được phong nhà soạn nhạc nhạc cụ của vua; chỉ huy đoàn Petits Violons |
| 1661 | Làm tổng giám đốc âm nhạc hoàng gia; tháng 12 nhập quốc tịch Pháp |
| 1662 | Cưới Madeleine Lambert, con gái ca sĩ Michel Lambert |
| 1672 | Chia tay Molière, mua đặc quyền opera của Pierre Perrin, làm giám đốc Académie Royale de Musique |
| 1673–1687 | Gần như mỗi năm một vở opera mới, phần lớn với nhà thơ Philippe Quinault |
| 22/3/1687 | Mất ở Paris, chôn ở Notre-Dame-des-Victoires |

## Âm nhạc và đóng góp
Lully tạo ra *tragédie en musique* kiểu Pháp ([[opera]] Pháp): *Cadmus et Hermione* (1673), *Alceste*, *Atys* (1676), *Phaëton*, *Armide* (1686), kết hợp ballet, hợp xướng và ngôn ngữ ca hát bám sát tiếng Pháp. Với Molière ông viết comédie-ballet như *Le Bourgeois gentilhomme*. Ông cũng viết grand motet và petit motet cho nhà nguyện hoàng gia, kể cả một *Te Deum* (1677). Quyền kiểm soát đoàn Great Violins và đặc quyền opera giúp ông thống trị đời sống âm nhạc triều Louis XIV ([[thoi-ky-baroque]]).

## Giai thoại và điều chưa chắc
- **Chết vì cây gậy chỉ huy**: theo kể, ông đập gậy dài vào chân khi chỉ huy *Te Deum* mừng Louis XIV khỏi bệnh, vết thương hoại thư và ông không chịu cắt ngón chân. Đây là chuyện kể rất phổ biến.
- **Xuất thân quý tộc**: trong giấy hôn thú 1662 ông tự nhận dòng quý tộc; sử gia Jérôme de La Gorce cho là không đúng.
- **Chuyện ca sĩ Marie Le Rochois**: Fétis kể ông đá một nữ ca sĩ đang mang thai khiến sảy thai; đây chỉ là giai thoại.
- Năm 1685 ông bị buộc tội quan hệ không đứng đắn với một page; về sau vua không cho ông tham gia buổi diễn *Armide* ở Versailles.

## Bối cảnh
Triều đình Louis XIV chuyển giữa Louvre, Saint-Germain-en-Laye, Fontainebleau và Versailles. Ở Paris, Académie Royale de Musique lúc đầu đặt tại sân chơi tennis Bel-Air rồi chuyển sang nhà hát Palais-Royal. Ông nổi tiếng nóng tính và tàn nhẫn, bị bạn lẫn thù ghét sợ.
`,
    refs: [['Wikipedia — Jean-Baptiste Lully', 'https://en.wikipedia.org/wiki/Jean-Baptiste_Lully']],
  },

  'Marc-Antoine Charpentier': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1643 | Sinh ở hoặc gần Paris, con trai một thầy ghi chép; các nguồn lệch về năm sinh |
| k. 1667–1669 | Hai ba năm ở Roma, có lẽ học với Giacomo Carissimi |
| k. 1670–1687 | Nhà soạn nhạc riêng của Mademoiselle de Guise; viết nhạc thánh, oratorio, opera thính phòng và nhạc cho nhà hát Molière |
| 1679 | Được giao soạn cho nhà nguyện riêng của Dauphin |
| 1687–1698 | Chủ nhạc của dòng Tên, đầu tiên ở Louis-le-Grand rồi nhà thờ Saint-Louis |
| 1693 | Opera *Médée* thất bại, ông quay sang nhạc tôn giáo |
| 1698 – 24/2/1704 | Chủ nhạc Sainte-Chapelle ở Paris, mất tại đó |

## Âm nhạc và đóng góp
Ông viết opera, oratorio, [[motet]], mass, thánh vịnh và cantata; ước lượng khoảng 800 tác phẩm, nhưng chỉ còn 28 tập chép tay của chính ông, bán cho Thư viện Hoàng gia năm 1727. Phần dạo đầu *Te Deum* H.146 là nhạc hiệu Eurovision từ năm 1954. Vì đối địch Lully nắm đặc quyền sân khấu, ông thành công chủ yếu ở nhạc thánh và các buổi diễn riêng, mang vào đó ảnh hưởng của oratorio Ý ([[thoi-ky-baroque]]).

## Giai thoại và điều chưa chắc
- **Học hội hoạ ở Roma**: lời kể ông sang Ý trước hết để học vẽ là không có tài liệu và có thể sai.
- **Học trò của Carissimi**: quan hệ thầy trò chỉ do học giả suy từ dấu vết nhạc và chữ ghi chú, không có tài liệu trực tiếp.
- Năm sinh 1643 chỉ là phổ biến, các nguồn khác nhau.
- Sau khi Molière bất hoà với Lully (1672), Molière quay sang Charpentier.

## Bối cảnh
Paris cuối thế kỷ 17: một nhạc sĩ ngoài vòng của Lully sống nhờ các nhà bảo trợ như Mademoiselle de Guise, nhà thờ dòng Tên Saint-Louis và Sainte-Chapelle, nơi ông ở cho đến khi mất.
`,
    refs: [['Wikipedia — Marc-Antoine Charpentier', 'https://en.wikipedia.org/wiki/Marc-Antoine_Charpentier']],
  },

  'Marin Marais': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 31/5/1656 | Sinh ở Paris |
| 21/9/1676 | Cưới Catherine d'Amicourt (hai người có 19 người con); cùng năm được nhận làm nhạc sĩ ở triều đình Versailles |
| 1679 | Được phong *ordinaire de la chambre du roy pour la viole*, giữ đến 1725 |
| 1686–1725 | Xuất bản năm tập *Pièces de viole* |
| 1692 | In *Pièces en trio* |
| 1693–1709 | Viết bốn opera, kể cả *Alcyone* (1706) |
| 15/8/1728 | Mất ở Paris |

## Âm nhạc và đóng góp
Marais là bậc thầy viola da gamba của Pháp. Năm tập *Pièces de viole* gồm các suite với bè trầm liên tục; Hubert Le Blanc (1740) viết rằng ông đã dựng nên "đế chế của đàn viol". Opera *Alcyone* nổi tiếng nhờ cảnh bão; *La Gamme* (1723) leo xuống cả quãng tám. Ông học sáng tác với Lully và thường chỉ huy opera của thầy; học đàn viol với Sainte-Colombe chỉ khoảng sáu tháng.

## Giai thoại và điều chưa chắc
- **Quan hệ với Sainte-Colombe**: tài liệu chỉ cho biết ông học sáu tháng; những chuyện kịch tính về thầy trò thuộc phim *Tous les matins du monde* (1991), không phải sử liệu.
- **Bản "Gall-Bladder" hay "Bladder-Stone"**: bản viết cho viol và harpsichord mô tả ca mổ, có chú thích kiểu "Hắn gào lên". Tên thường dịch là "mật" nhưng phẫu thuật túi mật chưa có cho đến cuối thế kỷ 19, trong khi mổ sỏi bàng quang đã là chuyên khoa ở Paris thế kỷ 17.
- Đời tư sau khi trưởng thành rất ít được ghi chép.

## Bối cảnh
Ông làm việc ở triều đình Versailles gần suốt đời, trong cùng nhóm nhạc sĩ phục vụ Louis XIV, và có gia đình đông con (19 người) ở Paris.
`,
    refs: [['Wikipedia — Marin Marais', 'https://en.wikipedia.org/wiki/Marin_Marais']],
  },

  'Michel-Richard de Lalande': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 15/12/1657 | Sinh ở Paris |
| 1684 | Viết *Te Deum*, một grand motet |
| 1695 | Viết mười hai ritournelle cho tuyển tập air Ý của Fossard và Philidor |
| 1714 | Làm giám đốc nhà nguyện Pháp hoàng gia, giữ đến cuối đời; về sau phụ trách nhạc nhà thờ cả năm |
| 18/6/1726 | Mất (nguồn lệch về nơi: bài viết nói Versailles, hộp thông tin ghi Paris) |

## Âm nhạc và đóng góp
Ông được xem là nhà soạn grand motet vĩ đại nhất của Pháp: tác phẩm thánh nhạc quy mô lớn cho giọng solo, hợp xướng và dàn nhạc, phát triển từ [[motet]]. Ông còn viết ballet và các suite dàn nhạc *Symphonies pour les soupers du Roy*. Ông giỏi organ và harpsichord nhưng không để lại nhạc bàn phím, cũng không viết mass riêng; ở lễ tang của ông người ta hát requiem năm 1656 của Charles d'Helfer. Ông dạy nhạc cho các con gái của Louis XIV.

## Giai thoại và điều chưa chắc
- **Cuộc thi của Louis XIV**: kể rằng vua tổ chức cuộc thi giữa các nhà soạn nhạc, bốn người thắng được chia mỗi người một quý trong năm; quý Giáng sinh quan trọng nhất. Người biên soạn mới chỉ thấy chi tiết này trong một nguồn, chưa đối chiếu.
- **Nơi mất**: Versailles hay Paris, nguồn lệch.
- Năm 1722 ông được tặng huân chương Saint-Michel (theo chú thích ảnh của bài đã đọc, chưa đối chiếu).

## Bối cảnh
Cuối triều Louis XIV, nhà nguyện Versailles là sân khấu chính của thánh nhạc: Lalande là người đứng đầu nhạc nhà nguyện từ 1714. Ông cũng được nhắc đến vì từng thay thế François Couperin tạm thời ở Saint-Gervais khi Couperin còn nhỏ.
`,
    refs: [
      ['Wikipedia — Michel Richard Delalande', 'https://en.wikipedia.org/wiki/Michel-Richard_de_Lalande'],
      ['Wikipedia — François Couperin', 'https://en.wikipedia.org/wiki/Fran%C3%A7ois_Couperin'],
    ],
  },

  'André Campra': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 4/12/1660 | Làm lễ rửa tội ở Aix-en-Provence (chỉ biết ngày này, chưa rõ ngày sinh) |
| 1674 | Vào ca đoàn nhà thờ chính toà Saint-Sauveur ở Aix |
| 1681 | Bị khiển trách vì tham gia diễn kịch không xin phép; 27/5 làm tuyên uý |
| cuối thập niên 1690 | Chủ nhạc ở nhà thờ chính toà Arles và Toulouse |
| 1694–1700 | Chủ nhạc Notre-Dame de Paris; đưa violin vào nhạc thánh, gây tranh cãi |
| 1697 | Bắt đầu viết cho sân khấu, ban đầu in dưới tên người anh |
| 1700 | Từ chức ở Notre-Dame, dành hết cho sân khấu |
| 12/1723 | Sau khi quan nhiếp chính mất, làm phó chủ nhạc nhà nguyện Versailles |
| 1730 | Làm tổng thanh tra Opéra |
| 29/6/1744 | Mất ở Versailles, thọ 83 tuổi |

## Âm nhạc và đóng góp
*L'Europe galante* (1697) thường được coi là opéra-ballet đầu tiên: mỗi hồi một câu chuyện riêng, nhân vật đương thời thay vì thần thoại, có mưu mẹo hài hước. Ông viết thêm *Le carnaval de Venise* (1699), *Les fêtes vénitiennes* (1710), tragédie en musique như *Tancrède* (1702), *Idoménée* (1712), ba tập cantata, và nhạc thánh như *Nisi Dominus* (1722), *Requiem* (sau 1723).

## Giai thoại và điều chưa chắc
- Danh hiệu "opéra-ballet đầu tiên" là cách nói của nhiều nguồn, và nó xây trên mẫu *Ballet des Saisons* của Colasse, vốn dùng nhân vật thần thoại.
- Các tác phẩm sân khấu đầu in dưới tên anh trai nên khó quy chắc.
- *Iphigénie en Tauride* đôi nơi ghi đồng tác giả với Desmarets.

## Bối cảnh
Từ Aix và Arles ở Provence, ông lên Paris làm ở Notre-Dame rồi chuyển sang Opéra. Việc đưa violin vào nhạc thánh ở Notre-Dame gây tranh cãi.
`,
    refs: [['Wikipedia — André Campra', 'https://en.wikipedia.org/wiki/Andr%C3%A9_Campra']],
  },

  'Élisabeth Jacquet de La Guerre': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/3/1665 | Sinh ở Paris, trong gia đình nhạc sĩ và thợ làm đàn harpsichord; cha Claude Jacquet dạy từ nhỏ |
| lúc 5 tuổi | Biểu diễn ở Versailles, được Louis XIV chú ý |
| 1684 | Cưới Marin de La Guerre, một nhạc sĩ organ |
| 1687 | In tập nhạc harpsichord đầu tiên |
| 15/3/1694 | Opera *Céphale et Procris* ra mắt ở Académie Royale de Musique, vở đầu tiên của một phụ nữ được diễn ở đó |
| 1707 | In nhạc harpsichord (chơi được kèm violin) và sáu sonata violin |
| 1708, 1711 | In hai tập *Cantates Bibliques* |
| 27/6/1729 | Mất ở Paris |

## Âm nhạc và đóng góp
Bà viết suite harpsichord, sonata violin, sonata trio (còn dưới dạng bản thảo), cantata thế tục và cantata kinh thánh. Titon du Tillet mô tả bà ứng tác prélude và fantaisie rất lưu loát. Trong thời đại phụ nữ hiếm được in nhạc, bà là người có tập nhạc in riêng và vở opera ở Opéra.

## Giai thoại và điều chưa chắc
- Chuyện bà vào triều đình và bà de Montespan trông nom việc học: nguồn không nêu rõ ngày và chi tiết.
- Opera chỉ diễn năm sáu buổi; nguồn gán nguyên nhân cho sở thích của khán giả Pháp với opera truyền thống chứ không phải tài năng của bà.
- *Te Deum* (1721) bị coi là đã mất, chỉ do Titon du Tillet nhắc.
- Cantata kinh thánh được dàn dựng lại năm 2023 với tên *Out of Her Mouth*, được cho là lần diễn đầu tiên sau khoảng 300 năm.

## Bối cảnh
Bà lớn lên giữa Paris và Versailles, nhà có nhiều đàn harpsichord (tài sản sau khi mất liệt kê ba chiếc). Cuối thập niên 1690 và đầu 1700 bà lần lượt mất nhiều người thân, kể cả con trai, mẹ, cha, chồng.
`,
    refs: [['Wikipedia — Élisabeth Jacquet de La Guerre', 'https://en.wikipedia.org/wiki/%C3%89lisabeth_Jacquet_de_La_Guerre']],
  },

  'François Couperin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/11/1668 | Sinh ở Paris trong dòng họ nhạc sĩ |
| 1679 | Cha Charles mất; chức nhạc sĩ organ Saint-Gervais thuộc về cậu bé, Michel Richard Delalande giữ thay đến khi cậu 18 tuổi |
| 1689 | Cưới Marie-Anne Ansault |
| 1690 | In *Pièces d'orgue* (hai mass organ) |
| k. 1693 | Kế nhiệm Thomelin làm nhạc sĩ organ của Louis XIV |
| 1713 | Có đặc quyền xuất bản, in tập harpsichord đầu |
| 1716 | In *L'art de toucher le clavecin* (thu hồi, tái bản 1717) |
| 1717 | Làm *ordinaire de la musique de la chambre du roi pour le clavecin* |
| 1730 | Con gái Marguerite-Antoinette nhận chức đàn harpsichord của ông ở triều đình; in tập harpsichord thứ tư |
| 11/9/1733 | Mất ở Paris |

## Âm nhạc và đóng góp
Bốn tập harpsichord (1713–1730) gồm hơn 230 bản nhóm theo *ordre*, ghi ký hiệu hoa mỹ rất kỹ. *L'art de toucher le clavecin* dạy cách chạm phím, ngón bấm và hoa mỹ, kèm tám prélude. *Les goûts réunis* và *Concerts royaux* hoà lối Pháp với lối Ý; bản tưởng niệm Corelli và Lully thể hiện hai nguồn ấy. Bach ngưỡng mộ các tập của ông; Ravel viết *Le Tombeau de Couperin* nhớ truyền thống này.

## Giai thoại và điều chưa chắc
- Không rõ chính xác khi nào ông bắt đầu làm nhiệm vụ organ ở Saint-Gervais; có thể sớm hơn 1693.
- Nguồn không chắc về việc con gái Marie-Madeleine có làm organ ở tu viện Maubuisson không.
- Một số nguồn đương thời cho biết con trai François-Laurent rời gia đình sau khi ông mất.
- Tên "Couperin le Grand" là cách phân biệt với họ hàng cùng tên.

## Bối cảnh
Saint-Gervais ở Paris và triều đình Versailles là hai nơi ông làm việc; ông vừa chơi organ cho giáo dân vừa dạy đàn cho gia đình hoàng tộc.
`,
    refs: [['Wikipedia — François Couperin', 'https://en.wikipedia.org/wiki/Fran%C3%A7ois_Couperin']],
  },

  'Jean-Philippe Rameau': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 25/9/1683 | Sinh ở Dijon; bốn mươi năm đầu đời ít được biết, ngay cả gia đình cũng biết ít |
| 1706 | In tập harpsichord đầu |
| trước 1722 | Làm nhạc sĩ organ ở Dijon, Lyon và Clermont-Ferrand |
| 1722 | Định cư ở Paris, in *Traité de l'harmonie* |
| 1726 | In *Nouveau système de musique théorique*; cưới Marie-Louise Mangot |
| 1731 | Chỉ huy dàn nhạc tư của nhà tài phiệt La Poupelinière, giữ 22 năm |
| 1/10/1733 | *Hippolyte et Aricie* ra mắt |
| 1745 | Được phong *Compositeur du Cabinet du Roi*; viết *Platée* |
| 1752–1754 | Querelle des Bouffons |
| 1760 | *Les Paladins*, opera hoàn chỉnh cuối |
| 12/9/1764 | Mất ở Paris, chôn ở Saint-Eustache (nay không rõ mộ) |

## Âm nhạc và đóng góp
Rameau vừa là nhà soạn nhạc vừa là nhà lý thuyết: *Traité de l'harmonie* (1722) đặt nền cho lý thuyết hợp âm và nốt gốc ([[doi-am]], [[bass-so]]). Opera của ông gồm *Les Indes galantes*, *Castor et Pollux* (1737), *Dardanus* (1739) và *Platée*; hoà âm táo bạo của *Hippolyte et Aricie* chia giới phê bình thành phe Lullyiste và phe Rameauneur ([[opera]]). *Les Boréades* chưa được diễn khi ông còn sống.

## Giai thoại và điều chưa chắc
- Tuổi trẻ của ông gần như không có tài liệu.
- Người đương thời mô tả ông kín tiếng, dễ cáu, kiêu hãnh; chuyện ông keo kiệt bị tranh cãi vì ông cũng rộng rãi với họ hàng và nhạc sĩ trẻ.
- Ông có xung đột với Rousseau (từ 1745) và với d'Alembert, Diderot về các bài âm nhạc trong *Encyclopédie*.

## Bối cảnh
Paris giữa thế kỷ 18: ông làm việc trong salon tư của La Poupelinière, rồi ở triều đình, giữa các phe phái chê ông là cổ lỗ khi opera buffa Ý được ưa chuộng.
`,
    refs: [['Wikipedia — Jean-Philippe Rameau', 'https://en.wikipedia.org/wiki/Jean-Philippe_Rameau']],
  },

  'Jean-Marie Leclair': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/5/1697 | Sinh ở Lyon |
| đầu đời | Học múa và violin, trong đó có thời gian ở Turin |
| 1716 | Cưới vũ công Marie-Rose Casthanie (mất khoảng 1728) |
| 1723 | Về Paris, biểu diễn ở Concert Spirituel |
| 1730 | Cưới thợ khắc Louise Roussel, người chuẩn bị bản in nhạc từ Op. 2 |
| 1733 | Được Louis XV phong *ordinaire de la musique* |
| 1736 | Từ chức sau xung đột với Jean-Pierre Guignon |
| 1738–1743 | Phục vụ công nương Anne xứ Orange (Leeuwarden), làm việc ở La Haye |
| 1746 | Opera duy nhất *Scylla et Glaucus* ra mắt |
| 1758 | Mua nhà ở phía bắc khu Marais sau khi cuộc hôn nhân thứ hai tan vỡ |
| đêm 22–23/10/1764 | Bị đâm chết ở Paris (nguồn lệch giữa 22 và 23/10) |

## Âm nhạc và đóng góp
Leclair được coi là người sáng lập trường phái violin Pháp. Ông viết sonata violin (Op. 1, 2, 5, 9, 15), sonata cho hai violin, hai tập concerto (Op. 7, 10) và opera *Scylla et Glaucus*; nhiều tác phẩm sân khấu khác đã mất. Nhạc của ông kết hợp kỹ thuật Ý với phong vị múa và hoa mỹ Pháp ([[thoi-ky-baroque]]).

## Giai thoại và điều chưa chắc
- **Vụ án mạng**: ông bị phát hiện chết vì dao đâm, vụ án chưa bao giờ được giải. Nghi phạm gồm vợ cũ (có thể vì tiền) và cháu Guillaume-François Vial, một nghệ sĩ violin cay đắng vì thiếu việc; không có kết luận.
- Ngày mất lệch nhau giữa các phần của nguồn.

## Bối cảnh
Lyon, Turin, Paris, La Haye: một nhạc sĩ nổi tiếng đi nhiều nơi, rồi phục vụ Công tước de Gramont ở nhà hát riêng tại Puteaux đến cuối đời (1740–1764).
`,
    refs: [['Wikipedia — Jean-Marie Leclair', 'https://en.wikipedia.org/wiki/Jean-Marie_Leclair']],
  },

  'John Blow': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 23/2/1649 | Làm lễ rửa tội; nhiều khả năng sinh ở Collingham, Nottinghamshire |
| thập niên 1660 | Ca sĩ nhà nguyện hoàng gia, viết anthem từ rất sớm, kể cả "club anthem" cùng Pelham Humfrey và William Turner |
| 1668 | Làm nhạc sĩ organ Westminster Abbey |
| 1673 | Cưới Elizabeth Braddock (bà mất khi sinh con khoảng mười năm sau) |
| 1674 | Làm Master of the Children của Chapel Royal |
| 1679 | Rời Abbey, Purcell kế nhiệm |
| 1685 | Là nhạc sĩ riêng của James II |
| 1687 | Chỉ huy ca đoàn St Paul's |
| 1695 | Được bổ nhiệm lại ở Abbey |
| 1700 | Xuất bản *Amphion Anglicus* |
| 1/10/1708 | Mất ở nhà Broad Sanctuary, chôn ở Westminster Abbey |

## Âm nhạc và đóng góp
*Venus and Adonis* (khoảng 1680–1687) là tác phẩm sân khấu duy nhất còn lại của ông và được cho là ảnh hưởng *Dido and Aeneas* của Purcell ([[opera]]). Ông còn viết anthem và ode cho triều đình, và tập bài ca *Amphion Anglicus* với bè trầm số. Học trò gồm William Croft, Jeremiah Clarke và Henry Purcell.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: năm 1677 chính ông gọi quê mình là Newark, trong khi bài viết cho rằng nhiều khả năng là Collingham.
- **Năm làm Composer to the Chapel Royal**: 1699 hay 1700, nguồn lệch.
- Việc ông rời Abbey năm 1679 và Purcell nhận chức chỉ được ghi như sự kiện; nguồn không nêu động cơ.

## Bối cảnh
Nhà nguyện hoàng gia và Westminster Abbey ở London thời Phục hồi vương triều là hai trung tâm: ca đoàn nam sinh, organ và anthem cho vua. Ông sống ở Broad Sanctuary sát Abbey và được chôn ở đó.
`,
    refs: [['Wikipedia — John Blow', 'https://en.wikipedia.org/wiki/John_Blow']],
  },

  'Henry Purcell': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| k. 1659 | Sinh ở Westminster, London (năm theo bia tưởng niệm ở Abbey; ngày 10/9 suy từ chú thích bản thảo mơ hồ) |
| 1664 | Cha mất, chú Thomas làm người giám hộ |
| 1673 | Giọng vỡ, rời Chapel Royal, phụ việc cho thợ organ John Hingston |
| 1676 | Làm người chép nhạc ở Westminster Abbey |
| 1679 | Kế nhiệm John Blow làm nhạc sĩ organ Westminster Abbey, giữ đến cuối đời |
| 1682 | Làm nhạc sĩ organ Chapel Royal sau khi cưới Frances |
| 1683 | In tác phẩm đầu tiên, *Twelve Sonatas* |
| 1685 | Viết anthem cho lễ đăng quang James II |
| 1689 | *Dido and Aeneas* được diễn (có thể soạn sớm hơn) |
| 1691–1692 | *King Arthur*, *The Fairy-Queen* |
| 1694 | *Te Deum* và *Jubilate* cho ngày Thánh Cecilia |
| 21/11/1695 | Mất ở nhà Marsham Street, khoảng 35–36 tuổi |

## Âm nhạc và đóng góp
Ông viết hơn 100 bài ca, nhạc thánh, ode, cantata; opera *Dido and Aeneas* ([[opera]]) ([[bass-so]]); các semi-opera *Dioclesian*, *King Arthur*, *The Fairy-Queen*, *The Indian Queen*; và nhạc tang cho Nữ hoàng Mary. Ông là nhà soạn nhạc Anh hàng đầu của [[thoi-ky-baroque]].

## Giai thoại và điều chưa chắc
- **Nguyên nhân cái chết**: có thể ông bị cảm lạnh vì về muộn từ nhà hát và vợ khoá cửa, hoặc chết vì lao; không có chứng cứ chắc.
- **Ngày sinh**: Anh dùng lịch Julius và không còn hồ sơ rửa tội.
- **Dido and Aeneas**: có thể đã diễn trước 1689.
- **"Trumpet Voluntary"** mang tên ông thật ra do Jeremiah Clarke viết khoảng 1700.
- Quyền tác giả nhạc cho *The Tempest* của Dryden còn tranh luận.

## Bối cảnh
Ông sống cả đời quanh Westminster, nhạc sĩ organ Abbey và Chapel Royal. Nhạc ông soạn cho tang lễ Nữ hoàng Mary cũng được trình diễn trong chính tang lễ ông; ông được chôn cạnh cây organ ở lối đi phía bắc Abbey theo bỏ phiếu nhất trí của các viên chức.
`,
    refs: [['Wikipedia — Henry Purcell', 'https://en.wikipedia.org/wiki/Henry_Purcell']],
  },

  'Alessandro Stradella': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 3/7/1643 | Sinh ở Bologna, trong gia đình quý tộc gốc Nepi |
| 1667–1668 | Viết oratorio Latin (nay mất) cho một hội ở Roma và serenata *La Circe* cho Olimpia Aldobrandini Pamphilj |
| 1671–1672 | Giúp dàn dựng opera của Cavalli và Cesti ở nhà hát Tordinona, Roma |
| đầu thập niên 1670 | Cùng Carlo Ambrogio Lonati toan biển thủ tiền của Giáo hội, rời Roma |
| 1677 | Ở Venice dạy nhạc cho Agnese Van Uffele, người tình của Alvise Contarini; hai người bỏ trốn đến Turin; ngày 10/10 ông bị sát thủ làm bị thương |
| 1678 | Chuyển đến Genoa, viết opera cho nhà hát Falcone |
| 25/2/1682 | Bị đâm chết ở Piazza Banchi, Genoa; chôn ở Santa Maria delle Vigne |

## Âm nhạc và đóng góp
Hơn 300 tác phẩm: ít nhất sáu opera, hơn 170 cantata, sáu oratorio và 27 bản nhạc cụ. Handel dùng lại nhạc của ông (ví dụ trong *Israel in Egypt*). *Sonate di viole* cho thấy ông có thể là người khởi nguồn [[concerto-grosso]], nhưng đây chỉ là khả năng ảnh hưởng chứ chưa chắc. *San Giovanni Battista* là oratorio nổi tiếng.

## Giai thoại và điều chưa chắc
- **Động cơ vụ ám sát**: Bourdelot (in 1715) liên hệ với mối tình với một học trò; nguồn khác nói ba anh em nhà Lomellini trả thù vì ông quyến rũ em gái họ. Hung thủ không bao giờ được xác định.
- Chuyện Uffele đã đi tu rồi cưới ông và vụ việc thành tranh chấp ngoại giao liên quan Louis XIV: một số chi tiết chưa có nguồn đầy đủ.
- Cuộc đời ông được hư cấu trong opera *Alessandro Stradella* của Flotow (Hamburg, 1844) và tiểu thuyết 1909 của F. Marion Crawford; không nên lẫn với sử liệu.

## Bối cảnh
Ông sống giữa Roma, Venice, Turin và Genoa, nơi các gia tộc quý tộc và giới tăng lữ bảo trợ âm nhạc; thành phố nào cũng là sân khấu cho các vụ bê bối, và Piazza Banchi ở Genoa là nơi ông chết.
`,
    refs: [['Wikipedia — Alessandro Stradella', 'https://en.wikipedia.org/wiki/Alessandro_Stradella']],
  },

  'Arcangelo Corelli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/2/1653 | Sinh ở Fusignano, Các quốc gia Giáo hoàng; cha mất năm tuần trước |
| 1666 | Đến Bologna (theo Crescimbeni) |
| 1675 | Hoạt động ở Roma, chơi trong oratorio và lễ nhà thờ |
| 1676–1679 | Chơi cho Hồng y Benedetto Pamphili ở San Marcello |
| 1681 | In Op. 1 (sonata trio) ở Roma; Op. 2 (1685), Op. 3 (1689), Op. 4 (1694), Op. 5 (1700) tiếp sau |
| 1687 | Chỉ huy nhạc lễ cho Nữ hoàng Christina xứ Thuỵ Điển |
| 1689–1690 | Ở Modena |
| 1706 | Được bầu vào Arcadian Academy ở Roma |
| 1708 | Về Roma, sống trong cung điện Hồng y Ottoboni; thăm Naples |
| 8/1/1713 | Mất ở Roma, chôn ở Pantheon |
| 1714 | Op. 6 (12 concerto grosso) in ở Amsterdam, sau khi ông mất |

## Âm nhạc và đóng góp
Sáu tập đã in: sonata trio, sonata solo cho violin và bè trầm liên tục, rồi *Concerti grossi* Op. 6 ([[concerto-grosso]]) trong đó có "Christmas Concerto" (số 8). Op. 5 kết bằng các biến tấu *La Folia*. Hoà âm của ông được xem là mẫu mực của [[thoi-ky-baroque]] (người biên soạn chưa đối chiếu nguồn riêng về điểm này).

## Giai thoại và điều chưa chắc
- **Chuyện trốn khỏi Paris vì Lully ganh ghét** xuất phát từ Rousseau, không có chứng cứ đương thời.
- **Đối đầu Handel ở Roma**, **buổi diễn thất bại ở Naples**, và chuyện ông không chịu chơi nốt A cao trong *Il trionfo del Tempo* (1708) được kể lại nhiều nhưng không có tài liệu chắc.
- **Kỹ thuật violin**: có người cho là khiêm tốn, người khác cho rằng bản viết không phản ánh tài năng biểu diễn thật.
- **Học việc**: Faenza, Lugo, Bologna và các thầy như Benvenuti, Brugnoli, Bassani, Simonelli đều ghi chép nghèo nàn; việc gia nhập Accademia Filarmonica lúc 17 tuổi cũng bị tranh cãi.

## Bối cảnh
Roma cuối thế kỷ 17: nhạc sĩ sống nhờ hồng y và nữ hoàng lưu vong. Ottoboni tổ chức các buổi hoà nhạc thứ Hai ở cung điện của mình, nơi Corelli ở những năm cuối.
`,
    refs: [['Wikipedia — Arcangelo Corelli', 'https://en.wikipedia.org/wiki/Arcangelo_Corelli']],
  },

  'Alessandro Scarlatti': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/5/1660 | Sinh ở Palermo hoặc Trapani, Sicilia (nguồn lệch) |
| 1679 | Opera *Gli equivoci nel sembiante* ở Roma, được Nữ hoàng Christina bảo trợ làm maestro di cappella |
| 2/1684 | Làm maestro di cappella cho phó vương Naples |
| 1702 | Rời Naples |
| 1703 | Làm maestro di cappella ở Santa Maria Maggiore (Roma), qua Hồng y Ottoboni |
| 1707 | Đến Venice và Urbino |
| 1708–1717 | Trở lại Naples |
| 1718–1721 | Dàn dựng *Telemaco*, *Marco Attilio Regolo*, *La Griselda* ở nhà hát Capranica, Roma |
| 1721 | *Messa di Santa Cecilia* cho Hồng y Acquaviva |
| 22/10/1725 | Mất ở Naples, chôn ở Santa Maria di Montesanto |

## Âm nhạc và đóng góp
Ông là nhân vật đứng đầu trường phái Napoli ([[opera]]). Opera tiêu biểu: *La Rosaura* (1690), *Pirro e Demetrio* (1694), *Teodora* (1697) và *Mitridate Eupatore*. Ông viết oratorio (*La Giuditta*, 1693), hơn năm trăm cantata thính phòng cho một giọng, phần lớn chưa in. Ông được ghi công thiết lập overture Ý ba chương và aria da capo, và đưa vào ritornello dàn nhạc. Hai con trai Domenico và Pietro Filippo cũng là nhà soạn nhạc.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Palermo hay Trapani.
- **Học với Carissimi**: thường được nói nhưng nguồn nói rõ về tuổi trẻ ông hầu như chưa có tài liệu.
- Chị gái, ca sĩ opera, có thể đã giúp ông xin được chức ở Naples qua một quý tộc.
- Nguồn viết rằng Naples "chán nhạc của ông" năm 1717 còn Roma quý trọng hơn; đây là nhận định, không phải sự kiện kiểm chứng được.
- Opera viết cho nhà hát riêng của Ferdinando de' Medici nay đã mất.

## Bối cảnh
Ông làm việc giữa hai trung tâm: Roma của giáo hội và nhà hát Capranica, Naples nơi ông phục vụ phó vương, trước và sau khi quyền cai trị chuyển từ Tây Ban Nha sang Áo. Các nhà bảo trợ như Christina, Ottoboni và Medici tạo nên đời sống opera và cantata Ý.
`,
    refs: [['Wikipedia — Alessandro Scarlatti', 'https://en.wikipedia.org/wiki/Alessandro_Scarlatti']],
  },
}

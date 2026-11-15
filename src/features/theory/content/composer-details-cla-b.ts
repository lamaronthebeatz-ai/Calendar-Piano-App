import type { Person } from './people'

/** Tiểu sử chi tiết các nhà soạn nhạc Cổ điển châu Âu (nhóm cla:europe, trừ Clementi; nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_CLA_B: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'François-Joseph Gossec': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/1/1734 | Sinh tại Vergnies, vùng Hainaut, khi ấy là đất Pháp nằm lọt trong xứ Hà Lan thuộc Áo (nay thuộc Bỉ); con một nông dân nhỏ |
| 1751 | Đến Paris; theo Wikipedia tiếng Anh được Rameau nhận giúp, sau nối chân Rameau chỉ huy dàn nhạc riêng của nhà tài chính La Poupelinière |
| 1754–1756 | Các bản giao hưởng đầu tiên (Wikipedia tiếng Anh ghi 1754, tiếng Pháp ghi 1756) |
| 1760 | *Messe des morts* (Requiem) ra mắt, nổi tiếng nhanh chóng |
| 1762–1770 | Chỉ huy âm nhạc ở nhà hát của Hoàng thân Condé tại Chantilly |
| 1769–1773 | Lập và điều hành Concert des Amateurs; năm 1773 chuyển sang Concert Spirituel, nhường dàn nhạc cho Saint-Georges |
| 1784 | Dựng École royale de chant (trường ca hát và diễn xuất) |
| 1790–1794 | Viết nhạc cho các lễ hội Cách mạng: *Te Deum* lễ Liên bang 1790, hợp ca lễ cải táng Voltaire vào Panthéon 1791 |
| 1795 | Một trong các thanh tra đầu tiên của Conservatoire de Paris, dạy sáng tác đến 1814 |
| 16/2/1829 | Mất tại Passy, thọ 95 tuổi; an táng ở Père-Lachaise gần Méhul và Grétry |

## Âm nhạc và đóng góp
Gossec là một trong những người đưa [[giao-huong]] vào đời sống hoà nhạc Paris vào lúc nơi đây còn chuộng opera và nhạc nhẹ. Wikipedia tiếng Pháp ghi các bản giao hưởng đầu của ông (1756) có trước phần lớn giao hưởng của Haydn, song đây là cách nói về lịch sử giao hưởng Pháp chứ chưa phải kết luận nghiên cứu. Về sau ông thiên về nhạc sân khấu và nhạc lễ hội công cộng dành cho dàn kèn và giọng hát đông người: *Marche lugubre*, *Le Chant du 14 juillet* (lời Marie-Joseph Chénier), *Te Deum*. Bản *Gavotte* nổi tiếng trích từ opera *Rosine* (1786). Với Méhul và Cherubini, ông thuộc lớp người dựng nên Conservatoire, nơi giữ vai trò mới của nhà nước trong giáo dục âm nhạc.

## Giai thoại và điều chưa chắc
- **Con số hoành tráng của *Te Deum* (1.200 ca sĩ, 300 nhạc công kèn)**: có trên Wikipedia tiếng Anh nhưng không kèm dẫn nguồn.
- **Gặp Napoleon năm 1803, từ chối làm việc dưới quyền ông ta**: chuyện không có chú thích nguồn; coi là giai thoại.
- **Mozart nhận xét Gossec là "bạn rất tốt và là người rất khô khan"**: lấy từ thư Mozart gửi cha năm 1778, chỉ thấy qua sách của Hermann Abert (nguồn thứ cấp).
- **Gavotte trong phim hoạt hình Warner Bros.**: Wikipedia tiếng Anh gắn thẻ "cần dẫn nguồn".
- **Tên và nguồn gốc**: một số tài liệu ghi tên khai sinh là Gossé; trường École royale de chant được một chỗ gán cho vua Louis XVI, chỗ khác cho nam tước de Breteuil.

## Bối cảnh
Gossec lớn lên ở vùng biên giới nói tiếng Pháp của xứ Hà Lan thuộc Áo rồi làm ca đồng tại Antwerp. Paris giữa thế kỷ 18 là nơi các nhà tài chính giàu có nuôi dàn nhạc tư, còn các hội hoà nhạc như Concert des Amateurs và Concert Spirituel mở dần cửa cho thính giả trả tiền. Đến thời Cách mạng, quảng trường và Champ-de-Mars trở thành nơi biểu diễn: nhạc cho hàng nghìn người phải dùng kèn đồng và hợp xướng đông, và ông từng chỉ huy ban nhạc của Vệ binh Quốc gia.
`,
    refs: [
      ['Wikipedia (EN) – François-Joseph Gossec', 'https://en.wikipedia.org/wiki/Fran%C3%A7ois-Joseph_Gossec'],
      ['Wikipédia (FR) – François-Joseph Gossec', 'https://fr.wikipedia.org/wiki/Fran%C3%A7ois-Joseph_Gossec'],
    ],
  },

  'Giovanni Paisiello': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 9/5/1740 | Sinh ở Taranto (theo hồ sơ rửa tội); con một thợ rèn móng ngựa, học trường dòng Tên địa phương |
| 8/6/1754 | Vào nhạc viện S. Onofrio ở Napoli, học với Francesco Durante |
| 1764 | Opera đầu tay *La moglie in calzoni* ở Modena (Treccani); Wikipedia tiếng Anh ghi các vở intermezzo từ 1763 |
| 1775 | *Socrate immaginario* thành công lớn ở Napoli |
| 1776–1784 | Làm nhạc trưởng triều đình cho Nữ hoàng Catherine II ở Saint Petersburg |
| 1782 | *Il barbiere di Siviglia* ra mắt tại Nga |
| 1784 | Qua Vienna dựng *Il re Teodoro in Venezia* (23/8), rồi về Napoli phục vụ vua Ferdinando IV |
| 1788–1789 | *La molinara*, *Nina, o sia la pazza per amore* |
| 4/5/1799 | Được cử làm nhạc trưởng quốc gia của Cộng hoà Parthenopea ngắn ngủi |
| 1802–1804 | Sang Paris theo lời mời của Napoléon; *Proserpine* (29/3/1803) không thành công |
| 5/6/1816 | Mất tại Napoli |

## Âm nhạc và đóng góp
Paisiello là bậc thầy opera buffa kiểu Napoli: giai điệu duyên dáng, dàn nhạc nhẹ, các ensemble sống động. Ông để lại hàng chục vở opera (Wikipedia ghi 94, nhưng Grove được dẫn cùng bài chỉ nói "hơn 80"), tám thánh lễ và nhiều nhạc nhà thờ. Vở *Nina* và aria "Nel cor più non mi sento" của *La molinara* được người đời sau dùng làm đề tài biến tấu: Beethoven viết biến tấu piano, Paganini viết biến tấu violin. Về mặt [[opera]], ông là gạch nối giữa Pergolesi và Rossini.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: một truyền thống ghi Roccaforzata, nhưng Treccani bác bỏ, viện hồ sơ thuế năm 1746 ghi gia đình ông ở Taranto.
- **Năm sinh 1740 hay 1741**: ảnh minh hoạ Wikipedia ghi 1741, thân bài và Treccani ghi 1740 (theo hồ sơ rửa tội).
- **Michael Kelly kể Mozart và Paisiello gặp nhau ở Vienna**: lời kể chỉ do Kelly để lại; Wikipedia gắn thẻ cần nguồn.
- **Rossini 1816**: câu chuyện người hâm mộ Paisiello phản ứng dữ dội khi Rossini dựng lại cùng đề tài *Barbiere* có trong bài Wikipedia nhưng không dẫn nguồn rõ.
- **Vì sao cấm *Socrate immaginario***: vua Ferdinando IV cho dừng sau năm buổi diễn; Treccani nêu các giả thuyết (bảo vệ học giả Saverio Mattei khỏi bị châm biếm, hoặc tranh chấp giữa các chủ nhà hát) mà không kết luận.
- **Người viết libretto *Barbiere* 1782**: không rõ tên.

## Bối cảnh
Napoli thế kỷ 18 có bốn nhạc viện nội trú và những nhà hát hát opera buffa bằng phương ngữ, nơi khán giả thích tiếng cười hơn bi kịch. Ở Saint Petersburg, ông ra mắt dưới sự đỡ đầu của Catherine II, người đưa ông tới nước Nga; theo Treccani, ngày 5/6/1780 ông gặp hoàng đế Joseph II đang đi ẩn danh ở Mogilëv. Cuối đời ông sống ở Napoli khi chế độ đổi tay giữa Bourbon, Cộng hoà, Bonaparte và Bourbon trở lại, và vị thế cung đình của ông chao đảo theo từng lần.
`,
    refs: [
      ['Wikipedia (EN) – Giovanni Paisiello', 'https://en.wikipedia.org/wiki/Giovanni_Paisiello'],
      ['Treccani – Dizionario Biografico: Giovanni Paisiello', 'https://www.treccani.it/enciclopedia/giovanni-paisiello_(Dizionario-Biografico)/'],
    ],
  },

  'André Grétry': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 11/2/1741 | Rửa tội tại Liège (ngày sinh chính xác không rõ; xem phần chưa chắc) |
| 1753 | Học với Jean-Pantaléon Leclerc, rồi nhạc sĩ organ Nicolas Rennekin |
| 3/1759 | Rời Liège sang Roma, học với Giovanni Battista Casali |
| 1/1/1767 | Rời Roma, qua Genève gặp Voltaire, rồi đến Paris |
| 1768–1769 | *Le Huron* thành công, mở đường sự nghiệp opéra comique (ngày ra mắt: Wikipedia tiếng Anh ghi 8/1768, tiếng Pháp ghi 20/8/1769) |
| 1771 | *Zémire et Azor*; cưới họa sĩ Jeanne-Marie Grandon |
| 1784 | *Richard Cœur-de-lion* |
| 1795 | Làm thanh tra Conservatoire, thành viên Institut de France |
| 18/12/1803 | Được Napoléon phong hiệp sĩ Légion d'honneur |
| 24/9/1813 | Mất tại Ermitage ở Montmorency, nhà cũ của Rousseau; an táng ở Père-Lachaise |

## Âm nhạc và đóng góp
Grétry viết khoảng năm mươi vở opera, chủ yếu opéra comique. Ông muốn giai điệu theo sát ngữ điệu lời nói tiếng Pháp, và để lại hồi ký về âm nhạc (*Mémoires, ou Essais sur la musique*, 1797). Dàn nhạc của ông bị đánh giá là yếu, từng có người viết lại phần phối khí cho khán giả hiện đại. Các vở tiêu biểu: *Zémire et Azor*, *Richard Cœur-de-lion*, *La caravane du Caire* (một aria được chuyển thành hành khúc của quân đội Napoléon). Trong lịch sử [[opera]], ông là gương mặt trung tâm của thể loại opéra comique Pháp trước thời Cách mạng.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: Wikipedia tiếng Pháp ghi 8/2 ở khung thông tin nhưng 11/2 ở thân bài, bia kỷ niệm và hồ sơ rửa tội; trang không giải thích lệch này.
- **Bữa tiệc 3/10/1789 ở Versailles**: nhiều tài liệu kể rằng vệ binh hát romance của *Richard* trước hoàng gia, và có người coi đó là ngòi cho cuộc tiến quân của phụ nữ Paris ngày 5–6/10. Wikipedia tiếng Anh dẫn Carlyle; trang tiếng Pháp gọi đây là "nguyên nhân trực tiếp", một khẳng định mạnh không dẫn thêm nguồn.
- **Chủ nghĩa cộng hoà**: Grétry tự viết mình thấm tinh thần cộng hoà từ nhỏ, song ông gần gũi triều đình Versailles (Marie-Antoinette làm mẹ đỡ đầu con gái ông, theo Wikipedia tiếng Pháp); bài Wikipedia tiếng Anh cho các vở thuần cộng hoà là mang tính "dịp", không thật lòng.
- **Ông là người đầu tiên viết cho tuba curva**: có trong bài tiếng Anh, thiếu dẫn nguồn.
- **Hưu bổng từ Napoléon**: cũng thiếu dẫn nguồn.

## Bối cảnh
Liège thời ông lớn lên là Giáo quốc công tước, nơi một đoàn opera Ý ghé qua đã mở mắt cậu bé nhà nghèo. Paris của thập niên 1770 là Comédie-Italienne, sân khấu chuộng chuyện giản dị có lời thoại. Về già, Grétry ở Ermitage, ngôi nhà nhỏ giữa vườn ở Montmorency mà Rousseau từng sống, và ông được chôn ở Père-Lachaise còn trái tim sau này được đưa về Liège.
`,
    refs: [
      ['Wikipedia (EN) – André Grétry', 'https://en.wikipedia.org/wiki/Andr%C3%A9_Gr%C3%A9try'],
      ['Wikipédia (FR) – André Grétry', 'https://fr.wikipedia.org/wiki/Andr%C3%A9_Gr%C3%A9try'],
    ],
  },

  'Luigi Boccherini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 19/2/1743 | Sinh tại Lucca; cha là Leopoldo, nhạc công cello và contrabass |
| 1757 | Cùng cha vào dàn nhạc nhà hát hoàng gia Vienna (rời cuối 1758; về lại 1760–1761) |
| 1767–1768 | Đến Paris cùng nghệ sĩ violin Filippo Manfredi; biểu diễn ở Concert Spirituel 20/3/1768 |
| 1768 | Sang Madrid, được tiếp đón lạnh nhạt |
| 8/11/1770 | Nhận làm nhạc sĩ cho Infante Luis Antonio, em vua Carlos III (lương 30.000 real/năm, theo Treccani) |
| 7/8/1785 | Infante qua đời; lương hưu bị giảm |
| 20/1/1786 | Vua Friedrich Wilhelm II Phổ nhận làm nhà soạn nhạc, hưu bổng 1.000 scudo |
| 2/3/1798 | Vua Friedrich Wilhelm III thu hồi khoản hưu bổng |
| 28/5/1805 | Mất tại Madrid; hài cốt được đưa về Lucca năm 1927 |

## Âm nhạc và đóng góp
Boccherini viết hơn một trăm ngũ tấu đàn dây với hai cello (cách biên chế ông đi tiên phong), gần một trăm tứ tấu, ít nhất mười chín sonata cello, khoảng ba mươi giao hưởng và mười hai concerto cello. Ông đẩy cello lên vai trò tiếng hát chính trong [[thoi-ky-co-dien]], vượt cách dùng chủ yếu để đệm của thời đó. Tác phẩm nổi nhất là minuet trong Ngũ tấu Op. 11 số 5 (G 275). Các tác phẩm có màu Tây Ban Nha: *Musica notturna delle strade di Madrid*, ngũ tấu guitar có điệu fandango.

## Giai thoại và điều chưa chắc
- **Chuyện bị vua đuổi vì "nhân đôi" đoạn nhạc**: Wikipedia tiếng Anh kể vua bắt sửa một đoạn trio nhưng Boccherini chép gấp đôi nên bị đuổi ngay. Treccani kể khác hẳn: sự việc xoay quanh Manfredi, người đáp cộc lốc hoàng tử xứ Asturias vốn chê một ngũ tấu của Boccherini, bị cấm vào cung. Hai nguồn lệch nhau.
- **Concerto violin Rê trưởng, từng nghĩ là hình mẫu của K. 218 của Mozart**: Treccani nói không phải của Boccherini.
- **Viết nhạc cho các tu viện sau 1785**: lời Nerici, không có chứng cứ.
- **Thù địch với Brunetti ở Madrid**: không được nguồn đáng tin xác nhận.
- Số anh chị em: các tiểu sử Cerù và Lazzareschi ghi năm hay bảy người.
- Cái tên "Grützmacher" gắn với bản concerto Si giáng G 482 chỉ bản biên soạn thế kỷ 19, nay đã khôi phục bản gốc.

## Bối cảnh
Lucca là nước cộng hoà nhỏ ở Toscana; Vienna giữa thế kỷ có Burgtheater với dàn nhạc của triều đình. Tại Tây Ban Nha, Infante Luis sống tách khỏi triều Madrid và dựng nhà ở Arenas de San Pedro dưới dãy Gredos, nơi Boccherini sống và viết nhiều tác phẩm. Cuối đời, sau khi mất người bảo trợ, vợ và nhiều con gái, ông đau yếu và nghèo, phải nhờ hầu tước Benavente đặt các bản chuyển soạn cho guitar để sống.
`,
    refs: [
      ['Wikipedia (EN) – Luigi Boccherini', 'https://en.wikipedia.org/wiki/Luigi_Boccherini'],
      ['Treccani – Dizionario Biografico: Luigi Boccherini', 'https://www.treccani.it/enciclopedia/luigi-boccherini_(Dizionario-Biografico)/'],
    ],
  },

  'Joseph Bologne, Chevalier de Saint-Georges': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 25/12/1745 | Ngày sinh phổ biến, tại Baillif, Basse-Terre, Guadeloupe; con ngoài giá thú của chủ đồn điền Georges Bologne de Saint-Georges và Nanon, người phụ nữ nô lệ trong gia đình (xem phần chưa chắc về năm sinh) |
| 1753 | Lên bảy, được gửi sang Pháp học nội trú ở Angoulême |
| 1755 | Đoàn tụ cha mẹ ở Bordeaux rồi sống ở Paris |
| k. 1758–1761 | Vào trường kiếm của Nicolas Texier de La Boëssière; năm 1761 vào đội gendarme bảo vệ nhà vua (theo Wikipedia tiếng Pháp) |
| 1766 | Thắng trận đấu kiếm với Alexandre Picard (Wikipedia tiếng Anh: 1761 hoặc 1766) hoặc trận 8/9/1766 với Faldoni (Wikipedia tiếng Pháp) |
| 1769 | Chơi violin trong Concert des Amateurs của Gossec |
| 1773 | Thay Gossec làm nhạc trưởng Concert des Amateurs |
| 1776 | Được đề cử giám đốc Opéra Paris; các ca sĩ làm kiến nghị phản đối, chức vụ về tay Dauvergne |
| 19/7/1777 | Opéra comique *Ernestine* (libretto Laclos) ra mắt, thất bại |
| 1781–1785 | Dàn nhạc đổi thành Concert de la Loge Olympique; năm 1785 chỉ huy buổi ra mắt các giao hưởng Paris của Haydn |
| 9/4/1787 | Đấu kiếm với Chevalier d'Éon tại Carlton House, London |
| 9/1792 | Chỉ huy Légion franche de cavalerie des Américains et du Midi |
| 29/9/1793–24/10/1794 | Bị bắt, giam khoảng mười một tháng không có cáo trạng cụ thể |
| 9/6/1799 | Mất tại Paris, thọ 53 tuổi (Wikipedia tiếng Pháp ghi 9, 10 hoặc 12/6 tuỳ nguồn) |

## Âm nhạc và đóng góp
Saint-Georges viết concerto violin (mười hai bản), giao hưởng concertante, tứ tấu và opéra comique. Phong cách thuộc [[thoi-ky-co-dien]] Pháp: giai điệu sáng, kỹ thuật violin cao. Ông còn là nhạc trưởng của một trong các dàn nhạc giỏi nhất Paris, nơi Haydn đặt hàng sáu bản giao hưởng Paris. Về kiếm thuật, ông luyện phái florê (fleuret) và nổi tiếng đến mức trận giao đấu với d'Éon được Robineau vẽ lại. Opera *L'amant anonyme* được dựng lại ở Charleston năm 2016 sau 236 năm.

## Giai thoại và điều chưa chắc
- **Năm sinh**: Wikipedia tiếng Anh dùng 1745; Anne Pérotin-Dumon (2001) đề xuất 1739 và hồi ký Dumas gợi 1732; nơi sinh cũng không có tài liệu trực tiếp, các nhà sử học nghiêng về đồn Clairefontaine ở Baillif.
- **Trận Picard**: nguồn lệch về năm (1761 hay 1766) và Wikipedia tiếng Anh gọi đó là cuộc đấu chứ không phải duel.
- **Trận với d'Éon (1787)**: theo lời d'Éon, Saint-Georges bị chạm bảy lần; có người cho là d'Éon được nhường vì tuổi.
- **Vụ tấn công đêm 1779**: các nguồn khác nhau về ngày (22/4 hay 1/5) và số kẻ tấn công; hung thủ và động cơ (mật vụ, hay chồng ghen, hầu tước Montalembert) chưa rõ.
- **Napoléon cấm nhạc ông**: bài tiếng Anh nói Alain Guédé đưa ra khẳng định này không có bằng chứng (Banat phản bác) và không nhắc lệnh cấm nào.
- **Thăm Saint-Domingue**: có tiểu sử viết thế nhưng không có bằng chứng chắc.
- **Biệt danh "Mozart da đen"**: có người coi là lời khen, có người chê là rập khuôn.

## Bối cảnh
Guadeloupe đầu thế kỷ 18 là đảo đồn điền đường, nơi mẹ ông sống trong thân phận nô lệ. Paris những năm 1770 có các hội hoà nhạc tư như Concert des Amateurs đặt ở Hôtel de Soubise, những hội quán Tam điểm, và lối đấu kiếm thành môn giải trí của giới quý tộc. Những năm Cách mạng ông ở Lille, rồi cầm đầu đạo kỵ binh gồm người da màu và vùng Midi, trước khi bị cuốn vào vụ tướng Dumouriez.
`,
    refs: [
      ['Wikipedia (EN) – Joseph Bologne, Chevalier de Saint-Georges', 'https://en.wikipedia.org/wiki/Joseph_Bologne,_Chevalier_de_Saint-Georges'],
      ['Wikipédia (FR) – Joseph Bologne de Saint-George', 'https://fr.wikipedia.org/wiki/Joseph_Bologne_de_Saint-George'],
    ],
  },

  'Domenico Cimarosa': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/12/1749 | Sinh tại Aversa, gần Napoli, gia đình nghèo (cha làm thợ nề, mẹ giặt thuê) |
| 1761 | Vào nhạc viện S. Maria di Loreto ở Napoli, học Gennaro Manna, Fedele Fenaroli |
| 1772 | Opera buffa đầu tay *Le stravaganze del conte* ở Napoli |
| 1779 | *L'italiana in Londra* ở Roma (Treccani: Teatro Valle, 1779; Wikipedia tiếng Anh: mời đến Roma 1774) |
| 3/12/1787 | Đến Saint Petersburg phục vụ Catherine II (Treccani; nhiều tiểu sử ghi 1789) |
| 1791 | Rời Nga; được hoàng đế Leopold II mời làm Kapellmeister ở Vienna |
| 7/2/1792 | *Il matrimonio segreto* ra mắt ở Burgtheater |
| 1796 | Nhạc trưởng chính nhà nguyện hoàng gia ở Napoli |
| 9/12/1799 | Bị bắt sau khi chế độ Cộng hoà Parthenopea sụp đổ |
| 11/1/1801 | Mất tại Venezia, thọ 51 tuổi |

## Âm nhạc và đóng góp
Cimarosa viết khoảng sáu mươi opera buffa và hai mươi opera seria cùng nhạc nhà thờ. Ông tránh cứng nhắc dùng da capo, ưa ensemble sôi nổi và hoà âm diatonic rõ ràng. *Il matrimonio segreto* là vở được diễn lại nhiều nhất; Haydn từng chỉ huy mười ba vở của ông ở Esterháza. Stendhal gọi ông là "Molière của giới soạn nhạc"; Schumann khen cách phối khí. Trong [[opera]], ông kế tục dòng buffa Napoli của Paisiello.

## Giai thoại và điều chưa chắc
- **Buổi diễn *Il matrimonio segreto* được lặp lại ngay**: hoàng đế Leopold cho diễn lại vở ngay trong đêm ở phòng riêng; bài tiếng Anh gọi đó "lần encore dài nhất lịch sử opera". Đây là lời kể truyền thống, không có biên bản kèm theo trong hai nguồn đọc được.
- **Bị đầu độc ở Venezia**: tin đồn rằng nữ hoàng Maria Carolina ra lệnh; Wikipedia ghi một cuộc khám nghiệm bác bỏ. Treccani nêu giấy chứng nhận của thầy thuốc gửi Giáo hoàng Pius VII, do chính quyền Napoli phổ biến để phản bác; nguyên nhân tử vong nêu là bệnh bụng (Wikipedia: nhiều khả năng ung thư dạ dày).
- **Quân Nga giải cứu khỏi nhà tù 1799**: Treccani coi là truyền thuyết; sự can thiệp là của Tanfano hoặc Consalvi.
- **Hơn 500 tác phẩm viết ở Nga**: không có chứng cứ, tài liệu lưu trữ bị mất.
- **Concerto oboe của Cimarosa**: là bản chuyển soạn của Arthur Benjamin năm 1949 từ sonata piano.
- Họ ghi trong hồ sơ rửa tội là Cimmarosa, nhưng chữ ký của ông luôn một "m".

## Bối cảnh
Napoli cuối thế kỷ 18 có nhà hát San Carlo và những nhà hát nhỏ như Fiorentini sống bằng opera buffa. Theo Wikipedia, ông rời Nga một phần vì khí hậu lạnh và vì Martín y Soler được ưu ái hơn, nên rời Nga năm 1791. Mùa đông 1799 Napoli đổi chủ liên tục: Cộng hoà dựa vào quân Pháp rồi bị chế độ Bourbon tái lập đàn áp; Cimarosa vì ủng hộ phe tự do mà bị giam và bị kết án tử, sau chuyển sang án lưu đày.
`,
    refs: [
      ['Wikipedia (EN) – Domenico Cimarosa', 'https://en.wikipedia.org/wiki/Domenico_Cimarosa'],
      ['Treccani – Dizionario Biografico: Domenico Cimarosa', 'https://www.treccani.it/enciclopedia/domenico-cimarosa_(Dizionario-Biografico)/'],
    ],
  },

  'Ignaz Pleyel': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/6/1757 | Sinh tại Ruppersthal, Hạ Áo; con thầy giáo làng |
| từ 1772 | Học Haydn ở Eisenstadt, được bá tước Erdődy tài trợ |
| 1783 | Đến Strasbourg làm phụ tá Franz Xaver Richter ở nhà thờ chính toà |
| 1788 | Cưới Françoise-Gabrielle Lefebvre |
| 1789 | Thay Richter làm maître de chapelle |
| 12/1791–5/1792 | Chỉ huy Professional Concerts của Wilhelm Cramer ở London (theo Wikipedia tiếng Đức) |
| 1793–1794 | Bị triệu tập trước Uỷ ban An ninh vì nghi là người bảo hoàng; viết các tác phẩm cộng hoà để tự vệ |
| 1795 | Chuyển sang Paris |
| 1797 | Lập nhà xuất bản Maison Pleyel (hơn 4.000 ấn phẩm trong 39 năm) |
| 1807 | Lập hãng sản xuất piano |
| 14/11/1831 | Mất; Wikipedia tiếng Anh ghi qua đời ở Paris, tiếng Đức ghi tại điền trang ở Saint-Prix; an táng ở Père-Lachaise |

## Âm nhạc và đóng góp
Pleyel viết ít nhất 42 giao hưởng, khoảng 70 tứ tấu đàn dây, opera, nhạc Tam điểm. Âm nhạc dễ nghe, sáng sủa theo kiểu thầy Haydn, đến mức Fétis hỏi "nhà soạn nhạc nào gây cơn sốt nhiều hơn Pleyel?". Các bản song tấu của ông vẫn dùng dạy violin, flute cho người mới học. Mozart trong thư tháng 4/1784 khen tứ tấu của Pleyel và hy vọng ông sẽ có ngày thay Haydn. Về sau tên ông gắn với cây đàn Pleyel mà Chopin ưa chuộng và phòng hoà nhạc Salle Pleyel; xem thêm [[lich-su-piano]].

## Giai thoại và điều chưa chắc
- **Thầy**: học Haydn là chắc; học Wanhal chỉ là "có khả năng".
- **Lý do bị sa thải 1791 ở Strasbourg**: bài Wikipedia tiếng Đức ghi việc bị cho thôi nhưng không nêu lý do; tiếng Anh nêu Cách mạng chấm dứt nhạc nhà thờ và hoà nhạc công cộng.
- **Kình địch với Haydn ở London**: có trong Wikipedia tiếng Anh; cũng nói hai người vẫn thân thiện.
- **Hymne cộng hoà thời Khủng bố**: năm sáng tác *Hymne de Pleyel chanté au Temple de la Raison* (1793 hay 1794) còn tranh cãi.
- **Beethoven bác phương pháp piano Pleyel–Dussek–Cramer**: chỉ dựa vào một bài báo năm 1918, nguồn thứ cấp.
- **Giả thuyết mới 2025**: Darija Andelic-Andzakovic cho rằng chủ đề trong Biến tấu Brahms Op. 56a và concerto contrabass Mi giáng có thể là của Pleyel, không phải của Haydn hay Sperger; chưa là đồng thuận.
- **Số anh chị em 37**: Wikipedia tiếng Anh cho là không có căn cứ.

## Bối cảnh
Strasbourg thời Pleyel là thành phố Alsace với nhà thờ chính toà Notre-Dame có dàn nhạc và ca đoàn lớn và ngân sách thoải mái. Cách mạng làm đình các buổi lễ và hoà nhạc, rồi trong Khủng bố ông phải liên tục chứng minh lòng trung thành, đến mức đổi thành "công dân Pleyel", nhập quốc tịch Pháp và thêm chữ "e" vào họ. Ở Paris, ông chuyển từ nhà soạn nhạc sang nhà kinh doanh: cửa hàng nhạc (1796), tổng phổ bỏ túi (từ 1802) và hãng đàn.
`,
    refs: [
      ['Wikipedia (EN) – Ignaz Pleyel', 'https://en.wikipedia.org/wiki/Ignaz_Pleyel'],
      ['Wikipedia (DE) – Ignaz Pleyel', 'https://de.wikipedia.org/wiki/Ignaz_Pleyel'],
    ],
  },

  'Jan Ladislav Dussek': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/2/1760 | Sinh tại Čáslav, Bohemia; cha là nhạc sĩ organ, mẹ chơi đàn hạc; tên rửa tội Jan Václav Dusík |
| 1774–1776 | Học trường dòng Tên ở Kutná Hora, làm organist nhà thờ Santa Barbara |
| 16/12/1779 | Buổi hoà nhạc harpsichord ở Mechelen |
| 1782–1783 | Ở Hamburg, chơi fortepiano kiểu Anh; xuất bản các tác phẩm đánh số Op. 1 |
| 1784–1786 | Nga, Litva, rồi lưu diễn Đức; đến Paris năm 1786 |
| 1789 | Đến London (buổi diễn đầu được ghi: 1/6/1789 ở Hanover Square Rooms) |
| 1792 | Cưới Sophia Corri |
| 1793–1794 | Nhận các cây piano Broadwood mở rộng lên 5,5 rồi 6 quãng tám |
| 1799 | Công ty xuất bản phá sản, ông bỏ London sang Hamburg |
| 1800–1806 | Phục vụ hoàng thân Louis Ferdinand của Phổ; hoàng thân tử trận ở Saalfeld 10/10/1806 |
| 1807–1812 | Làm nhạc trưởng cho Talleyrand ở Paris |
| 20/3/1812 | Mất ở Saint-Germain-en-Laye, thọ 52 tuổi |

## Âm nhạc và đóng góp
Dussek là một trong các nghệ sĩ piano lưu diễn đầu tiên của châu Âu. Làm việc với Broadwood, ông thuyết phục hãng mở rộng phím đàn, và phong cách sáng tác chuyển từ sắc thái [[thoi-ky-co-dien]] sang giàu màu sắc hoà âm tiền Lãng mạn. Tác phẩm tiêu biểu: sonata *The Farewell* Op. 44, *Élégie harmonique* Op. 61 (tưởng niệm Louis Ferdinand), Sonata Fa thứ Op. 77, *Le Retour à Paris* Op. 64. Wikipedia tiếng Anh cho ông khoảng 35 sonata piano, 16 concerto piano và 65 sonata violin. Lịch sử đàn xem [[lich-su-piano]].

## Giai thoại và điều chưa chắc
- **Quay đàn ngang sân khấu để khán giả thấy gương mặt**: Wikipedia tiếng Anh kể theo Spohr, tiếng Đức theo Tomášek, và nói Spohr cũng làm cùng thời với lý do âm học; chưa rõ ai trước.
- **Chạy khỏi Nga vì bị nghi âm mưu chống Catherine II**: chuyện kể cả hai nguồn không có xác nhận độc lập, có thể là giai thoại.
- **Marie-Antoinette cản chuyến đi Ý 1788**: Wikipedia tiếng Đức nói không xác nhận được.
- **Giữ chức organist nhà thờ St Rumbold ở Mechelen**: Van Doorslaer (1911) không tìm thấy hồ sơ.
- **Dắt vợ Krumpholtz sang London**: nhiều khả năng sai; bà sang London từ 1788.
- **Gặp C. P. E. Bach ở Hamburg**: chỉ có khả năng.
- **Nguyên nhân mất**: ghi là gút, có bài viết thêm béo phì và rượu; Wikipedia tiếng Đức ghi ngày và nguyên nhân là "có lẽ".
- Họ viết khác nhau: Dusík, Duschek, Düssek, Dussek.

## Bối cảnh
Čáslav là thị trấn nhỏ Bohemia, nơi cha ông chơi organ nhà thờ. Từ trường dòng Tên, Dussek đi hết các thủ đô: Hague, Hamburg, St Petersburg, Berlin, Paris, London. London những năm 1790 có các phòng hoà nhạc Hanover Square và các cây Broadwood mới; về sau ông ở trong dinh Louis Ferdinand, nơi hoàng thân đối xử với ông như đồng nghiệp hơn nhân viên. Cuối đời ở Paris ông béo phì, nghiện rượu và trầm uất, theo mô tả của Wikipedia tiếng Đức.
`,
    refs: [
      ['Wikipedia (EN) – Jan Ladislav Dussek', 'https://en.wikipedia.org/wiki/Jan_Ladislav_Dussek'],
      ['Wikipedia (DE) – Jan Ladislav Dussek', 'https://de.wikipedia.org/wiki/Jan_Ladislav_Dussek'],
    ],
  },

  'Luigi Cherubini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 14/9/1760 | Sinh tại Firenze (Treccani). Wikipedia tiếng Anh ghi 8/9, nói có nguồn ghi 14/9; đứa con thứ mười của Bartolommeo, nhạc sĩ harpsichord ở nhà hát Pergola |
| 1778 | Nhận làm học trò của Giuseppe Sarti, theo thầy đến Bologna rồi Milano |
| 1784–1786 | London; 1785 thăm Paris cùng Viotti |
| 1787 | Định cư Paris |
| 5/12/1788 | *Démophoon* ở Opéra |
| 18/7/1791 | *Lodoïska* thành công lớn ở Théâtre Feydeau |
| 1794 | Cưới Anne Cécile Tourette |
| 13/3/1797 | *Médée* ra mắt |
| 1805–1806 | Vienna; *Faniska* (25/2/1806) |
| 1816 | *Requiem Đô thứ* |
| 1822 | Giám đốc Conservatoire; từ chức 3/2/1842 |
| 1835–1836 | *Cours de contrepoint et de fugue*; *Requiem Rê thứ* cho giọng nam |
| 15/3/1842 | Mất ở Paris, thọ 81 tuổi; mộ ở Père-Lachaise |

## Âm nhạc và đóng góp
Cherubini nối opera Ý với opéra comique và "opera giải cứu" Pháp thời Cách mạng: *Lodoïska*, *Médée*, *Les deux journées*. Phong cách dày về hoà âm và dàn nhạc, tiền thân của opera lớn. Ông chú trọng [[fugue]] và đối âm; sách giáo khoa đối âm mang tên ông, nhưng Treccani cho học trò soạn phần lớn. *Requiem Đô thứ* (1816) tưởng niệm Louis XVI được Beethoven, Schumann, Brahms ngưỡng mộ. Ông là giám đốc Nhạc viện nhiều năm và là người đầu tiên trong giới nhạc sĩ nhận Commandeur Légion d'honneur (1841), theo Wikipedia tiếng Anh.

## Giai thoại và điều chưa chắc
- **Ngày sinh**: 8 hay 14/9/1760, hai nguồn chọn khác nhau.
- **"Beethoven coi Cherubini là nhà soạn nhạc đương thời vĩ đại nhất"**: có trong phần mở đầu bài Wikipedia, nhưng không dẫn nguồn cho riêng nhận định này.
- **Tính khí cáu kỉnh**: Adolphe Adam ghi "ông luôn giận nên tính nết dường như rất đều"; Berlioz tả ông như người cổ hủ. Basil Deane cho rằng Berlioz bóp méo hình ảnh Cherubini sau khi mất.
- **Napoléon "thấy ông quá phức tạp"**: chỉ có trong Wikipedia; Treccani nói quan hệ căng thẳng khoảng 15 năm nhưng ở Vienna 1805 Napoléon giao ông quản lý hoà nhạc ở Schönbrunn.
- **Hôn lễ bí mật 1794**: Treccani kể một linh mục Công giáo trốn trong hầm đã làm lễ cưới cho ông và vợ.
- **Bức chân dung của Ingres**: có nguồn nói Cherubini không thích nàng Thi ca đội vòng nguyệt quế, và nhiều bản bị che đen; chưa có dẫn nguồn.
- **Một số thánh lễ gán cho ông** (La trưởng, Si giáng) bị đánh dấu nghi ngờ.

## Bối cảnh
Firenze thuộc Đại công quốc Toscana có nhà hát Pergola, nơi cha ông chơi harpsichord. Paris những năm Cách mạng: Théâtre Feydeau trên phố cùng tên là nơi opéra comique gặp tình thế chính trị, còn Cherubini từng được thuê chơi triangle trong ban nhạc Vệ binh Quốc gia, theo Treccani. Dưới thời Phục tịch ông làm giám đốc nhà nguyện hoàng gia (Surintendant), dạy ở Conservatoire đến cuối đời.
`,
    refs: [
      ['Wikipedia (EN) – Luigi Cherubini', 'https://en.wikipedia.org/wiki/Luigi_Cherubini'],
      ['Treccani – Dizionario Biografico: Luigi Cherubini', 'https://www.treccani.it/enciclopedia/luigi-cherubini_(Dizionario-Biografico)/'],
    ],
  },

  'Étienne Méhul': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 22/6/1763 | Sinh tại Givet, vùng Ardennes; con một thương nhân rượu |
| k. 1773–1778 | Làm organist tu viện dòng Phanxicô ở Givet; học với tu sĩ Hanser ở Laval-Dieu |
| 1779 | Đến Paris, học Jean-Frédéric Edelmann |
| 1783 | Ba sonata piano đầu tiên (Op. 1) |
| 4/9/1790 | *Euphrosine* thành công lớn ở Salle Favart |
| 1791 | *Cora* ở Opéra (ngày ra mắt 4 hay 15/2/1791) |
| 3/5/1792 | *Stratonice* |
| 1794 | *Le chant du départ*, lời Marie-Joseph Chénier |
| 1795 | Thành viên Institut de France; thanh tra Conservatoire |
| 1801 | *L'irato*, đưa ra như tác phẩm của "Fiorelli" |
| 17/2/1807 | *Joseph* |
| 1808–1810 | Các giao hưởng (số 1 năm 1808) |
| 17/12/1811 | *Les Amazones* thất bại, chấm dứt sự nghiệp sân khấu |
| 18/10/1817 | Mất vì lao phổi tại Paris, thọ 54 tuổi |

## Âm nhạc và đóng góp
Méhul là nhà soạn opera lớn nhất của Pháp thời Cách mạng và Đế chế, ngưỡng mộ Gluck. Ông dùng dàn nhạc có màu sắc để vẽ cảnh: trong *Uthal* ông bỏ violin, dùng viola để gợi sắc tối vùng cao nguyên Scotland; trong *La chasse du jeune Henri* kèn horn bắt chước tiếng chó săn. *Le chant du départ* là bài hát yêu nước nổi tiếng nhất của thời đó. Các giao hưởng (số 3 và 4 được David Charlton tìm lại năm 1979) tìm cách làm khán giả Pháp quen thể loại giao hưởng theo lối Đức–Áo. Ông viết nhiều cho [[opera]] và dạy ở Conservatoire.

## Giai thoại và điều chưa chắc
- **Trò đùa *L'irato***: năm 1801 ông cho dựng như tác phẩm của một nhà soạn nhạc Ý tên Fiorelli (có vẻ vì Napoléon thích opera buffa) và tiết lộ sau khi thành công; Wikipedia tiếng Pháp nói thêm ông dành tặng tổng phổ cho Bonaparte.
- **Horst-Wessel-Lied**: một giai điệu trong *Joseph* giống bài dân ca Đức về sau được phát triển thành bài của phát xít; Wikipedia tiếng Anh nói chưa rõ giai điệu của Méhul có thực sự là nguồn không.
- **Ngày ra mắt *Cora***: hai ngày trong cùng một bài.
- **Năm của *Adrien***: thân bài nói bị Công xã Paris rút xuống năm 1792, nhưng danh mục opera trong bản tiếng Anh ghi 1799.
- **Beethoven mượn tín hiệu kèn trumpet của *Héléna* cho *Fidelio***: có trong Wikipedia tiếng Pháp, không dẫn nguồn.
- **Người đầu tiên bị gọi là "Lãng mạn"**: một nhà phê bình trên *La chronique de Paris* ngày 1/4/1793 dùng từ này với ông (Wikipedia tiếng Anh).

## Bối cảnh
Givet là thị trấn bên sông Meuse ở cực bắc Ardennes. Ở Laval-Dieu, tu viện có xưởng nhạc, và Méhul nhận từ đó lòng yêu hoa suốt đời, theo bài tiếng Anh. Paris của ông có Salle Favart của Opéra-Comique, hội quán Olympique de la Parfaite Estime nơi các giao hưởng Paris của Haydn được diễn năm 1787, và Conservatoire là cơ quan mới. Năm 1811 ông lui về Pantin, quận ngoại ô, rồi quay lại Conservatoire năm 1816.
`,
    refs: [
      ['Wikipedia (EN) – Étienne Méhul', 'https://en.wikipedia.org/wiki/%C3%89tienne_M%C3%A9hul'],
      ['Wikipédia (FR) – Étienne Nicolas Méhul', 'https://fr.wikipedia.org/wiki/%C3%89tienne_Nicolas_M%C3%A9hul'],
    ],
  },

  'Anton Diabelli': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 5/9/1781 | Sinh tại Mattsee gần Salzburg (hồ sơ rửa tội ghi 6/9) |
| 1788 | Vào ca đoàn tu viện Michaelbeuern, lên bảy tuổi |
| 1790 | Học trường Benedictine ở Salzburg, được Michael Haydn nâng đỡ |
| 1800 | Vào tu viện Raitenhaslach để thành linh mục |
| 1803 | Tu viện bị thế tục hoá; ông bỏ ý định làm linh mục, sang Vienna dạy piano và guitar |
| 1807 | Hợp tác với tay guitar Mauro Giuliani |
| 1817–1818 | Mở nhà xuất bản, rồi lập Cappi & Diabelli |
| 1819–1823 | Dự án *Vaterländischer Künstlerverein*; Beethoven viết 33 biến tấu Op. 120, xuất bản 1823 |
| 1821 | In *Erlkönig* của Schubert làm Op. 1 |
| 1/6/1824 | Công ty thành Diabelli & Comp. với Anton Spina |
| 1851–1852 | Về hưu, giao cho Carl Anton Spina |
| 8/4/1858 | Mất ở Vienna, an táng ở nghĩa trang St. Marx |

## Âm nhạc và đóng góp
Diabelli viết nhiều nhạc guitar và piano dễ chơi, thánh lễ, lieder, và vở operetta *Adam in der Klemme* (1809). Bộ sonatina Op. 151 và 168 cùng nhạc song tấu piano là loại nhạc dạy nhập môn đến ngày nay. Đóng góp lớn nhất là ở vai trò xuất bản: ông đưa vào thị trường tác phẩm của Schubert và, nhờ chủ đề valse của mình, đưa *Biến tấu Diabelli* của Beethoven ra đời, một đỉnh cao của [[bien-tau]]. Ông giữ mảng xuất bản của Schubert sau năm 1828 bằng cách mua phần lớn di cảo từ Ferdinand, và nhiều năm sau còn phát hành tác phẩm "mới" của Schubert.

## Giai thoại và điều chưa chắc
- **Câu "Schusterfleck" (miếng vá thợ giày) Beethoven gọi chủ đề**: chuyện phổ biến, nhưng không có trong hai nguồn người biên soạn đã đọc; coi là chưa kiểm chứng.
- **Bạn bè Schubert sau này buộc tội Diabelli lừa Schubert về tiền**: Wikipedia tiếng Đức nêu lời buộc tội mà không kết luận.
- **Học với Michael Haydn**: Wikipedia tiếng Anh nói "tin là"; bài tiếng Đức nói được Haydn nâng đỡ.
- **Liszt tám tuổi tham gia tập hai**: Wikipedia tiếng Anh nói có lẽ ông không được mời trực tiếp mà thầy là Czerny sắp xếp phần đóng góp.
- **Số tác giả**: năm mươi mốt nhà soạn nhạc gửi biến tấu (Beethoven ở tập một, năm mươi người còn lại ở tập hai).
- **Cha tên Demon**: bản tiếng Đức nói cha đổi sang họ kiểu Ý.

## Bối cảnh
Vienna sau năm 1815 là thành phố của giới trung lưu mê chơi nhạc tại nhà: nhu cầu lớn về các bản chuyển soạn cho piano và guitar, và Diabelli lấp chỗ trống đó. Tu viện Raitenhaslach ở Bavaria bị đóng cửa năm 1803 trong làn sóng thế tục hoá đã đẩy ông đến Vienna. Về già ông mắc xơ vữa động mạch và tự xin đặt dưới sự giám hộ, rồi mất năm 1858 với chẩn đoán liệt não.
`,
    refs: [
      ['Wikipedia (EN) – Anton Diabelli', 'https://en.wikipedia.org/wiki/Anton_Diabelli'],
      ['Wikipedia (DE) – Anton Diabelli', 'https://de.wikipedia.org/wiki/Anton_Diabelli'],
    ],
  },
}

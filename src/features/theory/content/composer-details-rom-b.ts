import type { Person } from './people'

/** Tiểu sử chi tiết các nhà soạn opera và operetta thế kỷ 19 (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_B: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Giacomo Meyerbeer': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 5/9/1791 | Sinh ở Tasdorf gần Berlin, tên khai sinh Jakob Liebmann Meyer Beer, trong một gia đình Do Thái giàu có |
| 1801 | Biểu diễn công khai lần đầu: concerto giọng Rê thứ của Mozart, ở Berlin |
| 1824 | *Il crociato in Egitto* công diễn ở Venezia, đem lại tiếng tăm khắp châu Âu |
| 21/11/1831 | *Robert le diable* ra mắt tại Opéra Paris, thành công ngay đêm đầu |
| 29/2/1836 | *Les Huguenots* ra mắt ở Paris |
| 20/8/1839 | Gặp Wagner lần đầu ở Boulogne; sau đó giúp *Rienzi* được dựng ở Dresden |
| 1842 | Làm Tổng giám đốc âm nhạc (Generalmusikdirektor) của Phổ |
| 16/4/1849 | *Le prophète* ra mắt, với Pauline Viardot vai Fidès |
| 2/5/1864 | Mất ở Paris; thi hài được đưa bằng tàu riêng về Berlin |
| 28/4/1865 | *L'Africaine* ra mắt sau khi ông mất |

## Âm nhạc và đóng góp
Meyerbeer là người định hình thể loại grand opéra Paris: [[opera]] năm màn, đề tài lịch sử, đám đông hợp xướng lớn, ballet và hiệu ứng sân khấu mới nhất của Opéra. Ông ghép lối dàn nhạc Đức với truyền thống thanh nhạc Ý, cộng tác lâu dài với nhà viết lời Eugène Scribe. Cảnh "ballet các nữ tu" trong *Robert le diable* và các bè kèn đồng, timpani trầm tối cho nhân vật quỷ Bertram là ví dụ cho lối phối khí giàu màu sắc của ông. Thế kỷ 19, ông là nhà soạn nhạc được diễn nhiều nhất ở các nhà hát lớn; ý tưởng hợp nhất âm nhạc với mọi phương tiện sân khấu của ông được coi là báo trước khái niệm Gesamtkunstwerk của Wagner. Sau khi ông mất, những đòn công kích của Wagner và phe ủng hộ, rồi lệnh cấm thời Quốc xã, khiến opera của ông gần như biến mất; thế kỷ 21 chúng dần trở lại sân khấu.

## Giai thoại và điều chưa chắc
- **Nơi sinh**: Wikipedia tiếng Anh ghi sinh ở Tasdorf; bài tiếng Đức kể chi tiết hơn rằng ông chào đời trong một cỗ xe ngựa đang dừng trước trạm bưu chính Tasdorf, khi mẹ ông đi từ Berlin sang Frankfurt (Oder).
- **Mua chuộc giới phê bình**: thời đó có tin đồn thành công của ông nhờ tiền bạc. Wikipedia ghi đây là tin đồn; điều được ghi nhận là ông rất giỏi việc kinh doanh opera, có lẽ là người nghĩ ra "họp báo".
- **Câu của Berlioz** "không chỉ may mắn có tài mà còn có tài để may mắn" được trích trong cả bài tiếng Anh, nhưng hai chỗ trong bài ghi lời hơi khác nhau.
- **Wagner**: Meyerbeer từng giúp Wagner, nhưng năm 1850 Wagner công kích ông (không nêu tên) trong bài viết bài Do Thái *Das Judenthum in der Musik*.
- **Rossini ngất xỉu**: Wikipedia kể Rossini đến thăm hôm sau ngày ông mất, chưa biết tin, bị sốc và ngất. Chưa thấy nguồn thứ hai đối chiếu.

## Bối cảnh
Paris thời Quân chủ tháng Bảy là thủ đô opera của châu Âu; Opéra ở Salle Le Peletier có máy móc sân khấu hiện đại nhất. Meyerbeer sống "giữa hai thành phố": vinh quang ở Paris, nhưng vợ và mẹ ở Berlin, và ông vẫn giữ các chức vụ trong triều đình Phổ, giữ đạo Do Thái suốt đời.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Giacomo Meyerbeer', 'https://en.wikipedia.org/wiki/Giacomo_Meyerbeer'],
      ['Wikipedia (tiếng Đức): Giacomo Meyerbeer', 'https://de.wikipedia.org/wiki/Giacomo_Meyerbeer'],
      ['Wikipedia (tiếng Anh): Robert le diable', 'https://en.wikipedia.org/wiki/Robert_le_diable'],
      ['Wikipedia (tiếng Anh): Das Judenthum in der Musik', 'https://en.wikipedia.org/wiki/Das_Judenthum_in_der_Musik'],
    ],
  },
  'Richard Wagner': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 22/5/1813 | Sinh ở Leipzig, con thứ chín của một viên thư ký cảnh sát |
| 1837–1839 | Nhạc trưởng nhà hát ở Riga; trốn nợ, vượt biển gian nan sang London rồi Paris |
| 1842 | Về Dresden; *Rienzi* được dựng nhờ Meyerbeer ủng hộ |
| 2/1/1843 · 19/10/1845 | *Der fliegende Holländer* và *Tannhäuser* ra mắt ở Dresden |
| 1849 | Tham gia khởi nghĩa tháng Năm ở Dresden; bị truy nã, sống lưu vong ở Zürich |
| 1849–1851 | Viết *Tác phẩm nghệ thuật của tương lai* (Gesamtkunstwerk), *Opera và kịch* |
| 9/1850 | Đăng *Das Judenthum in der Musik* dưới bút danh K. Freigedank |
| 4/5/1864 | Được vua Ludwig II xứ Bayern tiếp kiến; nhà vua trả nợ và đưa ông về München |
| 10/6/1865 | *Tristan und Isolde* ra mắt ở München, Hans von Bülow chỉ huy |
| 21/6/1868 | *Die Meistersinger von Nürnberg* ra mắt ở München |
| 25/8/1870 | Cưới Cosima, con gái Liszt |
| 22/5/1872 | Đặt đá móng Festspielhaus ở Bayreuth; ông chỉ huy Giao hưởng số 9 của Beethoven |
| 13/8/1876 | Festspielhaus khai mạc với *Das Rheingold*, đêm đầu của trọn bộ *Der Ring des Nibelungen* (Hans Richter chỉ huy) |
| 26/7/1882 | *Parsifal* ra mắt ở Bayreuth |
| 13/2/1883 | Mất vì đau tim tại Ca' Vendramin Calergi, Venezia |

## Âm nhạc và đóng góp
Wagner tự viết lời cho mọi tác phẩm sân khấu. Từ 1849, ông đề xướng Gesamtkunstwerk ("tác phẩm nghệ thuật tổng hợp"): thơ, nhạc, hình ảnh và kịch hợp làm một; câu chuyện được hát liền mạch thay vì xen kẽ aria và recitative, và dàn nhạc quan trọng ngang ca sĩ. Ông dùng leitmotif, những motif gắn với nhân vật, đồ vật, ý niệm, và hệ thống hoá chúng trong *Der Ring*. *Tristan und Isolde* đẩy hoà âm cromatic đến giới hạn của hệ thống điệu tính; nhiều nhà sử học coi "hợp âm Tristan" là điểm khởi đầu âm nhạc hiện đại. Festspielhaus Bayreuth do ông thiết kế ý tưởng có khán phòng tắt đèn và dàn nhạc giấu dưới hầm. Ảnh hưởng của ông lan sang Bruckner, Mahler, Richard Strauss, văn học, triết học (Nietzsche) và nhạc phim. Xem thêm [[opera]], [[triet-hoc-lang-man-ve-am-nhac]].

## Giai thoại và điều chưa chắc
- **Chữ "leitmotif"**: Wagner không đặt ra từ này. Theo Wikipedia, người đầu tiên dùng nó trên báo là F. W. Jähns (1871, viết về Weber); Hans von Wolzogen phổ biến nó qua sách hướng dẫn *Ring* năm 1876. Wagner chuộng chữ Hauptmotiv và chỉ một lần nhắc "cái gọi là Leitmotiv".
- **Bài viết bài Do Thái**: *Das Judenthum in der Musik* (1850) cho rằng người Do Thái chỉ tạo được nghệ thuật bắt chước, nhắm vào Mendelssohn và Meyerbeer; năm 1869 ông in lại dưới tên thật. Wikipedia tiếng Đức xếp ông vào những người cổ xuý chủ nghĩa bài Do Thái gay gắt. Cùng lúc, Wikipedia tiếng Anh ghi ông vẫn có bạn bè, cộng sự Do Thái (như nhạc trưởng Hermann Levi chỉ huy *Parsifal*). Việc các nhân vật Alberich, Mime, Beckmesser là hình ảnh biếm hoạ người Do Thái chỉ là cách đọc của một số nhà nghiên cứu: lời opera không nói vậy. Hitler hâm mộ Wagner, nhưng mức Wagner ảnh hưởng đến tư tưởng Quốc xã vẫn còn tranh luận; ở Israel, biểu diễn nhạc Wagner vẫn gây tranh cãi.
- **Wagner và Ludwig II**: thư từ của nhà vua bày tỏ sự ngưỡng mộ say mê; Wikipedia ghi Wagner hồi đáp bằng những tình cảm giả vờ đáp lại. Tháng 12/1865 nhà vua buộc phải mời ông rời München vì dư luận; Ludwig từng nghĩ đến chuyện thoái vị để theo ông. Năm 1874 vua cho vay 100.000 thaler để xây Festspielhaus. Gọi Ludwig là "vua điên" là cách gọi ngoài nước Đức; báo cáo tâm thần năm 1886 kết luận dựa trên lời khai, không khám trực tiếp.
- **Lễ khai mạc Bayreuth**: một câu trong bài "Bayreuth Festival" (tiếng Anh) ghi lễ khánh thành 13/8/1876 diễn Giao hưởng số 9; bài Wagner (Anh, Đức) ghi Giao hưởng số 9 là ở lễ đặt đá móng 22/5/1872, còn 13/8/1876 mở màn bằng *Das Rheingold*. Người biên soạn theo bản sau.
- **Cái chết**: chuyện cơn đau tim do cãi nhau với Cosima về ca sĩ Carrie Pringle "không có chứng cứ đáng tin" (Wikipedia tiếng Anh).
- **Gốc Do Thái của Geyer** (cha dượng, có thể là cha ruột): không có bằng chứng Geyer có tổ tiên Do Thái.

## Bối cảnh
Nước Đức trước 1871 là những tiểu quốc; Dresden là triều đình Sachsen, München là kinh đô Bayern của vị vua trẻ mê kịch. Bayreuth là thị trấn nhỏ ở Franken mà Wagner chọn để xây nhà hát riêng trên "Đồi Xanh". Ngày khai mạc 1876 có Hoàng đế Wilhelm I và nhiều vua chúa; Tchaikovsky đến dự với tư cách phóng viên, còn Ludwig II tránh đêm ra mắt, chỉ xem tổng duyệt và vòng diễn thứ ba.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Richard Wagner', 'https://en.wikipedia.org/wiki/Richard_Wagner'],
      ['Wikipedia (tiếng Đức): Richard Wagner', 'https://de.wikipedia.org/wiki/Richard_Wagner'],
      ['Wikipedia (tiếng Anh): Das Judenthum in der Musik', 'https://en.wikipedia.org/wiki/Das_Judenthum_in_der_Musik'],
      ['Wikipedia (tiếng Anh): Bayreuth Festival', 'https://en.wikipedia.org/wiki/Bayreuth_Festival'],
      ['Wikipedia (tiếng Anh): Ludwig II of Bavaria', 'https://en.wikipedia.org/wiki/Ludwig_II_of_Bavaria'],
      ['Wikipedia (tiếng Anh): Leitmotif', 'https://en.wikipedia.org/wiki/Leitmotif'],
    ],
  },
  'Giuseppe Verdi': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 9 hoặc 10/10/1813 | Sinh ở Le Roncole gần Busseto (khi đó thuộc Đế chế Pháp); sổ rửa tội 11/10 ghi "sinh hôm qua", còn Verdi tự coi 9/10 là sinh nhật |
| 1832 | Nộp đơn vào Nhạc viện Milano không thành; học riêng với Vincenzo Lavigna |
| 1836 | Cưới Margherita Barezzi; hai con nhỏ mất 1838 và 1839, vợ mất 1840 |
| 11/1839 | Opera đầu tay *Oberto* ở La Scala |
| 9/3/1842 | *Nabucco* (tên gốc *Nabucodonosor*) ra mắt ở La Scala, Milano; mùa thu cùng năm diễn kỷ lục 57 đêm |
| 1851–1853 | *Rigoletto* (Venezia, 3/1851), *Il trovatore* (Roma, 1/1853), *La traviata* (Venezia, 3/1853, đêm đầu thất bại) |
| 29/8/1859 | Cưới Giuseppina Strepponi ở Collonges-sous-Salève |
| 3/2/1861 | Đắc cử nghị viện đầu tiên của nước Ý; 1874 được bổ nhiệm thượng nghị sĩ |
| 1871 | *Aida* ra mắt ở Cairo |
| 1874 | *Requiem* tưởng niệm nhà văn Alessandro Manzoni |
| 1887 · 9/2/1893 | *Otello* và *Falstaff* ra mắt ở La Scala |
| 27/1/1901 | Mất ở Milano; thi hài sau đó chuyển về Casa di Riposo, nhà dưỡng lão nhạc sĩ ông xây |

## Âm nhạc và đóng góp
Verdi là nhà soạn [[opera]] Ý trung tâm của thế kỷ 19. Giai đoạn đầu (đến *La battaglia di Legnano*, 1849) có những hợp xướng lớn, giai điệu mạnh, phối khí còn đơn giản. Bộ ba *Rigoletto – Il trovatore – La traviata* chuyển sang bi kịch cá nhân, với *La traviata* mang hơi thở hiện thực và nhịp valse đương thời. Ông học lối grand opéra Paris (*Les vêpres siciliennes*, *Don Carlos*) rồi đi tới *Aida*. *Otello* và *Falstaff*, cùng nhà thơ Arrigo Boito, xoá dần ranh giới giữa các "số" nhạc; *Falstaff* là vở hài duy nhất thành công của ông. *[[thanh-le-va-requiem]]* của ông viết bằng chất liệu kịch nghệ; Hans von Bülow chê là "opera mặc áo nhà thờ" trước cả khi nghe. Ông còn để lại một tứ tấu đàn dây duy nhất (xem [[nhac-thinh-phong]]).

## Giai thoại và điều chưa chắc
- **Bị Nhạc viện Milano từ chối**: là sự thật; về sau chính nhạc viện này mang tên ông.
- **"Thề không sáng tác nữa"** sau thất bại *Un giorno di regno* (1840): Wikipedia ghi là "người ta kể", dựa vào hồi ký tự thuật của Verdi, trong đó Merelli thuyết phục ông nhận *Nabucco*.
- **"Va, pensiero" được đòi diễn lại đêm ra mắt**: nhà sử học Philip Gossett gọi đây là ví dụ cho "huyền thoại" về sau. Theo Wikipedia (dựa trên Roger Parker), bài được hát lại đêm đó là "Immenso Jehova", không phải "Va, pensiero".
- **"Va, pensiero" là quốc ca không chính thức**: hợp xướng nô lệ Do Thái với câu "Ôi quê hương đẹp mà đã mất" được những người yêu nước dùng như bài ca; Wikipedia tiếng Đức gọi nó là "quốc ca thầm kín" của Ý. Nhưng Mary Ann Smart cho rằng giới phê bình thời ấy ít nhắc chủ đề chính trị, còn Parker cho rằng chiều chính trị bị phóng đại về cuối thế kỷ. Gossett lại cảnh báo lối "xét lại" có thể đã đi quá xa. Năm 1981 và 2009 từng có đề xuất lấy nó làm quốc ca, đều không thành.
- **"Viva VERDI"**: là chữ viết tắt "Viva Vittorio Emanuele Re D'Italia", nhưng chỉ xuất hiện từ năm 1859 ở Napoli, tức 17 năm sau *Nabucco*.
- **Đám tang**: khi chuyển thi hài về Casa di Riposo, Toscanini chỉ huy "Va, pensiero" với 820 ca sĩ; đám đông ước 300.000 người.

## Bối cảnh
Milano những năm 1840 thuộc Áo, có kiểm duyệt nghiêm. La Scala là nhà hát hàng đầu; ông bầu Bartolomeo Merelli quyết định số phận nhà soạn nhạc trẻ. Về già, Verdi sống như một điền chủ ở Sant'Agata gần Busseto, lo thuỷ lợi, mùa màng, ngựa; thị trấn từng xa lánh Strepponi vì hai người chung sống khi chưa cưới.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Giuseppe Verdi', 'https://en.wikipedia.org/wiki/Giuseppe_Verdi'],
      ['Wikipedia (tiếng Đức): Giuseppe Verdi', 'https://de.wikipedia.org/wiki/Giuseppe_Verdi'],
      ['Wikipedia (tiếng Anh): Nabucco', 'https://en.wikipedia.org/wiki/Nabucco'],
      ['Wikipedia (tiếng Anh): Va, pensiero', 'https://en.wikipedia.org/wiki/Va,_pensiero'],
    ],
  },
  'Charles Gounod': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 17/6/1818 | Sinh ở Khu La-tinh, Paris; cha là hoạ sĩ, mẹ là nghệ sĩ piano |
| 1839 | Đoạt giải Prix de Rome lần thứ ba dự thi, với cantata *Fernand* |
| 1840–1843 | Ở Roma, Vienna, Leipzig; gặp Fanny Hensel rồi Mendelssohn, làm quen nhạc Bach |
| 1843 | Về Paris làm chưởng nhạc nhà thờ Missions étrangères; có thời muốn đi tu |
| 1851 | Opera đầu tay *Sapho* |
| 3/1859 | *Faust* ra mắt ở Théâtre-Lyrique |
| 1867 | *Roméo et Juliette* thành công ngay từ đầu |
| 1869 | *Marche pontificale*, về sau thành quốc ca Thành Vatican |
| 1870–1874 | Lánh chiến tranh sang Anh; sống gần ba năm trong nhà ca sĩ Georgina Weldon |
| 1882 · 1885 | Oratorio *La Rédemption* và *Mors et vita* cho Liên hoan Birmingham |
| 18/10/1893 | Mất ở Saint-Cloud sau cơn đột quỵ ngày 15/10 |

## Âm nhạc và đóng góp
Gounod viết mười hai [[opera]]; *Faust* là vở thành công nhất, kể chuyện tự nhiên, không phô trương ballet và cảnh dàn dựng như grand opéra của Meyerbeer. *Sapho* là ví dụ sớm của opéra lyrique: quy mô nhỏ hơn, gần gũi hơn, hát liền không thoại. Ông viết rất nhiều thánh nhạc (23 thánh lễ), lúc sinh thời được đánh giá cao hơn cả opera. "Ave Maria" của ông là giai điệu chồng lên Prelude số 1 trong *Bình quân luật* của Bach, ban đầu cho violin và piano; lời kinh được thêm sau. Ca khúc của ông có ảnh hưởng đến thế hệ nhạc sĩ Pháp sau (xem [[lied]]).

## Giai thoại và điều chưa chắc
- **"Thằng điên mà chị mình kể"**: Wikipedia kể Mendelssohn chào ông như vậy ở lần gặp đầu; chỉ có một nguồn.
- **Quan hệ với Georgina Weldon**: Wikipedia ghi mọi suy đoán về bản chất quan hệ đều "không có kết luận". Weldon về sau giữ bản thảo của ông và kiện ông, khiến ông không trở lại Anh sau 1885.
- ***Faust* thành công ngay?** Không hẳn: chính Gounod nhớ lại vở "lúc đầu không gây ấn tượng mạnh"; chỉ sau khi sửa và được nhà xuất bản Choudens quảng bá mạnh, vở mới thành hiện tượng quốc tế.
- **Gounod và Bizet**: một nguồn kể sau đêm ra mắt *Carmen*, Gounod buộc tội Bizet "ăn cắp" của mình; Wikipedia dẫn là "theo một lời kể".

## Bối cảnh
Paris thời Đế chế thứ hai có nhiều nhà hát opera cạnh tranh; Théâtre-Lyrique của Léon Carvalho là nơi dám dựng tác phẩm mới. Gounod mộ đạo sâu sắc, sống giữa giới nhà thờ và sân khấu; những năm cuối ông chơi organ cho thánh lễ ở Saint-Cloud.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Charles Gounod', 'https://en.wikipedia.org/wiki/Charles_Gounod'],
      ['Wikipedia (tiếng Đức): Charles Gounod', 'https://de.wikipedia.org/wiki/Charles_Gounod'],
      ['Wikipedia (tiếng Anh): Georges Bizet', 'https://en.wikipedia.org/wiki/Georges_Bizet'],
    ],
  },
  'Jacques Offenbach': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 20/6/1819 | Sinh ở Köln (Phổ), tên Jakob, con một cantor (người xướng kinh) nhà thờ Do Thái |
| 1833 | Vào Nhạc viện Paris năm 14 tuổi, bỏ học sau một năm |
| 1835–1855 | Sống bằng nghề cello, nổi tiếng quốc tế; cải đạo Công giáo để cưới Hérminie d'Alcain |
| 1855 | Thuê một nhà hát nhỏ ở Champs-Élysées, lập Bouffes-Parisiens |
| 10/1858 | *Orphée aux enfers*, operetta dài đầu tiên, diễn 228 đêm |
| 1860 · 1861 | Nhập tịch Pháp theo lệnh Napoléon III; nhận Bắc Đẩu Bội tinh |
| 1864–1868 | *La belle Hélène*, *La Vie parisienne*, *La Grande-Duchesse de Gérolstein*, *La Périchole* |
| 1870 | Chiến tranh Pháp – Phổ: bị nghi kỵ vì gốc Đức và gắn với chế độ cũ |
| 1876 | Lưu diễn Mỹ, hơn 40 buổi ở New York và Philadelphia |
| 5/10/1880 | Mất ở Paris vì suy tim do gout; được làm quốc tang |
| 10/2/1881 | *Les contes d'Hoffmann* ra mắt ở Opéra-Comique, thiếu màn Venezia |

## Âm nhạc và đóng góp
Offenbach được coi là người đặt nền cho operetta hiện đại: gần 100 tác phẩm, từ vở một màn ít diễn viên đến những vở ba, bốn màn với Meilhac và Halévy. Lối hài của ông là đặt nhạc quen trong hoàn cảnh trớ trêu: trong *Orphée aux enfers* ông chèn bài *La Marseillaise* (khi đó bị cấm) và trích "Che farò" của Gluck. Ông ảnh hưởng trực tiếp đến Suppé, Johann Strauss II và Sullivan. *Les contes d'Hoffmann*, [[opera]] nghiêm túc duy nhất ông dồn sức, nay thuộc kho tiết mục chuẩn, dù chưa có bản "chung cuộc".

## Giai thoại và điều chưa chắc
- **"Can-can"**: đoạn nhạc nổi tiếng nhất của *Orphée* tên gốc là "Galop infernal"; tên "Cancan" là về sau (Wikipedia tiếng Đức).
- **Lời chê làm nên thành công**: *Orphée* lúc đầu chỉ thành công vừa phải; bài phê bình phẫn nộ của Jules Janin về tội "báng bổ" khiến công chúng tò mò đổ xô đi xem.
- **"Lời nguyền Hoffmann"**: ngày 8/12/1881, sau đêm diễn thứ hai ở Ringtheater Vienna, nhà hát nổ khí đốt và cháy (Wikipedia tiếng Anh); năm 1887 trận cháy Opéra-Comique thiêu mất bè dàn nhạc. Từ đó sinh chuyện vở này "mang xui". Đây là chuyện dân gian sân khấu, không phải sự kiện có nguyên nhân liên quan.
- **Chết khi đang tập**: bài tiếng Đức ghi ông mất trong thời gian tập *Hoffmann*; ông không kịp xem ra mắt, và nhiều phần bị người khác hoàn thành.

## Bối cảnh
Paris thời Đế chế thứ hai của Napoléon III: Triển lãm Thế giới 1855 và 1867, đại lộ Haussmann, giới thượng lưu thích giễu nhại nhẹ nhàng. Nhà hát của Offenbach ở Champs-Élysées khi ấy còn là lối đất chưa lát; mùa đông ông dời đoàn về Salle Choiseul. Ông được gọi là "con chim nhại của Đế chế thứ hai".
`,
    refs: [
      ['Wikipedia (tiếng Anh): Jacques Offenbach', 'https://en.wikipedia.org/wiki/Jacques_Offenbach'],
      ['Wikipedia (tiếng Đức): Jacques Offenbach', 'https://de.wikipedia.org/wiki/Jacques_Offenbach'],
      ['Wikipedia (tiếng Anh): The Tales of Hoffmann', 'https://en.wikipedia.org/wiki/The_Tales_of_Hoffmann'],
    ],
  },
  'Johann Strauss II': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 25/10/1825 | Sinh ở St. Ulrich gần Vienna (nay thuộc Neubau), con trưởng của nhà soạn valse Johann Strauss I |
| 1844 | Ra mắt ở Casino Dommayer, Hietzing (tiếng Đức ghi ngày 15/10/1844); báo chí khen ngợi |
| 1848 | Đứng về phía cách mạng, viết *Revolutions-Marsch*; bị bắt vì chơi *La Marseillaise* nhưng được tha |
| 1849 | Cha mất; ông sáp nhập hai dàn nhạc |
| 1856–1865 | Mỗi mùa hè chơi nhạc ở Pavlovsk gần Sankt-Peterburg |
| 1863 | Được làm Giám đốc nhạc vũ hội triều đình (k.k. Hofballmusikdirektor), giữ đến 1871 |
| 15/2/1867 | *An der schönen blauen Donau* (Dòng Danube xanh) ra mắt bản hợp xướng với Hội Hợp xướng Nam Vienna |
| 1872 | Sang Boston chỉ huy "buổi hoà nhạc khổng lồ" hơn 1.000 người diễn |
| 5/4/1874 | *Die Fledermaus* ra mắt ở Theater an der Wien |
| 1885 | *Der Zigeunerbaron* |
| 1886–1887 | Bỏ quốc tịch Áo và Công giáo, thành công dân Sachsen-Coburg-Gotha để cưới Adele |
| 3/6/1899 | Mất ở Vienna vì viêm phổi – màng phổi, khi đang viết ballet *Aschenbrödel* |

## Âm nhạc và đóng góp
Strauss viết hơn 500 valse, polka, quadrille, hành khúc, cùng nhiều operetta và một [[ballet]]. Ông được gọi là "Vua valse" (cha ông cũng từng mang danh này). Valse của ông thường là chuỗi nhiều valse nhỏ có mở đầu và coda, đủ sức đứng trong phòng hoà nhạc chứ không chỉ để khiêu vũ. Ngoài *Dòng Danube xanh* còn có *Kaiser-Walzer*, *Chuyện rừng Vienna*, *Frühlingsstimmen*, *Tritsch-Tratsch-Polka*. *Die Fledermaus* là operetta Vienna kinh điển. Wagner thích valse *Wein, Weib und Gesang*; Brahms là bạn thân. Nhạc của ông là phần chính của Hoà nhạc Năm mới Vienna từ khi Clemens Krauss khởi xướng chương trình toàn Strauss năm 1929. Xem thêm [[thoi-ky-lang-man]].

## Giai thoại và điều chưa chắc
- **Bị cha đánh vì tập violin**: Wikipedia tiếng Anh kể cha bắt gặp, quất roi và nói sẽ "đánh cho hết nhạc"; giọng văn dè dặt ("có vẻ"). Bài tiếng Đức chỉ ghi cha muốn ông làm công chức và mẹ là người cho ông học nhạc.
- ***Dòng Danube xanh* thất bại lúc đầu?** Chuyện này rất phổ biến. Nguồn đã đối chiếu chỉ ghi bản hợp xướng ra mắt 15/2/1867 và bản thuần khí nhạc ở Triển lãm Paris 1867 "rất thành công"; không có chứng cứ trong nguồn cho chữ "thất bại".
- **Brahms và chiếc quạt**: Brahms chép vài ô nhịp *Danube* lên quạt của bà Adele và ghi "Tiếc thay, KHÔNG phải của Johannes Brahms". Wikipedia nói chuyện "được kể trong tiểu sử cả hai người".
- **Tóc giả từ chó**: ở Mỹ, người hầu cắt lông con chó Newfoundland đen của ông tặng các bà hâm mộ thay tóc ông. Chỉ một nguồn.
- **Ngày nhập quốc tịch**: Wikipedia tiếng Anh ghi tháng 1/1887, tiếng Đức ghi 24/6/1886.
- **Gốc Do Thái**: ông cố bên nội là người Do Thái Hungary, điều chế độ Quốc xã tìm cách che giấu.

## Bối cảnh
Vienna thời Franz Joseph: vũ hội triều đình, quán nhảy ở ngoại ô, Prater. Gia đình Strauss là cả một "doanh nghiệp" với ba anh em Johann, Josef, Eduard cùng chỉ huy dàn nhạc. Ông viết *Danube* tại căn hộ Praterstraße 54, nay là bảo tàng.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Johann Strauss II', 'https://en.wikipedia.org/wiki/Johann_Strauss_II'],
      ['Wikipedia (tiếng Đức): Johann Strauss (Sohn)', 'https://de.wikipedia.org/wiki/Johann_Strauss_(Sohn)'],
      ['Wikipedia (tiếng Anh): The Blue Danube', 'https://en.wikipedia.org/wiki/The_Blue_Danube'],
      ['Wikipedia (tiếng Anh): Die Fledermaus', 'https://en.wikipedia.org/wiki/Die_Fledermaus'],
    ],
  },
  'Georges Bizet': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 25/10/1838 | Sinh ở Paris, khai sinh Alexandre César Léopold, rửa tội tên Georges |
| 1853 | Vào lớp sáng tác của Fromental Halévy ở Nhạc viện Paris |
| 1855 | *Giao hưởng giọng Đô trưởng* (viết năm 17 tuổi) |
| 1857 | Đoạt Prix de Rome; cũng thắng cuộc thi operetta của Offenbach (*Le docteur Miracle*) |
| 1858–1860 | Ở Villa Medici, Roma |
| 1863 | *Les pêcheurs de perles* |
| 1869 | Cưới Geneviève Halévy, con gái thầy cũ |
| 1872 | Nhạc cho vở kịch *L'Arlésienne* của Daudet; tổ khúc rút ra được ưa chuộng ngay |
| 3/3/1875 | *Carmen* ra mắt ở Opéra-Comique, Paris; cùng sáng được công bố tặng Bắc Đẩu Bội tinh |
| 3/6/1875 | Mất ở Bougival, 36 tuổi, rạng sáng sau đêm diễn *Carmen* thứ 33, đúng ngày kỷ niệm cưới |
| 23/10/1875 | *Carmen* ở Vienna, bản recitative của Guiraud, thành công lớn |

## Âm nhạc và đóng góp
Bizet là nghệ sĩ piano xuất sắc nhưng hiếm biểu diễn. Sự nghiệp ông long đong; chỉ *Carmen* (lời Meilhac và Halévy theo truyện Mérimée) mới đưa ông vào lịch sử, và nay là một trong những [[opera]] được diễn nhiều nhất. Ông chưa từng đến Tây Ban Nha nhưng gợi được Andalusia bằng nhịp điệu và màu dàn nhạc. Motif "số phận" của Carmen xuyên suốt vở. *Carmen* được coi là đỉnh cao thể loại opéra comique và báo trước trào lưu hiện thực (verismo) ở Ý. *Giao hưởng giọng Đô* và tổ khúc *L'Arlésienne*, *Jeux d'enfants* là những tác phẩm khí nhạc còn được diễn (xem [[giao-huong]]).

## Giai thoại và điều chưa chắc
- **Đêm ra mắt Carmen**: kéo dài bốn tiếng rưỡi, màn cuối bắt đầu sau nửa đêm. Báo chí phần lớn chê: nhân vật chính bị coi là "hiện thân của thói hư", nhạc bị chê "khô và tối", "Wagner quá". Công chúng hờ hững; nhiều đêm diễn cho khán phòng vắng nửa dù phát vé không. Nhưng không phải "chìm nghỉm": vở vẫn diễn đủ 33 đêm trước khi ông mất, và Massenet, Saint-Saëns có lời chúc mừng.
- **Chết vì buồn, hay tự tử?** Cái chết đột ngột cùng tâm trạng suy sụp làm nảy tin đồn tự tử. Nguyên nhân chưa bao giờ xác định chắc; bác sĩ sau đó kết luận "biến chứng tim của thấp khớp cấp". Trước đó ông đi bơi ở sông Seine dù đang ốm họng.
- **Habanera là dân ca?** Không: nó dựa trên bài "El arreglito" của Sebastián Yradier. Bizet tưởng là dân ca, biết ra thì ghi chú tên Yradier vào bản in.
- **Gounod "bị ăn cắp"**: theo một lời kể, Gounod nói bỏ các điệu Tây Ban Nha và phần của ông ra thì Bizet chỉ còn "nước sốt". Chỉ là lời kể.
- **Bismarck xem 27 lần, Brahms xem 20 lần**: đều là chuyện "được kể" (Wikipedia dùng chữ "apparently", "reportedly").

## Bối cảnh
Opéra-Comique là nhà hát gia đình, nơi người Paris đưa con đi xem mắt; một nhân vật nữ phóng túng bị giết trên sân khấu là chuyện gây sốc. Paris vừa qua vây hãm 1870–1871 và Công xã; Bizet ở lại thành phố bị vây, phục vụ trong Vệ binh quốc gia. Bougival, nơi ông mất, là làng nghỉ ven sông Seine phía tây Paris.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Georges Bizet', 'https://en.wikipedia.org/wiki/Georges_Bizet'],
      ['Wikipedia (tiếng Đức): Georges Bizet', 'https://de.wikipedia.org/wiki/Georges_Bizet'],
      ['Wikipedia (tiếng Anh): Carmen', 'https://en.wikipedia.org/wiki/Carmen'],
    ],
  },
  'Arthur Sullivan': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 13/5/1842 | Sinh ở Lambeth, London; cha là trưởng ban nhạc quân đội |
| 1854 | Vào dàn hợp xướng thiếu nhi Chapel Royal |
| 1856 | Nhận học bổng Mendelssohn đầu tiên của Học viện Âm nhạc Hoàng gia, năm 14 tuổi |
| 1858–1861 | Học ở Nhạc viện Leipzig; bài tốt nghiệp là nhạc cho *The Tempest* |
| 1867 | Cùng George Grove sang Vienna, tìm thấy bản thảo nhạc *Rosamunde* của Schubert |
| 1871 | *Thespis*, vở đầu với W. S. Gilbert |
| 1875 | *Trial by Jury* do Richard D'Oyly Carte đặt |
| 1878 · 1879 | *H.M.S. Pinafore*; *The Pirates of Penzance* |
| 1881 | Nhà hát Savoy khai trương, xây bằng lợi nhuận các vở chung |
| 22/5/1883 | Được Nữ hoàng Victoria phong hiệp sĩ |
| 1885 | *The Mikado* |
| 4/1890 | "Vụ tấm thảm": Gilbert kiện Carte và Sullivan |
| 31/1/1891 | Grand opera *Ivanhoe* |
| 22/11/1900 | Mất ở Westminster vì suy tim |

## Âm nhạc và đóng góp
Sullivan nổi tiếng nhất với 14 vở opera hài cùng Gilbert ("Savoy operas"), khuôn mẫu cho nhạc kịch Anh – Mỹ về sau. Ông viết giai điệu trước cho ca sĩ, phối khí sau khi xem dàn dựng, và chú trọng để từng âm tiết của lời Gilbert đều nghe rõ. Ngoài ra có *Giao hưởng Ireland*, concerto cello, cantata *The Golden Legend*, thánh ca "Onward, Christian Soldiers" và ca khúc "The Lost Chord". Mendelssohn là ảnh hưởng lớn nhất; về sau có dấu Liszt trong hoà âm cromatic. Hanslick và Saint-Saëns đánh giá cao các vở Savoy. Xem thêm [[opera]], [[oratorio-cantata-passion]].

## Giai thoại và điều chưa chắc
- **Vụ tấm thảm**: không chỉ là chuyện tiền thảm hành lang; Gilbert phản đối cả cách Carte tính chi phí, còn Sullivan đứng về phía Carte và ký một bản khai có thông tin sai về nợ cũ. Ba người hoà lại năm 1892.
- **"The Lost Chord"**: viết bên giường bệnh của anh trai Fred năm 1877 (Wikipedia tiếng Anh).
- **Hiệp sĩ nên bỏ hài kịch**: giới chuyên môn cho rằng một "nhạc sĩ hiệp sĩ" không nên viết opera hài; chính Sullivan cũng muốn viết nghiêm túc hơn, dẫn tới *Ivanhoe*, vở diễn đầu thành công nhưng hiếm khi dựng lại.
- **Đời tư**: mối tình dài nhất với bà Fanny Ronalds phải giữ kín vì bà chưa ly dị; nhật ký ông ghi nhiều chi tiết, cả đam mê cờ bạc ở sòng bài Pháp.

## Bối cảnh
London thời Victoria: phòng khách trung lưu hát ballad, các liên hoan hợp xướng lớn (Leeds, Birmingham), nhà hát West End. Savoy là nhà hát đầu tiên ở London thắp hoàn toàn bằng đèn điện.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Arthur Sullivan', 'https://en.wikipedia.org/wiki/Arthur_Sullivan'],
      ['Wikipedia (tiếng Đức): Arthur Sullivan', 'https://de.wikipedia.org/wiki/Arthur_Sullivan'],
    ],
  },
  'Jules Massenet': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/5/1842 | Sinh ở Montaud, nay thuộc Saint-Étienne |
| 1853 | Vào Nhạc viện Paris năm 11 tuổi |
| 1863 | Đoạt Prix de Rome |
| 1866 | Cưới Ninon (Louise-Constance de Gressy) |
| 1870–1871 | Phục vụ Vệ binh quốc gia cùng Bizet |
| 1878–1896 | Giáo sư sáng tác ở Nhạc viện Paris; học trò có Chausson, Charpentier, Hahn, Pierné |
| 1/1884 | *Manon* ra mắt ở Opéra-Comique, thành công lớn |
| 2/1892 | *Werther* ra mắt ở Hofoper Vienna; bản Paris tháng 1/1893 |
| 1894 | *Thaïs* viết cho Sibyl Sanderson |
| 1910 | *Don Quichotte* ở Monte Carlo |
| 13/8/1912 | Mất ở Paris vì ung thư bụng; tang lễ riêng tư, không nhạc, ở Égreville |

## Âm nhạc và đóng góp
Massenet viết hơn 30 [[opera]] và là nhà soạn opera hàng đầu nước Pháp cuối thế kỷ 19. *Manon*, cùng *Faust* của Gounod và *Carmen* của Bizet, là trụ cột kho opera Pháp. Phong cách của ông mềm mại, trữ tình, giàu màu dàn nhạc, ưa đề tài xa lạ (Ai Cập cổ, Ấn Độ, Tây Ban Nha). Ông chịu ảnh hưởng Gounod, Thomas, Meyerbeer, Berlioz và nhất là Wagner, nhưng không theo hẳn Wagner. "Méditation" cho violin trong *Thaïs* là đoạn được biểu diễn rời phổ biến nhất.

## Giai thoại và điều chưa chắc
- **"Wagner Pháp"**: nhiều nhà phê bình đương thời thấy *Esclarmonde* có màu Wagner. Bernard Shaw (1885) lại cho rằng *Manon* "không có chút Wagner nào"; nhà phê bình Anne Feeney nhận xét ông hiếm khi lặp chủ đề, nên giống Wagner chỉ ở lối hát nói và dàn kèn.
- **"Nghe Manon là nghe hết ông"**: câu của từ điển Grove 1954; Andrew Porter năm 1994 gọi là "phi lý".
- **Ngại đêm ra mắt**: theo Wikipedia, về già ông không đến dự đêm đầu vở của mình, và từng từ chối ra chào khán giả ở London. Ông tự gọi mình là "người của lò sưởi".
- **Lucy Arbell**: mối quan hệ cuối đời với nữ ca sĩ này bị Rodney Milnes (Grove) mô tả là cô "đào mỏ"; đây là một ý kiến, không phải kết luận chung.

## Bối cảnh
Paris Đệ tam Cộng hoà: Opéra và Opéra-Comique là hai nhà hát nhà nước, Nhạc viện là trung tâm quyền lực âm nhạc. Massenet sống giản dị ở phố Vaugirard và nhà quê ở Égreville, tránh giới thượng lưu.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Jules Massenet', 'https://en.wikipedia.org/wiki/Jules_Massenet'],
      ['Wikipedia (tiếng Đức): Jules Massenet', 'https://de.wikipedia.org/wiki/Jules_Massenet'],
    ],
  },
  'Ruggero Leoncavallo': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 23/4/1857 | Sinh ở Napoli; cha là thẩm phán |
| tuổi thơ | Sống ở Montalto Uffugo (Calabria) theo nhiệm sở của cha |
| 1876–1877 | Học văn chương với nhà thơ Carducci ở Đại học Bologna |
| 1879–1882 | Làm nhạc sĩ riêng cho em trai Khedive ở Cairo; bỏ chạy khi Anh can thiệp |
| 1882–1888 | Đệm đàn ở các quán cà phê Paris |
| 21/5/1892 | *Pagliacci* ra mắt ở Teatro Dal Verme, Milano, Toscanini chỉ huy |
| 6/5/1897 | *La bohème* của ông ra mắt ở La Fenice, Venezia |
| 1900 | *Zazà* |
| 1904 | Thu đĩa "Mattinata" cùng Caruso (ông đệm piano) |
| 9/8/1919 | Mất ở Montecatini Terme |

## Âm nhạc và đóng góp
Leoncavallo là đại diện của verismo, opera hiện thực về đời thường, bạo lực, giới bình dân. *Pagliacci* là vở "kịch trong kịch": anh hề Canio giết vợ ngay trên sân khấu đoàn hát rong. Aria "Vesti la giubba" qua giọng Caruso được cho là đĩa hát đầu tiên bán được một triệu bản (có lẽ cộng nhiều lần thu). Ông tự viết lời cho phần lớn vở của mình, từng góp lời cho *Manon Lescaut* của Puccini. Ngoài *Pagliacci*, ít tác phẩm của ông còn được diễn. Xem [[opera]].

## Giai thoại và điều chưa chắc
- **Chuyện có thật?** Leoncavallo khẳng định *Pagliacci* lấy từ một vụ án năm 1865 ở Montalto Uffugo: người hầu nhà ông bị giết, cha ông là thẩm phán điều tra. Đây là lời chính ông nói.
- **Kiện đạo văn**: nhà văn Pháp Catulle Mendès kiện vì thấy giống vở kịch *La Femme de Tabarin* (1887) của mình; Leoncavallo nói không biết vở này; rồi lại có người tố kịch của Mendès giống một vở Tây Ban Nha năm 1867. Mendès rút đơn.
- **Hai vở *La bohème***: năm 1893 hai ông cùng viết theo truyện Murger; Leoncavallo nói mình có "quyền ưu tiên". Puccini đáp "Hãy để công chúng phán xử", và vở của Puccini (1896) thắng.
- ***Edipo re***: lâu nay coi là vở cuối, nhưng biểu tượng Konrad Dryden cho rằng có thể không do ông soạn, mà người vợ goá thuê người ghép từ nhạc cũ.

## Bối cảnh
Nước Ý mới thống nhất, Milano là thủ đô xuất bản nhạc với hai nhà Ricordi và Sonzogno cạnh tranh gắt. Thành công của *Cavalleria rusticana* năm 1890 khiến ông viết ngay một vở verismo để bước vào cuộc đua.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Ruggero Leoncavallo', 'https://en.wikipedia.org/wiki/Ruggero_Leoncavallo'],
      ['Wikipedia (tiếng Đức): Ruggero Leoncavallo', 'https://de.wikipedia.org/wiki/Ruggero_Leoncavallo'],
      ['Wikipedia (tiếng Anh): Pagliacci', 'https://en.wikipedia.org/wiki/Pagliacci'],
      ['Wikipedia (tiếng Anh): Giacomo Puccini', 'https://en.wikipedia.org/wiki/Giacomo_Puccini'],
    ],
  },
  'Giacomo Puccini': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 22/12/1858 | Sinh ở Lucca, trong một dòng họ nhạc sĩ nhà thờ năm đời |
| 1876 | Đi bộ từ Lucca sang Pisa xem *Aida* của Verdi |
| 1880 | Tốt nghiệp trường nhạc Pacini ở Lucca; vào Nhạc viện Milano, học Ponchielli, ở chung phòng với Mascagni |
| 31/5/1884 | Opera đầu tay *Le Villi* ở Teatro Dal Verme |
| 2/2/1893 | *Manon Lescaut* ra mắt ở Turin, một tuần trước *Falstaff* của Verdi |
| 1896 | *La bohème* ở Turin, Toscanini chỉ huy |
| 1900 | *Tosca* |
| 25/2/1903 | Bị thương nặng trong tai nạn ô tô |
| 17/2/1904 | *Madama Butterfly* thất bại ở La Scala; bản sửa ở Brescia tháng 5 thành công |
| 10/12/1910 | *La fanciulla del West* ra mắt ở Metropolitan Opera, New York, với Caruso |
| 1917 · 1918 | *La rondine* (Monte Carlo); *Il trittico* (New York) |
| 29/11/1924 | Mất ở Bruxelles sau điều trị ung thư họng |
| 25/4/1926 | *Turandot*, phần cuối do Franco Alfano viết tiếp, ra mắt ở La Scala |

## Âm nhạc và đóng góp
Puccini là nhà soạn [[opera]] Ý thành công nhất sau Verdi. Ông đi từ truyền thống lãng mạn sang verismo (*Tosca*), dùng các motif đặc trưng nhân vật, so sánh được với leitmotif, nhưng giữ giai điệu hát dài theo lối Ý. Ông chọn đề tài rất kỹ, can thiệp sâu vào lời. Ông đưa chất liệu Nhật vào *Butterfly*, ngũ cung Trung Hoa vào *Turandot*. *La bohème*, *Tosca*, *Madama Butterfly*, *Turandot* luôn ở nhóm vở được diễn nhiều nhất thế giới.

## Giai thoại và điều chưa chắc
- **Đi bộ xem *Aida***: chính Puccini kể lại năm 1903 rằng đã đi bộ khoảng 40 km đi về (Wikipedia tiếng Đức). Đây là lời tự thuật, chưa có tài liệu năm 1876 xác nhận.
- **Đêm *Butterfly* 1904**: Wikipedia ghi thất bại "có lẽ phần lớn vì tập chưa đủ"; khán giả la ó khi kimono của Rosina Storchio bay lên.
- **"Tại đây maestro đã ngừng bút"**: đêm ra mắt *Turandot*, Toscanini dừng giữa màn 3 sau cái chết của Liù. Lời ông nói được ghi khác nhau: "Opera kết thúc ở đây, vì tại điểm này maestro đã mất"; báo La Stampa ghi "…bỏ dở vì cái chết của Puccini tội nghiệp"; câu "maestro đã đặt bút xuống" là một dị bản khác.
- **Vụ Doria Manfredi** (1909): bà Elvira tố cô hầu ngoại tình với Puccini; cô tự tử, khám nghiệm cho thấy cô còn trinh. Tài liệu tìm được năm 2007 gợi ý Puccini quan hệ với Giulia, chị họ của Doria.
- **Đảng viên phát xít?** Năm 1923 chi bộ Viareggio gửi ông thẻ đảng viên danh dự; bằng chứng ông thực sự là đảng viên "mơ hồ".

## Bối cảnh
Lucca là thành phố tường thành ở Toscana; nhà Puccini làm nhạc cho nhà thờ San Martino nhiều đời. Từ 1891 ông sống ở Torre del Lago bên hồ Massaciuccoli, mê săn vịt trời. Nhà xuất bản Giulio Ricordi là người đỡ đầu suốt sự nghiệp.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Giacomo Puccini', 'https://en.wikipedia.org/wiki/Giacomo_Puccini'],
      ['Wikipedia (tiếng Đức): Giacomo Puccini', 'https://de.wikipedia.org/wiki/Giacomo_Puccini'],
      ['Wikipedia (tiếng Anh): Turandot', 'https://en.wikipedia.org/wiki/Turandot'],
    ],
  },
  'Pietro Mascagni': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 7/12/1863 | Sinh ở Livorno; cha làm nghề bánh mì |
| 1876 | Học nhạc với Alfredo Soffredini ở Livorno |
| 1882 | Vào Nhạc viện Milano; quen Puccini; bỏ học năm 1885 |
| 1885–1886 | Chỉ huy cho các đoàn operetta lưu diễn |
| 1886–1889 | Dạy nhạc ở thị trấn Cerignola (Apulia) |
| 1889 | Gửi *Cavalleria rusticana* dự cuộc thi opera một màn của nhà Sonzogno; thắng 72 tác phẩm khác |
| 17/5/1890 | *Cavalleria rusticana* ra mắt ở Teatro Costanzi, Roma, thành công vang dội |
| 31/10/1891 | *L'amico Fritz* |
| 22/11/1898 | *Iris* |
| 1932 | Gia nhập Đảng Phát xít |
| 16/1/1935 | *Nerone* ở La Scala |
| 2/8/1945 | Mất ở khách sạn Plaza, Roma; chính quyền không dự tang lễ |

## Âm nhạc và đóng góp
*Cavalleria rusticana*, dựa trên truyện của Giovanni Verga, khai mở trào lưu verismo trong [[opera]] Ý: bối cảnh làng quê Sicilia, ghen tuông, quyết đấu, kết bằng cái chết; khúc gian tấu (intermezzo) nổi tiếng thành nhạc độc lập. Nó thường được diễn chung đêm với *Pagliacci*. Mascagni hay bị gọi là "người một vở", nhưng *L'amico Fritz* và *Iris* vẫn còn trong kho tiết mục ở Ý. Ông cũng là nhạc trưởng được mời khắp nơi. Ông viết 15 opera, một operetta, thơ giao hưởng *A Giacomo Leopardi* (xem [[tho-giao-huong]]).

## Giai thoại và điều chưa chắc
- **Vợ lén gửi bài dự thi**: bài *Cavalleria* trên Wikipedia tiếng Anh kể ông nản, cất bản thảo vào ngăn kéo, vợ là Lina lấy ra gửi vào ngày cuối. Bài tiểu sử tiếng Anh và tiếng Đức chỉ ghi ông gửi bài dự thi; người biên soạn chưa thấy nguồn gốc của chuyện này.
- **Đêm ra mắt**: bài *Cavalleria* ghi nhà hát "vắng nửa" lúc đầu, nhưng vở thành công rực rỡ; nhờ tiền bản quyền, theo Wikipedia tiếng Đức, ông không bao giờ phải lo tiền.
- **Được chú nhận làm con nuôi để tránh học luật**: chỉ thấy trong Wikipedia tiếng Đức.
- **Thái độ chính trị**: ông vào đảng phát xít như nhiều nhạc sĩ đương thời; điều này khiến ông bị lạnh nhạt sau 1945.

## Bối cảnh
Livorno là thương cảng Toscana; Mascagni lớn lên trong gia đình thợ thủ công. Cuộc thi của nhà xuất bản Sonzogno, đối thủ của Ricordi, là cánh cửa cho nhạc sĩ trẻ không quen biết. Những năm cuối ông sống ở khách sạn Plaza giữa Roma.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Pietro Mascagni', 'https://en.wikipedia.org/wiki/Pietro_Mascagni'],
      ['Wikipedia (tiếng Đức): Pietro Mascagni', 'https://de.wikipedia.org/wiki/Pietro_Mascagni'],
      ['Wikipedia (tiếng Anh): Cavalleria rusticana', 'https://en.wikipedia.org/wiki/Cavalleria_rusticana_(opera)'],
    ],
  },
}

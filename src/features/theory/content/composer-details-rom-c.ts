import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Lãng mạn muộn Đức – Áo (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_C: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Anton Bruckner': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 4/9/1824 | Sinh ở Ansfelden, gần Linz (Thượng Áo); cha là thầy giáo làng kiêm người dạy nhạc đầu tiên |
| 1837 | Cha mất; vào làm ca đoàn thiếu nhi ở tu viện Augustinô Sankt Florian |
| 1848 | Làm organist ở Sankt Florian (thành chức chính thức năm 1851) |
| 1855 | Thắng cuộc thi chọn organist nhà thờ chính toà Linz; bắt đầu học hàm thụ đối âm với Simon Sechter ở Vienna |
| 1861–1863 | Học sáng tác tự do với Otto Kitzler, người đưa ông đến với nhạc Wagner |
| 6/1865 | Gặp Wagner ở München nhân buổi diễn *Tristan und Isolde* |
| 6–8/1867 | Ba tháng chữa khủng hoảng thần kinh ở dưỡng đường nước lạnh Bad Kreuzen |
| 1868 | Thay Sechter dạy lý thuyết ở Nhạc viện Vienna; chuyển hẳn về Vienna |
| 1869, 1871 | Biểu diễn organ thành công ở Nancy, Paris rồi London (Royal Albert Hall, Crystal Palace) |
| 9/1873 | Đến Bayreuth; Wagner nhận đề tặng *Giao hưởng số 3* |
| 1875 | Giảng dạy ở Đại học Vienna |
| 1877 | *Giao hưởng số 3* ra mắt ở Vienna — thất bại lớn nhất đời ông |
| 1884 | *Giao hưởng số 7* ra mắt ở Leipzig dưới tay Arthur Nikisch — bước ngoặt danh tiếng |
| 1886 | Hoàng đế Franz Joseph tặng huân chương Franz Joseph |
| 1892 | *Giao hưởng số 8* (bản sửa) thành công ở Vienna dưới tay Hans Richter |
| 11/10/1896 | Mất ở Vienna, tại nhà ở khu Belvedere; chôn trong hầm mộ Sankt Florian, ngay dưới cây đàn organ ông yêu |

## Âm nhạc và đóng góp
Bruckner là một trong số ít nhà soạn nhạc dồn gần hết sức vào [[giao-huong]]: 11 bản nếu tính cả "Giao hưởng học tập" Fa thứ và bản "số 0", bản cuối là *số 9* Rê thứ dang dở (1887–1896). Ông lấy *Giao hưởng số 9* của Beethoven làm điểm xuất phát, giữ khung bốn chương nhưng mở rộng [[hinh-thuc-sonata]] thành ba nhóm chủ đề, cao trào dâng lên – rút lui – dâng lên nữa, khối kèn đồng như tiếng [[organ-ong]], và dùng kèn tuba Wagner trong ba bản cuối. Thánh nhạc của ông gồm các [[thanh-le-va-requiem]] (Mi thứ, Fa thứ), *Te Deum*, khoảng bốn mươi motet. Hoà âm giàu chất cromatic của chương chậm *số 9* thường được coi là báo trước Schoenberg. Ông thuộc dòng [[thoi-ky-lang-man]] Đức – Áo muộn, nối Schubert, Beethoven và Wagner.

## Giai thoại và điều chưa chắc
- **Phe Wagner bất đắc dĩ**: Bruckner không tham gia tranh luận phe phái, nhưng việc tôn sùng Wagner và đề tặng *số 3* khiến ông bị xếp vào phe "tiến bộ". Hanslick từng khen *Giao hưởng số 1* (1868), rồi quay sang chống đối gay gắt từ khoảng 1877.
- **Bayreuth 1873**: Wikipedia tiếng Đức kể Bruckner hồi hộp leo lên giàn giáo nhà hát đang xây, rồi sau một buổi nhậu với Wagner thì quên mất Wagner nhận đề tặng bản nào, phải viết thư hỏi lại. Đây là giai thoại, chưa đối chiếu được với thư từ gốc.
- **Đồng tiền cho Richter**: sau buổi tập *số 4* năm 1881, Bruckner dúi cho nhạc trưởng Hans Richter một đồng thaler "để uống bia"; Richter kể lại và đeo đồng tiền ở dây đồng hồ. Chuyện do chính Richter kể.
- **"Tặng Chúa"**: câu nói đề tặng *số 9* cho "Chúa nhân từ, nếu Người nhận" không có bút tích của Bruckner.
- **Vấn đề Bruckner**: nhiều bản giao hưởng có vài phiên bản do ông và học trò sửa; bài "The Bruckner Problem Simplified" của Deryck Cooke (1969) phổ biến cụm từ này. Ông sửa vì thiếu tự tin trước góp ý, hay vì chủ ý nghệ thuật, đến nay vẫn còn tranh luận.
- **Chứng đếm** và những lần cầu hôn không thành với các cô gái trẻ được nhắc nhiều; phim truyền hình của Ken Russell hư cấu lần ông nằm dưỡng đường.

## Bối cảnh
Bruckner lớn lên giữa nhà thờ và trường làng Thượng Áo, đời sống gắn với tu viện Sankt Florian và cây organ baroque lớn của nó. Khi lên Vienna, ông là người tỉnh lẻ sùng đạo giữa một thủ đô mà giới phê bình do Hanslick dẫn đầu chia hai phe Brahms và Wagner. Hans von Bülow gọi ông là "nửa thiên tài, nửa khờ khạo".
`,
    refs: [
      ['Wikipedia (tiếng Anh): Anton Bruckner', 'https://en.wikipedia.org/wiki/Anton_Bruckner'],
      ['Wikipedia (tiếng Đức): Anton Bruckner', 'https://de.wikipedia.org/wiki/Anton_Bruckner'],
      ['Wikipedia (tiếng Anh): War of the Romantics', 'https://en.wikipedia.org/wiki/War_of_the_Romantics'],
    ],
  },
  'Johannes Brahms': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 7/5/1833 | Sinh ở Hamburg; cha Johann Jakob chơi contrebasse và kèn horn |
| 1840–1848 | Học piano với Otto Cossel, rồi với Eduard Marxsen (học trò dòng Beethoven – Schubert) |
| 1850 | Gặp nghệ sĩ violin Hungary Ede Reményi, làm quen nhạc "kiểu Digan" |
| 5/1853 | Lưu diễn với Reményi, gặp Joseph Joachim ở Hannover; sau đó gặp Liszt ở Weimar |
| 10/1853 | Đến Düsseldorf, được Robert và Clara Schumann đón; Schumann đăng bài "Neue Bahnen" (Những con đường mới) trên *Neue Zeitschrift für Musik* |
| 1854 | Schumann tự tử hụt, vào dưỡng đường Endenich; Brahms ở Düsseldorf lo việc nhà cho Clara, tặng bà *Biến tấu chủ đề Schumann* Op. 9 |
| 1857–1860 | Làm nhạc sĩ triều đình nhỏ Detmold các mùa đông |
| 22/1/1859 | *Concerto piano số 1* ra mắt ở Hannover; buổi diễn lại ở Leipzig ngày 27/1 bị huýt sáo |
| 1860 | Cùng Joachim soạn tuyên ngôn chống "Trường phái Đức mới"; bản nháp lộ ra báo và bị nhại |
| 1862–1863 | Đến Vienna; làm chỉ huy Wiener Singakademie |
| 10/4/1868 | *Requiem Đức* ra mắt trọn vẹn ở nhà thờ Bremen |
| 1872–1875 | Giám đốc các buổi hoà nhạc của Gesellschaft der Musikfreunde |
| 4/11/1876 | *Giao hưởng số 1* Đô thứ ra mắt ở Karlsruhe, Felix Otto Dessoff chỉ huy |
| 1877–1885 | *Giao hưởng số 2*, *Concerto violin* (tặng Joachim), *Concerto piano số 2*, giao hưởng số 3 và 4 |
| 1889 | Thành công dân danh dự Hamburg; ghi âm thử cho người của Edison |
| 20/5/1896 | Clara Schumann mất; Brahms viết *Bốn bài ca nghiêm trang* Op. 121 |
| 3/4/1897 | Mất ở Vienna vì ung thư; lần xuất hiện cuối là buổi Richter chỉ huy *Giao hưởng số 4* (7/3/1897) |

## Âm nhạc và đóng góp
Brahms đưa cảm xúc [[thoi-ky-lang-man]] vào các khuôn [[thoi-ky-co-dien]]: [[hinh-thuc-sonata]], [[bien-tau]] (*Biến tấu chủ đề Handel*, *Biến tấu chủ đề Haydn*), passacaglia cuối *Giao hưởng số 4*, [[fugue]]. Ông nghiên cứu Schütz, Palestrina, Bach, Handel; đối âm dày, nghịch âm rơi vào phách mạnh, nhịp chéo và hemiola là dấu tay của ông. Tác phẩm chính: bốn [[giao-huong]], hai concerto piano, concerto violin, concerto đôi ([[hinh-thuc-concerto]]), *Requiem Đức* (lời ông tự chọn từ Kinh Thánh bản Luther, không theo lễ cầu hồn Latinh — xem [[thanh-le-va-requiem]]), khối [[nhac-thinh-phong]] lớn, hàng trăm [[lied]], *Vũ khúc Hungary* và các [[tieu-pham-piano]] muộn Op. 116–119 mà Hanslick gọi là "độc thoại bên đàn piano". Hanslick đề cao ông như đại diện của âm nhạc thuần tuý (xem [[triet-hoc-lang-man-ve-am-nhac]]).

## Giai thoại và điều chưa chắc
- **"Neue Bahnen"**: Wikipedia tiếng Anh ghi bài đăng số ra ngày 28/10/1853; Wikipedia tiếng Đức ghi 25/10/1853. Schumann gọi chàng trai 20 tuổi là người "được định để diễn tả thời đại theo cách cao nhất". Chính Brahms viết cho Schumann rằng lời khen ấy gây kỳ vọng mà ông không biết làm sao đáp ứng.
- **"Giao hưởng số 10 của Beethoven"**: câu này của nhạc trưởng Hans von Bülow, năm 1877, không phải của Hanslick. Chủ đề chương cuối *số 1* giống chủ đề "Khúc hoan ca" của Beethoven; khi có người nhắc, Brahms được kể là đáp rằng "con lừa nào cũng thấy". Hanslick ủng hộ Brahms nhưng lại thấy *số 1* hơi kinh viện.
- **Ngày ra mắt *số 1***: phần lớn nguồn ghi 4/11/1876; một đoạn trong Wikipedia tiếng Đức ghi 27/11/1876 — có lẽ nhầm, cần đối chiếu.
- **"Ba chữ B"**: Bülow xếp Brahms sau Bach và Beethoven; Wagner chế giễu cách xếp này.
- **Chiến tranh Lãng mạn**: Brahms thực ra quý nhạc Wagner, từng giúp chuẩn bị các buổi hoà nhạc của Wagner ở Vienna. Sau vụ tuyên ngôn 1860 ông không bao giờ tranh luận công khai nữa; cái gọi là "phe Brahms" phần lớn do Hanslick và giới phê bình dựng lên.
- **Chơi đàn ở quán rượu, nhà thổ**: chỉ là chuyện kể; nhiều học giả bác bỏ vì gia đình không quá nghèo và luật Hamburg cấm trẻ vị thành niên vào nơi đó. Wikipedia tiếng Đức coi việc ông chơi ở quán trọ ngoại ô năm 13 tuổi là gần như chắc chắn.
- **Brahms và Clara**: tình cảm sâu đậm, kéo dài đến khi Clara mất, nhưng không có bằng chứng đó là quan hệ tình ái. Brahms xin Clara huỷ thư của mình; bà đốt một phần cho đến khi con gái Marie can.
- **Ngủ gật khi Liszt chơi Sonata Si thứ**: chỉ là lời kể của Reményi.

## Bối cảnh
Hamburg là thành phố cảng buôn bán, nơi Brahms lớn lên trong khu nhà nghèo Gängeviertel. Từ 1862 ông sống ở Vienna, ngồi bàn quen ở quán bia cùng Hanslick và các nhà báo, nghỉ hè ở Lichtental, Ischl hay Wiesbaden. Đời độc thân, sống giản dị, ông có quanh mình một vòng bạn bè – học giả như Billroth, Joachim, Elisabeth von Herzogenberg, những người đọc bản thảo trước khi ông in.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Johannes Brahms', 'https://en.wikipedia.org/wiki/Johannes_Brahms'],
      ['Wikipedia (tiếng Đức): Johannes Brahms', 'https://de.wikipedia.org/wiki/Johannes_Brahms'],
      ['Wikipedia (tiếng Anh): Symphony No. 1 (Brahms)', 'https://en.wikipedia.org/wiki/Symphony_No._1_(Brahms)'],
      ['Wikipedia (tiếng Anh): War of the Romantics', 'https://en.wikipedia.org/wiki/War_of_the_Romantics'],
      ['Wikipedia (tiếng Anh): Clara Schumann', 'https://en.wikipedia.org/wiki/Clara_Schumann'],
      ['Wikipedia (tiếng Anh): Eduard Hanslick', 'https://en.wikipedia.org/wiki/Eduard_Hanslick'],
    ],
  },
  'Max Bruch': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 6/1/1838 | Sinh ở Köln; mẹ là ca sĩ, cha là luật sư làm phó giám đốc cảnh sát Köln |
| 1849 | Học lý thuyết ở Bonn; sau học Ferdinand Hiller |
| 1862–1864 | Ở Mannheim; opera *Die Loreley* |
| 20/11/1864 | Ra mắt cantata *Frithjof* ở Aachen |
| 1865–1867 | Giám đốc âm nhạc ở Koblenz; viết *Concerto violin số 1* với góp ý của Joseph Joachim |
| 7/1/1868 | *Concerto violin số 1* Sol thứ ra mắt ở dạng hiện nay |
| 1867–1870 | Nhạc trưởng triều đình Sondershausen; *Giao hưởng số 1* ra mắt 26/7/1868 |
| 4/11/1877 | *Concerto violin số 2* ra mắt ở Crystal Palace, London, với Sarasate |
| 3/1/1881 | Cưới ca sĩ Clara Tuczek |
| 1880–1883 | Chỉ huy Liverpool Philharmonic Society; viết *Kol Nidrei* |
| 15/3/1883 | *Fantasia Scotland* ra mắt với Sarasate |
| 1883 | Chuyển đến Breslau |
| 31/5/1891 | *Concerto violin số 3* ra mắt ở Düsseldorf |
| 1890/1892–1910 | Dạy sáng tác ở Berlin; học trò có Respighi, Vaughan Williams |
| 2/10/1920 | Mất tại nhà ở Berlin-Friedenau |

## Âm nhạc và đóng góp
Bruch thuộc dòng "Lãng mạn cổ điển" của Brahms, đối lập với Liszt – Wagner. Lúc sinh thời ông nổi tiếng chủ yếu nhờ nhạc hợp xướng: cantata *Frithjof*, các oratorio thế tục *Odysseus*, *Arminius*, *Achilleus* (xem [[oratorio-cantata-passion]]); Tovey và từ điển Grove đều cho rằng sở trường lớn nhất của ông là hợp xướng với dàn nhạc. Ngày nay ông được nhớ qua ba tác phẩm cho đàn dây độc tấu: *Concerto violin số 1* (mượn của Mendelssohn cách nối liền các chương, bỏ phần trình bày dàn nhạc kiểu cổ điển — xem [[hinh-thuc-concerto]]), *Fantasia Scotland* dùng dân ca Scotland, và *Kol Nidrei* cho cello. Ông còn viết ba [[giao-huong]], tám tiểu phẩm cho clarinet, viola và piano.

## Giai thoại và điều chưa chắc
- **Bán đứt concerto**: Bruch bán *Concerto số 1* cho nhà in Cranz với 250 thaler một lần, không có tiền bản quyền về sau, và cay đắng vì bị coi là "người của một bản concerto". Wikipedia tiếng Đức ghi tên nhà in khi thì Alwin Cranz, khi thì August Cranz.
- **Tổng phổ thất lạc**: từ tháng 4/1920 không ai biết tổng phổ ở đâu, đến 1968 mới xuất hiện lại. Chuyện hay kể rằng hai chị em dương cầm Sutro người Mỹ dính vào vụ này; các nguồn đã dùng chỉ nói hai chị em đặt ông viết *Concerto cho hai piano* (ra mắt Philadelphia 29/12/1916) rồi tự sửa tác phẩm và đòi quyền tác giả.
- **Bruch không phải người Do Thái**: *Kol Nidrei* khiến nhiều người tưởng vậy. Ông được nuôi theo đạo Tin Lành và tự phủ nhận. Dù vậy, thời Quốc xã nhạc ông vẫn bị hạn chế như "có thể là Do Thái".
- **Năm bắt đầu dạy ở Berlin**: Wikipedia tiếng Anh ghi 1890, tiếng Đức ghi được mời đảm nhận lớp cao học sáng tác từ 1/4/1892.
- **Tuổi vợ**: phần lớn nguồn ghi Clara Tuczek sinh 1854 (26 tuổi khi cưới), một số nói 16 tuổi.

## Bối cảnh
Bruch sống cuộc đời của một nhạc trưởng – nhà giáo đi từ thành phố này sang thành phố khác: các triều đình nhỏ như Sondershausen, hội hoà nhạc thị dân ở Liverpool và Breslau, rồi Viện Hàn lâm ở Berlin. Ông thấy mình bị Brahms che bóng, cay đắng với trào lưu Strauss – Reger, và về già bị coi là người lỗi thời.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Max Bruch', 'https://en.wikipedia.org/wiki/Max_Bruch'],
      ['Wikipedia (tiếng Đức): Max Bruch', 'https://de.wikipedia.org/wiki/Max_Bruch'],
    ],
  },
  'Engelbert Humperdinck': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1/9/1854 | Sinh ở Siegburg (tỉnh Rhein); cha là giáo viên trung học |
| 1872 | Học ở Nhạc viện Köln (Ferdinand Hiller) |
| 1876 | Học bổng sang München, học Franz Lachner và Josef Rheinberger |
| 1879 | Đoạt Giải Mendelssohn đầu tiên ở Berlin |
| 1880 | Đến gặp Wagner ở Napoli; được mời sang Bayreuth phụ dựng *Parsifal* |
| 1887 | Về Köln sau hai năm dạy ở Barcelona |
| 1890 | Dạy ở Nhạc viện Hoch, Frankfurt; em gái Adelheid Wette nhờ viết nhạc cho vở kịch cổ tích *Hänsel und Gretel* |
| 23/12/1893 | Opera *Hänsel und Gretel* ra mắt ở nhà hát cung đình Weimar, Richard Strauss chỉ huy |
| 25/9/1894 | Ra mắt Hamburg dưới tay Gustav Mahler |
| 1897 | Bản melodrama *Königskinder* dùng lối "nốt nói" |
| 1900 | Lên Berlin, phụ trách lớp cao học sáng tác |
| 28/12/1910 | Bản opera *Königskinder* ra mắt ở Metropolitan Opera, New York |
| 1911–1912 | Bị đột quỵ, tay trái liệt vĩnh viễn |
| 1914 | Ký "Tuyên ngôn 93 người" ủng hộ Đức đầu Thế chiến I |
| 27/9/1921 | Mất ở Neustrelitz |

## Âm nhạc và đóng góp
Humperdinck là học trò và trợ lý của Wagner, nhưng thành công lớn nhất lại đến từ sự giản dị: *Hänsel und Gretel* kết hợp dàn nhạc và kỹ thuật leitmotiv kiểu Wagner với giai điệu dân ca, có dùng cả bài dân ca có thật (*Suse, liebe Suse*, *Ein Männlein steht im Walde*). Ông gọi đó là "opera cổ tích" (Märchenoper — xem [[opera]]). Bản melodrama *Königskinder* 1897 được coi là lần đầu dùng Sprechgesang, nửa hát nửa nói, trước Schoenberg. Ông còn viết nhạc sân khấu cho Max Reinhardt; học trò có Kurt Weill.

## Giai thoại và điều chưa chắc
- **Danh thiếp "Hội Chén Thánh"**: theo Wikipedia tiếng Đức, ở Napoli năm 1880 người hầu của Wagner đuổi ông về, đến khi ông gửi danh thiếp ghi thêm "thành viên Hội Chén Thánh" (ý nhắc *Parsifal*) mới được gọi lại.
- **Thời gian ở Bayreuth**: Wikipedia tiếng Anh ghi 1880–1881; tiếng Đức ghi từ tháng 1/1881 đến tháng 7/1882.
- **Nguồn gốc *Hänsel und Gretel***: bài về nhạc sĩ (Wikipedia tiếng Anh) nói ông viết bốn bài hát cho buổi múa rối của các cháu; bài về vở opera nói em gái nhờ viết nhạc cho các bài hát Giáng sinh của con bà; tiếng Đức nói em gái nhờ viết nhạc cho vở kịch cổ tích cho trẻ em. Năm sáng tác cũng ghi khác nhau (bắt đầu 1890, hoặc 1891–1892).
- **Opera Giáng sinh**: buổi ra mắt hai ngày trước Giáng sinh; vở gắn với mùa Giáng sinh từ đó. Đây là vở đầu tiên Met phát thanh trọn vẹn (25/12/1931).
- **Nguyên nhân mất**: Wikipedia tiếng Anh ghi hai cơn đau tim; tiếng Đức ghi do lần đột quỵ thứ hai. Ông ngã bệnh khi xem buổi *Der Freischütz* do con trai Wolfram dàn dựng.
- **Sydney 1914**: chỉ "được cho là" đã nộp đơn làm giám đốc nhạc viện Sydney.
- Đừng nhầm với ca sĩ nhạc pop người Anh lấy cùng tên, sinh 1936.

## Bối cảnh
Thế giới của Humperdinck là vùng Rhein Công giáo, các nhạc viện Đức, và vòng thân cận Bayreuth thời *Parsifal*. Thành công của *Hänsel und Gretel* nằm trong thời Wilhelm II, khi các nhà hát cung đình và thành phố Đức tranh nhau dựng vở: chỉ vài tháng sau buổi ra mắt đã có khoảng 50 nhà hát đưa vào chương trình.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Engelbert Humperdinck (composer)', 'https://en.wikipedia.org/wiki/Engelbert_Humperdinck_(composer)'],
      ['Wikipedia (tiếng Đức): Engelbert Humperdinck', 'https://de.wikipedia.org/wiki/Engelbert_Humperdinck'],
      ['Wikipedia (tiếng Anh): Hansel and Gretel (opera)', 'https://en.wikipedia.org/wiki/Hansel_and_Gretel_(opera)'],
    ],
  },
  'Hugo Wolf': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 13/3/1860 | Sinh ở Windischgrätz, xứ Steiermark (nay Slovenj Gradec, Slovenia) |
| 1875 | Vào Nhạc viện Vienna; học cùng thời với Gustav Mahler |
| 1877 | Bị đuổi khỏi nhạc viện (xem dưới) |
| k. 1878 | Nhiễm giang mai, khoảng 18 tuổi (theo Wikipedia tiếng Đức) |
| 2/1883 | Wagner mất; Wolf viết *Zur Ruh, zur Ruh* |
| 1884–1887 | Viết phê bình cho tờ *Wiener Salonblatt*, nổi tiếng vì giọng cay độc |
| 1887 | *Serenade Ý* cho tứ tấu đàn dây |
| 1888 | Ở Perchtoldsdorf, viết 53 bài *Mörike-Lieder* trong cơn sáng tác dồn dập |
| 1889 | Các tập Lied theo thơ Eichendorff và Goethe |
| 1891 | *Spanisches Liederbuch*, nửa đầu *Italienisches Liederbuch* |
| 1896 | Hoàn thành *Italienisches Liederbuch*; opera *Der Corregidor* ra mắt ở Mannheim |
| 9/1897 | Phát bệnh tâm thần, phải vào dưỡng đường |
| 22/2/1903 | Mất trong nhà thương điên Hạ Áo ở Vienna vì liệt toàn thể tiến triển (di chứng giang mai) |

## Âm nhạc và đóng góp
Wolf viết hàng trăm [[lied]] và gần như chỉ được nhớ vì chúng. Ông chọn cả một tập thơ của một nhà thơ (Mörike, Eichendorff, Goethe, Heyse – Geibel) và đặt thơ lên trên nhạc: giọng hát bám sát nhịp lời, phần piano mang hoà âm cromatic hậu Wagner và vẽ hình ảnh của bài thơ. Cách nén cảm xúc trong vài chục ô nhịp khiến ông được so với Trường phái Vienna thứ hai. Ngoài Lied có thơ giao hưởng *Penthesilea* ([[tho-giao-huong]]), *Serenade Ý*, opera *Der Corregidor* và opera dang dở *Manuel Venegas*. Ông là gương mặt "Đức mới" của Lied, thuộc [[thoi-ky-lang-man]] muộn.

## Giai thoại và điều chưa chắc
- **Bị đuổi vì đâu**: Wikipedia tiếng Anh nói ông bị đuổi sau hai năm vì "vi phạm kỷ luật" (Wolf thì bảo tự bỏ vì nhạc viện quá bảo thủ); tiếng Đức nói năm 1877 ông bị đuổi vì một lá thư doạ dẫm đùa gửi hiệu trưởng mà có lẽ ông không viết.
- **Gặp Wagner**: Wolf kể Wagner khuyên ông kiên trì và thử các thể loại lớn. Nguồn chỉ dựa trên lời ông.
- **Ghét Brahms**: khi làm phê bình, ông đả kích Brahms thậm tệ; về sau giới ủng hộ Brahms đáp trả lại.
- **"Giám đốc Nhà hát Cung đình"**: theo Wikipedia tiếng Đức, năm 1897 Wolf tự nhận mình được bổ nhiệm làm giám đốc Nhà hát Opera Cung đình (chức Mahler đang giữ); chiếc xe gọi để đưa ông đi "nhậm chức" chở thẳng đến phòng khám thần kinh. Chuyện có trong các tiểu sử, nhưng người biên soạn chưa đối chiếu với hồ sơ bệnh án.
- **Hồ Traunsee**: ông định trầm mình nhưng bỏ dở, rồi tự xin vào nhà thương. Hai bài Wikipedia ghi trình tự thời gian khác nhau.
- **Melanie Köchert**: vợ một người bạn; mối tình kéo dài nhiều năm, bà thăm ông đến cuối đời và tự tử năm 1906.

## Bối cảnh
Vienna những năm 1880–1890: tiệm cà phê, phòng khách giới quý tộc, và cuộc chiến báo chí giữa phe Wagner và phe Brahms. Wolf sống nhờ mạnh thường quân, sáng tác ở các nhà nghỉ của bạn bè ngoại ô như Perchtoldsdorf, xen giữa những đợt viết như lên đồng và những năm trầm uất không viết nổi một nốt.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Hugo Wolf', 'https://en.wikipedia.org/wiki/Hugo_Wolf'],
      ['Wikipedia (tiếng Đức): Hugo Wolf', 'https://de.wikipedia.org/wiki/Hugo_Wolf'],
    ],
  },
  'Gustav Mahler': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 7/7/1860 | Sinh ở làng Kaliště (Kalischt), Bohemia, trong gia đình Do Thái nói tiếng Đức; cuối năm dời đến Jihlava (Iglau) |
| 1875–1878 | Học Nhạc viện Vienna (piano với Julius Epstein); thỉnh thoảng nghe Bruckner giảng |
| 1880 | Xong cantata *Das klagende Lied* |
| 1888 | Giám đốc Nhà hát Opera Hoàng gia Budapest |
| 20/11/1889 | *Giao hưởng số 1* ra mắt ở Budapest (khi đó năm chương, có *Blumine*) |
| 1891–1897 | Nhạc trưởng chính Stadttheater Hamburg |
| 13/12/1895 | *Giao hưởng số 2* ra mắt ở Berlin |
| 1897 | Cải sang Công giáo; làm giám đốc Nhà hát Opera Cung đình Vienna (đến 1907) |
| 1902 | Cưới Alma Schindler |
| 27/5/1906 | *Giao hưởng số 6* ra mắt ở Essen |
| 7/1907 | Con gái Maria mất vì bạch hầu và tinh hồng nhiệt; Mahler được chẩn đoán bệnh van tim |
| 1/1/1908 | Ra mắt Metropolitan Opera, New York, với *Tristan und Isolde* |
| 8/1910 | Gặp Sigmund Freud ở Leiden (Hà Lan) |
| 12/9/1910 | *Giao hưởng số 8* ra mắt ở München — thành công vang dội |
| 21/2/1911 | Buổi hoà nhạc cuối ở Carnegie Hall, đang sốt cao |
| 18/5/1911 | Mất ở Vienna vì viêm nội tâm mạc nhiễm khuẩn; chôn ở Grinzing cạnh con gái |

## Âm nhạc và đóng góp
Mahler viết ít vì cả đời sáng tác chỉ là việc làm thêm của một nhạc trưởng: chín [[giao-huong]] trọn vẹn, *số 10* dang dở, *Das Lied von der Erde*, cùng các tập [[lied]] với dàn nhạc (*Des Knaben Wunderhorn*, *Rückert-Lieder*, *Kindertotenlieder*). Ông nói với Sibelius rằng giao hưởng "phải như thế giới, phải ôm lấy mọi thứ": bài ca dân gian, giọng hát, hợp xướng đều có thể đi vào giao hưởng. Lied và giao hưởng thấm vào nhau. Ông là mắt xích cuối của dòng Beethoven – Wagner – Bruckner và là cầu nối sang thế kỷ 20: Schoenberg, Berg, Webern coi ông như thầy. Là nhạc trưởng, ông cải tổ Opera Vienna cùng hoạ sĩ Alfred Roller.

## Giai thoại và điều chưa chắc
- **"Lời nguyền bản giao hưởng số 9"**: theo Schoenberg, Mahler sợ con số chín sau Beethoven, Schubert (và Bruckner), nên không đánh số *Das Lied von der Erde*. Đây là mê tín, không phải quy luật; chính Mahler góp phần làm nó nổi tiếng.
- **"Thời của ta sẽ đến"**: câu được trích nhiều nhất thật ra nằm trong thư gửi Alma ngày 16/2/1902, nói về Richard Strauss: thời của Mahler sẽ đến khi thời của Strauss kết thúc. Câu "meine Zeit wird kommen" cũng được Wikipedia tiếng Đức gán cho Max Reger.
- **Hồi ký của Alma**: *Gustav Mahler: Memories and Letters* (1940) là nguồn của nhiều chuyện nổi tiếng, nhưng các nhà tiểu sử sau này coi nó thiếu, có chọn lọc và tự bào chữa. Alma coi bệnh tim là "bản án tử", còn trong thư 30/8/1907 Mahler nói vẫn sống bình thường được.
- **Ngày Maria mất**: Wikipedia tiếng Anh ghi 12/7/1907, tiếng Đức ghi 11/7.
- **Cải đạo**: các nguồn đều nói việc cải sang Công giáo là điều kiện để giữ chức ở nhà hát cung đình; Mahler từng viết rằng gốc Do Thái chặn ông khỏi mọi nhà hát cung đình.
- **Freud**: buổi phân tích chỉ kéo dài một buổi chiều; lời nói về "phức cảm Đức Mẹ" là do Freud kể lại năm 1933.
- **Gropius**: lá thư tình của Walter Gropius gửi Alma bị gửi nhầm đến Mahler (theo Wikipedia tiếng Đức).

## Bối cảnh
Vienna 1897–1907 là thủ đô Habsburg dưới thị trưởng bài Do Thái Karl Lueger, nơi phái Ly khai (Secession) đổi mới hội hoạ và Mahler đổi mới opera, giữa sự thù địch của báo chí. Mùa hè ông sáng tác trong những căn chòi nhỏ bên hồ Wörthersee (Maiernigg) rồi ở Toblach; mùa đông cuối đời ông chỉ huy ở New York.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Gustav Mahler', 'https://en.wikipedia.org/wiki/Gustav_Mahler'],
      ['Wikipedia (tiếng Đức): Gustav Mahler', 'https://de.wikipedia.org/wiki/Gustav_Mahler'],
      ['Wikipedia (tiếng Anh): Curse of the ninth', 'https://en.wikipedia.org/wiki/Curse_of_the_ninth'],
    ],
  },
  'Richard Strauss': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 11/6/1864 | Sinh ở München; cha Franz Strauss là kèn horn chính của Nhà hát Cung đình |
| 1882 | Ra mắt *Concerto violin* ở Vienna |
| k. 1883–1886 | Trợ lý nhạc trưởng cho Hans von Bülow ở dàn nhạc cung đình Meiningen; quyền nhạc trưởng khi Bülow từ chức (12/1885) |
| 1887 | Kết bạn với Mahler ở Leipzig; gặp nữ ca sĩ Pauline de Ahna |
| 11/11/1889 | Thơ giao hưởng *Don Juan* ra mắt ở Weimar — nổi tiếng quốc tế |
| 23/12/1893 | Chỉ huy buổi ra mắt *Hänsel und Gretel* của Humperdinck |
| 10/9/1894 | Cưới Pauline de Ahna |
| 1895–1898 | *Till Eulenspiegel*, *Also sprach Zarathustra* (1896), *Don Quixote*, *Ein Heldenleben* |
| 9/12/1905 | *Salome* ra mắt ở Dresden, Ernst von Schuch chỉ huy |
| 1909, 1911 | *Elektra*, *Der Rosenkavalier* — mở đầu hợp tác với Hugo von Hofmannsthal |
| 1919 | Đồng giám đốc Nhà hát Opera Vienna; *Die Frau ohne Schatten* ra mắt 10/10/1919 |
| 1920 | Cùng Max Reinhardt lập Liên hoan Salzburg |
| 11/1933 | Làm chủ tịch Phòng Âm nhạc Đế chế (Reichsmusikkammer) |
| 1935 | *Die schweigsame Frau* (lời Stefan Zweig) ra mắt; bị cách chức sau khi thư gửi Zweig bị Gestapo chặn |
| 1945 | *Metamorphosen* cho 23 đàn dây; tháng 10 sang Thuỵ Sĩ |
| 6/1948 | Toà phi Quốc xã hoá kết luận ông vô tội |
| 1948 | *Bốn bài ca cuối cùng* |
| 8/9/1949 | Mất ở Garmisch-Partenkirchen |

## Âm nhạc và đóng góp
Strauss nối dài [[tho-giao-huong]] của Liszt với dàn nhạc khổng lồ và kỹ thuật phối khí rực rỡ, từ nhân vật văn học (*Don Juan*, *Don Quixote*, *Till Eulenspiegel*) đến cả một ngày leo núi (*Eine Alpensinfonie*). Ở [[opera]], *Salome* và *Elektra* đẩy nghịch âm và cường độ cảm xúc đến giới hạn (hợp âm *Elektra*), rồi ông quay về chất trữ tình Lãng mạn mượt mà trong *Der Rosenkavalier*, *Ariadne auf Naxos*, *Arabella*. Ông viết đặc biệt hay cho giọng nữ cao. Các [[lied]] trải suốt đời ông, đến *Bốn bài ca cuối cùng*, nơi bài *Im Abendrot* trích lại chủ đề "thăng hoa" từ *Tod und Verklärung*. Là nhạc trưởng, ông nổi tiếng với Mozart, Wagner, Liszt.

## Giai thoại và điều chưa chắc
- **Strauss và Quốc xã**: ông không vào đảng, nhận chức Reichsmusikkammer (nói là không được hỏi trước) và lợi dụng nó để sửa luật bản quyền; ông cũng thay Toscanini và Bruno Walter khi họ rút đi. Động cơ lớn là bảo vệ con dâu Alice (người Do Thái) và hai cháu. Toscanini nói ông ngả mũ trước Strauss nhà soạn nhạc, nhưng đội mũ lại trước Strauss con người. Đến nay vẫn tranh luận ông thoả hiệp đến đâu.
- **Biệt thự Garmisch nhờ *Salome***: Wikipedia tiếng Anh chỉ nói ông "được cho là" xây nhà hoàn toàn bằng tiền từ *Salome*.
- **Brahms phê bình**: Brahms bảo giao hưởng của chàng trai Strauss "chơi đùa với chủ đề quá nhiều". Strauss về sau rất mê *Giao hưởng số 3* và *số 4* của Brahms.
- **Năm 1945**: khi lính Mỹ đến biệt thự, ông xuống cầu thang tự giới thiệu: "Tôi là Richard Strauss, tác giả *Rosenkavalier* và *Salome*", và một tấm biển "Cấm vào" được dựng để bảo vệ ông.
- **Mahler và Strauss**: tình bạn kèm ganh đua; Mahler gọi *Salome* là "một ngọn núi lửa đang sống".

## Bối cảnh
Đời Strauss trải từ thời các triều đình nhỏ Đức (Meiningen, Weimar) qua Đế chế Wilhelm, Cộng hoà Weimar, Đệ tam Đế chế đến khi Đức bị chia đôi. Ông viết rằng mình đã làm nhạc "dưới thời Hoàng đế và dưới thời Ebert". Nơi chốn gắn với ông: nhà hát Dresden (nơi ra mắt *Salome*, *Intermezzo*, *Die schweigsame Frau*), Opera Vienna, Liên hoan Salzburg và biệt thự dưới chân núi ở Garmisch.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Richard Strauss', 'https://en.wikipedia.org/wiki/Richard_Strauss'],
      ['Wikipedia (tiếng Đức): Richard Strauss', 'https://de.wikipedia.org/wiki/Richard_Strauss'],
      ['Wikipedia (tiếng Anh): Hansel and Gretel (opera)', 'https://en.wikipedia.org/wiki/Hansel_and_Gretel_(opera)'],
    ],
  },
  'Alexander Zemlinsky': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 14/10/1871 | Sinh ở Vienna; mẹ sinh ở Sarajevo, gia đình theo đạo Do Thái; cha tự thêm chữ "von" vào tên |
| 1884–1892 | Học Nhạc viện Vienna (piano, sáng tác với J. N. Fuchs, có học Bruckner); 1890 đoạt huy chương vàng piano với *Biến tấu Handel* của Brahms |
| 1892, 1896 | Brahms nghe nhạc ông, giới thiệu *Tam tấu clarinet* cho nhà in Simrock |
| 1895 | Lập dàn nhạc nghiệp dư Polyhymnia, nơi gặp Arnold Schoenberg |
| 1897 | Đồng giải nhất Giải Beethoven (do Brahms bảo trợ) với *Giao hưởng số 2* |
| 1899 | Nhạc trưởng nhà hát Carltheater; rời cộng đồng Do Thái |
| 1900 | Mahler chỉ huy ra mắt opera *Es war einmal*; Zemlinsky dạy và yêu Alma Schindler |
| 1901 | Em gái Mathilde cưới Schoenberg |
| 1905 | *Die Seejungfrau* ra mắt cùng buổi với *Pelleas und Melisande* của Schoenberg |
| 1911–1927 | Giám đốc âm nhạc Nhà hát Đức ở Praha; ra mắt *Erwartung* của Schoenberg (1924) |
| 1922 | Opera *Der Zwerg* ra mắt ở Köln |
| 1924 | *Lyrische Symphonie* ra mắt ở Praha |
| 1927–1933 | Nhạc trưởng ở Kroll Oper, Berlin, dưới Otto Klemperer |
| 1938 | Sau khi Áo bị sáp nhập, trốn qua Praha sang New York |
| 15/3/1942 | Mất ở Larchmont, New York, sau nhiều lần đột quỵ |

## Âm nhạc và đóng góp
Zemlinsky đi từ ảnh hưởng Brahms sang hoà âm mở rộng kiểu Wagner và Mahler nhưng không bao giờ viết nhạc phi điệu tính hay kỹ thuật 12 âm. Tác phẩm tiêu biểu: *Lyrische Symphonie* bảy chương trên thơ Tagore (ông tự so với *Das Lied von der Erde*; Alban Berg trích nó trong *Lyric Suite* và đề tặng ông), fantasia dàn nhạc *Die Seejungfrau* theo Andersen, tám [[opera]] (*Eine florentinische Tragödie*, *Der Zwerg* theo Oscar Wilde), bốn tứ tấu đàn dây ([[nhac-thinh-phong]]), *Sechs Gesänge* theo Maeterlinck ([[lied]]). Là nhạc trưởng, ông được Stravinsky và Weill khen; là thầy, ông dạy Korngold và là người thầy chính quy duy nhất của Schoenberg (dạy đối âm).

## Giai thoại và điều chưa chắc
- **Alma và "người lùn"**: Alma chia tay ông dưới áp lực gia đình, bạn bè, vì ông chưa có tiếng và vì ngoại hình (Wikipedia tiếng Đức ghi ông cao 159 cm). Chuyện tình ấy được cho là gợi ra *Die Seejungfrau*, còn *Der Zwerg* được gọi là "nửa tự truyện". Đó là cách đọc của các nhà phê bình, không phải lời Zemlinsky.
- **Cải đạo**: Wikipedia tiếng Anh ghi năm 1899 ông cải sang Tin Lành; tiếng Đức chỉ ghi ông rời Cộng đồng Do Thái giáo, trong không khí bài Do Thái thời Lueger.
- **Bản nhạc "mất"**: *Die Seejungfrau* bị ông rút lại và tưởng đã mất; hai phần tổng phổ nằm ở hai nơi chỉ được ghép lại vào thập niên 1980, diễn lại năm 1984.
- **Bị lãng quên**: ở Mỹ ông gần như vô danh, trái hẳn với Schoenberg đang được tôn vinh ở Los Angeles.

## Bối cảnh
Vienna cuối thế kỷ 19 với các nhạc viện, dàn nhạc nghiệp dư và những phòng khách nơi Brahms, Mahler, Alma, Schoenberg qua lại. Rồi Praha thời giữa hai cuộc chiến, nơi Nhà hát Đức sống nhờ cộng đồng nói tiếng Đức, và Berlin thời Weimar với nhà hát thể nghiệm Kroll — trước khi lưu vong.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Alexander von Zemlinsky', 'https://en.wikipedia.org/wiki/Alexander_von_Zemlinsky'],
      ['Wikipedia (tiếng Đức): Alexander Zemlinsky', 'https://de.wikipedia.org/wiki/Alexander_Zemlinsky'],
    ],
  },
  'Max Reger': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 19/3/1873 | Sinh ở Brand (Oberpfalz, Bayern); 1874 gia đình Công giáo sùng đạo dời đến Weiden |
| 1884–1889 | Học piano và organ với Adalbert Lindner, thường đánh organ thay thầy ở nhà thờ |
| 1888 | Nghe *Die Meistersinger* và *Parsifal* ở Bayreuth, quyết theo nghề nhạc |
| 1890 | Học lý thuyết với Hugo Riemann ở Sondershausen, rồi Wiesbaden |
| 1898 | Mắc nợ, nghiện rượu, bị ốm, được em gái Emma đưa về nhà ở Weiden |
| 1901 | Lên München; danh tiếng lên nhanh |
| 1905 | Kế nhiệm Rheinberger ở Học viện München, một năm sau từ chức |
| 1907 | Giám đốc âm nhạc nhà thờ Đại học Leipzig (đến 1908) và giáo sư nhạc viện Leipzig |
| 1911 | Nhạc trưởng cung đình Meiningen |
| 1913 | *Bốn thơ âm thanh theo Böcklin*, có *Die Toteninsel* |
| 1914 | Rời Meiningen vì sức khoẻ; *Biến tấu và fugue chủ đề Mozart* |
| 1915 | Chuyển đến Jena, mỗi tuần lên Leipzig dạy |
| 11/5/1916 | Mất vì suy tim tại khách sạn Hentschel ở Leipzig |

## Âm nhạc và đóng góp
Reger kết hợp đối âm của Bach với hình thức của Beethoven – Brahms và hoà âm cromatic dày đặc của Liszt – Wagner. Ông viết nhiều trong khoảng hơn 25 năm, hầu như mọi thể loại trừ opera và giao hưởng (có một *Sinfonietta*), chủ yếu dưới dạng [[fugue]] và [[bien-tau]]: *Biến tấu và fugue chủ đề Mozart* (chủ đề sonata K. 331), *Biến tấu và fugue chủ đề Hiller* Op. 100. Nhạc [[organ-ong]] là phần nổi tiếng nhất: *Fantasia và fugue trên B-A-C-H* Op. 46, các fantasia hợp xướng, *Introduction, Passacaglia und Fuge* Op. 127, phần lớn do người bạn Karl Straube ra mắt. Là người Công giáo, ông lại gắn bó với hợp xướng Tin Lành như Bach.

## Giai thoại và điều chưa chắc
- **"Thời bão táp và rượu"**: chính Reger gọi những năm Wiesbaden là "Sturm- und Trankzeit", chơi chữ "Sturm und Drang" (bão táp và xung kích). Chứng nghiện rượu theo ông suốt đời.
- **Trả đũa giới phê bình**: theo Wikipedia tiếng Đức, ông cài các mô-típ nốt S-C-H-A-F-E ("con cừu") và A-F-F-E ("con khỉ") vào *Sonata violin* Op. 72 để nhắm vào giới phê bình. Lá thư nổi tiếng gửi một nhà phê bình, mở đầu bằng câu ông đang ngồi "trong căn phòng nhỏ nhất nhà", không có trong các nguồn đã dùng — người biên soạn chưa đối chiếu được.
- **"Thời của ta sẽ đến"**: Reger được trích là đã nói người ta sẽ gọi ông là phản động và vứt vào đống sắt vụn, nhưng thời của ông sẽ đến. Câu tương tự cũng hay được gán cho Mahler.
- **Tin đồn gốc Do Thái**: có lẽ do chính Reger tung ra; việc tra phả hệ cho thấy dòng họ ông đều là người Công giáo. Ông cũng có những lời bài Do Thái khi cãi nhau với báo chí Berlin.
- **Thầy hoá đối thủ**: Hugo Riemann, thầy cũ, về sau công kích ông trong bài "Thoái hoá và tái sinh trong âm nhạc" (1907).

## Bối cảnh
Reger lớn lên ở Oberpfalz Công giáo, giữa nhà thờ giáo xứ và trường học của cha. Sự nghiệp ông đi qua Wiesbaden, München, Leipzig, rồi Meiningen, dàn nhạc cung đình nổi danh thời Bülow, mà ông từng gọi là dàn nhạc duy nhất mình muốn có. Những năm cuối ở Jena, giữa Thế chiến I, ông viết *Hebbel Requiem* tặng những người lính đã chết.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Max Reger', 'https://en.wikipedia.org/wiki/Max_Reger'],
      ['Wikipedia (tiếng Đức): Max Reger', 'https://de.wikipedia.org/wiki/Max_Reger'],
    ],
  },
}

import type { Person } from './people'

/** Tiểu sử chi tiết các nhạc sĩ Nga thế kỷ 19 (nguồn trong refs). Khoá = tên đúng như composers.ts. */
export const COMPOSER_DETAILS_ROM_E: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Mikhail Glinka': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1/6/1804 | Sinh ở làng Novospasskoye, tỉnh Smolensk (20/5 theo lịch cũ) |
| k. 1817 | Lên Sankt-Peterburg học trường dành cho con em quý tộc; học ba buổi piano với John Field |
| 1830–1833 | Sang Ý, học ở Milano với Francesco Basili, gặp Bellini, Donizetti, Mendelssohn |
| 1833–1834 | Học sáng tác ở Berlin với Siegfried Dehn khoảng năm tháng |
| 1834 | Cha mất, trở về Nga |
| 9/12/1836 | *Một cuộc đời cho Sa hoàng* ra mắt ở Nhà hát Bolshoi Kamenny, Sankt-Peterburg (27/11 lịch cũ), Catterino Cavos chỉ huy |
| 1837 | Làm thầy dạy Dàn hợp xướng Nhà nguyện Hoàng gia |
| 9/12/1842 | *Ruslan và Lyudmila* ra mắt, đón nhận lạnh nhạt |
| 1845 | Ở Tây Ban Nha; viết *Jota aragonesa* (Overture Tây Ban Nha số 1) |
| 1848 | *Kamarinskaya* cho dàn nhạc |
| 15/2/1857 | Mất ở Berlin sau một trận cảm; vài tháng sau thi hài được đưa về Sankt-Peterburg |

## Âm nhạc và đóng góp
Glinka là nhà soạn nhạc Nga đầu tiên được công nhận rộng rãi ngay trong nước. *Một cuộc đời cho Sa hoàng* kể chuyện người nông dân Ivan Susanin (năm 1612) dẫn quân Ba Lan lạc vào rừng để cứu Sa hoàng mới; đây là [[opera]] Nga đầu tiên giữ được chỗ thường trực trong vốn diễn, và Glinka tìm ra một lối hát nói bám ngữ điệu tiếng Nga. *Ruslan và Lyudmila* (theo Pushkin) có kịch bản rời rạc nhưng âm nhạc phong phú hơn: âm giai toàn cung gắn với gã lùn phù thuỷ Chernomor và màu sắc phương Đông sau này thành "chữ ký" của nhạc Nga. *Kamarinskaya* dựng cả bản nhạc trên biến đổi một điệu dân ca qua nhiều lớp phối khí; Tchaikovsky gọi nó là "hạt sồi" mọc ra cây sồi giao hưởng Nga. Nhóm Năm người coi Glinka là điểm xuất phát của [[dan-toc-nhac-hoc]] và trường phái dân tộc Nga trong [[thoi-ky-lang-man]].

## Giai thoại và điều chưa chắc
- **Ai đổi tên vở opera?** Bài Wikipedia về Glinka viết chính Sa hoàng Nicholas I gợi ý đổi tên từ *Ivan Susanin* thành *Một cuộc đời cho Sa hoàng*; bài về vở opera lại viết Glinka tự đổi tên "để lấy lòng" sau khi Sa hoàng dự buổi tập. Hai cách kể trên cùng một bách khoa, chưa thống nhất. Thời Xô viết vở diễn dưới tên *Ivan Susanin* (từ 26/2/1939).
- **Phần thưởng**: Sa hoàng tặng Glinka một chiếc nhẫn trị giá 4.000 rúp (theo Wikipedia tiếng Anh).
- **Kịch bản *Ruslan***: chuyện nhà thơ Konstantin Bakhturin "say rượu, soạn cốt truyện trong 15 phút" được Wikipedia tiếng Anh kể mà không dẫn nguồn — nên coi là giai thoại.
- **"Cha đẻ âm nhạc cổ điển Nga"**: là đánh giá, không phải sự kiện; Wikipedia dẫn một câu trên báo New York Times năm 1904.
- **Người viết lời**: Wikipedia tiếng Đức chỉ ghi Baron Rosen; bài tiếng Anh về vở opera ghi thêm Kukolnik, Sollogub, Zhukovsky.
- **Bài "Bài ca yêu nước"** (1833) được cho là viết dự thi quốc ca — Wikipedia dùng chữ "supposedly"; nó từng là quốc ca Nga 1993–2000.

## Bối cảnh
Glinka lớn lên trong điền trang quý tộc ở Smolensk, nghe chuông nhà thờ và dàn đồng ca nông dân hơn là nhạc phòng khách. Sankt-Peterburg thời Nicholas I sùng bái opera Ý; một vở opera hát tiếng Nga, tôn vinh lòng trung thành với Sa hoàng, vừa hợp ý triều đình vừa mở ra hướng đi mới. Những năm cuối đời ông đi lại giữa Paris, Tây Ban Nha và Berlin.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Mikhail Glinka', 'https://en.wikipedia.org/wiki/Mikhail_Glinka'],
      ['Wikipedia (tiếng Anh): A Life for the Tsar', 'https://en.wikipedia.org/wiki/A_Life_for_the_Tsar'],
      ['Wikipedia (tiếng Đức): Michail Iwanowitsch Glinka', 'https://de.wikipedia.org/wiki/Michail_Iwanowitsch_Glinka'],
    ],
  },
  'Anton Rubinstein': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 28/11/1829 | Sinh ở Vikhvatinets, tỉnh Podolia (16/11 lịch cũ); gia đình gốc Do Thái cải sang Chính thống giáo khi ông còn nhỏ |
| 12/1840 | Chơi ở Salle Érard, Paris, trước Chopin và Liszt |
| 1844–1846 | Ở Berlin, học Siegfried Dehn; được Mendelssohn và Meyerbeer nâng đỡ |
| 1848 | Về Sankt-Peterburg; Đại công tước phu nhân Elena Pavlovna thành người bảo trợ |
| 16/11/1854 | Chỉ huy dàn nhạc Gewandhaus Leipzig chơi giao hưởng *Đại dương* |
| 1859 | Cùng sáng lập Hội Âm nhạc Nga (RMS) |
| 1862 | Nhạc viện Sankt-Peterburg, nhạc viện đầu tiên của Nga, khai giảng; ông làm giám đốc (Wikipedia tiếng Đức ghi ngày 8/20 tháng 9) |
| 1867 | Từ chức ở Nhạc viện và RMS |
| 1871 | Hoàn thành opera *Con quỷ* (Wikipedia tiếng Đức ghi công diễn 1875) |
| 1872–1873 | Lưu diễn Mỹ cho hãng Steinway: 215 buổi trong 239 ngày |
| 1885–1886 | Loạt "Hòa nhạc lịch sử" bảy buổi khắp châu Âu |
| 1887 | Trở lại điều hành Nhạc viện |
| 20/11/1894 | Mất ở Peterhof (8/11 lịch cũ) |

## Âm nhạc và đóng góp
Rubinstein là một trong những [[nghe-si-piano-the-ky-19]] lớn nhất, thường được đặt cạnh Liszt. Loạt hòa nhạc lịch sử của ông đi qua toàn bộ lịch sử văn học piano trong bảy buổi khổng lồ; Rachmaninoff nghe lúc 12 tuổi và nói nó ảnh hưởng lâu dài đến tham vọng biểu diễn của mình. Là nhà soạn nhạc, ông viết khoảng 20 [[opera]] (nổi nhất *Con quỷ*, theo Lermontov), sáu bản [[giao-huong]] (số 2 *Đại dương*), năm bản [[hinh-thuc-concerto]] cho piano (số 4 năm 1864 được chơi nhiều nhất) và nhiều [[tieu-pham-piano]] như *Melody in F* op. 3 số 1. Âm nhạc của ông không mang chủ nghĩa dân tộc như Nhóm Năm người, và thường bị chê là viết vội, ý hay mà phát triển chưa tới. Di sản lớn nhất có lẽ là thể chế: Nhạc viện Sankt-Peterburg, nơi Tchaikovsky học sáng tác với ông.

## Giai thoại và điều chưa chắc
- **"Van II"**: Liszt gọi ông như vậy vì ông giống Beethoven; Moscheles cũng nhận xét điều này. Lời đồn ông là con rơi của Beethoven không có trong các nguồn đã đối chiếu và không có cơ sở (Beethoven mất năm 1827, trước khi ông sinh).
- **Ngất trên sân khấu**: Wikipedia tiếng Đức kể ông ngã gục ở Paris trong một buổi hòa nhạc lịch sử, nhưng không dẫn nguồn — chưa kiểm chứng.
- **Đối đầu Nhóm Năm người**: có thật; Balakirev công kích ông, có lúc bằng lời lẽ bài Do Thái. Glinka cũng gọi ông bằng từ miệt thị trong một lá thư năm 1855 (theo Taruskin, dẫn trong Wikipedia tiếng Đức).
- **Nhớ nhầm nốt**: Rachmaninoff kể Rubinstein quên bài *Islamey* và ứng tác theo phong cách đó khoảng bốn phút trước khi nhớ lại.

## Bối cảnh
Trước 1862 nước Nga không có trường đào tạo nhạc sĩ chuyên nghiệp; nhạc công trong nước không có danh phận xã hội. Nhờ sự bảo trợ của Elena Pavlovna, em dâu Sa hoàng Nicholas I, Rubinstein dựng nên RMS và nhạc viện theo mô hình Đức — điều khiến phe dân tộc chủ nghĩa coi ông là "không đủ Nga".
`,
    refs: [
      ['Wikipedia (tiếng Anh): Anton Rubinstein', 'https://en.wikipedia.org/wiki/Anton_Rubinstein'],
      ['Wikipedia (tiếng Đức): Anton Grigorjewitsch Rubinstein', 'https://de.wikipedia.org/wiki/Anton_Grigorjewitsch_Rubinstein'],
    ],
  },
  'Alexander Borodin': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/11/1833 | Sinh ở Sankt-Peterburg, con ngoài giá thú của vương công Gruzia Luka Gedevanishvili; đăng ký là con một nông nô tên Porfiry Borodin |
| 1850 | Vào Học viện Y – Phẫu thuật Sankt-Peterburg |
| 3/5/1858 | Bảo vệ luận án tiến sĩ y khoa |
| 1859–1862 | Nghiên cứu ở Heidelberg (phòng thí nghiệm Erlenmeyer) và Pisa |
| 1862 | Giáo sư hoá học tại Học viện Y – Phẫu thuật; gặp Balakirev (Wikipedia tiếng Đức ghi 1864) |
| 1863 | Cưới nghệ sĩ piano Ekaterina Protopopova |
| 1869 | Giao hưởng số 1 ra mắt, Balakirev chỉ huy; bắt đầu *Hoàng tử Igor* (bài tiếng Anh ghi 1868) |
| 1872 | Mở các khoá y khoa cho phụ nữ |
| 1880 | *Trên thảo nguyên Trung Á* |
| 1881 | Tứ tấu đàn dây số 2 |
| 27/2/1887 | Đột tử trong một buổi dạ vũ hoá trang của Học viện |
| 4/11/1890 | *Hoàng tử Igor* ra mắt ở Nhà hát Mariinsky, do Rimsky-Korsakov và Glazunov hoàn thành |

## Âm nhạc và đóng góp
Borodin coi hoá học và y khoa là nghề chính, chỉ soạn nhạc lúc rảnh hay lúc ốm. Ông đóng góp thật cho hoá hữu cơ: phản ứng halogen–decarboxyl hoá (nay gọi là phản ứng Hunsdiecker–Borodin) và được ghi nhận cùng Wurtz là người phát hiện phản ứng aldol. Âm nhạc của ông ít nhưng đậm: giai điệu trữ tình rộng, hoà âm giàu màu sắc, chất phương Đông. *Hoàng tử Igor* với *Vũ khúc Polovtsian* là [[opera]] lịch sử Nga tiêu biểu; hai bản [[giao-huong]] và [[tho-giao-huong]] *Trên thảo nguyên Trung Á* đứng vững trong vốn diễn. Khác các bạn trong nhóm, ông yêu [[nhac-thinh-phong]] — hai bản tứ tấu, nhất là *Nocturne* trong số 2. Nhạc của ông được chuyển soạn cho nhạc kịch Broadway *Kismet* (1953), nhờ đó ông được trao giải Tony năm 1954 sau khi mất.

## Giai thoại và điều chưa chắc
- **"Nhà soạn nhạc ngày Chủ nhật"**: câu Borodin tự nhận thường được trích, nhưng người biên soạn chưa tìm thấy trong các nguồn đã đối chiếu — coi là chưa kiểm chứng. Điều chắc chắn: chính ông coi âm nhạc là nghề phụ.
- **Cái chết**: Wikipedia tiếng Đức ghi khám nghiệm tại chỗ cho thấy vỡ mạch tim; trước đó ông đã mắc dịch tả (1885) và vài cơn đau tim nhẹ.
- **Mẹ ông bao nhiêu tuổi?** Bài tiếng Anh ghi 25, bài tiếng Đức ghi 24.
- **Liszt giới thiệu bản giao hưởng nào?** Bài tiếng Anh ghi Liszt cho diễn Giao hưởng số 1 ở Đức năm 1880; bài tiếng Đức ghi buổi diễn ở Baden-Baden là Giao hưởng số 2.
- **Overture *Hoàng tử Igor***: xem mục Glazunov — chuyện "chép lại từ trí nhớ" chỉ đúng một phần.

## Bối cảnh
Học viện Y – Phẫu thuật ở Sankt-Peterburg là nơi Borodin học, dạy và làm thí nghiệm gần như suốt đời; ông vừa là giáo sư, vừa vận động cho giáo dục y khoa của phụ nữ, vừa lo dàn hợp xướng và dàn nhạc của Học viện — âm nhạc chen vào những khoảng trống còn lại.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Alexander Borodin', 'https://en.wikipedia.org/wiki/Alexander_Borodin'],
      ['Wikipedia (tiếng Đức): Alexander Porfirjewitsch Borodin', 'https://de.wikipedia.org/wiki/Alexander_Porfirjewitsch_Borodin'],
      ['Wikipedia (tiếng Anh): Prince Igor', 'https://en.wikipedia.org/wiki/Prince_Igor'],
    ],
  },
  'César Cui': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/1/1835 | Sinh ở Vilna (nay là Vilnius) (6/1 lịch cũ); cha là sĩ quan Pháp ở lại Nga sau năm 1812 |
| 1850 | Học lý thuyết ít tháng với Stanisław Moniuszko, rồi lên Sankt-Peterburg học Trường Công binh |
| 1856 | Gặp Balakirev — khởi đầu nhóm sau này gọi là Năm người |
| 1857 | Bắt đầu dạy công sự ở các học viện quân sự |
| 1858 | Cưới Malvina Bamberg, học trò thanh nhạc của Dargomyzhsky |
| 1859 | Ra mắt với Scherzo op. 1 dưới đũa chỉ huy của Anton Rubinstein |
| 1864 | Bắt đầu viết phê bình âm nhạc (gần 800 bài đến 1918) |
| 1869 | Opera *William Ratcliff* công diễn, không thành công |
| 1874 | Viết bài phê bình gay gắt về buổi ra mắt *Boris Godunov* |
| 1880 | Giáo sư công sự; 1906 lên hàm tướng |
| 1896–1904 | Giám đốc chi nhánh Sankt-Peterburg của Hội Âm nhạc Nga |
| 1916 | Bị mù, vẫn sáng tác bằng cách đọc cho người khác chép |
| 26/3/1918 | Mất ở Petrograd (Wikipedia tiếng Đức ghi 13/3, có lẽ theo lịch cũ) |

## Âm nhạc và đóng góp
Cui là thành viên "nghiệp dư" nhất về thời gian: cả đời ông là kỹ sư quân sự, viết giáo trình công sự được dùng rộng rãi, từng dạy cả Nicholas II. Nhưng với ngòi bút phê bình, ông là tiếng nói công khai của Nhóm Năm người, bênh vực nhạc Nga và đả kích lối học viện. Sáng tác còn được nhớ của ông chủ yếu là khổ nhỏ: romance, [[tieu-pham-piano]] và các tiểu phẩm như *Orientale* op. 50 số 9 cho violin và piano — tác phẩm còn được chơi nhiều nhất. Từ 1880 ông hay chọn đề tài Pháp. Ông viết hơn chục [[opera]] (cả opera thiếu nhi như *Mèo đi hia*), trong đó *Tù binh Kavkaz* (Liège 1886) là opera đầu tiên của Nhóm Năm người diễn ngoài nước Nga. Ông cũng hoàn thành *Hội chợ Sorochintsy* dang dở của Mussorgsky và viết sách *La musique en Russie* đề tặng Liszt.

## Giai thoại và điều chưa chắc
- **"Bảy tai hoạ Ai Cập"**: Cui ví Giao hưởng số 1 của Rachmaninoff (ra mắt 28/3/1897) như cảnh bảy tai hoạ, và nói nó sẽ được "học viên một nhạc viện dưới địa ngục" ưa thích. Câu này có thật và hay được trích; nhưng buổi diễn hỏng còn do Glazunov chỉ huy kém.
- **Phê bình cả bạn mình**: bài viết về *Boris Godunov* năm 1874 rất gay gắt; về sau Cui lại là người cổ vũ nhạc Mussorgsky và hoàn thành *Hội chợ Sorochintsy*.
- **Mật mã tên**: Scherzo op. 1 dùng chủ đề từ tên vợ (B-A-B-E-G trong BAmBErG) và chữ đầu C. C. của ông.
- **Ngày mất**: lệch 26/3 và 13/3 giữa hai bản Wikipedia; Nga đổi sang lịch mới tháng 2/1918, nên con số 13/3 có lẽ là lịch cũ.

## Bối cảnh
Vilna giữa thế kỷ 19 thuộc Đế quốc Nga; Cui lớn lên trong gia đình Công giáo, nói tiếng Pháp, Ba Lan, Nga và Litva. Ở Sankt-Peterburg ông sống hai đời song song: giảng đường học viện quân sự ban ngày và phòng khách âm nhạc, toà soạn báo buổi tối. Ông sống lâu nhất trong nhóm, là thành viên cuối cùng còn lại sau 1910.
`,
    refs: [
      ['Wikipedia (tiếng Anh): César Cui', 'https://en.wikipedia.org/wiki/C%C3%A9sar_Cui'],
      ['Wikipedia (tiếng Đức): César Cui', 'https://de.wikipedia.org/wiki/C%C3%A9sar_Cui'],
      ['Wikipedia (tiếng Anh): Sergei Rachmaninoff', 'https://en.wikipedia.org/wiki/Sergei_Rachmaninoff'],
    ],
  },
  'Mily Balakirev': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 2/1/1837 | Sinh ở Nizhny Novgorod (21/12/1836 lịch cũ) |
| k. 1850 | Được nhà bảo trợ Alexander Ulybyshev nâng đỡ; 14 tuổi đã điều khiển *Requiem* của Mozart |
| 1853–1855 | Học toán ở Đại học Kazan |
| cuối 1855 | Lên Sankt-Peterburg, gặp Glinka, được khuyên theo nghề nhạc |
| 1856 | Gặp Cui và Stasov; năm sau Mussorgsky đến học |
| 1862 | Cùng Gavriil Lomakin lập Trường Âm nhạc Miễn phí; đi Kavkaz sưu tầm dân ca |
| 5/1867 | Chỉ huy buổi hòa nhạc cho khách Slav ở Moskva — buổi diễn khiến Stasov đặt tên "Moguchaya kuchka" |
| 1869 | *Islamey*, fantasy phương Đông cho piano |
| 1871 | Khủng hoảng tinh thần, rút khỏi âm nhạc, theo Chính thống giáo khắt khe |
| 1873 | Giao Trường Âm nhạc Miễn phí cho Rimsky-Korsakov, làm nhân viên đường sắt (Wikipedia tiếng Đức) |
| 1876 | Dần trở lại sáng tác |
| 1882 | Hoàn thành thơ giao hưởng *Tamara* |
| 1883 | Giám đốc Nhà nguyện Hoàng gia, Rimsky-Korsakov làm phụ tá (đến 1894 hay 1895 tuỳ nguồn) |
| 1897 | Hoàn thành Giao hưởng số 1 bắt đầu từ 1864 |
| 29/5/1910 | Mất ở Sankt-Peterburg |

## Âm nhạc và đóng góp
Balakirev là người duy nhất trong nhóm có nghề nhạc chuyên nghiệp, và là thủ lĩnh: ông dạy Cui, Mussorgsky, Rimsky-Korsakov, Borodin bằng cách cùng chơi bốn tay và phân tích Beethoven, Schumann, Glinka, ép họ hoàn thành giao hưởng đầu tay. Tuyển tập dân ca Nga năm 1866 của ông giữ được tính chuyển giọng linh hoạt của dân ca. Ông cũng đỡ đầu Tchaikovsky với *Romeo và Juliet* và giao hưởng *Manfred*. *Islamey*, viết rất nhanh, là [[tieu-pham-piano]] được giới virtuoso ưa chuộng, mang dấu Liszt; *Tamara* (theo thơ Lermontov) là [[tho-giao-huong]] tiêu biểu cho chất phương Đông Nga. Vì ông hoàn thành tác phẩm quá chậm, nhiều ý tưởng của ông đến công chúng qua tay người khác trước.

## Giai thoại và điều chưa chắc
- **Tổ tiên Tatar**: chuyện dòng họ có một tổ tiên Tatar chiến đấu ở trận Kulikovo do chính Balakirev bịa ra, không có chứng cứ (Wikipedia tiếng Anh).
- **Cái tên "Nhóm Năm người"**: Stasov viết "nhóm nhỏ mà hùng mạnh" (moguchaya kuchka) trong bài về buổi hòa nhạc tháng 5/1867. Theo Gerald Abraham trên Grove, họ chưa bao giờ tự gọi mình, cũng không được gọi ở Nga, là "Năm người"; tên đó phổ biến qua tiếng Pháp "Les Cinq".
- **Năm thành lập nhóm**: Wikipedia tiếng Đức ghi nhóm hợp lại năm 1862; bài tiếng Anh tính từ 1856 khi Balakirev gặp Cui.
- **Khủng hoảng 1871**: không còn thư từ hay nhật ký nào của ông từ giai đoạn này; chi tiết chỉ biết qua lời kể của bạn bè.

## Bối cảnh
Sankt-Peterburg thập niên 1860 chia hai phe: Nhạc viện và Hội Âm nhạc Nga của Rubinstein, được triều đình bảo trợ, và vòng tròn tự học của Balakirev với Trường Âm nhạc Miễn phí. Các buổi gặp mặt trong phòng khách — ai mang bản nháp mới đến chơi cho cả nhóm nghe — là xưởng sáng tác của âm nhạc dân tộc Nga.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Mily Balakirev', 'https://en.wikipedia.org/wiki/Mily_Balakirev'],
      ['Wikipedia (tiếng Đức): Mili Alexejewitsch Balakirew', 'https://de.wikipedia.org/wiki/Mili_Alexejewitsch_Balakirew'],
      ['Wikipedia (tiếng Anh): The Five (composers)', 'https://en.wikipedia.org/wiki/The_Five_(composers)'],
      ['Wikipedia (tiếng Đức): Das Mächtige Häuflein', 'https://de.wikipedia.org/wiki/Das_M%C3%A4chtige_H%C3%A4uflein'],
    ],
  },
  'Modest Mussorgsky': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 21/3/1839 | Sinh ở Karevo, tỉnh Pskov (9/3 lịch cũ), trong gia đình địa chủ |
| 1856 | Tốt nghiệp trường thiếu sinh quân, vào Trung đoàn Preobrazhensky; gặp Borodin ở quân y viện |
| 1857–1858 | Học Balakirev; năm 1858 giải ngũ để theo âm nhạc |
| 1861 | Giải phóng nông nô làm gia đình mất nửa điền sản |
| k. 1867 | Bản đầu của thơ giao hưởng *Đêm trên núi trọc* |
| 1869 | Vào làm ở Cục Lâm nghiệp; hoàn thành bản đầu *Boris Godunov* |
| 1871 | Nhà hát Hoàng gia từ chối bản 1869; ở chung phòng với Rimsky-Korsakov, viết lại |
| 8/2/1874 | *Boris Godunov* ra mắt toàn vở ở Nhà hát Mariinsky (27/1 lịch cũ) |
| 6/1874 | *Bức tranh triển lãm* cho piano, tưởng nhớ hoạ sĩ Viktor Hartmann |
| 1880 | Bị cho thôi việc nhà nước |
| 3/1881 | Repin vẽ chân dung trong bệnh viện |
| 28/3/1881 | Mất ở Sankt-Peterburg (16/3 lịch cũ), một tuần sau sinh nhật 42 |

## Âm nhạc và đóng góp
Mussorgsky muốn nhạc bám sát lời nói và đời thật: giai điệu thanh nhạc theo ngữ điệu tiếng Nga, hoà âm thô ráp, cấu trúc không theo luật phát triển phương Tây. *Boris Godunov* (theo Pushkin và Karamzin) là [[opera]] Nga được thu âm nhiều nhất. *Bức tranh triển lãm* là chuỗi [[tieu-pham-piano]] tả các bức tranh bằng âm thanh, nổi tiếng nhất qua bản phối khí của Ravel. *Đêm trên núi trọc* là [[tho-giao-huong]] được biết qua bản sửa của Rimsky-Korsakov. Ông còn viết các chu kỳ ca khúc *Không mặt trời* và *Bài ca và vũ điệu của cái chết*. Ông ảnh hưởng mạnh đến Shostakovich và Prokofiev.

## Giai thoại và điều chưa chắc
- **Rimsky-Korsakov "sửa" Boris**: có thật. Bản Rimsky-Korsakov ra mắt 28/11/1896 tại Đại sảnh Nhạc viện, chính ông chỉ huy; bản 1908 diễn ở Opéra Paris (19/5/1908) là lần đầu vở diễn ngoài nước Nga. Shostakovich cũng phối lại (1940, diễn 1959). Ngày nay giới nghiên cứu đánh giá cao chính dàn nhạc và hoà âm nguyên bản, và các bản sửa đã lỗi thời. Maes cho rằng việc Rimsky-Korsakov biên tập Mussorgsky là điều còn tranh cãi.
- **Bị từ chối hai lần?** Người ta hay kể năm 1872 vở bị từ chối lần thứ hai; Wikipedia tiếng Anh ghi không có chứng cứ cụ thể nào cho việc này.
- **Lý do từ chối 1871**: được cho là vì vở thiếu vai prima donna — chữ "apparently" cho thấy đây là suy đoán.
- **Nghiện rượu**: có thật và góp phần vào cái chết; ông lên cơn co giật bốn lần liền đầu năm 1881 và mê sảng do rượu. Bức chân dung mũi đỏ của Repin đã thành hình ảnh biểu tượng.
- **"Một vở opera cấp tiến của Mussorgsky là đủ"**: câu "được cho là" của Alexander III, không có nguồn trực tiếp.

## Bối cảnh
Mussorgsky thuộc tầng lớp quý tộc điền chủ sa sút sau cải cách 1861, phải làm công chức để sống. Đêm ra mắt *Boris* năm 1874 sinh viên hát các đoạn hợp xướng ngoài phố và ông phải ra chào khoảng 20 lần, nhưng giới phê bình, kể cả bạn ông là Cui, chê gay gắt.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Modest Mussorgsky', 'https://en.wikipedia.org/wiki/Modest_Mussorgsky'],
      ['Wikipedia (tiếng Anh): Boris Godunov (opera)', 'https://en.wikipedia.org/wiki/Boris_Godunov_(opera)'],
      ['Wikipedia (tiếng Đức): Modest Petrowitsch Mussorgski', 'https://de.wikipedia.org/wiki/Modest_Petrowitsch_Mussorgski'],
      ['Wikipedia (tiếng Anh): Nikolai Rimsky-Korsakov', 'https://en.wikipedia.org/wiki/Nikolai_Rimsky-Korsakov'],
    ],
  },
  'Nikolai Rimsky-Korsakov': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 18/3/1844 | Sinh ở Tikhvin, tỉnh Novgorod (6/3 lịch cũ), gia đình quý tộc nhiều đời làm hải quân |
| 1856–1862 | Học trường sĩ quan hải quân ở Sankt-Peterburg |
| 1859–1861 | Được giới thiệu với Balakirev và Cui (Wikipedia tiếng Đức: mùa thu 1859; bài về Nhóm Năm người: gia nhập 1861); bắt đầu giao hưởng giọng Mi giáng thứ |
| 1862–1865 | Chuyến hải hành trên tàu Almaz (Wikipedia tiếng Anh: hai năm tám tháng) |
| 12/1865 | Giao hưởng số 1 ra mắt, Balakirev chỉ huy |
| 1867 | *Sadko*, tranh âm nhạc cho dàn nhạc |
| 1871 | Giáo sư sáng tác và phối khí tại Nhạc viện Sankt-Peterburg; tự học lại toàn bộ lý thuyết ba năm |
| 7/1872 | Cưới Nadezhda Purgold, Mussorgsky làm phù rể |
| 1873 | Thanh tra các ban kèn Hải quân |
| 1887–1888 | *Capriccio espagnol*, *Scheherazade* |
| 1896 | Bản biên tập *Boris Godunov* ra mắt |
| 1905 | Bị cách chức giáo sư vì ủng hộ sinh viên; được phục chức cuối năm |
| 21/6/1908 | Mất ở điền trang Lyubensk gần Luga |
| 1909 | *Con gà trống vàng* ra mắt sau khi ông mất, bản đã bị kiểm duyệt sửa |

## Âm nhạc và đóng góp
Rimsky-Korsakov là bậc thầy phối khí: *Scheherazade*, *Capriccio espagnol*, overture *Lễ Phục sinh Nga* là các tác phẩm dàn nhạc được chơi thường xuyên; giáo trình phối khí của ông (con rể Steinberg hoàn thành năm 1912) với hơn 300 ví dụ từ chính tác phẩm của ông đặt chuẩn mới cho thể loại. Ông viết 15 [[opera]], phần lớn là truyện cổ tích (*Bông tuyết*, *Sadko*, *Truyện Sa hoàng Saltan* với *Chuyến bay của ong nghệ*). Ông dùng có hệ thống âm giai bát cung (lần đầu trong *Sadko* 1867) và âm giai toàn cung, truyền lại cho Stravinsky, Ravel, Messiaen. Là thầy, ông dạy cả một thế hệ: Glazunov, Lyadov, Prokofiev, Respighi, và Stravinsky học riêng tại nhà. Ông cũng hoàn thành *Hoàng tử Igor* của Borodin và biên tập nhiều tác phẩm của Mussorgsky.

## Giai thoại và điều chưa chắc
- **Giáo sư không biết hoà âm**: chính ông kể khi được mời dạy năm 1871 mình chưa từng viết đối âm, không hoà âm nổi một bài chorale và không biết tên hợp âm — rồi tự học ba năm. Lời kể này từ hồi ký *Letopis moey muzykalnoy zhizni* (Biên niên đời sống âm nhạc), nên có phần tự sự.
- **Sửa nhạc Mussorgsky**: giúp các tác phẩm được biết đến khắp nơi, nhưng bị phê phán vì làm "mượt" những chỗ táo bạo. Bản *Boris* của ông thống trị sân khấu nhiều thập kỷ trước khi bản gốc được phục hồi.
- **Chuyến hải hành**: bài về Nhóm Năm người ghi "ba năm vòng quanh thế giới", bài về ông ghi hai năm tám tháng.
- **Con gà trống vàng**: lời châm biếm chế độ quân chủ và cuộc chiến Nga – Nhật khiến kiểm duyệt giữ lại; ông không kịp xem buổi diễn.

## Bối cảnh
Sĩ quan hải quân, rồi giáo sư nhạc viện, rồi công chức thanh tra ban nhạc — Rimsky-Korsakov đi qua cả hai thế giới: nhóm tự học của Balakirev và học viện của Rubinstein. Từ 1882, nhà buôn gỗ Belyayev bảo trợ ông và các học trò bằng loạt Hòa nhạc Giao hưởng Nga và nhà xuất bản ở Leipzig; năm 1905 cách mạng tràn vào nhạc viện.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Nikolai Rimsky-Korsakov', 'https://en.wikipedia.org/wiki/Nikolai_Rimsky-Korsakov'],
      ['Wikipedia (tiếng Đức): Nikolai Andrejewitsch Rimski-Korsakow', 'https://de.wikipedia.org/wiki/Nikolai_Andrejewitsch_Rimski-Korsakow'],
      ['Wikipedia (tiếng Anh): Boris Godunov (opera)', 'https://en.wikipedia.org/wiki/Boris_Godunov_(opera)'],
      ['Wikipedia (tiếng Anh): The Five (composers)', 'https://en.wikipedia.org/wiki/The_Five_(composers)'],
    ],
  },
  'Anatoly Lyadov': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 12/5/1855 | Sinh ở Sankt-Peterburg (30/4 lịch cũ; Wikipedia tiếng Đức ghi 29/4 – 11/5), trong gia đình nhạc sĩ; cha là nhạc trưởng Nhà hát Hoàng gia |
| 1870 | Vào Nhạc viện Sankt-Peterburg học piano và violin, rồi chuyển sang đối âm và fugue |
| 1876 | Bị Rimsky-Korsakov đuổi khỏi lớp sáng tác vì bỏ học |
| 1878 | Học lại để làm bài tốt nghiệp; bắt đầu dạy ở Nhạc viện |
| 1884 | Cưới vợ giàu, có điền trang Polynovka (tỉnh Novgorod) |
| 1887 | Gặp Tchaikovsky |
| 1893 | *Hộp nhạc* (*Muzykalnaya tabakerka*) op. 32 |
| 1905 | Từ chức để phản đối việc sa thải Rimsky-Korsakov; trở lại khi thầy được phục chức |
| 1904–1909 | Thơ giao hưởng *Baba Yaga*, *Kikimora*, *Hồ mê hoặc* |
| 28/8/1914 | Mất ở Polynovka |

## Âm nhạc và đóng góp
Lyadov là bậc thầy khổ nhỏ. Ông gần như không hoàn thành tác phẩm lớn nào; sức mạnh nằm ở [[tieu-pham-piano]] tinh xảo (*Biryulki*, các prélude, mazurka, arabesque, *Hộp nhạc*) và các [[tho-giao-huong]] ngắn dựa trên truyện dân gian Nga, nơi màu sắc dàn nhạc được tính toán đến từng nốt. *Kikimora* và *Hồ mê hoặc* thực chất là những mảnh của một vở opera không bao giờ xong. Ông sưu tầm và soạn lại dân ca (*Tám bài dân ca Nga* op. 58). Là thầy dạy ở Nhạc viện từ 1878, ông có học trò như Prokofiev, Myaskovsky, Asafyev. Cùng Glazunov và Rimsky-Korsakov, ông ngồi trong hội đồng chọn tác phẩm cho nhà bảo trợ Belyayev — hạt nhân của "vòng Belyayev".

## Giai thoại và điều chưa chắc
- **Lyadov và *Chim lửa***: chuyện quen thuộc kể Diaghilev đặt Lyadov viết ballet *Chim lửa* nhưng ông chậm đến mức việc phải chuyển cho Stravinsky. Wikipedia tiếng Anh ghi rõ: Diaghilev có viết thư ngày 4/9/1909 đề nghị một [[ballet]] mới cho mùa 1910, nhưng **không có chứng cứ Lyadov từng nhận lời**. Mọi chi tiết về việc ông "chậm trễ" với *Chim lửa* vì thế thuộc loại giai thoại.
- **Lười biếng**: tiếng "lười" có cơ sở — bị đuổi học vì bỏ lớp; nhạc trưởng Malko kể ông đang giảng thì rút kéo ra cắt móng tay. Nhưng Stravinsky lại nói ông khắt khe với chính mình như với học trò.
- **"Đi mà học Debussy"**: Prokofiev kể Lyadov bực bội với mọi cách tân, bảo học trò "sang học Richard Strauss, sang học Debussy" với giọng như bảo "cút đi".

## Bối cảnh
Lyadov thuộc thế hệ "trường Peterburg thứ hai" sau Nhóm Năm người: được đào tạo bài bản trong nhạc viện, sống nhờ mạng lưới bảo trợ của Belyayev. Mùa hè ông về điền trang ở Novgorod soạn nhạc thong thả; ông mất ở đó tháng 8/1914.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Anatoly Lyadov', 'https://en.wikipedia.org/wiki/Anatoly_Lyadov'],
      ['Wikipedia (tiếng Đức): Anatoli Konstantinowitsch Ljadow', 'https://de.wikipedia.org/wiki/Anatoli_Konstantinowitsch_Ljadow'],
    ],
  },
  'Alexander Glazunov': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 10/8/1865 | Sinh ở Sankt-Peterburg (29/7 lịch cũ), con một nhà xuất bản giàu có |
| 12/1879 | Balakirev giới thiệu cậu học sinh 14 tuổi với Rimsky-Korsakov (Wikipedia tiếng Đức: học riêng từ 1880) |
| 1882 | Giao hưởng số 1 ra mắt, Rimsky-Korsakov chỉ huy; Belyayev bắt đầu bảo trợ |
| 1887–1890 | Cùng Rimsky-Korsakov hoàn thành *Hoàng tử Igor* của Borodin |
| 1897 | Chỉ huy buổi ra mắt thất bại Giao hưởng số 1 của Rachmaninoff |
| 19/1/1898 | Ballet *Raymonda* (biên đạo Petipa) ra mắt ở Nhà hát Mariinsky |
| 1899 | Giáo sư Nhạc viện Sankt-Peterburg |
| 17/5/1907 | Chỉ huy buổi cuối loạt Hòa nhạc lịch sử Nga ở Paris; thời kỳ này nhận tiến sĩ danh dự Oxford và Cambridge |
| 1905 | Giám đốc Nhạc viện sau vụ sa thải Rimsky-Korsakov |
| 1928 | Sang Vienna làm giám khảo cuộc thi Schubert, không trở về; danh nghĩa giám đốc đến 1930 |
| 1934 | Concerto cho saxophone alto |
| 21/3/1936 | Mất ở Neuilly-sur-Seine gần Paris; năm 1972 thi hài đưa về Leningrad |

## Âm nhạc và đóng góp
Glazunov hoà giải chủ nghĩa dân tộc với chủ nghĩa thế giới trong nhạc Nga: nối tiếp sự hùng tráng của Borodin, kỹ thuật phối khí của Rimsky-Korsakov, chất trữ tình của Tchaikovsky và đối âm của Taneyev. Ông viết tám bản [[giao-huong]], các [[ballet]] *Raymonda* và *Bốn mùa*, [[hinh-thuc-concerto]] cho violin vẫn còn trong vốn diễn. Wikipedia tiếng Đức nhận xét phong cách ông gần như không đổi từ đầu thập niên 1880 đến 1930. Vai trò lớn nhất có lẽ là giám đốc nhạc viện qua cách mạng, nội chiến và thời Xô viết đầu: ông chăm lo cho sinh viên thiếu thốn, trong đó có Shostakovich.

## Giai thoại và điều chưa chắc
- **Overture *Hoàng tử Igor* chép từ trí nhớ**: chuyện Glazunov nghe Borodin chơi rồi chép lại sau khi ông mất được Wikipedia tiếng Anh (bài về vở opera) gọi là "chỉ đúng một phần". Hồi ký năm 1891 của chính Glazunov kể ông soạn đại thể theo kế hoạch của Borodin, lấy chủ đề từ các số trong opera, tìm được đoạn kết canon trong bản nháp, và tự viết vài ô nhịp cuối.
- **Say rượu khi chỉ huy Rachmaninoff 1897**: vợ Rachmaninoff kể vậy; Wikipedia tiếng Anh ghi điều này "không thể xác nhận". Shostakovich kể ông giấu chai rượu sau bàn và hút qua ống trong giờ dạy. Dù say hay không, ông có quá ít thời gian tập.
- **Giám đốc đến năm nào?** Bài tiếng Anh viết ông giữ chức 1905–1928 rồi vẫn là người đứng đầu danh nghĩa đến 1930; bài tiếng Đức ghi thẳng 1905–1930.

## Bối cảnh
Glazunov lớn lên trong vòng bảo trợ của Belyayev và trở thành "cậu bé thần đồng" của trường Peterburg. Ông đi qua ba chế độ: đế quốc, cách mạng và Xô viết; nhạc viện thời ông đổi tên thành Nhạc viện Petrograd rồi Leningrad. Năm 1929 ông cưới bà Olga Gavrilova và vẫn đi lưu diễn chỉ huy khắp châu Âu và Mỹ.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Alexander Glazunov', 'https://en.wikipedia.org/wiki/Alexander_Glazunov'],
      ['Wikipedia (tiếng Đức): Alexander Konstantinowitsch Glasunow', 'https://de.wikipedia.org/wiki/Alexander_Konstantinowitsch_Glasunow'],
      ['Wikipedia (tiếng Anh): Prince Igor', 'https://en.wikipedia.org/wiki/Prince_Igor'],
      ['Wikipedia (tiếng Anh): Raymonda', 'https://en.wikipedia.org/wiki/Raymonda'],
    ],
  },
  'Sergei Rachmaninoff': {
    more: `
## Tiểu sử
| Năm | Sự kiện |
|---|---|
| 1/4/1873 | Sinh ở điền trang Semyonovo gần Staraya Russa, tỉnh Novgorod (20/3 lịch cũ) |
| 1885 | Vào ở với thầy Nikolai Zverev, học ở Nhạc viện Moskva |
| 5/1892 | Opera một màn *Aleko* (viết trong 17 ngày) ra mắt ở Nhà hát Bolshoi; tốt nghiệp nhạc viện |
| 9/1892 | Lần đầu ra mắt chơi piano công khai, giới thiệu Prélude Đô thăng thứ |
| 28/3/1897 | Giao hưởng số 1 ra mắt thất bại, Glazunov chỉ huy |
| 1900 | Trị liệu thôi miên và nâng đỡ tâm lý với bác sĩ Nikolai Dahl |
| 1901 | Concerto piano số 2 hoàn thành (4/1901), đề tặng Dahl |
| 1904–1906 | Nhạc trưởng Nhà hát Bolshoi |
| 1909 | Lưu diễn Mỹ lần đầu; Concerto piano số 3 viết cho chuyến đi |
| 1915 | *Canh thức suốt đêm* (thường gọi *Vespers*) |
| 24/12/1917 | Rời Nga sang Stockholm, rồi Copenhagen; 1918 định cư New York |
| 1934 | *Rhapsody trên chủ đề Paganini* |
| 1/2/1943 | Nhập quốc tịch Mỹ |
| 28/3/1943 | Mất ở Beverly Hills vì ung thư hắc tố |

## Âm nhạc và đóng góp
Rachmaninoff là một trong những nghệ sĩ piano vĩ đại nhất thế kỷ 20 và là một trong những đại diện cuối cùng của [[thoi-ky-lang-man]] Nga. Phong cách ông xuất phát từ Tchaikovsky: giai điệu dài như hát, kết cấu đối âm dày và màu dàn nhạc đậm; piano luôn ở trung tâm. Ba bản [[hinh-thuc-concerto]] piano đầu (nhất là số 2 và 3), *Rhapsody trên chủ đề Paganini* (thực chất là [[bien-tau]]), các prélude và étude-tableaux, Giao hưởng số 2, *Vũ khúc giao hưởng* và hợp xướng không nhạc đệm *Canh thức suốt đêm* là trụ cột vốn diễn. Sau khi rời Nga, ông sống chủ yếu bằng biểu diễn và chỉ hoàn thành sáu tác phẩm mới.

## Giai thoại và điều chưa chắc
- **Cú sốc 1897**: Cui ví bản giao hưởng như "bảy tai hoạ Ai Cập". Rachmaninoff viết tháng 5/1897 rằng ông không bận tâm lời phê bình mà buồn vì chính mình không hài lòng với bản nhạc. Thời gian trầm cảm được ghi khác nhau: phần mở đầu bài Wikipedia tiếng Anh nói bốn năm, phần thân bài nói ba năm.
- **Glazunov say rượu?**: vợ Rachmaninoff nói vậy, chưa xác nhận được (xem mục Glazunov).
- **Bàn tay khổng lồ**: ông bấm được quãng 12 (theo Cyril Smith). Giả thuyết hội chứng Marfan chỉ là suy đoán; một bài trên *Journal of the Royal Society of Medicine* lại đề xuất chứng to đầu chi (acromegaly). Chưa có chẩn đoán nào được xác nhận.
- **Nơi sinh**: khi trưởng thành ông nhầm nhận Oneg là nơi sinh; sổ nhà thờ ghi Semyonovo. Ông là con thứ ba (bài tiếng Anh) hay thứ tư trong sáu con (bài tiếng Đức) — hai nguồn lệch.
- **Tolstoy**: chuyến thăm Lev Tolstoy để lấy lại cảm hứng không giúp được gì; chính trị liệu của Dahl mới mở đường cho Concerto số 2.

## Bối cảnh
Rachmaninoff thuộc giới quý tộc điền chủ Nga đang sa sút; điền trang Ivanovka gần Tambov là nơi ông soạn phần lớn tác phẩm cho đến năm 1917. Cách mạng biến ông thành người lưu vong, đi lưu diễn khắp Mỹ và châu Âu, mùa hè ở biệt thự Senar bên hồ Lucerne. Ông muốn được chôn ở Moskva nhưng an táng tại nghĩa trang Kensico, New York.
`,
    refs: [
      ['Wikipedia (tiếng Anh): Sergei Rachmaninoff', 'https://en.wikipedia.org/wiki/Sergei_Rachmaninoff'],
      ['Wikipedia (tiếng Đức): Sergei Wassiljewitsch Rachmaninow', 'https://de.wikipedia.org/wiki/Sergei_Wassiljewitsch_Rachmaninow'],
      ['Wikipedia (tiếng Anh): Alexander Glazunov', 'https://en.wikipedia.org/wiki/Alexander_Glazunov'],
    ],
  },
}

import type { Person } from './people'

/**
 * Nội dung chi tiết cho các nhà soạn nhạc hay gặp khi dạy piano: tiểu sử ngắn và tác phẩm theo
 * cấp độ. Khoá là tên đúng như trong composers.ts. Cấp độ chỉ là tương đối — mỗi nhà xuất bản
 * dùng thang riêng (xem lo-trinh-tac-pham).
 */
export const COMPOSER_DETAILS: Record<string, Pick<Person, 'more' | 'refs'>> = {
  'Johann Sebastian Bach': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1685 | Sinh ở Eisenach (Đức), trong một gia đình nhạc sĩ nhiều đời |
| 1708–1717 | Nhạc sĩ organ, rồi Konzertmeister (trưởng dàn nhạc) ở triều đình Weimar |
| 1717–1723 | Nhạc trưởng triều đình Köthen — thời kỳ viết nhiều nhạc khí, trong đó có tập 1 [[luat-binh-quan|Clavier bình quân]] (1722) |
| 1723–1750 | Cantor nhà thờ Thomaskirche ở Leipzig cho đến khi mất |

Âm nhạc của Bach là đỉnh cao của [[doi-am]] và [[fugue]]. Sau khi ông mất, các tác phẩm lớn ít được biểu diễn rộng rãi; năm 1829 [[Mendelssohn]] dàn dựng lại *Cuộc khổ nạn theo Thánh Matthew*, mở đầu sự phục hưng âm nhạc Bach.

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ cấp | Minuet Sol trưởng BWV Anh. 114 (sách Anna Magdalena) | Từ năm 1970 được xác định là của **Christian Petzold**, không phải Bach |
| Sơ cấp | Minuet Sol thứ BWV Anh. 115, Minuet Sol trưởng Anh. 116, Hành khúc Rê trưởng Anh. 122 | Trong các tuyển tập "bài dễ" của Bärenreiter |
| Sơ – trung cấp | Little Preludes (BWV 924, 926, 927, 933–938, 939, 942…) | Bước tiếp theo sau các minuet |
| Trung cấp | [[lo-trinh-tac-pham|Inventions 2 bè]] BWV 772–786 (bắt đầu số 1, số 8) | Luyện hai tay độc lập |
| Trung cấp cao | Sinfonia (Inventions 3 bè), các tổ khúc | |
| Nâng cao | Clavier bình quân, Goldberg Variations | Xem [[phan-tich-prelude-do-truong]] |

Số BWV và các phiên bản có thể khác nhau giữa các ấn bản.
`,
    refs: [
      ['Bärenreiter — Bach: Little piano pieces', 'https://www.barenreiter.co.uk/little-piano-pieces.html'],
      ['Bärenreiter — Bach: Easy piano pieces and dances', 'https://barenreiter.co.uk/easy-piano-pieces-and-dances-piano-j-s-bach.html'],
      ['PTNA — Minuet in G BWV Anh. 114', 'https://enc.piano.or.jp/en/musics/22592'],
    ],
  },

  'Wolfgang Amadeus Mozart': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1756 | Sinh ở Salzburg; cha là [[Leopold Mozart]] — nhạc sĩ và thầy dạy |
| 1761–1764 | Những sáng tác đầu tiên (từ 5 tuổi), được chép trong **sổ nhạc của chị gái Nannerl** |
| 1760s–1770s | Lưu diễn khắp châu Âu cùng gia đình khi còn nhỏ |
| 1781 | Rời Salzburg, sống tự do ở Vienna |
| 1791 | Mất ở Vienna, để lại bản Requiem dang dở |

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ cấp | Các bài trong **sổ nhạc Nannerl**: Minuet K. 1, Minuet Fa trưởng **K. 2**, Allegro K. 3, Minuet K. 5 | 17 bài Mozart viết khi 5–8 tuổi, đều dễ chơi |
| Trung cấp | **6 Sonatina Vienna** (K. 439b) | Chuyển soạn từ các divertimento cho kèn (1783), người chuyển soạn có lẽ là Ferdinand Kauer; được xếp ở mức trung cấp |
| Trung cấp | **Sonata Đô trưởng K. 545** | "Dành cho người mới học" — xem [[phan-tich-sonata-k545]] |
| Trung – cao | Sonata K. 331 (có [[phan-tich-rondo-alla-turca|Rondo alla Turca]]), biến tấu "Ah vous dirai-je, Maman" | |
| Nâng cao | Các sonata và concerto lớn | |
`,
    refs: [
      ['Wikipedia — Nannerl Notenbuch', 'https://en.wikipedia.org/wiki/Nannerl_Notenbuch'],
      ['Alfred — Mozart: 6 Viennese Sonatinas (Juilliard Store listing)', 'https://juilliardstore.com/products/mozart-6-viennese-sonatinas-pf-00-1707'],
    ],
  },

  'Ludwig van Beethoven': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1770 | Sinh ở Bonn (Đức) |
| 1792 | Chuyển đến Vienna; học với [[Haydn]]; nổi tiếng trước hết là nghệ sĩ piano ứng tác |
| cuối 1790s | Bắt đầu bị suy giảm thính lực |
| 1802 | Viết "Di chúc Heiligenstadt" — bức thư bày tỏ tuyệt vọng vì bệnh điếc |
| 1800–1802 | Dạy piano cho [[Czerny]] khi Czerny còn nhỏ |
| 1827 | Mất ở Vienna |

Ông là cầu nối giữa thời [[thoi-ky-co-dien|Cổ điển]] và [[thoi-ky-lang-man|Lãng mạn]]; 32 sonata piano của ông được [[hans-von-bulow|Hans von Bülow]] ví là "Tân Ước" của văn học piano (Clavier bình quân của Bach là "Cựu Ước").

## Tác phẩm piano theo cấp độ
| Giai đoạn | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ – trung cấp sớm | **Sonatina Sol trưởng Anh. 5 số 1** | Bài dạy rất phổ biến, nhưng giới nghiên cứu **nghi ngờ** Beethoven là tác giả (tìm thấy trong giấy tờ sau khi ông mất) |
| Sơ – trung cấp | Écossaise Mi♭ WoO 86, Sáu Écossaise WoO 83, Sonatina Fa trưởng | Có trong tuyển tập *My First Beethoven* (Schott) |
| Trung cấp | **[[phan-tich-fur-elise|Für Elise]]** WoO 59; Bagatelle Op. 33 số 3 và số 6 | |
| Trung – cao | Sonata "Pathétique" Op. 13, chương 1 Sonata "Ánh trăng" | Ô nhịp 3 của "Ánh trăng" có [[hop-am-napoli]] |
| Nâng cao | Các sonata còn lại, concerto | |
`,
    refs: [
      ['Wikipedia — Sonatina in G major (attributed to Beethoven)', 'https://en.wikipedia.org/wiki/Sonatina_in_G_major_(attributed_to_Beethoven)'],
      ['Schott — My First Beethoven', 'https://www.schott-music.com/en/my-first-beethoven-noc331975.html'],
      ['Interlude — Carl Czerny: Beethoven\'s student and Liszt\'s teacher', 'https://interlude.hk/carl-czerny-born-on-february-21-1791-beethovens-student-and-liszts-teacher/'],
    ],
  },

  'Frédéric Chopin': {
    more: `
## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1810 | Sinh ở Żelazowa Wola, gần Warsaw (Ba Lan); mẹ người Ba Lan, cha người Pháp |
| 1830 | Rời Ba Lan; không bao giờ trở về |
| 1831 | Định cư ở Paris — dạy đàn, chơi trong các salon, ít biểu diễn công khai |
| 1838–1847 | Thời gian gắn bó với nhà văn George Sand |
| 1849 | Mất ở Paris vì bệnh lao |

Gần như toàn bộ tác phẩm của Chopin viết cho piano — xem các thể loại ở [[the-loai]] và cách chơi rubato ở [[nhip-do]].

## Tác phẩm piano theo cấp độ
Chopin không có bài cho người mới bắt đầu. Các tuyển tập "dễ nhất" (như *14 of His Easiest Piano Selections* của Alfred) được xếp ở mức **trung cấp – trung cấp cao**:
| Tác phẩm | Ghi chú |
|---|---|
| Prelude Mi thứ Op. 28 số 4 | Thường là bài Chopin đầu tiên được giao |
| Prelude La trưởng Op. 28 số 7, Prelude Si thứ Op. 28 số 6 | |
| Mazurka Fa trưởng Op. 68 số 3 | Làm quen tiết tấu mazurka |
| Valse La thứ (xuất bản sau khi mất) | |
| Nocturne Sol thứ Op. 37 số 1 | Một nocturne dễ hơn |
| [[phan-tich-nocturne-op9-so2|Nocturne Op. 9 số 2]] | Khó hơn, nhiều hoa mỹ |
`,
    refs: [
      ['Alfred — Chopin: 14 of His Easiest Piano Selections', 'https://www.alfred.com/products/chopin-14-of-his-easiest-piano-selections-a-practical-performing-edition-00-pb-0000868'],
      ['Schott — My First Chopin', 'https://www.schott-music.com/en/my-first-chopin-noc333233.html'],
    ],
  },

  'Carl Czerny': {
    more: `
## Tiểu sử ngắn
- Sinh năm **1791** ở Vienna; học piano đầu tiên với cha (Wenzel Czerny), rồi với **[[Beethoven]]** — các buổi học dừng lại khoảng năm 1802 nhưng hai người vẫn là bạn thân. Ông cũng chịu ảnh hưởng của [[Clementi]] và [[johann-nepomuk-hummel|Hummel]].
- Bắt đầu dạy đàn ở Vienna từ năm **15 tuổi**; học trò có cháu trai của Beethoven và nổi tiếng nhất là **[[Liszt]]** (từ 1821, Czerny không lấy học phí). Liszt về sau đề tặng thầy bộ *Transcendental Études*.
- Sáng tác **gần 1.000** tác phẩm (số opus lên tới hơn 800, nhiều số bị dùng lặp, cùng hàng trăm tác phẩm không có số opus).
- Mất năm **1857** ở Vienna.

## Các tuyển tập luyện tập theo thứ tự độ khó
| Tuyển tập | Nội dung |
|---|---|
| **Op. 599** — Phương pháp thực hành cho người mới học | 100 bài, xếp theo kỹ năng cần luyện |
| **Op. 849** — 30 bài luyện kỹ thuật mới | "Cầu nối" giữa Op. 599 và Op. 299 |
| **Op. 299** — Trường phái tốc độ (School of Velocity) | Luyện chạy ngón nhanh cho cả hai tay |
| **Op. 740** — Nghệ thuật khéo léo của ngón tay | Nâng cao |

Thứ tự Op. 849 – 299 – 740 chủ yếu dựa trên ý kiến giáo viên và nhà xuất bản, chưa phải một thang chuẩn. Xem tranh luận về bài tập ngón ở [[bai-tap-ngon]].
`,
    refs: [
      ['Britannica — Carl Czerny', 'https://www.britannica.com/print/article/149245'],
      ['Interlude — Carl Czerny: Beethoven\'s student and Liszt\'s teacher', 'https://interlude.hk/carl-czerny-born-on-february-21-1791-beethovens-student-and-liszts-teacher/'],
      ['Musicroom — Czerny: Collected studies Op. 299, 740, 849', 'https://www.musicroom.com/carl-czerny-collected-studies-op-299-op-740-op-849-hl50499876'],
    ],
  },

  'Friedrich Burgmüller': {
    more: `
## Tiểu sử ngắn
- Sinh ngày **4/12/1806** ở **Regensburg** (Đức); học nhạc với cha (cũng là nhạc sĩ). Em trai Norbert Burgmüller là một nhà soạn nhạc tài năng nhưng mất sớm.
- Chuyển đến **Paris** (năm 1832 theo đa số nguồn, có nguồn ghi 1834), trở thành thầy dạy piano rất thành công; nhập quốc tịch Pháp năm 1842.
- Viết nhạc ballet *La Péri* (1843) và đoạn "Peasant Pas de Deux" được chèn vào ballet *Giselle* của Adolphe Adam (1841).
- Từ 1855 lui về Beaulieu (Pháp) và mất ở đó năm **1874**.

## Ba tuyển tập étude
| Tuyển tập | Trình độ |
|---|---|
| **Op. 100** — 25 bài luyện dễ và tiến bộ | **Trung cấp sớm** (khoảng Grade 2–5); mỗi bài có tên gợi hình ảnh |
| **Op. 105** — 12 bài luyện | Cao hơn |
| **Op. 109** — 18 bài luyện đặc trưng | Cao hơn |

Các bài Op. 100 số 9 (La Chasse), 15 (Ballade), 20 (La Tarentelle), 21 (Barcarolle) hợp trình độ Grade 4–5 — xem [[lo-trinh-tac-pham]]. Mỗi bài là một bài học về [[dien-dat-cau-nhac|diễn đạt]] và tính chất.
`,
    refs: [
      ['Wikipedia — Friedrich Burgmüller', 'https://en.wikipedia.org/wiki/Friedrich_Burgm%C3%BCller'],
      ['Carl Maria von Weber Gesamtausgabe — Burgmüller, Friedrich', 'https://weber-gesamtausgabe.de/en/A0025C9.html'],
      ['Engadine Music — Burgmüller Op. 100 grade listing', 'https://engadinemusic.com.au/collections/august-print-special/grade_grade-2?page=4'],
    ],
  },
}

/**
 * The library's bibliography. Every reference in every article becomes a source (scripts/theory-content.ts); the
 * main works are described here in full so they can be cited properly and their uses gathered across labels and
 * links. Only what the references themselves state is entered — nothing filled in from memory.
 *
 * `match`: link prefixes (without protocol / www) or label prefixes that point to this work.
 * Articles name the journal (`container`) and volume as the references give them.
 * `access`: how the compiler worked with it — read in the original, through a translation, through another work
 * that cites it, or not yet checked.
 */
export type SourceKind = 'book' | 'article' | 'encyclopedia' | 'web' | 'score' | 'syllabus' | 'law' | 'video'
export type Access = 'nguyen-van' | 'ban-dich' | 'thu-cap' | 'chua-doi-chieu'

export interface CuratedSource {
  id: string
  kind: SourceKind
  /** "Họ, Tên" for citations */
  authors: string[]
  title: string
  /** title in the original language when the work is cited in translation */
  original?: string
  translator?: string
  editor?: string
  edition?: string
  year: string
  publisher?: string
  place?: string
  /** journal (articles) */
  container?: string
  /** volume / issue / pages of an article, as written: "26", "15/2", "1(1): 1–32" */
  volume?: string
  lang: string
  /** left out when the references do not say how the work was read */
  access?: Access
  rights: 'public-domain' | 'copyrighted'
  /** what the compiler should know: which copy was read, known errors… */
  note?: string
  url?: string
  match: string[]
}

export const ACCESS_LABEL: Record<Access, string> = {
  'nguyen-van': 'Đã đọc nguyên văn',
  'ban-dich': 'Đọc qua bản dịch',
  'thu-cap': 'Thứ cấp (qua tài liệu khác)',
  'chua-doi-chieu': 'Chưa đối chiếu',
}

export const CURATED: CuratedSource[] = [
  // ---- harmony, form, counterpoint
  { id: 'sposobin-1984', kind: 'book', authors: ['Способин, И. В.'], title: 'Музыкальная форма', edition: '7-е изд. (in theo bản 2, 1958)', year: '1984', publisher: 'Музыка', place: 'М.', lang: 'ru', access: 'nguyen-van', rights: 'copyrighted', note: 'Đọc qua OCR bản PDF do Lamar cung cấp.', url: 'https://nakhodka-music.ru/files/sposobin_i_v_muzykal_naya_forma_1984.pdf', match: ['nakhodka-music.ru/files/sposobin'] },
  { id: 'mazel-1979', kind: 'book', authors: ['Мазель, Л. А.'], title: 'Строение музыкальных произведений', edition: '2-е изд., доп. и перераб.', year: '1979', publisher: 'Музыка', place: 'М.', lang: 'ru', access: 'nguyen-van', rights: 'copyrighted', note: 'Đọc qua OCR bản PDF do Lamar cung cấp.', match: ['choirbgam.by/wp-content/uploads/2023/04/'] },
  { id: 'asafyev-1971', kind: 'book', authors: ['Асафьев, Б. (Игорь Глебов)'], title: 'Музыкальная форма как процесс. Книги первая и вторая', edition: 'изд. 2-е', year: '1971', publisher: 'Музыка', place: 'Л.', lang: 'ru', access: 'nguyen-van', rights: 'copyrighted', note: 'Bài dẫn của E. M. Orlova; bản PDF do Lamar cung cấp.', match: ['piano.ru/scores/books/asaf-forma'] },
  { id: 'sokolov-2004', kind: 'book', authors: ['Соколов, А. С.'], title: 'Введение в музыкальную композицию XX века', year: '2004', publisher: 'ВЛАДОС', place: 'М.', lang: 'ru', access: 'nguyen-van', rights: 'copyrighted', note: 'Không phải cuốn "Диалектика творчества" (1992) — chưa có bản đọc.', match: ['amtap.md/assets/pdf/'] },
  { id: 'pham-tu-huong-1991', kind: 'book', authors: ['Phạm Tú Hương'], title: 'Phức điệu nghiêm khắc', editor: 'Nguyễn Thụy Loan (hiệu đính)', year: '1991', publisher: 'Nhạc viện Hà Nội', place: 'Hà Nội', lang: 'vi', access: 'nguyen-van', rights: 'copyrighted', note: 'Sách in; bản scan do Lamar gửi (ví dụ nhạc cắt ở scans/taneev).', match: ['Phạm Tú Hương, Phức điệu nghiêm khắc'] },
  { id: 'fux-1791', kind: 'book', authors: ['Fux, Johann Joseph'], title: 'Practical Rules for Learning Composition', original: 'Gradus ad Parnassum', year: '[1791?]', publisher: 'J. Preston', place: 'London', lang: 'en', access: 'ban-dich', rights: 'public-domain', note: 'Năm ấn bản chưa chắc (Library of Congress ghi [1791?]); bản quét Internet Archive.', url: 'https://archive.org/details/practicalrulesfo00fuxj', match: ['archive.org/details/practicalrulesfo00fuxj'] },
  { id: 'albrechtsberger-1855', kind: 'book', authors: ['Albrechtsberger, Johann Georg'], title: 'Collected Writings on Thorough-Bass, Harmony, and Composition', editor: 'I. von Seyfried', translator: 'S. Novello', year: '1855', publisher: 'Novello', place: 'London', lang: 'en', access: 'ban-dich', rights: 'public-domain', note: '3 tập trong 1; Tập I phần lớn do Seyfried soạn. Bản quét Internet Archive.', url: 'https://archive.org/details/jgalbrechtsberg00albrgoog', match: ['archive.org/details/jgalbrechtsberg00albrgoog', 'catalog.hathitrust.org/Record/100780619'] },
  { id: 'taneyev-imslp', kind: 'book', authors: ['Taneyev, Sergey'], title: 'Convertible Counterpoint in the Strict Style', lang: 'en', year: '', access: 'thu-cap', rights: 'public-domain', note: 'Trang IMSLP của sách; hệ Taneyev trong thư viện đọc theo giáo trình Phạm Tú Hương.', url: 'https://imslp.org/wiki/Convertible_Counterpoint_in_the_Strict_Style_(Taneyev,_Sergey)', match: ['imslp.org/wiki/Convertible_Counterpoint_in_the_Strict_Style'] },
  // ---- jazz, piano
  { id: 'levine-1995', kind: 'book', authors: ['Levine, Mark'], title: 'The Jazz Theory Book', year: '1995', publisher: 'Sher Music', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', note: 'Chỉ đọc; ví dụ nhạc trong thư viện là của người biên soạn, không chép từ sách.', url: 'https://www.shermusic.com/products/the-jazz-theory-book', match: ['shermusic.com/products/the-jazz-theory-book'] },
  { id: 'neuhaus-1993', kind: 'book', authors: ['Neuhaus, Heinrich'], title: 'The Art of Piano Playing', original: 'Об искусстве фортепианной игры. Записки педагога', translator: 'K. A. Leibovitch', year: '1993', publisher: 'Kahn & Averill', place: 'London', lang: 'en', access: 'ban-dich', rights: 'copyrighted', note: 'In lần đầu bản Anh: Barrie & Jenkins, 1973. Đối chiếu thêm bản dịch tiếng Việt.', url: 'https://kahnandaverill.co.uk/?p=480', match: ['kahnandaverill.co.uk'] },
  { id: 'neuhaus-1958', kind: 'book', authors: ['Нейгауз, Г. Г.'], title: 'Об искусстве фортепианной игры. Записки педагога', edition: 'bản 2, 1961', year: '1958', lang: 'ru', access: 'chua-doi-chieu', rights: 'copyrighted', note: 'Bản gốc tiếng Nga; người biên soạn đọc bản Anh.', match: ['labirint.ru/books/495962'] },
  // ---- aesthetics, philosophy
  { id: 'hanslick-1957', kind: 'book', authors: ['Hanslick, Eduard'], title: 'The Beautiful in Music', original: 'Vom Musikalisch-Schönen', translator: 'Gustav Cohen (1891, theo bản Đức in lần 7, 1885)', editor: 'Morris Weitz', year: '1957', publisher: 'Bobbs-Merrill (The Library of Liberal Arts)', place: 'Indianapolis', lang: 'en', access: 'ban-dich', rights: 'copyrighted', note: 'Đọc bằng OCR bản quét; số trang theo ấn bản Weitz.', match: ['ibiblio.org/guruguha/MusicResearchLibrary/Books-English/'] },
  { id: 'hanslick-1854', kind: 'book', authors: ['Hanslick, Eduard'], title: 'Vom Musikalisch-Schönen', year: '1854', place: 'Leipzig', lang: 'de', access: 'chua-doi-chieu', rights: 'public-domain', note: 'Các ấn bản tiếng Đức trên IMSLP / Internet Archive.', match: ['imslp.org/wiki/Vom_Musikalisch-Sch'] },
  { id: 'schopenhauer-payne-1969', kind: 'book', authors: ['Schopenhauer, Arthur'], title: 'The World as Will and Representation, Vol. I', original: 'Die Welt als Wille und Vorstellung', translator: 'E. F. J. Payne', year: '1969', publisher: 'Dover', place: 'New York', lang: 'en', access: 'ban-dich', rights: 'copyrighted', note: 'In lần đầu Falcon’s Wing Press, 1958. Đọc bằng OCR bản quét do Lamar gửi; số trang theo Payne.', match: ['philocyclevl.wordpress.com/wp-content/uploads/2016/10/schopenhauer'] },
  { id: 'schopenhauer-haldane-kemp', kind: 'book', authors: ['Schopenhauer, Arthur'], title: 'The World as Will and Idea, Vol. I & III', translator: 'R. B. Haldane & J. Kemp', year: '', publisher: 'Project Gutenberg (#38427, #40868)', lang: 'en', access: 'ban-dich', rights: 'public-domain', note: 'Dùng cho các chương bổ sung Quyển III (tập II không có trong bản quét Payne).', url: 'https://www.gutenberg.org/ebooks/40868', match: ['gutenberg.org/ebooks/40868', 'gutenberg.org/ebooks/38427'] },
  { id: 'schopenhauer-zurcher-1977', kind: 'book', authors: ['Schopenhauer, Arthur'], title: 'Die Welt als Wille und Vorstellung', edition: 'Zürcher Ausgabe', year: '1977', lang: 'de', access: 'nguyen-van', rights: 'copyrighted', note: 'Đối chiếu nguyên văn phần âm nhạc (§52, ch. XXXIX) trên zeno.org.', url: 'http://www.zeno.org/Philosophie/M/Schopenhauer,+Arthur/Die+Welt+als+Wille+und+Vorstellung', match: ['zeno.org/Philosophie/M/Schopenhauer'] },
  // ---- music business
  { id: 'allen-2022', kind: 'book', authors: ['Allen, Paul'], title: 'Artist Management for the Music Business: Manage Your Career in Music, Manage the Music Careers of Others', edition: '5th ed.', year: '2022', publisher: 'Routledge', place: 'New York', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', note: 'DOI 10.4324/9781003179009. Chỗ sách sai/lỗi thời ghi trong từng bài.', url: 'https://doi.org/10.4324/9781003179009', match: ['doi.org/10.4324/9781003179009'] },
  { id: 'sadler-2025', kind: 'book', authors: ['Sadler, Nick'], title: 'The Label Machine: Build Your Music Career with the Record Label Model', year: '2025', publisher: 'Velocity Press', place: 'London', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', note: 'In lần đầu 2021; ISBN bản in 9781913231989.', url: 'https://velocitypress.uk', match: ['velocitypress.uk'] },
  { id: 'borg-2020', kind: 'book', authors: ['Borg, Bobby'], title: 'Music Marketing for the DIY Musician: Creating and Executing a Plan of Attack on a Low Budget', edition: 'bản 2', year: '2020', publisher: 'Rowman & Littlefield', place: 'Lanham', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', note: 'ISBN bản in 978-1-5381-3320-0.', url: 'https://rowman.com/ISBN/9781538133200/', match: ['rowman.com/ISBN/9781538133200'] },
  // ---- syllabuses, Vietnamese works
  { id: 'abrsm-theory-2020', kind: 'syllabus', authors: ['ABRSM'], title: 'The ABRSM Music Theory Syllabus from 2020: Grades 1 to 5', year: '2020', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', url: 'https://www.abrsm.org/sites/default/files/2023-09/music-theory-syllabus-outline-grades-1-5-from-2020.pdf', match: ['abrsm.org/sites/default/files/2023-09/music-theory-syllabus'] },
  { id: 'abrsm-piano-2027', kind: 'syllabus', authors: ['ABRSM'], title: 'Piano Practical Grades Qualification Specification 2027 & 2028', year: '2026', lang: 'en', access: 'nguyen-van', rights: 'copyrighted', url: 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf', match: ['abrsm.org/sites/default/files/2026-06/Piano'] },
  // ---- studies (articles and monographs the library cites in several places)
  { id: 'ewell-2020', kind: 'article', authors: ['Ewell, Philip'], title: 'Harmonic Functionalism in Russian Music Theory: A Primer', container: 'Theoria', volume: '26', year: '2020', lang: 'en', rights: 'copyrighted', url: 'http://philipewell.com/wp-content/uploads/2020/12/Ewell-HarFunction-Russia-Primer.pdf', match: ['philipewell.com/wp-content/uploads/2020/12/Ewell-HarFunction'] },
  { id: 'bakulina-2020', kind: 'article', authors: ['Bakulina, Ellen'], title: 'The ‘Brigade Textbook’: Disseminating the Riemannian Legacy in the Russian-Soviet Theoretical Tradition', container: 'Theoria', volume: '26', year: '2020', lang: 'en', rights: 'copyrighted', note: 'Liên kết là trang tác giả, không phải toàn văn.', match: ['mcgill.ca/music/ellen-bakulina'] },
  { id: 'cheong-ding-2018', kind: 'article', authors: ['Cheong', 'Ding Hong'], title: 'Sposobin Remains: A Soviet Harmony Textbook’s Twisted Fate in China', container: 'Zeitschrift der Gesellschaft für Musiktheorie (ZGMTH)', volume: '15/2', year: '2018', lang: 'en', rights: 'copyrighted', url: 'https://www.gmth.de/zeitschrift/artikel/974.aspx', match: ['gmth.de/zeitschrift/artikel/974'] },
  { id: 'parncutt-2007', kind: 'article', authors: ['Parncutt, Richard'], title: 'Systematic musicology and the history and future of Western musical scholarship', container: 'Journal of Interdisciplinary Music Studies', volume: '1(1): 1–32', year: '2007', lang: 'en', rights: 'copyrighted', url: 'https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/parncutt_richard/Pdfs/Pa07_JIMS.pdf', match: ['static.uni-graz.at/fileadmin/_Persoenliche_Webseite/parncutt_richard/Pdfs/Pa07_JIMS'] },
  { id: 'hepokoski-darcy-2006', kind: 'book', authors: ['Hepokoski', 'Darcy'], title: 'Elements of Sonata Theory', year: '2006', lang: 'en', rights: 'copyrighted', note: 'Liên kết là trang sách trên Oxford Academic.', url: 'https://academic.oup.com/book/4770', match: ['academic.oup.com/book/4770'] },
  { id: 'gould-2011', kind: 'book', authors: ['Gould, Elaine'], title: 'Behind Bars', year: '2011', publisher: 'Faber Music', lang: 'en', access: 'thu-cap', rights: 'copyrighted', note: 'Các bài dẫn qua trang giới thiệu sách.', match: ['symposium.music.org/51/item/479-behind-bars'] },
  { id: 'keefe-burns-nguyen-1991', kind: 'article', authors: ['Keefe', 'Burns', 'Nguyen'], title: 'Vietnamese modal scales of the đàn tranh', year: '1991', lang: 'en', rights: 'copyrighted', note: 'Liên kết là trang mục lục.', match: ['labs.sonicfield.org/library/vietnamese-modal-scales-of-the-dan-tranh'] },
  { id: 'minh-chau-2014', kind: 'book', authors: ['Nguyễn Thị Minh Châu'], title: 'Những vấn đề lí luận âm nhạc Việt Nam giai đoạn 1954 – 1975', year: '2014', publisher: 'Hội Nhạc sĩ Việt Nam', lang: 'vi', rights: 'copyrighted', note: 'Đọc bản đăng lại trên redsvn.net.', match: ['redsvn.net/nhung-van-de-li-luan-am-nhac-viet-nam-giai-doan-1954-1975'] },
  { id: 'vien-am-nhac-2000', kind: 'book', authors: ['Viện Âm nhạc'], title: 'Âm nhạc mới Việt Nam: tiến trình và thành tựu', year: '2000', place: 'Hà Nội', lang: 'vi', access: 'chua-doi-chieu', rights: 'copyrighted', note: 'Công trình tổng kết thường được các bài khác dẫn; người biên soạn chưa đọc trực tiếp.', match: ['Viện Âm nhạc — Âm nhạc mới Việt Nam'] },
  { id: 'nguyen-thi-nhung-2005', kind: 'book', authors: ['Nguyễn Thị Nhung'], title: 'Phân tích tác phẩm âm nhạc', year: '2005', place: 'Hà Nội', lang: 'vi', access: 'chua-doi-chieu', rights: 'copyrighted', note: 'Lamar gửi ảnh mục lục; người biên soạn chỉ dùng mục lục làm khung chương cho cuốn "Phân Tích Tác Phẩm Âm Nhạc", không dùng nội dung.', match: ['Nguyễn Thị Nhung, Phân tích tác phẩm âm nhạc'] },
  { id: 'mazel-zukkerman-1967', kind: 'book', authors: ['Мазель, Л. А.', 'Цуккерман, В. А.'], title: 'Анализ музыкальных произведений: элементы музыки и методика анализа малых форм', year: '1967', publisher: 'Музыка', place: 'М.', lang: 'ru', access: 'chua-doi-chieu', rights: 'copyrighted', note: 'Chỉ ghi theo danh mục thư viện; người biên soạn chưa đọc.', match: ['Mazel L. A., Zukkerman V. A., Анализ'] },
  { id: 'tyulin-1974', kind: 'book', authors: ['Тюлин, Ю. Н.', 'Бершадская, Т. С.', 'Пустыльник, И. Я.'], title: 'Музыкальная форма', edition: '2-е изд.', year: '1974', publisher: 'Музыка', place: 'М.', lang: 'ru', access: 'chua-doi-chieu', rights: 'copyrighted', note: 'Chỉ ghi theo danh mục thư viện; người biên soạn chưa đọc.', match: ['Тюлин Ю. и др., Музыкальная форма'] },
]

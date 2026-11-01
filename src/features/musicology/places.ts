/**
 * Places for the musicology map: where things happened, with links into the library. Coordinates are city centres
 * (or a regional centre for practices spread over a region); each place names the Wikipedia article its facts and
 * coordinates come from. Every slug is checked by scripts/check-links.mjs.
 */
export type Region = 'europe' | 'americas' | 'vietnam' | 'asia'
/** Musical tradition of a place; Western events are further split into periods by year. */
export type Tradition = 'western' | 'jazz' | 'vietnam' | 'world'
export type Era = 'medieval' | 'renaissance' | 'baroque' | 'classical' | 'romantic' | 'modern' | 'jazz' | 'vietnam' | 'world'

export interface MapEvent {
  /** Year or span as written ("1723 – 1750", "~1160"). */
  year: string
  text: string
  slugs: string[]
}

export interface Place {
  id: string
  name: string
  /** Local or international name when it differs from the Vietnamese one. */
  local?: string
  country: string
  lat: number
  lon: number
  region: Region
  /** Title of the English Wikipedia article used as the source. */
  wiki: string
  events: MapEvent[]
  /** Defaults by region: Europe → western, Americas → jazz, Vietnam → vietnam, Asia → world. */
  tradition?: Tradition
}

export const REGIONS: Record<Region, { title: string; /** lon west, lat north, lon east, lat south */ box: [number, number, number, number] }> = {
  europe: { title: 'Châu Âu', box: [-11, 61, 33, 36] },
  americas: { title: 'Châu Mỹ', box: [-110, 50, -35, -28] },
  vietnam: { title: 'Việt Nam', box: [101, 24, 112, 8] },
  asia: { title: 'Châu Á', box: [68, 50, 145, -12] },
}

const p = (id: string, name: string, country: string, lat: number, lon: number, region: Region, wiki: string, events: MapEvent[], local?: string, tradition?: Tradition): Place =>
  ({ id, name, country, lat, lon, region, wiki, events, local, tradition })
const e = (year: string, text: string, ...slugs: string[]): MapEvent => ({ year, text, slugs })

export const PLACES: Place[] = [
  // ——— Châu Âu
  p('paris', 'Paris', 'Pháp', 48.857, 2.352, 'europe', 'Paris', [
    e('~1160 – 1250', 'Trường phái Notre-Dame: Léonin và Pérotin viết organum cho nhà thờ Đức Bà', 'thoi-ky-trung-co', 'leonin', 'perotin'),
    e('1795', 'Nhạc viện Paris (Conservatoire) được thành lập', 'cac-thoi-ky'),
    e('1831', 'Chopin tới Paris và sống ở đây tới cuối đời', 'frederic-chopin'),
    e('1902', 'Opéra-Comique công diễn *Pelléas et Mélisande* của Debussy', 'claude-debussy', 'opera'),
    e('1911', 'Ballets Russes công diễn *Petrushka* của Stravinsky ở Théâtre du Châtelet', 'igor-stravinsky'),
    e('29/5/1913', '*Le Sacre du printemps* (Stravinsky) ra mắt ở Théâtre des Champs-Élysées', 'igor-stravinsky', 'thoi-ky-the-ky-20'),
    e('1948', 'Pierre Schaeffer làm những bản *musique concrète* đầu tiên ở đài phát thanh Pháp', 'nhac-dien-tu'),
  ]),
  p('reims', 'Reims', 'Pháp', 49.258, 4.032, 'europe', 'Reims', [
    e('thế kỷ XIV', 'Guillaume de Machaut làm giáo sĩ ở nhà thờ chính toà; *Messe de Nostre Dame*', 'guillaume-de-machaut', 'thoi-ky-trung-co'),
  ]),
  p('bingen', 'Bingen', 'Đức', 49.967, 7.899, 'europe', 'Hildegard of Bingen', [
    e('~1150', 'Hildegard von Bingen lập tu viện Rupertsberg; thánh ca và kịch nhạc *Ordo Virtutum*', 'hildegard-von-bingen'),
  ], 'Bingen am Rhein'),
  p('eisenach', 'Eisenach', 'Đức', 50.975, 10.320, 'europe', 'Eisenach', [
    e('1685', 'Johann Sebastian Bach ra đời', 'johann-sebastian-bach'),
  ]),
  p('weimar', 'Weimar', 'Đức', 50.979, 11.329, 'europe', 'Weimar', [
    e('1708 – 1717', 'Bach làm organist và nhạc trưởng ở triều Weimar', 'johann-sebastian-bach'),
    e('1848', 'Liszt nhận chức nhạc trưởng triều Weimar; thành phố thành trung tâm "Âm nhạc tương lai"', 'franz-liszt'),
  ]),
  p('leipzig', 'Leipzig', 'Đức', 51.340, 12.375, 'europe', 'Leipzig', [
    e('1723 – 1750', 'Bach làm Thomaskantor ở nhà thờ Thánh Thomas', 'johann-sebastian-bach', 'thoi-ky-baroque'),
    e('1835', 'Mendelssohn làm nhạc trưởng dàn nhạc Gewandhaus', 'felix-mendelssohn'),
    e('1843', 'Mendelssohn lập Nhạc viện Leipzig', 'felix-mendelssohn', 'thoi-ky-lang-man'),
  ]),
  p('halle', 'Halle', 'Đức', 51.483, 11.970, 'europe', 'Halle (Saale)', [
    e('1685', 'George Frideric Handel ra đời', 'george-frideric-handel'),
  ]),
  p('hamburg', 'Hamburg', 'Đức', 53.551, 9.994, 'europe', 'Hamburg', [
    e('1721 – 1767', 'Telemann làm giám đốc âm nhạc của năm nhà thờ chính thành phố', 'georg-philipp-telemann'),
    e('1833', 'Johannes Brahms ra đời', 'johannes-brahms'),
  ]),
  p('bonn', 'Bonn', 'Đức', 50.737, 7.098, 'europe', 'Bonn', [
    e('1770', 'Ludwig van Beethoven ra đời', 'ludwig-van-beethoven'),
  ]),
  p('zwickau', 'Zwickau', 'Đức', 50.718, 12.496, 'europe', 'Zwickau', [
    e('1810', 'Robert Schumann ra đời', 'robert-schumann'),
  ]),
  p('bayreuth', 'Bayreuth', 'Đức', 49.948, 11.578, 'europe', 'Bayreuth Festspielhaus', [
    e('1876', 'Nhà hát lễ hội của Wagner khai trương với lần diễn trọn đầu tiên bộ *Der Ring des Nibelungen*', 'richard-wagner', 'opera'),
  ]),
  p('frankfurt', 'Frankfurt', 'Đức', 50.110, 8.682, 'europe', 'Arthur Schopenhauer', [
    e('1833 – 1860', 'Schopenhauer sống ở đây tới cuối đời', 'schopenhauer-lo-trinh'),
  ], 'Frankfurt am Main'),
  p('gdansk', 'Gdańsk', 'Ba Lan', 54.352, 18.646, 'europe', 'Arthur Schopenhauer', [
    e('1788', 'Arthur Schopenhauer ra đời (khi đó là Danzig)', 'schopenhauer-lo-trinh'),
  ], 'Danzig'),
  p('darmstadt', 'Darmstadt', 'Đức', 49.873, 8.651, 'europe', 'Darmstädter Ferienkurse', [
    e('từ 1946', 'Khoá hè âm nhạc mới Darmstadt: nơi gặp nhau của Boulez, Stockhausen và nhạc tiền phong sau chiến tranh', 'pierre-boulez', 'karlheinz-stockhausen', 'thoi-ky-the-ky-20'),
  ]),
  p('cologne', 'Köln', 'Đức', 50.938, 6.960, 'europe', 'Studio for Electronic Music (WDR)', [
    e('1951', 'Đài WDR lập xưởng âm nhạc điện tử; Stockhausen làm việc ở đây', 'nhac-dien-tu', 'karlheinz-stockhausen'),
  ], 'Cologne'),
  p('vienna', 'Vienna', 'Áo', 48.208, 16.373, 'europe', 'Vienna', [
    e('1725', 'Fux, nhạc trưởng triều đình, xuất bản *Gradus ad Parnassum*', 'johann-joseph-fux', 'he-thong-fux-gradus-ad-parnassum'),
    e('1781', 'Mozart rời Salzburg, định cư ở Vienna', 'wolfgang-amadeus-mozart', 'thoi-ky-co-dien'),
    e('1792', 'Beethoven tới Vienna học với Haydn', 'ludwig-van-beethoven', 'joseph-haydn'),
    e('1797', 'Franz Schubert ra đời', 'franz-schubert'),
    e('1854', 'Eduard Hanslick, nhà phê bình Vienna, xuất bản *Vom Musikalisch-Schönen*', 'hanslick-lo-trinh'),
    e('1897 – 1907', 'Gustav Mahler làm giám đốc Nhà hát Opera triều đình', 'gustav-mahler'),
    e('1874', 'Arnold Schoenberg ra đời; về sau cùng học trò lập "Trường phái Vienna thứ hai"', 'arnold-schoenberg'),
  ], 'Wien'),
  p('salzburg', 'Salzburg', 'Áo', 47.800, 13.044, 'europe', 'Salzburg', [
    e('1756', 'Wolfgang Amadeus Mozart ra đời', 'wolfgang-amadeus-mozart'),
  ]),
  p('eisenstadt', 'Eisenstadt', 'Áo', 47.846, 16.527, 'europe', 'Joseph Haydn', [
    e('1761 – 1790', 'Haydn làm nhạc trưởng cho dòng họ Esterházy', 'joseph-haydn', 'thoi-ky-co-dien'),
  ]),
  p('raiding', 'Raiding', 'Áo', 47.565, 16.533, 'europe', 'Franz Liszt', [
    e('1811', 'Franz Liszt ra đời (khi đó thuộc Vương quốc Hungary)', 'franz-liszt'),
  ], 'Doborján'),
  p('budapest', 'Budapest', 'Hungary', 47.498, 19.040, 'europe', 'Franz Liszt Academy of Music', [
    e('1875', 'Liszt cùng lập Học viện Âm nhạc Hoàng gia', 'franz-liszt'),
    e('1907 – 1934', 'Béla Bartók dạy piano ở Học viện', 'bela-bartok'),
  ]),
  p('zelazowa-wola', 'Żelazowa Wola', 'Ba Lan', 52.256, 20.315, 'europe', 'Żelazowa Wola', [
    e('1810', 'Frédéric Chopin ra đời', 'frederic-chopin'),
  ]),
  p('prague', 'Praha', 'Séc', 50.088, 14.421, 'europe', 'Estates Theatre', [
    e('1787', '*Don Giovanni* của Mozart ra mắt ở Nhà hát Estates', 'wolfgang-amadeus-mozart', 'opera'),
  ], 'Prague'),
  p('nelahozeves', 'Nelahozeves', 'Séc', 50.262, 14.300, 'europe', 'Antonín Dvořák', [
    e('1841', 'Antonín Dvořák ra đời', 'antonin-dvorak'),
  ]),
  p('venice', 'Venice', 'Ý', 45.440, 12.336, 'europe', 'Teatro San Cassiano', [
    e('1613', 'Monteverdi làm maestro di cappella nhà thờ San Marco', 'claudio-monteverdi'),
    e('1637', 'Teatro San Cassiano mở cửa: nhà hát opera công cộng đầu tiên', 'opera', 'thoi-ky-baroque'),
    e('1678', 'Antonio Vivaldi ra đời; về sau dạy ở Ospedale della Pietà', 'antonio-vivaldi'),
  ], 'Venezia'),
  p('florence', 'Florence', 'Ý', 43.770, 11.256, 'europe', 'Bartolomeo Cristofori', [
    e('1600', '*Euridice* của Jacopo Peri: vở opera xưa nhất còn giữ được', 'jacopo-peri', 'opera'),
    e('~1700', 'Bartolomeo Cristofori làm những cây đàn piano đầu tiên', 'lich-su-piano'),
  ], 'Firenze'),
  p('mantua', 'Mantova', 'Ý', 45.156, 10.791, 'europe', "L'Orfeo", [
    e('1607', '*L\'Orfeo* của Monteverdi ra mắt ở triều Gonzaga', 'claudio-monteverdi', 'opera'),
  ], 'Mantua'),
  p('cremona', 'Cremona', 'Ý', 45.133, 10.022, 'europe', 'Cremona', [
    e('1567', 'Claudio Monteverdi ra đời', 'claudio-monteverdi'),
    e('thế kỷ XVII – XVIII', 'Xưởng đàn của gia đình Amati, Guarneri và Antonio Stradivari', 'violin'),
  ]),
  p('rome', 'Roma', 'Ý', 41.902, 12.496, 'europe', 'Giovanni Pierluigi da Palestrina', [
    e('thế kỷ XVI', 'Palestrina phụ trách ca đoàn ở các nhà thờ lớn của Roma, trong đó có Đền thờ Thánh Phêrô', 'giovanni-pierluigi-da-palestrina', 'thoi-ky-phuc-hung'),
  ], 'Rome'),
  p('milan', 'Milano', 'Ý', 45.464, 9.190, 'europe', 'La Scala', [
    e('1778', 'Nhà hát Teatro alla Scala khai trương', 'opera'),
    e('1842', '*Nabucco* của Verdi ra mắt ở La Scala', 'giuseppe-verdi'),
  ], 'Milan'),
  p('le-roncole', 'Le Roncole', 'Ý', 44.982, 10.040, 'europe', 'Giuseppe Verdi', [
    e('1813', 'Giuseppe Verdi ra đời', 'giuseppe-verdi'),
  ]),
  p('london', 'London', 'Anh', 51.507, -0.128, 'europe', 'London', [
    e('1659', 'Henry Purcell ra đời; về sau làm organist ở Tu viện Westminster', 'henry-purcell'),
    e('1712', 'Handel định cư ở London', 'george-frideric-handel'),
    e('1791 – 1795', 'Haydn sang London; mười hai giao hưởng "London"', 'joseph-haydn'),
  ]),
  p('dublin', 'Dublin', 'Ireland', 53.350, -6.260, 'europe', 'Messiah (Handel)', [
    e('1742', 'Oratorio *Messiah* của Handel ra mắt', 'george-frideric-handel'),
  ]),
  p('bergen', 'Bergen', 'Na Uy', 60.392, 5.322, 'europe', 'Bergen', [
    e('1843', 'Edvard Grieg ra đời', 'edvard-grieg'),
  ]),
  p('st-petersburg', 'Sankt-Peterburg', 'Nga', 59.934, 30.335, 'europe', 'Saint Petersburg Conservatory', [
    e('1862', 'Anton Rubinstein lập Nhạc viện Sankt-Peterburg', 'truong-phai-su-pham-nga'),
    e('1860s', '"Nhóm Năm người" (Balakirev, Cui, Mussorgsky, Rimsky-Korsakov, Borodin)', 'modest-mussorgsky', 'nikolai-rimsky-korsakov'),
  ], 'Saint Petersburg'),
  p('moscow', 'Moskva', 'Nga', 55.756, 37.617, 'europe', 'Moscow Conservatory', [
    e('1866', 'Nikolai Rubinstein lập Nhạc viện Moskva; Tchaikovsky dạy ở đây', 'pyotr-ilyich-tchaikovsky', 'truong-phai-su-pham-nga'),
    e('1922 – 1964', 'Heinrich Neuhaus dạy piano ở Nhạc viện Moskva', 'neuhaus-lo-trinh'),
  ], 'Moscow'),
  p('votkinsk', 'Votkinsk', 'Nga', 57.050, 54.000, 'europe', 'Votkinsk', [
    e('1840', 'Pyotr Ilyich Tchaikovsky ra đời', 'pyotr-ilyich-tchaikovsky'),
  ]),

  // ——— Châu Mỹ
  p('new-orleans', 'New Orleans', 'Hoa Kỳ', 29.951, -90.072, 'americas', 'New Orleans', [
    e('đầu thế kỷ XX', 'Cái nôi của jazz: các ban nhạc New Orleans cùng ngẫu hứng tập thể', 'phong-cach-jazz'),
  ]),
  p('sedalia', 'Sedalia', 'Hoa Kỳ', 38.704, -93.228, 'americas', 'Maple Leaf Rag', [
    e('1899', 'Nhà xuất bản John Stark in "Maple Leaf Rag" của Scott Joplin', 'scott-joplin'),
  ]),
  p('memphis', 'Memphis', 'Hoa Kỳ', 35.150, -90.049, 'americas', 'Memphis Blues', [
    e('1912', 'W. C. Handy in *The Memphis Blues*', 'blues-12-nhip'),
  ]),
  p('oklahoma-city', 'Oklahoma City', 'Hoa Kỳ', 35.468, -97.516, 'americas', 'Dallas Blues', [
    e('1912', '*Dallas Blues* của Hart Wand được in, vài tháng trước bản blues của Handy', 'blues-12-nhip'),
  ]),
  p('chicago', 'Chicago', 'Hoa Kỳ', 41.878, -87.630, 'americas', 'Louis Armstrong', [
    e('1925 – 1928', 'Louis Armstrong thu các đĩa Hot Five và Hot Seven', 'phong-cach-jazz', 'tu-am-giai-den-am-nhac'),
  ]),
  p('kansas-city', 'Kansas City', 'Hoa Kỳ', 39.100, -94.578, 'americas', 'Kansas City jazz', [
    e('thập niên 1930', 'Jazz Kansas City: riff, blues và dàn nhạc Count Basie', 'phong-cach-jazz', 'blues-12-nhip'),
  ]),
  p('new-york', 'New York', 'Hoa Kỳ', 40.758, -73.986, 'americas', 'Minton\'s Playhouse', [
    e('1917', 'Original Dixieland Jass Band thu "Livery Stable Blues", thường gọi là đĩa jazz đầu tiên', 'phong-cach-jazz'),
    e('thập niên 1920', 'Stride piano ở Harlem, trong các "rent party"', 'stride-piano'),
    e('đầu thập niên 1940', 'Các buổi jam ở Minton\'s Playhouse (Harlem): bebop ra đời', 'jam-session', 'phong-cach-jazz'),
    e('1959', 'Thu *Kind of Blue* (Miles Davis) và "Giant Steps" (John Coltrane)', 'jazz-dieu-thuc', 'phan-tich-giant-steps'),
  ]),
  p('woodstock', 'Woodstock', 'Hoa Kỳ', 42.041, -74.118, 'americas', "4′33″", [
    e('1952', 'David Tudor trình diễn lần đầu *4′33″* của John Cage', 'john-cage', 'thoi-ky-the-ky-20'),
  ], undefined, 'western'),
  p('havana', 'La Habana', 'Cuba', 23.113, -82.366, 'americas', 'Chano Pozo', [
    e('thế kỷ XIX – XX', 'Nhạc Afro-Cuban: clave, son, rumba — nền của latin jazz', 'clave-va-latin-jazz'),
    e('1947', 'Tay trống Chano Pozo từ Havana cùng Dizzy Gillespie làm "Manteca"', 'clave-va-latin-jazz', 'phong-cach-jazz'),
  ], 'Havana'),
  p('rio', 'Rio de Janeiro', 'Brazil', -22.907, -43.173, 'americas', 'Chega de Saudade', [
    e('1958', '"Chega de Saudade" (Jobim – Vinicius de Moraes) với tiếng guitar của João Gilberto: bossa nova', 'dem-bossa-nova'),
  ]),

  // ——— Việt Nam
  p('hue', 'Huế', 'Việt Nam', 16.463, 107.590, 'vietnam', 'Nhã nhạc', [
    e('1802 – 1945', 'Nhã nhạc cung đình triều Nguyễn', 'ca-hue-nha-nhac'),
    e('2003', 'UNESCO công nhận Nhã nhạc là Kiệt tác truyền khẩu và phi vật thể', 'ca-hue-nha-nhac'),
  ]),
  p('ha-noi', 'Hà Nội', 'Việt Nam', 21.028, 105.854, 'vietnam', 'Ca trù', [
    e('1927 – 1930', 'Nhạc viện Viễn Đông', 'nhac-vien-vien-dong'),
    e('cuối thập niên 1930', 'Các nhóm sáng tác tân nhạc đầu tiên', 'nhom-sang-tac-tan-nhac-dau-tien', 'tan-nhac-viet-nam'),
    e('2009', 'Ca trù được UNESCO đưa vào danh sách cần bảo vệ khẩn cấp', 'ca-tru'),
  ]),
  p('bac-ninh', 'Bắc Ninh', 'Việt Nam', 21.186, 106.076, 'vietnam', 'Quan họ', [
    e('2009', 'UNESCO công nhận Dân ca quan họ Bắc Ninh', 'quan-ho'),
  ]),
  p('phu-tho', 'Phú Thọ', 'Việt Nam', 21.322, 105.402, 'vietnam', 'Xoan singing', [
    e('2011 / 2017', 'Hát xoan: UNESCO đưa vào danh sách khẩn cấp (2011), chuyển sang danh sách đại diện (2017)', 'hat-xoan-hat-van-then'),
  ]),
  p('nghe-an', 'Nghệ An – Hà Tĩnh', 'Việt Nam', 18.679, 105.682, 'vietnam', 'Ví and Giặm folk songs of Nghệ Tĩnh', [
    e('2014', 'UNESCO công nhận Dân ca ví, giặm Nghệ Tĩnh', 'dan-ca-viet-nam'),
  ]),
  p('trung-bo', 'Trung Bộ', 'Việt Nam', 13.782, 109.219, 'vietnam', 'Bài chòi', [
    e('2017', 'UNESCO công nhận nghệ thuật Bài chòi Trung Bộ', 'dan-ca-viet-nam'),
  ]),
  p('tay-nguyen', 'Tây Nguyên', 'Việt Nam', 12.667, 108.050, 'vietnam', 'Space of Gong Culture', [
    e('2005', 'UNESCO công nhận Không gian văn hoá cồng chiêng Tây Nguyên', 'cong-chieng'),
  ]),
  p('sai-gon', 'TP. Hồ Chí Minh', 'Việt Nam', 10.776, 106.700, 'vietnam', 'Cải lương', [
    e('đầu thế kỷ XX', 'Cải lương hình thành ở Nam Bộ', 'cai-luong'),
    e('1954 – 1975', 'Tân nhạc miền Nam: thị trường đĩa hát, các dòng nhạc, du ca', 'tan-nhac-mien-nam-1954-1975'),
  ], 'Sài Gòn'),
  p('nam-bo', 'Nam Bộ', 'Việt Nam', 10.033, 105.784, 'vietnam', 'Đờn ca tài tử', [
    e('2013', 'UNESCO công nhận Đờn ca tài tử Nam Bộ', 'don-ca-tai-tu'),
  ]),

  // ——— Châu Á
  p('java', 'Yogyakarta – Surakarta', 'Indonesia', -7.797, 110.370, 'asia', 'Gamelan', [
    e('truyền thống', 'Gamelan Java ở các cung đình Yogyakarta và Surakarta', 'gamelan', 'ly-thuyet-gamelan-java-va-bali'),
  ]),
  p('bali', 'Bali', 'Indonesia', -8.506, 115.262, 'asia', 'Gamelan', [
    e('truyền thống', 'Gamelan Bali: nhịp nhanh, lối đan xen kotekan', 'gamelan', 'ly-thuyet-gamelan-java-va-bali'),
  ]),
]

/* ------------------------------------------------------------------ time and periods */

export const YEAR_MIN = 1100
export const YEAR_MAX = 2025

const ROMAN: Record<string, number> = { I: 1, V: 5, X: 10, L: 50 }
const roman = (r: string) => [...r].reduce((n, ch, i, a) => (ROMAN[ch] < (ROMAN[a[i + 1]] ?? 0) ? n - ROMAN[ch] : n + ROMAN[ch]), 0)

/**
 * Numeric span of an event's year text: "1723 – 1750", "~1160 – 1250", "29/5/1913", "từ 1946", "1860s",
 * "thập niên 1930", "đầu / cuối thập niên 1940", "thế kỷ XIV", "thế kỷ XVII – XVIII", "đầu thế kỷ XX", "2011 / 2017".
 * Undated texts ("truyền thống") give null and stay visible at every time.
 */
export function yearsOf(text: string): [number, number] | null {
  const t = text.toLowerCase()
  const cent = /thế kỷ ([ivxl]+)(?:\s*–\s*([ivxl]+))?/.exec(t)
  if (cent) {
    const a = (roman(cent[1].toUpperCase()) - 1) * 100, b = (roman((cent[2] ?? cent[1]).toUpperCase()) - 1) * 100 + 99
    if (t.startsWith('đầu')) return [a, a + 30]
    if (t.startsWith('cuối')) return [b - 30, b]
    return [a, b]
  }
  const dec = /(?:thập niên )?(\d{4})s?/.exec(t)
  if (/thập niên|\d{4}s/.test(t) && dec) {
    const a = Number(dec[1])
    if (t.startsWith('đầu')) return [a, a + 4]
    if (t.startsWith('cuối')) return [a + 5, a + 9]
    return [a, a + 9]
  }
  const ys = [...t.matchAll(/\d{4}/g)].map((m) => Number(m[0]))
  if (!ys.length) return null
  if (t.startsWith('từ')) return [ys[0], YEAR_MAX]
  return [Math.min(...ys), Math.max(...ys)]
}

export const ERAS: Record<Era, { title: string; hue: number }> = {
  medieval: { title: 'Trung cổ', hue: 300 },
  renaissance: { title: 'Phục hưng', hue: 150 },
  baroque: { title: 'Baroque', hue: 55 },
  classical: { title: 'Cổ điển', hue: 235 },
  romantic: { title: 'Lãng mạn', hue: 350 },
  modern: { title: 'Thế kỷ 20', hue: 195 },
  jazz: { title: 'Jazz & Mỹ Latinh', hue: 85 },
  vietnam: { title: 'Việt Nam', hue: 25 },
  world: { title: 'Âm nhạc thế giới', hue: 125 },
}

const DEFAULT_TRADITION: Record<Region, Tradition> = { europe: 'western', americas: 'jazz', vietnam: 'vietnam', asia: 'world' }
export const traditionOf = (pl: Place) => pl.tradition ?? DEFAULT_TRADITION[pl.region]

/** Period of an event: its place's tradition, and for Western music the period its first year falls in. */
export function eraOf(ev: MapEvent, pl: Place): Era {
  const tr = traditionOf(pl)
  if (tr !== 'western') return tr
  const y = yearsOf(ev.year)?.[0] ?? 1900
  return y < 1400 ? 'medieval' : y < 1600 ? 'renaissance' : y < 1750 ? 'baroque' : y < 1820 ? 'classical' : y < 1900 ? 'romantic' : 'modern'
}

/** slug → the places whose events link to it (for "on the map" in articles). */
export const PLACES_BY_SLUG: Map<string, Place[]> = (() => {
  const m = new Map<string, Place[]>()
  for (const pl of PLACES) for (const ev of pl.events) for (const s of ev.slugs) {
    const list = m.get(s) ?? []
    if (!list.includes(pl)) list.push(pl)
    m.set(s, list)
  }
  return m
})()

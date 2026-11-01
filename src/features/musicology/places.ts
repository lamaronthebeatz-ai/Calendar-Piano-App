/**
 * Places for the musicology map: where things happened, with links into the library. Coordinates are city centres
 * (or a regional centre for practices spread over a region); each place names the Wikipedia article its facts and
 * coordinates come from. Every slug is checked by scripts/check-links.mjs.
 */
export type Region = 'europe' | 'americas' | 'vietnam' | 'asia' | 'other'
/** Musical tradition of a place; Western events are further split into periods by year. */
export type Tradition = 'western' | 'jazz' | 'vietnam' | 'world'
export type Era = 'medieval' | 'renaissance' | 'baroque' | 'classical' | 'romantic' | 'modern' | 'jazz' | 'vietnam' | 'world'

export interface MapEvent {
  /** Year or span as written ("1723 – 1750", "~1160"). */
  year: string
  text: string
  slugs: string[]
  /** Overrides the place's tradition for this event (a Western composer born in Rio, say). */
  tradition?: Tradition
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
  americas: { title: 'Châu Mỹ', box: [-124, 50, -35, -40] },
  vietnam: { title: 'Việt Nam', box: [101, 24, 112, 8] },
  asia: { title: 'Châu Á', box: [68, 46, 145, -12] },
  other: { title: 'Trung Đông, châu Phi', box: [-20, 45, 62, -5] },
}

const p = (id: string, name: string, country: string, lat: number, lon: number, region: Region, wiki: string, events: MapEvent[], local?: string, tradition?: Tradition): Place =>
  ({ id, name, country, lat, lon, region, wiki, events, local, tradition })
const e = (year: string, text: string, ...slugs: string[]): MapEvent => ({ year, text, slugs })
/** A Western-art-music event in a place of another tradition. */
const ew = (year: string, text: string, ...slugs: string[]): MapEvent => ({ year, text, slugs, tradition: 'western' })

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
    e('1668', 'François Couperin ra đời', 'francois-couperin'),
    e('1823', 'Liszt mười hai tuổi theo gia đình tới Paris', 'franz-liszt'),
    e('1835', 'Camille Saint-Saëns ra đời', 'camille-saint-saens'),
    e('1838', 'Georges Bizet ra đời', 'georges-bizet'),
    e('1910', 'Ballets Russes công diễn *L\'Oiseau de feu*, vở ballet đầu tiên Stravinsky viết cho Diaghilev', 'igor-stravinsky'),
    e('1883', 'Edgard Varèse ra đời', 'edgard-varese'),
    e('1899', 'Francis Poulenc ra đời', 'francis-poulenc'),
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
    e('1714', 'Carl Philipp Emanuel Bach ra đời', 'carl-philipp-emanuel-bach'),
  ]),
  p('leipzig', 'Leipzig', 'Đức', 51.340, 12.375, 'europe', 'Leipzig', [
    e('1723 – 1750', 'Bach làm Thomaskantor ở nhà thờ Thánh Thomas', 'johann-sebastian-bach', 'thoi-ky-baroque'),
    e('1835', 'Mendelssohn làm nhạc trưởng dàn nhạc Gewandhaus', 'felix-mendelssohn'),
    e('1843', 'Mendelssohn lập Nhạc viện Leipzig', 'felix-mendelssohn', 'thoi-ky-lang-man'),
    e('1813', 'Richard Wagner ra đời', 'richard-wagner'),
    e('1819', 'Clara Wieck (về sau là Clara Schumann) ra đời', 'clara-schumann'),
    e('1828', 'Robert Schumann tới Leipzig học luật, rồi theo học piano với Friedrich Wieck', 'robert-schumann'),
  ]),
  p('halle', 'Halle', 'Đức', 51.483, 11.970, 'europe', 'Halle (Saale)', [
    e('1685', 'George Frideric Handel ra đời', 'george-frideric-handel'),
  ]),
  p('hamburg', 'Hamburg', 'Đức', 53.551, 9.994, 'europe', 'Hamburg', [
    e('1721 – 1767', 'Telemann làm giám đốc âm nhạc của năm nhà thờ chính thành phố', 'georg-philipp-telemann'),
    e('1833', 'Johannes Brahms ra đời', 'johannes-brahms'),
    e('1703 – 1706', 'Handel chơi violin và harpsichord ở nhà hát opera Gänsemarkt', 'george-frideric-handel'),
    e('1809', 'Felix Mendelssohn ra đời', 'felix-mendelssohn'),
  ]),
  p('bonn', 'Bonn', 'Đức', 50.737, 7.098, 'europe', 'Bonn', [
    e('1770', 'Ludwig van Beethoven ra đời', 'ludwig-van-beethoven'),
    e('1856', 'Robert Schumann mất ở Endenich, nay thuộc Bonn', 'robert-schumann'),
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
    e('1819', 'Jacques Offenbach ra đời', 'jacques-offenbach'),
  ], 'Cologne'),
  p('vienna', 'Vienna', 'Áo', 48.208, 16.373, 'europe', 'Vienna', [
    e('1725', 'Fux, nhạc trưởng triều đình, xuất bản *Gradus ad Parnassum*', 'johann-joseph-fux', 'he-thong-fux-gradus-ad-parnassum'),
    e('1781', 'Mozart rời Salzburg, định cư ở Vienna', 'wolfgang-amadeus-mozart', 'thoi-ky-co-dien'),
    e('1792', 'Beethoven tới Vienna học với Haydn', 'ludwig-van-beethoven', 'joseph-haydn'),
    e('1797', 'Franz Schubert ra đời', 'franz-schubert'),
    e('1854', 'Eduard Hanslick, nhà phê bình Vienna, xuất bản *Vom Musikalisch-Schönen*', 'hanslick-lo-trinh'),
    e('1897 – 1907', 'Gustav Mahler làm giám đốc Nhà hát Opera triều đình', 'gustav-mahler'),
    e('1874', 'Arnold Schoenberg ra đời; về sau cùng học trò lập "Trường phái Vienna thứ hai"', 'arnold-schoenberg'),
    e('1791', 'Carl Czerny ra đời', 'carl-czerny'),
    e('1862', 'Brahms tới Vienna và ở lại đây tới cuối đời', 'johannes-brahms'),
    e('1825', 'Johann Strauss II ra đời', 'johann-strauss-ii'),
    e('1883', 'Anton Webern ra đời', 'anton-webern'),
    e('1885', 'Alban Berg ra đời', 'alban-berg'),
    e('1740', 'Haydn vào ca đoàn thiếu nhi nhà thờ Thánh Stephen', 'joseph-haydn'),
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
    e('1671', 'Tomaso Albinoni ra đời', 'tomaso-albinoni'),
    e('1883', 'Richard Wagner mất ở Venice', 'richard-wagner'),
    e('1924', 'Luigi Nono ra đời', 'luigi-nono'),
  ], 'Venezia'),
  p('florence', 'Florence', 'Ý', 43.770, 11.256, 'europe', 'Bartolomeo Cristofori', [
    e('1600', '*Euridice* của Jacopo Peri: vở opera xưa nhất còn giữ được', 'jacopo-peri', 'opera'),
    e('~1700', 'Bartolomeo Cristofori làm những cây đàn piano đầu tiên', 'lich-su-piano'),
  ], 'Firenze'),
  p('mantua', 'Mantova', 'Ý', 45.156, 10.791, 'europe', "L'Orfeo", [
    e('1607', '*L\'Orfeo* của Monteverdi ra mắt ở triều Gonzaga', 'claudio-monteverdi', 'opera'),
    e('~1590', 'Monteverdi vào phục vụ triều Gonzaga', 'claudio-monteverdi'),
  ], 'Mantua'),
  p('cremona', 'Cremona', 'Ý', 45.133, 10.022, 'europe', 'Cremona', [
    e('1567', 'Claudio Monteverdi ra đời', 'claudio-monteverdi'),
    e('thế kỷ XVII – XVIII', 'Xưởng đàn của gia đình Amati, Guarneri và Antonio Stradivari', 'violin'),
  ]),
  p('rome', 'Roma', 'Ý', 41.902, 12.496, 'europe', 'Giovanni Pierluigi da Palestrina', [
    e('thế kỷ XVI', 'Palestrina phụ trách ca đoàn ở các nhà thờ lớn của Roma, trong đó có Đền thờ Thánh Phêrô', 'giovanni-pierluigi-da-palestrina', 'thoi-ky-phuc-hung'),
    e('1707', 'Handel ở Ý (1706 – 1710), phần lớn thời gian tại Roma', 'george-frideric-handel'),
    e('1752', 'Muzio Clementi ra đời', 'muzio-clementi'),
    e('1861', 'Liszt sống ở Roma, về sau nhận chức tu sĩ', 'franz-liszt'),
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
    e('1791', 'Haydn tới London theo lời mời của Johann Peter Salomon', 'joseph-haydn'),
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
    e('1833', 'Alexander Borodin ra đời', 'alexander-borodin'),
    e('1862 – 1865', 'Tchaikovsky học ở khoá đầu tiên của Nhạc viện', 'pyotr-ilyich-tchaikovsky'),
    e('1882', 'Igor Stravinsky ra đời ở Oranienbaum, gần Sankt-Peterburg', 'igor-stravinsky'),
    e('1906', 'Dmitri Shostakovich ra đời', 'dmitri-shostakovich'),
    e('1855', 'Anatoly Lyadov ra đời', 'anatoly-lyadov'),
    e('1865', 'Alexander Glazunov ra đời', 'alexander-glazunov'),
  ], 'Saint Petersburg'),
  p('moscow', 'Moskva', 'Nga', 55.756, 37.617, 'europe', 'Moscow Conservatory', [
    e('1866', 'Nikolai Rubinstein lập Nhạc viện Moskva; Tchaikovsky dạy ở đây', 'pyotr-ilyich-tchaikovsky', 'truong-phai-su-pham-nga'),
    e('1922 – 1964', 'Heinrich Neuhaus dạy piano ở Nhạc viện Moskva', 'neuhaus-lo-trinh'),
    e('1872', 'Alexander Scriabin ra đời', 'alexander-scriabin'),
    e('1880', 'Nikolai Medtner ra đời', 'nikolai-medtner'),
  ], 'Moscow'),
  p('votkinsk', 'Votkinsk', 'Nga', 57.050, 54.000, 'europe', 'Votkinsk', [
    e('1840', 'Pyotr Ilyich Tchaikovsky ra đời', 'pyotr-ilyich-tchaikovsky'),
  ]),

  // ——— Châu Mỹ
  p('new-orleans', 'New Orleans', 'Hoa Kỳ', 29.951, -90.072, 'americas', 'New Orleans', [
    e('đầu thế kỷ XX', 'Cái nôi của jazz: các ban nhạc New Orleans cùng ngẫu hứng tập thể', 'phong-cach-jazz'),
    e('1901', 'Louis Armstrong ra đời', 'phong-cach-jazz'),
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
    e('1922', 'Louis Armstrong tới Chicago, chơi trong ban King Oliver', 'phong-cach-jazz'),
    e('1940', 'Herbie Hancock ra đời', 'herbie-hancock'),
  ]),
  p('kansas-city', 'Kansas City', 'Hoa Kỳ', 39.100, -94.578, 'americas', 'Kansas City jazz', [
    e('thập niên 1930', 'Jazz Kansas City: riff, blues và dàn nhạc Count Basie', 'phong-cach-jazz', 'blues-12-nhip'),
  ]),
  p('new-york', 'New York', 'Hoa Kỳ', 40.758, -73.986, 'americas', 'Minton\'s Playhouse', [
    e('1917', 'Original Dixieland Jass Band thu "Livery Stable Blues", thường gọi là đĩa jazz đầu tiên', 'phong-cach-jazz'),
    e('thập niên 1920', 'Stride piano ở Harlem, trong các "rent party"', 'stride-piano'),
    e('đầu thập niên 1940', 'Các buổi jam ở Minton\'s Playhouse (Harlem): bebop ra đời', 'jam-session', 'phong-cach-jazz'),
    e('1959', 'Thu *Kind of Blue* (Miles Davis) và "Giant Steps" (John Coltrane)', 'jazz-dieu-thuc', 'phan-tich-giant-steps'),
    ew('1898', 'George Gershwin ra đời ở Brooklyn', 'george-gershwin'),
    ew('1900', 'Aaron Copland ra đời ở Brooklyn', 'aaron-copland'),
    e('1904', 'Fats Waller ra đời', 'fats-waller'),
    e('1924', 'Louis Armstrong vào ban Fletcher Henderson ở New York', 'phong-cach-jazz'),
    e('1924', 'Bud Powell ra đời ở Harlem', 'bud-powell'),
    ew('1936', 'Steve Reich ra đời', 'steve-reich'),
    ew('1926', 'Morton Feldman ra đời', 'morton-feldman'),
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
    ew('1887', 'Heitor Villa-Lobos ra đời', 'heitor-villa-lobos'),
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
    e('1910', 'Nguyễn Xuân Khoát ra đời', 'nguyen-xuan-khoat'),
    e('1914', 'Lê Thương ra đời', 'le-thuong'),
    e('1915', 'Dương Thiệu Tước ra đời ở Hà Đông (nay thuộc Hà Nội)', 'duong-thieu-tuoc'),
    e('1916', 'Thẩm Oánh ra đời', 'tham-oanh'),
    e('1921', 'Phạm Duy ra đời', 'pham-duy'),
    e('1940', 'Nguyễn Thiện Đạo ra đời', 'nguyen-thien-dao'),
    e('1944', 'Văn Cao viết *Tiến quân ca* ở Hà Nội', 'van-cao'),
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
    e('1939', 'Trịnh Công Sơn ra đời ở Buôn Ma Thuột', 'nhac-trinh'),
  ]),
  p('sai-gon', 'TP. Hồ Chí Minh', 'Việt Nam', 10.776, 106.700, 'vietnam', 'Cải lương', [
    e('đầu thế kỷ XX', 'Cải lương hình thành ở Nam Bộ', 'cai-luong'),
    e('1954 – 1975', 'Tân nhạc miền Nam: thị trường đĩa hát, các dòng nhạc, du ca', 'tan-nhac-mien-nam-1954-1975'),
  ], 'Sài Gòn'),
  p('nam-bo', 'Nam Bộ', 'Việt Nam', 10.033, 105.784, 'vietnam', 'Đờn ca tài tử', [
    e('2013', 'UNESCO công nhận Đờn ca tài tử Nam Bộ', 'don-ca-tai-tu'),
    e('1921', 'Lưu Hữu Phước ra đời ở Ô Môn, Cần Thơ', 'luu-huu-phuoc'),
  ]),

  // ——— nơi sinh và làm việc, mở rộng 11/2026
  p('kothen', 'Köthen', 'Đức', 51.751, 11.971, 'europe', 'Köthen', [
    e('1717 – 1723', 'Bach làm nhạc trưởng triều Köthen; thời kỳ của các concerto Brandenburg', 'johann-sebastian-bach'),
  ]),
  p('warsaw', 'Warszawa', 'Ba Lan', 52.230, 21.012, 'europe', 'Frédéric Chopin', [
    e('1810 – 1830', 'Chopin lớn lên và học ở Warszawa trước khi rời Ba Lan', 'frederic-chopin'),
  ], 'Warsaw'),
  p('saint-germain', 'Saint-Germain-en-Laye', 'Pháp', 48.898, 2.094, 'europe', 'Claude Debussy', [e('1862', 'Claude Debussy ra đời', 'claude-debussy')]),
  p('ciboure', 'Ciboure', 'Pháp', 43.385, -1.668, 'europe', 'Maurice Ravel', [e('1875', 'Maurice Ravel ra đời', 'maurice-ravel')]),
  p('la-cote', 'La Côte-Saint-André', 'Pháp', 45.393, 5.261, 'europe', 'Hector Berlioz', [e('1803', 'Hector Berlioz ra đời', 'hector-berlioz')]),
  p('pamiers', 'Pamiers', 'Pháp', 43.117, 1.611, 'europe', 'Gabriel Fauré', [e('1845', 'Gabriel Fauré ra đời', 'gabriel-faure')]),
  p('honfleur', 'Honfleur', 'Pháp', 49.419, 0.233, 'europe', 'Erik Satie', [e('1866', 'Erik Satie ra đời', 'erik-satie')]),
  p('dijon', 'Dijon', 'Pháp', 47.322, 5.041, 'europe', 'Jean-Philippe Rameau', [e('1683', 'Jean-Philippe Rameau ra đời', 'jean-philippe-rameau')]),
  p('avignon', 'Avignon', 'Pháp', 43.949, 4.806, 'europe', 'Olivier Messiaen', [e('1908', 'Olivier Messiaen ra đời', 'olivier-messiaen')]),
  p('montbrison', 'Montbrison', 'Pháp', 45.607, 4.065, 'europe', 'Pierre Boulez', [e('1925', 'Pierre Boulez ra đời', 'pierre-boulez')]),
  p('mons', 'Mons', 'Bỉ', 50.454, 3.952, 'europe', 'Orlande de Lassus', [e('~1532', 'Orlande de Lassus ra đời', 'orlande-de-lassus', 'thoi-ky-phuc-hung')]),
  p('broadheath', 'Lower Broadheath', 'Anh', 52.211, -2.268, 'europe', 'Edward Elgar', [e('1857', 'Edward Elgar ra đời', 'edward-elgar')]),
  p('lowestoft', 'Lowestoft', 'Anh', 52.481, 1.753, 'europe', 'Benjamin Britten', [e('1913', 'Benjamin Britten ra đời', 'benjamin-britten')]),
  p('cheltenham', 'Cheltenham', 'Anh', 51.899, -2.078, 'europe', 'Gustav Holst', [e('1874', 'Gustav Holst ra đời', 'gustav-holst')]),
  p('down-ampney', 'Down Ampney', 'Anh', 51.670, -1.857, 'europe', 'Ralph Vaughan Williams', [e('1872', 'Ralph Vaughan Williams ra đời', 'ralph-vaughan-williams')]),
  p('hameenlinna', 'Hämeenlinna', 'Phần Lan', 60.996, 24.464, 'europe', 'Jean Sibelius', [e('1865', 'Jean Sibelius ra đời', 'jean-sibelius')]),
  p('norre-lyndelse', 'Nørre Lyndelse', 'Đan Mạch', 55.233, 10.417, 'europe', 'Carl Nielsen', [e('1865', 'Carl Nielsen ra đời ở Sortelung, gần Nørre Lyndelse', 'carl-nielsen')]),
  p('hukvaldy', 'Hukvaldy', 'Séc', 49.623, 18.222, 'europe', 'Leoš Janáček', [e('1854', 'Leoš Janáček ra đời', 'leos-janacek')]),
  p('litomysl', 'Litomyšl', 'Séc', 49.870, 16.311, 'europe', 'Bedřich Smetana', [e('1824', 'Bedřich Smetana ra đời', 'bedrich-smetana')]),
  p('ansfelden', 'Ansfelden', 'Áo', 48.209, 14.290, 'europe', 'Anton Bruckner', [e('1824', 'Anton Bruckner ra đời', 'anton-bruckner')]),
  p('munich', 'München', 'Đức', 48.137, 11.576, 'europe', 'Richard Strauss', [e('1864', 'Richard Strauss ra đời', 'richard-strauss')], 'Munich'),
  p('eutin', 'Eutin', 'Đức', 54.137, 10.618, 'europe', 'Carl Maria von Weber', [e('1786', 'Carl Maria von Weber ra đời', 'carl-maria-von-weber')]),
  p('nuremberg', 'Nürnberg', 'Đức', 49.452, 11.077, 'europe', 'Johann Pachelbel', [e('1653', 'Johann Pachelbel ra đời', 'johann-pachelbel')], 'Nuremberg'),
  p('kostritz', 'Bad Köstritz', 'Đức', 50.930, 12.010, 'europe', 'Heinrich Schütz', [e('1585', 'Heinrich Schütz ra đời', 'heinrich-schutz')]),
  p('erasbach', 'Erasbach', 'Đức', 49.149, 11.532, 'europe', 'Christoph Willibald Gluck', [e('1714', 'Christoph Willibald Gluck ra đời', 'christoph-willibald-gluck')]),
  p('modrath', 'Mödrath', 'Đức', 50.870, 6.700, 'europe', 'Karlheinz Stockhausen', [e('1928', 'Karlheinz Stockhausen ra đời', 'karlheinz-stockhausen')]),
  p('pesaro', 'Pesaro', 'Ý', 43.910, 12.913, 'europe', 'Gioachino Rossini', [e('1792', 'Gioachino Rossini ra đời', 'gioachino-rossini')]),
  p('bergamo', 'Bergamo', 'Ý', 45.698, 9.677, 'europe', 'Gaetano Donizetti', [e('1797', 'Gaetano Donizetti ra đời', 'gaetano-donizetti')]),
  p('catania', 'Catania', 'Ý', 37.502, 15.087, 'europe', 'Vincenzo Bellini', [e('1801', 'Vincenzo Bellini ra đời', 'vincenzo-bellini')]),
  p('lucca', 'Lucca', 'Ý', 43.843, 10.505, 'europe', 'Giacomo Puccini', [e('1858', 'Giacomo Puccini ra đời', 'giacomo-puccini')]),
  p('genoa', 'Genova', 'Ý', 44.407, 8.934, 'europe', 'Niccolò Paganini', [e('1782', 'Niccolò Paganini ra đời', 'niccolo-paganini')], 'Genoa'),
  p('fusignano', 'Fusignano', 'Ý', 44.466, 11.956, 'europe', 'Arcangelo Corelli', [e('1653', 'Arcangelo Corelli ra đời', 'arcangelo-corelli')]),
  p('naples', 'Napoli', 'Ý', 40.852, 14.268, 'europe', 'Domenico Scarlatti', [e('1685', 'Domenico Scarlatti ra đời', 'domenico-scarlatti')], 'Naples'),
  p('palermo', 'Palermo', 'Ý', 38.116, 13.361, 'europe', 'Alessandro Scarlatti', [e('1660', 'Alessandro Scarlatti ra đời', 'alessandro-scarlatti')]),
  p('jesi', 'Jesi', 'Ý', 43.523, 13.244, 'europe', 'Giovanni Battista Pergolesi', [e('1710', 'Giovanni Battista Pergolesi ra đời', 'giovanni-battista-pergolesi')]),
  p('camprodon', 'Camprodon', 'Tây Ban Nha', 42.312, 2.366, 'europe', 'Isaac Albéniz', [e('1860', 'Isaac Albéniz ra đời', 'isaac-albeniz')]),
  p('lleida', 'Lleida', 'Tây Ban Nha', 41.617, 0.620, 'europe', 'Enrique Granados', [e('1867', 'Enrique Granados ra đời', 'enrique-granados')]),
  p('cadiz', 'Cádiz', 'Tây Ban Nha', 36.527, -6.289, 'europe', 'Manuel de Falla', [e('1876', 'Manuel de Falla ra đời', 'manuel-de-falla')]),
  p('kecskemet', 'Kecskemét', 'Hungary', 46.907, 19.692, 'europe', 'Zoltán Kodály', [e('1882', 'Zoltán Kodály ra đời', 'zoltan-kodaly')]),
  p('sannicolau', 'Sânnicolau Mare', 'Romania', 46.072, 20.629, 'europe', 'Béla Bartók', [e('1881', 'Béla Bartók ra đời (khi đó là Nagyszentmiklós, Hungary)', 'bela-bartok')], 'Nagyszentmiklós'),
  p('tarnaveni', 'Târnăveni', 'Romania', 46.330, 24.283, 'europe', 'György Ligeti', [e('1923', 'György Ligeti ra đời (khi đó là Dicsőszentmárton)', 'gyorgy-ligeti')], 'Dicsőszentmárton'),
  p('liveni', 'Liveni', 'Romania', 48.000, 26.500, 'europe', 'George Enescu', [e('1881', 'George Enescu ra đời', 'george-enescu')]),
  p('debica', 'Dębica', 'Ba Lan', 50.051, 21.411, 'europe', 'Krzysztof Penderecki', [e('1933', 'Krzysztof Penderecki ra đời', 'krzysztof-penderecki')]),
  p('bratislava', 'Bratislava', 'Slovakia', 48.149, 17.107, 'europe', 'Johann Nepomuk Hummel', [e('1778', 'Johann Nepomuk Hummel ra đời (khi đó là Pressburg)', 'johann-nepomuk-hummel')], 'Pressburg'),
  p('kropyvnytskyi', 'Kropyvnytskyi', 'Ukraina', 48.508, 32.262, 'europe', 'Heinrich Neuhaus', [e('1888', 'Heinrich Neuhaus ra đời (khi đó là Elisavetgrad)', 'heinrich-neuhaus', 'neuhaus-lo-trinh')], 'Elisavetgrad'),
  p('sontsivka', 'Sontsivka', 'Ukraina', 48.000, 37.100, 'europe', 'Sergei Prokofiev', [e('1891', 'Sergei Prokofiev ra đời (khi đó là Sontsovka)', 'sergei-prokofiev')], 'Sontsovka'),
  p('washington', 'Washington, D.C.', 'Hoa Kỳ', 38.907, -77.037, 'americas', 'Duke Ellington', [e('1899', 'Duke Ellington ra đời', 'duke-ellington')]),
  p('rocky-mount', 'Rocky Mount', 'Hoa Kỳ', 35.938, -77.791, 'americas', 'Thelonious Monk', [e('1917', 'Thelonious Monk ra đời', 'thelonious-monk')]),
  p('toledo', 'Toledo', 'Hoa Kỳ', 41.654, -83.537, 'americas', 'Art Tatum', [e('1909', 'Art Tatum ra đời', 'art-tatum')]),
  p('plainfield', 'Plainfield', 'Hoa Kỳ', 40.634, -74.407, 'americas', 'Bill Evans', [e('1929', 'Bill Evans ra đời', 'bill-evans')]),
  p('new-brunswick', 'New Brunswick', 'Hoa Kỳ', 40.486, -74.452, 'americas', 'James P. Johnson', [e('1894', 'James P. Johnson ra đời', 'james-p-johnson', 'stride-piano')]),
  p('philadelphia', 'Philadelphia', 'Hoa Kỳ', 39.953, -75.165, 'americas', 'McCoy Tyner', [e('1938', 'McCoy Tyner ra đời', 'mccoy-tyner')]),
  p('chelsea-ma', 'Chelsea', 'Hoa Kỳ', 42.392, -71.033, 'americas', 'Chick Corea', [e('1941', 'Chick Corea ra đời', 'chick-corea')]),
  p('concord', 'Concord', 'Hoa Kỳ', 37.978, -122.031, 'americas', 'Dave Brubeck', [e('1920', 'Dave Brubeck ra đời', 'dave-brubeck')]),
  p('montreal', 'Montréal', 'Canada', 45.502, -73.567, 'americas', 'Oscar Peterson', [e('1925', 'Oscar Peterson ra đời', 'oscar-peterson')]),
  p('danbury', 'Danbury', 'Hoa Kỳ', 41.395, -73.454, 'americas', 'Charles Ives', [e('1874', 'Charles Ives ra đời', 'charles-ives')], undefined, 'western'),
  p('lawrence', 'Lawrence', 'Hoa Kỳ', 42.707, -71.163, 'americas', 'Leonard Bernstein', [e('1918', 'Leonard Bernstein ra đời', 'leonard-bernstein')], undefined, 'western'),
  p('baltimore', 'Baltimore', 'Hoa Kỳ', 39.290, -76.612, 'americas', 'Philip Glass', [e('1937', 'Philip Glass ra đời', 'philip-glass')], undefined, 'western'),
  p('los-angeles', 'Los Angeles', 'Hoa Kỳ', 34.052, -118.244, 'americas', 'John Cage', [
    e('1912', 'John Cage ra đời', 'john-cage'),
    e('1940s', 'Stravinsky định cư ở Hollywood từ đầu thập niên 1940 tới gần cuối đời', 'igor-stravinsky'),
    e('1743', 'Luigi Boccherini ra đời', 'luigi-boccherini'),
  ], undefined, 'western'),
  p('mar-del-plata', 'Mar del Plata', 'Argentina', -38.005, -57.543, 'americas', 'Astor Piazzolla', [e('1921', 'Astor Piazzolla ra đời', 'astor-piazzolla')], undefined, 'western'),
  p('buenos-aires', 'Buenos Aires', 'Argentina', -34.604, -58.382, 'americas', 'Alberto Ginastera', [e('1916', 'Alberto Ginastera ra đời', 'alberto-ginastera')], undefined, 'western'),
  p('hai-phong', 'Hải Phòng', 'Việt Nam', 20.845, 106.688, 'vietnam', 'Văn Cao', [
    e('1920', 'Hoàng Quý ra đời', 'hoang-quy'),
    e('1923', 'Văn Cao ra đời', 'van-cao'),
  ]),
  p('nam-dinh', 'Nam Định', 'Việt Nam', 20.420, 106.168, 'vietnam', 'Đặng Thế Phong', [
    e('1918', 'Đặng Thế Phong ra đời', 'dang-the-phong'),
    e('1922', 'Hoàng Trọng ra đời', 'hoang-trong'),
  ]),
  p('tokyo', 'Tokyo', 'Nhật Bản', 35.682, 139.692, 'asia', 'Tōru Takemitsu', [e('1930', 'Tōru Takemitsu ra đời', 'toru-takemitsu')], undefined, 'western'),

  p('dresden', 'Dresden', 'Đức', 51.050, 13.738, 'europe', 'Dresden', [
    e('1617 – 1672', 'Heinrich Schütz làm nhạc trưởng triều Saxony', 'heinrich-schutz', 'thoi-ky-baroque'),
    e('1817', 'Carl Maria von Weber làm nhạc trưởng opera Đức ở Dresden', 'carl-maria-von-weber'),
    e('1843', 'Wagner làm nhạc trưởng triều Saxony', 'richard-wagner'),
  ]),
  p('zurich', 'Zürich', 'Thuỵ Sĩ', 47.377, 8.541, 'europe', 'Richard Wagner', [e('1849', 'Wagner lưu vong ở Zürich sau cuộc khởi nghĩa Dresden', 'richard-wagner')]),
  p('dusseldorf', 'Düsseldorf', 'Đức', 51.228, 6.774, 'europe', 'Robert Schumann', [e('1850', 'Schumann làm giám đốc âm nhạc thành phố', 'robert-schumann')]),
  p('arnstadt', 'Arnstadt', 'Đức', 50.835, 10.947, 'europe', 'Arnstadt', [e('1703', 'Bach làm organist đầu tiên, ở nhà thờ Mới', 'johann-sebastian-bach')]),
  p('rohrau', 'Rohrau', 'Áo', 48.067, 16.862, 'europe', 'Joseph Haydn', [e('1732', 'Joseph Haydn ra đời', 'joseph-haydn')]),
  p('kaliste', 'Kaliště', 'Séc', 49.592, 15.302, 'europe', 'Gustav Mahler', [e('1860', 'Gustav Mahler ra đời', 'gustav-mahler')]),
  p('tikhvin', 'Tikhvin', 'Nga', 59.645, 33.510, 'europe', 'Nikolai Rimsky-Korsakov', [e('1844', 'Nikolai Rimsky-Korsakov ra đời', 'nikolai-rimsky-korsakov')]),
  p('hanau', 'Hanau', 'Đức', 50.133, 8.917, 'europe', 'Paul Hindemith', [e('1895', 'Paul Hindemith ra đời', 'paul-hindemith')]),
  p('dessau', 'Dessau', 'Đức', 51.835, 12.243, 'europe', 'Kurt Weill', [e('1900', 'Kurt Weill ra đời', 'kurt-weill')]),
  p('paide', 'Paide', 'Estonia', 58.886, 25.557, 'europe', 'Arvo Pärt', [e('1935', 'Arvo Pärt ra đời', 'arvo-part')]),
  p('liege', 'Liège', 'Bỉ', 50.633, 5.567, 'europe', 'César Franck', [e('1822', 'César Franck ra đời', 'cesar-franck')]),
  p('marseille', 'Marseille', 'Pháp', 43.296, 5.370, 'europe', 'Darius Milhaud', [e('1892', 'Darius Milhaud ra đời', 'darius-milhaud')]),
  p('le-havre', 'Le Havre', 'Pháp', 49.494, 0.108, 'europe', 'Arthur Honegger', [e('1892', 'Arthur Honegger ra đời', 'arthur-honegger')]),
  p('policka', 'Polička', 'Séc', 49.715, 16.266, 'europe', 'Bohuslav Martinů', [e('1890', 'Bohuslav Martinů ra đời', 'bohuslav-martinu')]),
  p('czernica', 'Czernica', 'Ba Lan', 50.050, 18.450, 'europe', 'Henryk Górecki', [e('1933', 'Henryk Górecki ra đời', 'henryk-gorecki')]),
  p('piran', 'Piran', 'Slovenia', 45.528, 13.568, 'europe', 'Giuseppe Tartini', [e('1692', 'Giuseppe Tartini ra đời', 'giuseppe-tartini')]),
  p('legnago', 'Legnago', 'Ý', 45.193, 11.308, 'europe', 'Antonio Salieri', [e('1750', 'Antonio Salieri ra đời', 'antonio-salieri')]),
  p('oneglia', 'Imperia', 'Ý', 43.889, 8.039, 'europe', 'Luciano Berio', [e('1925', 'Luciano Berio ra đời ở Oneglia, nay thuộc Imperia', 'luciano-berio')], 'Oneglia'),
  p('braila', 'Brăila', 'Romania', 45.270, 27.957, 'europe', 'Iannis Xenakis', [e('1922', 'Iannis Xenakis ra đời', 'iannis-xenakis')]),
  p('charleston-wv', 'Charleston', 'Hoa Kỳ', 38.350, -81.633, 'americas', 'George Crumb', [e('1929', 'George Crumb ra đời', 'george-crumb')], undefined, 'western'),
  p('colfax', 'Colfax', 'Hoa Kỳ', 39.101, -120.953, 'americas', 'Terry Riley', [e('1935', 'Terry Riley ra đời', 'terry-riley')], undefined, 'western'),
  p('worcester', 'Worcester', 'Hoa Kỳ', 42.263, -71.802, 'americas', 'John Adams (composer)', [e('1947', 'John Adams ra đời', 'john-adams')], undefined, 'western'),
  p('clarksdale', 'Clarksdale', 'Hoa Kỳ', 34.200, -90.571, 'americas', 'Delta blues', [e('thập niên 1920 – 1930', 'Delta blues ở vùng đồng bằng Mississippi', 'blues-12-nhip', 'am-giai-blues')]),
  p('tbilisi', 'Tbilisi', 'Gruzia', 41.716, 44.783, 'other', 'Aram Khachaturian', [e('1903', 'Aram Khachaturian ra đời', 'aram-khachaturian')], undefined, 'western'),
  p('cairo', 'Cairo', 'Ai Cập', 30.044, 31.236, 'other', 'Cairo Congress of Arab Music', [e('1932', 'Hội nghị Âm nhạc Ả Rập Cairo bàn về maqam và chuẩn hoá cao độ', 'maqam-a-rap-va-trung-dong')]),
  p('istanbul', 'İstanbul', 'Thổ Nhĩ Kỳ', 41.008, 28.978, 'other', 'Ottoman classical music', [e('truyền thống', 'Nhạc cổ điển Ottoman và hệ makam', 'maqam-a-rap-va-trung-dong')], 'Istanbul'),
  p('bamako', 'Bamako', 'Mali', 12.639, -8.003, 'other', 'Griot', [e('truyền thống', 'Truyền thống jeli (griot) của người Mande: hát kể sử cùng kora và balafon', 'am-nhac-chau-phi-ha-sahara')]),
  p('kyoto', 'Kyoto', 'Nhật Bản', 35.012, 135.768, 'asia', 'Gagaku', [
    e('794 – 1185', 'Gagaku cung đình thời Heian ở kinh đô Heian-kyō', 'am-nhac-truyen-thong-nhat-ban'),
    e('2009', 'UNESCO công nhận Gagaku', 'am-nhac-truyen-thong-nhat-ban'),
  ]),
  p('beijing', 'Bắc Kinh', 'Trung Quốc', 39.904, 116.407, 'asia', 'Peking opera', [
    e('1790', 'Các gánh hát An Huy vào kinh, mở đường cho Kinh kịch', 'am-nhac-truyen-thong-trung-hoa'),
    e('2010', 'UNESCO công nhận Kinh kịch', 'am-nhac-truyen-thong-trung-hoa'),
  ], 'Beijing'),
  p('seoul', 'Seoul', 'Hàn Quốc', 37.567, 126.978, 'asia', 'Jongmyo jerye', [
    e('2001', 'UNESCO công nhận nghi lễ và nhạc tế Tông miếu (Jongmyo jeryeak)', 'am-nhac-truyen-thong-han-quoc'),
    e('từ thập niên 1990', 'Các công ty giải trí dựng mô hình đào tạo và sản xuất K-pop', 'mo-hinh-cong-nghiep-k-pop'),
  ]),
  p('bangkok', 'Bangkok', 'Thái Lan', 13.756, 100.502, 'asia', 'Piphat', [e('truyền thống', 'Dàn piphat cung đình với ranat và cồng vòng', 'ranat')]),
  p('chennai', 'Chennai', 'Ấn Độ', 13.083, 80.270, 'asia', 'Madras Music Academy', [e('1928', 'Học viện Âm nhạc Madras thành lập; mùa hoà nhạc Carnatic hằng năm', 'nhac-cu-nam-a-tay-a')], 'Madras'),

  // ——— Châu Á
  p('java', 'Yogyakarta – Surakarta', 'Indonesia', -7.797, 110.370, 'asia', 'Gamelan', [
    e('truyền thống', 'Gamelan Java ở các cung đình Yogyakarta và Surakarta', 'gamelan', 'ly-thuyet-gamelan-java-va-bali'),
  ]),
  p('bali', 'Bali', 'Indonesia', -8.506, 115.262, 'asia', 'Gamelan', [
    e('truyền thống', 'Gamelan Bali: nhịp nhanh, lối đan xen kotekan', 'gamelan', 'ly-thuyet-gamelan-java-va-bali'),
  ]),
]

/* ------------------------------------------------------------------ journeys */

export interface Journey {
  id: string
  name: string
  /** Article the journey reads from. */
  slug: string
  /** [place id, year, what happened there]; each stop is also an event of that place. */
  stops: [string, string, string][]
}

export const JOURNEYS: Journey[] = [
  { id: 'bach', name: 'Bach', slug: 'johann-sebastian-bach', stops: [['eisenach', '1685', 'Ra đời'], ['arnstadt', '1703', 'Organist nhà thờ Mới'], ['weimar', '1708', 'Organist triều Weimar'], ['kothen', '1717', 'Nhạc trưởng triều Köthen'], ['leipzig', '1723', 'Thomaskantor tới cuối đời']] },
  { id: 'handel', name: 'Handel', slug: 'george-frideric-handel', stops: [['halle', '1685', 'Ra đời'], ['hamburg', '1703', 'Nhà hát opera Gänsemarkt'], ['rome', '1707', 'Những năm ở Ý'], ['london', '1712', 'Định cư ở London'], ['dublin', '1742', '*Messiah* ra mắt']] },
  { id: 'monteverdi', name: 'Monteverdi', slug: 'claudio-monteverdi', stops: [['cremona', '1567', 'Ra đời'], ['mantua', '~1590', 'Triều Gonzaga; *L\'Orfeo* (1607)'], ['venice', '1613', 'Maestro di cappella San Marco']] },
  { id: 'mozart', name: 'Mozart', slug: 'wolfgang-amadeus-mozart', stops: [['salzburg', '1756', 'Ra đời'], ['vienna', '1781', 'Định cư ở Vienna'], ['prague', '1787', '*Don Giovanni* ra mắt']] },
  { id: 'beethoven', name: 'Beethoven', slug: 'ludwig-van-beethoven', stops: [['bonn', '1770', 'Ra đời'], ['vienna', '1792', 'Tới Vienna học Haydn, ở lại tới cuối đời']] },
  { id: 'chopin', name: 'Chopin', slug: 'frederic-chopin', stops: [['zelazowa-wola', '1810', 'Ra đời'], ['warsaw', '1810 – 1830', 'Tuổi thơ và những năm học'], ['paris', '1831', 'Định cư ở Paris']] },
  { id: 'liszt', name: 'Liszt', slug: 'franz-liszt', stops: [['raiding', '1811', 'Ra đời'], ['paris', '1823', 'Thần đồng ở Paris'], ['weimar', '1848', 'Nhạc trưởng triều Weimar'], ['rome', '1861', 'Những năm ở Roma'], ['budapest', '1875', 'Học viện Âm nhạc']] },
  { id: 'haydn', name: 'Haydn', slug: 'joseph-haydn', stops: [['rohrau', '1732', 'Ra đời'], ['vienna', '1740', 'Ca đoàn nhà thờ Thánh Stephen'], ['eisenstadt', '1761', 'Nhạc trưởng dòng họ Esterházy'], ['london', '1791', 'Mười hai giao hưởng "London"']] },
  { id: 'wagner', name: 'Wagner', slug: 'richard-wagner', stops: [['leipzig', '1813', 'Ra đời'], ['dresden', '1843', 'Nhạc trưởng triều Saxony'], ['zurich', '1849', 'Lưu vong'], ['bayreuth', '1876', 'Nhà hát lễ hội, *Der Ring*'], ['venice', '1883', 'Mất ở Venice']] },
  { id: 'schumann', name: 'Schumann', slug: 'robert-schumann', stops: [['zwickau', '1810', 'Ra đời'], ['leipzig', '1828', 'Học ở Leipzig'], ['dusseldorf', '1850', 'Giám đốc âm nhạc thành phố'], ['bonn', '1856', 'Mất ở Endenich']] },
  { id: 'brahms', name: 'Brahms', slug: 'johannes-brahms', stops: [['hamburg', '1833', 'Ra đời'], ['vienna', '1862', 'Định cư ở Vienna']] },
  { id: 'tchaikovsky', name: 'Tchaikovsky', slug: 'pyotr-ilyich-tchaikovsky', stops: [['votkinsk', '1840', 'Ra đời'], ['st-petersburg', '1862', 'Khoá đầu tiên của Nhạc viện'], ['moscow', '1866', 'Dạy ở Nhạc viện Moskva']] },
  { id: 'stravinsky', name: 'Stravinsky', slug: 'igor-stravinsky', stops: [['st-petersburg', '1882', 'Ra đời gần Sankt-Peterburg'], ['paris', '1910', 'Ballets Russes: *L\'Oiseau de feu*, *Petrushka*, *Le Sacre*'], ['los-angeles', '1940s', 'Định cư ở Hollywood']] },
  { id: 'schopenhauer', name: 'Schopenhauer', slug: 'schopenhauer-lo-trinh', stops: [['gdansk', '1788', 'Ra đời'], ['frankfurt', '1833', 'Sống ở Frankfurt tới cuối đời']] },
  { id: 'armstrong', name: 'Louis Armstrong', slug: 'phong-cach-jazz', stops: [['new-orleans', '1901', 'Ra đời'], ['chicago', '1922', 'Ban King Oliver; Hot Five (1925)'], ['new-york', '1924', 'Ban Fletcher Henderson']] },
  { id: 'van-cao', name: 'Văn Cao', slug: 'van-cao', stops: [['hai-phong', '1923', 'Ra đời'], ['ha-noi', '1944', '*Tiến quân ca*']] },
]

/* ------------------------------------------------------------------ kinds of event */

export type Kind = 'birth' | 'work' | 'premiere' | 'founding' | 'genre' | 'heritage'
export const KINDS: Record<Kind, { title: string; mark: string }> = {
  birth: { title: 'Ra đời', mark: '✶' },
  work: { title: 'Sống, làm việc', mark: '⌂' },
  premiere: { title: 'Ra mắt, thu âm', mark: '♪' },
  founding: { title: 'Thành lập', mark: '◆' },
  genre: { title: 'Thể loại hình thành', mark: '❋' },
  heritage: { title: 'Di sản UNESCO', mark: '◈' },
}

/** Kind of an event, read from its wording. */
export function kindOf(ev: MapEvent): Kind {
  const t = ev.text
  if (/UNESCO/.test(t)) return 'heritage'
  if (/ra mắt|công diễn|trình diễn lần đầu|khai trương|mở cửa|(?:^|\s)[Tt]hu\s|được in|(?:^|\s)in [*"]|viết \*|\*Euridice\*|Chega de Saudade/.test(t)) return 'premiere'
  if (/thành lập|(?:^|\s)lập\s|cùng lập|^Nhạc viện/.test(t)) return 'founding'
  if (/ra đời/.test(t) && !/bebop|bossa|jazz/i.test(t)) return 'birth'
  if (/hình thành|cái nôi|ra đời|nhạc afro|stride|gamelan|nhã nhạc|tân nhạc|jazz kansas|trường phái|nhóm năm|nhóm sáng tác|khoá hè|cải lương|delta blues/i.test(t)) return 'genre'
  return 'work'
}

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

const DEFAULT_TRADITION: Record<Region, Tradition> = { europe: 'western', americas: 'jazz', vietnam: 'vietnam', asia: 'world', other: 'world' }
export const traditionOf = (pl: Place) => pl.tradition ?? DEFAULT_TRADITION[pl.region]

/** Period of an event: its place's tradition, and for Western music the period its first year falls in. */
export function eraOf(ev: MapEvent, pl: Place): Era {
  const tr = ev.tradition ?? traditionOf(pl)
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

import { CONTEXT_VN } from './context-vn'

/**
 * Phần mở đầu mỗi chương: bối cảnh lịch sử của thời kỳ, xem trước khi vào bản đồ. Mọi sự kiện lấy từ bài thư viện
 * (`read`), chủ yếu các đoạn giới thiệu thời kỳ – trường phái (theory/content/schools.ts) và bài
 * doi-song-am-nhac-va-thiet-che; `img` là ảnh nền đã có của game (nguồn ở credits.ts).
 */
export interface ContextPanel {
  title: string
  text: string
  img: string
  read: string
}

export const CONTEXT: Record<string, ContextPanel[]> = {
  'trung-co': [
    {
      title: 'Người trả tiền cho âm nhạc',
      text: 'Suốt nhiều thế kỷ, người bảo trợ lớn nhất của âm nhạc châu Âu là Nhà thờ, rồi đến triều đình và giới quý tộc. Âm nhạc vang lên trong nghi lễ và được chép tay trong tu viện. Phải đến thế kỷ XVII mới có công chúng mua vé.',
      img: 'scriptorium',
      read: 'doi-song-am-nhac-va-thiet-che',
    },
    {
      title: 'Thánh ca một bè',
      text: 'Thánh ca — nổi tiếng nhất là thánh ca Gregorian — là bài hát đơn âm bằng tiếng Latin trong nghi lễ của Giáo hội phương Tây, dựa trên các điệu thức nhà thờ. Ban đầu nó được truyền miệng, rồi được ghi bằng neume: những dấu chỉ hướng đi lên xuống của giai điệu.',
      img: 'neumes',
      read: 'thanh-ca-gregorian',
    },
    {
      title: 'Dòng kẻ và Ut – Re – Mi',
      text: 'Ở thế kỷ XI, Guido d’Arezzo đề xuất xếp nốt trên các dòng kẻ — tiền thân của khuông nhạc — và dạy hát bằng các âm tiết Ut, Re, Mi. Lần đầu tiên, người ta có thể hát một giai điệu chưa từng nghe.',
      img: 'guido-hand',
      read: 'khuong-nhac',
    },
    {
      title: 'Tiếng hát của lâu đài',
      text: 'Thế kỷ XI – XIII, các nhà thơ – nhạc sĩ cung đình hát về tình yêu: troubadour ở miền Nam nước Pháp bằng tiếng Occitan, trouvère ở miền Bắc, Minnesinger ở các vùng nói tiếng Đức. Đó là những bài hát thế tục sớm nhất còn giữ được cả lời lẫn nhạc.',
      img: 'troubadour',
      read: 'ca-khuc-the-tuc-trung-co',
    },
    {
      title: 'Từ một bè thành nhiều bè',
      text: 'Khoảng 1160 – 1250, các nhạc sĩ nhà thờ Đức Bà Paris thêm bè vào thánh ca (organum) và ghi tiết tấu bằng những mẫu dài – ngắn. Khoảng năm 1320, Ars nova cho phép chia nốt thành hai chứ không chỉ thành ba. Machaut ở Pháp, Landini ở Ý đưa phức điệu thế tục lên đỉnh cao.',
      img: 'notre-dame-choir',
      read: 'doi-am',
    },
  ],
  'phuc-hung': [
    {
      title: 'Phong thái Anh',
      text: 'Đầu thế kỷ XV, các nhạc sĩ của triều đình Công tước xứ Burgundy như Du Fay và Binchois dẫn đầu âm nhạc châu Âu. Một bài thơ khoảng năm 1440 nói họ đã học "phong thái Anh" của Dunstable — thường được hiểu là lối dùng nhiều quãng ba, quãng sáu êm ái, dù nghĩa chính xác vẫn còn bàn cãi.',
      img: 'firenze-duomo',
      read: 'thoi-ky-phuc-hung',
    },
    {
      title: 'Những người phương Bắc',
      text: 'Khoảng 1450 – 1600, các nhạc sĩ từ vùng Vlaanderen và miền Bắc nước Pháp làm việc khắp các triều đình, nhà thờ châu Âu, nhất là ở Ý. Đặc trưng của họ là mô phỏng xuyên suốt: mọi bè lần lượt nhắc lại cùng một ý nhạc. Từ Ockeghem qua Josquin đến Lassus.',
      img: 'marignano',
      read: 'doi-am',
    },
    {
      title: 'Âm nhạc lên bản in',
      text: 'Năm 1501 ở Venezia, Petrucci in Odhecaton — tuyển tập nhạc nhiều bè nổi tiếng, in qua nhiều lượt (thánh ca thì đã được in từ trước). Từ 1528 ở Paris, Attaingnant in nhạc chỉ trong một lượt — rẻ hơn, nhanh hơn. Bản nhạc bắt đầu đi xa hơn người viết ra nó.',
      img: 'petrucci',
      read: 'lich-su-in-an-am-nhac',
    },
    {
      title: 'Nhà thờ đòi nghe rõ lời',
      text: 'Công đồng Trent (1545 – 1563) đòi lời kinh phải nghe được. Ở Roma, Palestrina trở thành mẫu mực của phức điệu nhà thờ trong sáng. Chuyện ông "cứu" phức điệu bằng Missa Papae Marcelli thì chỉ là giai thoại.',
      img: 'palestrina',
      read: 'giovanni-pierluigi-da-palestrina',
    },
    {
      title: 'Cải cách và những bài ca tiếng mẹ đẻ',
      text: 'Ở các vùng nói tiếng Đức, cuộc Cải cách Tin Lành đưa thánh ca cộng đoàn (chorale) bằng tiếng Đức vào trung tâm đời sống âm nhạc — nền móng cho nhạc nhà thờ Đức đến tận Bach. Nước Anh đi qua nhiều lần đổi tôn giáo với Tallis và Byrd.',
      img: 'elizabeth',
      read: 'thoi-ky-phuc-hung',
    },
    {
      title: 'Madrigal và những gác đàn đối diện',
      text: 'Madrigal là ca khúc thế tục nhiều bè vẽ nghĩa lời thơ bằng âm nhạc; đến Gesualdo thì sắc thể táo bạo. Ở Venezia, nhà thờ Thánh Marco đặt các dàn hợp xướng đối diện nhau, cho Andrea và Giovanni Gabrieli lối viết nhiều dàn.',
      img: 'san-marco',
      read: 'madrigal',
    },
  ],
  baroque: [
    {
      title: 'Hát như người Hy Lạp',
      text: 'Quanh năm 1600 ở Firenze, nhóm Camerata muốn phục hồi cách hát kể của kịch Hy Lạp. Họ tạo ra lối hát độc xướng có đệm trên bè trầm liên tục. Từ đó ra đời opera: Euridice (1600) của Peri, rồi L’Orfeo (1607) của Monteverdi.',
      img: 'orfeo-gennari',
      read: 'opera',
    },
    {
      title: 'Ngôn ngữ mới của hoà âm',
      text: 'Thời Baroque xác lập hệ thống giọng trưởng – thứ cùng hoà âm chức năng. Đặc trưng: bè trầm liên tục, fugue, mô tiến, hoa mỹ phong phú, tương phản to – nhỏ theo từng khối.',
      img: 'bach-haussmann',
      read: 'bass-so',
    },
    {
      title: 'Chiến tranh Ba mươi năm',
      text: 'Âm nhạc Đức thế kỷ XVII lớn lên giữa và sau Chiến tranh Ba mươi năm (1618 – 1648). Schütz học ở Venezia rồi mang phong cách Ý về Đức. Ở miền Bắc, trường phái organ đạt đỉnh với Buxtehude ở Lübeck — nơi năm 1705 chàng trai Bach đi bộ hàng trăm cây số đến nghe.',
      img: 'schutz',
      read: 'heinrich-schutz',
    },
    {
      title: 'Triều đình Mặt Trời',
      text: 'Baroque Pháp gắn chặt với triều đình Louis XIV. Lully nắm quyền kiểm soát opera, tạo ra tragédie en musique và khúc mở màn kiểu Pháp. Couperin viết cho clavecin; Rameau vừa soạn opera vừa viết Traité de l’harmonie (1722).',
      img: 'versailles',
      read: 'jean-baptiste-lully',
    },
    {
      title: 'Vĩ cầm Ý',
      text: 'Cuối thế kỷ XVII, Ý là trung tâm của nhạc khí: Corelli định hình trio sonata và concerto grosso, Vivaldi phổ biến concerto độc tấu ba chương với các đoạn ritornello. Người Đức thời Bach và Handel pha trộn phong cách Ý với phong cách Pháp.',
      img: 'ottoboni',
      read: 'hinh-thuc-concerto',
    },
  ],
  'co-dien': [
    {
      title: 'Từ phức điệu sang galant',
      text: 'Giữa thế kỷ XVIII, thị hiếu đổi: giai điệu nhẹ nhàng, rõ câu, đệm đơn giản. C. P. E. Bach đại diện cho "phong cách cảm xúc"; dàn nhạc Mannheim nổi tiếng về kỷ luật và những đoạn crescendo; Gluck cải cách opera với Orfeo ed Euridice (1762).',
      img: 'menzel-flute',
      read: 'thoi-ky-co-dien',
    },
    {
      title: 'Nhạc sĩ trong cung điện',
      text: 'Triều đình và quý tộc vẫn là người bảo trợ lớn. Năm 1761 Haydn ký hợp đồng với nhà Esterházy: hợp đồng quy định cả đồng phục, giờ có mặt, và nhạc ông viết thuộc về hoàng thân. Ông ở đó đến năm 1790, rồi sang London — bước vào thị trường công chúng.',
      img: 'haydn',
      read: 'doi-song-am-nhac-va-thiet-che',
    },
    {
      title: 'Hình thức sonata',
      text: 'Giai điệu có đệm, bè trầm Alberti, câu nhạc đối xứng. Hình thức sonata trở thành khuôn mẫu cho sonata, giao hưởng, tứ tấu đàn dây và concerto. Haydn, Mozart, Beethoven ở Vienna đưa các thể loại này thành chuẩn mực.',
      img: 'mozart-croce',
      read: 'hinh-thuc-sonata',
    },
    {
      title: 'Cây đàn chơi được nhỏ và to',
      text: 'Đàn fortepiano dần thay harpsichord và thành nhạc cụ trung tâm của nhạc thính phòng. Ở London, Clementi vừa biểu diễn, vừa dạy, vừa sản xuất đàn piano.',
      img: 'clementi',
      read: 'lich-su-piano',
    },
    {
      title: 'Âm nhạc ra phố',
      text: 'Cuối thế kỷ, âm nhạc có những thiết chế của riêng mình: Nhạc viện Paris (1795), tạp chí Allgemeine musikalische Zeitung ở Leipzig (1798), Gesellschaft der Musikfreunde ở Vienna (1812), Philharmonic Society ở London (1813).',
      img: 'karntnertor',
      read: 'doi-song-am-nhac-va-thiet-che',
    },
  ],
  'lang-man': [
    {
      title: 'Cảm xúc cá nhân lên ngôi',
      text: 'Thế hệ Lãng mạn đầu tiên đặt cảm xúc cá nhân lên hàng đầu. Các nhà tư tưởng như E. T. A. Hoffmann và Schopenhauer tôn khí nhạc lên thành nghệ thuật cao nhất. Hoà âm sắc thể, rubato, dàn nhạc mở rộng.',
      img: 'schubertiade',
      read: 'triet-hoc-lang-man-ve-am-nhac',
    },
    {
      title: 'Thời của cây đàn piano',
      text: 'Piano trở thành nhạc cụ của thời đại: tiểu phẩm tính cách của Chopin, Schumann, Liszt — nocturne, ballade, étude — và nghệ thuật trình diễn bậc thầy kiểu Paganini.',
      img: 'liszt-danhauser',
      read: 'tieu-pham-piano',
    },
    {
      title: 'Báo chí, dàn nhạc, nhạc viện',
      text: 'Schumann cùng bạn bè lập Neue Zeitschrift für Musik (1834) — phê bình do chính nhà soạn nhạc viết. Wiener Philharmoniker ra đời năm 1842; Mendelssohn khai giảng Nhạc viện Leipzig năm 1843.',
      img: 'singakademie',
      read: 'doi-song-am-nhac-va-thiet-che',
    },
    {
      title: 'Thời hoàng kim của opera',
      text: 'Ở Đức, Wagner tạo ra nhạc kịch liền mạch với hệ thống leitmotif và xây nhà hát riêng ở Bayreuth. Ở Ý, Verdi thống trị nửa sau thế kỷ. Paris có grand opéra của Meyerbeer và Carmen của Bizet; Offenbach và Johann Strauss II làm operetta.',
      img: 'scala',
      read: 'opera',
    },
    {
      title: 'Hai phe',
      text: 'Nửa sau thế kỷ, nhạc Đức chia hai hướng: Brahms trung thành với hình thức cổ điển và âm nhạc tuyệt đối; "trường phái Đức mới" của Liszt và Wagner theo thơ giao hưởng và nhạc chương trình.',
      img: 'hanslick',
      read: 'am-nhac-tuyet-doi',
    },
  ],
  'quoc-gia': [
    {
      title: 'Dân ca, truyền thuyết, tên những dòng sông',
      text: 'Chủ nghĩa dân tộc trong âm nhạc: các nhà soạn nhạc đưa dân ca, vũ điệu, truyền thuyết và điệu thức của quê hương vào giao hưởng và opera. Ở Séc có Smetana và Dvořák; Na Uy có Grieg; Phần Lan có Sibelius; Tây Ban Nha có Albéniz và Granados.',
      img: 'smetana-friends',
      read: 'thoi-ky-lang-man',
    },
    {
      title: 'Hai con đường của nước Nga',
      text: 'Glinka thường được xem là người mở đầu nhạc cổ điển Nga. Thập niên 1860, Balakirev tập hợp một nhóm phần lớn tự học theo hướng dân tộc. Hướng kia là đào tạo bài bản kiểu châu Âu: Anton Rubinstein lập Nhạc viện Sankt-Peterburg năm 1862, nơi Tchaikovsky học.',
      img: 'slav-composers',
      read: 'mily-balakirev',
    },
    {
      title: 'Những dân tộc chưa có nhà nước',
      text: 'Praha thuộc Đế quốc Habsburg và đang "phục hưng dân tộc": người Séc lập hội hợp xướng, Nhà hát Tạm, quyên tiền xây Nhà hát Quốc gia. Phần Lan là đại công quốc dưới quyền Sa hoàng và bị Nga hoá; Na Uy còn trong liên minh với Thuỵ Điển cho tới 1905.',
      img: 'symposion',
      read: 'bedrich-smetana',
    },
    {
      title: 'Opera hiện thực',
      text: 'Ở Ý, sau Verdi là trào lưu verismo (hiện thực) với Cavalleria rusticana (1890) của Mascagni và các vở của Puccini. Nhà xuất bản Ricordi đứng sau cả hai thế hệ.',
      img: 'boheme-set',
      read: 'giacomo-puccini',
    },
    {
      title: 'Những bản giao hưởng khổng lồ',
      text: 'Thế hệ cuối của Lãng mạn Đức – Áo — Bruckner, Mahler, Richard Strauss — mở rộng dàn nhạc và hoà âm sắc thể đến giới hạn, dẫn sang phi điệu tính của thế kỷ XX.',
      img: 'hofoper',
      read: 'gustav-mahler',
    },
  ],
}

Object.assign(CONTEXT, CONTEXT_VN)

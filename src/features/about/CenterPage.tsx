import { Link } from 'react-router-dom'
import { useBack } from '../../hooks/useBack'
import { ARTICLES } from '../theory/articles'
import { BOOKS } from '../curriculum/books'
import '../../phn.css'
import './center.css'

const img = (name: string) => `${import.meta.env.BASE_URL}images/app/${name}.webp`
const fmt = (n: number) => n.toLocaleString('vi-VN')

/** A screenshot as a scene: full-bleed, no frame, melting into the dark at its edges. */
function Scene({ src, alt, focus = '50% 30%' }: { src: string; alt: string; focus?: string }) {
  return (
    <figure className="ct-scene">
      <img src={img(src)} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: focus }} />
    </figure>
  )
}

/** Phone screenshots standing side by side, borderless, the middle one a little forward. */
function Phones({ shots }: { shots: [string, string][] }) {
  return (
    <div className="ct-phones" data-n={shots.length}>
      {shots.map(([src, alt]) => (
        <img key={src} src={img(src)} alt={alt} loading="lazy" decoding="async" />
      ))}
    </div>
  )
}

interface Chapter {
  n: string
  eyebrow: string
  title: React.ReactNode
  body: React.ReactNode
  points: string[]
  to?: [string, string]
  scene?: [string, string, string?]
  phones?: [string, string][]
}

const CHAPTERS: Chapter[] = [
  {
    n: '01',
    eyebrow: 'Thư viện Lý thuyết',
    title: (
      <>
        Một thư viện <em>đọc được, nghe được, đàn được</em>
      </>
    ),
    body: (
      <>
        Trái tim của Trung tâm: {fmt(ARTICLES.length)} bài viết bằng tiếng Việt, từ ký âm cơ bản tới hoà âm cromatic, phức điệu, hình thức, jazz, âm nhạc thế kỷ 20, triết học và âm nhạc Việt Nam — xếp thành 27 chủ đề trong 6 nhóm. Mỗi bài đọc thẳng các tác phẩm gốc và ghi nguồn tới từng trang; ví dụ nhạc trong bài bấm vào là nghe, bàn phím ảo hiện ngay cạnh lời giải thích.
      </>
    ),
    points: [
      'Tìm toàn văn theo tên tiếng Việt, Anh, Nga, Đức, Pháp, Ý',
      'Bấm một khái niệm: hiện thẻ giới thiệu, tên đa ngữ và mục Grove',
      'Lộ trình từng chủ đề, bài trước – bài sau, liên kết hai chiều',
      'Câu đố và phần tự kiểm tra cuối mỗi bài',
    ],
    to: ['/theory', 'Vào thư viện'],
    scene: ['theory', 'Trang chủ thư viện Lý thuyết'],
    phones: [
      ['article-m', 'Một bài lý thuyết: Fugue'],
      ['peek-m', 'Thẻ giới thiệu khi bấm một khái niệm'],
    ],
  },
  {
    n: '02',
    eyebrow: 'Tủ sách',
    title: (
      <>
        Những cuốn sách <em>nên đọc, bằng tiếng Việt</em>
      </>
    ),
    body: (
      <>
        {fmt(BOOKS.length)} cuốn sách và giáo trình do Lamar biên soạn từ thư viện — từ bộ Piano & Nhạc lý cho trẻ em, hoà âm cổ điển trường phái Nga – Xô viết, phức điệu nghiêm khắc, tới Jazz Theory Book, 1001 lick jazz và xướng âm. Mỗi cuốn mở ra như một cuốn sách thật: lật trang, mục lục, ghi chú bên lề, đánh dấu, xuất PDF và lưu để đọc khi không có mạng.
      </>
    ),
    points: ['Trình đọc dạng trang sách, đổi cỡ chữ và kiểu chữ', 'Sổ nghiên cứu gom mọi ghi chú khi đọc', 'Lưu cả cuốn để đọc offline', 'Mỗi chương nối về bài gốc trong thư viện'],
    to: ['/curriculum', 'Mở tủ sách'],
    scene: ['shelf', 'Tủ sách', '50% 35%'],
  },
  {
    n: '03',
    eyebrow: 'Trình đọc',
    title: (
      <>
        Giấy, mực <em>và sự yên tĩnh</em>
      </>
    ),
    body: <>Trang sách màu giấy, chữ có chân, nhịp dòng rộng — một chỗ ngồi đọc lâu mà không mỏi mắt. Bìa mỗi cuốn bay từ kệ vào trang đầu, và khi đóng sách, bạn trở về đúng nơi đã mở nó ra.</>,
    points: [],
    scene: ['reader', 'Trình đọc sách'],
  },
  {
    n: '04',
    eyebrow: 'Âm nhạc học',
    title: (
      <>
        Một bầu trời các phân ngành, <em>một tấm bản đồ thế giới</em>
      </>
    ),
    body: (
      <>
        Âm nhạc học được vẽ thành một bầu trời: mỗi phân ngành là một chòm sao, mỗi bài là một ngôi sao, nối nhau theo cách Guido Adler phân ngành. Bên cạnh là bản đồ âm nhạc học với hơn 150 nơi chốn — nhà hát, nhạc viện, thành phố — cùng hành trình của các nhà soạn nhạc trên trục thời gian.
      </>
    ),
    points: ['Bầu trời 3D các phân ngành, chạm để mở', 'Bản đồ có thời gian, màu thời kỳ, gom điểm, hành trình', 'Mỗi sự kiện có ảnh và nguồn', 'Trích dẫn của các nhạc sĩ, ghi rõ xuất xứ'],
    to: ['/musicology', 'Ngắm bầu trời'],
    scene: ['sky', 'Bầu trời các phân ngành âm nhạc học'],
  },
  {
    n: '05',
    eyebrow: 'Bản đồ',
    title: (
      <>
        Âm nhạc <em>có địa chỉ</em>
      </>
    ),
    body: <>Kéo thanh thời gian, các chấm vàng sáng lên rồi tắt theo từng thế kỷ: nơi một bản giao hưởng ra mắt, nơi một nhạc sĩ học đàn, con đường một người đã đi qua.</>,
    points: [],
    scene: ['map', 'Bản đồ âm nhạc học', '50% 45%'],
  },
  {
    n: '06',
    eyebrow: 'Từ điển âm nhạc Lamar',
    title: (
      <>
        Mỗi mục một nguồn, <em>mỗi nguồn một trang</em>
      </>
    ),
    body: (
      <>
        Trọn năm tập <em>Grove's Dictionary of Music and Musicians</em> (1904 – 1910): 6.430 mục từ A tới Z, mỗi mục có nguyên văn, số tập, số trang và đường dẫn tới đúng trang bản quét — và dần dần là phần tiếng Việt viết cẩn thận theo nguyên văn. Bên cạnh là bảng thuật ngữ năm thứ tiếng nối thẳng vào các bài.
      </>
    ),
    points: ['Tìm theo đầu mục hoặc tên tiếng Việt', 'Lọc theo vần, loại mục: thuật ngữ, nhân vật, tác phẩm, tổ chức', 'Nguyên văn và trang quét để tự đối chiếu', 'Thuật ngữ đa ngữ: Anh, Nga, Đức, Pháp, Ý'],
    to: ['/terms', 'Mở từ điển'],
    phones: [['terms-m', 'Từ điển âm nhạc Lamar']],
  },
  {
    n: '07',
    eyebrow: 'Mạng tri thức & Thư mục học',
    title: (
      <>
        Ai, ở đâu, khi nào, viết gì — <em>và theo nguồn nào</em>
      </>
    ),
    body: (
      <>
        Người, tác phẩm, nơi chốn, sự kiện và phân ngành nối thành một mạng: hồ sơ từng nhạc sĩ với thầy – trò, tác phẩm, dòng thời gian và phả hệ. Mọi khẳng định trong thư viện truy được về một nguồn trong thư mục học — mỗi nguồn có trang riêng, mức đối chiếu, và trích dẫn sẵn theo Chicago, APA hay BibTeX.
      </>
    ),
    points: ['Hồ sơ nhạc sĩ nối bản đồ, khái niệm, tác phẩm', 'Dòng thời gian và phả hệ thầy – trò', 'Thư mục học với mức đối chiếu từng nguồn', 'Chép trích dẫn một chạm'],
    to: ['/explore', 'Khám phá mạng tri thức'],
    scene: ['explore', 'Hồ sơ Johann Sebastian Bach trong mạng tri thức', '50% 20%'],
    phones: [['sources-m', 'Thư mục học']],
  },
  {
    n: '08',
    eyebrow: 'Phân tích tác phẩm',
    title: (
      <>
        Đặt bản nhạc lên bàn, <em>đọc nó bằng bốn lăng kính</em>
      </>
    ),
    body: (
      <>
        Mở một bản nhạc (có sẵn hoặc nhập MusicXML, MIDI) và bộ máy phân tích ghi thẳng lên khuông: hợp âm, giọng, chức năng theo cách gọi Nga – Xô viết, nốt ngoài hợp âm, câu kết và hình thức — theo lăng kính Cổ điển, Jazz hay thế kỷ 20. Bên dưới là văn bản phân tích nối về thư viện, bấm vào đâu sáng ô nhịp đó.
      </>
    ),
    points: ['Đo độ đúng trên hợp xướng Bach', 'Nhãn chức năng kiểu Nga – Xô viết', 'Bảng từng ô nhịp, xuất kết quả', 'Kho bản nhạc có ô tìm, lưu trên máy'],
    to: ['/analyze', 'Phân tích một bản nhạc'],
    scene: ['analyze', 'Phân tích hợp xướng Bach BWV 269'],
  },
  {
    n: '09',
    eyebrow: 'Soạn nhạc',
    title: (
      <>
        Một tờ giấy trắng <em>dưới đầu ngón tay</em>
      </>
    ),
    body: <>Trình soạn nhạc khắc bản đẹp như in: chạm lên khuông để đặt nốt, giữ và trượt để thăng giáng, phím tắt kiểu Sibelius trên máy tính. Viết nhiều bè, bốn bè SATB, lời ca, tên hợp âm, sắc thái — hay đàn vào micro để máy chép lại.</>,
    points: ['Chạm đặt nốt, hoàn tác, nhấn giữ để thăng', 'Nhiều bè, SATB, lời ca, hợp âm', 'Thu bằng micro, tách hai tay', 'Bản nhạc lưu ngay trên máy'],
    to: ['/compose', 'Viết một bản nhạc'],
    scene: ['compose', 'Trình soạn nhạc'],
    phones: [['compose-m', 'Soạn nhạc trên điện thoại']],
  },
  {
    n: '10',
    eyebrow: 'Luyện tai & công cụ',
    title: (
      <>
        Lý thuyết để nghe sâu hơn, <em>chơi đúng hơn</em>
      </>
    ),
    body: <>Những phòng tập nhỏ: xướng âm đoán nốt và quãng, nghe hợp âm theo nhiều phong cách, giải bài phức điệu có sửa lỗi, và bảng tính vòng quãng năm, hợp âm trong giọng, hợp âm jazz — chọn một giọng, mọi bảng đổi theo.</>,
    points: ['Solfège: đoán nốt, đoán quãng, xướng âm', 'Nghe hợp âm: Cổ điển, Jazz, thế kỷ 20', 'Giải phức điệu: sinh đề, sửa bài', 'Bảng tính: vòng quãng năm, hợp âm trong giọng'],
    to: ['/tools', 'Mở bảng tính'],
    phones: [
      ['solfege-m', 'Solfège'],
      ['chord-m', 'Nghe hợp âm'],
      ['counter-m', 'Giải phức điệu'],
      ['tools-m', 'Bảng tính'],
    ],
  },
  {
    n: '11',
    eyebrow: 'Sổ tay & Bàn làm việc nghiên cứu',
    title: (
      <>
        Từ ghi chú <em>đến bản nháp</em>
      </>
    ),
    body: <>Sổ tay tri thức để ghi mọi ý nghĩ, nối vào nhau và vào thư viện bằng [[ ]]; mỗi bài cho thấy ghi chú nào của bạn đang trỏ tới nó, và cả mạng ý nghĩ hiện thành đồ thị. Bàn làm việc gom ghi chú theo đề tài, viết bản nháp có chú thích nguồn và xuất ra Markdown hay Word với chú thích Chicago.</>,
    points: ['Liên kết hai chiều và đồ thị ghi chú', 'Đề tài gom ghi chú, nguồn, bản nháp', 'Xuất Word / Markdown có chú thích', 'Sao lưu và khôi phục'],
    to: ['/brain', 'Mở sổ tay'],
    phones: [
      ['brain-m', 'Sổ tay tri thức'],
      ['research-m', 'Bàn làm việc nghiên cứu'],
    ],
  },
  {
    n: '12',
    eyebrow: 'Lịch dạy & học viên',
    title: (
      <>
        Và một góc riêng <em>của người thầy</em>
      </>
    ),
    body: <>Sau cánh cửa có mã khoá là thời khoá biểu, hồ sơ học viên, buổi học và học phí. Dữ liệu này chỉ nằm trên máy, được mã hoá bằng khoá sinh ra từ mã của chủ nhân; sao lưu và khôi phục bằng một tệp.</>,
    points: ['Thời khoá biểu tuần, buổi học, địa điểm', 'Hồ sơ và tiến độ từng học viên', 'Mã khoá, dữ liệu riêng được mã hoá', 'Sao lưu – khôi phục bằng tệp'],
  },
]

/** "Về Trung tâm" (/settings/center): every system of the app, told as a film. */
export function CenterPage() {
  const back = useBack('/settings')
  return (
    <div className="ct phn h-full overflow-y-auto overflow-x-hidden">
      <button className="ct-back" onClick={back} aria-label="Quay lại Cài đặt">
        ← Cài đặt
      </button>

      <header className="ct-hero">
        <img src={img('sky')} alt="" className="ct-hero-img" />
        <div className="ct-hero-text">
          <p className="ct-eyebrow">Về ứng dụng</p>
          <h1 className="ct-title">
            Trung tâm <em>lý thuyết âm nhạc học</em>
          </h1>
          <p className="ct-lede">Một thư viện, một tủ sách, một bầu trời, một cuốn từ điển, một bàn làm việc — để hiểu âm nhạc từ bên trong, bằng tiếng Việt, ngay trên chiếc điện thoại của bạn.</p>
        </div>
      </header>

      <dl className="ct-numbers">
        <div>
          <dt>{fmt(ARTICLES.length)}</dt>
          <dd>bài trong thư viện</dd>
        </div>
        <div>
          <dt>{fmt(BOOKS.length)}</dt>
          <dd>sách & giáo trình</dd>
        </div>
        <div>
          <dt>6.430</dt>
          <dd>mục từ điển Grove</dd>
        </div>
        <div>
          <dt>150+</dt>
          <dd>nơi trên bản đồ</dd>
        </div>
      </dl>

      {CHAPTERS.map((c) => (
        <section key={c.n} className="ct-ch" aria-label={c.eyebrow}>
          {c.scene && <Scene src={c.scene[0]} alt={c.scene[1]} focus={c.scene[2]} />}
          <div className="ct-copy">
            <p className="ct-ch-eyebrow">
              <span>{c.n}</span>
              {c.eyebrow}
            </p>
            <h2 className="ct-ch-title">{c.title}</h2>
            <p className="ct-ch-body">{c.body}</p>
            {c.points.length > 0 && (
              <ul className="ct-points">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {c.to && (
              <Link to={c.to[0]} className="ct-go">
                {c.to[1]} →
              </Link>
            )}
          </div>
          {c.phones && <Phones shots={c.phones} />}
        </section>
      ))}

      <section className="ct-found" aria-label="Nền móng">
        <p className="ct-ch-eyebrow">
          <span>∞</span>Nền móng
        </p>
        <h2 className="ct-ch-title">
          Làm chậm, <em>làm chắc</em>
        </h2>
        <div className="ct-found-grid">
          <div>
            <h3>Có nguồn tới từng dòng</h3>
            <p>Mỗi khẳng định truy được về một nguồn có trang; chỗ nào chưa đối chiếu hay nguồn mâu thuẫn được ghi rõ ngay trong bài.</p>
          </div>
          <div>
            <h3>Chạy cả khi không có mạng</h3>
            <p>Một ứng dụng web cài được lên màn hình chính; thư viện, sách và từ điển tải dần và ở lại trên máy. Không máy chủ, không tài khoản, không quảng cáo.</p>
          </div>
          <div>
            <h3>Dữ liệu của bạn là của bạn</h3>
            <p>Ghi chú, lịch dạy, học viên nằm trên thiết bị; phần riêng tư được mã hoá và khoá bằng mã của chủ nhân.</p>
          </div>
          <div>
            <h3>Được kiểm trước khi lên trang</h3>
            <p>Mỗi thay đổi đi qua hàng trăm bài kiểm tra tự động trên trình duyệt Chromium và WebKit; hỏng một bài là không được phát hành.</p>
          </div>
        </div>
      </section>

      <footer className="ct-coda">
        <p className="ct-coda-line">
          Dựng bởi <Link to="/settings/about">Lamar</Link> — người dạy đàn, nhà âm nhạc học.
        </p>
        <Link to="/theory" className="ct-go is-gold">
          Bắt đầu từ thư viện
        </Link>
      </footer>
    </div>
  )
}

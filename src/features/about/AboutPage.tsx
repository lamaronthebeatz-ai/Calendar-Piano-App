import { Link } from 'react-router-dom'
import { useBack } from '../../hooks/useBack'
import { ARTICLES } from '../theory/articles'
import { BOOKS } from '../curriculum/books'
import { openDonate } from '../donate/store'
import '../../phn.css'
import './about.css'

const portrait = `${import.meta.env.BASE_URL}images/about/lamar.jpg`
const fmt = (n: number) => n.toLocaleString('vi-VN')

/** Five hairlines that open out like a staff being drawn — the page's divider (transform only, ends drawn). */
function Staff() {
  return (
    <svg className="ab-staff" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden>
      {[4, 12, 20, 28, 36].map((y, i) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} style={{ animationDelay: `${i * 70}ms` }} />
      ))}
    </svg>
  )
}

/** A movement of the page: a tempo marking, a title, then the text. */
function Movement({ n, tempo, title, children }: { n: string; tempo: string; title: string; children: React.ReactNode }) {
  return (
    <section className="ab-mvt" aria-label={title}>
      <header className="ab-mvt-head">
        <span className="ab-mvt-n">{n}</span>
        <span className="ab-mvt-tempo">{tempo}</span>
      </header>
      <h2 className="ab-mvt-title">{title}</h2>
      <div className="ab-prose">{children}</div>
    </section>
  )
}

/** "Về Lamar" (/settings/about): who made this app — what he has done, does now and means to do. */
export function AboutPage() {
  const back = useBack('/settings')
  return (
    <div className="ab phn h-full overflow-y-auto">
      <button className="ab-back" onClick={back} aria-label="Quay lại Cài đặt">
        ← Cài đặt
      </button>

      <header className="ab-hero">
        <figure className="ab-portrait">
          <img src={portrait} alt="Chân dung Lamar" width={960} height={1280} />
        </figure>
        <div className="ab-hero-text">
          <p className="ab-kicker">Người dựng nên căn phòng này</p>
          <h1 className="ab-name">Lamar</h1>
          <p className="ab-real">Trần Lâm · nghệ sĩ piano, nhà âm nhạc học, người dạy đàn</p>
          <p className="ab-lede">
            Ba thứ đi cùng Lamar từ thuở nhỏ tới giờ: <em>cây đàn</em>, <em>trang sách</em> và <em>câu hỏi “vì sao”</em>. Ứng dụng bạn đang mở là nơi cả ba gặp nhau.
          </p>
        </div>
      </header>

      <Staff />

      <dl className="ab-numbers">
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
      </dl>

      <Movement n="I" tempo="Adagio" title="Những năm đã đi qua">
        <p>
          Lamar lớn lên bên phím đàn: mười một năm học <strong>piano</strong> hệ trung cấp dài hạn ở <strong>Nhạc viện Thành phố Hồ Chí Minh</strong>, rồi ở lại ngôi trường ấy để học tiếp đại học chuyên ngành <strong>Âm nhạc học</strong> — chuyển từ chơi một bản nhạc sang tự hỏi bản nhạc ấy được làm ra như thế nào, và vì sao nó lay động người nghe.
        </p>
        <p>
          Ra khỏi giảng đường, Lamar làm âm nhạc ở nhiều phía của sân khấu: <strong>cố vấn và quản lý âm nhạc</strong>, <strong>nhà sản xuất âm nhạc</strong>, và trên hết là <strong>người dạy đàn</strong> — mỗi tuần ngồi cạnh từng học viên, từ đứa trẻ lần đầu chạm phím tới người lớn quay lại với giấc mơ cũ.
        </p>
      </Movement>

      <Movement n="II" tempo="Allegro con brio" title="Những gì đang làm">
        <p>
          Hiện Lamar học <strong>cao học chuyên ngành Âm nhạc học</strong> và theo hướng <Link to="/theory/am-nhac-hoc-he-thong">âm nhạc học hệ thống</Link> — ngành nối lý thuyết âm nhạc với âm học, tâm lý nghe, khoa học biểu diễn và âm nhạc học tính toán. Những bài tiểu luận, như bài về Sonata số 2 của Scriabin, được viết ra từ chính thư viện này.
        </p>
        <p>
          Song song, Lamar dựng <strong>Trung tâm lý thuyết âm nhạc học</strong>: một thư viện tiếng Việt đọc thẳng các tác phẩm nền tảng — Fux, Albrechtsberger, Rimsky-Korsakov, Sposobin, Mazel, Asafyev, Neuhaus, Levine — rồi đặt cạnh nhau, đối chiếu và ghi nguồn tới từng trang. Quanh thư viện là tủ sách giáo trình từ lớp nhạc lý cho trẻ em tới hoà âm jazz, bản đồ và bầu trời các phân ngành âm nhạc học, <Link to="/terms">Từ điển âm nhạc Lamar</Link> dựa trên trọn năm tập Grove, công cụ <Link to="/analyze">phân tích tác phẩm</Link>, <Link to="/compose">soạn nhạc</Link> và một bàn làm việc nghiên cứu.
        </p>
        <p>Và vẫn là thời khoá biểu của một người thầy: mỗi tiết học, mỗi học viên, mỗi bản nhạc đang tập dở.</p>
      </Movement>

      <Movement n="III" tempo="Andante maestoso" title="Con đường phía trước">
        <p>
          Lamar muốn biến thư viện này thành <strong>một trung tâm tri thức cho người làm âm nhạc học</strong>: thuật ngữ đa ngữ đối chiếu chuẩn, một mạng tri thức nối người – tác phẩm – nơi chốn – khái niệm, và trọn bộ từ điển Grove có tiếng Việt — tra được, đối chiếu được, trích dẫn được, ngay cả khi không có mạng.
        </p>
        <p>
          Xa hơn nữa là một <strong>bộ giáo trình tiếng Việt có hệ thống</strong>, đi từ nốt nhạc đầu tiên của đứa trẻ ngồi vào đàn tới những câu hỏi khó nhất của sáng tác, phân tích và âm nhạc học; và mục tiêu Lamar đặt cao nhất — <strong>góp phần đặt nền móng cho một nền học thuật âm nhạc Việt Nam viết bằng tiếng Việt</strong>, đủ vững để thế hệ sau đứng lên đó mà đi xa hơn, đối thoại ngang hàng với thế giới.
        </p>
      </Movement>

      <Staff />

      <section className="ab-creed" aria-label="Điều Lamar tin">
        <h2 className="ab-creed-title">Điều Lamar tin</h2>
        <ol>
          <li>
            <span>Kiến thức phải có nguồn.</span> Chỗ nào chưa rõ thì nói là chưa rõ.
          </li>
          <li>
            <span>Đi tới tận nguồn.</span> Đọc chính tác phẩm gốc, không học qua lời kể lại nhiều lớp.
          </li>
          <li>
            <span>Học bằng tai và tay.</span> Lý thuyết là để nghe sâu hơn, chơi đúng hơn, viết hay hơn.
          </li>
          <li>
            <span>Mở cho tất cả.</span> Ai có một chiếc điện thoại và lòng ham học đều có thể bắt đầu.
          </li>
        </ol>
      </section>

      <footer className="ab-coda">
        <p className="ab-sign">— Lamar</p>
        <div className="ab-links">
          <Link to="/curriculum" className="ab-link">
            Mở tủ sách
          </Link>
          <Link to="/terms" className="ab-link">
            Từ điển âm nhạc Lamar
          </Link>
          <button onClick={openDonate} className="ab-link is-gold">
            ☕ Mời Lamar một ly cà phê
          </button>
        </div>
      </footer>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { BookmarkIcon, ChartIcon, BranchesIcon, CompassIcon, EditIcon, NoteIcon, SparkleIcon, TypeIcon } from '../../components/icons'
import './research.css'

/**
 * The research tools, reachable on every device: on phones they are not in the bottom bar, and the side drawer
 * only exists on desktop, so the libraries' home pages carry this row.
 */
const TOOLS = [
  { to: '/analyze', icon: ChartIcon, title: 'Phân tích tác phẩm', text: 'Hợp âm, giọng, câu kết ngay trên bản nhạc' },
  { to: '/brain', icon: SparkleIcon, title: 'Sổ tay tri thức', text: 'Ghi chú nối nhau, liên kết hai chiều, đồ thị' },
  { to: '/explore', icon: CompassIcon, title: 'Tra cứu', text: 'Người, tác phẩm, dòng thời gian, thầy – trò' },
  { to: '/explore?tab=pha-he', icon: BranchesIcon, title: 'Dòng truyền', text: 'Chuỗi thầy – trò trên trục thời gian' },
  { to: '/sources', icon: BookmarkIcon, title: 'Thư mục học', text: 'Nguồn, trích dẫn, sức khoẻ thư viện' },
  { to: '/terms', icon: TypeIcon, title: 'Thuật ngữ', text: 'Năm thứ tiếng, đối chiếu trường phái' },
  { to: '/research', icon: EditIcon, title: 'Bàn làm việc', text: 'Đề tài, bản nháp, xuất Word' },
  { to: '/notes', icon: NoteIcon, title: 'Sổ nghiên cứu', text: 'Mọi đánh dấu và ghi chú' },
]

export function ResearchTools() {
  return (
    <nav aria-label="Công cụ nghiên cứu" className="rt">
      <p className="brand-eyebrow">Công cụ nghiên cứu</p>
      <ul className="rt-list">
        {TOOLS.map(({ to, icon: Icon, title, text }) => (
          <li key={to}>
            <Link to={to} className="rt-card spot">
              <Icon width={18} height={18} className="rt-icon" />
              <span className="min-w-0">
                <span className="rt-title">{title}</span>
                <span className="rt-text">{text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

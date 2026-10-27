import { useCallback, useEffect, useLayoutEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { BookIcon, BranchesIcon, CalendarIcon, GraduationIcon, SearchIcon, SettingsIcon, SparkleIcon, UsersIcon } from '../../components/icons'
import { endTour, startTour, tourSeen, useTourOpen } from './tour'
import '../../components/motion-ui.css'

interface Step {
  icon: ReactNode
  eyebrow: string
  title: string
  lead: string
  points: [string, string][]
  /** `data-tour` of the control to light up; the first visible match wins (sidebar on desktop, bottom bar on phones). */
  target?: string[]
  /** Page shown behind the card while this step is open. */
  page?: string
}

const STEPS: Step[] = [
  {
    icon: <SparkleIcon width={22} height={22} />,
    eyebrow: 'Chào mừng',
    title: 'Trung tâm lý thuyết âm nhạc học by Lamar',
    lead: 'Một ứng dụng gồm hai phần: sổ tay dạy học riêng tư — thời khoá biểu và hồ sơ học viên — và một thư viện âm nhạc với hàng nghìn bài viết, tủ sách giáo trình và bản đồ âm nhạc học.',
    points: [
      ['Mất khoảng hai phút', 'Tour đi qua từng khu vực, chỉ đúng nút cần bấm và chuyển trang giúp bạn.'],
      ['Không cần mạng', 'Ứng dụng lưu mọi thứ ngay trên thiết bị và vẫn chạy khi ngoại tuyến.'],
      ['Xem lại bất cứ lúc nào', 'Vào Cài đặt → Hướng dẫn sử dụng để mở lại tour này.'],
    ],
  },
  {
    icon: <CalendarIcon width={22} height={22} />,
    eyebrow: 'Bước 1 · Lịch',
    title: 'Thời khoá biểu tuần',
    lead: 'Trang Lịch hiển thị các buổi dạy cố định trong tuần, xếp theo ngày và giờ, kèm vạch giờ hiện tại.',
    points: [
      ['Thêm buổi học', 'Bấm "Thêm buổi học" (máy tính), nút "+" giữa thanh dưới (điện thoại), hoặc phím N. Chọn học viên, ngày, giờ, địa điểm và loại buổi.'],
      ['Xem và sửa', 'Chạm vào một buổi để xem chi tiết; bấm Sửa hoặc phím E để chỉnh. Mỗi địa điểm có một màu riêng để nhìn là nhận ra.'],
      ['Riêng tư', 'Lịch và Học viên được khoá bằng một mã riêng. Người khác mở ứng dụng chỉ thấy phần thư viện.'],
    ],
    target: ['/'],
    page: '/',
  },
  {
    icon: <UsersIcon width={22} height={22} />,
    eyebrow: 'Bước 2 · Học viên',
    title: 'Hồ sơ học viên',
    lead: 'Mỗi học viên có một hồ sơ: tên, biệt danh, cấp độ, liên hệ, học phí, ghi chú và toàn bộ các buổi học của họ.',
    points: [
      ['Tạo hồ sơ', 'Bấm "Thêm học viên" trong trang, hoặc nút "+" → Thêm học viên.'],
      ['Theo dõi', 'Mở hồ sơ để xem lịch học, cấp độ và ghi chú tiến độ của từng em.'],
      ['Tìm nhanh', 'Gõ tên, số điện thoại hoặc ghi chú vào ô tìm kiếm để nhảy thẳng tới hồ sơ.'],
    ],
    target: ['/students'],
    page: '/students',
  },
  {
    icon: <BookIcon width={22} height={22} />,
    eyebrow: 'Bước 3 · Lý thuyết',
    title: 'Thư viện bài viết',
    lead: 'Hơn một nghìn bài về kỹ thuật piano, nhạc lý, hoà âm, phức điệu, hình thức, lịch sử, nhà soạn nhạc, jazz, âm nhạc Việt Nam… chia thành các mục, mỗi mục mở đầu bằng một bài lộ trình.',
    points: [
      ['Đọc theo lộ trình', 'Mở một mục, bắt đầu từ bài lộ trình: nó sắp các bài theo thứ tự nên học.'],
      ['Liên kết chéo', 'Chữ liên kết trong bài dẫn sang bài liên quan. Mỗi bài có mục lục, thời gian đọc còn lại và nguồn tham khảo ở cuối.'],
      ['Lưu và đánh dấu', 'Lưu bài để đọc sau, đánh dấu đã học. Ứng dụng nhớ chỗ bạn đang đọc và mời đọc tiếp.'],
      ['Tự kiểm tra', 'Câu hỏi trắc nghiệm ở trang thư viện và cuối các chương sách giúp ôn lại kiến thức.'],
    ],
    target: ['/theory'],
    page: '/theory',
  },
  {
    icon: <BranchesIcon width={22} height={22} />,
    eyebrow: 'Bước 4 · Âm nhạc học',
    title: 'Bản đồ ngành',
    lead: 'Âm nhạc học được vẽ thành một bản đồ: các nhánh lịch sử, hệ thống, ứng dụng và thực hành, mỗi nhánh gom sẵn các bài trong thư viện.',
    points: [
      ['Đi theo nhánh', 'Chọn một nhánh để xem nó nghiên cứu gì và các bài nên đọc.'],
      ['Trích dẫn', 'Đầu trang có các câu nói của nhạc sĩ, nhà nghiên cứu, kèm nguyên văn và nguồn.'],
    ],
    target: ['/musicology'],
    page: '/musicology',
  },
  {
    icon: <GraduationIcon width={22} height={22} />,
    eyebrow: 'Bước 5 · Tủ sách',
    title: 'Tủ sách',
    lead: 'Các bài thư viện được đóng thành sách lý thuyết và giáo trình piano theo cấp độ, đọc như sách điện tử.',
    points: [
      ['Chọn sách', 'Vuốt ngang dãy bìa (hoặc kéo chuột, phím ← →); chạm bìa ở giữa để mở sách. Bên dưới, sách xếp theo chủ đề — chạm tên chủ đề trên thanh dính để nhảy tới.'],
      ['Đọc', 'Vuốt hoặc dùng phím mũi tên để lật trang. Thanh trên có mục lục, dấu trang, tìm trong sách và chỉnh cỡ chữ, phông, nền Giấy – Sepia – Đêm.'],
      ['Học có tiến độ', 'Đánh dấu chương đã học; thanh tiến độ trên giá sách cho biết bạn đi được bao xa. Nút PDF dàn trang để in hoặc lưu.'],
    ],
    target: ['/curriculum'],
    page: '/curriculum',
  },
  {
    icon: <SearchIcon width={22} height={22} />,
    eyebrow: 'Bước 6 · Tìm kiếm',
    title: 'Tìm mọi thứ, từ một ô',
    lead: 'Ô tìm kiếm tìm trong toàn ứng dụng: bài viết, sách, chương, trang, thao tác — và học viên, buổi học khi đã mở khoá.',
    points: [
      ['Mở nhanh', 'Phím ⌘K / Ctrl+K hoặc / trên máy tính; trên điện thoại bấm "+" → Tìm & đi nhanh.'],
      ['Không cần dấu', 'Gõ "hoa am", "sonata", "chopin" đều ra kết quả. Dùng ↑ ↓ để chọn, Enter để mở.'],
      ['Đọc gần đây', 'Mở ô tìm kiếm khi chưa gõ gì để quay lại những bài vừa đọc.'],
    ],
    target: ['search', 'quick'],
  },
  {
    icon: <SettingsIcon width={22} height={22} />,
    eyebrow: 'Bước 7 · Cài đặt',
    title: 'Cài đặt và sao lưu',
    lead: 'Đặt tên giáo viên, thời lượng và địa điểm mặc định của buổi học, ngày đầu tuần, đơn vị tiền tệ và giao diện Sáng – Tối – Theo hệ thống.',
    points: [
      ['Sao lưu thường xuyên', 'Dữ liệu nằm trong trình duyệt của thiết bị này. Bấm "Xuất dữ liệu" để lưu một tệp sao lưu; "Nhập dữ liệu" để khôi phục hoặc chuyển sang máy khác.'],
      ['Hướng dẫn lại', 'Mục "Hướng dẫn sử dụng" ở cuối trang Cài đặt mở lại tour này.'],
    ],
    target: ['/settings'],
    page: '/settings',
  },
  {
    icon: <SparkleIcon width={22} height={22} />,
    eyebrow: 'Sẵn sàng',
    title: 'Bắt đầu thôi',
    lead: 'Vài phím tắt cho người dùng máy tính:',
    points: [
      ['⌘K / Ctrl+K  hoặc  /', 'Mở ô tìm kiếm'],
      ['N', 'Thêm buổi học'],
      ['E', 'Sửa buổi học đang mở'],
      ['← →', 'Lật trang sách, lướt tủ sách'],
      ['Esc', 'Đóng cửa sổ đang mở'],
    ],
  },
]

/** Starts the tour once on first use; renders it whenever it is open. */
export function Onboarding() {
  const open = useTourOpen()
  useEffect(() => {
    if (tourSeen()) return
    const t = setTimeout(startTour, 700)
    return () => clearTimeout(t)
  }, [])
  return open ? createPortal(<Tour />, document.body) : null
}

function visible(keys?: string[]) {
  for (const k of keys ?? []) {
    for (const el of document.querySelectorAll<HTMLElement>(`[data-tour="${k}"]`)) {
      const r = el.getBoundingClientRect()
      if (r.width && r.height) return r
    }
  }
  return null
}

function Tour() {
  const [i, setStep] = useState(0)
  // Which way the user is travelling, so the next card slides in from that side.
  const [dir, setDir] = useState(0)
  const setI = useCallback((next: number | ((n: number) => number)) => {
    setStep((n) => {
      const to = typeof next === 'function' ? next(n) : next
      setDir(Math.sign(to - n))
      return to
    })
  }, [])
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [leaving, setLeaving] = useState(false)
  const step = STEPS[i]
  const last = i === STEPS.length - 1

  const finish = useCallback(() => {
    setLeaving(true)
    setTimeout(endTour, 220)
  }, [])

  // Show the page the step talks about, then find its control once the page has painted.
  useLayoutEffect(() => {
    if (step.page && location.hash.replace(/^#/, '') !== step.page) location.hash = step.page
    let raf = requestAnimationFrame(() => (raf = requestAnimationFrame(() => setRect(visible(step.target)))))
    const onResize = () => setRect(visible(step.target))
    addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
    }
  }, [step])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish()
      else if ((e.key === 'ArrowRight' || e.key === 'Enter') && last) finish()
      else if (e.key === 'ArrowRight' || e.key === 'Enter') setI((n) => n + 1)
      else if (e.key === 'ArrowLeft') setI((n) => Math.max(0, n - 1))
      else return
      e.preventDefault()
      e.stopPropagation()
    }
    addEventListener('keydown', onKey, true)
    return () => removeEventListener('keydown', onKey, true)
  }, [last, finish, setI])

  // Desktop: the card sits beside the lit control. Phones (target in the bottom bar): the card floats above the bar.
  const wide = innerWidth >= 1024
  const cardStyle: React.CSSProperties =
    rect && wide ? { left: Math.min(rect.right + 24, innerWidth - 444), top: Math.max(16, Math.min(rect.top - 40, innerHeight - 560)) } : {}

  return (
    <div className={clsx('tour fixed inset-0 z-[90]', leaving && 'is-leaving')} role="dialog" aria-modal aria-label="Hướng dẫn sử dụng">
      {rect ? (
        <div
          className="tour-spot tour-spot-glide pointer-events-none fixed"
          style={{ left: rect.left - 6, top: rect.top - 6, width: rect.width + 12, height: rect.height + 12 }}
        />
      ) : (
        <div className="tour-dim absolute inset-0" />
      )}

      <div
        key={i}
        className={clsx(
          dir > 0 && 'tour-go-next',
          dir < 0 && 'tour-go-prev',
          'tour-card fixed flex max-h-[calc(100dvh-32px)] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]',
          !(rect && wide) && 'left-1/2 -translate-x-1/2',
          !(rect && wide) && (rect ? 'bottom-[calc(96px+env(safe-area-inset-bottom))]' : 'top-1/2 -translate-y-1/2'),
        )}
        style={cardStyle}
      >
        <div className="tour-head relative px-6 pb-4 pt-6">
          <div className="flex items-center gap-3">
            <span className="tour-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">{step.icon}</span>
            <div className="min-w-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">{step.eyebrow}</p>
              <h2 className="font-display text-[22px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">{step.title}</h2>
            </div>
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{step.lead}</p>
        </div>

        <ul className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-6 pb-2">
          {step.points.map(([k, v], n) => (
            <li key={k} className="tour-point flex gap-3" style={{ animationDelay: `${120 + n * 70}ms` }}>
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
                <span className="font-semibold text-[var(--color-ink)]">{k}</span> — {v}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 border-t border-[var(--color-border)] px-6 py-4">
          <div className="flex flex-1 gap-1" aria-label={`Bước ${i + 1} / ${STEPS.length}`}>
            {STEPS.map((_, n) => (
              <button key={n} aria-label={`Bước ${n + 1}`} onClick={() => setI(n)} className={clsx('tour-dot', n === i && 'is-active', n < i && 'is-done')} />
            ))}
          </div>
          {!last && (
            <button onClick={finish} className="text-[12.5px] text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-ink)]">
              Bỏ qua
            </button>
          )}
          {i > 0 && (
            <button onClick={() => setI(i - 1)} className="h-9 rounded-full border border-[var(--color-border)] px-3.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]">
              Trước
            </button>
          )}
          <button
            autoFocus
            onClick={() => (last ? finish() : setI(i + 1))}
            className="h-9 rounded-full bg-[var(--color-ink)] px-4 text-[13px] font-medium text-[var(--color-surface)] shadow-sm transition-transform active:scale-95"
          >
            {i === 0 ? 'Bắt đầu' : last ? 'Hoàn tất' : 'Tiếp'}
          </button>
        </div>
      </div>
    </div>
  )
}

import { BookIcon, BookmarkIcon, CompassIcon, TypeIcon, BranchesIcon, CalendarIcon, GraduationIcon, HomeIconGlyph, NoteIcon, SettingsIcon } from '../components/icons'

export const navItems = [
  { to: '/home', label: 'Trang chủ', icon: HomeIconGlyph, end: true },
  { to: '/', label: 'Lịch', icon: CalendarIcon, end: true },
  { to: '/musicology', label: 'Âm nhạc học', icon: BranchesIcon, end: false },
  { to: '/theory', label: 'Lý thuyết', icon: BookIcon, end: false },
  { to: '/curriculum', label: 'Tủ sách', icon: GraduationIcon, end: false },
  // Desktop side bar only; on phones it is reached from search, the reader and the bookshelf.
  { to: '/notes', label: 'Sổ nghiên cứu', icon: NoteIcon, end: false, desktop: true },
  { to: '/explore', label: 'Tra cứu', icon: CompassIcon, end: false, desktop: true },
  { to: '/sources', label: 'Thư mục học', icon: BookmarkIcon, end: false, desktop: true },
  { to: '/terms', label: 'Thuật ngữ', icon: TypeIcon, end: false, desktop: true },
  { to: '/settings', label: 'Cài đặt', icon: SettingsIcon, end: false },
]

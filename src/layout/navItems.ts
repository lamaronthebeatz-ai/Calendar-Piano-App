import { BookIcon, BranchesIcon, CalendarIcon, GraduationIcon, NoteIcon, SettingsIcon, UsersIcon } from '../components/icons'

export const navItems = [
  { to: '/', label: 'Lịch', icon: CalendarIcon, end: true },
  { to: '/students', label: 'Học viên', icon: UsersIcon, end: false },
  { to: '/musicology', label: 'Âm nhạc học', icon: BranchesIcon, end: false },
  { to: '/theory', label: 'Lý thuyết', icon: BookIcon, end: false },
  { to: '/curriculum', label: 'Tủ sách', icon: GraduationIcon, end: false },
  // Desktop side bar only; on phones it is reached from search, the reader and the bookshelf.
  { to: '/notes', label: 'Sổ nghiên cứu', icon: NoteIcon, end: false, desktop: true },
  { to: '/settings', label: 'Cài đặt', icon: SettingsIcon, end: false },
]

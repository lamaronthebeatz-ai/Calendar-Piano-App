import { BookIcon, BranchesIcon, CalendarIcon, GraduationIcon, SettingsIcon, UsersIcon } from '../components/icons'

export const navItems = [
  { to: '/', label: 'Lịch', icon: CalendarIcon, end: true },
  { to: '/students', label: 'Học viên', icon: UsersIcon, end: false },
  { to: '/musicology', label: 'Âm nhạc học', icon: BranchesIcon, end: false },
  { to: '/theory', label: 'Lý thuyết', icon: BookIcon, end: false },
  { to: '/curriculum', label: 'Giáo trình', icon: GraduationIcon, end: false },
  { to: '/settings', label: 'Cài đặt', icon: SettingsIcon, end: false },
]

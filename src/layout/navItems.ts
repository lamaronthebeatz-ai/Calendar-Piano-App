import { BookIcon, CalendarIcon, ChartIcon, SettingsIcon, UsersIcon } from '../components/icons'

export const navItems = [
  { to: '/', label: 'Lịch', icon: CalendarIcon, end: true },
  { to: '/students', label: 'Học viên', icon: UsersIcon, end: false },
  { to: '/theory', label: 'Lý thuyết', icon: BookIcon, end: false },
  { to: '/statistics', label: 'Thống kê', icon: ChartIcon, end: false },
  { to: '/settings', label: 'Cài đặt', icon: SettingsIcon, end: false },
]

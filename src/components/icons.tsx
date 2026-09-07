import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  }
}

export const PlusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)
export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 18l6-6-6-6" />
  </svg>
)
export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)
export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
)
export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.25" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 4.2c1.6.4 2.75 1.85 2.75 3.55S17.6 10.9 16 11.3" />
    <path d="M18.5 14.3c2 .6 3 2.1 3 4.7" />
  </svg>
)
export const ChartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V10M12 20V4M20 20v-7" />
    <path d="M2.5 20.5h19" />
  </svg>
)
export const SettingsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 13.5a1.9 1.9 0 0 0 .38 2.1l.07.07a2.3 2.3 0 1 1-3.25 3.25l-.07-.07a1.9 1.9 0 0 0-2.1-.38 1.9 1.9 0 0 0-1.15 1.74V20.5a2.3 2.3 0 1 1-4.6 0v-.1a1.9 1.9 0 0 0-1.24-1.74 1.9 1.9 0 0 0-2.1.38l-.07.07a2.3 2.3 0 1 1-3.25-3.25l.07-.07a1.9 1.9 0 0 0 .38-2.1A1.9 1.9 0 0 0 .5 12.36h-.1a2.3 2.3 0 1 1 0-4.6h.1a1.9 1.9 0 0 0 1.74-1.24 1.9 1.9 0 0 0-.38-2.1l-.07-.07A2.3 2.3 0 1 1 4.99 1.1l.07.07a1.9 1.9 0 0 0 2.1.38h.1A1.9 1.9 0 0 0 8.4.65V.5a2.3 2.3 0 1 1 4.6 0v.1a1.9 1.9 0 0 0 1.15 1.74h.1a1.9 1.9 0 0 0 2.1-.38l.07-.07a2.3 2.3 0 1 1 3.25 3.25l-.07.07a1.9 1.9 0 0 0-.38 2.1v.1a1.9 1.9 0 0 0 1.74 1.15h.15a2.3 2.3 0 1 1 0 4.6h-.1a1.9 1.9 0 0 0-1.74 1.15z" />
  </svg>
)
export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7.25" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)
export const XIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)
export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)
export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.4" />
  </svg>
)
export const MoreVerticalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)
export const TrashIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M18.5 7l-.7 12.15A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.85L5.5 7" />
    <path d="M10 11v6M14 11v6" />
  </svg>
)
export const EditIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21l1-4.6L15.8 4.6a2 2 0 0 1 2.83 0l.77.77a2 2 0 0 1 0 2.83L7.6 20 3 21z" />
    <path d="M14.5 6.4l3.1 3.1" />
  </svg>
)
export const RepeatIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17 2.5l3.5 3.5-3.5 3.5" />
    <path d="M20.5 6H8a5 5 0 0 0-5 5v.5" />
    <path d="M7 21.5L3.5 18 7 14.5" />
    <path d="M3.5 18H16a5 5 0 0 0 5-5v-.5" />
  </svg>
)
export const SunIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4.3" />
    <path d="M12 2.5v2.3M12 19.2v2.3M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
)
export const MoonIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.5 14.7A8.5 8.5 0 1 1 9.3 3.5a7 7 0 0 0 11.2 11.2z" />
  </svg>
)
export const DownloadIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v13M7 11.5l5 5 5-5" />
    <path d="M4.5 19.5h15" />
  </svg>
)
export const UploadIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21V8M7 12.5l5-5 5 5" />
    <path d="M4.5 19.5h15" />
  </svg>
)
export const AlertTriangleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5L22 20.5H2L12 3.5z" />
    <path d="M12 10v4.2" />
    <circle cx="12" cy="17.4" r="0.15" fill="currentColor" />
  </svg>
)
export const NoteIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 2.5h9.2L19 6.3V19.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z" />
    <path d="M14.5 2.5V6a1 1 0 0 0 1 1h3.4" />
    <path d="M8 12h8M8 16h5" />
  </svg>
)
export const PianoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6" width="19" height="12.5" rx="1.5" />
    <path d="M7 6v8M11 6v8M15 6v8M19 6v8" />
    <path d="M2.5 6.5A5.5 5.5 0 0 1 8 2h8a5.5 5.5 0 0 1 5.5 4.5" opacity=".0" />
  </svg>
)
export const ArrowLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)
export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 3.5h3l1.3 4.4-2.2 1.7a13 13 0 0 0 5.8 5.8l1.7-2.2 4.4 1.3v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
)
export const FilterIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 5h17M6.5 12h11M10 19h4" />
  </svg>
)
export const CopyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)
export const BellIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9a6 6 0 1 1 12 0c0 3.6 1 5.3 1.6 6.1a1 1 0 0 1-.8 1.6H5.2a1 1 0 0 1-.8-1.6C5 14.3 6 12.6 6 9z" />
    <path d="M9.7 20a2.3 2.3 0 0 0 4.6 0" />
  </svg>
)
export const CloudIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 18.5a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.2 8.1 4 4 0 0 1 17 16.5" />
  </svg>
)
export const HomeIconGlyph = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 11.5L12 4l8 7.5" />
    <path d="M6 10v9.5a1 1 0 0 0 1 1h3.5V15h3v5.5H17a1 1 0 0 0 1-1V10" />
  </svg>
)

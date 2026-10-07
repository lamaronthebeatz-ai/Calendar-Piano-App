import type { Article } from './wiki'
import { basics } from './content/basics'
import { rhythm } from './content/rhythm'
import { pitch } from './content/pitch'
import { scales } from './content/scales'
import { harmony } from './content/harmony'
import { form } from './content/form'
import { expression } from './content/expression'

/**
 * Nội dung lý thuyết, mỗi nhóm một file trong content/. Thêm bài: thêm object vào file của nhóm.
 * Liên kết sang bài khác bằng [[slug]] hoặc [[slug|chữ hiển thị]]; slug, tiêu đề hay alias đều dùng
 * được. Mục "Các bài nhắc đến trang này" tự sinh từ các liên kết đó.
 */
export const CATEGORIES = {
  basics: { title: 'Ký âm cơ bản', description: 'Nốt, khuông nhạc, khoá, bàn phím và dấu hoá — đọc được bản nhạc.' },
  rhythm: { title: 'Nhịp & tiết tấu', description: 'Âm thanh kéo dài bao lâu, được chia phách và nhanh chậm thế nào.' },
  pitch: { title: 'Cao độ & quãng', description: 'Khoảng cách giữa các nốt và cơ sở âm học của chúng.' },
  scales: { title: 'Âm giai & giọng', description: 'Âm giai, điệu thức, hoá biểu và quan hệ giữa các giọng.' },
  harmony: { title: 'Hợp âm & hoà âm', description: 'Hợp âm, chức năng, vòng hợp âm, kết và chuyển giọng.' },
  form: { title: 'Giai điệu & hình thức', description: 'Từ motif, câu nhạc đến cấu trúc của cả tác phẩm.' },
  expression: { title: 'Diễn tấu & ký hiệu', description: 'Cường độ, cách đánh, hoa mỹ, pedal, ngón bấm và thuật ngữ.' },
}

export const ARTICLES: Article[] = [...basics, ...rhythm, ...pitch, ...scales, ...harmony, ...form, ...expression]

import type { Article } from './wiki'
import { basics } from './content/basics'
import { rhythm } from './content/rhythm'
import { pitch } from './content/pitch'
import { scales } from './content/scales'
import { harmony } from './content/harmony'
import { form } from './content/form'
import { expression } from './content/expression'
import { chromatic } from './content/chromatic'
import { jazz } from './content/jazz'
import { modern } from './content/modern'
import { composers } from './content/composers'
import { technique } from './content/technique'

/**
 * Nội dung lý thuyết, mỗi nhóm một file trong content/. Thêm bài: thêm object vào file của nhóm.
 * Liên kết sang bài khác bằng [[slug]] hoặc [[slug|chữ hiển thị]]; slug, tiêu đề hay alias đều dùng
 * được. Mục "Các bài nhắc đến trang này" tự sinh từ các liên kết đó.
 */
export const CATEGORIES = {
  technique: { title: 'Kỹ thuật & luyện tập piano', hue: 140, description: 'Tư thế, âm giai, hợp âm rải, đọc nốt, thị tấu, tốc độ, học thuộc, biểu cảm và sức khoẻ người chơi.' },
  basics: { title: 'Ký âm cơ bản', hue: 220, description: 'Nốt, khuông nhạc, khoá, bàn phím và dấu hoá — đọc được bản nhạc.' },
  rhythm: { title: 'Nhịp & tiết tấu', hue: 25, description: 'Âm thanh kéo dài bao lâu, được chia phách và nhanh chậm thế nào.' },
  pitch: { title: 'Cao độ & quãng', hue: 285, description: 'Khoảng cách giữa các nốt và cơ sở âm học của chúng.' },
  scales: { title: 'Âm giai & giọng', hue: 160, description: 'Âm giai, điệu thức, hoá biểu và quan hệ giữa các giọng.' },
  harmony: { title: 'Hợp âm & hoà âm', hue: 250, description: 'Hợp âm, chức năng, vòng hợp âm, kết và chuyển giọng.' },
  chromatic: { title: 'Hoà âm cromatic & phân tích', hue: 330, description: 'Nâng cao: Napoli, hợp âm 6 tăng, 7 giảm, mô tiến, bass số, Schenker, Neo-Riemann.' },
  form: { title: 'Giai điệu & hình thức', hue: 50, description: 'Từ motif, câu nhạc đến cấu trúc của cả tác phẩm.' },
  expression: { title: 'Diễn tấu & ký hiệu', hue: 5, description: 'Cường độ, cách đánh, hoa mỹ, pedal, ngón bấm và thuật ngữ.' },
  jazz: { title: 'Jazz & hoà âm hiện đại', hue: 300, description: 'Swing, xếp hợp âm, hệ thống hợp âm – âm giai, thay thế tritone, tái hoà âm.' },
  modern: { title: 'Thời kỳ & âm nhạc thế kỷ 20', hue: 195, description: 'Các thời kỳ lịch sử, ấn tượng, phi điệu tính, 12 âm, tập hợp cao độ, tối giản.' },
  composers: { title: 'Nhà soạn nhạc', hue: 75, description: 'Từ Trung cổ đến thế kỷ 20, chia theo thời kỳ và trường phái — mỗi người một trang.' },
}

export const ARTICLES: Article[] = [...technique, ...basics, ...rhythm, ...pitch, ...scales, ...harmony, ...chromatic, ...form, ...expression, ...jazz, ...modern, ...composers]

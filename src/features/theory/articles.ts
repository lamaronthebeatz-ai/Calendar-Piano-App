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
import { instrument } from './content/instrument'
import { musicianship } from './content/musicianship'
import { pianists, pianoSchools } from './content/pianists'
import { analysis } from './content/analysis'
import { listening } from './content/listening'

/**
 * Nội dung lý thuyết, mỗi nhóm một file trong content/. Thêm bài: thêm object vào file của nhóm.
 * Liên kết sang bài khác bằng [[slug]] hoặc [[slug|chữ hiển thị]]; slug, tiêu đề hay alias đều dùng
 * được. Mục "Các bài nhắc đến trang này" tự sinh từ các liên kết đó.
 */
export const CATEGORIES = {
  technique: { title: 'Kỹ thuật & luyện tập piano', hue: 140, description: 'Tư thế, cách chạm phím, âm giai, hợp âm rải, nốt kép, phối hợp hai tay, đọc nốt, thị tấu, phương pháp luyện tập, học thuộc, biểu diễn, sức khoẻ và lịch sử kỹ thuật piano.' },
  instrument: { title: 'Cây đàn piano', hue: 30, description: 'Lịch sử, harpsichord và clavichord, cấu tạo, bộ máy, các loại đàn, bảo dưỡng và lên dây.' },
  musicianship: { title: 'Luyện tai & sư phạm', hue: 265, description: 'Cảm âm tương đối và tuyệt đối, xướng âm, các phương pháp giáo dục âm nhạc, thi cấp độ.' },
  basics: { title: 'Ký âm cơ bản', hue: 220, description: 'Nốt, khuông nhạc, khoá, bàn phím và dấu hoá — đọc được bản nhạc.' },
  rhythm: { title: 'Nhịp & tiết tấu', hue: 25, description: 'Trường độ, phách, nhịp và nhịp độ: lịch sử ký âm, cảm nhận phách, đảo phách, nhịp lẻ và đa nhịp.' },
  pitch: { title: 'Cao độ & quãng', hue: 285, description: 'Khoảng cách giữa các nốt và cơ sở âm học của chúng.' },
  scales: { title: 'Âm giai & giọng', hue: 160, description: 'Âm giai, điệu thức, hoá biểu, vòng quãng 5 và quan hệ giữa các giọng — kèm lịch sử và nghiên cứu về cảm nhận giọng.' },
  harmony: { title: 'Hợp âm & hoà âm', hue: 250, description: 'Hai hệ thống: hoà âm cổ điển (hợp âm, chức năng, luật bốn bè, kết, chuyển giọng, phân tích và phối hoà âm) và hoà âm thế kỷ XX.' },
  chromatic: { title: 'Hoà âm cromatic & phân tích', hue: 330, description: 'Hoà âm cromatic (giáo trình chương 7–8): Napoli, 6 tăng, 7 giảm, hợp âm nốt chung, hợp âm ba tăng, trung âm cromatic, mô tiến, bass ngân, bass số, Schenker, Neo-Riemann.' },
  form: { title: 'Giai điệu & hình thức', hue: 50, description: 'Từ motif, câu nhạc đến cấu trúc của cả tác phẩm.' },
  expression: { title: 'Diễn tấu & ký hiệu', hue: 5, description: 'Cường độ, cách diễn tấu, hoa mỹ, pedal, ngón bấm, thuật ngữ, phong cách từng thời kỳ và cách chọn ấn bản.' },
  jazz: { title: 'Jazz & hoà âm hiện đại', hue: 300, description: 'Swing, xếp hợp âm, hệ thống hợp âm – âm giai, thay thế tritone, tái hoà âm.' },
  modern: { title: 'Thời kỳ & âm nhạc thế kỷ 20', hue: 195, description: 'Các thời kỳ lịch sử và hoà âm thế kỷ XX: ấn tượng, hoà âm điệu thức, toàn diatonic, hợp âm chồng, điệu thức Messiaen, phi điệu tính, 12 âm, tập hợp cao độ, tối giản, nhạc phổ.' },
  listening: { title: 'Nghe, cảm thụ & âm học', hue: 210, description: 'Âm học cơ bản, lịch sử thu âm, nghe nhạc chủ động và tâm lý học cảm xúc âm nhạc.' },
  analysis: { title: 'Phân tích tác phẩm', hue: 110, description: 'Phân tích các bài hay dạy: Für Elise, Prelude của Bach, K. 545, Nocturne, Gymnopédie, Clair de lune, Canon…' },
  pianists: { title: 'Nghệ sĩ piano', hue: 350, description: 'Từ Clementi, Liszt đến Horowitz, Argerich, Đặng Thái Sơn và các nghệ sĩ jazz — mỗi người một trang.' },
  composers: { title: 'Nhà soạn nhạc', hue: 75, description: 'Từ Trung cổ đến thế kỷ 20, chia theo thời kỳ và trường phái — mỗi người một trang.' },
}

export const ARTICLES: Article[] = [...technique, ...instrument, ...musicianship, ...basics, ...rhythm, ...pitch, ...scales, ...harmony, ...chromatic, ...form, ...expression, ...jazz, ...modern, ...composers, ...pianists, ...pianoSchools, ...analysis, ...listening]

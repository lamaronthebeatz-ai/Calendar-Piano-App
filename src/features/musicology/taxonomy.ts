import { ARTICLES } from '../theory/articles'
import { findArticle, type Article } from '../theory/wiki'

type CategoryId = Article['category']

/**
 * A group of articles inside a branch. Members are the slugs listed here plus every article of
 * `cats` that no other group of the same branch names (an article can sit in several branches, but
 * once per branch), minus `except`. `people` groups take the unlisted one-page-per-person articles
 * of `cats` instead. Groups drawing on categories keep the library's reading order.
 */
export interface Group {
  title: string
  slugs?: string[]
  cats?: CategoryId[]
  except?: string[]
  people?: boolean
}

export interface Branch {
  id: string
  part: PartId
  title: string
  /** The international (English or German) name of the field. */
  en: string
  glyph: string
  hue: number
  /** The overview article of the field; its body carries the sources. */
  hub: string
  summary: string
  questions: string[]
  groups: Group[]
}

export type PartId = 'intro' | 'historical' | 'systematic' | 'practice'

export const PARTS: Record<PartId, { title: string; en: string; description: string }> = {
  intro: {
    title: 'Nhập môn',
    en: 'Foundations',
    description: 'Ngành âm nhạc học là gì, được chia thế nào, và nghiên cứu bằng những phương pháp nào.',
  },
  historical: {
    title: 'Âm nhạc học lịch sử',
    en: 'Historical musicology',
    description: 'Nửa thứ nhất trong sơ đồ của Guido Adler (1885): âm nhạc theo thời gian — thời kỳ, phong cách, thể loại, nhạc cụ, nguồn và thực hành biểu diễn.',
  },
  systematic: {
    title: 'Âm nhạc học hệ thống',
    en: 'Systematic musicology',
    description: 'Nửa thứ hai: những quy luật chung của âm nhạc, không gắn với một thời điểm — âm học, tâm lý, biểu diễn, lý thuyết và phân tích, mỹ học, xã hội và văn hoá, sư phạm, tính toán.',
  },
  practice: {
    title: 'Thực hành sáng tạo',
    en: 'Creative practice',
    description: 'Ngẫu hứng, sáng tác và đệm — vừa là kỹ năng nghề, vừa là đối tượng mà các ngành trên nghiên cứu.',
  },
}

const COUNTERPOINT = ['doi-am', 'doi-am-5-loai', 'phuc-dieu-nghiem-khac', 'quang-va-chuyen-dong-doi-am', 'cantus-firmus', 'doi-am-loai-1', 'doi-am-loai-2', 'doi-am-loai-3', 'doi-am-loai-4', 'doi-am-loai-5', 'doi-am-ba-bon-be', 'phong-cach-palestrina', 'cong-thuc-phuc-dieu', 'doi-am-kep', 'fugue']

export const BRANCHES: Branch[] = [
  {
    id: 'nhap-mon',
    part: 'intro',
    title: 'Âm nhạc học: ngành và phương pháp',
    en: 'Musicology',
    glyph: '𝄪',
    hue: 60,
    hub: 'am-nhac-hoc',
    summary: 'Định nghĩa ngành, sơ đồ Adler, khái niệm âm nhạc học hệ thống hiện đại và các phương pháp nghiên cứu.',
    questions: ['Âm nhạc học nghiên cứu cái gì, và khác lý thuyết âm nhạc ở đâu?', 'Vì sao chia thành lịch sử và hệ thống?', 'Một câu hỏi nghiên cứu về âm nhạc được trả lời bằng những phương pháp nào?'],
    groups: [{ title: 'Nền tảng của ngành', slugs: ['am-nhac-hoc', 'am-nhac-hoc-lich-su', 'am-nhac-hoc-he-thong', 'phuong-phap-nghien-cuu-am-nhac', 'dinh-nghia-am-nhac'] }],
  },

  // ---------------------------------------------------------------- historical
  {
    id: 'su-hoc',
    part: 'historical',
    title: 'Sử học âm nhạc: phương pháp và công cụ',
    en: 'Historiography & method',
    glyph: '𝄐',
    hue: 40,
    hub: 'am-nhac-hoc-lich-su',
    summary: 'Ngành đã viết lịch sử âm nhạc ra sao từ thế kỷ 18 đến nay, làm việc với nguồn thế nào, và tra cứu bằng những công cụ gì.',
    questions: ['Một khẳng định về quá khứ dựa trên nguồn nào, và nguồn ấy đáng tin đến đâu?', 'Mỗi bộ lịch sử âm nhạc mang quan niệm gì của thời nó?', 'Tìm bản gốc, tài liệu nghiên cứu và số danh mục của một tác phẩm ở đâu?'],
    groups: [
      { title: 'Khung và lịch sử của ngành', slugs: ['am-nhac-hoc-lich-su', 'lich-su-nganh-am-nhac-hoc'] },
      { title: 'Phương pháp và công cụ', slugs: ['phuong-phap-su-hoc-am-nhac', 'nguon-tra-cuu-am-nhac-hoc', 'phuong-phap-nghien-cuu-am-nhac'] },
    ],
  },
  {
    id: 'nguon-van-ban',
    part: 'historical',
    title: 'Nguồn, ký âm và văn bản',
    en: 'Paleography, sources & editions',
    glyph: '𝄞',
    hue: 210,
    hub: 'lich-su-ky-am',
    summary: 'Đọc ký âm cũ, theo dấu bản nhạc từ bản viết tay qua bản in đến ấn bản phê bình — và bản thu như một loại nguồn mới.',
    questions: ['Dấu hiệu trên trang nguồn này nghĩa là gì?', 'Bản nào gần ý tác giả nhất, và ấn bản hiện đại đã thêm gì?', 'Kỹ thuật in đã quyết định âm nhạc nào được lưu hành?'],
    groups: [
      { title: 'Cổ tự học và ký âm', slugs: ['lich-su-ky-am', 'thanh-ca-gregorian', 'truong-do', 'bass-so'] },
      { title: 'In ấn, văn bản và ấn bản', slugs: ['lich-su-in-an-am-nhac', 'van-ban-hoc-am-nhac', 'an-ban-urtext'] },
      { title: 'Bản thu như một nguồn', slugs: ['lich-su-thu-am', 'so-sanh-ban-thu'] },
    ],
  },
  {
    id: 'lich-su-phong-cach',
    part: 'historical',
    title: 'Lịch sử âm nhạc: thời kỳ, phong cách, tiểu sử',
    en: 'Music history & style history',
    glyph: '𝅗𝅥',
    hue: 75,
    hub: 'cac-thoi-ky',
    summary: 'Từ âm nhạc cổ đại đến thế kỷ 20: các thời kỳ, phong cách và hơn ba trăm trang tiểu sử nhà soạn nhạc.',
    questions: ['Điều gì làm nên phong cách của một thời kỳ?', 'Một tác phẩm thuộc về bối cảnh nào: ai đặt hàng, ai nghe, chơi ở đâu?', 'Ranh giới giữa các thời kỳ chính xác đến mức nào?'],
    groups: [
      { title: 'Trước Trung cổ', slugs: ['am-nhac-co-dai'] },
      { title: 'Các thời kỳ', slugs: ['cac-thoi-ky'], cats: ['composers'] },
      { title: 'Tiểu sử nhà soạn nhạc', cats: ['composers'], people: true },
    ],
  },
  {
    id: 'lich-su-the-loai',
    part: 'historical',
    title: 'Lịch sử thể loại',
    en: 'Genre history',
    glyph: '♬',
    hue: 120,
    hub: 'the-loai-am-nhac',
    summary: 'Thể loại sinh ra, đổi chức năng và mất đi thế nào — từ thánh ca Gregorian đến nhạc phim và tân nhạc Việt Nam.',
    questions: ['Một thể loại được định nghĩa bằng chức năng, biên chế hay hình thức?', 'Vì sao một thể loại nổi lên ở một nơi, một thời?'],
    groups: [
      { title: 'Trung cổ và Phục hưng', slugs: ['thanh-ca-gregorian', 'organum', 'motet', 'thanh-le-va-requiem', 'ca-khuc-the-tuc-trung-co', 'madrigal', 'nhac-khi-phuc-hung'] },
      { title: 'Baroque', slugs: ['opera', 'oratorio-cantata-passion', 'chorale-va-chorale-prelude', 'to-khuc-baroque', 'toccata-prelude-fugue', 'sonata-baroque', 'concerto-grosso', 'khuc-mo-man'] },
      { title: 'Cổ điển và Lãng mạn', slugs: ['giao-huong', 'nhac-thinh-phong', 'sonata-the-loai', 'tieu-pham-piano', 'lied', 'tho-giao-huong', 'ballet', 'operetta-va-nhac-kich', 'the-loai'] },
      { title: 'Thế kỷ 20 – 21', cats: ['genres'] },
    ],
  },
  {
    id: 'thuc-hanh-bieu-dien-lich-su',
    part: 'historical',
    title: 'Thực hành biểu diễn và nghệ sĩ',
    en: 'Performance practice & performers',
    glyph: '♫',
    hue: 350,
    hub: 'phong-trao-bieu-dien-lich-su',
    summary: 'Người xưa chơi thế nào và ta biết điều đó bằng cách nào: phong trào biểu diễn theo lịch sử, diễn tấu theo thời kỳ, ngẫu hứng — và lịch sử các nghệ sĩ, trường phái piano.',
    questions: ['Ký hiệu trên giấy để lại những gì chưa viết ra?', 'Nhạc cụ, cao độ, chỉnh âm của thời ấy ra sao?', 'Chơi "đúng lịch sử" có phải là chơi hay hơn không?'],
    groups: [
      { title: 'Biểu diễn theo lịch sử', slugs: ['phong-trao-bieu-dien-lich-su', 'phong-cach-dien-tau', 'tinh-xac-thuc-bieu-dien'] },
      { title: 'Diễn tấu và ngẫu hứng theo thời kỳ', slugs: ['ky-hieu-hoa-my', 'lich-su-ngau-hung', 'cadenza', 'partimento', 'prelude-ung-tac', 'impromptu', 'lich-su-ky-thuat-piano'] },
      { title: 'Nghệ sĩ và trường phái piano', cats: ['pianists'] },
      { title: 'Tiểu sử nghệ sĩ piano', cats: ['pianists'], people: true },
    ],
  },
  {
    id: 'doi-song-tiep-nhan',
    part: 'historical',
    title: 'Đời sống âm nhạc và tiếp nhận',
    en: 'Musical life & reception',
    glyph: '𝄋',
    hue: 15,
    hub: 'doi-song-am-nhac-va-thiet-che',
    summary: 'Ai trả tiền cho âm nhạc, âm nhạc được nghe ở đâu, và vì sao một số tác phẩm thành kinh điển.',
    questions: ['Người bảo trợ — nhà thờ, triều đình, công chúng — đã định hình âm nhạc ra sao?', 'Một tác phẩm được tiếp nhận, quên lãng, hồi sinh thế nào?'],
    groups: [
      { title: 'Bảo trợ và thiết chế', slugs: ['doi-song-am-nhac-va-thiet-che', 'lich-su-in-an-am-nhac', 'xa-hoi-hoc-am-nhac'] },
      { title: 'Tiếp nhận và kinh điển', slugs: ['lich-su-tiep-nhan-am-nhac', 'ban-the-tac-pham-am-nhac', 'lich-su-thu-am', 'lo-trinh-tac-pham'] },
    ],
  },
  {
    id: 'nhac-khi-hoc',
    part: 'historical',
    title: 'Nhạc khí học',
    en: 'Organology',
    glyph: '𝄆',
    hue: 30,
    hub: 'nhac-khi-hoc',
    summary: 'Nhạc cụ như một đối tượng nghiên cứu: phân loại Hornbostel – Sachs, lịch sử, cấu tạo, tầm âm — nhạc cụ phương Tây và phương Đông, từ dàn nhạc giao hưởng đến đàn bầu, gamelan, sitar.',
    questions: ['Phân loại nhạc cụ theo tiêu chí nào?', 'Cấu tạo của cây đàn đã định hình lối viết và lối chơi ra sao?', 'Một nhạc cụ di chuyển và biến đổi giữa các nền văn hoá như thế nào?'],
    groups: [
      { title: 'Hệ thống và bảo tàng', slugs: ['nhac-khi-hoc', 'nhac-khi-the-gioi', 'am-hoc-nhac-cu', 'dan-nhac-giao-huong'] },
      { title: 'Bộ dây phương Tây', slugs: ['violin', 'viola', 'cello', 'double-bass', 'viola-da-gamba', 'dan-hac', 'guitar-co-dien', 'dan-lute', 'mandolin', 'guitar-dien'] },
      { title: 'Kèn gỗ và kèn đồng', slugs: ['sao-flute', 'recorder', 'oboe', 'clarinet', 'bassoon', 'saxophone', 'trumpet', 'kenh-horn', 'trombone', 'tuba'] },
      { title: 'Bộ gõ, đàn phím khác và nhạc cụ điện', slugs: ['timpani', 'bo-go-dan-nhac', 'bo-go-phim', 'celesta', 'trong-jazz', 'organ-ong', 'accordion-harmonium', 'synthesizer', 'theremin-ondes'] },
      { title: 'Việt Nam', slugs: ['nhac-cu-viet-nam', 'dan-bau', 'dan-tranh', 'dan-nguyet', 'dan-nhi', 'dan-day', 'dan-ty-ba-tam-sen', 'dan-tinh', 'sao-truc', 'tieu', 'ken-bau', 'khen', 'cong-chieng', 'dan-da', 'trung-klong-put', 'phach-song-lang-mo'] },
      { title: 'Đông Á', slugs: ['nhac-cu-dong-a', 'guqin', 'guzheng', 'pipa', 'erhu', 'dizi', 'sheng'] },
      { title: 'Nam Á và Tây Á', slugs: ['nhac-cu-nam-a-tay-a', 'sitar', 'veena', 'sarod', 'sarangi', 'tabla-mridangam', 'bansuri', 'tanpura', 'shehnai', 'dan-oud', 'qanun', 'ney', 'santur', 'tar-setar', 'kamancheh', 'trong-darbuka-daf'] },
      { title: 'Đông Nam Á và châu Phi', slugs: ['gamelan', 'ranat', 'angklung', 'kulintang', 'kora', 'mbira', 'djembe'] },
      { title: 'Đàn phím (piano)', cats: ['instrument'] },
    ],
  },
  {
    id: 'lich-su-ly-thuyet',
    part: 'historical',
    title: 'Lịch sử lý thuyết và tư tưởng âm nhạc',
    en: 'History of music theory',
    glyph: '𝄐',
    hue: 175,
    hub: 'lich-su-phan-tich-am-nhac',
    summary: 'Người ta đã giải thích âm nhạc thế nào qua các thời đại: từ Pythagoras và thuyết ethos đến Rameau, Schenker và lý thuyết hiện đại.',
    questions: ['Một lý thuyết trả lời câu hỏi của thời nó như thế nào?', 'Vì sao các quy tắc "cổ điển" ra đời sau âm nhạc mà chúng mô tả?'],
    groups: [
      { title: 'Lý thuyết và phân tích qua các thời đại', slugs: ['lich-su-phan-tich-am-nhac', 'phong-cach-palestrina', 'luoc-do-galant', 'partimento', 'luat-binh-quan'] },
      { title: 'Tư tưởng về âm nhạc', slugs: ['am-nhac-co-dai', 'thuyet-ethos-hy-lap', 'hoa-am-vu-tru', 'nhac-trong-tu-tuong-nho-gia', 'tranh-luan-rameau-rousseau', 'triet-hoc-lang-man-ve-am-nhac'] },
    ],
  },
  {
    id: 'lich-su-viet-nam',
    part: 'historical',
    title: 'Lịch sử âm nhạc Việt Nam',
    en: 'History of Vietnamese music',
    glyph: '♪',
    hue: 140,
    hub: 'am-nhac-viet-nam',
    summary: 'Từ trống đồng và đàn đá đến nhạc cung đình, sân khấu truyền thống, tân nhạc, nhạc vàng, nhạc cách mạng và V-pop; nhạc sĩ, lý thuyết cổ truyền, nghiên cứu, và phân định giai thoại với sự thật.',
    questions: ['Ta biết gì về âm nhạc Việt Nam trước khi có ký âm, và bằng chứng cứ nào?', 'Những mốc "khởi đầu" nào là quy ước, mốc nào có chứng cứ?'],
    groups: [
      { title: 'Tổng quan và thời kỳ', slugs: ['am-nhac-viet-nam', 'cac-thoi-ky-am-nhac-viet-nam', 'lich-su-am-nhac-viet-nam', 'am-nhac-co-trung-dai-viet-nam', 'am-nhac-thoi-nguyen', 'am-nhac-thoi-phap-thuoc', 'am-nhac-viet-nam-1945-1975', 'am-nhac-viet-nam-sau-1975'] },
      { title: 'Thể loại truyền thống', slugs: ['the-loai-am-nhac-viet-nam', 'am-nhac-truyen-thong-viet-nam', 'ca-tru', 'quan-ho', 'cheo', 'tuong', 'cai-luong', 'don-ca-tai-tu', 'ca-hue-nha-nhac', 'hat-xoan-hat-van-then', 'dan-ca-viet-nam', 'am-nhac-ton-giao-va-dan-toc-viet-nam'] },
      { title: 'Tân nhạc và hiện đại', slugs: ['tan-nhac-viet-nam', 'nhac-tien-chien', 'nhac-cach-mang', 'nhac-vang-bolero', 'nhac-trinh', 'nhac-tre-rock-sai-gon', 'nhac-hai-ngoai', 'vpop-rap-viet', 'nhac-co-dien-viet-nam', 'piano-viet-nam', 'ban-quyen-am-nhac-viet-nam'] },
      { title: 'Nhạc sĩ', slugs: ['nhac-si-viet-nam', 'van-cao', 'pham-duy', 'luu-huu-phuoc', 'nguyen-xuan-khoat', 'nguyen-van-thuong', 'doan-chuan', 'do-nhuan', 'hoang-viet', 'pham-tuyen', 'tran-tien', 'phu-quang', 'dang-huu-phuc', 'ton-that-tiet', 'nguyen-thien-dao'] },
      { title: 'Lý thuyết và thực hành', slugs: ['ly-thuyet-am-nhac-co-truyen-viet-nam', 'am-giai-ngu-cung', 'hoa-am-cho-giai-dieu-ngu-cung', 'dem-dieu-viet-nam'] },
      { title: 'Nghiên cứu và giai thoại', slugs: ['nghien-cuu-am-nhac-viet-nam', 'giai-thoai-am-nhac-viet-nam', 'dan-toc-nhac-hoc'] },
    ],
  },

  // ---------------------------------------------------------------- systematic
  {
    id: 'am-hoc',
    part: 'systematic',
    title: 'Âm học âm nhạc',
    en: 'Musical acoustics',
    glyph: '𝄢',
    hue: 210,
    hub: 'am-hoc-co-ban',
    summary: 'Vật lý của âm thanh nhạc: dao động, chuỗi bồi âm, âm sắc, hệ thống chỉnh âm, âm học của nhạc cụ và phòng hoà nhạc.',
    questions: ['Vì sao một nốt nhạc có cao độ và âm sắc?', 'Hệ thống chỉnh âm nào, đánh đổi điều gì?', 'Căn phòng biến đổi âm thanh ra sao?'],
    groups: [
      { title: 'Âm thanh và cao độ', slugs: ['am-hoc-co-ban', 'chuoi-boi-am', 'am-sac', 'thuan-nghich', 'luat-binh-quan'] },
      { title: 'Nhạc cụ, phòng và tai', slugs: ['am-hoc-nhac-cu', 'cau-tao-piano', 'am-hoc-phong', 'bao-ve-thinh-giac'] },
    ],
  },
  {
    id: 'tam-ly-hoc',
    part: 'systematic',
    title: 'Tâm lý học và khoa học nhận thức âm nhạc',
    en: 'Music psychology & cognition',
    glyph: '𝄽',
    hue: 265,
    hub: 'tam-ly-hoc-am-nhac',
    summary: 'Con người nghe, nhớ, chờ đợi, xúc động và học âm nhạc như thế nào — nghiên cứu bằng thực nghiệm.',
    questions: ['Tai và não tách một bản nhạc thành giọng, phách và giọng điệu ra sao?', 'Vì sao âm nhạc gây xúc động?', 'Luyện tập thế nào thì hiệu quả, theo bằng chứng?'],
    groups: [
      { title: 'Tổng quan và phương pháp', slugs: ['tam-ly-hoc-am-nhac', 'lo-trinh-nghe-cam-thu', 'thiet-ke-nghien-cuu-thuc-nghiem'] },
      { title: 'Tri giác thính giác', slugs: ['cam-nhan-am-thanh', 'phan-luong-thinh-giac', 'cao-do-tuyet-doi', 'cam-nhan-phach'] },
      { title: 'Giọng và thứ bậc điệu tính', slugs: ['dieu-tinh', 'tim-giong-bang-may'] },
      { title: 'Kỳ vọng, cảm xúc và cách nghe', slugs: ['ky-vong-am-nhac', 'cam-xuc-am-nhac', 'nghe-nhac-chu-dong'] },
      { title: 'Phát triển và ngôn ngữ', slugs: ['tam-ly-hoc-phat-trien-am-nhac', 'am-nhac-va-ngon-ngu'] },
      { title: 'Học tập, trí nhớ và chuyên môn', slugs: ['hoc-nhac-va-tri-tue', 'phuong-phap-luyen-tap', 'tap-trong-dau', 'hoc-thuoc-bai', 'khoa-hoc-ngau-hung', 'ly-thuyet-hoc-am-nhac-gordon', 'hoi-hop-bieu-dien'] },
    ],
  },
  {
    id: 'than-kinh-sinh-hoc',
    part: 'systematic',
    title: 'Khoa học thần kinh và sinh học âm nhạc',
    en: 'Neuroscience & biomusicology',
    glyph: '𝄐',
    hue: 320,
    hub: 'than-kinh-hoc-am-nhac',
    summary: 'Não nghe và học nhạc ra sao, vì sao loài người có âm nhạc, âm nhạc có phổ quát không — và âm nhạc được dùng để trị liệu thế nào.',
    questions: ['Những vùng não nào tham gia khi nghe và chơi nhạc, và luyện tập thay đổi não ra sao?', 'Âm nhạc là sản phẩm của chọn lọc tự nhiên hay sản phẩm phụ?', 'Bằng chứng nào cho âm nhạc trị liệu?'],
    groups: [
      { title: 'Não và âm nhạc', slugs: ['than-kinh-hoc-am-nhac', 'khoa-hoc-ngau-hung', 'hoc-nhac-va-tri-tue'] },
      { title: 'Tiến hoá và tính phổ quát', slugs: ['am-nhac-hoc-tien-hoa', 'am-nhac-va-ngon-ngu', 'tam-ly-hoc-phat-trien-am-nhac'] },
      { title: 'Ứng dụng lâm sàng', slugs: ['am-nhac-tri-lieu'] },
    ],
  },
  {
    id: 'bieu-dien',
    part: 'systematic',
    title: 'Khoa học biểu diễn',
    en: 'Performance science',
    glyph: '𝆑',
    hue: 140,
    hub: 'khoa-hoc-bieu-dien',
    summary: 'Cơ thể, kỹ thuật và quyết định biểu cảm của người biểu diễn — từ tư thế, cách chạm phím đến rubato và mối liên hệ phân tích – biểu diễn.',
    questions: ['Chuyển động nào hiệu quả và an toàn?', 'Người chơi tạo ra biểu cảm bằng những biến số nào (thời gian, cường độ, cách nối)?', 'Phân tích có giúp chơi hay hơn không?'],
    groups: [
      { title: 'Tổng quan', slugs: ['khoa-hoc-bieu-dien', 'ky-thuat-piano'] },
      { title: 'Cơ thể và sức khoẻ', slugs: ['tu-the', 'suc-khoe-nguoi-choi-dan', 'ban-tay-nho', 'ky-thuat-cham-phim', 'tremolo-xoay-cang-tay'] },
      { title: 'Kỹ thuật và luyện tập', cats: ['technique'], except: ['dem-hat-piano', 'dieu-dem-pho-bien', 'dem-pop-ballad', 'dem-slow-rock-rock', 'dem-rnb-neo-soul', 'dem-dieu-viet-nam', 'dem-bossa-nova', 'dem-hat-hien-dai'] },
      { title: 'Biểu cảm và diễn tấu', slugs: ['dien-tau', 'dien-dat-cau-nhac', 'lam-noi-giai-dieu', 'rubato', 'phan-tich-va-bieu-dien'], cats: ['expression'], except: ['dau-nhac-lai', 'thuat-ngu', 'bang-thuat-ngu', 'ky-hieu-nang-cao', 'an-ban-urtext'] },
    ],
  },
  {
    id: 'ly-thuyet',
    part: 'systematic',
    title: 'Lý thuyết âm nhạc',
    en: 'Music theory',
    glyph: '𝄋',
    hue: 250,
    hub: 'nhac-ly-co-ban',
    summary: 'Mô tả các hệ thống tổ chức âm thanh: ký âm, thời gian, cao độ, hoà âm, đối âm, hình thức — từ điệu tính cổ điển đến thế kỷ 20 và jazz.',
    questions: ['Các nốt được tổ chức theo những hệ thống nào?', 'Một quy tắc là quy luật nhận thức hay quy ước phong cách?'],
    groups: [
      { title: 'Ký âm và thuật ngữ', slugs: ['dau-nhac-lai', 'thuat-ngu', 'ky-hieu-nang-cao', 'bang-thuat-ngu', 'thuat-ngu-hoa-am'], cats: ['basics'] },
      { title: 'Thời gian: nhịp và tiết tấu', cats: ['rhythm'] },
      { title: 'Cao độ, quãng, âm giai và giọng', cats: ['pitch', 'scales'] },
      { title: 'Hoà âm điệu tính', cats: ['harmony'] },
      { title: 'Hoà âm cromatic', cats: ['chromatic'] },
      { title: 'Đối âm và phức điệu', slugs: COUNTERPOINT },
      { title: 'Giai điệu và hình thức', cats: ['form'] },
      { title: 'Lý thuyết thế kỷ 20', slugs: ['hoa-am-the-ky-20'], cats: ['modern'], except: ['cac-thoi-ky', 'am-nhac-truyen-thong-viet-nam'] },
      { title: 'Jazz và âm nhạc phổ thông', slugs: ['hoa-am-pop'], cats: ['jazz'] },
    ],
  },
  {
    id: 'phan-tich',
    part: 'systematic',
    title: 'Phân tích âm nhạc',
    en: 'Music analysis',
    glyph: '𝄡',
    hue: 110,
    hub: 'phuong-phap-phan-tich-tac-pham',
    summary: 'Các phương pháp đọc một tác phẩm cụ thể — hoà âm, hình thức, Schenker, Neo-Riemann, chủ đề biểu đạt — và hai mươi bài phân tích mẫu.',
    questions: ['Tác phẩm này vận hành thế nào?', 'Phương pháp nào hợp với câu hỏi nào?'],
    groups: [
      { title: 'Phương pháp', slugs: ['phuong-phap-phan-tich-tac-pham', 'phan-tich-hoa-am', 'phan-tich-phong-cach', 'chuc-nang-hinh-thuc', 'sieu-nhip', 'ly-thuyet-chu-de', 'phan-tich-schenker', 'neo-riemann', 'tap-hop-cao-do', 'phan-tich-tien-trinh-jazz', 'phan-tich-solo-jazz'] },
      { title: 'Phân tích mẫu', cats: ['analysis'] },
    ],
  },
  {
    id: 'my-hoc',
    part: 'systematic',
    title: 'Mỹ học và triết học âm nhạc',
    en: 'Music aesthetics & philosophy',
    glyph: '𝄐',
    hue: 190,
    hub: 'triet-hoc-am-nhac',
    summary: 'Âm nhạc là gì, biểu hiện cảm xúc ra sao, có ý nghĩa gì, tác phẩm tồn tại thế nào và thế nào là hay.',
    questions: ['Âm nhạc không lời có "nói" được gì không?', 'Thế nào là một buổi diễn trung thành với tác phẩm?'],
    groups: [
      { title: 'Các trường phái', slugs: ['am-nhac-tuyet-doi', 'adorno-va-am-nhac'] },
      { title: 'Các vấn đề', cats: ['philosophy'] },
    ],
  },
  {
    id: 'xa-hoi-van-hoa',
    part: 'systematic',
    title: 'Xã hội học âm nhạc và dân tộc nhạc học',
    en: 'Sociology of music & ethnomusicology',
    glyph: '𝄞',
    hue: 15,
    hub: 'dan-toc-nhac-hoc',
    summary: 'Âm nhạc trong xã hội và văn hoá: ai làm nhạc, cho ai, để làm gì; âm nhạc truyền thống và đại chúng — đặc biệt là Việt Nam.',
    questions: ['Âm nhạc mang nghĩa gì với cộng đồng làm ra nó?', 'Công nghiệp, công nghệ và thị trường định hình âm nhạc ra sao?'],
    groups: [
      { title: 'Tổng quan', slugs: ['dan-toc-nhac-hoc', 'xa-hoi-hoc-am-nhac'] },
      { title: 'Âm nhạc Việt Nam', slugs: ['am-nhac-va-ngon-ngu', 'am-nhac-truyen-thong-viet-nam', 'am-giai-ngu-cung', 'tan-nhac-viet-nam', 'piano-viet-nam', 'dem-dieu-viet-nam'] },
      { title: 'Âm nhạc đại chúng và xã hội', slugs: ['nhac-pho-thong-the-ky-20', 'phong-cach-jazz', 'jam-session', 'adorno-va-am-nhac', 'nhac-trong-tu-tuong-nho-gia'] },
    ],
  },
  {
    id: 'su-pham',
    part: 'systematic',
    title: 'Sư phạm âm nhạc',
    en: 'Music education',
    glyph: '♪',
    hue: 285,
    hub: 'lo-trinh-luyen-tai-su-pham',
    summary: 'Dạy và học âm nhạc: luyện tai, xướng âm, các phương pháp giáo dục, sư phạm piano, giáo trình và lộ trình.',
    questions: ['Kỹ năng âm nhạc được hình thành theo trình tự nào?', 'Phương pháp nào có bằng chứng?'],
    groups: [
      { title: 'Nền tảng khoa học', slugs: ['tam-ly-hoc-phat-trien-am-nhac', 'hoc-nhac-va-tri-tue'] },
      { title: 'Lộ trình và giáo trình', slugs: ['lo-trinh-luyen-tai-su-pham', 'su-pham-piano', 'giao-trinh-piano-nhap-mon', 'lo-trinh-tac-pham', 'thi-cap-do', 'giao-trinh-hoa-am'] },
      { title: 'Luyện tai', slugs: ['luyen-tai', 'xuong-am', 'am-tiet-nhip', 'ky-am', 'doc-not-nhanh', 'thi-tau'] },
      { title: 'Phương pháp và nhà sư phạm', cats: ['musicianship'] },
    ],
  },
  {
    id: 'tinh-toan',
    part: 'systematic',
    title: 'Âm nhạc học tính toán và công nghệ',
    en: 'Computational musicology',
    glyph: '𝄁',
    hue: 230,
    hub: 'am-nhac-hoc-tinh-toan',
    summary: 'Máy tính như công cụ nghiên cứu: mô hình hoá, phân tích kho dữ liệu lớn, truy xuất thông tin âm nhạc, âm thanh tổng hợp.',
    questions: ['Một khẳng định về phong cách có đứng vững trên hàng nghìn tác phẩm không?', 'Một lý thuyết có thể viết thành thuật toán không?'],
    groups: [{ title: 'Các bài liên quan', slugs: ['am-nhac-hoc-tinh-toan', 'tim-giong-bang-may', 'tap-hop-cao-do', 'neo-riemann', 'nhac-dien-tu', 'nhac-pho'] }],
  },

  // ---------------------------------------------------------------- practice
  {
    id: 'ngau-hung-sang-tac',
    part: 'practice',
    title: 'Ngẫu hứng và sáng tác',
    en: 'Improvisation & composition',
    glyph: '𝄌',
    hue: 95,
    hub: 'ngau-hung-ung-tac',
    summary: 'Tạo ra âm nhạc tại chỗ hoặc trên giấy — cổ điển, jazz, tự do.',
    questions: ['Người ngẫu hứng dựa vào những khuôn mẫu nào?', 'Sáng tác học được bằng quy tắc đến mức nào?'],
    groups: [{ title: 'Ngẫu hứng và sáng tác', slugs: ['sang-tac-jazz'], cats: ['improvisation'] }],
  },
  {
    id: 'dem-hat',
    part: 'practice',
    title: 'Đệm và phối',
    en: 'Accompaniment & arranging',
    glyph: '𝄇',
    hue: 50,
    hub: 'dem-hat-hien-dai',
    summary: 'Đệm hát các thể loại hiện đại và Việt Nam; tái hoà âm và đổi thể loại.',
    questions: ['Một điệu đệm được nhận ra nhờ những đặc điểm nào?'],
    groups: [{ title: 'Đệm hát', slugs: ['dem-hat-hien-dai', 'dem-hat-piano', 'dieu-dem-pho-bien', 'dem-pop-ballad', 'dem-slow-rock-rock', 'dem-rnb-neo-soul', 'dem-bossa-nova', 'dem-cho-ca-si', 'tai-hoa-am', 'doi-nhip-the-loai-jazz', 'tai-hoa-am-gospel'] }],
  },
]

/* ----------------------------------------------------------------- resolve */

const order = new Map(ARTICLES.map((a, i) => [a, i]))

const members = (g: Group, branch: Branch): Article[] => {
  const named = (g.slugs ?? []).map((s) => findArticle(s)).filter((a): a is Article => !!a)
  if (!g.cats) return named
  const elsewhere = new Set(branch.groups.filter((o) => o !== g).flatMap((o) => o.slugs ?? []))
  const byCat = ARTICLES.filter(
    (a) => g.cats!.includes(a.category) && !elsewhere.has(a.slug) && !g.except?.includes(a.slug) && !!a.unlisted === !!g.people,
  )
  return [...new Set([...named, ...byCat])].sort((a, b) => order.get(a)! - order.get(b)!)
}

export interface ResolvedBranch extends Branch {
  resolved: { group: Group; articles: Article[] }[]
  count: number
}

export const RESOLVED: ResolvedBranch[] = BRANCHES.map((b) => {
  const resolved = b.groups.map((group) => ({ group, articles: members(group, b) }))
  return { ...b, resolved, count: new Set(resolved.flatMap((r) => r.articles)).size }
})

/** Every branch whose map lists the article (the first is where it was placed first). */
export const branchesOf = (slug: string) => RESOLVED.filter((b) => b.resolved.some((r) => r.articles.some((a) => a.slug === slug)))

/** Articles the map does not place anywhere (should be empty; checked by the audit). */
export const unmapped = () => {
  const placed = new Set(RESOLVED.flatMap((b) => b.resolved.flatMap((r) => r.articles.map((a) => a.slug))))
  return ARTICLES.filter((a) => !placed.has(a.slug))
}

/** Slugs named in the map that no article answers to (also checked by the audit). */
export const missingSlugs = () =>
  [...BRANCHES.flatMap((b) => [b.hub, ...b.groups.flatMap((g) => [...(g.slugs ?? []), ...(g.except ?? [])])])].filter((s) => !findArticle(s))

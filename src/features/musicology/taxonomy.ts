import { ARTICLES } from '../theory/articles'
import { findArticle, type ArticleMeta as Article } from '../theory/wiki'

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

export type PartId = 'intro' | 'historical' | 'systematic' | 'applied' | 'practice'

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
  applied: {
    title: 'Âm nhạc học ứng dụng',
    en: 'Applied musicology',
    description: 'Tri thức âm nhạc học khi đi vào đời sống: công nghiệp và luật bản quyền, sức khoẻ và trị liệu, giáo dục, công nghệ và dữ liệu.',
  },
  practice: {
    title: 'Thực hành sáng tạo',
    en: 'Creative practice',
    description: 'Ngẫu hứng, sáng tác và đệm — vừa là kỹ năng nghề, vừa là đối tượng mà các ngành trên nghiên cứu.',
  },
}

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
      { title: 'Cổ tự học và ký âm', slugs: ['lich-su-ky-am', 'thanh-ca-gregorian', 'ky-am-binh-ca-gregorian', 'gregorio-va-gabc', 'truong-do', 'bass-so'] },
      { title: 'In ấn, văn bản và ấn bản', slugs: ['lich-su-in-an-am-nhac', 'van-ban-hoc-am-nhac', 'an-ban-urtext', 'sach-hat-va-van-kien-binh-ca', 'tai-lieu-su-pham-cua-bach'] },
      { title: 'Hình ảnh và dữ liệu số', slugs: ['bieu-tuong-hoc-am-nhac', 'am-nhac-hoc-ky-thuat-so', 'gian-pho-ky-am-so', 'ky-hieu-cao-do-c4-helmholtz-midi'] },
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
      { title: 'Baroque', slugs: ['opera', 'oratorio-cantata-passion', 'chorale-va-chorale-prelude', 'to-khuc-baroque', 'toccata-prelude-fugue', 'sonata-baroque', 'concerto-grosso', 'khuc-mo-man', 'passacaglia-va-chaconne'] },
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
      { title: 'Diễn tấu và ngẫu hứng theo thời kỳ', slugs: ['ky-hieu-hoa-my', 'lich-su-ngau-hung', 'cadenza', 'partimento', 'dem-organ-cho-binh-ca', 'alternatim-va-thanh-le-organ', 'dem-hat-cong-doan-tren-organ', 'prelude-ung-tac', 'impromptu', 'lich-su-ky-thuat-piano'] },
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
      { title: 'Hệ thống và bảo tàng', slugs: ['nhac-khi-hoc', 'nhac-khi-the-gioi', 'am-hoc-nhac-cu', 'dan-nhac-giao-huong', 'phoi-khi-nguyen-ly-co-ban', 'bieu-tuong-hoc-am-nhac', 'am-nhac-hoc-sinh-thai'] },
      { title: 'Bộ dây phương Tây', slugs: ['violin', 'viola', 'cello', 'double-bass', 'viola-da-gamba', 'dan-hac', 'guitar-co-dien', 'dan-lute', 'mandolin', 'guitar-dien'] },
      { title: 'Kèn gỗ và kèn đồng', slugs: ['sao-flute', 'recorder', 'oboe', 'clarinet', 'bassoon', 'saxophone', 'trumpet', 'kenh-horn', 'trombone', 'tuba'] },
      { title: 'Bộ gõ, đàn phím khác và nhạc cụ điện', slugs: ['timpani', 'bo-go-dan-nhac', 'bo-go-phim', 'celesta', 'trong-jazz', 'organ-ong', 'accordion-harmonium', 'synthesizer', 'theremin-ondes'] },
      { title: 'Việt Nam', slugs: ['nhac-cu-viet-nam', 'dan-bau', 'dan-tranh', 'dan-nguyet', 'dan-nhi', 'dan-day', 'dan-ty-ba-tam-sen', 'dan-tinh', 'sao-truc', 'tieu', 'ken-bau', 'khen', 'cong-chieng', 'dan-da', 'trung-klong-put', 'phach-song-lang-mo', 'trong-viet-nam', 'dan-doan-dan-tu', 'nhac-cu-tay-nguyen-va-mien-nui', 'nhac-cu-go-nghi-le-viet-nam'] },
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
      { title: 'Lý thuyết và phân tích qua các thời đại', slugs: ['lich-su-phan-tich-am-nhac', 'phong-cach-palestrina', 'luoc-do-galant', 'partimento', 'luat-binh-quan', 'cac-he-thong-chinh-am', 'tam-dieu-thuc-va-giong-thanh-vinh', 'bach-day-hoc-tro', 'phoi-chorale-kieu-bach'] },
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
    questions: ['Ta biết gì về âm nhạc Việt Nam trước khi có ký âm, và dựa trên chứng cứ nào?', 'Những mốc "khởi đầu" nào là quy ước, mốc nào có chứng cứ?'],
    groups: [
      { title: 'Tổng quan và thời kỳ', slugs: ['am-nhac-viet-nam', 'cac-thoi-ky-am-nhac-viet-nam', 'lich-su-am-nhac-viet-nam', 'am-nhac-co-trung-dai-viet-nam', 'am-nhac-thoi-nguyen', 'am-nhac-thoi-phap-thuoc', 'am-nhac-viet-nam-1945-1975', 'am-nhac-viet-nam-sau-1975'] },
      { title: 'Giáo trình: cuối thế kỷ XIX – 1975', slugs: ['am-nhac-viet-nam-cuoi-the-ky-xix-1975', 'san-khau-cai-cach-dau-the-ky-xx', 'ba-dong-ca-khuc-1930-1945', 'the-loai-ca-khuc-1945-1954', 'ca-kich-nhac-kich-vu-kich-1954-1975', 'khi-nhac-thinh-phong-giao-huong-1954-1975', 'dao-tao-va-nghien-cuu-am-nhac-1945-1975'] },
      { title: 'Thể loại truyền thống', slugs: ['the-loai-am-nhac-viet-nam', 'am-nhac-truyen-thong-viet-nam', 'ca-tru', 'quan-ho', 'cheo', 'tuong', 'cai-luong', 'don-ca-tai-tu', 'ca-hue-nha-nhac', 'hat-xoan-hat-van-then', 'dan-ca-viet-nam', 'am-nhac-ton-giao-va-dan-toc-viet-nam', 'binh-ca-va-organ-o-viet-nam', 'am-nhac-ca-tru', 'hat-ru', 'lan-dieu-cheo-va-tuong'] },
      { title: 'Tân nhạc và hiện đại', slugs: ['tan-nhac-viet-nam', 'nhac-tien-chien', 'nhac-cach-mang', 'nhac-vang-bolero', 'nhac-trinh', 'nhac-tre-rock-sai-gon', 'nhac-hai-ngoai', 'vpop-rap-viet', 'nhac-co-dien-viet-nam', 'piano-viet-nam', 'ban-quyen-am-nhac-viet-nam'] },
      { title: 'Nhạc sĩ', slugs: ['nhac-si-viet-nam', 'van-cao', 'pham-duy', 'luu-huu-phuoc', 'nguyen-xuan-khoat', 'nguyen-van-thuong', 'doan-chuan', 'do-nhuan', 'hoang-viet', 'pham-tuyen', 'tran-tien', 'phu-quang', 'dang-huu-phuc', 'ton-that-tiet', 'nguyen-thien-dao', 'le-thuong', 'van-chung', 'hoang-trong', 'hoang-thi-tho', 'tu-cong-phung', 'y-van', 'nguyen-anh-9', 'pho-duc-phuong', 'hong-dang', 'nguyen-tai-tue', 'nguyen-cuong', 'tran-lap', 'son-tung-m-tp'] },
      { title: 'Lý thuyết và thực hành', slugs: ['ly-thuyet-am-nhac-co-truyen-viet-nam', 'am-giai-ngu-cung', 'hoa-am-cho-giai-dieu-ngu-cung', 'dem-dieu-viet-nam', 'hoi-trong-nhac-tai-tu-cai-luong', 'long-ban-va-ky-thuat-to-diem'] },
      { title: 'Nghiên cứu và giai thoại', slugs: ['nghien-cuu-am-nhac-viet-nam', 'giai-thoai-am-nhac-viet-nam', 'dan-toc-nhac-hoc'] },
    ],
  },

  // ---------------------------------------------------------------- systematic
  {
    id: 'phe-phan-van-hoa',
    part: 'systematic',
    title: 'Âm nhạc học phê phán và văn hoá',
    en: 'Critical & cultural musicology',
    glyph: '𝄐',
    hue: 20,
    hub: 'am-nhac-hoc-moi',
    summary: 'Âm nhạc như thực hành văn hoá: âm nhạc học mới, giới và nữ quyền, nhạc đại chúng, nhạc phim, công nghiệp âm nhạc, âm thanh và môi trường, chính trị và kiểm duyệt, di sản phi vật thể.',
    questions: ['Âm nhạc mang ý thức hệ, giới, quyền lực như thế nào?', 'Ai được nghe, ai được trả tiền, ai được ghi danh — và vì sao?', 'Nghe một nơi chốn khác với nghe một tác phẩm ra sao?'],
    groups: [
      { title: 'Phê bình và giới', slugs: ['am-nhac-hoc-moi', 'am-nhac-hoc-nu-quyen-va-gioi', 'adorno-va-am-nhac', 'lich-su-tiep-nhan-am-nhac'] },
      { title: 'Đại chúng, màn ảnh và thị trường', slugs: ['nghien-cuu-am-nhac-dai-chung', 'nghien-cuu-nhac-phim', 'cong-nghiep-am-nhac', 'am-nhac-va-ban-sac-xa-hoi', 'hinh-thuc-ca-khuc-pho-thong'] },
      { title: 'Quản lý nghệ sĩ — Paul Allen', slugs: ['quan-ly-nghe-si-lo-trinh', 'quan-ly-nghe-si-nghe-va-nguyen-tac', 'quan-ly-nghe-si-chuan-bi', 'quan-ly-nghe-si-khoi-nghiep-va-tien', 'quan-ly-nghe-si-nghe-si-chuan-bi', 'quan-ly-nghe-si-bai-hoc-tu-nguoi-di-truoc', 'quan-ly-nghe-si-tu-quan-ly', 'quan-ly-nghe-si-hop-dong-quan-ly', 'quan-ly-nghe-si-lap-ke-hoach', 'quan-ly-nghe-si-hinh-thuc-kinh-doanh', 'quan-ly-nghe-si-luu-dien-va-hang-luu-niem', 'quan-ly-nghe-si-thu-nhap-sang-tac', 'quan-ly-nghe-si-thu-nhap-thu-am', 'quan-ly-nghe-si-dieu-hanh-kinh-doanh', 'quan-ly-nghe-si-co-van-va-lanh-dao'] },
      { title: 'Âm thanh, môi trường, chính trị, di sản', slugs: ['nghien-cuu-am-thanh-va-canh-quan-am-thanh', 'am-nhac-hoc-sinh-thai', 'am-nhac-chinh-tri-va-kiem-duyet', 'di-san-phi-vat-the-va-am-nhac'] },
    ],
  },
  {
    id: 'am-hoc',
    part: 'systematic',
    title: 'Âm học âm nhạc',
    en: 'Musical acoustics',
    glyph: '𝄢',
    hue: 210,
    hub: 'am-hoc-co-ban',
    summary: 'Vật lý của âm thanh trong âm nhạc: dao động, chuỗi bồi âm, âm sắc, hệ thống chỉnh âm, âm học của nhạc cụ và phòng hoà nhạc.',
    questions: ['Vì sao một nốt nhạc có cao độ và âm sắc?', 'Mỗi hệ thống chỉnh âm đánh đổi điều gì?', 'Căn phòng biến đổi âm thanh ra sao?'],
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
      { title: 'Kỳ vọng, cảm xúc và cách nghe', slugs: ['ky-vong-am-nhac', 'cam-xuc-am-nhac', 'nghe-nhac-chu-dong', 'tam-ly-nguoi-nghe-tong-quan', 'groove-va-cam-giac-muon-chuyen-dong'] },
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
      { title: 'Não và âm nhạc', slugs: ['than-kinh-hoc-am-nhac', 'nao-nguoi-choi-nhac-va-tinh-deo-dai', 'dong-bo-nhip-va-cuon-theo', 'khoa-hoc-ngau-hung', 'hoc-nhac-va-tri-tue'] },
      { title: 'Tiến hoá và tính phổ quát', slugs: ['am-nhac-hoc-tien-hoa', 'am-nhac-va-ngon-ngu', 'tam-ly-hoc-phat-trien-am-nhac'] },
      { title: 'Khác biệt cá nhân và lâm sàng', slugs: ['mu-am-bam-sinh', 'cam-giac-dong-cam-am-nhac', 'am-nhac-tri-lieu', 'am-nhac-va-sa-sut-tri-tue'] },
    ],
  },
  {
    id: 'tam-ly-nguoi-nghe',
    part: 'systematic',
    title: 'Tâm lý người nghe',
    en: 'Psychology of listening',
    glyph: '𝄐',
    hue: 290,
    hub: 'tam-ly-nguoi-nghe-tong-quan',
    summary: 'Người nghe chọn nhạc, thích nhạc, nhớ nhạc và dùng nhạc trong đời sống ra sao: sở thích và tính cách, sự quen thuộc, rùng mình, nhạc kẹt trong đầu, ký ức, nhạc nền, tiêu dùng, streaming và bản sắc.',
    questions: ['Vì sao người này mê rock, người kia mê nhạc cổ điển?', 'Vì sao nghe nhiều lần lại thấy hay hơn — rồi chán?', 'Nhạc nền giúp hay hại khi làm việc, và cửa hàng dùng nhạc để làm gì?'],
    groups: [
      { title: 'Tổng quan', slugs: ['tam-ly-nguoi-nghe-tong-quan', 'cam-xuc-am-nhac', 'ky-vong-am-nhac'] },
      { title: 'Sở thích và trải nghiệm', slugs: ['so-thich-am-nhac-va-tinh-cach', 'su-quen-thuoc-va-hieu-ung-tiep-xuc', 'rung-minh-khi-nghe-nhac', 'nhac-ket-trong-dau', 'am-nhac-va-tri-nho-tu-truyen', 'groove-va-cam-giac-muon-chuyen-dong', 'loi-bai-hat-va-tam-ly-nguoi-nghe'] },
      { title: 'Cảm xúc và điều hoà tâm trạng', slugs: ['nghich-ly-nhac-buon', 'dieu-hoa-cam-xuc-bang-am-nhac', 'rung-minh-khi-nghe-nhac', 'cam-xuc-am-nhac'] },
      { title: 'Nghe nhạc trong đời sống và xã hội', slugs: ['nhac-nen-va-hieu-suat-lam-viec', 'am-nhac-va-hanh-vi-tieu-dung', 'tam-ly-nghe-nhac-thoi-streaming', 'am-nhac-va-ban-sac-xa-hoi', 'khau-vi-am-nhac-theo-tuoi-tac', 'trai-nghiem-hoa-nhac-va-nghe-tap-the', 'am-nhac-the-thao-va-van-dong', 'am-nhac-va-giac-ngu'] },
      { title: 'Khác biệt cá nhân', slugs: ['mu-am-bam-sinh', 'cam-giac-dong-cam-am-nhac', 'cao-do-tuyet-doi', 'tai-nang-am-nhac-va-di-truyen'] },
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
      { title: 'Đối âm và phức điệu', cats: ['polyphony'] },
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
      { title: 'Hanslick — Về cái đẹp trong âm nhạc', slugs: ['hanslick-lo-trinh', 'hanslick-tieu-su-va-loi-tua', 'hanslick-my-hoc-cam-xuc', 'hanslick-am-nhac-co-bieu-hien-cam-xuc', 'hanslick-loi-ca-va-opera', 'hanslick-cai-dep-trong-am-nhac', 'hanslick-y-do-va-chuong-trinh', 'hanslick-tac-dong-cua-am-nhac', 'hanslick-cach-nghe-nhac', 'hanslick-am-nhac-va-tu-nhien', 'hanslick-noi-dung-am-nhac', 'hanslick-di-san-va-tranh-luan'] },
      { title: 'Schopenhauer — Thế giới như là ý chí và biểu tượng', slugs: ['schopenhauer-lo-trinh', 'schopenhauer-tieu-su-va-loi-tua', 'schopenhauer-the-gioi-la-bieu-tuong', 'schopenhauer-the-gioi-la-y-chi', 'schopenhauer-y-niem-va-chu-the-thuan-tuy', 'schopenhauer-thien-tai', 'schopenhauer-cai-dep-va-cai-sieu-pham', 'schopenhauer-kien-truc-den-dieu-khac', 'schopenhauer-hoi-hoa-khai-niem-va-phung-du', 'schopenhauer-thi-ca-va-bi-kich', 'schopenhauer-bo-sung-quyen-ba', 'schopenhauer-am-nhac-ban-sao-cua-y-chi', 'schopenhauer-giai-dieu-va-cam-xuc', 'schopenhauer-sieu-hinh-hoc-am-nhac', 'schopenhauer-nhip-giai-dieu-va-nghich-am', 'schopenhauer-y-chi-song-va-giai-thoat', 'schopenhauer-di-san-am-nhac'] },
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
      { title: 'Tổng quan', slugs: ['dan-toc-nhac-hoc', 'xa-hoi-hoc-am-nhac', 'di-san-phi-vat-the-va-am-nhac', 'nghien-cuu-am-thanh-va-canh-quan-am-thanh'] },
      { title: 'Âm nhạc Việt Nam', slugs: ['am-nhac-va-ngon-ngu', 'am-nhac-truyen-thong-viet-nam', 'am-giai-ngu-cung', 'tan-nhac-viet-nam', 'piano-viet-nam', 'dem-dieu-viet-nam'] },
      { title: 'Âm nhạc đại chúng và xã hội', slugs: ['nhac-pho-thong-the-ky-20', 'phong-cach-jazz', 'jam-session', 'adorno-va-am-nhac', 'nhac-trong-tu-tuong-nho-gia', 'nghien-cuu-am-nhac-dai-chung', 'cong-nghiep-am-nhac', 'am-nhac-chinh-tri-va-kiem-duyet', 'clave-tresillo-va-nhip-cong', 'vi-cung-va-am-nhac-vi-cung'] },
    ],
  },
  {
    id: 'am-nhac-the-gioi',
    part: 'systematic',
    title: 'Âm nhạc các nền văn hoá',
    en: 'World music traditions',
    glyph: '𝄞',
    hue: 35,
    hub: 'dan-toc-nhac-hoc',
    summary: 'Lý thuyết và thực hành của các truyền thống lớn ngoài phương Tây: raga và tala Ấn Độ, maqam Ả Rập, gamelan Java – Bali, âm nhạc châu Phi hạ Sahara, Nhật Bản, Trung Hoa — đặt cạnh âm nhạc Việt Nam.',
    questions: ['Mỗi truyền thống tổ chức cao độ và thời gian theo hệ thống nào?', 'Khái niệm phương Tây (giọng, nhịp, hoà âm) dùng được đến đâu khi mô tả chúng?'],
    groups: [
      { title: 'Phương pháp', slugs: ['dan-toc-nhac-hoc', 'nhac-khi-the-gioi'] },
      { title: 'Nam Á, Tây Á và Đông Nam Á', slugs: ['am-nhac-co-dien-an-do', 'maqam-a-rap-va-trung-dong', 'ly-thuyet-gamelan-java-va-bali', 'gamelan', 'am-nhac-dong-nam-a-luc-dia'] },
      { title: 'Đông Á', slugs: ['am-nhac-truyen-thong-trung-hoa', 'am-nhac-truyen-thong-nhat-ban', 'am-nhac-truyen-thong-han-quoc', 'mo-hinh-cong-nghiep-k-pop'] },
      { title: 'Châu Phi và châu Mỹ', slugs: ['am-nhac-chau-phi-ha-sahara', 'am-nhac-my-latinh-va-caribe', 'clave-tresillo-va-nhip-cong'] },
      { title: 'Việt Nam', slugs: ['am-nhac-truyen-thong-viet-nam', 'ly-thuyet-am-nhac-co-truyen-viet-nam', 'am-giai-ngu-cung'] },
    ],
  },
  {
    id: 'cong-nghiep',
    part: 'applied',
    title: 'Công nghiệp âm nhạc và bản quyền',
    en: 'Music industry & copyright',
    glyph: '𝄪',
    hue: 160,
    hub: 'cong-nghiep-am-nhac',
    summary: 'Âm nhạc như một ngành kinh tế: hãng đĩa, xuất bản, streaming, biểu diễn trực tiếp, A&R, bảng xếp hạng; luật bản quyền quốc tế và Việt Nam, tổ chức quản lý tập thể, vi phạm; công nghiệp Việt Nam và mô hình K-pop.',
    questions: ['Một lượt stream sinh ra bao nhiêu tiền, và ai nhận?', 'Bản ghi âm và tác phẩm được bảo hộ như hai quyền riêng ra sao?', 'Vì sao công nghiệp âm nhạc chuyển trọng tâm từ đĩa sang biểu diễn và dữ liệu?'],
    groups: [
      { title: 'Cấu trúc ngành', slugs: ['cong-nghiep-am-nhac', 'hang-dia-va-cac-tap-doan-lon', 'xuat-ban-am-nhac-va-cac-loai-tac-quyen', 'kinh-te-hoc-streaming', 'am-nhac-bieu-dien-truc-tiep-va-luu-dien', 'a-r-va-phat-trien-nghe-si', 'bang-xep-hang-am-nhac', 'lich-su-thu-am'] },
      { title: 'Nghệ sĩ, nghề nghiệp và marketing', slugs: ['nghe-nghiep-trong-nganh-am-nhac', 'nghe-si-doc-lap-va-tu-phat-hanh', 'marketing-am-nhac-va-mang-xa-hoi'] },
      { title: 'Công nghệ, dữ liệu và AI', slugs: ['du-lieu-va-thuat-toan-trong-nganh-am-nhac', 'tri-tue-nhan-tao-va-am-nhac', 'am-nhac-trong-quang-cao-phim-va-tro-choi'] },
      { title: 'Bản quyền và luật', slugs: ['ban-quyen-am-nhac-quoc-te', 'to-chuc-quan-ly-tap-the-quyen-tac-gia', 'vi-pham-ban-quyen-va-chia-se-tep', 'ban-quyen-am-nhac-viet-nam'] },
      { title: 'Việt Nam và châu Á', slugs: ['cong-nghiep-am-nhac-viet-nam', 'mo-hinh-cong-nghiep-k-pop', 'vpop-rap-viet'] },
    ],
  },
  {
    id: 'suc-khoe',
    part: 'applied',
    title: 'Âm nhạc và sức khoẻ',
    en: 'Music & health',
    glyph: '♫',
    hue: 350,
    hub: 'am-nhac-tri-lieu',
    summary: 'Âm nhạc trong trị liệu và chăm sóc: âm nhạc trị liệu, sa sút trí tuệ, cuốn theo nhịp trong phục hồi vận động; sức khoẻ của người chơi đàn, thính giác và hồi hộp biểu diễn.',
    questions: ['Bằng chứng nào cho âm nhạc trị liệu, và nó mạnh đến đâu?', 'Vì sao người mắc Alzheimer vẫn nhớ bài hát cũ?', 'Người chơi đàn tự bảo vệ cơ thể và đôi tai thế nào?'],
    groups: [
      { title: 'Trị liệu và não', slugs: ['am-nhac-tri-lieu', 'am-nhac-va-sa-sut-tri-tue', 'dong-bo-nhip-va-cuon-theo', 'nao-nguoi-choi-nhac-va-tinh-deo-dai', 'am-nhac-dau-va-giam-dau', 'am-nhac-va-tu-ky', 'ao-giac-am-nhac-va-u-tai', 'am-nhac-va-giac-ngu'] },
      { title: 'Vận động và thể thao', slugs: ['am-nhac-the-thao-va-van-dong', 'dong-bo-nhip-va-cuon-theo'] },
      { title: 'Sức khoẻ người biểu diễn', slugs: ['suc-khoe-nguoi-choi-dan', 'bao-ve-thinh-giac', 'hoi-hop-bieu-dien', 'tu-the'] },
    ],
  },
  {
    id: 'su-pham',
    part: 'applied',
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
      { title: 'Sư phạm lịch sử', slugs: ['tai-lieu-su-pham-cua-bach', 'bach-day-hoc-tro'] },
      { title: 'Phương pháp và nhà sư phạm', cats: ['musicianship'] },
    ],
  },
  {
    id: 'tinh-toan',
    part: 'applied',
    title: 'Âm nhạc học tính toán và công nghệ',
    en: 'Computational musicology',
    glyph: '𝄁',
    hue: 230,
    hub: 'am-nhac-hoc-tinh-toan',
    summary: 'Máy tính như công cụ nghiên cứu: mô hình hoá, phân tích kho dữ liệu lớn, truy xuất thông tin âm nhạc, âm thanh tổng hợp.',
    questions: ['Một khẳng định về phong cách có đứng vững trên hàng nghìn tác phẩm không?', 'Một lý thuyết có thể viết thành thuật toán không?'],
    groups: [{ title: 'Các bài liên quan', slugs: ['am-nhac-hoc-tinh-toan', 'am-nhac-hoc-ky-thuat-so', 'tim-giong-bang-may', 'tap-hop-cao-do', 'neo-riemann', 'nhac-dien-tu', 'nhac-pho'] }],
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
    questions: ['Người ngẫu hứng dựa vào những khuôn mẫu nào?', 'Sáng tác học được bằng quy tắc đến mức nào?', 'Các nhà soạn nhạc thật sự làm việc ra sao — từ phác thảo đến bản hoàn chỉnh?'],
    groups: [
      { title: 'Ngẫu hứng', cats: ['improvisation'] },
      { title: 'Sáng tác', slugs: ['sang-tac-jazz', 'partimento', 'luoc-do-galant'], cats: ['composition'] },
    ],
  },
  {
    id: 'am-nhac-nha-tho',
    part: 'practice',
    title: 'Âm nhạc nhà thờ',
    en: 'Sacred & liturgical music',
    glyph: '𝅜',
    hue: 45,
    hub: 'am-nhac-nha-tho',
    summary: 'Bình ca Gregorian (ký âm, điệu thức, sách hát, cách viết), đệm organ cho bình ca và cộng đoàn, alternatim, và di sản sư phạm của Bach — nơi lý thuyết (điệu thức, đối âm, bốn bè) gặp nguồn văn bản và thực hành lịch sử.',
    questions: ['Một nguyên tắc đệm hay phối bè xuất phát từ văn kiện, từ chuyên luận, hay chỉ từ thói quen?', 'Ta biết cách Bach dạy qua những nguồn nào, và chúng đáng tin đến đâu?'],
    groups: [
      { title: 'Bình ca Gregorian', slugs: ['thanh-ca-gregorian', 'ky-am-binh-ca-gregorian', 'tam-dieu-thuc-va-giong-thanh-vinh', 'sach-hat-va-van-kien-binh-ca', 'viet-binh-ca-cho-tieng-ban-dia', 'gregorio-va-gabc', 'dieu-thuc'] },
      { title: 'Organ trong phụng vụ', slugs: ['dem-organ-cho-binh-ca', 'alternatim-va-thanh-le-organ', 'dem-hat-cong-doan-tren-organ', 'organ-ong', 'chorale-va-chorale-prelude'] },
      { title: 'Bach: tài liệu, cách dạy, chorale', slugs: ['tai-lieu-su-pham-cua-bach', 'bach-day-hoc-tro', 'phoi-chorale-kieu-bach', 'johann-sebastian-bach', 'bass-so', 'cantus-firmus'] },
      { title: 'Kỹ thuật organ', cats: ['organ'] },
      { title: 'Tổng quan và Việt Nam', cats: ['sacred'] },
    ],
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

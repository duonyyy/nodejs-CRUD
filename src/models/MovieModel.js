import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {

    name: { type: String, required: true }, // Tên phim
    poster: { type: String }, // Link ảnh poster phim
    director: { type: String }, // Đạo diễn
    cast: { type: [String] }, // Danh sách diễn viên (mảng string)
    genre: { type: String }, // Thể loại phim
    runningTime: { type: Number }, // Thời lượng phim (phút)
    language: { type: String }, // Ngôn ngữ
    rated: { type: Number }, // Đánh giá
    trailer: { type: String }, // Link trailer
    imgBanner: { type: String }, // Link ảnh banner
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // Liên kết với danh mục phim
  },
  { timestamps: true, versionKey: false }
); // Tự động thêm createdAt & updatedAt

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;

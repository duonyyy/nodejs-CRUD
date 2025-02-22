import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true }, // Tên thể loại
    description: { type: String, required: true }, // Mô tả
   
  },
  { timestamps: true, versionKey: false }
); // Tự động thêm createdAt & updatedAt

const Category = mongoose.model('Category', CategorySchema);

export default Category;

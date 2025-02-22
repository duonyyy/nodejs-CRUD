import Category from '../models/CategoryModel.js';

class CategoriesController {

  // @desc    Lấy danh sách tất cả thể loại
  // @route   GET /categories
  getCaterogies = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };

  // @desc    Lấy chi tiết một thể loại theo ID
  // @route   GET /categories/:id
  getCategoryById = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };

  // @desc    Thêm một thể loại mới
  // @route   POST /categories
  createCategory = async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi tạo phim', error });
    }
  };

  // @desc    Cập nhật thông tin một thể loại
  // @route   PUT /categories/:id
  updateCategory = async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi cập nhật phim', error });
    }
  };

  // @desc    Xóa một thể loại
  // @route   DELETE /categories/:id
  deletedCategory = async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      if (!deletedCategory) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json({ message: 'Đã xóa phim thành công' });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };
}

export default CategoriesController;

import Movie from '../models/MovieModel.js';

class MoviesController {
  // @desc    Lấy danh sách tất cả phim
  // @route   GET /movies
  getMovies = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };

  // @desc    Lấy chi tiết một phim theo ID
  // @route   GET /movies/:id
  getMovieById = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id).populate('category'); // Lấy tên danh mục
      if (!movie) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };

  // @desc    Thêm một bộ phim mới
  // @route   POST /movies
  createMovie = async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi tạo phim', error });
    }
  };

  // @desc    Cập nhật thông tin một bộ phim
  // @route   PUT /movies/:id
  updateMovie = async (req, res) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedMovie) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi cập nhật phim', error });
    }
  };

  // @desc    Xóa một bộ phim
  // @route   DELETE /movies/:id
  deleteMovie = async (req, res) => {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
      if (!deletedMovie) {
        return res.status(404).json({ message: 'Không tìm thấy phim' });
      }
      res.status(200).json({ message: 'Đã xóa phim thành công' });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
  };
}

export default MoviesController;

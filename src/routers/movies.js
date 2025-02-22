import express from 'express';
import MoviesController from '../controllers/movies.js';
const moviesRouter = express.Router();


const moviesController = new MoviesController();

moviesRouter.get('/', moviesController.getMovies);
moviesRouter.get('/:id',moviesController.getMovieById);
moviesRouter.post('/', moviesController.createMovie);
moviesRouter.put('/:id', moviesController.updateMovie);
moviesRouter.delete('/:id', moviesController.deleteMovie);
export default moviesRouter;

import express from 'express';
import CategoriesController from '../controllers/categories.js';
const categoriesRouter = express.Router();

const categoriesController = new CategoriesController();

categoriesRouter.get('/', categoriesController.getCaterogies);
categoriesRouter.get('/:id', categoriesController.getCategoryById);
categoriesRouter.post('/', categoriesController.createCategory);
categoriesRouter.put('/:id', categoriesController.updateCategory);
categoriesRouter.delete('/:id', categoriesController.deletedCategory);
export default categoriesRouter;

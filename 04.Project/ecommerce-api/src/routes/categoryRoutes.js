import express from 'express'

import{
    getCategories,
    getCategoryByID,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryByID);
router.post('/catrgories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
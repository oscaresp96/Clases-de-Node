import express from 'express'

import{
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductByID);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/category/:category',getProductByCategory);

export default router;
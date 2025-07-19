import express from 'express';

import categoryRoutes from './categoryRoutes.js';
import productRoutes from './productRoutes.js';
import reviewRoutes from './reviewRoutes.js';
import shippingAddressRoutes from './shippingAddressRoutes.js';
import userRoutes from './userRoutes.js';
import wishListRoutes from './wishListRoutes.js';

const router = express.Router();

router.use(categoryRoutes);
router.use(productRoutes);
router.use(reviewRoutes);
router.use(shippingAddressRoutes);
router.use(userRoutes);
router.use(wishListRoutes);

export default router;
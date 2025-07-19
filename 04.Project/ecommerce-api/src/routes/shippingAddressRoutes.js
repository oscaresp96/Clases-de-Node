import express from 'express'

import{
    getShippingAddresses,
    getShippingAddressById,
    createShippingAddress,
    updateShippingAddress,
    deleteShippingAddress,
} from '../controllers/shippingAddressController.js';

const router = express.Router();

router.get('/shippingAddresses', getShippingAddresses);
router.get('/shippingAddresses/:id', getShippingAddressById);
router.post('/shippingAddresses', createShippingAddress);
router.put('/shippingAddresses/:id', updateShippingAddress);
router.delete('/shippingAddresses/:id', deleteShippingAddress);

export default router;
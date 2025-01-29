import { Router } from 'express';
import productRoutes from './products';
import { createOrder } from '../controllers/orderController';

const router = Router();

router.use('/products', productRoutes);
router.post('/orders', createOrder);

export default router;

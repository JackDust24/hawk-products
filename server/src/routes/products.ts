import { Router } from 'express';
import {
  getProducts,
  getCategories,
  getProductById,
} from '../controllers/dataController';

const router = Router();

router.get('/productslist', getProducts);
router.get('/categories', getCategories);
router.get('/product/:id', getProductById);

export default router;

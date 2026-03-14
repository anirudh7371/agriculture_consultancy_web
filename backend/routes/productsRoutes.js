import express from 'express';
import { getProductsData } from '../controllers/productsController.js';

const router = express.Router();
router.get('/', getProductsData);
export default router;

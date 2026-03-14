import express from 'express';
import { getHomeBannerData, getHomeData } from '../controllers/homeController.js';

const router = express.Router();
router.get('/banner', getHomeBannerData);
router.get('/', getHomeData);
export default router;

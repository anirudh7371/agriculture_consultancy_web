import express from 'express';
import { getServicesData } from '../controllers/servicesController.js';

const router = express.Router();
router.get('/', getServicesData);
export default router;

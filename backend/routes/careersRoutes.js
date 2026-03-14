import express from 'express';
import { getCareersData } from '../controllers/careersController.js';

const router = express.Router();
router.get('/', getCareersData);
export default router;

import express from 'express';
import rateLimit from 'express-rate-limit';
import { getContactInfo, submitContactForm } from '../controllers/contactController.js';

const router = express.Router();

const contactFormLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		status: 'error',
		message: 'Too many contact requests from this IP. Please wait a few minutes and try again.'
	}
});

router.get('/', getContactInfo);
router.post('/', contactFormLimiter, submitContactForm);
export default router;

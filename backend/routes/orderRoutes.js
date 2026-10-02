import express from 'express';
const router = express.Router();
import { createOrder, verifyPayment } from '../controllers/orderController.js';

router.route('/create').post(createOrder);
router.route('/verify').post(verifyPayment);

export default router;

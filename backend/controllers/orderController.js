import Razorpay from 'razorpay';
import crypto from 'crypto';
import Order from '../models/Order.js';
import nodemailer from 'nodemailer';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.PAYMENT_KEY || 'rzp_test_placeholder',
  key_secret: process.env.PAYMENT_SECRET || 'secret_placeholder',
});

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// @desc    Create new order & Razorpay transaction
// @route   POST /api/orders/create
// @access  Public
export const createOrder = async (req, res) => {
  try {
    const { items, customerName, email, phone, shippingAddress, amount } = req.body;

    const options = {
      amount: amount * 100, // Razorpay works in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Create order in DB (Status: Pending)
    const newOrder = await Order.create({
      orderId: razorpayOrder.id,
      customerName,
      email,
      phone,
      shippingAddress,
      items,
      totalAmount: amount,
      paymentStatus: 'Pending',
      orderStatus: 'Pending',
    });

    res.json({
      success: true,
      order: razorpayOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating Razorpay order' });
  }
};

// @desc    Verify Razorpay Payment
// @route   POST /api/orders/verify
// @access  Public
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.PAYMENT_SECRET || 'secret_placeholder')
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      const order = await Order.findOne({ orderId: razorpay_order_id });
      if (order) {
        order.paymentStatus = 'Paid';
        order.paymentId = razorpay_payment_id;
        order.orderStatus = 'Confirmed';
        await order.save();

        // Send Email Notification
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: order.email,
          subject: 'Order Confirmation - CLEAN.',
          text: `Hi ${order.customerName},\n\nYour order #${order.orderId} for ₹${order.totalAmount} has been successfully placed and paid.\n\nThank you for choosing CLEAN.`,
        };
        
        try {
           if(process.env.EMAIL_USER) await transporter.sendMail(mailOptions);
        } catch(mailErr) {
           console.log('Mail error (expected if credentials missing):', mailErr.message);
        }

        // Mock SMS Logic
        console.log(`[SMS MOCK]: "Your order #${order.orderId} has been successfully placed. Thank you for your purchase." sent to ${order.phone}`);

        res.json({ success: true, message: 'Payment verified successfully' });
      } else {
        res.status(404).json({ message: 'Order not found in DB' });
      }
    } else {
      res.status(400).json({ message: 'Invalid payment signature' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error verifying payment' });
  }
};

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Checkout.css';

const Checkout = () => {
  const [variant, setVariant] = useState('250g');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', zip: ''
  });

  const price = variant === '250g' ? 1 : 2;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    alert(`Initiating Razorpay payment for ₹${price}...\n(Backend integration pending)`);
    // Here we will call the backend API to create a Razorpay order,
    // then open the Razorpay checkout modal.
  };

  return (
    <>
      <Navbar />
      <div className="checkout-page bg-off-white">
        <div className="container checkout-container">
          <div className="checkout-left">
            <h1 className="checkout-title">Complete Your Order</h1>
            <form onSubmit={handlePayment} className="checkout-form">
              <h3 className="form-section-title">Contact Information</h3>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
              </div>

              <h3 className="form-section-title">Shipping Address</h3>
              <div className="form-group">
                <input type="text" name="address" placeholder="Street Address" required onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                <input type="text" name="zip" placeholder="Postal Code" required onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary btn-block">Pay Securely with Razorpay</button>
            </form>
          </div>

          <div className="checkout-right">
            <div className="order-summary card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="product-selection">
                <div
                  className={`variant-card ${variant === '250g' ? 'active' : ''}`}
                  onClick={() => setVariant('250g')}
                >
                  <div className="variant-info">
                    <h4>Starter Pack (250g)</h4>
                    <p>Perfect for trying it out.</p>
                  </div>
                  <div className="variant-price">₹299</div>
                </div>

                <div
                  className={`variant-card ${variant === '500g' ? 'active' : ''}`}
                  onClick={() => setVariant('500g')}
                >
                  <div className="variant-info">
                    <h4>Family Pack (500g)</h4>
                    <p>Best value for regular use.</p>
                  </div>
                  <div className="variant-price">₹499</div>
                </div>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{price}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="text-free">FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-glass-card">
          <h2 className="cta-title">Upgrade your kitchen hygiene today.</h2>
          <p className="cta-subtitle">Join thousands of households making the switch to safer, cleaner produce.</p>
          <div className="cta-action">
            <a href="/checkout" className="btn btn-primary cta-btn">Get Started Now</a>
          </div>
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">✓</span> Free Shipping
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> 30-Day Guarantee
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

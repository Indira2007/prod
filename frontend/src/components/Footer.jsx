import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">CLEAN.</div>
          <p className="footer-desc">The simple, natural way to thoroughly clean your produce.</p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="/checkout">Buy Now</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li>Email: hello@cleanproduce.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CLEAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

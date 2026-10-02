import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-gradient"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">100% Natural Formula</div>
          <h1 className="hero-headline">
            Cleaner produce.<br/>
            <span className="text-gradient">Zero worries.</span>
          </h1>
          <p className="hero-description">
            The simplest, most effective way to remove dirt, wax, and unwanted residue from your everyday fruits and vegetables.
          </p>
          <div className="hero-btns">
            <a href="/checkout" className="btn btn-primary">Get Starter Pack</a>
            <a href="#how-it-works" className="btn btn-secondary">See How it Works</a>
          </div>
          <div className="hero-trust">
            <div className="trust-stars">★★★★★</div>
            <span>Trusted by 10,000+ healthy homes</span>
          </div>
        </div>
        <div className="hero-visual">
          {/* We use a realistic placeholder structure since local images can't be copied */}
          <div className="image-glass-container">
            <img 
              src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fresh Produce" 
              className="hero-image"
            />
            <div className="floating-card top-right">
              <span className="icon">🌱</span>
              <div className="text">
                <strong>Plant-based</strong>
                <p>Safe for families</p>
              </div>
            </div>
            <div className="floating-card bottom-left">
              <span className="icon">✨</span>
              <div className="text">
                <strong>Removes Wax</strong>
                <p>Restores natural shine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

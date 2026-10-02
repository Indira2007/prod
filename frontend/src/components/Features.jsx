import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="section bg-light-blue">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">The new standard of clean</h2>
          <p className="section-subtitle">Engineered to naturally break down pesticides, dirt, and wax without leaving any harmful residues.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🥬</span>
            </div>
            <h3 className="feature-title">Deep Cleaning</h3>
            <p className="feature-text">Effectively removes invisible dirt and residue from the surface of your fruits and vegetables.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">💧</span>
            </div>
            <h3 className="feature-title">Effortless Use</h3>
            <p className="feature-text">Just add to water, soak, and rinse. No complicated instructions or scrubbing required.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">⚡</span>
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-text">Cleans your produce in under 3 minutes, giving you more time to enjoy your meals.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🌿</span>
            </div>
            <h3 className="feature-title">100% Safe</h3>
            <p className="feature-text">Made from plant-based, food-safe ingredients. completely harmless to your family.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

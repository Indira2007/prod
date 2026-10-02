import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container">
        <h2 className="section-title">As easy as 1, 2, 3</h2>
        <p className="section-subtitle">No scrubbing, no fuss. Just clean, vibrant produce ready for your family.</p>
        
        <div className="steps-wrapper">
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Soak</h3>
              <p className="step-description">Fill a bowl with water and add a scoop of CLEAN powder.</p>
            </div>
            
            <div className="step-divider">
               <div className="line"></div>
            </div>
            
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">Wait</h3>
              <p className="step-description">Submerge your fruits and veggies and let them sit for 3 minutes.</p>
            </div>
            
            <div className="step-divider">
               <div className="line"></div>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Rinse</h3>
              <p className="step-description">Rinse thoroughly under running water and enjoy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';
import './DemoSection.css';

const DemoSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">SEE IT IN ACTION</h2>
        
        <div className="demo-container">
          <div className="before-after-grid">
            <div className="demo-card before">
              <div className="demo-placeholder">
                <span className="demo-label">BEFORE</span>
              </div>
            </div>
            
            <div className="demo-arrow">→</div>
            
            <div className="demo-card after">
              <div className="demo-placeholder">
                <span className="demo-label">AFTER</span>
              </div>
            </div>
          </div>
          
          <div className="video-container">
            <div className="video-placeholder">
               <span>[ Product Demonstration Video ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

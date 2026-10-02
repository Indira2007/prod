import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <section className="section bg-light-green" style={{textAlign: 'center', padding: '100px 20px'}}>
            <div className="container">
              <h2 className="section-title">ARE YOU REALLY CLEANING YOUR PRODUCE?</h2>
              <p style={{maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-primary-dark)', fontWeight: '500'}}>
                Water alone doesn't always cut it. Discover the simple, trustworthy way to remove dirt, residue, and unwanted particles from your everyday fruits and vegetables.
              </p>
            </div>
        </section>

        <HowItWorks />
        <Features />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;

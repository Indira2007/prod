import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does it work?',
      answer: '[PRODUCT DESCRIPTION/MECHANISM GOES HERE. Editable from admin panel.]'
    },
    {
      question: 'Is it suitable for different types of produce?',
      answer: 'Yes, it can be used on most everyday fruits and vegetables. [Editable from admin panel]'
    },
    {
      question: 'How much product should I use?',
      answer: '[INSTRUCTIONS GO HERE. Editable from admin panel]'
    },
    {
      question: 'How long does it last?',
      answer: 'A single pack typically lasts 1-2 months depending on household usage.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container faq-container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

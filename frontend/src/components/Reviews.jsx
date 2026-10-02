import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const dummyReviews = [
    {
      id: 1,
      name: 'Sarah J.',
      rating: 5,
      text: 'I used to worry about what was on my grapes. This makes cleaning so easy and I actually feel safe eating them now.'
    },
    {
      id: 2,
      name: 'Priya K.',
      rating: 5,
      text: 'Such a simple addition to my kitchen routine. The peace of mind is worth every penny.'
    },
    {
      id: 3,
      name: 'Michael T.',
      rating: 4,
      text: 'Works exactly as described. Leaves no aftertaste on the vegetables.'
    }
  ];

  return (
    <section id="reviews" className="section bg-off-white">
      <div className="container">
        <h2 className="section-title">WHAT CUSTOMERS SAY</h2>
        
        <div className="reviews-grid">
          {dummyReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

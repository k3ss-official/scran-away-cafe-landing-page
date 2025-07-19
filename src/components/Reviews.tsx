import React, { useState } from 'react';
import './Reviews.css';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  foodItem: string;
  foodImage: string;
}

const Reviews: React.FC = () => {
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "The Scran Away Muffin is absolutely incredible! Perfect way to start the day.",
      foodItem: "Scran Away Muffin",
      foodImage: "🥪"
    },
    {
      id: 2,
      name: "Mike T.",
      rating: 5,
      text: "Best breakfast fry in Chorley! Everything cooked to perfection.",
      foodItem: "Breakfast Fry",
      foodImage: "🍳"
    },
    {
      id: 3,
      name: "Emma L.",
      rating: 5,
      text: "The jacket potato with chilli is my go-to lunch. Always fresh and tasty!",
      foodItem: "Chilli Jacket",
      foodImage: "🥔"
    },
    {
      id: 4,
      name: "David R.",
      rating: 5,
      text: "Great coffee and the chocolate brownie is to die for. Hidden gem!",
      foodItem: "Chocolate Brownie",
      foodImage: "🍰"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2 className="reviews-title">What Our Customers Say</h2>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
              onMouseEnter={() => setHoveredReview(review.id)}
              onMouseLeave={() => setHoveredReview(null)}
            >
              <div className={`review-content ${hoveredReview === review.id ? 'hidden' : 'visible'}`}>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.name}</p>
              </div>

              <div className={`food-showcase ${hoveredReview === review.id ? 'visible' : 'hidden'}`}>
                <div className="food-image">{review.foodImage}</div>
                <h3 className="food-name">{review.foodItem}</h3>
                <p className="food-caption">As mentioned by {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
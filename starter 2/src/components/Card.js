import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Card({ review, onNext, onPrev, onSurprise }) {
  if (!review) return null;

  return (
    <div className="testimonial-card">
      <img src={review.image} alt={review.name} className="avatar img" />
      <p className="name">{review.name}</p>
      <p className="job">{review.job}</p>
      <div className="quote-wrapper">
        <FaQuoteLeft className="quote-left" />
        <p className="text">{review.text}</p>
        <FaQuoteRight className="quote-right" />
      </div>
      <div className="controls">
        <FaChevronLeft className="control-btn" onClick={onPrev} />
        <FaChevronRight className="control-btn" onClick={onNext} />
      </div>
      <button className="surprise-btn" onClick={onSurprise}>surprise me</button>
    </div>
  );
}

export default Card;

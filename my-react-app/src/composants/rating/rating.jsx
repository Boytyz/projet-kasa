import React from 'react';
import './Rating.scss';

const Rating = ({ rating, max = 5 }) => {
  // Convertir le rating en nombre si c'est une chaîne
  const ratingValue = typeof rating === 'string' ? parseInt(rating) : rating;

  return (
    <div className="rating">
      {[...Array(max)].map((_, index) => (
        <i
          key={index}
          className={`fa-star ${index < ratingValue ? 'fas active' : 'far'}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;

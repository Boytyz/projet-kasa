import React from 'react';
import './Host.scss';

const Host = ({ name, picture, rating }) => {
  return (
    <div className="host">
      <div className="host__info">
        <p className="host__name">{name}</p>
        <img
          src={picture}
          alt={name}
          className="host__picture"
        />
      </div>
      {rating && <Rating rating={rating} />}
    </div>
  );
};

export default Host;

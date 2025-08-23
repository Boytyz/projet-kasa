import React from 'react';
import './Host.scss';
import Rating from '../rating/rating';

const Host = ({ name, picture }) => {
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
    </div>
  );
};

export default Host;

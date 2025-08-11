import React from 'react';
import './banner.scss';

function Banner({ imageUrl, title }) {
  return (
    <div className="banner">
      <img 
        src={imageUrl} 
        alt={`Bannière ${title}`} 
        className="banner-image"
      />
      <div className="banner-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;

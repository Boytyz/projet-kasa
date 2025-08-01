import React from 'react';
import './banner.scss'; 
function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <div className="overlay overlay-secondary has-bg-img w-100">
          <div className="overlay-content align-items-center justify-content-center text-white">
            Chez vous, partout et ailleurs
          </div>
          <img className="bg-img" src="../../assets/banner_acceuil.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
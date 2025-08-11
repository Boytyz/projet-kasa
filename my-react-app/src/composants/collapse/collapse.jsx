// src/components/Collapse/Collapse.jsx
import React, { useState } from 'react';
import './collapse.scss';
import arrow from '../../../public/assets/arrow_back.svg'; // Assurez-vous d'avoir une icône de flèche

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt={isOpen ? "Fermer" : "Ouvrir"}
          className={`collapse-arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;

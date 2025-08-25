import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../composants/caroussel/caroussel';
import Collapse from '../../composants/collapse/collapse';
import Host from '../../composants/host/host';
import Rating from '../../composants/rating/rating';
import './fiches.scss';
import logementsData from '../../data/logements.json';

const Fiches = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remplacez cette partie par votre logique de récupération de données
    const foundLogement = logementsData.find(item => item.id === id);

    if (!foundLogement) {
      navigate('/404'); // Redirection si le logement n'existe pas
    } else {
      setLogement(foundLogement);
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return <div className="fiches__loading">Chargement...</div>;
  }

  if (!logement) {
    return null;
  }

  return (
    <div className="fiches">
      <Carousel images={logement.pictures} />

      <div className="fiches__content">
        <div className="fiches__info">
          <div className="fiches__details">
            <h1 className="fiches__title">{logement.title}</h1>
            <p className="fiches__location">{logement.location}</p>

            <div className="fiches__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="fiches__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="fiches__host-rating">
            <Host
              name={logement.host.name}
              picture={logement.host.picture}
            />
            <Rating rating={logement.rating} />
          </div>
        </div>

        <div className="fiches__collapses">
          <div className="fiches__collapse">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
          </div>

          <div className="fiches__collapse">
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiches;

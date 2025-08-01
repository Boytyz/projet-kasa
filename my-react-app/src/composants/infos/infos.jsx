import React from 'react';
import './infos.scss';

const Infos = () => {
  return (
    <div className="section-infos container">
      <div className="col-lg-10">
        <button
          className="button-collapse infos"
          data-bs-toggle="collapse"
          data-bs-target="#button1"
          aria-expanded="false"
        >
          Fiabilité
        </button>
        <div id="button1" className="collapse infos">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>

        <button
          className="button-collapse infos"
          data-bs-toggle="collapse"
          data-bs-target="#button2"
          aria-expanded="false"
        >
          Respect
        </button>
        <div id="button2" className="collapse infos">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>

        <button
          className="button-collapse infos"
          data-bs-toggle="collapse"
          data-bs-target="#button3"
          aria-expanded="false"
        >
          Service
        </button>
        <div id="button3" className="collapse infos">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>

        <button
          className="button-collapse infos"
          data-bs-toggle="collapse"
          data-bs-target="#button4"
          aria-expanded="false"
        >
          Sécurité
        </button>
        <div id="button4" className="collapse infos">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  );
};

export default Infos;
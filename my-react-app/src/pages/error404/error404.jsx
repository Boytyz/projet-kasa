import React from 'react';
import { Link } from 'react-router-dom';
import './error404.scss';
function Error404() {
    return (
        <div className="container">
      
        <h1 className="error">404</h1>
            
        <h2 className="medium">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      <Link key={1} to={`/`}>
          <p className="small">Retournez sur la page d'accueil</p>
        </Link>
      
    </div>
    );
}
export default Error404;
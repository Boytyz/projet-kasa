import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ element }) => {
  return (
    <Link
      key={element.index}
      to={`/Fiche/${element.id}`}
      state={{ element: element }}
      className="card-link"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card">
        <img className="card-img-top" src={element.cover} alt={element.title} />
        <div className="card-img-overlay">
          <p className="text-left">{element.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
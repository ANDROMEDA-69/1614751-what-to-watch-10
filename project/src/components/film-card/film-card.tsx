import { Link } from 'react-router-dom';
import { Films } from '../../types/films';

type FilmCardProps = {
  filmCard: Films;
}

function FilmCard({filmCard}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={filmCard.posterImage}
          alt={filmCard.filmTitle}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className='small-film-card__link' to={`/films/${filmCard.id}`}>
          {filmCard.filmTitle}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;

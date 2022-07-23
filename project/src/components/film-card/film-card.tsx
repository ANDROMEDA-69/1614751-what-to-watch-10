import { Link } from 'react-router-dom';
import { Films } from '../../types/films';
import VideoPlayer from '../../components/video-player/video-player';


type FilmCardProps = {
  filmCard: Films;
  handleSetFilm: (id: string) => () => void;
  activeFilmsId: string | null;
};

function FilmCard({filmCard, handleSetFilm, activeFilmsId,}: FilmCardProps): JSX.Element {
  const isActiveFilm = !!activeFilmsId && activeFilmsId === filmCard.id;

  if (isActiveFilm) {
    return <VideoPlayer film={filmCard} />;
  }

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleSetFilm(filmCard.id)}
    >
      <div className="small-film-card__image">
        <img
          src={filmCard.posterImage}
          alt={filmCard.filmTitle}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmCard.id}`}>
          {filmCard.filmTitle}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;

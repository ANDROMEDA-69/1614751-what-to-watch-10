import { Link } from 'react-router-dom';
import { Films } from '../../types/films';
import VideoPlayer from '../../components/video-player/video-player';
import { useState, useEffect } from 'react';

type FilmCardProps = {
  filmCard: Films;
  handleSetFilm: (id: string) => () => void;
  activeFilmId: string | null;
};

function FilmCard({ filmCard, handleSetFilm, activeFilmId }: FilmCardProps): JSX.Element {
  const isActiveFilm = !!activeFilmId && activeFilmId === filmCard.id;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (isActiveFilm) {
      const timeout = setTimeout(() => setPlay(true), 1000);
      return () => {
        clearTimeout(timeout);
        setPlay(false);
      };
    }
  }, [isActiveFilm]);

  return play ? (
    <VideoPlayer film={filmCard} />
  ) : (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleSetFilm(filmCard.id)}
      onMouseLeave={handleSetFilm(activeFilmId)}
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

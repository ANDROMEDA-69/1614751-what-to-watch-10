import FilmCard from '../film-card/film-card';
import { Films } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: Films;
};

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number>(0);


  const makeCardActive = (id: number) => {
    setActiveFilmId(id);
  };

  const makeCardInactive = () => {
    setActiveFilmId(0);
  };


  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id}
          id={film.id}
          posterImage={film.posterImage}
          filmTitle={film.name}
          videoLink={film.videoLink}
          isActive={(activeFilmId === film.id)}
          makeCardActive={makeCardActive}
          makeCardInactive={makeCardInactive}
        />
      ))}
    </div>
  );
}

export default FilmsList;

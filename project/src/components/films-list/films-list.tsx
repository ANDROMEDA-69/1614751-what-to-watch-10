import FilmCard from '../film-card/film-card';
import { Films } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: Films[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);


  const handleSetFilm = (id: string) => () =>{
    setActiveFilmId(id);
  };


  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} filmCard={film} handleSetFilm={handleSetFilm} activeFilmsId={activeFilmId}/>
      ))}
    </div>
  );
}

export default FilmsList;

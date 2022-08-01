import { GENRE_TABS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Films } from '../../types/films';


type CatalogProps ={
  films: Films[];
}

function Catalog({films}: CatalogProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);

  const handleChangeGenre = (genre: string) => () => {
    const isAllFilms = genre === 'All genres';
    const currentFilms = isAllFilms ? films : films.filter((film) => film.genre === genre);
    dispatch(changeGenre({genre, films: currentFilms}));
  };
  return (
    <ul className="catalog__genres-list">
      {GENRE_TABS.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''} `}
          onClick={handleChangeGenre(genre)}
        >
          <a href="#todo" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Catalog;

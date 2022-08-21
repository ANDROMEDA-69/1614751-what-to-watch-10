import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import {useAppSelector } from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import { getPromoFilm } from '../../store/promo-film-process/selectors';
import { getFilms, getFilteredFilms } from '../../store/films-process/selectors';

function Main(): JSX.Element {
  const promo = useAppSelector(getPromoFilm);
  const filmsList = useAppSelector(getFilms);
  const filteredFilmsList = useAppSelector(getFilteredFilms);
  const favoriteFilmsLength = useAppSelector(getFilms).filter((filmA) => filmA.isFavorite).length;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promo?.backgroundImage}
            alt={promo?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promo?.posterImage}
                alt={promo?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <Link
                  className="btn btn--list film-card__button"
                  to='/mylist'
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsLength}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={filmsList} />

          <FilmsList films={filteredFilmsList} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;

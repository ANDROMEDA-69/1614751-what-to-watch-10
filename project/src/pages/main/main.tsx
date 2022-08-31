import Footer from '../../components/footer/footer';
import {useAppSelector } from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import { getPromoFilm } from '../../store/promo-film-process/selectors';
import { getFilms, getFilteredFilms } from '../../store/films-process/selectors';
import { getFilmsCount } from '../../store/genre-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';
import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../const';
import ShowMore from '../../components/show-more/show-more';

function Main(): JSX.Element {
  const promo = useAppSelector(getPromoFilm);
  const filmsList = useAppSelector(getFilms);
  const filteredFilmsList = useAppSelector(getFilteredFilms);
  const filteredFilmsCount = filteredFilmsList.length;
  const filmsCount = useAppSelector(getFilmsCount);
  const correctFilmsCount = Math.min(filteredFilmsCount, filmsCount);
  const renderedFilms = [...filteredFilmsList].slice(0, correctFilmsCount);
  const navigate = useNavigate();

  const onVideoButtonClickHandle = () => {
    const path = `${APIRoute.Player}/${promo?.id}`;
    navigate(path);
  };


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
                  onClick={onVideoButtonClickHandle}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton filmId={promo?.id}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={filmsList} />

          <FilmsList films={renderedFilms} />

          <ShowMore isShowButton={filteredFilmsCount > filmsCount} />
        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;

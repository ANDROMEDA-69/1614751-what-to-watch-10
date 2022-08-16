import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import {
  fetchFilmAction,
  fetchSimilarFilmsAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import Header from '../../components/header/header';
import {AuthorizationStatus} from '../../const';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const currentFilm = useAppSelector((state) => state.film);
  const reviews = useAppSelector((state) => state.reviews);
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter(
    (filmA) => filmA.isFavorite
  ).length;
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(fetchFilmAction(params?.id));
    dispatch(fetchSimilarFilmsAction(params?.id));
    dispatch(fetchReviewsAction(params?.id));
  }, [params?.id, dispatch]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  className="btn btn--play film-card__button"
                  to={`player/${currentFilm?.id}`}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link className="btn btn--list film-card__button" to="/mylist">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">
                    {favoriteFilmsLength}
                  </span>
                </Link>
                {authStatus === AuthorizationStatus.Auth ? <Link to={`/films/${currentFilm?.id}/review`} className="btn film-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm?.posterImage}
                alt={currentFilm?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs film={currentFilm || null} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />

        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;

import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { AuthorizationStatus, APIRoute } from '../../const';
import { getFilm, getFilmReview, getSimilarFilms } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const currentFilm = useAppSelector(getFilm);
  const reviews = useAppSelector(getFilmReview);
  const navigate = useNavigate();
  const similarFilms = useAppSelector(getSimilarFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchFilmAction(params?.id));
    dispatch(fetchSimilarFilmsAction(params?.id));
    dispatch(fetchReviewsAction(params?.id));
  }, [params?.id, dispatch]);

  const onVideoButtonClickHandle = () => {
    const path = `${APIRoute.Player}/${currentFilm?.id}`;
    navigate(path);
  };

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
                <MyListButton filmId={currentFilm?.id}/>
                {authStatus === AuthorizationStatus.Auth ? (
                  <Link
                    to={`/films/${currentFilm?.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                ) : null}
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

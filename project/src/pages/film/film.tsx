import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';

type FilmProps = {
  reviews: Review[];
};

function Film({ reviews }: FilmProps): JSX.Element {
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const currentFilm = films.find((film) => String(film.id) === params.id);
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter(
    (filmA) => filmA.isFavorite
  ).length;
  const similarFilms = films
    .filter(
      (film) => film.genre === currentFilm?.genre && film.id !== currentFilm?.id
    )
    .slice(0, 4);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <Link className="user-block__link" to="/login">
                  Sign out
                </Link>
              </li>
            </ul>
          </header>

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
                <Link
                  className="btn film-card__button"
                  to={`/films/${currentFilm?.id}/review`}
                >
                  Add review
                </Link>
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
              <Tabs films={currentFilm || null} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsList films={similarFilms} />

        <Footer />
      </div>
    </>
  );
}

export default Film;

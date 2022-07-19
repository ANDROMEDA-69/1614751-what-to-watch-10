import FilmsList from '../../components/films-list/films-list';
import NotFound from '../not-found/not-found';
import { Link, useParams } from 'react-router-dom';
import { Films } from '../../types/films';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

type FilmProps = {
  films: Films[];
};

function Film({ films }: FilmProps): JSX.Element {
  const params = useParams();

  const currentFilm = films.find((film) => film.id === params.id);

  if (currentFilm) {
    const {
      id,
      filmTitle,
      posterImage,
      genres,
      releaseYear,
      actors,
      description,
      director,
      reviews,
    } = currentFilm;
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={posterImage} alt={filmTitle} />
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
                  <Link className='user-block__link' to='/login'>
                    Sign out
                  </Link>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{filmTitle}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genres}</span>
                  <span className="film-card__year">{releaseYear}</span>
                </p>

                <div className="film-card__buttons">
                  <Link
                    className="btn btn--play film-card__button"
                    to={`player/${id}`}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <Link className='btn btn--list film-card__button' to='/mylist'>
                    <svg viewBox='0 0 19 20' width={19} height={20}>
                      <use xlinkHref='#add' />
                    </svg>
                    <span>My list</span>
                    <span className='film-card__count'>{films.length}</span>
                  </Link>
                  <Link className='btn film-card__button' to={`/films/${id}/review`}>
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
                  src={posterImage}
                  alt={filmTitle}
                  width="218"
                  height="327"
                />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#todo" className="film-nav__link">
                        Overview
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#todo" className="film-nav__link">
                        Details
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#todo" className="film-nav__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">8,9</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">{reviews} ratings</span>
                  </p>
                </div>

                <div className="film-card__text">
                  <p>
                    {description}
                  </p>

                  <p className="film-card__director">
                    <strong>Director: {director}</strong>
                  </p>

                  <p className="film-card__starring">
                    <strong>
                      Starring: {actors}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={films} />
          </section>
          <Footer />
        </div>
      </>
    );
  }
  return <NotFound />;
}

export default Film;

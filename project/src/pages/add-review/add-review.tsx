import { Link ,useParams } from 'react-router-dom';
import { Films } from '../../types/films';
import NotFound from '../not-found/not-found';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';

type AddReviewProps = {
  films: Films[];
};

function AddReview({ films }: AddReviewProps): JSX.Element {
  const params = useParams();
  const currenFilm = films.find((film) => film.id === params.id);

  if (currenFilm) {
    const { id, filmTitle, posterImage } = currenFilm;

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={posterImage} alt={filmTitle} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`/films/${id}`}>
                    {filmTitle}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a href="#todo" className="breadcrumbs__link">
                    Add review
                  </a>
                </li>
              </ul>
            </nav>

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
                <Link className="user-block__link" to='/login'>
                  Sign out
                </Link>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={posterImage}
              alt={filmTitle}
              width="218"
              height="327"
            />
          </div>
        </div>
        <AddReviewForm />
      </section>
    );
  }
  return <NotFound />;
}

export default AddReview;

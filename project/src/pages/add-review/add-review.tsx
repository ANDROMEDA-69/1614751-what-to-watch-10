import { Link, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchFilmAction(params?.id));
  },[params?.id, dispatch]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film?.id}`}>
                  {film?.name}
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
              <Link className="user-block__link" to="/login">
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;

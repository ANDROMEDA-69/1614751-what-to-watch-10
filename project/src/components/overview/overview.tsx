import { Films } from '../../types/films';
import { Fragment } from 'react';

type OverviewProps = {
  films: Films;
};

function Overview({ films }: OverviewProps): JSX.Element {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{films.reviews} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{films.description}</p>

        <p className="film-card__director">
          <strong>Director: {films.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {films.actors}</strong>
        </p>
      </div>
    </Fragment>
  );
}

export default Overview;

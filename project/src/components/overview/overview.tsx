import { Film } from '../../types/films';
import { Fragment } from 'react';

type OverviewProps = {
  film: Film | null;
};

function Overview({ film }: OverviewProps): JSX.Element {
  const getRatingLevel = (rating: number | undefined) => {
    if (rating === 10 && rating !== undefined) {
      return 'Awesome';
    } else if (rating !== undefined && rating >= 8 && rating < 10 ) {
      return 'Very good';
    } else if (rating !== undefined && rating >= 5 && rating < 8) {
      return 'Good';
    } else if (rating !== undefined && rating >= 3 && rating < 5) {
      return 'Normal';
    } else {
      return 'Bad';
    }
  };
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film?.rating !== undefined ? getRatingLevel(film.rating) : null}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {film?.starring.join(', ')}
          </strong>
        </p>
      </div>
    </Fragment>
  );
}

export default Overview;

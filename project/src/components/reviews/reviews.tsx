import { Review } from '../../types/review';

type ReviewsProps = {
  reviews: Review[];
  filmId: number | null;
};

function Reviews({ reviews , filmId}: ReviewsProps): JSX.Element {
  const reviewForFilm = reviews.filter((review)=> review.filmId === filmId);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewForFilm.map(({ id, author, date, reviewText, rating }) => (
          <div key={id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{reviewText}</p>

              <footer className="review__details">
                <cite className="review__author">{author}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  {date}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

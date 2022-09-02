import { Reviews } from '../../types/review';
import ReviewCard from '../review-card/review-card';

type FilmReviewsProps = {
  comments: Reviews;
};

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <ReviewCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;

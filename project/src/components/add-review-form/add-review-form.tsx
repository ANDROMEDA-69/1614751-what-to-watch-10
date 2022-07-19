
import { ChangeEvent, Fragment, useState } from 'react';


const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function AddReviewForm(): JSX.Element {
  const [filmRating, setFilmRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(evt.target.value);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            {
              stars.map((element) => (
                <Fragment key={element}>
                  <input
                    onChange={() => setFilmRating(element)}
                    className="rating__input"
                    id={`star-${element}`}
                    type="radio"
                    name="rating"
                    value={element}
                    checked={filmRating === element}
                  />
                  <label className="rating__label" htmlFor={`star-${element}`}>
                  Rating {element}
                  </label>
                </Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleChange}
            value={comment}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;

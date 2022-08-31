import { ChangeEvent, Fragment, useState, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { useValidateReview } from '../../hooks/useValidadeReview';
import { getLoadingStatus, getReviewStatus } from '../../store/add-review-process/selectors';
import { resetReviewStatus } from '../../store/add-review-process/add-review-process';


const ratingValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSending = useAppSelector(getLoadingStatus);
  const params = useParams();
  const reviewStatus = useAppSelector(getReviewStatus);

  const [formData, setFormData] = useState({
    rating: '',
    reviewText: '',
  });

  const isValidReview = useValidateReview(formData.reviewText, Number(formData.rating));


  const handleChange = (evt: ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, reviewText: value});
  };


  useEffect(() => {
    if (reviewStatus) {
      navigate(`${APIRoute.Reviews}${params?.id}`);
      dispatch(resetReviewStatus);
    }
  }, [dispatch, navigate, params?.id, reviewStatus, formData]);


  const addReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const sendingFormData = {
      rating: Number(formData.rating),
      comment: formData.reviewText,

    };

    if(formData.rating && formData.reviewText) {
      dispatch(addReviewAction([params.id, sendingFormData]));
    }
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={addReviewFormSubmit}>
        <div className="rating">
          <div className="rating__stars">

            {
              ratingValues.map((score) => (
                <Fragment key={score}>
                  <input
                    onChange={handleChange}
                    className="rating__input"
                    id={`star-${score}`}
                    type="radio"
                    name="rating"
                    value={score}
                    checked={score === Number(formData.rating)}
                    disabled={isSending}
                  />
                  <label className="rating__label" htmlFor={`star-${score}`}>
                  Rating {score}
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
            value={formData.reviewText}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isSending || !isValidReview}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;

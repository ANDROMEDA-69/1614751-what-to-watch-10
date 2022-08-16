import { ChangeEvent, Fragment, useState, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch,} from '../../hooks';
import { addReviewAction } from '../../store/api-actions';


const ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    rating: '',
    'review-text': '',
  });


  const handleChange = (evt: ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const addReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const sendingFormData = {
      rating: Number(formData.rating),
      comment: formData['review-text'],

    };

    if(formData.rating && formData['review-text']) {
      dispatch(addReviewAction([params.id, sendingFormData]));
      navigate(`${APIRoute.Films}/${params.id}`);
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
            value={formData['review-text']}
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

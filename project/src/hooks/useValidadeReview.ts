import {useEffect, useState} from 'react';
import {ReviewLength, DEFAULT_RATING} from '../const';

export const useValidateReview = (review: string, rating: number) => {
  const [isValidReview, setIsValidReview] = useState<boolean>(false);

  useEffect(() => {
    const validReview =
      review.length > ReviewLength.Min &&
      review.length < ReviewLength.Max;

    if (validReview && rating > DEFAULT_RATING) {
      setIsValidReview(true);
    } else {
      setIsValidReview(false);
    }
  }, [review, rating]);

  return isValidReview;
};


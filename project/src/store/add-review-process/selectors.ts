import { NameSpace } from '../../const';
import { errorReview } from '../../types/review';
import { State } from '../../types/state';


export const getError = (state: State): errorReview | null | unknown => state[NameSpace.AddReview].error;


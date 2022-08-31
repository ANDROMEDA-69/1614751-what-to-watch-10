import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getReviewStatus = (state: State) => state[NameSpace.AddReview].reviewSubmited;
export const getLoadingStatus = (state: State) => state[NameSpace.AddReview].isDataLoaded;


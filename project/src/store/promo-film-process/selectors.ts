import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getPromoFilm = (state: State): Film | null => state[NameSpace.PromoFilm].promo;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.PromoFilm].isDataLoaded;

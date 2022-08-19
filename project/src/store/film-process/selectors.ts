import { NameSpace } from '../../const';
import { Reviews } from '../../types/review';
import { Film, Films } from '../../types/films';
import { State } from '../../types/state';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getFilmReview = (state: State): Reviews => state[NameSpace.Film].reviews;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Film].isDataLoaded;

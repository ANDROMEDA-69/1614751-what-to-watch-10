import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { addReviewProcess } from './add-review-process/add-review-process';
import { filmProcess } from './film-process/film-process';
import { filmsProcess } from './films-process/films-process';
import { filterProcess } from './genre-process/genre-process';
import { promoFilmProcess } from './promo-film-process/promo-film-process';
import { favoriteProcess } from './favorite-process/favorite-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.FilterProcess]: filterProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.AddReview]: addReviewProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
});


import {store} from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { Films, Film } from './films.js';
import { Reviews, errorReview } from './review.js';
import { rootReducer } from '../store/root-reducer.js';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
};

export type FilmsProcess = {
    films: Films;
    isDataLoaded: boolean;
};

export type FilterProcess = {
    genre: string;
    filteredFilms: Films;
    films: Films;
}

export type FilmProcess = {
    film: Film | null;
    reviews: Reviews | [];
    similarFilms: Films | [];
    isDataLoaded: boolean;
}

export type AddReviewProcess = {
    error: errorReview | null | unknown;
    isDataLoaded: boolean;
}

export type PromoFilmProcess = {
    promo: Film | null;
    isDataLoaded: boolean;
}

export type FavoriteFilmsProcess = {
    favoriteFilms: Films | [];
    isDataLoaded: boolean;
}
export type Reducer = ReturnType<typeof rootReducer>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


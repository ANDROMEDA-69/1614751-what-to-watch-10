import {store} from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { Films, Film } from './films.js';
import { Reviews } from './review.js';
import { rootReducer } from '../store/root-reducer.js';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    authorizationError: string;
};

export type FilmsProcess = {
    films: Films;
    isDataLoaded: boolean;
};

export type FilterProcess = {
    genre: string;
    filmsCount: number;
}

export type FilmProcess = {
    film: Film | null;
    reviews: Reviews | [];
    similarFilms: Films | [];
    isDataLoaded: boolean;
}

export type AddReviewProcess = {
    reviewSubmited: boolean;
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


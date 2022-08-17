import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { AuthorizationStatus, AppRoute } from '../const';
import { Reviews } from '../types/review';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const setFilter = createAction('films/setFilter');

export const resetFilters = createAction('films/resetFilters');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setError = createAction<string | null | unknown>('user/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');



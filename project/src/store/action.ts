import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const setFilter = createAction('films/setFilter');

export const resetFilters = createAction('films/resetFilters');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('data/setError');



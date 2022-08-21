import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';


export const changeGenre = createAction<{genre: string}>('changeGenre');

export const setFilter = createAction('films/setFilter');

export const resetFilters = createAction('films/resetFilters');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');



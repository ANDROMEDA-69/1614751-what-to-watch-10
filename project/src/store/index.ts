import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reduser';
import { createAPI } from '../services/api';
import { redirect } from './midlleware/redirect';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

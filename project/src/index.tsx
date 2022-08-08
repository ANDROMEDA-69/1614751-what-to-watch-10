import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { reviews } from './mocks/reviews';
import ErrorMessage from './components/error-message/error-message';
import {fetchFilmsAction, checkAuthAction, fetchPromoFilmAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());

store.dispatch(fetchPromoFilmAction());

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App reviews={ reviews }/>
    </Provider>
  </React.StrictMode>,
);

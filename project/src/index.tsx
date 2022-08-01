import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App promoFilm = {promoFilm} films = {films} reviews={ reviews }/>
    </Provider>
  </React.StrictMode>,
);

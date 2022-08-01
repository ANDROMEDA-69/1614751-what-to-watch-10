import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, } from './action';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';


const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
      state.films = action.payload.films;
    });

});

export {reducer};

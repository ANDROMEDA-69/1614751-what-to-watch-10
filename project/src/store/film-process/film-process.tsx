import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import {fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction, } from '../api-actions';
import { setFilm } from '../action';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  film: null,
  reviews: [],
  similarFilms: [],
  isDataLoaded: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })

      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })

      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })

      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })

      .addCase(fetchReviewsAction.pending, (state) => {
        state.isDataLoaded = true;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoaded = false;
      })

      .addCase(setFilm, (state, action) => {
        state.film = action.payload;
      });
  },
});

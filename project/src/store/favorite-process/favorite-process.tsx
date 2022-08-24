import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteFilmsProcess } from '../../types/state';
import {fetchFilmsFavoriteAction, postFilmFavoriteStatusAction} from '../api-actions';

const initialState: FavoriteFilmsProcess = {
  favoriteFilms: [],
  isDataLoaded: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsFavoriteAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsFavoriteAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(postFilmFavoriteStatusAction.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(postFilmFavoriteStatusAction.fulfilled, (state, action) => {
        state.isDataLoaded = false;
      });
  }
});

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoFilmProcess } from '../../types/state';
import { fetchPromoFilmAction } from '../api-actions';


const initialState: PromoFilmProcess = {
  promo: null,
  isDataLoaded: false,
};

export const promoFilmProcess = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoaded = false;
      });
  }
});

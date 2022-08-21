import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AddReviewProcess } from '../../types/state';
import { addReviewAction } from '../api-actions';

const initialState: AddReviewProcess = {
  error: null,
  isDataLoaded: false,
};

export const addReviewProcess = createSlice({
  name: NameSpace.AddReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })

      .addCase(addReviewAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isDataLoaded = false;
      })

      .addCase(addReviewAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  },
});

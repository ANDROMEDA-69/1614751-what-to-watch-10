import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AddReviewProcess } from '../../types/state';
import { addReviewAction } from '../api-actions';
import {toast} from 'react-toastify';

const initialState: AddReviewProcess = {
  reviewSubmited: false,
  isDataLoaded: false,
};

export const addReviewProcess = createSlice({
  name: NameSpace.AddReview,
  initialState,
  reducers: {
    resetReviewStatus: (state: AddReviewProcess) => {
      state.reviewSubmited = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.reviewSubmited = false;
        state.isDataLoaded = false;
        toast('We can\'t send your awesome review, please try again later');
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isDataLoaded = false;
        state.reviewSubmited = true;
      });
  },
});

export const { resetReviewStatus } = addReviewProcess.actions;

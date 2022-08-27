import { createSlice } from '@reduxjs/toolkit';
import { CARDS_PER_STEP, DEFAULT_GENRE, NameSpace } from '../../const';
import { FilterProcess,} from '../../types/state';

const initialState: FilterProcess = {
  genre: DEFAULT_GENRE,
  filmsCount: CARDS_PER_STEP,
};

export const filtersProcess = createSlice({
  name: NameSpace.FilterProcess,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    setFilter: (state) => {
      state.filmsCount = CARDS_PER_STEP;
    },
    increaseFilmsCount: (state) => {
      state.filmsCount += CARDS_PER_STEP;
    },
    resetFilters: (state) => {
      state.filmsCount = CARDS_PER_STEP;
    },
  },
});

export const {changeGenre, setFilter, increaseFilmsCount, resetFilters} = filtersProcess.actions;

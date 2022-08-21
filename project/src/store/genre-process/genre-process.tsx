import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { FilterProcess,} from '../../types/state';
import { changeGenre, setFilter, resetFilters } from '../action';

const initialState: FilterProcess = {
  genre: DEFAULT_GENRE,
  filteredFilms: [],
  films: [],
};

export const filterProcess = createSlice({
  name: NameSpace.FilterProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, action) => {
        const { genre } = action.payload;
        state.genre = genre;
      })

      .addCase(setFilter, (state, action) => {
        state.filteredFilms = [...state.films].filter(
          (film) => film.genre === state.genre
        );
      })

      .addCase(resetFilters, (state, action) => {
        state.filteredFilms = [...state.films];
      });
  },
});

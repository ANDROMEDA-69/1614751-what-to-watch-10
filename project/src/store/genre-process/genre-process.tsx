import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { GenreProcess } from '../../types/state';
import { changeGenre, setFilter, resetFilters } from '../action';

const initialState: GenreProcess = {
  genre: DEFAULT_GENRE,
  filteredFilms: [],
  films: [],
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
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

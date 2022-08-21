import { NameSpace, DEFAULT_GENRE } from '../../const';
import { Films } from '../../types/films';
import { State } from '../../types/state';
import { createSelector } from 'reselect';

export const getFilms = (state: State): Films => state[NameSpace.Films].films;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Films].isDataLoaded;
export const getGenre = (state: State): string => state[NameSpace.FilterProcess].genre;
export const getFilteredFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === DEFAULT_GENRE ) {
      return [...films];
    } else {
      return [...films].filter((film) => film.genre === genre);
    }
  }
);


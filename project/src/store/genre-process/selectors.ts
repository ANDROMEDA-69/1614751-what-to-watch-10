import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.FilterProcess].genre;
export const getFilmsCount = (state: State): number => state[NameSpace.FilterProcess].filmsCount;


import { NameSpace } from '../../const';
import { Films } from '../../types/films';
import { State } from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Films].films;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Films].isDataLoaded;

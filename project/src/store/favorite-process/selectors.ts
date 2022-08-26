import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/films';


export const getFavoriteFilms = (state: State): Films | [] => state[NameSpace.Favorite].favoriteFilms;
export const getLoadingStatus = (state: State) => state[NameSpace.Favorite].isDataLoaded;
export const getFavoriteFilmsLength = (state: State) => state[NameSpace.Favorite].favoriteFilms.length;


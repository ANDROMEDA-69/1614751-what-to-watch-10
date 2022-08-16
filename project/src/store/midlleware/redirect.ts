import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { reducer } from '../reduser';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === 'films/redirectToRoute') {
      browserHistory.push(action.payload);
    }
    return next(action);
  };
enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

enum NameSpace {
  User = 'USER',
  PromoFilm = 'PROMO_FILM',
  Films = 'FILMS',
  Film = 'FILM',
  Genre = 'GENRE',
  AddReview = 'ADD_REVIEW',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}


const CARDS_PER_STEP = 8;


const DEFAULT_GENRE = 'All genres';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_GENRE,
  CARDS_PER_STEP,
  MONTHS,
  NameSpace
};

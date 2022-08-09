enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/id',
  AddReview = 'films/:id/review',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const GENRE_TABS = [
  'All genres',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thriller',
];

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}


const CARDS_PER_STEP = 8;


const DEFAULT_GENRE = 'All genres';


export {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_GENRE,
  GENRE_TABS,
  CARDS_PER_STEP
};

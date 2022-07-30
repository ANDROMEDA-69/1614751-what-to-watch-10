enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
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
  'Comedie',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thriller',
];

const CARDS_PER_STEP = 8;


const DEFAULT_GENRE = 'All genres';


export {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_GENRE,
  GENRE_TABS,
  CARDS_PER_STEP
};

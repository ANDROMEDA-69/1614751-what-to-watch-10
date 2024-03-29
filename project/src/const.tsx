enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

enum NameSpace {
  User = 'USER',
  PromoFilm = 'PROMO_FILM',
  Films = 'FILMS',
  Film = 'FILM',
  FilterProcess= 'FILTER_PROCESS',
  AddReview = 'ADD_REVIEW',
  Favorite = 'FAVORITE',
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
  Favorite = '/favorite',
  Player = '/player',
}


const CARDS_PER_STEP = 8;
const DEFAULT_GENRE = 'All genres';
export const DEFAULT_RATING = 0;

export enum ReviewLength {
  Min = 50,
  Max = 400,
}


export {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_GENRE,
  CARDS_PER_STEP,
  NameSpace,
};


export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
}


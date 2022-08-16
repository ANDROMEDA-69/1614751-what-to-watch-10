import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Films } from '../types/films';
import {
  loadFilms,
  loadPromo,
  loadFilm,
  loadSimilarFilms,
  loadReviews,
  requireAuthorization,
  redirectToRoute,
  setError,
  setDataLoadedStatus,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { Reviews, AddReview, Review } from '../types/review';


export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.Promo);
  dispatch(setDataLoadedStatus(true));
  dispatch(loadPromo(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const addReviewAction = createAsyncThunk<void, [(string | undefined), AddReview], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([id, {comment, rating}], {dispatch, extra: api}) => {
    try {
      await api.post<Review>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    } catch (e) {
      setError(e);
    }
  },
  );

export const fetchFilmAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
  dispatch(loadFilm(data));
});

export const fetchSimilarFilmsAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSimilarFilms', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
  const filteredData = data
    .filter((film) => film.id !== Number(id))
    .slice(0, 4);
  dispatch(loadSimilarFilms(filteredData));
});

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(APIRoute.Films);
  dispatch(setDataLoadedStatus(true));
  dispatch(loadFilms(data));
  dispatch(setDataLoadedStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

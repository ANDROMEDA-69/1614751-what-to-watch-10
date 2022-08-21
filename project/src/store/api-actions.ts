import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Films } from '../types/films';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute, } from '../const';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { Reviews, AddReview, errorReview } from '../types/review';


export const fetchPromoFilmAction = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromo', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.Promo);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<Reviews, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<errorReview, [(string | undefined), AddReview], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([id, {comment, rating}], {dispatch, extra: api}) => {
    const { data } = await api.post<errorReview>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
  );

export const fetchFilmAction = createAsyncThunk<
  Film,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
  return data;
});

export const fetchSimilarFilmsAction = createAsyncThunk<
  Films,
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
  return filteredData;
});

export const fetchFilmsAction = createAsyncThunk<
  Films,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(APIRoute.Films);
  return data;
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
  await api.get(APIRoute.Login);
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
});

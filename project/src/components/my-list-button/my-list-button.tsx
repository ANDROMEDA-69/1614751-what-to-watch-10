import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilmsLength } from '../../store/favorite-process/selectors';
import { getFilmStatus } from '../../store/film-process/selectors';
import { postFilmFavoriteStatusAction, fetchFilmsFavoriteAction } from '../../store/api-actions';
import {
  AppRoute,
  AuthorizationStatus
} from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { FavoriteData } from '../../types/favorite-data';
import { useNavigate } from 'react-router-dom';

type myListButtonProps = {
  filmId: number | null | undefined;
}

function MyListButton({filmId}: myListButtonProps): JSX.Element {
  const favoriteCount = useAppSelector(getFavoriteFilmsLength);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const filmStatus = useAppSelector(getFilmStatus);

  const handleMyListBtnClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const data: FavoriteData = {
        id: String(filmId),
        filmStatus: filmStatus,
      };
      dispatch(postFilmFavoriteStatusAction(data));
    } else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(() => {
    dispatch(fetchFilmsFavoriteAction());
  }, [filmStatus, dispatch]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={ handleMyListBtnClick }>
      {
        filmStatus ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list" />
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" />
          </svg>
        )
      }
      <span>My list</span> <span className="film-card__count">{favoriteCount}</span>
    </button>
  );
}

export default MyListButton;

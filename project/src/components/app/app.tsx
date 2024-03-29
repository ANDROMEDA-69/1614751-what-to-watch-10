import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sing-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import { Route, Routes,} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import MyList from '../../pages/my-list/my-list';
import PrivateRoute from '../../components/private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;


function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  if(isCheckedAuth(authStatus)){
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route
          path={AppRoute.AddReview}
          element=
            {
              <PrivateRoute authorizationStatus={authStatus}>
                <AddReview />
              </PrivateRoute>
            }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sing-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import MyList from '../../pages/my-list/my-list';
import PrivateRoute from '../../components/private-route/private-route';
import { Review } from '../../types/review';
import LoadingScreen from '../loading-screen/loading-screen';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoad} = useAppSelector((state) => state);

  if(isCheckedAuth(authorizationStatus) || isDataLoad){
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Film} element={<Film reviews={reviews}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

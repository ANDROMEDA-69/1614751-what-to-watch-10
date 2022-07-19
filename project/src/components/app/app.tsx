import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sing-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyList from '../../pages/my-list/my-list';
import PrivateRoute from '../../components/private-route/private-route';
import { Films } from '../../types/films';

type AppProps = {
  promoFilm: {
    title: string;
    genre: string;
    year: number;
  }
  films: Films[];
};

function App({ promoFilm, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} promoFilm={promoFilm} />} />
        <Route path={AppRoute.Film} element={<Film films={films} />} />
        <Route path={AppRoute.AddReview} element={<AddReview films={films} />} />
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

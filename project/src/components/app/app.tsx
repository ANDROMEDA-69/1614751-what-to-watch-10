import Main from '../../pages/main/main';

type AppProps = {
  promoFilm: {
    title: string;
    genre: string;
    year: number;
  }
}

function App({promoFilm}: AppProps): JSX.Element {
  return <Main promoFilm={promoFilm}/>;
}

export default App;

import { useState } from 'react';
import { Film } from '../../types/films';
import Overview from '../overview/overview';
import FilmReviews from '../film-reviews/film-reviews';
import Details from '../details/details';
import { Reviews } from '../../types/review';
import './button.css';

type TabsProps = {
  film: Film | null;
  reviews: Reviews;
};

function Tabs({ film, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const onTabClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.currentTarget.textContent !== null) {
      setActiveTab(e.currentTarget.textContent);
    }
  };

  const renderFilmData = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <Details film={film} />;
      case 'Reviews':
        return <FilmReviews comments={reviews} />;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Overview</a>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Details</a>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderFilmData(activeTab)}
    </>
  );
}

export default Tabs;

import { useState } from 'react';
import { Film } from '../../types/films';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';
import { Review } from '../../types/review';

type TabsProps = {
  films: Film | null;
  reviews: Review[];
};

function Tabs({ films, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const onTabClickHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent !== null) {
      setActiveTab(e.currentTarget.textContent);
    }
  };

  const renderSwitch = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <Overview film={films} />;
      case 'Details':
        return <Details film={films} />;
      case 'Reviews':
        return <Reviews reviews={reviews} filmId={films?.id || null} />;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Overview</button>
          </li>
          <li
            className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Details</button>
          </li>
          <li
            className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Reviews</button>
          </li>
        </ul>
      </nav>
      {renderSwitch(activeTab)}
    </>
  );
}

export default Tabs;

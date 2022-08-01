import { useState } from 'react';
import { Films } from '../../types/films';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';
import { Review } from '../../types/review';

type TabsProps = {
  films: Films;
  reviews: Review[];
};

const Tab = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function Tabs({ films, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tab).map((key) => (
            <li key={key} className={`film-nav__item ${key === activeTab ? 'film-nav__item--active' : ''}`}>
              <a href="#todo" className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  setActiveTab(key);
                }}
              >
                {key}
              </a>
            </li>))}
        </ul>
      </nav>

      {activeTab === Tab.OVERVIEW ? <Overview films={films}/> : null}
      {activeTab === Tab.DETAILS ? <Details films={films}/> : null}
      {activeTab === Tab.REVIEWS ? <Reviews reviews={reviews} filmId={films.id}/> : null}
    </div>
  );
}

export default Tabs;

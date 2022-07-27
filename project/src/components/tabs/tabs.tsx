import { useState } from 'react';
import { Films } from '../../types/films';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';

type TabsProps = {
  films: Films;
};

const Tab = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function Tabs({ films }: TabsProps): JSX.Element {
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
      {activeTab === Tab.REVIEWS ? <Reviews /> : null}
    </div>
  );
}

export default Tabs;

import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <header className="page-header film-card__head">
        <div className="logo">
          <a href="#todo" className="Flogo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#todo" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="page-content">
        <h1>404. Page not found</h1>
        <Link to="/">Back to main page</Link>
      </section>
    </>
  );
}

export default NotFound;

import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  id: number;
  filmTitle: string;
  posterImage: string;
  videoLink: string;
  isActive: boolean;
  makeCardActive: (id: number) => void;
  makeCardInactive: () => void;
};


function FilmCard({id, filmTitle, posterImage, videoLink, isActive, makeCardActive, makeCardInactive} : FilmCardProps): JSX.Element {
  return (
    <article
      className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` }
      onMouseEnter={() => makeCardActive(id)}
      onMouseLeave={() => makeCardInactive()}
    >
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer image={posterImage} video={videoLink} />
        ) : (
          <img
            src={posterImage}
            alt={filmTitle}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

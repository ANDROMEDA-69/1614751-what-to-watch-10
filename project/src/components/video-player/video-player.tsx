import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Films } from '../../types/films';

type VideoPlayerProps = {
  film: Films;
};


function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        setIsPlaying(true);
      }}
      onMouseOut={() => {
        setIsPlaying(false);
      }}
    >
      <Link className="small-film-card__image" to={`/films/${film.id}`}>
        <video height="175" ref={videoRef} src={film.url} muted poster={film.posterImage}/>
        <h3 className="small-film-card__title">
          {film.filmTitle}
        </h3>
      </Link>
    </article>
  );
}

export default VideoPlayer;

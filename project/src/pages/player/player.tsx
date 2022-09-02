import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { getFilm } from '../../store/film-process/selectors';
import useVideoPlayer from '../../hooks/useVideoPlayer';
import { useEffect, useRef } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../const';


function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilmAction(params?.id));
  }, [params?.id, dispatch]);

  const videoElement = useRef<HTMLVideoElement | null>(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    toggleFullScreen,
    setVideoDuration,
  } = useVideoPlayer(videoElement);

  const onExitButtonClickHandler = () => {
    const path = `${APIRoute.Films}/${film?.id}`;
    navigate(path);
  };

  return (
    <div className="player">
      <video
        ref={videoElement}
        src={film?.previewVideoLink}
        className="player__video"
        poster={film?.previewImage}
        onTimeUpdate={handleOnTimeUpdate}
        onLoadedData={() => {
          if (videoElement.current?.duration !== undefined) {
            setVideoDuration(videoElement.current?.duration);
          }
        }}
      >
      </video>
      <button type="button" className="player__exit" onClick={onExitButtonClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playerState.progress} max="100" />
            <div className="player__toggler" style={{left: `${playerState.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{playerState.duration}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={playerState.isPlaying ? '#pause' : '#play-s'} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film?.name}</div>
          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;

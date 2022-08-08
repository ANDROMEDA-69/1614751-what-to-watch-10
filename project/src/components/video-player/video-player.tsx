import {useEffect, useRef} from 'react';

const PLAY_TIMEOUT = 1000;

type VideoPlayerProps = {
  image: string;
  video: string;
};

function VideoPlayer({video, image}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    setTimeout(() => {
      videoRef.current?.play();
    }, PLAY_TIMEOUT);
  }, []);

  return (
    <video
      autoPlay
      muted
      src={video}
      ref={videoRef}
      className="player__video"
      poster={image}
    />
  );
}

export default VideoPlayer;

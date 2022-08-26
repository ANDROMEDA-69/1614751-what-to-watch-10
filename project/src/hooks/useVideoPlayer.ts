import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const useVideoPlayer = (videoPlayer: React.MutableRefObject<HTMLVideoElement | null>) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    duration: '',
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const toggleFullScreen = () => {
    videoPlayer.current?.requestFullscreen();
  };

  const setVideoDuration = (filmDuration: number) =>
    setPlayerState({
      ...playerState,
      duration: dayjs.duration(filmDuration, 'seconds').format('HH:mm:ss'),
    });


  useEffect(() => {
    playerState.isPlaying
      ? videoPlayer?.current?.play()
      : videoPlayer?.current?.pause();
  }, [playerState.isPlaying, videoPlayer]);

  const handleOnTimeUpdate = () => {
    if (videoPlayer.current !== null) {
      const progress = (videoPlayer.current.currentTime / videoPlayer.current.duration) * 100;
      const timeLeft = Number(videoPlayer.current?.duration) - Number(videoPlayer.current.currentTime);
      if (progress !== 100) {
        return setPlayerState({
          ...playerState,
          progress,
          duration: dayjs.duration(timeLeft, 'seconds').format('HH:mm:ss'),
        });
      }
      setPlayerState({
        ...playerState,
        progress: 100,
        isPlaying: false
      });
    }
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    toggleFullScreen,
    setVideoDuration,
  };
};

export default useVideoPlayer;


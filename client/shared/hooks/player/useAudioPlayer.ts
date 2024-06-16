import { useState, useEffect } from 'react';

import TrackPlayer, { usePlaybackState, State, Track } from 'react-native-track-player';

export const useAudioPlayer = () => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const currentState = playbackState?.state ?? playbackState;
    console.log('current state', currentState);

    if (currentState === State.Playing) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [playbackState]);

  const play = async (track: Track) => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
      await TrackPlayer.setRate(1);
    } catch (error) {
      console.log(error);
    }
  };

  const playSlow = async (track: Track) => {
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.setRate(0.5);
    await TrackPlayer.play();
  };

  const handlePlaySlow = async (audioUrl: string) => {
    const track = {
      id: 'trackId',
      url: audioUrl,
    };
    if (isPlaying) {
      stop();
    }

    playSlow(track);
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const stop = async () => {
    await TrackPlayer.stop();
  };

  const setRate = async (rate: number) => {
    await TrackPlayer.setRate(rate);
  };

  const handlePlayPause = (audioUrl: string) => {
    const track = {
      id: 'trackId',
      url: audioUrl,
    };

    if (isPlaying) {
      stop();
    } else {
      play(track);
    }
  };

  return { isPlaying, play, pause, stop, setRate, handlePlayPause, handlePlaySlow };
};

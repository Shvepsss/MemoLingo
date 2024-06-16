import React from 'react';

import TrackPlayer, { Capability } from 'react-native-track-player';

export type PlayerProviderProps = {
  children: React.ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const setUpPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [Capability.Play, Capability.Pause, Capability.Stop, Capability.SetRating],
          compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        });
        console.log('The player is set');
      } catch (error) {
        console.error('Error setting up player:', error);
      }

      setIsLoading(false);
    };

    setUpPlayer();
  }, []);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};

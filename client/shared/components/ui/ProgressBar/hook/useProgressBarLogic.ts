import { withTiming, useAnimatedStyle } from 'app/shared/styles/reanimated';

import { ProgressBarProps } from '../types';

export const useProgressBarLogic = ({ progress }: ProgressBarProps) => {
  const progressBareAnimatedStyle = useAnimatedStyle(() => {
    const width = progress * 100;
    return {
      width: withTiming(`${width}%`),
    };
  }, [progress]);
  return {
    progressBareAnimatedStyle,
  };
};

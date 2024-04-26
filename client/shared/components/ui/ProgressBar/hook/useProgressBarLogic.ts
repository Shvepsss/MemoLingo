import { useDerivedValue } from 'react-native-reanimated';

import { useSharedValue, withTiming, useAnimatedStyle } from 'app/shared/styles/reanimated';

import { ProgressBarProps } from '../ProgressBar';

export const useProgressBarLogic = ({ progress }: ProgressBarProps) => {
  const animationProgress = useSharedValue(progress);

  useDerivedValue(() => {
    console.log({ progress });
    animationProgress.value = progress;
  }, [progress]);

  const progressBareAnimatedStyle = useAnimatedStyle(() => {
    const width = animationProgress.value * 100;
    console.log('width', width);
    return {
      width: withTiming(`${width}%`),
    };
  }, [animationProgress]);
  return {
    progressBareAnimatedStyle,
  };
};

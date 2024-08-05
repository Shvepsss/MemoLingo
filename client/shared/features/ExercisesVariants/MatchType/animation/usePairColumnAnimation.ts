import { useCallback } from 'react';

import { useTheme } from 'app/shared/hooks/styles';
import { useSharedValue, useAnimatedStyle, withTiming } from 'app/shared/styles/reanimated';

import { PairStatus } from '../constants';

type PairColumnAnimationProps = {
  itemStatus: PairStatus;
  isSelected: boolean;
};

export const usePairColumnAnimation = ({ itemStatus, isSelected }: PairColumnAnimationProps) => {
  const theme = useTheme();
  const cleanColorChange = useSharedValue(0);

  const triggerColorChange = useCallback(() => {
    cleanColorChange.value = withTiming(1, { duration: 1000 });
  }, [cleanColorChange]);

  const getBackgroundColor = () => {
    if (itemStatus === PairStatus.correct) {
      return cleanColorChange.value ? theme.colors.black40 : theme.colors.success40;
    }

    if (itemStatus === PairStatus.incorrect) {
      return theme.colors.error40;
    }

    if (isSelected) {
      return theme.colors.primary40;
    }

    return theme.colors.black0;
  };

  const getBorderColor = () => {
    if (itemStatus === PairStatus.correct) {
      return cleanColorChange.value ? theme.colors.black40 : theme.colors.success60;
    }

    if (itemStatus === PairStatus.incorrect) {
      return theme.colors.error60;
    }

    if (isSelected) {
      return theme.colors.primary60;
    }

    return theme.colors.primary20;
  };

  const getBorderWidth = () => {
    if (itemStatus === PairStatus.correct || itemStatus === PairStatus.incorrect) {
      return 2;
    }

    if (isSelected) {
      return 1;
    }

    return 2;
  };

  const animatedStyles = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(getBackgroundColor()),
      borderColor: withTiming(getBorderColor()),
      borderWidth: withTiming(getBorderWidth()),
    }),
    [itemStatus, cleanColorChange, isSelected, theme],
  );

  return { animatedStyles, triggerColorChange };
};

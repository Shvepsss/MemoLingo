import { View } from 'app/shared/components/ui/View';
import { useTheme } from 'app/shared/hooks/styles';
import * as S from 'app/shared/styles/@style-atoms';
import { Animated } from 'app/shared/styles/reanimated';

import { useProgressBarLogic } from './hook/useProgressBarLogic';
import { ProgressBarProps } from './types';

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const theme = useTheme();
  const { progressBareAnimatedStyle } = useProgressBarLogic({ progress });

  return (
    <View
      style={[
        S.border.radx10,
        S.flex.one,
        S.overflow.hidden,
        { backgroundColor: theme.colors.black40, height: 20 },
      ]}
    >
      <Animated.View
        style={[
          progressBareAnimatedStyle,
          S.height.full,
          S.border.radx10,
          {
            backgroundColor: theme.colors.primary40,
          },
        ]}
      />
    </View>
  );
};

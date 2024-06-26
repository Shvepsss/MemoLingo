import { View } from 'app/shared/components/ui/View';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';
import { Animated } from 'app/shared/styles/reanimated';

import { useProgressBarLogic } from './hook/useProgressBarLogic';
import { ProgressBarProps } from './types';

const BAR_HEIGHT = 20;

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    barContainer: {
      backgroundColor: theme.colors.black20,
      height: BAR_HEIGHT,
    },
    barContent: {
      backgroundColor: theme.colors.primary40,
    },
  };
});

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  const { progressBareAnimatedStyle } = useProgressBarLogic({ progress });

  return (
    <View style={[S.flex.one, S.overflow.hidden, S.border.radx5, styles.barContainer]}>
      <Animated.View style={[S.height.full, styles.barContent, progressBareAnimatedStyle]} />
    </View>
  );
};

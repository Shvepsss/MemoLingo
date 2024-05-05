import { View } from 'app/shared/components/ui/View';
import { useTheme } from 'app/shared/hooks/styles';
import { Animated } from 'app/shared/styles/reanimated';

// eslint-disable-next-line import/no-cycle
import { useProgressBarLogic } from './hook/useProgressBarLogic';

export type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const theme = useTheme();
  const { progressBareAnimatedStyle } = useProgressBarLogic({ progress });

  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: theme.colors.black40,
        height: 20,
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={[
          progressBareAnimatedStyle,
          {
            height: '100%',
            backgroundColor: theme.colors.primary40,
            borderRadius: 40,
          },
        ]}
      />
    </View>
  );
};

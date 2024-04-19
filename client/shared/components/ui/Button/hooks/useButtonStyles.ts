import { type SharedValue, useAnimatedStyle, withTiming } from 'app/shared/styles/reanimated';
import { ButtonProps } from '../types';
import { useTheme } from 'app/shared/hooks/styles';
import { BUTTON_RADIUS } from '../constants';
import { MD3Colors } from 'app/shared/providers/theme';

type UseButtonStylesProps = Pick<
  Required<ButtonProps>,
  'backgroundColor' | 'titleColor' | 'disabled' | 'radius'
> & {
  isPressed: SharedValue<boolean>;
  borderColor?: keyof MD3Colors;
  spaceBetween?: boolean;
};

export const useButtonStyles = ({
  isPressed,
  disabled,
  backgroundColor,
  radius,
  borderColor,
  spaceBetween,
}: UseButtonStylesProps) => {
  const theme = useTheme();
  const pressableAnimatedStyle = useAnimatedStyle(() => {
    const opacity = isPressed.value ? 0.5 : 1;
    return {
      opacity: withTiming(opacity),
    };
  }, [isPressed]);

  const pressableBaseStyle = {
    backgroundColor: disabled ? theme.colors.black40 : theme.colors[backgroundColor || 'primary60'],
    borderRadius: BUTTON_RADIUS[radius],
    height: 57,
    alignItems: 'center',
    justifyContent: spaceBetween ? 'space-between' : 'center',
    shadowColor: theme.colors.black100,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: borderColor ? theme.colors[borderColor] : null,
    borderWidth: borderColor ? 1 : 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
  };

  return {
    pressableBaseStyle,
    pressableAnimatedStyle,
  };
};

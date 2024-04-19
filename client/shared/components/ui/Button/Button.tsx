import { Pressable } from 'react-native';
import { ButtonProps } from './types';
import { useButtonLogic } from './hooks/useButtonLogic';
import { useButtonStyles } from './hooks/useButtonStyles';
import { Animated } from 'app/shared/styles/reanimated';
import { Typography } from '../Typography';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button = ({
  onPress,
  disabled = false,
  backgroundColor = 'primary60',
  titleColor = 'black0',
  titleVariant = 'extraLargeRegular',
  title,
  radius = 'default',
  borderColor,
  left,
  right,
  spaceBetween,
}: ButtonProps) => {
  const { isPressed, pressableProps } = useButtonLogic();

  const { pressableAnimatedStyle, pressableBaseStyle } = useButtonStyles({
    isPressed,
    disabled,
    backgroundColor,
    radius,
    titleColor,
    borderColor,
    spaceBetween,
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      disabled={disabled}
      {...pressableProps}
      style={[pressableBaseStyle, pressableAnimatedStyle]}
    >
      {left ? left : null}
      <Typography color={titleColor} variant={titleVariant}>
        {title}
      </Typography>
      {right ? right : null}
    </AnimatedPressable>
  );
};

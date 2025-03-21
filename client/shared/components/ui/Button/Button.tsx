import { Pressable } from 'react-native';

import { Animated } from 'app/shared/styles/reanimated';

import { Typography } from '../Typography';

import { useButtonLogic } from './hooks/useButtonLogic';
import { useButtonStyles } from './hooks/useButtonStyles';
import { ButtonProps } from './types';

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
  style,
  withAnimation = true,
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
    style,
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      disabled={disabled}
      {...pressableProps}
      style={[pressableBaseStyle, withAnimation && pressableAnimatedStyle, style]}
    >
      {left || null}
      <Typography color={titleColor} variant={titleVariant}>
        {title}
      </Typography>
      {right || null}
    </AnimatedPressable>
  );
};

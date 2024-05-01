import { PressableProps } from 'react-native';

import { useSharedValue } from 'app/shared/styles/reanimated';

export const useButtonLogic = () => {
  const isPressed = useSharedValue(false);

  const pressableProps: Partial<PressableProps> = {
    onPressIn: () => {
      'worklet';

      isPressed.value = true;
    },
    onPressOut: () => {
      'worklet';

      isPressed.value = false;
    },
  };

  return {
    pressableProps,
    isPressed,
  };
};

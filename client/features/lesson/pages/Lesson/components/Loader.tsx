import React, { useRef } from 'react';

import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { IconLocal, Typography, View } from 'app/shared/components/ui';

export const Loader = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -30,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <IconLocal icon="loader" size={250} />
      </Animated.View>
      <Typography variant="h3" color="black60">
        Loading
      </Typography>
      <Typography variant="largeRegular" color="black40">
        Prepare for you lesson!
      </Typography>
    </View>
  );
};

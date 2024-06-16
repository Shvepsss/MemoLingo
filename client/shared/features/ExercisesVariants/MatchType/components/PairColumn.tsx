import React from 'react';

import { runOnJS } from 'react-native-reanimated';

import { View, Button } from 'app/shared/components/ui/index';
import { useTheme } from 'app/shared/hooks/styles';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import { useAnimatedStyle, useSharedValue } from 'app/shared/styles/reanimated';

import { PairStatus } from '../constants';
import { PairColumnItemProps, PairColumnProps } from '../types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    columnContainer: {
      justifyContent: 'space-evenly',
      flex: 1,
    },
  };
});

const PairColumnItem = React.memo(({ item, onPress }: PairColumnItemProps) => {
  const { word } = item;
  const itemStatus = item.status;
  const theme = useTheme();
  const finishedAnimation = useSharedValue(false);

  const finishCorrectAnimation = React.useCallback(() => {
    setTimeout(() => {
      finishedAnimation.value = true;
    }, 1000);
  }, [finishedAnimation]);

  React.useEffect(() => {
    finishedAnimation.value = false;
    runOnJS(finishCorrectAnimation)();
  }, [finishCorrectAnimation, finishedAnimation, itemStatus]);

  const animatedStyles = useAnimatedStyle(() => {
    const isCorrect = item.status === PairStatus.correct;
    const isIncorrect = item.status === PairStatus.incorrect;

    if (isCorrect) {
      if (finishedAnimation.value) {
        return {
          backgroundColor: theme.colors.black40,
          borderColor: theme.colors.black40,
        };
      }

      return {
        backgroundColor: theme.colors.success40,
        borderColor: theme.colors.success60,
      };
    }

    if (isIncorrect && !finishedAnimation.value) {
      return {
        backgroundColor: theme.colors.error40,
        borderColor: theme.colors.error60,
        borderWidth: 2,
      };
    }

    if (item.isSelected) {
      return {
        backgroundColor: theme.colors.primary40,
        borderColor: theme.colors.primary60,
        borderWidth: 1,
      };
    }

    return {
      backgroundColor: theme.colors.black0,
      borderColor: theme.colors.primary20,
      borderWidth: 2,
    };
  }, [item, theme]);

  return (
    <Button
      radius="square"
      title={word}
      titleColor={item.status === PairStatus.correct ? 'black20' : 'black100'}
      titleVariant="doubleExtraLargeMedium"
      onPress={() => onPress(item)}
      key={word}
      style={[animatedStyles]}
      withAnimation={false}
    />
  );
});

export const PairColumn = React.memo(({ data, onPairSelection }: PairColumnProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.columnContainer}>
      {data.map(item => {
        return <PairColumnItem key={item.word} item={item} onPress={onPairSelection} />;
      })}
    </View>
  );
});

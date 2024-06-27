import React from 'react';

import { View, Button } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { usePairColumnAnimation } from '../animation/usePairColumnAnimation';
import { PairStatus } from '../constants';
import { PairColumnItemProps, PairColumnProps } from '../types';

const PairColumnItem = React.memo(({ item, onPress }: PairColumnItemProps) => {
  const { word } = item;
  const { isSelected, status } = item;
  const { animatedStyles, triggerColorChange } = usePairColumnAnimation({
    itemStatus: status,
    isSelected,
  });

  const handlePress = () => {
    onPress(item);
    triggerColorChange();
  };

  return (
    <Button
      radius="square"
      title={word}
      titleColor={item.status === PairStatus.correct ? 'black20' : 'black100'}
      titleVariant="doubleExtraLargeMedium"
      onPress={handlePress}
      key={word}
      style={[animatedStyles]}
      withAnimation={false}
    />
  );
});

export const PairColumn = React.memo(({ data, onPairSelection }: PairColumnProps) => {
  return (
    <View style={[S.flex.one, S.alignFlex.jSpaceEvenly]}>
      {data.map(item => {
        return <PairColumnItem key={item.word} item={item} onPress={onPairSelection} />;
      })}
    </View>
  );
});

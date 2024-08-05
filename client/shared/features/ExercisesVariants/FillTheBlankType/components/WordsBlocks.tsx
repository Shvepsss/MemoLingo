import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { WordBlocksProps } from '../types/index';

import { WordBlock } from './WordBlock';

export const WordsBlocks = ({ data, onSelectWord }: WordBlocksProps) => {
  return (
    <View style={[S.flex.wrap, S.flex.row, S.alignFlex.jCenter, S.spaceVertical.px5, S.gapAll.gx3]}>
      {data.map(word => (
        <WordBlock word={word} onSelectWord={onSelectWord} key={word.id} />
      ))}
    </View>
  );
};

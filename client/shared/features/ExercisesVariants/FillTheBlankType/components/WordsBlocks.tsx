import { View } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { WordBlocksProps } from '../types/index';

import { WordBlock } from './WordBlock';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    wordsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 5,
      paddingVertical: 10,
    },
  };
});

export const WordsBlocks = ({ data, onSelectWord }: WordBlocksProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.wordsContainer}>
      {data.map(word => (
        <WordBlock word={word} onSelectWord={onSelectWord} key={word.id} />
      ))}
    </View>
  );
};

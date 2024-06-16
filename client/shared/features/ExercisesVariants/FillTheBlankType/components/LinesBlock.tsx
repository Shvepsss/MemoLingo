import { View } from 'app/shared/components/ui/View';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { LinesBLockProps } from '../types';

import { WordBlock } from './WordBlock';

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    commonContainer: {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      gap: 23,
      columnGap: 20,
      alignItems: 'center',
      height: 140,
    },
    linesContainer: {
      position: 'absolute',
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    line: {
      width: '100%',
      borderBottomWidth: 1,
      height: 55,
      borderColor: theme.colors.black40,
    },
    topLine: {
      borderTopWidth: 1,
    },
  };
});
export const LinesBlock = ({ data, onSelectWord }: LinesBLockProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.commonContainer}>
      {data.map(word => (
        <WordBlock word={word} onSelectWord={onSelectWord} key={word.id} />
      ))}
      <View style={styles.linesContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

import { View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

import { LinesBLockProps } from '../types';

import { WordBlock } from './WordBlock';

const CONTAINER_HEIGHT = 140;
const LINE_HEIGHT = 55;

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    commonContainer: {
      height: CONTAINER_HEIGHT,
    },
    line: {
      height: LINE_HEIGHT,
      borderColor: theme.colors.black40,
    },
  };
});
export const LinesBlock = ({ data, onSelectWord }: LinesBLockProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View
      style={[
        S.flex.row,
        S.width.full,
        S.flex.wrap,
        S.alignFlex.aCenter,
        S.gapColumn.gx10,
        styles.commonContainer,
      ]}
    >
      {data.map(word => (
        <WordBlock word={word} onSelectWord={onSelectWord} key={word.id} />
      ))}
      <View style={[S.position.absolute, S.width.full, S.flex.wrap, S.flex.row]}>
        <View style={[S.border.bWid1, S.width.full, styles.line]} />
        <View style={[S.border.bWid1, S.width.full, styles.line]} />
        <View style={[S.border.bWid1, S.width.full, styles.line]} />
      </View>
    </View>
  );
};

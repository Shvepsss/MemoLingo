import { View, Typography, TouchableOpacity } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

import { WordBlockProps } from '../types/index';

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    container: {
      borderColor: theme.colors.primary60,
    },
  };
});

export const WordBlock = ({ word, onSelectWord }: WordBlockProps) => {
  const styles = useDynamicStyles(dynamicStyles);

  return (
    <TouchableOpacity
      key={word.id}
      onPress={() => onSelectWord(word.id, word.text)}
      style={[
        S.border.wid1,
        S.zIndex.two,
        S.alignFlex.bothCenter,
        S.border.radx2Half,
        S.spaceHorizontal.px5,
        S.spaceVertical.px3,
        styles.container,
      ]}
    >
      <View style={[S.flex.row]}>
        <Typography variant="mediumTextRegular" color="black100">
          {word.text}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

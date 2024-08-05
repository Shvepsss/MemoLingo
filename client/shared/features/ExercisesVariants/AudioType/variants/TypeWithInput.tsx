import { View, TextInput, MascotteMessage } from 'app/shared/components/ui';
import { useTheme } from 'app/shared/hooks/styles';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

import { TypeWithInputProps } from '../types';

const MIN_HEIGTH_INPUT = 240;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    input: {
      minHeight: MIN_HEIGTH_INPUT,
      fontFamily: theme.fonts.doubleExtraLargeRegular.fontFamily,
      fontSize: theme.fonts.doubleExtraLargeRegular.fontSize,
      fontWeight: theme.fonts.doubleExtraLargeRegular.fontWeight,
    },
  };
});

export const TypeWithInput = ({ data, handleAnswerChoice, userAnswer }: TypeWithInputProps) => {
  const handleChange = (value: string) => {
    handleAnswerChoice(value);
  };

  const sentenceToPlay = data[0].audioExample;
  const theme = useTheme();
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={[S.flex.one, S.gapAll.gx10]}>
      <MascotteMessage mascotteVariant="audio" sizeVariant="regular" data={sentenceToPlay} />
      <TextInput
        value={userAnswer}
        onChangeText={handleChange}
        multiline={true}
        placeholder="Type here..."
        placeholderTextColor={theme.colors.black40}
        style={styles.input}
        outlineColor={theme.colors.primary60}
      />
    </View>
  );
};

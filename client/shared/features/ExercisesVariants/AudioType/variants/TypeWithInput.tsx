import React from 'react';

import { View, TextInput, MascotteMessage } from 'app/shared/components/ui/index';
import { useTheme } from 'app/shared/hooks/styles';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';

import { TypeWithInputProps } from '../types';

const MIN_HEIGTH_INPUT = 240;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    commonContainer: {
      flex: 1,
      gap: 20,
    },
    input: {
      minHeight: MIN_HEIGTH_INPUT,
      fontFamily: theme.fonts.doubleExtraLargeRegular.fontFamily,
      fontSize: theme.fonts.doubleExtraLargeRegular.fontSize,
      fontWeight: theme.fonts.doubleExtraLargeRegular.fontWeight,
    },
  };
});

export const TypeWithInput = ({ data, handleAnswerChoice }: TypeWithInputProps) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const handleChange = (value: string) => {
    setInputValue(value);
    handleAnswerChoice(value);
  };

  const sentenceToPlay = data[0].audioExample;
  const theme = useTheme();
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={styles.commonContainer}>
      <MascotteMessage mascotteVariant="audio" sizeVariant="regular" data={sentenceToPlay} />
      <TextInput
        value={inputValue}
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

import React from 'react';

import { TextInput, View, MascotteMessage } from 'app/shared/components/ui/index';
import { useTheme } from 'app/shared/hooks/styles';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { TranslateWithInputProps } from '../types';

const MIN_INPUT_HEIGHT = 260;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    container: {
      flex: 1,
      gap: 25,
    },
    input: {
      minHeight: MIN_INPUT_HEIGHT,
      fontFamily: theme.fonts.doubleExtraLargeRegular.fontFamily,
      fontSize: theme.fonts.doubleExtraLargeRegular.fontSize,
      fontWeight: theme.fonts.doubleExtraLargeRegular.fontWeight,
    },
  };
});

export const TranslateWithInput = ({ data, handleAnswer }: TranslateWithInputProps) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const sentenceToTranslate = data[0].example;
  const handleChange = (value: string) => {
    setInputValue(value);
    handleAnswer(value);
  };

  const theme = useTheme();
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={styles.container}>
      <MascotteMessage mascotteVariant="base" data={sentenceToTranslate} sizeVariant="regular" />
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

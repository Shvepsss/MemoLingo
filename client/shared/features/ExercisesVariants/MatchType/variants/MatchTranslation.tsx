import React from 'react';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { Typography, View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { ButtonOption } from '../components/ButtonOption';
import { MatchTranslationProps } from '../types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    container: {
      flex: 1,
      justifyContent: 'center',
      gap: 25,
    },
    wordContainer: {
      alignItems: 'center',
    },
    optionContainer: {
      gap: 10,
    },
  };
});

export const MatchTranslation = ({ words, handleChoice }: MatchTranslationProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const exerciseWords = words.slice(0, 3);
  const wordToSelecet = words[0].translation;
  const handleSelect = (word: clientWordType) => {
    setSelectedValue(word.original);
    handleChoice(word.original);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        <Typography variant="extraLargeRegular" color="black100">
          {capitalize(wordToSelecet)}
        </Typography>
      </View>
      <View style={styles.optionContainer}>
        {exerciseWords.map(word => (
          <ButtonOption
            title={word.original}
            word={word}
            key={word.id}
            selectedValue={selectedValue}
            setSelectedValue={handleSelect}
          />
        ))}
      </View>
    </View>
  );
};

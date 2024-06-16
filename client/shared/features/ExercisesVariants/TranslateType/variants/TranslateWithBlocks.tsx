import React from 'react';

import { MascotteMessage } from 'app/shared/components/ui/MascotteMessage';
import { View } from 'app/shared/components/ui/View';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { LinesBlock } from '../../FillTheBlankType/components/LinesBlock';
import { WordsBlocks } from '../../FillTheBlankType/components/WordsBlocks';
import { mixSentences } from '../../FillTheBlankType/utils/mixSentences';
import { TranslateWithBlocksProps } from '../types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    contentContainer: {
      flex: 1,
      gap: 10,
    },
    answerBlock: {
      flex: 1,
      gap: 20,
    },
  };
});

export const TranslateWithBlocks = ({ data, handleAnswer }: TranslateWithBlocksProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  const [selectedWords, setSelectedWords] = React.useState<{ id: string; text: string }[]>([]);
  const sentenceToTranslate = data[0].exampleTranslation;
  const wordsToSelect = mixSentences(data[0]);

  const handleSelectWord = (id: string, text: string) => {
    setSelectedWords(prevSelectedWords => {
      const isSelected = prevSelectedWords.some(item => item.id === id);
      const newSelectedWords = isSelected
        ? prevSelectedWords.filter(item => item.id !== id)
        : [...prevSelectedWords, { id, text }];
      const selectedSentence = newSelectedWords.map(item => item.text).join(' ');
      handleAnswer(selectedSentence);
      return newSelectedWords;
    });
  };

  const remainingWords = wordsToSelect.filter(
    word => !selectedWords.some(item => item.text === word.text),
  );

  return (
    <View style={styles.contentContainer}>
      <MascotteMessage mascotteVariant="base" data={sentenceToTranslate} sizeVariant="regular" />
      <View style={styles.answerBlock}>
        <LinesBlock data={selectedWords} onSelectWord={handleSelectWord} />
        <WordsBlocks data={remainingWords} onSelectWord={handleSelectWord} />
      </View>
    </View>
  );
};

import React from 'react';

import { MascotteMessage, View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { LinesBlock } from '../components/LinesBlock';
import { WordsBlocks } from '../components/WordsBlocks';
import { FillBlankAudioProps } from '../types';
import { mixSentences } from '../utils/mixSentences';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    container: {
      flex: 1,
      gap: 20,
    },
    answerContainer: {
      flex: 1,
      gap: 20,
    },
  };
});

export const AudioFillTheBlank = ({ data, handleAnswer }: FillBlankAudioProps) => {
  const [selectedWords, setSelectedWords] = React.useState<{ id: string; text: string }[]>([]);
  const wordsToSelect = mixSentences(data[0]);
  const styles = useDynamicStyles(dynamicStyles);

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
    <View style={styles.container}>
      <MascotteMessage mascotteVariant="audio" data={data[0].audioExample} sizeVariant="regular" />
      <View style={styles.answerContainer}>
        <LinesBlock data={selectedWords} onSelectWord={handleSelectWord} />
        <WordsBlocks data={remainingWords} onSelectWord={handleSelectWord} />
      </View>
    </View>
  );
};

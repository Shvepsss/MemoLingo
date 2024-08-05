import React from 'react';

import { MascotteMessage, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { LinesBlock } from '../components/LinesBlock';
import { WordsBlocks } from '../components/WordsBlocks';
import { FillBlankAudioProps } from '../types';
import { mixSentences } from '../utils/mixSentences';

export const AudioFillTheBlank = ({ data, handleAnswer }: FillBlankAudioProps) => {
  const [selectedWords, setSelectedWords] = React.useState<{ id: string; text: string }[]>([]);
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
    <View style={[S.flex.one, S.gapAll.gx10]}>
      <MascotteMessage mascotteVariant="audio" data={data[0].audioExample} sizeVariant="regular" />
      <View style={[S.flex.one, S.gapAll.gx10]}>
        <LinesBlock data={selectedWords} onSelectWord={handleSelectWord} />
        <WordsBlocks data={remainingWords} onSelectWord={handleSelectWord} />
      </View>
    </View>
  );
};

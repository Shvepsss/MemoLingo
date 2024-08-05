import React from 'react';

import { View, MascotteMessage } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { LinesBlock } from '../../FillTheBlankType/components/LinesBlock';
import { WordsBlocks } from '../../FillTheBlankType/components/WordsBlocks';
import { mixSentences } from '../../FillTheBlankType/utils/mixSentences';
import { TranslateWithBlocksProps } from '../types';

export const TranslateWithBlocks = ({ data, handleAnswer }: TranslateWithBlocksProps) => {
  const [selectedWords, setSelectedWords] = React.useState<{ id: string; text: string }[]>([]);
  const [wordsToSelect] = React.useState(mixSentences(data[0]));
  const sentenceToTranslate = data[0].exampleTranslation;

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
    <View style={[S.flex.one, S.gapAll.gx5]}>
      <MascotteMessage mascotteVariant="base" data={sentenceToTranslate} sizeVariant="regular" />
      <View style={[S.flex.one, S.gapAll.gx10]}>
        <LinesBlock data={selectedWords} onSelectWord={handleSelectWord} />
        <WordsBlocks data={remainingWords} onSelectWord={handleSelectWord} />
      </View>
    </View>
  );
};

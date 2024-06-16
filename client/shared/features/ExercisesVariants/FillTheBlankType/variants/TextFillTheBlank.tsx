import React from 'react';

import { View } from 'react-native';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { MascotteMessage } from 'app/shared/components/ui/MascotteMessage';
import * as S from 'app/shared/styles/@style-atoms';
import { mixArray } from 'app/shared/utils/data/mixArray';

import { ButtonOption } from '../../MatchType/components/ButtonOption';
import { FillTheBlankTextProps } from '../types';

export const TextFillTheBlank = React.memo(({ data, handleAnswer }: FillTheBlankTextProps) => {
  const [selectedButton, setSelectedButton] = React.useState<string>('');
  const exerciseWords = React.useMemo(() => mixArray(data.slice(0, 3)), [data]);
  const sentenceToFill = data[0].example;
  const wordToDelete = data[0].original;

  const modifiedSentence = React.useMemo(() => {
    return sentenceToFill.replace(new RegExp(wordToDelete, 'g'), '____');
  }, [sentenceToFill, wordToDelete]);

  const handleChoice = React.useCallback(
    (word: clientWordType) => {
      setSelectedButton(word.original);
      const filledSentence = modifiedSentence.replace('____', word.original);
      handleAnswer(filledSentence);
    },
    [modifiedSentence, handleAnswer],
  );

  return (
    <View style={S.flex.one}>
      <MascotteMessage mascotteVariant="question" data={modifiedSentence} sizeVariant="regular" />
      <View style={S.gapAll.gx5}>
        {exerciseWords.map(word => (
          <ButtonOption
            title={word.original}
            word={word}
            selectedValue={selectedButton}
            setSelectedValue={handleChoice}
            key={word.original}
          />
        ))}
      </View>
    </View>
  );
});

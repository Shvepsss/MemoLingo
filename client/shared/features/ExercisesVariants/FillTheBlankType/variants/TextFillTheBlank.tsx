import React from 'react';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { MascotteMessage, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';
import { mixArray } from 'app/shared/utils/data/mixArray';

import { ButtonOption } from '../../MatchType/components/ButtonOption';
import { FillTheBlankTextProps } from '../types';

export const TextFillTheBlank = React.memo(({ data, handleAnswer }: FillTheBlankTextProps) => {
  const [exerciseWords] = React.useState(mixArray(data));
  const underscore = '____';
  const [selectedButton, setSelectedButton] = React.useState<string | null>(null);
  const sentenceToFill = data[0].example;
  const wordToDelete = data[0].original;

  // Long underscore is used here to show blank space instead of word that should be selected to fill the sentence
  const modifiedSentence = React.useMemo(() => {
    return sentenceToFill.replace(new RegExp(wordToDelete, 'g'), underscore);
  }, [sentenceToFill, wordToDelete]);

  const handleChoice = React.useCallback(
    (word: clientWordType) => {
      setSelectedButton(word.original);
      const filledSentence = modifiedSentence.replace(underscore, word.original);
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

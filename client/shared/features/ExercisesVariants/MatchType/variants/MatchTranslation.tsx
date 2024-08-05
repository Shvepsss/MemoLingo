import React from 'react';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { Typography, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { ButtonOption } from '../components/ButtonOption';
import { MatchTranslationProps } from '../types';

export const MatchTranslation = ({ words, handleChoice }: MatchTranslationProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
  const wordToSelecet = words[0].translation;
  const handleSelect = (word: clientWordType) => {
    setSelectedValue(word.original);
    handleChoice(word.original);
  };

  return (
    <View style={[S.flex.one, S.alignFlex.jCenter, S.gapAll.gx14]}>
      <View style={[S.alignFlex.aCenter]}>
        <Typography variant="extraLargeRegular" color="black100">
          {capitalize(wordToSelecet)}
        </Typography>
      </View>
      <View style={[S.gapAll.gx5]}>
        {words.map(word => (
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

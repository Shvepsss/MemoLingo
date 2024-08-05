import React from 'react';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { View, MascotteMessage, VectorIcon, IconLocal } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';
import { mixArray } from 'app/shared/utils/data/mixArray';

import { ButtonOption } from '../../MatchType/components/ButtonOption';
import { ChooseOptionProps } from '../types';

const ICON_SIZE = 30;
const EQUILIZIER_SIZE = 100;
const BUTTON_SIZE = 200;

export const ChooseOption = ({ data, handleAnswerChoice, handlePlayer }: ChooseOptionProps) => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [audioExercises] = React.useState(mixArray(data));
  const sentenceToPlay = data[1].audioMeaning;

  const handleChoice = React.useCallback(
    (word: clientWordType) => {
      handlePlayer(word.audio);
      setSelectedOption(word.original);
      handleAnswerChoice(word.original);
    },
    [handleAnswerChoice, handlePlayer],
  );
  return (
    <View style={[S.flex.one, S.gapAll.gx15]}>
      <MascotteMessage mascotteVariant="audio" data={sentenceToPlay} sizeVariant="regular" />
      <View style={[S.flex.one, S.gapAll.gx15, S.alignFlex.aCenter]}>
        {audioExercises.map(word => (
          <ButtonOption
            word={word}
            key={word.id}
            setSelectedValue={handleChoice}
            selectedValue={selectedOption}
            left={<VectorIcon iconName="audio" color="primary60" size={ICON_SIZE} />}
            right={<IconLocal icon="equilizer" size={EQUILIZIER_SIZE} />}
            style={{ width: BUTTON_SIZE }}
          />
        ))}
      </View>
    </View>
  );
};

import React from 'react';

import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { View, MascotteMessage, VectorIcon, IconLocal } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import { mixArray } from 'app/shared/utils/data/mixArray';

import { ButtonOption } from '../../MatchType/components/ButtonOption';
import { ChooseOptionProps } from '../types';

const dynamicStylesInput = getDynamicStylesInput(() => {
  return {
    commonContainer: {
      flex: 1,
      gap: 30,
    },
    buttonsContainer: {
      alignItems: 'center',
      gap: 30,
      flex: 1,
    },
  };
});
const ICON_SIZE = 30;

export const ChooseOption = ({ data, handleAnswerChoice, handlePlayer }: ChooseOptionProps) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');
  const sentenceToPlay = data[1].audioMeaning;
  const audioExercises = React.useMemo(() => mixArray(data.slice(0, 2)), [data]);
  const styles = useDynamicStyles(dynamicStylesInput);

  const handleChoice = React.useCallback(
    (word: clientWordType) => {
      handlePlayer(word.audio);
      console.log(word.original);
      setSelectedOption(word.original);
      handleAnswerChoice(word.original);
    },
    [handleAnswerChoice, handlePlayer],
  );
  return (
    <View style={styles.commonContainer}>
      <MascotteMessage mascotteVariant="audio" data={sentenceToPlay} sizeVariant="regular" />
      <View style={styles.buttonsContainer}>
        {audioExercises.map((word: clientWordType) => (
          <ButtonOption
            word={word}
            key={word.id}
            setSelectedValue={handleChoice}
            selectedValue={selectedOption}
            left={<VectorIcon iconName="audio" color="primary60" size={ICON_SIZE} />}
            right={<IconLocal icon="equilizer" size={100} />}
            style={{ width: '60%' }}
          />
        ))}
      </View>
    </View>
  );
};

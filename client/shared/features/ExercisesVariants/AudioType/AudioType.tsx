import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui';
import { useAudioPlayer } from 'app/shared/hooks/player/useAudioPlayer';
import * as S from 'app/shared/styles/@style-atoms';

import { EXERCISE_VARIANTS } from '../../exerciseCreator/constants';

import { AudioTypeProps } from './types';
import { TypeWithInput, ChooseOption } from './variants';

export const AudioType = ({ type, data }: AudioTypeProps) => {
  const { handleAnswerChoice, userAnswer } = useLessonContext();
  const { handlePlayPause } = useAudioPlayer();
  return (
    <View style={S.flex.one}>
      {type === EXERCISE_VARIANTS.typeContent ? (
        <TypeWithInput
          data={data}
          handleAnswerChoice={handleAnswerChoice}
          userAnswer={userAnswer}
        />
      ) : (
        <ChooseOption
          data={data}
          handleAnswerChoice={handleAnswerChoice}
          handlePlayer={handlePlayPause}
        />
      )}
    </View>
  );
};

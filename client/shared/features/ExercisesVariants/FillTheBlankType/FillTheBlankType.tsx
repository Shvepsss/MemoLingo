import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { EXERCISE_VARIANTS } from '../../exerciseCreator/constants';

import { FillTheBlankProps } from './types';
import { AudioFillTheBlank, TextFillTheBlank } from './variants';

export const FillTheBlankType = ({ type, data }: FillTheBlankProps) => {
  const { handleAnswerChoice } = useLessonContext();

  return (
    <View style={[S.flex.one, S.gapAll.gx5]}>
      {type === EXERCISE_VARIANTS.audio ? (
        <AudioFillTheBlank data={data} handleAnswer={handleAnswerChoice} />
      ) : (
        <TextFillTheBlank data={data} handleAnswer={handleAnswerChoice} />
      )}
    </View>
  );
};

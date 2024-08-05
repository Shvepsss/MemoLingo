import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { EXERCISE_VARIANTS } from '../../exerciseCreator/constants';

import { TranslateSentenceProps } from './types';
import { TranslateWithBlocks } from './variants/TranslateWithBlocks';
import { TranslateWithInput } from './variants/TranslateWithInput';

export const TransalateType = ({ data, type }: TranslateSentenceProps) => {
  const { handleAnswerChoice } = useLessonContext();

  return (
    <View style={[S.flex.one, S.gapAll.gx5]}>
      {type === EXERCISE_VARIANTS.wordBlocks ? (
        <TranslateWithBlocks data={data} handleAnswer={handleAnswerChoice} />
      ) : (
        <TranslateWithInput data={data} handleAnswer={handleAnswerChoice} />
      )}
    </View>
  );
};

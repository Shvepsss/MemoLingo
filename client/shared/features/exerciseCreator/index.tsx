import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { ExerciseContent } from './ExerciseContent';
import { ExerciseText } from './ExerciseText';
import { ExerciseTypes, ExerciseComponentProps } from './types';

export const ExerciseCreator = <T extends ExerciseTypes>({
  exerciseType,
  variant,
  data,
}: ExerciseComponentProps<T>) => {
  return (
    <View style={[S.flex.one, S.gapAll.gx7]}>
      <ExerciseText exerciseType={exerciseType} variant={variant} />
      <ExerciseContent exerciseType={exerciseType} variant={variant} data={data} />
    </View>
  );
};

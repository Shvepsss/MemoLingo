import { Typography } from 'app/shared/components/ui';

import { EXERCISE_TEXT } from './constants';
import { ExerciseTypes, ExerciseTextProps } from './types';

export const ExerciseText = <T extends ExerciseTypes>({
  exerciseType,
  variant,
}: ExerciseTextProps<T>) => {
  const item = EXERCISE_TEXT[exerciseType][variant];
  if (!item) {
    return null;
  }

  return (
    <Typography variant="doubleExtraLargeMedium" color="black100">
      {item}
    </Typography>
  );
};

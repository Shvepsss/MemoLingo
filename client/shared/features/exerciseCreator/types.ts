import { clientWordType } from 'app/features/lesson/pages/Lesson/types';

import { EXERCISE_TYPES, EXERCISE_VARIANTS, EXERCISE_CONFIG } from './constants';

export type ExerciseTypes = keyof typeof EXERCISE_TYPES;

export type ExerciseVariants = keyof typeof EXERCISE_VARIANTS;

type ExerciseConfig = typeof EXERCISE_CONFIG;

export type ExerciseTextType = {
  [type in ExerciseTypes]: {
    [variant in ExerciseConfig[type][number]]: string;
  };
};

export type ExerciseComponentProps<T extends ExerciseTypes> = {
  exerciseType: T;
  variant: ExerciseConfig[T][number];
  data: clientWordType[];
};

export type ExerciseTextProps<T extends ExerciseTypes> = Pick<
  ExerciseComponentProps<T>,
  'exerciseType' | 'variant'
>;

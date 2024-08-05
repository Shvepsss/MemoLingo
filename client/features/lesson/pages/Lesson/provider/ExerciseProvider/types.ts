import { EXERCISE_TYPES, EXERCISE_VARIANTS } from 'app/shared/features/exerciseCreator/constants';
import { ExerciseTypes, ExerciseVariants } from 'app/shared/features/exerciseCreator/types';

import { ExerciseItem } from '../LessonProvider/types';

export type ExerciseContextType = {
  userAnswer: string | null;
  handleAnswerChoice: (answer: any) => void;
  handleAnswerSubmit: () => void;
  step: ExerciseItem | undefined;
};

type Requirement = {
  wordsCount: number;
};

export const EXERCISE_VARIANT_REQUIREMENTS = {
  [EXERCISE_TYPES.match]: {
    [EXERCISE_VARIANTS.translation]: { wordsCount: 4 },
    [EXERCISE_VARIANTS.image]: { wordsCount: 4 },
    [EXERCISE_VARIANTS.audio]: { wordsCount: 4 },
  },
  [EXERCISE_TYPES.fillInBlank]: {
    [EXERCISE_VARIANTS.block]: { wordsCount: 4 },
    [EXERCISE_VARIANTS.audio]: { wordsCount: 1 },
  },
  [EXERCISE_TYPES.translate]: {
    [EXERCISE_VARIANTS.wordBlocks]: { wordsCount: 1 },
    [EXERCISE_VARIANTS.input]: { wordsCount: 1 },
  },
  [EXERCISE_TYPES.audio]: {
    [EXERCISE_VARIANTS.typeContent]: { wordsCount: 1 },
    [EXERCISE_VARIANTS.chooseBetween]: { wordsCount: 2 },
  },
} as Record<ExerciseTypes, Record<ExerciseVariants, Requirement>>;

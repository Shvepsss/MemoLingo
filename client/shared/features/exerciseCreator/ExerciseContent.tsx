import {
  MatchType,
  AudioType,
  TransalateType,
  FillTheBlankType,
} from 'app/shared/features/ExercisesVariants';

import { EXERCISE_TYPES, EXERCISE_VARIANTS } from './constants';
import { ExerciseComponentProps, ExerciseTypes } from './types';

export const ExerciseContent = <T extends ExerciseTypes>({
  variant,
  exerciseType,
  data,
}: ExerciseComponentProps<T>) => {
  switch (exerciseType) {
    case EXERCISE_TYPES.match:
      switch (variant) {
        case EXERCISE_VARIANTS.translation:
          return <MatchType data={data} type={variant} />;
        case EXERCISE_VARIANTS.image:
          return <MatchType data={data} type={variant} />;
        case EXERCISE_VARIANTS.audio:
          return <MatchType data={data} type={variant} />;
        case EXERCISE_VARIANTS.pairs:
          return <MatchType data={data} type={variant} />;
        default:
          return '';
      }
    case EXERCISE_TYPES.fillInBlank:
      switch (variant) {
        case EXERCISE_VARIANTS.block:
          return <FillTheBlankType type={variant} data={data} />;
        case EXERCISE_VARIANTS.audio:
          return <FillTheBlankType type={variant} data={data} />;
        default:
          return '';
      }
    case EXERCISE_TYPES.translate:
      switch (variant) {
        case EXERCISE_VARIANTS.wordBlocks:
          return <TransalateType data={data} type={variant} />;
        case EXERCISE_VARIANTS.input:
          return <TransalateType data={data} type={variant} />;
        default:
          return '';
      }
    case EXERCISE_TYPES.audio:
      switch (variant) {
        case EXERCISE_VARIANTS.typeContent:
          return <AudioType type={variant} data={data} />;
        case EXERCISE_VARIANTS.chooseBetween:
          return <AudioType type={variant} data={data} />;
        default:
          return '';
      }

    default:
      return '';
  }
};

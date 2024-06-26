import { EXERCISE_TYPES, EXERCISE_VARIANTS } from 'app/shared/features/exerciseCreator/constants';

import { ClientWordType } from '../types';

export const getAnswerGenerator = (
  exerciseType: keyof typeof EXERCISE_TYPES,
  variant: keyof typeof EXERCISE_VARIANTS,
  data: ClientWordType[],
) => {
  switch (exerciseType) {
    case EXERCISE_TYPES.match:
      switch (variant) {
        case EXERCISE_VARIANTS.translation:
          return data[0].original;
        case EXERCISE_VARIANTS.image:
          return data[1].original;
        case EXERCISE_VARIANTS.audio:
          return data[2].original;
        default:
          return null;
      }
    case EXERCISE_TYPES.audio:
      switch (variant) {
        case EXERCISE_VARIANTS.typeContent:
          return data[0].example;
        case EXERCISE_VARIANTS.chooseBetween:
          return data[1].original;
        default:
          return null;
      }
    case EXERCISE_TYPES.fillInBlank:
      switch (variant) {
        case EXERCISE_VARIANTS.block:
          return data[0].example;
        case EXERCISE_VARIANTS.audio:
          return data[0].example;
        default:
          return null;
      }
    case EXERCISE_TYPES.translate:
      switch (variant) {
        case EXERCISE_VARIANTS.wordBlocks:
          return data[0].example;
        case EXERCISE_VARIANTS.input:
          return data[0].exampleTranslation;
        default:
          return null;
      }

    default:
      return null;
  }
};

import { EXERCISE_TYPES, EXERCISE_VARIANTS } from 'app/shared/features/exerciseCreator/constants';

const GROUPS = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

export const LEVELS = {
  beginner: [GROUPS.A1, GROUPS.A2],
  intermediate: [GROUPS.B1, GROUPS.B2],
  advanced: [GROUPS.C1, GROUPS.C2],
};

export type Level = keyof typeof LEVELS;

export const WORD_EXERCISE_CONFIG = {
  [EXERCISE_TYPES.match]: [
    { variant: EXERCISE_VARIANTS.translation, wordIndex: [0, 4, 8, 9] },
    { variant: EXERCISE_VARIANTS.image, wordIndex: [1, 5, 9, 3] },
    { variant: EXERCISE_VARIANTS.audio, wordIndex: [2, 6, 1, 8] },
    { variant: EXERCISE_VARIANTS.pairs, wordIndex: [3, 7, 5, 1, 9] },
  ],
  [EXERCISE_TYPES.audio]: [
    { variant: EXERCISE_VARIANTS.typeContent, wordIndex: [0] },
    { variant: EXERCISE_VARIANTS.chooseBetween, wordIndex: [4, 7] },
  ],
  [EXERCISE_TYPES.fillInBlank]: [
    { variant: EXERCISE_VARIANTS.block, wordIndex: [2, 8, 4, 1] },
    { variant: EXERCISE_VARIANTS.audio, wordIndex: [6] },
  ],
  [EXERCISE_TYPES.translate]: [
    { variant: EXERCISE_VARIANTS.wordBlocks, wordIndex: [5] },
    { variant: EXERCISE_VARIANTS.input, wordIndex: [3] },
  ],
};

import { EXERCISE_CONFIG } from 'app/shared/features/exerciseCreator/constants';

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

export const WORD_EXERCISE_CONFIG = EXERCISE_CONFIG;

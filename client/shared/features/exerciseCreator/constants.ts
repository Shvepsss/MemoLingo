import { type ExerciseTextType } from './types';

export const EXERCISE_TYPES = {
  match: 'match',
  fillInBlank: 'fillInBlank',
  translate: 'translate',
  audio: 'audio',
} as const;

export const EXERCISE_VARIANTS = {
  translation: 'translation',
  image: 'image',
  audio: 'audio',
  pairs: 'pairs',
  block: 'block',
  wordBlocks: 'wordBlocks',
  input: 'input',
  typeContent: 'typeContent',
  chooseBetween: 'chooseBetween',
} as const;

export const EXERCISE_CONFIG = {
  [EXERCISE_TYPES.match]: [
    EXERCISE_VARIANTS.translation,
    EXERCISE_VARIANTS.image,
    EXERCISE_VARIANTS.audio,
    EXERCISE_VARIANTS.pairs,
  ],
  [EXERCISE_TYPES.fillInBlank]: [EXERCISE_VARIANTS.block, EXERCISE_VARIANTS.audio],
  [EXERCISE_TYPES.translate]: [EXERCISE_VARIANTS.wordBlocks, EXERCISE_VARIANTS.input],
  [EXERCISE_TYPES.audio]: [EXERCISE_VARIANTS.typeContent, EXERCISE_VARIANTS.chooseBetween],
};

export const EXERCISE_TEXT: ExerciseTextType = {
  [EXERCISE_TYPES.match]: {
    [EXERCISE_VARIANTS.translation]: 'How do you say',
    [EXERCISE_VARIANTS.image]: 'Which one of this is',
    [EXERCISE_VARIANTS.audio]: 'What do you hear?',
    [EXERCISE_VARIANTS.pairs]: 'Tap the matching pairs',
  },
  [EXERCISE_TYPES.fillInBlank]: {
    [EXERCISE_VARIANTS.block]: 'Fill in the blank',
    [EXERCISE_VARIANTS.audio]: 'Fill in the blank',
  },
  [EXERCISE_TYPES.translate]: {
    [EXERCISE_VARIANTS.wordBlocks]: 'Translate the sentence',
    [EXERCISE_VARIANTS.input]: 'Translate the sentence',
  },
  [EXERCISE_TYPES.audio]: {
    [EXERCISE_VARIANTS.typeContent]: 'Type what did you hear',
    [EXERCISE_VARIANTS.chooseBetween]: 'Choose right option',
  },
};

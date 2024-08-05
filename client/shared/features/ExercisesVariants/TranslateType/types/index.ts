import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { EXERCISE_CONFIG, EXERCISE_TYPES } from 'app/shared/features/exerciseCreator/constants';

export type TranslateSentenceProps = {
  type: (typeof EXERCISE_CONFIG)[typeof EXERCISE_TYPES.translate][number];
  data: clientWordType[];
};
export type TranslateWithBlocksProps = Pick<TranslateSentenceProps, 'data'> & {
  handleAnswer: (answer: string) => void;
};
export type TranslateWithInputProps = Pick<TranslateSentenceProps, 'data'> & {
  handleAnswer: (answer: string) => void;
};

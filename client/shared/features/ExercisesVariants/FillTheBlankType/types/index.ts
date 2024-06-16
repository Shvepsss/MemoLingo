import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { EXERCISE_CONFIG, EXERCISE_TYPES } from 'app/shared/features/exerciseCreator/constants';

export type Word = {
  text: string;
};
export type FillTheBlankProps = {
  type: (typeof EXERCISE_CONFIG)[typeof EXERCISE_TYPES.fillInBlank][number];
  data: clientWordType[];
};

export type FillBlankAudioProps = Pick<FillTheBlankProps, 'data'> & {
  handleAnswer: (answer: string) => void;
};
export type FillTheBlankTextProps = Pick<FillTheBlankProps, 'data'> & {
  handleAnswer: (answer: string) => void;
};

export type WordBlocksProps = {
  data: { id: string; text: string }[];
  onSelectWord: (id: string, word: string) => void;
};
export type WordBlockProps = {
  word: { id: string; text: string };
  onSelectWord: (id: string, text: string) => void;
};

export type LinesBLockProps = Pick<WordBlocksProps, 'onSelectWord' | 'data'>;

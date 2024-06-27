import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { EXERCISE_CONFIG, EXERCISE_TYPES } from 'app/shared/features/exerciseCreator/constants';

export type AudioTypeProps = {
  type: (typeof EXERCISE_CONFIG)[typeof EXERCISE_TYPES.audio][number];
  data: clientWordType[];
};
export type TypeWithInputProps = Pick<AudioTypeProps, 'data'> & {
  handleAnswerChoice: (answer: string) => void;
  userAnswer: string | undefined;
};
export type ChooseOptionProps = Pick<AudioTypeProps, 'data'> & {
  handleAnswerChoice: (answer: string) => void;
  handlePlayer: (audioUrl: string) => void;
};

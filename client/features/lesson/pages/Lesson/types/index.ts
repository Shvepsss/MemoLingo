import { EXERCISE_TYPES, EXERCISE_VARIANTS } from 'app/shared/features/exerciseCreator/constants';

import { Level } from '../provider/LessonProvider/constants';

export type serverWordType = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};
export type clientWordType = Pick<serverWordType, 'id' | 'image' | 'audio'> & {
  original: string;
  translation: string;
  example: string;
  meaning: string;
  audioExample: string;
  audioMeaning: string;
  exampleTranslation: string;
  meaningTransaltion: string;
};

export type WordsRequestProps = {
  level: Level;
};

export type ImageRequestProps = {
  fileEndpoint: string;
};
export type Exercise = {
  type: keyof typeof EXERCISE_TYPES;
  variant: keyof typeof EXERCISE_VARIANTS;
  data: clientWordType[];
  answer: string;
};

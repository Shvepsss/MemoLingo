import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { EXERCISE_CONFIG, EXERCISE_TYPES } from 'app/shared/features/exerciseCreator/constants';

import { PairStatus } from '../constants';

export type CardProps = {
  id: string;
  text: string;
  image?: string;
  type: keyof typeof CARD_TYPE;
  onPress: (id: any, text: any) => void;
  isSelected: boolean;
};

export const CARD_TYPE = {
  image: 'image',
  text: 'text',
} as const;

export type MatchTranslationProps = {
  words: clientWordType[];
  handleChoice: (answer: string) => void;
};
export type MatchCardProps = Pick<CardProps, 'type'> & {
  words: clientWordType[];
  handleChoice: (answer: string) => void;
};

export type WordForMatch = Pick<clientWordType, 'original' | 'translation'>;
export type MatchingPairsProps = {
  data: WordForMatch[];
  handleChoice: ({ word, status }: MacthAnswerProps) => void;
};
export type MacthAnswerProps = {
  word: string;
  status: string;
};

export enum SelectionTypes {
  original,
  translation,
}

export type MatchTypeProps = {
  data: clientWordType[];
  type: (typeof EXERCISE_CONFIG)[typeof EXERCISE_TYPES.match][number];
};
export type PairColumnItem = {
  word: string;
  pair: string;
  status: PairStatus;
  isSelected: boolean;
};
export type PairColumnProps = {
  data: PairColumnItem[];
  onPairSelection: (item: PairColumnItem) => void;
};

export type PairColumnItemProps = {
  item: PairColumnItem;
  onPress: (item: PairColumnItem) => any;
};

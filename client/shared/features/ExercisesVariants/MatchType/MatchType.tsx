import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';

import { EXERCISE_VARIANTS } from '../../exerciseCreator/constants';

import { CARD_TYPE, MatchTypeProps } from './types';
import { MatchCard } from './variants/MatchCard';
import { MatchingPairs } from './variants/MatchingPairs';
import { MatchTranslation } from './variants/MatchTranslation';

export const MatchType = ({ data, type }: MatchTypeProps) => {
  const { handleAnswerChoice } = useLessonContext();
  switch (type) {
    case EXERCISE_VARIANTS.pairs:
      return <MatchingPairs data={data} handleChoice={handleAnswerChoice} />;
    case EXERCISE_VARIANTS.image:
      return <MatchCard words={data} type={CARD_TYPE.image} handleChoice={handleAnswerChoice} />;
    case EXERCISE_VARIANTS.audio:
      return <MatchCard words={data} type={CARD_TYPE.text} handleChoice={handleAnswerChoice} />;
    case EXERCISE_VARIANTS.translation:
      return <MatchTranslation words={data} handleChoice={handleAnswerChoice} />;
    default:
      return null;
  }
};

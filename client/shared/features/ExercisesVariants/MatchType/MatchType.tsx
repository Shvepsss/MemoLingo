import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';

import { MatchTypeProps } from './types';
import { MatchCard } from './variants/MatchCard';
import { MatchingPairs } from './variants/MatchingPairs';
import { MatchTranslation } from './variants/MatchTranslation';

export const MatchType = ({ data, type }: MatchTypeProps) => {
  const { handleAnswerChoice } = useLessonContext();
  switch (type) {
    case 'pairs':
      return <MatchingPairs data={data} handleChoice={handleAnswerChoice} />;
    case 'image':
      return <MatchCard words={data} type="image" handleChoice={handleAnswerChoice} />;
    case 'audio':
      return <MatchCard words={data} type="text" handleChoice={handleAnswerChoice} />;
    case 'translation':
      return <MatchTranslation words={data} handleChoice={handleAnswerChoice} />;
    default:
      return null;
  }
};

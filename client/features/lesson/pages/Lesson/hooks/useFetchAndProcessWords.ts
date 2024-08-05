import { useFetchWords } from 'app/features/lesson/pages/Lesson/hooks/useFetchWords';

import { Level } from '../provider/LessonProvider/types';
import { processWord } from '../utils/processWord';
import { selectRandomElements } from '../utils/selectRandomElements';

const wordsCount = 10;

export const useFetchAndProcessWords = () => {
  const { sendRequest, isLoading } = useFetchWords();

  const fetchAndProcessWords = async (level: Level) => {
    try {
      const words = await sendRequest({ level });
      if (words) {
        const selectedWords = selectRandomElements({ array: words, count: wordsCount });
        const processedWordsPromises = selectedWords.map(word => processWord(word));
        const processedWords = await Promise.all(processedWordsPromises);

        return processedWords;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchAndProcessWords, isLoading };
};

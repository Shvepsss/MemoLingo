import { useFetchFunction } from 'app/shared/hooks/fetcher/useFetchFunction';

import { LEVELS } from '../provider/LessonProvider/constants';
import { WordsRequestProps, serverWordType } from '../types';

import { useGetUserWords } from './useGetUserWords';

export const useFetchWords = () => {
  const { fetchApi, credentials } = useFetchFunction();
  const { checkUserWords } = useGetUserWords();

  const sendRequest = async ({ level }: WordsRequestProps) => {
    const groups = LEVELS[level];
    const group = Math.floor(Math.random() * groups.length);
    const page = Math.floor(Math.random() * 30) + 1;
    try {
      const createResponse = await fetchApi<serverWordType[]>(
        `/words?page=${page}&group=${group}`,
        {
          method: 'GET',
        },
      );
      const serverData = createResponse;
      const wordIds = serverData.map(word => word.id);

      if (credentials.userId) {
        const userWords = await checkUserWords(credentials.userId, wordIds);
        console.log(userWords);
      }

      const clientData = serverData.map(word => ({
        id: word.id,
        original: word.word,
        translation: word.wordTranslate,
        image: word.image,
        audio: word.audio,
        example: word.textExample,
        meaning: word.textMeaning,
        audioExample: word.audioExample,
        audioMeaning: word.audioMeaning,
        exampleTranslation: word.textExampleTranslate,
        meaningTransaltion: word.textMeaningTranslate,
      }));
      return clientData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { sendRequest };
};

import { API_URL } from 'app/shared/constants/url';
import { useFetchFunction } from 'app/shared/hooks/fetcher/useFetchFunction';
import { getDynamicApiUrl } from 'app/shared/utils/api/getDynamicApiUrl';

import { LEVELS } from '../provider/LessonProvider/constants';
import { WordsRequestProps } from '../provider/LessonProvider/types';
import { ServerWordType } from '../types';

import { useGetUserWords } from './useGetUserWords';

export const useFetchWords = () => {
  const { fetchApi, credentials, isLoading } = useFetchFunction();
  const { checkUserWords } = useGetUserWords();

  const sendRequest = async ({ level }: WordsRequestProps) => {
    const groups = LEVELS[level];
    const group = Math.floor(Math.random() * groups.length);
    const page = Math.floor(Math.random() * 30) + 1;
    const params = {
      page,
      group,
    };
    try {
      const createResponse = await fetchApi<ServerWordType[]>(
        getDynamicApiUrl({ base: API_URL.words, params }),
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

  return { sendRequest, isLoading };
};

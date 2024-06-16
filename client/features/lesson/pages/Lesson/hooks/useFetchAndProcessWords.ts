import { Level } from '../provider/LessonProvider/constants';
import { selectRandomElements } from '../utils/selectRandomElements';

import { useFetchWordImage, useFetchAudio, useFetchWords } from './index';

export const useFetchAndProcessWords = () => {
  const { sendRequest } = useFetchWords();
  const { sendAudioRequest } = useFetchAudio();
  const { sendImageRequest } = useFetchWordImage();
  const fetchAndProcessWords = async (level: Level) => {
    try {
      const words = await sendRequest({ level });
      if (words) {
        const selectedWords = selectRandomElements({ array: words, count: 10 });

        const processedWords = await Promise.all(
          selectedWords.map(async word => ({
            ...word,
            audio: await sendAudioRequest({ fileEndpoint: word.audio }),
            audioExample: await sendAudioRequest({ fileEndpoint: word.audioExample }),
            audioMeaning: await sendAudioRequest({ fileEndpoint: word.audioMeaning }),
            image: await sendImageRequest({ fileEndpoint: word.image }),
          })),
        );

        return processedWords;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchAndProcessWords };
};

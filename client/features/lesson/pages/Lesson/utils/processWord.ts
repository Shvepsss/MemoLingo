import { saveBase64AsFile } from 'app/shared/utils/audio/save64AsFile';

import { ClientWordType } from '../types';

import { base64ToDataURL } from './base64ToDataUrl';

export const processWord = async (word: ClientWordType) => {
  try {
    const { audio, audioExample, audioMeaning, image, ...rest } = word;
    const [audioUrl, audioExampleUrl, audioMeaningUrl, imageUrl] = await Promise.all([
      base64ToDataURL(audio, 'audio/mpeg'),
      base64ToDataURL(audioExample, 'audio/mpeg'),
      base64ToDataURL(audioMeaning, 'audio/mpeg'),
      base64ToDataURL(image, 'image/jpeg'),
    ]);

    const [audioPath, audioExamplePath, audioMeaningPath] = await Promise.all([
      saveBase64AsFile(`${rest.original}_audio`, audioUrl),
      saveBase64AsFile(`${rest.original}_example_audio`, audioExampleUrl),
      saveBase64AsFile(`${rest.original}_meaning_audio`, audioMeaningUrl),
    ]);

    return {
      ...rest,
      audio: audioPath,
      audioExample: audioExamplePath,
      audioMeaning: audioMeaningPath,
      image: imageUrl,
    };
  } catch (error) {
    console.error('Error processing word:', error);
    throw error;
  }
};

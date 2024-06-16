import { useFetchFunction } from 'app/shared/hooks/fetcher/useFetchFunction';
import { saveBase64AsFile } from 'app/shared/utils/audio/save64AsFile';

import { ImageRequestProps } from '../types';

export const useFetchAudio = () => {
  const { fetchApi } = useFetchFunction();

  const sendAudioRequest = async ({ fileEndpoint }: ImageRequestProps) => {
    try {
      const endpoint = `/${fileEndpoint}`;
      const createResponse = await fetchApi<any>(endpoint, {
        method: 'GET',
      });
      const audioBlob = await createResponse.blob();
      const audioUrl = await new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(audioBlob);
        fileReader.onload = () => {
          if (fileReader.result) {
            resolve(fileReader.result as string);
          } else {
            reject(new Error('Error reading the file'));
          }
        };
      });
      const audioId = fileEndpoint.slice(7, 20);
      const audioForPlayer = await saveBase64AsFile(audioId, audioUrl);
      return audioForPlayer;
    } catch (error) {
      console.error('Error fetching word audio:', error);
      throw error;
    }
  };

  return { sendAudioRequest };
};

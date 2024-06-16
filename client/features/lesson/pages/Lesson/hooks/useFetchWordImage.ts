import { useFetchFunction } from 'app/shared/hooks/fetcher/useFetchFunction';

import { ImageRequestProps } from '../types';

export const useFetchWordImage = () => {
  const { fetchApi } = useFetchFunction();

  const sendImageRequest = async ({ fileEndpoint }: ImageRequestProps) => {
    try {
      const endpoint = `/${fileEndpoint}`;

      const createResponse = await fetchApi<any>(endpoint, {
        method: 'GET',
      });
      const imageBlob = await createResponse.blob();
      const imageUrl = await new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageBlob);
        fileReader.onload = () => {
          if (fileReader.result) {
            resolve(fileReader.result as string);
          } else {
            reject(new Error('Error reading the file'));
          }
        };
      });

      return imageUrl;
    } catch (error) {
      console.error('Error fetching word image:', error);
    }
  };

  return { sendImageRequest };
};

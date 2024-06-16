import { useFetchFunction } from 'app/shared/hooks/fetcher/useFetchFunction';

export const useGetUserWords = () => {
  const { fetchApi } = useFetchFunction();

  const checkUserWords = async (userId: string, wordIds: string[]) => {
    try {
      const userWords = await fetchApi<any>(`/users/${userId}/words/check-words`, {
        method: 'POST',
        body: JSON.stringify({ wordIds }),
      });

      return userWords;
    } catch (error) {
      console.error('Error fetching userWords', error);
    }
  };

  return { checkUserWords };
};

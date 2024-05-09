import { BASE_API_URL } from 'app/env.json';

export const getApiUrl = (url: string) => {
  return BASE_API_URL + url;
};

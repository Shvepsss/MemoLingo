import { getApiUrl } from 'app/shared/utils/api/getApiUrl';

export const fetchApi = async <Response extends any>(url: string, fetchOptions: RequestInit) => {
  const data = await fetch(getApiUrl(url), {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  });

  if (data.status !== 200) {
    const json = (await data.json()) as { errorMessage?: string };
    throw new Error(json.errorMessage || 'Something went wrong.');
  }

  return data.json() as Response;
};

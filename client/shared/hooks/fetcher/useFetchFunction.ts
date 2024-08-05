import React from 'react';

import { useAuth } from '../providers/useAuth';

import { fetchApi as _fetchApi } from './fecthApi';

const getHeaders = (headers: RequestInit['headers'], token: string | undefined) => {
  const isAuthInHeaders = Object.keys(headers || {}).includes('Authorization');

  if (isAuthInHeaders || !token) {
    return headers;
  }

  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
};

export const useFetchFunction = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { credentials } = useAuth();
  const { token } = credentials;
  const fetchApi = React.useCallback(
    async <Response extends any>(url: string, fetchOptions?: RequestInit): Promise<Response> => {
      setIsLoading(true);
      return _fetchApi<Response>(url, {
        ...fetchOptions,
        headers: getHeaders(fetchOptions?.headers, token),
      }).finally(() => {
        setIsLoading(false);
      });
    },
    [token],
  );

  return { fetchApi, credentials, isLoading };
};

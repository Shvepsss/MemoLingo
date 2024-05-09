import React from 'react';

import { useAuth } from '../providers/useAuth';

import { fetchApi as _fetchApi } from './fecthApi';

export const useFetchFunction = () => {
  const { credentials } = useAuth();
  const { token } = credentials;
  const fetchApi = React.useCallback(
    async <Response extends any>(url: string, fetchOptions?: RequestInit): Promise<Response> => {
      const headers = token
        ? {
            ...fetchOptions?.headers,
            Authorization: `Bearer ${token}`,
          }
        : fetchOptions?.headers;

      return _fetchApi<Response>(url, { ...fetchOptions, headers });
    },
    [token],
  );

  return { fetchApi, credentials };
};

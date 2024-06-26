import React from 'react';

import { API_URL } from 'app/shared/constants/url';
import { fetchApi } from 'app/shared/hooks/fetcher/fecthApi';
import { useStorageData, useStorageUpdate } from 'app/shared/hooks/providers';

import { AuthCredentials } from './types';

const LOGIN_URL = API_URL.signIn;
const SIGN_UP_URL = API_URL.signUp;

export const useAuthLogic = () => {
  const { credentials } = useStorageData();
  const { updateStorage } = useStorageUpdate();

  const login = React.useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const body = {
        email,
        password,
      };

      const newCreds = await fetchApi<AuthCredentials>(LOGIN_URL, {
        body: JSON.stringify(body),
        method: 'POST',
      });
      if (!newCreds.token) {
        throw new Error('Failed to sign in');
      }

      updateStorage({
        type: '@auth/login',
        value: newCreds,
      });

      return newCreds;
    },
    [updateStorage],
  );

  const logout = React.useCallback(() => {
    updateStorage({ type: '@auth/logout' });
  }, [updateStorage]);

  const signUp = React.useCallback(
    async ({
      email,
      password,
      name,
      age,
    }: {
      email: string;
      password: string;
      name: string;
      age: string;
    }) => {
      const body = {
        email,
        password,
        name,
        age,
      };
      const newCreds = await fetchApi<AuthCredentials>(SIGN_UP_URL, {
        body: JSON.stringify(body),
        method: 'POST',
      });
      if (!newCreds.token) {
        throw new Error('Failed to sign up');
      }

      updateStorage({
        type: '@auth/login',
        value: newCreds,
      });

      return newCreds;
    },
    [updateStorage],
  );

  const returnData = React.useMemo(() => {
    return { logout, login, signUp, credentials };
  }, [credentials, login, logout, signUp]);

  return returnData;
};

export type AuthLogicResponse = ReturnType<typeof useAuthLogic>;

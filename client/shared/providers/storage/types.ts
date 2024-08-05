import { type AuthCredentials } from '../auth/types';

export type StorageContextType = {
  credentials: AuthCredentials;
};

export type StorageContextUpdateEvents =
  | {
      type: '@initial/restore';
      value: StorageContextType;
    }
  | {
      type: '@auth/login';
      value: AuthCredentials;
    }
  | {
      type: '@auth/logout';
      value?: undefined;
    };

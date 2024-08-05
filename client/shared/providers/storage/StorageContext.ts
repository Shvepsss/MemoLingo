import React from 'react';

import { type StorageContextType } from './types';

export const INITIAL_STORAGE_CONTEXT: StorageContextType = {
  credentials: { token: undefined, refreshToken: undefined, userId: undefined },
};

export const StorageContext = React.createContext<StorageContextType>(INITIAL_STORAGE_CONTEXT);

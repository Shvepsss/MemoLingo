import React from 'react';

import { STORAGE_KEY, storage } from './constants';
import { useStorageReducer } from './helpers/useStorageReducer';
import { StorageContext } from './StorageContext';
import { StorageContextUpdate } from './StorageContextUpdate';

export const StorageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, send] = useStorageReducer();

  // PRESERVE STATE
  React.useEffect(() => {
    storage.set(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <StorageContext.Provider value={state}>
      <StorageContextUpdate.Provider value={send}>{children}</StorageContextUpdate.Provider>
    </StorageContext.Provider>
  );
};

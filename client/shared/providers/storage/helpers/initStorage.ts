import { STORAGE_KEY, storage } from '../constants';
import { INITIAL_STORAGE_CONTEXT } from '../StorageContext';
import { type StorageContextType } from '../types';

export const initStorage = (): StorageContextType => {
  try {
    const store = storage.getString(STORAGE_KEY);

    if (store) {
      try {
        const parsedStore = JSON.parse(store) as StorageContextType;
        return {
          ...INITIAL_STORAGE_CONTEXT,
          ...parsedStore,
        };
      } catch (err) {
        return { ...INITIAL_STORAGE_CONTEXT };
      }
    }

    return { ...INITIAL_STORAGE_CONTEXT };
  } catch (e) {
    console.error(e);
  }

  return INITIAL_STORAGE_CONTEXT;
};

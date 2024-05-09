import React from 'react';

import { INITIAL_STORAGE_CONTEXT } from '../StorageContext';
import { type StorageContextType, type StorageContextUpdateEvents } from '../types';

import { initStorage } from './initStorage';

const reducer = (state: StorageContextType, event: StorageContextUpdateEvents) => {
  const newState = (function reduceEventToState(): StorageContextType {
    switch (event.type) {
      case '@auth/logout': {
        return {
          ...state,
          credentials: INITIAL_STORAGE_CONTEXT.credentials,
        };
      }
      case '@auth/login': {
        return {
          ...state,
          credentials: event.value,
        };
      }
      case '@initial/restore': {
        return { ...INITIAL_STORAGE_CONTEXT, ...event.value };
      }

      default:
        return state;
    }
  })();

  return newState;
};

const initData = initStorage();

export const useStorageReducer = () => {
  const reducerData = React.useReducer(reducer, initData);

  return reducerData;
};

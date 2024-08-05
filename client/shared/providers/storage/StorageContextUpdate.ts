import React from 'react';

import { type StorageContextUpdateEvents } from './types';

export const StorageContextUpdate = React.createContext<React.Dispatch<StorageContextUpdateEvents>>(
  () => console.error('Init the StorageContextUpdate` event dispatcher!'),
);

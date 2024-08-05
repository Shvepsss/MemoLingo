import React from 'react';

import { StorageContext, StorageContextUpdate } from 'app/shared/providers/storage';

export const useStorageData = () => {
  const data = React.useContext(StorageContext);

  return data;
};

export const useStorageUpdate = () => {
  const updateStorage = React.useContext(StorageContextUpdate);

  return { updateStorage };
};
